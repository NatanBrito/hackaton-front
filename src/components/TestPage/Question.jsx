import styled from "styled-components";
import {UserContext} from "../../contexts/UserContext";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    width: 100%;
`;

const Header = styled.div`
    flex: 0 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    width: 100%;
    padding: 20px 0px;
    font-size: 20px;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 500px;
    flex: 1 1 auto;
    padding: 20px 0px;
`;

const Footer = styled.div`
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
`;

const Alternatives = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Alternative = styled.div`
    background-color: ${({selected}) => {
        return selected ? "lightblue" : "null";
    }};
    width: 100%;
    padding: 10px;
    cursor: pointer;
    border-radius: 3px;

    :hover {
        background-color: ${({selected}) => {
            return selected ? "lightblue" : "#eee";
        }};
    }
`;

const Feedbacks = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

const FbOption = styled.div`
    cursor: pointer;
    background-color: ${({selected, color}) => {
        return selected ? color : "#eee";
    }};
    display: flex;

    align-items: center;
    justify-content: center;

    font-size: 24px;

    width: 50px;
    height: 50px;
    color: green;
    border-radius: 100%;

    :hover {
        background-color: ${({selected, color}) => {
            return selected ? color : "#ccc";
        }};
    }
`;

const alternatives = ["1", "2", "4"];

export default function Question() {
    const alternativeElements = alternatives.map((alt, idx) => {
        return (
            <Alternative key={idx} selected={idx === 2}>
                {alt}
            </Alternative>
        );
    });

    return (
        <Container>
            <Header>
                <h1>{"1) Quanto é 1 + 1?"}</h1>
            </Header>
            <Main>
                <Alternatives>{alternativeElements}</Alternatives>
                <Footer>
                    <Feedbacks>
                        <FbOption selected={true} color={"red"}>
                            😓
                        </FbOption>
                        <FbOption selected={true} color={"yellow"}>
                            👍
                        </FbOption>
                        <FbOption selected={true} color={"lightblue"}>
                            🙂
                        </FbOption>
                    </Feedbacks>
                </Footer>
            </Main>
        </Container>
    );
}
