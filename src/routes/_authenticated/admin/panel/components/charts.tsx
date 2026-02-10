import {
	Area,
	AreaChart,
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	Pie,
	PieChart,
	Sector,
	XAxis,
	YAxis,
} from "recharts";
import type { PieSectorDataItem } from "recharts/types/polar/Pie";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { CardLayout } from "@/routes/_authenticated/layouts/card-layout";
import { useId, useMemo } from "react";

// ==================== 近一周用户活跃趋势 ====================

const weeklyActivityData = [
	{ day: "Mon", date: 10, value: 320 },
	{ day: "Tues", date: 11, value: 280 },
	{ day: "Wed", date: 12, value: 350 },
	{ day: "Thurs", date: 13, value: 500 },
	{ day: "Fri", date: 14, value: 420 },
	{ day: "Sat", date: 15, value: 180 },
	{ day: "Sun", date: 16, value: 220 },
];

const activityConfig = {
	value: {
		label: "活跃用户",
		color: "#8686FF",
	},
} satisfies ChartConfig;

function WeeklyActivityChart() {
	const id = useId();
	return (
		<CardLayout className="px-6 py-5 squre-border flex-1">
			<p className="text-base font-medium mb-4">近一周用户活跃趋势</p>
			<ChartContainer config={activityConfig} className="h-[200px] w-full">
				<AreaChart
					data={weeklyActivityData}
					margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
				>
					<defs>
						<linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="#8686FF" stopOpacity={0.3} />
							<stop offset="100%" stopColor="#8686FF" stopOpacity={0.02} />
						</linearGradient>
					</defs>
					<CartesianGrid
						vertical={false}
						strokeDasharray="3 3"
						stroke="#F0F0F0"
					/>
					<XAxis
						dataKey="day"
						axisLine={false}
						tickLine={false}
						tick={({ x, y, payload }) => {
							const item = weeklyActivityData.find(
								(d) => d.day === payload.value,
							);
							return (
								<g transform={`translate(${x},${y})`}>
									<text
										x={0}
										y={0}
										dy={12}
										textAnchor="middle"
										fill="#999"
										fontSize={12}
									>
										{payload.value}
									</text>
									<text
										x={0}
										y={0}
										dy={26}
										textAnchor="middle"
										fill="#999"
										fontSize={11}
									>
										{item?.date}
									</text>
								</g>
							);
						}}
						height={40}
					/>
					<YAxis
						axisLine={false}
						tickLine={false}
						tick={{ fontSize: 12, fill: "#999" }}
					/>
					<ChartTooltip content={<ChartTooltipContent />} />
					<Area
						type="monotone"
						dataKey="value"
						stroke="#8686FF"
						strokeWidth={2}
						fill={`url(#${id})`}
						dot={false}
					/>
				</AreaChart>
			</ChartContainer>
		</CardLayout>
	);
}

// ==================== 情绪分布图 ====================

const emotionData = [
	{ name: "危险", value: 8, fill: "#8686FF" },
	{ name: "负面", value: 6.7, fill: "#9E9EFF" },
	{ name: "中性", value: 55, fill: "#B6B6FF" },
	{ name: "正向", value: 30.3, fill: "#C3C3FF" },
];

const emotionConfig = emotionData.reduce((acc: ChartConfig, item) => {
	acc[item.name] = { label: item.name, color: item.fill };
	return acc;
}, {});

function EmotionPieChart() {
	return (
		<CardLayout className="px-6 py-5 squre-border flex-1 min-w-[240px]">
			<p className="text-base font-medium mb-2">情绪分布图</p>
			<div className="flex items-center gap-4">
				<div className="flex flex-col gap-2">
					{emotionData.map((item) => (
						<div key={item.name} className="flex items-center gap-2 text-xs">
							<span
								className="inline-block size-2.5 rounded-full"
								style={{ backgroundColor: item.fill }}
							/>
							<span>{item.name}</span>
						</div>
					))}
				</div>
				<ChartContainer config={emotionConfig} className="h-[180px] flex-1">
					<PieChart>
						<ChartTooltip
							content={
								<ChartTooltipContent
									formatter={(value, name) => (
										<>
											<span className="text-muted-foreground">{name}: </span>
											<span className="font-medium">人数占比{value}%</span>
										</>
									)}
								/>
							}
						/>
						<Pie
							data={emotionData}
							dataKey="value"
							nameKey="name"
							cx="50%"
							cy="50%"
							innerRadius={45}
							outerRadius={70}
							strokeWidth={2}
							stroke="#fff"
							isAnimationActive
							animationDuration={600}
							animationEasing="ease-out"
							activeShape={({
								outerRadius = 0,
								...props
							}: PieSectorDataItem) => (
								<Sector {...props} outerRadius={outerRadius + 8} />
							)}
						>
							{emotionData.map((entry) => (
								<Cell key={entry.name} fill={entry.fill} />
							))}
						</Pie>
					</PieChart>
				</ChartContainer>
			</div>
		</CardLayout>
	);
}

// ==================== 风险等级统计 ====================

const riskLevelData = [
	{ level: "危险", female: 80, male: 60 },
	{ level: "负面", female: 150, male: 120 },
	{ level: "中性", female: 300, male: 280 },
	{ level: "正向", female: 500, male: 450 },
];

const riskLevelConfig = {
	female: { label: "女性", color: "#8686FF" },
	male: { label: "男性", color: "#96C0FF" },
} satisfies ChartConfig;

function RiskLevelChart() {
	return (
		<CardLayout className="px-6 py-5 squre-border flex-1 min-w-[240px]">
			<div className="flex items-center justify-between mb-2">
				<p className="text-base font-medium">风险等级统计</p>
				<div className="flex items-center gap-3">
					{Object.entries(riskLevelConfig).map(([key, cfg]) => (
						<div key={key} className="flex items-center gap-1.5 text-xs">
							<span
								className="inline-block size-2.5 rounded-full"
								style={{ backgroundColor: cfg.color }}
							/>
							<span>{cfg.label}</span>
						</div>
					))}
				</div>
			</div>
			<ChartContainer config={riskLevelConfig} className="h-[180px] w-full">
				<BarChart
					data={riskLevelData}
					margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
				>
					<CartesianGrid
						vertical={false}
						strokeDasharray="3 3"
						stroke="#F0F0F0"
					/>
					<XAxis
						dataKey="level"
						axisLine={false}
						tickLine={false}
						tick={{ fontSize: 12, fill: "#000" }}
					/>
					<YAxis
						axisLine={false}
						tickLine={false}
						tick={{ fontSize: 12, fill: "#999" }}
					/>
					<ChartTooltip content={<ChartTooltipContent />} />
					<Bar
						dataKey="female"
						fill="#8686FF"
						radius={[3, 3, 0, 0]}
						barSize={16}
					/>
					<Bar
						dataKey="male"
						fill="#96C0FF"
						radius={[3, 3, 0, 0]}
						barSize={16}
					/>
				</BarChart>
			</ChartContainer>
		</CardLayout>
	);
}

// ==================== 风险关键词云 ====================

const wordCloudData = [
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
];

function WordCloud() {
	const words = useMemo(() => {
		const colors = [
			"#8686FF",
			"#96C0FF",
			"#B8A9FF",
			"#A0A0D0",
			"#7B7BCC",
			"#6C6CBB",
		];
		return wordCloudData.map((w, i) => ({
			...w,
			fontSize: 12 + w.weight * 2.5,
			color: colors[i % colors.length],
		}));
	}, []);

	return (
		<CardLayout className="px-6 py-5 squre-border flex-1 min-w-[240px]">
			<p className="text-base font-medium mb-2">风险关键词云</p>
			<div className="h-[180px] flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 overflow-hidden">
				{words.map((word) => (
					<span
						key={word.text}
						className="inline-block font-medium transition-opacity hover:opacity-70 cursor-default"
						style={{
							fontSize: `${word.fontSize}px`,
							color: word.color,
						}}
					>
						{word.text}
					</span>
				))}
			</div>
		</CardLayout>
	);
}

const PanelCharts = {
	WeeklyActivityChart,
	EmotionPieChart,
	RiskLevelChart,
	WordCloud,
};

export default PanelCharts;
