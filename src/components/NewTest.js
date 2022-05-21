import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import styled from "styled-components"

export default function NewTest() {
  const navigate = useNavigate()
  const [questions, setQuestions] = useState(1)
  const [valid, setValid] = useState(true)

  function submitForm(e) {
    e.preventDefault()
    const URI = "https://mongo-hackthon.herokuapp.com/tests"

    const body = {
      title: e.target[0].value,
      type: e.target[1].value,
      questions: [],
    }
    for (let i = 0; i < questions; i++) {
      body.questions.push({
        title: e.target[2 + i * 5].value,
        answers: [
          { text: e.target[3 + i * 5].value, isTrue: true },
          { text: e.target[4 + i * 5].value, isTrue: false },
          { text: e.target[5 + i * 5].value, isTrue: false },
          { text: e.target[6 + i * 5].value, isTrue: false },
        ],
      })
    }

    const promisse = axios.post(URI, body)
    promisse.then((response) => navigate("/"))
    promisse.catch((e) => setValid(false))
  }

  function ShowQuestions() {
    const questionList = []
    for (let i = 1; i <= questions; i++) {
      questionList.push(
        <article key={i}>
          <label htmlFor="question">Question {i}</label>
          <input id="question" type="text" placeholder="Title" required />
          <input type="text" placeholder="Correct answer" required />
          <input type="text" placeholder="Incorrect answer" required />
          <input type="text" placeholder="Incorrect answer" required />
          <input type="text" placeholder="Incorrect answer" required />
        </article>
      )
    }
    return <>{questionList.map((q) => q)}</>
  }

  return (
    <Main>
      {/* FIXME */}
      <header>
        <h1 onClick={() => navigate("/")}>Return</h1>
        <h1>Nome do app</h1>
      </header>

      <input
        id="question-number"
        type="number"
        placeholder="Number of Questions"
        onChange={(e) => setQuestions(e.target.value)}
      />

      <form onSubmit={(e) => submitForm(e)}>
        <input type="text" placeholder="Test Title" required />
        <input type="text" placeholder="Test Type" required />
        <ShowQuestions />
        <button type="submit">Submit</button>
      </form>

      {!valid ? <p>Failed to create new test</p> : <></>}
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  width: 100%;
  height: 100%;

  overflow-y: auto;

  header {
    position: sticky;
    top: 0;
    z-index: 10;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 80px;
    padding: 20px;

    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.5);
    background-color: blue;
    color: #ffffff;

    margin-bottom: 25px;
    font-size: 35px;
  }

  form {
    width: 85%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
  }

  #question-number {
    width: 45%;
    min-height: 40px;

    text-align: center;
    font-size: 15px;
  }

  article {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 15px;

    font-size: 30px;
    font-weight: 700;
  }

  input {
    width: 100%;
    min-height: 58px;

    margin-bottom: 13px;
    border-radius: 10px;
    outline: none;

    font-size: 20px;
    padding: 0 10px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 46px;
    margin: 13px 0 36px;

    border: none;
    border-radius: 10px;
    background-color: blue;

    font-size: 20px;
    color: #ffffff;
    font-weight: 700;

    cursor: pointer;
  }

  p {
    font-size: 25px;
    font-weight: 700;

    color: red;
    margin-bottom: 20px;
  }
`
