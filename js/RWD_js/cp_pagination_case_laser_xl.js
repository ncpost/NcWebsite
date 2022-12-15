export function case_laser_xl(){
    var items = $("#cp_lase .card");
    var numItems = items.length;
    var perPage =6;

    items.slice(perPage).hide();

    $('#pagination-container_case_laser_xl').pagination({
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