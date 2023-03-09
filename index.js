const submit = document.querySelector(".submit"); 
submit.addEventListener('click',(e)=>{ 
    e.preventDefault()
    const input = document.querySelector(".input").value
    if(isNaN(parseInt(input)))alert("Incorrect code!")
    else if(input.length<6)alert("Input is too short!")
    else if(input.length>6)alert("Input is too long!")
    else {
        alert("Input successful!")
        location.reload()
    }
})