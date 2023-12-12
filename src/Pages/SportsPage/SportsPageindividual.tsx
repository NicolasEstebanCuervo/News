import { useParams } from "react-router-dom"

export default function CulturaPageIndividual (){

    const {id} = useParams();

    return(
        <>
            <h1>Hola, estas en la id {id}</h1>
        </>
    )
}