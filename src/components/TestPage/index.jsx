import axios from "axios";
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {UserContext} from "../../contexts/UserContext";

import Question from "./Question";
import {useNavigate} from "react-router-dom";

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
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({selected, color}) => {
        return color ? color : "rgba(0,0,0,0.2)";
    }};
    cursor: pointer;
    :hover {
        background-color: ${({selected, color}) => {
            return "rgba(0,0,0,0.5)";
        }};
    }

    border: ${({selected}) => {
        return selected ? "2px solid white" : "2px solid darkblue";
    }};

    width: 40px;
    height: 40px;
    border-radius: 100%;
    position: relative;
`;

const Notification = styled.div`
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 100%;
    position: absolute;
    top: 1px;
    right: 1px;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
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
    display: flex;
    gap: 20px;
    h1 {
        font-size: 20px;
        font-weight: 700;
    }
    h3 {
        font-size: 14px;
        background-color: rgba(0, 0, 0, 0.2);
        padding: 5px;
        border-radius: 3px;
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

const Nav = styled.div`
    display: flex;
    gap: 10px;
`;

const NavButton = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #ddd;
    cursor: pointer;
    :hover {
        background-color: #bbb;
    }
`;

export default function TestPage() {
    const {currentTest, setCurrentTest, answers, setAnswers, fbColors} =
        useContext(UserContext);

    const [questions, setQuestions] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);

    const {testId} = useParams();

    useEffect(() => {
        if (!currentTest) {
            const promise = axios.get(
                `https://mongo-hackthon.herokuapp.com/tests/${testId}`
            );
            promise.then((res) => {
                console.log(res);
                setCurrentTest(res.data);
                const allQuestions = res.data.questions.sort(() =>
                    Math.random() > 0.5 ? 1 : -1
                );
                setQuestions(allQuestions);
                setCurrentQuestion(allQuestions[0]);
                setCurrentQuestionIndex(0);

                const cleanAnswers = allQuestions.map((q) => {
                    let correctAnswer = "";
                    let title = q.title;

                    q.answers.forEach((ans) => {
                        if (ans.isTrue) {
                            correctAnswer = ans.text;
                        }
                    });

                    return {
                        title: title,
                        correctAnswer: correctAnswer,
                        answer: null,
                        feedback: null,
                    };
                });

                console.log(cleanAnswers);
                setAnswers(cleanAnswers);
            });
            promise.catch((err) => {
                console.log(err);
            });
        }
    }, []);

    function goToQuestion(index) {
        setCurrentQuestion(questions[index]);
        setCurrentQuestionIndex(index);
    }

    function nextPage() {
        console.log("next");
        let newIndex = currentQuestionIndex + 1;
        if (newIndex < answers.length) {
            setCurrentQuestion(questions[newIndex]);
            setCurrentQuestionIndex(newIndex);
        }
    }

    function previousPage() {
        console.log("prev");
        let newIndex = currentQuestionIndex - 1;
        if (newIndex >= 0) {
            setCurrentQuestion(questions[newIndex]);
            setCurrentQuestionIndex(newIndex);
        }
    }

    const questionButtonsElements =
        questions && answers ? (
            questions.map((q, idx) => {
                return (
                    <QuestionButton
                        key={idx}
                        onClick={() => {
                            goToQuestion(idx);
                        }}
                        color={
                            answers[idx].feedback
                                ? fbColors[answers[idx].feedback].bg
                                : null
                        }
                        selected={currentQuestionIndex === idx}
                    >
                        {answers[idx].answer ? (
                            <></>
                        ) : (
                            <Notification></Notification>
                        )}
                        {idx + 1}
                    </QuestionButton>
                );
            })
        ) : (
            <></>
        );

    const numOfQuestions = questions ? questions.length : false;
    const allAnswered = answers
        ? answers.filter((a) => a.answer !== null).length === numOfQuestions
        : false;

    const navigate = useNavigate();
    function sendButtonClicked() {
        navigate("./results");
    }

    return (
        <Container>
            <Header>
                <HeaderTop>
                    {currentQuestion ? (
                        <>
                            <HeaderLeft>
                                <h1>{currentTest.title}</h1>
                                <h3>{currentTest.type}</h3>
                            </HeaderLeft>
                        </>
                    ) : (
                        <></>
                    )}
                </HeaderTop>
                <HeaderBottom>{questionButtonsElements}</HeaderBottom>
            </Header>
            <Main>
                {currentQuestion ? (
                    <Question
                        question={currentQuestion}
                        index={currentQuestionIndex}
                    ></Question>
                ) : (
                    <></>
                )}

                {answers ? (
                    <Nav>
                        {currentQuestionIndex > 0 ? (
                            <NavButton onClick={previousPage}>{"<"}</NavButton>
                        ) : (
                            <></>
                        )}
                        {currentQuestionIndex < answers.length - 1 ? (
                            <NavButton onClick={nextPage}>{">"}</NavButton>
                        ) : (
                            <></>
                        )}
                    </Nav>
                ) : (
                    <></>
                )}
            </Main>
            {allAnswered ? (
                <Footer>
                    <SendButton onClick={sendButtonClicked}>
                        Enviar respostas!
                    </SendButton>
                </Footer>
            ) : (
                <></>
            )}
        </Container>
    );
}
