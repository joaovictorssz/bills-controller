import * as C from './styles'

export default function New(){
    return(
        <C.New>
            <input id='name' type="text" placeholder='Name'/>
            <input id='quantity' type="text" placeholder='Quantity'/>

            <section>
                    <input type="radio" name="type" id="in" />
                <label htmlFor="in">Entrada</label>
            </section>

            <section>
                <input type="radio" name="type" id="out" />
                <label htmlFor="out">Saída</label>
            </section>


            <button>Add +</button>
        </C.New>
    )
}