(function () {
    var url_string = window.location.href;
    var urlparams = new URL(url_string);
    var src = urlparams.searchParams.get("src");
    var split = 12;
    var checkout = 'https://ev.braip.com/campanhas/cpa/camogj29?src=KD-GA-' + src + '&split=' + split;
    $(".link-pv").attr('href', checkout).attr('target', '_blank');

    CookieTimer.start('countdown', '', 5 * 60);

    $('.carousel-showmanymoveone .item').each(function () {
        var itemToClone = $(this);

        for (var i = 1; i < 3; i++) {
            itemToClone = itemToClone.next();

            // wrap around if at end of item collection
            if (!itemToClone.length) {
                itemToClone = $(this).siblings(':first');
            }

            // grab item, clone, add marker class, add to collection
            itemToClone.children(':first-child').clone()
                .addClass("cloneditem-" + (i))
                .appendTo($(this));
        }
    });
    $(window).on("resize", function (e) {
        checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize() {
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 767) {
            $('.carousel').carousel({
                interval: 1000 * 3
            });
        }
    }

    $(window).scroll(function (event) {
        function footer() {
            var scroll = $(window).scrollTop();
            if (scroll > 1000) {
                $(".footer-nav").fadeIn("slow").addClass("show");
            }
            else {
                $(".footer-nav").fadeOut("slow").removeClass("show");
            }

            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function () {
                if ($('.footer-nav').is(':hover')) {
                    footer();
                }
                else {
                    $(".footer-nav").fadeOut("slow");
                }
            }, 2000));
        }
        footer();
    });

}());
