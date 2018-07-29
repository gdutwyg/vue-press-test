module.exports = {
  base: '/vue-press-test/',
  title: 'hello press',
  description: 'just playing around',
  themeConfig: {
    repo: 'gdutwyg',
    nav: [
      { text: 'bar', link: '/bar/' },
      {
        text: 'foo',
        items: [
          { text: 'blog', link: 'https://github.com/gdutwyg/frontEnd-notes/issues/' },
          { text: 'github', link: 'https://github.com/gdutwyg/frontEnd-notes' }
        ]
      }
    ],
    sidebar: [
      '/',
      '/foo/',
      ['/bar/', 'bar']
    ]
  }
}
