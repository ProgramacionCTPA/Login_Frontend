const API = "https://login-backend-gi6s.onrender.com";

async function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${API}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    alert(data.message);
    if(res.ok) window.location.href = "index.html";
}

async function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if(res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        window.location.href = "menu.html";
    } else {
        alert(data.message);
    }
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

if(window.location.pathname.includes("menu.html")) {
    const username = localStorage.getItem("username");
    if(!username) {
        window.location.href = "index.html";
    } else {
        document.getElementById("user").textContent = username;
    }

}
