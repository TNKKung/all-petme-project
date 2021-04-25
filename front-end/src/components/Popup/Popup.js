import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './Popup.scoped.css'

function Popup({ children, popup, className }) {
  if (!popup) throw new Error('!!! Please pass `popup` to the <Popup/> !!!')
  return (
    <>
      {popup.isShow &&
        ReactDOM.createPortal(
          <div className='popup-wrapper' onClick={popup.close}>
            <div
              className={`popup-box ${className}`}
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

Popup.usePopup = () => {
  const [show, setShow] = useState(false)
  return {
    isShow: show,
    open: () => setShow(true),
    close: () => setShow(false),
  }
}

export default Popup
