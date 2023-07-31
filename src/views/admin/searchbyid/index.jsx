import React, { useEffect } from 'react'

import Laboral from './components/Laboral';
import Sri from './components/Sri';
import Tabs from './components/Tabs';
import ResumenTab from './components/ResumenTab';
import DPContent from './components/DPContent';
import Ant from './components/Ant';
import CBancosContent from './components/CBancosContent';
import CCoopContent from './components/CCoopContent';
import FamiliaresBar from './components/FamiliaresBar';

import { FaFileInvoiceDollar } from 'react-icons/fa';
import { MdContacts, MdListAlt, MdBusiness, MdDirectionsCar, MdHome } from 'react-icons/md';
import { BsBank } from 'react-icons/bs';
import { RiBankCardLine } from 'react-icons/ri';

import { FiSearch } from 'react-icons/fi';
import { useGetDatosPersonalesQuery } from 'redux/services/datosPersonalesApi';

import { useDispatch, useSelector } from 'react-redux';
import { getDatosPersonales } from 'redux/features/datosPersonalesSlice';

import { useState } from 'react';

const SearchById = () => {

  const searchValueState = useSelector((state) => state.searchValueState)

  if (searchValueState.value === null) {
    return (
      <div className='bg-white rounded-xl p-[16px]'>
        Ningún registro para mostrar.
      </div>
    )
  }

  const tabs = [
    { 
      title: 'Resumen', 
      icon: <MdHome />, 
      content: <ResumenTab /> 
    },
    { 
      title: 'Contactabilidad', 
      icon: <MdContacts />, 
      content: <FamiliaresBar /> 
    },
    { 
      title: 'Datos Personales', 
      icon: <MdListAlt />, 
      content: <DPContent /> 
    },
    { 
      title: 'IESS', 
      icon: <MdBusiness />, 
      content: <Laboral />
    },
    { 
      title: 'SRI', 
      icon: <FaFileInvoiceDollar />, 
      content: <Sri />
    },
    { 
      title: 'ANT', 
      icon: <MdDirectionsCar />, 
      content: <Ant />
    },
    { 
      title: 'Central Bancos', 
      icon: <BsBank />, 
      content: <CBancosContent />
    },
    { 
      title: 'Central Cooperativas', 
      icon: <RiBankCardLine />, 
      content: <CCoopContent />
    },
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  )
}

export default SearchById;
