import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    align-content: center;
    display: flex;
    height: 2rem;
    justify-content: space-between;
    line-height: 2rem;
    padding: 0.5rem 1rem;
`

const HeaderControl = styled.div`
    align-content: center;
    diplay: flex;    
`

interface Props {
    cancel?: boolean,
    children: string,
}

export const header: React.FC<Props> = (props) => (
    <>
    </>
)