import React from "react";

const LeftContent = () => {
  const workItems = [
    "Static Web",
    "Dynamic Web",
    "SAAS Application",
    "MarketPlace Application",
    "E-commerce",
  ];
  return (
    <ul className="text-[50px] font-bold">
      {workItems?.map((item, index) => (
        <li
          key={index}
          className="text-transparent custom-text-stroke cursor-pointer hover:animate-fillTheText">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default LeftContent;
