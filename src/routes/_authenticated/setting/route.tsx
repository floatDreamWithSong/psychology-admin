import { createRoute } from "@tanstack/react-router";
import { authenticatedRoute } from "../route";

export const settingRoute = createRoute({
	getParentRoute: () => authenticatedRoute,
	path: "setting",
});
