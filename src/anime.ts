import * as moment from 'moment'
import Query from './query'
import { TITLE_ELEMENT } from './dom'
import { serializeStartDateTime } from './parser'
import { Logger, logger } from './log'

export class Anime {
  private url: string
  private static logger: Logger = new Logger('Anime@malcalendar')

  constructor(public title: string, public startDate: moment.Moment) {
    Anime.logger.log('Building Anime object.')
    Anime.logger.debug('Getting URL...')
    this.url = window.location.href
    Anime.logger.log('URL was set to: ' + this.url)
    Anime.logger.info('Created Anime object: ' + this)
  }

  get endDate(): moment.Moment {
    Anime.logger.debug('Generating end date...')
    return this.startDate.add(30, 'minutes')
  }

  get query(): Query {
    Anime.logger.debug('Generating query...')
    return new Query(this.title, this.buildQueryDate(), this.buildDetails())
  }

  private buildQueryDate(): string {
    Anime.logger.log('Building date query...')

    const dateFormat = 'YYYYDDMM'
    const timeFormat = 'HHmm'

    Anime.logger.debug('Building start date and time...')
    const startDateString = this.startDate.format(dateFormat)
    const startTimeString = this.startDate.format(timeFormat)
    const startDateTimeString = startDateString + 'T' + startTimeString + '00'

    Anime.logger.debug('Building end date and time...')
    const endDateString = this.endDate.format(dateFormat)
    const endTimeString = this.endDate.format(timeFormat)
    const endDateTimeString = endDateString + 'T' + endTimeString + '00'

    Anime.logger.debug('Concatenating start and end date and time...')
    return startDateTimeString + '/' + endDateTimeString
  }

  private buildDetails(): string {
    Anime.logger.log('Building details...')
    return 'See more at: ' + this.url
  }
}

export function buildAnime(): Anime {
  logger.log('Building Anime object...')

  logger.debug('Parsing related data...')
  const title = TITLE_ELEMENT.textContent.trim()
  const startDate = serializeStartDateTime()

  logger.debug('Building Anime object...')
  return new Anime(title, startDate)
}
