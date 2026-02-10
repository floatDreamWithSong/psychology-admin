import { createRoute } from "@tanstack/react-router";
import { authenticatedRoute } from "@/routes/_authenticated/route";

export const adminSettingRoute = createRoute({
	getParentRoute: () => authenticatedRoute,
	path: "/setting",
});
