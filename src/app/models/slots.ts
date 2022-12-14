export interface Slots {
  data: Slot[]
}

export interface Slot {
  enabled: boolean
  gamesCount: number
  iframeH: number
  iframeW: number
  logo: string
  name: string
  order: number
  provider: string
  tags: string[]
  type: string
  vendor: string
  _id: string
}
