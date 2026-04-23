export type FirestationPopup = {
  type: "firestation";
  navn: string;
  brannvesen: string;
  kasernert: string;
};

export type AccidentPopup = {
  type: "accident";
  dato: string;
  ukedag: string;
  uhellskode: string;
  fartsgrense: number;
  lysforhold: string;
  antallEnheter: number;
};

export type HospitalPopup = {
  type: "hospital";
  name: string;
  operator: string;
};

export type PopupData = FirestationPopup | AccidentPopup | HospitalPopup;

interface PopupProps {
  popup: PopupData;
  onClose: () => void;
}

export function Popup({ popup, onClose }: PopupProps) {
  return (
    <div className="popup">
      <button onClick={onClose}>X</button>
      {popup.type === "hospital" && (
        <>
          <h3>{popup.name}</h3>
          {popup.operator && <p>{popup.operator}</p>}
        </>
      )}
      {popup.type === "firestation" && (
        <>
          <h3>{popup.navn}</h3>
          <p>{popup.brannvesen}</p>
          <p>{popup.kasernert}</p>
        </>
      )}
      {popup.type === "accident" && (
        <>
          <h3>Accident</h3>
          <p>
            <strong>Date:</strong> {popup.dato} ({popup.ukedag})
          </p>
          <p>
            <strong>Type:</strong> {popup.uhellskode}
          </p>
          <p>
            <strong>Speed limit:</strong> {popup.fartsgrense} km/t
          </p>
          <p>
            <strong>Lighting:</strong> {popup.lysforhold}
          </p>
          <p>
            <strong>Vehicles:</strong> {popup.antallEnheter}
          </p>
        </>
      )}
    </div>
  );
}
