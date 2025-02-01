import React from "react";

export default function BestBooks() {
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
    <div className="flex py-3 gap-2 border bg-zinc-100 overflow-x-scrol rounded-xl flex-col  justify-center  items-center  ">
      <p className="text-2xl font-bold">Top Sellers in Books for you</p>
      <div className="flex gap-4">
        {smallBooksImage.map((image, index) => (
          <div
            key={index}
            className="flex h-[15rem] w-[10rem] flex-col items-center"
          >
            <img
              src={image.image}
              alt="itemImage"
              className="h-full w-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
