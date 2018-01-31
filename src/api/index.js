import axios from 'axios'

export const getAwards = () => {
  const url = `${process.env.PUBLIC_URL}/assets/db/award.json`
  return axios.get(url)
}