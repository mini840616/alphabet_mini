//alphabet

     $(function(){
        var i;
        var leftshift=100;    //³æ¦r¥d
        var lleftshift=50;  //µo­µ¥d
        var topPosi=250;           
        var cardHeight= parseInt(383 * 0.8) ;  //³æ¦r¥d
        var cardWidth = parseInt(312 * 0.8) ;  //³æ¦r¥d
        var lCardHeight= 600 ;  //µo­µ¥d
        var lCardWidth = 800 ;  //µo­µ¥d      
        var ncard = 33;
        var overlap = 20;
        var upercent=0.8;
        var larray =[] ;  
        var lobj={};        
        var letter = "" ;
        var xposi = 0;
        for	(i = 0; i < ncard ; i++) {              
            xposi= leftshift+i*overlap;    
            larray[i]=xposi;
        };
        
        var div = d3.select("#RU_alphabet");           
        var imgAll = div.selectAll("img")
        imgAll.data(larray)         
        .enter().append("img")
        .attr("id", function(d, i) { return  "img" + (i+1) ; }) 
        .attr("height",cardHeight)
        .attr("width",cardWidth)
        .attr("top",topPosi)
        .attr("src",function(d, i) { return "png\\" + (i+1) + ".png" ; })   
        .style("position","absolute") 
        .style("z-index",function(d, i) { return ncard - i ; })
        .style("top",topPosi+"px")
        .style("left",function(d) { return d + "px" });


        div.append("img")
        .attr("id","russian_alphabet3")
        .attr("height",114)
        .attr("width",586)
        .attr("src","png\\russian_alphabet3.png")   
        .style("position","absolute") 
        .style("z-index",0)
        .style("top","90px")
        .style("left","300px" );
        
        div.append("img")
        .attr("id","direction")
        .attr("height",28)
        .attr("width",678)
        .attr("src","png\\direction.png")   
        .style("position","absolute") 
        .style("z-index",0)
        .style("top","570px")
        .style("left","100px" );


       
        for (i=1 ; i <= ncard ; i++) { 
         var sel="#img"+i.toString();           
         $( sel ).hover(
          function() {
            var yo=parseInt($(this).attr("top"));                
            var yh=parseInt($(this).attr("height"));
            var sty=$(this).attr("style");
            var newtop =parseInt(yo - yh * upercent);
            var orgStr="top: " + yo +"px";
            var rplStr="top: " + newtop + "px" ;
            var newsty=sty.replace(orgStr,rplStr);
            $(this).attr("top",newtop );
            $(this).attr("style",newsty);
          }, function() {
            var yo=parseInt($(this).attr("top"));
            var yh=parseInt($(this).attr("height"));
            var sty=$(this).attr("style");
            //var newtop =parseInt(yo + yh * upercent);
            var newtop = topPosi ;
            var orgStr="top: " + yo +"px";
            var rplStr="top: " + newtop + "px" ;
            var newsty=sty.replace(orgStr,rplStr);
            $(this).attr("top",newtop);
            $(this).attr("style",newsty);
          }
         );                   
        }; 
        
        for (i=1 ; i <= ncard ; i++) { 
         var sel="#img"+i.toString();           
         $( sel ).click(
          function() {       
            var psel="p"+$(this).attr("Id");
            
            div.append("img")
            .attr("id", psel) 
            .attr("height",lCardHeight)
            .attr("width",lCardWidth)
            .attr("src","png\\p" + $(this).attr("Id").substr(3) + ".png")   
            .style("position","absolute")
            .style("z-index",100)
            .style("top",leftshift+"px")
            .style("left",leftshift+lleftshift+"px");
          
            div.append("img")
            .attr("id", "btn_sound")
            .attr("height",40)
            .attr("width",117)
            .attr("src","png\\button_sound.png")   
            .style("position","absolute")
            .style("z-index",150)
            .style("top",leftshift+150+"px")
            .style("left",leftshift+lleftshift+585+"px");            
            
            div.append("img")
            .attr("id", "btn_done")
            .attr("height",39)
            .attr("width",164)
            .attr("src","png\\button_done.png")   
            .style("position","absolute")
            .style("z-index",150)
            .style("top",leftshift+510+"px")
            .style("left",leftshift+lleftshift+580+"px");    

            div.append("audio")
            .attr("id", "mp3")
            .attr("src","sound\\" + $(this).attr("Id").substr(3) + ".mp3");  
            
            $("#btn_sound").click(  
              function() {  
              var aid = document.getElementById("mp3"); 
              aid.play();
              //$("#mp3").play();
            });                   
            
            $("#btn_done").click(  
              function() {
                $(this).remove(); 
                $("#btn_sound").remove();
                $("#mp3").remove();
                $("#"+psel).remove();                     
                for (j=1 ; j <= ncard ; j++) { 
                  var selh="#img"+j.toString();
                  $(selh).show();
                };  
            });                              
            for (j=1 ; j <= ncard ; j++) { 
              var selh="#img"+j.toString();
              $(selh).hide();
            };                         
         });
         
        };     

     });