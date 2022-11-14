import React from "react";
import { AiFillStar } from "react-icons/ai";
import Rating from "react-rating";
const SelectionStars = () => {
  return (
    <div className="w-3/4 m-auto  text-4xl mb-5 gap-4 flex justify-center">
      {/* @ts-ignore */}
      <Rating
        className="gap-4"
        emptySymbol={<AiFillStar className="inline" />}
        fullSymbol={<AiFillStar className="inline text-yellow-300" />}
        onClick={(rating) => {
          console.log(rating);
        }}
      />
    </div>
  );
};
export default SelectionStars;
