import { createRoute } from "@tanstack/react-router";
import { authenticatedRoute } from "../route";
import { adminPanelRoute } from "./panel/route";
import { adminSettingRoute } from "./setting/route";
import { adminUserRoute } from "./user/route";
import { adminRecordRoute } from "./record/route";
import { adminWarningRoute } from "./warning/route";

export const adminRoute = createRoute({
  getParentRoute: () => authenticatedRoute,
  id: "admin",
});

export const adminRouteTree = adminRoute.addChildren([
  adminPanelRoute,
  adminSettingRoute,
  adminUserRoute,
  adminRecordRoute,
  adminWarningRoute,
]);