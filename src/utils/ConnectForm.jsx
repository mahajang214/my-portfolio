// ConnectForm.jsx
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Notification from "../Notification";
import axios from "axios";

function ConnectForm({ onClose }) {
    const [notification, setNotification] = useState(null)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        number:""
      });
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      <Toaster position="top-right" reverseOrder={false} />
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // your logic
    //   onClose(); // close after submit
    // };

    // console.log("env:",meta.env.VITE_BASE_URL);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!formData.message){
          return  setNotification({ type: "error", message: "Message is Empty." });
        }
        if(!formData.email){
          return  setNotification({ type: "error", message: "Email is Empty." });
        }
        if(!formData.name){
          return  setNotification({ type: "error", message: "Name is Empty." });
        }
        if(!formData.number){
          return  setNotification({ type: "error", message: "Number is Empty." });
        }
        try {
          const sendMail=await axios.post(`${import.meta.env.VITE_BASE_URL}/send-mail`,formData);
          console.log(sendMail.data);
      
        return  setNotification({ type: "success", message: "Message sent successfully!" });
          
        } catch (error) {
          console.error(error.message);
         return setNotification({ type: "error", message: "Failed to send message." });
        }

        onClose();
        // const res = await fetch("http://localhost:5000/send-email", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(formData),
        // });
    
        // const data = await res.json();
        // alert(data.message);
      };
  
    return (
      <div className="relative w-[90vw] sm:w-[75vw] md:w-[65vw] bg-[#4ED7F1] p-6 rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto">
        {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold text-black hover:text-red-600 cursor-pointer"
        >
          ×
        </button>
        <h1 className="text-center text-3xl sm:text-[45px] md:text-[60px] lg:text-[90px] text-[#000] font-normal">
          Connect with ME
        </h1>
        <form onSubmit={handleSubmit} method="post">
          <input
            className="bg-white text-black  mt-4 px-6 py-2 w-full rounded-md text-2xl outline-none"
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
          <input
            className="bg-white text-black  px-6 py-2 w-full rounded-md text-2xl outline-none mt-4"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            className="bg-white text-black  px-6 py-2 w-full rounded-md md:text-2xl outline-none mt-4"
            type="text"
            placeholder="Contact Number"
            name="number"
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="5"
            onChange={handleChange}
            className="outline-none w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 text-black  focus:ring-blue-500 resize-none mt-4 bg-white"
            placeholder="How can I help you?"
          ></textarea>
          <button className="w-full cursor-pointer bg-[#000] rounded-full mt-4 text-white font-bold text-xl lg:text-4xl py-2 hover:rounded-md transition-all hover:scale-95 duration-300">
            Send
          </button>
        </form>
      </div>
    );
  }

  export default ConnectForm
  