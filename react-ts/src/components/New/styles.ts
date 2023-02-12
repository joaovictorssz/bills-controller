import styled from "styled-components";

export const New = styled.form`
    margin-bottom: 10px;
    width: 100%;
    height: 133px;
    display: flex;
    border-radius: 20px;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
    padding: 0 28px;

    #name, #quantity{
        padding: 0 12px;
        border-radius: 6px;
        background: none;
        border: #929292 1px solid;
        width: 25%;
        height: 40px;

        &:focus{
            outline: none;
        }
    }

    button{
        width: 10%;
        height: 40px;
        background: #78D668;
        border: none;
        background-color: #78D668;
        color: #fff;
        border-radius: 6px;
        font-weight: 500;
        cursor: pointer;

    }

    @media screen and (max-width: 968px) {
        display: flex;
        flex-direction: column;
        padding: 12px;
        height: auto;
        margin-top: 2px;
        
        #name, #quantity{
        margin: 6px 0px;
        padding: 0px 12px;
        border-radius: 6px;
        background: none;
        border: #929292 1px solid;
        width: 100%;
        height: 40px;

        &:focus{
            outline: none;
        }
    }

    #radio{
        display: flex;
        width: 100%;
        justify-content: space-around;
    }

    button{
        margin-top: 12px;
        width: 100%;
    }
    }


`