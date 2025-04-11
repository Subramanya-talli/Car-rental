import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Have questions or need assistance? Feel free to reach out to us. We’re here to help you with bookings, vehicle listings, or anything else!
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-gray-600 text-sm">
          <p>Email: <a href="mailto:support@carvault.com" className="text-blue-600">support@carvault.com</a></p>
          <p>Phone: +91-98765-43210</p>
          <p>Address: #123, CarVault Lane, Bengaluru, India</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
