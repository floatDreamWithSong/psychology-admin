import { createRoute } from "@tanstack/react-router";
import { authenticatedRoute } from "@/routes/_authenticated/route";

export const adminUserRoute = createRoute({
  getParentRoute: () => authenticatedRoute,
  path: "/user",
});
