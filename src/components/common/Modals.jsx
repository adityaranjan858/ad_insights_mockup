import Modal from 'react-bootstrap/Modal';
import style from "./Modals.module.css"
import { useEffect } from 'react';

const Modals = ({text, show, handleClose}) => {
  useEffect(() => {
    if (show) {
      const timeoutId = setTimeout(() => {
        handleClose(); // Close the modal after 600 milliseconds
      }, 600);
      return () => clearTimeout(timeoutId);
    }
  }, [show, handleClose, text]);

  const submitWord = (word) => {
    const regex = /Submitted/gi; 
    const result = regex.test(word); 
    return result;
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={style.main_container}
      >
        <Modal.Body className={style.modal_body}>
          <div className={style.item}>
        {submitWord(text) && <i className="fa-solid fa-circle-check" style={{color : "rgb(13,110,253)"}}></i>}
          {text}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modals;