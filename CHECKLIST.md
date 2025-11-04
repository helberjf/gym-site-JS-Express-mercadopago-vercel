# ✅ Checklist para Deploy no Vercel

Use este checklist antes de fazer o deploy:

## 📋 Pré-Deploy

### Arquivos e Configuração
- [x] `.gitignore` configurado (ignora node_modules, .env, etc.)
- [x] `vercel.json` configurado corretamente
- [x] `package.json` na raiz com scripts úteis
- [x] `api/package.json` com dependências corretas
- [x] `README.md` com documentação
- [x] `DEPLOY.md` com instruções de deploy

### Estrutura de Pastas
- [x] `api/` - Contém a API serverless
- [x] `front-end/` - Contém o front-end estático
- [x] Arquivos de configuração na raiz

### Código
- [x] API detecta ambiente (Vercel vs Local)
- [x] Front-end detecta ambiente e ajusta URLs
- [x] Handler do Vercel configurado corretamente
- [x] CORS configurado na API 

## 🚀 Deploy

### GitHub
- [ ] Repositório criado no GitHub
- [ ] Código commitado e enviado para GitHub
- [ ] Branch `main` ou `master` configurada

### Vercel
- [ ] Conta criada no Vercel
- [ ] Projeto importado do GitHub
- [ ] Variável `MP_ACCESS_TOKEN` configurada
- [ ] Deploy realizado com sucesso

### Pós-Deploy
- [ ] Site acessível no domínio do Vercel
- [ ] API `/api/ping` retorna "pong"
- [ ] Botões de pagamento funcionando
- [ ] Checkout do Mercado Pago aparece corretamente

## 🔧 Configurações Opcionais

- [ ] URLs de redirecionamento configuradas
- [ ] Webhook URL configurada
- [ ] Domínio customizado configurado (se necessário)

## 📝 Notas

- ⚠️ **NUNCA** commite arquivos `.env` com credenciais
- ✅ Use sempre variáveis de ambiente no Vercel
- ✅ Teste localmente antes de fazer deploy
- ✅ Monitore os logs no Vercel Dashboard

