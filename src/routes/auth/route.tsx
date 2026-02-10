import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../route";

export const authRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/auth",
	// component: lazyRouteComponent(() => import("./layouts/AuthLayout")),
});
