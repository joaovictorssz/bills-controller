import { useEffect, useState } from 'react'
import * as C from './styles'
import { useForm } from 'react-hook-form'
import { FieldValues } from 'react-hook-form/dist/types'
import { ValuesContext } from '../../contexts/ValuesContex'
import { useContext } from 'react'
import {toast} from 'react-toastify'

type NewCard = {
    name: string,
    quantity: string,
    type: boolean
}

type ContextTypes = {
    earns: string,
    bills: string,
    setEarns: (content: string)=> void,
    setBills: (content: string)=> void,
    list : NewCard[],
    setList: (content: NewCard | FieldValues)=> void

}

export default function New(){

    const {  register, handleSubmit  } = useForm()

    const {earns, bills, setEarns, setBills, setList} = useContext(ValuesContext) as ContextTypes

    const [li, setLi] = useState<any>([])


    const handleAddNewValue = (data: NewCard | FieldValues) =>{
        
        if(data.type === 'Entrada'){

              if(data.quantity > 0){
                let actualEarn = parseFloat(earns)
                let value = parseFloat(parseFloat(data.quantity).toFixed(2))
                setEarns(`${(actualEarn + value).toFixed(2)}`)
                setLi([...li, data])
                toast.success("Done")
              }
              if(data.quantity <0){
                
                toast.error("Unavailable value")

              }
        }

        if(data.type === 'Saída'){

            if(data.quantity > 0){
                let actualBill = parseFloat(bills)
                let value = parseFloat(parseFloat(data.quantity).toFixed(2))
                setBills(`${(actualBill + value).toFixed(2)}`)
                setLi([...li, data])
                toast.success("Done")
            }
            if(data.quantity <0){
                
                toast.error("Unavailable value")

              }
        }

    }

    useEffect(()=>{
        setList(li)
    }, [li])



    return(
        <C.New onSubmit={handleSubmit(handleAddNewValue)}>
            <input required id='name' type="text" {...register('name')} placeholder='Name'/>
            <input required id='quantity' step="0.010" type="number" {...register('quantity')} placeholder='Quantity'/>

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