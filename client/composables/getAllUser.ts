const GetAllFollower = async () => {
    let response = await fetch("/api/getFollowers")
    if (response.status != 200) {
        return {status: response.status}
    }
    let responseInJsonFormat = await response.json().catch(err => ({ error: err }))
    return responseInJsonFormat
}


export { GetAllFollower }