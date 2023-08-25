import { useState } from 'react';
import { Radio } from 'antd';
const KuisRadio = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className='flex justify-center items-center pt-12'>
    <Radio.Group onChange={onChange} value={value} className='grid grid-cols-3 gap-x-64'>
      <Radio value={1}>Pilihan Jawaban A</Radio>
      <Radio value={2}>Pilihan Jawaban B</Radio>
      <Radio value={3}>Pilihan Jawaban C</Radio>
      {/* <Radio value={4}>Pilihan Jawaban D</Radio> */}
    </Radio.Group>
    </div>
  );
};
export default KuisRadio;