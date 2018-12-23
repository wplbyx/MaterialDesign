(function($){
  $(function(){

    // 初始化 侧边栏
    $('.sidenav').sidenav();
    

    // 初始化带有 toc-wrapper 样式控件 滚动固定事件
    setTimeout(function() {
      var adjustHeight = 300;
      var socialHeight = $('body').height() - $('footer').height();
      var contentsHeight = $('.toc-wrapper .table-of-contents').length
        ? $('.toc-wrapper .table-of-contents').height()
        : 0;
      if ($('nav').length) {
        $('.toc-wrapper').pushpin({
          top: 172,
          bottom: socialHeight - contentsHeight - adjustHeight
        });
      } 
    }, 100);
    
    
    // nav-mobile 控件下所有的 a 标签点击事件处理函数
    $('#nav-mobile a').click(function(e) {
        // 显示触发事件的实例对象
        console.log('click event', $(this).attr('id'));
        // 这里需要实现 小屏幕点击侧边栏自动关闭侧边栏
        // 1. 获取屏幕
        // $('.sidenav').sidenav('close');
    });
    
    
  }); // end of document ready
})(jQuery); // end of jQuery name space
