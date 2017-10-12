class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate)

  }

  yearsExperienceFromBeginningOf(year){
    let time = (year - parseInt(this.startDate.getFullYear() + 1))
    return time
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  currentAvenueConversion(location){

    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let counter = 1

    for(const ave of eastWest){
      if(ave === location){
        let locationInt = counter
        return locationInt
      }
    counter++
    }
  }

  blocksTravelled(){
    //convert avenue1 into a number
    let aveOne = this.currentAvenueConversion(this.beginningLocation.horizontal)
    //convert avenue2 into a number
    let aveTwo = this.currentAvenueConversion(this.endingLocation.horizontal)
    //subtract avenues
    let totalAve = (aveOne - aveTwo)
    // subtract street1 by street2
    let totalStreet = this.beginningLocation.vertical - this.endingLocation.vertical
    //add avenues and streets
    let totalBlocks = totalAve + totalStreet
    //return total
    return Math.abs(totalBlocks)
  }

  estimatedTime(peak){
    let estimatedTime;
    let blocksTravelled = this.blocksTravelled()
      if(peak === true){
      estimatedTime = blocksTravelled / 2
    } else {
      estimatedTime = blocksTravelled / 3
    }
    return estimatedTime
  }

}
