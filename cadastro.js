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
  var url = 'http://localhost:5000/create';
  
  
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(getValueForm()), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {
    console.log("Foi criado com sucesso", response)
    window.location.href = '/galery.html'
  });
  
}
  
document.getElementById("form").addEventListener("submit", function(event){
  event.preventDefault()
});