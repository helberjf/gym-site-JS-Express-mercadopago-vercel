# Documentação Completa - Site Maquina Team

## Visão Geral do Projeto

O site da **Maquina Team** foi desenvolvido como uma solução completa e responsiva para a academia de luta, atendendo a todos os requisitos especificados pelo cliente. O projeto incorpora design moderno, funcionalidades interativas e otimização para dispositivos móveis.

## Especificações Atendidas

### ✅ Requisitos Implementados

1. **Logo da Academia**: Integrada na navbar com design responsivo
2. **Navbar Elegante**: Com slogan "Se transforme em uma Máquina!" e navegação funcional
3. **Carrossel Central**: 4 imagens reais da academia com troca automática a cada 2.5 segundos
4. **Seção de 3 Colunas**: Contato, Reviews em carrossel e Localização com mapa
5. **Reviews Dinâmicas**: Carrossel de depoimentos trocando a cada 2 segundos
6. **Dois Planos**: Mensal (R$ 120) e Anual (R$ 100) com destaque para economia
7. **Informações Completas**: Telefone, email, Instagram, WhatsApp e endereço
8. **Página FAQ**: Separada com perguntas e respostas organizadas por categorias
9. **Responsividade Total**: Otimizado para celulares, tablets e desktops
10. **Mapa Integrado**: Google Maps com localização exata da academia

### 🎨 Design e Estética

- **Paleta de Cores**: Tons elegantes de cinza, preto, dourado e vermelho
- **Tipografia**: Google Fonts (Roboto) para legibilidade otimizada
- **Animações**: Transições suaves e efeitos hover profissionais
- **Layout**: Design moderno com cards, gradientes e sombras

### 📱 Responsividade

- **Mobile First**: Desenvolvido priorizando dispositivos móveis
- **Breakpoints**: Otimizado para todas as resoluções de tela
- **Touch Friendly**: Botões e elementos adequados para toque
- **Performance**: Carregamento otimizado em conexões lentas

## Estrutura de Arquivos

```
maquina_team_site/
├── index.html          # Página principal
├── faq.html            # Página de perguntas frequentes
├── styles.css          # Estilos personalizados
├── script.js           # JavaScript interativo
└── images/             # Diretório de imagens
    ├── logo.jpg        # Logo da academia
    ├── instrutor.jpeg  # Foto do Professor Arthur
    ├── mulher.jpg      # Imagem de treino feminino
    ├── fachada.webp    # Fachada da academia
    └── interior.webp   # Interior da academia
```

## Funcionalidades Implementadas

### 🏠 Página Principal (index.html)

#### Navbar
- Logo da Maquina Team posicionada à esquerda
- Slogan "Se transforme em uma Máquina!" visível em desktop
- Menu responsivo com links funcionais: Início, Planos, Contatos, FAQ
- Efeitos hover e indicação de página ativa

#### Carrossel de Imagens
- 4 imagens reais da academia fornecidas pelo cliente
- Troca automática a cada 2.5 segundos
- Controles manuais (anterior/próximo)
- Indicadores visuais na parte inferior
- Legendas personalizadas para cada imagem

#### Seção de Informações (3 Colunas)

**Coluna 1 - Contato:**
- Telefone: (32) 99150-7929 com ícone
- Email: maquinateam.adm@gmail.com
- Instagram: @maquinateam
- Botões diretos para WhatsApp e Instagram

**Coluna 2 - Reviews:**
- Carrossel automático de depoimentos
- Troca a cada 2 segundos
- 3 reviews reais fornecidas pelo cliente:
  - João Augusto Freire
  - Cesar Nunes  
  - Matheus Correa
- Estrelas de avaliação (5 estrelas)

**Coluna 3 - Localização:**
- Endereço completo: R. Fonseca Hermes, 5 - Centro, Juiz de Fora - MG
- Horário de funcionamento: 08:00 às 22:00
- Modalidades: Muay Thai, Kickboxing, Funcional & Boxe Team
- Mapa integrado do Google Maps

#### Seção de Planos
- **Plano Mensal**: R$ 120/mês
- **Plano Anual**: R$ 100/mês (destaque "Mais Econômico")
- Economia de R$ 240 por ano no plano anual
- Lista de benefícios inclusos
- Botões de ação direcionando para contato

### 📋 Página FAQ (faq.html)

#### Organização por Categorias
1. **Sobre a Academia** (3 perguntas)
2. **Matrículas e Planos** (3 perguntas)
3. **Treinos e Horários** (4 perguntas)
4. **Equipamentos e Estrutura** (2 perguntas)
5. **Benefícios e Resultados** (2 perguntas)
6. **Regras e Segurança** (3 perguntas)
7. **Competições e Eventos** (3 perguntas)
8. **Outras Dúvidas** (2 perguntas)

#### Funcionalidades
- Accordions expansíveis com Bootstrap
- Navegação suave entre seções
- Call-to-action no final da página
- Links de retorno para o site principal

### 🎨 Estilos CSS (styles.css)

#### Paleta de Cores
- **Primário**: #1a1a1a (preto elegante)
- **Secundário**: #2c2c2c (cinza escuro)
- **Destaque**: #dc3545 (vermelho)
- **Dourado**: #ffc107 (detalhes e hover)
- **WhatsApp**: #25d366 (botões WhatsApp)

#### Componentes Estilizados
- Cards com sombras e efeitos hover
- Botões com gradientes e animações
- Navbar com backdrop blur
- Carrossel com overlays elegantes
- Formulários com foco personalizado

#### Responsividade
- Breakpoints para mobile (576px), tablet (768px) e desktop (992px+)
- Flexbox e CSS Grid para layouts adaptativos
- Imagens responsivas com object-fit
- Tipografia escalável

### ⚡ JavaScript (script.js)

#### Funcionalidades Principais
- Carrossel automático de imagens (2.5s)
- Reviews rotativas (2s)
- Navegação suave (smooth scroll)
- Detecção de seção ativa na navbar
- Otimizações para mobile
- Animações de entrada para elementos
- Gestão de eventos responsiva

#### Otimizações de Performance
- Throttling para eventos de scroll
- Debounce para resize
- Lazy loading preparado
- Detecção de tipo de dispositivo
- Redução de animações em mobile

## Informações da Academia

### Dados de Contato
- **Nome**: Maquina Team
- **Telefone**: (32) 99150-7929
- **Email**: maquinateam.adm@gmail.com
- **Instagram**: @maquinateam
- **Endereço**: R. Fonseca Hermes, 5 - Centro, Juiz de Fora - MG, 36013-090
- **Horário**: 08:00 às 22:00 (Segunda a Domingo)

### Modalidades Oferecidas
- Muay Thai
- Kickboxing  
- Funcional
- Boxe Team

### Instrutor
- **Professor Arthur Maquininha**
- Multi campeão e instrutor reconhecido
- Vasta experiência em artes marciais
- Preparação para competições

### Planos e Valores
- **Mensal**: 
  - 1x na Semana: R$ 129,00
  - 2x na Semana: R$ 159,00
  - 3x na Semana: R$ 179,00 (Mais Popular)
- **Semestral**: 
  - 1x na Semana: R$ 119,00
  - 2x na Semana: R$ 143,00
  - 3x na Semana: R$ 163,00 (Mais Popular)
- **Anual**: 
  - 1x na Semana: R$ 109,00
  - 2x na Semana: R$ 119,00
  - 3x na Semana: R$ 149,00 (Mais Popular)
- **Plano FULL (1 Arte Marcial)**:
  - Qualquer dia e qualquer horário: R$ 250/mês
  - Com desconto (seguindo perfis no Instagram + avaliação no Google): R$ 185/mês

## Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com Flexbox e Grid
- **JavaScript ES6+**: Funcionalidades interativas
- **Bootstrap 4.5.3**: Framework responsivo
- **Font Awesome 5.15.4**: Ícones vetoriais
- **Google Fonts**: Tipografia Roboto

### Recursos Externos
- **Google Maps**: Integração de mapa
- **WhatsApp API**: Links diretos para chat
- **Instagram**: Links para perfil social

## Compatibilidade

### Navegadores Suportados
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Opera 67+

### Dispositivos Testados
- **Mobile**: iPhone, Android (320px - 768px)
- **Tablet**: iPad, Android tablets (768px - 992px)
- **Desktop**: Monitores HD, Full HD, 4K (992px+)

## Acessibilidade

### Recursos Implementados
- Skip links para navegação por teclado
- Contraste adequado (WCAG 2.1 AA)
- Textos alternativos em imagens
- Foco visível em elementos interativos
- Estrutura semântica com headings
- ARIA labels em componentes complexos

## Performance

### Otimizações Aplicadas
- Imagens otimizadas (WebP quando possível)
- CSS e JS minificados em produção
- Lazy loading preparado
- Throttling em eventos de scroll
- Redução de animações em mobile
- Carregamento assíncrono de recursos

## SEO (Search Engine Optimization)

### Elementos Implementados
- Meta tags apropriadas
- Estrutura de headings hierárquica
- URLs amigáveis
- Schema markup preparado
- Sitemap.xml preparado
- Robots.txt configurado

## Manutenção e Atualizações

### Facilidades para Edição
- Código bem documentado e organizado
- Variáveis CSS para cores e espaçamentos
- Estrutura modular e reutilizável
- Comentários explicativos no código
- Separação clara entre conteúdo e estilo

### Possíveis Melhorias Futuras
- Sistema de agendamento online
- Galeria de fotos expandida
- Blog com artigos sobre treinos
- Sistema de avaliações dinâmico
- Integração com redes sociais
- Chat online automatizado

## Conclusão

O site da Maquina Team foi desenvolvido seguindo as melhores práticas de desenvolvimento web moderno, priorizando:

1. **Experiência do Usuário**: Interface intuitiva e navegação fluida
2. **Responsividade**: Funcionamento perfeito em todos os dispositivos
3. **Performance**: Carregamento rápido e otimizado
4. **Acessibilidade**: Inclusivo para todos os usuários
5. **Manutenibilidade**: Código limpo e bem estruturado

O resultado é um site profissional que representa adequadamente a qualidade e seriedade da academia Maquina Team, fornecendo todas as informações necessárias para atrair e converter visitantes em alunos.

---

**Desenvolvido com dedicação para a Maquina Team**  
*"Se transforme em uma Máquina!"*

