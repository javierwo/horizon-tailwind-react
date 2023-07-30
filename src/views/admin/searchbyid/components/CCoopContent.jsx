import React from 'react'

import Card from "components/card";
import CardHeader from "components/cardHeader/CardHeader";
import CardPill from 'components/cardPill/CardPill';
import CardPanel from 'cardPanel';

import { MdDateRange, MdPhone, MdEmail, MdOutlineFormatListNumbered, MdInfoOutline, MdCreditScore } from "react-icons/md";
import { FaDirections, FaMapSigns } from 'react-icons/fa';
import { BiMapPin, BiWorld, BiDollar } from 'react-icons/bi';
import { BsJournalText } from 'react-icons/bs';
import { RiBankFill } from 'react-icons/ri';

const CCoopContent = () => {
  return (
    <Card extra={"h-full p-[16px] bg-cover"}>
      <CardHeader
        titulo="Edwin Alfonso Qhispe Suquisupa"
        subtitulo="0104819644"
        tooltip="Datos actualizados a Marzo de 2023."
      />
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='col-span-1'>
          <CardPanel>
            <CardPill
              titulo="Razón Social"
              descripcion="ASOCIACION MUTUALISTA DE AHORRO Y CREDITO PARA LA VIVIENDA AZUAY"
              icon={<BsJournalText className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Dias de Morosidad"
              descripcion="0"
              icon={<MdDateRange className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Saldo Total"
              descripcion="$ 13,818.18"
              icon={<BiDollar className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Valor Cuota de Crédito"
              descripcion="$ 355.35"
              icon={<BiDollar className="h-4 w-4"/>}
            />
          </CardPanel>
        </div>
      </div>
    </Card>
  )
}

export default CCoopContent