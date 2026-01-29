import { useEffect, useState } from 'react'
import axios from 'axios'

const useCallApi = (api) => {
    const [data, SetData] = useState([])
    useEffect(()=>{
        axios.get(api)
        .then((res)=> SetData(res.data))
        .catch((err)=> console.log(err))
    })
  return data
}

export default useCallApi
