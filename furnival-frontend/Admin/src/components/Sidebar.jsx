import { Link } from 'react-router-dom';
import logo from '../assets/furniture.webp';
import dropdown from '../assets/icons/dropdown.svg';
import { navELements } from '../utils/getNavElements';
import { useState } from 'react';

const Sidebar = () => {
  const [showListMap, setShowListMap] = useState({});

  const toggleList = (eleId) => {
    setShowListMap((prevState) => ({
      [eleId]: !prevState[eleId],
    }));
  };

  return (
    <div className="py-6">
      <Link to="/" className="mb-10 block mx-5">
        <img src={logo} alt="logo" />
      </Link>

      <div className="flex flex-col gap-5">
        {navELements.map((ele) =>
          ele.children ? (
            <div key={ele.id} className="relative">
              <div
                className={`link flex items-center gap-4 px-5 py-[8px] text-darkGray2 capitalize duration-100 hover:bg-mainBlue hover:text-white text-[15px] cursor-pointer ${
                  showListMap[ele.id] && 'bg-mainBlue text-white active'
                }`}
                onClick={() => toggleList(ele.id)}
              >
                {ele.icon}
                {ele.title}
                {showListMap[ele.id] && (
                  <img
                    src={dropdown}
                    alt="drop down"
                    className="block ml-auto"
                  />
                )}
              </div>
              <ul
                className={`text-[15px] text-darkGray2 duration-[1s] origin-top ${
                  showListMap[ele.id] ? 'block' : 'hidden'
                }`}
              >
                {ele.children.map((list) => (
                  <li
                    key={list.id}
                    className="cursor-pointer pl-[50px] py-[8px] duration-75 hover:bg-mainOrange hover:text-white capitalize"
                  >
                    <Link to={list.path}>&#8226; {list.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Link
              key={ele.id}
              to={ele.title}
              className="link flex items-center gap-4 pl-5 py-[8px] text-darkGray2 capitalize duration-100 hover:bg-mainBlue hover:text-white text-[15px]"
            >
              {ele.icon}
              {ele.title}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
