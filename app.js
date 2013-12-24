(function ($, undefined) {
  $('form').on('submit', function (event) {
    var h = $('#horizontal').val()
      , v = $('#vertical').val()
      , canvas = $('<canvas width="300" height="300"/>')[0]
      , ctx = canvas.getContext('2d');
    event.preventDefault();
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 300, 300);
    ctx.fillStyle = 'black';
    h_text = ctx.measureText(h);
    v_text = ctx.measureText(v);
    ctx.save();
    ctx.translate(0, 280);
    ctx.scale(300/h_text.width, 28);
    ctx.fillText(h, 0, 0);
    ctx.restore();
    ctx.rotate(Math.PI / 2);
    ctx.scale(300/v_text.width, 28);
    ctx.fillText(v, 0, 0);
    $('#output').attr('src', canvas.toDataURL());
  });
})(jQuery);