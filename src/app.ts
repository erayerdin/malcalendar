import * as moment from 'moment'
import { buildAnime } from './anime'
import { renderCalendarAnchor } from './dom'
import { logger } from './log'

moment.locale('en')

logger.info('Started userscript.')
const anime = buildAnime()
renderCalendarAnchor(anime)
