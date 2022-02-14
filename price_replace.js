$(window).load(function(){
    if($(".fs-c-productOption").length){
        var d=$(".fs-c-productOption"),e=$(".fs-l-productLayout__item.fs-l-productLayout__item--2 .fs-c-productPrice--selling")
            .find(".fs-c-productPrice__main__price")
            .find(".fs-c-price__value")
            .text(),c=Number(e.replace(/,/g,""));
        $(d.find(".fs-c-radio")).each(function(f,a){
            $(a).find(".fs-c-price__symbol").hide();
            $(a).find(".fs-c-radio__radioLabelText").css("margin-right","10px");
            if(0==$(a).find(".fs-c-price__value").text())$(this).find("input").prop("checked",!0),$(a).find(".fs-c-price__value").text(String(c).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"));
            else{
                var b=Number($(a).find(".fs-c-price__value").text().replace(/,/g,""));
                b=$(this).find(".fs-c-symbol--minus").length?c-b:c+b;$(a).find(".fs-c-price__value").text(String(b).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))
            }
        })
    }
});