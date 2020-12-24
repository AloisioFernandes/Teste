(function ($) {
  $.fn.temporizador = function(opcoes) {
    const opcoesFinais = $.extend({ //mesclar parâmetros de chamada e parâmetros padrão
      mensagem: 'Em breve!', //caso não tenha valor de mensagem, esse será o padrão
      horario: '23:59:59' //irá sobrescrever o valor como padrão
    }, opcoes) //modificação padrão jQuery

    const horaDezena = $('<span class="digito">').html(0)
    const horaUnidade = $('<span class="digito">').html(0)
    const minutoDezena = $('<span class="digito">').html(0)
    const minutoUnidade = $('<span class="digito">').html(0)
    const segundoDezena = $('<span class="digito">').html(0)
    const segundoUnidade = $('<span class="digito">').html(0)

    const separadorHora = $('<span class="separador">').html(':')
    const separadorMinuto = $('<span class="separador">').html(':')
    const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

    $(this).addClass('temporizador')
    $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade, separadorMinuto, segundoDezena, segundoUnidade, mensagem)

    const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
    const horarioAlvo = regex.exec(opcoesFinais.horario) //busca strings usando regex como padrão
    // console.log(horarioAlvo)

    let temporizador = setInterval(() => {
      const agora = new Date()
      const alvo = new Date()
      alvo.setHours(horarioAlvo[1])
      alvo.setMinutes(horarioAlvo[2])
      alvo.setSeconds(horarioAlvo[3])

      const diferencaEmMili = alvo.getTime() - agora.getTime()
      if(diferencaEmMili >= 0) {
        const diferenca = regex.exec(new Date(diferencaEmMili).toISOString()) //toISOString formata horário desconsiderando fuso horário
        // console.log(diferenca)

        horaDezena.html(diferenca[1][0])
        horaUnidade.html(diferenca[1][1])
        minutoDezena.html(diferenca[2][0])
        minutoUnidade.html(diferenca[2][1])
        segundoDezena.html(diferenca[3][0])
        segundoUnidade.html(diferenca[3][1])
      } else {
        clearInterval(temporizador)
      }
    }, 1000)

    return this
  }
})(jQuery)