"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const nats_client_module_1 = require("./nats-client/nats.client.module");
const ttk_module_1 = require("./modules/ttk.module");
const ttk_controller_1 = require("./controllers/ttk.controller");
const ttk_service_1 = require("./services/ttk.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [nats_client_module_1.NatsClientModule, ttk_module_1.ttkModule],
        controllers: [ttk_controller_1.ttkMicroserviceController],
        providers: [ttk_service_1.TiktokService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map