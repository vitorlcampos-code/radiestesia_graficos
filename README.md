# 🌌 Gráficos de Radiestesia & Geometria Sagrada Sob Medida

> Plataforma e-commerce completa de geometria sagrada, calibragem radiestésica personalizada e geração de placas em PVC/cobre, com visualizador 3D interativo (Three.js), cálculo logístico regional e checkout transparente com PIX Dinâmico e webhook instantâneo.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvitorlcampos-code%2FGr-ficos-radiestesia-)
![Status](https://img.shields.io/badge/Status-Produ%C3%A7%C3%A3o-success?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20TailwindCSS%20%7C%20Three.js%20%7C%20Node.js-blueviolet?style=flat-square)

---

## 🧭 Visão Geral do Ecossistema

O projeto une o rigor da **Radiestesia Técnica e das Ondas de Forma de Chaumery-Bélizal** à tecnologia web moderna:
1. **Vitrine Holística & Catálogo (`index.html`)**: Filtros por objetivo vibracional (Prosperidade, Saúde/Harmonização, Limpeza Espiritual, Combos Terapêuticos) e selos de calibração a 0° Norte.
2. **Configurador 3D / AR Sob Medida (`personalizar.html`)**: Emissor de ondas de forma em Three.js, inserção de testemunho (nome do consulente, data de nascimento), biômetro de Bovis dinâmico e escolha de frequência em Hertz.
3. **Cálculo Logístico de Frete Regional (`carrinho.html`)**: Cálculo tarifário com origem pré-configurada no **CEP 13.843-186** (Mogi Guaçu / SP).
4. **Checkout Sagrado com PIX Real (`pagamento.html`)**: Geração de QR Code dinâmico e chave Copia e Cola via API Serverless, monitoramento de status em tempo real via polling e liberação de consagração.

---

## 🗂️ Estrutura de Arquivos do Repositório

```text
Gr-ficos-radiestesia-/
├── index.html              # Catálogo principal e vitrine de placas radiestésicas
├── personalizar.html       # Configurador 3D/AR com Three.js e inserção de testemunho
├── carrinho.html           # Sacola e cálculo de frete a partir de Mogi Guaçu (SP)
├── pagamento.html          # Checkout com QR Code PIX dinâmico e polling em tempo real
├── package.json            # Dependência da SDK oficial do Mercado Pago
├── vercel.json             # Regras de roteamento limpo (sem extensão .html) e headers de segurança
├── .env.example            # Modelo das variáveis de ambiente necessárias
├── .gitignore              # Bloqueio de arquivos locais e credenciais sensíveis
├── api/                    # Serverless Functions (Backend nativo Vercel)
│   ├── criar-pix-mp.js     # Endpoint POST para emissão de PIX dinâmico
│   ├── checar-status.js    # Endpoint GET para polling de pagamento
│   └── webhook.js          # Endpoint de notificação instantânea de aprovação
└── README.md               # Documentação técnica e guia operacional
```

---

## ⚡ Tecnologias Utilizadas

- **Frontend:** HTML5 semântico, Tailwind CSS, Lucide Icons, Google Fonts (*Playfair Display* & *Cinzel*).
- **Computação Gráfica:** Three.js para renderização da placa radiestésica e emissão de partículas.
- **Backend Serverless:** Node.js (Vercel Serverless Functions).
- **Gateway de Pagamento:** Mercado Pago SDK v2 (`mercadopago`).
- **Hospedagem & CI/CD:** Vercel / GitHub.

---

## 🚀 Como Colocar no Ar (Passo a Passo)

### 1. Clonar ou Baixar o Repositório
```bash
git clone https://github.com/vitorlcampos-code/Gr-ficos-radiestesia-.git
cd Gr-ficos-radiestesia-
```

### 2. Configurar Variáveis de Ambiente
Crie um arquivo `.env` na raiz (baseado no `.env.example`):
```env
MERCADO_PAGO_ACCESS_TOKEN=APP_USR-seu-token-aqui
SITE_URL=https://gr-ficos-radiestesia.vercel.app
```

> **Onde obter a credencial do Mercado Pago:**
> 1. Acesse o [Portal de Desenvolvedores do Mercado Pago](https://www.mercadopago.com.br/developers).
> 2. Crie uma aplicação para pagamentos online.
> 3. Copie o **Access Token de Produção**.

### 3. Testar Localmente com Vercel CLI
```bash
npm install
npx vercel dev
```
O site estará rodando em `http://localhost:3000`.

---

## 🌐 Deploy na Vercel em 1 Clique

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub.
2. Clique em **Add New...** ➔ **Project**.
3. Localize o repositório `Gr-ficos-radiestesia-` e clique em **Import**.
4. Em **Environment Variables**, cadastre:
   - `MERCADO_PAGO_ACCESS_TOKEN` = *seu token do Mercado Pago*
   - `SITE_URL` = *sua URL da Vercel*
5. Clique em **Deploy**.

---

## 🔮 Funcionalidades Especiais de Radiestesia

- **Consagração e Alinhamento:** Disparo automático de aviso para alinhamento físico a 0° Norte Magnético na oficina de confecção assim que o webhook confirma o pagamento.
- **Sincronização de Estado (`localStorage`):** Dados de testemunho e personalização inseridos no personalizador transitam diretamente para a sacola e a tela de pagamento.
- **Biômetro de Bovis:** Feedback energético visual em tempo real conforme material (PVC 1mm, Placa Dupla Cobre) e frequência escolhidos.

---

## 📄 Licença
Distribuído sob licença MIT. Criado para terapeutas holísticos, radiestesistas e praticantes de geometria sagrada.
