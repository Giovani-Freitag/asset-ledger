import { useStatement } from '../context/StatementContext';
import { Link } from 'react-router-dom';

export default function Statement() {
    const { statement } = useStatement();

    if (!statement) {
        return (
            <div className="container py-5">
                <h2 className="mb-4">Extrato de Movimentações</h2>
                <div className="alert alert-info">
                    Nenhum extrato carregado.
                    <br />
                    <Link to="/">Clique aqui para importar seu extrato</Link> e visualizar suas transações.
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h2 className="mb-4">Extrato de Movimentações</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            {Object.keys(statement[0] ?? {}).map((col) => (
                                <th key={col}>{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {statement.map((row, i) => (
                            <tr key={i}>
                                {Object.values(row).map((val, j) => (
                                    <td key={j}>{String(val)}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
