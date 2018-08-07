var data;

function placeTool(){
  $(this).clone().appendTo("#draw");
}
$( "#trash" ).droppable({//移置垃圾桶刪除
  accept: ".toolActive",
  over: function( event, ui ) {
    ui.draggable.addClass("small");
  },
  drop: function( event, ui ) {
    ui.draggable.fadeOut(function() {
      ui.draggable.remove();
    });   
    if(ui.draggable.parent().find(".toolActive").length-1 == 0){
      ui.draggable.parent().parent().remove();
    }else if(ui.draggable.parent().find(".toolActive").length-1 == 1){
      ui.draggable.parent().sortable({
        cancel: ""
      });
    }
  }
});
dialog = $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 520,
      width: 350,
      modal: true,
      buttons: {
        "Confirm": function(){
         var name = $(this).find('#name').val();
         var type = $(this).find('#type').val();
         var obj = $(this).data('obj');
         if($("#draw").find('[name='+type+']').length == 0){
            $("#draw").append('<div name='+type+' class="typeBlock draggable" style="background-color: #F8BCA7;"><div name='+type+'scl class="scroll" style="background-color: hsl('+Math.random()*361+',25%,80%) ;"></div></div>');  
            obj.clone().attr("name",name).addClass("toolActive").addClass("disable").addClass("show").appendTo('[name='+type+'scl]');
         }else{
            obj.clone().attr("name",name).addClass("toolActive").addClass("arrow").addClass("move").appendTo('[name='+type+'scl]');
         }    
         if($("#draw").find('.typeBlock').length >4){
            var height = $(".wrap").height();
            $(".wrap").css("height",height+250+"px");
         }
         if($('[name='+type+'scl]').children().length == 1){
           $(".scroll").sortable({
              items: ".toolActive",//可排序（移動）的元素
              cursor: "move",
              start: function( event, ui ) {
                ui.item.addClass("small");
              },
              stop: function( event, ui ) {
                ui.item.removeClass("small");
              },
              placeholder: "dragPlace"
            });
         }else{
            $('[name='+type+'scl]').sortable({
              items: ".arrow",//可排序（移動）的元素
              cancel: ".disable"
            });
         }
         dialog.dialog( "close" );
        },
        Cancel: function() {
          dialog.dialog( "close" );
        }
      },
      close: function() {
        dialog.find( "form" )[0].reset();
      }
});
$(document).on("click", '#toolblock [name ="dragtool"]', function() {
  dialog.data('obj', $(this)).dialog( "open" );
});
$(document).on("click", "#save", function() {
  data = $("#draw").html();
  var title = $("#title").val();
  localStorage.setItem("data",data);
  localStorage.setItem("title",title);
  alert("success!");
});
$(document).on("click", "#clear", function() {
  $("#draw").html("");
  $("#title").val("");
  localStorage.clear(); 
  $(".wrap").css("height","1550px");
});
$(document).on("click", "#export", function() {//截圖
  html2canvas(document.getElementById("drawArea"), {
  onrendered: function(canvas) {
    var image = canvas.toDataURL("image/png",1).replace("image/png", "image/octet-stream"); //結果會是被Base64編碼後的圖片，但是要觸發下載必須先把型態改成octet-stream(用來騙瀏覽器而已，它還是png格式)
    // window.location.href = image;
    var link = document.createElement('a');
    link.download = $("#drawArea input").val()+'.jpeg';
    link.href = image;
    link.click();
  },
    allowTaint: false,
    logging: true,
    useCORS: true
});
});
$('.scroll').sortable({
  items: ".arrow",//可排序（移動）的元素
  cancel: "",
  cursor: "move",
  start: function( event, ui ) {
    ui.item.addClass("small");
  },
  stop: function( event, ui ) {
    ui.item.removeClass("small");
  },
  placeholder: "dragPlace"
});
$( '.draggabled').sortable();
$( '.draggabled' ).disableSelection();
$( '.scroll' ).disableSelection();
$(document).on("dblclick", ".toolActive img", function() {
  $(this).toggleClass("complete");
});
$(document).on("click", '#menu', function() {
  if($(".skillblock").css("display") == "none"){
      $(".wrap").css("margin-left","20vw");
      $(".wrap").css("width","80vw");
      $(".skillblock").show("slide", { direction: "left" });
  }else{ 
      $(".skillblock").hide("slide", { direction: "left" });
      setTimeout(function(){
        $(".wrap").css("margin-left","0");
        $(".wrap").css("width","100vw");
      },300);
  }
});
$( function() {
  // var imgArray=["https://vignette.wikia.nocookie.net/battlefordreamislandfanfiction/images/6/6e/33._Trash_Can.png/revision/latest?cb=20160121032851","https://drive.google.com/uc?id=1dVKNEmGU1HDy7KqG_4bI4LhQhuQ6yMdw","https://drive.google.com/uc?id=1dOrOmjbyfIrnlrgkh3TZlW4Wd0nhSDli","https://drive.google.com/uc?id=1ast6QQqxwBULImcjYx7ygCt_4cFYchJp","https://drive.google.com/uc?id=1dkNFykuRMeOlAJCM1xtKCCVx2gCkMD0k"];
  // for(var i=0;i<imgArray.length;i++){
  //   var img = new Image();
    // var canvas = document.createElement('canvas');
    // var ctx = canvas.getContext('2d');
    // img.crossOrigin = "Anonymous";
    // img.onload = function(){
    //     canvas.height = this.height;
    //     canvas.width = this.width;
    //     ctx.drawImage(this, 0, 0, img.width, img.height);   
    //     var url = canvas.toDataURL('image/png',1).replace("image/png", "image/octet-stream"); // 可指定 jpeg 品質
  //       $("#toolblock").append('<div name ="dragtool" class="tool"><img src='+imgArray[i]+' alt="tool" width="110" height="100"></div>');
  //   };
  //   img.src = imgArray[i];
  // }
  // $("#toolblock:nth-child(1)").attr("id","trash").attr("name","trash"); 
  data = localStorage.getItem("data");
  var title = localStorage.getItem("title");
  if(data != null){
    $("#draw").html(data);
    $("#title").val(title);
  }
});