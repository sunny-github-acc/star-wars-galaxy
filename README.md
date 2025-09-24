# Star Wars Galaxy: ISB HoloNet Terminal

> **Imperial Security Bureau Technical Assessment**
> _Simulate a slicer's experience accessing the HoloNet Terminal._

---

## Overview

This interactive application places you in the role of an Imperial officer, tasked with querying the Holocron Archives for film intel and scanning the personnel database for Rebel assets.

The UI/UX draws inspiration from the gritty, tactical, and retro-futuristic aesthetic of classic real-time strategy games like **Command & Conquer: Red Alert 2**.

---

## 🗒️ Mission Directives (Features)

- **Access Holocron Film Archives**
  _Display a complete list of all films, including titles and a truncated opening crawl (128 characters) as a data preview._

- **Decrypt Film Dossiers**
  _View a detailed data readout for a selected film, including its full opening crawl, production details, and a list of all known personnel linked to the event._

- **Scan Personnel Database**
  _Browse a paginated list of known persons of interest from across the galaxy._

- **Initiate Long-Range Scan**
  _Use the debounced search terminal to run a targeted query for specific personnel by name. The 1-second debounce simulates interstellar query latency._

- **Review Personnel Dossiers**
  _Access the detailed file for a specific character, presenting all known physical and biographical data, along with a list of their confirmed appearances in film records._

---

## 🛠️ Imperial Protocols (Tech Stack)

| Directive         | Implementation                                    |
|-------------------|---------------------------------------------------|
| **Framework**   | Next.js 15 (App Router)                             |
| **Language**    | TypeScript                                          |
| **UI Library**  | React                                               |
| **Styling**     | Tailwind CSS (utility-first, tactical design)       |
| **Data Fetching** | Direct, un-authenticated API calls to SWAPI       |
| **Testing**     | Jest                                                |
| **Accessibility** | Keyboard-navigable, WCAG 2.2 AA color contrast    |

---

## 🚀 System Access (Getting Started)

1. **Clone the Repository**
    ```sh
    git clone https://github.com/sunny-github-acc/star-wars-galaxy
    cd star-wars-galaxy
    ```

2. **Install Dependencies**
    ```sh
    npm install
    ```

3. **Run the Development Server**
    ```sh
    npm run dev
    ```

4. **Initialize the HoloNet Connection**
   Open [http://localhost:3000](http://localhost:3000) in your browser.
   The application will auto-update as you modify the source files.

---

> _All interfaces are designed for accessibility and tactical efficiency. May the Force serve the Empire!_