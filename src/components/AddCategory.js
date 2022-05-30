import React, { useState } from 'react'
import PropTypes from "prop-types";
//También se puede recibir mediante props  , AddCategory = (props) =>{ props.SetCategorias}
export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategorias((valoresActuales)=>{ return [inputValue,...valoresActuales]});
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Buscar algo..."
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias : PropTypes.func.isRequired,
}