const webpack = require('webpack');

const bannerArray = [
  '==UserScript==',
  '@name MyAnimeList Add to Calendar',
  '@namespace http://erayerdin.co.nf',
  '@version ' + JSON.stringify(require('./package.json').version),
  '@description Adding calendar button to MyAnimeList anime page to easily add anime to Google Calendar.',
  '@author Eray Erdin',
  '@source https://github.com/erayerdin/malcalendar',
  '@updateURL https://raw.githubusercontent.com/erayerdin/malcalendar/master/dist/malcalendar.user.js',
  '@support https://github.com/erayerdin/malcalendar/issues',
  '@match https://myanimelist.net/anime/*',
  '@grant none',
  '==/UserScript=='
]

const bannerString = bannerArray.join('\n')

module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'malcalendar.user.js',
        path: __dirname + '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
      new webpack.BannerPlugin({ banner: bannerString }),
    ],
    mode: 'production',
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};
