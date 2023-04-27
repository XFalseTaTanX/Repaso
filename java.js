var tit = document.title;
var c = 0;
function writetitle()
{
    document.title = tit.substring(0,c);
    if(c==tit.length)
{

    c = 0;
    setTimeout("writetitle()", 1000)
}

else
{
    c++;
    setTimeout("writetitle()", 200)
}
}

writetitle()

const trigger = document.querySelector('.trigger');
const nav = document.querySelector('.full-screen');
const backdrop = document.querySelector('.backdrop');

trigger.addEventListener('click', () => nav.classList.add('open'));
backdrop.addEventListener('click', () => nav.classList.remove('open'));