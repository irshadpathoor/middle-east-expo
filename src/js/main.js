
/*parallax scroll*/
$.fn.parallax2 = function ( resistance, mouse ) 
{
	$el = $( this );
	TweenLite.to( $el, 0.2, 
	{
		x : -(( mouse.clientX - (window.innerWidth/2) ) / resistance ),
		y : -(( mouse.clientY - (window.innerHeight/2) ) / resistance )
	});

};


/*mobile nav*/
function openSideMenu() {
	document.getElementById('side-menu').style.width = '250px';
	document.getElementById('main').style.marginRight = '250px';	
}

function closeSideMenu() {
	document.getElementById('side-menu').style.width = '0';
	document.getElementById('main').style.marginRight = '0';	
}


/*wow.js*/
 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };   
