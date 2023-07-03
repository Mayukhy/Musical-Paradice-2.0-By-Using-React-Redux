import { useState } from "react";
import { NavLink } from "react-router-dom";
import {RiCloseLine} from 'react-icons/ri'
import { links } from "../assets/constants";
import Logo from '../assets/image/LOGO.png'
import { HiOutlineMenu } from "react-icons/hi";
const Sidebar = () => {
  const [mobileMenueOpen,setMobileMenueOpen] = useState(false)
  return(
  <>
  <div></div>
  <div style={{
    background:' linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%)'
  }} className="md:flex hidden flex-col w-[240px] py-10 px-4 ">
    <img  src={Logo} style={{ transition:'all 0.3s'}}  className=" hover:scale-105 cursor-pointer object-contain w-full h-48 mt-5  opacity-80" alt="" />
    <div className="mt-0">
      {links?.map((items,id)=>(
          <NavLink key={id} className=' hover:translate-x-1 flex font-bold flex-row justify-center my-8 font-mono text-lg text-gray-300 hover:text-cyan-500 transition-all' to={items.to}>
         <img width='40px' className=" mb-4 mt-[-10px] mr-4" src={items?.icon} alt="" /> {items.name}
          </NavLink>
        
      ))}
    </div>
    </div>
    <div style={{
      zIndex:'999999'
    }}>
      {mobileMenueOpen?
      <>
    <div className="md:hidden flex fixed right-0 m-1 text-slate-400 cursor-pointer text-2xl hover:text-red-400 transition-all">
    <RiCloseLine className="w-[50px] h-[50px]  animate-[spin_0.5s] " onClick={()=>{
      setMobileMenueOpen(!mobileMenueOpen)
    }}/>
    </div>
      <div style={{
    background:'linear-gradient(180deg, rgba(22,2,82,0.5949367088607596) 0%, rgba(38,1,71,0.5886075949367089) 100%)',
    backdropFilter:'blur(15px)',
    height:'100%',
    zIndex:'9999'
  }} className={` animate-slideleft absolute top-0 md:hidden smooth-transition flex flex-col w-96 py-10 px-4 ${mobileMenueOpen?'left-0':'-left-full'}`}>
    <img src={Logo}  className=" object-contain w-full h-40 hover:scale-110" alt="" />
    <div className="mt-5">
      {links.map((items,id)=>(
        <>
       
          <NavLink className=' hover:translate-x-1 flex font-bold flex-row justify-center my-8 font-mono text-lg text-gray-300 hover:text-cyan-500 transition-all' to={items.to}>
          <img width='40px' className=" mb-4 mt-[-10px] mr-4" src={items?.icon} alt="" />    {items.name}
          </NavLink>
          </>
        
      ))}
    </div>
    </div>
    </>
    :<>
    <div className="md:hidden flex fixed right-0 m-1 text-slate-400 cursor-pointer text-2xl hover:text-cyan-300 transition-all">
    <HiOutlineMenu className=" animate-[spin_0.5s] w-[50px] h-[50px] " onClick={()=>{
      setMobileMenueOpen(!mobileMenueOpen)
    }}/>
    </div>
    </>}
    </div>
   </>
);
}

export default Sidebar;
