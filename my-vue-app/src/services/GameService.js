import { HttpService } from './HttpService'

class GameService extends HttpService {
  constructor () {
    super('gamers')
  }
}

export const gamers = new GameService()
