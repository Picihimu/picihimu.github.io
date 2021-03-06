const button = document.getElementById("runaway-btn");
const emoji = ['๐','๐','๐','๐คฃ','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐ฅฐ','๐','๐','๐ฅฒ','๐','๐คฏ','๐','๐ค','๐คฉ','๐ค','๐คจ','๐','๐','๐ถ','๐','๐','๐ฃ','๐ฅ','๐ฎ','๐ค','๐ฏ','๐ช','๐ซ','๐ฅฑ','๐ด','๐','๐','๐','๐','๐คค','๐','๐','๐']
score = 1
// ๐ณ

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
    //$('#runaway-btn').html(emoji[Math.floor(Math.random()*emoji.length)])

    $('#runaway-btn').hover(function(){
      $('#score').html(score)
      score += 1
      $('#runaway-btn').html('๐ณ')
    },function(){
      $('#runaway-btn').html('๐คฃ')
    })

  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};
