## 📚 Estrutura de Classes

### 1. `TransactionHistory`

**Responsável por armazenar, importar e exportar o histórico completo de movimentações.**

#### Métodos:

```ts
static fromCSV(filePath: string): Promise<TransactionHistory>
static fromJSON(data: object[]): TransactionHistory

toJSON(): object[]
toCSV(filePath: string): void

getAll(): Transaction[]
filterByAsset(symbol: string): TransactionHistory
getYears(): number[]
```

---

### 2. `Transaction`

**Representa uma movimentação única (compra, venda, provento, grupamento, etc).**

#### Propriedades:

```ts
date: Date
type: 'buy' | 'sell' | 'dividend' | 'jcp' | 'interest' | 'split' | 'reverse-split' | 'transfer-in' | 'transfer-out'
asset: string
quantity: number
unitPrice: number | null
totalValue: number
broker: string
```

---

### 3. `Wallet`

**Representa o estado consolidado da carteira após aplicar o histórico de transações.**

#### Métodos:

```ts
constructor(history: TransactionHistory)

getPosition(symbol: string): AssetPosition
getAllPositions(): AssetPosition[]

addTransaction(tx: Transaction): void
exportTransactions(): TransactionHistory
```

---

### 4. `AssetPosition`

**Consolida todas as movimentações de um ativo específico.**

#### Propriedades:

```ts
symbol: string
quantity: number
averagePrice: number
totalInvested: number
```

#### Métodos:

```ts
getDividends(): IncomeEvent[]
getJCP(): IncomeEvent[]
getIncomeEvents(): IncomeEvent[]
```

---

### 5. `IncomeEvent`

**Representa um rendimento recebido (dividendo, jcp, etc).**

#### Propriedades:

```ts
type: 'dividend' | 'jcp' | 'interest'
date: Date
amount: number
```

---

### 6. `AnnualPositions`

**Gera snapshots da carteira ao final de cada ano com base no histórico.**

#### Métodos:

```ts
constructor(history: TransactionHistory)

getForYear(year: number): AnnualSnapshot
getAll(): AnnualSnapshot[]
exportToCSV(filePath: string): void
```

---

### 7. `AnnualSnapshot`

**Representa a carteira em 31/12 de um ano específico.**

#### Propriedades:

```ts
year: number
positions: AssetPosition[]
```

---

### 8. `AnnualIncome`

**Resume os rendimentos recebidos por ativo em cada ano.**

#### Métodos:

```ts
constructor(history: TransactionHistory)

getForYear(year: number): IncomeSummary[]
getAll(): { year: number, incomes: IncomeSummary[] }[]
exportToCSV(filePath: string): void
```

---

### 9. `IncomeSummary`

**Totaliza os valores recebidos de um ativo num ano.**

#### Propriedades:

```ts
symbol: string
totalDividend: number
totalJCP: number
totalInterest: number
```

---

### 10. `PositionWithIncome`

**Une posições patrimoniais com rendimentos recebidos para fins de declaração.**

#### Métodos:

```ts
constructor(positions: AnnualPositions, incomes: AnnualIncome)

getForYear(year: number): ConsolidatedAssetSummary[]
exportToCSV(filePath: string): void
```

---

### 11. `ConsolidatedAssetSummary`

**Resumo final para declaração IR de um ativo num ano.**

#### Propriedades:

```ts
symbol: string
quantity: number
averagePrice: number
totalInvested: number
totalDividend: number
totalJCP: number
totalInterest: number
```

---

## 🧪 Mini Exemplo de Uso

```ts
// 1. Carregar movimentações de um CSV
const history = await TransactionHistory.fromCSV('./data/movimentacoes.csv');

// 2. Construir a carteira a partir das movimentações
const wallet = new Wallet(history);

// 3. Consultar posição de um ativo
const mxrf = wallet.getPosition('MXRF11');
console.log(mxrf.quantity);           // 20
console.log(mxrf.averagePrice);       // 10.20
console.log(mxrf.getDividends());     // [IncomeEvent, ...]

// 4. Adicionar uma transação nova
wallet.addTransaction(new Transaction({
  date: new Date('2025-05-10'),
  type: 'buy',
  asset: 'MXRF11',
  quantity: 10,
  unitPrice: 10.5,
  totalValue: 105,
  broker: 'nuinvest'
}));

// 5. Gerar posições anuais
const annualPositions = new AnnualPositions(history);
annualPositions.exportToCSV('./dist/positions.csv');

// 6. Gerar rendimentos anuais
const annualIncome = new AnnualIncome(history);
annualIncome.exportToCSV('./dist/income.csv');

// 7. Combinar para gerar consolidação final
const consolidated = new PositionWithIncome(annualPositions, annualIncome);
consolidated.exportToCSV('./dist/consolidated.csv');
```