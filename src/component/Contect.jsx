import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useContext } from "react";
import ThemeContext from "../Context/themeContext";
import { FaArrowRight } from "react-icons/fa6";
import { useToast } from '@chakra-ui/react';
import { MdEmail } from "react-icons/md";
export const ContactUs = () => {
  const form = useRef();
  const toast = useToast();
  const { dark } = useContext(ThemeContext);

  const Style = {
    color: dark ? 'white' : 'RGB(0, 0, 0)',
    backgroundColor: dark ? '#11001F' : 'white',
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_olbfwxv', 'template_ppu73vo', form.current, {
        publicKey: 'ShTep00B1G4H8mTxs',
      })
      .then(
        () => {
          // Show success toast
          toast({
            title: 'Successfully',
            description: "Email sent",
            status: 'success',
            duration: 3000,
            isClosable: true,
          });

          // Reset form fields
          form.current.reset();
        },
        (error) => {
          // Show error toast
          toast({
            title: 'UnSuccessfully',
            description: error.text,
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <>
    <div className="ContactUs-container"  id="contact" style={Style}   data-aos="zoom-in-up" data-aos-duration="1000">
      <div className="top-contact-us" style={Style}  data-aos="zoom-in-up" data-aos-duration="1000">
        <p style={Style}  data-aos="zoom-in-up" data-aos-duration="1000">Connect with me</p>
        <h2 className='contact-title' style={Style}  data-aos="zoom-in-up" data-aos-duration="1000" >Get in touch</h2>
        <p  data-aos="zoom-in-up" data-aos-duration="1000" style={{ textAlign: "center", ...Style }} >I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>
      </div>
      <div className="btm-contact-us" style={Style}>
        <form ref={form} onSubmit={sendEmail} style={Style}>
          <div className="box-contact-1" style={Style}  data-aos="zoom-in-up" data-aos-duration="1000">
            <input type="text" name="from_name" placeholder='Enter your name' className={dark ? "dark-input" : "light-input"} />
            <input type="email" name="from_email" placeholder='Enter your email' className={dark ? "dark-input" : "light-input"} />
          </div>

          <div className="box-contact-2" style={Style}  data-aos="zoom-in-up" data-aos-duration="1000">
            <textarea name="message" placeholder='Enter your message' className={dark ? "dark-input" : "light-input"} />
            <br />
            <button type="submit" className={dark ? "dark-input dark-btn" : "light-input light-btn"}>
              Send Email <FaArrowRight style={{ display: "inline" }} />
            </button>
          </div>
        </form>
      </div>
    </div>

   
    </>
  );
};
