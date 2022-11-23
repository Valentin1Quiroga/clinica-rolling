const doctors= JSON.parse(localStorage.getItem('doctors'))

const buscadorContainer=document.querySelector(".user-cards")

const searchinput=document.querySelector("[data-search]")

let medicos=[]

medicos=doctors.map(medico=>{
  const cardBuscador=document.createElement("div")
    cardBuscador.classList.add("card-buscador","text-center","hide-buscador")
        cardBuscador.innerHTML=`
        <a class="body-busqueda"href="detail-doctor.html#${medico.id}">${medico.name}</a>
        `
        buscadorContainer.appendChild(cardBuscador)
        return{name:medico.name,
            id:medico.id,
            element:cardBuscador,
        }
    })

searchinput.addEventListener('input', e=>{
    const value=e.target.value.trim().toLowerCase()
   if(value===""){
    medicos.forEach(medico=>{
            medico.element.classList.toggle("hide-buscador",true)
        
    })

   }
    medicos.forEach(medico=>{
        const visible=medico.name.toLowerCase().includes(value)
        if(visible&&value.length>0){
            console.log("se muestra");
            medico.element.classList.toggle("hide-buscador",false)
        }
    })

})