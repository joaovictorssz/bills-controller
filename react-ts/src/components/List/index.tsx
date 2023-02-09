import * as C from './styles'

export default function List(){
    return(
        <C.List>
            <nav>
                <p id='name'>
                    Name:
                </p>

                <p id='quantity'>
                    Quantity:
                </p>

                <p id='type'>
                    Type:
                </p>
            </nav>
            <hr />
        </C.List>
    )
}