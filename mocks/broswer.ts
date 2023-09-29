import { setupWorker, rest } from 'msw'
import handlers from './handler'

export const worker = setupWorker(...handlers)

window.msw = { worker, rest }
