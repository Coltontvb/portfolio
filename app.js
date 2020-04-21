//Collect nodes
const aboutContent = document.getElementById(`about`);
const skillsContent = document.getElementById(`skills`);
const contactForm = document.getElementById(`contact`); 

//Set visibility of nodes
contactForm.setAttribute(`id`, `hide`);
aboutContent.setAttribute(`id`, `show`);
skillsContent.setAttribute(`id`, `hide`);

//Counter to check current visibile node
let indexCount = 0;

//Changes hide/show css styles
function nextSlide(){
    if (indexCount === 2) {
        contactForm.setAttribute(`id`, `show`);
        aboutContent.setAttribute(`id`, `hide`)
        skillsContent.setAttribute(`id`, `hide`)
    }

    if(indexCount === 1){
        contactForm.setAttribute(`id`, `hide`);
        aboutContent.setAttribute(`id`, `hide`)
        skillsContent.setAttribute(`id`, `show`)
        }
    if(indexCount === 0){
        contactForm.setAttribute(`id`, `hide`);
        aboutContent.setAttribute(`id`, `show`)
        skillsContent.setAttribute(`id`, `hide`)
        }
    indexCount = checkCount();
    console.log(indexCount);
}

//Counter logic
function checkCount() {
    if (indexCount != 2){
        indexCount += 1
        return indexCount
    }
    if(indexCount == NaN || indexCount === 2) {
        return indexCount = 0;
    }
}