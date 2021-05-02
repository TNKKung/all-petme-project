import React, { useState } from 'react'
import './popdogDetail.css';
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
export default 