const leapYear = (req, res) => {
  let year = req.params.year
  year = parseInt(year)
  if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    res.send(`El año ${year} es bisiesto`)
  }else{
    res.send(`El año ${year} no es bisiesto`)
  }
}

module.exports = leapYear