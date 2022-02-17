import { remark } from 'remark'
import html from 'remark-html'
import prism from 'prismjs'

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
