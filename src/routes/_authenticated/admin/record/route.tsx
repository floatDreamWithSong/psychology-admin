import { createRoute } from "@tanstack/react-router";
import { authenticatedRoute } from "@/routes/_authenticated/route";

export const adminRecordRoute = createRoute({
  getParentRoute: () => authenticatedRoute,
  path: "/record",
});
