import {
	CardHeaderTitle,
	CardLayout,
} from "@/routes/_authenticated/layouts/card-layout";
import UserIcon from "@/components/icons/panel/user-icon";
import { ClockIcon, HomeIcon, MessageIcon } from "@/components/icons";
import WarningIcon from "@/components/icons/panel/warning-icon";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ThemeProps } from "@/lib/theme";

interface IndexCardProps {
	title: string;
	value: string;
	percentage: number;
	props?: ThemeProps;
	icon: React.ReactNode;
}
const IndexOverview = () => {
	const indexCards: IndexCardProps[] = [
		{
			title: "总注册单位",
			value: "1000家",
			percentage: 10,
			icon: <HomeIcon />,
		},
		{
			title: "总用户数",
			value: "1000人",
			percentage: 10,
			icon: <UserIcon />,
		},
		{
			title: "总对话数",
			value: "21w次",
			percentage: 10,
			icon: <MessageIcon />,
		},
		{
			title: "平均单次对话时长",
			value: "55min",
			percentage: -10,
			icon: <ClockIcon />,
		},
		{
			title: "当前高风险用户数",
			value: "1000人",
			percentage: 10,
			props: {
				"data-theme": "warm",
			},
			icon: <WarningIcon />,
		},
	];
	return (
		<CardLayout className="px-7.5 py-3.75 round-shadow">
			<CardHeaderTitle variant="light" className="pb-2.5">
				指标总览
			</CardHeaderTitle>
			<div className="flex gap-5 flex-wrap">
				{indexCards.map(({ icon, percentage, title, value, props }) => (
					<CardLayout
						className={cn("px-7 py-5 squre-border flex min-w-78 w-fit")}
						key={title}
						{...props}
					>
						<div className="flex-1">
							<CardHeaderTitle variant="secondary">{title}</CardHeaderTitle>
							<div>
								<p className="text-4xl h-15 leading-15 line-height-15 font-medium">
									{value}
								</p>
								<div className="flex gap-1.5">
									<div
										className={cn(
											"flex text-white rounded-sm h-6.75 px-1 items-center",
											percentage > 0
												? "bg-linear-to-r from-gradient-1 to-gradient-2"
												: "bg-[#D8D8D8] ",
										)}
									>
										{percentage > 0 && "+"}
										{percentage}%{percentage > 0 && <ArrowUpRight size={20} />}
										{percentage < 0 && <ArrowDownRight size={20} />}
									</div>
									<span className="text-[#989898]">较上周</span>
								</div>
							</div>
						</div>
						<div
							className="size-15 flex items-center justify-center rounded-full bg-pabel-card-icon-bg"
							style={{
								boxShadow: "0px 0px 4.83607px rgba(0, 0, 0, 0.08)",
							}}
						>
							{icon}
						</div>
					</CardLayout>
				))}
			</div>
		</CardLayout>
	);
};
export default IndexOverview;
