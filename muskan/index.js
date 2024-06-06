let body = document.body;
document.getElementById('mybtn').addEventListener("click",()=>{
    body.classList.toggle('light')
    if(body.classList.contains('light')) {
        document.getElementById('mybtn').innerText="😎";
        document.getElementById('mybtn').style.backgroundColor="purple"
    }
    else {
        document.getElementById('mybtn').innerText="👋";
        document.getElementById('mybtn').style.backgroundColor="aqua"
    }
})
