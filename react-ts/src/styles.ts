import styled from "styled-components";

export const Div = styled.div`

background: #8360c3;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2ebf91, #8360c3);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2ebf91, #8360c3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

width: 100%;
height: 100vh;
overflow-y: scroll;

display: flex;
align-items: center;
justify-content: center;

main{

    width: 50%;
    
    #card-section{
        display: flex;
        justify-content: space-between;
    }

}


@media screen and (max-width: 968px) {

    #card-section{
        display: flex;
        flex-direction: column;
    }
}

`