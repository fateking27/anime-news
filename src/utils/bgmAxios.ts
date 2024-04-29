import axios from 'axios'

const bgmAxios = axios.create({
  baseURL: '/bangumi-api',
  // timeout: 5000
})

bgmAxios.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json; charset=utf-8'
    config.headers.Authorization = 'Bearer ' + 'u9w66f54elD9cZYEw8Fp9Ra6fu2C1QXdfAOS11tc'

    return config
  },
  (err) => {
    console.log(err)
  }
)

export default bgmAxios
