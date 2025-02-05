import AdminSideBar from "@/components/Admin/AdminSideBar";
import { Button } from "@/components/ui/button";
import React from "react";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";

export default function EditProductDetails() {
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
  const [updatedProductData, setUpdatedProductData] = React.useState({
    productName: "",
    prdouctPrice: "",
    productDescription: "",
    productQuantity: "",
    productImage: [],
    productType: "",
    productCategory: "",
    productCategoryByAge: "",
    productBrand: "",
    productReviewVideo: "",
  });

  return (
    <div className="flex h-[100vh]">
      <AdminSideBar />
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
            />
            <input
              className="w-40 p-2 placeholder:text-zinc-500 rounded-xl border-2 border-zinc-400"
              type="number"
              placeholder="Product Price"
              name="prdouctPrice"
              required
            />
          </div>
          <div>
            <textarea
              className="w-1/2 rounded-xl placeholder:text-zinc-400 placeholder:font-[400] border-2 border-zinc-400 p-2"
              name="productDescription"
              id="productDescription"
              placeholder="Product Description"
              rows="10"
              required
            ></textarea>
          </div>
          <div>
            <input
              className="w-40 p-2 rounded-xl placeholder:text-zinc-500 border-2 border-zinc-400"
              type="number"
              placeholder="Product Quantity"
              name="productQuantity"
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
            <div className="h-44 w-44 border-2 p-2 border-zinc-400 rounded-xl flex items-center justify-center cursor-pointer">
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
                multiple
              />
            </div>
            <div className="flex gap-2 h-40 border-2 p-2 border-zinc-400 rounded-xl"></div>
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
          <div className="border p-2 justify-between border-zinc-400 flex gap-1 ">
            <div className="h-44 w-44 relative border-2 p-2 border-zinc-400 rounded-xl flex items-center justify-center cursor-pointer">
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
              />
              <p className="text-sm absolute bottom-0 text-zinc-900">
                Upload Video
              </p>
            </div>
            <div className="h-44 w-72 relative rounded-xl group  border-2 p-2 border-zinc-400"></div>
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
            />
            <datalist id="productType">
              {productTypes.map((type, index) => (
                <option key={index} value={type} />
              ))}
            </datalist>
          </div>
          <Button type="submit" className="w-52 mt-4">
            submit
          </Button>
        </form>
      </div>
    </div>
  );
}
