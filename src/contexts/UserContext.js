import { useState, createContext } from 'react';

export const UserContext = createContext();

export function UserContextProvider({ children }) {

    const [tests, setTests] = useState(null);
    const [currentTest, setCurrentTest] = useState(null);
    const [answers, setAnswers] = useState(null);

    // answers = [
    //     { questionId, correctIsRight, answer, correctAnswer, feedback }, 
    //     { questionId, correctIsRight, answer, correctAnswer, feedback }, 
    //     { questionId, correctIsRight, answer, correctAnswer, feedback }, 
    //     { questionId, correctIsRight, answer, correctAnswer, feedback }
    // ]

    return (
        <UserContext.Provider
            value={{ tests, setTests, currentTest, setCurrentTest, answers, setAnswers }}
        >
            {children}
        </UserContext.Provider>
    )
}