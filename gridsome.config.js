module.exports = {
  siteName: 'HEIC Converter',
  siteDescription: 'HEIC to PNG/JPG app converter',
  siteUrl: '',
  plugins: [
    // {
    //   use: '@gridsome/plugin-sitemap',
    //   options: {
    //     cacheTime: 600000
    //   }
    // },
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        // provide path to the file with resources
        resources: ['@/assets/scss/_variables.scss', '@/assets/scss/_utils.scss']
      }
    },
    {
      use: 'gridsome-plugin-static-metadata',
      options: {
        image: '/meta.png',
        themeColor: '#171c31',
        robots: true
      }
    },
    {
      use: 'gridsome-plugin-i18n',
      options: {
        locales: ['en'],
        fallbackLocale: 'en',
        enablePathRewrite: false,
        enablePathGeneration: false,
        messages: process.env.NODE_ENV === 'production' && {
          en: require('./src/locales/en.json')
        }
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
};
