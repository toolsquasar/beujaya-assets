/**
 * Copyright (c) 2019 Gian MR
 * Gian MR Theme Custom Javascript
 *
 * @package Superfast
 */
 
/*! sidr - v3.0.0 - 2017-12-10
  http://www.berriart.com/sidr/
  * Copyright (c) 2013-2017 Alberto Varela; Licensed MIT */
  !function(){"use strict";function e(e,t){var n=e.getAttribute(t);"string"==typeof n&&""!==n&&"sidr-inner"!==n&&e.setAttribute(t,n.replace(/([A-Za-z0-9_.-]+)/g,"sidr-"+t+"-$1"))}function t(e,t,n){for(var i=n.split(" "),o=0;o<i.length;o++){var s=i[o].trim();e.classList[t](s)}}function n(e,t,n){e[t]=n}function i(e,t,n){return e[t]}function o(e){return"BODY"===e.tagName}function s(e){var t="sidr-open";return"sidr"!==e&&(t+=" "+e+"-open"),t}function r(e){return"status"===e?k:M[e]?M[e].apply(this,Array.prototype.slice.call(arguments,1)):"function"!=typeof e&&"string"!=typeof e&&e?void console.error("Method "+e+" does not exist on sidr"):M.toggle.apply(this,arguments)}for(var a={name:"sidr",speed:200,side:"left",source:null,renaming:!0,body:"body",displace:!0,timing:"ease",method:"toggle",bind:"click",onOpen:function(){},onClose:function(){},onOpenEnd:function(){},onCloseEnd:function(){}},l={},u=function(e,t){l[e]=t},c=function(e){return l[e]},d=function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)},h=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},p=function(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&200===n.status&&t(n.responseText)},n.open("GET",e,!0),n.send()},f={id:function(e){return document.getElementById(e)},qs:function(e){return document.querySelector(e)},qsa:function(e){return document.querySelectorAll(e)},createElement:function(e){var t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},getHTMLContent:function(e){for(var t="",n=this.qsa(e),i=0;i<n.length;i++)t+='<div class="sidr-inner">'+n[i].innerHTML+"</div>";return t},addPrefixes:function(t){var n=document.createElement("div");n.innerHTML=t;for(var i=n.querySelectorAll("*"),o=0;o<i.length;o++)e(i[o],"id"),e(i[o],"class"),i[o].removeAttribute("style");return n.innerHTML},transitions:function(){var e=(document.body||document.documentElement).style,t=!1,n="transition",i="transition",o="transitionend";if(n in e)t=!0;else{var s=function(e,t){for(var n=void 0,i=["moz","webkit","o","ms"],o=0;o<i.length;o++)if((n=i[o])+e in t)return n;return!1}(n=n.charAt(0).toUpperCase()+n.substr(1),e);i=(t=!!s)?s+n:null,n=t?"-"+s+"-"+n.toLowerCase():null,"webkit"===s?o="webkitTransitionEnd":"0"===s&&(o="oTransitionEnd")}return{cssProperty:i,supported:t,property:n,event:o}}()},m=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},v=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),y=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},b=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},g=function(){function e(t){m(this,e),this.element=t}return v(e,[{key:"bind",value:function(e,t){this.element.addEventListener(e,t,!1)}},{key:"unbind",value:function(e,t){this.element.removeEventListener(e,t,!1)}},{key:"style",value:function(e,t){if("string"==typeof e)this.element.style[e]=t;else for(var n in e)e.hasOwnProperty(n)&&(this.element.style[n]=e[n])}},{key:"addClass",value:function(e){t(this.element,"add",e)}},{key:"removeClass",value:function(e){t(this.element,"remove",e)}},{key:"html",value:function(e){if(!e)return i(this.element,"innerHTML");n(this.element,"innerHTML",e)}},{key:"scrollTop",value:function(e){if(!e)return i(this.element,"scrollTop");n(this.element,"scrollTop",e)}},{key:"offsetWidth",value:function(){return this.element.offsetWidth}}]),e}(),C=function(e){function t(e,n){m(this,t);var i=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,f.qs(e.body)));return i.name=e.name,i.side=e.side,i.speed=e.speed,i.timing=e.timing,i.displace=e.displace,i.menuWidth=n,i}return y(t,g),v(t,[{key:"prepare",value:function(e){var t="open"===e?"hidden":"";if(o(this.element)){var n=new g(f.qs("html")),i=n.scrollTop();n.style("overflowX",t),n.scrollTop(i)}}},{key:"unprepare",value:function(){if(o(this.element)){new g(f.qs("html")).style("overflowX","")}}},{key:"move",value:function(e){this.addClass("sidr-animating"),"open"===e?this.open():this.close()}},{key:"open",value:function(){var e=this;if(this.displace){var t=f.transitions,n={width:this.offsetWidth()+"px",position:"absolute"};this.style(this.side,"0"),this.style(t.cssProperty,this.side+" "+this.speed/1e3+"s "+this.timing),this.style(n),setTimeout(function(){return e.style(e.side,e.menuWidth+"px")},1)}}},{key:"onClose",value:function(){var e=f.transitions,t={width:"",position:"",right:"",left:""};t[e.cssProperty]="",this.style(t),this.unbind(e.event,this.temporalCallback)}},{key:"close",value:function(){if(this.displace){var e=f.transitions;this.style(this.side,0);var t=this;this.temporalCallback=function(){t.onClose()},this.bind(e.event,this.temporalCallback)}}},{key:"removeAnimationClass",value:function(){this.removeClass("sidr-animating")}},{key:"removeOpenClass",value:function(){this.removeClass(s(this.name))}},{key:"addOpenClass",value:function(){this.addClass(s(this.name))}}]),t}(),k={moving:!1,opened:!1},O=function(e){function t(e){m(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,f.id(e.name)));return n.name=e.name,n.speed=e.speed,n.side=e.side,n.displace=e.displace,n.source=e.source,n.timing=e.timing,n.method=e.method,n.renaming=e.renaming,n.onOpenCallback=e.onOpen,n.onCloseCallback=e.onClose,n.onOpenEndCallback=e.onOpenEnd,n.onCloseEndCallback=e.onCloseEnd,n.init(e),n}return y(t,g),v(t,[{key:"init",value:function(e){this.element||(this.element=f.createElement(this.name)),this.style(f.transitions.cssProperty,this.side+" "+this.speed/1e3+"s "+this.timing),this.addClass("sidr sidr-"+this.side),this.body=new C(e,this.offsetWidth()),this.reload()}},{key:"reload",value:function(){var e=this;if("function"==typeof this.source){var t=this.source(name);this.html(t)}else if("string"==typeof this.source&&d(this.source))p(this.source,function(t){e.html(t)});else if("string"==typeof this.source){var n=f.getHTMLContent(this.source);this.renaming&&(n=f.addPrefixes(n)),this.html(n)}else null!==this.source&&console.error("Invalid Sidr Source")}},{key:"move",value:function(e,t){k.moving=!0,this.body.prepare(e),this.body.move(e),this.moveMenu(e,t)}},{key:"open",value:function(e){var t=this;if(k.opened!==this.name&&!k.moving)if(!1===k.opened)this.move("open",e),this.onOpenCallback();else{c(k.opened).close(function(){t.open(e)})}}},{key:"close",value:function(e){k.opened!==this.name||k.moving||(this.move("close",e),this.onCloseCallback())}},{key:"toggle",value:function(e){k.opened===this.name?this.close(e):this.open(e)}},{key:"onOpenMenu",value:function(e){var t=this.name;k.moving=!1,k.opened=t,this.unbind(f.transitions.event,this.temporalOpenMenuCallback),this.body.removeAnimationClass(),this.body.addOpenClass(),this.onOpenEndCallback(),"function"==typeof e&&e(t)}},{key:"openMenu",value:function(e){var t=this;this.style(this.side,0),this.temporalOpenMenuCallback=function(){t.onOpenMenu(e)},this.bind(f.transitions.event,this.temporalOpenMenuCallback)}},{key:"onCloseMenu",value:function(e){this.unbind(f.transitions.event,this.temporalCloseMenuCallback),this.style({left:"",right:""}),this.body.unprepare(),k.moving=!1,k.opened=!1,this.body.removeAnimationClass(),this.body.removeOpenClass(),this.onCloseEndCallback(),"function"==typeof e&&e(name)}},{key:"closeMenu",value:function(e){var t=this;this.style(this.side,""),this.temporalCloseMenuCallback=function(){t.onCloseMenu(e)},this.bind(f.transitions.event,this.temporalCloseMenuCallback)}},{key:"moveMenu",value:function(e,t){"open"===e?this.openMenu(t):this.closeMenu(t)}}]),t}(),w=function(e){return function(t,n){"function"==typeof t?(n=t,t="sidr"):t||(t="sidr");c(t)[e](n)}},M={},E=["open","close","toggle","reload"],_=0;_<E.length;_++){var T=E[_];M[T]=w(T)}var A=function(e){function t(e,n){m(this,t);var i=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.init(n),i}return y(t,g),v(t,[{key:"init",value:function(e){if(!this.element.getAttribute("data-sidr")){var t=e.name,n=e.method,i=e.bind;this.element.setAttribute("data-sidr",t),this.bind(i,function(e){e.preventDefault(),r(n,t)})}}}]),t}(),P={new:function(e,t){var n=h(a,t),i=f.qsa(e);u(n.name,new O(n));for(var o=0;o<i.length;o++)new A(i[o],n)},status:function(){return r.apply(void 0,["status"].concat(Array.prototype.slice.call(arguments)))},reload:function(){return r.apply(void 0,["reload"].concat(Array.prototype.slice.call(arguments)))},close:function(){return r.apply(void 0,["close"].concat(Array.prototype.slice.call(arguments)))},open:function(){return r.apply(void 0,["open"].concat(Array.prototype.slice.call(arguments)))},toggle:function(){return r.apply(void 0,["toggle"].concat(Array.prototype.slice.call(arguments)))}};window.sidr=P}();

  (function(sidr) {
      "use strict";
  
      sidr.new('#gmr-responsive-menu', {
          name: 'topnavmenus',
          source: '.gmr-logomobile, .close-topnavmenu-wrap, .gmr-mainmenu, .gmr-secondmenu',
          displace: false,
          onOpen   : function( name ) {
              // Re-name font Icons to correct classnames and support menu icon plugins.
              var elems = document.querySelectorAll( "[class*='sidr-class-icon_'], [class*='sidr-class-_mi']" ), i;
              for ( i = 0; i < elems.length; i++ ) {
                  var elm = elems[i];
                  if ( elm.className ) {
                      elm.className = elm.className.replace(/sidr-class-/g,'');
                  }
              }
          }
      });
  
      var closemenu = document.querySelector( '#sidr-id-close-topnavmenu-button' );
      if ( closemenu !== null ) {
          closemenu.addEventListener(
              'click',
              function( e ) {
                  e.preventDefault();
                  sidr.close('topnavmenus');
              }
          );
      }
      
      /* $( '.sidr-inner li' ).each( */
      var elmTag = document.querySelectorAll( '.sidr-inner li' ), i;
      
      for ( i = 0; i < elmTag.length; i++ ) {
          if ( elmTag[i].querySelectorAll( 'ul' ).length > 0 ) {
              var elm = elmTag[i].querySelectorAll( 'a' );
              if ( elm !== null ) {
                  elm[0].innerHTML += '<span class="sub-toggle"><span class="gmr-icon-down"></span></span>';
              }
          }
      }
      
      /* $( '.sidr-inner .sub-toggle' ).click( */
      var elmTag = document.querySelectorAll( '.sidr-inner .sub-toggle' ), i;
      
      for ( i = 0; i < elmTag.length; i++ ) {
          elmTag[i].addEventListener(
              'click',
              function( e ) {
                  e.preventDefault();
                  var t = this;
                  t.classList.toggle( 'is-open' );
                  if ( t.classList.contains( 'is-open' ) ) {
                      var txt = '<span class="gmr-icon-up"></span>';
                  } else {
                      var txt = '<span class="gmr-icon-down"></span>';
                  }
                  t.innerHTML = txt;
                  /* console.log (t.parentNode.parentNode.querySelectorAll( 'a' )[0].nextElementSibling); */
                  var container = t.parentNode.parentNode.querySelectorAll( 'a' )[0].nextElementSibling;
                  if ( !container.classList.contains( 'active' ) ) {
                      container.classList.add('active');
                  } else {
                      container.classList.remove('active');
                  }
              }
          );
      }
  
  })( window.sidr );
  
  /* Click Dropdown Search */
  (function(){
      "use strict";
  
      var btn = document.getElementById( 'search-menu-button' );
  
      // Close the dropdown menu if the user clicks outside of it
      if ( btn ) {
          btn.addEventListener(
              'click',
              function( e ) {
                  e.stopPropagation();
                  e.preventDefault();
                  var dropdowns = document.querySelector( '.search-dropdown' );
                  var closebtn  = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M10.657 12.071L5 6.414L6.414 5l5.657 5.657L17.728 5l1.414 1.414l-5.657 5.657l5.657 5.657l-1.414 1.414l-5.657-5.657l-5.657 5.657L5 17.728z" fill="currentColor" fill-rule="evenodd"/></svg>';
                  var searchbtn = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></g></svg>';
                  dropdowns.classList.toggle( 'active' );
                  if ( dropdowns.classList.contains( 'active' ) ) {
                      btn.innerHTML = closebtn;
                  } else {
                      btn.innerHTML = searchbtn;
                  }
                  var getid = document.getElementById( 'search-dropdown-container' );
                  document.addEventListener(
                      'click',
                      function( e ) {
                          if ( getid !== e.target && !getid.contains(e.target) ) {
                              if ( dropdowns.classList.contains( 'active' ) ) {
                                  dropdowns.classList.remove( 'active' );
                                  btn.innerHTML = searchbtn;
                              }
                          }
                      }
                  );
              }
          );
      }
  
  })();
  
  ( function() {
      "use strict";
      
      window.addEventListener(
      'scroll',
      function() {
          var elmontop = document.querySelector( '.gmr-ontop' );
          if ( document.body.scrollTop > 85 || document.documentElement.scrollTop > 85 ) {
              if ( elmontop !== null ) {
                  elmontop.style.display = 'block';
                  document.querySelector( '.gmr-ontop' ).addEventListener(
                      'click',
                      function( e ) {
                          e.preventDefault();
                          window.scroll({top: 0, left: 0, behavior: 'smooth'});
                      }
                  );
              }
          } else {
              if ( elmontop !== null ) {
                  elmontop.style.display = 'none';
              }
          }
  
      });
  })();
  