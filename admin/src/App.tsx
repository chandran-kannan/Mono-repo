import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import { connect } from "react-redux";
import { sampleActions } from "./Redux/Saga/sampleSaga";
import { useEffect } from "react";

function App(props: any) {
  useEffect(() => {
    props.setSample("APP STARTED");
  }, []);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Dashboard />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

const mapStateToProps = function (state: any) {
  return {
    samples: state.samples,
  };
};

const mapDispatchToProps = function () {
  return {
    setSample: (data: string) => {
      sampleActions.setSample(data);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
