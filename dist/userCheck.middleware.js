"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCheckMiddleware = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users/users.service");
let UserCheckMiddleware = class UserCheckMiddleware {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async use(req, res, next) {
        var _a, _b;
        if (!req['session'].user && ((_b = (_a = req.body) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.name)) {
            req['session'].user = await this.usersService.findByUsername(req.body.user.name);
        }
        if (req['session'].user) {
            next();
        }
        else {
            res.send(common_1.HttpStatus.FORBIDDEN);
        }
    }
};
UserCheckMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UserCheckMiddleware);
exports.UserCheckMiddleware = UserCheckMiddleware;
//# sourceMappingURL=userCheck.middleware.js.map