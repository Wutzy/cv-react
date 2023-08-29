const getDuration = (date1, date2) => {
    const duration = (date1.getTime()-date2.getTime())/(1000 * 3600 * 24 * 30);
    return Math.round(duration)
}
export default getDuration;