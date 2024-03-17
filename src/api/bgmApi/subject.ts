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
  return axios.get('https://api.bgm.tv/calendar')
}

export const getSubject = (subject_id: string) => {
  return axios.get(`https://api.bgm.tv/v0/subjects/${subject_id}`, config)
}
