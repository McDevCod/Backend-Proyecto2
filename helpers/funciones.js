

function formatDate (date){
    let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    return formatted_date
}

function formatDatetime(date){
    let formatted_datetime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()+"T"+date.getHours()+":"+date.getMinutes()
    return formatted_datetime
}



module.exports= {
    formatDate,
    formatDatetime
}