import FileDropBox from '../components/FileDropBox';
import { importStatement } from '../services/importStatement';
import { useStatement } from '../context/StatementContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const { setStatement } = useStatement();
    const navigate = useNavigate();

    function handleFile(file: File) {
        importStatement(file)
            .then(data => {
                setStatement(data);
                navigate('/statement');
            })
            .catch(err => {
                alert('Erro ao importar arquivo: ' + err);
            });
    }

    return (
        <div className="container py-5">
            <h2 className="mb-4">Importe seu extrato B3</h2>
            <FileDropBox onFile={handleFile} />
        </div>
    );
}
