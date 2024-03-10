import axios from '@/utils/bgmAxios'

export const getCalendar = () => {
  return axios.get('/calendar')
}

export const getSubject = (subject_id: string) => {
  return axios.get(`/v0/subjects/${subject_id}`)
}
