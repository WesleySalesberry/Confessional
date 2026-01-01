export interface IConfession {
  confession_id?: string
  category: string
  title: string
  body: string
  views?: number
  expireAt: Date
}

export interface IViews {
  c_id: string,
  address: string,
  expireAt: Date
}