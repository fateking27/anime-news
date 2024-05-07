import axios from 'axios'
import bgmAxios from '@/utils/bgmAxios'
import { reactive, ref } from 'vue'
const token = ref('u9w66f54elD9cZYEw8Fp9Ra6fu2C1QXdfAOS11tc')
// const config = reactive({
//   headers: {
//     'Content-Type': 'application/json; charset=utf-8',
//     Authorization: 'Bearer ' + token.value
//   }
// })
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer secret_lWACE7KhIOyQY2TjNczTJnyHPvJKtnXtLAnce7nZtDL',
    'Notion-Version': '2022-06-28'
  }
}

export const getCalendar = () => {
  return bgmAxios.get('/calendar')
}

export const getSubject = (subject_id: string) => {
  return bgmAxios.get(`/v0/subjects/${subject_id}`)
}

export const getSite = () => {
  return axios.get('/bgmApi/api/v1/bangumi/site')
}

export const getOnair = () => {
  return axios.get('/bgmApi/api/v1/bangumi/onair')
}

export const notion = () => {
  return axios.post('/notion-api/v1/databases/e6a774531c4f46c98023499d088c1691/query', {}, config)
}
