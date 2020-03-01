$.fn.extend({
    animateCss: function(animationName, callback) {
      var animationEnd = (function(el) {
        var animations = {
          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',
        };
  
        for (var t in animations) {
          if (el.style[t] !== undefined) {
            return animations[t];
          }
        }
      })(document.createElement('div'));
  
      this.addClass(animationName).one(animationEnd, function() {
        $(this).removeClass(animationName);
  
        if (typeof callback === 'function') callback();
      });
  
      return this;
    },
  });

  
$("#red").on('mouseover',function(){
    $("#red").removeClass('s6 s8 s4').addClass('s8');
    $("#green").removeClass('s6 s8 s4').addClass('s4');
    $("#gr").removeClass('w3-red w3-green').addClass('w3-green')
    $("#red").animateCss('slideInRight');
})

$("#green").on('mouseover',function(){
    $("#green").removeClass('s6 s8 s4').addClass('s8');
    $("#red").removeClass('s6 s8 s4').addClass('s4');
    $("#gr").removeClass('w3-red w3-green').addClass('w3-red')
    $("#green").animateCss('slideInLeft')
})

$('body').on('mouseleave', function(){
    $("#green").removeClass('s6 s8 s4').addClass('s6');
    $("#red").removeClass('s6 s8 s4').addClass('s6');
    $("#gr").removeClass('w3-red w3-green').addClass('w3-red')
    //$("#green").animateCss('slideInLeft')
})