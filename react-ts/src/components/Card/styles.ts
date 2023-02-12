import styled from "styled-components";

export const Card = styled.div`
    margin: 33px 0;
    width: 30%;
    height: 147px;
    background-color: #fff;
    border-radius: 20px;
    padding: 21px 28px;

    h3{
        font-weight: 400;
        font-size: 16px;
    }

    p{
        margin-top: 21px;
        font-weight: 500;
        font-size: 32px;
        
    }

    @media screen and (max-width: 968px) {

        width: 100%;
        margin: 2px 0;

        h3{
            font-size: 16px;
        }
        p{
            font-size: 22px;
        }
     
    }


`