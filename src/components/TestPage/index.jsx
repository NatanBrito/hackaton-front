import styled from "styled-components";
import {UserContext} from "../../contexts/UserContext";

import Question from "./Question";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    width: 100%;
`;

const Header = styled.div`
    color: white;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: darkblue;
    width: 100%;
    padding: 10px 20px;
    gap: 10px;
`;

const HeaderTop = styled.div`
    color: white;
    flex: 0 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: darkblue;
    padding: 10px 0px;
    width: 100%;
`;

const HeaderBottom = styled.div`
    color: white;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const QuestionButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({selected, color}) => {
        return selected
            ? "rgba(255,255,255,0.2)"
            : color
            ? color
            : "rgba(0,0,0,0.2)";
    }};
    cursor: pointer;
    :hover {
        background-color: ${({selected, color}) => {
            return "rgba(0,0,0,0.5)";
        }};
    }

    border: ${({selected}) => {
        return selected ? "1px solid white" : "";
    }};

    width: 40px;
    height: 40px;
    border-radius: 100%;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 500px;
    flex: 1 1 auto;
    padding: 20px;
`;

const Footer = styled.div`
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
`;

const HeaderLeft = styled.div`
    h1 {
        font-size: 20px;
        font-weight: 700;
    }
`;

const HeaderRight = styled.div`
    display: flex;
    gap: 20px;
    div {
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 5px;
    }
`;

const SendButton = styled.div`
    padding: 20px 50px;
    background-color: #ddd;
    border-radius: 10px;
    cursor: pointer;
    :hover {
        background-color: #bbb;
    }
`;

export default function TestPage() {
    return (
        <Container>
            <Header>
                <HeaderTop>
                    <HeaderLeft>
                        <h1>{"Matemática"}</h1>
                    </HeaderLeft>
                    <HeaderRight>
                        <div>{"10q"}</div>
                        <div>{"faltam 7"}</div>
                    </HeaderRight>
                </HeaderTop>
                <HeaderBottom>
                    <QuestionButton selected={true}>1</QuestionButton>
                    <QuestionButton color={"green"}>2</QuestionButton>
                    <QuestionButton>3</QuestionButton>
                </HeaderBottom>
            </Header>
            <Main>
                <Question></Question>
            </Main>
            <Footer>
                <SendButton>Enviar respostas!</SendButton>
            </Footer>
        </Container>
    );
}
