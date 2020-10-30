import React, {FC} from 'react';
import * as Styled from './Logo.styles';

interface Props {
    size?: number
}

export const Logo: FC<Props> = ({size = 1}) => {
    return (
        <Styled.LogoWrapper>
            <Styled.PText size={size} onClick={() => window.open('https://prodigosapp.com')}>
                P
            </Styled.PText>
            <Styled.RestText size={size} className={'restStyle'} onClick={() => window.open('https://prodigosapp.com')}>
                ródigos
            </Styled.RestText>
        </Styled.LogoWrapper>
    );
};
