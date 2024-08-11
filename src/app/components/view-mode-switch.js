'use client'
import { Switch } from "@/components/ui/switch";
import { useContext } from "react";
import { ViewModeContext } from "./context-switch";

export function ViewModeSwitch() {
  const {viewMode, setViewMode} = useContext(ViewModeContext)

  function toggleMode() {
    setViewMode(viewMode === "user" ? "company" : "user")
  }
  
  return (
    <div className="flex items-center space-x-2 ml-6 fixed bottom-4 right-5 text-black bg-white border rounded p-4">
      <p>Modo Usuario</p>
      <Switch onClick={toggleMode} />
      <p>Modo Empresa</p>
    </div>
  );
}

