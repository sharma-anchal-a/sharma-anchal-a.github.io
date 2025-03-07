$(window).on('load', function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
    var video = $('.fullscreen-video')[0];
    video.pause();
});

$(document).ready(function(){
    var vw;
    
    $(window).resize(function(){
        vw = $(window).width()/2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').stop();
        $('#b11').animate({top:240, left: vw-450},500);
        $('#b22').animate({top:240, left: vw-350},500);
        $('#b33').animate({top:240, left: vw-250},500);
        $('#b44').animate({top:240, left: vw+50},500);
        $('#b55').animate({top:240, left: vw+120},500);
        $('#b66').animate({top:240, left: vw+200},500);
        $('#b77').animate({top:240, left: vw+300},500);
        $('#b88').animate({top:240, left: vw+380},500);
        $('#b99').animate({top:240, left: vw+450},500);
    });

    // Show decorations after banner
    function showDecorations() {
        // Show flowers
        $('.flowers').addClass('flowers-visible');
        
        // Show ribbons
        $('.ribbon').addClass('ribbons-visible');
        
        // Show gift boxes
        $('.gift-box').addClass('gift-boxes-visible');
        
        // Create confetti
        createConfetti();
        
        // Create floating hearts
        createHearts();
    }
    
    // Create confetti
    function createConfetti() {
        const confettiContainer = document.getElementById('confetti-container');
        $(confettiContainer).show();
        
        const colors = ['#FF85A1', '#FFA9A3', '#FFC0CB', '#FFB6C1', '#FFC3A0', '#FF69B4'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Random position, color, size, rotation
            const left = Math.random() * 100;
            const width = Math.random() * 10 + 5;
            const height = Math.random() * 10 + 5;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const delay = Math.random() * 5;
            const duration = Math.random() * 5 + 5;
            
            confetti.style.left = `${left}%`;
            confetti.style.width = `${width}px`;
            confetti.style.height = `${height}px`;
            confetti.style.backgroundColor = color;
            confetti.style.animationDelay = `${delay}s`;
            confetti.style.animationDuration = `${duration}s`;
            
            // Different shapes - square, rectangle, circle
            const shape = Math.floor(Math.random() * 3);
            if (shape === 0) {
                confetti.style.borderRadius = '50%';
            } else if (shape === 1) {
                confetti.style.borderRadius = '0';
            } else {
                confetti.style.borderRadius = '5px';
            }
            
            confettiContainer.appendChild(confetti);
        }
    }
    
    // Create floating hearts
    function createHearts() {
        const heartsContainer = document.getElementById('hearts-container');
        $(heartsContainer).show();
        
        for (let i = 0; i < 25; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            // Random position, size, rotation, speed
            const left = Math.random() * 100;
            const size = Math.random() * 15 + 10;
            const delay = Math.random() * 10;
            const duration = Math.random() * 10 + 15;
            
            heart.style.left = `${left}%`;
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;
            heart.style.animationDelay = `${delay}s`;
            heart.style.animationDuration = `${duration}s`;
            
            heartsContainer.appendChild(heart);
        }
    }
    
    // Gift box clicks
    $('.gift-box').click(function() {
        $(this).animate({
            opacity: 0,
            transform: 'scale(2) translateY(-100px)'
        }, 1000, function() {
            $(this).hide();
        });
        
        // Show surprise message
        const messages = [
            "I love you!",
            "You're amazing!",
            "Happy Birthday!",
            "Make a wish!",
            "You're beautiful!"
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        const messageElement = $('<div></div>').addClass('surprise-message').text(randomMessage);
        messageElement.css({
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '40px',
            fontWeight: 'bold',
            color: '#FF1493',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            zIndex: '9999',
            opacity: '0'
        });
        
        $('body').append(messageElement);
        
        messageElement.animate({
            opacity: 1,
            fontSize: '60px'
        }, 500).delay(1000).animate({
            opacity: 0,
            fontSize: '80px'
        }, 500, function() {
            messageElement.remove();
        });
    });

    // Simple music handling
    let isPlaying = false;

    // Photo Slider Functionality
    let currentSlide = 1;
    const totalSlides = 10;
    
    function showSlide(slideNumber) {
        $('.memory-slide').hide();
        $(`.memory-slide[data-slide="${slideNumber}"]`).fadeIn(500);
        
        // Update dots
        $('.slide-dot').removeClass('active');
        $(`.slide-dot[data-slide="${slideNumber}"]`).addClass('active');
        
        currentSlide = slideNumber;
    }
    
    $('.next-slide').click(function() {
        let nextSlide = currentSlide + 1;
        if (nextSlide > totalSlides) {
            nextSlide = 1;
        }
        showSlide(nextSlide);
    });
    
    $('.prev-slide').click(function() {
        let prevSlide = currentSlide - 1;
        if (prevSlide < 1) {
            prevSlide = totalSlides;
        }
        showSlide(prevSlide);
    });
    
    $('.slide-dot').click(function() {
        const slideNumber = parseInt($(this).attr('data-slide'));
        showSlide(slideNumber);
    });

    // Balloon movement functions
    function loopOne() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b1').animate({left:randleft,bottom:randtop},10000,function(){
            loopOne();
        });
    }
    function loopTwo() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b2').animate({left:randleft,bottom:randtop},10000,function(){
            loopTwo();
        });
    }
    function loopThree() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b3').animate({left:randleft,bottom:randtop},10000,function(){
            loopThree();
        });
    }
    function loopFour() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b4').animate({left:randleft,bottom:randtop},10000,function(){
            loopFour();
        });
    }
    function loopFive() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b5').animate({left:randleft,bottom:randtop},10000,function(){
            loopFive();
        });
    }
    function loopSix() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b6').animate({left:randleft,bottom:randtop},10000,function(){
            loopSix();
        });
    }
    function loopSeven() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b7').animate({left:randleft,bottom:randtop},10000,function(){
            loopSeven();
        });
    }
    function loopEight() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b8').animate({left:randleft,bottom:randtop},10000,function(){
            loopEight();
        });
    }
    function loopNine() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b9').animate({left:randleft,bottom:randtop},10000,function(){
            loopNine();
        });
    }

    // Show Gallery
    $('#show_gallery').click(function(){
        $('.message').fadeOut('slow');
        $(this).fadeOut('slow');
        
        // Blur the background content
        $('.container > *:not(.gallery)').addClass('main-content-blur');
        $('.balloons, .flowers, .ribbon, .gift-box, #confetti-container, #hearts-container').css('opacity', '0.2');
        
        // Show the gallery overlay
        $('.gallery').fadeIn('slow');
    });
    
    // Close gallery
    $('.gallery-close').click(function(){
        $('.gallery').fadeOut('slow');
        
        // Unblur the background content
        $('.container > *:not(.gallery)').removeClass('main-content-blur');
        $('.balloons').css('opacity', '0.6');
        $('.flowers').css('opacity', '0.7');
        $('.ribbon').css('opacity', '0.7');
        $('.gift-box').css('opacity', '1');
        
        // Show the show gallery button again
        $('#show_gallery').fadeIn('slow');
    });

    // Turn on lights button
    $('#turn_on').click(function(){
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(2000).promise().done(function(){
            $('#play').fadeIn('slow');
        });
    });
    
    // Play music button
    $('#play').click(function(){
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').addClass('peach-after');
        
        isPlaying = true;
        
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#bannar_coming').fadeIn('slow');
        });
    });
    
    // Banner/Decoration button
    $('#bannar_coming').click(function(){
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(4000).promise().done(function(){
            // Show decorations after banner animation
            showDecorations();
            $('#balloons_flying').fadeIn('slow');
        });
    });
    
    // Balloons flying button
    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top:-500},8000);
        $('#b1,#b4,#b5,#b7,#b9').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();
        loopEight();
        loopNine();
        
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#cake_fadein').fadeIn('slow');
        });
    });
    
    // Cake fade in button
    $('#cake_fadein').click(function(){
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#light_candle').fadeIn('slow');
        });
    });
    
    // Light candle button
    $('#light_candle').click(function(){
        $('#flame').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#wish_message').fadeIn('slow');
        });
    });
    
    // Wish message button
    $('#wish_message').click(function(){
        
        var audio = $('.song')[0];
        audio.pause();
        isPlaying = false;
        
        var video = $('.fullscreen-video')[0];
        video.play();
        video.loop = true;
        $('.fullscreen-video').fadeIn('slow');
        
        vw = $(window).width()/2;
        
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').stop();
        $('#b1').attr('id','b11');
        $('#b2').attr('id','b22')
        $('#b3').attr('id','b33')
        $('#b4').attr('id','b44')
        $('#b5').attr('id','b55')
        $('#b6').attr('id','b66')
        $('#b7').attr('id','b77')
        $('#b8').attr('id','b88')
        $('#b9').attr('id','b99')
        $('#b11').animate({top:240, left: vw-450},500);
        $('#b22').animate({top:240, left: vw-350},500);
        $('#b33').animate({top:240, left: vw-250},500);
        $('#b44').animate({top:240, left: vw+50},500);
        $('#b55').animate({top:240, left: vw+120},500);
        $('#b66').animate({top:240, left: vw+200},500);
        $('#b77').animate({top:240, left: vw+300},500);
        $('#b88').animate({top:240, left: vw+380},500);
        $('#b99').animate({top:240, left: vw+450},500);
        $('.balloons').css('opacity','0.9');
        $('.balloons h2').fadeIn(3000);
        $(this).fadeOut('slow').delay(26000).promise().done(function(){
            $('#story').fadeIn('slow');
        });
    });
    
    // Story button
    $('#story').click(function(){
        var video = $('.fullscreen-video')[0];
        video.pause();
        video.loop = false;
        $('.fullscreen-video').fadeOut('slow');
        var audio = $('.song')[0];
        audio.play();
        isPlaying = true;
        
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function(){
            $('.message').fadeIn('slow');
        });
        
        var i;
        
        function msgLoop (i) {
            $("p:nth-child("+i+")").fadeOut('slow').delay(300).promise().done(function(){
                i=i+1;
                $("p:nth-child("+i+")").fadeIn('slow').delay(600);
                if(i==50){
                    $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
                        $('.cake').fadeIn('fast');
                        $('#show_gallery').fadeIn('slow');
                    });
                }
                else{
                    msgLoop(i);
                }
            });
        }
        
        msgLoop(0);
    });
});