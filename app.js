const ratingContainer = document.querySelector("#rating-container")
const thankYouContainer = document.querySelector("#thank_you-container")
const submitBtn = document.querySelector(".submit-btn")
const rates = document.querySelectorAll(".rating-btn")
const rating = document.getElementById("rate")



const submit = () => {
  thankYouContainer.classList.remove("hidden")
  ratingContainer.style.display = "none"
}


rates.forEach((rate)=>{
  rate.addEventListener("click", () =>{
    rating.innerHTML = rate.innerHTML
  })
})
