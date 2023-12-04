import Cards from './../common/Cards';
import Button from './../common/Button';
import style from "./CreateAds.module.css"
import CreateBase from '../common/CreateBase';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Modals from '../common/Modals';
import { useDispatch, useSelector } from 'react-redux';
import { alertMessage, handleClose, handleShow } from '../../features/adInsightsSlice';

const CreateAds = () => {
    const message =  useSelector(state => state.adInsightsData)
    const dispatch = useDispatch()
    
    const textCheckboxRef = useRef(null);
    const textMediaCheckboxRef = useRef(null);
    const navigate = useNavigate()

    const handleCombinedClicks = () => {
        nextBtnHandler();
        dispatch(handleShow(true)) 
      }

    const handleCloseModal = () => {
        dispatch(handleClose(false));
    };
    
    const nextBtnHandler = () => {
        if (textCheckboxRef.current.checked && !textMediaCheckboxRef.current.checked) {
            dispatch(alertMessage(""))
            navigate('/textAdForm');
        } else if (!textCheckboxRef.current.checked && textMediaCheckboxRef.current.checked) {
            dispatch(alertMessage(""))
            navigate('/textAndMediaAdForm');
        } else if (textCheckboxRef.current.checked && textMediaCheckboxRef.current.checked) {
            dispatch(alertMessage(""))
            navigate('/textAndMediaAdForm');
        } else {
           dispatch(alertMessage("Please select at least one."))
        }
    }
    
    return (
        <>
        {message.alert.length > 0 && <Modals text={message.alert} show={message.show} handleClose={handleCloseModal}/>}
            <CreateBase heading="Create Ads">
                <div className={style.main_container}>
                <div className={style.cardItems}>
                    <div className="row">
                        <div className="col-md-6">
                            <Cards title="Text Ad" textUseRef={textCheckboxRef}/>
                        </div>
                        <div className="col-md-6">
                            <Cards title="Media Ad" textUseRef={textMediaCheckboxRef}/>
                        </div>
                    </div>
                </div>
                </div>
                <div className="common_btn">
                    <Button bgcolor="primary" textcolor="white" className="rounded-1" onClick={handleCombinedClicks}>Next</Button>
                </div>
            </CreateBase>
        </>
    )
}

export default CreateAds;