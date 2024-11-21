/*let Theme = 0
function theme__dark()
{
    if (Theme == 0)
    {
        document.querySelector('.body').style.background = 'rgb(23, 25, 29)';
    }

}
function theme__white()
{
    if (Theme == 0)
        {
            document.querySelector('.body').style.background = 'white';
        }    
}
*/

const body = document.querySelector('.body');
console.log(body);

if(localStorage.getItem('bg-color') != null){
    color = localStorage.getItem('bg-color');
    body.style.background = color;
    
    if (color == 'dark'){
        body.style.color = 'white'
    } else{
        body.style.color = 'black'
    }
}

function theme__dark(){
    console.log('dark');
    body.style.background = 'rgb(23, 25, 29)'
    body.style.color = "white"
    localStorage.setItem('bg-color','dark')
}
function theme__white(){
    console.log('white');
    body.style.background = "white"
    body.style.color = "black"
    localStorage.setItem('bg-color','white')
}