import React from 'react';
import { HighligthCard } from '../../components/HighligthCard';



import {
    Container,
    Header,
    UserWrapeer,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighligthCards,



} from './styles';


export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapeer>
                    <UserInfo>
                        <Photo source={{ uri: "https://github.com/joaosodres.png" }} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>João Victor</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapeer>

            </Header>
            <HighligthCards>
                <HighligthCard
                    type='up'
                    title='Entradas '
                    amount='R$ 17.400,00'
                    lastTransaction='Última entrada dia 13 de abril'
                />
                <HighligthCard
                    type='down'
                    title='Saídas '
                    amount='R$ 1.259,00'
                    lastTransaction='Última saída dia 03 de abril'
                />
                <HighligthCard
                    type='total'
                    title='Total '
                    amount='R$ 16.141,00'
                    lastTransaction='01 a 16 de abril'
                />
            </HighligthCards>
        </Container >
    )
}

