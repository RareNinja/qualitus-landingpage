import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit,
    DocumentData,
    QueryDocumentSnapshot,
    DocumentReference,
} from "firebase/firestore";
import { db } from "./firebase";

// Tipos genéricos para operações do Firestore
export interface FirestoreDocument {
    id: string;
    [key: string]: any;
}

// Função para obter um documento específico
export const getDocument = async <T extends FirestoreDocument>(collectionName: string, documentId: string): Promise<T | null> => {
    try {
        const docRef = doc(db, collectionName, documentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() } as T;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error getting document:", error);
        return null;
    }
};

// Função para obter todos os documentos de uma coleção
export const getDocuments = async <T extends FirestoreDocument>(collectionName: string): Promise<T[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as T[];
    } catch (error) {
        console.error("Error getting documents:", error);
        return [];
    }
};

// Função para adicionar um novo documento
export const addDocument = async <T extends DocumentData>(collectionName: string, data: T): Promise<string | null> => {
    try {
        const docRef = await addDoc(collection(db, collectionName), data);
        return docRef.id;
    } catch (error) {
        console.error("Error adding document:", error);
        return null;
    }
};

// Função para atualizar um documento
export const updateDocument = async <T extends DocumentData>(collectionName: string, documentId: string, data: Partial<T>): Promise<boolean> => {
    try {
        const docRef = doc(db, collectionName, documentId);
        await updateDoc(docRef, data);
        return true;
    } catch (error) {
        console.error("Error updating document:", error);
        return false;
    }
};

// Função para deletar um documento
export const deleteDocument = async (collectionName: string, documentId: string): Promise<boolean> => {
    try {
        const docRef = doc(db, collectionName, documentId);
        await deleteDoc(docRef);
        return true;
    } catch (error) {
        console.error("Error deleting document:", error);
        return false;
    }
};

// Função para consultar documentos com filtros
export const queryDocuments = async <T extends FirestoreDocument>(
    collectionName: string,
    conditions: Array<{ field: string; operator: any; value: any }> = [],
    orderByField?: string,
    orderDirection: "asc" | "desc" = "asc",
    limitCount?: number
): Promise<T[]> => {
    try {
        let q = collection(db, collectionName);

        // Aplicar condições de filtro
        conditions.forEach((condition) => {
            q = query(q, where(condition.field, condition.operator, condition.value));
        });

        // Aplicar ordenação
        if (orderByField) {
            q = query(q, orderBy(orderByField, orderDirection));
        }

        // Aplicar limite
        if (limitCount) {
            q = query(q, limit(limitCount));
        }

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as T[];
    } catch (error) {
        console.error("Error querying documents:", error);
        return [];
    }
};
