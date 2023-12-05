import { fileURLToPath } from 'node:url'
import markdownit from 'markdown-it'
import generate from 'markdown-it-testgen'

import abbr from '../index.mjs'

describe('markdown-it-abbr', function () {
  const md = markdownit({ linkify: true }).use(abbr)

  generate(fileURLToPath(new URL('fixtures/abbr.txt', import.meta.url)), md)
})
