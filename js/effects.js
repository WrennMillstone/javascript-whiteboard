const fancyButton = document.querySelector(".fancyButton");
let fancyBool = false;


function makeButtonFancy()
{
    if (fancyBool === false)
    {
        this.style.backgroundColor = 'red';
        fancyBool = true;
    }
    else
    {
        this.style.backgroundColor = '';
        fancyBool = false;
    }
}

fancyButton.addEventListener('click', makeButtonFancy);