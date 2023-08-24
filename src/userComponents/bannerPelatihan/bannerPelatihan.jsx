import React from 'react'
import KuisRadio from './kuisPelatihan'
import TimerPelatihan from './timerPelatihan'

function BannerPelatihan() {
  return (
    <div className='mx-14 mt-4'>
        <h2 className='font-bold'>Judul Pelatihan</h2>
        <div className="container-pelatihan border-2 border-solid border-black-500 p-4 mt-4 flex items-center h-96">
            <div>
                <h2 className='w-6/12 mx-20 my-8'>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum tenetur rem voluptate inventore, accusantium debitis velit eligendi perferendis. Animi nihil laboriosam voluptatem quod iusto, odit a quo ad libero?</h2>
            </div>
            <div class="flex justify-center mb-12">
                <div class="grid grid-cols-4 gap-x-3 gap-y-1 border border-black p-1 w-56 absolute right-64">
                  <button class="border border-black text-center h-11 w-10">1</button>
                  <button class="border border-black text-center h-11 w-10">2</button>
                  <button class="border border-black text-center h-11 w-10">3</button>
                  <button class="border border-black text-center h-11 w-10">4</button>
                  <button class="border border-black text-center h-11 w-10">5</button> 
                  <button class="border border-black text-center h-11 w-10">6</button>
                  <button class="border border-black text-center h-11 w-10">7</button>
                  <button class="border border-black text-center h-11 w-10">8</button>
                </div>  
            </div>
            <div className='mb-[50px] mr-[30px]'>
              <TimerPelatihan/> 
            </div>
        </div>
        <div className='border-2 border-t-0  border-black-500 h-32 '>
          <KuisRadio/>
        </div>
    </div>
  )
}

export default BannerPelatihan