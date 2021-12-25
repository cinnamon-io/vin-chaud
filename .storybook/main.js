const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@react-theming/storybook-addon',
  ],
  framework: '@storybook/react',
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  features: {
    postcss: false,
  },
  webpackFinal: async (config) => {
    // Apply tsconfig alias path
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));

    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../'),
    // })

    // config.module.rules.push({
    //   test: /\.(ts|tsx)$/,
    //   loader: require.resolve('babel-loader'),
    //   options: {
    //     presets: [['react-app', { flow: false, typescript: true }]],
    //   },
    // })

    config.resolve.extensions.push('.ts', '.tsx');

    config.node = { fs: 'empty' };

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '.storybook': path.join(__dirname, '.'),
          // '@emotion/core': toPath('node_modules/@emotion/react'),
          // '@emotion/styled': toPath('node_modules/@emotion/styled'),
          // 'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
