import axios from "axios";

export const getCalendar = () => {
    return axios.get('https://api.bgm.tv/calendar')
}