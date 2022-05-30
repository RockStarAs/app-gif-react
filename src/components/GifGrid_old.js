import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid_old = ({ categoria }) => {
    //const [counter, setCounter] = useState(0);
    const [images, setImages] = useState([]);

    //*Permite ejecutar, cierto código de manera condicional - o sea que ejecutando una vez cuando se cumple cierta condición
    useEffect(() => {
        getGifs(categoria).then((gifs) => { setImages(gifs) }); //Lo que se ejecuta
    }, [ categoria ]); // El [] , significa que se ejecutará una vez
    //Si la categoría cambia, va a volver a mandar el efecto

    const handleGifs = () => {

    };

    
    //getGifs();
    return (
        <>
            <h3>{categoria}</h3>
            <div className='card-grid'>
                {
                    images.map((img) => {
                        return (<GifGridItem
                            key={img.id} 
                            {...img}
                            />)
                    })
                }
                {/* <li>item</li> */}
                {/* <h1>Contador : { counter }</h1>
            <button onClick={ ()=>{ setCounter(counter + 1); } }> +1 </button> */}
            </div>
        </>
    )
}
