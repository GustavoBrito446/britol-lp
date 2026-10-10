# Britol Protection: landing page

Landing page de vendas da **Britol Protection**, estúdio de proteção automotiva premium em São Paulo: PPF (paint protection film), película antivandalismo PS4–PS12 e películas de controle solar (filme profissional e nano carbon).

**Site:** https://gustavobrito446.github.io/britol-lp/

## O que a página faz

- Transforma visitas do Instagram em conversas no WhatsApp, com a mensagem já escrita para o serviço escolhido.
- **Seletor de pacotes de PPF:** o visitante escolhe Básico, Start, Advanced ou Full e vê, na foto de um carro real do estúdio, as peças que aquele pacote protege acenderem. Feito só com HTML e CSS (`:has()`), sem JavaScript.
- Teto de LED hexagonal em SVG que "liga" ao abrir a página, a assinatura visual do estúdio.
- Copy focada em ganho: proteção como forma de manter o valor do carro ("quem protege, revende por cima").

## Stack e decisões

| Decisão | Por quê |
|---|---|
| **Astro 5**, saída estática | HTML pronto, zero JS por padrão, otimização de imagem embutida. A versão 5 porque a 6 exige Node 22. |
| React só em "ilhas" (`@astrojs/react`) | Os componentes do React Bits (botão e carrossel) são React; o resto da página continua HTML puro. |
| SpecularButton + FlexCarousel (React Bits, WebGL via `ogl`) | CTA com brilho que segue o mouse e galeria em carrossel com curva "liquid". |
| GSAP + ScrollTrigger | Animações conforme o scroll; desligadas para quem ativa "reduzir movimento". |
| CSS próprio, sem Tailwind | Página única com sistema visual próprio; menos dependência. |
| `astro:assets` (`<Image>`) | Gera WebP em vários tamanhos com `srcset`: fotos de ~400 KB viram 20–110 KB. |
| Fonte servida pelo próprio site (`@fontsource-variable/archivo`) | Sem requisição para o Google Fonts (privacidade/LGPD e performance). |
| Seletor de PPF com rádio + `:has()` | Acessível por teclado nativamente e funciona sem JS. |
| GitHub Actions → Pages | Deploy automático a cada `git push` na `main`. |

## Estrutura

```
src/
  config/site.ts            # WhatsApp, garantia, parcelas: edite aqui
  layouts/Base.astro        # <head>, SEO, dados estruturados, tokens de cor e tipografia
  components/HexCeiling.astro  # teto de LED em SVG
  components/PpfPacotes.astro  # seletor interativo de pacotes de PPF
  components/Cta.jsx        # padrão de CTA (SpecularButton configurado)
  components/react-bits/    # componentes do React Bits (fonte do registro, com pequenas adaptações)
  scripts/animacoes.js      # animações GSAP de scroll
  pages/index.astro         # todas as seções da landing page
  assets/fotos/             # fotos reais do estúdio
.github/workflows/deploy.yml   # build e publicação no GitHub Pages
PRODUCT.md / DESIGN.md      # verdade do produto e sistema visual
```

## Rodar localmente

```bash
npm install
npm run dev       # http://localhost:4321/britol-lp/
npm run build     # gera dist/
npm run preview   # serve o dist/
```

## Autor

Gustavo de Moura Brito ([@GustavoBrito446](https://github.com/GustavoBrito446)), estudante de Análise e Desenvolvimento de Sistemas na FIAP e dono da Britol Protection.
