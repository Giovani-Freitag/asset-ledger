import { useRef } from 'react';

type FileDropBoxProps = {
    onFile: (file: File) => void;
};

export default function FileDropBox({ onFile }: FileDropBoxProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleDrop(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            onFile(e.dataTransfer.files[0]);
        }
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            onFile(e.target.files[0]);
        }
    }

    function handleClick() {
        inputRef.current?.click();
    }

    return (
        <div
            className="border border-2 rounded-4 p-5 text-center d-flex flex-column align-items-center justify-content-center bg-body"
            style={{
                minHeight: 220,
                cursor: 'pointer',
                transition: 'border-color 0.2s',
                margin: '0 auto'
            }}
            onDragOver={e => e.preventDefault()}
            onDrop={handleDrop}
            onClick={handleClick}
            tabIndex={0}
            role="button"
        >
            <input
                ref={inputRef}
                type="file"
                accept=".csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                style={{ display: 'none' }}
                onChange={handleInputChange}
            />
            <i className="bi bi-upload mb-3 fs-1 text-primary"></i>
            <h5 className="mb-2">Arraste e solte aqui,</h5>
            <h6 className="mb-3 text-secondary-emphasis">
                ou clique para selecionar uma planilha exportada pela B3
            </h6>
            <span className="text-secondary small">(formatos suportados: CSV, XLSX, XLS)</span>
        </div>
    );
}
