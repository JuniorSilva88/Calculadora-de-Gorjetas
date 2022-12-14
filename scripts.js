function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let Service = document.getElementById('Service').value;
    let numPeople = document.getElementById('People').value;

    if(bill == '' | Service == 0){
        alert ("Por gentileza, preencha os valores")
        return;    
    }

    if(numPeople == '' | numPeople <= 1) {
        numPeople = 1;
        document.getElementById('each').style.display ="none";
    } else {
        document.getElementById('each').style.display = "block"         
    }

    let total = (bill * Service) / numPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML =total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);