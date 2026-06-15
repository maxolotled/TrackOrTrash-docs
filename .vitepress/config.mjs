import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Docs - Track or Trash",
  description: "Documentation for trackortrash.me",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Signing in with Spotify', link: '/spotify' },
      { text: "FAQ", link: '/faq' }
    ],

    sidebar: [
      {
        text: 'Signing in with Spotify',
        items: [
          { text: 'Making your application', link: '/spotify' },
          { text: 'Using an existing application', link: '/spotify-existing' }
        ]
      },
      { text: 'How to use',
        items: [
          { text: 'How to sort your songs', link: '/how-to' },
          { text: 'Frequently asked questions', link: '/faq' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maxolotled/TrackorTrash' },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" role="img"><title>Mail</title><path d="M46.7,10.5H7.3c-2.6,0-4.8,2.1-4.8,4.8v23.5c0,2.6,2.1,4.8,4.8,4.8h39.5c2.6,0,4.8-2.1,4.8-4.8V15.2C51.5,12.6,49.4,10.5,46.7,10.5z M45.8,13.5L27,27.2L8.2,13.5H45.8z M5.5,38.2V15.5l15.6,11.4L5.5,38.2z M8.2,40.5l15.6-11.4l3.2,2.3c0.1,0.1,0.2,0.1,0.3,0.1s0.2,0,0.3-0.1l3.2-2.3l15.6,11.4H8.2z M48.5,38.2L32.9,26.9l15.6-11.4V38.2z" fill="currentColor"/></svg>'
        },
        link: 'mailto:max@trackortrash.me'
      },
    ]
  }
})
