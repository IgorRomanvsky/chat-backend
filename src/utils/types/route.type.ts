import { Handler } from "./handler.type";

export type Route = {
  path: string;
  method: string;
  handler: Handler | Handler[];
};
