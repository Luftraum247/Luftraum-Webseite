import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceAccordion from "@/components/service-accordion"
import type { Metadata } from "next"

// Am Anfang der Komponente nach den Imports
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Dienstleistungen | Luftraum247 - Professionelle Drohneninspektionen",
  description:
    "Entdecken Sie unser umfassendes Angebot an Drohnen-Dienstleistungen: PV-Inspektionen, Thermografie, Industrie-Inspektionen und mehr. Maßgeschneiderte Lösungen für Ihre Anforderungen.",
  keywords:
    "Drohneninspektionen, PV-Inspektionen, Thermografie, Industrie-Inspektionen, Gebäude-Thermographie, Rauchmelderprüfung, Bauwerksprüfung",
}

export default function DienstleistungenPage() {
  // Innerhalb der Komponente, vor dem return-Statement
  const breadcrumbItems = [
    { name: "Home", url: "https://luftraum247.de/" },
    { name: "Dienstleistungen", url: "https://luftraum247.de/dienstleistungen" },
  ]

  // PV-Inspektionen Service packages data
  const pvInspectionPackages = [
    {
      id: "basis-paket",
      title: "Basis Paket",
      price: "Ab 199€ (Privat) / Ab 299€ (Gewerblich)",
      shortDescription: "Für Einfamilienhäuser und Kleingewerbe mit 0-20kWp",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI-M30-Profi-Drohne-im-Test-13.jpg-JhAu9YaJULprA1Ue3Ok4GtZCr6C8Ec.jpeg",
      content: `
        <p>Basis Paket z. B. für Einfamilienhäuser für unsere Privatkunden oder Kleingewerbe mit einer Anzahl von 0- 20kWp nach DIN VDE V 0126-23-3 (Thermografie) Preise abhängig von der Anzahl an kWp der PV-Anlage Preisrichtung: bis 20 Kwp 199€ Inkl. Nachbearbeitung der Wärmebildaufnahmen. mehrseitiges pdf-Übergabeprotokoll</p>
      `,
    },
    {
      id: "jaehrliche-inspektion",
      title: "Jährliche Inspektionspaket",
      price: "Ab 499€",
      shortDescription: "Medium Paket für Anlagen bis 50 KWp",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_20230612151608_0003_T.jpg-KbGYtxWGtdOjLgfGatjRFA4ypoGWKq.jpeg",
      content: `
        <p>Medium Paket (bis 50 KWp Anlagengröße): *thermografische Inspektion der kompletten Anlage *Automatisierte Fehlererkennung durch KI-gestützte Analyse *Detaillierter Zustandsbericht mit Hotspot-Markierung *Priorisierte Handlungsempfehlungen *Online-Zugang zum digitalen Anlagenportal *24/48h Reaktionszeit bei kritischen Befunden *Monatlicher Performance-Report *Dokumentation aller Inspektionen gemäß IEC-Norm Preis: 499€ Zusatzoptionen: *Zusätzliche MWp: +299€/MWp/Monat *Express-Inspektion (24h): +149€/Einsatz Detaillierte Einzelmodulanalyse: *+10€/Modul *Export der Rohdaten: +49€/Inspektion</p>
      `,
    },
    {
      id: "solarcheck-annual",
      title: "SolarCheck Annual",
      price: "Ab 1799€",
      shortDescription: "Premium Paket für größere Anlagen bis 1 MWp",
      // image: "/solar-farm-inspection.webp",
      image: "/solar-farm-inspection.webp",
      // image:
      //   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dji-matrice-m30t-hochspannungsnetz-p5rp0GUZ1lfcXKsofC0u9IEqs3dIS3.webp",
      content: `
        <p>Premium Paket: "SolarCheck Pro" Grundpaket (bis 1 MWp Anlagengröße): *2 umfassende thermografische Inspektionen pro Jahr *Frühjahrs- und Herbstinspektion für optimale Vergleichbarkeit *Ausführliche Anlagenanalyse mit Thermografie- und RGB-Aufnahmen *KI-gestützte Fehleranalyse und -klassifizierung *Detaillierter Jahresbericht mit: *Modulzustandsbewertung *Leistungsanalyse *Verschattungsanalyse *Verschmutzungsgrad *Degradationsbewertung *Digitaler Anlagenzwilling *Versicherungskonforme Dokumentation Preis: 1.499€/Jahr* Zusatzoptionen: *Zusätzliche MWp: +699€/MWp/Jahr Zusätzliche Inspektion: *+699€/Inspektion Detaillierte Einzelmodulanalyse: *+5€/Modul Präsentation der Ergebnisse vor Ort: *+299€ Beide Pakete beinhalten: *Vollständige Dokumentation nach DIN/IEC-Standards(DIN VDE V 0126-23-3) *Zertifizierte Piloten *Modernste Drohnentechnologie *Versicherungskonforme *Berichtserstellung *Exportfähige Daten für Asset-Management *Prioritäts-Support *Alle Preise zzgl. MwSt. und *Anfahrtskosten ab 30km Optionale Zusatzservices für beide Pakete: *Reinigungsservice auf Anfrage *Reparaturservice-Vermittlung *Individuelles Schulungspaket für Ihr Personal *Notfall-Hotline (24/7)</p>
      `,
    },
    {
      id: "solar-care-plus",
      title: "Solar Care Plus",
      price: "Preis nach Anfrage",
      shortDescription: "Ihr Rundum-Sorglos-Paket für PV-Anlagen",
      image: "/solar-thermal-inspection.webp",
      // image: "/drone-building-inspection.png",
      content: `
        <p>Solar Care Plus - Ihr Rundum-Sorglos-Paket für PV-Anlagen Professionelle PV-Anlagen-Wartung mit modernster Drohnentechnologie Warum ist die regelmäßige Prüfung Ihrer Photovoltaikanlage unverzichtbar? PV-Anlagen sind täglich Witterung und Umwelteinflüssen ausgesetzt und unterliegen natürlichen Alterungsprozessen. Unentdeckte Mängel können nicht nur die Leistung beeinträchtigen, sondern auch ein Sicherheitsrisiko darstellen. Unser Solar Care Plus Komplettpaket beinhaltet: *Drohnengestützte Thermografie-Inspektion *Hochauflösende Wärmebildaufnahmen mit DJI Matrice M30T *3D-Thermografie-Modell Ihrer Anlage *Detaillierte Zustandsanalyse und Dokumentation *Grundpreis ab €399 im Jahr bis 12 KWp. *Professionelle Wartung *Regelmäßige Sichtprüfung aller Module *Dokumentation des Anlagenzustands *Überprüfung der Montagesysteme Kabel- und Leitungskontrolle *Elektrotechnische Prüfung (durch zertifizierte Partnerbetriebe) *Prüfung nach aktuellen DIN-Normen *AC/DC-Messungen *Überprüfung aller Sicherheitskomponenten *Kontrolle der Überwachungssysteme *Anlagenreinigung nach Bedarf *Professionelle Modulreinigung nach Bedarf *Beseitigung von Verschmutzungen *Optimierung der Leistungsfähigkeit *Flexible Wartungsverträge: Beispiele Basis-Paket (bis 12 kWp): €299/Jahr für jährliche Inspektion €399/Jahr inklusive Reinigung Premium-Paket (bis 25 kWp): €449/Jahr 2x jährliche Drohneninspektion 1x Reinigung nach Pollensaison Ihre Vorteile mit Luftraum247: *Über 150 erfolgreich durchgeführte Projekte *Bundesweiter Service (kostenfreie Anfahrt bis 30 km) *Modernste Drohnenflotte (DJI Matrice M30T, Autel Evo Lite 640T) *Zertifizierte Prüfung nach allen relevanten Normen: DIN EN 62446-2 VDE 0126-23-1 VDS 2871 SK 3602 DGUV Vorschrift 3 TRBS 1201 Qualitätsgarantie: *Ausführliche Dokumentation für *Versicherungen *Zertifizierte Fachkräfte *Moderne Mess- und Prüftechnik *Schnelle Reaktionszeiten bei Störungen.</p>
      `,
    },
  ]

  // Gebäude-Thermografie Service packages data
  const buildingThermographyPackages = [
    {
      id: "thermocheck-basic",
      title: "ThermoCheck Building Basic",
      price: "Ab 499€",
      shortDescription: "Basis-Leistungsumfang für Gebäude bis 5000m²",
      image: "/thermal-drone-inspection.png",
      content: `
        <p>🏢 Basis-Leistungsumfang: Standard-Paket (bis 5000m² Gebäudefläche): *Komplette thermografische Außenaufnahme *Drohnengestützte Dachinspektion *Fassadenanalyse *Digitaler Inspektionsbericht Preis: 499€* ⚡ Ideale Bedingungen: *Temperaturdifferenz innen/außen mind. 15°C *Bewölkter Himmel *Windgeschwindigkeit < 5 m/s *Keine Niederschläge *Frühe Morgenstunden 📊 Anwendungsbereiche: *Energieeffizienz-Analyse *Bauabnahme *Sanierungsplanung *Schadensprävention *Immobilienbewertung *EnEV-Nachweise 💰 ROI-Potenzial: *Energieeinsparung: 5-15% *Schadensprävention *Wertsteigerung der Immobilie *Förderungsfähigkeit 🎯 Zielgruppen: *Immobilienbesitzer *Hausverwaltungen *Energieberater *Architekten *Bausachverständige *Facility Manager 📱 Service-Features: *Online und Telefonische Terminbuchung *Digitaler Zugang zu Berichten *Flexible Terminplanung *Nachbesprechung der Ergebnisse</p>
      `,
    },
    {
      id: "thermocheck-premium",
      title: "ThermoCheck Building Premium",
      price: "Ab 699€",
      shortDescription: "Premium-Paket für Gebäude bis 10000m²",
      // image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vEFnuLdqsQ4iIwQ7v0N36JAKH8nUKb.webp",
      image: "/thermal-drone-inspection.png",
      content: `
        <p>Premium-Paket (bis 10000m² Gebäudefläche): *Alle Leistungen des Standard-Pakets *Zusätzliche Detailaufnahmen *Vergleichsanalyse (warm/kalt) *Erweiterte Auswertung *Energieberater-konformer Bericht Preis: 799€* ⚡ Ideale Bedingungen: *Temperaturdifferenz innen/außen mind. 15°C *Bewölkter Himmel *Windgeschwindigkeit < 5 m/s *Keine Niederschläge *Frühe Morgenstunden 📊 Anwendungsbereiche: *Energieeffizienz-Analyse, *Bauabnahme, *Sanierungsplanung, *Schadensprävention, *Immobilienbewertung, *EnEV-Nachweise 💰 ROI-Potenzial: *Energieeinsparung: 5-15%, *Schadensprävention, *Wertsteigerung der Immobilie, *Förderungsfähigkeit, 🎯 Zielgruppen: *Immobilienbesitzer *Hausverwaltungen, *Energieberater, *Architekten, *Bausachverständige, *Facility Manager, 📱 Service-Features: *Online und Telefonische Terminbuchung, *Digitaler Zugang zu Berichten, *Flexible Terminplanung, *Nachbesprechung der Ergebnisse.</p>
      `,
    },
    {
      id: "thermocheck-enterprise",
      title: "ThermoCheck Building Enterprise",
      price: "Ab 999€",
      shortDescription: "Enterprise-Paket für Gebäude über 10000m²",
      image: "/aerial-industrial-view.webp",
      content: `
        <p>Enterprise-Paket (über 10000m²): *Individuell nach Gebäudegröße *Komplexität und Anforderungen Preis: Auf Anfrage *Alle Preise Inkl. MwSt. und Anfahrt ab 30km (0,95€/km) 📊 Inspektionsumfang: Wärmeverluste an: *Dach & Dachflächen *Fassaden & Wände *Fenster & Türen *Rollladenkästen *Balkone & Terrassen Identifikation von: *Wärmebrücken *Isolierungsmängeln *Feuchteschäden *Leckagen *Konstruktionsschwächen 🔍 Analyse & Dokumentation: *Hochauflösende Thermografie (640x512 Pixel) *Visuelle Referenzaufnahmen *Temperaturmessungen *Taupunktberechnung *Detaillierte Schadenskartierung *Digitaler Gebäude-Zwilling 📋 Berichtsumfang: *Ausführliche Dokumentation *Thermografie- & Referenzbilder *Temperaturanalysen *Schwachstellenidentifikation *Handlungsempfehlungen *Sanierungsvorschläge *Energieeinsparpotenziale</p>
      `,
    },
  ]

  // Industrie-Inspektionen Service packages data
  const industrieInspektionenPackages = [
    {
      id: "industrycheck-medium",
      title: "IndustryCheck Medium",
      price: "Ab 599€",
      shortDescription: "Monatliche Inspektion für Industrieanlagen bis 15.000m²",
      image: "/wind-turbine-inspection.jpeg",
      content: `
        <p>Grundpaket (bis 15.000 m² Industrieanlage): *Monatliche visuelle & thermografische Inspektion Schwerpunkte: *Dachinspektion *Fassadeninspektion *Schornstein-/Abluftsysteme *Rohrleitungen *Industrieanlagen *KI-gestützte Anomalie-Erkennung Digitaler Inspektionsbericht inkl.: *Schadenskartierung *Thermografische Analyse *Prioritätsbasierte Handlungsempfehlungen *Online-Zugang zum Industrieportal *24/48h Reaktionszeit bei kritischen Befunden Preis: 599€/Monat* Zusatzoptionen: *Zusätzliche 1.000 m²: +99€/Monat *Express-Inspektion (24h): +249€ *3D-Digitaler Zwilling: +399€/Erstellung *Detaillierte Einzelanalysen: nach Aufwand</p>
      `,
    },
    {
      id: "industrycheck-annual",
      title: "IndustryCheck Annual",
      price: "1999€",
      shortDescription: "Jährliches Inspektionspaket für Anlagen bis 50.000m²",
      // image: "/solar-thermal-inspection.webp",
      image: "/drone-building-inspection.png",
      content: `
        <p>Grundpaket (bis 50.000 m² Industrieanlage im Außenbereich): *2 umfassende Inspektionen pro Jahr (Halbjährig) Kombination aus: *Visueller Inspektion (RGB) *Thermografischer Analyse Ausführlicher Halbjährig Bericht mit: *Zustandsbewertung aller Anlagenteile *Verschleißanalyse *Wartungsempfehlungen *Vergleichsanalyse zu Vorquartalen *Jährlicher Gesamtbericht *3D Digitaler Anlagenzwilling (optional) *ISO-konforme Dokumentation Preis: 1.999€/Jahr* Zusatzoptionen: *Zusätzliche 1.000 m²: +199€/Jahr *Zusätzliche Inspektion: +649€ *Präsentation vor Ort: +299€ *Notfallinspektion: +599€ Beide Pakete beinhalten: *Zertifizierte Industrieinspektoren *Modernste Drohnentechnologie (DJI M30T/Autel EVO Lite 640T Enterprise) *Versicherungskonforme Berichtserstellung *Exportfähige Daten für CMMS-Integration *Prioritäts-Support *Alle Preise zzgl. MwSt. und Anfahrtskosten ab 30km (0,95€/km)</p>
      `,
    },
    {
      id: "industrycheck-premium",
      title: "IndustryCheck Premium",
      price: "Auf Anfrage",
      shortDescription: "Individuelles Inspektionspaket für komplexe Industrieanlagen",
      image: "/aerial-industrial-view.webp",
      content: `
        <p>🏭 Basis-Leistungsumfang: *Maßgeschneiderte Inspektionsintervalle nach Ihren Anforderungen Kombinierte Inspektionstechnologien: *Hochauflösende visuelle Inspektion (4K) *Thermografische Analyse 📊 Dokumentation & Analyse: *Individuell angepasste Berichtsformate *Integration in Ihr CMMS/ERP-System *KI-gestützte Anomalie-Erkennung *Digitaler Anlagenzwilling *Trendanalysen & Predictive Maintenance 🛠️ Zusätzliche Services: *24/7 Notfallbereitschaft *Express-Inspektionen *Technische Beratung 📈 Enterprise Features: *Dedizierter Projektmanager *Priorisierter Support *Flexible Abrechnungsmodelle *Standortübergreifende Koordination ⚡ Spezielle Anwendungen: *Hochspannungsanlagen *Kühltürme *Industrieschornsteine *Tanks & Silos *Prozessanlagen *Pipelines 🔒 Compliance & Sicherheit: *ISO 9001 konforme Dokumentation *DGUV-konforme Durchführung *Gefahrstoffbereiche (Ex-Schutz) *Datensicherheit nach DSGVO *Versicherungskonforme Berichte 💰 Preisgestaltung: Individuelle Kalkulation basierend auf: *Anlagengröße & Komplexität *Inspektionsintervallen *Technologieanforderungen *Standortbedingungen *Berichtsanforderungen *Reaktionszeiten *Vertragslaufzeit 📞 Kontaktprozess: *Erstgespräch & Bedarfsanalyse *Vor-Ort-Besichtigung *Individuelles Angebot *Maßgeschneidertes Inspektionskonzept Preis: Aufgrund der unterschiedlichen Anwendungsgebiete und Größen bitten wir hier um eine konkrete Anfrage!</p>
      `,
    },
  ]

  // Spezielle Anlagen-Inspektionen Service packages data
  const spezielleAnlagenInspektionenPackages = [
    {
      id: "powergrid-check",
      title: "PowerGrid Check",
      price: "Ab 99€ pro Mast",
      shortDescription: "Hochspannungsmasten-Inspektionspaket",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dji-matrice-m30t-hochspannungsnetz-p5rp0GUZ1lfcXKsofC0u9IEqs3dIS3.webp",
      content: `
        <p>⚡ Basis-Leistungsumfang: *Umfassende Masteninspektion *Bis zu 10 Masten pro Tag Inspektionstechnologien: *Hochauflösende 4K/8K Aufnahmen *Thermografische Analyse *Isolatoren-Prüfung *Korrosionsanalyse *Vegetation-Check im Trassenbereich 📊 Dokumentation & Analyse: *Detaillierte Zustandserfassung nach VDE-Standard *Klassifizierung nach Schadensarten: *Isolatorenschäden *Korrosionsschäden *Verbindungselemente *Erdungssysteme *Fundamentzustand *Digitaler Masten-Zwilling *GIS-basierte Dokumentation *Priorisierte Handlungsempfehlungen ⚡ Preisstruktur: *Grundpaket (bis 10 Masten): 99€ pro Mast* *Jeder weitere Mast in der gleichen Trasse: +79€ *Alle Preise zzgl. MwSt. und Anfahrt ab 30km (0,95€/km) 🛠️ Zusatzleistungen: *Express-Inspektion: +30% *Detaillierte Einzelanalysen: nach Aufwand *Vor-Ort-Präsentation: +299€ *Notfallinspektion: +50% 📋 Qualitätssicherung: *Zertifizierte Drohnenpiloten *Modernste Drohnentechnologie *Standardisierte Inspektionsprotokolle</p>
      `,
    },
    {
      id: "windcheck-premium",
      title: "WindCheck Premium",
      price: "Ab 599€ pro WEA",
      shortDescription: "Rotorblatt-Inspektionspaket für Windenergieanlagen",
      image: "/wind-turbine-inspection.jpeg",
      content: `
        <p>🌬️ Basis-Leistungsumfang: *Detaillierte Inspektion aller Rotorblätter *Bis zu 4 WEA pro Tag (wetterabhängig) Kombinierte Inspektionstechnologien: *Hochauflösende 4K Aufnahmen *Thermografische Analyse *Automatisierte Schadenserfassung *KI-gestützte Anomalie-Erkennung 📊 Dokumentation & Analyse: *Detaillierte Schadensdokumentation nach GWO-Standard *Klassifizierung nach Schadensarten: *Leading Edge Erosion *Blitzschäden *Strukturelle Schäden *Oberflächenbeschädigungen *Delaminierung *Digitaler Rotorblatt-Zwilling *Schadensentwicklungsvergleich *Priorisierte Handlungsempfehlungen ⚡ Preisstruktur: *Grundpaket (bis 4 WEA am Tag): 599€ pro WEA* *Jede weitere WEA am gleichen Standort: +449€ *Alle Preise zzgl. MwSt. und Anfahrt ab 30km (0,95€/km)</p>
      `,
    },
    {
      id: "infracheck-complete",
      title: "InfraCheck Complete",
      price: "Ab 799€",
      shortDescription: "Umfassendes Infrastruktur-Inspektionspaket",
      image: "/aerial-industrial-view.webp",
      content: `
        <p>🏗️ Basis-Leistungsumfang: Umfassende Inspektion von Infrastrukturbauwerken: *Brücken & Viadukte *Tunnel & Unterführungen *Stützmauern & Lärmschutzwände *Bahninfrastruktur *Parkhäuser & Tiefgaragen *Kaimauern & Hafenstrukturen *Straßen & Autobahnen 📊 Inspektionsmethoden: *Hochauflösende visuelle Inspektion 4K *Thermografische Analyse *Rissanalyse & -vermessung *Oberflächenanalyse *Strukturelle Zustandserfassung *Vegetation & Umgebungsanalyse 🔍 Dokumentation & Analyse: *DIN 1076-konforme Dokumentation *Detaillierte Schadensdokumentation: *Rissbildung *Betonschäden *Korrosionsschäden *Strukturelle Auffälligkeiten *Entwässerungssysteme *Lagerungszustand *Optionale Digitaler Infrastruktur-Zwilling *GIS-basierte Kartierung *Priorisierte Handlungsempfehlungen 💰 Preisstruktur: Basis-Inspektion: *Bis 1.000 m² Inspektionsfläche: 799€* *Jede weitere 500 m²: +249€ Spezialuntersuchungen: *Thermografie-Analyse: +399€ *Detaillierte Rissanalyse: +299€ *Express-Auswertung: +30% *Alle Preise zzgl. MwSt. und Anfahrt ab 30km (0,95€/km) 🛠️ Zusatzleistungen: *Notfallinspektion (24h): +30% *Vor-Ort-Präsentation: 299€ *Spezialanalysen: nach Aufwand</p>
      `,
    },
  ]

  // Rauchmelderprüfung Service package data
  const smokeDetectorPackages = [
    {
      id: "rauchmelder-industrie",
      title: "Innovative Rauchmelderprüfung nach DIN 14676",
      price: "Ab 299€",
      shortDescription: "Speziell entwickelt für Großbetriebe",
      image: "/indoor-smoke-detector.webp",
      content: `
        <p>Luftraum247 präsentiert eine revolutionäre Hybrid-Lösung für die normgerechte Prüfung von Rauchwarnmeldern. Unsere Kombination aus Drohnentechnologie und manueller Expertise setzt neue Maßstäbe in Effizienz und Sicherheit. 🔍 Unser Hybrid-Inspektionsmodell: Phase 1: Drohnengestützte Ersterfassung • Schnelle Bestandsaufnahme • Digitales Melderkataster • Effiziente Sichtprüfung Phase 2: Gezielte manuelle Prüfung • Funktionsprüfung nach DIN 14676 • Dokumentierte Einzelprüfung • Sofortige Mängelbehebung 🛠️ Technische Ausstattung: • DJI Avata 2 für Innenraumflüge • Spezialisierte Inspektionskameras • Digitales Dokumentationssystem 📋 Leistungsumfang: • DIN 14676-konforme Prüfung • Digitale Dokumentation • Prüfbericht pro Melder • Wartungsempfehlungen • Melderkataster-Erstellung 💶 Preisstruktur: • Grundgebühr ab 299€ • Staffelpreise nach Melderanzahl • Kostenlos bis 30 km • 31-100 km: 75€ Pauschale • Ab 101 km: 0,80€/km 🎯 Ideal für: • Industrieanlagen • Wohnungsbaugesellschaften • Facility Management • Öffentliche Einrichtungen</p>
      `,
    },
  ]

  // Bauwerksprüfung Service package data
  const buildingInspectionPackages = [
    {
      id: "bauwerkspruefung-vdi6200",
      title: "Professionelle Bauwerksprüfung nach VDI 6200",
      price: "Ab 449€",
      shortDescription: "Revolution in der Bauwerksprüfung durch Drohnentechnologie",
      image: "/drone-building-inspection.png",
      content: `
        <p>Luftraum247 revolutioniert die Bauwerksprüfung durch den Einsatz modernster Drohnentechnologie. Unsere VDI 6200-konformen Inspektionen gewährleisten höchste Präzision bei maximaler Kosteneffizienz. 🏗️ Unsere VDI 6200 Leistungen: • Systematische Überprüfung der Standsicherheit • Bewertung der Verkehrssicherheit • Analyse der Dauerhaftigkeit baulicher Anlagen • Detaillierte 3D-Modellierung kritischer Bereiche 💡 Technische Ausstattung: • DJI Mavic 3 Enterprise für präzise Nahaufnahmen • DJI Avata 2 für enge Innenräume • Hochauflösende Bilderfassung • 3D-Mapping Technologie ✅ Ihre Vorteile: • Bis zu 99% Kosteneinsparung • Keine Produktionsunterbrechung • Sofortige Ergebnisse • VDI 6200-konforme Dokumentation • Digitales Bauwerkskataster 📊 Inspektionsumfang: • Tragende Konstruktionen • Decken und Unterzüge • Fassadenelemente • Verbindungselemente • Kritische Bauwerkspunkte 💶 Preisstruktur: • Grundinspektion ab 449€</p>
      `,
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Innerhalb des return-Statements, am Anfang */}
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dji-matrice-m30t-hochspannungsnetz-p5rp0GUZ1lfcXKsofC0u9IEqs3dIS3.webp"
            alt="Professionelle Drohneninspektion mit DJI Matrice M30T - Übersicht unserer Dienstleistungen"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Unsere Dienstleistungen</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Entdecken Sie unser umfassendes Angebot an Drohnen-Dienstleistungen für verschiedene Branchen und
              Anwendungsbereiche
            </p>
          </div>
        </div>
      </section>

      {/* PV-Inspektionen Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Drohnengestützte PV-Inspektionen</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Frühzeitige Schadenserkennung, Vermeidung von Produktionsausfällen, Optimierung der Wartungsplanung und
            Kostenreduktion durch präventive Wartung.
          </p>

          <div className="grid gap-8">
            {pvInspectionPackages.map((service) => (
              <ServiceAccordion
                key={service.id}
                id={service.id}
                title={service.title}
                price={service.price}
                shortDescription={service.shortDescription}
                content={service.content}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Spezielle Anlagen-Inspektionen Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Spezielle Anlagen-Inspektionen</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Maßgeschneiderte Inspektionslösungen für Hochspannungsmasten, Windkraftanlagen und kritische Infrastruktur
            mit modernster Drohnentechnologie.
          </p>

          <div className="grid gap-8">
            {spezielleAnlagenInspektionenPackages.map((service) => (
              <ServiceAccordion
                key={service.id}
                id={service.id}
                title={service.title}
                price={service.price}
                shortDescription={service.shortDescription}
                content={service.content}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industrie-Inspektionen Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Drohnengestützte Industrie-Inspektionen</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Frühzeitige Schadenserkennung, Vermeidung von Produktionsausfällen, Optimierung der Wartungsplanung,
            Erfüllung von Sicherheitsvorschriften, dokumentierte Anlagenhistorie und Kostenreduktion durch präventive
            Wartung.
          </p>

          <div className="grid gap-8">
            {industrieInspektionenPackages.map((service) => (
              <ServiceAccordion
                key={service.id}
                id={service.id}
                title={service.title}
                price={service.price}
                shortDescription={service.shortDescription}
                content={service.content}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gebäude-Thermografie Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Drohnengestützte Gebäude-Thermographie</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Energie-Kosteneinsparung, Aufdeckung von Wärmeverlusten, bis zu 15% Heizkosten-Reduzierung, Optimierung der
            Energiebilanz, Schadenserkennung & Prävention, frühzeitige Erkennung von Feuchtigkeitsschäden.
          </p>

          <div className="grid gap-8">
            {buildingThermographyPackages.map((service) => (
              <ServiceAccordion
                key={service.id}
                id={service.id}
                title={service.title}
                price={service.price}
                shortDescription={service.shortDescription}
                content={service.content}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bauwerksprüfung Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Bauwerksprüfung nach VDI 6200</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Systematische Überprüfung der Standsicherheit, Bewertung der Verkehrssicherheit und Analyse der
            Dauerhaftigkeit baulicher Anlagen mit modernster Drohnentechnologie.
          </p>

          <div className="grid gap-8">
            {buildingInspectionPackages.map((service) => (
              <ServiceAccordion
                key={service.id}
                id={service.id}
                title={service.title}
                price={service.price}
                shortDescription={service.shortDescription}
                content={service.content}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rauchmelderprüfung Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Rauchmelderprüfung mit Drohnentechnologie</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Revolutionäre Lösung für die Wartung und Prüfung von Rauchwarnmeldern in Industriekomplexen mit minimaler
            Störung des Produktionsablaufs.
          </p>

          <div className="grid gap-8">
            {smokeDetectorPackages.map((service) => (
              <ServiceAccordion
                key={service.id}
                id={service.id}
                title={service.title}
                price={service.price}
                shortDescription={service.shortDescription}
                content={service.content}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Weitere Dienstleistungen im Überblick</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Neben unseren Hauptdienstleistungen bieten wir auch folgende spezialisierte Services an:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dji-matrice-m30t-hochspannungsnetz-p5rp0GUZ1lfcXKsofC0u9IEqs3dIS3.webp"
                  alt="3D-Vermessung und Kartierung"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-md text-sm font-medium">
                  Präzision
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">3D-Vermessung und Kartierung</h3>
                <p className="text-gray-300">
                  Präzise Geländemodelle, Volumenberechnungen und detaillierte Karten für Bauprojekte,
                  Landschaftsplanung und Dokumentation mit zentimetergenauer Genauigkeit.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/thermal-drone-inspection.png"
                  alt="Thermografie"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-md text-sm font-medium">
                  Wärmeanalyse
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Thermografie</h3>
                <p className="text-gray-300">
                  Hochauflösende Wärmebildaufnahmen zur Erkennung von Wärmeverlusten, Defekten und Anomalien in
                  Gebäuden, Solaranlagen und industriellen Anlagen mit detaillierter Analyse.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/indoor-drone-flight.png"
                  alt="Indoor-Flüge"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-md text-sm font-medium">
                  Innenräume
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Indoor-Flüge</h3>
                <p className="text-gray-300">
                  Spezialisierte Drohnenflüge in Innenräumen für Inspektionen, Dokumentation und Bestandsaufnahmen in
                  Industriehallen, Lagern und schwer zugänglichen Bereichen.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/dji-inspire-2.png"
                  alt="Luftbildfotografie"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-md text-sm font-medium">
                  Hochauflösend
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Luftbildfotografie</h3>
                <p className="text-gray-300">
                  Hochwertige Luftaufnahmen für Marketing, Immobilienpräsentationen, Veranstaltungen und Dokumentation
                  mit professioneller Bildbearbeitung und Nachbearbeitung.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/drone-building-inspection.png"
                  alt="Bau- und Immobilieninspektionen"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-md text-sm font-medium">
                  Detailgenau
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Bau- und Immobilieninspektionen</h3>
                <p className="text-gray-300">
                  Detaillierte Inspektionen von Gebäuden, Dächern und Fassaden ohne Gerüste für Immobilienbewertungen,
                  Baufortschrittsdokumentation und Schadensbegutachtung.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Notfall-%20und%20Katastrophenmanagement%20%281%29-bfprVNp2wldUkRgdFxZIZjt4gtP08G.png"
                  alt="Notfall- und Katastrophenmanagement"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-md text-sm font-medium">
                  Schnelle Hilfe
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Notfall- und Katastrophenmanagement</h3>
                <p className="text-gray-300">
                  Unterstützung bei Einsätzen für Feuerwehr, THW und andere Rettungsdienste mit Echtzeitbildern,
                  Wärmebildaufnahmen und schneller Lageerfassung aus der Luft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit für Ihre Drohneninspektion?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Kontaktieren Sie uns noch heute für ein unverbindliches Angebot oder eine Beratung zu Ihrem Projekt
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg" asChild>
            <Link href="/kontakt#kontaktformular">Kontakt aufnehmen</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
