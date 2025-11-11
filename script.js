//////PAGINA PRINCIPALA
////folosire Date() pt calculare data si ora
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const formattedDateTime = now.toLocaleString('ro-RO', {
        dateStyle: 'full',
        timeStyle: 'medium',
    });
    dateTimeElement.textContent = formattedDateTime;
    }

    // Actualizare la fiecare secundă
    setInterval(updateDateTime, 1000);

    // Actualizare initiala la refresh
    updateDateTime();
//dimensiune imagini
function schimbadim() {
    const div = document.getElementById("detaliihomeimg1");
    div.style.width = "70%";
}
function schimbadim2() {
    const div = document.getElementById("detaliihomeimg2");
    div.style.width = "70%";
}
//////PAGINA DE ZONE SI TRANSPORT
////schimbare culori/theme
function changeColor() {
    const div = document.getElementById("zone");
    div.style.backgroundColor = "rgb(105, 70, 70)";
    div.style.color = "white";
    const div1 = document.getElementById("titluzone");
    div1.style.backgroundColor = "rgb(100, 80, 80)";
    div1.style.color = "white";
    const div2 = document.getElementById("paragrafzone1");
    div2.style.backgroundColor = "rgb(59, 15, 15)";
    div2.style.color = "white";
    const div3 = document.getElementById("paragrafzone2");
    div3.style.backgroundColor = "rgb(115, 77, 77)";
    div3.style.color = "white";
    const div4 = document.getElementById("paragrafzone3");
    div4.style.backgroundColor = "rgb(120, 82, 82)";
    div4.style.color = "white";
    const div5 = document.getElementById("paragrafzone4");
    div5.style.backgroundColor = "rgb(121, 80, 80)";
    div5.style.color = "white";
    const div6 = document.getElementById("paragrafzone5");
    div6.style.backgroundColor = "rgb(112, 90, 90)";
    div6.style.color = "white";
    }
//functia care va crea si va adauga in tabel date
function afiseazaTabel(preturi) {
    const tabel = document.getElementById("tabelPreturi");
    const tbody = tabel.querySelector("tbody");
              
//curatarea initiala a tabelului
    tbody.innerHTML = "";
        
    preturi.forEach((item) => {
        const tr = document.createElement("tr"); // creearea randurilor
        
        // creearea celulelor
        const tdTip = document.createElement("td");
        tdTip.textContent = item.tip;
        tr.appendChild(tdTip);
        
        const tdPret = document.createElement("td");
        tdPret.textContent = item.pret;
        tr.appendChild(tdPret);
        
         tbody.appendChild(tr);
        });
        
//fac tabelul vizibil
    tabel.style.display = "table";
 }
        
document.getElementById("incarcaTabel").addEventListener("click", function () {
// preiau datele JSON folosind fetch
fetch('preturistb.json')
.then(response => {
    if (!response.ok) {
    throw new Error('Nu am putut prelua fișierul JSON.');
    }
     return response.json();
    })
.then(preturi => {
    afiseazaTabel(preturi);
    })
.catch(error => {
    console.error('Eroare la preluarea datelor:', error);
    });
});
//////PAGINA LOCATII
//afisare detalii suplimentare
document.getElementById("butondetalii1").onclick = function () {
    const paragraf = document.getElementById("detaliu1");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii2").onclick = function () {
    const paragraf = document.getElementById("detaliu2");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii3").onclick = function () {
    const paragraf = document.getElementById("detaliu3");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii4").onclick = function () {
    const paragraf = document.getElementById("detaliu4");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii5").onclick = function () {
    const paragraf = document.getElementById("detaliu5");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii6").onclick = function () {
    const paragraf = document.getElementById("detaliu6");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii7").onclick = function () {
    const paragraf = document.getElementById("detaliu7");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii8").onclick = function () {
    const paragraf = document.getElementById("detaliu8");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii9").onclick = function () {
    const paragraf = document.getElementById("detaliu9");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii10").onclick = function () {
    const paragraf = document.getElementById("detaliu10");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii11").onclick = function () {
    const paragraf = document.getElementById("detaliu11");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii12").onclick = function () {
    const paragraf = document.getElementById("detaliu12");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii13").onclick = function () {
    const paragraf = document.getElementById("detaliu13");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii14").onclick = function () {
    const paragraf = document.getElementById("detaliu14");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii15").onclick = function () {
    const paragraf = document.getElementById("detaliu15");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii16").onclick = function () {
    const paragraf = document.getElementById("detaliu16");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii17").onclick = function () {
    const paragraf = document.getElementById("detaliu17");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii18").onclick = function () {
    const paragraf = document.getElementById("detaliu18");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii19").onclick = function () {
    const paragraf = document.getElementById("detaliu19");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii20").onclick = function () {
    const paragraf = document.getElementById("detaliu20");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii21").onclick = function () {
    const paragraf = document.getElementById("detaliu21");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii22").onclick = function () {
    const paragraf = document.getElementById("detaliu22");
    paragraf.style.display = "block";
};
document.getElementById("butondetalii23").onclick = function () {
    const paragraf = document.getElementById("detaliu23");
    paragraf.style.display = "block";
};
document.addEventListener("DOMContentLoaded",  function () {
    const links=document.querySelectorAll(".link");
    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            if (link.classList.contains("odd")){
                link.style.color="black";
            }
            else{
                link.style.color="white";
            }
        });
    });
});
//modificare in folosinde Mouse si tastatura

// Selectez toate elementele
const elements = document.querySelectorAll('element');
const output = document.getElementById('outputText');
          
// eveniment de mouse (hover + click)
elements.forEach((element) => {
// schimba culoarea la la hover
element.addEventListener('mouseenter', (e) => {
e.target.style.backgroundColor = '#e9ecef';
});
// se intoarce la culoarea initiala
element.addEventListener('mouseleave', (e) => {
e.target.style.backgroundColor = '#f0f0f0';
});
// selectare element la click
element.addEventListener('click', (e) => {
output.innerText = `Ai selectat evenimentul: ${e.target.textContent}`;
});
});
          
// tastatura
document.addEventListener('keydown', (e) => {
const focusedElement = document.activeElement;
          
// verific daca elementul activ are clasa "element"
    if (focusedElement.classList.contains('element')) {
// tasta Enter pentru selectie
    if (e.key === 'Enter') {
        output.innerText = `Ai selectat evenimentul: ${focusedElement.textContent}`;
        console.log(focusedElement.textContent)
    }
// tasta Backspace pentru a deselecta
    if (e.key === 'Backspace') {
        output.innerText = 'Interacționează cu lista de evenimente pentru mai multe detalii.';
    }
          
// tasta Escape pentru resetare focus
    if (e.key === 'Escape') {
        focusedElement.blur();
        output.innerText = 'Interacționează cu lista de evenimente pentru mai multe detalii.';
        }
    }
});

////adaugare locuri preferate
///lista de stergere si adaugare elemente folosind local storage
// selectăm elementele HTML
const addPlaceButton = document.querySelector("#addPlace");
const deletePlaceButton = document.querySelector("#deletePlace")
const placesList = document.querySelector("#placesList");
const placeInput = document.querySelector("#placeInput");

///functie pentru a salva lista de locuri in localStorage
function savePlacesToLocalStorage() {
    // preiau toate elementele din lista
    const places = Array.from(placesList.children).map(item => item.textContent);
    // salvez lista ca string JSON în localStorage
    localStorage.setItem("favoritePlaces", JSON.stringify(places));
}

// functie pentru a incarca lista de locuri din localStorage
function loadPlacesFromLocalStorage() {
    const savedPlaces = localStorage.getItem("favoritePlaces");
    if (savedPlaces) {
        // Conversia stringului JSON în array
        const places = JSON.parse(savedPlaces);
        places.forEach(placeName => addPlaceToList(placeName));
    }
}

//pentru a adauga un loc in lista
function addPlaceToList(placeName) {
    const newPlace = document.createElement("li");
    newPlace.textContent = placeName;

    newPlace.addEventListener("click", () => {
        newPlace.remove();
        savePlacesToLocalStorage(); // actualizare localStorage
    });

    // adaug locul in lista vizibila
    placesList.appendChild(newPlace);
}

//eveniment la click pe butonul "Adauga loc"
addPlaceButton.addEventListener("click", () => {
    //obtin textul introdus de utilizator
    const placeName = placeInput.value.trim();
    if (placeName === "") {
        alert("Te rog să introduci un nume pentru loc!");
        return;
    }
    addPlaceToList(placeName);
    //salvez in localStorage
    savePlacesToLocalStorage();
    //golesc campul de input
    placeInput.value = "";
});
deletePlaceButton.addEventListener("click", () => {
    placesList.removeChild(placesList.lastChild);
});
//restaurez locurile salvate la refresh
loadPlacesFromLocalStorage();
/////canvas
const drawCanvas = document.getElementById("drawCanvas");
    const ctx = drawCanvas.getContext("2d");

    let isDrawing = false;

    drawCanvas.addEventListener("mousedown", () => {
        isDrawing = true;
        ctx.beginPath(); // incepem o noua linie
    });

    drawCanvas.addEventListener("mousemove", (event) => {
        if (!isDrawing) return;

        const x = event.offsetX;
        const y = event.offsetY;
        ctx.lineTo(x, y);
        ctx.strokeStyle = "rgb(61, 25, 98)";
        ctx.lineWidth = 2;
        ctx.stroke();
    });

    drawCanvas.addEventListener("mouseup", () => {
        isDrawing = false;
        ctx.closePath();
    });
//////SVG
        const svgMap = document.getElementById('mapSVG');
        const infoBox = document.getElementById('info');

                //adaug evenimente pe fiecare locatie
                svgMap.addEventListener('click', () => {
                infoBox.textContent = 'Ai făcut clic pe hartă. Selectează un obiectiv specific.';
                });

                document.querySelectorAll('rect').forEach(location => {
                location.addEventListener('click', (event) => {
                    // opreste propagarea evenimentului la intreaga harta
                    event.stopPropagation();

                    // obtine stilurile calculate ale locatiei selectate
                    const computedStyles = getComputedStyle(location);
                    const fillColor = computedStyles.fill;

                    //afiseaza detalii despre locatie si stil
                    const locationId = location.id;
                    const details = {
                    cotroceni: 'Zona rezidențială și istorică cu numeroase cladiri ce au o arhitectură impresionantă.',
                    tineretului: 'Un parc mare cu un lac minunat pentru relaxare.',
                    herastrau: 'Un parc vast, popular pentru evenimente și plimbări.',
                    caleavict: 'O stradă renumita, plină de istorie, cafenele si restaurante.',
                    vatraluminoasa: 'Un cartier liniștit, ideal pentru familii.'
                    };

                    infoBox.innerHTML = `
                    <strong>Locație:</strong> ${details[locationId]}<br>
                    <strong>Culoare de fundal:</strong> ${fillColor}.
                    `;
                });
                });

/////pagina evenimente

    function selectEvent(event) {
        const allEvents = document.querySelectorAll('.luna');
        allEvents.forEach(eventElement => eventElement.classList.remove('selected'));
      
        event.target.classList.add('selected');
      
          //scriu detaliile pe ecran
        document.getElementById('evenimentDetalii').textContent = `Evenimentul selectat este: ${event.target.textContent}`;
        document.getElementById('containerDetalii').textContent = `Containerul evenimentului este: ${event.currentTarget.tagName}`;
    }
        //lista de evenimente
    const evenimente = [
  { name: "Sesame Live Sessions", date: "Duminica 15.01", location: "Expirat"},
  { name: "Concert Tesseract si Novelists", date: "Marti 21.01", location: "Quantic"},
  { name: "Bucharest Tekno Unit 065 with Suburbass", date: "Vineri 24.01", location: "Forge"},
  { name: "HS82", date: "Vineri 31.01 - Sambata 01.02", location: "Grand Hotel Bucharest"},
  { name: "Concert Bosquito", date: "Marti 25.02", location: "Sala Palatului"},
  { name: "3 SUD EST", date: "Vineri 21.02", location: "Beraria H"},
  { name: "EERA TOUR 2025 Bucharest", date: "Vineri 28.02", location: "Quantic"},
  { name: "ctrl LIVE: She Past Away", date: "Miercuri 26.03", location: "Control Club"},
  { name: "Jay-Jay Johanson", date: "05.03", location: "Expirat"},
  { name: "CoffeEAST Festival 2025", date: "Vineri 04.04 - Duminica 06.04", location: "Hala Laminor"},
  { name: "Elrow Bucharest", date: "Sambata 05.04 - Duminica 06.04", location: "Laminor Arena"},
  { name: "Bucharest Half Marathon", date: "Sambata 10.05", location: "Piata Constitutiei"}
];


    // functia de generare a unui eveniment aleatoriu
    function generateEvent() {
      //calculez un index aleatoriu in functie de numarul de evenimente
      const randomIndex = Math.floor(Math.random() * evenimente.length);

      //obtin evenimentul corespunzator
      const selectedEvent = evenimente[randomIndex];

      const resultMessage = `Pentru astăzi, "generatorul" te trimite la: <strong>${selectedEvent.name.toUpperCase()}</strong><br>
                              <em>Data: ${selectedEvent.date}</em><br>
                              Locație: ${selectedEvent.location}`;

      // Afisez mesajul in div ul cu id="result"
      document.getElementById("result").innerHTML = resultMessage;
    }
    
////////COntact
document.getElementById('formular').addEventListener('submit', function(event){
    let isValid = true;
    const nume = document.getElementById('nume').value.trim();
    const numeEroare = document.getElementById('eroare-nume');
    const numeRegex = /^[A-Za-z\s'-]{3,50}$/; // Accepta doar litere, spatii, apostrof si cratima
    if (!numeRegex.test(nume)) {
        isValid = false;
        numeEroare.textContent = 'Numele trebuie să aibă între 3 și 50 de caractere și să conțină doar litere!';
    } else {
        numeEroare.textContent = '';
    }

    //validare pentru "Email"
    const email = document.getElementById('email').value.trim();
const emailEroare = document.getElementById('eroare-email');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!emailRegex.test(email)) {
    isValid = false;
    emailEroare.textContent = 'Introduceți o adresă de email validă!';
} else {
    emailEroare.textContent = '';
}

//validare pentru campul "Mesaj"
const mesaj = document.getElementById('mesaj').value.trim();
const mesajEroare = document.getElementById('eroare-mesaj');
if (mesaj.length < 10) {
    isValid = false;
    mesajEroare.textContent = 'Mesajul trebuie să aibă cel puțin 10 caractere!';
} else {
    mesajEroare.textContent = '';
}

// previne trimiterea formularului daca exista erori
if (!isValid) {
    event.preventDefault();
}
});



///////login+logout
// Verifica daca utilizatorul este autentificat
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (currentUser) {
  // Afiseaza un mesaj de bun venit personalizat
  document.getElementById("welcomeMessage").textContent = `Salut, ${currentUser.username}!`;
} else {
  // Daca utilizatorul nu este logat, redirectioneaza la login
  alert("Trebuie să te autentifici pentru a accesa această pagină.");
  window.location.href = "login.html";
}

// Logout
document.getElementById("logoutButton").addEventListener("click", function () {
  localStorage.removeItem("currentUser");
  alert("Te-ai deconectat!");
  window.location.href = "login.html";
});