const handleEditClick = () => {
    document.querySelector(".content0").classList.add("hide")
    document.querySelector(".content2").classList.add("hide")
    document.querySelector(".content1").classList.remove("hide")
}
document.querySelector(".button0").addEventListener("click", handleEditClick)

const handleEditClick1 = () => {
    document.querySelector(".content1").classList.add("hide")
    document.querySelector(".content2").classList.add("hide")
    document.querySelector(".content0").classList.remove("hide")
}
document.querySelector(".button1").addEventListener("click", handleEditClick1)

const handleEditClick2 = () => {
    document.querySelector(".content0").classList.add("hide")
    document.querySelector(".content1").classList.add("hide")
    document.querySelector(".content2").classList.remove("hide")
}
document.querySelector(".button2").addEventListener("click", handleEditClick2)
