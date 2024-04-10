import { useState, useEffect } from "react"

const Fomulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("Iniciou");

        return () => {
            console.log("Finalizou");
        }
    }, [])

    const alteraNome = (evento) => {
        setNome(estadoAnteior => {
            return evento.target.value;
        })

    }

    const rederizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, Aprovado</p>
            )
        }
        else {
            return (
                <p>Olá {nome}, Não Aprovado</p>
            )
        }
    }

    return(
        <form>
            <ul>
                {[1,2,4,5,6].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {rederizaResultado()}
        </form>
    )
}

export default Fomulario