import axios from 'axios'
const url = process.env.VUE_APP_BASE_API
export const getANewLand = (params: any) =>
    axios({
        url: url + '/assets/land/new',
        method: 'get',
        params
    })

export const getAllLand = (params: any) =>
    axios({
        url: url + '/assets/land/all',
        method: 'get',
        params
    })


export const handleRent = (id: any) =>
    axios({
        url: url + `/assets/land/rent/${id}`,
        method: 'get'
    })