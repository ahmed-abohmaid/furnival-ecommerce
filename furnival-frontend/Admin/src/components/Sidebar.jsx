import { Link } from 'react-router-dom';
import logo from '../assets/furniture.webp';
import dropdown from '../assets/icons/dropdown.svg';
import { navELements } from '../utils/getNavElements';
import { useState } from 'react';
import { Collapse, ListItemButton } from '@mui/material';

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
            <div key={ele.id}>
              <ListItemButton
                className={`link flex items-center gap-4 px-5 py-[8px] text-darkGray2 capitalize duration-100 hover:bg-mainBlue hover:text-white text-[15px] cursor-pointer ${
                  showListMap[ele.id] && 'bg-mainBlue text-white'
                }`}
                onClick={() => toggleList(ele.id)}
                selected={showListMap[ele.id]}
                sx={{
                  '&.MuiButtonBase-root': {
                    color: '#939393',
                  },
                  '&.Mui-selected': {
                    backgroundColor: '#133A5E',
                    color: 'white',
                  },
                  '&.Mui-selected:hover': {
                    backgroundColor: '#133A5E',
                    color: 'white',
                  },
                  ':hover': {
                    backgroundColor: '#133A5E',
                    color: 'white',
                  },
                }}
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
              </ListItemButton>
              <Collapse
                in={showListMap[ele.id]}
                timeout="auto"
                unmountOnExit
                className="text-[15px] text-darkGray2"
              >
                {ele.children.map((list) => (
                  <Link
                    key={list.id}
                    to={list.path}
                    className="cursor-pointer block pl-[40px] py-[8px] duration-75 hover:bg-mainOrange hover:text-white capitalize"
                  >
                    <span className="font-bold mr-2 text-lg">&#8226;</span>{' '}
                    {list.title}
                  </Link>
                ))}
              </Collapse>
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
