import React from "react";

//import avatar_female from "assets/img/avatars/avatar_female.png";
import avatar_male from "assets/img/avatars/avatar_male.png";
import Card from "components/card";
import CardHeader from "components/cardHeader/CardHeader";
import CardPill from "components/cardPill/CardPill";
import CardPillSmall from "components/cardPill/CardPillSmall";

// Icon Imports
import { MdWork } from "react-icons/md";
import { MdOutlineMale } from "react-icons/md";
import { MdOutlineFemale } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { MdCake } from "react-icons/md";
import { MdCheckCircle, MdFamilyRestroom, MdFingerprint } from "react-icons/md";

const ClientCard = (props) => {

  const { nombre } = props;

  return (
    <Card extra={"h-full p-[16px] bg-cover"} > { /** justify-center */}
      <div className="flex flex-col h-full items-start">

        <div className="flex flex-row items-center gap-2 bg-green-100 text-green-600 px-4 py-1 mt-1 rounded-md font-semibold">
          <MdCheckCircle className="h-6 w-6" />
          <div className="text-sm">
            Persona Encontrada
          </div>
        </div>

        <div className="w-full flex flex-">

          {/** 
          <div className="flex items-center justify-start pr-5">
            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-[4px] dark:!border-navy-700">
              <img className="h-full w-full rounded-full" src={avatar_male} alt="" />
            </div>
          </div>
          */}


          <div className="w-full flex flex-col items-center justify-center mt-4">

            <div className="flex items-center justify-start">
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-[4px] dark:!border-navy-700">
                <img className="h-full w-full rounded-full" src={avatar_male} alt="" />
              </div>
            </div>

            <h4 className="text-base md:text-lg font-bold text-navy-700 dark:text-white mt-1">
              {nombre}
            </h4>
            <h4 className="text-sm font-thin text-navy-700 dark:text-white">
              CI: 0105486322
            </h4>
            <div className="bg-gray-100 text-navy-700 px-3 mt-1 py-1 rounded-xl flex gap-1 items-center ">
              <div>
                <MdFavorite className="h-5 w-5"/>
              </div>
              <div>
                Soltero
              </div>
            </div>


            {/** 
            <div className="h-full flex flex-row items-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <div className="text-xl mr-4 text-navy-700 dark:text-white">
                <MdCake className="h-6 w-6"/>
              </div>
              <div className="flex flex-col justify-center w-full">
                <p className="text-sm text-gray-600">Edad</p>
                <p className="text-base font-medium text-navy-700 dark:text-white">
                  24
                </p>
              </div>
            </div>
          */}




          </div>
        </div>

        <div className="w-full grid gap-4 md:grid-cols-2 mt-4 h-full">
          <div className="col-span-1 h-full">
            <CardPill
              titulo="Edad"
              descripcion="30"
              icon={<MdCake className="h-5 w-5"/>}
            />
          </div>
          <div className="col-span-1 h-full">
            <CardPill
              titulo="Grupo de Edad"
              descripcion="Adulto"
              icon={<MdFamilyRestroom className="h-5 w-5"/>}
            />
          </div>
          <div className="col-span-1 h-full">
            <CardPill
              titulo="Sexo"
              descripcion="Masculino"
              icon={<MdOutlineMale className="h-5 w-5"/>}
            />
          </div>
          <div className="col-span-1 h-full">
            <CardPill
              titulo="Ciudadanía"
              descripcion="Ciudadano"
              icon={<MdFingerprint className="h-5 w-5"/>}
            />
          </div>
        </div>



        {/** 

        <div className="flex flex-row items-center gap-2 bg-green-100 text-green-600 px-4 py-1 rounded-md font-semibold h-10">
          <MdCheckCircle className="h-6 w-6" />
          <div className="text-sm">
            Persona Encontrada
          </div>
        </div>




        <div className="mt-4 flex gap-4 md:!gap-14">
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
        */}

      </div>
    </Card>
  )
}

export default ClientCard