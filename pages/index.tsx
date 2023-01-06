import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub, AiFillPhone, AiFillMail } from 'react-icons/ai'
import Image from 'next/legacy/image'
import profilepic from '../public/mustafapppppp.png'
import react from '../public/reactlogo.png'
import tailwindcss1 from '../public/screenshot_361.png'
import css3 from '../public/cscsc222images.png'
import html5 from '../public/file_type_html_icon_13054.png'
import typescript from '../public/pptsa84083f8.u4.png'
import engcv from '../public/EngCvMustafaSaglam-1.png'
import turkcell from 'public/147917987_3681576575251848_306174622475689.png'
import javascript from '../public/Unofficial_JavaScript_logo_2.svg.png'
import React from 'react'

import { useState } from "react";
import { lookup } from 'dns'


export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  const css = { width: '100%', height: 'auto' }
  return (
    <>
      <div className={darkMode ? 'dark' : ""}>
        <Head>
          <title>Mustafa SAĞLAM Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <section className=" min-h-screen shadow-lg p-3 rounded-xl">
            <nav className="py-10 flex justify-between">
              <h1 className="text-xl font-burtons dark:text-teal-50 transform transition-all hover:scale-110">My Portfolio</h1>
              <ul className="flex items-center  ">
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl transform transition-all hover:scale-125 dark:text-white" />
                </li>
                <li className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1 rounded-md ml-3">Dark Mode</li>

              </ul>
            </nav>

            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-5 overflow-hidden md:h-96 md:w-96">
              <Image alt="" src={profilepic} layout="fill" objectFit="cover" priority />
            </div>

            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-300">Mustafa SAĞLAM</h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-teal-50 ">Junior Frontend Developer</h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-teal-50">I actively develop myself in front end development and continue to learn. Also, I am a person who has communication skills, ability of persuasion and soul of teamwork. I work as a solution oriented. I have a long term career goals. I am sure that i will reach the success with my skills and abilities. I chose the front end development because of the ability to quickly see the result of my work, as well as solve the tasks in various ways. </p>
            </div>


          </section>

          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-teal-50">My Skills</h3>
              <p className="text-lg py-2 leading-8 text-gray-800  dark:text-teal-50">Percentage of skills I have learned and continue to learn</p>
            </div>
            <div className="flex flex-row flex-wrap gap-10 py-10">
              <div className="basis-auto flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white transform transition-all hover:scale-110">
                <Image alt="" src={react} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">React</h3>
                <input id="disabled-range" type="range" value="45" disabled />

              </div>

              <div className="basis-auto flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white transform transition-all hover:scale-110">
                <Image alt="" src={typescript} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">TypeScript</h3>
                <input id="disabled-range" type="range" value="45" disabled />

              </div>

              <div className="basis-auto flex-1  text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white transform transition-all hover:scale-110">
                <Image alt="" src={javascript} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">JavaScript</h3>
                <input id="disabled-range" type="range" value="55" disabled />


              </div>
              <div className="basis-auto flex-1  text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white transform transition-all hover:scale-110">
                <Image alt="" src={tailwindcss1} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">TailwindCSS</h3>
                <input id="disabled-range" type="range" value="70" disabled />


              </div>

              <div className="basis-auto flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white transform transition-all hover:scale-110">
                <Image alt="" src={css3} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">CSS</h3>
                <input id="disabled-range" type="range" value="75" disabled />



              </div>

              <div className="basis-auto flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white transform transition-all hover:scale-110">
                <Image alt="" src={html5} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">HTML</h3>
                <input id="disabled-range" type="range" value="80" disabled />


              </div>



            </div>
          </section>

          <section>
            <div className="shadow-lg p-10 rounded-xl my-10 dark:bg-white transform transition-all hover:scale-110">
              <h3 className="text-3xl pb-5 pl-1">Certificates</h3>
              <ul>
                <li className="flex p-1"><Image className=" rounded-lg" alt="" src={turkcell} width={50} height={50} /> <p className="pt-4 pl-5">Turkcell Geleceği Yazanlar - React 101</p> </li>
                <li className="flex p-1"><Image className=" rounded-lg" alt="" src={turkcell} width={50} height={50} /> <p className="pt-4 pl-5">Turkcell Geleceği Yazanlar - 301:JavaScript</p></li>
                <li className="flex p-1"> <Image className=" rounded-lg" alt="" src={turkcell} width={50} height={50} /> <p className="pt-4 pl-5">Turkcell Geleceği Yazanlar - 201:HTML-CSS</p></li>
                <li className="flex p-1"><Image className=" rounded-lg" alt="" src={turkcell} width={50} height={50} /> <p className="pt-4 pl-5">Turkcell Geleceği Yazanlar - 101:HTML</p></li>
              </ul>
            </div>

          </section>

          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-teal-50">My Projects</h3>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 transform transition-all z-40 hover:z-50 hover:scale-125 ">
                <video autoPlay loop muted className="rounded-lg" src={"/video/Ekran-Kaydı20230104181723.mp4"} />
              </div>
              <div className="basis-1/3 flex-1 transform transition-all z-40 hover:z-50 hover:scale-125">
                <video autoPlay loop muted className="rounded-lg" src={"/video/Ekran-Kaydı-2023-01-04-18.10.26.mp4"} />
              </div>
              <div className="basis-1/3 flex-1 transform transition-all z-40 hover:z-50  hover:scale-125 ">
                <video autoPlay loop muted className="rounded-lg" src={"/video/Ekran-Kaydı-2023-01-04-18.08.52.mp4"} />
              </div>
              <div className="basis-1/3 flex-1 transform transition-all z-40 hover:z-50  hover:scale-125 ">
                <video autoPlay loop muted className="rounded-lg" src={"/video/Ekran-Kaydı-2023-01-04-18.06.11.mp4"} />
              </div>
              <div className="basis-1/3 flex-1 transform transition-all z-40 hover:z-50  hover:scale-125 ">
                <video autoPlay loop muted className="rounded-lg" src={"/video/Ekran-Kaydı-2023-01-04-18.15.00.mp4"} />
              </div>
              <div className="basis-1/3 flex-1 transform transition-all z-40 hover:z-50  hover:scale-125 ">
                <video autoPlay loop muted className="rounded-lg" src={"/video/Ekran-Kaydı-2023-01-04-18.04.35.mp4"} />
              </div>

            </div>
          </section>

          <section className="text-xl py-1 rounded-md bg-slate-100 dark:text-black">
            <div className=" pl-2 pt-2">

              <p className="pb-4 text-sm md:text-xl"> Contact Information</p>
              <div className="flex gap-1">
                <AiFillPhone /> <p className="text-sm md:text-xl">Phone: +90 (507) 730 29 84</p>
              </div>
              <div className="flex gap-1">
                <AiFillMail /> <p className="text-sm md:text-xl">E-Mail: mstfaa.2626@gmail.com</p>
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-5">
              <a href="https://github.com/MustafaSaglamm" target="_blank" rel="noreferrer"><AiFillGithub className=" scale-125 transform transition-all" /></a>

              <a href="https://www.linkedin.com/in/mustafa-sağlam" target="_blank" rel="noreferrer"><AiFillLinkedin className=" scale-150 transform transition-all" /></a>

              <p className="text-end text-sm md:text-xl px-2"> Copyright © 2023 Mustafa SAGLAM. All Rights Reserved</p>
            </div>


          </section>





        </main>
      </div>
    </>
  )
}
