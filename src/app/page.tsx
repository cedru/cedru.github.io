import Image from "next/image";
import React from "react";

export default function Home() {
    return (
        <main>
        <div className="hero">
            <div className="hero--content">
              <p className="text-center md:text-8xl text-4xl">SILENT HAWKS</p>
              <p className="text-center md:text-8xl text-4xl">UP AND COMING E-SPORTS TEAM</p>
            </div>
            <img
                src="/AI-hero-bg2.png"
                alt="Hero Background"
                className="bg-img w-full blur-md"
            />
        </div>
        <div className="hidden md:grid grid-cols-5 grid-rows-7 mt-10 ml-24 mr-24">
            <div>
              <p className="md:text-xl text:s">latest performances</p>
            </div>
            <div className="col-start-1 row-start-2 text-3xl hover:text-ourOrange">
              <a href="">counter strike katowice 2015</a>
            </div>
            <div className="col-start-1 row-start-3 text-xl hover:text-ourOrange">
              <a href="">eku</a>
            </div>
            <div className="col-start-1 row-start-4 text-xl hover:text-ourOrange">
              <a href="">zteek</a>
            </div>
            <div className="col-start-1 row-start-5 text-xl hover:text-ourOrange">
              <a href="">shroud</a>
            </div>
            <div className="col-start-1 row-start-6 text-xl hover:text-ourOrange">
              <a href="">s1mple</a>
            </div>
            <div className="col-start-1 row-start-7 text-xl hover:text-ourOrange">
              <a href="">index_</a>
            </div>
            <div className="col-start-3 row-start-2 text-3xl hover:text-ourOrange">
              <a href="">osu! essa tournament</a>
            </div>
            <div className="col-start-3 row-start-3 text-xl hover:text-ourOrange">
              <a href="">ninerik</a>
            </div>
            <div className="col-start-3 row-start-4 text-xl hover:text-ourOrange">
              <a href="">cedru</a>
            </div>
            <div className="col-start-3 row-start-5 text-xl hover:text-ourOrange">
              <a href="">cookiezi</a>
            </div>
            <div className="col-start-3 row-start-6 text-xl hover:text-ourOrange">
              <a href="">shigetora</a>
            </div>
            <div className="col-start-3 row-start-7 text-xl hover:text-ourOrange">
              <a href="">chocomint</a>
            </div>
            <div className="col-start-5 row-start-4 text-xl hover:text-ourOrange">
              <a href="">Counter-strike</a>
            </div>
            <div className="col-start-5 row-start-3 text-xl hover:text-ourOrange">
              <a href="">osu!</a>
            </div>
            <div className="col-start-5 row-start-2 text-3xl">
              <p>games we perform in</p>
            </div>
            <div className="col-start-5 row-start-6 text-xl hover:text-ourOrange">
              <a href="">overwatch 2</a>
            </div>
            <div className="col-start-5 row-start-7 text-xl hover:text-ourOrange">
              <a href="">quake arena</a>
            </div>
            <div className="col-start-5 row-start-5 text-xl hover:text-ourOrange">
              <a href="">super smash bros melee</a>
            </div>
        </div> 
        <div className="hero--content">
              <p className="text-center md:text-8xl text-4xl mt-10">we are SILENT HAWKS</p>
              <p className="text-center md:text-8xl text-4xl">we are winners.</p>
        </div>

        <div className="grid grid-cols-3 md:grid-rows-1 ml-12 mt-10 grid-rows-3 md:ml-24">
          <div className="card md:w-96 w-80 bg-base-100 shadow-xl image-full md:ml-24 row-start-1">
            <figure><img src="MOCKUP-1-MOUSEPAD.png" alt="Mousepad" className="opacity-100" /></figure>
            <div className="card-body">
              <h2 className="card-title">SILENT HAWKS MERCHANDISE</h2>
              <p className="text-4xl">SHOP NOW!</p>
                <div className="card-actions justify-end">
                 <button className="btn bg-ourOrange text-black border-none hover:bg-white">Buy Now</button>
                </div>
            </div>
          </div>
          <div className="card md:w-96 w-80 mt-10 md:mt-0 bg-base-100 shadow-xl image-full md:ml-10 md:row-start-1 row-start-2">
            <figure><img src="ai_PIC2.PNG" alt="Mousepad" /></figure>
            <div className="card-body">
              <h2 className="card-title">our success in gaming</h2>
              <p className="text-4xl">VIEW RESULTS</p>
                <div className="card-actions justify-end">
                 <button className="btn bg-ourOrange text-black border-none hover:bg-white">Buy Now</button>
                </div>
            </div>
          </div>
          <div className="card md:w-96 w-80 mt-10 md:mt-0 bg-base-100 shadow-xl image-full md:row-start-1 row-start-3">
            <figure><img src="AI_pic3.PNG" alt="Mousepad" /></figure>
            <div className="card-body">
              <h2 className="card-title">partners</h2>
              <p className="text-4xl">BECOME A PARTNER</p>
                <div className="card-actions justify-end">
                 <button className="btn bg-ourOrange text-black border-none hover:bg-white">Buy Now</button>
                </div>
            </div>
          </div>
        </div>

        <p className="text-center md:text-4xl text-xl mt-24">our team members</p>
        <p className="text-center md:text-md text-s">use arrow keys</p>
        <div className="carousel w-full max-w-7xl mt-4 align-content-center items-center transform md:-ml-10 md:translate-x-1/4">
          
          <div id="slide1" className="carousel-item relative w-full">
            <img src="carousel1.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            </div>
          </div> 

          <div id="slide2" className="carousel-item relative w-full">
            <img src="carousel2.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            </div>
          </div> 

          <div id="slide3" className="carousel-item relative w-full">
            <img src="carousel3.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            </div>
          </div> 

          <div id="slide4" className="carousel-item relative w-full">
            <img src="carousel4.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            </div>
          </div>
        </div>     

        <p className="text-center md:text-4xl text-xl mt-24">products</p>
        <p className="text-center md:text-md text-s">use arrow keys</p>
        <div className="carousel w-full max-w-7xl mt-4 align-content-center items-center transform md:-ml-10 md:translate-x-1/4 mb-24">
          
          <div id="slide1" className="carousel-item relative w-full">
            <img src="carousel12.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            </div>
          </div> 

          <div id="slide2" className="carousel-item relative w-full">
            <img src="carousel22.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            </div>
          </div> 

          <div id="slide3" className="carousel-item relative w-full">
            <img src="carousel12.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            </div>
          </div> 

          <div id="slide4" className="carousel-item relative w-full">
            <img src="carousel22.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            </div>
          </div>
        </div>     
        </main>
    )
}