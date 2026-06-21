"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { useAuth } from "@/lib/auth";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && !user) {
      router.replace("/login");
    }
  }, [user, router]);

  // Don't render children until auth check is done
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-dvh bg-canvas">
        <div className="w-6 h-6 border-2 border-violet-200 border-t-violet-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full bg-canvas">
      <Sidebar />
      <main className="flex-1 min-w-0 lg:ml-0">
        {children}
      </main>
    </div>
  );
}
