import * as C from './styles'

import { ValuesContext } from '../../contexts/ValuesContex'
import { useContext } from 'react'

export default function Card(props: {title: string, quantity: string}){

    const {earns, bills, setEarns, setBills} = useContext(ValuesContext) as any


    return(
        <C.Card>
            <h3>{props.title}</h3>

            <p>R${props.quantity}</p>
        </C.Card>
    )

}