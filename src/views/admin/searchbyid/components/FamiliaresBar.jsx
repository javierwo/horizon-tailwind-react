import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';

import FamiliarCard from './FamiliarCard';
import { useGetPrioridadesDataQuery } from 'redux/services/prioridadesDataApi';

const FamiliaresBar = () => {

  const prioridadesState = useSelector((state) => state.prioridadesState)
  console.log("prioridadesState")
  console.log(prioridadesState)
  console.log('done propridades')

  const { data: prioridadesData, isLoading } = useGetPrioridadesDataQuery(prioridadesState.prioridad)

  if (isLoading) {
    return (
      <div className='col-span-1'>
        Cargando...
      </div>
    )
  }

  console.log("prioridadesData")
  console.log(prioridadesData)

  return (
    <div className='grid grid-cols-3 gap-4'>
      <div className='col-span-1'>
        <FamiliarCard /> 
      </div>
      <div className='col-span-1'>
        <FamiliarCard /> 
      </div>
      <div className='col-span-1'>
        <FamiliarCard /> 
      </div>
      <div className='col-span-1'>
        <FamiliarCard /> 
      </div>
      <div className='col-span-1'>
        <FamiliarCard /> 
      </div>

    </div>
  )
}

export default FamiliaresBar