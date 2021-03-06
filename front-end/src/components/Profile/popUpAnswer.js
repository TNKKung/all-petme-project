import React, { useState } from 'react';
// styling
import './popUpAnswer.css';
// images
// import ModernDatepicker from 'react-modern-datepicker';

import QR_src from './img/qr.png'
import IMG_src from './img/img.png'
import { NoSimOutlined } from '@material-ui/icons';

const PopUpAnswer = (props) => {
    // function that takes boolean as param to conditionally display popup
    const setPopUp = props.setPopUp
    const user = props.user
    const setUser = props.setUser
    const setUserData = props.setUserData

    const dog = props.dog
    const popUpAnsType = props.popUpAnsType

    const [lastBtt, setlastBtt] = useState('ไม่มีหลักฐานการชำระเงิน')
    const [puHeader, setPuHeader] = useState('PopAnsCoding..')
    const [puType, setPuType] = useState(1) 
    const [puType2, setPuType2] = useState(0)

    const [paidDate, setPaidDate] = useState()

    const maxPaid = 20

    const showUpload = () => {
        setPopUp(true)
        setPuType(0)
        setPuType2(1)
        setlastBtt('ส่ง')
        setPuHeader('ยืนยันการชำระเงิน')
    }
    const uploadReceipt = () => {
        setPopUp(false)
    }

    const selectLikeUser = (selectUser) => {

        let shallowDog = dog
        let shallowLikeUser = []
        let shallowAcceptUser = []

        const len = dog.likeUser.length
        for(let i=0;i<len;i++){
            if(dog.likeUser[i]!=selectUser){
                shallowLikeUser.push(dog.likeUser[i])
            }
            else shallowAcceptUser.push(dog.likeUser[i])
        }
        for(let i=0;i<shallowDog.acceptUser.length;i++){
            shallowAcceptUser.push(shallowDog.acceptUser[i])
        }
        shallowDog.likeUser = shallowLikeUser
        shallowDog.acceptUser = shallowAcceptUser

        setUserData('listPetIForsell',shallowDog)
        setPopUp(false)
    }   

    const cancelLikeUser = (selectUser) => {
        let shallowDog = dog
        let shallowLikeUser = []
        let shallowCancelUser = []

        const len2 = dog.likeUser.length
        for(let i=0;i<len2;i++){
            if(dog.likeUser[i]!=selectUser){
                shallowLikeUser.push(dog.likeUser[i])
            }
            else shallowCancelUser.push(dog.likeUser[i])
        }
        for(let i=0;i<shallowDog.cancelUser.length;i++){
            shallowCancelUser.push(shallowDog.cancelUser[i])
        }
        shallowDog.likeUser = shallowLikeUser
        shallowDog.cancelUser = shallowCancelUser

        setUserData('listPetIForsell',shallowDog)
        setPopUp(false)

    }
    const petId = JSON.parse(localStorage.getItem("petIdForStorePage"))
    const userId = JSON.parse(localStorage.getItem("likeUser"))


    const fetchDataCancelAccept = async() => {
        
        const res = await fetch('https://api2.evera.cloud/cancelAccept',{
          method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'     
            },
            mode : "cors",
            body: JSON.stringify({
                petId : petId,
                userId : userId.userId,
            }),
        });
        
    }
    const fetchDataCancelLike = async() => {
        
        const res = await fetch('https://api2.evera.cloud/cancelLikeUser',{
          method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'     
            },
            mode : "cors",
            body: JSON.stringify({
                petId : petId,
                userId : userId.userId,
            }),
        });

        console.log('111')
        
    }

    const fetchData = async() => {
        console.log(petId)
        const res = await fetch('https://api2.evera.cloud/choosePeopleForChat',{
          method: 'POST',
            headers: {
                'Content-Type': 'application/json'     
            },
            mode : "cors",
            body: JSON.stringify({
                petId : petId,
                userId : userId.userId,
                name : userId.name,
                answer1 : userId.answer1,
                answer2 : userId.answer2,
                answer3 : userId.answer3,
                answer4 : userId.answer4,
                answer5 : userId.answer5,
            }),
        });
    }

    return (
        <div className='manager-modal-wrapper'>
        <div className='manager-modal-backdrop'>
        <div className='PopUp-Ans'>
        <div className='PopUp-Ans-inside'>

            <div className='pu-ans-row-right'><button className="popup-x" onClick={() => setPopUp(false)} >X</button></div>
            <div className='pu-ans-row-center'><div className = 'col-center'>
                <img className='pu-ans-profile' src = {user.picture}/>
                <div className='pu-ans-name'>{user.name}</div>
                <div className='pu-ans-createDate'>ตอบเมื่อวันที่ {dog.dateCreate}</div>
            </div></div>
{/* ------------------- question & answer ------------------------ */}            
            <div className='pu-ans-row-left'><div className = 'pu-ans-col-left'>
                {dog.question1&& <div>
                    <div className='pu-ans-question'>คำถามที่ 1 : {dog.question1}</div>
                    {user.answer1 && <div className='pu-ans-answer'>คำตอบ : {user.answer1}</div>}
                    {!user.answer1 && <div className='pu-ans-answer'>คำตอบ : ไม่มีคำตอบ</div>}
                </div>}
                {dog.question2&& <div>
                    <div className='pu-ans-question'>คำถามที่ 2 : {dog.question2}</div>
                    {user.answer2 && <div className='pu-ans-answer'>คำตอบ : {user.answer2}</div>}
                    {!user.answer2 && <div className='pu-ans-answer'>คำตอบ : ไม่มีคำตอบ</div>}
                </div>}
                {dog.question3&& <div>
                    <div className='pu-ans-question'>คำถามที่ 3 : {dog.question3}</div>
                    {user.answer3 && <div className='pu-ans-answer'>คำตอบ : {user.answer3}</div>}
                    {!user.answer3 && <div className='pu-ans-answer'>คำตอบ : ไม่มีคำตอบ</div>}
                </div>}
                {dog.question4&& <div>
                    <div className='pu-ans-question'>คำถามที่ 4 : {dog.question4}</div>
                    {user.answer4 && <div className='pu-ans-answer'>คำตอบ : {user.answer4}</div>}
                    {!user.answer4 && <div className='pu-ans-answer'>คำตอบ : ไม่มีคำตอบ</div>}
                </div>}
                {dog.question5&& <div>
                    <div className='pu-ans-question'>คำถามที่ 5 : {dog.question5}</div>
                    {user.answer5 && <div className='pu-ans-answer'>คำตอบ : {user.answer5}</div>}
                    {!user.answer5 && <div className='pu-ans-answer'>คำตอบ : ไม่มีคำตอบ</div>}
                </div>}     

                
            </div></div>
{/* ------------------- buttom button ------------------------ */}

            { popUpAnsType && (dog.slipOfCustomer == null|| dog.slipOfCustomer == '') && 
                <div className='pu-ans-row-center'>
                    {dog.acceptUser.length==0?<div><button className = 'pu-ans-button' onClick={() => {fetchData(); setPopUp(false);window.location.reload()} }>เลือกผู้ซื้อคนนี้</button>
                    <button className = 'pu-ans-button' onClick={() => {setPopUp(false);window.location.reload();fetchDataCancelLike()}}>ลบจากคนสนใจ</button> {/*ยกเลิกในรายการสนใจ*/}
                    </div>:dog.acceptUser.filter(e => e.userId == user.userId).map(e => e.userId).length!==0?
                    <div>
                        <button className = 'pu-ans-button' onClick={() => {setPopUp(false);fetchDataCancelAccept();window.location.reload()}}>ยกเลิกการยอมรับ</button>  {/*ยกเลิกในรายการยอมรับแล้ว*/}
                    </div>:<div><button className = 'pu-ans-button' onClick={() => {setPopUp(false);window.location.reload();fetchDataCancelLike()}}>ลบจากคนสนใจ</button></div>}{/*ยกเลิกในรายการสนใจ*/}
                    
                </div>
            }
            { !popUpAnsType && (dog.slipOfCustomer == null || dog.slipOfCustomer == '' ) &&
                <div className='pu-ans-row-center'>
                    <button className = 'pu-ans-button' onClick={() =>{ setPopUp(false);fetchDataCancelAccept();window.location.reload()}} >ยกเลิกการยอมรับ</button>{/*ยกเลิกในรายการยอมรับแล้ว*/}
                </div>
            }

        </div>
        </div>
        </div>
        </div>
    );
}

export default PopUpAnswer;