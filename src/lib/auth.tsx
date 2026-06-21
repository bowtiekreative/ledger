"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  user: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("ledger_user");
    if (saved) setUser(saved);
  }, []);

  const login = (email: string, password: string) => {
    // Demo auth — any password works, or check basic test credentials
    if (!email.includes("@")) return false;
    localStorage.setItem("ledger_user", email);
    setUser(email);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("ledger_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export function useRequireAuth() {
  const { user } = useAuth();
  useEffect(() => {
    if (typeof window !== "undefined" && !user) {
      window.location.href = "/login";
    }
  }, [user]);
  return user;
}
