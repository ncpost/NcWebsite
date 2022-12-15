export function micro_xl(){
    var items = $("#list-micro .card");
    var numItems = items.length;
    var perPage = 4;

    items.slice(perPage).hide();

    $('#pagination-container_micro_xl').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function (pageNumber) {
            window.scrollTo({top:0})
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
}