import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>{
    // const categorias = ["Jojo's", "One Piece", "Naruto"];
    const [categorias, setCategorias] = useState(["Jotaro Kujo"])

    // const handleAdd = ()=>{
    //     //Usar siempre spreead y el elemento a agregar
    //     //? setCategorias([...categorias, 'Boku no piko']);
    //     setCategorias( (cats)=>{
    //         return [...cats, 'Boku no piko']; //? Esta es una mejor opción, si envio un callback este recibe el estado como estaba previamente
    //     })
    // }; 

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategorias={ setCategorias } />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                { 
                    categorias.map((elemento)=>{
                        return <GifGrid 
                            key={elemento} 
                            categoria={elemento}
                        />
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;