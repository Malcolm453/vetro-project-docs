const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
  })
   
  module.exports = withNextra({
    image: {
        domains: ['res.cloudinary.com'],
    },
  }
)
   
  // If you have other Next.js configurations, you can pass them as the parameter:
  // module.exports = withNextra({ /* other next.js config */ })