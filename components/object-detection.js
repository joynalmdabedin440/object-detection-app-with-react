"use client"
import React, { use, useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import {load as cocoSSDLoad } from '@tensorflow-models/coco-ssd'


export const ObjectDetection = () => {
  const webcamRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  const runCOcoSSd = async () => {
    setIsLoading(true)
    const net = await cocoSSDLoad()
    setIsLoading(false)
  }

  const showMyVideo = () => {
    if (webcamRef.current !== null && webcamRef.current.video?.readyState === 4) {
      const myVideoWidth = webcamRef.current.video.videoWidth 
      const myVideoHeight = webcamRef.current.video.videoHeight

      webcamRef.current.video.width = myVideoWidth
      webcamRef.current.video.height = myVideoHeight
      

      
    }
    
  } 

  useEffect(() => {
    showMyVideo()
  },[])
  
  return (
      <div className='mt-8'>
          <div className='relative flex justify-center items-center gradient p-1.5 rounded-md gradient'>
              {/* webcame */}
              
              <Webcam ref={webcamRef} className=" rounded-md w-full lg:h-[720px]" muted/>
                  
              
          </div>
          
    </div>
  )
}
