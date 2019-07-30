export const setDate = data => {
  if(data) {
    const d = new Date(data)
    const fullYear = d.getFullYear(),
          month = d.getMonth(),
          day = d.getDay()
    let dateRes = {fullYear, month, day}
    return dateRes
  }
}

export const mS = monthNumber => {
  const monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return monthShort[monthNumber]
}
