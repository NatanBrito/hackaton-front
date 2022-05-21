import styled from "styled-components";
import axios from "axios";
import { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function Home() {

    const { currentTest, setCurrentTest, answers, setAnswers, fbColors } =
        useContext(UserContext);

    const Navigate = useNavigate();
    const getUri = "https://mongo-hackthon.herokuapp.com/tests";
    const [disciplinas, setDisciplinas] = useState([]);
    useEffect(() => {

        setCurrentTest(null);
        setAnswers(null);

        const promise = axios.get(getUri)
        promise.then((res) => {
            console.log(res.data)
            setDisciplinas(res.data)
        })
        promise.catch((e) => {
            console.log("erroooou")
        })
    }, [])
    return (
        <Materias />
    )

    function Materias() {
        let count = 0;
        return (
            <Container>
                <Hello>
                    <span>Olá, aluno! 🙃</span>
                </Hello>
                <AllTest>
                    {disciplinas.map((materia, index) => {
                        count++
                        return (
                            <Test key={index + Date.now()}
                                id={materia._id}
                                color="blue"
                                text={materia.type} description={materia.title}
                                numQuestion={materia.questions.length} />
                        )
                    })

                    }
                </AllTest>
                <Create onClick={() => { Navigate("/newTest") }}>
                    + Criar nova
                </Create>
            </Container>
        )
    }

    function Test({ color, text, numQuestion, description, id }) {
        return (
            <>
                <Disciplina className={color} onClick={() => { Navigate(`/tests/${id}`) }} >
                    <Descrip className="aumentar">

                        <h1>{text}</h1>
                    </Descrip>
                    <Description className="hidden">
                        <h2 className="hidden">{description}</h2>
                    </Description>
                    <h2 className="hidden">{numQuestion}q</h2>
                </Disciplina>
            </>
        )
    }
}
const Descrip = styled.div`
width: 40%;
margin-right: 2px;
height: 45px;
`
const Description = styled.div`
width: 50%;
height: 45px;
display: flex;
align-items: center;
overflow: hidden;
@media screen and (max-width: 550px) {
    .hidden{
        display: none;
    }
    .aumentar{
        display: flex;
        justify-content: center;
    }
}
`
const Create = styled.button`
 font-size: 20px;
 font-weight: 700;
 font-family: 'Roboto', sans-serif;
 margin-top: 2%;
 margin-bottom: 7%;
 width: 50%;
 height: 45px;
 background-color: rgb(144, 144, 144);
 border-radius: 10px;
 border:none;
 :hover{
     transition: 1s;
     background-color: black;
     color: white;
 }
 `
const AllTest = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
  min-width: 300px;
  width: 100%;

 `
const Hello = styled.div`
 display: flex;
 margin-top:8%;
 margin-bottom: 5%;
 span{  
    color: black;
    display: flex;
    font-size: 35px;
    margin-left: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
 }
 `
const Container = styled.div`
 width: 100vw;
 height: 100vh;
 button{
     cursor: pointer;
     
 }
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 background-color: rgba(186, 202, 218, 0.64);
 min-width: 300px;
 .blue{
    background-color: darkblue;
   
 }

 `
const Disciplina = styled.div`
 border:none ;
 padding: 2px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 80%;
 height: 80px;
 background-color: blue;
 margin-bottom: 2%;
 border-radius: 10px;
 :hover{
        transition: 1s;
        background-color: green;
    }
 h1{
     overflow: hidden;
     display: flex;
     color: white;
     font-size: 35px;
     margin-left: 10px;
     font-family: 'Roboto', sans-serif;
     font-weight: 700;
     }
h2{
     display: flex;
     justify-content: center;
     color: white;
     font-size: 25px;
     margin-right: 10px;
     font-family: 'Roboto', sans-serif;
     font-weight: 400;
     }
 `