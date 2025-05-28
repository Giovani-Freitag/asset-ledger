import * as XLSX from 'xlsx';

export type RawTransaction = Record<string, any>;

export async function importStatement(file: File): Promise<RawTransaction[]> {
    const isCsv = file.name.toLowerCase().endsWith('.csv');

    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = e => {
            let workbook;
            if (isCsv) {
                const text = e.target?.result as string;
                workbook = XLSX.read(text, { type: 'string' });
            } else {
                const data = new Uint8Array(e.target?.result as ArrayBuffer);
                workbook = XLSX.read(data, { type: 'array' });
            }

            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '' }) as RawTransaction[];
            resolve(jsonData);
        };

        reader.onerror = reject;
        if (isCsv) {
            reader.readAsText(file, 'utf-8');
        } else {
            reader.readAsArrayBuffer(file);
        }
    });
}
