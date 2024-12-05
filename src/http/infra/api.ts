import dayjs from 'dayjs'
import { z } from 'zod'
const username = import.meta.env.VITE_API_USERNAME
const password = import.meta.env.VITE_API_PASSWORD

export const token = () => {
  const userSchema = z.string().min(1)
  const passwordSchema = z.string().min(1)

  return btoa(`${userSchema.parse(username)}:${passwordSchema.parse(password)}`)
}

export const dateConvert = (day: Date) => `${dayjs(day).format('DD/MM/YYYY')}`
