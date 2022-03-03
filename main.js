




let getBtn = document.querySelector('.btn')

getBtn.addEventListener("click", () => {
    
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
         .then(res => {
            let residentsArr = res.data.results[0].residents
            for(let i=0; i < residentsArr.length; i++){
                axios.get(residentsArr[i])
                     .then(res => {
                         let h2 = document.createElement('h2')
                         h2.textContent = res.data.name
                         document.querySelector('body').appendChild(h2)
                     })
            }
        })









    })
