import FileDropBox from '../components/FileDropBox';
import { importStatement } from '../services/importStatement';

export default function Home() {
    function handleFile(file: File) {
        importStatement(file)
            .then(rawData => {
                console.log(rawData);
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
