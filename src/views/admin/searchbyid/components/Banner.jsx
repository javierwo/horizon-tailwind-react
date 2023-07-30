import React from "react";
//import avatar_female from "assets/img/avatars/avatar_female.png";
import avatar_male from "assets/img/avatars/avatar_male.png";
import banner from "assets/img/profile/banner1.jpg";
import Card from "components/card";


const Banner = () => {
  return (
    <Card extra={"items-center justify-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-5 w-full justify-center rounded-xl bg-cover"
        //style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute flex h-[75px] w-[75px] items-center justify-center rounded-full border-[4px] border-white dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={avatar_male} alt="" />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            Quishpe Suquisupa Edwin Alfonso
        </h4>
        <p className="text-base font-normal text-gray-600">Cliente</p>
      </div>

      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">32</p>
            <p className="text-sm font-normal text-gray-600">Edad</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">Soltero</p>
            <p className="text-sm font-normal text-gray-600">Estado Civil</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">0</p>
            <p className="text-sm font-normal text-gray-600">Hijos</p>
        </div>
      </div>
    </Card>
  );
};

export default Banner;
