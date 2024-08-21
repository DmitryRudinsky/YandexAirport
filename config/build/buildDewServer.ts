import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function BuildDewServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        open: true,
        historyApiFallback: true,
        hot: true,
        proxy: [
            {
                context: ['/bitrix/timetable'],
                target: 'https://www.svo.aero',
                secure: false,
                changeOrigin: true,
                pathRewrite: { '^/bitrix/timetable': '/bitrix/timetable' },
            },
        ],
    };
}
