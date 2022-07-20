const form = document.querySelector('.form');

const sectorSelect = document.querySelector('.sector-select');
const sectorContainer = document.createElement('div');
const sectorInput = document.createElement('input');
sectorContainer.appendChild(sectorInput);
sectorInput.name = 'sectorInput';
sectorSelect.addEventListener('change',()=>{
    if(sectorSelect.value == ''){
       sectorSelect.parentElement.appendChild(sectorContainer);
    }else if(sectorSelect.value!= '' && sectorSelect.parentElement.contains(sectorContainer)){
        sectorSelect.parentElement.removeChild(sectorContainer)
    }
});
const businessSelect = document.querySelector('.business-select');
const businessContainer = document.createElement('div');
const businessInput = document.createElement('input');
businessContainer.appendChild(businessInput);
businessInput.name = 'businessInput';
businessSelect.addEventListener('change',()=>{
    if(businessSelect.value == ''){
        businessSelect.parentElement.appendChild(businessContainer);
    }else if(businessSelect.value!= '' && businessSelect.parentElement.contains(businessContainer)){
        businessSelect.parentElement.removeChild(businessContainer)
    }
});
const marketSelect = document.querySelector('.market-select');
const marketContainer = document.createElement('div');
const marketInput = document.createElement('input');
marketContainer.appendChild(marketInput);
marketInput.name = 'marketInput';
marketSelect.addEventListener('change',()=>{
    if(marketSelect.value == ''){
        marketSelect.parentElement.appendChild(marketContainer);
    }else if(marketSelect.value!= '' && marketSelect.parentElement.contains(marketContainer)){
        marketSelect.parentElement.removeChild(marketContainer)
    }
});
const stageSelect = document.querySelector('.stage-select');
const stageContainer = document.createElement('div');
const stageInput = document.createElement('input');
stageContainer.appendChild(stageInput);
stageInput.name = 'stageInput';
stageSelect.addEventListener('change',()=>{
    if(stageSelect.value == ''){
        stageSelect.parentElement.appendChild(stageContainer);
    }else if(stageSelect.value!= '' && stageSelect.parentElement.contains(stageContainer)){
        stageSelect.parentElement.removeChild(stageContainer)
    }
});
const serviceSelect = document.querySelector('.service-select');
const serviceContainer = document.createElement('div');
const serviceInput = document.createElement('input');
serviceContainer.appendChild(serviceInput);
serviceInput.name = 'serviceInput';
serviceSelect.addEventListener('change',()=>{
    if(serviceSelect.value == ''){
        serviceSelect.parentElement.appendChild(serviceContainer);
    }else if(serviceSelect.value!= '' && serviceSelect.parentElement.contains(serviceContainer)){
        serviceSelect.parentElement.removeChild(serviceContainer)
    }
});

//-------add founder list-----------------------
const founderList = document.querySelector('.founder-list');
const addFounderBtn = document.querySelector('.add-founder-btn');
const founderInput = document.querySelector('.founder-input');

addFounderBtn.addEventListener('click',()=>{
    if(founderInput.value===''){
        return
    }
    const founderItem = document.createElement('li');
    founderItem.innerHTML = `${founderInput.value}<input value=${founderInput.value} type='hidden' name='founders[]' />`;
    founderList.appendChild(founderItem);
    founderInput.value='';
});

//-----------------add employee list----------------------------------------------
const employeeList = document.querySelector('.employee-list');
const addEmployeeBtn = document.querySelector('.add-employee-btn');
const employeeInput = document.querySelector('.employee-input');
addEmployeeBtn.addEventListener('click',()=>{
    if(employeeInput.value===''){
        return
    }
    const employeeItem = document.createElement('li');
    employeeItem.innerHTML = `${employeeInput.value}<input value=${employeeInput.value} type='hidden' name='employees[]' />`;
    employeeList.appendChild(employeeItem);
    employeeInput.value='';
});

// const submitBtn = document.querySelector('.submit-btn');
// submitBtn.addEventListener('click',()=>{
//     form.submit();
// });

//------------- add current owner --------------

const currentOwnerContainer = document.querySelector('.current-owner-container');
const currentOwnerBox = document.querySelector('.current-owner-box');
const addCurrentOwnerBtn = document.querySelector('.add-current-owner-btn');

let ownerPercentages = document.getElementsByName('owner_percentage');
const ownerExceedMsg = document.querySelector('.owner-exceed-msg');


addCurrentOwnerBtn.addEventListener('click',()=>{
    const newCurrentOwnerBox = document.createElement('div');
    newCurrentOwnerBox.classList.add('current-owner-box');
    newCurrentOwnerBox.innerHTML = `
        <input name="owner_name" type="text" placeholder="Name of the owner" />
        <input name="owner_percentage" type="number" min="0" placeholder="Percentage"/>
    `;
    currentOwnerContainer.appendChild(newCurrentOwnerBox);
    console.log(ownerPercentages.length);
});

// console.log(ownerPercentages.length);
function checkPercentageLimit(){
    let perTotal = 0;
    ownerPercentages.forEach(owp=>{
        perTotal += parseInt(owp.value) || 0;
        console.log(perTotal)
    })
    if(perTotal>100){
        ownerExceedMsg.style.display = 'block';
    }else{
        ownerExceedMsg.style.display = 'none';
    }
};
ownerPercentages.forEach(owner=>{
    owner.addEventListener('input',()=>{
    checkPercentageLimit()
    })
});
window.addEventListener('load',()=>{
    checkPercentageLimit()
})
