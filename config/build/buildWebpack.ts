import webpack from "webpack";
import {BuildDewServer} from "./buildDewServer";
import {BuildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";


export function BuildWebpack(options: BuildOptions): webpack.Configuration{
    const {mode, paths} = options;
    const isDev = mode === "development";


    return{
        mode: mode ?? "development",
        entry: paths.entry,
        output: {
            filename: '[name].js',
            path: paths.output,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: BuildLoaders(options)
        },
        resolve: buildResolvers(options),
        devServer: isDev ? BuildDewServer(options) : undefined,
        devtool: isDev ? "inline-source-map" : false
    }
}
