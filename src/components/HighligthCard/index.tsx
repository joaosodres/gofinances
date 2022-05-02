import React from 'react';

import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction,


} from './styles'

interface Props {
    type: 'up' | 'down' | 'total';
    title: string;
    amount: string;
    lastTransaction: string;
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

export function HighligthCard({
    title,
    amount,
    lastTransaction
}: Props) {
    return (
        <Container>
            <Header>
                <Title>{title}</Title>
                <Icon name="arrow-up-circle" />
            </Header>
            <Footer>
                <Amount>{amount}</Amount>
                <LastTransaction>{lastTransaction}</LastTransaction>
            </Footer>

        </Container>
    )
}