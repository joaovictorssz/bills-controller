import * as C from './styles'

export default function List(props: {name: string, quantity: string, type: string, list:any}){
    return(
        <C.List>
            <nav>
                <p id='name'>
                    {props.name}:
                </p>

                <p id='quantity'>
                    {props.quantity}:
                </p>

                <p id='type'>
                    {props.type}:
                </p>
            </nav>
            <hr />

            {props.list.map((a: any, b: number)=>{
                return(
                    <C.Item key={b}>
                        <p>{props.list[b].name}</p>
                        <p>R${props.list[b].quantity},00</p>
                        <p>{props.list[b].type}</p>
                    </C.Item>
                )
            })}
            
            
        </C.List>
    )
}
