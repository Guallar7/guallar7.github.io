import { readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'

// Render the same component used in the browser, including only published notes.
const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
})

try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  const markup = renderToString(createElement(App))
  const path = new URL('../dist/index.html', import.meta.url)
  const template = await readFile(path, 'utf8')
  const placeholder = '<div id="root"></div>'
  if (!template.includes(placeholder)) throw new Error('Missing root placeholder')
  if ((markup.match(/<h1[ >]/g) || []).length !== 1) {
    throw new Error('The homepage must have exactly one H1')
  }
  await writeFile(path, template.replace(placeholder, () => `<div id="root">${markup}</div>`))
} finally {
  await server.close()
}
