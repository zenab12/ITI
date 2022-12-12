$(function(){
    var main = document.querySelector("main");

    main.addEventListener("mouseover", function (e) {
        for (var i = 0; i < main.children.length; i++) {
            if (e.target == main.children[i]) {
                e.target.style.opacity = .3;
            }
        }

    })

    main.addEventListener("mouseout", function (e) {
        for (var i = 0; i < main.children.length; i++) {
            if (e.target == main.children[i]) {
                e.target.style.opacity = 1;
            }
        }

    })



    var pop_up = $(".pop_up");
    pop_up.hide();

    var imgs = $(".gallery img");
    var prev = $(".prev i");
    var next = $(".next i");
    var activeImg ;
   
    $(imgs).click(function(e){
        pop_up.show(); 
        $(pop_up).find($("img")).attr("src",$(this).attr("src"));
        $(this).addClass("active");  
        var that =this;
        var lastimg =  $(imgs)[$(imgs).length -1]

        next.click(function(){
            activeImg = $("img.active");
            if($(activeImg)[0] != $(lastimg)[0]){
                $($(activeImg)[0]).removeClass("active").next().addClass("active");
                $($(activeImg)[0]).removeClass("active");
                $(pop_up).find($("img")).attr("src",$(($($(activeImg)[0]).next())[0]).attr("src"));

            }else 
            {
                $(pop_up).find($("img")).attr("src",$(that).attr("src"));
                $(that).addClass("active");  
            }

        
        });

        prev.click(function(){
            activeImg = $("img.active");
            if($(activeImg)[0] != $(imgs)[0]){
                $($(activeImg)[0]).removeClass("active").prev().addClass("active");
                $($(activeImg)[0]).removeClass("active");
                $(pop_up).find($("img")).attr("src",$(($($(activeImg)[0]).prev())[0]).attr("src"));

            }else 
            {
                $(pop_up).find($("img")).attr("src",$(lastimg).attr("src"));
                $($(activeImg)[0]).removeClass("active");
                $($(lastimg)[0]).addClass("active");  
            }
        });

    });

    
    pop_up.click(function(e){
        if(e.target === this)
        {
          $(this).hide()
        } 
    })



})