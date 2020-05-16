$(document).ready(function(){
  // Wow initialize
  new WOW().init();


// Viewport Slides Codes Start Here
  var eslideIndex = 0;
  var t;

  function showEducationSlides() {
    var i;
    var eslides = document.getElementsByClassName("educationSlides");
    for (i = 0; i < eslides.length; i++) {
      eslides[i].style.display = "none";  
    }
    eslideIndex++;
    if (eslideIndex > eslides.length) {eslideIndex = 1}    
    eslides[eslideIndex-1].style.display = "block";
    t = setTimeout(showEducationSlides, 500); // Change image 2 times per second
  }

  function stopEducationSlides(){
      clearInterval(t, 0);
  }


  var tslideIndex = 0;
  var ta;

  function showTrainingSlides() {
    var i;
    var tslides = document.getElementsByClassName("trainingSlides");
    for (i = 0; i < tslides.length; i++) {
      tslides[i].style.display = "none";  
    }
    tslideIndex++;
    if (tslideIndex > tslides.length) {tslideIndex = 1}    
    tslides[tslideIndex-1].style.display = "block";
    ta = setTimeout(showTrainingSlides, 500); // Change image 2 times per second
  }

  function stopTrainingSlides(){
      clearInterval(ta, 0);
  }


  var rslideIndex = 0;
  var taa;

  function showResearchSlides() {
    var i;
    var rslides = document.getElementsByClassName("researchSlides");
    for (i = 0; i < rslides.length; i++) {
      rslides[i].style.display = "none";  
    }
    rslideIndex++;
    if (rslideIndex > rslides.length) {rslideIndex = 1}    
    rslides[rslideIndex-1].style.display = "block";
    taa = setTimeout(showResearchSlides, 500); // Change image 2 times per second
  }

  function stopResearchSlides(){
      clearInterval(taa, 0);
  }


  var aslideIndex = 0;
  var taaa;

  function showAdvocacySlides() {
    var i;
    var aslides = document.getElementsByClassName("advocacySlides");
    for (i = 0; i < aslides.length; i++) {
      aslides[i].style.display = "none";  
    }
    aslideIndex++;
    if (aslideIndex > aslides.length) {aslideIndex = 1}    
    aslides[aslideIndex-1].style.display = "block";
    taaa = setTimeout(showAdvocacySlides, 500); // Change image 2 times per second
  }

  function stopAdvocacySlides(){
      clearInterval(taaa, 0);
  }


  $('.edu').mouseenter(function(){
      stopResearchSlides();
      stopTrainingSlides();
      stopAdvocacySlides();
      showEducationSlides();
      $('.viewport-banner').hide(0);
      $('.trainingSlides').hide(0);
      $('.researchSlides').hide(0);
      $('.advocacySlides').hide(0);
      $('.education-slides').css("display", "block");
      $('.training-slides').css("display", "none");
      $('.research-slides').css("display", "none");
      $('.advocacy-slides').css("display", "none");
  });

  $('.edu').mouseleave(function(){
      stopEducationSlides();
      $('.viewport-banner').show(0);
  });



  $('.tra').mouseenter(function(){
      stopEducationSlides();
      stopResearchSlides();
      stopAdvocacySlides();

      showTrainingSlides();
      $('.viewport-banner').hide(0);
      $('.educationSlides').hide(0);
      $('.researchSlides').hide(0);
      $('.advocacySlides').hide(0);
      $('.training-slides').css("display", "block");
      $('.education-slides').css("display", "none");
      $('.research-slides').css("display", "none");
      $('.advocacy-slides').css("display", "none");
  });

  $('.tra').mouseleave(function(){
      stopTrainingSlides();
      $('.viewport-banner').show(0);
  });



  $('.res').mouseenter(function(){
      stopEducationSlides();
      stopTrainingSlides();
      stopAdvocacySlides();

      showResearchSlides();
      $('.viewport-banner').hide(0);
      $('.trainingSlides').hide(0);
      $('.educationSlides').hide(0);
      $('.advocacySlides').hide(0);
      $('.research-slides').css("display", "block");
      $('.training-slides').css("display", "none");
      $('.education-slides').css("display", "none");
      $('.advocacy-slides').css("display", "none");
  });

  $('.res').mouseleave(function(){
      stopResearchSlides();
      $('.viewport-banner').show(0);
  });



  $('.adv').mouseenter(function(){
      stopEducationSlides();
      stopTrainingSlides();
      stopResearchSlides();

      showAdvocacySlides();
      $('.viewport-banner').hide(0);
      $('.trainingSlides').hide(0);
      $('.researchSlides').hide(0);
      $('.educationSlides').hide(0);
      $('.advocacy-slides').css("display", "block");
      $('.training-slides').css("display", "none");
      $('.research-slides').css("display", "none");
      $('.education-slides').css("display", "none");
  });

  $('.adv').mouseleave(function(){
      stopAdvocacySlides();
      $('.viewport-banner').show(0);
  });
// Viewport Slides Codes End Here


});