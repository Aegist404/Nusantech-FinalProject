import React, { useState } from 'react';
import { Progress } from 'antd';

const Progres = () => {
  const [percent] = useState(0);

  return (
      <>
    <table className="border-2 border-gray-500 w-64 mt-5 ml-10 overflow-auto">
        <tr>
            <td className='p-2'> <b>Progress</b> </td>
        </tr>
        <tr>
            <td className='p-2'><Progress percent={percent} /></td>
        </tr>
        <hr className='border-1 border-gray-500' />
        <tr>
            <td className='p-2'> <b>Modul 1</b> </td>
        </tr> 
        <hr className='border-1 border-gray-500' />
    </table>
    </>
  );
};

export default Progres;
