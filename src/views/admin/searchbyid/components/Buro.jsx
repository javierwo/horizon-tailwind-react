import React from 'react'
import Card from "components/card";

const Buro = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-4 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          Buró de Crédito
        </h4>
      </div>

      <div className="grid gap-4 px-2">{/*grid-cols-1 md:grid-cols-2*/}
        Gráfico del BURÓ
      </div>
    </Card>
  )
}

export default Buro