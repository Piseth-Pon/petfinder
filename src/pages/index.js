import { url, getAllPets, addNewPet } from "../api/api.js"

async function displayAllPets() {

  const pets = await getAllPets()
  const petWrapper = document.querySelector(".petWrapper")
  petWrapper.innerHTML = ``

  for (let i = 0; i < pets.length; i++) {
    let pet = pets[i]
    petWrapper.innerHTML += `
    <a href="detail.html?id=${pet.id}">
      <div class="pet">
        <img src="${url}api/files/${pet.collectionId}/${pet.id}/${pet.photo}" alt="">
        <h4>${pet.name}</h4>
      </div>
    </a>
    `
  }

}


window.addEventListener("DOMContentLoaded", async () => {

  
  displayAllPets()

  const filterBtns = document.querySelectorAll("#filterBtn")
  for (let i = 0; i < filterBtns.length; i++) {
    const btn = filterBtns[i]
    
    btn.addEventListener("click", async () => {
      let animal = btn.dataset.animal
      console.log(animal)

      const filterPets = pets.filter((pet) => pet.animal == animal)
      console.log(filterPets)
      displayAllPets(filterPets)
    })
  }

  const form = document.querySelector("#addNewPetForm")
  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    
    const photo = document.querySelector("#photo")
    const animal = document.querySelector("#animal")
    const gender = document.querySelector("#gender")
    const name = document.querySelector("#name")
    const age = document.querySelector("#age")
    const description = document.querySelector("#description")
    const contact = document.querySelector("#contact")

    const data = {
      "photo": photo.files[0],
      "animal": animal.value,
      "gender": gender.value,
      "name": name.value,
      "age": age.value,
      "description": description.value,
      "contact": contact.value
    };

    const newPet = await addNewPet(data)

    displayAllPets()

    // clear
    photo.value = ``
    animal.value = ``
    gender.value = ``
    name.value = ``
    age.value = ``
    description.value = ``
    contact.value = ``

  })



})

