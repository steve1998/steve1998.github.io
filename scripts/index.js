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

window.addEventListener("resize", handleWindowSize)