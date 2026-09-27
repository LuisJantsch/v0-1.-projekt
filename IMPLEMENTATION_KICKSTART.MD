# Implementierungsplan: Premium-Website für Fahrzeugaufbereitung

## 1. Projektziel

Eine deutschsprachige, vollständig responsive Full-Width-Landingpage für einen Fahrzeugaufbereitungsbetrieb. Die Website soll hochwertig, vertrauenswürdig und conversion-orientiert wirken und als robuster Frontend-Prototyp dienen.

Der Prototyp verwendet Beispielinhalte. Es werden keine echten Buchungen, Zahlungen, E-Mail-Erfassungen oder externen Datenquellen integriert.

## 2. Verbindliche Vorgaben

- Dark Theme als visuelle Basis
- Vorgegebene Akzentfarbe ausschließlich über zentrale Design-Tokens verwenden
- GEIST als bevorzugte Schriftfamilie
- Glassmorphism für Karten und ausgewählte Oberflächen
- Full-Width-Darstellung mit kontrollierter maximaler Inhaltsbreite
- Mobile-first und vollständig responsiv für Smartphone, Tablet und Desktop
- Dezente Animationen und sanftes Scrollverhalten
- Mindestens drei klar sichtbare CTAs
- CTA öffnet ein zugängliches Modal
- Kontaktoption für Stefan führt auf `/kontakt`
- Keine E-Mail-Erfassung und kein Newsletterformular
- FAQs mit Beispielinhalten
- Keine zusätzlichen Designvarianten oder alternative Produktoptionen
- Komponenten möglichst auf etwa 600 Zeilen oder weniger begrenzen
- Kein globales State-Management erforderlich

## 3. Seitenstruktur

### Landingpage `/`

1. Header mit Logo/Branding, Desktop-Navigation, Mobile-Burger-Menü und CTA
2. Hero-Bereich mit H1, Nutzenversprechen, primärem CTA und Fahrzeugbild
3. Vertrauens-/Statistikband mit klar als Prototyp erkennbaren Beispielwerten
4. Paketübersicht mit drei Leistungsstufen und hervorgehobener Empfehlung
5. Vorher-/Nachher-Slider für die visuelle Demonstration des Ergebnisses
6. Prozess- oder Vorteilssektion
7. Testimonial-/Social-Proof-Bereich mit Beispielinhalten
8. FAQ-Akkordeon
9. Kontakt-/Standort-CTA
10. Footer mit Kontaktlink, rechtlichen Platzhaltern und Zurück-nach-oben-Funktion

### Kontaktseite `/kontakt`

- Kontaktmöglichkeit zu Stefan
- Beispielhafte Telefonnummer, Adresse und Öffnungszeiten
- Rücksprung zur Landingpage
- Keine E-Mail-Erfassung
- Keine echte Versand- oder Buchungslogik

## 4. Komponentenarchitektur

Die Seite wird aus fokussierten, wiederverwendbaren Komponenten zusammengesetzt:

- `Header`
- `MobileNavigation`
- `HeroSection`
- `TrustStats`
- `PackageCards`
- `BeforeAfterSlider`
- `ProcessSection`
- `Testimonials`
- `FaqSection`
- `ContactCta`
- `Footer`
- `BookingModal`
- `ScrollToTop`

Interaktive Komponenten werden als Client Components umgesetzt. Rein darstellende Sektionen bleiben möglichst serverseitig verwendbar.

Bestehende UI-Primitives, insbesondere `Button`, werden wiederverwendet. Icons werden aus `lucide-react` bezogen.

## 5. Designsystem und Tokens

Alle visuellen Entscheidungen werden zentral in `app/globals.css` definiert:

- Hintergrund- und Oberflächenfarben
- Haupttext und Muted Text
- Akzentfarbe und Akzent-Kontrast
- Border-, Ring- und Schattenrollen
- Glassmorphism-Opazität, Blur und Border
- Typografie und responsive Schriftgrößen
- Containerbreiten und Breakpoints
- Abstände und Radien
- Button-, Card- und CTA-Zustände
- Fokus-, Hover-, Active- und Disabled-Zustände

Die Akzentfarbe wird nicht direkt in Komponenten hardcodiert. Falls der Kontrast im Browser nicht ausreicht, wird nur der zentrale Token angepasst.

## 6. Bildstrategie

Da keine finalen Bilder vorliegen, werden hochwertige lokale Platzhalter-Assets für Fahrzeugaufbereitung generiert und unter `public/` gespeichert.

Benötigte Motive:

- Hero: hochwertiges Fahrzeug mit reflektierendem Lack in dunkler Studioatmosphäre
- Vorher-/Nachher-Slider: vergleichbare Ansichten desselben oder visuell konsistenten Fahrzeugs
- Optional: Detailaufnahmen von Lack, Innenraum, Felgen oder Keramikversiegelung

Alle Bilder erhalten sinnvolle Alt-Texte und werden später leicht durch echte Betriebsfotos austauschbar bleiben.

## 7. Interaktionen

- Mobile Navigation öffnet und schließt per Burger-Button, Overlay, Escape und Link-Klick.
- CTAs öffnen ein zugängliches Modal mit Prototyp-Hinweis und Kontaktoption.
- Dialoge besitzen Titel, klare Beschriftungen, Escape-Verhalten und Fokusmanagement.
- FAQ-Elemente lassen sich einzeln öffnen und schließen.
- Vorher-/Nachher-Slider funktioniert per Maus, Touch und Tastatur.
- Zurück-nach-oben-Schaltfläche erscheint nach dem Scrollen und nutzt Smooth Scroll.
- Animationen bleiben kurz und zurückhaltend.
- `prefers-reduced-motion` reduziert oder deaktiviert nicht notwendige Bewegungen.

## 8. Responsive Umsetzung

- Mobile-first Layout mit Flexbox und CSS Grid
- Keine horizontale Überbreite
- Ausreichend große Touch-Ziele
- Mobile Sticky-CTA nur, wenn sie Inhalt und Dialog nicht verdeckt
- Anpassung von Navigation, Kartenraster, Typografie und Abständen an Tablet- und Desktop-Breakpoints
- Prüfung der Darstellung mindestens bei Smartphone-, Tablet- und Desktop-Breite

## 9. Accessibility

- Semantische Elemente wie `header`, `main`, `section`, `nav` und `footer`
- Genau ein zentraler H1 pro Seite
- Sichtbare Fokuszustände
- Tastaturbedienung für Navigation, Modal, FAQ und Slider
- ARIA-Labels für Icon-Buttons und interaktive Slider-Elemente
- Dialogtitel und zugängliche Beschreibungen
- Sinnvolle Alt-Texte für informative Bilder
- Ausreichende Kontraste für Haupt- und Sekundärtext
- Respektierung von `prefers-reduced-motion`

## 10. SEO

- Deutsche Seitensprache
- Aussagekräftige Titel und Meta-Descriptions
- Semantische Überschriftenhierarchie
- Begriffe rund um Fahrzeugaufbereitung, Innenraumreinigung, Lackpflege und Leasingrückgabe in Beispieltexten
- Open-Graph-Grunddaten
- Optimierte lokale Bilder
- Keine fiktiven Bewertungs- oder Garantie-Schema-Daten
- Strukturierte Daten nur für belastbare Inhalte verwenden

## 11. Beispielinhalte und rechtliche Abgrenzung

Unternehmensname, Standort, Kontaktangaben, Preise, Testimonials, Statistiken und Garantieformulierungen bleiben Platzhalter, bis echte und rechtlich geprüfte Inhalte vorliegen.

Keine Aussage darf im Prototyp unbeabsichtigt als verbindliche Garantie, echte Kundenbewertung oder nachgewiesenes Einsparversprechen erscheinen.

Impressum, Datenschutz, AGB und verbindliche Garantiebedingungen sind nicht Bestandteil dieser Frontend-Iteration.

## 12. Nicht Bestandteil

- Backend oder Datenbank
- Authentifizierung
- Adminbereich
- Terminverfügbarkeit
- Buchungsspeicherung
- Onlinezahlung und Rechnungen
- E-Mail-Versand
- CRM-, Kalender- oder Bewertungsintegrationen
- echte Analytics- oder Marketing-Integrationen
- Produktionsreife Rechtstexte

## 13. Umsetzungsreihenfolge

1. Globale Design-Tokens, GEIST-Typografie und Dark Theme einrichten
2. Lokale Bildassets generieren und einbinden
3. Header, Hero und Vertrauensbereich umsetzen
4. Paketkarten, Slider und Prozesssektion ergänzen
5. Testimonials, FAQ, Kontakt-CTA und Footer umsetzen
6. Modal, Mobile Navigation, FAQ, Slider und Scroll-to-top verdrahten
7. Kontaktseite `/kontakt` erstellen
8. SEO-Metadaten und semantische Struktur prüfen
9. Responsive- und Accessibility-Prüfungen durchführen
10. TypeScript-/Next.js-Build ausführen
11. Desktop-, Tablet- und Mobile-Preview im Browser prüfen

## 14. Abnahmekriterien

- Landingpage und Kontaktseite rendern ohne Laufzeitfehler
- Alle zentralen CTAs sind sichtbar und funktionieren
- Mobile Navigation funktioniert vollständig
- Modal öffnet und schließt zugänglich
- FAQ und Vorher-/Nachher-Slider sind bedienbar
- Zurück-nach-oben-Funktion arbeitet mit Smooth Scroll
- Layout bleibt auf mobilen Geräten ohne horizontales Scrollen nutzbar
- Dark Theme, Glassmorphism und Akzentfarbe wirken konsistent
- Haupt- und Muted-Text bleiben lesbar
- Reduced-Motion-Einstellung wird respektiert
- Keine echte Datenerfassung oder Produktionsbuchung wird vorgetäuscht
- Build und Browserprüfung sind erfolgreich

## 15. Spätere Erweiterungspunkte

Nach Bereitstellung echter Unternehmensdaten können Platzhalter ersetzt und anschließend separat ergänzt werden:

- echtes Buchungs- oder Kalendersystem
- Zahlungsabwicklung
- E-Mail-Bestätigungen
- rechtlich geprüfte Inhalte
- reale Bilder und Kundenreferenzen
- lokale SEO-Daten
- Analytics und Conversion-Tracking
- Backend und Administrationsbereich
