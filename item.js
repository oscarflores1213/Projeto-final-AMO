var imagenesMarcas = {
    Chevrolet: "/img/chevrolet.png",
    Fiat: "/img/fiat.png",
    Ford: "/img/ford.png",
    Honda: "/img/honda.png",
    Hyundai: "/img/hyundai.png",
    Renault: "/img/renault.png",
    Toyota: "/img/toyota.png",
    Volkswagen: "/img/volkswagen.png",
    Volvo: "/img/volvo.png"
}

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
    
function datosUpdate() {
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let value = params._id; // "some_value"
return value
}


function updateVeiculo(){
    var url = 'http://localhost:5000/update/'+datosUpdate()

    fetch(url, {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(getValueForm()), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}
  
document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()
}); 

function deleteVeiculo(id){
    console.log(id)
    var url = 'http://localhost:5000/delete/'+id;
console.log(url)

    fetch(url, {
        method: 'DELETE', // or 'PUT'
        headers:{
        'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        console.log.response
        window.location.href = '/galery.html'
    });
}

function getVeiculo() {
    var url = 'http://localhost:5000/read/'+datosUpdate()

    fetch(url, {
        method: 'GET', // or 'PUT'
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        document.getElementById("marca").value = response.veiculo.marca
        document.getElementById("modelo").value = response.veiculo.modelo
        document.getElementById("km").value = response.veiculo.km
        document.getElementById("ano").value = response.veiculo.ano
        document.getElementById("cor").value = response.veiculo.cor
        document.getElementById("cambio").value = response.veiculo.cambio
        document.getElementById("valor").value = response.veiculo.valor
    
        let section = document.querySelector("#item")
        
            let dadosVeiculo = document.createElement("article")
            dadosVeiculo.className = "card_item"
            var img = imagenesMarcas[`${response.veiculo.marca}`]

            dadosVeiculo.innerHTML = `
            <p id= "precio" class="valor1">R$ ${response.veiculo.valor}</p>
            <p id= "nome" class="valor1">${response.veiculo.modelo} - ${response.veiculo.marca}</p>
            <img id= "foto" src="${img}" 
                    alt=""
                    class="card__imagem backgorundCardImagem"
                    width="40%"><!-- desde API--> <br><br>
            <button class="form-submit-button-cadas" onclick="deleteVeiculo('${response.veiculo._id}')">EXCLUIR</button>`;
        section.appendChild(dadosVeiculo);

    }); 
}

getVeiculo()


document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()
  });