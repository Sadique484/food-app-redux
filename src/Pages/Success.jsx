import React from "react";
import { RiseLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { RiHomeSmileFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-100">
      {loading ? (
        <RiseLoader color="brown" />
      ) : (
        <div className="text-center">
          <h3 className="text-3xl text-green-800 font-extrabold ">
            Order Completed !!!
          </h3>
          <p className="text-yellow-700 text-xl p-5">
            Your Order has been successfully placed!!
          </p>
          <div className="flex flex-col justify-center items-center self-center">
            <RiHomeSmileFill
              className="text-5xl cursor-pointer text-green-800 text-center"
              onClick={() => {
                navigate("/");
              }}
            />
            <p>Go to Home Screen</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Success;
