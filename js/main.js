$(function () {
    //1.链式调用  2.读写二合一  3.隐式迭代  4.编码函数化
    $('.carousel').carousel({
        interval: 2000,
        // pause: null,
        wrap: true
    })

    $("#damu-nav > li > a").click(function (e) {
        e.preventDefault();
        var href = $(this).attr("href");
        $("#damu-list > li > a[href=" + (href) + "]").tab('show');
        $(document).scrollTop($("#damu-tab").offset().top);
    })

})