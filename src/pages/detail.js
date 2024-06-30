import { url, getOnePet } from "../api/api.js"

function displayPetDetail(pet) {

  const petDetail = document.querySelector("#petDetail")
  petDetail.innerHTML = `
  <div class="detailCard">
      <img src="${url}api/files/${pet.collectionId}/${pet.id}/${pet.photo}" alt="">
      <h4>Name: ${pet.name}</h4>
      <h4>Age: ${pet.age}</h4>
      <h4>Gender: ${pet.gender}</h4>
      <p>Description: ${pet.description}</p>
      <a href="#">Contact: ${pet.contact}</a>
  </div>
  `
}



window.addEventListener("DOMContentLoaded", async () => {

  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')

  const pet = await getOnePet(id)
  displayPetDetail(pet)

})

