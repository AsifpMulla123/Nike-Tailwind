import React from "react";
import { star } from "../assets/icons";

const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex-1 flex flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <p className="mt-2 font-palanquin font-semibold leading-normal text-2lx">
        {name}
      </p>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal">{price}</p>
    </div>
  );
};

export default PopularProductsCard;
