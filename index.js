// heart Count
function toIncreaseHeartCount(){
        const heartCount=parseInt(document.getElementById('heart-icon').innerText);
        document.getElementById('heart-icon').innerText=heartCount+1;
}

document.getElementById('ambulance-heart')
  .addEventListener('click',function()
    {
       toIncreaseHeartCount();
    })
document.getElementById('emergency-heart')
  .addEventListener('click',function()
    {
       toIncreaseHeartCount();
    })
document.getElementById('fire-service-heart')
  .addEventListener('click',function()
    {
       toIncreaseHeartCount();
    })
document.getElementById('police-heartless')
  .addEventListener('click',function()
    {
       toIncreaseHeartCount();
    })
document.getElementById('brac-heart')
  .addEventListener('click',function()
    {
       toIncreaseHeartCount();
    })
document.getElementById('railway-heart')
  .addEventListener('click',function()
    {
       toIncreaseHeartCount();
    })