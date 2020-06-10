var select = document.querySelector("select")
var atual = document.querySelector("p")
axios.get("https://api.covid19api.com/summary")// API que mostra os casos,mortes e pessoas curadas em cada pais
    .then(function(resovl){
        for(let n = 1; n < resovl.data.Countries.length; n++){
            var option = document.createElement("option")
            select.appendChild(option)
            option.setAttribute("value", n)
            
            option.text = `${resovl.data.Countries[0+n].Country}`
            atual.innerHTML = (`&copyOriano Junior<br> Data de atualização ${resovl.data.Date}`)
        }


        })
    .catch(function(error){
        console.log("error")
    })
    
    
    function mostrar(){
        axios.get("https://api.covid19api.com/summary")// API que mostra os casos,mortes e pessoas curadas em cada pais
        .then(function(resovl){
            var valor = document.getElementById("valor").value
            var resp = document.getElementById("resp")
        if (valor == 0) {
            window.alert("Escolha um pais")
            resp.innerHTML = ""
        }
           resp.innerHTML = ""
           resp.innerHTML += (`No pais ${resovl.data.Countries[valor].Country}<br>`)
           resp.innerHTML += (`Novos casos confirmados ${resovl.data.Countries[valor].NewConfirmed}<br>`)
           resp.innerHTML += (`Novas mortes ${resovl.data.Countries[valor].NewDeaths}<br>`)
           resp.innerHTML += (`novas pessoas curadas ${resovl.data.Countries[valor].NewRecovered}<br>`)
           resp.innerHTML += (`total de casos confirmado ${resovl.data.Countries[valor].TotalConfirmed}<br>`)
           resp.innerHTML += (`total de mortes confirmada ${resovl.data.Countries[valor].TotalDeaths}<br>`)
           resp.innerHTML += (`total de pessoas recuperadas ${resovl.data.Countries[valor].TotalRecovered}<br>`)
            })
        .catch(function(error){
            console.log("error")
        })
    }
