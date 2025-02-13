import AdminSideBar from "@/components/Admin/AdminSideBar";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
export default function ManageProduct() {
  const user = useSelector((state) => state?.user?.user);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const fetchAllProducts = async () => {
    if (!user?._id) {
      console.log("User ID not found");
      toast.error("Unauthorized access! Please log in again.");

      return;
    }
    setLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:4000/api/v1/amazoneClone/product/get/all_product",
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
          withCredentials: true,
        }
      );
      setProducts(res.data.data);
      console.log(res.data.data);
      toast.success(res.data.message || "Products fetched successfully");
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log(products);
    fetchAllProducts();
  }, []);

  const [imageLink, setImageLink] = useState("");

  const hoverImageLinkFunction = (event, imageSrc) => {
    event.preventDefault();
    setIsHovered(true);
    setImageLink(imageSrc);
  };

  const removeHoverImage = () => {
    setIsHovered(false);
  };
  return (
    <div className="flex  w-full bg-zinc-800 text-white">
      <AdminSideBar />
      <div className="h-[100vh] w-full flex  flex-col py-10  gap-1 ">
        <div className="flex flex-col gap-12 ml-10 ">
          <div>
            <h1 className="text-3xl font-semibold">Manage Product</h1>
          </div>
          <div className="flex gap-10 text-zinc-400 ">
            <p className="font-semibold border-b-4 border-zinc-800 pb-1 hover:border-zinc-600 cursor-pointer ">
              Product
            </p>
            <p className=" font-semibold border-b-4 border-zinc-800 pb-1 hover:border-zinc-600 cursor-pointer">
              Order
            </p>
            <p className=" font-semibold border-b-4 border-zinc-800 pb-1 hover:border-zinc-600 corpus-pointer">
              User
            </p>
          </div>
        </div>
        <div className="w-full border-t border-zinc-600 border-b">
          <input
            placeholder="Search product ......."
            className=" bg-zinc-800 w-full border-none placeholder:text-gray-400 outline-none px-10 p-2  "
          />
        </div>
        <div>
          <table className="table-auto w-full text-left text-sm text-gray-500 overflow-x-scroll ">
            <thead className="border-b border-zinc-600">
              <th className="text-[0.9rem]  text-zinc-400 font-medium px-8 py-2">
                Product Name
              </th>
              <th className="text-[0.9rem]  v text-zinc-400 font-medium px-4 py-2">
                Product Description
              </th>
              <th className="text-[0.9rem]  v text-zinc-400 font-medium px-4 py-2">
                Product Image
              </th>
              <th className=" text-[0.9rem]  text-zinc-400 font-medium px-4 py-2">
                Price
              </th>
              <th className=" text-[0.9rem]   text-zinc-400 font-medium px-4 py-2 flex items-center gap-1">
                <p> Quantity </p>
              </th>
              <th className="text-[0.9rem]  text-zinc-400 font-medium px-4 py-2">
                Brands
              </th>
              <th className=" text-[0.9rem]   text-zinc-400 font-medium px-4 py-2">
                Category
              </th>
              <th className=" text-[0.9rem]   text-zinc-400 font-medium px-4 py-2">
                Dsicound
              </th>
            </thead>
            {products.map((product, index) => (
              <tbody className="border-b border-zinc-600 ">
                <tr className="hover:bg-black hover:border-b cursor-pointer  hover:border-red-600">
                  <th className="text-xs text-zinc-400 px-10  py-2">
                    <div className=" flex flex-row gap-2">
                      <span>
                        <p> {product?.productName} </p>
                      </span>
                    </div>
                  </th>
                  <th className="text-xs text-zinc-400 px-3   py-1">
                    <div className=" flex flex-row gap-2">
                      <span>{product?.productDescription}</span>
                    </div>
                  </th>
                  <th className="text-xs relative  text-zinc-400 px-3   py-1">
                    <div className="relative flex flex-row gap-2">
                      {product?.productImage?.length > 0 && (
                        <img
                          src={product.productImage[0]}
                          alt="Product Image"
                          className="w-10 h-10 rounded-md cursor-pointer"
                          onMouseEnter={(e) =>
                            hoverImageLinkFunction(e, product.productImage[0])
                          }
                          onMouseLeave={removeHoverImage}
                        />
                      )}
                    </div>
                  </th>
                  <th className="text-xs text-zinc-400 px-2   py-2">
                    <div className=" flex flex-row gap-2">
                      <span>
                        <p> {product?.prdouctPrice}</p>
                      </span>
                    </div>
                  </th>
                  <th className="text-xs text-zinc-400  px-8  py-2">
                    <div className=" flex flex-row gap-2">
                      <span>
                        <p> {product?.productQuantity} </p>
                      </span>
                    </div>
                  </th>
                  <th className="text-xs text-zinc-400 px-5  py-2">
                    <div className=" flex flex-row gap-2">
                      <span>
                        <p> {product?.productBrand} </p>
                      </span>
                    </div>
                  </th>
                  <th className="text-xs text-zinc-400 px-5    py-2">
                    <div className=" flex flex-row gap-2">
                      <span> {product?.productCategory} </span>
                    </div>
                  </th>
                  <th className="text-xs text-zinc-400 px-5   py-2">
                    <div className=" flex flex-row gap-2">
                      <span className="flex flex-row gap-2 items-center">
                        <p> {product?.discount}</p>
                      </span>
                    </div>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
          {isHovered && (
            <div className="absolute top-[7%] left-[50%] h-52 w-52 bg-red-200 rounded-md shadow-lg">
              <img
                src={imageLink}
                alt="Product Image"
                className="h-full w-full object-cover rounded-md"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
