function mawa(heey){
    let a=["p1","p2","p3","p4","p5","p6","p7","p8","p9","p10","p11","p12","p13","p14","p15","p16"];
    for(let i=0;i<=a.length;i++){
        if(heey==a[i]){
            let b=document.querySelector(`.${a[i]}`).innerHTML;
            document.getElementById("center").innerHTML=b;
        }
    }
}
function jagga(){
  /*  let b=document.querySelector("#maxs").innerHTML;
   document.querySelector(".pyth").innerHTML=b;*/
   document.getElementById('home').style.display = 'none';
   document.getElementById('about').style.display = 'none';
   document.getElementById('service').style.display = 'block';
   /*b.style.position="relative";
   b.style.bottom="160px";*/
}
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.item').forEach(function(section) {
        section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Initially hide all sections except the home section
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});