/* Alejandro Ingeniería — scripts compartidos */
(function(){
  var d=document;
  d.documentElement.classList.add("js");

  // Año del footer
  d.querySelectorAll("[data-year]").forEach(function(el){el.textContent=new Date().getFullYear()});

  // Menú móvil
  var nav=d.querySelector("nav"),btn=d.querySelector(".menu-btn"),links=d.querySelector(".links");
  if(btn&&links){
    btn.addEventListener("click",function(){
      var open=links.classList.toggle("open");
      nav.classList.toggle("open",open);
      btn.setAttribute("aria-expanded",open);
    });
    links.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){
      links.classList.remove("open");nav.classList.remove("open");btn.setAttribute("aria-expanded","false");
    })});
  }

  // Aparición suave de tarjetas
  var items=d.querySelectorAll(".reveal");
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e,i){
      if(e.isIntersecting){setTimeout(function(){e.target.classList.add("in")},i*70);io.unobserve(e.target)}
    })},{threshold:.12});
    items.forEach(function(el){io.observe(el)});
  }else items.forEach(function(el){el.classList.add("in")});

  // Diagrama de ojo animado (solo en la portada)
  var c=d.getElementById("eye");
  if(!c)return;
  var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
  var x=c.getContext("2d"),W,H,t=0,visible=true,dpr=Math.min(window.devicePixelRatio||1,2);
  function rs(){W=c.width=c.offsetWidth*dpr;H=c.height=c.offsetHeight*dpr}
  rs();addEventListener("resize",rs);
  var bits=[];for(var i=0;i<400;i++)bits.push(Math.random()<.5?1:-1);
  function frame(){
    x.fillStyle="rgba(0,36,81,.2)";x.fillRect(0,0,W,H);
    var UI=W/2.2,cy=H*.55,A=H*.18,off=(t*2)%UI;
    for(var k=0;k<6;k++){
      var s=(Math.floor(t/18)+k*7)%390;
      x.beginPath();
      for(var px=-UI;px<=W+UI;px+=6){
        var pos=(px+off)/UI,j=Math.floor(pos),f=pos-j;
        var a=bits[(s+j+400)%400],b=bits[(s+j+401)%400];
        var sm=f*f*(3-2*f),y=cy-A*(a+(b-a)*sm)+Math.sin((px+k*40)*.01)*3;
        px===-UI?x.moveTo(px,y):x.lineTo(px,y);
      }
      x.strokeStyle=k%2?"rgba(255,255,255,.18)":"rgba(58,160,236,.45)";
      x.lineWidth=1.6*dpr;x.stroke();
    }
    t++;
  }
  function loop(){if(visible&&!d.hidden)frame();requestAnimationFrame(loop)}
  if(reduce){for(var n=0;n<120;n++)frame();}           // imagen fija
  else{
    if("IntersectionObserver" in window)
      new IntersectionObserver(function(es){visible=es[0].isIntersecting}).observe(c);
    loop();
  }
})();
