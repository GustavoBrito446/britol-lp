# CLAUDE.md: britol-lp

Landing page da Britol Protection (PPF e películas), em Astro 5 estático, publicada no GitHub Pages.

- **Ponytail em modo `ultra`** neste projeto: a menor mudança que resolve, e questionar partes do pedido que a necessidade não justifica (skill em `.claude/skills/ponytail`).
- **Impeccable** para qualquer trabalho visual (skill em `.claude/skills/impeccable`). A verdade do produto fica em `PRODUCT.md`, o sistema visual em `DESIGN.md` e o contrato da página em `.impeccable/surfaces/`.
- Dados do negócio (WhatsApp, garantia, parcelas) só em `src/config/site.ts`.
- Nunca inventar depoimento, preço, número de clientes ou marca de filme.
- Testes de UI: **agent-browser** para prints e conferência visual (desktop + `set device "iPhone 14"`), **Playwright** para fluxos, performance e console. Nunca Claude in Chrome nem o painel do app (regra global em `~/.claude/CLAUDE.md`). Preview local: `npm run build && npm run preview` → `http://localhost:4321/britol-lp/`.
- Node 20 na máquina → Astro 5 (o Astro 6 exige Node 22).
