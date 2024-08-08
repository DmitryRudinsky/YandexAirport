import webpack from 'webpack';
import {BuildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildPaths, BuildPlatform} from "./config/build/types/types";
import path from "path";



interface envVars {
    mode?: BuildMode;
    port?: number;
    analyzer?: boolean;
    platform?: BuildPlatform;
}

export default (env: envVars) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'app', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public')
    }
    const config: webpack.Configuration = BuildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? "development",
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? "desktop"
    });
    return config;
};