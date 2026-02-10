import { createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "@/routes/route";
import { tokenStore } from "@/lib/utils";
import DashboardLayout from "./layouts/dashboard";
import { SidebarLayout } from "./layouts/sidebar";
import { env } from "@/env";
import Logo from "@/components/icons/logo";
import { AvatarIcon, PanelIcon, RecordIcon, SetttingIcon, PanelUserIcon, SidebarAlertIcon } from "@/components/icons";
import { adminRouteTree } from "./admin/route";

// 创建认证布局路由
export const authenticatedRoute = createRoute({
	getParentRoute: () => rootRoute,
	id: "_authenticated",
	beforeLoad: () => {
		const token = tokenStore.get();
		const isAuthenticated = import.meta.env.DEV || Boolean(token);

		if (!isAuthenticated) {
			throw redirect({
				to: "/auth",
			});
		}
	},
	component: () => {
		return (
			<DashboardLayout
				sidebar={
					<SidebarLayout
						head={
							<div className="flex flex-col items-center">
								<Logo />
								<h1 className="text-xl mt-3">{env.VITE_APP_TITLE}</h1>
							</div>
						}
						links={[
							{
								icon: PanelIcon,
								label: "数据看板",
								href: "/",
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
						]}
						footer={
							<div>
								<AvatarIcon />
							</div>
						}
					/>
				}
			/>
		);
	},
});

export const authenticatedRouteTree = authenticatedRoute.addChildren([adminRouteTree]);
