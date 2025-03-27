document.getElementById('saveBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const eid = document.getElementById('eid').value;
    const phone = document.getElementById('phone').value;
    const paydata = {
        name: name,
        eid: eid,
        phone: phone
    };
    localStorage.setItem('paydata', JSON.stringify(paydata));

    console.log('Saved Information:', paydata);
    alert('Employee details saved successfully!');
});
document.getElementById('printBtn').addEventListener('click', function() {
    const paydata = JSON.parse(localStorage.getItem('paydata'));
    
    if (paydata) {
        const printContent = `
            Employee Name: ${paydata.name}
            Employee ID: ${paydata.eid}
            Phone Number: ${paydata.phone}
        `;
        console.log(printContent);
        alert('Printing employee details!');
    } else {
        alert('No employee details found in local storage!');
    }
});
