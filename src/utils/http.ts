import qs from "qs";
import * as auth from 'auth-provider';
import {useAuth} from "../context/auto-context";

const apiUrl = 'http://localhost:3001';

interface Config extends RequestInit {
    token?: string,
    data?: object
}

export const http = async (url: string, {data, token, headers, ...customConfig}: Config = {}) => {
    const config = {
        method: 'GET',
        headers: {
            token,
            'Content-Type': 'application/json'
        },
        ...customConfig
    }
    if (config.method.toUpperCase() === 'GET') {
        url += `?${qs.stringify(data)}`;
    } else {
        config.body = JSON.stringify(data || {})
    }
    // @ts-ignore
    return fetch(`${apiUrl}/${url}`, config)
      .then(async response => {
          if (response.status === 401) {
              auth.logout();
              window.location.reload();
              return Promise.reject({message: '请重新登录'})
          }
          const data = await response.json();
          if (response.ok) {
              return data
          } else {
              return Promise.reject(data)
          }
      })
}

export const useHttp = () => {
    const {user} = useAuth();
    return (...[url, config]: Parameters<typeof http>) => http(url, {...config, token: user?.token})
}