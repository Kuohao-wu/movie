import axios, { AxiosResponse } from 'axios'
import { REQUEST_BASE_URL, API_KEY } from "./config";
import { IMovieDetails } from '@/types/bookmark';

axios.defaults.baseURL = REQUEST_BASE_URL
axios.interceptors.request.use((config) => {
  config.params = {
    apikey: API_KEY,
    ...config.params
  }
  return config
})

interface ISearchParams {
  s: string,
  type?: string
}

/**
 * 搜索电影
 * @param {ISearchParams} params
 * @returns 
 */
export function apiSearchList(params:ISearchParams) {
  return axios.get('/', { params })
}

/**
 * 获取电影详情
 * @returns 
 */
export function apiGetMovieDetail(params:{ i: string }):Promise<AxiosResponse<IMovieDetails>> {
  return axios.get('/', { params })
}