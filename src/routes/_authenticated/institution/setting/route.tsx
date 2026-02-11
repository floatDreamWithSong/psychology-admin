import { createRoute } from "@tanstack/react-router";
import { authenticatedRoute } from "@/routes/_authenticated/route";

export const institutionSettingRoute = createRoute({
	getParentRoute: () => authenticatedRoute,
	path: "/setting",
});
