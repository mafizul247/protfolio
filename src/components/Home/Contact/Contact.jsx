import React, { useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneSquareAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import github from './../../../assets/icons/github.png'
import linkedin from './../../../assets/icons/linkedin.png'
import facebook from './../../../assets/icons/facebook.png'
import email from './../../../assets/icons/red-email.jpg'
import phone from './../../../assets/icons/phone.png'
import whatsApp from './../../../assets/icons/WhatsApp_icon.png.webp'
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        Swal.fire({
            title: "Are you sure you want to send this message?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                setIsSending(true);
                emailjs.sendForm(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    form.current,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                )
                    .then(() => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your message has been sent",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        e.target.reset();
                    }, (error) => {
                        console.log(error.text);
                        Swal.fire({
                            icon: "error",
                            title: "Message failed to send",
                            text: "Please try again in a moment.",
                        });
                    })
                    .finally(() => setIsSending(false));
            }
        });
    };

    return (
        <section id='contact' className='mx-4 md:mx-16 bg-slate-100 shadow-lg px-4 py-12 md:p-12'>
            <h2 className='text-3xl font-bold text-gray-800 text-center mb-12'>Contact</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] bg-gray-700 text-white p-6 md:p-8 rounded-md'>
                <div>
                    <h3 className='text-2xl sm:text-3xl font-semibold mb-4'>Send Me a Message</h3>
                    <form ref={form} onSubmit={sendEmail} className='space-y-4'>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-primary text-black w-full" required />
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered input-primary text-black w-full" required />
                        <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered input-primary text-black w-full" required />
                        <input type="text" name='title' placeholder="Subject" className="input input-bordered input-primary text-black w-full" required />
                        <textarea name='message' className="textarea textarea-primary text-black w-full" placeholder="Details Message" required></textarea>
                        <div className='text-center'>
                            <button className='btn btn-success w-full sm:w-auto' type="submit" disabled={isSending}>
                                {isSending ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <h3 className='text-2xl sm:text-3xl font-semibold mb-4'>Get in Touch</h3>
                    <p className='mb-3 text-sm sm:text-base'>
                        I'm a web developer with a focus on the MERN stack, but still exploring other technologies and
                        frameworks that catch my interest! If you're looking for a developer to add to your team, I'd
                        love to hear from you.
                    </p>
                    <div className='space-y-2 text-sm sm:text-base'>
                        <div className='flex items-center gap-2'>
                            <FaMapMarkerAlt className='text-xl shrink-0' />
                            <address className='not-italic'>
                                29/22, Tajmohal Road, Block-C, Mohammadpur, Dhaka, Bangladesh
                            </address>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaPhoneSquareAlt className='text-xl shrink-0' />
                            <a href="tel:+8801912007697" className='hover:text-purple-300 transition-colors'>+88 01912007697</a>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaEnvelope className='text-xl shrink-0' />
                            <a href="mailto:mafizul247@gmail.com" className='hover:text-purple-300 transition-colors break-all'>mafizul247@gmail.com</a>
                        </div>
                    </div>
                    <div className='mt-6 flex flex-wrap gap-3 sm:gap-4'>
                        <a href="https://github.com/mafizul247"><img className='h-10 w-10 sm:h-12 sm:w-12 border-2 border-gray-100 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600 transition-colors' src={github} alt='Github' /></a>
                        <a href="https://www.linkedin.com/in/mafizul-islam-john-24721b145/"><img className='h-10 w-10 sm:h-12 sm:w-12 border-2 border-gray-100 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600 transition-colors' src={linkedin} alt='LinkeDin' /></a>
                        <a href="https://www.facebook.com/mafizul.islam.john/"><img className='h-10 w-10 sm:h-12 sm:w-12 border-2 border-gray-100 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600 transition-colors' src={facebook} alt='Facebook' /></a>
                        <a href="mailto:mafizul247@gmail.com"><img className='h-10 w-10 sm:h-12 sm:w-12 border-2 border-gray-100 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600 transition-colors' src={email} alt='Email' /></a>
                        <a href="tel:+8801912007697"><img className='h-10 w-10 sm:h-12 sm:w-12 border-2 border-gray-100 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600 transition-colors' src={phone} alt='Phone' /></a>
                        <a href="https://wa.me/+8801711337820"><img className='h-10 w-10 sm:h-12 sm:w-12 border-2 border-gray-100 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600 transition-colors' src={whatsApp} alt='WhatsApp' /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;