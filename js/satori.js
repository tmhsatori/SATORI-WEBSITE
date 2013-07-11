 // Fix pages to fit the viewport at all times
      $(function() {
        pageState = 'exterior';
        resizeDiv();
        hideSlides();
        mainNavControl();
        activeFunc();
        satoriSlider();
        carouselLinks();
        carouselSlide();
        //SlidenavUp();

        // invoke the carousel
        $('.carousel').carousel('pause');
        $("#home-exterior").show();
        window.onresize = function(event) {
          resizeDiv();
        };
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
        vpw = $(window).width();
        vph = $(window).height();
        navBar = $("nav");
        navBarHeight = navBar.css('height').replace('px','');
        nbh = navBarHeight;
        $('#exterior-page, #interior-page').css({'height': vph + 'px'});
        ih = (vph-nbh);
        $('#interior-page').css({'height': vph + 'px'});
        $('#interior-page').css({'bottom': -ih + 'px'});
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
            $("#main-nav").addClass(slideColor);
            $(this).addClass('active');
          }
          var k = $("Slide").css('bottom');
          var bottom = $("#interior-page").css('bottom').replace('px','');
          g = bottom;
            if(!(id == 'twitter' || id == 'facebook')) {
              if(pageState == 'interior' & id == 'home' ) {
                hideExteriorSlides();
                $(iSlide).fadeOut();
                $(Slide).fadeIn();
                $('#interior-page').stop().animate({'bottom': -ih + 'px'}, 1500, 'easeOutQuint');
                pageState = 'exterior';
              }
              else if(pageState == 'interior') {
                hideInteriorSlides();
                $(iSlide).fadeIn();
                pageState == 'interior';
              }
              else if(pageState == 'exterior' & id == 'home' ) {
                e.preventDefault();
              }
              else if (pageState == 'exterior') {
                hideInteriorSlides();
                $(iSlide).fadeIn();
                $('#interior-page').stop().animate({'bottom': '0px'}, 500, 'easeInQuad');
                pageState = 'interior';
              }  
            }                
          });
        }
      // SLIDE THE NAV UP TO THE APPROPRIATE SLIDE WITH ANY OBJECT THAT HAS THE CLASS 'more'
      function SlidenavUp() {       
        $(".more").unbind('click').click(function(e) {
          e.preventDefault();
          hideInteriorSlides();
          $(Slide).fadeIn();
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
        $("ul.slider li").css({'margin-left': i + 'px'})
        $("ul.slider li:first").css({'margin-left': '0px'}).show();
        $("ul.sub li").unbind('click').click(function(e) {
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
        });
      }

      function carouselLinks() {
        $('.carousel-linked-nav > li > a').click(function() {
            var item = Number($(this).attr('href').substring(1));
            $('.carousel').carousel(item - 1);
            $('.carousel-linked-nav .active').removeClass('active');
            $(this).parent().addClass('active');
            return false;
        });
      }

      function carouselSlide() {
        $('.carousel').bind('slid', function() {
          $('.carousel-linked-nav .active').removeClass('active');
          var idx = $('.carousel .item.active').index();
          $('.carousel-linked-nav li:eq(' + idx + ')').addClass('active');
        });
      }










