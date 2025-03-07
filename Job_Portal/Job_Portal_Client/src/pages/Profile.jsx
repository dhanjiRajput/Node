import React, { useEffect } from 'react'
import { API } from '../config/API'

const Profile = () => {
    const getJobList = async () => {
        let res = await API.get(`/applications/user/`)
        console.log(res);

    }
    useEffect(() => {
        getJobList()
    }, [])
    return (
        <div>profile</div>
    )
}

export default Profile