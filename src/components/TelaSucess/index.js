import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';
import Pergunta from './Pergunta';

import { IoHomeSharp } from 'react-icons/io5';
import { Container } from './style.js'; 

function TelaSucess() {
    const { answers, currentTest } = useContext(UserContext);
    const navigate = useNavigate();

    const numeroDeAnswers = answers.length;
    const numeroDeAcertos = answers.filter(answer => {
        return answer.correctAnswer === answer.answer    
    }).length;

    return (  
        <Container>
            <header>
                <IoHomeSharp className='icon' onClick={()=>navigate('/')}/>
                <h1>
                    {currentTest.type}
                    <p>{currentTest.title}</p>
                </h1>
            </header>
            <p className='result'>{`Parabéns! Você acertou ${numeroDeAcertos} de ${numeroDeAnswers} questões!`}</p>
            <main>
                {
                    answers.map((pergunta, index) => {
                        const { title, answer, correctAnswer, feedback } = pergunta;
                        return(
                            <Pergunta index={index+1} title={title} feedback={feedback}
                            correctAnswer={correctAnswer} answer={answer} />
                        )
                    })
                }
            </main>
        </Container>
    );
}

export default TelaSucess;