import {useEffect} from "react";

export const useMount = (callback) => {
  useEffect(() => {
    callback()
  }, [])
}

export const useDebounce = (value, delay) => {

}