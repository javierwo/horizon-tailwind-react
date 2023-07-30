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

const CBancosContent = () => {
  return (
    <Card extra={"h-full p-[16px] bg-cover"}>
      <CardHeader
        titulo="Edwin Alfonso Qhispe Suquisupa"
        subtitulo="0104819644"
        tooltip="Datos actualizados a Marzo de 2023."
      />
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='col-span-1'>
          <CardPanel>
            <CardPill
              titulo="Entidad"
              descripcion="Pichincha"
              icon={<BsJournalText className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Tipo de Entidad"
              descripcion="Banco Privado"
              icon={<RiBankFill className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Calificación"
              descripcion="A1"
              icon={<MdCreditScore className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Saldo Vigente"
              descripcion="$ 100.30"
              icon={<BiDollar className="h-4 w-4"/>}
            />
          </CardPanel>
        </div>
        <div className='col-span-1'>
          <CardPanel>
            <CardPill
              titulo="Judicial"
              descripcion="0"
              icon={<MdInfoOutline className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Castigo"
              descripcion="0"
              icon={<MdInfoOutline className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Mora"
              descripcion="0"
              icon={<MdInfoOutline className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Saldo Mora"
              descripcion="$ 0"
              icon={<BiDollar className="h-4 w-4"/>}
            />
          </CardPanel>
        </div>
      </div>
    </Card>
  )
}

export default CBancosContent