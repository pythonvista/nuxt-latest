
export const ErrorHandler = (err, customMessage='Unknown Error Occured', statusCode=400) => {
    let response = err?.response || null 
    let data = response?.data || null 
    let message = data?.message || customMessage 
    let status = response?.status || statusCode 
    return {message , status}
}