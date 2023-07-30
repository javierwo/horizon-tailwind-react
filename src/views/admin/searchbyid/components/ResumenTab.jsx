import React from 'react'

import DPResumen from './DPResumen'
import CentralBancoResumen from './CentralBancoResumen'
import LaboralResumen from './LaboralResumen'
import ResumenSRI from './ResumenSRI'
import FamiliaresResumen from './FamiliaresResumen'

const ResumenTab = () => {

  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
      <div className='col-span-1'>
        <div className='grid grid-cols-1 gap-4 h-full'>
          <div className='col-span-1'>
            <DPResumen/>
          </div>
          <div className='col-span-1'>
            <ResumenSRI/>
          </div>
        </div>
      </div>
      <div className='col-span-1'>
        <div className='grid grid-cols-1 gap-4 h-full'>
          <div className='col-span-1'>
            <LaboralResumen/>
          </div>
          <div className='col-span-1'>
            <CentralBancoResumen/>
          </div>
        </div>
      </div>
      <div className='col-span-1'>
        <FamiliaresResumen/>
      </div>
    </div>
  )
}

export default ResumenTab