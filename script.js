    function validateNotEmpty(e) {
        let field = e.target;
        let fieldValue = field.value;

        if (fieldValue == ''){
            displayError('Campo não pode ser vazio', field);
        } else {
            clearError(field);
        }

        field.classList.remove('not-validated');
    checkEnableSubmit();
        }

        
    

//// API Preencher 
    function preencherMarca(marca){
    document.querySelector('#marca').innerText = marca
    }

    function preencherModelo(modelo){
    document.querySelector('#modelo').innerText = modelo
    }

    function preencherKm(km){
    document.querySelector('#km').innerText = km
    }

    function preencherAno(ano){
    document.querySelector('#ano').innerText = ano
    }

    function preencherCor(cor){
    document.querySelector('#cor').innerText = cor
    }

    function preencherCambio(cambio){
    document.querySelector('#cambio').innerText = cambio
    }

    function preencherValor(valor){
    document.querySelector('#valor').innerText = valor
    }
  
  function pegarListaDeRepositorios(reposUrl){
    fetch(reposUrl)
    .then(function(response){ return response.json() })
  }
  
  fetch("http://localhost:3000")
  .then(function(response){
    //executa quando resolve
    return response.json();
  })
  .then(function(response){
    preencherMarca(response.marca);
    preencherModelo(response.modelo);
    preencherKm(response.km);
    preencherAno(response.ano);
    preencherCor(response.cor);
    preencherCambio(response.cambio);
    preencherValor(response.valor);
    //...
  })
  .catch(function(error){
    //executa quando rejeita
    console.error(error)
  });
function getValueForm() {
  var marcaf = document.getElementById("marca").value;
  var modelof = document.getElementById("modelo").value;
  var kmf = document.getElementById("km").value;
  var anof = document.getElementById("ano").value;
  var corf = document.getElementById("cor").value;
  var cambiof = document.getElementById("cambio").value;
  var valorf = document.getElementById("valor").value;

  var carro =  new Object();
    carro.marca = marcaf;
    carro.modelo = modelof;
    carro.km = kmf;
    carro.ano = anof
    carro.cor = corf;
    carro.cambio = cambiof;
    carro.valor = valorf;
  return  carro
}
  
  function createVeiculo(){
    var url = 'http://localhost:3000/create';


fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(getValueForm()), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => alert("Foi criado com sucesso", response));
}

document.getElementById("form").addEventListener("submit", function(event){
  event.preventDefault()

});


