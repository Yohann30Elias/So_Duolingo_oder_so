import './App.css';
import saetze from "./data/data.json";

import { useState } from "react";


function App() {

  const [aktuellerSatz, setAktuellerSatz] = useState(getZufaelligerSatz());
  const [benutzerEingabe, setBenutzerEingabe] = useState("");
  const [istKorrekt, setIstKorrekt] = useState(null);
  const [geprueft, setGeprueft] = useState(false);

 function getZufaelligerSatz () {
  const zufallsIndex = Math.floor(Math.random() * saetze.length);
  return saetze[zufallsIndex];
 }

 function pruefeAntwort(e) {
  if (e.key === "Enter") {
    if (benutzerEingabe.toLowerCase() === aktuellerSatz.uebersetzung.toLowerCase()) {
      setIstKorrekt(true);
    } else {
      setIstKorrekt(false);
    }
    setGeprueft(true);
  }
 }

 function naechsterSatz() {
  setAktuellerSatz(getZufaelligerSatz());
  setBenutzerEingabe("");
  setIstKorrekt(null);
  setGeprueft(false);
 }

  return (
    <div class="mainFrame">
      <div>
        <h1>Willkommen<br/>zu Billo Babbel</h1>
        <h3>Du musst das markierte Wort im Satz übersetzen</h3>

        <p>{aktuellerSatz.satz}</p>
        <input type="text" placeholder="Übersetzung Eingeben bittöö" value={benutzerEingabe} onChange={(e) => setBenutzerEingabe(e.target.value)} onKeyDown={pruefeAntwort}/>
      </div>
      <div>
        <br/>
        {geprueft && (
          istKorrekt ? ( 
            <p style={{ color: "green"}}>Korrekt</p>
          ) : (
            <p style={{ color: "red"}}> Falsch, richtig wär: {aktuellerSatz.uebersetzung}</p>
          )
        )}
        <br/>
        <button onClick={naechsterSatz}>Nächster Satz oder sö</button>
      </div>
    </div>

  );

}

export default App;
