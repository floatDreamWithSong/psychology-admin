import { createRoute } from "@tanstack/react-router";
import { authenticatedRoute } from "@/routes/_authenticated/route";

export const institutionRecordRoute = createRoute({
	getParentRoute: () => authenticatedRoute,
	path: "/record",
});
