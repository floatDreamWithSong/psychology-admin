import { createRoute } from "@tanstack/react-router";
import { authenticatedRoute } from "@/routes/_authenticated/route";

export const adminWarningRoute = createRoute({
	getParentRoute: () => authenticatedRoute,
	path: "/warning",
});
