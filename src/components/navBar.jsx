import { useState } from 'react'
import logo from '../assets/Images/hv-sec-logo.svg'
import closeIcon from '../assets/Images/x-icon.svg'

const navBar = () => {
    const [sideBar, setSideBar] = useState(0)
    function ScrollTo(where, focus) {
        document.querySelector(`.${where}`).scrollIntoView()
        setSideBar(0)
        scrollBy(0, -80)
        document.querySelectorAll('.sideLink').forEach(link => {
            link.id = ''
        })
        focus.id = 'focusPage'
    }

    return (
        <>
            <div className="navBar sticky top-0 z-40 bg-[#ffffff] flex items-center justify-between p-5 shadow-md pr-5">
                <img draggable="false" src={logo} className="logo w-[90px] md:w-[120px]" />

                <div className="end flex items-center gap-5">
                    <div className="links hidden md:flex text-sm gap-8">
                        <div onClick={() => {ScrollTo('about')}} className="li cursor-pointer">About</div>
                        <div onClick={() => {ScrollTo('why')}} className="li cursor-pointer">Insight</div>
                        <div onClick={() => {ScrollTo('skills')}} className="li cursor-pointer">Skills</div>
                        <div onClick={() => {ScrollTo('FAQS')}} className="li cursor-pointer">FAQS</div>
                        <div onClick={() => {ScrollTo('contact')}} className="li cursor-pointer">Contact us</div>
                    </div>

                    <a href="https://forms.gle/wBzENhhC9dtJmgbAA" className="bg-lbrown h-10 flex items-center justify-center px-4 whitespace-nowrap rounded-sm text-sm text-white hover:text-lbrown hover:bg-white hover:shadow-lg duration-100  cursor-pointer ml-5 font-[500]">Sign Up</a>

                    <div onClick={() => { setSideBar(1) }} className="hamb md:hidden flex flex-col  cursor-pointer w-8 h-8 rounded-sm items-center justify-center hover:bg-white gap-1 hover:shadow-lg duration-100">
                        <div className="line h-[2px] w-4 bg-lbrown"></div>
                        <div className="line h-[2px] w-4 bg-lbrown"></div>
                        <div className="line h-[2px] w-4 bg-lbrown"></div>
                    </div>

                </div>
            </div>



            <div style={sideBar ? { visibility: 'visible' } : { visibility: 'hidden' }} className="sideBar md:hidden w-full h-[100vh] bg-[#000000d1] fixed top-0 left-0 z-50">
                <div style={sideBar ? { marginLeft: '0' } : { marginLeft: '-90vw' }} className="menu flex flex-col duration-100 ease-out w-[90vw] h-[100vh] p-5 bg-white rounded-r-md">
                    <div className="menuHead items-center mb-10 flex w-full justify-between">
                        <img draggable="false" src={logo} className="w-1/3 max-w-[140px]" />
                        <img draggable="false" onClick={() => { setSideBar(0)}} src={closeIcon} className="w-5 h-5 cursor-pointer opacity-70" />
                    </div>
                    <div onClick={(e) => {ScrollTo('about', e.target)}} className="sideLink  duration-150 p-3 px-5 cursor-pointer" id="focusPage">About</div>
                    <div onClick={(e) => {ScrollTo('why', e.target)}} className="sideLink mt-3 duration-150 p-3 px-5 cursor-pointer ">Insight</div>
                    <div onClick={(e) => {ScrollTo('skills', e.target)}} className="sideLink mt-3 duration-150 p-3 px-5 cursor-pointer">Skills</div>
                    <div onClick={(e) => {ScrollTo('FAQS', e.target)}} className="sideLink mt-3 duration-150 p-3 px-5 cursor-pointer">FAQS</div>
                    <div onClick={(e) => {ScrollTo('contact', e.target)}} className="sideLink mt-3 duration-150 p-3 px-5 cursor-pointer">Contact us</div>
        
                    <a href="https://forms.gle/wBzENhhC9dtJmgbAA" className="bg-lbrown h-10 flex items-center justify-center px-4 whitespace-nowrap rounded-sm text-sm text-white hover:text-lbrown hover:bg-white hover:shadow-lg duration-100  cursor-pointer font-[500] mt-auto mb-3">Register Now</a>

                    <p className="text-sm text-gray-400 mb-7"> Copyright &copy; 2021 Hustlers' University. All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default navBar;