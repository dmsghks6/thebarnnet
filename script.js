$(document).ready(function(){




    // 스크롤 탑에 따른 스타일링 변화 
    $(window).scroll(function(){
        const sct = $(window).scrollTop();


        if(sct >= 500){
            $('.banner-empty .header-area').addClass('on'); 
            // 헤더의 위에 부분 없어지게 하기

        }else {
            $('.banner-empty .header-area').removeClass('on');   

        }
    });



    media();

    function media(){
        let windowWidth = $(window).width();

        if(windowWidth >= 600){
            $('.menu-zone h3').click(function(){
                $('.menu-area').toggleClass('on');
            });
        
            // 서브메뉴 마우스호버시 
            $('.menu-area .menu').click(function(){
                console.log('dd')
                $(this).children().stop().slideDown();
            });
        
        
            $('.menu-area .menu').mouseenter(function(){
                // $('.sub-menu').stop().slideDown();
                // 수정
                $(this).siblings('.sub-menu').stop().slideDown();
                $(this).parent('.menu-area li').siblings().children('.sub-menu').stop().slideUp();
        
            });
        
            $('.menu-area > li').mouseleave(function(){
                $('.sub-menu').stop().slideUp();
            });
        
        
        
            
        }else if(windowWidth < 600){
             // 햄버거버튼 
            $('.hamburger').click(function(){
                $(this).toggleClass('on');
                $('.menu-area').toggleClass('on');
                $('.hamburger span:nth-child(1)').toggleClass('on');
                $('.hamburger span:nth-child(2)').toggleClass('on');
                $('.hamburger span:nth-child(3)').toggleClass('on');
            });

            $('.hamburger').click(function(){
                console.log('ee')
                $('.menu-zone').toggleClass('on');
            });
        }
    }



    // 메뉴버튼 click 하면 서브메뉴
    // $('.menu-zone h3').click(function(){
    //     $('.menu-area').toggleClass('on');
    // });

    // // 서브메뉴 마우스호버시 
    // $('.menu-area .menu').click(function(){
    //     console.log('dd')
    //     $(this).children().stop().slideDown();
    // });


    // $('.menu-area .menu').mouseenter(function(){
    //     // $('.sub-menu').stop().slideDown();
    //     // 수정
    //     $(this).siblings('.sub-menu').stop().slideDown();
    //     $(this).parent('.menu-area li').siblings().children('.sub-menu').stop().slideUp();

    // });

    // $('.menu-area > li').mouseleave(function(){
    //     $('.sub-menu').stop().slideUp();
    // });



    // // 햄버거버튼 
    // $('.hamburger').click(function(){
    //     $(this).toggleClass('on');
    //     $('.menu-area').toggleClass('on');
    //     $('.hamburger span:nth-child(1)').toggleClass('on');
    //     $('.hamburger span:nth-child(2)').toggleClass('on');
    //     $('.hamburger span:nth-child(3)').toggleClass('on');
    //   });

    // $('.hamburger').click(function(){
    //     console.log('ee')
    //     $('.menu-zone').toggleClass('on');
    // });

   

    

    // 추가
    $(window).scroll(function(){
        const empty3 = $(".empty3").offset().top+100;
        const sct = $(window).scrollTop();
        console.log(sct)

        if(sct >= empty3){
            console.log('h')
            $('.banner .video-area').addClass('on');
      
        }else{
            $('.banner .video-area').removeClass('on');
            

        }
    });


    gsap.registerPlugin(ScrollTrigger);
        
    ScrollTrigger.defaults({
    markers: false
    });

    // sticky-video
    $(".banner-empty").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(".sticky-video-element");

        let tl = gsap.timeline({
            scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top top",
            end: "bottom bottom",
            scrub: 3,
            }
        });
        tl.fromTo(targetElement, {
                width: "523px",
                height: "429px",
                borderRadius: "15px",
            },
            {
                width: "100vw",
                height: "100vh",
                borderRadius: "0",
                duration: 3,

            },
        );
    });




    // 이미지 마그네틱 


    $('.sec-3 .left-area').mouseleave(function(e){ 
         TweenMax.to(this, 0.3, {height: 1080,  width:605}); 
          TweenMax.to('.model1', 0.3,{scale:1, x: 0, y: 0});
    });

    $('.sec-3 .left-area').mouseenter(function(e){ 
         TweenMax.to(this, 0.3, {height: 1080  , width:605});  
         TweenMax.to('.model1', 0.3,{scale:1.2});
     });
        
    $('.sec-3 .left-area').mousemove(function(e){     
        callParallax(e);
    });
   


    function callParallax(e){  
        parallaxIt(e, '.model1', 200); 
    }
     
    function parallaxIt(e, target, movement){  
        var $this = $('.sec-3 .left-area');  
        var relX = e.pageX - $this.offset().left;  
        var relY = e.pageY - $this.offset().top;    

        TweenMax.to(target, 0.3, {   
            x: (relX - $this.width()/2) / $this.width() * movement,    
            y: (relY - $this.height()/2) / $this.height() * movement,    
            ease: Power2.easeOut  
        });
    }



    $('.sec-4 .right-area').mouseleave(function(w){ 
        TweenMax.to(this, 0.5, {height: 1080, width: 605}); 
         TweenMax.to('.model2', 0.5,{scale:1, x: 0, y: 0});
   });

   $('.sec-4 .right-area').mouseenter(function(w){ 
        TweenMax.to(this, 0.5, {height: 1080  , width: 605});  
        TweenMax.to('.model2', 0.5,{scale:1.2});
    });
       
   $('.sec-4 .right-area').mousemove(function(w){     
       callParallax2(w);
   });
   
   function callParallax2(w){  
       parallaxIt2(w, '.model2', 200); 
   }
    
   function parallaxIt2(w, target, movement){  
       var $this = $('.sec-4 .right-area');  
       var relX2 = w.pageX - $this.offset().left;  
       var relY2 = w.pageY - $this.offset().top;    

       TweenMax.to(target, 0.5, {   
           x: (relX2 - $this.width()/2) / $this.width() * movement,    
           y: (relY2 - $this.height()/2) / $this.height() * movement,    
           ease: Power2.easeOut  
       });
   }



   AOS.init();


});