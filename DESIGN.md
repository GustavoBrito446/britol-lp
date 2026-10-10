# Design: Britol Protection

O mundo visual é **o box do estúdio à noite**. O teto hexagonal de LED funciona como grade, a luz é o material, e cada serviço é mostrado acendendo luz na parte do carro que ele protege.

## Tokens (src/layouts/Base.astro)

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#0c0b0a` | Chão: preto laqueado, levemente quente |
| `--bg-raise` | `#151311` | Única superfície elevada (bloco "na sua conta") |
| `--line` | `#2a2723` | Fios de 1px entre linhas e seções |
| `--ink` | `#edebe7` | Texto principal |
| `--muted` | `#a9a49c` | Texto secundário (contraste ~8:1 sobre `--bg`) |
| `--led` | `#f3f6fa` | Luz: tubos do teto, pontos do PPF, barras da escala |
| `--gold` / `--gold-hi` | `#c9a65f` / `#e0c27f` | Só ação e estado ativo (botões, aba selecionada, valores) |
| `--gold-ink` | `#15110a` | Texto sobre o dourado |

**Regra:** o dourado é reservado para o que se pode clicar ou para o que está ativo, e o branco-LED é reservado para a luz. Nada decorativo usa nenhum dos dois.

## Tipografia

Uma família só, **Archivo Variable** (servida pelo próprio site via `@fontsource-variable`), em duas larguras:
- Títulos: `font-stretch: 125%`, peso 760–780, tracking −0.025em. Lembra emblema automotivo.
- Texto: largura 100%, peso normal, `line-height` 1.6.
- Rótulos de tabela e termos: largura 125%, caixa alta, 0.78–0.8rem, tracking 0.08em.

## Componentes

- **Teto de LED** (`HexCeiling.astro`): SVG gerado em build com glow em `feGaussianBlur`; os tubos acendem com flicker escalonado. Aparece no hero (desktop, continuando o teto da foto) e no CTA final.
- **Seletor de PPF** (`PpfPacotes.astro`): rádios nativos e `:has()`, sem JavaScript. Os pontos de luz acendem de forma cumulativa por pacote; no Full a foto inteira clareia. A moldura `.quadro` mantém a proporção 3:4, então os pontos (em %) nunca desalinham.
- **Escala PS4–PS12**: barras de LED que acendem com `animation-timeline: view()` (sem suporte ao recurso, ficam acesas).
- **Recibo "na sua conta"**: `dl` com pontilhado entre o item e o valor em dourado.
- **Botão**: retângulo dourado com raio de 2px e seta em SVG. Nada de sombra decorativa.

## Movimento

Um único momento autoral: a ignição do teto de LED. O resto é transição de estado (seletor, FAQ). Tudo respeita `prefers-reduced-motion`.

## Proveniência das imagens

Todas as fotos em `src/assets/fotos/` são do próprio Gustavo (pasta "Britol" no Google Drive): convertidas de HEIC, rotacionadas pelo EXIF e redimensionadas para 2000px. `public/og.jpg` é um recorte de `x3-tres-quartos.jpg`. Nenhuma imagem de banco ou gerada por IA.
