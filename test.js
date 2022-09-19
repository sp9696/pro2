// let toggle=document.getElementsByClassName("toggle-button");
// let nav_links=document.getElementsByClassName("nav-links");

// // toggle.addEventListener("click", ()=>{nav_links.classList.toggle('active')})
// toggle.addEventListener("click", ()=>{nav_links.style.display='none'})
// // $(".toggle-button").click(function change(){$(".nav-links").css("display","none");})

let count = document.getElementById("count");

count.innerHTML = 0;

let cart=document.getElementById("shop");
count.addEventListener("mouseup", function setzero (){count.innerHTML=0;});
cart.addEventListener("mouseup", function setzero (){count.innerHTML=0;});

let cartbutton = document.getElementsByClassName("cart");
let cartbutton_mobile = document.getElementsByClassName("cartformobile");

console.log(cartbutton instanceof Array);
console.log(typeof cartbutton);

function countProperties(obj) {
    var count = 0;

    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
        {
            ++count;
        }
    }

    return count;
}
let len=countProperties(cartbutton);
let len2=countProperties(cartbutton_mobile);
console.log(len);

for(i=0;i<len;i++)
{
    cartbutton[i].addEventListener("click", function increment() {(count.innerHTML)++;
    if(count.innerHTML>=99)
    {
        count.innerHTML=99;
    }
    });
}
for(i=0;i<len2;i++)
{
    cartbutton_mobile[i].addEventListener("click", function increment(){(count.innerHTML)++;})
}