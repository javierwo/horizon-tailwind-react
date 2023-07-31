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

  const { data: datosPersonales, isLoading, error } = useGetDatosPersonalesQuery(searchValueState.value)

  if (isLoading) {
    return (
      <div>
        Cargando...
      </div>  
    )
  }

  console.log("data")
  console.log(datosPersonales)
  console.log('datosPersonales[0].CEDULA')
  console.log(datosPersonales[0].CEDULA)



  return (
    <>
      {datosPersonales[0].NOMBRES}



      {/**
        CEDULA
        : 
        "0104819644"
        CEDULA_CONYUG
        : 
        "0"
        CEDULA_NUM
        : 
        " 104819644"
        CED_MADRE
        : 
        "0102601978"
        CED_PADRE
        : 
        "0102932878"
        COD_CONDIC
        : 
        "0"
        COD_DOMIC
        : 
        "12604200"
        COD_ESTADO
        : 
        "1"
        COD_GENERO
        : 
        " "
        COD_NACIONALIDAD
        : 
        "239"
        COD_NACIONALIDAD_CONYUGE
        : 
        " "
        COD_NIV_ESTUD
        : 
        "4"
        COD_PROFESION
        : 
        "E30"
        COD_SEXO
        : 
        "1"
        DES_CIUDADANIA
        : 
        "CIUDADANO"
        DES_NACIONALID
        : 
        "ECUATORIANA"
        DES_NIV_ESTUD
        : 
        "BACHILLERATO"
        DES_PROFESION
        : 
        "ESTUDIANTE"
        DES_SEXO
        : 
        "HOMBRE"
        ESTADO_CIVIL
        : 
        "SOLTERO"
        FECHA_ACTUALIZ
        : 
        "8/11/2019"
        FECHA_DEFUNC
        : 
        " "
        FECHA_EXPEDICION_CED
        : 
        "8/11/2019"
        FECHA_EXPIRACION
        : 
        "8/11/2029"
        FECHA_MATRIM
        : 
        " "
        FECHA_NACIM
        : 
        "2/6/1997"
        INDIVIDUAL_DACTILAR
        : 
        "V3343I4242"
        LUG_DEFUNC
        : 
        "0"
        LUG_INSCRIP_DEF
        : 
        "0"
        LUG_MATRIM
        : 
        "0"
        LUG_NACIM
        : 
        "12605450"
        NAC_MADRE
        : 
        "239"
        NAC_PADRE
        : 
        "239"
        NOMBRES
        : 
        "PACHECO FARES JAVIER OSWALDO"
        NOMBRE_CALLE
        : 
        "CENTRO CENTRO"
        NOMBRE_CONYUG
        : 
        " "
        NOM_MADRE
        : 
        "FARES COYAGO GUADALUPE MARIA"
        NOM_PADRE
        : 
        "PACHECO SALTO OSWALDO"
        NUMERO_CASA
        : 
        "0"
       */}

    </>


  )

  
}

export default DPContent