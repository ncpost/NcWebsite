export function body_surgery_xl() {
    var items = $("#list-full_surgery .card");
   var numItems = items.length;
   var perPage = 4;

   items.slice(perPage).hide();


   $('#pagination-container_body_xl').pagination({
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