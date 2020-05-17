import { Route } from "../types/route.type";
import { Router } from "express";

export const setRouts = (routes: Route[], router: Router) => {
  for (const route of routes) {
    const currentRoute: Route = route;
    (router as any)[currentRoute.method](
      currentRoute.path,
      currentRoute.handler
    );
  }
};
