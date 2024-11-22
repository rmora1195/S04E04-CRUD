import { useEffect, useRef } from 'react'
import  '../generalStyles/modalstyles.css'

function Modal({isOpen, setIsOpen, children}) {
    const modalRef = useRef()
    
    useEffect(()=>{
        const modal = modalRef.current
        const modalClose = (e) => {
            if (modal && !modal.contains(e.target)) {
                setIsOpen(false)
            }
        }
 
        document.addEventListener('mousedown', modalClose)
        return()=>{
            document.removeEventListener('mousedown', modalClose)
        }

    }, [])
    return (
    <div className= {`modal ${isOpen ? 'show--modal' : ''}`}>
        <div className= "modal--overlay" />
            <div ref={modalRef} className= "modal__container">
                {children}
                
    </div>  
    </div>
    
  )
}

export default Modal

