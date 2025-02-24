import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "mcjs";
    script.async = true;
    script.innerHTML = `!function(c,h,i,m,p){
      m=c.createElement(h),
      p=c.getElementsByTagName(h)[0],
      m.async=1,m.src=i,
      p.parentNode.insertBefore(m,p)
    }(document,"script","https://chimpstatic.com/mcjs-connected/js/users/0d5bb876c152f8b250435cda2/7c8dcce7b7f3a4c21c013f504.js");`;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="py-8 md:py-16 bg-cover bg-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-md mx-auto bg-white rounded shadow p-4 md:p-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Subscribe to our newsletter!
          </h2>
          <p className="text-gray-600 mb-6">
            Sign up for regular updates from our offices (and for free goodies
            too).
          </p>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-left font-medium mb-1"
              >
                Email (required)
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="Enter your email here"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>

            <div>
              <label
                htmlFor="privacyPolicy"
                className="inline-flex items-center"
              >
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  required
                  className="mr-2"
                />
                Check the box to agree with privacy policy (required)
              </label>
            </div>

            <button
              type="submit"
              className="bg-gray-600 text-white w-full py-2 rounded hover:bg-gray-900"
            >
              Subscribe
            </button>
          </form>

          <div className="flex justify-center gap-3 mt-6">
            <a
              href="https://www.instagram.com/mindmend74/profilecard/?igsh=MWs5dzMzandta3U0ag=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram
                className="text-gray-600 hover:text-blue-500"
                size={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rama-raguram-2763a9292/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin
                className="text-gray-600 hover:text-blue-500"
                size={24}
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
