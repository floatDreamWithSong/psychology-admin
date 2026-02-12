import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../route";
import NotFoundComponent from "./404";
import ForbiddenComponent from "./403";

const errorsRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "_errors",
});


const NotFoundRoute = createRoute({
  getParentRoute: () => errorsRoute,
  path: "404",
  component: NotFoundComponent
})

const ForbiddenRoute = createRoute({
  getParentRoute: () => errorsRoute,
  path: "403",
  component: ForbiddenComponent
})

export const errorsRouteTree = errorsRoute.addChildren([
  NotFoundRoute,
  ForbiddenRoute,
])
