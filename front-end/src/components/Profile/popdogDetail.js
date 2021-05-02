import { PortableWifiOffRounded } from '@material-ui/icons';
import React, { useState} from 'react';
import './popdogDetail.css';
import fetch from 'unfetch';

const PopUpDogDetail = (props) => {
    const data = JSON.parse(localStorage.getItem("user"))
    const petId = JSON.parse(localStorage.getItem("dataPetId"))

    const getDog = props.getDog
    // const dogDateCreate = props.getDateCreate

    const [dogPU,setDogPU] = useState(getDog)

    const [lastBtt, setlastBtt] = useState('ไม่มีหลักฐานการชำระเงิน')
    const [puHeader, setPuHeader] = useState('หน้าชำระเงิน')
    const [puType, setPuType] = useState(1)
    const [puType2, setPuType2] = useState(0)
    const [puType3, setPuType3] = useState(0)
    const [reportType,set_reportType] = useState()
    const [reportDetail,set_reportDetail] = useState()

    const [mainImg, setMainImg] = useState(getDog.picture)
    const [subImg, setSubImg] = useState(getDog.picture)

    const showUpload = (inp) => {

        if (inp == 1) {
            props.setPopUp(true)
            setPuType(0)
            setPuType3(0)
            setPuType2(1)
            setlastBtt('ส่งคำตอบ')
            setPuHeader('ตอบคำถามเพื่อพิจารณาคุณสมบัติของผู้เลี้ยง')
        }
        else  if (inp == 2){
            props.setPopUp(true)
            setPuType(1)
            setPuType3(0)
            setPuType2(0)
            setlastBtt('ส่ง')
        }
        else {
            props.setPopUp(true)
            setPuType(0)
            setPuType3(1)
            setPuType2(0)
        }
    }
    const fetchdata = async() => {
        
        const res = await fetch('http://localhost:4000/addAnswer',{
          method: 'POST',
            headers: {
                'Content-Type': 'application/json'     
            },
            mode : "cors",
            body: JSON.stringify({
                petId : petId,
                userId: data.userId,
                answer1 : dogPU.answer1,
                answer2 : dogPU.answer2,
                answer3 : dogPU.answer3,
                answer4 : dogPU.answer4,
                answer5 : dogPU.answer5,
            }),
        });
    }
    const insertAns = async(i,ans) => {
        let curDog = {}
        curDog = dogPU
        if(i==1){
            curDog.answer1 = ans
        }
        else if(i==2){
            curDog.answer2 = ans
        }else if(i==3){
            curDog.answer3 = ans
        }else if(i==4){
            curDog.answer4 = ans
        }else {
            curDog.answer5 = ans
        }
        setDogPU(curDog)
        // setDog(curDog)
    }
    
    const sendReport = () => {
        console.log('Sending these data :')

        console.log('\nDog : '+dogPU.breed+' sold by '+dogPU.profile)
        console.log('Type of report : '+reportType)
        console.log('Report Info : '+reportDetail)
        console.log('Report by : '+props.user.name)
        props.setPopUp(false)
    }

    // const switchImg = (newImg) => {                                                          ///////////สำหรับหลายภาพ
    //     const shallowSubImg = [newImg]

    //     if (subImg.length != 0) {
    //         for (let i = 0; i < subImg.length; i++) {
    //             if (subImg[i] != newImg) shallowSubImg.push(subImg[i])
    //         }
    //         setMainImg(newImg)
    //         setSubImg(shallowSubImg)
    //     }
    // }
    const useLikePet = [];
    for (const [index, value] of dogPU.likeUser.entries()){
        useLikePet.push(value.userId)
    }
    function CheckID(va){

        if(dogPU.userId == va){
            return <p>รายละเอียดสุนัขของคุณ</p>
        }
        else if(!useLikePet.indexOf(va)){
            return <button className="pu-buttonA2" onClick={() => {
                props.setPopUp(false);
                                                                //////////////////////////////////พื้นที่สำหรับเขียนโค้ดยกเลิกการกดถูกใจ
                                                                
            }}>ยกเลิก</button>;
        }
        else{
            return <button className="pu-buttonA2" onClick={() => showUpload(1)}>สนใจซื้อสุนัข</button>;
        }
    }

    return (
        <div className='manager-modal-wrapper'>
        <div className='manager-modal-backdrop'>
                {puType == 1 && <div>
                    <div className="PopUpdetailA">
                        <div className='pu-insidePad1'>
                            <div className='pu-halfPad1'>
                                <img className='pu-main-img' src={mainImg} />
                                {/* <div className='pu-img-bottomPad'>                                                                                          ///////////สำหรับหลายภาพ
                                    {subImg[1] && <div><img src={subImg[1]} className='pu-sub-imgPad' onClick={() => switchImg(subImg[1])} /></div>}
                                    {!subImg[1] && <div><div className='plain-img'></div></div>}
                                    {subImg[2] && <div><img src={subImg[2]} className='pu-sub-imgPad' onClick={() => switchImg(subImg[2])} /></div>}
                                    {!subImg[2] && <div><div className='plain-img'></div></div>}
                                    {subImg[3] && <div><img src={subImg[3]} className='pu-sub-imgPad' onClick={() => switchImg(subImg[3])} /></div>}
                                    {!subImg[3] && <div><div className='plain-img'></div></div>}
                                    {subImg[4] && <div><img src={subImg[4]} className='pu-sub-imgPad' onClick={() => switchImg(subImg[4])} /></div>}
                                    {!subImg[4] && <div><div className='plain-img'></div></div>}
                                </div> */}

                            </div>
                            <div className='pu-half-line'></div>
                            <div className='pu-halfPad1'>
                            <div style={{width:'100%',height:'50px',display:'flex',flexDirection:'row-reverse'}}><text className="popup-x2" onClick={() => props.setPopUp(false)} >X</text></div>
                                <div className='pu-row2'>
                                    <div className='pu-rowHeader2'><div className='pu-headerDetail'>สุนัขพันธุ์ : {dogPU.breed}</div></div>
                                </div>
                                <div className='pu-row2'>
                                    <div className='pu-rowHeader2'><div className='pu-headerDetail2'><div className='pu-headerDetail2-text'> {dogPU.typeSell==='บริจาค'?'บริจาคฟรี':'ราคา:'+ dogPU.cost}</div></div></div>
                                </div>
                                <div className='pu-row2'>
                                    <div className='pu-rowHeader2'>
                                        <div className='pu-headerDetail3'>เพศ : {dogPU.gender}</div>
                                        <div className='pu-headerDetail3-2'>อายุ : {dogPU.age} ปี</div>
                                        </div>
                                </div>
                                <div className='pu-row2'>
                                    <div className='pu-rowHeader2'>
                                        <div className='pu-rowHeader2'><div className='pu-headerDetail4-1'>รายละเอียด :</div>
                                        </div>
                                        <button onClick = {() => showUpload(3)} className='pu-reportBtt'>รายงานปัญหา</button>
                                    </div>

                                </div>
                                <div className='pu-row2'>
                                    <div className='pu-dogDatailPad'>
                                    <div className='pu-rowHeader2'><div className='pu-headerDetail4'>{dogPU.petDetail}</div></div>
                                    </div>
                                </div>
                                <div className='pu-row2'>
                                <div className='ddd'>
                                    <div className='pu-rowHeader2'>
                                        <div className='pu-rowHeader2'>
                                            <div>
                                            <div className='ddd'>
                                                <div className='pu-headerDetail5'>{dogPU.profile}</div>
                                                </div>
                                                <div className='pu-headerDetail6'>ลงเมื่อวันที่ : {dogPU.dateCreate}</div>
                                            </div>
                                            {/* <img src={dogPU.seller.picture} className='pu-profile-img2' /> */}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className='pu-row2'>
                                <div className='ddd'>{CheckID(data.userId)}</div>  {/* แก้ asa คือ user ที่ทำการ login*/}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                }
                {puType2 == 1 && <div>
                    <div className="PopUpdetailB">

                        <div className='pu-insidePad1'>
                            <div className='pu-halfPad2'>
                                <div className='pu-rowHeader2'>
                                    <div className='pu-halfPad2'>
                                        <div className='pu-rowHeader2'><text className='pu-headerA2'>{puHeader}</text></div>
                                        <div className='pu-underline'></div>
                                    </div>
                                    <text className="popup-x2" onClick={() => props.setPopUp(false)} >X</text>
                                </div>
                                {dogPU.question1 && <div>
                                    <div className='pu-row2'>
                                        <div className='pu-up-text2'>1.{dogPU.question1}</div>
                                        <div className='pu-inp2'><textarea className='pu-inp-textrea2'  onChange={e => insertAns(1,e.target.value)} /></div>
                                    </div>
                                </div>}
                                {dogPU.question2 && <div>
                                    <div className='pu-row2'>
                                        <div className='pu-up-text2'>2.{dogPU.question2}</div>
                                        <div className='pu-inp2'><textarea className='pu-inp-textrea2'  onChange={e => insertAns(2,e.target.value)} /></div>
                                    </div>
                                </div>}
                                {dogPU.question3 && <div>
                                    <div className='pu-row2'>
                                        <div className='pu-up-text2'>3.{dogPU.question3}</div>
                                        <div className='pu-inp2'><textarea className='pu-inp-textrea2'  onChange={e => insertAns(3,e.target.value)} /></div>
                                    </div>
                                </div>}
                                {dogPU.question4 && <div>
                                    <div className='pu-row2'>
                                        <div className='pu-up-text2'>4.{dogPU.question4}</div>
                                        <div className='pu-inp2'><textarea className='pu-inp-textrea2'  onChange={e => insertAns(4,e.target.value)} /></div>
                                    </div>
                                </div>}
                                {dogPU.question5 && <div>
                                    <div className='pu-row2'>
                                        <div className='pu-up-text2'>5.{dogPU.question5}</div>
                                        <div className='pu-inp2'><textarea className='pu-inp-textrea2'  onChange={e => insertAns(5,e.target.value)} /></div>
                                    </div>
                                </div>}


                                <div className='pu-rowBottom2'>
                                    <button className="pu-button2" onClick={() => {fetchdata();props.setPopUp(false)}} >{lastBtt}</button>
                                    <button className="pu-button2" onClick={() => showUpload(0)}>ย้อนกลับ</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                }
                {puType3 == 1 && <div>
                    <div className="PopUpdetailC">
                        <div className='pu-report-Header-pad'>
                            <div className='pu-report-Header-text'>
                                รายงานปัญหา
                            </div>
                        </div>
                        <div>
                            <div className='pu-report-row-left'>
                            
                                    <div className = 'pu-report-text-L'>ประเภทปัญหาที่เกิดขึ้น</div>
                                    <div><input className = 'pu-report-inp1-style' onChange={(e) => {
                                        set_reportType(e.target.value)
                                    }}/></div>
                            </div>
                            <div className='pu-report-row-left-step'><div className = 'pu-report-flex'>
                                    <div className = 'pu-report-text-step'>ปัญหาเกิดขึ้นกับ : </div>
                                    <div className = 'pu-report-text2'> คุณ {dogPU.profile}</div>
                            </div></div>
                            <div className='pu-report-row-left'><div className = 'pu-report-text'>เกิดอะไรขึ้น? :</div></div>
                            <div className='pu-report-inp3-style'>
                                <textarea className='pu-report-inp3'
                                    onChange={(e) => {
                                        set_reportDetail(e.target.value)
                                    }}
                                />
                            </div>
                            <div className='pu-report-row-center'>
                                <button onClick = { () => {sendReport(); props.setPopUp(false)}} className='pu-report-button'>รายงานปัญหา</button>
                                <button onClick = { () => props.setPopUp(false)} className='pu-report-button'>ยกเลิก</button>
                            </div>
                        </div>
                    </div>
                </div>
                }

            
        </div>
        </div>
    );
}

export default PopUpDogDetail