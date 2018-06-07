layui.use('carousel', function(){
  var carousel = layui.carousel;
  //建造实例
  carousel.render({
    elem: '#test1'
    ,width: '100%' //设置容器宽度
    ,arrow: 'always' //始终显示箭头
    //,anim: 'updown' //切换动画方式
  });
});
layui.use('carousel', function(){
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
      elem: '#test2'
      ,width: '100%' //设置容器宽度
      ,arrow: 'always' //始终显示箭头
      //,anim: 'updown' //切换动画方式
    });
  });
  layui.use('layer', function(){
  
  });              
       

$(function(){
    $('.containor').on('mouseenter', function() {
		$(".banner_right").removeClass('hide');
	}).on('mouseleave', function() {
		$(".banner_right").addClass('hide');
		$(".sub").addClass('hide');
	}).on('mouseenter', 'li', function(e) {
		var li_data = $(this).attr('data-id');
		$(".sub").addClass('hide');
		$('.sub[data-id="' + li_data + '"]').removeClass('hide');
    })
})
$(function(){
    $('#text_focus').on('focus',function(){
        $('.icon').css('display','none');
        $('.layui-icon-search').css('color','red');

    })
    $('#text_focus').on('blur',function(){
        $('.icon').css('display','block');
        $('.layui-icon-search').css('color','black');
    })
})
