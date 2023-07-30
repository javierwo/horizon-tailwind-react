import React from 'react'
import CorreosTable from './components/CorreosTable';
import NumsTable from './components/NumsTable';

const Tablas = () => {
  return (
    <div className='w-full h-fit flex flex-col gap-5 md:grid md:grid-cols-2'>
      <div className="w-full h-full">
        <NumsTable />
      </div>

      <div className="w-full h-full">
        <CorreosTable />
      </div>
    </div>
  );
};

export default Tablas;