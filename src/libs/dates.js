

module.exports.getWeek = (date) => {
    //Funcion que me regresa el número de la semana de la fecha que se pase (entre 1 y 52)
    let weekNumber = Math.ceil((date - new Date(date.getFullYear(), 0, 1)) / 86400000 / 7);
    return weekNumber;
}