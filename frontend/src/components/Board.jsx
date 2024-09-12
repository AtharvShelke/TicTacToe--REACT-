import React, { useEffect, useState } from 'react';
import Square from './Square';
import WinnerCard from './WinnerCard';

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [count, setCount] = useState(0);
    const [isDraw, setIsDraw] = useState(false);

    const handleClick = (index) => {
        if (state[index] !== null || isWinner || isDraw) {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? 'X' : 'O';
        setState(copyState);
        setIsXTurn(!isXTurn);
        setCount(count + 1);
    };

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    };

    const isWinner = checkWinner();

    useEffect(() => {
        if (count === 9 && !isWinner) {
            setIsDraw(true);
        }
    }, [count, isWinner]);

    const newGame = () => {
        setState(Array(9).fill(null));
        setCount(0);
        setIsXTurn(true);
        setIsDraw(false);
    };

    return (
        <>
            <h1 style={{ color: "white", fontWeight: "700", textAlign: "center" }}>Tic Tac Toe</h1>
            <div className='board-container'>
                {isWinner ? (
                    <WinnerCard value={isWinner} onClick={newGame} />
                ) : isDraw ? (
                    <WinnerCard value="No One" onClick={newGame} />
                ) : (
                    <>
                        <h3 style={{ color: "white", fontWeight: "700", textAlign: "center", backgroundColor: '#000', marginBottom: "0" }}>
                            {isXTurn ? 'X' : 'O'} Turn
                        </h3>
                        <div className='row-container'>
                            <Square value={state[0]} onClick={() => { handleClick(0) }} />
                            <Square value={state[1]} onClick={() => { handleClick(1) }} />
                            <Square value={state[2]} onClick={() => { handleClick(2) }} />
                        </div>
                        <div className='row-container'>
                            <Square value={state[3]} onClick={() => { handleClick(3) }} />
                            <Square value={state[4]} onClick={() => { handleClick(4) }} />
                            <Square value={state[5]} onClick={() => { handleClick(5) }} />
                        </div>
                        <div className='row-container'>
                            <Square value={state[6]} onClick={() => { handleClick(6) }} />
                            <Square value={state[7]} onClick={() => { handleClick(7) }} />
                            <Square value={state[8]} onClick={() => { handleClick(8) }} />
                        </div>
                        <button className='reset-btn' style={{ alignSelf: "center" }} onClick={newGame}>Reset</button>
                    </>
                )}
            </div>
        </>
    );
}

export default Board;
