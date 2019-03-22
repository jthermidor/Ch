$(".goku").hide();
$(".vegeta").hide();
$(".chichi").hide();


$(".bob1").click(function(){
   var birth = $(".super1").val(); 
   var fight = $(".super2").val();
   var eat =$(".super3").val();
   var power=parseInt(eat);
   var gender = $(".super4").val();

   if(birth === "yes" && fight === "no" && power ===1 && gender ==="girl"){
       $(".chichi").show();
   }else if(birth === "no" && fight === "yes" && power ===10 && gender ==="boy"){
       $(".goku").show();
       }else if(birth === "no" && fight ==="yes" && power ===9 && gender ==="boy"){
           $(".vegeta").show();
       }else{
           
           
           
           }
        
       
});