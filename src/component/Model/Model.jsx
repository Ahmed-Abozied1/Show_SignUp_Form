import React, { Fragment } from "react";
import styles from "../Model/Model.module.css"
import ReactDom from "react-dom";
import LoginForm from "../LoginForm/LoginForm";
const BackDrop = ({close,show}) => {
  return <div onClick={close} className={`${styles.backDrop} ${ show ? styles.showBackDrop:null}`}></div>;
};

const OverLay = ({show}) => (
<div className={`${styles.overLay} ${ show ? styles.showOverlay:null}`}>

  <LoginForm/>
  </div>);

const Modal = ({show,closeModel}) => {

  return (
    show &&
   ( <Fragment>
      {ReactDom.createPortal(
        <Fragment>
          <BackDrop close={closeModel} show={show}/>
          <OverLay show={show}/>
        </Fragment>,
        document.getElementById("modal")
      )}
    </Fragment>)
   
    
  );
};
export default Modal;
