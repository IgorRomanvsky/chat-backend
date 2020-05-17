"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRouts = void 0;
exports.setRouts = (routes, router) => {
    for (const route of routes) {
        const currentRoute = route;
        router[currentRoute.method](currentRoute.path, currentRoute.handler);
    }
};
//# sourceMappingURL=set-routs.js.map