"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        credentials: true,
        origin: true
    });
    app.use(cookieParser());
    app.use(session({
        secret: 'my-secret',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 3600 * 1000 * 24 * 30 }
    }));
    await app.listen(4005);
}
bootstrap();
//# sourceMappingURL=main.js.map