import { Anime } from './anime'
import { logger } from './log'

const TITLE_SELECTOR = "#contentWrapper > div:nth-child(1) > h1 > span"
const AIRED_SELECTOR = "#content > table > tbody > tr > td.borderClass > div > div:nth-child(14)"
const BROADCAST_SELECTOR = "#content > table > tbody > tr > td.borderClass > div > div:nth-child(16)"

export const TITLE_ELEMENT = <HTMLElement> document.querySelector(TITLE_SELECTOR)
export const AIRED_ELEMENT = <HTMLElement> document.querySelector(AIRED_SELECTOR)
export const BROADCAST_ELEMENT = <HTMLElement> document.querySelector(BROADCAST_SELECTOR)

logger.debug('Selector initialized: ' + TITLE_ELEMENT)
logger.debug('Selector initialized: ' + AIRED_ELEMENT)
logger.debug('Selector initialized: ' + BROADCAST_ELEMENT)

function buildCalendarAnchor(anime: Anime): Element {
  logger.log('Building calendar anchor for ' + anime + '.')

  const anchor = document.createElement('a')
  const text = document.createTextNode('Add to Calendar')
  anchor.appendChild(text)

  anchor.href = anime.query.url
  anchor.target = '_blank'
  anchor.style.color = 'white'

  const classes = ['inputButton', 'btn-middle', 'flat']
  classes.forEach(cls => anchor.classList.add(cls))

  logger.info('Built calendar anchor.')
  return anchor
}

export function renderCalendarAnchor(anime: Anime) {
  logger.log('Rendering calendar anchor...')
  const element = buildCalendarAnchor(anime)
  BROADCAST_ELEMENT.appendChild(element)
  logger.info('Rendered calendar anchor.')
}
