import { getWalkers, getCities } from "./database.js"


const walkers = getWalkers()
const cities = getCities()



//Even handler for window alert showing which city is serviced by the walker that is clicked on

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                
                if (walker.id === parseInt(walkerId)) {
                   
                    for (const city of cities) {

                            if (city.id === walker.cityId) {
                                
                                window.alert(`${walker.name} services ${city.name}`)
                            }
                        }
                    
                    }
                }
            }
    }
)




export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

