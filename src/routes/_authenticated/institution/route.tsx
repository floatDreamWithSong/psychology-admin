import { createRoute } from "@tanstack/react-router";
import { authenticatedRoute } from "../route";
import { institutionPanelRoute } from "./panel/route";
import { institutionWarningRoute } from "./warning/route";

export const institutionRoute = createRoute({
	getParentRoute: () => authenticatedRoute,
	id: "institution",
});

export const institutionRouteTree = institutionRoute.addChildren([
	institutionPanelRoute,
	institutionWarningRoute,
]);
