"use client"
import React from 'react'
import Webcam from 'react-webcam'

export const ObjectDetection = () => {
  return (
      <div className='mt-8'>
          <div className='relative flex justify-center items-center gradient p-1.5 rounded-md gradient'>
              {/* webcame */}
              
              <Webcam className=" rounded-md w-full lg:h-[720px]" muted/>
                  
              
          </div>
          
    </div>
  )
}
