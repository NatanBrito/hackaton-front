import {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import {UserContext} from "../../contexts/UserContext";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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

const letras = ["A", "B", "C", "D", "E", "F"];

export default function Question({question, index}) {
    const {answers, setAnswers, fbColors} = useContext(UserContext);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState(null); // 'easy', 'medium', 'hard'

    useEffect(() => {
        if (answers) {
            setSelectedAnswer(answers[index].answer);
            setFeedback(answers[index].feedback);
        }
    }, [question]);

    function clickAnswer(ansIndex) {
        let newSelection = ansIndex;
        let newAnswer = question.answers[ansIndex].text;
        if (selectedAnswer === newAnswer) {
            newSelection = null;
            newAnswer = null;
        }

        const newAnswers = [...answers];
        newAnswers[index].answer = newAnswer;
        console.log(newAnswers);

        setAnswers(newAnswers);
        setSelectedAnswer(newAnswer);
    }

    function clickFeedback(feedbackKey) {
        let newFeedback = feedbackKey;

        if (feedback === feedbackKey) {
            newFeedback = null;
        }

        const newAnswers = [...answers];
        newAnswers[index].feedback = newFeedback;
        console.log(newAnswers);

        setAnswers(newAnswers);
        setFeedback(newFeedback);
    }

    const alternativeElements = question.answers.map((ans, idx) => {
        return (
            <Alternative
                key={idx}
                selected={ans.text === selectedAnswer}
                onClick={() => {
                    clickAnswer(idx);
                }}
            >
                {`${letras[idx]}) ${ans.text}`}
            </Alternative>
        );
    });

    return (
        <Container>
            <Header>
                <h1>{`${index + 1}) ${question.title}`}</h1>
            </Header>
            <Main>
                <Alternatives>{alternativeElements}</Alternatives>
                <Footer>
                    <Feedbacks>
                        <FbOption
                            selected={feedback === "hard"}
                            color={fbColors["hard"].bg}
                            onClick={() => {
                                clickFeedback("hard");
                            }}
                        >
                            😓
                        </FbOption>
                        <FbOption
                            selected={feedback === "medium"}
                            color={fbColors["medium"].bg}
                            onClick={() => {
                                clickFeedback("medium");
                            }}
                        >
                            👍
                        </FbOption>
                        <FbOption
                            selected={feedback === "easy"}
                            color={fbColors["easy"].bg}
                            onClick={() => {
                                clickFeedback("easy");
                            }}
                        >
                            🙂
                        </FbOption>
                    </Feedbacks>
                </Footer>
            </Main>
        </Container>
    );
}
