$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $('.home-image path');
    var counterUp = $('.counter-up');
    var counterDown = $('.counter-down');
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");

    var currentFlat = 1;
    var flatPath = $('.flats path');
    var flatLink = $('.flat-link');

    floorPath.on('mouseover', function() {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr("data-floor");
        $('.counter').text(currentFloor);
    })

    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);

    counterUp.on("click", function() {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    counterDown.on('click', function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    })
    function toggleModal() {
        modal.toggleClass('is-open');
    }

    flatPath.on('mouseover', function() {
        currentFlat = $(this).attr('data-flat');
        $(`.flat-link[data-flat=${currentFlat}]`).toggleClass('current-link');
    })
    flatPath.on('mouseleave', function() {
        flatLink.removeClass('current-link');
    })

    flatLink.on('mouseover', function() {
        currentFlat = $(this).attr('data-flat');
        $(`.flats path[data-flat=${currentFlat}]`).css('opacity', '1');
    })
    flatLink.on('mouseleave', function() {
        flatPath.removeAttr('style');
    })
});