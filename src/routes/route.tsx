import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import TanStackQueryDevtools from "@/integrations/tanstack-query/devtools";

import type { QueryClient } from "@tanstack/react-query";
import { authenticatedRouteTree } from "./_authenticated/route";
import { authRoute } from "./auth/route";
import { ThemeProvider } from "next-themes";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const rootRoute = createRootRouteWithContext<MyRouterContext>()({
	component: () => (
		<>
			<ThemeProvider
				attribute="data-theme"
				defaultTheme="cool"
				enableSystem={false}
			>
				<Outlet />
			</ThemeProvider>
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
