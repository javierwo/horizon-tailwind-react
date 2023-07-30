import React from 'react'

import Card from "components/card";
import CardHeader from "components/cardHeader/CardHeader";
import CardPill from 'components/cardPill/CardPill';

import { MdPerson, MdHome, MdDateRange, MdWork } from "react-icons/md";
import { FaBirthdayCake, FaUserGraduate, FaHeart } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { HiIdentification } from 'react-icons/hi';

import { BsPersonCheckFill, BsGenderMale, BsGenderFemale } from 'react-icons/bs';

import CardPanel from 'cardPanel';

import { useSelector } from 'react-redux/es/hooks/useSelector';

import { useGetDatosPersonalesQuery } from 'redux/services/datosPersonalesApi';

const DPContent = () => {

  const searchValueState = useSelector((state) => state.searchValueState)
  console.log('searchValueState')
  console.log(searchValueState)
  console.log('searchValueState.value')
  console.log(searchValueState.value)

  const { data, isLoading, error } = useGetDatosPersonalesQuery(searchValueState.value)
  console.log(data)
  console.log(error)


  if (isLoading) {
    return (
      <div>
        Cargando...
      </div>  
    )
  }

  return (
    <>

      xxx
    </>


  )

  
}

export default DPContent