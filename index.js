// Code your solution here
function findMatching(drivers, stringName) {
    return drivers.filter((driver)=> {
        return driver.toLowerCase() === stringName.toLowerCase()
    })
}

function fuzzyMatch(drivers, stringLetters){
    return drivers.filter((driver)=> {
        return driver.charAt(0) === stringLetters.charAt(0)
    })
}

function matchName(drivers, stringName) {
    return drivers.filter((driver)=>{
        return driver.name === stringName
    })
}