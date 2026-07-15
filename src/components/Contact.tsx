import { useState, ChangeEvent, FormEvent } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please complete all fields before sending.");
      return;
    }

    setStatus("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE", // TODO: Replace with actual Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/akhilesh-mekarthi-a62501227/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — akhilesh-mekarthi
              </a>
            </p>
            <h4>Email</h4>
            <p>
              <a href="mailto:akhileshmekarthi74@gmail.com" data-cursor="disable">
                akhileshmekarthi74@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p>Hyderabad, India</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Mekarthiakhi"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/akhilesh-mekarthi-a62501227/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/akhileshmekarthi"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box contact-form-box">
            <h4>Send a Message</h4>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  rows={5}
                />
              </label>
              <button type="submit" className="contact-submit">
                Send via Email
              </button>
              {status && <p className="contact-status">{status}</p>}
            </form>
          </div>
        </div>
        <div className="contact-credit">
          <h2>
            Designed and Developed <br /> by <span>Akhilesh Mekarthi</span>
          </h2>
          <h5>
            <MdCopyright /> 2026
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
