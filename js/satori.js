 // Fix pages to fit the viewport at all times
 var pageState;
      $(function() {
        pageState = 'exterior';
        resizeDiv();
        hideSlides();
        mainNavControl();
        activeFunc();
        satoriSlider();
        slideHome();
        carouselLinks();
        SlidenavUp();
        carouselLinksApproach();
        carouselSlidehome();
        lampLinksApproach();
        carouselSlideApproach();
        $('.subnav').hide();
        $('.subnav').css({'height': "0px"});
        $("#home-exterior").show();
        window.onresize = function(event) {
          resizeDiv();
        };
        $('#project05, #approachSlide').each(function(){
        $(this).carousel({
            interval: false
        });
      }); 
    });

    function hideSlides() {
      $("#home-interior, #about-interior, #solutions-interior, #approach-interior, #contact-interior, #home-exterior, #about-exterior, #solutions-exterior, #approach-exterior, #contact-exterior").hide();
    }
    function hideInteriorSlides() {
      $("#home-interior, #about-interior, #solutions-interior, #approach-interior, #contact-interior").hide();
    }
    function hideExteriorSlides() {
      $("#home-exterior, #about-exterior, #solutions-exterior, #approach-exterior, #contact-exterior").hide();
    }
    //GRABS THE CURRENT DIMENSIONS OF THE BROWSERS VIEWPORT AND UPDATES THE CSS TO FIT THE CURRENT WIDTH AND HEIGHT
    function resizeDiv() {
      var vpw = $(window).width();
      var vph = $(window).height();
      var navBar = $("nav");
      var navBarHeight = navBar.css('height').replace('px','');
      var nbh = navBarHeight;
      ih = (vph-nbh);
      $('#exterior-page, #interior-page').css({'height': vph + 'px'});
      if(pageState == 'exterior') {
        $('#interior-page').css({'height': vph + 'px'});
        $('#interior-page').css({'bottom': -ih + 'px'});
      }
    }



    //MAIN NAVIGATION FUNCTIONING.
    function mainNavControl() {
      $("#main-nav li").click(function(e) {
        e.preventDefault();
        var id = $(this).attr('id');
        var iSlide = ('#' + id + '-interior');
        var Slide = ('#' + id + '-exterior');
        //switch color of nav links based on current slide
        var slideColor = (id + '-color');
        if(!(id == 'twitter' || id == 'facebook')) {
          $("#main-nav li#home, #main-nav li#about, #main-nav li#solutions, #main-nav li#approach, #main-nav li#contact, #main-nav").removeClass();
          $(this).addClass('active');
          $("#main-nav").addClass(slideColor);
        }
        var k = $("Slide").css('bottom');
        var bottom = $("#interior-page").css('bottom').replace('px','');
        var g = bottom;
          if(!(id == 'twitter' || id == 'facebook')) {
            if(pageState == 'interior' & id == 'home' ) {                
              hideExteriorSlides();
              $(iSlide).fadeOut();
              $(Slide).fadeIn();
              $(".subnav").delay(100).fadeOut();
              $('.subnav').delay(100).css({'height': "0px"});
              $('#interior-page').stop().animate({'bottom': -ih + 'px'}, 1500, 'easeOutQuint');
              pageState = 'exterior';
            }
            else if(pageState == 'interior') {
              hideInteriorSlides();
              $(iSlide).fadeIn();
              pageState == 'exterior';
            }
            else if(pageState == 'exterior' & id == 'home' ) {
              e.preventDefault();
            }
            else if (pageState == 'exterior') {
              hideInteriorSlides();
              $(iSlide).fadeIn();
              $('#interior-page').stop().animate({'bottom': '0px'}, 500, 'easeInQuad');
              $(".subnav").delay(100).fadeIn();
              $('.subnav').delay(100).animate({'height': "40px"}, 500, 'easeInQuad');
              pageState = 'interior';
            }
          }
          else {
            alert("clicked on");
          }
        });
      }
    // SLIDE THE NAV UP TO THE APPROPRIATE SLIDE WITH ANY OBJECT THAT HAS THE CLASS 'more'
    function SlidenavUp() {
      $(".more").unbind('click').click(function(e) {
        var id = $(this).attr('href');
        var iSlide = (id + '-interior');
        var Slide = (id + '-exterior');
        e.preventDefault();
        hideInteriorSlides();
        $(iSlide).fadeIn();
        $('#interior-page').stop().animate({'bottom': '0px'}, 500, 'easeInQuad');
        pageState = 'interior';
      });
    }

    // ADDING THE ACTIVE STATE TO THE NAVIGATION
    function activeFunc() {
      $('#main-nav li a').unbind('click').click(function(event){
        var sid = $(this).attr('id');
        if((pageState == 'exterior') & ($(this).hasClass('active')) ) {
            $(this).css({'cursor': 'pointer'});
            event.stopPropagation();
          }
        else if(!(sid == 'twitter-icon' || sid == 'facebook-icon')) {
          $('#main-nav a').removeClass('active');
          $(this).css({'cursor': 'pointer'});
          $(this).addClass('active');
          }
      });
    }
    // SATORI CUSTOM SLIDER FOR THE INTERIOR SUBNAV NAVIGATION     
    function satoriSlider() {
      $("ul.slider li").hide();
        vpw = $(window).width();
        i = vpw*2;
      $("ul.slider li").css({'margin-left': i + 'px'});
      $("ul.slider li:first").css({'margin-left': '0px'}).show();
      $("ul.sub li a:first").addClass('activeSlide');
      $("ul.sub li").unbind('click').click(function(e) {
         activeLink = $(this).find("a");
        if(activeLink.hasClass('activeSlide')) {
          e.stopPropagation();
        }
        else{
        k = $(this).attr('class');
        //alert(k);
        q = $('ul.slider li.' + k );
        $("ul.slider li").removeClass('active');
        q.addClass('active');
        vph = $(window).height();
        navBar = $("nav");
        navBarHeight = navBar.css('height').replace('px','');
        subBar = $(".subnav").css('height').replace('px','');
        sb = subBar;
        nbh = navBarHeight;
        j = vph-nbh-sb;
        i = vpw*2;
        e.preventDefault();
        $("ul.sub li a").removeClass('activeSlide');
        $(this).find("a").addClass('activeSlide');
        b = $(this).attr('class');
        activeSlide =  $('ul.slider li' + '.' + b);
        containerWidth = $("ul.slider").css('width');
        slideWidth = $("ul.slider li").css({'width': containerWidth});
        $("ul.slider li").css({'height': j + 'px'});
        $("ul.slider li").animate({'margin-left': i + 'px'}, 500, 'easeInQuint');
        $("ul.slider li").fadeOut();
        $(activeSlide).fadeIn('slow');
        $(activeSlide).animate({'margin-left': '0px'}, 300, 'easeOutQuint');
      }
      });
    }

      //SATORI LOGO FUNCTION
      function slideHome() {
        var i = 0; //index of the panel    
        var idx = $('#exterior-page .carousel .item.active').index();
        $('a#satori-logo').on('click', function() {
        $('#exterior-page .carousel-linked-nav .active').removeClass('active');
        $('#project05').carousel(i);
        $('#exterior-page .carousel-linked-nav li:eq(' + idx + ')').addClass('active');
        });
      }

      function carouselLinks() {
        $('#exterior-page .carousel-linked-nav > li > a').click(function() {
            var item = Number($(this).attr('href').substring(1));
            $('#exterior-page .carousel').carousel(item - 1);
            $('#exterior-page .carousel-linked-nav .active').removeClass('active');
            $(this).parent().addClass('active');
            return false;
        });
      }

      function carouselSlidehome() {
        $('#exterior-page .carousel').bind('slid', function() {
          $('#exterior-page .carousel-linked-nav .active').removeClass('active');
          var idx = $('#exterior-page .carousel .item.active').index();
          $('#exterior-page .carousel-linked-nav li:eq(' + idx + ')').addClass('active');
          if(idx === 0) {
              // alert("home page");
              $('#exterior-page .carousel-linked-nav li:eq(' + idx + ')').addClass('active');
              $("#main-nav").removeClass();
              $("#main-nav").addClass('home-color');
            }
            else if(idx === 1) {
              // alert("about page");
              $('#exterior-page .carousel-linked-nav li:eq(' + idx + ')').addClass('active');
              $("#main-nav").removeClass();
              $("#main-nav").addClass('about-color');
            }
            else if(idx === 2) {
              // alert("solutions page");
              $('#exterior-page .carousel-linked-nav li:eq(' + idx + ')').addClass('active');
              $("#main-nav").removeClass();
              $("#main-nav").addClass('solutions-color');
            }
            else if(idx === 3) {
              // alert("approach page");
              $('#exterior-page .carousel-linked-nav li:eq(' + idx + ')').addClass('active');
              $("#main-nav").removeClass();
              $("#main-nav").addClass('approach-color');
            }
        });
      }
//CAROUSEL SLIDER CLICK EVENT FOR THE APPROACH PAGE
function carouselLinksApproach() {
        $('#approach-interior .carousel-linked-nav > li > a').click(function() {
            var item = Number($(this).attr('href').substring(1));
            $('#approach-interior .carousel').carousel(item - 1);
            $('#approach-interior .carousel-linked-nav .active').removeClass('active');
            $(this).parent().addClass('active');
            return false;
        });
      }
//CAROUSEL SLIDER CLICK EVENT FOR THE APPROACH PAGE
function lampLinksApproach() {
        $('#approach-interior .lamp-linked-nav > li > a').click(function() {
            var item = Number($(this).attr('href').substring(1));
            $('#approach-interior .carousel').carousel(item - 1);
            $('#approach-interior .lamp-linked-nav .active').removeClass('active');
            $(this).parent().addClass('active');
            return false;
        });
      }
//CAROUSEL SLIDER FOR THE APPROACH PAGE
function carouselSlideApproach() {
          var lamps = $('.lamp1, .lamp2, .lamp3, .lamp4');
          var lampSmall = $('.lampSmall1, .lampSmall2, .lampSmall3, .lampSmall4');
          var lampBig = $('.lampBig1, .lampBig2, .lampBig3, .lampBig4');
          var fl = $('.lamp1');
          lampBig.hide();
          fl.css({'top': '60px', 'opacity': '1'});
          $('.lampSmall1').hide();
          $('.lampBig1').show();

          $('#approach-interior .carousel').bind('slid', function() {
          $('#approach-interior .carousel-linked-nav .active').removeClass('active');
          var idx = $('#approach-interior .carousel .item.active').index();
          $('#approach-interior .carousel-linked-nav li:eq(' + idx + ')').addClass('active');
          
          if(idx === 0) {
              $('#approach-interior .carousel-linked-nav li:eq(' + idx + ')').addClass('active');
              lamps.animate({'top': '0', 'width': '300px'}, 900, 'linear');
              lamps.css({'opacity': '.4'});
              $('.lamp1').animate({'width': '282px', 'height': '350px'}, 100, 'linear');
              $('.lamp1').css({'opacity': '1'}, 100, 'linear');
              lampSmall.fadeIn();
              lampBig.hide();
              $('.lampSmall1').fadeOut();
              $('.lampBig1').fadeIn('fast');
            }
            else if(idx === 1) {
              $('#approach-interior .carousel-linked-nav li:eq(' + idx + ')').addClass('active');
              lamps.animate({'top': '0', 'width': '300px'}, 900, 'linear');
              lamps.css({'opacity': '.4'});
              $('.lamp2').animate({'width': '282px', 'height': '350px'}, 100, 'linear');
              $('.lamp2').css({'opacity': '1'}, 100, 'linear');
              lampSmall.fadeIn();
              lampBig.hide();
              $('.lampSmall2').fadeOut();
              $('.lampBig2').fadeIn('fast');
            }
            else if(idx === 2) {
              $('#approach-interior .carousel-linked-nav li:eq(' + idx + ')').addClass('active');
              lamps.animate({'top': '0', 'width': '300px'}, 900, 'linear');
              lamps.css({'opacity': '.4'});
              $('.lamp3').animate({'width': '282px', 'height': '350px'}, 100, 'linear');
              $('.lamp3').css({'opacity': '1'}, 100, 'linear');
              lampSmall.fadeIn();
              lampBig.hide();
              $('.lampSmall3').fadeOut();
              $('.lampBig3').fadeIn('fast');
            }
            else if(idx === 3) {
              $('#approach-interior .carousel-linked-nav li:eq(' + idx + ')').addClass('active');
              lamps.animate({'top': '0', 'width': '300px'}, 900, 'linear');
              lamps.css({'opacity': '.4'});
              $('.lamp4').animate({'width': '282px', 'height': '350px'}, 100, 'linear');
              $('.lamp4').css({'opacity': '1'}, 100, 'linear');
              lampSmall.fadeIn();
              lampBig.hide();
              $('.lampSmall4').fadeOut();
              $('.lampBig4').fadeIn('fast');
            }
        });
      }





