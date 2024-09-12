import React from 'react'

const WinnerCard = (props) => {
    return (
        <>
            <div className='winner-card'>{props.value} Won
                <button className='play-again' onClick={props.onClick}>Play Again</button>
            </div>
            
        </>
    )
}

export default WinnerCard