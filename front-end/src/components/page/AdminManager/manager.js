import './manager.css'
import React, { useState, useEffect } from 'react'
import imageTest from '../homePage/img/dog1.jpg'
import imageExit from '../homePage/img/exit.png'
import ExSlipimg from '../homePage/img/Exslip.jpg'
import Modal from 'react-modal'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
// ------------------------payment------------------------- 
const ModalSlip = (props) => {
    
    const [detailPaymentID, SetdetailPaymentId] = useState(props.detailPayment)
    const [imagesPreview, SetimagesPreview] = useState(null)
    function Previewpicture(e) {
        SetimagesPreview(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <div className={'manager-modal-wrapper'}>
            <div className={'manager-modal-backdrop'} />
            <div className={'manager-modal-box'}>
                <div style={{ display: 'flex', flexDirection: 'row-reverse' }}><img className='paymentpictureExit' src={imageExit} onClick={() => { props.setPop(false) }}></img></div>
                <div className='paymentSlipDetail' style={{ height: '73%' }}>
                    <img className='paymentpictureDog' src={detailPaymentID.imageDog}></img>
                    <div className='paymentSlipCostPane'>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p className='paymentSlipCost' style={{ backgroundColor: 'unset', color: 'black' }}>พันธ์: {detailPaymentID.Breed}</p>
                            <p className='paymentSlipCost'>คงเหลือ : {detailPaymentID.Cost}</p>
                        </div>
                        <div className='paymentSlipToBuyerPane'><img className='paymentSlipToBuyerImg' src={detailPaymentID.SlipPay == null ? imagesPreview : detailPaymentID.SlipPay}></img></div>
                        {detailPaymentID.SlipPay == null ? <><input type='file' style={{ width: '100%', margin: '5px' }} onChange={Previewpicture}></input>
                            <button className='paymentButtonEffect' style={{ width: '125px', height: '30px' }} onClick={() => {
                                
                                if (imagesPreview == null) {
                                    alert('กรุณาupload สลิป')
                                }
                                else {
                                    let a = window.confirm('ต้องการเปลี่ยนแปลง?');
                                    if (a == true) {
                                        SetdetailPaymentId({
                                            id: detailPaymentID.id,
                                            Breed: detailPaymentID.Breed,
                                            Owner: detailPaymentID.Owner,
                                            Buyer: detailPaymentID.Buyer,
                                            Cost: detailPaymentID.Cost,
                                            imageDog: detailPaymentID.imageDog,
                                            NameCredit: detailPaymentID.NameCredit,
                                            Creditinfo: detailPaymentID.Creditinfo,
                                            SlipImage: detailPaymentID.SlipImage,
                                            payCheck: true,
                                            SlipPay: imagesPreview
                                        })
                                        ///////Sent data///////////
                                    }
                                }
                            }}>Sumit</button></> : <p className='paymentSlipCost' style={{ backgroundColor: 'unset', color: 'black', margin: '5px' }}>จ่ายแล้ว</p>}
                    </div>


                </div>
                <div className='infoPane'><p style={{ height: '2px' }}>ชื่อบัญชี-{detailPaymentID.NameCredit}</p>
                    <p style={{ height: '2px', fontWeight: 'bold' }}>รายละเอียดบัญชี</p>
                    <p style={{ height: '50px', width: '350px', overflowY: 'auto', wordWrap: 'break-word', textAlign: 'center' }}>{detailPaymentID.Creditinfo}</p>
                </div>
            </div>
        </div>
    )
};

const ModalSlipCheck = (props) => {
    const [detailPaymentID, SetdetailPaymentId] = useState(props.detailAccountPromtpay)
    useEffect(() => {
        detailPaymentID.payCheck = true
    })
    
    return (
        <div className={'manager-modal-wrapper'}>
            <div className={'manager-modal-backdrop'} />
            <div className='manager-modal-box' style={{ height: '700px' }}>
                <div style={{ display: 'flex', flexDirection: 'row-reverse' }}><img className='paymentpictureExit' src={imageExit} onClick={() => { props.setPop(false) }}></img></div>
                <div className='paymentSlipDetail'>
                    <div style={{ overflow: 'auto', objectFit: 'cover', width: '300px', height: '400px' }}><img className='paymentpictureDog' style={{ width: '300px', height: '600px' }} src={detailPaymentID.slipOfCustomer}></img></div>

                </div>

                {detailPaymentID.payCheck ? <p style={{ marginTop: '10px', textAlign: 'center' }}>ข้อมูลยืนยันเรียบร้อยแล้ว</p> : <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                    <button className='paymentButtonEffect' onClick={() => {
                        let a = window.confirm('ต้องการเปลี่ยนแปลง?'); if (a == true) {
                            
                            
                        }
                    }}>ยืนยันถูกต้อง</button>
                    <button className='paymentButtonEffect' onClick={() => {
                        let a = window.confirm('ต้องการลบข้อมูล?'); if (a == true) {

                            ///////RemoveThis data///////////
                            props.setPop(false)
                        }
                    }}>ข้อมูลไม่ถูกต้อง</button></div>}

            </div>
        </div>
    )
};




function PaymentReport() {
    const PaymentDog = [
        {
            id: 1,
            Breed: 'บีเกิ้ล',
            Owner: 'คุณต้อม',
            Buyer: 'คุณทอม',
            Cost: '3500',
            imageDog: imageTest,
            NameCredit: 'รัตนศิริ พัฒนาวงศ์',
            Creditinfo: 'ธนาคารTNT xxxx-xxxx-xxxx-xxxx',
            SlipImage: ExSlipimg, payCheck: false, SlipPay: null
        },
        {
            id: 2,
            Breed: 'บีเกิ้ล',
            Owner: 'คุณทอม',
            Buyer: 'คุณต้อม',
            Cost: '6500',
            imageDog: imageTest,
            NameCredit: 'พัฒนา รัตนวาวงศ์',
            Creditinfo: 'ธนาคารTNT xxxx-xxxx-xxxx-xxxxffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddd',
            SlipImage: ExSlipimg, payCheck: true, SlipPay: ExSlipimg
        },
        {
            id: 3,
            Breed: 'ไม่ทราบ',
            Owner: 'คุณบริล',
            Buyer: 'คุณเอริ',
            Cost: '4500',
            imageDog: imageTest,
            NameCredit: 'ธนาศรี มณีทอง',
            Creditinfo: 'พร้อมเพย์ 089-999-9999',
            SlipImage: ExSlipimg, payCheck: false, SlipPay: ExSlipimg
        }
    ]
    const [detailPaymentID, SetdetailPaymentId] = useState({ id: '', Breed: '', Owner: '', Buyer: '', Cost: '', imageDog: null, NameCredit: '', Creditinfo: '', SlipImage: '', payCheck: null })
    const [SlipPaymentPop, SetSlipPaymentPop] = useState(false)
    const [SlipCheckPop, SetSlipCheckPop] = useState(false)
    const [payment,setPayment] = useState()
    const fetchDataPayment= async() => {
        const res = await fetch('api.evera.cloud/getDataPayment',{
        method: 'GET',
            headers: {
                'Content-Type': 'application/json'     
            },
            mode : "cors",
        });
        const a =  await res.json()
        setPayment(a)
    }


    const PaymentDogList = payment.map(
        PaymentDog => {
            if (PaymentDog.Buyer != '') {
                return <div className='paymentDogPane'>
                    <div className='paymentDogTextPane'>
                        <img className='paymentImageDog' src={PaymentDog.picture}></img>
                        <div className='paymentLengthText'><p style={{ fontWeight: "bold", color: '#F07167' }}>สุนัขพันธ์:</p><p>{PaymentDog.breed}</p></div>
                        <p className='paymentLengthText'>คงเหลือ: {PaymentDog.cost}</p>
                        <div className='paymentGroupText1'>
                            <p className='paymentLengthText'>ชื่อผู้ขาย: {PaymentDog.profile}</p>
                        </div>
                    </div>
                    <div className='paymentGroupButton'>
                        <button className='paymentButtonEffect' onClick={() => {
                            SetdetailPaymentId(PaymentDog)
                            SetSlipCheckPop(true)
                        }}>ตรวจสอบใบเสร็จ</button>
                        <button className='paymentButtonEffect' onClick={() => {
                            SetdetailPaymentId(PaymentDog)
                            SetSlipPaymentPop(true)
                        }}>ยืนยันการชำระเงิน</button>

                    </div>
                </div>
            }
        })
    return (
        <div>
            {SlipPaymentPop ? <ModalSlip detailPayment={detailPaymentID} setPop={SetSlipPaymentPop} /> : null}
            {SlipCheckPop ? <ModalSlipCheck detailPayment={detailPaymentID} setPop={SetSlipCheckPop} /> : null}
            <div className='paymentReportPane'>
                {PaymentDogList}



            </div>
        </div>);
}




const Manager = () => {

    // ----test list----
    const [problemThatReport, setproblemThatReport] = useState([])

    // ---end test---

    const [contractThatReport, setcontractThatReport] = useState([])
    

    //// end//////

    const [SliderPayment, SetSliderPayment] = useState(false)
    const [SliderProblem, SetSliderProblem] = useState(false)
    const [SliderContract, SetSliderContract] = useState(false)
    const [PaymentReportSlide, SetPaymentReportSlide] = useState('manager-barBlockSelect')
    const [ProblemReportSlide, SetProblemReportSlide] = useState('manager-barBlockSelect')
    const [ContractSlide, SetContractSlide] = useState('manager-barBlockSelect')
    const [IDChoose, SetIDChoose] = useState(null)
    
    const [IDChooseContract, SetIDChooseContract] = useState(null)

    function ProblemReport() {
        const [problemListClass, setProblemListClass] = useState('problemListBox')
        const ProblemList = problemThatReport.map(
            problemThatReport => <button className={problemListClass} onFocus={() => {
                SetIDChoose(problemThatReport.reportId)
            }}>
                <div style={{display:'flex'}}><div style={{textAlign:'left',overflow: 'hidden',textOverflow:'ellipsis',maxWidth:'15ch',height:'35px'}}>ID #{problemThatReport.petId}</div>
                <div>ปัญหา {problemThatReport.topic}</div></div>

                <div>เกิดขึ้นจาก {problemThatReport.nameOfSeller}</div>

            </button>
        )
        const Problemdetail = problemThatReport.map(problemThatReport => {
            if (problemThatReport.reportId == IDChoose) {
                return <div>
                    <p className='problemTopicText'>petID #{problemThatReport.petId} </p>
                    <p className='problemTopicText'>หัวข้อปัญหา {problemThatReport.problemType}</p>
                    <div className='problemReportRespone'>
                        <div className='problemImgDiv'><img className='problemprofile' src={imageTest}></img></div>
                        <p className='problemReportResponeText'>ปัญหาเกิดขึ้นจาก: {problemThatReport.nameOfSeller}</p>
                        <p className='problemReportResponeText'>รายงานโดย: {problemThatReport.nameOfCustomer}</p>
                    </div>
                    <p className='problemProblemText'>เกิดอะไรขึ้น</p>
                    <p className='problemProblemText'>{problemThatReport.problemDetail}</p>
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

    function ContractReport() {
        const [ContractListClass, setContractListClass] = useState('problemListBox')
        
        const ContractList = contractThatReport.map(
            contractThatReport => <button className={ContractListClass} onFocus={() => {
                SetIDChoose(contractThatReport.reportId)
            }}>

                <div style={{display:'flex'}}><div style={{textAlign:'left',overflow: 'hidden',textOverflow:'ellipsis',maxWidth:'15ch',height:'35px'}}>ID #{contractThatReport.reportId}</div>
                <div>หัวข้อ {contractThatReport.topic}</div></div>
                
                <div>จาก {contractThatReport.email}</div>

            </button>
        )
        const Contractdetail = contractThatReport.map(contractThatReport => {
            if (contractThatReport.reportId == IDChoose) {
                return <div>
                    <div className='problemTopicText'>หมายเลขID #{contractThatReport.reportId}</div>
                    <div className='problemTopicText'>เรื่อง {contractThatReport.topic}</div>
                    <div className='problemReportRespone'>
                        <div className='problemImgDiv'><img className='problemprofile' src={imageTest}></img></div>
                        <p className='problemReportResponeText'>จาก: {contractThatReport.name}</p>
                        <p className='problemReportResponeText'>Email: {contractThatReport.email}</p>
                        <p className='problemReportResponeText'>เบอร์โทร: {contractThatReport.mobileNumber}</p>
                    </div>
                    <p className='problemProblemText'>เนื้อหา</p>
                    <p className='problemProblemText'>{contractThatReport.message}</p>
                </div>
            }
        })
        return (
            <div>
                <div className='problemReportPane'>
                    <div className='problemListPane'><div>{ContractList}</div></div>
                    <div className='problemDetailPane'>{Contractdetail}</div>
                </div>
            </div>);
    }


    return (
        <div style={{ height: '100vh', overflow: 'auto' }}>

            <nav className="manager-Navbar">
                <div className='manager-Plane'>
                    <div className='manager-PetMePlane'>
                        <p className='manager-topicText'>PetMe ผู้ดูแลระบบ</p>
                    </div>

                    <div className='manager-barPlane'>
                        <button className={PaymentReportSlide} onMouseUp={() => {
                            SetSliderPayment(true); SetSliderProblem(false);SetSliderContract(false);
                            SetPaymentReportSlide('manager-barBlockSelectThis');
                            SetProblemReportSlide('manager-barBlockSelect');
                            SetContractSlide('manager-barBlockSelect');
                        }} >
                            <p>ตรวจสอบสลิปโอนเงิน</p>
                        </button>
                        <button className={ProblemReportSlide} onMouseUp={() => {
                            const fetchData= async() => {
                                const res = await fetch('api.evera.cloud/getReport',{
                                method: 'GET',
                                    headers: {
                                        'Content-Type': 'application/json'     
                                    },
                                    mode : "cors",
                                });
                                const a =  await res.json()
                                setproblemThatReport(a)
                            }
                            fetchData();
                            SetSliderPayment(false); SetSliderProblem(true);SetSliderContract(false);
                            SetPaymentReportSlide('manager-barBlockSelect');
                            SetContractSlide('manager-barBlockSelect');
                            SetProblemReportSlide('manager-barBlockSelectThis')
                        }}>
                            <p>ตรวจสอบรายงานปัญหา</p>
                        </button>
                        <button className={ContractSlide} onMouseUp={() => {

                            const fetchData= async() => {
                                const res = await fetch('api.evera.cloud/getContact',{
                                method: 'GET',
                                    headers: {
                                        'Content-Type': 'application/json'     
                                    },
                                    mode : "cors",
                                });
                                const a =  await res.json()
                                setcontractThatReport(a)
                            }
                            fetchData();
                            SetSliderContract(true); SetSliderProblem(false);SetSliderPayment(false);
                            SetContractSlide('manager-barBlockSelectThis');
                            SetPaymentReportSlide('manager-barBlockSelect');
                            SetProblemReportSlide('manager-barBlockSelect');
                        }}>
                            <p>ตรวจสอบผู้ติดต่อ</p>
                        </button>
                        
                    </div>

                </div>

            </nav>
            <div style={{ overflowY: 'auto', height: '100vh' }}>
                {SliderPayment ? <PaymentReport /> : null}
                {SliderProblem ? <ProblemReport /> : null}
                {SliderContract? <ContractReport/>:null}
            </div>

        </div>

    )
}
export default Manager