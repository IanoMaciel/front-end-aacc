import React from "react";
import * as S from './styles'


const MeusDados = () => {
    return(
        <S.Container>
            <h3>Meus dados</h3>
            <S.Form>
                <input type="text"placeholder="Nome"/>
                <div>
                    <input type="text"placeholder="Curso"/>
                    <input type="text"placeholder="Matrícula"/>
                </div>
                <input type="text"placeholder="CPF"/>
                <input type="text"placeholder="E-mail"/>

                <button type="submit">SALVAR</button>
            </S.Form>
        </S.Container>
    );
}

export default MeusDados;