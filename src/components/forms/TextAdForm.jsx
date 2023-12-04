import { useState } from "react";
import CreateBase from "../common/CreateBase";
import { Form } from 'react-bootstrap';
import style from "./Forms.module.css"
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modals from "../common/Modals";
import { alertMessage, handleClose, handleShow } from "../../features/adInsightsSlice";

const TextAdForm = () => {
  const [formData, setFormData] = useState({
    heading01: '',
    heading02: '',
    businessName: '',
    websiteURL: '',
    description01: '',
    buttonLabel: 'Select',
  });
  const [formErrors, setFormErrors] = useState({});

  const message = useSelector(state => state.adInsightsData)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.name]: '',
    });
  };

  const validateForm = () => {
    const errors = {};

    if (formData.heading01.trim() === "") {
      errors.heading01 = "Heading 01 is required";
    }
    
    if (formData.heading02.trim() === "") {
      errors.heading02 = "Heading 02 is required";
    } 
    
    if (formData.businessName.trim() === "") {
      errors.businessName = "Business Name is required";
    } 

    if (formData.description01.trim() === "") {
      errors.description01 = "Description 01 is required";
    }

    if (formData.websiteURL.trim() === "") {
      errors.websiteURL = "Website URL is required";
    }

    if (formData.buttonLabel === 'Select') {
      errors.buttonLabel = 'Please select a valid button label';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm(); 
    if (isFormValid) {
      dispatch(alertMessage("Submitted"));
      dispatch(handleShow(true));
      
      setTimeout(() => {
        dispatch(alertMessage(""));
        navigate("/createAds");
      }, 600);
    }
  };

  const handleBackButtonClick = () => {
    navigate("/createAds")
  };

  const handleCloseModal = () => {
    dispatch(handleClose(false));
};

  return (
    <>
      {message.alert.length > 0 && <Modals text={message.alert} show={message.show} handleClose={handleCloseModal} />}
      <CreateBase heading="Create Text & Media">
        <Form onSubmit={handleSubmit} className={style.main_container} >
          <Form.Group className="row">
            <Form.Group className="col-md-6">
              <Form.Group className="mb-3 mr-2">
                <Form.Label >Heading 01 <small>*{formErrors && formErrors.heading01}</small></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add a heading that would make users interested"
                  name="heading01"
                  value={formData.heading01}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 mr-2">
                <Form.Label >Heading 02<small>*{formErrors && formErrors.heading02}</small></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add a heading that would make users interested"
                  name="heading02"
                  value={formData.heading02}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 mr-2">
                <Form.Label >Business Name<small>*{formErrors && formErrors.businessName}</small></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add your business name"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Group>
            <Form.Group className="col-md-6">
              <Form.Group className="mb-3 mr-2">
                <Form.Label >Description 01 <small>*{formErrors && formErrors.description01}</small></Form.Label>
                <Form.Control style={{ paddingBottom: "20px" }}
                  rows="4"
                  as="textarea"
                  placeholder="Add primary text to help users understand more about your products, services or offers"
                  name="description01"
                  value={formData.description01}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 mr-2">
                <Form.Label >Button Label<small>*{formErrors && formErrors.buttonLabel}</small></Form.Label>
                <Form.Control
                  as="select"
                  name="buttonLabel"
                  value={formData.buttonLabel}
                  onChange={handleChange}
                >
                  <option value="Select" disabled>Select a label that best suits your ad</option>
                  <option value="Submit">Submit</option>
                  <option value="Next">Next</option>
                </Form.Control>
              </Form.Group>
            </Form.Group>
            <Form.Group className="col-md-12">
              <Form.Group className="mb-3 mr-2">
                <Form.Label >Website URL<small>*{formErrors && formErrors.websiteURL}</small></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add the URL of the landing page you want to redirect users to"
                  name="websiteURL"
                  value={formData.websiteURL}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Group>
          </Form.Group>
          

          <div className="common_btn">
            <Button bgcolor="light" textcolor="black" className="rounded-1" onClick={handleBackButtonClick}>Back</Button>
            <Button bgcolor="primary" textcolor="white" className="rounded-1">Submit</Button>
          </div>
        </Form>

      </CreateBase>
    </>
  )
}

export default TextAdForm;