import dayjs from 'dayjs'
export const formatTime = (value: string): string => {
  return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
}
