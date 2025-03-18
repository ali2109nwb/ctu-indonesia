"use client";

import MotionDiv from '@/components/MotionDiv';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form reference is null");
      return;
    }

    emailjs
      .sendForm(
        "service_m10koso",
        "template_k59iogr",
        form.current,
        "D4yZceXxGJUtEmypp"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Email sent successfully!');
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send email.');
        }
      );
  };

  return (
    <MotionDiv>
      <div className="font-clash pl-8 pr-8 md:pl-0 md:pr-0 sm:pl-8 sm:pr-8 pt-24 mb-8 md:pt-24 sm:pt-24 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-8 mt-2 md:mt-8 ms-4">Contact</h1>
        <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mb-8 ms:mb-8 md:mb-8">
          <div className="flex gap-4 mb-4">
            <input 
              type="text" 
              name="full_name" 
              placeholder="Your Name" 
              className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <input 
            type="email" 
            name="to_email"
            value="nuraliali2109@gmail.com"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            readOnly
          />
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            rows={6} 
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button 
            type="submit" 
            className="bg-blue-500 font-semibold text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </MotionDiv>
  );
};

export default Contact;
