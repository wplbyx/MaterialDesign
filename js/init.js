(function ($) {
  $(function () {

    // 初始化 侧边栏
    $('.sidenav').sidenav();

    // 初始化 右下角浮动按钮
    $('.fixed-action-btn').floatingActionButton({
      hoverEnabled: false
    });

    // 初始化图片滚动轮播特效
    $('.slider').slider({
      height: 300,
      duration: 160,
      interval: 5000
    });

    // 按钮提示动画样式初始化
    $('.tooltipped').tooltip({
      position: 'left',
      enterDelay: 200

    });

    // 初始化带有 toc-wrapper 样式控件 滚动固定事件
    setTimeout(function () {
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

    // nav-mobile SideNav 控件下所有的 a 标签点击事件处理函数
    $('#nav-mobile a').click(function (e) {
      // 显示触发事件的实例对象
      console.log('click event', $(this).attr('id'));
      // 这里需要实现 小屏幕点击侧边栏自动关闭侧边栏
      if ($(window).width() < 992) {
        console.log('screen width less of 992px');
        $('.sidenav').sidenav('close');
      }
    });


    // $('#show-info').click(function (e) {
    //   var width = $(window).width();
    //   console.log('side nav', width);
    //
    // });


    // 底部浮动按钮: 点击之后自动关闭, 并且触发事件响应函数
    $('.fixed-action-btn li a').click(function () {
      // $('.fixed-action-btn').floatingActionButton('close');
      switch ($(this).attr('id')) {
        case "back-top":
          console.log("back-top");
          break;
        case "give-praise":
          console.log("give-praise");
          break;
        case "leave-msg":
          console.log("leave-msg");
          break;
        default:
          break;
      }
    });

    // JS 控制 div 长宽比不变
    // $(window).resize(function () {
    //   // 延时 120ms 处理窗口大小改变事件
    //   setTimeout(function () {
    //     console.log('window resize...');
    //     // 遍历每个 resizeBox 盒子, 调整其大小
    //     $('.resizeBox').each(function () {
    //       var div_h = $(this).width() * 0.75;
    //       if (div_h < $(this).css('max-height')) {
    //         $(this).css('height',  div_h);
    //       }
    //       console.log('style', $(this).css('height'))
    //     });
    //   }, 120);
    // });


    // // 网页代码高亮显示:
    // var codeStr = "function getImageWidth(url, callback) {\n" +
    //   "  var img = new Image();\n" +
    //   "  img.src = url;\n" +
    //   "  // 如果图片被缓存，则直接返回缓存数据\n" +
    //   "  if (img.complete) {\n" +
    //   "    callback(img.width, img.height);\n" +
    //   "    return {\"width\": img.width, \"height\": img.height}; //将宽高值返回\n" +
    //   "  } else {\n" +
    //   "    // 完全加载完毕的事件\n" +
    //   "    img.onload = function () {\n" +
    //   "      callback(img.width, img.height);\n" +
    //   "      return {\"width\": img.width, \"height\": img.height};//将宽高值返回\n" +
    //   "    }\n" +
    //   "  }\n" +
    //   "}";
    // setTimeout(function () {
    //   // 遍历所有的 pre 标签
    //   $("pre").each(function () {
    //     var class_val = $(this).attr('class');
    //     console.log(class_val);
    //
    //     var class_arr = class_val.split(';');
    //     console.log(class_arr);
    //
    //     class_arr = class_arr[0].split(':');
    //     var lan_class = 'language-' + class_arr[1];  // 获得语言类型
    //
    //
    //     console.log('language type: ', lan_class);
    //
    //     var pre_content = '<code class="' + lan_class + '">' + codeStr + '</code>';
    //     $(this).attr("class",'line-numbers '+lan_class);  // 添加行号样式
    //     $(this).html(pre_content);
    //   });
    // }, 100);


  }); // end of document ready
})(jQuery); // end of jQuery name space
