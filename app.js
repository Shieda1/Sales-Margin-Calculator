// https://calculator.swiftutors.com/sales-margin-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const salesMarginRadio = document.getElementById('salesMarginRadio');
const salesProfitRadio = document.getElementById('salesProfitRadio');
const salesPriceRadio = document.getElementById('salesPriceRadio');
const directMaterialandLaborCostRadio = document.getElementById('directMaterialandLaborCostRadio');

let salesMargin;
let salesPrice = v1;
let directMaterialandLaborCost = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

salesMarginRadio.addEventListener('click', function() {
  variable1.textContent = 'Sales Price ($)';
  variable2.textContent = 'Direct Material and Labor Cost ($)';
  salesPrice = v1;
  directMaterialandLaborCost = v2;
  result.textContent = '';
});

salesProfitRadio.addEventListener('click', function() {
  variable1.textContent = 'Sales Price ($)';
  variable2.textContent = 'Direct Material and Labor Cost ($)';
  salesPrice = v1;
  directMaterialandLaborCost = v2;
  result.textContent = '';
});

salesPriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Sales Margin (%)';
  variable2.textContent = 'Direct Material and Labor Cost ($)';
  salesMargin = v1;
  directMaterialandLaborCost = v2;
  result.textContent = '';
});

directMaterialandLaborCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Sales Margin (%)';
  variable2.textContent = 'Sales Price ($)';
  salesMargin = v1;
  salesPrice = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(salesMarginRadio.checked)
    result.textContent = `Sales Margin = ${computeSalesMargin().toFixed(2)} %`;
  
  if(salesProfitRadio.checked)
    result.textContent = `Sales Margin = ${computeSalesProfit().toFixed(2)} $`;

  else if(salesPriceRadio.checked)
    result.textContent = `Sales Price = ${computeSalesPrice().toFixed(2)} $`;

  else if(directMaterialandLaborCostRadio.checked)
    result.textContent = `Direct Material and Labor Cost = ${computeDirectMaterialandLaborCost().toFixed(2)} $`;
})

// calculation

function computeSalesMargin() {
  return ((Number(salesPrice.value) - Number(directMaterialandLaborCost.value)) / Number(salesPrice.value)) * 100;
}

function computeSalesProfit() {
  return (computeSalesMargin() / 100) * Number(salesPrice.value);
}

function computeSalesPrice() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeDirectMaterialandLaborCost() {
  return Number(salesPrice.value) - ((Number(salesMargin.value) / 100) * Number(salesPrice.value));
}