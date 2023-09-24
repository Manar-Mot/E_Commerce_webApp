import "./App.css";
import HomePage from "./pages/homePage";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
      children: [],
    },
  ]);
  return (
    <div className="font-cairo ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
