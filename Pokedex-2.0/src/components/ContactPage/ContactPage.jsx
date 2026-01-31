import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./ContactPage.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <EmailIcon fontSize="large" />,
      title: "Email Us",
      info: "support@pokedex.com",
      color: "#FF6B6B",
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      title: "Call Us",
      info: "+91 12345 67890",
      color: "#4ECDC4",
    },
    {
      icon: <LocationOnIcon fontSize="large" />,
      title: "Visit Us",
      info: "123 Pokemon St, Inez Panjim, Goa",
      color: "#FFD93D",
    },
  ];

  const socialLinks = [
    { icon: <TwitterIcon fontSize="large" />, color: "#1DA1F2" },
    { icon: <FacebookIcon fontSize="large" />, color: "#4267B2" },
    { icon: <InstagramIcon fontSize="large" />, color: "#E4405F" },
    { icon: <YouTubeIcon fontSize="large" />, color: "#FF0000" },
  ];

  return (
    <>
      <Navbar />
      <section id="contact-container">
        <div className="contact-hero">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-hero-content"
          >
            <h1 className="contact-title">Get In Touch</h1>
            <p className="contact-subtitle">
              Have questions? We'd love to hear from you!
            </p>
          </motion.div>
        </div>

        <div className="contact-content">
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title">Contact Information</h2>
            <div className="contact-info-cards">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="contact-info-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{ borderLeft: `5px solid ${item.color}` }}
                >
                  <div className="info-icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div className="info-text">
                    <h3 className="info-title">{item.title}</h3>
                    <p className="info-detail">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-section">
              <h3 className="social-title">Follow Us</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    className="social-icon"
                    style={{ backgroundColor: social.color }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="map-placeholder">
              <motion.div
                className="map-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <LocationOnIcon fontSize="large" />
                <p>123 Pokemon St, Inez Panjim, Goa</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="section-title">Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ash Ketchum"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ash@pokemon.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  rows="6"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn-submit"
                whileHover={{ scale: 1.02, backgroundColor: "#BF0606" }}
                whileTap={{ scale: 0.98 }}
              >
                <SendIcon />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="faq-section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="faq-content"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h4 className="faq-question">What is Pokedex 2.0?</h4>
                <p className="faq-answer">
                  Pokedex 2.0 is an advanced Pokemon encyclopedia that helps
                  trainers discover, track, and learn about all Pokemon species.
                </p>
              </div>
              <div className="faq-item">
                <h4 className="faq-question">How do I join the community?</h4>
                <p className="faq-answer">
                  Simply click on the Community page and register with your
                  email. It's completely free!
                </p>
              </div>
              <div className="faq-item">
                <h4 className="faq-question">Can I suggest new features?</h4>
                <p className="faq-answer">
                  Absolutely! We love feedback from our users. Use the contact
                  form above to share your ideas.
                </p>
              </div>
              <div className="faq-item">
                <h4 className="faq-question">
                  Is the Pokedex regularly updated?
                </h4>
                <p className="faq-answer">
                  Yes! We update our database regularly with the latest Pokemon
                  information and discoveries.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
