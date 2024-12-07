let close_button = document.querySelector("button.close-button");
close_button.addEventListener("click", function(event){
    let parent_div = close_button.parentElement;
    parent_div.style.visibility = "hidden";
})