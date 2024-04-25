import React from 'react'
import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci';
// import { CallFilled } from '@fluentui/react-icons';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import url from '../assets/logo.png';
import { Image } from 'astro:assets';

export default function Header() {
    return (
        <header className="w-full flex flex-col">
            <div className="bg-[#0d2d62] text-white py-4 flex flex-row justify-around">
                <a className='flex items-center gap-2 hover:text-[#556c91] transition-all hover:cursor-pointer'
                    href="tel:+213799039212"><CiPhone size={24} />+213 799-03-92-12</a>


                <a className='flex items-center gap-2 hover:text-[#556c91] transition-all hover:cursor-pointer hover:underline'
                    href="https://www.google.com/maps/place/Universit%C3%A9+d'Alger+3+Annexe+Ben+Aknoun/@36.7639659,3.0112916,17z/data=!3m1!4b1!4m6!3m5!1s0x128fb1b1054e13c1:0xbd8bd5f377cb6f67!8m2!3d36.7639616!4d3.0138665!16s%2Fg%2F11h_ccgmk2?entry=ttu" target="_blank"><CiLocationOn size={24} />Université d'Alger 3, Algiers, Algeria</a>


                <a className='flex items-center gap-2 hover:text-[#556c91] transition-all hover:cursor-pointer'
                    href="mailto:egmclubua3@gmail.com"><CiMail size={24} />egmclubua3@gmail.com</a>
            </div>
            <div className="px-10 shadow-md">
                <div className='flex flex-row items-center'>
                    <img src={'https://scontent.falg6-2.fna.fbcdn.net/v/t39.30808-6/336917775_233532819040679_6425193963479368112_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rEBCcSCLfC0Q7kNvgFVu11B&_nc_ht=scontent.falg6-2.fna&oh=00_AfBdqvVRvlYkHnPfUmIhrm_JKNLW05zuD7ptFrK86452Sw&oe=6630234B'} width={120} alt="logo" />
                    <div className='flex flex-col'>
                        <div className='font-bold text-lg'>Entrepreneur Growth Mindset</div>
                        <div className=' text-slate-500 text-sm'>Université d'alger 3</div>
                    </div>

                </div>


            </div>
        </header>
    )
}