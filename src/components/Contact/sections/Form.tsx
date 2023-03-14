import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const ref = useRef<any>();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    toast.success("Your query has been submitted", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    ref.current.reset();
  };
  return (
    <div className="absolute top-[400px] left-1/4 transform -translate-x-1/2 -translate-y-1/2 ">
      <form ref={ref} onSubmit={handleSubmit} className="flex flex-col gap-4 w-[400px]">
        <h3 className="font-semibold text-[20px] mb-2">Contact us</h3>
        <input
          type="text"
          className="p-2 rounded-sm text-gray-700"
          placeholder="Enter your name"
          name="name"
          required
        />
        <input
          type="email"
          className="p-2 rounded-sm text-gray-700"
          placeholder="Enter your email"
          name="email"
          required
        />
        <textarea
          rows={5}
          className="p-2 rounded-sm text-gray-700"
          placeholder="Your message"
          name="message"
          required></textarea>
        <button
          type="submit"
          className="bg-btn-primary text-white px-2 py-1 rounded-sm">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
