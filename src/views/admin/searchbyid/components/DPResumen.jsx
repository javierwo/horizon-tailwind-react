import React from 'react'

//import avatar_female from "assets/img/avatars/avatar_female.png";
import avatar_male from "assets/img/avatars/avatar_male.png";
import Card from "components/card";
import CardPillSmall from 'components/cardPill/CardPillSmall';

import { MdCake } from "react-icons/md";

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useGetDatosPersonalesQuery } from 'redux/services/datosPersonalesApi';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const DPResumen = () => {

  const searchValueState = useSelector((state) => state.searchValueState)

  const { data: datosPersonales, isLoading } = useGetDatosPersonalesQuery(searchValueState.value)

  if (isLoading) {
    return (
      <Card extra={"h-full p-[16px]"} > 
      <div className="flex flex-col h-full items-start ">
        <h4 className='text-base md:text-lg font-extrabold dark:text-white mt-1'>
          Datos Personales
        </h4>
        <div className='h-full w-full mt-2 rounded-xl border-2 border-[#f5f5f5] p-4'>
          <Skeleton className='h-full' />
        </div>
      </div>
    </Card>
    )
  }

  if (datosPersonales.length === 0) {
    return (
      <Card extra={"h-full p-[16px]"} > 
        <div className="flex flex-col h-full items-start ">
          <h4 className='text-base md:text-lg font-extrabold dark:text-white mt-1'>
            SRI
          </h4>
          <div className='h-full w-full mt-2 rounded-xl border-2 border-[#f5f5f5] p-4'>
            Sin Información disponible.
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card extra={"h-full p-[16px]"} > 
      <div className="flex flex-col h-full items-start ">
        <h4 className='text-base md:text-lg font-extrabold dark:text-white mt-1'>
          Datos Personales
        </h4>
        <div className='h-full w-full mt-2 rounded-xl border-2 border-[#f5f5f5] p-4'>
          <div className="w-full flex flex-cols gap-2">
            <div className="flex items-center justify-center flex-col gap-1">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-[4px] dark:!border-navy-700">
                <img className="h-full w-full rounded-full" src={avatar_male} alt="" />
              </div>
            </div>
            <div className='flex flex-col justify-start items-start'>
              <div className='dark:text-white font-semibold'>
                {datosPersonales[0].NOMBRES}
              </div>
              <div className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-md font-semibold mt-1">
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
                descripcion={datosPersonales[0].EDAD}
              />
            </div>
            <div className='col-span-1'>
              <CardPillSmall 
                icon={ <MdCake />}
                titulo={"Estado Civil"}
                descripcion={datosPersonales[0].ESTADO_CIVIL}
              />
            </div>
            <div className='col-span-1'>
              <CardPillSmall 
                icon={ <MdCake />}
                titulo={"Ciudadanía"}
                descripcion={datosPersonales[0].DES_CIUDADANIA}
              />
            </div>
            <div className='col-span-1'>
              <CardPillSmall 
                icon={ <MdCake />}
                titulo={"Nivel de Estudios"}
                descripcion={datosPersonales[0].DES_NIV_ESTUD}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default DPResumen