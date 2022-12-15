export function all_xl(){
     var items = $("#all_post_xl .card");
    var numItems = items.length;
    var perPage = 4;

    items.slice(perPage).hide();


    $('#pagination-container_all_xl').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        hrefTextPrefix:'#',
        onPageClick: function (pageNumber) {
             window.scrollTo({top:0});
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
};

