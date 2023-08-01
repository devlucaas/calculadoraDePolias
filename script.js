// Função para contar a quantidade de campos preenchidos
function contarCamposPreenchidos() {
    const campos = ['tamanhoPoliaImpulsionada', 'tamanhoPoliaImpulsionadora', 'rpmImpulsionador', 'rpmPoliaImpulsionada'];
    let camposPreenchidos = 0;
  
    campos.forEach(function (campo) {
      const valorCampo = parseFloat(document.getElementById(campo).value);
      if (!isNaN(valorCampo)) {
        camposPreenchidos++;
      }
    });
  
    return camposPreenchidos;
  }
  
  // Função para obter o nome do campo vazio
  function obterNomeCampoVazio() {
    const campos = ['tamanhoPoliaImpulsionada', 'tamanhoPoliaImpulsionadora', 'rpmImpulsionador', 'rpmPoliaImpulsionada'];
    const labels = {
      'tamanhoPoliaImpulsionada': 'Tamanho da Polia Impulsionada (mm)',
      'tamanhoPoliaImpulsionadora': 'Tamanho da Polia do Motor (mm)',
      'rpmImpulsionador': 'Velocidade do motor (rpm)',
      'rpmPoliaImpulsionada': 'Velocidade da Polia Impulsionada (rpm)',
    };
  
    for (const campo of campos) {
      const valorCampo = parseFloat(document.getElementById(campo).value);
      if (isNaN(valorCampo)) {
        return labels[campo];
      }
    }
  
    return '';
  }
  
  // Função para exibir mensagens de erro com o nome do campo vazio
  function exibirMensagemErro() {
    const campoVazio = obterNomeCampoVazio();
    if (campoVazio) {
      const valorCalculado = calcularValorCampo(campoVazio);
      document.getElementById('resultado').textContent = `${campoVazio} deve ser: ${valorCalculado}`;
    } else {
      document.getElementById('resultado').textContent = 'Preencha apenas três campos para calcular o quarto valor.';
    }
  }
  
  // Função para calcular o valor do campo vazio
  // Função para calcular o valor do campo vazio
function calcularValorCampo(campoVazio) {
    const tamanhoPoliaImpulsionada = parseFloat(document.getElementById('tamanhoPoliaImpulsionada').value);
    const tamanhoPoliaImpulsionadora = parseFloat(document.getElementById('tamanhoPoliaImpulsionadora').value);
    const rpmImpulsionador = parseFloat(document.getElementById('rpmImpulsionador').value);
    const rpmPoliaImpulsionada = parseFloat(document.getElementById('rpmPoliaImpulsionada').value);
  
    switch (campoVazio) {
      case 'Tamanho da Polia Impulsionada (mm)':
        return Math.ceil((tamanhoPoliaImpulsionadora * rpmImpulsionador) / rpmPoliaImpulsionada);
      case 'Tamanho da Polia do Motor (mm)':
        return Math.ceil((tamanhoPoliaImpulsionada * rpmPoliaImpulsionada) / rpmImpulsionador);
      case 'Velocidade do motor (rpm)':
        return Math.ceil((tamanhoPoliaImpulsionada * rpmPoliaImpulsionada) / tamanhoPoliaImpulsionadora);
      case 'Velocidade da Polia Impulsionada (rpm)':
        return Math.ceil((tamanhoPoliaImpulsionadora * rpmImpulsionador) / tamanhoPoliaImpulsionada);
      default:
        return '';
    }
  }
  
  
  // Função para calcular e exibir o resultado
  function calcular() {
    const camposPreenchidos = contarCamposPreenchidos();
  
    if (camposPreenchidos === 3) {
      exibirMensagemErro();
    } else if (camposPreenchidos < 3) {
      exibirMensagemErro();
    } else {
      exibirMensagemErro();
    }
  }
  