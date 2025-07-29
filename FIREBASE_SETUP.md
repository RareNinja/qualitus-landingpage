# Firebase Setup - QualitUp Landing Page

## Instalação das Dependências

Execute o seguinte comando para instalar as dependências do Firebase:

```bash
npm install firebase
# ou
pnpm add firebase
# ou
yarn add firebase
```

## Estrutura Implementada

### 1. Configuração Principal (`src/lib/firebase.ts`)

-   Configuração do Firebase com suas credenciais
-   Inicialização do Analytics (apenas no lado cliente)
-   Inicialização do Firestore

### 2. Contexto do Firebase (`src/contexts/FirebaseContext.tsx`)

-   Provider para toda a aplicação
-   Hook personalizado `useFirebaseContext`
-   Gerenciamento de estado de autenticação

### 3. Hook Personalizado (`src/hooks/useFirebase.ts`)

-   Hook alternativo para uso do Firebase
-   Inclui autenticação e Firestore

### 4. Utilitários do Firestore (`src/lib/firestore.ts`)

-   Funções para CRUD operations
-   Consultas com filtros
-   Tipagem TypeScript

### 5. Componente de Exemplo (`src/components/FirebaseExample.tsx`)

-   Demonstração de autenticação
-   Login/Registro de usuários
-   Interface de exemplo

## Como Usar

### 1. Usando o Contexto (Recomendado)

```tsx
import { useFirebaseContext } from "@/contexts/FirebaseContext";

function MyComponent() {
    const { user, auth, db, loading } = useFirebaseContext();

    if (loading) return <div>Carregando...</div>;

    return <div>{user ? <p>Bem-vindo, {user.email}!</p> : <p>Faça login para continuar</p>}</div>;
}
```

### 2. Usando o Hook Personalizado

```tsx
import { useFirebase } from "@/hooks/useFirebase";

function MyComponent() {
    const { user, auth, db } = useFirebase();

    // Seu código aqui
}
```

### 3. Operações com Firestore

```tsx
import { addDocument, getDocuments, updateDocument } from "@/lib/firestore";

// Adicionar documento
const addUser = async () => {
    const userId = await addDocument("users", {
        name: "João",
        email: "joao@example.com",
        createdAt: new Date(),
    });
};

// Buscar documentos
const getUsers = async () => {
    const users = await getDocuments("users");
    console.log(users);
};

// Atualizar documento
const updateUser = async (userId: string) => {
    const success = await updateDocument("users", userId, {
        name: "João Silva",
    });
};
```

### 4. Autenticação

```tsx
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useFirebaseContext } from "@/contexts/FirebaseContext";

function AuthComponent() {
    const { auth } = useFirebaseContext();

    const login = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Erro no login:", error);
        }
    };

    const register = async (email: string, password: string) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Erro no registro:", error);
        }
    };
}
```

## Configuração do Firebase Console

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Selecione seu projeto `qualitup-c3932`
3. Configure os serviços que deseja usar:
    - **Authentication**: Para autenticação de usuários
    - **Firestore Database**: Para banco de dados
    - **Analytics**: Para análises (já configurado)
    - **Storage**: Para armazenamento de arquivos

## Regras de Segurança do Firestore

Configure as regras de segurança no Firebase Console:

```javascript
// Exemplo básico de regras
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir leitura/escrita apenas para usuários autenticados
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## Variáveis de Ambiente (Opcional)

Para maior segurança, você pode mover as credenciais para variáveis de ambiente:

1. Crie um arquivo `.env.local`:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAvm4PvM-ofRo5klkgno0DGkvPiAzpSbYw
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=qualitup-c3932.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=qualitup-c3932
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=qualitup-c3932.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=50403888499
NEXT_PUBLIC_FIREBASE_APP_ID=1:50403888499:web:1102f48331535eebbf8906
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-NTGYWZMDT8
```

2. Atualize `src/lib/firebase.ts`:

```typescript
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
```

## Próximos Passos

1. Instale as dependências do Firebase
2. Configure os serviços desejados no Firebase Console
3. Teste a autenticação usando o componente `FirebaseExample`
4. Implemente as funcionalidades específicas do seu projeto
5. Configure as regras de segurança do Firestore

## Suporte

Para dúvidas sobre o Firebase, consulte a [documentação oficial](https://firebase.google.com/docs).
