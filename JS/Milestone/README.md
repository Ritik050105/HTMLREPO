Employee Name-- id -name
Employee ID --id --eid
phone no --- id --phone
Save Button --id --saveBtn
Print BUtton id --printBtn
script.js:
document.getElementById('savebtn').addEventListener('click', () =>{
    const paydata = {
        name: document.getElementById('name').value,
        eid: document.getElementById('eid').value,
        phone: document.getElementById('phone').value,
    };
});
document.getElementById('printBtn').addEventListener('click',() => {
const paydata = JSON.parse(localStorage.getItem('payData'));
if(payData)
{
    const print = window.open('','_blank');

    print.document.write(`Name ${ayData.name}`);
    print.document.write(`Eid ${ayData.eid}`);
    print.document.write(`Phone ${ayData.phone}`);

}
});
