export function checkLimit(){
    let today = new Date().toDateString();
    let data = JSON.parse(localStorage.getItem("usage")) || {};
    if(data.date != today) data = {date:today, count:0};
    if(data.count >= 4){ alert("Daily limit reached! Upgrade to premium."); return false; }
    data.count++;
    localStorage.setItem("usage", JSON.stringify(data));
    return true;
}
