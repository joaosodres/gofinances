import React, { useState } from "react";
import { Input } from "../../components/Forms/Input";
import { Button } from "../../components/Forms/Input/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes,

} from './styles';

export function Register() {
    const [transactionType, setTransactionType] = useState('');

    function handleTransactionsTypesSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }

    console.log(setTransactionType)

    return (
        <Container>
            <Header>
                <Title>
                    Cadastro
                </Title>
            </Header>
            <Form>
                <Fields>
                    <Input
                        placeholder="Nome"
                    />
                    <Input
                        placeholder="Preço"
                    />
                    <TransactionTypes>
                        <TransactionTypeButton
                            type="up"
                            title="Income"
                            onPress={() => handleTransactionsTypesSelect('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton
                            type="down"
                            title="Outcome"
                            onPress={() => handleTransactionsTypesSelect('down')}
                            isActive={transactionType === 'down'}
                        />
                    </TransactionTypes>

                </Fields>
                <Button title="Enviar" />
            </Form>

        </Container>
    )
}