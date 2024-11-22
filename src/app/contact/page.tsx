
import Image from "next/image";
const Contact = () => {
  return (
    <div className="contact">
      {/* Contact Banner */}
      <div className="contactBanner bg-lama text-white py-8 pl-4">
        <h1 className="text-4xl font-bold">#Lets Connect</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, iure eos!
        </p>
      </div>

      {/* Connect Section */}
      <div className="connect flex flex-col md:flex-row justify-start items-center mt-8 px-6 ">
        <div className="connectText bg-white  p-14 md:mr-6 ">
          <h1 className="text-2xl font-bold mb-4 text-wrap">Visit Our Office or Contact Us Today</h1>
          <p className="text-gray-700 mt-4">Address: Dablin Park, England, New York</p>
          <p className="text-gray-700 mt-4">Contact: dumiemail@gmail.com</p>
          <p className="text-gray-700 mt-4">Number: 999999000011</p>
        </div>
        <div className="map mt-6 md:mt-0">
          <Image
            src="/map.PNG"
            alt="Map"
            className="w-[98%] hover:w-[100%] transition-transform duration-700 cursor-pointer"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="form text-center mt-16">
        <h1 className="text-2xl font-bold">Connect with Us. Fill Form</h1>
        <form className="mt-6">
          <input
            type="text"
            placeholder="Enter Your FirstName"
            className="block w-80 p-2 mx-auto mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <input
            type="text"
            placeholder="Enter Your LastName"
            className="block w-80 p-2 mx-auto mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="block w-80 p-2 mx-auto mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <input
            type="text"
            placeholder="Enter Your Number"
            className="block w-80 p-2 mx-auto mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <input
            type="text"
            placeholder="Enter Your Address"
            className="block w-80 p-2 mx-auto mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <button
            type="submit"
            className="w-80 mt-6 bg-lama text-white py-2 text-lg rounded-md hover:bg-pink-800 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
