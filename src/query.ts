import * as querystring from 'query-string'
import { Logger } from './log'

const BASE_URL = "http://www.google.com/calendar/render"

export default class Query {
  private static logger = new Logger('Query@malcalendar')

  constructor(
    private text: string,
    private dates: string,
    private details: string
  ) {
    Query.logger.log('Creating Query object...')
  }

  get parameters(): String {
    Query.logger.log('Generating parameters...')
    const params = querystring.stringify({
      'action': 'TEMPLATE',
      'text': this.text,
      'dates': this.dates,
      'details': this.details,
      'ctz': 'Asia/Tokyo',
      'sf': true,
      'output': 'xml'
    })
    Query.logger.info('Generated params: ' + params)
    return params
  }

  get url(): string {
    Query.logger.log('Generating calendar URL...')
    const url = BASE_URL + '?' + this.parameters
    Query.logger.info('Generated URL: ' + url)
    return url
  }
}
