import styled from "styled-components";

export const List = styled.div`

margin: 33px 0;
width: 100%;
background: #fff;
display: flex;
flex-direction: column;
padding: 21px 28px;
border-radius: 20px;
nav{
    display: flex;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;

    #name{
        width: 247px;
    }

    #quantity{
        width: 447px;
    }


}

@media screen and (max-width: 968px) {
    font-size: 12px;
}
`

export const Item = styled.div`

    display: flex;
    width: 100%;
    padding: 10px 0;
    p:first-child{
        width: 247px;
    }

    p:nth-child(2){
        width: 447px;
    }

    @media screen and (max-width: 968px) {
    font-size: 12px;
}

`