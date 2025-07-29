"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { app, analytics } from "../lib/firebase";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

interface FirebaseContextType {
    app: any;
    analytics: any;
    auth: any;
    db: any;
    user: User | null;
    loading: boolean;
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const value = {
        app,
        analytics,
        auth: getAuth(app),
        db: getFirestore(app),
        user,
        loading,
    };

    return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>;
};

export const useFirebaseContext = () => {
    const context = useContext(FirebaseContext);
    if (context === undefined) {
        throw new Error("useFirebaseContext must be used within a FirebaseProvider");
    }
    return context;
};
