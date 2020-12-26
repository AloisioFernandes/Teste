import $ from 'jquery'

const duration = 300

function filterByCity(city) {
  $('[wm-city]').each(function(i, e) {
    const isTarget = $(this).attr('wm-city') === city || city === null
    if(isTarget) {
      $(this).parent().removeClass('d-none') //ajuste para reposicionar imagens
      $(this).fadeIn(duration)
    } else {
      $(this).fadeOut(duration, () => {
        $(this).parent().addClass('d-none') //ajuste para reposicionar imagens
      })
    }
  })
}

$.fn.cityButtons = function() {
  const cities = new Set
  $('[wm-city]').each(function(i, e) {
    cities.add($(e).attr('wm-city')) //Adiciona o valor do atributo wm-city ao Set que evita repetição de valores
  })
  
  const btns = Array.from(cities).map(city => {
    const btn = $('<button>')
      .addClass(['btn', 'btn-info']).html(city)
      btn.on('click', e => filterByCity(city))
    return btn
  })
  
  const btnAll = $('<button>')
  .addClass(['btn', 'btn-info', 'active']).html('Todas')
  btnAll.on('click', e => filterByCity(null))
  btns.push(btnAll)

  const btnGroup = $('<div>').addClass(['btn-group'])
  btnGroup.append(btns) //adiciona os botões na div criada
  
  $(this).html(btnGroup) //adiciona btnGroups na div com atributo wm-city-buttons
  return this //chain
}

$('[wm-city-buttons]').cityButtons() //aplicando plugin cityButtons para div com atributo wm-city-buttons