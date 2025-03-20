let checkLogin = () => {
    let user = document.getElementById('uname').value;
    let pass = document.getElementById('pass').value;
    if (user === pass) 
        {alert("Hi " + user + ", login successful!"); 
    }
};
document.getElementById('btn').addEventListener('click', checkLogin);
