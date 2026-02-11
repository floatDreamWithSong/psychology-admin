import { createRoute } from "@tanstack/react-router";
import { authenticatedRoute } from "@/routes/_authenticated/route";
import { CardHeaderTitle, CardLayout } from "@layouts/card-layout";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@components/ui/input-group";
import DepartmentTable from "./components/department-table";
import { SearchIcon } from "lucide-react";
import { IndexOverview } from "../../../../components/common/index-overview";
import PanelCharts from "@components/common/charts";
import type { ChartConfig } from "@components/ui/chart";
import {
	ClockIcon,
	HomeIcon,
	MessageIcon,
	PanelUserIcon,
	PanelWarningIcon,
} from "@/components/icons";

export const adminPanelRoute = createRoute({
	getParentRoute: () => authenticatedRoute,
	path: "/",
	component: () => {
		const emotionData = [
			{ name: "危险", value: 8, fill: "var(--pie-1)" },
			{ name: "负面", value: 6.7, fill: "var(--pie-2)" },
			{ name: "中性", value: 55, fill: "var(--pie-3)" },
			{ name: "正向", value: 30.3, fill: "var(--pie-4)" },
		];

		const emotionConfig = emotionData.reduce((acc: ChartConfig, item) => {
			acc[item.name] = { label: item.name, color: item.fill };
			return acc;
		}, {});
		return (
			<CardLayout variant="layout">
				<div className="flex items-center justify-between">
					<CardHeaderTitle>数据看板</CardHeaderTitle>
					<InputGroup className="w-60">
						<InputGroupInput placeholder="搜索关键数据" />
						<InputGroupAddon align={"inline-end"}>
							<SearchIcon />
						</InputGroupAddon>
					</InputGroup>
				</div>
				<div className="mt-12 space-y-6.25 pb-9">
					<IndexOverview
						title="指标总览"
						datas={[
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
								icon: <PanelUserIcon />,
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
								icon: <PanelWarningIcon />,
							},
						]}
					/>
					<DepartmentTable />
					<div className="flex flex-col gap-5">
						<PanelCharts.ActivityChart
							type="line"
							title="近一周用户活跃趋势"
							config={{
								value: {
									label: "活跃用户",
								},
							}}
							datas={[
								{ day: "Mon", date: 10, value: 320 },
								{ day: "Tues", date: 11, value: 280 },
								{ day: "Wed", date: 12, value: 350 },
								{ day: "Thurs", date: 13, value: 500 },
								{ day: "Fri", date: 14, value: 420 },
								{ day: "Sat", date: 15, value: 180 },
								{ day: "Sun", date: 16, value: 220 },
							]}
						/>
						<div className="flex gap-5 flex-wrap">
							<PanelCharts.CommonPieChart
								title="情绪分布图"
								datas={emotionData}
								config={emotionConfig}
							/>
							<PanelCharts.RiskLevelChart
								title="风险等级分布图"
								datas={[
									{ level: "危险", female: 80, male: 60 },
									{ level: "负面", female: 150, male: 120 },
									{ level: "中性", female: 300, male: 280 },
									{ level: "正向", female: 500, male: 450 },
								]}
								config={{
									female: { label: "女性", color: "var(--gradient-2)" },
									male: { label: "男性", color: "var(--gradient-1)" },
								}}
							/>
							<PanelCharts.WordCloud
								datas={[
									{ text: "焦虑", weight: 10 },
									{ text: "挫败", weight: 9 },
									{ text: "受伤", weight: 7 },
									{ text: "忧郁", weight: 7 },
									{ text: "生活", weight: 6 },
									{ text: "考试", weight: 8 },
									{ text: "自杀", weight: 5 },
									{ text: "孤单", weight: 5 },
									{ text: "伤心", weight: 5 },
									{ text: "责骂", weight: 6 },
									{ text: "忽视", weight: 6 },
									{ text: "霸凌", weight: 5 },
									{ text: "冷落", weight: 4 },
									{ text: "怒放", weight: 4 },
									{ text: "落落", weight: 4 },
								]}
								title="关键词云图"
							/>
						</div>
					</div>
				</div>
			</CardLayout>
		);
	},
});
