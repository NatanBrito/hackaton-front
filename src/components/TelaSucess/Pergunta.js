import swal from "sweetalert";

function Pergunta(props) {
    const { index, title, feedback, correctAnswer, answer } = props;
    
    return (  
        <div>
            <p>{`${index}-) ${title}`}</p>
            <section className={feedback}> 
                <h3>{`Você respondeu ${answer} e a resposta correta era ${correctAnswer}`}</h3>
                <button onClick={()=>swal('Área do professor!')}>Ver resolução</button>
            </section>
        </div>
    );
}

export default Pergunta;