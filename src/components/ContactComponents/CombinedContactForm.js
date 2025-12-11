import React, { useState } from 'react';

const businessHours = [
  { day: "Monday", hours: "8 am–10 pm" },
  { day: "Tuesday", hours: "8 am–10 pm" },
  { day: "Wednesday", hours: "8 am–10 pm" },
  { day: "Thursday", hours: "8 am–10 pm" },
  { day: "Friday", hours: "8 am–10 pm" },
  { day: "Saturday", hours: "8 am–10 pm" },
  { day: "Sunday", hours: "8 am–10 pm" },
];

export default function CombinedContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    requirement: '',
    company: '',
    address: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [includeEmail, setIncludeEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    setIncludeEmail(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    // Simulate form submission
    try {
      // In a real application, you would send this data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        requirement: '',
        company: '',
        address: ''
      });
      setIncludeEmail(false);
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
      {/* Contact Form - Takes 2/3 of the space */}
      <div className="lg:col-span-2 flex flex-col h-full">
        <form onSubmit={handleSubmit} className="flex flex-col flex-grow bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-white overflow-hidden border-b border-gray-200">
            <div className="p-4">
              <div className="flex items-center">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-[#000080] rounded-lg shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-700 ml-3 bg-clip-text text-transparent bg-gradient-to-r from-[#000080] to-slate-800">Contact information</h2>
              </div>
            </div>
          </div>

          {/* Form fields */}
          <div className="bg-white p-4 border-b border-gray-200 flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200"
                  placeholder="Your email"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200"
                  placeholder="Your phone"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200"
                  placeholder="Subject"
                />
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-gray-700 font-medium mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200"
                  placeholder="Your company name"
                />
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block text-gray-700 font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200"
                  placeholder="Your location"
                />
              </div>
            </div>

            {/* Message Field (full width) */}
            <div className="mt-4">
              <label htmlFor="requirement" className="block text-gray-700 font-medium mb-1">
                Tell us your requirement <span className="text-red-500">*</span>
              </label>
              <textarea
                id="requirement"
                name="requirement"
                rows="4"
                value={formData.requirement}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-slate-500 focus:border-slate-500 resize-none transition-all duration-200"
                placeholder="Describe your requirements in detail..."
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-between items-center bg-white p-4">
            <button
              type="submit"
              className="bg-[#000080] hover:bg-[#000080] text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center"
            >
              <span>Submit Inquiry</span>
              {submitting && (
                <svg className="animate-spin ml-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
            </button>
            
            <button
              type="button"
              className="text-[#000080] hover:text-[#000080] font-medium transition-colors duration-200 flex items-center"
              onClick={() => {
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  subject: '',
                  message: '',
                  requirement: '',
                  company: '',
                  address: ''
                });
                setIncludeEmail(false);
              }}
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear form
            </button>
          </div>
          
          {/* Success/Error Message */}
          {submitted && (
            <div className="p-3 bg-white border border-green-200 text-green-700 rounded-md mx-4 mb-4">
              Thank you for your inquiry! We will get back to you shortly.
            </div>
          )}
          
          {error && (
            <div className="p-3 bg-white border border-red-200 text-red-700 rounded-md mx-4 mb-4">
              {error}
            </div>
          )}
        </form>
      </div>

      {/* Business Hours - Takes 1/3 of the space */}
      <div className="h-full flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-3 opacity-0 hidden lg:block">.</h3>
        <div className="bg-gradient-to-br from-white to-slate-50 p-4 rounded-xl shadow-lg border border-slate-100 flex flex-col flex-grow">
          <div className="flex items-center mb-3">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-[#000080] rounded-lg shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 ml-3 bg-clip-text text-transparent bg-gradient-to-r from-[#000080] to-slate-800">Business Hours</h3>
          </div>
          
          <div className="space-y-1 flex-grow">
            {businessHours.map((schedule, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center py-1 px-2 rounded-lg transition-all duration-200 hover:bg-slate-100/50 text-sm"
              >
                <span className="font-medium text-gray-700">{schedule.day}</span>
                <span className="text-[#000080] bg-slate-100 px-2 py-1 rounded-full font-medium">{schedule.hours}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-2 pt-2 border-t border-slate-100">
            <p className="text-center text-xs text-[#000080] font-medium">We're available to serve you every day!</p>
          </div>

          {/* Contact Support Card */}
          <div className="mt-4 p-4 bg-white rounded-lg shadow-md border border-slate-100">
            <h4 className="text-lg font-semibold text-slate-800 mb-2">Need Immediate Help?</h4>
            <p className="text-gray-600 mb-3">
              Our customer support team is ready to assist you with any questions.
            </p>
            <a href="tel:+919022726250" className="block w-full text-center bg-[#000080] hover:bg-[#000080] text-white font-medium py-2 px-4 rounded-md transition-all duration-200">
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 