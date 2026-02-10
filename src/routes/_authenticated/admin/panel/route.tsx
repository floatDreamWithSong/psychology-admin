import { createRoute } from "@tanstack/react-router";
import { authenticatedRoute } from "@/routes/_authenticated/route";
import { CardHeaderTitle, CardLayout } from "../../layouts/card-layout";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import DepartmentTable from "./components/department-table";
import { SearchIcon } from "lucide-react";
import IndexOverview from "./components/index-overview";
import PanelCharts from "./components/charts";

export const adminPanelRoute = createRoute({
	getParentRoute: () => authenticatedRoute,
	path: "/",
	component: () => {
		return (
			<CardLayout className="px-6 py-9">
				<div className="flex items-center justify-between">
					<CardHeaderTitle>数据看板</CardHeaderTitle>
					<InputGroup className="w-60">
						<InputGroupInput placeholder="搜索关键数据" />
						<InputGroupAddon align={"inline-end"}>
							<SearchIcon />
						</InputGroupAddon>
					</InputGroup>
				</div>
				<div className="mt-12">
					<IndexOverview />
					<DepartmentTable />
					<div className="mt-6.25 flex flex-col gap-5">
						<PanelCharts.WeeklyActivityChart />
						<div className="flex gap-5 flex-wrap">
							<PanelCharts.EmotionPieChart />
							<PanelCharts.RiskLevelChart />
							<PanelCharts.WordCloud />
						</div>
					</div>
				</div>
			</CardLayout>
		);
	},
});
