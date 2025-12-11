import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    requirement: '',
    company: '',
    address: '',
    budget: ''
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
        address: '',
        budget: ''
      });
      setIncludeEmail(false);
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-xl font-bold text-gray-700 mb-4">Get In Touch</h3>
      <form onSubmit={handleSubmit} className="w-full h-full flex flex-col">
        {/* Header Section */}
        <div className="bg-white rounded-t-xl shadow-md overflow-hidden border-b border-gray-200">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold text-gray-700">Contact information</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Form fields */}
        <div className="bg-white shadow-md p-6 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200"
                placeholder="Your email"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200"
                placeholder="Your phone"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200"
                placeholder="Subject"
              />
            </div>

            {/* Company Field */}
            <div>
              <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200"
                placeholder="Your company name"
              />
            </div>

            {/* Address Field */}
            <div>
              <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200"
                placeholder="Your location"
              />
            </div>

            {/* Budget Field */}
            <div>
              <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">
                Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200"
              >
                <option value="">Select budget range</option>
                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000+">$25,000+</option>
              </select>
            </div>
          </div>

          {/* Message Field (full width) */}
          <div className="mt-6">
            <label htmlFor="requirement" className="block text-gray-700 font-medium mb-2">
              Tell us your requirement <span className="text-red-500">*</span>
            </label>
            <textarea
              id="requirement"
              name="requirement"
              rows="5"
              value={formData.requirement}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-slate-500 focus:border-slate-500 resize-none transition-all duration-200"
              placeholder="Describe your requirements in detail..."
            ></textarea>
          </div>
          
          {/* Privacy consent checkbox */}
          <div className="mt-6">
            <label className="inline-flex items-center">
              <input 
                type="checkbox"
                required
                className="rounded border-gray-300 text-[#000080] bg-white shadow-sm focus:border-slate-300 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-gray-700">I agree to the <a href="#" className="text-[#000080] hover:underline">privacy policy</a> and consent to being contacted regarding my inquiry.</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-between items-center bg-white p-4 shadow-md">
          <button
            type="submit"
            className="bg-[#000080] hover:bg-[#000080] text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 flex items-center"
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
                address: '',
                budget: ''
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
          <div className="mt-4 p-4 bg-white border border-green-200 text-green-700 rounded-md">
            Thank you for your inquiry! We will get back to you shortly.
          </div>
        )}
        
        {error && (
          <div className="mt-4 p-4 bg-white border border-red-200 text-red-700 rounded-md">
            {error}
          </div>
        )}
      </form>
    </div>
  );
} 