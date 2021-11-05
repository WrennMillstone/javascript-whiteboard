const fancyButton = document.querySelector(".fancyButton");
let fancyBool = false;


function makeButtonFancy()
{
    if (fancyBool === false)
    {
        this.style.backgroundColor = 'purple';
        this.style.padding = '20px 20px';
        this.style.border = '5px dashed gold';
        this.style.borderRadius = '100px';
        this.style.color = 'gold';
        this.innerHTML = 'Oh no, go back!';
        this.style.fontSize = '64px';
        this.style.fontFamily = 'Great Vibes';
        this.style.textShadow = ' 1px 2px 3px black';
        this.style.boxShadow = '0px 8px 15px black';
        fancyBool = true;
    }
    else
    {
        this.style.backgroundColor = '';
        this.style.padding = '';
        this.style.border = '';
        this.style.borderRadius = '';
        this.style.color = '';
        this.innerHTML = 'Make me fancy!';
        this.style.fontSize = '';
        this.style.fontFamily = '';
        this.style.textShadow = '';
        this.style.boxShadow = '';
        fancyBool = false;
    }
}

fancyButton.addEventListener('click', makeButtonFancy);