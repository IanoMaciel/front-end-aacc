import React from "react";
import * as S from './styles'

import { FaPaperclip } from "react-icons/fa";


const SolicitaAproveitamento = () => {
    return(
        <S.Container>
            <S.Title>Solicitar Aproveitamento</S.Title>
            <S.Form>
                <div>
                    <select>
                        <option value="0">PPC</option>
                        <option value="1">2020/1 - Corrente</option>
                        <option value="2">2010/2 - Ativo</option>
                    </select>
                    <select>
                        <option value="0">Modalidade</option>
                        <option value="1">Ensino</option>
                        <option value="2">Extensão</option>
                        <option value="3">Pesquisa</option>
                    </select>
                </div>

                <a href="#"><FaPaperclip/>Anexo da atividade</a>

                <textarea rows={2} placeholder="Descrição da atividade"/>

                <button type="submit">ENVIAR</button>                
            </S.Form>
        </S.Container>
    );
}

export default SolicitaAproveitamento;