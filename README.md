# 🧩 Hackathon Clinic Plus - MFE (Micro Frontend)

Este é um dos MFEs (Micro Frontends) do Hackathon **Clinic Plus**, desenvolvido em **Angular 19** com **Module Federation nativa** e **esbuild**.

Ele será carregado dinamicamente pela aplicação principal: [`hackathon-clinic-plus-shell`](https://github.com/seu-usuario/hackathon-clinic-plus-shell)

## 📦 Tecnologias Utilizadas

- Angular 19
- Native Module Federation via `@angular/core/federation`
- Esbuild
- Standalone Components
- Lazy Loading via Remote Entry

## 📁 Organização

```
hackathon-clinic-plus-mfe/
├── src/
│   ├── app/
│   │   └── profile/
│   │       └── profile.component.ts
├── federation.config.ts
├── angular.json
```

## 🚀 Como Rodar

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar o MFE (porta 4201)

```bash
ng serve --port 4201
```

---

## 🧩 Este MFE expõe:

```ts
'./ProfileComponent': './src/app/profile/profile.component.ts'
```

Ele pode ser importado dinamicamente pela Shell da seguinte forma:

```ts
loadComponent: () => import('mfeProfile/ProfileComponent').then(m => m.ProfileComponent)
```

---

## 🛠️ Como criar e expor um novo componente

1. Crie um novo componente standalone
2. Exponha em `federation.config.ts`
3. Atualize a rota na aplicação Shell

---

## 🤝 Contribuindo

Sinta-se à vontade para:
- Criar novos MFEs
- Customizar componentes
- Propor melhorias
