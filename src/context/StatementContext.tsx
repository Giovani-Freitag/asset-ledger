import { createContext, useContext, useState } from 'react';

export type Statement = any[];

type StatementContextType = {
    statement: Statement | null;
    setStatement: (statement: Statement | null) => void;
};

const StatementContext = createContext<StatementContextType | undefined>(undefined);

export function useStatement() {
    const ctx = useContext(StatementContext);
    if (!ctx) throw new Error("useStatement must be used within StatementProvider");
    return ctx;
}

export function StatementProvider({ children }: { children: React.ReactNode }) {
    const [statement, setStatement] = useState<Statement | null>(null);
    return (
        <StatementContext.Provider value={{ statement, setStatement }}>
            {children}
        </StatementContext.Provider>
    );
}
