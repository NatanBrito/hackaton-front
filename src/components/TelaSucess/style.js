import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    background-color: #fff;

    header{ 
        width: 100%;
        height: 10vh;
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: darkblue;
        position: relative;
        
        .icon{
            font-size: 32px;
            color: #fff;
        }

        h1{
            max-width: 80%;
            line-height: 20px;
            color: #fff;
            letter-spacing: 0.02em;
        }
    }

    .result{
        background-color: #dcdcdc;
        width: 100%;
        height: 12vh;
        font-size: 18px;
        font-weight: 400;
        line-height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 0.02em;
        text-align: center;
        margin-bottom: 16px;
    }
    
    main{
        width: 100%;
        height: 88vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;

        div{
            width: 100%;
            min-height: 200px;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            margin-bottom: 24px;
            background-color: #fff;

            p{
                width: 100%;
                min-height: 15%;
                display: flex;
                align-items: center;
                font-size: 18px;
                font-weight: 400;
                line-height: 20px;
                letter-spacing: 0.02em;
                text-align: left;
            }
            
            .easy{
                background-color: lightblue;
            }
            .medium{
                background-color: orange;
            }
            .hard{
                background-color: red;
            }

            section{
                width: 100%;
                height: 70%;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                background-color: rgb(180, 180, 180);
                
                h3{
                    width: 80%;
                    height: 40%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 20px;
                    letter-spacing: 0.02em;
                    text-align: center;
                }

                button{
                    width: 80%;
                    height: 30%;
                    border-radius: 10px;
                    background-color: #dcdcdc;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 20px;
                    letter-spacing: 0.02em;
                    text-align: center;
                }
            }
        }
    }
`;