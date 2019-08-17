import * as React from 'react';

import GlobalStyles from './styles/global';
import Header from './components/Header';
import Board from './components/Board/index';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
const App = () => {

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <GlobalStyles />
                <Header />
                <Board />
            </DndProvider>
        </>
    );
}

export default App;