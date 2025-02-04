import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SlBasket } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";

export default function ProductUpload() {
  const user = useSelector((state) => state?.user?.user);
  const categories = [
    "mobile",
    "laptop",
    "tv",
    "camera",
    "watch",
    "headphone",
    "clouth",
    "shoes",
    "bag",
    "accessories",
    "jewellery",
    "furniture",
    "books",
  ];
  const brands = [
    "Apple",
    "Asus",
    "Acer",
    "Dell",
    "HP",
    "Lenovo",
    "jara",
    "Sony",
    "JBL",
    "Other",
    "The North Face",
    "Adidas",
    "Puma",
    "Nike",
    "Under Armour",
    "Reebok",
    "New Balance",
    "Vans",
  ];
  const ageCategories = ["kid", "woman", "man", "adult", "old"];
  const productTypes = ["electronic", "clothing", "Beauty", "Book"];

  const [isLoading, setIsLoading] = useState(false);
  const [productImage, setProductImage] = useState([]);
  const [productReviewVideo, setProductReviewVideo] = useState(null);
  const [productDetails, setProductDetails] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productType: "",
    productCategory: "",
    productCategoryByAge: "",
    productBrand: "",
    productQuantity: 1,
    productImages: [],
    productReviewVideo: null,
  });
  useEffect(() => {
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      productImages: productImage,
      productReviewVideo: productReviewVideo,
    }));
  }, [productImage, productReviewVideo]);

  const handleProductDetailsChange = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleProductImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (productImage.length + files.length > 5) {
      alert("You can upload a maximum of 5 images.");
      return;
    }

    setIsLoading(true);
    const imageData = files.map((file) => ({
      name: file.name,
      file: file,
      preview: URL.createObjectURL(file),
    }));
    setProductImage((prevImages) => [...prevImages, ...imageData]);
    setIsLoading(false);
  };

  const handleProductReviewVideoChange = (e) => {
    const videoFile = e.target.files[0];

    if (videoFile) {
      setIsLoading(true);
      const videoURL = URL.createObjectURL(videoFile);
      setProductReviewVideo({
        name: videoFile.name,
        file: videoFile,
        url: videoURL,
      });
      setIsLoading(false);
    }
  };

  const removeImage = (index) => {
    setProductImage((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const removeVideo = () => {
    setProductReviewVideo(null);
  };

  // const handleProductDetailsChange = (e) => {
  //   setProductDetails({
  //     ...productDetails,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleProductImageChange = (e) => {
  //   const files = Array.from(e.target.files);

  //   if (productImage.length + files.length > 5) {
  //     alert("You can upload a maximum of 5 images.");
  //     return;
  //   }

  //   setIsLoading(true);
  //   const imageData = files.map((file) => ({
  //     name: file.name,
  //     file: file,
  //     preview: URL.createObjectURL(file),
  //   }));
  //   setProductImage((prevImages) => [...prevImages, ...imageData]);

  //   setIsLoading(false);
  // };

  // const handleProductReviewVideoChange = (e) => {
  //   const videoFile = e.target.files[0];

  //   if (videoFile) {
  //     setIsLoading(true);
  //     const videoURL = URL.createObjectURL(videoFile);
  //     setProductReviewVideo({
  //       name: videoFile.name,
  //       file: videoFile,
  //       url: videoURL,
  //     });
  //     setIsLoading(false);
  //   }
  // };

  // const removeImage = (index) => {
  //   setProductImage((prevImages) => prevImages.filter((_, i) => i !== index));
  // };

  // const removeVideo = () => {
  //   setProductReviewVideo(null);
  // };
  console.log(productDetails);

  return (
    <div className="flex h-[100vh]">
      <div className="h-fit border-b w-1/4 flex flex-col gap-9 items-center border-r border-zinc-500 py-10">
        <div className="flex flex-col items-center gap-6 border-b pb-10 w-full border-zinc-500">
          <img
            src={user?.profileImage}
            alt="profile"
            className="h-48 w-48 object-cover overflow-hidden rounded-full cursor-pointer"
          />
          <span>
            <h1 className="text-center text-zinc-900 font-semibold text-lg">
              {user?.fullName}
            </h1>
            <h1 className="text-center text-zinc-500 cursor-pointer">
              {user?.address[0].district}
            </h1>
          </span>
        </div>
        <div className="flex flex-col gap-2 border-b w-full items-center border-zinc-500 pb-10">
          <span className="flex gap-9 items-center cursor-pointer">
            <p className="text-center text-zinc-900 font-semibold text-lg">
              Branch Country :
            </p>
            <p className="text-center text-zinc-600 text-sm">
              {user?.address[0].country}
            </p>
          </span>
          <span className="flex gap-9 items-center cursor-pointer">
            <p className="text-center text-zinc-900 font-semibold text-lg">
              Branch District :
            </p>
            <p className="text-center text-zinc-600 text-sm">
              {user?.address[0].district}
            </p>
          </span>
          <span className="flex gap-9 items-center cursor-pointer">
            <p className="text-center text-zinc-900 font-semibold text-lg">
              Branch Area :
            </p>
            <p className="text-center text-zinc-600 text-sm">
              {user?.address[0].area}
            </p>
          </span>
        </div>

        <div className="flex gap-9 items-center justify-center w-full pb-10">
          <p className="text-center text-zinc-900 font-semibold text-lg cursor-pointer">
            Total Orders :
          </p>
          <div className="flex items-center gap-2 relative cursor-pointer">
            <span>
              <SlBasket className="cursor-pointer" size={35} />
            </span>
            <div className="absolute top-0 right-[40px] bg-red-600 rounded-full w-4 h-4 flex items-center justify-center">
              <p className="font-semibold text-xs">0</p>
            </div>
            <span>
              <p className="font-semibold text-sm">Cart</p>
            </span>
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-full flex justify-center p-10">
        <form className="h-fit w-[80%] p-10 flex flex-col justify-between gap-8 border shadow-lg border-zinc-500 rounded-lg">
          <p className="text-2xl font-semibold text-zinc-900">Details</p>
          <div className="flex gap-9">
            <input
              className="w-1/2 p-2 rounded-xl placeholder:text-black border-2 border-zinc-400"
              type="text"
              placeholder="Product Name"
              name="productName"
              required
              value={productDetails.productName}
              onChange={handleProductDetailsChange}
            />
            <input
              className="w-40 p-2 placeholder:text-zinc-500 rounded-xl border-2 border-zinc-400"
              type="number"
              placeholder="Product Price"
              name="productPrice"
              required
              value={productDetails.productPrice}
              onChange={handleProductDetailsChange}
            />
          </div>
          <div>
            <label htmlFor="productDescription"></label>
            <textarea
              className="w-1/2 rounded-xl placeholder:text-zinc-400 placeholder:font-[400] border-2 border-zinc-400 p-2"
              name="productDescription"
              id="productDescription"
              placeholder="Product Description"
              rows="10"
              required
              value={productDetails.productDescription}
              onChange={handleProductDetailsChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="productQuantity"></label>
            <input
              className="w-40 p-2 rounded-xl placeholder:text-zinc-500 border-2 border-zinc-400"
              type="number"
              placeholder="Product Quantity"
              name="productQuantity"
              value={productDetails.productQuantity}
              onChange={handleProductDetailsChange}
            />
          </div>
          <span>
            <p className="text-zinc-900 font-semibold text-[18px]">
              Product Images
            </p>
            <p className="text-[16px] text-zinc-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              optio, fuga debitis, deserunt, reiciendis
            </p>
          </span>
          <div className="border border-zinc-400 flex gap-2 p-2 justify-between">
            <div
              className="h-44 w-44 border-2 p-2 border-zinc-400 rounded-xl flex items-center justify-center cursor-pointer"
              onClick={() => document.getElementById("productImage").click()}
            >
              <img
                src="https://cdn3.iconfinder.com/data/icons/photo-tools/65/upload-512.png"
                alt=""
              />
              <input
                type="file"
                required
                name="productImage"
                id="productImage"
                className="hidden"
                onChange={handleProductImageChange}
                multiple
              />
            </div>
            <div className="flex gap-2">
              {productImage.map((image, index) => (
                <div
                  key={index}
                  className="relative border-2 border-zinc-400 rounded-xl flex items-center justify-center cursor-pointer group"
                >
                  <img
                    src={image.preview}
                    alt={`Uploaded Image ${index + 1}`}
                    className="w-44 h-44 overflow-hidden rounded-xl object-cover"
                  />
                  <span
                    className="hidden group-hover:flex items-center absolute top-2 right-2 justify-center h-8 w-8 rounded-full bg-red-600 cursor-pointer"
                    onClick={() => removeImage(index)}
                  >
                    <RxCross2 className="text-2xl text-white" />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <span>
            <p className="text-zinc-900 font-semibold text-[18px]">
              Product Review Video
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              voluptate labore impedit! Sapiente ex officiis blanditiis
            </p>
          </span>
          <div className="border border-zinc-400 flex gap-1 justify-evenly">
            <div
              className="h-44 w-44 relative border-2 p-2 border-zinc-400 rounded-xl flex items-center justify-center cursor-pointer"
              onClick={() =>
                document.getElementById("productReviewVideo")?.click()
              }
            >
              <img
                src="https://cdn0.iconfinder.com/data/icons/video-element/24/File-video_file-upload-document-formats-512.png"
                alt="Upload Video"
                className="h-28 object-contain"
              />
              <input
                type="file"
                name="productReviewVideo"
                id="productReviewVideo"
                className="hidden"
                onChange={handleProductReviewVideoChange}
              />
              <p className="text-sm absolute bottom-0 text-zinc-900">
                Upload Video
              </p>
            </div>
            <div className="h-44 w-72 relative rounded-xl group">
              {productReviewVideo && (
                <div className="h-44 w-72 relative rounded-xl group">
                  <video
                    src={productReviewVideo.url}
                    controls
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <span
                    className="cursor-pointer hidden group-hover:flex items-center absolute top-2 right-2 justify-center h-8 w-8 rounded-full bg-red-600"
                    onClick={removeVideo}
                  >
                    <RxCross2 className="text-3xl text-white" />
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-zinc-500 text-[16px]">
              Product Category Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nam obcaecati unde eum quod
            </p>
            <input
              className="w-52 p-2 rounded-xl placeholder:text-black border-2 border-zinc-400"
              type="text"
              placeholder="Product Category"
              name="productCategory"
              list="productCategory"
              required
              value={productDetails.productCategory}
              onChange={handleProductDetailsChange}
            />
            <datalist id="productCategory">
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </datalist>
          </div>
          <div className="flex gap-2">
            <div>
              <input
                className="w-80 p-2 rounded-xl placeholder:text-black border-2 border-zinc-400"
                type="text"
                placeholder="Product Category By Age"
                name="productCategoryByAge"
                list="productCategoryByAge"
                required
                value={productDetails.productCategoryByAge}
                onChange={handleProductDetailsChange}
              />
              <datalist id="productCategoryByAge">
                {ageCategories.map((age, index) => (
                  <option key={index} value={age}>
                    {age}
                  </option>
                ))}
              </datalist>
            </div>
            <div>
              <input
                className="w-52 p-2 rounded-xl placeholder:text-black border-2 border-zinc-400"
                type="text"
                placeholder="Product Brand"
                name="productBrand"
                list="productBrand"
                required
                value={productDetails.productBrand}
                onChange={handleProductDetailsChange}
              />
              <datalist id="productBrand">
                {brands.map((brand, index) => (
                  <option key={index} value={brand} />
                ))}
              </datalist>
            </div>
          </div>
          <div>
            <input
              className="w-52 p-2 rounded-xl placeholder:text-black border-2 border-zinc-400"
              type="text"
              placeholder="Product Type"
              name="productType"
              list="productType"
              required
              value={productDetails.productType}
              onChange={handleProductDetailsChange}
            />
            <datalist id="productType">
              {productTypes.map((type, index) => (
                <option key={index} value={type} />
              ))}
            </datalist>
          </div>
        </form>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { use } from "react";
// import { SlBasket } from "react-icons/sl";
// import { useSelector } from "react-redux";
// import { RxCross2 } from "react-icons/rx";

// export default function ProductUpload() {
//   const user = useSelector((state) => state?.user?.user);
//   // console.log(user);
//   const categories = [
//     "mobile",
//     "laptop",
//     "tv",
//     "camera",
//     "watch",
//     "headphone",
//     "clouth",
//     "shoes",
//     "bag",
//     "accessories",
//     "jewellery",
//     "furniture",
//     "books",
//   ];
//   const brands = [
//     "Apple",
//     "Asus",
//     "Acer",
//     "Dell",
//     "HP",
//     "Lenovo",
//     "jara",
//     "Sony",
//     "JBL",
//     "Other",
//     "The North Face",
//     "Adidas",
//     "Puma",
//     "Nike",
//     "Under Armour",
//     "Reebok",
//     "New Balance",
//     "Vans",
//   ];
//   const ageCategories = ["kid", "woman", "man", "adult", "old"];
//   const productTypes = ["electronic", "clothing", "Beauty", "Book"];

//   const [isLoding, setIsLoding] = useState(false);
//   const [productImage, setProductImage] = useState([]);
//   const [productReviewVideo, setProductReviewVideo] = useState("");
//   const [productDetails, setProductDetails] = useState({
//     productName: "",
//     productPrice: "",
//     productImage: [],
//     productDescription: "",
//     productType: "",
//     productCategory: "",
//     productCategoryByAge: "",
//     productBrand: "",
//     productQuantity: 1,
//     productRating: [],
//     productCancelReason: [],
//   });

//   const handleProductDetailsChange = (e) => {
//     setProductDetails({
//       ...productDetails,
//       [e.target.name]: e.target.value,
//     });
//   };
// console.log(productDetails);
//   const handleProductImageChange = async (e) => {
//     const files = Array.from(e.target.files);

//     if (productImage.length + files.length > 5) {
//       alert("You can upload a maximum of 5 images.");
//       return;
//     }

//     setIsLoding(true);
//     const imageData = files.map((file) => ({
//       name: file.name,
//       file: file,
//       preview: URL.createObjectURL(file),
//     }));
//     setProductImage((prevImages) => [...prevImages, ...imageData]);

//     setIsLoding(false);
//   };

//   const handleProductReviewVideoChange = async (e) => {
//     const videoFile = e.target.files[0];

//     if (videoFile) {
//       setIsLoding(true);
//       const videoURL = URL.createObjectURL(videoFile);
//       setProductReviewVideo({
//         name: videoFile.name,
//         file: videoFile,
//         url: videoURL,
//       });

//       setIsLoding(false);
//     }
//   };

//   const removeImage = (index) => {
//     setProductImage((prevImages) => prevImages.filter((_, i) => i !== index));
//   };

//   console.log(productReviewVideo);

//   console.log(productImage);
//   return (
//     <div className="flex h-[100vh]     ">
//       <div className="h-fit border-b w-1/4 flex flex-col gap-9 items-center border-r border-zinc-500  py-10 ">
//         <div className="flex flex-col items-center gap-6 border-b pb-10 w-full border-zinc-500">
//           <img
//             src={user?.profileImage}
//             alt="profile"
//             className="h-48 w-48 object-cover overflow-hidden rounded-full cursor-pointer "
//           />
//           <span>
//             <h1 className="text-center text-zinc-900 font-semibold text-lg">
//               {user?.fullName}
//             </h1>
//             <h1 className="text-center text-zinc-500 cursor-pointer ">
//               {user?.address[0].district}
//             </h1>
//           </span>
//         </div>
//         <div className="flex flex-col gap-2 border-b w-full items-center border-zinc-500 pb-10">
//           <span className="flex gap-9 items-center cursor-pointer ">
//             <p className="text-center text-zinc-900 font-semibold text-lg">
//               Branch Country :
//             </p>
//             <p className="text-center text-zinc-600  text-sm">
//               {user?.address[0].country}
//             </p>
//           </span>
//           <span className="flex gap-9 items-center cursor-pointer ">
//             <p className="text-center text-zinc-900 font-semibold text-lg">
//               Branch District :
//             </p>
//             <p className="text-center text-zinc-600  text-sm">
//               {user?.address[0].district}
//             </p>
//           </span>
//           <span className="flex gap-9 items-center cursor-pointer ">
//             <p className="text-center text-zinc-900 font-semibold text-lg">
//               Branch Area :
//             </p>
//             <p className="text-center text-zinc-600  text-sm">
//               {user?.address[0].area}
//             </p>
//           </span>
//         </div>

//         <div className="flex  gap-9 items-center justify-center  w-full pb-10">
//           <p className="text-center text-zinc-900 font-semibold text-lg cursor-pointer ">
//             Total Orders :{" "}
//           </p>
//           <div className="flex items-center gap-2 relative cursor-pointer">
//             <span>
//               <SlBasket className="cursor-pointer" size={35} />
//             </span>
//             <div className="absolute top-0 right-[40px] bg-red-600 rounded-full w-4 h-4 flex items-center justify-center">
//               <p className="font-semibold text-xs">0</p>
//             </div>
//             <span>
//               <p className="font-semibold text-sm ">Cart</p>
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="h-[100vh] w-full flex  justify-center  p-10">
//         <form className="h-fit w-[80%] p-10 flex flex-col justify-between gap-8 border shadow-lg border-zinc-500 rounded-lg">
//           <p className="text-2xl font-semibold text-zinc-900 ">Details</p>
//           <div className=" flex gap-9 ">
//             <>
//               <input
//                 className=" w-1/2 p-2 rounded-xl     placeholder:text-black border-2 border-zinc-400 "
//                 type="text"
//                 placeholder="Product Name"
//                 name="productName"
//                 required
//                 value={productDetails.productName}
//                 onChange={handleProductDetailsChange}
//               />
//             </>
//             <>
//               <input
//                 className=" w-40 p-2 placeholder:text-zinc-500 rounded-xl border-2 border-zinc-400 "
//                 type="number"
//                 placeholder="Product Price"
//                 name="productPrice"
//                 required
//                 value={productDetails.productPrice}
//                 onChange={handleProductDetailsChange}
//               />
//             </>
//           </div>
//           <div>
//             <label htmlFor="productDescription"></label>
//             <textarea
//               className="w-1/2 rounded-xl placeholder:text-zinc-400 placeholder:font-[400]  border-2 border-zinc-400 p-2"
//               name="productDescription"
//               id="productDescription"
//               placeholder="Product Description   ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium, nam quia quibusdam dolore cumque molestias."
//               rows="10"
//               required
//               value={productDetails.productDescription}
//               onChange={handleProductDetailsChange}
//             ></textarea>
//           </div>
//           <div>
//             <label htmlFor="productQuantity"></label>
//             <input
//               className=" w-40 p-2 rounded-xl placeholder:text-zinc-500 border-2 border-zinc-400 "
//               type="number"
//               placeholder="Product Quantity"
//               name="productQuantity"
//               value={productDetails.productQuantity}
//               onChange={handleProductDetailsChange}
//             />
//           </div>
//           <span className="   ">
//             <p className="text-zinc-900 font-semibold text-[18px]">
//               Product Images
//             </p>
//             <p className="text-[16px] text-zinc-500">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
//               optio, fuga debitis, deserunt, reiciendis
//             </p>
//           </span>
//           <div className="border border-zinc-400  flex gap-2 p-2 justify-between">
//             <div
//               className="h-44 w-44  border-2 p-2 border-zinc-400  rounded-xl flex items-center justify-center cursor-pointer"
//               onClick={() => document.getElementById("productImage").click()}
//             >
//               <img
//                 src="https://cdn3.iconfinder.com/data/icons/photo-tools/65/upload-512.png"
//                 alt=""
//               />
//               <input
//                 type="file"
//                 required
//                 name={`productImage`}
//                 id="productImage"
//                 className="hidden"
//                 onChange={handleProductImageChange}
//                 multiple
//               />
//             </div>
//             <div className="flex gap-2 ">
//               {productImage.map((image, index) => (
//                 <div
//                   key={index}
//                   className="relative border-2 border-zinc-400 rounded-xl flex items-center justify-center cursor-pointer group"
//                 >
//                   <img
//                     src={image.preview}
//                     alt={`Uploaded Image ${index + 1}`}
//                     className="w-44 h-44 overflow-hidden rounded-xl object-cover"
//                   />
//                   <span
//                     className="hidden group-hover:flex items-center absolute top-2 right-2 justify-center h-8 w-8 rounded-full bg-red-600 cursor-pointer"
//                     onClick={() => removeImage(index)}
//                   >
//                     <RxCross2 className="text-2xl text-white" />
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <span>
//             <p className="text-zinc-900 font-semibold text-[18px]">
//               Product Review Video
//             </p>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
//               voluptate labore impedit! Sapiente ex officiis blanditiis
//             </p>
//           </span>
//           <div className="border border-zinc-400  flex gap-1 justify-evenly">
//             <div
//               className="h-44 w-44 relative border-2 p-2 border-zinc-400 rounded-xl flex items-center justify-center cursor-pointer"
//               onClick={() =>
//                 document.getElementById("productReviewVideo")?.click()
//               }
//             >
//               <img
//                 src="https://cdn0.iconfinder.com/data/icons/video-element/24/File-video_file-upload-document-formats-512.png"
//                 alt="Upload Video"
//                 className=" h-28 object-contain"
//               />
//               <input
//                 type="file"
//                 name="productReviewVideo"
//                 id="productReviewVideo"
//                 className="hidden"
//                 onChange={handleProductReviewVideoChange}
//               />
//               <p className="text-sm absolute bottom-0 text-zinc-900">
//                 Upload Video
//               </p>
//             </div>
//             <div className="h-44 w-72  relative rounded-xl group ">
//               {productReviewVideo && (
//                 <div className="h-44 w-72 relative rounded-xl group">
//                   <video
//                     src={productReviewVideo.url}
//                     controls
//                     className="w-full h-full object-cover rounded-xl"
//                   />
//                   <span
//                     className="cursor-pointer hidden group-hover:flex items-center absolute top-2 right-2 justify-center h-8 w-8 rounded-full bg-red-600"
//                     onClick={() => setProductReviewVideo(null)}
//                   >
//                     <RxCross2 className="text-3xl text-white" />
//                   </span>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="flex flex-col gap-3">
//             <p className="text-zinc-500  text-[16px]">
//               Product Category Lorem ipsum dolor sit amet consectetur
//               adipisicing elit. Nam obcaecati unde eum quod
//             </p>
//             <input
//               className=" w-52 p-2 rounded-xl placeholder:text-black border-2 border-zinc-400 "
//               type="text"
//               placeholder="Product Category"
//               name="productCategory"
//               list="productCategory"
//               required
//               value={productDetails.productCategory}
//               onChange={handleProductDetailsChange}
//             />
//             <datalist id="productCategory">
//               {categories.map((category, index) => (
//                 <option key={index} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </datalist>
//           </div>
//           <div className="flex gap-2">
//             <div>
//               <input
//                 className=" w-80 p-2 rounded-xl placeholder:text-black border-2 border-zinc-400 "
//                 type="text"
//                 placeholder="Product Category By Age"
//                 name="productCategoryByAge"
//                 list="productCategoryByAge"
//                 required
//                 value={productDetails.productCategoryByAge}
//                 onChange={handleProductDetailsChange}
//               />
//               <datalist id="productCategoryByAge">
//                 {ageCategories.map((age, index) => (
//                   <option key={index} value={age}>
//                     {age}
//                   </option>
//                 ))}
//               </datalist>
//             </div>
//             <div>
//               <input
//                 className="w-52 p-2 rounded-xl placeholder:text-black border-2 border-zinc-400"
//                 type="text"
//                 placeholder="Product Brand"
//                 name="productBrand"
//                 list="productBrand"
//                 required
//                 value={productDetails.productBrand}
//                 onChange={handleProductDetailsChange}
//               />
//               <datalist id="productBrand">
//                 {brands.map((brand, index) => (
//                   <option key={index} value={brand} />
//                 ))}
//               </datalist>
//             </div>
//           </div>
//           <div>
//             <input
//               className=" w-52 p-2 rounded-xl placeholder:text-black border-2 border-zinc-400 "
//               type="text"
//               placeholder="Product Type"
//               name="productType"
//               list="productType"
//               required
//               value={productDetails.productType}
//               onChange={handleProductDetailsChange}
//             />
//             <datalist id="productType">
//               {productTypes.map((type, index) => (
//                 <option key={index} value={type} />
//               ))}
//             </datalist>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
