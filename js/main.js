// $(document).ready(function() {
//   $(".test").css({ "animation-duration": ".3s", "animation-delay": "3s" });
// });
let element, className;
element = $(".qrbox");
className = "fadeInUp";
const fn = function() {
  element.css("opacity", "0");
  //页面卷曲高度
  var scrollHeight = $(window).scrollTop();

  //顶部距文章顶部高度
  var elementTopToTop = element.offset().top;
  //显示器高度
  var screenH = $(window).height();
  //当元素从上往下出现在屏幕中
  if (
    elementTopToTop - scrollHeight >= 0 &&
    elementTopToTop - scrollHeight <= screenH
  ) {
    element.addClass("animated " + className).css("opacity", "1");
  }
};

fn();

$(window).scroll(function() {
  fn();
});
