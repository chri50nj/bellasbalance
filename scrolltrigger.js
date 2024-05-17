$(".home-scroll_section").each(function (index) {
  // kode her
  let childTriggers = $(this).find(".home-scroll_text-item");
  let childTargets = $(this).find(".home-scroll_img-item");
  // skift aktiv klasse
  function makeItemActive(index) {
    childTriggers.removeClass("is-active");
    childTargets.removeClass("is-active");
    childTriggers.eq(index).addClass("is-active");
    childTargets.eq(index).addClass("is-active");
  }
  makeItemActive(0);

  // lav scrolltriggers
  childTriggers.each(function (index) {
    ScrollTrigger.create({
      trigger: $(this),
      start: "top center",
      end: "bottom center",
      

      onToggle: (isActive) => {
        if (isActive) {
          makeItemActive(index);
        }
      },
    });
  });
});

