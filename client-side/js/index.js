import Home from "./components/Home.js";
import Resources from "./Components/Resources.js";
import apiHelpers from "./api-helpers/apiHelpers.js";

const app = document.querySelector("#app");


buildPage();

function buildPage() {
    navHome();
    
    renderNorthwest();
    renderNortheast();
    renderCentral();
    renderSouthwest();
    renderSoutheast();

    renderHome();
    renderFood();
    renderHousing();
    renderGoods();
    renderTransit();
    renderHealth();
    renderMoney();
    renderCare();
    renderEducation();
    renderWork();
    renderLegal();
}

function renderHome() {
    app.innerHTML = Home();
}

function navHome() {
    const homeBtn = document.querySelector("#homeBtn");
    homeBtn.addEventListener("click", () => {
        app.innerHTML = Home();
    });
}

function renderNorthwest() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("region-nw")) {
            apiHelpers.getRequest("http://localhost:8080/northwest/resources", (resource) => {
                app.innerHTML = Resources(resource);
            });
        }
    });
}

function renderNortheast() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("region-ne")) {
            apiHelpers.getRequest("http://localhost:8080/northeast/resources", (resource) => {
                app.innerHTML = Resources(resource);
            });
        }
    });
}

function renderCentral() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("region-c")) {
            apiHelpers.getRequest("http://localhost:8080/central/resources", (resource) => {
                app.innerHTML = Resources(resource);
            });
        }
    });
}

function renderSouthwest() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("region-sw")) {
            apiHelpers.getRequest("http://localhost:8080/southwest/resources", (resource) => {
                app.innerHTML = Resources(resource);
            });
        }
    });
}

function renderSoutheast() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("region-se")) {
            apiHelpers.getRequest("http://localhost:8080/southeast/resources", (resource) => {
                app.innerHTML = Resources(resource);
            });
        }
    });
}

function renderFood() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("food-resources")) {
            apiHelpers.getRequest("http://localhost:8080/resources/services/food", (resource) => {
                app.innerHTML = Resources(resource);
            });
        }
    });
}

function renderHousing() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("housing-resources")) {
            apiHelpers.getRequest("http://localhost:8080/resources/services/housing", (resource) => {
                app.innerHTML = Resources(resource);
            });
        }
    });
}

function renderGoods() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("goods-resources")) {
            apiHelpers.getRequest("http://localhost:8080/resources/services/goods", (resource) => {
                app.innerHTML = Resources(resource);
            });
        }
    });
}

function renderTransit() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("transit-resources")) {
            apiHelpers.getRequest("http://localhost:8080/resources/services/transit", (resource) => {
                app.innerHTML = Resources(resource);
            });
        }
    });
}

function renderHealth() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("health-resources")) {
            apiHelpers.getRequest("http://localhost:8080/resources/services/health", (resource) => {
                app.innerHTML = Resources(resource);
            });
        }
    });
}

function renderMoney() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("money-resources")) {
            apiHelpers.getRequest("http://localhost:8080/resources/services/money", (resource) => {
                app.innerHTML = Resources(resource);
            });
        }
    });
}

function renderCare() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("care-resources")) {
            apiHelpers.getRequest("http://localhost:8080/resources/services/care", (resource) => {
                app.innerHTML = Resources(resource);
            });
        }
    });
}

function renderEducation() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("education-resources")) {
            apiHelpers.getRequest("http://localhost:8080/resources/services/education", (resource) => {
                app.innerHTML = Resources(resource);
            });
        }
    });
}

function renderWork() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("work-resources")) {
            apiHelpers.getRequest("http://localhost:8080/resources/services/work", (resource) => {
                app.innerHTML = Resources(resource);
            });
        }
    });
}

function renderLegal() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("legal-resources")) {
            apiHelpers.getRequest("http://localhost:8080/resources/services/legal", (resource) => {
                app.innerHTML = Resources(resource);
            });
        }
    });
}