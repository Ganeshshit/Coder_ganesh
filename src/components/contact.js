import React, { useState } from "react"

const FormInput = ({ type, label, placeholder }) => {
    return (
        <div className="mb-4 w-full">
            <label className="block text-dark dark:text-light text-sm font-medium mb-2">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full p-3 rounded-lg border-2 border-dark/50 dark:border-light/50
                focus:border-primary dark:focus:border-primaryDark focus:outline-none
                bg-light dark:bg-dark text-dark dark:text-light transition-all duration-300"
            />
        </div>
    )
}

const Contact = () => {
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Thanks for your submission!');
        // Here you would typically handle form submission to a backend
    }

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-light/80 dark:bg-dark/80 rounded-xl shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-dark dark:text-light mb-6 text-center">Get In Touch</h2>

            <form onSubmit={handleSubmit}>
                <FormInput type="text" label="Name" placeholder="Your name" />
                <FormInput type="email" label="Email" placeholder="your.email@example.com" />
                <FormInput type="tel" label="Phone" placeholder="Your phone number" />

                <div className="mb-4 w-full">
                    <label className="block text-dark dark:text-light text-sm font-medium mb-2">Message</label>
                    <textarea
                        placeholder="Your message"
                        className="w-full p-3 rounded-lg border-2 border-dark/50 dark:border-light/50
                        focus:border-primary dark:focus:border-primaryDark focus:outline-none
                        bg-light dark:bg-dark text-dark dark:text-light transition-all duration-300
                        min-h-[120px]"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-6 bg-primary text-light rounded-lg font-medium
                    hover:bg-primary/80 dark:bg-primaryDark dark:text-dark
                    dark:hover:bg-primaryDark/80 transition-all duration-300"
                >
                    Send Message
                </button>

                {formStatus && (
                    <p className="mt-4 text-center text-green-600 dark:text-green-400">{formStatus}</p>
                )}
            </form>
        </div>
    )
}

export default Contact
