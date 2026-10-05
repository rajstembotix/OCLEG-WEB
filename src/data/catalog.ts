export type SpecTable = {
  columns: string[];
  rows: (string | number)[][];
};

export type Product = {
  id: string;
  code: string;
  name: string;
  images: string[];
  imageLabels?: string[];
  specifications: string[];
  application: string;
  table?: SpecTable;
};

export type Category = {
  slug: string;
  number: string;
  title: string;
  brochurePages: string;
  products: Product[];
};

export const company = {
  name: "OCLEG ELECTRONICS",
  hindi: "ऑकलेग",
  legal: "OCLEG CONTROLS",
  taglineLead: "Empowering Technologies",
  taglineRest: "Through Innovations",
  phone: "+91-9016478908",
  whatsapp: "+91-9016478908",
  whatsappNumber: "919016478908",
  whatsappUrl:
    "https://wa.me/919016478908?text=Hello%20OCLEG%20Controls%2C%20I%20have%20an%20enquiry%20regarding%20your%20products.",
  address:
    "93-94, Amar Estate, Near Lubi Elec. Ltd., Memco, Naroda road, Ahmedabad - 382345 Gujarat (INDIA).",
  emails: [
    "oclegcontrols@yahoo.co.in",
    "rajpatel@oclegelectronics.com",
    "kiranpatel@oclegelectronics.com",
  ],
  site: "www.oclegelectronics.com",
};

export const companyProfile = {
  intro:
    'OCLEG CONTROLS, Based In Ahmedabad Has Been A Pioneer And Leader In The Manufacturing Of Electronic Control And Switchgear Products. "OCLEG" Continues To Innovate And Improve Its Products With The Latest Technology. Quality, Prompt Delivery And Reliability Are The Most Important Aspects Of Our Company.',
  mission:
    '"OCLEG" Mission Is To Make Significant Contribution To The Life Quality Enhancement By Producing Innovative Electronic Equipments That Work With Improved Performance While Ensuring A High Degree Of Reliability. Our Motto Is To Satisfy Our Valued Customers With Good Quality Of Products And Prompt timely Delivery Schedule.',
  team: "We Are A Team Of Engineers And Technocrats Having Experience Of More Than 35 Years And Serving A Wide Spectrum Of Customers And Various Industries.",
  commitments: [
    "Uncompromising Quality",
    "Competitive Prices",
    "Prompt Delivery Schedules",
    "Excellent Service",
  ],
  quality:
    'The Quality Products Of "OCLEG" are The Result Of Most Efficient State-of-the Art Production, Machinery And Most Modern Testing Laboratory To Ensure Complete Quality Assurance Of The Products With Strong Presence In National & International Markets.',
  infrastructure:
    "Our Company Is Backed With A Robust Infrastructure Setup Consisting With Modern Machineries And All In-house Production Facility As Well As A Capable R&D, Logistics And Customer Care Department.",
};

export const clients = [
  "Duke",
  "Lubi",
  "KSB",
  "SHAKTI",
  "C.R.I. PUMPS",
  "Kirloskar",
  "Unnati",
  "Pluga",
  "WATERMAN PUMPSETS",
  "LATTEYS",
  "Calama",
  "ALGO",
  "torrent POWER",
  "ADITYA BIRLA GROUP",
  "Ambuja Cement",
  "BHEL",
  "RELIANCE",
  "TATA",
  "GETCO",
  "TOYOTA",
  "JINDAL STEEL & POWER",
  "NIRMA",
  "BAPS",
  "IndianOil",
  "Indian Railways",
  "Ahmedabad Municipal Corporation",
  "Apollo Hospitals",
  "Zydus",
  "State Bank of India",
  "Bank of Baroda",
];

const pumpApp =
  "Submersible/Monoblock Pumpset For Drawing Water In Residence, Commercial, Farming, Gardening.";
const threePhaseApp =
  "Induction Motor, Three Phase Dol Monoblock/ Openwell Pump Set For Drawing Water in Residence, Commercial, Farming, Gardening Purpose.";
const openwellApp = "Oil Filled Pump & Openwell Submersible Pump";
const llcApp =
  "MCC Panels of Water Pump In Hotels, House, High Rise Towers, Housing Societies, Industries Commercial Complex, Municipal Water Stations.";
const elcbApp =
  "Residential Purpose Like House, Hotel, Commercial Complex, High Rise Tower.";
const domesticStarterApp =
  "Domestic Pump, Induction Motor, Air-Conditioner, Television, Refrigerator, Domestic Flour Mill, Geyser and Cattle / Poultry Farm.";
const timerApp =
  "MCC Panels For Water Pump, Compressor, Generator, Air-Conditioner.";

export const categories: Category[] = [
  {
    slug: "single-phase-sub-control-panel",
    number: "1",
    title: "SINGLE PHASE SUB. CONTROL PANEL",
    brochurePages: "1 to 5",
    products: [
      {
        id: "mcb-smart",
        code: "1.1",
        name: "MCB SMART (MCB TYPE)",
        images: [
          "/images/products/mcb-smart-digital.jpg",
          "/images/products/mcb-smart-analog.jpg",
        ],
        specifications: [
          "Digital / Analog Volt-Amp Meter",
          "Only MCB Type Control Panel (No Contactor)",
          "Thermal Over Load Protection by MCB",
          "Start+Run Capacitor, Start / Stop Push Button",
          "Metal Box With Powder Coating",
        ],
        application: pumpApp,
        table: {
          columns: ["SR NO.", "H.P.", "START CAPACITOR", "RUN CAPACITOR", "MCB"],
          rows: [
            [1, "1.0", "100/120 MFD", "36 MFD", "10 A"],
            [2, "1.5", "150/200 MFD", "72 MFD", "16 A"],
            [3, "2.0", "200/250 MFD", "72 MFD", "20 A"],
          ],
        },
      },
      {
        id: "eco-smart",
        code: "1.2",
        name: "ECO - SMART (MCB WITH CONTACTOR TYPE)",
        images: ["/images/products/eco-smart.jpg"],
        specifications: [
          "Digital Volt-Amp. Meter",
          "With Power Contactor & MCB Type",
          "Overload Protection by MCB",
          "Start+Run Capacitor, Start / Stop Push Button",
          "Metal Box With Powder Coating",
        ],
        application: pumpApp,
        table: {
          columns: ["SR NO.", "H.P.", "START CAPACITOR", "RUN CAPACITOR", "MCB"],
          rows: [
            [1, "1.0", "100/120 MFD", "36 MFD", "10 A"],
            [2, "1.5", "150/200 MFD", "72 MFD", "16 A"],
          ],
        },
      },
      {
        id: "i-smart",
        code: "1.3",
        name: "i SMART (RELAY WITH CONTACTOR TYPE)",
        images: [
          "/images/products/i-smart-digital.jpg",
          "/images/products/i-smart-analog.jpg",
        ],
        specifications: [
          "Digital / Analog Volt-Amp. Meter",
          "With Power Contactor And Thermal Relay",
          "Thermal Over Load Protection",
          "Start+Run Capacitor, Start / Stop Push Button",
          "Metal Box With Powder Coating",
          "With Power Contactor + Thermal Relay",
        ],
        application: pumpApp,
        table: {
          columns: [
            "SR NO.",
            "H.P.",
            "START CAPACITOR",
            "RUN CAPACITOR",
            "RELAY RANGE",
          ],
          rows: [
            [1, "1.0", "100/120 MFD", "36 MFD", "6-10 A"],
            [2, "1.5", "150/200 MFD", "72 MFD", "9-14 A"],
            [3, "2.0", "200/250 MFD", "72 MFD", "13-21 A"],
            [4, "3.0", "200/250 MFD", "50+50 MFD", "20-32 A"],
          ],
        },
      },
      {
        id: "i-smart-mcb",
        code: "1.4",
        name: "i-SMART (MCB WITH CONTACTOR TYPE)",
        images: [
          "/images/products/i-smart-mcb-digital.jpg",
          "/images/products/i-smart-mcb-analog.jpg",
        ],
        specifications: [
          "Digital / Analog Volt-Amp. Meter",
          "With Power Contactor & MCB Type",
          "Overload Protection by MCB",
          "Start+Run Capacitor, Start / Stop Push Button",
          "Metal Box With Powder Coating",
        ],
        application: pumpApp,
        table: {
          columns: ["SR NO.", "H.P.", "START CAPACITOR", "RUN CAPACITOR", "MCB"],
          rows: [
            [1, "1.0", "100/120 MFD", "36 MFD", "10 A"],
            [2, "1.5", "150/200 MFD", "72 MFD", "16 A"],
            [3, "2.0", "200/250 MFD", "72 MFD", "20 A"],
            [4, "3.0", "200/250 MFD", "50+50 MFD", "25 A"],
          ],
        },
      },
      {
        id: "i-pro",
        code: "1.5",
        name: "i-PRO (DRY RUN TYPE)",
        images: ["/images/products/i-pro.jpg"],
        specifications: [
          "Digital Volt-Amp. Meter",
          "Electronic Over Load & Dry Run Protection",
          "High Voltage Protection",
          'Automatically Set Overload & Dry-Run Setting By Pressing “SET” Key',
          'With Automatic “OFF-TIMER” Facility for 1-999 minute (optional)',
          "Start+Run Capacitor & Start/Stop Push Button",
        ],
        application: pumpApp,
        table: {
          columns: [
            "SR NO.",
            "H.P.",
            "START CAPACITOR",
            "RUN CAPACITOR",
            "RELAY RANGE",
          ],
          rows: [
            [1, "1.0", "100/120 MFD", "36 MFD", "2-25 A"],
            [2, "1.5", "150/200 MFD", "72 MFD", "2-25 A"],
            [3, "2.0", "200/250 MFD", "72 MFD", "2-25 A"],
            [4, "3.0", "200/250 MFD", "50+50 MFD", "2-30 A"],
          ],
        },
      },
      {
        id: "maxi-pro",
        code: "1.6",
        name: "DIGI MAX PRO (DRY RUN WITH OFF TIMER FACILITY)",
        images: ["/images/products/digi-max-pro.jpg"],
        specifications: [
          "Digital Volt-Amp. Meter",
          "Electronic Over Load & Dry Run Protection",
          "Low/High Voltage Protection",
          'Automatically Set Overload & Dry-Run Setting By Pressing “SET” Key',
          'With Automatic “OFF-TIMER” Facility for 1-999 minute',
          "Start+Run Capacitor & Start/Stop Push Button",
        ],
        application: pumpApp,
        table: {
          columns: [
            "SR NO.",
            "H.P.",
            "START CAPACITOR",
            "RUN CAPACITOR",
            "RELAY RANGE",
          ],
          rows: [
            [1, "1.0", "100/120 MFD", "36 MFD", "4-25 A"],
            [2, "1.5", "150/200 MFD", "72 MFD", "4-25 A"],
            [3, "2.0", "200/250 MFD", "72 MFD", "4-25 A"],
            [4, "3.0", "200/250 MFD", "50+50 MFD", "4-25 A"],
          ],
        },
      },
      {
        id: "ew-alpha",
        code: "1.7",
        name: "EW-ALPHA (WITH AUTO START FACILITY)",
        images: ["/images/products/ew-alpha.jpg"],
        specifications: [
          "Fully Automatic Electronic Control Panel",
          "Automatic Cutting of Start Capacitor after 2 Second",
          "Digital Volt - Amp. Meter",
          "Electronic Over Load & Dry-run Protection",
          "Low/ High Voltage Protection",
          "With Extra Facility of inbuilt Auto-switch",
          "Auto Start Your Pump After Resumption Of Power Supply (30 Sec. Time Delay)",
          'With Automatic "CYCLIC-TIMER" Facility (Optional)',
          'With Automatic "OFF-TIMER" Facility (Optional)',
        ],
        application: pumpApp,
        table: {
          columns: [
            "SR NO.",
            "H.P.",
            "START CAPACITOR",
            "RUN CAPACITOR",
            "RELAY RANGE",
          ],
          rows: [
            [1, "1.0", "100/120 MFD", "36 MFD", "2-25 A"],
            [2, "1.5", "150/200 MFD", "72 MFD", "2-25 A"],
            [3, "2.0", "200/250 MFD", "72 MFD", "2-25 A"],
            [4, "3.0", "200/250 MFD", "50+50 MFD", "2-30 A"],
          ],
        },
      },
      {
        id: "ew-alpha-llc",
        code: "1.8",
        name: "EW - ALPHA - LLC (WITH AUTOMATIC WATER LEVEL CONTROLLER FACILITY)",
        images: [
          "/images/products/ew-alpha.jpg",
          "/images/products/ew-alpha-llc-sensors.jpg",
        ],
        specifications: [
          "Fully Automatic Electronic Control Panel",
          "Automatic Cutting of Start Capacitor after 2 Sec.",
          "Digital Volt - Amp. Meter",
          "Electronic Over Load & Dry-Run Protection",
          "Low/High Voltage Protection",
          'Inbuilt two tank "Water Level Controller" Facility',
        ],
        application: pumpApp,
        table: {
          columns: [
            "SR NO.",
            "H.P.",
            "START CAPACITOR",
            "RUN CAPACITOR",
            "RELAY RANGE",
          ],
          rows: [
            [1, "1.0", "100/120 MFD", "36 MFD", "2-25A"],
            [2, "1.5", "150/200 MFD", "72 MFD", "2-25A"],
            [3, "2.0", "200/250 MFD", "72 MFD", "2-25A"],
            [4, "3.0", "200/250 MFD", "50+50 MFD", "2-30A"],
          ],
        },
      },
    ],
  },
  {
    slug: "single-phase-openwell-pump-starter",
    number: "2",
    title: "SINGLE PHASE OPENWELL PUMP STARTER",
    brochurePages: "6 to 7",
    products: [
      {
        id: "oss-mcb",
        code: "2.1",
        name: "OSS-MCB (MCB TYPE)",
        images: ["/images/products/oss-mcb.jpg"],
        specifications: [
          "Over Load Protection by MCB",
          "Only Run Capacitor",
          "Motor On Indication",
          "Weather Proof Plastic Enclosure",
        ],
        application: openwellApp,
        table: {
          columns: ["SR NO.", "H.P.", "RUN CAPACITOR", "MCB"],
          rows: [
            [1, "0.5", "30 MFD", "6 A"],
            [2, "1.0", "36 MFD", "10 A"],
            [3, "1.5", "50 MFD", "16 A"],
            [4, "2.0", "72 MFD", "20 A"],
          ],
        },
      },
      {
        id: "digi-mcb",
        code: "2.2",
        name: "DIGI-MCB (DIGITAL METER)",
        images: ["/images/products/digi-mcb.jpg"],
        specifications: [
          "Digital Volt - Amp Meter",
          "Over Load Protection by MCB",
          "Motor On Indication",
          "Only Run Capacitor",
          "Weather Proof Plastic Enclosure",
        ],
        application: openwellApp,
        table: {
          columns: ["SR NO.", "H.P.", "RUN CAPACITOR", "MCB"],
          rows: [
            [1, "0.5", "36 MFD", "10A"],
            [2, "1.0", "36 MFD", "10A"],
            [3, "1.5", "50 MFD", "16A"],
            [4, "2.0", "72 MFD", "20A"],
          ],
        },
      },
      {
        id: "digi-re",
        code: "2.3",
        name: "DIGI-RE (ELECTRONIC TYPE)",
        images: ["/images/products/digi-re.jpg"],
        specifications: [
          "Digital Display for Volt & Amp. Meter",
          "Only Run Capacitor",
          "Electronic Start/Stop Push Button",
          "Weather Proof Plastic Enclosure",
          "High Voltage & Low Voltage Protection",
          "Electronic Over Load Protection",
          "Dry-Run Protection (optional)",
          "With Automatic OFF-TIMER Facility (optional)",
        ],
        application: openwellApp,
        table: {
          columns: ["SR NO.", "H.P.", "RUN CAPACITOR", "RELAY RANGE"],
          rows: [
            [1, "0.5/1.0", "36 MFD", "2 - 25 A"],
            [2, "1.5", "50 MDD", "2 - 25 A"],
            [3, "2.0", "72 MFD", "2 - 25 A"],
          ],
        },
      },
      {
        id: "digi-re-llc",
        code: "2.4",
        name: "DIGI-RE LLC (WITH WATER LEVEL CONTROLLER)",
        images: [
          "/images/products/digi-re-llc.jpg",
          "/images/products/digi-re-sensors.jpg",
        ],
        specifications: [
          "Digital Display for Volt & Amp. Meter",
          "Only Run Capacitor",
          "Electronic Start/Stop Push Button",
          "Weather Proof Plastic Enclosure",
          "High Voltage & Low Voltage Protection",
          "Electronic Over Load Protection",
          "Dry-Run Protection (optional)",
          "With inbuilt Water Level Controller",
        ],
        application: openwellApp,
        table: {
          columns: ["SR NO.", "H.P.", "RUN CAPACITOR", "RELAY RANGE"],
          rows: [
            [1, "0.5/1.0", "36 MFD", "2 - 25 A"],
            [2, "1.5", "50 MDD", "2 - 25 A"],
            [3, "2.0", "72 MFD", "2 - 25 A"],
          ],
        },
      },
    ],
  },
  {
    slug: "three-phase-dol-motor-starter",
    number: "3",
    title: "THREE PHASE DOL MOTOR STARTER",
    brochurePages: "8 to 9",
    products: [
      {
        id: "dol-mk1",
        code: "3.1",
        name: "DOL STARTER (MK-1 TYPE)",
        images: ["/images/products/dol-mk1.jpg"],
        specifications: [
          "MK-1 type Contactor & Thermal Relay",
          "Thermal Overload Protection",
          "Powder Coated Sheet Metal Enclosure",
        ],
        application: threePhaseApp,
        table: {
          columns: ["SR NO.", "H.P.", "RELAY RANGE", "CONTACTOR TYPE"],
          rows: [
            [1, "3.0", "6-10 A", "MK-1"],
            [2, "5.0", "9-14 A", "MK-1"],
            [3, "7.5", "13-21 A", "MK-1"],
            [4, "7.5 (Heavy)", "13-21 A (DMC)", "MK-1"],
            [5, "10.0 (Heavy)", "20-32 A (DMC)", "MK-1"],
          ],
        },
      },
      {
        id: "otw",
        code: "3.2",
        name: "OTW (ELECTRONIC TYPE)",
        images: ["/images/products/otw.jpg"],
        specifications: [
          "Electronic Start/Stop Push Button",
          "Accurate overload Protection",
          "With Dry Run Protection (Optional) Model OTW-D",
          "Extreme High Voltage Protection",
          "Phase Failure Protection (SPP)",
          "Reverse Phasing & Unbalance Voltage Protection",
          '"Auto / Manual" Mode Selector Switch (Optional) Model OTA',
          "Auto Start Facility Provided with starting time delay",
          "Engineering Grade Plastic Enclosure",
          "Can Be Used Up to 7.5 Hp DOL Motor/Pumps.",
        ],
        application: threePhaseApp,
        table: {
          columns: ["SR NO.", "H.P.", "RELAY RANGE"],
          rows: [
            [1, "3.0", "4-10 A"],
            [2, "5.0", "8-20 A"],
            [3, "7.5", "8-20 A"],
          ],
        },
      },
      {
        id: "odp-306",
        code: "3.3",
        name: "ODP-306 (DIGITAL TYPE)",
        images: ["/images/products/odp-306.jpg"],
        specifications: [
          "Digital Volt-Current Meter with C.T",
          "Accurate overload Protection",
          "With Dry Run Protection (Optional)",
          "Extreme High Voltage Protection",
          "Phase Failure Protection (SPP)",
          "Reverse Phasing & Unbalance Voltage Protection",
          '"Auto / Manual" Mode Selector Switch',
          "Auto Start Facility Provided with starting time delay",
          'Set Over Load / Dry run Automatically by Pressing only "SET" key ("Auto-Set" System)',
          'Inbuilt "CYCLIC TIMER / OFF TIMER" Facility (Optional)',
        ],
        application: threePhaseApp,
        table: {
          columns: ["SR NO.", "H.P.", "RELAY RANGE"],
          rows: [
            [1, "3.0", "2-25 A"],
            [2, "5.0", "2-25 A"],
            [3, "7.5", "2-25 A"],
          ],
        },
      },
      {
        id: "odp-306-llc",
        code: "3.4",
        name: "ODP-306-LLC (With Automatic Water Level Controller)",
        images: [
          "/images/products/odp-306.jpg",
          "/images/products/odp-sensors.jpg",
        ],
        specifications: [
          "Digital Volt-Current Meter with C.T",
          "Accurate overload Protection",
          "With Dry Run Protection (Optional)",
          "Extreme High Voltage Protection",
          "Phase Failure Protection (SPP)",
          "Reverse Phasing & Unbalance Voltage Protection",
          'Set Over Load / Dry run Automatically by Pressing only "SET" key ("Auto-Set" System)',
          "Inbuilt Automatic Water Level Controller Facility",
        ],
        application: threePhaseApp,
        table: {
          columns: ["SR NO.", "H.P.", "RELAY RANGE"],
          rows: [
            [1, "3.0", "2-25 A"],
            [2, "5.0", "2-25 A"],
            [3, "7.5", "2-25 A"],
          ],
        },
      },
    ],
  },
  {
    slug: "three-phase-dol-control-panel",
    number: "4",
    title: "THREE PHASE DOL CONTROL PANEL",
    brochurePages: "10 to 11",
    products: [
      {
        id: "smart-pro",
        code: "4.1",
        name: "SMART PRO (RELAY TYPE)",
        images: [
          "/images/products/smart-pro.jpg",
          "/images/products/smart-pro-analog.jpg",
        ],
        specifications: [
          "Digital Volt-Amp. Meter",
          "Contactor & Thermal Relay Type",
          "Thermal Overload Protection by Relay",
          "Phase Failure Protection",
          "Inbuilt AUTO- SWITCH",
        ],
        application: threePhaseApp,
        table: {
          columns: ["SR NO.", "H.P.", "RELAY RANGE", "CONTACTOR TYPE"],
          rows: [
            [1, "3.0", "6-10 A", "MK-1"],
            [2, "5.0", "9-14 A", "MK-1"],
            [3, "7.5", "13-21 A", "MK-1"],
            [4, "7.5 (HEAVY)", "13-21 A", "MU"],
            [5, "10.0 (HEAVY)", "20-32 A", "MU"],
            [6, "15.0 (HEAVY)", "28-42 A", "MU"],
          ],
        },
      },
      {
        id: "mono-smart",
        code: "4.2",
        name: "MONO SMART (ELECTRONIC TYPE)",
        images: [
          "/images/products/mono-smart.jpg",
          "/images/products/mono-smart-analog.jpg",
        ],
        specifications: [
          "Digital / Analog Volt-Current Meter with C.T",
          "Accurate overload Protection",
          "With Dry Run Protection (Optional)",
          "Extreme High Voltage Protection",
          "Phase Failure Protection (SPP)",
          "Reverse Phasing & Unbalance Voltage Protection",
          "“Auto / Manual” Mode Selector Switch (Optional)",
          "Auto Start Facility Provided with starting time delay",
          "Set Over Load/ Dry run Automatically by Pressing only “SET” key (“Auto-Set” System)",
          "Inbuilt “CYCLIC TIMER / OFF TIMER” Facility (Optional)",
          "Inbuilt Water Level Controller Facility (optional)",
        ],
        application: threePhaseApp,
        table: {
          columns: ["SR NO.", "H.P.", "RELAY RANGE"],
          rows: [
            [1, "3.0", "2-25 A"],
            [2, "5.0", "2-25 A"],
            [3, "7.5", "2-25 A"],
          ],
        },
      },
      {
        id: "phaser",
        code: "4.3",
        name: "PHASER (WITH AUTOMATIC PHASE CHANGE FACILITY)",
        images: ["/images/products/phaser.jpg"],
        specifications: [
          "Digital Volt-Current Meter with C.T",
          "Accurate Overload & Dryrun Protection",
          "Extreme High Voltage Protection",
          "Phase Failure Protection (SPP)",
          "Reverse Phasing & Unbalance Voltage Protection",
          "With Automatic Phase Change Facility",
          "“Auto / Manual” Mode Selector Switch",
          "Auto Start Facility Provided with starting time delay",
          "Set Over Load/ Dry run Automatically by Pressing only “SET” key (“Auto-Set” System)",
          "Inbuilt “ CYCLIC TIMER / OFF TIMER” Facility (Optional)",
        ],
        application: threePhaseApp,
        table: {
          columns: ["SR NO.", "H.P.", "RELAY RANGE"],
          rows: [
            [1, "3.0", "2-25 A"],
            [2, "5.0", "2-25 A"],
            [3, "7.5", "2-25 A"],
          ],
        },
      },
      {
        id: "phaser-llc",
        code: "4.4",
        name: "PHASER WITH LLC (WITH AUTOMATIC WATER LEVEL CONTROLLER FACILITY)",
        images: ["/images/products/phaser-llc.jpg"],
        specifications: [
          "Digital Volt-Current Meter with C.T",
          "Accurate Overload & Dryrun Protection",
          "Extreme High Voltage Protection",
          "Phase Failure Protection (SPP)",
          "Reverse Phasing & Unbalance Voltage Protection",
          "With Automatic Phase Change Facility",
          "Inbuilt Automatic Water Level Controller (LLC) Facility",
          "“Auto / Manual” Mode Selector Switch",
          "Auto Start Facility Provided with starting time delay",
          "Set Over Load/ Dry run Automatically by Pressing only “SET” key (“Auto-Set” System)",
          "Inbuilt “ CYCLIC TIMER / OFF TIMER” Facility (Optional)",
        ],
        application: threePhaseApp,
        table: {
          columns: ["SR NO.", "H.P.", "RELAY RANGE"],
          rows: [
            [1, "3.0", "2-25 A"],
            [2, "5.0", "2-25 A"],
            [3, "7.5", "2-25 A"],
          ],
        },
      },
      {
        id: "dol-mpd",
        code: "4.5",
        name: "DOL PANEL (WITH MPD-HEAVY DUTY)",
        images: ["/images/products/dol-mpd.jpg"],
        specifications: [
          "Digital Volt & Current Meter",
          "Micro Controller Based Digital Technology",
          "Over Current & Under Current (Dry Run) Protection",
          "Over Voltage & Under Voltage Protection",
          "Phase Failure & Reverse Phasing Protection",
          "“Auto / Manual” Mode Selector Switch",
          "Auto Start Facility Provided After Resumption of Power Supply",
          "Working / Bypass Facility for Digital Controller (Emergency)",
          "Heavy Duty Power Contactors",
          "MCB Provided for Short Circuit Protection",
          "Attractive Metal box with Powder Coating",
          "Facility for Automatic Water Level Controller (Optional)",
        ],
        application: threePhaseApp,
        table: {
          columns: ["SR NO.", "H.P.", "CONTACTOR (AMP)", "RELAY RANGE"],
          rows: [
            [1, "5.0 HP", "18 A", "2-45 AMP"],
            [2, "7.5 HP", "18 A", "2-45 AMP"],
            [3, "10 HP", "20 A", "2-45 AMP"],
            [4, "15 HP", "25 A", "2-45 AMP"],
            [5, "20 HP", "32 A", "2-60 AMP"],
            [6, "25 HP", "40 A", "2-60 AMP"],
            [7, "30 HP", "65 A", "2-100 AMP"],
            [8, "40 HP", "80 A", "2-100 AMP"],
            [9, "50 HP", "95 A", "2-100 AMP"],
          ],
        },
      },
    ],
  },
  {
    slug: "star-delta-control-panel",
    number: "5",
    title: "STAR DELTA CONTROL PANEL",
    brochurePages: "12",
    products: [
      {
        id: "star-delta-electronic",
        code: "5.1",
        name: "STAR DELTA CONTROL PANEL (ELECTRONIC TYPE)",
        images: ["/images/products/star-delta-electronic.jpg"],
        specifications: [
          "Digital Volt-Current Meter With C.T",
          "All Protection Given by Digital Controller (Electronic Relay)",
          "Over Current & Under Current (Dry-Run) Protection",
          "Over Voltage & Under Voltage Protection",
          "Phase Failure Protection (SPP)",
          "Reverse Phasing & Unbalance Voltage Protection",
          '"Auto / Manual" Mode Selector Switch',
          "Auto Start Facility Provided With Starting time Delay",
          "Working / Bypass Facility for Digital Controller (Emergency)",
          'Set Over Current / Under Current Automatically by Pressing only "SET" Key ("Auto-SET" System)',
          "Heavy Power Contactors",
          "With Automatic Water Level Controller Facility (Optional)",
          "Motor On Indication",
          "Metal Enclosure with Powder Coating",
        ],
        application:
          "Three Phase Star Delta Motors Used in Farms / Pumping Station & Induction Motor.",
        table: {
          columns: ["SR NO.", "MOTOR (H.P)", "RELAY RANGE (AMP)", "TYPE"],
          rows: [
            [1, "10", "2 - 45 A", "FASD"],
            [2, "15", "2 - 45 A", "FASD"],
            [3, "20", "2 - 60 A", "FASD"],
            [4, "25", "2 - 100 A", "FASD"],
          ],
        },
      },
      {
        id: "star-delta-relay",
        code: "5.2",
        name: "STAR DELTA CONTROL PANEL (RELAY TYPE)",
        images: [
          "/images/products/star-delta-relay.jpg",
          "/images/products/star-delta-panel.jpg",
        ],
        specifications: [
          "Digital Volt - Current Meter with C.T",
          "Over Load Protection by Thermal Relay",
          "Phase Failure Protection (SPP)",
          "Reverse Phasing & Unbalance Voltage Protection",
          '"Auto / Manual" Mode Selector Switch',
          "With Inbuilt Auto Switch Provided",
          "Heavy Power Contactors",
          "Start / Stop push Button",
          "Motor On Indication",
          "Metal Enclosure with Powder Coating",
        ],
        application:
          "Three Phase Star Delta Motors Used in Farms / Pumping Station & Induction Motor.",
        table: {
          columns: ["SR NO.", "H.P.", "RELAY RANGE", "TYPE"],
          rows: [
            [1, "10", "13-21 A", "MU - FASD"],
            [2, "15", "13-21 A", "MU - FASD"],
            [3, "20", "20-32 A", "MU - FASD"],
            [4, "25", "28-42 A", "MU - FASD"],
          ],
        },
      },
    ],
  },
  {
    slug: "auto-switch",
    number: "6",
    title: "AUTO SWITCH",
    brochurePages: "13",
    products: [
      {
        id: "auto-switch",
        code: "6",
        name: "AUTO SWITCH",
        images: [
          "/images/products/auto-ocleg-dol.jpg",
          "/images/products/auto-digital-wtf.jpg",
          "/images/products/auto-dol-rocker.jpg",
          "/images/products/auto-semi.jpg",
          "/images/products/auto-dol-timer.jpg",
          "/images/products/auto-1phase.jpg",
          "/images/products/auto-digital.jpg",
          "/images/products/auto-mini-oz5.jpg",
        ],
        imageLabels: [
          "1. OCLEG DOL (STANDARD)",
          "2. DIGITAL WTF (PREMIUM)",
          "3. DOL (ROCKER)",
          "4. SEMI (FOR STAR DELTA STARTER)",
          "5. DOL (TIMER)",
          "6. 1 PHASE AUTO SWITCH",
          "7. DIGITAL AUTO SWITCH",
          "8. MINI AUTO SWITCH-OZ5",
        ],
        specifications: [
          "Auto Restart your Pump After Resumption of Power Supply",
          "Phase Failure Protection",
          "Reverse Phasing Protection",
          "Engineering Grade Plastic Enclosure",
        ],
        application:
          "For MCC Panels of Water Pump at Remote Farms, Unattainable Area.",
        table: {
          columns: ["SR NO.", "MODEL"],
          rows: [
            [1, "OCLEG DOL (STANDARD)"],
            [2, "DIGITAL WTF (PREMIUM)"],
            [3, "DOL (ROCKER)"],
            [4, "SEMI (FOR STAR DELTA STARTER)"],
            [5, "DOL (TIMER)"],
            [6, "1 PHASE AUTO SWITCH"],
            [7, "DIGITAL AUTO SWITCH"],
            [8, "MINI AUTO SWITCH-OZ5"],
          ],
        },
      },
    ],
  },
  {
    slug: "digital-panel-meters",
    number: "7",
    title: "DIGITAL PANEL METERS",
    brochurePages: "14",
    products: [
      {
        id: "avm-3phase",
        code: "7",
        name: "AVM, 3 PHASE",
        images: ["/images/products/avm-3phase.jpg"],
        specifications: [
          "Digital Volt- Amp Meter With inbuilt C.T.",
          "R-Y-B Indication by Bright LED",
          "Indication Phase to Phase Voltage",
          "Indicates System Current",
          "Range: Up to 100 A",
        ],
        application: "3-Phase Control Panel For Water Pumps / Motors",
      },
    ],
  },
  {
    slug: "single-phase-electronic-starter",
    number: "8",
    title: "SINGLE PHASE ELECTRONIC STARTER",
    brochurePages: "15 to 16",
    products: [
      {
        id: "osw",
        code: "8.1",
        name: "OSW",
        images: ["/images/products/osw.jpg"],
        specifications: [
          "Supply 230V, 1Phase, Ac Supply, 50Hz",
          "High/Low Voltage Protection",
          "Electronic Over Load Protection",
          "Variable Current (Amp.) Setting",
          "Engineering Grade Plastic Enclosure",
        ],
        application: domesticStarterApp,
        table: {
          columns: ["SR NO.", "MODEL", "RELAY RANGE"],
          rows: [
            [1, "OSW - 16", "4-16 AMP"],
            [2, "OSW - 108", "14-22 AMP"],
          ],
        },
      },
      {
        id: "osw-t",
        code: "8.2",
        name: "OSW - T (WITH AUTO START FACILITY)",
        images: ["/images/products/osw-t.jpg"],
        specifications: [
          "High/Low Voltage Protection",
          "Electronic Over Load Protection",
          "Auto Restart with Time Relay",
          "Variable Current (Amp.) Setting",
          "Auto / Manual Start Facility",
          "Engineering Grade Plastic Enclosure",
        ],
        application: domesticStarterApp,
        table: {
          columns: ["SR NO.", "MODEL", "RELAY RANGE"],
          rows: [
            [1, "OSWT - 16", "4-16 AMP"],
            [2, "OSWT - 108", "14-22 AMP"],
          ],
        },
      },
      {
        id: "osw-d",
        code: "8.3",
        name: "OSW-D (DRY RUN TYPE)",
        images: ["/images/products/osw-d.jpg"],
        specifications: [
          "Supply: 230V, 1 Phase, AC Supply, 50Hz",
          "High/Low Voltage Protection",
          "Electronic Overload Protection",
          "Adjustable Overload & Dry Run Facility",
          "Engineering Grade Plastic Enclosure",
        ],
        application: "For 1 Phase Submersible Pump Set.",
        table: {
          columns: ["SR NO.", "MODEL", "RELAY RANGE"],
          rows: [[1, "OSWD - 20", "2-20 AMP"]],
        },
      },
      {
        id: "digi-osw",
        code: "8.4",
        name: "DIGI OSW (DIGITAL)",
        images: ["/images/products/digi-osw.jpg"],
        specifications: [
          "Digital Volt Amp Meter",
          "High/Low Voltage Protection",
          "Electronic Overload Protection",
          "Engineering Grade Plastic Enclosure",
          '"CYCLIC-TIMER" Facility (Optional)',
        ],
        application:
          "Domestic Pump, Induction Motor, Air-Conditioner, Television, Refrigerator, Domestic Flour Mill, Geyser, and Cattle / Poultry Farm.",
        table: {
          columns: ["SR NO.", "MODEL", "RELAY RANGE"],
          rows: [[1, "DIGI-OSW", "2 - 25 AMP"]],
        },
      },
    ],
  },
  {
    slug: "automatic-water-level-controller",
    number: "9",
    title: "AUTOMATIC WATER LEVEL CONTROLLER",
    brochurePages: "17",
    products: [
      {
        id: "llc-2",
        code: "9.1",
        name: "LLC - 2 (DOMESTIC / OPEN WELL PUMP)",
        images: ["/images/products/llc-2.jpg"],
        specifications: [
          "Supply 230V, 1 Phase, AC",
          "Suitable for Open Well Pump",
          "Also Used For Mono-Block & Domestic Pump",
          "Having only Running Capacitor type Starter",
        ],
        application: llcApp,
      },
      {
        id: "llc-2s",
        code: "9.2",
        name: "LLC - 2S (BOREWELL SUB. PUMP)",
        images: ["/images/products/llc-2s.jpg"],
        specifications: [
          "Supply 230V, 1 Phase, AC",
          "For Bore-Well Submersible Pump",
          "Suitable For Contactor / Relay Type & MCB type Panel",
          "Having Start & Run Capacitor type Panel",
        ],
        application: llcApp,
      },
      {
        id: "llc-301",
        code: "9.3",
        name: "LLC-301 (3 PHASE)",
        images: [
          "/images/products/llc-301.jpg",
          "/images/products/llc-301-din.jpg",
        ],
        specifications: [
          "Supply 415V, 3 Phase, AC",
          "For 3 Phase Submersible Pump / Motors",
        ],
        application: llcApp,
      },
    ],
  },
  {
    slug: "earth-leakage-circuit-breaker",
    number: "10",
    title: "EARTH LEAKAGE CIRCUIT BREAKER (ELCB)",
    brochurePages: "18",
    products: [
      {
        id: "rakshak",
        code: "10.1",
        name: "RAKSHAK (ELCB+MCB)",
        images: [
          "/images/products/rakshak.jpg",
          "/images/products/rakshak-mcb.jpg",
        ],
        specifications: [
          "Electric Shock Protection",
          "Over Load & high-Low Voltage Cut-Off",
          "Short Circuit Protection by MCB",
          "With Surge Protection",
          "By Pass Facility",
          "Adjustable Leakage Current (mA) up to 50 mA",
          "Supply: 1 Phase 230V, 32 AMP",
        ],
        application: elcbApp,
      },
      {
        id: "iguard",
        code: "10.2",
        name: "i-GUARD (DIGITAL)",
        images: ["/images/products/iguard.jpg"],
        specifications: [
          "Digital Display for VOLT, AMP & Leakage Current",
          "High-Low Voltage Protection",
          "Overload & Leakage Current Adjustable",
          "Electric Shock Protection",
          "Bypass Facility",
          "Supply: 1 Phase, 230V, 30Amp",
        ],
        application: elcbApp,
      },
      {
        id: "rakshak-3phase",
        code: "10.3",
        name: "RAKSHAK (3 PHASE)",
        images: [
          "/images/products/rakshak-3p.jpg",
          "/images/products/rakshak-3p-wide.jpg",
        ],
        specifications: [
          "Supply: 3 Phase 415V",
          "Over Load & High-Low Voltage Cut-Off",
          "Electric Shock & Short Circuit Protection",
          "Bypass Facility",
        ],
        application:
          "Residential Purpose Like House, Hotel, Commercial Complex, High Rise Tower, Industries, Offices.",
      },
    ],
  },
  {
    slug: "digital-time-switch-clock",
    number: "11",
    title: "DIGITAL TIME SWITCH & CLOCK",
    brochurePages: "19",
    products: [
      {
        id: "ots",
        code: "11.1",
        name: "OTS",
        images: ["/images/products/ots.jpg"],
        specifications: [
          "Micro Controller Based Digital Technology",
          "Automatically Switch On/Off Your Appliance",
          "2 Time / 24 Time On/Off Programme",
          "500 Hours Battery Back Up",
          "LED Display For Unit On",
          "Engineering Grade Plastic Enclosure",
        ],
        application:
          "Ideal for Outdoor and Street Lighting Application (Industrial, Municipal Corporation, Metros, Panchayats, Housing Societies, Apartments). Glow Sign Board Lighting / Hoarding Lights, Pumps / Motors",
      },
      {
        id: "astroleg",
        code: "11.2",
        name: "ASTROLEG",
        images: ["/images/products/astroleg.jpg"],
        specifications: [
          "Astronomical Time Switch",
          "Automatic ON/OFF as Working on Sunrise & Sunset Time",
          "No Need to Set ON/OFF Time",
          "Display of Real Time Clock (RTC)",
          "Engineering Grade Plastic Enclosure",
        ],
        application:
          "Ideal for Outdoor and Street Lighting Application (Industrial, Municipal Corporation, Metros, Panchayats, Housing Societies, Apartments)",
      },
    ],
  },
  {
    slug: "phase-failure-relays",
    number: "12",
    title: "PHASE FAILURE RELAYS",
    brochurePages: "20",
    products: [
      {
        id: "minny-spp",
        code: "12.1",
        name: "MINNY SPP",
        images: ["/images/products/minny-spp.jpg"],
        specifications: [
          "Voltage Sensing SPP Small In Size",
          "Phase Failure Protection",
          "Reverse Phase Protection",
          "Voltage Unbalance Protection",
        ],
        application: "MCC Panel of Water Pump and Lifts",
      },
      {
        id: "nsv-cg",
        code: "12.2",
        name: "NSV-CG",
        images: ["/images/products/nsv-cg.jpg"],
        specifications: [
          "With Low/High Voltage Cutoff",
          "Phase Failure Protection",
          "Reverse Phase Protection",
          "Voltage Unbalance Protection",
        ],
        application: "MCC Panel of Water Pump and Lifts",
      },
    ],
  },
  {
    slug: "motor-pump-protection-relay",
    number: "13",
    title: "MOTOR / PUMP PROTECTION RELAY",
    brochurePages: "21",
    products: [
      {
        id: "mpd",
        code: "13.1",
        name: "MPD",
        images: ["/images/products/mpd.jpg"],
        specifications: [
          "Micro-Controller Based Digital Technology",
          "Digital Volt-Amp Meter",
          "Electronic Overload & Dry-Run Protection",
          "High-Low Voltage Protection",
          "Phase Failure Protection (SPP)",
          "Reverse Phasing Protection",
          "Engineering Grade Plastic Enclosure",
          "Relay Range: 2-45A, 2-60A, 2-100A",
        ],
        application: "MCC Panel of Water Pump",
      },
      {
        id: "pump-pro",
        code: "13.2",
        name: "PUMP PRO",
        images: ["/images/products/pump-pro.jpg"],
        specifications: [
          "Single Phasing Preventer",
          "Overload Protection",
          "Prod Less Dry-Run Protection",
          "Phase Failure Protection (SPP)",
          "Reverse Phasing Protection",
          "Relay Range: 8-20A, 16-40A, 32-80A",
        ],
        application: "MCC Panel of Water Pump",
      },
    ],
  },
  {
    slug: "timers",
    number: "14",
    title: "TIMERS",
    brochurePages: "22",
    products: [
      {
        id: "ot-100",
        code: "14.1",
        name: "OT - 100 (TIMER)",
        images: ["/images/products/ot-100.jpg"],
        specifications: [
          "On Delay Timer",
          "Adjustable 3-30 Sec.",
          "Engineering Grade Plastic Enclosure",
        ],
        application: timerApp,
      },
      {
        id: "sdt-100",
        code: "14.2",
        name: "SDT - 100 (STAR DELTA TIMER)",
        images: ["/images/products/sdt-100.jpg"],
        specifications: [
          "On Delay Timer",
          "Adjustable 3-30 Sec.",
          "Engineering Grade Plastic Enclosure",
        ],
        application: timerApp,
      },
      {
        id: "cyclik",
        code: "14.3",
        name: "CYCLIK TIMER",
        images: ["/images/products/cyclik.jpg"],
        specifications: [
          "Automatic ON/OFF",
          "Adjustable ON/OFF From 1-999 Minutes",
          "Engineering Grade Plastic Enclosure",
        ],
        application: timerApp,
      },
    ],
  },
  {
    slug: "over-voltage-protector-phase-changer",
    number: "15",
    title: "OVER VOLTAGE PROTECTOR & PHASE CHANGER",
    brochurePages: "23",
    products: [
      {
        id: "ovp",
        code: "15.1",
        name: "OVER VOLTAGE PROTECTOR (OVP)",
        images: ["/images/products/ovp.jpg"],
        specifications: [
          "Protect Your System From Over Voltage",
          "With Current Capacity of 40 AMPERE",
          "Supply: 1 Phase, 230V",
          "Engineering Grade Plastic Enclosure",
        ],
        application: "Homes, Office, Shop, Commercial Establishment",
      },
      {
        id: "phch",
        code: "15.2",
        name: "AUTOMATIC PHASE CHANGER (PHCH)",
        images: ["/images/products/phch.jpg"],
        specifications: [
          "In Absence of One Phase, Phase Changer Will Equally Distribute The Supply From Other Two Phase",
          "Fully Automatic Controlling Unit",
          "Generate Virtual Phase in Phase Failure Condition",
          "10 Second time Delay Facility",
          "Overload And Short Circuit Protection",
          "Supply: 3 Phase, 415V",
        ],
        application: "Only For Homes, Office and Shopes",
      },
    ],
  },
  {
    slug: "main-line-voltage-stabilizer",
    number: "16",
    title: "MAIN LINE VOLTAGE STABILIZER",
    brochurePages: "Flyer / Page 24",
    products: [
      {
        id: "main-line-voltage-stabilizer",
        code: "16",
        name: "MAIN LINE VOLTAGE STABILIZER (For Whole House)",
        images: ["/images/products/main-line-stabilizer.jpg"],
        specifications: [
          "Install only 1 stabilizer and get full protection for all your home appliances",
          "Automatically steps UP & steps Down the Output Voltage",
          "High & Low Voltage Protection",
          "Surge Protection with Starting Time Delay",
          "Digital Display : Input & Output Voltage + Current (Load)",
          "Powder Coated Sheet Metal Enclosure",
          "Capacity: 5 KVA, 7.5 KVA, 10 KVA, 15 KVA (up to 45 Amp.)",
          "Microcontroller Digital Technology",
          "On Time Delay",
          "High-Low Voltage Cut-Off",
        ],
        application:
          "Air Conditioner, Refrigerator, Television, Washing Machine, Water Pump & Motor, Solar Inverter System. Ideal for whole house.",
        table: {
          columns: [
            "SR. NO.",
            "MODEL",
            "CAPACITY (Amp.) / KVA",
            "INPUT VOLTAGE WORKING RANGE",
            "OUTPUT VOLTAGE",
            "APPLICATION",
          ],
          rows: [
            [
              1,
              "WLMT-15 PLUS",
              "15 A / 5 KVA",
              "90 – 300 V",
              "200 – 250 V",
              "1 A.C + FAN/LIGHTS + TV/FREEZE",
            ],
            [
              2,
              "WLMB-25 HL",
              "25 A / 7.5 KVA",
              "125 – 300 V",
              "200 – 250 V",
              "2 A.C + FAN/LIGHTS + TV/FREEZE + WASHING MACHINE",
            ],
            [
              3,
              "WLM-30 HL",
              "30 A / 10 KVA",
              "150 – 310 V",
              "220 – 245 V",
              "2 A.C + FAN/LIGHTS + TV/FREEZE + MOTOR + WASHING MACHINE",
            ],
            [
              4,
              "WLMB-30 PLUS",
              "30 A / 10 KVA",
              "125 – 340 V",
              "220 – 245 V",
              "2 A.C + FAN/LIGHTS + TV/FREEZE + MOTOR + WASHING MACHINE",
            ],
            [
              5,
              "WLMT-30 PRO PLUS (HEAVY)",
              "30 A / 10 KVA",
              "90 – 300 V",
              "200 – 250 V",
              "2 A.C + FAN/LIGHTS + TV/FREEZE + MOTOR + WASHING MACHINE",
            ],
            [
              6,
              "WLM-45 HL",
              "45 A / 15 KVA",
              "150 – 310 V",
              "220 – 245 V",
              "3 A.C + FAN/LIGHTS + TV/FREEZE + MOTOR + WASHING MACHINE",
            ],
            [
              7,
              "WLMB-45 PLUS",
              "45 A / 15 KVA",
              "125 – 340 V",
              "220 – 245 V",
              "3 A.C + FAN/LIGHTS + TV/FREEZE + MOTOR + WASHING MACHINE",
            ],
            [
              8,
              "WLMT-45 PRO PLUS (HEAVY)",
              "45 A / 15 KVA",
              "90 – 300 V",
              "200 – 250 V",
              "3 A.C + FAN/LIGHTS + TV/FREEZE + MOTOR + WASHING MACHINE",
            ],
          ],
        },
      },
    ],
  },
  {
    slug: "servo-controlled-voltage-stabilizer",
    number: "17",
    title: "SERVO CONTROLLED VOLTAGE STABILIZER",
    brochurePages: "24",
    products: [
      {
        id: "servo-stabilizer",
        code: "17",
        name: "SERVO CONTROLLED VOLTAGE STABILIZER",
        images: ["/images/products/servo-stabilizer.jpg"],
        specifications: [
          "Protect Your Appliances From Voltage Fluctuation",
          "Automatic Controls The Output Voltage if Voltage Comes Up Or Down",
          "Low-High Voltage Cut-Off Protection",
          "Single Phasing Protection",
          "Time Delay System Available",
          "Wide Operating Voltage Range : 150-270V",
          "Output Voltage : 215V +/- 2%",
          "Powder Coated Sheet Metal enclore",
        ],
        application: "Industrial Machine and Residential Purpose",
      },
    ],
  },
];

export const slugAliases: Record<string, string> = {
  "single-phase-digital-control-panel": "single-phase-sub-control-panel",
  "single-phase-electronic-control-panel": "single-phase-sub-control-panel",
  "single-phase-electronic-control-panel-water-level": "single-phase-sub-control-panel",
  "over-voltage-protector": "over-voltage-protector-phase-changer",
  "phase-changer-for-house": "over-voltage-protector-phase-changer",
  "automatic-voltage-stabilizer": "main-line-voltage-stabilizer",
  "voltage-corrector": "main-line-voltage-stabilizer",
};

export function getCategory(slug: string) {
  const target = slugAliases[slug] || slug;
  return categories.find((c) => c.slug === target);
}

export function getAllCategorySlugs() {
  return [
    ...categories.map((c) => c.slug),
    ...Object.keys(slugAliases),
  ];
}

export function allProducts() {
  return categories.flatMap((c) =>
    c.products.map((p) => ({ ...p, category: c })),
  );
}
