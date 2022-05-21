import styled from "styled-components";
import axios from "axios";
import { useState, useEffect} from "react"
export default function Home() {
    const getUri= "https://mongo-hackthon.herokuapp.com/tests";
    const [disciplinas,setDisciplinas]= useState([]);
    useEffect(()=>{
      const promise= axios.get(getUri)
      promise.then((res)=>{
          console.log(res.data)
          setDisciplinas(res.data)
      })
      promise.catch((e)=>{
          console.log("erroooou")
      })
    },[])
    return (
        <Materias />
    )

 function Materias(){
     let count=0;
     return(
         <Container>
             <Hello>
             <span> olá, Aluno</span>
             </Hello>
            <AllTest>
                {disciplinas.map((materia,index)=>{
                    count++
                    return(
                    <Test key={index+Date.now()} 
                    color={count===2?"blue":"purple"}
                     text={materia.type} description={materia.title}
                      numQuestion={materia.questions.length}/>
                    )
                })

                }
            </AllTest>
            <Create>
              + Criar nova
            </Create>
         </Container>
     )
 }

 function Test({color,text,numQuestion,description}){
     return(
        <Disciplina className={color}>
        <h1>{text}</h1>
        <Description>
        <h2>{description}</h2>
        </Description>
        <h2>{numQuestion}q</h2>
        </Disciplina>
     )
 }
}
const Description=styled.div`
overflow: hidden;
`
 const Create=styled.button`
 font-size: 20px;
 font-weight: 700;
 font-family: 'Roboto', sans-serif;
 margin-top: 10%;
 margin-bottom: 5%;
 width: 50%;
 height: 45px;
 border-radius: 10px;
 border:none;
 :hover{
     transition: 1s;
     background-color: black;
     color: white;
 }
 `
 const AllTest=styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
  min-width: 300px;
  width: 100%;

 `
 const Hello=styled.div`
 display: flex;
 margin-top:6%;
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
 const Container=styled.div`
 width: 100vw;
 height: 100vh;
 button{
     cursor: pointer;
     :hover{
        transition: 1s;
        background-color: green;
    }
 }
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 background-color: rgba(186, 202, 218, 0.64);
 min-width: 300px;
 .blue{
    background-color: blue;
   
 }
 .red{
    background-color: red;
 }
 .purple{
    background-color: purple;
 }
 `
 const Disciplina=styled.button`
 border:none ;
 padding: 2px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 80%;
 height: 50px;
 background-color: blue;
 margin-bottom: 2%;
 border-radius: 10px;
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