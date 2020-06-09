let lastScrollDown = 0
let lastScrollUp = 0

const handleWindowSize = () => {
    let jobDescription = document.getElementById("job-description")

    if(window.innerWidth <= 1000) {    
        jobDescription.classList.remove("flex-row")
        jobDescription.classList.add("flex-column")
    } else {
        jobDescription.classList.remove("flex-column")
        jobDescription.classList.add("flex-row")
    }

    return
}

const scrollFunction = () => {
    if(Date.now() - lastScrollDown > 40) {
      if (window.pageYOffset > 80) {
        document.getElementById("brand").style.fontSize = "44px"
        document.getElementById("nav").classList.remove("py-4")
        document.getElementById("nav").classList.add("pt-4")
        document.getElementById("job-description").style.cssText="display: none !important"
      } 

      lastScrollDown = Date.now()
    }

    if(Date.now() - lastScrollUp > 40) {
      if (window.pageYOffset <= 80) {
        document.getElementById("brand").style.cssText = "80px"
        document.getElementById("nav").classList.add("py-4")
        document.getElementById("nav").classList.remove("pt-4")
        document.getElementById("job-description").style.cssText="display: block"
      }

      lastScrollUp = Date.now()
    }

    return
}

window.addEventListener("resize", handleWindowSize)
window.addEventListener("scroll", scrollFunction)