import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portofilo from "./components/Portofilo/Portofilo";
import Contact from "./components/Contact/Contact";
import Layout from "./components/Layouts/Layout/Layout";
import Error404Page from "./components/ErrorPage/404Page/404Page";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portofilo", element: <Portofilo /> },
      { path: "contact", element: <Contact /> },
      {
        path: "*",
        element: <Error404Page />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
