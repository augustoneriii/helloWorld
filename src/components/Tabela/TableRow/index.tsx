export default function TableRow(props: { nome: string, idade: string, altura: string, peso: string }) {
    const { nome, idade, altura, peso } = props
    
    let alt = Number(altura)
    let pso = Number(peso)

    let imc = pso / alt ** 2 

    return (
        <tr>
            <td>{nome}</td>
            <td>{idade}</td>
            <td>{altura}</td>
            <td>{peso}</td>
            <td>{imc.toFixed(2)}</td>
        </tr>
    )
}
