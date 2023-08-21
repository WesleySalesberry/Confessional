export interface IConfession {
  confession_id?: string
  category: string
  title: string
  body: string
  views?: number
  expireAt: Date
}