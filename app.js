


input=document.getElementById("usernameInput")
open=document.getElementById("open")
close=document.getElementById("close")




input.addEventListener("input", function(event) {
    let input = event.target
    let value = input.value

    let filteredValue = ""
    for (let i = 0; i < value.length; i++) {
        if (isNaN(value[i])) {
            filteredValue += value[i]
        }
    }


    input.value = filteredValue
});


open.addEventListener("click", function(event) {
    document.querySelector('.modal').style.display = 'block';
})

close.addEventListener("click", function(event) {
    document.querySelector('.modal').style.display = 'none';
})