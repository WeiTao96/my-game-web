import axios from 'axios'
const url = process.env.VUE_APP_BASE_API
export const getAllPerson = (params: any) =>
    axios({
        url: url + '/person/all',
        method: 'get',
        params
    })

export const updatePerson = (id: any, data: any) =>
    axios({
        url: url + `/person/update/${id}`,
        method: 'post',
        data
    })

export const deletePerson = (id: any) =>
    axios({
        url: url + `/person/${id}`,
        method: 'delete',
    })