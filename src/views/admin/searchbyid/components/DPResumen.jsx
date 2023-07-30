import React from 'react'

//import avatar_female from "assets/img/avatars/avatar_female.png";
import avatar_male from "assets/img/avatars/avatar_male.png";
import Card from "components/card";
import CardPill from "components/cardPill/CardPill";
import CardPillSmall from 'components/cardPill/CardPillSmall';

// Icon Imports
import { MdCake } from "react-icons/md";

const DPResumen = () => {
  return (
    <Card extra={"h-full p-[16px] bg-cover"} > 
      <div className="flex flex-col h-full items-start">
        <h4 className='text-base md:text-lg font-bold text-navy-700 dark:text-white mt-1'>
          Datos Personales
        </h4>
        <div className='h-full w-full mt-2 rounded-xl border-2 border-gray-100 p-4'>
          <div className="w-full flex flex-cols gap-2">
            <div className="flex items-center justify-start flex-col gap-1">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-[4px] dark:!border-navy-700">
                <img className="h-full w-full rounded-full" src={avatar_male} alt="" />
              </div>
            </div>
            <div className='flex flex-col justify-start items-start'>
              <div className='text-navy-700 dark:text-white font-extrabold text-base'>
                Francisco Andrade
              </div>
              <div className='text-navy-700 dark:text-white font-thin text-sm'>
                Adulto
              </div>
              <div className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md font-semibold mt-2">
                CLIENTE
              </div>
            </div>
          </div>
          <div className='w-full my-2'>
            <hr />
          </div>
          <div className='grid grid-cols-2 mt-4 gap-4'>
            <div className='col-span-1'>
              <CardPillSmall 
                icon={ <MdCake />}
                titulo={"Edad"}
                descripcion={"155"}
              />
            </div>
            <div className='col-span-1'>
              <CardPillSmall 
                icon={ <MdCake />}
                titulo={"Estado Civil"}
                descripcion={"Soltero"}
              />
            </div>
            <div className='col-span-1'>
              <CardPillSmall 
                icon={ <MdCake />}
                titulo={"Ciudadanía"}
                descripcion={"Ciudadano"}
              />
            </div>
            <div className='col-span-1'>
              <CardPillSmall 
                icon={ <MdCake />}
                titulo={"Nivel de Estudios"}
                descripcion={"Superior"}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default DPResumen