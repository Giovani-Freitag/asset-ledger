# AssetLedger

[![Deploy](https://img.shields.io/github/deployments/giovani-freitag/asset-ledger/github-pages?label=live%20demo)](https://giovani-freitag.github.io/asset-ledger/)

**AssetLedger** é uma aplicação web open source para consolidação e análise de investimentos, focada em usuários que investem através da B3.  
Permite importar seu extrato de operações em CSV ou XLSX, visualizar todas as movimentações, calcular posições, rendimentos e facilitar a declaração anual do Imposto de Renda.


## Funcionalidades principais

- **Importação rápida do extrato B3:** Suporta arquivos CSV e XLSX.
- **Visualização detalhada do extrato:** Veja todas as transações de compra, venda, proventos, transferências e mais, em tabela dinâmica.
- **Cálculo automático de posições e rendimentos:** Em breve, consulte sua carteira consolidada, proventos recebidos e relatórios anuais.
- **Preparação para IR:** Ferramentas para facilitar a conferência e geração de dados para declaração.
- **Tema claro/escuro automático**
- **Interface 100% local:** Nenhum dado é enviado para servidores, tudo processado no navegador.


## Como usar

1. Acesse a aplicação online em:  
   👉 **[AssetLedger Live](https://giovani-freitag.github.io/asset-ledger/)**

2. Importe seu extrato B3:  
   - Baixe seu extrato de operações no site da B3 (formato .csv ou .xlsx).
   - Arraste o arquivo ou clique na área destacada na página inicial para carregar.

3. Visualize suas movimentações:  
   - Vá para a página **Extrato** para ver todas as operações em tabela.
   - Em breve, acesse a carteira consolidada e relatórios de rendimento.


## Desenvolvimento

Clone este repositório, instale as dependências e rode localmente:

```bash
git clone https://github.com/giovani-freitag/asset-ledger.git
cd asset-ledger
npm install
npm run dev
````


## Deploy

O deploy está automatizado via GitHub Actions para GitHub Pages, disponível sempre em:
**[https://giovani-freitag.github.io/asset-ledger/](https://giovani-freitag.github.io/asset-ledger/)**


## Roadmap

* [x] Importação de extratos CSV/XLSX
* [x] Visualização de extrato completo
* [ ] Consolidação de carteira
* [ ] Relatórios anuais de rendimentos
* [ ] Exportação para IR
* [ ] Mais filtros e análises


> Projeto mantido por [Giovani Freitag](https://github.com/giovani-freitag), para fins de estudo, portfolio e como utilitário prático para investidores pessoa física.
