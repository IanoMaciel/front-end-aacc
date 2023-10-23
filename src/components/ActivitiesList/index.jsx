import * as S from './styles';

export default function ActivitiesList({title, chs, cha, status}) {
    return (
        <S.Container>
            <span>{title}</span>
            <div>
                <span>{chs}</span> 
                <span>{ cha }</span> 
                <span>{ status }</span> 
            </div>
        </S.Container>
    );
}