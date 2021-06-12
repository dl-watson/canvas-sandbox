window.addEventListener("load", () => {
  const canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d"),
    height = window.innerHeight,
    width = window.innerWidth;

  canvas.height = height;
  canvas.width = width;

  let drawing = false;

  const startDrawing = (evt) => {
    drawing = true;
    draw(evt);
  };

  const endDrawing = () => {
    drawing = false;
    ctx.beginPath();
  };

  const draw = (evt) => {
    if (!drawing) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    ctx.lineTo(
      evt.clientX || evt.touches[0].clientX,
      evt.clientY || evt.touches[0].clientY
    );
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(
      evt.clientX || evt.touches[0].clientX,
      evt.clientY || evt.touches[0].clientY
    );
  };

  canvas.addEventListener("mousedown", (evt) => startDrawing(evt));
  canvas.addEventListener("touchstart", (evt) => startDrawing(evt));
  canvas.addEventListener("mouseup", endDrawing);
  canvas.addEventListener("touchend", endDrawing);
  canvas.addEventListener("mousemove", (evt) => draw(evt));
  canvas.addEventListener("touchmove", (evt) => draw(evt));

  window.addEventListener("resize", () => {
    canvas.height = height;
    canvas.width = width;
  });
});
