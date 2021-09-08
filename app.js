async function fetchPrice() {
    const cryptoName = document
        .getElementById("crypto-name")
        .value.toLowerCase();

    // fetches the information about the cryptocurrency
    var requestOptions = {
        method: "GET",
        redirect: "follow",
    };

    const response = await fetch(
        `https://api.coincap.io/v2/assets/${cryptoName}`,
        requestOptions
    ).then((response) => response.json());

    const data = response.data;

    // Set the name and symbol of the coin using the data we got from the response
    document.getElementById(
        "name"
    ).innerHTML = `${data.name} - ${data.symbol}`;

    // Set the price using the priceUsd we got from the response
    // toFixed simply allows us to have only two digits after the decimal point (cents amount)
    document.getElementById("price").innerHTML = `Current Price: $${Number(
        data.priceUsd
    ).toFixed(2)}`;
}