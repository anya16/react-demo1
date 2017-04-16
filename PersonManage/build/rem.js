(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      console.log("clientWidth:"+clientWidth)
      if(clientWidth < 375){
        clientWidth = 375;
      }

      if(clientWidth > 480){
        clientWidth = 480;
      }
      
      console.log("clientWidth:"+clientWidth)
      if (!clientWidth) return;
      docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
      console.log("fontsize:"+(20 * (clientWidth / 375))+ 'px')
    };
 
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);