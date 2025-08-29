// heart Count
function toIncreaseHeartCount(){
        const heartCount=parseInt(document.getElementById('heart-icon').innerText);
        document.getElementById('heart-icon').innerText=heartCount+1;
}

//function to increase copy count

function increaseCopyCount()
 {
   const heartCount=parseInt(document.getElementById('copy-count').innerText);
        document.getElementById('copy-count').innerText=heartCount+1;
 }
//  copy reuseablity funtion

function toCopyNumber(id)
{
   const text = document.getElementById(id).innerText.trim();
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
    });
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

    // copy 
    document.getElementById("copy-btn-ambulance")
    .addEventListener("click", function () {
       toCopyNumber('ambulance-number')
       increaseCopyCount()
  });
document.getElementById("copy-btn-emergency")
    .addEventListener("click", function () {
       toCopyNumber('emergency-number')
       increaseCopyCount()
  });

  document.getElementById("copy-btn-fire")
    .addEventListener("click", function () {
       toCopyNumber('fire-service-number')
       increaseCopyCount()
  });

  document.getElementById("copy-btn-police")
    .addEventListener("click", function () {
       toCopyNumber('police-number')
       increaseCopyCount()
  });

  document.getElementById("copy-btn-heath")
    .addEventListener("click", function () {
       toCopyNumber('health-number')
       increaseCopyCount()
  });

  document.getElementById("copy-btn-railway")
    .addEventListener("click", function () {
       toCopyNumber('railway-number')
       increaseCopyCount()
  });
