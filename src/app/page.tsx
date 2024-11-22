// "use client";

import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import Slider from "@/components/Slider";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense, useContext, useEffect } from "react";

const HomePage = async () => {

  // TEST (FETCHING ON THE CLIENT COMPONENT)

  // const wixClient = useWixClient()

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();

  //     console.log(res)
  //   }; 

  //   getProducts();
  // }, [wixClient]);
  

  // TEST (FETCHING ON THE SERVER COMPONENT)

  const wixClient = await wixClientServer();

  const res = await wixClient.products.queryProducts().find();

  console.log(res);

  return (
    <div className="">
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="t4s-section-title t4s-title">Featured Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
          categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={8}
            // categoryId={process.env.FEATURED_PRODUCTS_FEATURED_CATEGORY_ID!}
            // limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <Suspense fallback={<Skeleton />}> 
          <CategoryList />
         </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_NEW_CATEGORY_ID!}
            limit={8}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;


// import CategoryList from "@/components/CategoryList";
// import ProductList from "@/components/ProductList";
// import Skeleton from "@/components/Skeleton";
// import Slider from "@/components/Slider";
// import { wixClientServer } from "@/lib/wixClientServer";
// import { Suspense } from "react";

// // Ensure this file is treated as a Server Component
// const HomePage = async () => {
//   let featuredProducts = [];
//   let newProducts = [];

//   try {
//     // Fetch data on the server side
//     const wixClient = await wixClientServer();

//     // Fetch featured products
//     const featuredResponse = await wixClient.products.queryProducts().find();
//     featuredProducts = featuredResponse?.items || [];

//     // Fetch new products if needed
//     const newResponse = await wixClient.products.queryProducts().find();
//     newProducts = newResponse?.items || [];

//     // Debugging logs (remove in production)
//     console.log("Featured Products:", featuredProducts);
//     console.log("New Products:", newProducts);

//   } catch (error) {
//     console.error("Error fetching data from Wix Client:", error);
//     // Optionally, return a fallback or error page
//     return <div>Error loading products. Please try again later.</div>;
//   }

//   return (
//     <div>
//       {/* Slider Section */}
//       <Slider />

//       {/* Featured Products Section */}
//       <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
//         <h1 className="t4s-section-title t4s-title">Featured Products</h1>
//         <Suspense fallback={<Skeleton />}>
//           <ProductList
//             products={featuredProducts} // Pass fetched products as props
//             categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
//             limit={8}
//           />
//         </Suspense>
//       </div>

//       {/* Categories Section */}
//       <div className="mt-24">
//         <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
//           Categories
//         </h1>
//         <Suspense fallback={<Skeleton />}>
//           <CategoryList />
//         </Suspense>
//       </div>

//       {/* New Products Section */}
//       <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
//         <h1 className="text-2xl">New Products</h1>
//         <Suspense fallback={<Skeleton />}>
//           <ProductList
//             products={newProducts} // Pass fetched products as props
//             categoryId={process.env.FEATURED_PRODUCTS_NEW_CATEGORY_ID!}
//             limit={8}
//           />
//         </Suspense>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
