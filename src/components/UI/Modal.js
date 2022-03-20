

import reactDom from 'react-dom'
import { Fragment } from 'react'
import classes from './Modal.module.css'

const BackDrop = props =>{
return <div className={classes.backdrop}></div>

}

const ModalOverlay = props =>{
return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
        </div>;

}
const portalElement = document.getElementById('overlays');

function Modal(props) {
    return ( 
      <Fragment>
          {reactDom.createPortal(<BackDrop/>,portalElement)}
          {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
      </Fragment>
     );
}

export default Modal;