import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import {styled} from '@mui/material/styles';
import Home from "../pages/Home";
import useTheme from '../hook/useTheme';




const RouterControl = () => {
  const [ theme ,switchTheme ] = useTheme();
  return(
    <BrowserRouter>
      <div data-theme={theme}>
        <Routes>
          <Route path="/" element={<Home theme={theme} switchTheme={switchTheme}  />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default RouterControl;