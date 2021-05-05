import React, { useState } from 'react';
// styling
import './popUppayment.css';
// images
// import ModernDatepicker from 'react-modern-datepicker';

import QR_src from './img/qr.png'
import IMG_src from './img/img.png'

const PopUppayment = (props) => {
    // function that takes boolean as param to conditionally display popup
    const setPopUp = props.setPopUp
    const getTotalPaid = props.getTotalPaid

    const [lastBtt, setlastBtt] = useState('ไม่มีหลักฐานการชำระเงิน')
    const [puHeader, setPuHeader] = useState('หน้าชำระเงิน')
    const [puType, setPuType] = useState(1)
    const [puType2, setPuType2] = useState(0)
    const [paidDate, setPaidDate] = useState()
    const maxPaid = 20

    const [SlipPayment,SetSlipPayment] = useState(null)

    const showUpload = () => {
        console.log(typeof getTotalPaid)
        setPopUp(true)
        setPuType(0)
        setPuType2(1)
        setlastBtt('ส่ง')
        setPuHeader('ยืนยันการชำระเงิน')
    }
    const qr = localStorage.getItem('pathQr')
    
    const uploadReceipt = () => {
        setPopUp(false)
    }
    return (
        <div className='manager-modal-wrapper'>
        <div className='manager-modal-backdrop'>
            <div className="PopUp">

                {puType == 1 && <div>
                    <div className='pu-nocenter'>
                        <text className='pu-header'>{puHeader}</text>
                        <button className="popup-x" onClick={() => setPopUp(false)} >X</button>
                    </div>
                    <div className='pu-row'>
                        <img src={qr} width="250" height="250" />
                    </div>
                    <div className='pu-row'>
                        <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>อัพโหลดหลักฐานการชำระเงิน
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center',gap:'5px'}}>
                        <input type="file" style={{width:'300px',height:'30px'}}
                                 onChange={(e) => {
                                    SetSlipPayment(URL.createObjectURL(e.target.files[0]));
                                    const fileTest = e.target.files[0]
                                    // setImageProfile(fileTest);
                                }}></input>
                                <button onClick={()=>{ }}>ส่งสลิป</button>
                                <div><div className='pu-up-imga' style={{overflow: 'auto', objectFit: 'cover',}}><img className='pu-up-img' src={SlipPayment} /></div></div></div>
                    </div></div></div>
                    
                }
                
            
            </div>
        </div>
        </div>
    );
}

export default PopUppayment;