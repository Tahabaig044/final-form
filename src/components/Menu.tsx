"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative ">
      {/* Menu Icon */}
      <Image
        src={open ? "/close.png" : "/menu.jpeg"} // Toggle between menu and close icon
        alt="Menu Icon"
        width={30}
        height={30}
        className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
        onClick={() => setOpen((prev) => !prev)}
      />

      {/* Overlay */}
      {open && (
        <div
          className="fixed  inset-0 z-10"
          onClick={() => setOpen(false)} // Close menu when overlay is clicked
        ></div>
      )}

      {/* Slide-In Menu */}
      <div
        className={`fixed  left-0 h-full w-[50%] sm:w-72 bg-white shadow-lg z-20 p-6 transform ${
          open ? "translate-x-0 translate-y-6" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <nav className="flex flex-col gap-6 text-black ">
          <Link
            href="/"
            className="text-lama  hover:border-b-2 font-medium transition-colors duration-200 "
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="hover:text-lama hover:border-b-2 font-medium transition-colors duration-200"
          >
            Shop
          </Link>
          <Link
            href="/deals"
            className="hover:text-lama hover:border-b-2 font-medium transition-colors duration-200"
          >
            Deals
          </Link>
          <Link
            href="/about"
            className="hover:text-lama hover:border-b-2 font-medium transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-lama hover:border-b-2 font-medium transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="hover:text-lama hover:border-b-2 font-medium transition-colors duration-200"
          >
            Logout
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Menu;



// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const Menu = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="">
//       <Image
//         src="/menu.png"
//         alt=""
//         width={28}
//         height={28}
//         className="cursor-pointer"
//         onClick={() => setOpen((prev) => !prev)}
//       />
//       {open && (
//         <div className="w-[30vw] absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 left-0 flex flex-col gap-6 z-20">
//           <Link href="/">Home</Link>
//             <Link href="/Shop">Shop</Link>
//             <Link href="/Deals">Deals</Link>
//             <Link href="/about">About</Link>
//             <Link href="/Contact">Contact</Link>
//           <Link href="/">Logout</Link>
//           {/* <Link href="/">Cart(1)</Link> */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Menu;
