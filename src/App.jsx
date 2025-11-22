import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
