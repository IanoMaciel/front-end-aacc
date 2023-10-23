import React from "react";
import {
    Switch, Route
} from 'react-router-dom'

//pages
import Layout from "../components/Layout";
import MeusDados from "../views/MeusDados";
import SolicitaAproveitamento from "../views/SolicitarAproveitamento"
import Status from "../views/Status";

import Login from "../views/Login";
import CadAluno from "../views/CadAluno";
import Home from "../views/Home";


const AppRoutes = () => {
    return(
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/cadAluno" exact component={CadAluno}/>
                <Layout>
                    <Route path="/meuDados" exact component={MeusDados}/>
                    <Route path="/SolicitaAproveitamento" exact component={SolicitaAproveitamento}/>
                    <Route path="/Status" exact component={Status}/>
                </Layout>
            </Switch>
    );
}

export default AppRoutes;