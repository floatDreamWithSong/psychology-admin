import { createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "@/routes/route";
import DashboardLayout from "./layouts/dashboard";
import { SidebarLayout } from "./layouts/sidebar";
import {
	PanelIcon,
	RecordIcon,
	SetttingIcon,
	PanelUserIcon,
	SidebarAlertIcon,
} from "@/components/icons";

import Header from "./components/header";
import Footer from "./components/footer";
import { panleRouteTree } from "./panel/route";
import { warningRoute } from "./warning/route";
import { userRoute } from "./user/route";
import { recordRoute } from "./record/route";
import { settingRoute } from "./setting/route";
import routerGuards from "@/lib/router-guards";
import { useUser } from "@/hooks/useUser";

// 创建认证布局路由
export const authenticatedRoute = createRoute({
	getParentRoute: () => rootRoute,
	id: "_authenticated",
	beforeLoad: routerGuards.requireAuth,
	component: () => {
		const user = useUser();
		return (
			<DashboardLayout
				sidebar={
					<SidebarLayout
						head={<Header />}
						links={
							user.userType === "admin"
								? [
										{
											icon: PanelIcon,
											label: "数据看板",
											href: "/panel",
										},
									]
								: [
										{
											icon: PanelIcon,
											label: "数据看板",
											href: "/panel",
										},
										{
											icon: SidebarAlertIcon,
											label: "预警管理",
											href: "/warning",
										},
										{
											icon: PanelUserIcon,
											label: "用户管理",
											href: "/user",
										},
										{
											icon: RecordIcon,
											label: "对话记录",
											href: "/record",
										},
										{
											icon: SetttingIcon,
											label: "系统设置",
											href: "/setting",
										},
									]
						}
						footer={<Footer />}
					/>
				}
			/>
		);
	},
});

const indexRoute = createRoute({
	getParentRoute: () => authenticatedRoute,
	path: "/",
	beforeLoad: () => {
		throw redirect({
			to: "/panel",
		});
	},
});

export const authenticatedRouteTree = authenticatedRoute.addChildren([
	indexRoute,
	panleRouteTree,
	warningRoute,
	userRoute,
	recordRoute,
	settingRoute,
]);
