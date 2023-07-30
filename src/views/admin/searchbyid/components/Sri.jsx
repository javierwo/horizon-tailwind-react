import Card from "components/card";
import CardHeader from "components/cardHeader/CardHeader";
import CardPill from 'components/cardPill/CardPill';
import CardPanel from 'cardPanel';

import { MdDateRange, MdPhone, MdEmail, MdOutlineFormatListNumbered, MdInfoOutline } from "react-icons/md";
import { FaDirections, FaMapSigns } from 'react-icons/fa';
import { BiMapPin, BiWorld } from 'react-icons/bi';
import { BsJournalText } from 'react-icons/bs';

const Sri = () => {
  return (
    <Card extra={"h-full p-[16px] bg-cover"}>
      <CardHeader
        titulo="Edwin Alfonso Qhispe Suquisupa"
        subtitulo="0104819644"
        tooltip="Datos actualizados a Enero de 2023."
      />
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='col-span-1 h-full'>
          <CardPanel>
            <CardPill
              titulo="Razón Social"
              descripcion="Edwin Quishpe"
              icon={<BsJournalText className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Nombre de la Fantasía Comercial"
              descripcion="Edwin Enterprises"
              icon={<BsJournalText className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Fecha de Inicio de Actividades"
              descripcion="2021/10/06 00:00:00.000"
              icon={<MdDateRange className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Fecha de Cancelación"
              descripcion="2021/10/06 00:00:00.000"
              icon={<MdDateRange className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Fecha de Suspensión Definitiva"
              descripcion="2021/10/06 00:00:00.000"
              icon={<MdDateRange className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Fecha de Reinicio"
              descripcion="2021/10/06 00:00:00.000"
              icon={<MdDateRange className="h-4 w-4"/>}
            />
          </CardPanel>
        </div>
        <div className='col-span-1'>
          <div className='grid grid-cols-1 gap-4 h-full'>
            <div className='col-span-1'>
              <CardPanel>
                <CardPill
                  titulo="Teléfono"
                  descripcion="099080808"
                  icon={< MdPhone className="h-4 w-4"/>}
                />
                <CardPill
                  titulo="Email"
                  descripcion="edwinqs55@hotmail.com"
                  icon={<MdEmail className="h-4 w-4"/>}
                />
                <CardPill
                  titulo="Calle"
                  descripcion="Rio Palora"
                  icon={<FaDirections className="h-4 w-4"/>}
                />
                <CardPill
                  titulo="Número"
                  descripcion="Rio Palora"
                  icon={<MdOutlineFormatListNumbered className="h-4 w-4"/>}
                />
                <CardPill
                  titulo="Intersección"
                  descripcion="Rio Palora"
                  icon={<FaMapSigns className="h-4 w-4"/>}
                />
                <CardPill
                  titulo="Referencia"
                  descripcion="Rio Palora"
                  icon={<BiMapPin className="h-4 w-4"/>}
                />
              </CardPanel>
            </div>
            <div className='col-span-1'>
              <CardPanel>
                <CardPill
                  titulo="Provincia"
                  descripcion="Azuay"
                  icon={<BiWorld className="h-4 w-4"/>}
                />
                <CardPill
                  titulo="Cantón"
                  descripcion="Cuenca"
                  icon={<BiWorld className="h-4 w-4"/>}
                />
                <CardPill
                  titulo="Parroquia"
                  descripcion="El Vecino"
                  icon={<BiWorld className="h-4 w-4"/>}
                />
              </CardPanel>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <CardPanel>
            <CardPill
              titulo="Fecha de Inscripción"
              descripcion="2021/10/06 00:00:00.000"
              icon={<MdDateRange className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Actividad"
              descripcion="SERVICIOS DE TAXIS."
              icon={<MdInfoOutline className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Clase de Contribuyente"
              descripcion="OTROS"
              icon={<MdInfoOutline className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Categoria RISE"
              descripcion="-"
              icon={<MdInfoOutline className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Estado de Persona Natural"
              descripcion="SUSPENDIDO"
              icon={<MdInfoOutline className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Actividad del Contribuyente"
              descripcion="SERVICIOS DE TAXIS."
              icon={<MdInfoOutline className="h-4 w-4"/>}
            />
          </CardPanel>
        </div>
      </div>
    </Card>
  )
}

export default Sri