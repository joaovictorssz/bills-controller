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
        width: 190px;
        height: 40px;

        &:focus{
            outline: none;
        }
    }

    button{
        width: 100px;
        height: 40px;
        background: #78D668;
        border: none;
        background-color: #78D668;
        color: #fff;
        border-radius: 6px;
        font-weight: 500;
        cursor: pointer;

    }


`