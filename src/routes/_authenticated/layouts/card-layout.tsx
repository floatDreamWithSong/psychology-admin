import { cn } from "@/lib/utils";

export const CardHeaderTitle = ({
	variant = "primary",
	children,
	className,
	...props
}: {
	variant?: "primary" | "secondary" | "light";
} & React.ComponentProps<"div">) => {
	return (
		<div
			{...props}
			className={cn(
				variant === "primary" && "text-2xl font-medium",
				variant === "secondary" && "text-base font-normal ",
				variant === "light" && "text-lg font-normal text-[#4F4F4F]",
				className,
			)}
		>
			{children}
		</div>
	);
};

export const CardLayout = ({
	className,
	children,
	...props
}: {
	header?: React.ReactNode;
} & React.ComponentProps<"div">) => {
	return (
		<div {...props} className={cn(["bg-card w-full h-fit", className])}>
			{children}
		</div>
	);
};
