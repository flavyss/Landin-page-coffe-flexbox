window.onload = () => {
    const validaForm = () => {

        let campo = document.querySelector("input[name=email]")
        let form = document.querySelector('form')

        form.addEventListener("submit", (e) => {

            if(campo.value == ''){
                alert("Preencha Todos Os Campos Corretamente")
                campo.classList.add("border")
                
                e.preventDefault()
            }
        })

    }

    validaForm()
}