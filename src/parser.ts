import * as moment from 'moment'
import { AIRED_ELEMENT, BROADCAST_ELEMENT } from './dom'
import { logger } from './log'

export function serializeStartDateTime(): moment.Moment {
  logger.log('Serializing start date and time...')
  const aired = parseAired()
  const broadcast = parseBroadcast()
  const startDateTime = aired + ' ' + broadcast

  logger.info('Serialized start date and time.')
  return moment(startDateTime, 'MMM D, YYYY HH:mm')
}

function parseAired(): string {
  logger.log('Parsing "Aired"...')

  let value = AIRED_ELEMENT.innerText.trim()
  logger.debug('Content is: ' + value)
  value = value.split(': ')[1].trim() // "Aired", <"DATE to DATE?">
  logger.debug('Content parsed to:' + value)
  value = value.split(' to ')[0].trim() // <"DATE">, "DATE?"
  logger.debug('Content parsed to:' + value)

  logger.info('Parsed "Aired".')
  return value
}

function parseBroadcast(): string {
  logger.log('Parsing "Broadcast"...')

  let value = BROADCAST_ELEMENT.innerText.trim()
  logger.debug('Content is: ' + value)
  value = value.split(' at ')[1] // "Broadcast: Mondays", <"00:00 (JST)">
  logger.debug('Content parsed to:' + value)
  value = value.split(' ')[0] // <"00:00">, "(JST)"
  logger.debug('Content parsed to:' + value)

  logger.info('Parsed "Broadcast".')
  return value
}
