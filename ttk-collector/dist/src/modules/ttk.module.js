"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ttkModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../../prisma/prisma.module");
const ttk_controller_1 = require("../controllers/ttk.controller");
const nats_client_module_1 = require("../nats-client/nats.client.module");
const nats_client_service_1 = require("../nats-client/nats.client.service");
const ttk_service_1 = require("../services/ttk.service");
let ttkModule = class ttkModule {
};
exports.ttkModule = ttkModule;
exports.ttkModule = ttkModule = __decorate([
    (0, common_1.Module)({
        imports: [nats_client_module_1.NatsClientModule, prisma_module_1.PrismaModule],
        controllers: [ttk_controller_1.ttkMicroserviceController],
        providers: [nats_client_service_1.NatsClientService, ttk_service_1.TiktokService],
    })
], ttkModule);
//# sourceMappingURL=ttk.module.js.map