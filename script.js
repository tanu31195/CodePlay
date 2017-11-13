$(function() {

  function updateOutput() {
    $("iframe").contents().find("html").html("<html><head><style>" + $("#cssPanel").val() + "</style></head><body>" +
      $("#htmlPanel").val() + "</body></html>");

    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
  }

  $(".btnToggle").hover(function() {
      $(this).addClass("btnHighlight");
    },
    function() {
      $(this).removeClass("btnHighlight");
    });

  $(".btnToggle").click(function() {
    $(this).toggleClass("defaultActive");

    $(this).removeClass("btnHighlight");

    var panelId = $(this).attr("id") + "Panel";

    $("#" + panelId).toggleClass("hidden");

    var activePanels = 4 - $('.hidden').length;

    $(".panel").width($(window).width() / activePanels - 5);
  });

  $(".panel").height($(window).height() - $("#header").height() - 50);

  $(".panel").width($(window).width() / 2 - 5);

  updateOutput();

  $("textarea").on('change keyup paste', function() {
    updateOutput();
  });




});
