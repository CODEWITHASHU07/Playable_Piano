let keys=[];
const key=document.querySelectorAll(".key");
let volumelevel =document.querySelector(".vol_slider input");
let Show_key =document.querySelector(".vol_checkbox input");
let music = new Audio("tunes/a.wav");
function setmusic(key)
{
    music.src=`tunes/${key}.wav`
    music.play() ;
    let upper_key = key.toUpperCase();
    const pressed_key = document.querySelector(`[data-tune = ${upper_key}]`)
    pressed_key.classList.add("active");
    setTimeout(() => {
        
        pressed_key.classList.remove("active");
       }, 200);
        
}
key.forEach(val=>{
    keys.push(val.dataset.tune)
    val.addEventListener("click",()=>setmusic(val.dataset.tune))
}   
)

document.addEventListener("keydown",(e)=>
{
   if(keys.includes(e.key.toUpperCase()))
    {
    setmusic(e.key);
    setTimeout(() => {
    music.pause();
   }, 200);
   
}
})
volumelevel.addEventListener("input",(e)=>
{
   music.volume = e.target.valueAsNumber;
    
})
let keyhide =()=>{
    key.forEach(val =>{
        val.classList.toggle("hide");
    })

}
Show_key.addEventListener("change",keyhide)