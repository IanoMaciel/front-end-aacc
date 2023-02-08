import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./app.routes";


const Routes = ({ children }) => (
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
);

export default Routes;