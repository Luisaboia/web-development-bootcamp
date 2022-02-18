$('h1').addClass('bigTitle margin3rem')
$('h1').text('Goodbye')
$('button').text("Don't click me!")
$('a').attr('href', 'https://www.bing.com')

/* 
== Diferença clara entre jQuery e Javascript Vanilla ==
for (let i = 0; i < 5; i++){
  document.querySelectorAll('button')[i].addEventListener('click')
  document.querySelector('h1').style.color = 'purple'} 
*/
$('button').click(function () {
  $('h1').css('color', 'purple')
})

$('button').click(function () {
  $('h1').slideToggle().animate({ margin: '20%' })
})

$('input').keydown(function (event) {
  $('h1').text(event.key)
})

$('h1').on('mouseover', function (e) {
  $('h1').css('color', 'green')
})

$('h1').before('<p>Before text</p>') // Adiciona um elemento antes, fora da tag
$('h1').after('<p>After text</p>') // Adiciona um elemento depois, fora da tag
$('h1').prepend('<p>Prepend text</p>') // Adiciona um elemento antes, dentro da tag
$('h1').append('<p>Append text</p>') // Adiciona um elemento depois, dentro da tag
