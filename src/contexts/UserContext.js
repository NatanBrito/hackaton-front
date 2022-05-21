import { useState, createContext } from 'react';

export const UserContext = createContext();

export function UserContextProvider({ children }) {

    const [tests, setTests] = useState(null);
    const [currentTest, setCurrentTest] = useState(null);
    const [answers, setAnswers] = useState(null);
    const fbColors = {
        easy: { bg: "lightblue" },
        medium: { bg: "orange" },
        hard: { bg: "red" }
    };

    // answers = [
    //     { questionId, correctIsRight, answer, correctAnswer, feedback }, 
    //     { questionId, correctIsRight, answer, correctAnswer, feedback }, 
    //     { questionId, correctIsRight, answer, correctAnswer, feedback }, 
    //     { questionId, correctIsRight, answer, correctAnswer, feedback }
    // ]

    return (
        <UserContext.Provider
            value={{ tests, setTests, currentTest, setCurrentTest, answers, setAnswers, fbColors }}
        >
            {children}
        </UserContext.Provider>
    )
}