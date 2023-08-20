import logo from '../assets/Images/logo-white.svg'
import gmail from '../assets/Images/gmail.png'
import whatsapp from '../assets/Images/whatsapp.png'
import linkedIn from '../assets/Images/linked-in.png'

const Footer = () => {

  function ScrollTo(where) {
    document.querySelector(`.${where}`).scrollIntoView()
    setSideBar(0)
    scrollBy(0, -100)
  }
  return (
    <>
      <div className="footer contact md:flex-row text-white w-full p-10 flex flex-col bg-[#191919] items-center md:items-start text-center md:text-left gap-10">

        <div className="flex items-center md:items-start flex-col gap-5 md:w-1/2
">
          <img draggable="false" src={logo} className="w-[150px] md:w-[90px]" />
          <p className="text-sm max-w-[70%] ">The First Root Company Inc. Lagos state, Nigeria. </p>
          <p className="text-xs opacity-40">Copyright &copy; 2021 Hustlers' Univerity co. </p>
          <div className="flex gap-8 my-5">
            <a href="mailto:talkto.hustlersuniversoty@gmail.com">
      <img src={gmail} className="w-7 h-7" />
    </a>
    <a href="https://wa.me/2349139109288">
      <img src={whatsapp} className="w-7 h-7" />
    </a>
    <a href="https://linkedin.com">
      <img src={linkedIn} className="w-7 h-7" />
    </a>
          </div>

        </div>

        <div className="flex flex-col w-[25%] items-center md:items-start gap-5 whitespace-nowrap">
          <p className="font-bold">Company </p>
          <p onClick={() => { ScrollTo('footer') }} className="text-xs text-thin text-[#ffffff50] hover:text-white duration-200 cursor-pointer">Contact Us</p>
          <p onClick={() => { ScrollTo('FAQS') }} className="text-xs text-thin text-[#ffffff50] hover:text-white duration-200 cursor-pointer">FAQs</p>
          <p onClick={() => { ScrollTo('about') }} className="text-xs text-thin text-[#ffffff50] hover:text-white duration-200 cursor-pointer">About Us</p>
        </div>

        <div className="flex flex-col items-center md:items-start w-[25%] gap-5">
          <p className="font-bold whitespace-nowrap">Quick Links </p>
          <p onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="text-xs text-thin text-[#ffffff50] hover:text-white duration-200 cursor-pointer">Back to Top</p>
          <a href='https://forms.gle/wBzENhhC9dtJmgbAA' className="register whitespace-nowrap cursor-pointer font-semibold rounded-md text-white bg-dark p-3 px-8 w-max text-sm hover:bg-white hover:text-black">Register Now</a>
        </div>
      </div>
    </>
  )
}

export default Footer;