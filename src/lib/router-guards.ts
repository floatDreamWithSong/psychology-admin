import type { env } from "@/env";
import { useUser } from "@/hooks/useUser";
import { redirect } from "@tanstack/react-router";
import { tokenStore } from "./utils";

const requireRole = (userType: typeof env.VITE_APP_TYPE) => {
  const user = useUser();
  console.log(user.userType, userType);
  if (user.userType !== userType) {
    throw redirect({
      to: "/403",
    });
  }
};

const requireAuth = () => {
  const token = tokenStore.get();
  const isAuthenticated = import.meta.env.DEV || Boolean(token);
  if (!isAuthenticated) {
    throw redirect({
      to: "/auth",
    });
  }
}

const requireAdmin = () => requireRole("admin");

const requireInstitution = () => requireRole("institution");

const routerGuards = {
  requireRole,
  requireAuth,
  requireAdmin,
  requireInstitution,
};

export default routerGuards;