import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = React.memo(() => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);

    // You can replace this with your own email service or API
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        reset();
        toast("Thank you for contacting us!", { type: "success" });
      })
      .catch(() => {
        setLoading(false);
        toast("Oops! Something went wrong. Please try again.", {
          type: "error",
        });
      });
  };

  return (
    <div className="pl-20  pr-20 flex flex-col md:flex-row md:gap-10 lg:py-20 md:overflow-hidden">
      
      <motion.div
        variants={("left", "tween", 0.2, 1)}
        className="md:w-3/5 lg:w-2/3 mx-auto md:mx-0  text-white p-8 rounded-xl"
      >
       

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="name" className="font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("name", { required: true })}
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent py-2 px-4 border-b-2 border-gray-400 focus:border-blue-600 transition-colors duration-300"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  This field is required.
                </span>
              )}
            </div>
            <div className="w-full">
              <label htmlFor="email" className="font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                id="email"
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent py-2 px-4 border-b-2 border-gray-400 focus:border-blue-600 transition-colors duration-300"
              />
              {errors.email?.type === "required" && (
                <span className="text-red-500 text-sm">
                  This field is required.
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-red-500 text-sm">
                  Invalid email address.
                </span>
              )}
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="message" className="font-medium mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("message", { required: true })}
              id="message"
              rows="5"
              placeholder="Your message"
              className="w-full bg-transparent py-2 px-4 border-b-2 border-gray-400 focus:border-blue-600 transition-colors duration-300"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                This field is required.
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-2 px-8 rounded-lg mt-6 w-max self-start transition-colors duration-300 hover:bg-blue-700 focus:outline-none"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={("right", "tween", 0.2, 1)}
        className="md:w-2/5 lg:w-1/3 md:h-[350px] h-96 mx-auto md:mx-0 relative overflow-hidden"
      >
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1586519211737!2d106.69680491533307!3d10.727779292326244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee3e6c937bd%3A0xf0e31dfed62bbf22!2zSOG7jWMgVGh14bqtbiBUaOG7p3UgVMOibiwgTmfFqCBOZ8OzLCBIw6AgTuG6tW5nIDExLCDGsOG7o25nIE5hbQ!5e0!3m2!1svi!2s!4v1620923670146!5m2!1svi!2s"
          className="absolute inset-0 mt-10  rounded-lg w-full h-full"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
});

export default Contact;
