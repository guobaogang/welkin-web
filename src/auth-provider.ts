import {User} from "./interface";

const localStorageKey = '__auto_provider_token__';
export const getToken = () => localStorage.getItem(localStorageKey);

export const handleUserResponse = ({user}: { user: User }) => {
    localStorage.setItem(localStorageKey, user.token || '');
    return user;
}

export const login = (param: { username: string, password: string }) => {
    return fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(param)
    }).then(
      async (response) => {
          if (response.ok) {
              return handleUserResponse(await response.json())
          }else{
              return Promise.reject(param)
          }
      }
    )
}

export const logout = async () => localStorage.removeItem(localStorageKey)