import { useEffect, useState } from "react";
import { app, analytics } from "../lib/firebase";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const useFirebase = () => {
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

    return {
        app,
        analytics,
        user,
        loading,
        auth: getAuth(app),
        db: getFirestore(app),
    };
};
