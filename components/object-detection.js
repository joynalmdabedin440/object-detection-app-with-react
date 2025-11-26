"use client"
import React, { use, useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import { load as cocoSSDLoad } from '@tensorflow-models/coco-ssd'
import * as tf from '@tensorflow/tfjs'

let detectInterval;
export const ObjectDetection = () => {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  const runCOcoSSd = async () => {
    setIsLoading(true)
    const net = await cocoSSDLoad()
    setIsLoading(false)
    detectInterval = setInterval(() => {
      runObjectDetection(net)
    }, 10)
  }

  const runObjectDetection = async (net) => {
    if (canvasRef.current && webcamRef.current && webcamRef.current.video.readyState === 4) {
      // Get Video Properties
      canvasRef.current.width = webcamRef.current.video.videoWidth
      canvasRef.current.height = webcamRef.current.video.videoHeight

      const detectedObjects = await net.detect(webcamRef.current.video, undefined, 0.7)
      
      console.log(detectedObjects);
      
    }
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
      runCOcoSSd()
      showMyVideo()
    
    }, [])
  
    return (
      <div className='mt-8'>
        {
          isLoading ? <div>Loading model...</div> : <div className='relative flex justify-center items-center gradient p-1.5 rounded-md gradient'>
            {/* webcame */}
              
            <Webcam ref={webcamRef} className=" rounded-md w-full lg:h-[720px]" muted />
          
            {/* canvas */}
            <canvas
              ref={canvasRef}
              className="absolute rounded-md w-full lg:h-[720px]"
            />
                  
              
          </div>
        }
          
      </div>
    )
  }

