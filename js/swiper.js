new Swiper('.work-swiper', {
    direction: 'vertical',
        slidesPerView: 4,//보여줄 이미지갯수
        spaceBetween: 20,
        slidesPerGroup: 1,//페이징 그룹핑할 갯수(슬라이드할 이미지 갯수)
        // loop: true,
        // loopFillGroupWithBlank: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        // hide: true,
    },
    mousewheel: true,
        
  });

  //   토글

$(document).ready(function(){
    const skillItems = $('.skills .skill');

    $.each(skillItems,function(index,skill){
        let index_num = index;
        $(this).children(".skill-title").click(function(){
            index_num = index_num.toString();
            let classname = "show-item"+index_num;
            
            $(this).next('.item').toggleClass(classname)
            $(this).children('.skill-icon').toggleClass('on')
        })
    })
})

// $(document).ready(function(){
//     $('.swiper-wrapper .swiper-slide').click(function(){
//         // $('.work-video').addClass("show")
//         let idx = $(this).index()
//         $('.item_box,.description').remove();
//         $('.work-video').append(`
//             <div class="item_box">
//                 <iframe width="560" height="315" src="https://www.youtube.com/embed/${$(this).data("video")}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//             </div>
            
//         `)
//         $('.video-contents').append(`
//         <div>${$('#desc')}</div>
        
//         `,
//         console.log('.description'))

//     })
// })

//트리거

$(document).ready(function(){
    let tabMenu = $('.swiper-slide img'),
        tabSlider = $('.work-video > div')
    tabMenu.click(function(){
        tabMenu.removeClass('active')
        $(this).addClass('active')
        tabSlider.hide();
        let target = $(this).find('a').attr("href")
        $(target).show();
    })
    tabMenu.eq(0).trigger('click')

})


//헤더

let lastScroll = 0;
$(window).on('scroll', function(){
    let scrollTop = $(this).scrollTop();
    if(scrollTop > lastScroll) {
        //down
        $('.header').removeClass('fixed');
    } else {
        // up
        $('.header').addClass('fixed');
    }
    lastScroll = scrollTop;
});

// $(document).ready(function(){
//     const mainHeader = $('.header')
//         $(window).scroll(function(){
//             if($(this).scrollTop() > 50) {
//                 if(!mainHeader.hasClass('shrink')){
//                     mainHeader.addClass('shrink')
//                     // switchLogos(smallLogo)
//                 }
//                 // ! = not 부정. 반대로 감
//                 // -> 슈링크가 있다 -> !면 없다로 부정.
//                 // 그러면 add로 더해줘야지 슈링크가 실행
//             }else {
//                 if(mainHeader.hasClass('shrink')){
//                     mainHeader.removeClass('shrink')
//                 }
//             }
//         })      
        
//         // function switchLogos(newPath) {
//         //     let logo = $('#logo')
//         //     // 요소명.fadeOut(변환시간, 변환 후 할일)
//         //     logo.fadeOut(100,function(){
//         //         $(this).attr('src',newPath)
//         //     }) //0.3초만에 사라짐
//         //     logo.fadeIn(100);
//         // }
// })

// $(function(){
//     const header = $('.header')
//     let threshold = header.offset().top + header.outerHeight();
// $(window).on('scroll',$.throttle(1000/15, function(){
//     if($(this).scrollTop() >= threshold) {
//         header.addClass('visible')
//     }else {
//         header.removeClass('visible')
//     }
// }))
// })

