import { IResponse } from '../../../types'

export async function notFound (): Promise<IResponse> {
  return {
    headers: {
      'Content-Type': 'application/json'
    },
    body: { error: 'Not Found', message: 'The requested route could not be found' },
    statusCode: 404
  }
}

export * from './users'
