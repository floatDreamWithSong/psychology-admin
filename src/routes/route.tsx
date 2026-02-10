import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import TanStackQueryDevtools from "@/integrations/tanstack-query/devtools";

import type { QueryClient } from "@tanstack/react-query";
import { authenticatedRouteTree } from "./_authenticated/route";
import { authRoute } from "./auth/route";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const rootRoute = createRootRouteWithContext<MyRouterContext>()({
	component: () => (
		<>
			<Outlet />
			<TanStackDevtools
				config={{
					position: "bottom-right",
				}}
				plugins={[
					{
						name: "Tanstack Router",
						render: <TanStackRouterDevtoolsPanel />,
					},
					TanStackQueryDevtools,
				]}
			/>
		</>
	),
});

export const rootRouteTree = rootRoute.addChildren([
	authRoute,
	authenticatedRouteTree,
]);
