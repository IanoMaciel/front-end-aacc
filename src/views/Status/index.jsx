import React from "react";
import * as S from './styles';
import ActivitiesList from "../../components/ActivitiesList";

const Status = () => {
    return(
        <S.Container>
            <h1>Status de Solicitação</h1>
            <S.StatusBar>
                <span>Carga Horária</span> 
                <span>90/170</span> 
            </S.StatusBar>
            <S.List>
                <S.TableDescripiton>
                    <span>Descrição da Atividade</span>
                    <div>
                        <span>CHS</span>
                        <span>CHA</span>
                        <span>STATUS</span>
                    </div>
                </S.TableDescripiton>
                <ActivitiesList title="Atividade 1" cha={8} chs={8} status="Deferido" />
                <ActivitiesList title="Atividade 2" cha={8} chs={8} status="Em análise" />
                <ActivitiesList title="Atividade 3" cha={8} chs={8} status="indeferido" />
            </S.List>
        </S.Container>
    );
}

export default Status;