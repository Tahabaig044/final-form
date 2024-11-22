
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
import Deals from "./Deals";

// Import NavIcons dynamically for better performance
const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    <header className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-white shadow-sm border-b border-gray-200">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Menu />
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
          <div className="text-lg tracking-wider font-semibold text-gray-800">Taha</div>
        </Link>
        <NavIcons />
      </div>

      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-12 h-full">
        {/* LEFT */}
        <div className="flex items-center gap-16">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <div className="text-2xl tracking-wider font-semibold text-gray-800">Taha</div>
          </Link>
          <nav className="hidden xl:flex gap-8">
            <Link
              href="/"
              className="text-lama font-medium hover:text-pink-800 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-700 font-medium hover:text-lama transition-all duration-300"
            >
              Shop
            </Link>
            {/* <Link
              href="/deals"
              className="text-gray-700 font-medium hover:text-lama transition-all duration-300"
            >
              Deals
            </Link> */}
            <Deals/>
            <Link
              href="/about"
              className="text-gray-700 font-medium hover:text-lama transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 font-medium hover:text-lama transition-all duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-end gap-8 w-full">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// import Link from "next/link";
// import Menu from "./Menu";
// import Image from "next/image";
// import SearchBar from "./SearchBar";
// import dynamic from "next/dynamic";
// // import NavIcons from "./NavIcons";

// const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

// const Navbar = () => {
//   return (
//     <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative ">
//       {/* MOBILE */}
//       <div className="h-full flex items-center justify-between md:hidden">
//       <Menu />
//       <Link href="/" className="flex items-center gap-3">
//             <Image 
//             src="/logo.png" 
//             alt="" 
//             width={24} 
//             height={24} />
//             <div className="text-2xl tracking-wide">Taha</div>
//           </Link>
//         {/* <Link href="/">
//           <div className="text-2xl tracking-wide">Taha</div>
//         </Link> */}
//         <NavIcons />
//       </div>
//       {/* BIGGER SCREENS */}
//       <div className="hidden md:flex items-center justify-between gap-8 h-full">
//         {/* LEFT */}
//         <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
//           <Link href="/" className="flex items-center gap-3">
//             <Image src="/logo.png" alt="" width={24} height={24} />
//             <div className="text-2xl tracking-wide">Taha</div>
//           </Link>
//           <div className="hidden xl:flex gap-4">
//             <Link href="/" className="text-lama  hover:border-b-2 font-medium transition-colors duration-200 ">Home</Link>
//             <Link href="/shop" className="hover:text-lama hover:border-b-2 font-medium transition-colors duration-200">Shop</Link>
//             <Link href="/deals" className="hover:text-lama hover:border-b-2 font-medium transition-colors duration-200">Deals</Link>
//             <Link href="/about" className="hover:text-lama hover:border-b-2 font-medium transition-colors duration-200">About</Link>
//             <Link href="/contact" className="hover:text-lama hover:border-b-2 font-medium transition-colors duration-200">Contact</Link>
//           </div>
//         </div>
//         {/* RIGHT */}
//         <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
//           <SearchBar />
//           <NavIcons />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
