$(function () {
    //SET UP
    var $list = $("ul");
    var $newItemForm = $("#newItemForm");
    var $newItemButton = $("#newItemButton");

    // HIDE LIST ITEMS BUT THEN FADE THEM IN
    $("li")
        .hide()
        .each(function (index) {
            $(this)
                .delay(450 * index)
                .fadeIn(1600);
        });

    // ITEM COUNTER
    function updateCount() {
        var items = $("li[class!=complete]").length;
        $("#counter").text(items);
    }
    updateCount();

    //SET UP FORM FOR NEW ITEMS

    $newItemButton.show();
    $newItemForm.hide();

    // var $textInput = $("input:text");

    $("#showForm").on("click", function () {
        $newItemButton.hide();
        $newItemForm.show();
    });

    //ADDING A NEW LIST ITEM
    $newItemForm.on("submit", function (e) {
        e.preventDefault();
        var text = $("input:text").val();
        $list.append("<li>" + text + "</li");
        $newItemButton.show();
        $newItemForm.hide();
        $("input:text").val("");
        updateCount();
    });

    // CLICK HANDLING USES DELEGATION ON <UL> ELEMENT
    $list.on("click", "li", function () {
        var $this = $(this);

        var complete = $this.hasClass("complete");

        if (complete === true) {
            $this.animate(
                {
                    opacity: 0.0,
                    paddingLeft: "+=180",
                },
                500,
                "swing",
                function () {
                    this.remove();
                }
            );
        } else {
            item = $this.text();
            $this.remove();
            $list
                .append('<li class="complete">' + item + "</li>")
                .hide()
                .fadeIn(300);
            updateCount();
        }
    });
});
