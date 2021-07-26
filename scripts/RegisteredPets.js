import { getPets, getWalkers  } from "./database.js"


const pets = getPets()
const walkers = getWalkers()



//Event handler for a window alert showing who is currently walking the pet that is clicked on

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [, petId] = itemClicked.id.split("--")

            for (const pet of pets) {
                if (pet.id === parseInt(petId)) {

                    const petWalker = walkers.find(
                        (walker) => {
                            if (walker.id === pet.walkerId) {
                                return walker.name
                            }
                        }
                    )

                    window.alert(`${pet.name} is being walked by ${petWalker.name}`)
                }
            }
        }
     
    }
)




export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

