import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

import Layout from "./components/Layout";

//pages
import MeusDados from "./views/MeusDados";

const App = () => {
    return(
        <>
            <GlobalStyles/>
            <Layout>
                <MeusDados/>
            </Layout>
        </>
    );
}

export default App;