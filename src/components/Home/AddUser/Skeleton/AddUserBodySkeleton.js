import React from 'react'

export default function AddUserBodySkeleton() {
  return (
    <div>
      <div className="flex flex-col px-10 py-6 w-[440px] rounded-lg border border-solid border-searchBgColor mt-8 mx-auto">
        <div className='w-full h-fit'>
          <div className='w-[50%] h-4 bg-skeltonColor rounded'>

          </div>
          <div className='w-[100%] h-4 bg-skeltonColor rounded mt-3'>

          </div>

        </div>
        <div className="flex flex-col gap-2 mb-7 mt-[24px]">

          <div className="w-full flex-row flex items-center justify-between gap-x-2">
            <button className="w-[176px] h-[80px] bg-skeltonColor border border-solid border-searchBgColor rounded-lg px-[55px] py-3">

            </button>
            <button className="w-[176px] h-[80px] bg-skeltonColor border border-solid border-searchBgColor rounded-lg px-[55px] py-3">

            </button>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <button className="w-[114px] h-[80px] bg-skeltonColor flex-col items-center justify-center border border-solid border-searchBgColor rounded-lg px-[28px] py-3">

            </button>
            <button className="w-[114px] h-[80px] bg-skeltonColor flex-col items-center justify-center border border-solid border-searchBgColor rounded-lg px-[28px] py-3">

            </button>
            <button className="w-[114px] h-[80px] bg-skeltonColor flex-col items-center justify-center border border-solid border-searchBgColor rounded-lg px-[28px] py-3">

            </button>
          </div>
        </div>
        <form>

          <div className=" ">
            <div className='w-[100px]  mb-[6px]  h-4 rounded bg-skeltonColor '>

            </div>
            <div className='w-[100%] h-12 rounded-lg bg-skeltonColor'></div>
          </div>

          <div className=" ">
            <div className='w-[100px]  mb-[6px] mt-4 h-4 rounded bg-skeltonColor '>

            </div>
            <div className='w-[100%] h-12 rounded-lg bg-skeltonColor'></div>
          </div>

          <div className="">
            <div className='w-[100px]  mb-[6px] mt-4 h-4 rounded bg-skeltonColor '>

            </div>
            <div className='w-[100%] h-12 rounded-lg bg-skeltonColor'></div>
          </div>

          <div className=" ">
            <div className='w-[100px]  mb-[6px] mt-4 h-4 rounded bg-skeltonColor '>

            </div>
            <div className='w-[100%] h-12 rounded-lg bg-skeltonColor'></div>
          </div>

          <div className="">

            <div className='w-[100%] h-12 mt-4 rounded-lg bg-skeltonColor'></div>
          </div>

        </form>
      </div>
    </div>
  )
}
