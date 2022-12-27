import React from "react";
import DashboardCard from "../../Components/DashboardCard";
import Sidenav from "../../Components/Sidenav";
const navMenu = [
  {
    name: "dashboard",
    link: "/",
    title: "dashboard"
  },
  {
    name: "manage car",
    link: "/managecar",
    title: "managecar"
  },
  {
    name: "manage dealer",
    link: "/managedealer",
    title: "managedealer"
  },
  {
    name: "notify me",
    link: "/notifyme",
    title: "notifyme"
  },
  {
    name: "leads",
    link: "/leads",
    title: "leads"
  },
  {
    name: "verify",
    link: "/verify",
    title: "verify"
  },
  {
    name: "news",
    link: "/news",
    title: "news"
  }
];
const ComponentContainer = () => {
  switch (window.location.pathname) {
    case navMenu[0].link:
      return (
        <section className="">
          <section className=" flex flex-col items-center justify-center ">
            <h1 className=" text-bold text-[32px] pb-4 font-mono ">Today</h1>
            <DashboardCard />
            {/* <h1 className=" text-bold text-[32px] pb-4 font-mono pt-10 ">
              This week
            </h1>
            <DashboardCard /> */}
            <div className=" flex my-12 max-w-[27%] justify-between w-full ">
              <button
                type="button"
                className=" inline-block px-12 py-4 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
              >
                Generate report
              </button>
              <button
                type="button"
                className="inline-block px-12 py-4 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out "
              >
                Directory data
              </button>
            </div>
          </section>
        </section>
      );

    default:
      return <div className="">404</div>;
  }
};
const Dashboard = () => {
  const navigationHandler = (navlink: string) => {};
  return (
    <>
      <main className=" flex w-full h-full ">
        <Sidenav
          nav={navMenu}
          navOnClick={(navLink: string) => {
            navigationHandler(navLink);
          }}
        />
        <section className=" grow h-full p-10 ">
          <ComponentContainer />
        </section>
      </main>
    </>
  );
};

export default Dashboard;
