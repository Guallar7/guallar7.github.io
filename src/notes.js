import { marked } from 'marked'

// Cada archivo .md de src/notes es una nota. Ver src/notes/README.md.
const files = import.meta.glob('./notes/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const parseFrontmatter = (raw) => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: raw }

  const data = {}
  match[1].split(/\r?\n/).forEach((line) => {
    const separator = line.indexOf(':')
    if (separator === -1) return
    const key = line.slice(0, separator).trim()
    const value = line
      .slice(separator + 1)
      .trim()
      .replace(/^["']|["']$/g, '')
    data[key] = value
  })

  return { data, body: match[2] }
}

const dateFormatter = new Intl.DateTimeFormat('es-ES', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export const notes = Object.entries(files)
  .filter(([path]) => !path.endsWith('README.md'))
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw)
    const slug = path.split('/').pop().replace(/\.md$/, '')

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      displayDate: data.date
        ? dateFormatter.format(new Date(`${data.date}T12:00:00`))
        : '',
      summary: data.summary || '',
      draft: data.draft === 'true',
      html: marked.parse(body, { async: false }),
    }
  })
  .filter((note) => !note.draft)
  .sort((a, b) => b.date.localeCompare(a.date))
