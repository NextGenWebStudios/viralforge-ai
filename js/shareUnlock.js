export function unlockShare(){
    if(navigator.share){
        navigator.share({title:"ViralForge AI",url:window.location.origin});
    }
    let data = JSON.parse(localStorage.getItem("usage")) || {count:0};
    if(data.count > 0) data.count--;
    localStorage.setItem("usage", JSON.stringify(data));
    alert("1 extra generation unlocked!");
}
