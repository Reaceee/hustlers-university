import React from 'react'
import '../App.css'
import img2 from '../assets/Images/image-2.png'
import img3 from '../assets/Images/image-3.png'
import FAQ from "../pages/FAQ.jsx";

import members from '../assets/Images/members.png'
import tutors from '../assets/Images/tutors.png'
import resources from '../assets/Images/resources.png'

import SkillCard from '../components/skill-card.jsx'
import forex_icon from '../assets/Images/forex-icon.png'
import web_icon from '../assets/Images/web-icon.png'
import game_icon from '../assets/Images/game-icon.png'
import music_icon from '../assets/Images/music-icon.png'
import social_icon from '../assets/Images/social-icon.png'
import graphic_icon from '../assets/Images/graphic-icon.png'
const Home = () => {


  return (
    <>
      <div style={{ backgroundImage: 'url(' + img3 + ')' }} className="hero h-[80vh] w-full bg-[#462d20] bg-no-repeat bg-blend-overlay bg-cover flex items-center justify-center">
        <div className="hero-content text-white p-5 text-center flex flex-col items-center gap-5">
          <p className="titlee text-3xl font-extrabold border-b border-white w-full max-w-[400px] p-4">Be Your Own Boss</p>
          <p className="text-sm max-w-[550px]">Unlock Your Potential: Join the Hustlers' Academy and Discover the Path to Independence and Success!</p>

          <div className="w-full items-center justify-center flex px-5 gap-5 flex-col md:flex-row">
            <div className="start font-semibold border border-[#ffffff30] bg-[#ffffffc4] w-full md:w-max px-5 cursor-pointer rounded-full p-3 hover:bg-white text-sm text-black backdrop-blur-sm duration-100">
              Start your Hustle
            </div>
            <div className="px-5 font-semibold cursor-pointer rounded-full p-3 text-sm hover:bg-white border border-[#ffffff30] bg-[#ffffff20] w-full md:w-max hover:text-black backdrop-blur-sm duration-100">
              Explore Skills
            </div>
          </div>
        </div>
      </div>


      <div className="social-proof w-full md:p-5 md:-mt-16 flex justify-center">
        <div className="w-full flex shadow-md max-w-[650px] p-5 bg-[#ffffff50] md:rounded-md backdrop-blur-[5px]">

          <div className="w-1/3 text-center flex flex-col items-center gap-2">
            <p className="w-full text-xl md:text-3xl text-[#191919] md:text-white font-bold titlee">5K+</p>
            <p className="w-full text-xs md:text-md text-gray-700">Members</p>
          </div>

          <div className="w-1/3 border-x border-x-gray-400 text-center flex flex-col items-center gap-2">
            <p className="w-full text-xl md:text-3xl text-[#191919] md:text-white font-bold titlee">200+</p>
            <p className="w-full text-xs md:text-md text-gray-700">Resources</p>
          </div>

          <div className="w-1/3 text-center flex flex-col items-center gap-2">
            <p className="w-full text-xl md:text-3xl text-[#191919] md:text-white font-bold titlee">10+</p>
            <p className="w-full text-xs md:text-md text-gray-700">Trainers</p>
          </div>

        </div>
      </div>


      <div className="about flex flex-col md:flex-row gap-5 md:p-5">

        <div className="who flex w-full flex-col items-center md:border-r md:border-r-gray-400">
          <p className="titlee w-full text-center p-5  mt-8 text-2xl font-bold ">Who are We & What We Do</p>

          <p className="text-gray-500 text-center px-5 max-w-[800px]">At Hustlers University, we're your partners in growth and success. Not only do our tutees learn a skill, we also teach them how to <b>Earn</b> using the skill. We've created a dynamic learning environment where young minds can thrive, equipping you with the tools and skills you need to excel in the real world. Join us on this transformative journey, where learning meets opportunity, and pave your way to a future of your own design.
          </p>
        </div>

        <div className="mission flex w-full flex-col items-center">
          <p className="titlee w-full text-center p-5 mt-8 text-2xl font-bold">Our Mission</p>
          <p className="text-gray-500 text-center px-5 max-w-[800px]">Our mission at Hustlers University is to empower the next generation with actionable skills that pave the way for financial independence and personal success. We believe in fostering a mindset of resilience, creativity, and entrepreneurship. Through innovative learning experiences and a supportive community, we're here to guide you in harnessing your abilities, embracing challenges, and crafting your own extraordinary path in the modern world.
          </p>
        </div>

      </div>
      <div className="advantages w-full flex justify-center p-5">
        <div className="relative w-max">
          <img draggable="false" src={img2} className='w-full max-w-[750px] rounded-xl' />
          <div className="absolute duration-150 ease-in-out hover:scale-110 text-[.5rem] font-semibold backdrop-blur-sm bg-[#0e0e0e41] top-0 -left-2 shadow-md text-white rounded-lg rounded-tl-none mt-5 w-[150px] p-2">
            <p className="text-md md:text-lg md:mb-1 md:border-b font-bold">Connect</p>
            Link up with young hustlers like you from different parts of the world</div>

          <div className="absolute duration-150 ease-in-out hover:scale-110 text-[.5rem] font-semibold backdrop-blur-sm bg-[#1558c33e] top-1/2 -translate-y-1/2 -right-2 shadow-md rounded-tr-none text-[#ffe9e9] rounded-md mt-5 w-[150px] p-2">
            <p className="text-md md:text-lg md:mb-1 md:border-b font-bold">EARN</p>
            EARN income from your acquired skill. Receive signals from our community  </div>
          <div className="absolute duration-150 ease-in-out hover:scale-110 text-[.5rem] font-semibold backdrop-blur-sm bg-[#ffffff41] bottom-4 left-4 shadow-md text-black rounded-tl-none rounded-lg mt-5 w-[150px] p-2">
            <p className="text-md md:text-lg md:mb-1 md:border-b font-bold text-[#266bd980] border-[black]">BOOST</p>
            Promote your business on our community platforms and take it to the NEXT level  </div>
        </div>
      </div>

      <div className="why flex w-full flex-col items-center">
        <p className="titlee w-full text-center p-5  mt-8 text-2xl font-bold">Why Learn with Us?</p>

        {/* ----------- Cards Section ----------- */}

        <div className="Cards w-full gap-5 p-5 md:px-14 flex flex-col md:flex-row">

          <div className="card md:hover:scale-105 duration-150 rounded-md shadow-lg bg-[#ffffff50] p-5 md:w-1/3 flex flex-col items-center gap-4 w-full ">
            <img src={members} draggable="false" className="w-14 " />
            <p className=" font-semibold text-center text-lg">Wholesome Community</p>

            <p className="text-center text-sm mb-10">Our extremely welcoming global community amongst young hustlers from various parts of the country was birthed in order to create an effective learning environment for you.</p>
          </div>

          <div className="card md:hover:scale-105 duration-150 rounded-md shadow-lg bg-[#ffffff50] p-5 md:w-1/3 flex flex-col items-center gap-4 w-full ">
            <img src={tutors} draggable="false" className="w-14  p-1" />
            <p className=" font-semibold text-center text-lg">Expert Tutors</p>

            <p className="text-center text-sm mb-10">We made sure to recruit only the best, most seasoned trainers in different fields that are dedicated to guiding you through your journey.</p>
          </div>

          <div className="card md:hover:scale-105 duration-150 rounded-md shadow-lg bg-[#ffffff50] p-5 md:w-1/3 flex flex-col items-center gap-4 w-full ">
            <img src={resources} draggable="false" className="w-14  p-2" />
            <p className=" font-semibold text-center text-lg">Resources</p>

            <p className="text-center text-sm mb-10">Availability of resourses that include e-books, high quality educational materials, expert webinars and as well.</p>
          </div>

        </div>
      </div>

      <p className="skills titlee w-full text-center p-5  mt-8 text-2xl font-bold">Skills We Offer</p>
      <div className="allSkills md:px-14 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 p-5 px-10 gap-5 md:gap-5">
        <SkillCard img={graphic_icon} cost="1,000" title="Graphic Design" body="Create Brilliant designs for individuals and businesses in and outside your country!" />
        <SkillCard img={game_icon} cost="1,000" title="Game Development" body="Spread the fun! Share your ideas for your friends and others to play" />
        <SkillCard img={web_icon} cost="1,000" title="Website Design" body="Create either your own websites or websites for small and large businesses " />
        <SkillCard img={music_icon} cost="1,000" title="Music Production" body="Learn all about Mixing and Mastering tunes.  " />
        <SkillCard img={forex_icon} cost="2,000" title="Forex Trading" body="Become a master at Foreign Exchange! Receive signals and make HUGE profits." />
        <SkillCard img={social_icon} cost="1,500" title="Social Media Management" body="" />
      </div>

      <div className="flex mb-10 w-full flex-col items-center md:border-r md:border-r-gray-400">
          <p className="titlee w-full text-center p-5  mt-8 text-2xl font-bold ">Didn't find any of your Interests?</p>

          <p className="text-gray-500 text-center px-5 max-w-[800px]">There's nothing to worry about. We understand that there are thounsands of hustles out there. That doesn't stop us from promoting yours as a member and increase your connections.
          </p>
          <i className="text-gray-500 my-10 text-center px-5 max-w-[800px]">Contact us below to find out how we can <b>BLOW YOUR HUSTLE</b>.
          </i>
        </div>
        <FAQ />

    </>
  )
}

export default Home;