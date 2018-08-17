function toggleModal() {
  $(".modal").toggleClass("show-modal");
}

 $("#triggerBtn").click(function(){
   toggleModal();
 });

 $("#cancelBtn").click(function(){
   toggleModal();
 });

 $(".close-button").click(function(){
   toggleModal();
 });

 $("#uninstallBtn").click(function(){
   toggleModal();
   setTimeout(function() { alert("DONE"); }, 1);
 });


 $(window).click(function(event) {
    if(event.target === modal){
      toggleModal();
    }
});

var modal = document.querySelector(".modal");
