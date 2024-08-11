"use client";

import { useSession } from "next-auth/react";
import { NavLink } from "./navlink";

export function SessionData() {
  const { data: session } = useSession();

  return session ? (
    <NavLink href="/api/auth/signout">Cerrar Sesión</NavLink>
  ) : (
    <NavLink href="/api/auth/signin">Iniciar Sesión</NavLink>
  );
}
