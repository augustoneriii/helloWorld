import TableRow from './TableRow'
import { ICadastro } from '../../types/cadastro';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Tabela({ cadastro }: { cadastro: ICadastro[] }) {

    return (
        <>
            <div className='container mt-4 p-4'>
                <table className='table table-striped'>
                    <thead>
                        <tr className='table-dark'>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Altura</th>
                            <th>Peso</th>
                            <th>IMC</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cadastro.map((pessoa, index) => (
                            <TableRow
                                key={index}
                                {...pessoa}
                            />
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}
