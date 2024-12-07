async function convertCurrency() {
    // ?????? ??? ????? ???????
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    // ?????? ?? ????? ??????
    if (isNaN(amount) || amount <= 0) {
        alert('?? ???? ???? ???? ????');
        return;
    }

    // ?????? ??? ????? ????? ???????? API
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        // ??????? ??? ????? ?????? ????????
        const rate = data.rates[toCurrency];

        // ???? ???????
        const result = amount * rate;

        // ??? ???????
        document.getElementById('result').textContent = `???????: ${result.toFixed(2)} ${toCurrency}`;

        // ??? ??? ?????
        document.getElementById('exchange-rate').textContent = `??? ????? ??????: 1 ${fromCurrency} = ${rate.toFixed(2)} ${toCurrency}`;

        // ??? ????? ??? ?????
        const lastUpdatedDate = new Date(data.time_last_updated * 1000);
        document.getElementById('last-updated').textContent = lastUpdatedDate.toLocaleString();
    } catch (error) {
        alert('??? ??? ????? ??? ????????');
    }
}
