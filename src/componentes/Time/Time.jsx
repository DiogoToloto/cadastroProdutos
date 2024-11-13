import "./Time.css";

const Time = (props) => {
    return(
        <section className="time" style={{backgroundColor: props.corSegundaria}} >
            <h3 style={{borderBottomColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}

export default Time;