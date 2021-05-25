
function animacao(){
  let texto1 = document.querySelector("#texto1")
  let texto2 = document.querySelector("#texto2")
  let fname = document.querySelector("#fname")

  $(window).scroll(function(){
    let Srect = texto1.getBoundingClientRect()
    let Srect2 = texto2.getBoundingClientRect()
    let Srect3 = fname.getBoundingClientRect()
    let y = Srect.top
    let y2 = Srect2.top
    let y3 = Srect3.top

    if (document.body.scrollTop > y || document.documentElement.scrollTop > y){
      $("#texto1").addClass("animaTexto1")
      $("#venus img").addClass("animaVenus")
    }

    if (document.body.scrollTop > y2 || document.documentElement.scrollTop > y2){
      $("#texto2").addClass("animaTexto2")
      $("#mercurio img").addClass("animaMercuruio")
    }

    if (document.body.scrollTop > y3 || document.documentElement.scrollTop > y3){
      $("fieldset").addClass("animaFieldset")
    }
  })
}
$(document.body).ready(function(){
  animacao() 
})

if(window.performance) {
  animacao()
}
   
