import axios from 'axios'
import {API_KEY} from '../../api-key'
const SHEET_ID = '1AmgPHmuDEFcK0oAlRNmOrv6TAAIux11wm2LGsV3X8Go'
const VAL = 'Sheet1!A2%3AG'

export const FETCH_JOBS = 'FETCH_JOBS'

export function fetchJobs() {

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${VAL}?key=${API_KEY}`
  const request = axios.get(url)

  return {
    type: FETCH_JOBS,
    payload: request
  }

}
