import './manager.css'
import React,{useState, useEffect} from 'react'
import imageTest from '../homePage/img/dog1.jpg'
import imageExit from '../homePage/img/exit.png'
import Modal from 'react-modal'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

  
  const Manager = ()=> {

    // ----test list----
    
        const PaymentDog =[
        {id: 1,
            Breed: 'บีเกิ้ล',
            Owner: 'คุณต้อม',
            Buyer: 'คุณทอม',
            Cost: '3500',
            imageDog: imageTest,
            NameCredit: 'รัตนศิริ พัฒนาวงศ์',
            Creditinfo: 'ธนาคารTNT xxxx-xxxx-xxxx-xxxx'},
        {id: 2,
            Breed: 'บีเกิ้ล',
            Owner: 'คุณทอม',
            Buyer: 'คุณต้อม',
            Cost: '6500',
            imageDog: imageTest,
            NameCredit: 'พัฒนา รัตนวาวงศ์',
            Creditinfo: 'ธนาคารTNT xxxx-xxxx-xxxx-xxxxffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddd'},
        {id: 3,
            Breed: 'ไม่ทราบ',
            Owner: 'คุณบริล',
            Buyer: 'คุณเอริ',
            Cost: '4500',
            imageDog: imageTest,
            NameCredit: 'ธนาศรี มณีทอง',
            Creditinfo: 'พร้อมเพย์ 089-999-9999'}
        ]
    

    const [problemThatReport,setproblemThatReport] =useState([
        {
            id:1,
            Topic: 'เนื้อหาไม่เหมาะสม',
            ProblemBy: 'คุณทอม',
            ReportBy: 'คุณต้อม',
            Problem: 'คุณทอมได้ให้รายละเอียดที่ไม่เกี่ยวข้องกับการขายสุนัขและใช้พื้นที่ขายสุนัขเป็นพื้นที่ขายโฆษณาตัวเอง'},
        {
            id:2,
            Topic: 'เนื้อหาไม่เหมาะสม',
            ProblemBy: 'คุณต้อม',
            ReportBy: 'คุณทอม',
            Problem: 'คุณต้อมได้ทำการแจ้งรายละเอียดเท็จ'
        }
    ])

    // ---end test---

    const [SliderPayment,SetSliderPayment] = useState(false)
    const [SliderProblem,SetSliderProblem] = useState(false)
    const [PaymentReportSlide,SetPaymentReportSlide] = useState('manager-barBlockSelect')
    const [ProblemReportSlide,SetProblemReportSlide] = useState('manager-barBlockSelect')
    const [IDChoose,SetIDChoose] = useState(null)
    
    const [detailPaymentID,SetdetailPaymentId] = useState({id: '',Breed: '',Owner: '',Buyer: '',Cost: '',imageDog: null})
    const [SlipPaymentPop,SetSlipPaymentPop] = useState(false)
    
    function ProblemReport(){
        const [problemListClass,setProblemListClass]=useState('problemListBox')
        const  ProblemList = problemThatReport.map(
            problemThatReport => <button className={problemListClass} onFocus={()=>{
                SetIDChoose(problemThatReport.id)}}>
                   
                <div>ปัญหา #{problemThatReport.id} {problemThatReport.Topic}</div>
                <div>รายงานปัญหาโดย {problemThatReport.ReportBy}</div>
                
            </button>
        )
        const Problemdetail = problemThatReport.map(problemThatReport => {
            if(problemThatReport.id == IDChoose){
                return <div>
                    <p className='problemTopicText'>หัวข้อปัญหา #{problemThatReport.id} {problemThatReport.Topic}</p>
                    <div className='problemReportRespone'>
                        <div className='problemImgDiv'><img className='problemprofile' src={imageTest}></img></div>
                        <p className='problemReportResponeText'>ปัญหาเกิดขึ้นโดย: {problemThatReport.ProblemBy}</p>
                        <p className='problemReportResponeText'>รายงานโดย: {problemThatReport.ReportBy}</p>
                    </div>
                    <p className='problemProblemText'>เกิดอะไรขึ้น</p>
                    <p>{problemThatReport.Problem}</p>
                </div>
            }
        })
        return (
        <div>
            <div className='problemReportPane'>
                <div className='problemListPane'><div>{ProblemList}</div></div>
                <div className='problemDetailPane'>{Problemdetail}</div>
            </div>
        </div>);
    }

    // ------------------------payment-------------------------

    
    function PaymentReport(){
        const ModalSlip = () => {
            return(
                <div className={'manager-modal-wrapper'}>
                    <div className={'manager-modal-backdrop'}/>
                    <div className={'manager-modal-box'}>
                        <div style={{display:'flex',flexDirection:'row-reverse'}}><img className='paymentpictureExit' src={imageExit} onClick={()=>{SetSlipPaymentPop(false)}}></img></div>
                        <div className='paymentSlipDetail'>
                            <img className='paymentpictureDog'src={detailPaymentID.imageDog}></img>
                            <div style={{display:'flex',flexWrap:'wrap'}}>
                                <p className='paymentSlipCost' style={{backgroundColor:'unset',color:'black'}}>พันธ์: {detailPaymentID.Breed}</p>
                                <p className='paymentSlipCost'>คงเหลือ : {detailPaymentID.Cost}</p>
                            </div>
                            

                        </div>
                        <div className='infoPane'><p style={{height:'2px'}}>ชื่อบัญชี-{detailPaymentID.NameCredit}</p>
                                                    <p style={{height:'2px',fontWeight:'bold'}}>รายละเอียดบัญชี</p>
                                                    <p style={{height:'50px',width:'350px',overflowY:'auto',wordWrap:'break-word',textAlign:'center'}}>{detailPaymentID.Creditinfo}</p>
                        </div>
                        </div>
                </div>
            )};
        
        const PaymentDogList = PaymentDog.map(
            PaymentDog => {if(PaymentDog.Buyer!=''){ return <div className='paymentDogPane'>
                <div className='paymentDogTextPane'>
                    <img className='paymentImageDog'src={PaymentDog.imageDog}></img>
                    <div className='paymentLengthText'><p style={{fontWeight:"bold",color:'#F07167'}}>สุนัขพันธ์:</p><p>{PaymentDog.Breed}</p></div>
                    <p className='paymentLengthText'>คงเหลือ: {PaymentDog.Cost}</p>
                    <div className='paymentGroupText1'>
                        <p className='paymentLengthText'>ชื่อผู้ซื้อ : {PaymentDog.Buyer}</p>
                        <p className='paymentLengthText'>ชื่อผู้ขาย: {PaymentDog.Owner}</p>
                    </div>
                </div>
                <div className='paymentGroupButton'>
                    <button className='paymentButtonEffect'>ตรวจสอบใบเสร็จ</button>
                    <button className='paymentButtonEffect'onClick={()=>{
                        SetdetailPaymentId(PaymentDog)
                        SetSlipPaymentPop(true)}}>ยืนยันการชำระเงิน</button>
                    
                </div>
                </div>}})
        return (
        <div>
            {SlipPaymentPop?<ModalSlip/>:null}
            <div className='paymentReportPane'>
            {PaymentDogList}
            
        
            
            </div>
        </div>);
    }
        return (
          <div style={{height:'100vh',overflow:'clip'}}>
              
                <nav className="manager-Navbar">
                  <div className='manager-Plane'>
                      <div className = 'manager-PetMePlane'>
                        <p className = 'manager-topicText'>PetMe ผู้ดูแลระบบ</p>
                      </div>
                      
                      <div className = 'manager-barPlane'>
                          <button className = {PaymentReportSlide} onMouseUp={()=>{SetSliderPayment(true);SetSliderProblem(false);
                            SetPaymentReportSlide('manager-barBlockSelectThis');
                            SetProblemReportSlide('manager-barBlockSelect')}} >
                              
                              <p>ตรวจสอบสลิปโอนเงิน</p>
                          </button>
                          <button className ={ProblemReportSlide} onMouseUp={()=>{SetSliderPayment(false);SetSliderProblem(true);
                            SetPaymentReportSlide('manager-barBlockSelect');
                            SetProblemReportSlide('manager-barBlockSelectThis')}}>
                              <p>ตรวจสอบรายงานปัญหา</p>
                          </button>
                     </div>

                  </div>

                </nav>
                <div style={{overflowY:'hidden',height:'100vh'}}>
                {SliderPayment?<PaymentReport/>:null}
                {SliderProblem?<ProblemReport/>:null}
                </div>
                
          </div>

      )
  }
export default Manager