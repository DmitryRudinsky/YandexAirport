import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import { BuildPaths, BuildMode, BuildPlatform, BuildOptions } from './config/build/types/types';
import { buildResolvers } from './config/build/buildResolvers';

export default (env: any) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'server.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public')
    };

    const mode: BuildMode = env.mode ?? 'development';
    const platform: BuildPlatform = 'server';
    const port = env.port ?? 3000;

    const options: BuildOptions = { paths, mode, platform, port };

    const config: webpack.Configuration = {
        mode,
        target: 'node',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: 'server.js',
            libraryTarget: 'commonjs2',
        },
        externals: [nodeExternals()],
        resolve: buildResolvers(options),
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['css-loader', 'sass-loader'],
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(mp4|webm|ogg)$/i,  // Добавляем это правило для видеофайлов
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[hash].[ext]',
                                outputPath: 'videos/',
                            },
                        },
                    ],
                },
            ],
        },
    };

    return config;
};
