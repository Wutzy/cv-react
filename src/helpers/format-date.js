const formatDate = (date) => {
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    return monthNames[date.getMonth()] + " " + date.getFullYear();
}

export default formatDate;