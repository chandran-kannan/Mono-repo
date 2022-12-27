import React from "react";
interface navInterface {
  navOnClick: Function;
  nav: {
    name: string;
    link: string;
    title: string;
  }[];
}
function SideNavigationBar({ navOnClick, nav }: navInterface) {
  return (
    <div className="w-[13%] h-full shadow-md bg-white  " id="sidenavSecExample">
      <div className="pt-4 pb-2 px-6">
        <a href="#!">
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                className="rounded-full w-10"
                alt="Avatar"
              />
            </div>
            <div className="grow ml-3">
              <p className="text-sm font-semibold text-blue-600">Admin</p>
            </div>
          </div>
        </a>
      </div>
      <ul className="relative px-1 ">
        {nav.map((menu, index) => (
          <li
            className="relative"
            key={index}
            onClick={() => {
              navOnClick(menu.link);
            }}
          >
            <span
              className={` ${
                window.location.pathname === menu.link
                  ? " text-blue-600 bg-blue-50 "
                  : ""
              }flex font-medium  items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out`}
              //   href={menu.link}
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <span className=" capitalize ">{menu.name}</span>
            </span>
          </li>
        ))}
      </ul>
      <div className="text-center bottom-0 absolute w-full">
        <a href="/login">
          <hr className="m-0" />
          <p className="py-2 text-md text-red-500 font-semibold">Logout</p>
        </a>
      </div>
    </div>
  );
}

export default SideNavigationBar;
