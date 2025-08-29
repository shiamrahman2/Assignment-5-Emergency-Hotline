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
//function copy reuseablity funtion

function toCopyNumber(id)
{
   const text = document.getElementById(id).innerText.trim();
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
    });
}

// function  to calling

function toCall(id1, id2, element) {
    const phoneNumber = document.getElementById(id1).innerText;
    const serviceDetails = document.getElementById(id2).innerText;
    const coinValue = parseFloat(document.getElementById('coin-value').innerText);

    const oldClass = element.getAttribute("class");
    element.removeAttribute("class");
    element.removeAttribute("style");

    if (coinValue >= 20) {
        alert('calling for ' + serviceDetails + ' by ' + phoneNumber);
        document.getElementById('coin-value').innerText = coinValue - 20;
    } else {
        alert('You do not have sufficient coin');
        element.setAttribute("class", oldClass);
        return;
    }

    element.setAttribute("class", oldClass);
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

  // call

  document.getElementById('btn-call-ambulance')
    .addEventListener('click', function(){
        toCall('ambulance-number','service-ambulance', this);
    });

document.getElementById('btn-call-emergency')
    .addEventListener('click', function(){
        toCall('emergency-number','service-emergency', this);
    });

document.getElementById('btn-call-fire')
    .addEventListener('click', function(){
        toCall('fire-service-number','service-fire', this);
    });

document.getElementById('btn-call-police')
    .addEventListener('click', function(){
        toCall('police-number','service-police', this);
    });

document.getElementById('btn-call-health')
    .addEventListener('click', function(){
        toCall('health-number','service-health', this);
    });

document.getElementById('btn-call-railway')
    .addEventListener('click', function(){
        toCall('railway-number','service-railway', this);
    });

