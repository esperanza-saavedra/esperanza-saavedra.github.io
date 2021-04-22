import React from 'react';

export default function AddPlayerForm (props) {

    const {addPlayer} = props;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addPlayer(playerInput.current.value);
        e.currentTarget.reset();
    }

    const playerInput = React.createRef();


    return (
    <form onSubmit={handleSubmit}>
        <input 
        className="text-name"
        type="text"
        ref={playerInput}
        placeholder="Ingresa nombre de jugador"
        />
        
        <input 
        type="submit"
        value="Añadir Jugador"
        />
    </form>
    );

}
