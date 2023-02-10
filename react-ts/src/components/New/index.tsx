import { useEffect, useState } from 'react'
import * as C from './styles'
import { useForm } from 'react-hook-form'
import { FieldValues } from 'react-hook-form/dist/types'
import { ValuesContext } from '../../contexts/ValuesContex'
import { useContext } from 'react'

type NewCard = {
    name: string,
    quantity: string,
    type: boolean
}

type ContextTypes = {
    earns: string,
    bills: string,
    setEarns: (content: number)=> void,
    setBills: (content: number)=> void,
    list : NewCard[],
    setList: (content: NewCard | FieldValues)=> void

}

export default function New(){

    const {  register, handleSubmit  } = useForm()

    const {earns, bills, setEarns, setBills, setList} = useContext(ValuesContext) as ContextTypes

    const [li, setLi] = useState<any>([])


    const handleAddNewValue = (data: NewCard | FieldValues) =>{
        
        if(data.type === 'Entrada'){

              setEarns(parseFloat(data.quantity) + parseFloat(earns))
            
        }

        if(data.type === 'Saída'){
            setBills(parseFloat(data.quantity) + parseFloat(bills))

        }

        setLi([...li, data])



    }

    useEffect(()=>{
        setList(li)
    }, [li])



    return(
        <C.New onSubmit={handleSubmit(handleAddNewValue)}>
            <input required id='name' type="text" {...register('name')} placeholder='Name'/>
            <input required id='quantity' type="number" {...register('quantity')} placeholder='Quantity'/>

            <section>
                    <input required {...register("type")} type="radio" name="type" value={'Entrada'} id="in" />
                <label htmlFor="in">Entrada</label>
            </section>

            <section>
                <input required {...register("type")} type="radio" value={'Saída'} name="type" id="out" />
                <label htmlFor="out">Saída</label>
            </section>


            <button>Add +</button>
        </C.New>
    )
}