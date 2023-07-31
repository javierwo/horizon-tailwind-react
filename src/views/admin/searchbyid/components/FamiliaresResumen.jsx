import React from 'react'

import Card from "components/card";
import FamiliarCardSmall from 'components/familiarCards/FamiliarCardSmall';

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useGetPrioridadesQuery } from 'redux/services/prioridadesApi';

import { setPrioridad } from 'redux/features/prioridadesSlice'; 
import { useDispatch } from "react-redux";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const FamiliaresResumen = () => {

  const searchValueState = useSelector((state) => state.searchValueState)
  const dispatch = useDispatch();

  const { data: prioridades, isLoading } = useGetPrioridadesQuery(searchValueState.value)

  if (isLoading) {
    return (
      <Card extra={"h-full p-[16px]"} > 
        <div className="flex flex-col h-full items-start ">
          <h4 className='text-base md:text-lg font-extrabold dark:text-white mt-1'>
            Contactos
          </h4>
          <div className='h-full w-full mt-2 rounded-xl border-2 border-[#f5f5f5] p-4'>
            <Skeleton className='h-full' />
          </div>
        </div>
    </Card>
    )
  }

  dispatch(setPrioridad(prioridades))

  return (
    <Card extra={"h-full p-[16px] bg-cover"} > 
      <div className="flex flex-col h-full items-start">
        <h4 className='text-base md:text-lg font-extrabold dark:text-white mt-1'>
          Contactos
        </h4>
        <div className='w-full mt-2 flex flex-col gap-4 md:h-[400px] md:overflow-auto'>
          {prioridades.map((item, index) => (
            <FamiliarCardSmall
              parentezco={item.PARENTEZCO}
              nombre={item.NOMBRES}
              edad={item.edad}
              ci={item.CEDULA}
              ciudadania={item.DES_CIUDADANIA}
              grupo={item.GRUPO}
            />
          ))}
        </div>
      </div>
    </Card>
  )
}

export default FamiliaresResumen