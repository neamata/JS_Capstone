let currentUser = true;

const sections = {
    login: document.getElementById("login-section"),
    signup: document.getElementById("signup-section"),

    //task
    //notes
}

function renderHeader() {
    const userInfo = document.getElementById("user-info");
    const logoutButton = document.getElementById("logout-btn");
    const desktopNavLinks = document.getElementById("desktop-nav");

    if (currentUser === null) {
        userInfo.textContent = "";
        logoutButton.style.display = "none";
        desktopNavLinks.querySelector("#nav-dashboard").style.display = "none";
        desktopNavLinks.querySelector("#nav-tasks").style.display = "none";
        desktopNavLinks.querySelector("#nav-notes").style.display = "none";
    }
    else {
        userInfo.textContent = "randon@gmail.com";
        logoutButton.style.display = "inline";
        desktopNavLinks.querySelector("#nav-dashboard").style.display = "inline";
        desktopNavLinks.querySelector("#nav-tasks").style.display = "inline";
        desktopNavLinks.querySelector("#nav-notes").style.display = "inline";
    }
}

renderHeader();


function initialize() {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener ("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("signup-username").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        // if a user is already registerd with the same email  then show error
        //or
        // user is new  = if(user is new)
        //{ store data to local storage and route to dashboard}

        //for storing data to local storage
        //create an entry
        currentUser = {
            id: Date.now(),
            username,
            email,
            password
        }
        localStorage.setItem("user", JSON.stringify(currentUser));

    })


}

initialize();

function route() {
    const hash = window.location.hash || "#";
    renderHeader();

    if(currentUser) {
        const page = hash.substring(1) || "dashboard";

        switch(page) {
            case "dashboard":
                //renderDashboard();
                break;
            case "tasks":
                //renderTasks();
                break;
            case "notes":
                //rendernotes();
                break;
            default:
                //renderDashboard();
                }
    } else {
        if (hash === "#signup"){
            //showSignUp()
        } else {
            // showLogIn();
        }
    }
}

