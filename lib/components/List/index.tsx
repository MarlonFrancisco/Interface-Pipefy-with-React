import React from 'react';

import { Container } from './styles';
import { MdAdd } from 'react-icons/md'
import Card from './../Card/index';

interface ICard {
    id: number; 
    content: string; 
    labels: string[]; 
    user: string; 
}

export default function List({ data, index: listIndex }) {
    return (
        <Container done={data.done}>
            <header>
                <h2>{ data.title }</h2>
                {data.creatable && (
                    <button type="button">
                        <MdAdd size={24} color="#fff"/>
                    </button>  
                )}
            </header>

            <ul>
                {data.cards.map((card: ICard, index: number) => (
                    <Card 
                        key={index} 
                        listIndex={listIndex} 
                        index={index}
                        data={card}
                    />
                ))}
            </ul>
        </Container>
    );
}
