export class Logger {
  constructor(private name: string) {}

  private buildName(): string {
    return '[' + this.name + ']'
  }

  private buildLevel(level: string): string {
    return '<' + level + '>'
  }

  private buildMessage(level: string, message: string): string {
    return this.buildName() + this.buildLevel(level) + ' ' + message
  }

  log(message: string) {
    console.log(this.buildMessage('log', message))
  }

  info(message: string) {
    console.info(this.buildMessage('info', message))
  }

  error(message: string) {
    console.error(this.buildMessage('error', message))
  }

  debug(message: string) {
    console.debug(this.buildMessage('debug', message))
  }

  warn(message: string) {
    console.warn(this.buildMessage('warn', message))
  }
}

export const logger = new Logger('malcalendar')
