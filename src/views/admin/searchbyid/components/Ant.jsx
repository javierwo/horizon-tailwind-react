import React from "react";

import Card from "components/card";
import CardHeader from "components/cardHeader/CardHeader";
import CardPill from "components/cardPill/CardPill";
import CardPanel from "cardPanel";

import {
  MdDateRange,
  MdPhone,
  MdEmail,
  MdOutlineFormatListNumbered,
  MdInfoOutline,
} from "react-icons/md";
import { FaDirections, FaMapSigns } from "react-icons/fa";
import { BiMapPin, BiWorld } from "react-icons/bi";
import { BsJournalText } from "react-icons/bs";

const Ant = () => {
  return (
    <Card extra={"h-full p-[16px] bg-cover"}>
      <CardHeader
        titulo="Edwin Alfonso Qhispe Suquisupa"
        subtitulo="0104819644"
        tooltip="Datos actualizados a Marzo de 2023."
      />
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        <div className="col-span-1">
          <div className="grid h-full grid-cols-1 gap-4">
            <div className="col-span-1">
              <CardPanel>
                <CardPill
                  titulo="Teléfono"
                  descripcion="099080808"
                  icon={<MdPhone className="h-4 w-4" />}
                />
                <CardPill
                  titulo="Email"
                  descripcion="edwinqs55@hotmail.com"
                  icon={<MdEmail className="h-4 w-4" />}
                />
              </CardPanel>
            </div>
            <div className="col-span-1">
              <CardPanel>
                <CardPill
                  titulo="Tipo de Dirección"
                  descripcion="Azuay"
                  icon={<MdInfoOutline className="h-4 w-4" />}
                />
                <CardPill
                  titulo="Dirección"
                  descripcion="Cuenca"
                  icon={<FaDirections className="h-4 w-4" />}
                />
              </CardPanel>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <CardPanel>
            <CardPill
              titulo="Placa"
              descripcion="AAA-000"
              icon={<MdInfoOutline className="h-4 w-4" />}
            />
            <CardPill
              titulo="Clase"
              descripcion="Taxi"
              icon={<MdInfoOutline className="h-4 w-4" />}
            />
            <CardPill
              titulo="Tipo"
              descripcion="Cupe"
              icon={<MdInfoOutline className="h-4 w-4" />}
            />
            <CardPill
              titulo="Marca"
              descripcion="Chévrolet"
              icon={<MdInfoOutline className="h-4 w-4" />}
            />
            <CardPill
              titulo="Modelo"
              descripcion="Vitara"
              icon={<MdInfoOutline className="h-4 w-4" />}
            />
            <CardPill
              titulo="Servicio"
              descripcion="Taxi"
              icon={<MdInfoOutline className="h-4 w-4" />}
            />
          </CardPanel>
        </div>
      </div>
    </Card>
  );
};

export default Ant;
