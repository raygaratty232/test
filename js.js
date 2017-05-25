$(".work").boxLoader({
    direction:"x",
    position: "100%",
    effect: "fadeIn",
    duration: "1s",
    windowarea: "50%"
}); 
$(".portfolio").boxLoader({
    direction:"x",
    position: "-100%",
    effect: "fadeIn",
    duration: "1s",
    windowarea: "50%"
});
$(".be-man1").boxLoader({
    direction:"y",
    position: "100%",
    effect: "fadeIn",
    duration: "0.5s",
    windowarea: "50%"
});
$(".be-man2").boxLoader({
    direction:"y",
    position: "100%",
    effect: "fadeIn",
    duration: "1s",
    windowarea: "50%"
});
$(".be-man3").boxLoader({
    direction:"y",
    position: "100%",
    effect: "fadeIn",
    duration: "1.5s",
    windowarea: "50%"
});
$(".team").boxLoader({
    direction:"none",
    position: "none",
    effect: "fadeIn",
    duration: "1s",
    windowarea: "50%"
});
$(".menu a, .up").mPageScroll2id({
	offset : 50,
});

$(document).on('open', '.remodal', function () {
    // открытие окна
    var modal = $(this);
});

$(document).on('opened', '.remodal', function () {
    // окно открыто
    var modal = $(this);
});

$(document).on('close', '.remodal', function () {
    // закрытие окна
    var modal = $(this);
});

$(document).on('closed', '.remodal', function () {
    // окно закрыто
    var modal = $(this);
});

$(document).on('confirm', '.remodal', function () {
    // нажатие на кнопку подтверждения
    var modal = $(this);
});

$(document).on('cancel', '.remodal', function () {
    // нажатие на кнопку отмены
    var modal = $(this);
});
