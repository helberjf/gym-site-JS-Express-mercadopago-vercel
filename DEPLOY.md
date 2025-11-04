# 🚀 Guia de Deploy no Vercel

## Passo a Passo Completo

### 1. Preparar o Repositório GitHub

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Criar commit inicial
git commit -m "Setup inicial para deploy no Vercel"

# Criar repositório no GitHub e conectar
# Vá em github.com e crie um novo repositório
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git branch -M main
git push -u origin main
```

### 2. Configurar no Vercel

1. **Acesse [vercel.com](https://vercel.com)** e faça login com GitHub

2. **Clique em "New Project"**

3. **Importe o repositório** `site-gym`

4. **Configure as variáveis de ambiente**:
   - Vá em **Settings → Environment Variables**
   - Adicione:
     ```
     MP_ACCESS_TOKEN = seu_access_token_do_mercadopago
     ```

5. **Clique em "Deploy"**

### 3. Configurar Variáveis de Ambiente no Vercel

Após o primeiro deploy, configure as variáveis:

1. Vá em **Project Settings → Environment Variables**
2. Adicione as seguintes variáveis:

| Nome | Valor | Ambiente |
|------|-------|----------|
| `MP_ACCESS_TOKEN` | Seu token do Mercado Pago | Production, Preview, Development |
| `MP_INTEGRATOR_ID` | `dev_24c65fb163bf11ea96500242ac130004` (opcional - já configurado no código) | Production, Preview, Development |

### 4. URLs de Redirecionamento (Opcional)

Se quiser personalizar as URLs de redirecionamento após pagamento:

```
MP_BACK_URL_SUCCESS = https://seu-dominio.vercel.app/front-end/success.html
MP_BACK_URL_FAILURE = https://seu-dominio.vercel.app/front-end/failure.html
MP_BACK_URL_PENDING = https://seu-dominio.vercel.app/front-end/pending.html
```

### 5. Verificar o Deploy

Após o deploy, acesse:
- Site: `https://seu-projeto.vercel.app`
- API: `https://seu-projeto.vercel.app/api/ping` (deve retornar "pong")

## 🔍 Verificação Pós-Deploy

### Testar a API

```bash
# Testar health check
curl https://seu-projeto.vercel.app/api/ping

# Testar criação de preferência
curl -X POST https://seu-projeto.vercel.app/api/create-preference \
  -H "Content-Type: application/json" \
  -d '{"product_id":"plan_1","title":"Plano 1"}'
```

### Testar o Front-end

1. Acesse o site no Vercel
2. Clique em um botão "Contratar Plano"
3. Verifique se o checkout do Mercado Pago aparece

## 📝 Notas Importantes

- **Não commit arquivos `.env`** - eles estão no `.gitignore`
- **Use variáveis de ambiente no Vercel** para credenciais
- **O deploy é automático** a cada push no GitHub
- **O Vercel detecta automaticamente** o `vercel.json`

## 🐛 Troubleshooting

### Erro 405 na API
- Verifique se a variável `MP_ACCESS_TOKEN` está configurada
- Verifique os logs no Vercel Dashboard

### Front-end não encontra a API
- Verifique se o `vercel.json` está correto
- Verifique se a rota `/api/*` está funcionando

### Erro no build
- Verifique se todas as dependências estão em `api/package.json`
- Verifique os logs de build no Vercel

## 📞 Suporte

Se tiver problemas, verifique:
1. Logs no Vercel Dashboard
2. Console do navegador (F12)
3. Network tab para ver requisições

