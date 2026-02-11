import { createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "@/routes/route";
import { tokenStore } from "@/lib/utils";
import DashboardLayout from "./layouts/dashboard";
import { SidebarLayout } from "./layouts/sidebar";
import { env } from "@/env";
import Logo from "@/components/icons/logo";
import {
	AvatarIcon,
	PanelIcon,
	RecordIcon,
	SetttingIcon,
	PanelUserIcon,
	SidebarAlertIcon,
} from "@/components/icons";
import { adminRouteTree } from "./admin/route";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { PaletteIcon } from "lucide-react";
import { institutionRouteTree } from "./institution/route";

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
		const { setTheme } = useTheme();
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
								<DropdownMenu dir="ltr">
									<DropdownMenuTrigger>
										<AvatarIcon />
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuItem
											onClick={() => {
												setTheme((cur) => {
													if (cur === "cool") return "warm";
													return "cool";
												});
											}}
										>
											<PaletteIcon size={16} className="mr-2" />
											切换主题
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						}
					/>
				}
			/>
		);
	},
});

export const authenticatedRouteTree =
  env.VITE_APP_TYPE === 'institution'
    ? authenticatedRoute.addChildren([institutionRouteTree])
    : authenticatedRoute.addChildren([adminRouteTree])