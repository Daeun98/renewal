function long () {
    $('.vout').css({
        position:'fixed',
        top:0, left:0, right:0, bottom:0,
        background:'rgba(0,0,0,0.8)',
        zIndex:'999999'
    })
    $('.vin').css({
        position:'absolute',
        top:'100px', left:'100px', right:'100px', bottom:'100px',
    })
    $('.vin i').css({
        position:'absolute',
        top:'-50px', right:'-50px',
        padding:'5px',
        background:'none', 
        color:'#fff',
        border:'none',
        fontSize:'40px',
        cursor:'pointer'
    })
}
//동영상 이미지 클릭시 모달창에서 유튜브 동영상 플레이시키기
$('.series li:nth-child(1)').on('click',function(){
    $('body').append('<div class="vout"><div class="vin"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/RQLE69caHQs?autoplay=1&amp;" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><i class="fas fa-times"></i></div></div>') 
    long()
})

$('.series li:nth-child(2)').on('click',function(){
    $('body').append('<div class="vout"><div class="vin"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/ehNj-Es36J8?autoplay=1&amp;" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><i class="fas fa-times"></i></div></div>')
    long()
})

$('.series li:nth-child(3)').on('click',function(){
    $('body').append('<div class="vout"><div class="vin"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/68zq7vpTNTM?autoplay=1&amp;" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><i class="fas fa-times"></i></div></div>')
    long()
})

$('.series li:nth-child(4)').on('click',function(){
    $('body').append('<div class="vout"><div class="vin"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/V02C8aWvV2c?autoplay=1&amp;" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><i class="fas fa-times"></i></div></div>')
    long()
})

$('body').on('click', '.vout', function(){
    $(this).remove()
})
$('body').on('click', '.vin button', function(){
    $('.vout').remove()
})


// li
$('#header .nav ul li').hover(
    function() {
        $(this).css({marginLeft:'0px'})
        $('.lego .mouth').addClass('on')
    },
    function() {
        $(this).css({marginLeft:'-110px'})
        $('.lego .mouth').removeClass('on')

    }
)



// eyes
$('.series li:nth-child(1)').hover(
    function(){
        $('.lego .eyes').css({top:'360px'})
    },
    function(){
        $('.lego .eyes').css({top:'380px'})
    }
)
$('.series li:nth-child(2)').hover(
    function(){
        $('.lego .eyes').css({top:'370px'})
    },
    function(){
        $('.lego .eyes').css({top:'380px'})
    }
)
$('.series li:nth-child(3)').hover(
    function(){
        $('.lego .eyes').css({top:'390px'})
    },
    function(){
        $('.lego .eyes').css({top:'380px'})
    }
)
$('.series li:nth-child(4)').hover(
    function(){
        $('.lego .eyes').css({top:'400px'})
    },
    function(){
        $('.lego .eyes').css({top:'380px'})
    }
)

