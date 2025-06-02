import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (formValues.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }
    if (!/^\S+@\S+$/.test(formValues.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (formValues.subject.trim().length === 0) {
      newErrors.subject = "Subject is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const result = await emailjs.sendForm(
        "service_0l5skgs",
        "template_oybdrdt",
        formRef.current,
        "y6Xb9utVu8zhVIXO2"
      );
      console.log(result.text);
      alert("Message sent successfully!");
      setFormValues({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Email sending error:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <h1 className="text-3xl font-bold text-center">Get in touch</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              value={formValues.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              value={formValues.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block font-medium">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            value={formValues.subject}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
            rows="5"
            value={formValues.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-md"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}
