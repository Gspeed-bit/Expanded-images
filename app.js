
const panels = document.querySelectorAll(".panel");


panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        removeActiveClasses()

        panel.classList.toggle("active") //instead of toggle you can use .add

    } )
});

const removeActiveClasses = ()=>{
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}