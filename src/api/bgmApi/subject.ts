import axios from 'axios'
import { reactive, ref } from 'vue'
const token = ref('u9w66f54elD9cZYEw8Fp9Ra6fu2C1QXdfAOS11tc')
const config = reactive({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Bearer ' + token.value
  }
})

export const getCalendar = () => {
  return axios.get('/bangumi-api/calendar')
}

export const getSubject = (subject_id: string) => {
  return axios.get(`/bangumi-api/v0/subjects/${subject_id}`, config)
}

export const getSite = () => {
  return axios.get('/bgmApi/api/v1/bangumi/site')
}

export const getOnair = () => {
  return axios.get('/bgmApi/api/v1/bangumi/onair')
}
