import React from 'react';

const Footer = () => {
  return (
   <div>
    <hr/>
     <footer className="text-white py-10">
      <div className=" container mx-auto flex flex-wrap justify-between">
        <div className=" w-1/6 p-4">
          <h3 className="  font-bold mb-2">About Us</h3>
          <p>Learn more about our mission and vision.</p>
        </div>
        <div className=" w-1/6 p-4">
          <h3 className="font-bold mb-2">Services</h3>
          <ul>
            <li><a href="#" className="hover:underline">Service 1</a></li>
            <li><a href="#" className="hover:underline">Service 2</a></li>
            <li><a href="#" className="hover:underline">Service 3</a></li>
          </ul>
        </div>
        <div className="w-1/6 p-4">
          <h3 className="font-bold mb-2">Resources</h3>
          <ul>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>
        <div className="w-1/6 p-4">
          <h3 className="font-bold mb-2">Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div className="w-1/6 p-4">
          <h3 className="font-bold mb-2">Follow Us</h3>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
        <div className="w-1/6 p-4">
          <h3 className="font-bold mb-2">Newsletter</h3>
          <p>Subscribe to our newsletter for updates.</p>
          <input
            type="email"
            placeholder="Your email"
            className="p-2 rounded"
          />
          <button className="mt-2 bg-green-500 text-white py-1 px-4 rounded">
            Subscribe
          </button>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
   </div>
  );
};

export default Footer;
