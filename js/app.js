jQuery(function () {
  main();
});

function main() {
  const activeCards = '.container-game .card.show-card';

  $('.card').on('click', function () {
    showCard($(this));
  });

  const showCard = (elem) => elem.toggleClass('show-card');
}