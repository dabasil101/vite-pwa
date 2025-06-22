import { useRef, useState } from 'react'
import { Mail, Linkedin, Github, Instagram, Youtube } from 'lucide-react'
import { SiTiktok } from 'react-icons/si'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from 'emailjs-com'

function Contact() {
  const formRef = useRef()
  const [sending, setSending] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setSending(true)

    emailjs
      .sendForm(
        'your_service_id',     // Replace with your EmailJS service ID
        'your_template_id',    // Replace with your EmailJS template ID
        formRef.current,
        'your_public_key'      // Replace with your EmailJS public key
      )
      .then(
        () => {
          toast.success('Message sent successfully!')
          formRef.current.reset()
        },
        (error) => {
          toast.error('Failed to send message. Please try again.')
          console.error(error)
        }
      )
      .finally(() => setSending(false))
  }

  return (
    <div className="container mx-auto p-6 min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-5xl bg-gray-100 shadow-md rounded-xl border border-gray-200 p-8 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT: Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Me</h2>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={sending}
              className={`w-full bg-blue-500 text-white px-6 py-2 rounded-md transition-all duration-200 ${
                sending ? 'opacity-60 cursor-not-allowed' : 'hover:bg-blue-600'
              }`}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* RIGHT: Contact Info + Socials */}
        <div className="flex flex-col justify-between items-center text-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Let's Connect</h1>
            <p className="text-gray-600 mb-6">
              I'm always open to chatting about code, coffee, and creative ideas. Let's build something great together!
            </p>
            <div className="text-gray-700 space-y-2">
              <p className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                alexbasilxbox@gmail.com
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
            <a
              href="https://www.linkedin.com/in/alex-basil-737828322/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-all hover:scale-110 animate-pulse-hover"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/dabasil101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-all hover:scale-110 animate-pulse-hover"
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/thegf.experience/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition-all hover:scale-110 animate-pulse-hover"
              title="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@dabasil101?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-all hover:scale-110 animate-pulse-hover"
              title="TikTok"
            >
              <SiTiktok className="w-6 h-6" />
            </a>
            <a
              href="hhttps://www.youtube.com/@AlexBasil-f1y"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-600 transition-all hover:scale-110 animate-pulse-hover"
              title="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Toast Messages */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  )
}

export default Contact
