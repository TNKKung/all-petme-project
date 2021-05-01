import React, { useState } from 'react';
// styling
import './popUpAnswer.css';
// images
// import ModernDatepicker from 'react-modern-datepicker';

import QR_src from './img/qr.png'
import IMG_src from './img/img.png'

const PopUpAnswer = (props) => {
    // function that takes boolean as param to conditionally display popup
    const setPopUp = props.setPopUp
    const user = props.user

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
                        <img className="pu-qr-img" src={QR_src} alt="bone" />
                    </div>
                    <div className='pu-row'>
                        <button className="pu-button" onClick={() => showUpload()}>แหนะ</button>
                    </div></div>
                }
                {puType2 == 1 && <div>
                    <div className='pu-nocenter'>
                        <text className='pu-header2'>{puHeader}</text>
                        <button className="popup-x" onClick={() => setPopUp(false)} >X</button>
                    </div>
                    <div className='pu-row'>
                        <div className='pu-inp'>
                        <div className='pu-up-text'>ยอดรวมทั้งหมด</div>
                        <input placeholder = '50' className='pu-inp-text'/>
                        </div>
                    </div>
                    <div className='pu-row'>
                        <div className='pu-inp-img'>
                            <div className='pu-up-text'>อัพโหลดหลักฐานการชำระเงิน</div>
                            <div className='pu-center-inp'>
                                <div className='pu-up-img-btt'>
                                    <img className='pu-up-img' src={IMG_src} />
                                    <div className='pu-up-text'>กดเพื่อเพิ่ม</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pu-row'>
                        <div className='pu-inp'>
                        <div className='pu-up-text'>เวลาที่โอนเงินตามหลักฐานการชำระเงิน</div>
                        <input placeholder = 'วัน/เดือน/ปี'className='pu-inp-text'/>
                        </div>
                    </div>
                    <div className='pu-row'>
                        <div className='pu-inp'>
                        <div className='pu-up-text'>วันที่โอนเงินตามหลักฐานการชำระเงิน</div>
                        <input placeholder = '- -: - -' className='pu-inp-text'/>
                        </div>
                    </div>
                    <div className='pu-row'>
                        <div className='pu-inp'>
                        <div className='pu-up-text'>จำนวนเงินที่ถูกโอน</div>
                        <input placeholder = '0' 
                            onChange={(e) => {
                                let curvalue = e.target.value
                                let tempSTR = curvalue.replace(/[^0-9]/ig, '')
                                e.target.value = tempSTR
                            }}
                            maxLength={maxPaid}
                            className='pu-inp-text'   
                        />
                        </div>
                    </div>
                </div>
                }
                <div className='pu-row'><button className="pu-button" onClick={() => setPopUp(false)}>{lastBtt}</button></div>
            </div>
        </div>
        </div>
    );
}

export default PopUpAnswer;