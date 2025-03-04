let relogio = document.querySelector('.clock');
let carregamento = document.querySelector('.scanner');
let newFormato = true;

function atualizar() {
  let date = new Date();
  let segundo = date.getSeconds().toString().padStart(2, '0');
  let minuto = date.getMinutes().toString().padStart(2, '0');
  let hora = date.getHours().toString().padStart(2, '0');
  display(segundo, minuto, hora);
}

function display(segundo, minuto, hora) {
  if (newFormato) {
    relogio.innerHTML = `${hora}:${minuto}:${segundo}`;
  } else {
    hora = hora % 12 || 12;
    if (hora < 12) {
      relogio.innerHTML = `${hora}:${minuto} PM`;
    } else {
      relogio.innerHTML = `${hora}:${minuto} AM`;
    }
  }
}

function mudarFormato() {
  carregamento.style.display = 'block';
  setTimeout(function () {
    carregamento.style.display = 'none';
    newFormato = !newFormato;
    atualizar();
  }, 4000);
}

setInterval(atualizar, 1000);
atualizar();