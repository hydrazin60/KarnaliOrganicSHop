import React from "react";
import BigImage from "../../components/card/BigImage";
import BestSellersBooks from "../../components/card/BestSellersBooks";
import BestBooks from "../../components/card/BestBooks";
import FourImageCOmbileProduct from "../../components/card/fourImageCOmbileProduct";
export default function HomeProduct() {
  const smallBooksImage = [
    {
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      price: "$10.99",
      image: "https://m.media-amazon.com/images/I/71RnuhofxkL._AC_SY200_.jpg",
    },
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      price: "$8.99",
      image: "https://m.media-amazon.com/images/I/51f1GBu2w-L._AC_SY200_.jpg",
    },
    {
      title: "The Intelligent Investor",
      author: "Benjamin Graham",
      price: "$15.99",
      image: "https://m.media-amazon.com/images/I/61RhzPcPXoL._AC_SY200_.jpg",
    },
    {
      title: "You Are a Badass",
      author: "Jen Sincero",
      price: "$13.99",
      image: "https://m.media-amazon.com/images/I/71zk8GJLRLL._AC_SY200_.jpg",
    },
    {
      title: "The Millionaire Fastlane",
      author: "MJ DeMarco",
      price: "$18.99",
      image: "https://m.media-amazon.com/images/I/6174ZResW+L._AC_SY200_.jpg",
    },
    {
      title: "The 4-Hour Workweek",
      author: "Timothy Ferriss",
      price: "$14.99",
      image: "https://m.media-amazon.com/images/I/71zk8GJLRLL._AC_SY200_.jpg",
    },
    {
      title: "The Magic of Thinking Big",
      author: "David J. Schwartz",
      price: "$9.99",
      image: "https://m.media-amazon.com/images/I/6174ZResW+L._AC_SY200_.jpg",
    },
    {
      title: "The Power of Habit",
      author: "Charles Duhigg",
      price: "$12.99",
      image: "https://m.media-amazon.com/images/I/71zk8GJLRLL._AC_SY200_.jpg",
    },
    {
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      price: "$11.99",
      image: "https://m.media-amazon.com/images/I/71zk8GJLRLL._AC_SY200_.jpg",
    },
  ];
  return (
    <div className="w-[100%] px-16 mb-12  ">
      <main className="z-10 flex flex-col gap-8  ">
        <BigImage />
        <div className=" flex gap-4 flex-wrap ">
          <FourImageCOmbileProduct />
          <FourImageCOmbileProduct />
          <FourImageCOmbileProduct />
          <FourImageCOmbileProduct />
        </div>
        <BestSellersBooks />
        <BestBooks />
        <div className=" flex gap-4 flex-wrap ">
          <FourImageCOmbileProduct />
          <FourImageCOmbileProduct />
          <FourImageCOmbileProduct />
          <FourImageCOmbileProduct />
        </div>
        <BigImage />
      </main>
    </div>
  );
}
