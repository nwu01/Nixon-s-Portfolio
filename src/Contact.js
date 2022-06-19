import './Contact.css';
import { useState , useRef, useEffect, } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import{ init } from '@emailjs/browser';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {LoadScript, Marker, GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api'
import { Container, Row, Col } from 'react-bootstrap';

init("798k6ds7dVf_lKpBk");
function Map(){
  const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '15px'
  };
  
  const center = {
    lat: 49.2786759,
    lng: -123.1338513
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  if(!isLoaded){
    return <div>Somethings Wrong</div>;
  } else {
    return   <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={12}
  
  >
    { /* Child components, such as markers, info windows, etc. */ }
    <Marker position={{ lat: 49.2786759, lng: -123.1338513 }} />
  </GoogleMap>;
  }
}
const Contact = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <div id="Contact" className="Contact-Section">
      <header className="Contact-Content">
        <div className='ContactForm'>
          <div className='container Contact-Container shadow'>
            <div className='row ContainerRow'>
              <div className='col-5 xs={12} lg={5} xl={5} text-center'>
                <div className='contactForm'>
                  <h2 className='Contact-Form-Title'>Want to keep in touch?</h2>
                  <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6 xs={6} sm={6} lg={6} xl={6}'>
                    <input
                      type='text'
                      name='name'

                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name'
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name*'
                    ></input>
                    {/* {errors.name && <span className='errorMessage'>{errors.name.message}</span>} */}
                  </div>
                  <div className='col-6 xs={6} sm={6} lg={6} xl={6}'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address*'
                    ></input>
                    {/* {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )} */}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Please enter a subject'
                        },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject*'
                    ></input>
                    {/* {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )} */}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={5}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message*'
                    ></textarea>
                    {/* {errors.message && <span className='errorMessage'>Please enter a message</span>} */}
                  </div>
                </div>
                <div className='wrap'>
                <button className='button submit-btn' disabled={disabled} type='submit'>
                  Submit
                </button>
                </div>
                  </form>
                </div>
                <ToastContainer />
              </div>
              <div className="google-maps-container col-5 xs={12} lg={5} xl={5} text-center">
           
                <Map />
          
              </div>
            </div>
            <Container>
              <Col className="contact-info-col">
                <div className='contact-info'>&nbsp;<i class='fas fa-mobile-alt fa-2x'></i> <span className='contact-text'>&nbsp;+1 (604)-783-7022</span></div>
                <div className='contact-info'><i class='far fa-envelope fa-2x'></i> <span className='contact-text'>&nbsp;nixonwu01@gmail.com</span></div>
                <div className='contact-info'>&nbsp;<i class="fas fa-map-marker-alt fa-2x"></i> <span className='contact-text'>&nbsp;Vancouver, British Columbia, Canada</span></div>
              </Col>
            </Container>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Contact;