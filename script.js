
        jQuery(function($) {

            $(window).scroll(restrain(250, function() {
            
              var amount = Math.min(1, $(this).scrollTop()*0.002);
            
              $('#triangled').css('transform', 'scaleY(' + amount + ')');
            }));
            });
            
            (function() {
            
            window.restrain = function(delay, callback) {
            
            var executed = 0, debounce,
            throttle = function() {
            
            var elapsed = Math.min(delay, Date.now()-executed),
            remain = delay-elapsed;
            clearTimeout(debounce);
            elapsed == delay && runIt();
            if (remain) debounce = setTimeout(runIt, remain);
            
            function runIt() {
            executed = Date.now();
            callback.apply(this, arguments);
            }
            }
            return throttle;
            }
            })();

    
