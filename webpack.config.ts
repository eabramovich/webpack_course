import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildWebpack } from './config/build/buildWebpack';
import { BuildPath } from './config/build/types/types';
import { BuildMode } from './config/build/types/types';

type Mode = 'production' | 'development';

interface EnvVariables {
  mode: BuildMode,
  port: number,
}

export default (env: EnvVariables) => {
  const paths: BuildPath = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }
   
  

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths
  });

  return config;
}