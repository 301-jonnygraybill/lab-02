'use strict';

function Horns(horn) {
  this.title = horn.title;
  this.image_url = horn.image_url;
  this.description = horn.description;
  this.keyword = horn.keyword;
  this.horns = horn.horns;
}

Horns.allHorns = [];

Horns.prototype.render = function() {
  $('main').append('<div class="clone"></div>');
  let hornClone = $('div[class="clone"]');

  let hornHtml = $('#photo-template').html();

  hornClone.html(hornHtml);

  hornClone.find('h2').text(this.title);
  hornClone.find('img').attr('src', this.image_url);
  hornClone.find('p').text(this.description);
  hornClone.find('h3').text(this.keyword);
  hornClone.find('h4').text(this.horns);
  hornClone.removeClass('clone');
  hornClone.attr('class', this.title);
}

Horns.readJson = () => {
  $.get('./data/page-1.json', 'json')
    .then(data => {
      data.forEach(item => {
        Horns.allHorns.push(new Horns(item));
      })
    })
    .then(Horns.loadHorns)
}

Horns.loadHorns = () => {
  Horns.allHorns.forEach(horn => horn.render())
}

$(() => Horns.readJson());
