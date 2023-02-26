$(".number").click(function () {
    $this = $(this);
    let number = $this.attr("data-number");
    $(".result").append(number);
});

$(".process").click(function () {
    $this = $(this);
    let process = $this.attr("data-process");
    $(".result").append(process);
});