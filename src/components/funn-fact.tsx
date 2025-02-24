import React, { useState, useEffect } from "react";
import "@/styles/global.css"

const funFacts = [
  "Schreiben gibt den Gedanken Struktur.",
  "Der erste Computer entwickelte sich aus Schreibmaschinen.",
  "Papier wurde ursprünglich aus Pflanzenfasern hergestellt.",
  "Kalligrafie ist die Kunst des schönen Schreibens.",
  "Handschrift verändert sich im Laufe des Lebens.",
  "Lesen stärkt das Gedächtnis und erweitert den Wortschatz.",
  "Bücher bieten den Schlüssel zu anderen Welten.",
  "Lesen steigert die Konzentration und Empathie.",
  "Lesen vor dem Schlafen hilft, den Geist zu beruhigen.",
  "Wer liest, verbessert seine analytischen Fähigkeiten."
];

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 100) + 100; // Rot bleibt im helleren Bereich
  const g = Math.floor(Math.random() * 100) + 150; // Grün bleibt ebenfalls im helleren Bereich
  const b = Math.floor(Math.random() * 100) + 240; // Blau ist immer mehr betont, ab 200-255
  return `rgb(${r}, ${g}, ${b})`;
};


interface FunFactProps {
  align?: "left" | "center"; // Neue Prop für die Ausrichtung
}

const FunFact: React.FC<FunFactProps> = ({ align = "left" }) => {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * funFacts.length)); // Zufälliger Startindex
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [color, setColor] = useState(getRandomColor()); // Hintergrundfarbe im Zustand speichern

  useEffect(() => {
    const timer = setTimeout(() => {
      // Speichere den aktuellen Index als vorherigen Wert
      setPrevIndex(index);
      // Bestimme den neuen Index
      setIndex((prev) => (prev + 1) % funFacts.length);
      // Entferne den alten Fun Fact nach Ablauf der Animationsdauer (500ms)
      setTimeout(() => {
        setPrevIndex(null);
      }, 300);
    }, 4000);

    // Farbe nur einmal ändern, wenn der Fun Fact wechselt
    setColor(getRandomColor());

    return () => clearTimeout(timer);
  }, [index]);

  const containerClasses = align === "center" ? "flex justify-center" : "";

  return (
    <div className={`relative h-10 text-lg font-medium  ${containerClasses}`}>
      {prevIndex !== null && (
        <FunFactItem key={`exit-${prevIndex}`} text={funFacts[prevIndex]} type="exit" backgroundColor={color} />
      )}
      <FunFactItem key={`enter-${index}`} text={funFacts[index]} type="enter" backgroundColor={color} />
    </div>
  );
};

interface FunFactItemProps {
  text: string;
  type: "enter" | "exit";
  backgroundColor: string;  // Hier die Hintergrundfarbe als Prop übergeben
  onAnimationEnd?: () => void;
}

const FunFactItem: React.FC<FunFactItemProps> = ({ text, type, backgroundColor, onAnimationEnd }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Animation starten (nächster Frame)
    const id = requestAnimationFrame(() => {
      setAnimate(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const baseClasses = "absolute transition-all duration-300 ease-in-out";

  let classes = "";

  if (type === "enter") {
    // Neuer Fun Fact: startet unten, unsichtbar und gedreht, kommt dann in Position
    classes = animate
      ? `translate-y-0 opacity-100 rotate-0 px-2 mt-1 rounded-full shadow-sm`
      : `translate-y-full opacity-0 scale-50 rotate-0 mt-1 rounded-full shadow-sm`;
  } else {
    // Alter Fun Fact: startet in Position, verschwindet nach oben mit Rotation
    classes = animate
      ? `-translate-y-full opacity-0 scale-50 rotate-0 px-2 mt-1 rounded-full shadow-sm`
      : `translate-y-0 opacity-100 rotate-0 mt-1 rounded-full shadow-sm`;
  }

  return (
    <div
      className={`${baseClasses} ${classes}`}
      style={{ backgroundColor }} // Hintergrundfarbe wird jetzt durch Props gesetzt
      onTransitionEnd={onAnimationEnd}
    >
      {text}
    </div>
  );
};


export default FunFact;
