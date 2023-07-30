import Card from "components/card";
import CardHeader from "components/cardHeader/CardHeader";
import CardPill from 'components/cardPill/CardPill';

import { MdDateRange, MdWork, MdHomeWork, MdPhone, MdEmail } from "react-icons/md";
import { FaDirections } from 'react-icons/fa';
import { BiDollar } from 'react-icons/bi';
import { HiIdentification } from 'react-icons/hi';
import { BsJournalText } from 'react-icons/bs';

import CardPanel from 'cardPanel';

const Laboral = () => {
  return (
    <Card extra={"h-full p-[16px] bg-cover"}>
      <CardHeader
        titulo="Edwin Alfonso Qhispe Suquisupa"
        subtitulo="0104819644"
        tooltip="Datos actualizados a Marzo de 2023."
      />
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='col-span-1 h-full'>
          <CardPanel>
            <CardPill
              titulo="RUC de la Empresa"
              descripcion="0190453685001"
              icon={<HiIdentification className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Tipo de Empresa"
              descripcion="2-EMPRESA PRIVADA -SOCIEDADES / COMPANIAS"
              icon={<MdHomeWork className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Nombre de la Empresa"
              descripcion="FINSOLRED S.A."
              icon={<BsJournalText className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Teléfono de la Empresa"
              descripcion="0999115605"
              icon={<MdPhone className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Dirección de la Empresa"
              descripcion="IGLESIA SANTO DOMING. PADRE AGUIRRE. 9--68. GRAN COLOMBIA. AL LADO DE"
              icon={<FaDirections className="h-4 w-4"/>}
            />
          </CardPanel>
        </div>
        <div className='col-span-1'>
          <div className='grid grid-cols-1 gap-4 h-full'>
            <div className='col-span-1'>
              <CardPanel>
                <CardPill
                    titulo="Ocupación"
                    descripcion="PROGRAMADOR SEMI SENIOR DE SOFTWARE"
                    icon={<MdWork className="h-4 w-4"/>}
                  />
                  <CardPill
                    titulo="Salario"
                    descripcion="$ 750.0"
                    icon={<BiDollar className="h-4 w-4"/>}
                  />
              </CardPanel>
            </div>
            <div className='col-span-1'>
              <CardPanel>
                <CardPill
                  titulo="Fecha de Ingreso"
                  descripcion="01/09/2018"
                  icon={<MdDateRange className="h-4 w-4"/>}
                />
                <CardPill
                  titulo="Fecha de Salida"
                  descripcion="-"
                  icon={<MdDateRange className="h-4 w-4"/>}
                />
              </CardPanel>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <CardPanel>
            <CardPill
              titulo="Dirección del Afiliado"
              descripcion="RIO PALORA"
              icon={<FaDirections className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Teléfono del Afiliado"
              descripcion="-"
              icon={<MdPhone className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Celular del Afiliado"
              descripcion="0999999999"
              icon={<MdPhone className="h-4 w-4"/>}
            />
            <CardPill
              titulo="Email del Afiliado"
              descripcion="sergiomtapia@gmail.com"
              icon={<MdEmail className="h-4 w-4"/>}
            />
          </CardPanel>
        </div>
      </div>
    </Card>
  )
}

export default Laboral