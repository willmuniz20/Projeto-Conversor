
const convertButton = document.querySelector(".button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".value-to-convert")
    const currencyValueConverted = document.querySelector(".value")



    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.2



    if (currencySelect.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == 'euro') {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == 'libra') {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function currencyChange() {

    const currencyName = document.querySelector("#currency-name")
    const currencyImg = document.querySelector("#img-eua")

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = "Dolar Americano"
        currencyImg.src = "./USA.png"
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./euro.png"
    }
    
    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./libra.png"
    }
    convertValues()
}





currencySelect.addEventListener("change", currencyChange)

convertButton.addEventListener("click", convertValues)
