import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import { Suspense } from "react";

const Shop = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();

  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

  return (
    <div>
     <h1 className="mt-12 text-xl font-semibold">{cat?.collection?.name} For You!</h1>
      <Suspense fallback={<Skeleton/>}>
        <ProductList
          categoryId={
            cat.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  )
}

export default Shop;



// "use client";

// import Image from "next/image";
// import { useCartStore } from "@/hooks/useCartStore";
// import { media as wixMedia } from "@wix/sdk";
// import { useWixClient } from "@/hooks/useWixClient";
// // import { currentCart } from "@wix/ecom";
// interface Cart {
//   subtotal: {
//       amount: number;
//   };
//   // other properties...
// }

// const CartModal = () => {
//   // TEMPORARY
//   // const cartItems = true;

//   const wixClient = useWixClient();
//   const { cart, isLoading, removeItem } = useCartStore();
//   // alert(useCartStore())
//   console.log(cart)
//   console.log(isLoading)
//   console.log(removeItem)
  

//   // const handleCheckout = async () => {
//   //   try {
//   //     const checkout =
//   //       await wixClient.currentCart.createCheckoutFromCurrentCart({
//   //         channelType: currentCart.ChannelType.WEB,
//   //       });

//   //     const { redirectSession } =
//   //       await wixClient.redirects.createRedirectSession({
//   //         ecomCheckout: { checkoutId: checkout.checkoutId },
//   //         callbacks: {
//   //           postFlowUrl: window.location.origin,
//   //           thankYouPageUrl: `${window.location.origin}/success`,
//   //         },
//   //       });

//   //     if (redirectSession?.fullUrl) {
//   //       window.location.href = redirectSession.fullUrl;
//   //     }
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };
//   const cartWithSubtotal = cart as Cart;

//   return (
//     <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
//       {!cart.lineItems ? (
//         <div className="">Cart is Empty</div>
//       ) : (
//         <>
//           <h2 className="text-xl">Shopping Cart</h2>
//           {/* LIST */}
//           <div className="flex flex-col gap-8">
//             {/* ITEM */}
//             {cart.lineItems.map((item) => (
//               <div className="flex gap-4" key={item._id}>
//                 {item.image && (
//                   // <Image src="https://images.pexels.com/photos/27741970/pexels-photo-27741970/free-photo-of-man-with-camera-on-beach.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
//                    <Image src={wixMedia.getScaledToFillImageUrl(item.image,
//                       72,
//                       96,
//                       {}
                    
//                     )}
//                     alt=""
//                     width={72}
//                     height={96}
//                     className="object-cover rounded-md"
//                   />
//                 )}
//                 <div className="flex flex-col justify-between w-full">
//                   {/* TOP */}
//                   <div className="">
//                     {/* TITLE */}
//                     <div className="flex items-center justify-between gap-8">
//                       <h3 className="font-semibold">
//                         {item.productName?.original}
//                       </h3>
//                       <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
//                         {item.quantity && item.quantity > 1 && (
//                           <div className="text-xs text-green-500">
//                             {item.quantity} x{" "}
//                           </div>
//                         )}
//                         ${item.price?.amount}
//                       </div>
//                     </div>
//                     {/* DESC */}
//                     <div className="text-sm text-gray-500">
//                       {item.availability?.status}
//                     </div>
//                   </div>
//                   {/* BOTTOM */}
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-500">Qty. {item.quantity}</span>
//                     <span
//                       className="text-blue-500"
//                       style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
//                       onClick={() => removeItem(wixClient, item._id!)}
//                     >
//                       Remove
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* BOTTOM */}
//           <div className="">
//             <div className="flex items-center justify-between font-semibold">
//               <span className="">Subtotal</span>
              
//               <span>${cartWithSubtotal.subtotal?.amount ?? 0}</span>

//             </div>
//             <p className="text-gray-500 text-sm mt-2 mb-4">
//               Shipping and taxes calculated at checkout.
//             </p>
//             <div className="flex justify-between text-sm">
//               <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
//                 View Cart
//               </button>
//               <button
//                 className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
//                 disabled={isLoading}
//                 // onClick={handleCheckout}
//                 // onClick={()=>alert(handleCheckout)}
//               >
//                 Checkout
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartModal;
