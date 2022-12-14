export interface Provider {
  data: ProviderData
}

export interface ProviderData {
  type: string,
  provider: string,
  vendor: string,
  iframeW: number,
  iframeH: number,
  name: string,
  order: number,
  tags: string[],
  games: Game[],
  totalGames: number
}

export interface Game {
  game_id: string,
  name: string,
  provider: string,
  image: string,
  url: string,
  order: number,
  tags: string[],
  gameId: string,
  image2: string
}
