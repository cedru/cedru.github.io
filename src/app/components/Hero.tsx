import Image from "next/image";
import React from "react";

export default function Hero() {
    return (
        <main>
        <div className="hero">
            <div className="hero--content">
              <p className="text-center md:text-8xl text-4xl">SILENT HAWKS</p>
              <p className="text-center md:text-8xl text-4xl">UP AND COMING E-SPORTS TEAM</p>
            </div>
            <Image 
                src="/AI-hero-bg2.png"
                alt="Hero Background"
                className="bg-img w-full blur-md"
                layout="fill"
                objectFit="cover"
                priority
            />
        </div>
        <div className="grid grid-cols-5 grid-rows-7 gap-4">
            <div>
              <p>latest performances</p>
            </div>
            <div className="col-start-1 row-start-2">
              <p>counter strike katowice 2015</p>
            </div>
            <div className="col-start-1 row-start-3">
              <p></p>
            </div>
            <div className="col-start-1 row-start-4">
              <p></p>
            </div>
            <div className="col-start-1 row-start-5">
              <p></p>
            </div>
            <div className="col-start-1 row-start-6">
              <p></p>
            </div>
            <div className="col-start-2 row-start-2">
              <p></p>
            </div>
            <div className="col-start-2 row-start-3">
              <p></p>
            </div>
            <div className="col-start-2 row-start-4">
              <p></p>
            </div>
            <div className="col-start-2 row-start-5">
              <p></p>
            </div>
            <div className="col-start-2 row-start-6">
              <p></p>
            </div>
            <div className="col-start-4 row-start-2">
              <p></p>
            </div>
            <div className="col-start-5 row-start-2">
              <p></p>
            </div>
            <div className="col-start-4 row-start-1">
              <p></p>
            </div>
            <div className="col-start-4 row-start-4">
              <p></p>
            </div>
            <div className="col-start-4 row-start-6">
              <p></p>
            </div>
            <div className="col-start-5 row-start-6">
              <p></p>
            </div>
            <div className="col-start-5 row-start-4">
              <p></p>
            </div>
        </div> 
        </main>
    )
}