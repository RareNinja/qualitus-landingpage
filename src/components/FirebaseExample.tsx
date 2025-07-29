"use client";

import React, { useState } from "react";
import { useFirebaseContext } from "../contexts/FirebaseContext";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

export const FirebaseExample: React.FC = () => {
    const { auth, user, loading } = useFirebaseContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
        } catch (error) {
            console.error("Auth error:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Sign out error:", error);
        }
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Firebase Auth Example</h2>

            {user ? (
                <div>
                    <p className="mb-4">Bem-vindo, {user.email}!</p>
                    <button onClick={handleSignOut} className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                        Sair
                    </button>
                </div>
            ) : (
                <form onSubmit={handleAuth} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Senha:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        {isSignUp ? "Cadastrar" : "Entrar"}
                    </button>
                    <button type="button" onClick={() => setIsSignUp(!isSignUp)} className="w-full text-blue-500 hover:text-blue-600">
                        {isSignUp ? "Já tem conta? Entre aqui" : "Não tem conta? Cadastre-se"}
                    </button>
                </form>
            )}
        </div>
    );
};
