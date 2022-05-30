import { useEffect, useState } from "react"
import  {getGifs}  from "../helpers/getGifs";
export const useFetchGifs = (categoria) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        //* IMPORTANTE
        //? LOS EFECTOS NO PUEDEN SER ASYNC, PORQUE SE SUPONE QUE DENTRO ESPERAN ALGO SINCRONO 
        getGifs(categoria).then(
            (gifs) => {
                console.log(gifs);
                setState({
                    data : gifs,
                    loading: false
                });
                
            }
        );

    },[categoria]);//Areglo vacío para que solo lo ejecute una vez, agregamos categoría

    // setTimeout(() => {
    //     setState({
    //         data: [1,2,3,4,5,6],
    //         loading: false
    //     });
    // }, 3000);
    return state; //[ data : [] , loading : true];

}