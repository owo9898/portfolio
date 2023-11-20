$(document).ready(function(){
    const Header = $('.header-wrap')
    console.log(Header)

    Header.click(function(){
        $('html, body').animate({
            scrollTop: 0
        },500);
    })
    // 윈도우를 스크롤할 때
    $(window).scroll(function(){
        let scrollPos = $(window).scrollTop()
        // console.log(scrollPos)
        if(scrollPos > 400) {
            Header.addClass('visible')
        } else {
            Header.removeClass('visible')
        }
    })
    // 토글
    $('.append').click(function(){
        $(".content").append(`<div class="box"></div>`)
        //$('.box').css("속성","속성값")
        $('.box').css("background-color",makeColor)
    })
    $('.slidetoggle').click(()=>{
        $('.content div').each(function(index,item){$(item).text(index)
        })
        $('.box:even').slideToggle(); 
    })
    // const videoChoice = $('.swiper-slide'),
    //       desc = $('.description')   
    // videoChoice.click(function(){
    //     $(this).addClass('on')
    //     let idx = $(this).index()
        
    // })
    $('.swiper-wrapper .swiper-slide').click(function(){
        // $('.work-video').addClass("show")
        let desc = $('.description')
        let idx = $(this).index()
        $('.item_box').remove();
        $(desc).hide();
        $('.work-video').append(`
            <div class="item_box">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${$(this).data("video")}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
        `)
        $(desc).eq(idx).show();

    })
})
// `
//         <div class="description">${$(desc).eq(idx).text()}</div>
        
//         `,
function skill(id,percent){
var bar = new ProgressBar.Circle(id, {
    strokeWidth: 8,
    easing: 'easeInOut',
    duration: 1600,
    color: '#A891FD',
    trailColor: '#ddd',
    trailWidth: 8,
    svgStyle: null,
    step: function(state,bar){
        bar.setText(Math.round(bar.value()*100) + '%');
    },
  });
  
  bar.animate(percent);  
}

skill('#aftereffect',0.80)
skill('#premier-pro',0.90)
skill('#web',0.75)
skill('#cinema-4D',0.85)

// 비행기

// const flightPath = {
//     //경로설정
//     //웨이브 넣기 1.25
//     curviness: 1,
//     autoRotate: true,
//     values: [
//         //비행기 좌표가 들어감 (위치값)
//         {x:300, y: 180},
//         {x:500, y: -30 },
//         {x:800, y: 40},
//         {x:window.innerWidth, y: -100}
//     ]
// }
// const tween = new TimelineLite();
// tween.add(
//     TweenLite.to('.airplane',3, {
//         bezier: flightPath,
//         //속도 정의
//         ease:Power1.easeInOut
//     })
// )

// // const controller = new ScrollMagic.Controller();
// // const scene = new ScrollMagic.Scene({
// //     triggerElement: '.animation',
// //     duration: 2000,
// //     triggerHook: 0
// // })

// .setTween(tween)
// .addIndicators()
// .setPin('.plane')


