#!/usr/bin/env node
/* eslint-disable @typescript-eslint/explicit-function-return-type */

/**
 * Project Reactor
 * Enhanced console interface with better visibility
 */
import chalk from 'chalk'
import figlet from 'figlet'
import { performance } from 'perf_hooks'

// Custom styled title that can be viewed in terminal
const generateTitle = () =>
  new Promise(resolve => {
    figlet(
      'FlakeForge',
      {
        font: 'ANSI Shadow',
        horizontalLayout: 'fitted',
        width: 100,
      },
      (err, data) => {
        resolve(err ? 'FlakeForge' : data)
      }
    )
  })

// Enhanced styling with better visibility
const styles = {
  title: chalk.bold.cyan,
  box: {
    border: chalk.bold.blue,
    text: chalk.white,
  },
  highlight: chalk.bold.yellow,
  success: chalk.bold.green,
  error: chalk.bold.red,
  info: chalk.bold.white,
  url: chalk.underline.cyan,
  time: chalk.white,
}

// Spinner animation for loading states
class Spinner {
  constructor() {
    this.frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
    this.interval = null
    this.message = ''
    this.frameIndex = 0
  }

  start(message) {
    this.message = message
    this.interval = setInterval(() => {
      process.stdout.clearLine(0)
      process.stdout.cursorTo(0)
      const frame = this.frames[(this.frameIndex = ++this.frameIndex % this.frames.length)]
      process.stdout.write(chalk.cyan(`${frame} `) + styles.info(`${this.message}`))
    }, 80)
  }

  stop(finalMessage = null) {
    clearInterval(this.interval)
    process.stdout.clearLine(0)
    process.stdout.cursorTo(0)
    if (finalMessage) {
      console.log(styles.info(finalMessage))
    }
  }
}

// Status messages with enhanced visibility
async function displayStatus(mode) {
  console.clear()

  const startTime = performance.now()
  const spinner = new Spinner()
  spinner.start('Loading project configuration...')

  await new Promise(resolve => setTimeout(resolve, 300))
  spinner.stop()

  const title = await generateTitle()
  console.log(styles.title(title))

  // Main message based on mode
  switch (mode) {
    case 'dev':
      console.log(styles.success('💻 Development server is running!'))
      console.log(styles.info('Press Ctrl+C to stop the server'))
      break

    case 'build':
      console.log(styles.success('🔨 Building optimized production bundle...'))
      break

    case 'start':
      console.log(styles.success('🚀 Production server started successfully!'))
      break

    default:
      console.log(styles.error('⚠️ Please specify a valid mode for the reactor'))
      break
  }

  const endTime = performance.now()
  console.log(
    styles.info(`✓ Reactor initialized in ${styles.highlight((endTime - startTime).toFixed(2))}ms`)
  )
}

/**
 * Entry point
 */
async function main() {
  const args = process.argv.slice(2)

  if (args.includes('--dev')) {
    await displayStatus('dev')
  } else if (args.includes('--build')) {
    await displayStatus('build')
  } else if (args.includes('--start')) {
    await displayStatus('start')
  } else {
    await displayStatus('unknown')
  }
}

// Execute
main().catch(console.error)
