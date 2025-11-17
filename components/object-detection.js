"use client"
import React, { use, useRef } from 'react'
import Webcam from 'react-webcam'

export const ObjectDetection = () => {
  const webcamRef = useRef(null)

  const showMyVideo = () => {
    if (webcamRef.current !== null && webcamRef.current.video?.readyState === 4) {
      const myVideoWidth = webcamRef.current.video.videoWidth 
      const myVideoHeight = webcamRef.current.video.videoHeight
      console.log("Video dimensions: ", myVideoWidth, myVideoHeight);

      
    }
    
  } 
  
  return (
      <div className='mt-8'>
          <div className='relative flex justify-center items-center gradient p-1.5 rounded-md gradient'>
              {/* webcame */}
              
              <Webcam ref={webcamRef} className=" rounded-md w-full lg:h-[720px]" muted/>
                  
              
          </div>
          
    </div>
  )
}
