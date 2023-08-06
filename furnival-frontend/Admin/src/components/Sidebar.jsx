import { Link } from 'react-router-dom';
import logo from '../assets/furniture.webp';
import { navELements } from '../utils/getNavElements';

const Sidebar = () => {
  return (
    <>
      <Link to="/" className="mt-6 mb-10 block">
        <img src={logo} alt="logo" className="mx-auto" />
      </Link>

      <div className="flex flex-col gap-5">
        {navELements.map((ele) =>
          ele.children ? (
            <button
              key={ele.id}
              className="link flex items-center gap-4 pl-5 py-[8px] text-darkGray duration-100 hover:bg-mainBlue hover:text-white text-[14px]"
            >
              {ele.icon}
              {ele.title}
            </button>
          ) : (
            <Link
              key={ele.id}
              to={ele.title}
              className="link flex items-center gap-4 pl-5 py-[8px] text-darkGray duration-100 hover:bg-mainBlue hover:text-white text-[14px]"
            >
              {ele.icon}
              {ele.title}
            </Link>
          )
        )}
      </div>
    </>
  );
};

export default Sidebar;
