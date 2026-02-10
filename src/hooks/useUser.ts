import { env } from "@/env";

export const useUser = () => {
	const userType = env.VITE_APP_TYPE;
	return {
		userType,
	};
};
