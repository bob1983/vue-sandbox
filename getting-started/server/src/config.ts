import 'dotenv/config'

export const PORT = Number(process.env.APP_PORT || '8080')

if (!process.env.DB_HOST) {
  throw new Error('Please define DB_HOST')
}

if (!process.env.DB_PORT) {
  throw new Error('Please define DB_PORT')
}

if (!process.env.DB_USER) {
  throw new Error('Please define DB_USER')
}

if (!process.env.DB_PASSWORD) {
  throw new Error('Please define DB_PASSWORD')
}

if (!process.env.DB_NAME) {
  throw new Error('Please define DB_NAME')
}

export const DB_HOST = process.env.DB_HOST
export const DB_PORT = process.env.DB_PORT
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_NAME = process.env.DB_NAME
