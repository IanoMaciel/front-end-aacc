import React from "react";
import {
    Switch, Route
} from 'react-router-dom'

import Layout from "../components/Layout";
import MeusDados from "../views/MeusDados";
import SolicitaAproveitamento from "../views/SolicitarAproveitamento"
import Status from "../views/Status";


const AppRoutes = () => {
    return(
        <Layout>
            <Switch>
                <Route path="/meuDados" exact component={MeusDados}/>
                <Route path="/SolicitaAproveitamento" exact component={SolicitaAproveitamento}/>
                <Route path="/Status" exact component={Status}/>
            </Switch>
        </Layout>
    );
}

export default AppRoutes;