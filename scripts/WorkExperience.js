const WorkExperienceStep = document.querySelectorAll('.WorkExperienceStep'),
    progressBar = document.querySelector(".indicator"),
    buttons = document.querySelectorAll("button");

let currentStep = 1;

const updateSteps = (event) =>{
    currentStep = event.target.id === "next" ? ++currentStep: --currentStep;
    console.log(currentStep);
}

buttons.forEach(button => {
    button.addEventListener("click", updateSteps);
})
