import React, {useState, useMemo, memo} from "react";
import {useDymoCheckService, useDymoFetchPrinters, useDymoOpenLabel, printLabel} from "react-dymo-hooks";

import {generateXmlExample} from "./utils";

const DymoLabelPreview = memo(({xml, statusDymoService, loadingComponent, errorComponent}) => {
  const {label, statusOpenLabel} = useDymoOpenLabel(statusDymoService, xml);
  const style = {background: "hsla(0, 0%, 84%, 1.00)", padding: 10};
  if (statusOpenLabel === "loading") {
    return loadingComponent;
  } else if (statusOpenLabel === "error") {
    return errorComponent;
  } else if (statusOpenLabel === "success") {
    return (
      <React.Fragment>
        <img src={"data:image/png;base64," + label} alt="dymo label preview" style={style} />
      </React.Fragment>
    );
  }
});

export default function App() {
  const statusDymoService = useDymoCheckService();
  const {statusFetchPrinters, printers} = useDymoFetchPrinters(statusDymoService);

  const [name, setName] = useState("");
  const [kunde, setKunde] = useState("");
  const [afk, setAFK] = useState("");
  const [a, setA] = useState("");
  const [menge, setMenge] = useState("");
  const [kundencharge, setKundencharge] = useState("");
  const [mhd, setMHD] = useState("");
  const [kartonnr, setKartonNr] = useState("");
  const [kartonsgesamt, setKartonsGesamt] = useState("");

  const [selectedPrinter, setSelectedPrinter] = useState(null);

  const xmlMemo = useMemo(() => generateXmlExample(name, kunde, afk, a, menge, kundencharge, mhd, kartonnr, kartonsgesamt), [name, kunde, afk, a, menge, kundencharge, mhd, kartonnr, kartonsgesamt]);

  async function handlePrintSingleLabel(printerName, labelXml) {
    try {
      const response = await printLabel(printerName, labelXml);
      console.info(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {statusDymoService === "loading" && <h1>Lokaler DYMO Web Service wird geprüft...</h1>}
      {statusDymoService === "error" && <h1>Fehler</h1>}
      {statusDymoService === "success" && (
        <React.Fragment>
          <h3 style={{color: "green"}}>DYMO Web Service ist Funktionsbereit.</h3>
          <br />
          Produktname<input value={name} title="Name" onChange={(e) => setName(e.target.value)} />
          <br />
          Kunde<input value={kunde} title="Kunde" onChange={(e) => setKunde(e.target.value)} />
          <br />
          AFK-<input value={afk} title="AFK" onChange={(e) => setAFK(e.target.value)} />
          <br />
          <br />
          -A<input value={a} title="A" onChange={(e) => setA(e.target.value)} />
          <br />
          <br />
          Menge<input value={menge} title="Menge" onChange={(e) => setMenge(e.target.value)} />
          <br />
          <br />
          Kundencharge<input value={kundencharge} title="Kundencharge" onChange={(e) => setKundencharge(e.target.value)} />
          <br />
          <br />
          MHD<input value={mhd} title="MHD" onChange={(e) => setMHD(e.target.value)} />
          <br />
          <br />
          Karton Nr<input value={kartonnr} title="KartonNr" onChange={(e) => setKartonNr(e.target.value)} />
          <br />
          <br />
          Kartons Gesamt<input value={kartonsgesamt} title="KartonsGesamt" onChange={(e) => setKartonsGesamt(e.target.value)} />
          <br />
          <br />
          <br />
        </React.Fragment>
      )}
      <DymoLabelPreview
        xml={xmlMemo}
        statusDymoService={statusDymoService}
        loadingComponent={<h4>Vorschau wird geladen...</h4>}
        errorComponent={<h4>Fehler..</h4>}
      />
      {statusFetchPrinters === "loading" && <h4>DYMO Drucker werden gesucht..</h4>}
      <br />
      <br />
      {statusFetchPrinters === "success" && (
        <React.Fragment>
          <label htmlFor="printer-select">DYMO Drucker auswählen:</label>
          <br />
          <select name="printers" id="printer-select" onChange={(e) => setSelectedPrinter(e.target.value)}>
            <option value="">--Auswählen--</option>
            {printers.map((printer) => (
              <option key={printer.name} value={printer.name}>
                {printer.name}
              </option>
            ))}
          </select>
        </React.Fragment>
      )}
      <br />
      <br />
      <button disabled={!selectedPrinter} onClick={() => handlePrintSingleLabel(selectedPrinter, xmlMemo)}>
        Drucken
      </button>
    </div>
  );
}
