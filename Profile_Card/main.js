var stats_change = document.querySelector("h5")
var add_friend = document.querySelector("#btn")
var check = 0;

add_friend.addEventListener('click', function(){
    if(check == 0)
    {
        stats_change.innerHTML = "Friends";
        stats_change.style.color = "rgba(0, 173, 75, 1)";
        add_friend.innerHTML = "Remove Friend";
        add_friend.style.backgroundColor = "rgb(161, 0, 0)"
        add_friend.style.color = "white"
        

        check = 1;
    }
    else
    {
        stats_change.innerHTML = "Stranger";
        stats_change.style.color = "rgb(161, 0, 0)";
        add_friend.innerHTML = "Add Friend";
        add_friend.style.backgroundColor = "rgb(4, 228, 253)"
        add_friend.style.color = "black"

        check = 0;
    }
})
