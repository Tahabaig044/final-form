
"use client";
// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// import { useRouter } from "next/navigation";





const Deals = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex">
      {/* Deals Icon */}
      <div className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
      onClick={() => setOpen((prev) => !prev)} ><Link href="list?cat=deals">Deals</Link></div>
      
      {open && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setOpen(false)} // Close Deals when overlay is clicked
        ></div>
      )}
      {/* Slide-In Deals */}
      <div 
        className={`absolute w-[50%] sm:w-72 bg-white shadow-lg z-20 p-6 transform ${
          open ? "translate-x-0 translate-y-6" : "hidden"
        } transition-transform duration-300 ease-in-out`}
      >
        <div
        className="flex flex-col gap-6 text-black ">
          <Link
            
            href="/list?cat=shose"
            // onClick={()=>(name)}
            className="hover:text-lama  hover:border-b-2 font-medium transition-colors duration-200 "
          >
            shoes
          </Link>
          <Link
            href="/list?cat=dress"
            className="hover:text-lama hover:border-b-2 font-medium transition-colors duration-200"
          >
            drass
          </Link>
          <Link
            href="/list?cat=bag"
            className="hover:text-lama hover:border-b-2 font-medium transition-colors duration-200"
          >
            bag
          </Link>
          <Link
            href="/list?cat=accessories"
            className="hover:text-lama hover:border-b-2 font-medium transition-colors duration-200"
          >
            Accessories
          </Link>
          <Link
            href="/list?cat=t-shirts"
            className="hover:text-lama hover:border-b-2 font-medium transition-colors duration-200"
          >
            T-shirts
          </Link>
          {/* <Link
            href="/list?cat=deals"
            className="hover:text-lama hover:border-b-2 font-medium transition-colors duration-200"
          >
           All Deals
          </Link> */}
        </div>
        
        {/* <Link
            href="/deals"
            className="hover:text-lama hover:border-b-2 font-medium transition-colors duration-200"
          >
           All Deals 
          </Link> */}
      </div>
    </div>
  );
};

export default Deals;







// "use client";

// import { usePathname, useRouter, useSearchParams } from "next/navigation";

// const Deals = () => {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const { replace } = useRouter();

//   const handleDealsChange = (
//     e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
//   ) => {
//     const { name, value } = e.target;
//     const params = new URLSearchParams(searchParams);
//     params.set(name, value);
//     replace(`${pathname}?${params.toString()}`);
//   };

//   return (
//     <div className=" flex justify-between">
//       <div className="flex gap-6 flex-wrap border-none cursor-pointer hover:opacity-80 transition-opacity duration-200">
//         <select
//           name="type"
//           id=""
//           className=" font-medium bg-[#EBEDED]"
//           onChange={handleDealsChange}
//           >
//           <div>Deals</div>
//           <option>Deals</option>
//           <option >Physical</option>
//           <option value="digital">Digital</option>
//         </select>
        
//     </div>
//     </div>
//   );
// };

// export default Deals;





