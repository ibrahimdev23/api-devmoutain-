




let getBtn = document.querySelector('.btn')

getBtn.addEventListener("click", () => {
    
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then(res => {
        for (let i = 0; i < res.data.residents.length; i++) {
            axios(`${res.data.residents[i]}`)
            .then(res => {
                const h2 = document.createElement('h2');
                h2.textContent = res.data.name;
                document.querySelector('body').appendChild(h2);
            });
        };
    });
})

button.addEventListener("click", buttonFunc);

    
