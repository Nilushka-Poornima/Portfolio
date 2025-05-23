import React, { useRef } from 'react';
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CONTACT } from '../constants';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_lpbxnvk', // Replace with your Email.js service ID
        'template_r5ojxl7', // Replace with your Email.js template ID
        formRef.current,
        'H_E1zqUt0b52Y-RI4' // Replace with your Email.js user ID
      )
      .then(
        (result) => {
          toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        },
        (error) => {
          toast.error('Failed to send message. Please try again later.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );

    e.target.reset();
  };

  return (
    <section id='Contact'>
      <div className="border-b border-neutral-900 lg:pb-1 pb-36">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="my-10 text-center text-4xl font-semibold text-[#4ade80]"
        >
          Get <span className="text-neutral-500">in
            <span className='animate-pulse font-extrabold'> Touch</span>
          </span>
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-center tracking-tighter"
        >
          <p className="my-4 tracking-wide">{CONTACT.address}</p>
          <p className="my-4 tracking-wide">{CONTACT.phoneNo}</p>
          <a href="/" className="text-[#4ade80] tracking-wide">{CONTACT.email}</a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-slate-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(176,31,138,0.41),rgba(255,255,255,0))] text-white py-5 lg:py-10 px-5 rounded-md mt-10 mx-auto max-w-md md:max-w-lg"
        >
          <h2 className="text-2xl text-center mb-6">Contact Email</h2>
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-3 rounded-md bg-transparent border border-white/20 placeholder-[#babcbb] placeholder-opacity-50 text-white text-xs h-12 focus:outline-none focus:ring-1 focus:ring-[#4ade80]"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-3 rounded-md bg-transparent border border-white/20 placeholder-[#babcbb] placeholder-opacity-50 text-white text-xs h-12 focus:outline-none focus:ring-1 focus:ring-[#4ade80]"
            />
            <input
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="p-3 rounded-md bg-transparent border border-white/20 placeholder-[#babcbb] placeholder-opacity-50 text-white text-xs h-12 focus:outline-none focus:ring-1 focus:ring-[#4ade80]"
            ></input>
            <button
              type="submit"
              className="p-3 rounded-md bg-transparent border border-white/20 hover:bg-[#4ade80] transition text-white text-sm font-semibold"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
