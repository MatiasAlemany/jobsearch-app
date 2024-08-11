"use client";
import { createContext, useContext, useState } from "react";

export const ViewModeContext = createContext();

export function MyContextSwitchProvider({ children}) {
  const [viewMode, setViewMode] = useState("user");
  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
}

export function useSwitchContext() {
  const context = useContext(ViewModeContext);
  console.log("Contexto", context);
  
  // Validación para asegurarse de que el hook se use dentro del proveedor
  if (context === null) {
    throw new Error("useViewMode debe ser usado dentro de un ViewModeProvider");
  }
  return context;
}
