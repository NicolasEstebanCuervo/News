import { useParams } from "react-router-dom"

export default function SportsPageIndividual (){

    const {id} = useParams();

    return(
        <>
            <h1>Hola, estas en la id {id}</h1>
        </>
    )
}