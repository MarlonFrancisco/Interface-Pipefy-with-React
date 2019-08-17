import React, {useState} from 'react';

import { Container } from './styles';
import List from './../List/index';
import { loadLists } from './../../services/api';
import BoardContext from './context';
import produce from 'immer';

const lists = loadLists();

export default function Board() {
    const [list, setList] = useState(lists);

    function move(fromList: number, toList: number, from: number, to: number) {
        setList(produce(list, draft => {
            const dragged = draft[fromList].cards[from];
            draft[fromList].cards.splice(from, 1);
            draft[toList].cards.splice(to, 0, dragged);
        }))
    }

    return (
        <BoardContext.Provider value={{list, move}}>
            <Container>
                {list.map((list, index) => <List key={list.title} index={index} data={list} />)}
            </Container>
        </BoardContext.Provider>
    );
}
