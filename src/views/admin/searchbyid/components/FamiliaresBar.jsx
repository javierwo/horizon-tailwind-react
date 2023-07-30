import React from 'react'

import FamiliarCard from './FamiliarCard';

const FamiliaresBar = () => {

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