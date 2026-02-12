import { createRoute, Outlet } from "@tanstack/react-router";
import { authenticatedRoute } from "../route";
import { PanelDetailRouteTree } from "./_admin/detail/route";
import { useUser } from "@/hooks/useUser";
import AdminPanel from "./_admin/admin-panel";
import InsititutionPanel from "./_insititution/insititution-panel";

export const panelRoute = createRoute({
	getParentRoute: () => authenticatedRoute,
	path: "/panel",
	component: () => <Outlet />,
});

const indexRoute = createRoute({
	getParentRoute: () => panelRoute,
	path: "/",
	component: () => {
		const user = useUser();
		if (user.userType === "admin") {
			return <AdminPanel />;
		} else {
			return <InsititutionPanel />;
		}
	},
});

export const panleRouteTree = panelRoute.addChildren([
	indexRoute,
	PanelDetailRouteTree,
]);
