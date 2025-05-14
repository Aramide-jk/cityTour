import React, { useCallback, useState } from "react";
// import img from "../../assets/img-src/uk.jpeg";

import { IoMdArrowDropdownCircle } from "react-icons/io";
import { FaRegTimesCircle } from "react-icons/fa";

export default function Tour(props) {
  const { id, img, info, city, name } = props.tour;
  const { removeTour } = props;
  const [show, setShow] = useState(false);

  return (
    <article className="bg-gray-200 rounded-md my-4 mx-0 ">
      <div className="relative group">
        <img
          src={img}
          alt=""
          className="w-full block rounded-tr-md rounded-tl-md "
        />
        <span
          className="absolute block top-1 right-1 p-1 text-2xl cursor-pointer text-green-300 transition-all duration-600 opacity-0 group-hover:opacity-[1]"
          onClick={() => {
            removeTour(id);
          }}>
          <FaRegTimesCircle />
        </span>
      </div>
      <div className="tourInfo py-4 px-2">
        <h3 className="uppercase text-green-400 font-bold">{city}</h3>
        <h4 className="capitalize mb-1 ">{name}</h4>

        <h5 className="flex items-center gap-1">
          Info
          <span
            className="text-green-300 text-xl cursor-pointer"
            onClick={() => setShow(!show)}>
            <IoMdArrowDropdownCircle />
          </span>
        </h5>
        {show && <p>{info}</p>}
      </div>
    </article>
  );
}
