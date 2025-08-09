import React, { useState } from 'react';

import {
    RiLinkedinBoxFill,
    RiGithubFill,
    RiTwitterXLine,
    RiInstagramLine,
    RiWhatsappLine,
    RiFacebookBoxFill
} from 'react-icons/ri';

const ContactForm = () => {

    const [status, setStatus] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setStatus(null);

        const form = e.target;
        const data = new FormData(form);

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: data,
        });

        const result = await response.json();
        if (result.success) {
            setStatus('Message sent successfully!');
            form.reset();
        } else {
            setStatus('Failed to send message. Please try again.');
        }
        setSubmitting(false);
    };

    
    return (
        <section className="bg-white py-8 px-6 md:px-16">
            <div className="max-w-4xl mx-auto shadow-lg rounded-xl border border-[#CCCCD9]">
                <div className="md:flex">
                    {/* Left Info */}
                    <div className="bg-[#2F2D73] text-white md:w-1/2 w-full p-10 space-y-6 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
                            <p className="text-[#d8d8e0] mb-6">
                                Have questions or want to work together? Fill out the form and I’ll get back to you soon.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p className="text-[#d8d8e0]">info@healurmind.com</p>
                                </div>
                                <div>
                                    <p className="font-medium">Location</p>
                                    <p className="text-[#d8d8e0]">Al owais building, Port Saeed, Dubai</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div>
                            <p className="font-medium mb-3">Follow me</p>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/in/amolkadam5256/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#CCCCD9] hover:text-white transition-all text-2xl"
                                >
                                    <RiLinkedinBoxFill />
                                </a>

                                <a
                                    href="https://twitter.com/amolkadam1274"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#CCCCD9] hover:text-white transition-all text-2xl"
                                >
                                    <RiTwitterXLine />
                                </a>
                                <a
                                    href="https://www.instagram.com/amolkadam1274/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#CCCCD9] hover:text-white transition-all text-2xl"
                                >
                                    <RiInstagramLine />
                                </a>
                                <a
                                    href="https://wa.me/919123456789"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#CCCCD9] hover:text-white transition-all text-2xl"
                                >
                                    <RiWhatsappLine />
                                </a>
                                <a
                                    href="https://www.facebook.com/amolkadam1274"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#CCCCD9] hover:text-white transition-all text-2xl"
                                >
                                    <RiFacebookBoxFill />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right Form */}
                    <div className="bg-white md:w-1/2 p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Web3Forms Access Key */}
                            <input type="hidden" name="access_key" value="531a6639-438d-4d33-981c-47914c79c7f1" />
                            {/* Optional: Redirect URL or from_name */}
                            <input type="hidden" name="from_name" value="Website Contact Form" />

                            <div>
                                <label className="block text-[#3B3973] font-semibold mb-1">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 border border-[#CCCCD9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B3973]"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-[#3B3973] font-semibold mb-1">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 border border-[#CCCCD9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B3973]"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-[#3B3973] font-semibold mb-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 border border-[#CCCCD9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B3973]"
                                    rows="4"
                                    placeholder="Write your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full bg-[#3B3973] text-white py-3 rounded-md hover:bg-[#2F2D73] transition-all duration-300"
                            >
                                {submitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {/* Alert Message */}
                            {status && (
                                <div
                                    className={`text-sm text-center font-medium mt-2 ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'
                                        }`}
                                >
                                    {status}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
