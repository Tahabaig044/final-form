import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  const cats = await wixClient.collections.queryCollections().find();

  return (
    <div className="px-6 py-8 overflow-x-auto scrollbar-hide bg-gray-50">
      <div className="flex gap-6 md:gap-10">
        {cats.items.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 hover:scale-105 transition-transform duration-200"
            key={item._id}
          >
            <div className="relative bg-gray-200 w-full h-72 rounded-lg shadow-md overflow-hidden">
              <Image
                src={item.media?.mainMedia?.image?.url || "/cat.png"}
                alt={item.name || "Category Image"}
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-4 text-lg font-medium text-gray-800 text-center tracking-wide">
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;











// import { wixClientServer } from "@/lib/wixClientServer";
// import Image from "next/image";
// import Link from "next/link";

// const CategoryList = async () => {
//   const wixClient = await wixClientServer();

//   const cats = await wixClient.collections.queryCollections().find();
  
//   return (
//     <div className="px-4 overflow-x-scroll scrollbar-hide">
//       <div className="flex gap-4 md:gap-8">
//         {cats.items.map((item) => (
//           <Link
//             href={`/list?cat=${item.slug}`}
//             className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
//             key={item._id}
//           >
//             <div className="relative bg-slate-100 w-full h-96">
//               <Image
//                 src={item.media?.mainMedia?.image?.url || "cat.png"}
//                 alt=""
//                 fill
//                 sizes="20vw"
//                 className="object-cover"
//               />
//             </div>
//             <h1 className="mt-8 font-light text-xl tracking-wide">
//               {item.name}
//             </h1>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryList;
