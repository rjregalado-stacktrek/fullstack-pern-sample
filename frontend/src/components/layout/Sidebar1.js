import { useState } from "react";
import { Link } from 'react-router-dom';

import { RiDashboardFill } from "react-icons/ri";

import {
  BsArrowLeftShort,
  BsSearch,
  BsChevronDown,
  BsFillImageFill,
  BsReverseLayoutSidebarInsetReverse,
  BsPerson,
} from "react-icons/bs";

import {
  AiFillHome,
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai"

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubMenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard",icon: <RiDashboardFill />, path: './dashboard' },
    { title: "Pages", icon: <AiOutlineFileText />, path: './pages'},
    { title: "Media", spacing: true, icon: <BsFillImageFill />, path: './media' },
    {
      title: "Projects",
      icon: <BsReverseLayoutSidebarInsetReverse />,
      path:'./projects',
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Analytics", icon: <AiOutlineBarChart />, path: './analytics' },
    { title: "Inbox",icon: <AiOutlineMail />, path: './inbox' },
    { title: "Profile", spacing: true, icon: <BsPerson />, path: './profile' },
    { title: "Settings", icon: <AiOutlineSetting />, path: './settings' },
    { title: "Logout", icon: <AiOutlineLogout />, path: './logout' },
  ];

  return (
    <div className="flex">
      <div 
      className={`bg-sea-green h-screen p-5 pt-8 ${open ? "w-72":"w-20"} duration-300 relative`}>
      <BsArrowLeftShort 
      className={`bg-white text-sea-green
       text-3xl rounded-full absolute -right-3 top-9 border 
       border-sea-green cursor-pointer ${!open && "rotate-180"}`} onClick={()=>setOpen(!open)}/>
        <div className="inline-flex">
          <Link to="/" className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && 'rotate-[360deg]'}`}>
            <AiFillHome />
          </Link> 
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>
            Home
          </h1> 
        </div>
        <div className={`flex items-center rounded-md bg-light-white
        mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
          
          <BsSearch className={`text-white text-lg block
          float-left cursor-pointer ${open && "mr-2"}`}/>
          
          <input 
          type={"search"} 
          placeholder="Search" 
          className={`text-base bg-teal-50 w-full text-white rounded-md
          focus:outline-none ${!open && "hidden"}`}/>
          <h1 className=""></h1>
        </div>
        <ul className="pt-2">
          {Menus.map((menu, index)=>(
          <>
            <li key={index} className={`text-gray-300 text-sm flex 
            items-center gap-x-4 cursor-pointer p-1 hover:bg-light-white 
            rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
              <span className="text-2xl block float-left">
                {menu.path ? (<Link to={menu.path}>{menu.icon}</Link>):
                (menu.icon ? menu.icon : <RiDashboardFill />)}
                
              </span>
              <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}
              >
                {menu.title}
              </span>

              {menu.submenu && open && (
                <BsChevronDown className={`${submenuOpen &&
                "rotate-180"}`} onClick={()=>
                  setSubMenuOpen(!submenuOpen)} />
            )}
            </li>
            {menu.submenu && submenuOpen && open && (
              <ul>
                {menu.submenuItems.map((submenuItem,index)=>(
                  <li key={index} className="text-gray-300 text-sm flex 
            items-center gap-x-4 cursor-pointer p-1 px-5 hover:bg-light-white 
            rounded-md">
                    {submenuItem.title}
                  </li>
                ))}
              </ul>
            )}
          </>))}
        </ul>
      </div>

    </div>
  )
}

export default Sidebar