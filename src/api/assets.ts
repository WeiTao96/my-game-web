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


export const handleLandRent = (id: any) =>
    axios({
        url: url + `/assets/land/rent/${id}`,
        method: 'get'
    })

export const handleLandRecover = (id: any) =>
    axios({
        url: url + `/assets/land/recover/${id}`,
        method: 'get'
    })

export const handleLandDelete = (id: any) =>
    axios({
        url: url + `/assets/land/${id}`,
        method: 'delete'
    })

export const handleBuildUpdate = (id: string, params: any) =>
    axios({
        url: url + `/assets/land/build/${id}`,
        method: 'get',
        params
    })

export const getAllEquipment = (params: any) =>
    axios({
        url: url + `/equipment/all`,
        method: 'get',
        params
    })