"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SliceButton from "../common/Shopbutton";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again later.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      title: "WhatsApp",
      value: "+91 98765 43210",
      link: "https://wa.me/919876543210",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Instagram",
      value: "@shakumbhari.clothing",
      link: "https://instagram.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Email Us",
      value: "hello@shakumbhari.com",
      link: "mailto:hello@shakumbhari.com",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "text-lotus-pink",
      bgColor: "bg-lotus-pink/10"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[35px] md:py-[70px]">
        <h2 className="font-serif text-center text-3xl md:text-4xl font-bold text-lotus-text-primary mb-8">
            Get in Touch
          </h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

        {/* Left: Social + Address */}
        <div className="lg:col-span-2 space-y-6">
          {socialLinks.map((info, idx) => (
            <motion.a
              key={info.title}
              href={info.link}
              target={info.title !== "Email Us" ? "_blank" : undefined}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="block p-6 bg-white md:rounded-3xl rounded-[10px] border border-[#af89bc] shadow-sm hover:shadow-lg hover:border-lotus-pink/30 transition-all group"
            >
              <div className="flex items-center gap-5">
                <div className={`w-12 h-12 ${info.bgColor} ${info.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-lotus-text-secondary/60 mb-1">
                    {info.title}
                  </h3>
                  <p className="text-lg font-medium text-lotus-text-primary">
                    {info.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 bg-white md:rounded-[2.5rem] rounded-[10px] border border-[#af89bc] relative overflow-hidden mt-2"
          >
            <h3 className="text-xl font-serif font-bold text-lotus-text-primary mb-3">
              Visit Our Studio
            </h3>
            <p className="text-lotus-text-secondary leading-relaxed">
              123 Shakumbhari Lane, Textile District
              <br />
              Jaipur, Rajasthan 302001
              <br />
              India
            </p>
            <div className="mt-6 text-sm font-medium text-lotus-pink">
              Mon - Sat: 10:00 AM - 7:00 PM
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-lotus-pink/5 rounded-full blur-2xl"></div>
          </motion.div>
        </div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3 bg-white/80 backdrop-blur-md rounded-[10px] md:rounded-[2.5rem] border border-[#af89bc] p-5 md:p-12 shadow-xl shadow-[#af89bc]/10"
        >
          

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-lotus-text-primary">
                Message Sent!
              </h3>
              <p className="text-lotus-text-secondary max-w-sm">
                Thank you for reaching out. We&apos;ve received your message and our team will get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 text-red-500 text-sm rounded-xl border border-red-100">
                  {error}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-lotus-text-primary ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-6 py-4 rounded-2xl border ${errors.name ? "border-red-400" : "border-[#af89bc]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#af89bc] focus:border-[#af89bc] mt-1 transition-all`}
                  />
                  {errors.name && <p className="text-xs text-red-500 ml-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-lotus-text-primary ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-6 py-4 rounded-2xl border ${errors.email ? "border-red-400" : "border-[#af89bc]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#af89bc] focus:border-[#af89bc] mt-1 transition-all`}
                  />
                  {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-lotus-text-primary ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className={`w-full px-6 py-4 rounded-2xl border ${errors.subject ? "border-red-400" : "border-[#af89bc]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#af89bc] focus:border-[#af89bc] mt-1 transition-all`}
                />
                {errors.subject && <p className="text-xs text-red-500 ml-1">{errors.subject}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm mb-2 font-medium text-lotus-text-primary ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  className={`w-full px-6 py-4 rounded-2xl border ${errors.message ? "border-red-400" : "border-[#af89bc]"} mt-1 bg-white focus:outline-none focus:ring-2 focus:ring-[#af89bc] focus:border-[#af89bc] transition-all resize-none`}
                />
                {errors.message && <p className="text-xs text-red-500 ml-1">{errors.message}</p>}
              </div>
              <div className="pt-4">
                {/* <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-semibold text-white bg-lotus-pink rounded-2xl shadow-lg shadow-lotus-pink/20 hover:opacity-90 transition-all disabled:opacity-70 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button> */}
                <SliceButton className="w-full px-4 py-5  ">
                    Submit
                </SliceButton>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}