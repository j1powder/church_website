'use client'

import React, {Fragment} from 'react'
import Image from 'next/image'
import banner from '../public/front_cover.jpeg'
import { Button } from 'primereact/button';

const Banner = () => {

  return (
    <Fragment>
        <div className="relative w-full h-96">
            <Image
            src={banner}
            alt="Banner Image"
            layout="fill"
            objectFit="cover"
            className="object-cover"
            />
            <div className="absolute inset-0 bg-gray bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-3xl text-shadow-lg/30 font-bold px-8">And then Peter replied, 'Repent and be baptized, every one of you, in the name of Jesus Christ for the remission of your sins. And ye shall receive the gift of the Holy Spirit.</h1>
            
            </div>
        </div>
        <br/>
        
    </Fragment>
  )
}

export default Banner