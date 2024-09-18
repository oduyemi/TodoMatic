import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Error404 from "../pages/Error404";




export const Navigation = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}