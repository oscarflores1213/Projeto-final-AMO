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


fetch("http://localhost:5000/read")
    .then(info => {
        if (info.ok) {
            return info.json()
        } else {
            throw new Error("Não foi possivel obter a informação, Código " + resp.status)
        }
    })
    .then(data => {
        console.log(data)
        let infoVeiculos = []
        data.veiculos.forEach(veiculo => {
            infoVeiculos.push({
                marca: veiculo.marca,
                modelo: veiculo.modelo,
                km: veiculo.km,
                ano: veiculo.ano,
                cor: veiculo.cor,
                cambio: veiculo.cambio,
                valor: veiculo.valor,
                id: veiculo._id,
            })
        })
        console.log(infoVeiculos)
        createList(infoVeiculos);
    })
    
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
            let section = document.querySelector("#projeto")
            let card = document.getElementById(`${id}`)
            console.log(section)
            console.log(card)
            section.removeChild(card)
        });
    }

    function updateVeiculo(id){
        window.location.href = `/item.html?_id=${id}`
    }

    function createList(infoVeiculos) {
        let section = document.querySelector("#projeto")
        for ( let list of infoVeiculos ) {
            let listVeiculos = document.createElement("article")
            listVeiculos.id = list.id
            listVeiculos.className = "card"

            var img = imagenesMarcas[`${list.marca}`]
            listVeiculos.innerHTML = `
            <span class="value">R$${list.valor}</span>
            <div style="text-align:center"><img src="${img}"
                 alt="Projeto1"
                 class="card__image"></div>
                <div class="card__info">
                    <div class="card__info__lista">
                        <h3 class="card__title">${list.marca}</h3>
                        <h4 class="card__lista">${list.modelo}</h4>
                        <h4 class="card__lista">${list.km} km</h4>
                        <h4 class="card__lista">${list.ano}</h4>
                        <h4 class="card__lista">${list.cor}</h4>
                        <h4 class="card__lista">${list.cambio}</h4>
                    </div>    
                    <div class="ancoras">
                        <button class="form-submit-button-cadas" onclick="deleteVeiculo('${list.id}')">EXCLUIR</button>
                        <button class="form-submit-button-cadas" onclick="updateVeiculo('${list.id}')">ATUALIZAR</button>
                    </div>
                </div>
            </div>`;
            section.appendChild(listVeiculos);
            
            
        }  
    };

    