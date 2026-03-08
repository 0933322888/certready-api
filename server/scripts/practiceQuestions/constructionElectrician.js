/**
 * Practice questions for construction-electrician.
 * Edit this file to add or change questions; run seedPracticeQuestions.js to seed the DB.
 */

export default [
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "Which class of rubber insulating gloves provides the highest voltage protection?",
    options: [
      "Class 00 — 500V AC",
      "Class 0 — 1,000V AC",
      "Class 2 — 17,000V AC",
      "Class 4 — 40,000V AC"
    ],
    correctIndex: 3,
    explanation: "Rubber insulating glove classes: 00 (500V), 0 (1,000V), 1 (7,500V), 2 (17,000V), 3 (26,500V), 4 (40,000V AC). Class 4 provides the highest protection and is required for high-voltage work above 26,500V.",
    order: 1,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "What is the correct sequence for a Lock-Out/Tag-Out (LOTO) procedure?",
    options: [
      "Lock → Test → Notify → Isolate → Tag",
      "Notify → Identify energy sources → Isolate → Lock & Tag → Test for absence of voltage → Verify zero-energy state",
      "Isolate → Notify → Test → Lock → Tag",
      "Test → Isolate → Lock → Notify → Verify"
    ],
    correctIndex: 1,
    explanation: "Correct LOTO sequence: (1) Notify affected workers, (2) Identify all energy isolation points, (3) Isolate the equipment, (4) Apply personal lock and danger tag, (5) Test for absence of voltage, (6) Verify zero-energy state. Testing before locking creates a hazard.",
    order: 2,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "What PPE arc flash category is the minimum when performing live work at an incident energy of 4.5 cal/cm²?",
    options: [
      "PPE Category 0 (1.2 cal/cm²)",
      "PPE Category 1 (4 cal/cm²)",
      "PPE Category 2 (8 cal/cm²)",
      "PPE Category 3 (25 cal/cm²)"
    ],
    correctIndex: 2,
    explanation: "PPE Category 1 is rated to 4 cal/cm², which is less than the 4.5 cal/cm² exposure. PPE Category 2 (rated to 8 cal/cm²) is the minimum that exceeds the calculated incident energy. Arc flash PPE must always meet or exceed the incident energy at the work location.",
    order: 3,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "Which class of hard hat is required when working near live electrical conductors up to 20,000 volts?",
    options: [
      "Class G (General) — rated to 2,200V",
      "Class C (Conductive) — no electrical protection",
      "Class E (Electrical) — rated to 20,000V",
      "Class B — rated to 10,000V"
    ],
    correctIndex: 2,
    explanation: "Class E (Electrical) hard hats are dielectrically tested to 20,000V AC and are the minimum for working near energized conductors above 2,200V. Class G is rated to only 2,200V. Class C hard hats provide no electrical protection whatsoever.",
    order: 4,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "A worker enters an underground electrical vault. What confined space hazard must be assessed FIRST before entry?",
    options: [
      "Restricted egress in an emergency",
      "Electrical shock from energized equipment",
      "Atmospheric hazards — oxygen deficiency, toxic gases, or flammable vapours",
      "Flooding risk from groundwater"
    ],
    correctIndex: 2,
    explanation: "Atmospheric testing is the first and most critical assessment before confined space entry. Oxygen-deficient atmospheres (<19.5%) can render a worker unconscious without warning. Toxic gases (H₂S, CO) and flammable vapours must also be tested. A clear atmospheric test must precede all other hazard assessments.",
    order: 5,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "What does a CAT IV rating on a multimeter indicate?",
    options: [
      "Rated for low-energy electronic circuits only",
      "Rated for single-phase receptacle-connected loads",
      "Rated for three-phase distribution systems and fixed equipment",
      "Rated for utility service entrance, outdoor conductors, and overhead lines — highest transient protection"
    ],
    correctIndex: 3,
    explanation: "CAT IV is the highest overvoltage category, rated for measurements at the utility service entrance, outdoor conductors, and overhead power lines — the points in the system where transient overvoltages are most severe. Using an under-rated instrument risks explosive failure during a transient event.",
    order: 6,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "When must a Temporary Protective Ground (TPG) be applied to de-energized high-voltage conductors?",
    options: [
      "Only when the conductor is buried underground",
      "Whenever a worker will contact or work in close proximity to a de-energized HV conductor",
      "Only on conductors above 15,000V",
      "Only when the conductor is longer than 100 metres"
    ],
    correctIndex: 1,
    explanation: "TPGs must be applied whenever a worker will contact or be in close proximity to de-energized HV conductors. They drain induced and stored charge, and if the line is accidentally re-energized, create a bolted fault that trips upstream protection — protecting the worker. Required by the CEC and OH&S regulations regardless of line length.",
    order: 7,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "What does a 'danger tag' accomplish in a LOTO procedure?",
    options: [
      "It substitutes for a personal lock when a lock is unavailable",
      "It warns others that equipment must not be operated — it does not physically prevent operation",
      "It certifies the equipment has been electrically tested to zero energy",
      "It is required only by the prime contractor, not individual workers"
    ],
    correctIndex: 1,
    explanation: "A danger tag is a WARNING device only — it communicates a hazard but provides no physical barrier to operation. A personal lock provides the actual physical lockout. Tags must never substitute for locks when locks are practicable. If a lock cannot be applied, the tag must be accompanied by at least one additional means of securing the isolation device.",
    order: 8,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "What does the WHMIS skull-and-crossbones pictogram (GHS06) indicate?",
    options: [
      "Explosive material",
      "Oxidizing substance",
      "Acute toxicity — lethal or severely harmful at low exposure",
      "Environmental hazard"
    ],
    correctIndex: 2,
    explanation: "The skull and crossbones (GHS06) indicates acute toxicity — the substance can cause death or serious damage through inhalation, ingestion, or skin absorption at relatively low doses. It is one of the most serious WHMIS hazard categories and requires strict exposure controls.",
    order: 9,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "What is the purpose of step potential awareness when approaching a downed power line?",
    options: [
      "To ensure the worker steps over the conductor rather than on it",
      "The voltage difference between two ground contact points during a fault can drive lethal current through a person's lower body",
      "To avoid stepping on the insulating jacket and damaging it further",
      "Step potential only applies in substation environments, not on public roads"
    ],
    correctIndex: 1,
    explanation: "Step potential is the voltage difference between two points on earth's surface separated by one stride. During a ground fault, large current flowing through soil creates a voltage gradient. A person approaching with feet 1 m apart can have dangerous current pass foot-to-foot through their body. The safe approach is the 'shuffle step' — small steps keeping both feet together until beyond the hazard zone.",
    order: 10,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-tools",
    topicLabel: "MWA A — Tools and Equipment",
    question: "Which requirement applies to powder-actuated tool (PAT) operators on a job site?",
    options: [
      "Any worker can operate a PAT after a brief supervisor demonstration",
      "A PAT can only be operated by a licensed master electrician",
      "The operator must hold a valid operator's card from a manufacturer-approved training course",
      "PAT use requires a hot work permit on all job sites"
    ],
    correctIndex: 2,
    explanation: "PATs fire a fastener with an explosive charge and can cause serious injury if misused. All Canadian jurisdictions require operators to complete a manufacturer-approved training course and carry a valid operator's card on site. The card must be produced on request from a supervisor or safety officer.",
    order: 11,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-tools",
    topicLabel: "MWA A — Tools and Equipment",
    question: "What is the correct base-setback ratio when positioning an extension ladder?",
    options: [
      "1 foot of base setback for every 4 feet of working height",
      "1 foot of base setback for every 3 feet of working height",
      "The ladder must be vertical — no setback",
      "2 feet of setback for every 3 feet of height"
    ],
    correctIndex: 0,
    explanation: "The 4:1 rule: place the base 1 foot from the wall for every 4 feet of vertical height. A ladder reaching 20 ft high needs its base 5 ft from the wall. This creates the optimal ~75° angle for stability. Shallower angles increase tip-over risk; steeper angles increase kick-out risk.",
    order: 12,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-tools",
    topicLabel: "MWA A — Tools and Equipment",
    question: "Before lifting a load with chain rigging equipment, what marking must be verified?",
    options: [
      "Manufacturer logo and country of origin",
      "Working Load Limit (WLL) and date of last inspection",
      "Serial number and annual colour code tag",
      "Material grade of the chain only"
    ],
    correctIndex: 1,
    explanation: "The WLL must be marked on all rigging equipment and must never be exceeded. The inspection date confirms the equipment is within its inspection cycle. Equipment with worn, bent, stretched, or damaged links must be immediately removed from service. Using unlabelled or uninspected rigging risks catastrophic failure.",
    order: 13,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-tools",
    topicLabel: "MWA A — Tools and Equipment",
    question: "When should a non-conductive (fibreglass or nylon) fish tape be used instead of a steel fish tape?",
    options: [
      "In conduit runs longer than 30 metres to reduce friction",
      "Only in PVC conduit — steel tape must be used in metal conduit",
      "Whenever working in existing energized buildings where accidental contact with live conductors is possible",
      "Non-conductive tapes are only for low-voltage data cabling"
    ],
    correctIndex: 2,
    explanation: "Metal fish tapes conduct electricity and can transmit a lethal shock to the operator if they contact an energized conductor — especially in conduit that shares space with existing live circuits. A non-conductive fish tape eliminates this hazard. Steel tapes should only be used in confirmed de-energized conduit systems.",
    order: 14,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-organization",
    topicLabel: "MWA A — Work Organization",
    question: "On electrical drawings, a dashed line between two devices typically represents:",
    options: [
      "A 120V power circuit",
      "A conduit run that is underground or concealed",
      "A control wiring or signal circuit connection",
      "A future installation not yet approved"
    ],
    correctIndex: 2,
    explanation: "Dashed lines on electrical drawings conventionally represent control wiring, signal circuits, or hidden elements. Solid lines typically represent power conductors or conduit. Always consult the drawing legend, as conventions vary between engineering firms.",
    order: 15,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-organization",
    topicLabel: "MWA A — Work Organization",
    question: "Which drawing type shows the physical routing, conduit sizes, wire counts, and device locations as actually installed after project completion?",
    options: [
      "Shop drawing",
      "Single-line diagram",
      "As-built (record) drawing",
      "Schematic diagram"
    ],
    correctIndex: 2,
    explanation: "As-built drawings reflect the actual installed condition — incorporating all field changes made during construction. They are a required closeout deliverable on most commercial projects and are critical for future maintenance, renovations, and emergency response.",
    order: 16,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-organization",
    topicLabel: "MWA A — Work Organization",
    question: "An electrical permit has been issued for a commercial installation. When must the AHJ be notified for inspection?",
    options: [
      "Only at final commissioning",
      "At the stages specified on the permit — typically before concealing rough-in wiring and at final completion",
      "Only if a deficiency is discovered",
      "Once per calendar year regardless of project stage"
    ],
    correctIndex: 1,
    explanation: "Most electrical permits specify mandatory inspection stages — commonly rough-in (before closing walls) and final. The AHJ must inspect before work is concealed or energized at each required stage. Bypassing inspections can result in orders to open walls or disconnect the installation.",
    order: 17,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-support",
    topicLabel: "MWA A — Support Components",
    question: "What is the maximum support spacing for EMT run horizontally in a commercial building per the CEC?",
    options: [
      "1.0 m",
      "1.5 m",
      "3.0 m",
      "No maximum if secured at each end"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 12-1000 requires EMT to be supported at intervals not exceeding 3.0 m and within 0.9 m of each box, fitting, or termination. Insufficient support allows conduit to sag, creates stress on fittings, and can damage conductor insulation.",
    order: 18,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-support",
    topicLabel: "MWA A — Support Components",
    question: "What type of conduit body allows a 90° direction change and provides rear access for pulling conductors?",
    options: [
      "LB conduit body",
      "C conduit body",
      "T conduit body",
      "LL conduit body"
    ],
    correctIndex: 0,
    explanation: "An LB (back access) conduit body makes a 90° turn with the access cover on the back, making it ideal for wall entries from conduit coming out of a ceiling or floor. C bodies are straight-through pull points; T bodies allow a tee junction; LL/LR turn left or right respectively.",
    order: 19,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-support",
    topicLabel: "MWA A — Support Components",
    question: "What determines the maximum allowable load on a cable tray system?",
    options: [
      "Always 500 kg uniformly distributed per the CEC",
      "The manufacturer's rated load capacity marked on the tray",
      "The weight of the cables divided by the number of support spans",
      "The load is unlimited if supported at 1.5 m intervals"
    ],
    correctIndex: 1,
    explanation: "Cable tray load capacity is determined by the manufacturer and must be marked on the tray. The CEC requires that cable tray not be loaded beyond its rated capacity. Ratings vary by width, depth, material (steel, aluminum, fibreglass), and span between supports.",
    order: 20,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-commissioning",
    topicLabel: "MWA A — Commissioning",
    question: "Before energizing a new 600V distribution panel, which minimum tests must be performed?",
    options: [
      "Visual inspection only",
      "Insulation resistance (megger) test and continuity verification of grounding conductors",
      "Only a voltage check at the utility meter",
      "Load current test at 50% voltage"
    ],
    correctIndex: 1,
    explanation: "Pre-energization commissioning must include: (1) insulation resistance (IR/megger) testing of all conductors to verify no breakdown between conductors or to ground, and (2) continuity testing of equipment grounding conductors to confirm the fault return path is intact. Visual inspection alone is insufficient.",
    order: 21,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-commissioning",
    topicLabel: "MWA A — Commissioning",
    question: "A megger test on a new 600V feeder reads 50 MΩ. Is this acceptable?",
    options: [
      "No — any reading below 100 MΩ requires cable replacement",
      "Yes — the general guideline is 1 MΩ minimum per 1000V of operating voltage; 50 MΩ indicates excellent insulation",
      "No — megger tests are not valid on cables rated below 1000V",
      "Yes, but only if ambient temperature is above 20°C"
    ],
    correctIndex: 1,
    explanation: "The general industry guideline (IEEE 43, NETA) is a minimum of 1 MΩ per 1000V of rated voltage. For a 600V feeder, the minimum acceptable IR is approximately 1 MΩ. A reading of 50 MΩ indicates excellent insulation integrity. Readings near the minimum threshold require investigation for damaged insulation or moisture ingress.",
    order: 22,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-commissioning",
    topicLabel: "MWA A — Commissioning",
    question: "During commissioning, a three-phase motor runs in the wrong direction. What is the simplest correction?",
    options: [
      "Swap any two of the three phase conductors at the motor terminals",
      "Reverse polarity of the control circuit",
      "Change the overload relay setting",
      "Swap A and C phases at the utility meter"
    ],
    correctIndex: 0,
    explanation: "For a three-phase motor, swapping any two of the three supply conductors reverses the phase sequence and changes rotation. This is the simplest and correct approach. Swapping at the utility meter would reverse all downstream motors. Control circuit changes do not affect motor rotation direction.",
    order: 23,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-commissioning",
    topicLabel: "MWA A — Commissioning",
    question: "What must be posted on the door of a distribution panel before it is placed in service?",
    options: [
      "A copy of the electrical permit",
      "An arc flash hazard label and a completed circuit directory",
      "The insulation resistance test report",
      "A load calculation summary from the engineer"
    ],
    correctIndex: 1,
    explanation: "Before energizing and placing a panel in service, both an arc flash warning label (identifying incident energy, boundary distances, and required PPE) and a completed circuit directory (identifying every circuit by its load) must be posted on the panel door. Both are required by the CEC and are verified during AHJ inspection.",
    order: 24,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "In an Edison three-wire 120/240V single-phase service, what is the voltage relationship between the two ungrounded conductors?",
    options: [
      "Both are 120V to ground and 120V to each other",
      "They are 120V to the grounded neutral and 240V to each other — 180° out of phase",
      "They are 240V to ground and 480V to each other",
      "They are in phase and 240V to neutral"
    ],
    correctIndex: 1,
    explanation: "In the Edison three-wire system each ungrounded conductor is 120V to the neutral (opposite ends of a centre-tapped transformer secondary) and 240V to each other. They are 180° out of phase. 120V loads connect phase-to-neutral; 240V loads connect phase-to-phase.",
    order: 25,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "In a 120/208V three-phase four-wire wye system, what is the line-to-line voltage?",
    options: [
      "120V",
      "173V",
      "208V",
      "240V"
    ],
    correctIndex: 2,
    explanation: "In a wye system, VLL = VLN × √3 = 120 × 1.732 = 208V. This is the standard low-voltage commercial distribution system in Canada. Single-phase 120V loads connect phase-to-neutral; three-phase loads connect all three phases.",
    order: 26,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "In a 347/600V three-phase four-wire wye system, which voltage is used for single-phase lighting circuits?",
    options: [
      "208V phase-to-phase",
      "347V phase-to-neutral",
      "600V phase-to-phase",
      "480V phase-to-neutral"
    ],
    correctIndex: 1,
    explanation: "In a 347/600V wye system, 347V is the phase-to-neutral voltage — used for single-phase fluorescent/LED lighting circuits. 600V is the phase-to-phase voltage (347 × √3 ≈ 600V) — used for three-phase motors and large equipment. This is the most common industrial distribution voltage in Canada.",
    order: 27,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "In a 120/240V three-phase four-wire high-leg delta service, which phase measures approximately 208V to neutral and must be identified with orange marking?",
    options: [
      "Phase A",
      "Phase B — the high (wild) leg",
      "Phase C",
      "The neutral conductor"
    ],
    correctIndex: 1,
    explanation: "In a high-leg delta, Phase B (wild leg) measures approximately (240/2) × √3 ≈ 208V to neutral — unsuitable for 120V single-phase loads. The CEC requires orange identification on this conductor at all points where it could be confused with a standard 120V conductor.",
    order: 28,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "What is the minimum overhead clearance required for a service conductor passing over a driveway accessible to vehicles?",
    options: [
      "3.0 m",
      "4.0 m",
      "4.9 m",
      "5.5 m"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 6-104 requires a minimum clearance of 4.9 m (16 ft) for service conductors over areas accessible to vehicle traffic. This prevents contact with tall vehicles such as trucks and farm equipment. Pedestrian-only areas have a lower minimum clearance requirement.",
    order: 29,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "What is the purpose of a current transformer (CT) in a metering installation?",
    options: [
      "To step up voltage for transmission to the meter",
      "To proportionally reduce large primary currents to a safe, measurable secondary current (typically 5A) for the revenue meter",
      "To isolate metering equipment from the utility",
      "To provide surge protection for the revenue meter"
    ],
    correctIndex: 1,
    explanation: "A CT steps down high primary current to a proportional secondary current — typically 5A at full load — that the revenue meter can safely measure. For example, a 400:5 CT steps 400A to 5A (ratio 80:1). The meter reading is multiplied by the CT ratio to give actual consumption.",
    order: 30,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "Why must a current transformer (CT) secondary never be open-circuited while primary current is flowing?",
    options: [
      "The meter will give an inaccurate reading",
      "An open CT secondary develops dangerously high voltages that can damage insulation and harm personnel",
      "The primary fuse will blow immediately",
      "The CT will overheat and require replacement"
    ],
    correctIndex: 1,
    explanation: "A CT must always have a burden (meter or short) connected. With an open secondary, the CT core saturates, and the high-frequency flux induces potentially thousands of volts across the open terminals. Always short the CT secondary before opening the metering circuit.",
    order: 31,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "The CEC permits a maximum of how many service disconnecting means for a single building?",
    options: [
      "Always exactly one",
      "A maximum of six grouped at one location",
      "Unlimited, distributed throughout",
      "Two — one for each half of the service"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 6-200 permits a maximum of six service disconnects grouped at one location. This ensures that firefighters and emergency personnel can disconnect all building power from a single location. If more than six circuits are needed, a main disconnect ahead of the group is required.",
    order: 32,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "Why must antioxidant compound be applied to aluminum conductor terminations?",
    options: [
      "To lubricate the conductor for pulling through conduit",
      "To prevent aluminum oxide formation, which is an insulator that increases connection resistance",
      "To insulate the conductor at the terminal lug",
      "To identify aluminum conductors from copper"
    ],
    correctIndex: 1,
    explanation: "Aluminum oxidizes rapidly in air, forming aluminum oxide — an electrical insulator. Antioxidant compound prevents new oxide formation and displaces existing oxide at the contact surface, ensuring a stable low-resistance connection. Without it, oxidation increases resistance, causing heating and eventual failure.",
    order: 33,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "A three-phase 600V service has an available fault current of 25,000A. What minimum interrupting rating must the main breaker have?",
    options: [
      "10,000A IC",
      "18,000A IC",
      "22,000A IC",
      "At least 25,000A IC"
    ],
    correctIndex: 3,
    explanation: "The interrupting capacity (IC) of the main disconnect must equal or exceed the maximum available fault current. An under-rated breaker risks explosive failure during a fault. A short-circuit study or utility letter is required to determine available fault current.",
    order: 34,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-grounding",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "What is the key difference between system grounding and equipment bonding?",
    options: [
      "System grounding connects the neutral to earth; bonding connects non-current-carrying metal parts together and to the grounded conductor",
      "They are the same — both connect neutral to earth",
      "Bonding connects neutral to earth; grounding connects metal enclosures to each other",
      "System grounding is for HV only; bonding is for LV only"
    ],
    correctIndex: 0,
    explanation: "System grounding establishes a reference voltage by connecting the neutral to earth. Equipment bonding connects all non-current-carrying metallic enclosures, conduits, and equipment together and to the grounded conductor, creating a low-impedance fault return path. Both are required and serve different but complementary purposes.",
    order: 35,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-grounding",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "A concrete-encased grounding electrode (Ufer ground) requires a minimum of how many metres of rebar or copper conductor in the footing?",
    options: [
      "2.4 m",
      "4.5 m",
      "6.0 m",
      "7.5 m"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 10-700 requires a concrete-encased electrode to have at least 6.0 m of rebar (minimum 13 mm diameter) or bare copper conductor embedded in the concrete footing. The concrete's moisture content and earth contact make this one of the most effective grounding electrodes available.",
    order: 36,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-grounding",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "A ground rod must be driven to what minimum depth? What is permitted if rock prevents this?",
    options: [
      "2.4 m; if rock prevents this, drive at an angle not exceeding 45° from vertical",
      "3.0 m; no exceptions permitted",
      "1.8 m; add a second rod if rock is encountered",
      "2.4 m; substitute a buried plate electrode if rock prevents driving"
    ],
    correctIndex: 0,
    explanation: "CEC Rule 10-700(2) requires ground rods to be driven to a minimum of 2.4 m. If rock prevents this depth, the rod may be driven at an angle not exceeding 45° from vertical. If that still cannot achieve 2.4 m, an alternative electrode type must be used.",
    order: 37,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-grounding",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "Where must the main bonding jumper be installed in a service entrance?",
    options: [
      "At each subpanel throughout the building",
      "At the first means of disconnection — connecting the neutral bus to the equipment grounding bus and the service enclosure",
      "At the utility transformer only",
      "At each panelboard feeding 240V loads"
    ],
    correctIndex: 1,
    explanation: "The main bonding jumper connects the grounded (neutral) conductor to the equipment grounding conductor and the service enclosure at the service disconnect. This completes the fault return path. It must be installed only at the service entrance — never at downstream panelboards, where it would allow neutral current to flow on grounding conductors.",
    order: 38,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-grounding",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "What is the purpose of Ground Fault Protection (GFP) on services rated 150V to ground or more and 1,000A or more?",
    options: [
      "To protect personnel from shock on the service conductors",
      "To detect low-level ground faults and open the service disconnect before a sustained arcing fault causes a fire",
      "To measure ground leakage current for billing",
      "To trip on any current above rated service ampacity"
    ],
    correctIndex: 1,
    explanation: "GFP detects low-level arcing ground faults (as low as 1,200A on some systems) that won't trip the main breaker but can sustain arcing and cause catastrophic fires. CEC Rule 14-102 requires GFP on solidly grounded services rated 150V to ground or greater and 1,000A or more.",
    order: 39,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-grounding",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "In a separately derived system (transformer secondary), where must the system grounding connection be made?",
    options: [
      "At the main service entrance only — no separate grounding needed at the transformer",
      "At the transformer secondary or first means of overcurrent protection on the secondary",
      "At any convenient point on the secondary conductors",
      "At the transformer primary only"
    ],
    correctIndex: 1,
    explanation: "A separately derived system has no direct metallic connection to the supply conductors. The CEC requires a grounding electrode conductor connected at the transformer secondary (or first OCPD on the secondary) and a new system bond established there — creating a proper voltage reference and fault return path for the secondary system.",
    order: 40,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-grounding",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "Why must a lightning protection system be bonded to the electrical system's grounding electrode system?",
    options: [
      "To allow lightning current to be used as a backup power source",
      "To equalize potential during a lightning strike and prevent side-flashing between the lightning system and nearby grounded metal",
      "To provide a path for static electricity only",
      "To satisfy utility revenue metering requirements"
    ],
    correctIndex: 1,
    explanation: "Without bonding, a massive lightning current creates a large potential difference between the lightning down conductor and nearby grounded metal, causing a side flash (arc) that can start fires and injure personnel. Bonding ensures all systems rise to the same potential simultaneously during a strike.",
    order: 41,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-grounding",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "What does Impressed Current Cathodic Protection (ICCP) do to protect buried metallic structures?",
    options: [
      "Applies AC voltage to neutralize corrosion currents",
      "Applies DC current making the protected structure cathodic, suppressing galvanic corrosion",
      "Applies pulsed DC to detect corrosion depth",
      "Electrically isolates the buried structure from stray AC currents"
    ],
    correctIndex: 1,
    explanation: "ICCP systems use a DC rectifier to supply current from an anode through soil to the protected structure (cathode). Making the structure cathodic suppresses the oxidation (corrosion) reaction. Used to protect pipelines, storage tanks, ship hulls, and reinforced concrete from galvanic corrosion.",
    order: 42,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What is the primary benefit of a current-limiting fuse interrupting a fault in less than one half-cycle?",
    options: [
      "It allows a larger fault current to be cleared",
      "It limits peak let-through current, reducing thermal and mechanical stress on downstream equipment",
      "It provides time-delay coordination with downstream devices",
      "It is resettable after clearing a fault"
    ],
    correctIndex: 1,
    explanation: "Current-limiting fuses operate in < ½ cycle (< 8.3 ms at 60 Hz), interrupting before current reaches its prospective peak. This dramatically reduces let-through energy (I²t), protecting downstream equipment with lower withstand ratings than the available fault current.",
    order: 43,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What is the difference between an OCPD's continuous current rating and its interrupting rating?",
    options: [
      "They are the same",
      "The continuous rating is the normal load current it can carry; the interrupting rating is the maximum fault current it can safely clear",
      "The interrupting rating is the load current; the continuous rating is the fault capacity",
      "Continuous rating applies only to fuses; interrupting rating applies only to breakers"
    ],
    correctIndex: 1,
    explanation: "Continuous current rating (e.g., 100A) is the maximum load current the device can carry indefinitely without tripping. Interrupting rating (e.g., 10,000A IC or kAIC) is the maximum fault current the device can safely clear without explosion. Both must be adequate for the installation.",
    order: 44,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "A GFCI device is designed to trip at approximately what ground fault current level?",
    options: [
      "1 mA",
      "5 mA",
      "30 mA",
      "100 mA"
    ],
    correctIndex: 1,
    explanation: "GFCI devices trip at approximately 4–6 mA (typically 5 mA) of ground fault current — fast enough to prevent ventricular fibrillation. Currents as low as 10 mA can cause the 'let-go' threshold (muscular paralysis); 100 mA can be fatal. The GFCI trips within 1/40th of a second when it detects this imbalance.",
    order: 45,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "Where does the CEC require AFCI (Arc Fault Circuit Interrupter) protection?",
    options: [
      "All circuits in industrial facilities",
      "Branch circuits supplying 125V 15A and 20A receptacles in dwelling units",
      "All outdoor circuits",
      "Three-phase circuits above 30A"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 26-710(e) requires AFCI protection on branch circuits supplying 15A and 20A 125V receptacles in dwelling units. AFCIs detect the distinctive electrical signature of arc faults — which can ignite fires without tripping a standard breaker — and open the circuit before ignition.",
    order: 46,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What is a Surge Protection Device (SPD) designed to protect against?",
    options: [
      "Sustained overcurrent on distribution feeders",
      "Transient overvoltages (spikes from lightning, switching events) that can damage equipment insulation and electronics",
      "Sustained ground faults on 600V systems",
      "Harmonic distortion from non-linear loads"
    ],
    correctIndex: 1,
    explanation: "SPDs clamp brief, high-amplitude voltage transients caused by lightning strikes, utility switching, or load switching, diverting transient energy to ground before it damages equipment insulation or electronics. They typically use MOVs (Metal Oxide Varistors) or TVS diodes as clamping elements.",
    order: 47,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What NEMA enclosure type is required for outdoor equipment exposed to rain, sleet, and external ice formation?",
    options: [
      "NEMA Type 1",
      "NEMA Type 3R",
      "NEMA Type 4",
      "NEMA Type 12"
    ],
    correctIndex: 2,
    explanation: "NEMA Type 4 enclosures are watertight — they protect against rain, splashing water, hose-directed water, and external ice. Type 3R protects against falling rain and sleet only — not hose-directed water. Type 4X adds corrosion resistance. Type 12 is indoor-use only.",
    order: 48,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What key advantage does an online (double-conversion) UPS have over an offline (standby) UPS?",
    options: [
      "Lower cost and simpler maintenance",
      "Zero transfer time on power failure — the load always runs from the inverter, providing complete isolation from utility power quality problems",
      "Better efficiency at full load",
      "Larger battery capacity"
    ],
    correctIndex: 1,
    explanation: "An online UPS continuously converts AC→DC→AC. The load always runs from the inverter with no transfer delay on power failure, and the load is completely isolated from utility harmonics, sags, surges, and frequency variations. An offline UPS passes utility power through and has a brief transfer delay (10–20 ms) on failure.",
    order: 49,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What is the purpose of a power factor correction capacitor bank at a main distribution board?",
    options: [
      "To reduce harmonics from non-linear loads",
      "To supply reactive power locally, reducing reactive current from the utility and improving power factor",
      "To increase available fault current for faster breaker operation",
      "To store energy for use during utility outages"
    ],
    correctIndex: 1,
    explanation: "Capacitor banks supply reactive power (VARs) locally to inductive loads, reducing the reactive current the utility must supply. This improves power factor, reduces utility demand charges, decreases I²R cable losses, and can increase system capacity. They do not reduce harmonics — harmonic filters are required for that.",
    order: 50,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What is the purpose of a Motor Control Centre (MCC)?",
    options: [
      "A dedicated enclosure for revenue metering equipment",
      "A centralised assembly of motor starters, disconnects, and controls that feed and control multiple motors from a single location",
      "A remote-control panel for operating motors from a distance only",
      "A transformer used exclusively for motor starting"
    ],
    correctIndex: 1,
    explanation: "An MCC is a factory-assembled, floor-mounted assembly containing motor starters (DOL, reduced voltage, VFD), branch circuit protection, disconnects, and control components for multiple motors. MCCs provide centralised control, simplified maintenance, and coordinated protection for large motor installations.",
    order: 51,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-transformers",
    topicLabel: "MWA B — Transformers",
    question: "A transformer has a turns ratio of 10:1 (primary:secondary). If the primary voltage is 600V, what is the secondary voltage?",
    options: [
      "6V",
      "60V",
      "600V",
      "6,000V"
    ],
    correctIndex: 1,
    explanation: "V₂ = V₁ / a = 600V / 10 = 60V. The turns ratio a = N₁/N₂ = V₁/V₂ = I₂/I₁. In a step-down transformer, current is inversely proportional: secondary current = primary current × 10 (ignoring losses).",
    order: 52,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-transformers",
    topicLabel: "MWA B — Transformers",
    question: "A 75 kVA, 600V/208V three-phase transformer is fully loaded. What is the approximate full-load secondary line current?",
    options: [
      "72A",
      "125A",
      "208A",
      "360A"
    ],
    correctIndex: 2,
    explanation: "I = S / (√3 × VL) = 75,000 / (1.732 × 208) = 75,000 / 360.3 ≈ 208A. The full-load primary current = 75,000 / (1.732 × 600) ≈ 72A. Secondary current is higher because secondary voltage is lower — consistent with the turns ratio.",
    order: 53,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-transformers",
    topicLabel: "MWA B — Transformers",
    question: "A 45 kVA, 600V/120-240V single-phase transformer is at full load. What is the approximate full-load secondary current at 240V?",
    options: [
      "75A",
      "125A",
      "187A",
      "375A"
    ],
    correctIndex: 2,
    explanation: "I₂ = S / V₂ = 45,000 / 240 = 187.5A ≈ 187A. For a single-phase transformer, I = S / V. The primary current = 45,000 / 600 = 75A. Secondary current is higher because secondary voltage is lower.",
    order: 54,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-transformers",
    topicLabel: "MWA B — Transformers",
    question: "What does voltage regulation (VR%) of a transformer express, and what does a low value indicate?",
    options: [
      "The ratio of primary to secondary voltage",
      "VR% = (V_NL − V_FL) / V_FL × 100% — a low value means secondary voltage stays nearly constant from no-load to full-load",
      "The transformer's efficiency at rated load",
      "The percentage of rated kVA available for continuous operation"
    ],
    correctIndex: 1,
    explanation: "Voltage regulation = (V_no-load − V_full-load) / V_full-load × 100%. A low VR% (2–4%) indicates stable secondary voltage and low internal impedance. High VR% (>10%) means significant voltage drop under load and higher fault current contribution from the transformer.",
    order: 55,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-transformers",
    topicLabel: "MWA B — Transformers",
    question: "What is K-factor in transformer specifications, and why is it important for non-linear loads?",
    options: [
      "A coefficient relating transformer kVA to physical weight",
      "A rating indicating the transformer's ability to handle harmonic currents — higher K-factor handles more distorted current without excessive heating",
      "The ratio of no-load losses to full-load losses",
      "A derating factor for elevated ambient temperatures"
    ],
    correctIndex: 1,
    explanation: "K-factor quantifies additional heating from harmonic currents produced by non-linear loads (VFDs, computers, LED drivers, UPS). A standard K-1 transformer is designed for linear loads. K-4, K-13, K-20 transformers have reinforced construction for increasing harmonic levels. Using a K-1 transformer on heavy non-linear loads causes premature failure.",
    order: 56,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-transformers",
    topicLabel: "MWA B — Transformers",
    question: "A single-phase transformer has 500 primary turns connected to 240V and 50 secondary turns. What are the secondary voltage and turns ratio?",
    options: [
      "24V, 10:1 step-down",
      "2400V, 1:10 step-up",
      "24V, 1:10",
      "240V, 1:1"
    ],
    correctIndex: 0,
    explanation: "Turns ratio a = N₁/N₂ = 500/50 = 10:1 (step-down). V₂ = V₁/a = 240/10 = 24V. This is a step-down transformer — secondary voltage is lower, secondary current is proportionally higher. Typical application: control power transformer (CPT) for 24V control circuits.",
    order: 57,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-transformers",
    topicLabel: "MWA B — Transformers",
    question: "What is the difference between a delta-wye and a wye-delta transformer connection, and when is each preferred?",
    options: [
      "They are identical — just different naming conventions",
      "Delta-wye steps up voltage and provides a neutral for grounding; wye-delta is used for HV transmission and does not provide a secondary neutral",
      "Delta-wye is for single-phase; wye-delta is for three-phase",
      "Delta-wye has lower impedance; wye-delta has higher impedance"
    ],
    correctIndex: 1,
    explanation: "A delta-wye transformer steps up voltage and provides a neutral on the secondary wye winding — used for distribution substations where a neutral is needed for single-phase loads and grounding. A wye-delta transformer does not provide a secondary neutral — used for HV transmission steps and motor drive applications where no secondary neutral is needed.",
    order: 58,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-transformers",
    topicLabel: "MWA B — Transformers",
    question: "Why must CEC transformer primary protection not exceed 125% of rated primary current (for transformers ≥ 9% impedance)?",
    options: [
      "To protect the transformer core from overheating at all times",
      "To protect the primary conductors and transformer from overcurrent while allowing transformer inrush current to pass without tripping",
      "To match the utility breaker rating at the service entrance",
      "To ensure the secondary breaker always trips before the primary OCPD"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 26-252 requires that primary OCPD not exceed 125% of rated primary current for transformers with ≥9% impedance. This protects the primary conductors and transformer from sustained overcurrent while allowing normal transformer energisation inrush (which can be 6–10× rated current for a few cycles) to pass without nuisance tripping.",
    order: 59,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-renewable",
    topicLabel: "MWA B — Renewable Energy",
    question: "What is anti-islanding protection in a grid-tied solar PV inverter and why is it mandatory?",
    options: [
      "A device that prevents the solar system from overcharging battery banks",
      "A feature that shuts down the inverter when utility power is lost, preventing back-energisation of de-energised distribution lines",
      "A lightning surge protection system for the solar array",
      "A thermal protection system that limits inverter output during high temperatures"
    ],
    correctIndex: 1,
    explanation: "Anti-islanding is mandatory on all grid-tied inverters. When the utility de-energises (outage, maintenance), the inverter must disconnect within a prescribed time. Without it, the solar system could continue to energise utility lines — creating a lethal hazard for utility workers on supposedly dead equipment.",
    order: 60,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-renewable",
    topicLabel: "MWA B — Renewable Energy",
    question: "What does a string inverter do differently from a micro-inverter in a solar PV system?",
    options: [
      "A string inverter converts DC from multiple panels in series to AC at one central location; a micro-inverter converts DC to AC at each individual panel",
      "A string inverter is for large utility-scale systems only; a micro-inverter is for residential only",
      "A string inverter generates AC; a micro-inverter generates DC",
      "They are identical — the terms are interchangeable"
    ],
    correctIndex: 0,
    explanation: "A string inverter receives the combined DC output of a series string and converts it to AC centrally. If one panel is shaded, the entire string output is reduced. Micro-inverters process each panel independently — maximising output when shading is present — but at higher unit cost.",
    order: 61,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-renewable",
    topicLabel: "MWA B — Renewable Energy",
    question: "What is the function of the charge controller in an off-grid solar battery storage system?",
    options: [
      "Converts DC battery power to AC for household loads",
      "Regulates charging current from the solar array to prevent overcharging and over-discharging of the battery bank",
      "Connects the off-grid system to the utility grid for emergency backup",
      "Measures and displays energy production and consumption"
    ],
    correctIndex: 1,
    explanation: "The charge controller sits between the solar array and the battery bank, regulating voltage and current to charge batteries efficiently without overcharging (gassing, damage) and preventing over-discharge (which reduces lifespan). MPPT charge controllers also maximise power harvest from the array.",
    order: 62,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-renewable",
    topicLabel: "MWA B — Renewable Energy",
    question: "The CEC limits residential rooftop solar PV systems to a maximum DC system voltage of:",
    options: [
      "120V DC",
      "600V DC",
      "1000V DC",
      "1500V DC"
    ],
    correctIndex: 1,
    explanation: "The CEC limits residential rooftop solar PV systems to a maximum of 600V DC for safety. Larger commercial and utility-scale systems may use 1000V or 1500V DC. The 600V limit aligns with the ratings of readily available residential-grade inverters, combiners, wiring methods, and disconnects.",
    order: 63,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-renewable",
    topicLabel: "MWA B — Renewable Energy",
    question: "How is a variable-frequency AC output from a wind turbine made compatible with the utility grid?",
    options: [
      "Directly — variable frequency AC is compatible with the utility grid",
      "Through a rectifier (AC→DC) followed by a grid-tied inverter (DC→fixed-frequency AC)",
      "Through a step-up transformer only",
      "Through a synchronous condenser that stabilises frequency"
    ],
    correctIndex: 1,
    explanation: "Wind turbines produce variable-frequency AC because rotor speed varies with wind speed. Full power conversion (AC→DC→AC) allows the turbine to operate at variable speed while delivering grid-synchronised, fixed-frequency 60 Hz power.",
    order: 64,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "Above what voltage does the CEC classify a system as 'high voltage'?",
    options: [
      "601V",
      "750V",
      "1000V",
      "5000V"
    ],
    correctIndex: 1,
    explanation: "The CEC defines high voltage as systems operating above 750V. CEC Section 36 rules apply above 750V. Common industrial HV distribution voltages include 4,160V, 13,800V, and 27,600V.",
    order: 65,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What is the purpose of stress relief terminations (stress cones) on medium-voltage cable terminations?",
    options: [
      "To provide physical support for the cable",
      "To redistribute the electric field concentration at the cut-back shielding, preventing corona discharge and insulation failure",
      "To colour-code the phases at MV terminations",
      "To provide moisture protection for the cable end"
    ],
    correctIndex: 1,
    explanation: "Where MV cable shielding is cut back, the electric field becomes highly concentrated at the cut edge, causing corona and eventual insulation breakdown. Stress cones gradually redistribute the field over a longer distance, eliminating the dangerous concentration and allowing reliable long-term operation.",
    order: 66,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What is 'touch potential' in the context of HV substation safety?",
    options: [
      "The voltage required to initiate an arc flash at HV",
      "The voltage difference between a grounded object a person touches and the ground beneath their feet during a fault",
      "The voltage rating of insulating gloves for HV work",
      "The potential difference across the air gap between HV conductors"
    ],
    correctIndex: 1,
    explanation: "Touch potential is the difference between a metallic object (substation fence, equipment frame) and the ground beneath a person's feet during a ground fault. Current from this difference flows hand-to-foot through the body and can be lethal. Substation ground grid design aims to keep touch potential within safe limits defined by IEEE 80.",
    order: 67,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What type of insulating medium is commonly used in medium-voltage distribution transformers to provide both insulation and cooling?",
    options: [
      "Air",
      "Mineral oil",
      "Dry (cast resin)",
      "SF₆ gas"
    ],
    correctIndex: 1,
    explanation: "Mineral oil provides excellent electrical insulation and absorbs heat from the core and windings, transferring it to the tank walls and radiators. Dry-type (cast resin) transformers are used indoors or in environmentally sensitive areas where oil spills are a concern. SF₆ is used in gas-insulated switchgear (GIS), not typically in distribution transformers.",
    order: 68,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What is a vacuum interrupter in a medium-voltage switchgear breaker?",
    options: [
      "A device that removes air from the breaker enclosure to reduce arc temperature",
      "A sealed chamber in which the arc formed during current interruption is extinguished in a high vacuum, preventing arc re-ignition",
      "A device that creates a vacuum to pull contacts apart faster",
      "A pressure relief valve on the breaker enclosure"
    ],
    correctIndex: 1,
    explanation: "In a vacuum circuit breaker, the contacts separate inside a hermetically sealed vacuum bottle. The vacuum (~10⁻⁶ to 10⁻⁸ Torr) has no gas molecules to sustain an arc — the arc extinguishes at the first current zero crossing and cannot re-ignite. Vacuum interrupters are reliable, low-maintenance, and widely used in MV switchgear from 1kV to 38kV.",
    order: 69,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What is a power fuse used for in a medium-voltage distribution system?",
    options: [
      "To provide metering for HV distribution feeders",
      "To protect MV distribution transformers, capacitor banks, and feeders from overcurrent and fault conditions",
      "To switch capacitor banks on and off for power factor correction",
      "To measure available fault current at MV distribution points"
    ],
    correctIndex: 1,
    explanation: "Power fuses (such as expulsion-type or current-limiting fuses) protect MV distribution transformers, feeder laterals, and capacitor banks from overcurrent and faults. They are single-shot devices that must be replaced after operation. Expulsion fuses extinguish the arc by venting hot gas; current-limiting fuses contain the arc in a sand-filled barrel to limit let-through energy.",
    order: 70,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What is the purpose of a potential transformer (PT or VT) in a high-voltage metering or protection system?",
    options: [
      "To step up LV control power to HV for protective relay operation",
      "To step down HV to a safe, standard secondary voltage (typically 120V) for metering instruments and protective relays",
      "To detect ground faults on ungrounded HV systems",
      "To convert three-phase HV to single-phase for revenue meters"
    ],
    correctIndex: 1,
    explanation: "A potential (voltage) transformer steps down high voltage to a standardised 120V (or 69V for line-to-neutral on wye systems) secondary — safe for metering instruments and protective relays to measure. The ratio allows the instrument to display actual system voltage by multiplying the secondary reading by the PT ratio.",
    order: 71,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What protection relay function (ANSI code 51) is commonly applied to medium-voltage feeder circuits?",
    options: [
      "Instantaneous overcurrent",
      "Time-overcurrent (inverse-time overcurrent)",
      "Differential protection",
      "Under-voltage relay"
    ],
    correctIndex: 1,
    explanation: "ANSI function 51 is the time-overcurrent relay — it trips after a time delay inversely proportional to the magnitude of the overcurrent (the greater the fault current, the shorter the trip time). This provides time-coordination with downstream devices: a closer fault (higher current) trips the nearest upstream relay faster, isolating the minimum amount of the system.",
    order: 72,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "Before racking a draw-out medium-voltage breaker into the connect position, what must first be verified?",
    options: [
      "That the breaker is in the open (OFF) position and the racking mechanism is properly engaged",
      "That the breaker is in the closed (ON) position to verify it is functional",
      "That all secondary control connectors are disconnected",
      "That the bus voltage has been confirmed at rated level"
    ],
    correctIndex: 0,
    explanation: "A draw-out breaker must always be in the OPEN (OFF) position before racking into the connect position. Racking a closed breaker into live bus bars creates an arc flash hazard and can cause catastrophic equipment damage. The racking mechanism and breaker open indicator must both be verified before any racking operation.",
    order: 73,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What is a recloser used for in a distribution system?",
    options: [
      "A device that manually resets after tripping — used only indoors",
      "An automatic circuit interrupter that recloses after a trip — used outdoors on feeders to restore service after temporary faults",
      "A type of current-limiting fuse used on MV laterals",
      "A device that disconnects the service when the utility is performing maintenance"
    ],
    correctIndex: 1,
    explanation: "A recloser is an automatic self-resetting protective device used on overhead MV distribution feeders. After tripping on a fault, it automatically recloses one or more times (typically 3 operations) to restore service if the fault was temporary (e.g., a tree branch momentarily contacting a conductor). If the fault persists, the recloser locks out, requiring manual intervention.",
    order: 74,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What is the minimum approach distance (MAD) concept in HV line work?",
    options: [
      "The minimum distance a vehicle must maintain from an HV line on a public road",
      "The minimum distance a qualified electrical worker must maintain from energised HV conductors to prevent flashover — determined by voltage and worker qualifications",
      "The minimum distance between two parallel HV conductors in a substation",
      "The minimum conduit burial depth under HV transmission lines"
    ],
    correctIndex: 1,
    explanation: "MAD (Minimum Approach Distance) is the closest distance a qualified worker can be to energised HV conductors without arc flash / flashover risk, determined by voltage level and atmospheric conditions. Workers must maintain MAD unless wearing appropriate insulating PPE rated for the voltage. MAD tables are published in OH&S regulations and IEEE 516.",
    order: 75,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What is the difference between an air-insulated switchgear (AIS) substation and a gas-insulated switchgear (GIS) substation?",
    options: [
      "AIS uses oil insulation; GIS uses air insulation",
      "AIS uses air as the insulating medium and requires large clearances; GIS uses SF₆ gas at pressure, allowing a much smaller footprint",
      "AIS is used below 15kV only; GIS is used above 15kV only",
      "AIS requires annual maintenance; GIS requires no maintenance"
    ],
    correctIndex: 1,
    explanation: "AIS substations use open-air clearances between conductors — requiring large physical space. GIS substations enclose all live parts in sealed stainless steel enclosures filled with SF₆ gas under pressure. SF₆ has dielectric strength approximately 3× that of air, allowing equipment to be packed into 1/10th the space of equivalent AIS equipment. GIS is preferred in space-constrained urban and offshore environments.",
    order: 76,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "A #12 AWG copper RW90 conductor has a base ampacity of 20A at 30°C ambient. It is bundled with 6 other current-carrying conductors. What is the derated ampacity?",
    options: [
      "10A",
      "14A",
      "16A",
      "18A"
    ],
    correctIndex: 1,
    explanation: "CEC Table 5C: bundling correction factor for 7–9 current-carrying conductors = 0.70. Derated ampacity = 20A × 0.70 = 14A. Bundling reduces heat dissipation, requiring derating to prevent insulation damage.",
    order: 77,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "What does the '90' in RW90 cable designation indicate?",
    options: [
      "The conductor is rated for 90A maximum",
      "The insulation is rated for a maximum conductor temperature of 90°C",
      "The cable has a 90% efficiency rating",
      "The cable is rated for 90V DC operation"
    ],
    correctIndex: 1,
    explanation: "In CEC cable designations, the number indicates maximum permitted conductor temperature. RW90 = Rubber insulation, Wet-location rated, 90°C maximum. Higher temperature ratings allow higher ampacity for a given conductor size, but the overall ampacity is limited by the lowest-rated component in the circuit.",
    order: 78,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "TECK90 cable is approved for which installation environments?",
    options: [
      "Indoor dry locations only",
      "Cable tray, direct burial, outdoor, and wet locations — it has a copper tape shield and PVC outer jacket",
      "Conduit only",
      "Dry indoor and conduit only, rated 90°C"
    ],
    correctIndex: 1,
    explanation: "TECK90 has XLPE-insulated conductors, a copper tape shield, and a PVC outer jacket. It is rated 90°C and approved for cable tray, conduit, direct burial, outdoor, and wet locations. The copper shield also serves as the equipment grounding conductor.",
    order: 79,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "Mineral Insulated (MI) cable is uniquely suited for which applications?",
    options: [
      "Low-voltage data and control applications only",
      "Fire-rated circuits, high-temperature applications, and hazardous locations — MI cable survives temperatures up to 250°C",
      "Only underground direct burial",
      "Only in conduit in dry locations"
    ],
    correctIndex: 1,
    explanation: "MI cable has conductors in compressed magnesium oxide insulation within a copper or stainless steel sheath. It withstands extremely high temperatures, survives fire for extended periods (required for fire alarm, emergency lighting, and fire pump circuits that must remain functional during a fire), and is impervious to moisture and corrosion.",
    order: 80,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "Calculate the voltage drop for a 240V single-phase 30A circuit with #8 AWG copper (R = 2.056 Ω/km) running 80 metres.",
    options: [
      "4.9V (2.1%)",
      "7.5V (3.1%)",
      "9.9V (4.1%)",
      "14.8V (6.2%)"
    ],
    correctIndex: 2,
    explanation: "VD = 2 × L × R × I / 1000 = 2 × 80 × 2.056 × 30 / 1000 = 9.87V ≈ 9.9V. VD% = 9.9/240 × 100% = 4.1%. This exceeds the CEC recommended 3% for branch circuits — #6 AWG should be considered.",
    order: 81,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "Calculate the voltage drop for a 600V three-phase 60A circuit with #4 AWG copper (R = 1.293 Ω/km) running 120 metres.",
    options: [
      "8.1V (1.3%)",
      "14.1V (2.4%)",
      "16.2V (2.7%)",
      "22.9V (3.8%)"
    ],
    correctIndex: 2,
    explanation: "VD (3φ) = √3 × L × R × I / 1000 = 1.732 × 120 × 1.293 × 60 / 1000 = 16.2V. VD% = 16.2/600 × 100% = 2.7%. Within the CEC recommended 3% — #4 AWG is acceptable for this run.",
    order: 82,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "What is the CEC recommended maximum voltage drop for a branch circuit per Rule 8-102?",
    options: [
      "1%",
      "3%",
      "5%",
      "8%"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 8-102 recommends a maximum 3% voltage drop for branch circuits and 5% total for feeder plus branch combined. These are recommendations, not mandatory rules in all cases, but are routinely applied by inspectors and engineers.",
    order: 83,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "A circuit supplies a 32A continuous load. What is the minimum circuit breaker size required?",
    options: [
      "32A",
      "35A",
      "40A",
      "50A"
    ],
    correctIndex: 2,
    explanation: "Continuous loads require a breaker rated at 125% of load current: 32 × 1.25 = 40A. A 40A breaker with conductors also sized at 125% minimum is required.",
    order: 84,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "NMD90 cable (Loomex) is approved for which locations?",
    options: [
      "Dry indoor locations only — concealed or exposed within walls, ceilings, and floors",
      "Wet locations, direct burial, and outdoor applications",
      "Industrial cable tray only",
      "Any location including damp basements and crawl spaces"
    ],
    correctIndex: 0,
    explanation: "NMD90 (Non-Metallic sheathed cable, Dry, 90°C) is approved for dry indoor locations only — in walls, ceilings, floors, exposed in dry areas. It must not be installed in wet, damp, or outdoor locations, in conduit, or where subject to physical damage without protection.",
    order: 85,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "What colour is used for the equipment grounding conductor in a multi-wire cable under the CEC?",
    options: [
      "White or grey",
      "Green or bare (uninsulated)",
      "Red",
      "Orange"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 4-036 requires equipment grounding conductors to be green, green with yellow stripe, or bare. White/grey are reserved for grounded (neutral) conductors. Orange identifies the high leg in a high-leg delta. Equipment grounding conductors must never be confused with current-carrying conductors.",
    order: 86,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "What is the maximum fill percentage for a raceway containing 3 or more conductors per the CEC?",
    options: [
      "31%",
      "40%",
      "53%",
      "60%"
    ],
    correctIndex: 1,
    explanation: "CEC Appendix B limits conduit fill to: 53% for 1 conductor, 31% for 2 conductors, 40% for 3 or more conductors. The reduced fill for multiple conductors accounts for irregular packing and heat generated when multiple current-carrying conductors share a raceway.",
    order: 87,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "What is the maximum total angular displacement permitted between two pull points in a conduit run?",
    options: [
      "180°",
      "270°",
      "360°",
      "450°"
    ],
    correctIndex: 2,
    explanation: "The CEC limits total bends between any two pull points to 360° (equivalent to four 90° bends). Beyond this, pulling tension becomes excessive, risking insulation damage and making installation impractical. Additional pull boxes must break up long, heavily-bent runs.",
    order: 88,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "What wire colour identifies a second ungrounded conductor in a single-phase 120/240V branch circuit?",
    options: [
      "Black",
      "White",
      "Red",
      "Blue"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 4-034: in a single-phase 120/240V system, the first ungrounded conductor is black, the second ungrounded conductor is red, and the grounded neutral is white or grey. In three-phase wye systems, the three phases are conventionally black, red, and blue.",
    order: 89,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "In a multi-wire branch circuit sharing a neutral, what special requirement applies to the overcurrent protective devices?",
    options: [
      "The neutral must be rated at 200% ampacity",
      "The breakers must be a multi-pole common-trip type or handle-tied so all ungrounded conductors open simultaneously",
      "The shared neutral must be bonded at each outlet",
      "A separate GFCI must protect every outlet"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 14-010(5) requires multi-wire branch circuits to use multi-pole or handle-tied breakers so all ungrounded conductors de-energize simultaneously. This is critical because if only one phase is opened and the neutral is disconnected for work, the remaining phase's return current would have no path, potentially shocking a worker or overloading the neutral.",
    order: 90,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-raceways",
    topicLabel: "MWA C — Raceways",
    question: "Electrical Metallic Tubing (EMT) may NOT be installed in which location?",
    options: [
      "Exposed in dry commercial locations",
      "Concealed in walls and ceilings",
      "Direct burial underground without protective sleeving",
      "Suspended from the structure with approved hangers"
    ],
    correctIndex: 2,
    explanation: "EMT is thin-wall steel and lacks the wall thickness and corrosion resistance for direct burial. It is widely used exposed or concealed in commercial buildings but must be protected from physical damage and corrosion. RMC or RNMC (PVC) is used for direct burial.",
    order: 91,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-raceways",
    topicLabel: "MWA C — Raceways",
    question: "What is the maximum permitted length for Flexible Metal Conduit (FMC) when used as an equipment connection?",
    options: [
      "0.9 m",
      "1.8 m",
      "3.0 m",
      "No maximum"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 12-1300 limits FMC to a maximum of 1.8 m (6 ft) for equipment connections (motors, luminaires, HVAC equipment). FMC provides vibration isolation and flexibility but is not approved for general wiring over long lengths.",
    order: 92,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-raceways",
    topicLabel: "MWA C — Raceways",
    question: "Why are expansion fittings installed in long PVC conduit runs?",
    options: [
      "To allow conduit to expand in diameter to accept additional conductors",
      "To accommodate thermal expansion and contraction of PVC, preventing conduit buckling or joint failure",
      "To provide a pull point for conductor installation",
      "To allow conduit to deflect during seismic events"
    ],
    correctIndex: 1,
    explanation: "PVC has a thermal expansion coefficient approximately 5× greater than steel. In long runs exposed to temperature variations, expansion couplings allow axial movement without stressing joints or pulling conduit off boxes. Installation intervals are determined by temperature range and conduit length.",
    order: 93,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-raceways",
    topicLabel: "MWA C — Raceways",
    question: "What is the minimum burial depth for Schedule 40 PVC conduit containing 120/240V residential service conductors?",
    options: [
      "300 mm (12 in)",
      "450 mm (18 in)",
      "600 mm (24 in)",
      "750 mm (30 in)"
    ],
    correctIndex: 2,
    explanation: "CEC Table 12-012 requires a minimum burial depth of 600 mm (24 in) for PVC conduit containing service conductors at 120/240V. Depths may be reduced under concrete slabs. Always verify with the AHJ for local amendments.",
    order: 94,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-raceways",
    topicLabel: "MWA C — Raceways",
    question: "When is FMC itself (without a separate EGC inside) permitted to serve as the equipment grounding path?",
    options: [
      "Always — FMC is always an acceptable grounding path",
      "When FMC is ¾\" or smaller trade size, circuit is 20A or less, and length does not exceed 1.8 m",
      "Only when supply is 600V or less with a grounded neutral",
      "Never — FMC always requires a separate green grounding conductor"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 10-814 permits FMC as the EGC path only when: trade size ≤ ¾\", circuit rating ≤ 20A, and length ≤ 1.8 m. Beyond these limits, a separate EGC inside the FMC is required because FMC's spiral construction provides a relatively high-impedance ground return path.",
    order: 95,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-raceways",
    topicLabel: "MWA C — Raceways",
    question: "Liquidtight Flexible Metal Conduit (LFMC) is required instead of standard FMC in which situation?",
    options: [
      "All locations where vibration isolation is needed",
      "Wet or damp locations, outdoor applications, or where exposed to liquids",
      "Hazardous locations as a replacement for explosionproof conduit",
      "High-temperature locations above 75°C"
    ],
    correctIndex: 1,
    explanation: "LFMC has a PVC or nylon jacket over the flexible metal core, making it liquidtight. It is required in wet, damp, or outdoor locations where FMC would allow moisture ingress. Common applications: outdoor HVAC connections, food processing equipment, wet industrial environments.",
    order: 96,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "Where does the CEC require GFCI protection on 125V 15A and 20A receptacles?",
    options: [
      "Only in bathrooms of residential buildings",
      "In bathrooms, garages, outdoors, crawl spaces, unfinished basements, kitchen countertops near sinks, and swimming pool areas",
      "Only on circuits exceeding 20A",
      "On all receptacles in buildings constructed after 2010"
    ],
    correctIndex: 1,
    explanation: "The CEC requires GFCI protection on 125V receptacles in all wet and damp locations. The scope expands with each code edition. GFCI protection is required because water dramatically increases electrocution risk — the 5 mA trip threshold is below the perception level for many individuals.",
    order: 97,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "A 240V electric baseboard heater rated at 3,600W is a continuous load. What is the minimum circuit breaker size?",
    options: [
      "15A",
      "20A",
      "25A",
      "30A"
    ],
    correctIndex: 1,
    explanation: "Load current = 3,600 / 240 = 15A. Continuous load breaker ≥ 125% × 15A = 18.75A. Next standard size at or above 18.75A is 20A. A 20A 240V double-pole breaker with #12 AWG copper conductors is the minimum.",
    order: 98,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What marking is required on a recessed luminaire that can be covered by thermal insulation?",
    options: [
      "UL Listed",
      "CSA Approved",
      "IC-Rated (Insulation Contact Rated)",
      "Wet Location Listed"
    ],
    correctIndex: 2,
    explanation: "IC-rated (Insulation Contact) luminaires are tested to allow thermal insulation to be placed directly in contact with the housing without creating a fire hazard. Non-IC-rated recessed fixtures must have at least 75 mm clearance from combustible materials.",
    order: 99,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is the primary energy management function of an occupancy sensor in a lighting control system?",
    options: [
      "To measure lux level and automatically dim to the required illuminance",
      "To automatically switch lights ON when occupants enter and OFF after a set delay when no motion is detected",
      "To prevent lights operating during daylight hours",
      "To protect luminaires from voltage surges"
    ],
    correctIndex: 1,
    explanation: "Occupancy sensors detect motion/presence and switch lights ON automatically when occupied, then OFF after a time delay (typically 5–30 min) when no motion is detected. PIR sensors detect heat from moving bodies; ultrasonic sensors detect motion-reflected sound; dual-technology sensors combine both for reliability.",
    order: 100,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "How long must emergency lighting remain illuminated during a power failure per the National Building Code?",
    options: [
      "30 minutes",
      "1 hour",
      "90 minutes",
      "8 hours"
    ],
    correctIndex: 0,
    explanation: "The NBC requires emergency lighting to remain illuminated for a minimum of 30 minutes during a power failure. Battery backup systems are tested with a full 90-minute discharge test annually per ULC S524 to confirm they can sustain the required duration.",
    order: 101,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is the difference between Class A and Class B emergency lighting wiring?",
    options: [
      "Class A uses AC; Class B uses DC from a central battery",
      "Class A is a loop where both wire ends return to the panel — a single break does not disable the circuit; Class B is a T-tap with one end terminated at the last device",
      "Class A is for self-contained battery units; Class B is for central battery systems",
      "Class A is for 120V circuits; Class B is for 347V circuits"
    ],
    correctIndex: 1,
    explanation: "Class A loops both conductors back to the supply panel — a single conductor break does not disable the circuit because the panel can still communicate through the other path. Class B is a home-run or T-tap — a single break from the panel to the last device disables everything beyond. Class A provides greater reliability for life-safety circuits.",
    order: 102,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "Airport runway lighting uses which type of circuit to maintain constant luminous intensity despite individual lamp failures?",
    options: [
      "Parallel circuit with individual circuit breakers per lamp",
      "Series constant current circuit powered by a Constant Current Regulator (CCR)",
      "Three-phase balanced circuit with one phase per lamp",
      "IT (isolated ground) circuit at 120V per lamp"
    ],
    correctIndex: 1,
    explanation: "Airport lighting systems use series circuits powered by a CCR at constant current (typically 6.6A). Each lamp in the loop uses a series isolation transformer — if a lamp fails open, the transformer secondary shorts and current continues around the loop uninterrupted. Intensity is adjusted by changing the loop current.",
    order: 103,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is DALI (Digital Addressable Lighting Interface) and what advantage does it offer over 0-10V analogue dimming?",
    options: [
      "DALI is a higher-voltage dimming system that provides more consistent light output",
      "DALI is a bidirectional digital protocol that allows individual addressing of each luminaire, status feedback, and scene programming from a central controller",
      "DALI carries both data and power to the luminaire, eliminating the separate power circuit",
      "DALI only works with fluorescent luminaires"
    ],
    correctIndex: 1,
    explanation: "DALI (IEC 62386) is bidirectional — unlike 0-10V which is one-directional and controls all luminaires on a circuit simultaneously. DALI allows each luminaire to have a unique address for individual dimming, switching, status queries (lamp failure, actual light level), and scene programming, enabling sophisticated energy-efficient lighting systems.",
    order: 104,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What thermostat wiring voltage is standard in conventional HVAC control circuits?",
    options: [
      "120V or 240V — connected directly to the power circuit",
      "24V AC, supplied by a step-down transformer in the HVAC unit",
      "5V DC — a low-voltage communication bus",
      "Wireless only — no wiring required"
    ],
    correctIndex: 1,
    explanation: "Conventional thermostat wiring uses Class 2 low-voltage wiring at 24V AC, supplied by a step-down transformer inside the HVAC unit. Individual wires control heat call, cool call, fan, reversing valve, emergency heat, and common. The 24V supply allows small-gauge conductors (typically 18–22 AWG) over long distances safely.",
    order: 105,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "A disconnect switch for a fixed electric space heater must be located:",
    options: [
      "At the electrical panel only",
      "Within sight of and accessible to the heater, or capable of being locked in the open position",
      "At least 3 metres from the heater to prevent heat damage",
      "At the nearest junction box regardless of sight line"
    ],
    correctIndex: 1,
    explanation: "The CEC requires the disconnect for fixed electric space heaters to be within sight of and accessible to the heater, or lockable in the open position if not within sight. 'Within sight' means visible from and within 15 m of the equipment.",
    order: 106,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is the purpose of electric heat tracing on a piping system?",
    options: [
      "Measures pipe temperature and sends data to the BMS",
      "Provides controlled electrical heating along pipes to prevent freezing or maintain a required process temperature",
      "Provides cathodic protection to prevent pipe corrosion",
      "Detects leaks by monitoring resistance changes"
    ],
    correctIndex: 1,
    explanation: "Electric heat tracing uses resistive or self-regulating cables installed along pipes to prevent freeze-up in unheated areas or maintain required process temperatures. Self-regulating heat trace cable automatically adjusts heat output based on ambient temperature, providing energy-efficient freeze protection.",
    order: 107,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is the function of a photocell (photoelectric control) on an outdoor luminaire?",
    options: [
      "Regulates operating voltage for improved efficiency",
      "Automatically switches the luminaire ON at dusk and OFF at dawn based on ambient light level",
      "Detects motion and turns on the luminaire when movement is detected",
      "Monitors energy consumption and reports to the BMS"
    ],
    correctIndex: 1,
    explanation: "A photocell contains a light-sensitive semiconductor that changes resistance with light level. When ambient light falls below threshold (dusk), the photocell triggers the luminaire ON; at dawn, it turns it OFF. This provides automatic dusk-to-dawn control without manual operation or time scheduling.",
    order: 108,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is the HVAC disconnect requirement regarding sight line and distance from the equipment?",
    options: [
      "Within sight and within 15 m of the equipment",
      "Exactly 1 m from the unit",
      "At the electrical panel only",
      "Within 3 m if in a lockable enclosure only"
    ],
    correctIndex: 0,
    explanation: "The CEC requires the disconnecting means for HVAC equipment to be within sight of and within 15 m of the equipment. The disconnect must be readily accessible and capable of being locked in the open position for LOTO purposes, allowing technicians to verify de-energization before working.",
    order: 109,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "A LED dimmer compatibility issue occurs because:",
    options: [
      "All dimmers are compatible with all LED products manufactured after 2015",
      "LED luminaires and drivers must be listed as compatible with the specific dimmer's protocol (TRIAC, ELV, 0-10V, DALI, PWM)",
      "The dimmer must match the lamp wattage exactly",
      "LED dimmers must be rated at 120V minimum"
    ],
    correctIndex: 1,
    explanation: "Different LED drivers respond to different dimming protocols. Using an incompatible dimmer causes flickering, humming, limited dimming range, or failure to turn on at low levels. Always verify the luminaire manufacturer's approved dimmer list before specifying a dimming control system.",
    order: 110,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is the purpose of a ballast in an HID (High Intensity Discharge) luminaire?",
    options: [
      "Converts AC to DC for the arc tube",
      "Provides the high starting voltage to ignite the arc and then limits current to stabilise the lamp during operation",
      "Regulates lamp colour temperature over its life",
      "Provides power factor correction for the building distribution system"
    ],
    correctIndex: 1,
    explanation: "HID lamps require a ballast to: (1) provide a high-voltage pulse to ionise the arc tube gas and start the arc, and (2) limit and stabilise the arc current once running. Without current limiting, the arc tube resistance drops as it heats up, causing runaway current that destroys the lamp.",
    order: 111,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "A five-wire 120/208V three-phase system has a dedicated isolated ground (IG) receptacle. What is the purpose of the isolated ground conductor?",
    options: [
      "To provide additional shock protection in wet locations",
      "To provide a low-noise, interference-free ground reference for sensitive electronic equipment by isolating the equipment ground from the building ground grid",
      "To satisfy NEC requirements for computer room wiring only",
      "To replace the equipment grounding conductor in medical facilities"
    ],
    correctIndex: 1,
    explanation: "An isolated ground (IG) conductor runs uninterrupted back to the main bonding jumper, bypassing all intermediate ground buses and conduit connections. This prevents ground loops and eliminates high-frequency electrical noise on the ground reference — critical for sensitive instrumentation, audio equipment, and computer systems where noise coupling on the ground conductor causes data errors or interference.",
    order: 112,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "Under the CEC, what is the maximum number of receptacles permitted on a 15A branch circuit in a commercial office?",
    options: [
      "6 receptacles",
      "8 receptacles",
      "12 receptacles",
      "No limit specified — based on calculated load"
    ],
    correctIndex: 3,
    explanation: "The CEC does not specify a maximum number of receptacles on a branch circuit by count. Instead, the circuit must be sized for the calculated load (CEC Rule 8-304 for offices: 1 A per receptacle, or per the connected load). Engineers and designers typically limit office branch circuits to 6–8 duplex receptacles per 15A circuit based on calculated load, but there is no CEC count limit.",
    order: 113,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is the purpose of a tamper-resistant (TR) receptacle?",
    options: [
      "To prevent unauthorised use of electrical outlets in commercial buildings",
      "To prevent children from inserting foreign objects into outlet slots by requiring simultaneous insertion into both slots to open the shutter",
      "To provide GFCI protection in addition to tamper resistance",
      "To prevent moisture ingress in damp locations"
    ],
    correctIndex: 1,
    explanation: "TR receptacles have internal spring-loaded shutters that only open when equal pressure is applied simultaneously to both slots — as when inserting a plug. Inserting a single object into one slot (as a child might) does not open the shutter. The CEC requires TR receptacles in areas accessible to young children, including all dwelling units in recent code editions.",
    order: 114,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is a dedicated circuit and when does the CEC require one?",
    options: [
      "Any circuit protected by a GFCI breaker",
      "A branch circuit serving only one piece of equipment or a single receptacle — required for large appliances, HVAC equipment, and other single dedicated loads",
      "A circuit with a separate neutral conductor for each hot conductor",
      "Any circuit installed in metallic conduit only"
    ],
    correctIndex: 1,
    explanation: "A dedicated circuit serves only one piece of equipment or load. The CEC requires dedicated circuits for: electric ranges, dryers, dishwashers, refrigerators, freezers, large HVAC equipment, EV chargers, and other loads that could overload a general-purpose circuit or require isolation for safety or performance reasons.",
    order: 115,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is the CEC load calculation for a commercial office using the demand factor method per Rule 8-304?",
    options: [
      "1,500 VA per receptacle with no demand factor",
      "180 VA per duplex receptacle at 100% for the first 10,000 VA, reduced demand factors for the remainder",
      "100% of all connected loads — no demand factor applies",
      "50 VA per receptacle with a 1.25 continuous load multiplier"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 8-304 uses 180 VA per duplex receptacle for offices. Demand factors from CEC Table 14 apply: typically 100% for the first 10,000 VA and reduced percentages for the remainder, reflecting the statistical reality that not all receptacles are simultaneously at full load. This prevents over-sizing distribution equipment while maintaining adequate capacity.",
    order: 116,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-hvac",
    topicLabel: "MWA C — HVAC Systems",
    question: "What is the purpose of a disconnect switch located within sight of an air-handling unit (AHU)?",
    options: [
      "To allow remote on/off control of the AHU from a BMS",
      "To allow service technicians to de-energise the unit locally and verify zero-energy state before performing maintenance",
      "To provide overcurrent protection for the AHU branch circuit",
      "To switch the AHU between normal and emergency power"
    ],
    correctIndex: 1,
    explanation: "The CEC requires a lockable disconnecting means within sight and within 15 m of HVAC equipment so service technicians can de-energise the unit locally and apply LOTO before working on it. Without a local disconnect, the technician would need to go to a remote panel and cannot visually verify the unit is de-energised from the work location.",
    order: 117,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-hvac",
    topicLabel: "MWA C — HVAC Systems",
    question: "An electric duct heater is installed in an HVAC air distribution system. What safety control is required to prevent overheating if airflow is lost?",
    options: [
      "A manual reset thermal cutout only",
      "An airflow proving switch (sail switch or differential pressure switch) that de-energises the heater if airflow drops below the required minimum",
      "A time-delay relay that shuts off the heater after 30 minutes of continuous operation",
      "A smoke detector in the duct downstream of the heater"
    ],
    correctIndex: 1,
    explanation: "An airflow proving switch (sail switch or differential pressure switch) monitors air velocity in the duct and de-energises the duct heater if airflow falls below the minimum required for safe heat dissipation. Without sufficient airflow, the heater element overheats, potentially igniting adjacent materials. The CEC and equipment standards require this safety interlock on all electric duct heaters.",
    order: 118,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-hvac",
    topicLabel: "MWA C — HVAC Systems",
    question: "What is the purpose of a heat pump's reversing valve?",
    options: [
      "To reverse the direction of the compressor motor",
      "To reverse the flow of refrigerant, switching the system between heating and cooling modes",
      "To reverse the airflow direction through the evaporator coil",
      "To reverse the phase sequence of the compressor supply to change motor rotation"
    ],
    correctIndex: 1,
    explanation: "A reversing valve (4-way valve) in a heat pump redirects refrigerant flow so the outdoor coil becomes the condenser in cooling mode and the evaporator in heating mode, and vice versa. This allows a single refrigeration system to provide both heating and cooling. The valve is controlled by the thermostat's heat/cool mode selection.",
    order: 119,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-hvac",
    topicLabel: "MWA C — HVAC Systems",
    question: "A three-phase 600V rooftop HVAC unit with a Minimum Circuit Ampacity (MCA) of 42A and a Maximum Overcurrent Protection Device (MOCP) of 50A requires what minimum conductor size and breaker?",
    options: [
      "#10 AWG conductors and a 40A breaker",
      "#8 AWG conductors (ampacity ≥ 42A) and a 50A breaker (≤ MOCP)",
      "#6 AWG conductors and a 60A breaker",
      "#12 AWG conductors and a 50A breaker"
    ],
    correctIndex: 1,
    explanation: "MCA defines the minimum conductor ampacity — conductors must be rated ≥ 42A, so #8 AWG copper (46A at 75°C) meets this. MOCP defines the maximum breaker size permitted — the breaker must be ≤ 50A. Installing a breaker larger than the MOCP voids the equipment listing and may allow a fault to go uncleared. These ratings come from the equipment nameplate and replace load calculations for HVAC equipment.",
    order: 120,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-heating",
    topicLabel: "MWA C — Electric Heating",
    question: "What is the purpose of a thermostat anticipator in a conventional bimetallic thermostat?",
    options: [
      "To anticipate future weather conditions and pre-heat the building",
      "To slightly reduce the setpoint temperature to prevent overshooting by warming the bimetallic element slightly before the room reaches setpoint",
      "To provide a time delay before the heating system starts",
      "To calibrate the thermostat for the specific heating system capacity"
    ],
    correctIndex: 1,
    explanation: "A heat anticipator is a small resistor in series with the thermostat's heating circuit. It generates a small amount of heat inside the thermostat enclosure, causing the bimetallic element to open slightly before the room actually reaches the setpoint — compensating for the thermal lag of the heating system and reducing temperature overshoot. The anticipator must be set to match the current draw of the heating control circuit.",
    order: 121,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-heating",
    topicLabel: "MWA C — Electric Heating",
    question: "A radiant in-floor electric heating system uses which type of element embedded in the floor?",
    options: [
      "Self-regulating heat trace cable",
      "Resistance heating cable (constant wattage) or mat installed under the floor finish",
      "Induction heating coils that heat the floor slab magnetically",
      "Infrared lamps positioned under the floor surface"
    ],
    correctIndex: 1,
    explanation: "In-floor electric radiant heating uses factory-assembled resistance heating cable or mat (with heating cable woven into a mesh) installed beneath tile, stone, or other floor finishes. The cable has a fixed resistance per unit length, producing constant heat output proportional to voltage squared divided by resistance. A floor-sensing thermostat controls operation.",
    order: 122,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-heating",
    topicLabel: "MWA C — Electric Heating",
    question: "What is self-regulating (self-limiting) heat trace cable and what is its key advantage?",
    options: [
      "Cable that shuts off automatically when it detects a water leak",
      "Cable whose resistance increases as temperature rises, automatically reducing heat output — it cannot overheat or burn out if cables overlap",
      "Cable with a built-in thermostat that switches it on and off based on ambient temperature",
      "Cable that generates exactly the same heat output regardless of ambient temperature"
    ],
    correctIndex: 1,
    explanation: "Self-regulating heat trace cable uses a conductive polymer core between two bus wires. As temperature rises, the polymer expands and the conductive pathways become fewer — increasing resistance and reducing current and heat output. As temperature drops, resistance decreases and heat output increases. This means the cable automatically adjusts output to ambient temperature and cannot overheat — even if cables cross or overlap.",
    order: 123,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-cathodic",
    topicLabel: "MWA C — Cathodic Protection",
    question: "Which type of cathodic protection system uses a sacrificial anode that is consumed over time?",
    options: [
      "Impressed Current Cathodic Protection (ICCP)",
      "Galvanic (sacrificial anode) cathodic protection",
      "Passive isolation cathodic protection",
      "Rectifier-based cathodic protection"
    ],
    correctIndex: 1,
    explanation: "Galvanic (sacrificial anode) cathodic protection uses a metal more electrochemically active than the protected structure (e.g., magnesium, zinc, or aluminum anodes on steel pipes). The anode corrodes preferentially — sacrificing itself — while the protected structure remains intact. No external power source is required. The anode must be periodically inspected and replaced when depleted.",
    order: 124,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is the minimum working space depth (in the direction of live parts) required in front of a 347/600V panelboard per the CEC?",
    options: [
      "0.6 m (2 ft)",
      "0.9 m (3 ft)",
      "1.0 m (3.3 ft)",
      "1.2 m (4 ft)"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 26-300 requires a minimum working space of 1.0 m in front of electrical equipment operating at 347/600V. This space must be kept clear at all times and must not be used for storage. Adequate working space is essential for safe operation, maintenance, and emergency access.",
    order: 125,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is the purpose of a pull box in a long conduit run?",
    options: [
      "To provide a tap point for additional branch circuits",
      "To break the conduit run into sections, reducing pulling tension and allowing conductors to be installed in manageable lengths",
      "To provide a junction for multiple conduit systems to connect",
      "To serve as a weatherproof enclosure for outdoor conductor splices"
    ],
    correctIndex: 1,
    explanation: "Pull boxes reduce the effective length and number of bends between conductor pull points, keeping pulling tension within acceptable limits. They also allow conductors to be pulled in sections rather than in one continuous run. CEC rules limit the total bends between pull points to 360° — pull boxes reset this count.",
    order: 126,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is the minimum size of a pull box (straight pull) for conduit entering from one wall and exiting the opposite wall?",
    options: [
      "8 times the largest conduit trade size",
      "Minimum box length = 8 × the largest conduit trade size entering the box",
      "48 times the conductor outside diameter",
      "No minimum — any box large enough to accommodate the conduit fittings"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 12-3040 requires that for straight pulls, the pull box minimum length (in the direction of pull) must equal at least 8 times the trade size of the largest conduit entering the box. For example, if the largest conduit is 3\", the minimum box dimension in the pull direction is 8 × 3\" = 24\" (610 mm). This ensures adequate space to make the pull without damaging conductors.",
    order: 127,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "When installing conductors in a vertical conduit run exceeding a certain length, conductors must be supported at intervals. What is the maximum support interval for #1/0 AWG copper conductors in a vertical raceway?",
    options: [
      "6 m",
      "15 m",
      "30 m",
      "60 m"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 12-108 requires conductors in vertical raceways to be supported to prevent them from sliding down under their own weight. For #1/0 AWG copper, the maximum interval between supports is 30 m. The support interval decreases for larger conductors (more weight per metre). Supports are typically installed at pull boxes or through sealing fittings.",
    order: 128,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is the purpose of a sealing fitting (Condulet EYS or equivalent) at a hazardous location boundary?",
    options: [
      "To provide a watertight connection between conduit sections in wet locations",
      "To prevent the passage of gases, vapours, or flames through the conduit between a hazardous and non-hazardous area",
      "To allow conduit to expand and contract without damaging the seal",
      "To provide access for conductor inspection without disassembling the conduit"
    ],
    correctIndex: 1,
    explanation: "Sealing fittings at hazardous location boundaries prevent flammable gases or vapours from migrating through the conduit from the hazardous area into non-hazardous areas (where they could ignite) and prevent flame propagation back through the conduit in the event of an internal explosion. They are filled with an approved sealing compound (e.g., Chico A) after conductor installation.",
    order: 129,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "In a Class I, Division 1 hazardous location, which wiring method is permitted?",
    options: [
      "NMD90 cable in cable tray",
      "EMT with standard compression fittings",
      "Threaded rigid metal conduit (RMC) with explosionproof fittings, or MI cable",
      "TECK90 cable without additional protection"
    ],
    correctIndex: 2,
    explanation: "Class I, Division 1 locations contain flammable gases or vapours under normal operating conditions. CEC Section 18 requires threaded rigid metal conduit (RMC) with listed explosionproof fittings, or MI cable, or other CEC-approved wiring methods for Class I, Division 1. The explosionproof enclosures contain any internal ignition and prevent flame propagation to the external hazardous atmosphere.",
    order: 130,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What does the term 'explosionproof' mean in the context of electrical equipment in hazardous locations?",
    options: [
      "The equipment is impervious to external explosions",
      "The enclosure contains any internal ignition and cools escaping gases enough that they cannot ignite the surrounding hazardous atmosphere",
      "The equipment will not produce a spark under any operating condition",
      "The equipment is hermetically sealed to prevent any gas from entering"
    ],
    correctIndex: 1,
    explanation: "'Explosionproof' does NOT mean the enclosure will withstand an external explosion. It means the enclosure is designed to: (1) contain an internal ignition without rupture, and (2) cool any gases escaping through joints and threads to below the ignition temperature of the surrounding hazardous atmosphere, preventing propagation of ignition to the outside. The enclosure allows gas in — but prevents ignition from getting out.",
    order: 131,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is the purpose of an isolation transformer in an operating room (OR) electrical system?",
    options: [
      "To step down voltage to 120V for medical equipment",
      "To create an ungrounded (isolated) power system that allows a single fault to ground without tripping the circuit, while a Line Isolation Monitor (LIM) detects the fault",
      "To provide UPS backup power for critical life-safety equipment",
      "To filter harmonics generated by medical imaging equipment"
    ],
    correctIndex: 1,
    explanation: "In OR isolated power systems (CEC Section 24), the isolation transformer creates a completely ungrounded secondary. A single fault to ground does not complete a circuit and therefore does not trip the breaker or shock a patient in contact with grounded surfaces. A Line Isolation Monitor (LIM) detects the first fault and alarms — alerting staff to find and correct it before a second fault causes a hazard.",
    order: 132,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is the minimum headroom required above the working space in front of electrical equipment rated above 600V?",
    options: [
      "1.8 m (6 ft) or the height of the equipment, whichever is greater",
      "2.0 m (6.5 ft) or the height of the equipment, whichever is greater",
      "2.3 m (7.5 ft) regardless of equipment height",
      "No headroom requirement — only depth and width matter"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 26-302 requires a minimum headroom of 2.0 m (or the equipment height if greater) above the working space in front of electrical equipment. This ensures workers can stand upright and work safely without the risk of contacting overhead hazards. Adequate headroom is verified during inspection.",
    order: 133,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is a wire nut (twist-on wire connector) torque limit, and what conductor combination is NOT permitted?",
    options: [
      "Wire nuts can connect any combination of conductors of any size",
      "Wire nuts have maximum and minimum conductor fill ratings per their listing; they cannot connect aluminum to copper conductors unless the connector is specifically listed for Al/Cu use",
      "Wire nuts are only approved for 14 AWG and 12 AWG copper connections",
      "Wire nuts are not approved by the CEC — crimp connectors are required"
    ],
    correctIndex: 1,
    explanation: "Wire connectors are listed for specific minimum and maximum conductor fill combinations — always check the manufacturer's chart. Critically, aluminum conductors must never be connected to copper conductors with a standard wire nut because galvanic corrosion at the contact surface increases resistance and causes overheating. Only connectors specifically listed for Al/Cu use (such as AlumiConn or Ideal In-Sure Al/Cu) may be used for this combination.",
    order: 134,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is the CEC requirement for identifying conductors at both ends in a large multi-conductor installation?",
    options: [
      "Conductors only need to be identified at the panelboard end",
      "All conductors must be legibly identified at each end and at each accessible location, using tags, sleeves, or printed labels",
      "Only conductors above #6 AWG require identification",
      "Colour coding alone satisfies all CEC identification requirements"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 4-030 requires all conductors to be identified at each end and at accessible intermediate points (pull boxes, junction boxes). Colour coding alone is not sufficient for complex multi-conductor installations — wire markers, heat-shrink labels, or printed tags must be used. Proper identification is critical for safe maintenance, troubleshooting, and future modifications.",
    order: 135,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is the minimum size equipment grounding conductor required for a branch circuit protected by a 60A overcurrent device (copper EGC)?",
    options: [
      "#14 AWG",
      "#12 AWG",
      "#10 AWG",
      "#8 AWG"
    ],
    correctIndex: 2,
    explanation: "CEC Table 16 specifies minimum EGC sizes based on the rating of the overcurrent device protecting the circuit. For a 60A OCPD, the minimum copper EGC is #10 AWG. The EGC must be sized to carry enough fault current to operate the OCPD quickly — an undersized EGC has too much impedance and may not allow sufficient fault current to flow.",
    order: 136,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-motors",
    topicLabel: "MWA D — Motors",
    question: "A three-phase induction motor nameplate shows: 600V, 60 Hz, 20 HP, FLA 19.0A, SF 1.15. What does the Service Factor (SF) of 1.15 indicate?",
    options: [
      "The motor can run at 115% of rated power continuously without damage",
      "The motor can operate at up to 115% of its nameplate horsepower for intermittent periods under specific conditions without exceeding its thermal limits",
      "The motor's efficiency is 115% under rated load",
      "The motor requires 15% more starting current than rated FLA"
    ],
    correctIndex: 1,
    explanation: "Service Factor (SF) indicates the permissible overload multiple above rated nameplate horsepower that the motor can sustain under rated voltage and frequency conditions, provided the additional temperature rise is acceptable. SF 1.15 means the motor can operate at 20 × 1.15 = 23 HP maximum without damage under ideal conditions. It is not intended for continuous operation at the SF load.",
    order: 137,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-motors",
    topicLabel: "MWA D — Motors",
    question: "A 4-pole, 60 Hz induction motor has a synchronous speed of 1,800 RPM and runs at 1,746 RPM at full load. What is the percent slip?",
    options: [
      "2.0%",
      "3.0%",
      "4.0%",
      "5.0%"
    ],
    correctIndex: 1,
    explanation: "Slip % = (Ns − Nr) / Ns × 100% = (1,800 − 1,746) / 1,800 × 100% = 54 / 1,800 × 100% = 3.0%. Slip is the difference between synchronous and actual rotor speed, expressed as a percentage of synchronous speed. Slip is what allows torque production — a motor running at exactly synchronous speed would produce zero torque.",
    order: 138,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-motors",
    topicLabel: "MWA D — Motors",
    question: "What is the synchronous speed of a 6-pole, 60 Hz three-phase induction motor?",
    options: [
      "900 RPM",
      "1,200 RPM",
      "1,800 RPM",
      "3,600 RPM"
    ],
    correctIndex: 1,
    explanation: "Ns = 120 × f / P = 120 × 60 / 6 = 1,200 RPM. Synchronous speed formula: Ns = 120f/P where f = frequency in Hz and P = number of poles. Common synchronous speeds: 2-pole = 3,600 RPM; 4-pole = 1,800 RPM; 6-pole = 1,200 RPM; 8-pole = 900 RPM.",
    order: 139,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-motors",
    topicLabel: "MWA D — Motors",
    question: "What is the difference between a squirrel cage induction motor and a wound rotor induction motor?",
    options: [
      "Squirrel cage motors run on DC; wound rotor motors run on AC",
      "Squirrel cage rotors have short-circuited bars; wound rotor motors have a three-phase winding connected to external resistors through slip rings — allowing speed and torque control",
      "Squirrel cage motors are single-phase; wound rotor motors are three-phase",
      "They are identical — just different names for the same design"
    ],
    correctIndex: 1,
    explanation: "A squirrel cage rotor has aluminium or copper bars short-circuited by end rings — simple, rugged, low maintenance. A wound rotor has a three-phase winding connected through slip rings to external resistance. Adding resistance in the rotor circuit increases starting torque while limiting starting current, and allows speed control (though at reduced efficiency). Wound rotor motors are used for high-inertia loads requiring controlled acceleration.",
    order: 140,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-motors",
    topicLabel: "MWA D — Motors",
    question: "A motor nameplate shows FLA = 24A at 600V three-phase. What is the approximate motor horsepower?",
    options: [
      "10 HP",
      "15 HP",
      "20 HP",
      "25 HP"
    ],
    correctIndex: 1,
    explanation: "P (kW) = √3 × V × I × PF × η / 1000. Assuming PF = 0.85, efficiency = 0.90: P = 1.732 × 600 × 24 × 0.85 × 0.90 / 1000 ≈ 19.1 kW ≈ 25.6 HP. With standard motor PF and efficiency assumptions, 24A at 600V three-phase is approximately a 15 HP motor. In practice, CEC Table 44 lists 15 HP three-phase 600V motors at approximately 18–21A FLA.",
    order: 141,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-motors",
    topicLabel: "MWA D — Motors",
    question: "What is a NEMA Design B motor and what are its characteristics?",
    options: [
      "High starting torque, low starting current — used for compressors and conveyors",
      "Normal starting torque, normal starting current, low slip — the most common general-purpose industrial motor",
      "High starting torque, high starting current — used for punch presses",
      "Low starting torque, high full-load slip — used for variable speed applications"
    ],
    correctIndex: 1,
    explanation: "NEMA Design B is the standard general-purpose squirrel cage motor: normal starting torque (150% FLT), normal starting current (600–700% FLA), low full-load slip (<5%). It is the most widely used motor design for pumps, fans, compressors, conveyors, and machine tools. Design A has slightly higher starting current; Design C has higher starting torque; Design D has very high starting torque and high slip.",
    order: 142,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-motors",
    topicLabel: "MWA D — Motors",
    question: "What causes a three-phase motor to experience single-phasing, and what is the consequence?",
    options: [
      "Operating at less than full load — causes the motor to run at reduced speed",
      "Loss of one of the three supply phases — the motor attempts to run on two phases, drawing excessive current in the remaining windings and overheating rapidly",
      "Running the motor at above rated voltage",
      "Connecting the motor in delta instead of wye"
    ],
    correctIndex: 1,
    explanation: "Single-phasing occurs when one of the three supply phases is lost (blown fuse, open contact, broken conductor). The motor attempts to continue running on two phases, but the current in the remaining two windings increases dramatically (up to 200–250% of FLA) to maintain torque. Without proper overload protection, the motor overheats and fails within minutes. This is one of the primary causes of motor burnout.",
    order: 143,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-motors",
    topicLabel: "MWA D — Motors",
    question: "What is the purpose of the motor's locked rotor current (LRC or LRA) specification?",
    options: [
      "The current the motor draws when disconnected from the supply",
      "The current drawn at the instant of starting before the rotor begins to turn — typically 600–700% of FLA — used to size motor circuit protective devices and evaluate voltage drop",
      "The maximum current the motor can draw continuously at full load",
      "The current drawn when the motor is operating with its shaft mechanically locked for testing"
    ],
    correctIndex: 1,
    explanation: "Locked Rotor Current (LRC) is the current drawn at the instant of starting when the rotor is stationary (speed = 0). At this moment, the motor has no back-EMF, so impedance is very low and current is very high — typically 600–700% of FLA for NEMA Design B motors. LRC is used to: (1) calculate voltage drop during starting, (2) size conductors and protective devices, and (3) evaluate the impact of motor starting on the supply system.",
    order: 144,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-starters",
    topicLabel: "MWA D — Motor Starters",
    question: "What is the purpose of the overload relay in a magnetic motor starter?",
    options: [
      "To protect the motor from short circuits",
      "To protect the motor from sustained overloads by monitoring current and tripping the starter if current exceeds the motor's thermal capacity",
      "To provide disconnect capability during maintenance",
      "To limit the motor's inrush current during starting"
    ],
    correctIndex: 1,
    explanation: "The overload relay monitors motor current and provides inverse-time-overcurrent protection tailored to the motor's thermal characteristics. Unlike a circuit breaker (which handles short circuits), the overload relay handles sustained overloads (110–600% FLA) that won't trip a breaker but will overheat and damage motor insulation over time. The overload relay must be set to the motor's FLA.",
    order: 145,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-starters",
    topicLabel: "MWA D — Motor Starters",
    question: "A motor has a nameplate FLA of 18A at 600V. What is the maximum overload relay setting permitted by the CEC for a standard motor?",
    options: [
      "18.0A (100% FLA)",
      "19.8A (110% FLA)",
      "23.4A (130% FLA)",
      "27.0A (150% FLA)"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 28-308 permits overload relays to be set at a maximum of 125% of FLA for motors with a service factor ≥ 1.15 or temperature rise ≤ 40°C, and 115% for all other motors. For this motor: 18A × 1.15 = 20.7A or 18A × 1.25 = 22.5A. However, the CEC Table 28 standard limit for most motors is 125% = 22.5A. The closest answer reflecting the 130% (which includes the branch circuit allowance) is 23.4A. In practice the overload relay is set at the FLA of the motor — 18A — with the overload relay sized to trip at 125% of that: 22.5A.",
    order: 146,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-starters",
    topicLabel: "MWA D — Motor Starters",
    question: "What is the maximum size of a non-time-delay fuse for branch circuit motor protection per the CEC?",
    options: [
      "125% of motor FLA",
      "150% of motor FLA",
      "300% of motor FLA",
      "400% of motor FLA"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 28-200 Table 29 allows non-time-delay (one-time) fuses for motor branch circuit protection to be rated at up to 300% of motor FLA. This allows the fuse to pass the high locked-rotor inrush current during starting without blowing, while still providing short circuit protection. Time-delay fuses (dual-element) may be rated at up to 175% of FLA because they have built-in delay for inrush.",
    order: 147,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-starters",
    topicLabel: "MWA D — Motor Starters",
    question: "What is the function of the holding coil in a magnetic motor starter?",
    options: [
      "To mechanically hold the motor shaft in position during braking",
      "To maintain the main contacts in the closed position when energised by the control circuit — opening when the control circuit is de-energised",
      "To generate a magnetic field that limits starting current",
      "To hold the overload relay contacts closed during starting inrush"
    ],
    correctIndex: 1,
    explanation: "The holding (operating) coil is an electromagnetic solenoid that, when energised by the control circuit (typically 120V or 24V AC), pulls in the armature and holds the main power contacts closed. When the coil is de-energised (by pressing STOP, overload trip, or control power loss), a spring opens the contacts. This 'fail-safe' design ensures the motor stops on any control power interruption.",
    order: 148,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-starters",
    topicLabel: "MWA D — Motor Starters",
    question: "In a three-wire control circuit, what is the purpose of the auxiliary (seal-in) contact on the motor starter?",
    options: [
      "To provide a backup power path in case the main contacts fail",
      "To maintain the holding coil energised after the momentary START button is released",
      "To trip the overload relay if motor current is too high",
      "To provide a visual indication that the motor is running"
    ],
    correctIndex: 1,
    explanation: "The auxiliary contact (wired in parallel with the START button) 'seals in' the control circuit — once the START button is momentarily pressed and the coil energises and closes, the auxiliary contact takes over, keeping the coil energised when the START button is released. The motor only stops when the STOP button (normally closed) breaks the circuit. This is the basis of the standard three-wire control circuit used in nearly all industrial motor controls.",
    order: 149,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-starters",
    topicLabel: "MWA D — Motor Starters",
    question: "A reduced voltage soft starter (RVSS) reduces motor starting current by:",
    options: [
      "Connecting a series resistance in the motor circuit that is short-circuited as the motor accelerates",
      "Controlling the firing angle of SCRs to gradually increase the voltage applied to the motor from zero to full voltage over the programmed ramp time",
      "Reducing the supply frequency during starting and ramping it up to 60 Hz",
      "Reducing the number of active phases from three to one during starting"
    ],
    correctIndex: 1,
    explanation: "A soft starter uses back-to-back SCRs (thyristors) in each phase to control the phase angle of the voltage waveform applied to the motor. By starting with a small firing angle (low voltage) and gradually increasing it over the ramp time, the motor voltage and current increase smoothly, reducing inrush current and mechanical shock. Soft starters reduce starting current to approximately 200–400% of FLA compared to 600–700% for direct-on-line starting.",
    order: 150,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-starters",
    topicLabel: "MWA D — Motor Starters",
    question: "What is the purpose of a star-delta (wye-delta) reduced voltage starter?",
    options: [
      "To provide a speed-control function for varying production rates",
      "To start the motor with windings connected in wye (lower voltage per winding), then switch to delta (full voltage) — reducing starting current to approximately 1/3 of direct-on-line",
      "To allow a single-phase motor to start on three-phase supply",
      "To reverse motor direction by switching the delta connection"
    ],
    correctIndex: 1,
    explanation: "In wye connection during starting, each winding receives VL/√3 (line voltage divided by √3) — reducing starting current to approximately 1/3 of direct-on-line. After acceleration, the starter switches to delta, applying full line voltage to each winding. Star-delta starters require motors with six accessible terminals (both ends of each winding). The transition creates a brief current transient as the motor transfers from wye to delta.",
    order: 151,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-drives",
    topicLabel: "MWA D — Variable Frequency Drives",
    question: "What are the three main stages of a Variable Frequency Drive (VFD)?",
    options: [
      "Transformer → reactor → inverter",
      "Rectifier (AC→DC) → DC bus (filter) → inverter (DC→variable AC)",
      "Converter → isolator → output filter",
      "Input breaker → SCR bank → output contactors"
    ],
    correctIndex: 1,
    explanation: "A VFD has three stages: (1) Rectifier — converts input AC to DC using diodes or SCRs; (2) DC Bus — filters and stores DC energy in capacitors and/or inductors; (3) Inverter — uses IGBTs (Insulated Gate Bipolar Transistors) switched by PWM (Pulse Width Modulation) to synthesise variable-frequency, variable-voltage AC output to control motor speed.",
    order: 152,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-drives",
    topicLabel: "MWA D — Variable Frequency Drives",
    question: "What is V/Hz (Volts-per-Hertz) control in a VFD and why is it important?",
    options: [
      "A method of adjusting the DC bus voltage to improve rectifier efficiency",
      "Maintaining a constant ratio of output voltage to output frequency to keep the motor's magnetic flux constant across the speed range, preventing saturation at low speed or flux weakening at high speed",
      "A protection feature that trips the VFD if the voltage-to-frequency ratio exceeds 1.0",
      "The ratio of input voltage to output frequency used for power factor correction"
    ],
    correctIndex: 1,
    explanation: "V/Hz (or V/f) control maintains a constant voltage-to-frequency ratio across the operating speed range. Reducing frequency without reducing voltage would over-flux the motor (core saturation, overheating). Reducing voltage proportionally to frequency keeps flux constant and maintains rated torque capability throughout the speed range. The V/Hz ratio is set based on the motor's rated voltage and frequency (e.g., 600V/60Hz = 10 V/Hz).",
    order: 153,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-drives",
    topicLabel: "MWA D — Variable Frequency Drives",
    question: "What is regenerative braking in a VFD application?",
    options: [
      "Using an external mechanical brake simultaneously with the VFD for emergency stopping",
      "The VFD decelerating the motor by converting kinetic energy from the spinning load back to electrical energy — either returned to the grid or dissipated in a braking resistor",
      "The motor being braked by reversing two of the three supply phases",
      "A braking method that uses DC injection into the motor windings to produce a braking torque"
    ],
    correctIndex: 1,
    explanation: "When a VFD decelerates a motor driving a high-inertia load, the load drives the motor as a generator. The VFD's inverter can return this regenerated energy back to the DC bus. In a standard VFD, this energy is dissipated in a braking resistor (dynamic braking). In a regenerative VFD (with an active front end), the energy is returned to the AC supply — improving system efficiency.",
    order: 154,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-drives",
    topicLabel: "MWA D — Variable Frequency Drives",
    question: "Why must VFD output conductors use a separate conduit from other circuits, or use shielded cable?",
    options: [
      "VFD output conductors carry DC and cannot share conduit with AC circuits",
      "The high-frequency PWM switching of VFD outputs induces electrical noise (EMI) into adjacent conductors, potentially causing control system malfunctions and interference",
      "VFD output conductors operate at higher voltage than rated — requiring physical separation for safety",
      "VFD output conductors must be larger gauge and require a separate conduit for physical reasons only"
    ],
    correctIndex: 1,
    explanation: "VFD output conductors carry high-frequency PWM switching signals that generate significant electromagnetic interference (EMI). This can couple into adjacent signal cables, control wiring, and communication cables — causing spurious signals, data errors, and malfunctions. VFD output cables should be run in separate conduit from other circuits, and shielded cable (with shield grounded at the drive end only) is recommended, especially for long cable runs.",
    order: 155,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-drives",
    topicLabel: "MWA D — Variable Frequency Drives",
    question: "What is the risk of 'long cable' syndrome on VFD installations?",
    options: [
      "Long cables increase resistance, reducing motor torque at full speed",
      "Voltage spikes caused by cable capacitance and PWM reflection can exceed the motor's insulation rating, causing premature winding failure",
      "Long cables reduce the effective output frequency of the VFD",
      "Cables exceeding 30 m require a larger VFD to compensate for resistance losses"
    ],
    correctIndex: 1,
    explanation: "When PWM pulses travel along long cable runs, reflected voltage waves at the motor terminals can create voltage spikes of 1.5–2× the DC bus voltage (up to 1,200V on a 600V drive). This exceeds the winding insulation rating of standard motors, causing premature insulation failure. Solutions include: inverter-duty motors (higher insulation class), output reactors or dV/dt filters at the drive output, or keeping cable runs short.",
    order: 156,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-drives",
    topicLabel: "MWA D — Variable Frequency Drives",
    question: "What is DC injection braking in a VFD?",
    options: [
      "Injecting DC current from a battery into the motor circuit to provide emergency stopping power",
      "Applying a DC voltage to the motor windings after the AC is removed, creating a stationary magnetic field that brakes the rotor to a stop",
      "Increasing the DC bus voltage to create additional braking torque",
      "Bypassing the inverter section and connecting the motor directly to the DC bus for braking"
    ],
    correctIndex: 1,
    explanation: "DC injection braking applies DC current directly to the motor stator windings after disconnecting or reducing the AC supply. The stationary magnetic field produced by the DC creates an opposing torque on the rotating rotor (like eddy current braking), quickly decelerating the motor to a stop. DC injection braking is effective for stopping loads quickly but generates significant heat in the rotor — it must be time-limited to prevent overheating.",
    order: 157,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "In a PLC ladder logic diagram, what does an XIC (Examine If Closed) instruction represent?",
    options: [
      "A normally open contact that is TRUE (passes logic) when the addressed bit is 1",
      "A normally closed contact that is TRUE when the addressed bit is 0",
      "An output coil that sets the addressed bit to 1 when the rung is TRUE",
      "A timer instruction that begins counting when the rung becomes TRUE"
    ],
    correctIndex: 0,
    explanation: "XIC (Examine If Closed) is equivalent to a normally open contact in relay logic. The instruction is TRUE (passes logic continuity) when the addressed bit or tag is in the '1' (ON) state. If the bit is '0' (OFF), the instruction is FALSE and blocks logic continuity. XIC is used to check that a condition or input is active before allowing an output to be energised.",
    order: 158,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "In a PLC ladder logic diagram, what does an XIO (Examine If Open) instruction represent?",
    options: [
      "A normally open contact that is TRUE when the addressed bit is 1",
      "A normally closed contact that is TRUE (passes logic) when the addressed bit is 0",
      "An output coil that clears the addressed bit to 0",
      "An input instruction that reads an analog signal"
    ],
    correctIndex: 1,
    explanation: "XIO (Examine If Open) is equivalent to a normally closed contact in relay logic. It is TRUE (passes logic) when the addressed bit is '0' (OFF) — the condition is NOT present. When the bit is '1' (ON), XIO is FALSE and blocks the rung. XIO is used to ensure a condition is NOT active (e.g., a safety interlock is not tripped) before allowing an output to energise.",
    order: 159,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is the difference between a PLC's discrete input and an analog input module?",
    options: [
      "Discrete inputs handle AC signals; analog inputs handle DC signals",
      "Discrete inputs handle ON/OFF (binary) signals from switches and sensors; analog inputs handle continuously variable signals (4–20 mA, 0–10V) from transducers",
      "Discrete inputs are for field devices; analog inputs are for operator panels only",
      "Discrete inputs sample faster than analog inputs"
    ],
    correctIndex: 1,
    explanation: "Discrete (digital) input modules receive ON/OFF signals from pushbuttons, limit switches, proximity sensors, and relay contacts — the bit is either 0 or 1. Analog input modules convert continuously variable process signals (temperature, pressure, flow, level via 4–20 mA or 0–10V transducers) to a digital value (typically 0–32767 counts) proportional to the measured variable, allowing the PLC to monitor and control process quantities.",
    order: 160,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is a SCADA system and how does it differ from a PLC?",
    options: [
      "SCADA is a type of PLC used exclusively for safety applications",
      "SCADA (Supervisory Control and Data Acquisition) is a higher-level system that collects data from and sends commands to multiple PLCs and RTUs across a wide area — providing centralised monitoring, data logging, and supervisory control",
      "SCADA replaces PLCs in modern facilities — PLCs are no longer used",
      "SCADA is the programming software used to write PLC ladder logic"
    ],
    correctIndex: 1,
    explanation: "A PLC executes real-time control logic at the local equipment level. SCADA operates at a higher supervisory level — it communicates with multiple PLCs, RTUs (Remote Terminal Units), and field devices across a facility or geographic area to: collect and log process data, display operator graphics (HMI), generate alarms, and send setpoint changes to local controllers. SCADA does not typically execute millisecond-level control — PLCs do that.",
    order: 161,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is the purpose of a safety relay or safety PLC in a machine control system?",
    options: [
      "To provide faster scan times than a standard PLC for high-speed machines",
      "To monitor safety devices (E-stops, light curtains, safety gates) and ensure the machine reaches a safe state on demand — certified to perform safety functions to a defined safety integrity level (SIL or PLr)",
      "To replace the main PLC when processing safety-critical analog signals",
      "To provide redundant communication paths for SCADA systems"
    ],
    correctIndex: 1,
    explanation: "Safety relays and safety PLCs (certified to IEC 62061 / ISO 13849) are specifically designed and certified to implement machine safety functions — emergency stop, guard monitoring, two-hand control, etc. They use redundant internal circuits, self-monitoring, and defined diagnostic coverage to achieve a specific Safety Integrity Level (SIL) or Performance Level (PLr). Standard PLCs are not certified for safety functions.",
    order: 162,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is the purpose of a contactor versus a relay in a motor control circuit?",
    options: [
      "Contactors and relays are identical — just different names by manufacturer",
      "Contactors are designed for high-current motor load switching with arc suppression; relays are for low-current control circuit switching",
      "Relays switch power circuits; contactors switch control circuits",
      "Contactors are used on DC circuits; relays are used on AC circuits"
    ],
    correctIndex: 1,
    explanation: "Contactors are rated for repetitive switching of high motor currents — they have arc chutes or magnetic arc blow-out to suppress the arc when contacts open under load, and are rated in AC-3 (squirrel cage motor) or AC-4 (plugging/jogging) duty classes. Control relays are designed for low-current logic and control circuits. Using a control relay to switch motor current causes rapid contact wear and failure.",
    order: 163,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is interlocking in a motor control circuit, and give a common example?",
    options: [
      "Connecting two motors in series so they run at the same speed",
      "Using electrical or mechanical means to prevent two incompatible conditions from occurring simultaneously — for example, preventing a forward and reverse contactor from both energising at the same time",
      "A method of synchronising PLC scan time with motor rotation speed",
      "Using the motor's back-EMF to interlock with the supply voltage"
    ],
    correctIndex: 1,
    explanation: "Interlocking prevents mutually exclusive or hazardous conditions from occurring simultaneously. The most common example is the forward-reverse interlock: the forward contactor's normally-closed auxiliary contact is wired in series with the reverse contactor's coil circuit, and vice versa. If forward is energised, its NC contact opens the reverse coil circuit — physically preventing both from energising simultaneously, which would cause a phase-to-phase short circuit.",
    order: 164,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is a two-wire control circuit and how does it differ from a three-wire control circuit?",
    options: [
      "Two-wire uses a maintained contact (like a float switch or thermostat) — the motor automatically restarts after a power failure; three-wire uses momentary START/STOP buttons with a seal-in contact — the motor does NOT restart automatically",
      "Two-wire circuits are for single-phase motors; three-wire circuits are for three-phase motors",
      "Two-wire circuits use AC control voltage; three-wire circuits use DC control voltage",
      "Two-wire circuits have no overload protection; three-wire circuits include overload relay contacts"
    ],
    correctIndex: 0,
    explanation: "A two-wire control circuit uses a maintained contact device (thermostat, pressure switch, float switch, selector switch). If power is lost and restored, the maintained contact is still closed, so the motor automatically restarts — potential hazard if unexpected. A three-wire circuit uses momentary START (NO) and STOP (NC) buttons with a seal-in auxiliary contact. On power restoration, the seal-in contact is open, so the motor does NOT restart automatically — the operator must press START again.",
    order: 165,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is the function of a control power transformer (CPT) in a motor control circuit?",
    options: [
      "To step up motor voltage for the starting period only",
      "To step down the motor supply voltage (e.g., 600V or 480V) to a safe, lower control voltage (typically 120V AC) for operating coils, pilot lights, and control devices",
      "To provide galvanic isolation between the motor and the PLC processor",
      "To convert three-phase supply to single-phase for the control circuit"
    ],
    correctIndex: 1,
    explanation: "A CPT steps down the higher motor supply voltage to a safe, standard control voltage (typically 120V AC in Canada) for operating contactor coils, solenoid valves, pilot lights, and interfacing with PLCs and other control devices. This limits the hazard from faults in the control circuit wiring — a 120V shock is far less hazardous than 600V, and control wiring damage to 120V is less dangerous than a fault to 600V.",
    order: 166,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is bump testing a motor and when should it be performed?",
    options: [
      "Applying a short burst of current to check if the motor coils are intact before installation",
      "A brief momentary energisation to verify correct motor rotation direction before coupling the load — preventing damage from reverse rotation",
      "Testing the motor's acceleration time by applying full voltage briefly",
      "Checking the motor frame for physical damage by vibrating it with a rubber mallet"
    ],
    correctIndex: 1,
    explanation: "Bump testing involves briefly energising the motor (just long enough to see shaft rotation — a fraction of a second) to verify rotation direction before coupling the motor to its load. If the motor runs backward and is coupled to a pump, fan, or conveyor, significant equipment damage can result. A bump test allows rotation correction (swapping any two phases) before the load is connected.",
    order: 167,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is the purpose of a power factor correction capacitor switched in parallel with a motor?",
    options: [
      "To reduce the motor's operating current by limiting torque",
      "To supply reactive power locally that the motor requires, reducing reactive current flowing from the supply and improving the system power factor",
      "To provide starting torque for single-phase motors",
      "To filter harmonics generated by the motor's magnetic circuit"
    ],
    correctIndex: 1,
    explanation: "Induction motors draw lagging reactive current (VARs) to establish their magnetic field. A capacitor bank switched in parallel with the motor supplies these VARs locally, reducing the reactive component of current drawn from the supply. This improves power factor, reduces I²R losses in supply cables, and can reduce utility demand charges. Capacitors must be switched off with the motor — they must not remain energised when the motor is off.",
    order: 168,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is a phase failure relay and what does it protect against?",
    options: [
      "A relay that trips when the motor runs at above synchronous speed",
      "A protective relay that monitors all three supply phases and trips the motor circuit if any phase is lost, reversed, or severely unbalanced",
      "A relay that prevents the motor from starting until all three phases are within 5% of rated voltage",
      "A relay that monitors motor current and trips on overcurrent"
    ],
    correctIndex: 1,
    explanation: "A phase failure (phase loss) relay continuously monitors the three supply voltages for: phase loss (open phase), phase reversal (incorrect phase sequence), and phase unbalance (voltage imbalance between phases). If any fault is detected, the relay trips the motor contactor before the motor can be damaged. Phase failure relays are critical protection for expensive motors in remote or unattended applications.",
    order: 169,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What does a motor's insulation class indicate (Class B, F, H)?",
    options: [
      "The class of protective enclosure (IP rating) for the motor housing",
      "The maximum allowable winding temperature rise (above a 40°C ambient) that the insulation can withstand continuously without failing",
      "The motor's efficiency classification under the IE standard",
      "The motor's duty cycle rating (continuous, intermittent, or short-time)"
    ],
    correctIndex: 1,
    explanation: "Insulation class indicates the maximum temperature rise the winding insulation can sustain: Class B = 80°C rise (max 120°C total), Class F = 105°C rise (max 145°C total), Class H = 125°C rise (max 165°C total). Modern motors typically use Class F or H insulation but are designed to run at Class B temperatures — providing a thermal margin for long insulation life. Exceeding the insulation class temperature reduces insulation life exponentially (Arrhenius law: every 10°C above rated halves insulation life).",
    order: 170,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is the purpose of an enclosure (TEFC, ODP) designation on a motor?",
    options: [
      "To identify the motor's voltage rating (T = three-phase, E = enclosed)",
      "To describe the motor housing design — TEFC (Totally Enclosed Fan Cooled) prevents external air from entering; ODP (Open Drip Proof) has ventilation openings for cooling but restricts dripping liquid",
      "To indicate the motor's efficiency class under the NEMA Premium standard",
      "To specify the motor's mounting configuration (foot, flange, face)"
    ],
    correctIndex: 1,
    explanation: "Motor enclosure designations describe environmental protection: ODP (Open Drip Proof) has ventilation openings positioned to prevent dripping liquid from entering — suitable for clean, indoor, non-hazardous locations. TEFC (Totally Enclosed Fan Cooled) uses an external fan to blow air over the sealed enclosure — no internal ventilation opening, suitable for outdoor, dusty, damp, or corrosive environments. WP (Weather Protected) and TENV (Totally Enclosed Non Ventilated) are other common types.",
    order: 171,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What does 'jogging' (inching) a motor mean in a control system, and why does it require special consideration?",
    options: [
      "Running the motor at half speed for a period of time to allow a gradual warm-up",
      "Briefly energising the motor for short periods to position a load precisely — requires a jog circuit that bypasses the seal-in contact so the motor stops immediately when the JOG button is released",
      "Starting and stopping the motor rapidly in sequence to check all control logic",
      "Connecting the motor in star for a short period before switching to delta"
    ],
    correctIndex: 1,
    explanation: "Jogging (inching) briefly energises the motor for precise load positioning. A jog circuit must bypass the seal-in (auxiliary) contact — otherwise pressing JOG energises the coil and the seal-in locks it on, turning a momentary jog into a run command. In jog circuits, the JOG button directly energises the coil without the auxiliary contact, so the motor runs only while the button is held and stops immediately when released. Frequent jogging generates significant heat — motor thermal capacity must be considered.",
    order: 172,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What is the difference between a Class A and Class B fire alarm wiring configuration?",
    options: [
      "Class A uses AC wiring; Class B uses DC wiring",
      "Class A is a loop — both wire ends return to the panel, so a single break does not disable the circuit; Class B is a T-tap with one wire end terminated at the last device",
      "Class A is for initiating devices; Class B is for notification devices",
      "Class A supports addressable devices; Class B supports conventional devices only"
    ],
    correctIndex: 1,
    explanation: "Class A (Style D or E) fire alarm wiring returns both conductors to the control panel. A single conductor break does not disable the circuit — the panel communicates through the other path. Class B (Style B) is a simple two-wire circuit that terminates at the last device with an End-of-Line (EOL) resistor. A single break from the panel to the last device disables all devices beyond the break. Class A provides greater reliability for life-safety circuits.",
    order: 173,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What is the purpose of an End-of-Line (EOL) resistor in a Class B fire alarm initiating device circuit?",
    options: [
      "To terminate RF interference on the circuit",
      "To allow the fire alarm panel to detect the difference between a normal circuit, a short circuit (alarm), and an open circuit (trouble) by monitoring the circuit current",
      "To limit current flow and protect the devices on the circuit",
      "To provide surge protection for the last device on the circuit"
    ],
    correctIndex: 1,
    explanation: "The EOL resistor allows the FACP to supervise the circuit. Under normal conditions, a small supervisory current flows through all devices and the EOL resistor — the panel reads a specific resistance. A short circuit (alarm condition for Class B) causes a current increase. An open circuit (wire break or disconnected device) causes current to drop to zero — a 'trouble' condition. The three current levels allow the panel to distinguish alarm from trouble.",
    order: 174,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What is an addressable fire alarm system and what advantage does it have over a conventional system?",
    options: [
      "An addressable system uses wireless sensors; a conventional system uses wired sensors",
      "In an addressable system, each device has a unique address — the panel identifies the exact device in alarm or trouble; in a conventional system, the panel only knows which zone (circuit) is activated",
      "An addressable system requires separate wiring for each device; a conventional system uses shared wiring",
      "Addressable systems are for high-rise buildings only; conventional systems are for small buildings"
    ],
    correctIndex: 1,
    explanation: "In an addressable fire alarm system, each initiating and notification device has a unique address that is communicated to the FACP over a two-wire SLC (Signalling Line Circuit). When a device activates, the panel displays the exact device address and location — enabling first responders to go directly to the source. Conventional systems only indicate which zone (typically a floor or section) has activated — requiring manual search for the specific device.",
    order: 175,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What type of fire detector is best suited for detecting a slow, smouldering fire that produces large quantities of smoke before flames develop?",
    options: [
      "Rate-of-rise heat detector",
      "Fixed-temperature heat detector",
      "Photoelectric (light-scattering) smoke detector",
      "Ionisation smoke detector"
    ],
    correctIndex: 2,
    explanation: "Photoelectric smoke detectors use a light source and a photosensor in a chamber. Smoke particles from a slow smouldering fire scatter light into the photosensor, triggering the alarm. They are highly effective for slow, smouldering fires that produce large, visible smoke particles. Ionisation detectors respond faster to fast-flaming fires with small invisible combustion particles. Rate-of-rise and fixed-temperature detectors respond to heat, not smoke.",
    order: 176,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What wiring method is required for fire alarm circuits to ensure they remain functional during a fire?",
    options: [
      "NMD90 cable, which has adequate heat resistance for most fires",
      "Fire-rated cables (MI cable, FT6 or CI rated cables) or cables installed in conduit with a fire-resistance rating that meets the system's operational period requirement",
      "Standard TECK90 cable — its PVC jacket provides adequate fire resistance",
      "Any CSA-approved cable — fire alarm cables have no special requirements"
    ],
    correctIndex: 1,
    explanation: "Fire alarm system wiring must remain functional during a fire for the duration required by the fire protection system operation. CAN/ULC S524 and NBC require fire alarm circuits to use circuit integrity (CI) rated cable (maintains function in fire for a specified period), MI cable, or cables installed in conduit with a fire resistance rating — ensuring the system can operate evacuation signals and suppress fire during an actual emergency.",
    order: 177,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What is the purpose of a fire alarm annunciator panel?",
    options: [
      "To test the fire alarm system without triggering a real alarm",
      "To provide a remote display showing the status, zone information, and alarm/trouble conditions of the main FACP — typically located near the building entrance for first responders",
      "To provide manual control of suppression systems",
      "To monitor elevator recall and door release functions only"
    ],
    correctIndex: 1,
    explanation: "An annunciator panel is a remote display that duplicates alarm and trouble information from the main FACP. It is typically located at the main building entrance, fire command station, or security desk — allowing fire department personnel to quickly identify the location of an alarm without going to the FACP. The annunciator shows zone status, alarm type, and often a floor/area map.",
    order: 178,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What is the purpose of a duct smoke detector installed in an HVAC air handling unit?",
    options: [
      "To detect a fire in the AHU motor compartment",
      "To detect smoke in the HVAC ductwork and shut down the AHU, preventing smoke from being distributed throughout the building",
      "To detect combustible gas leaks in the mechanical room",
      "To monitor CO levels in the return air stream"
    ],
    correctIndex: 1,
    explanation: "Duct smoke detectors sample air from the HVAC ductwork. If smoke is detected, the detector sends a signal to the FACP, which initiates AHU shutdown — preventing smoke from being distributed throughout the building via the air distribution system. The detector does not replace room detectors — it supplements them by addressing the specific hazard of smoke spreading through ductwork.",
    order: 179,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-security",
    topicLabel: "MWA E — Security Systems",
    question: "What is the difference between a passive infrared (PIR) and a dual-technology motion detector?",
    options: [
      "PIR detectors require a power supply; dual-technology detectors are battery operated",
      "A PIR detects changes in infrared radiation (body heat movement); a dual-technology detector combines PIR with microwave — both must activate simultaneously to trigger an alarm, dramatically reducing false alarms",
      "PIR detectors are for outdoor use; dual-technology detectors are for indoor use only",
      "PIR detectors detect motion in all directions; dual-technology detectors detect motion in one direction only"
    ],
    correctIndex: 1,
    explanation: "A PIR detector senses changes in infrared radiation — heat from a moving person. It can false-alarm from temperature changes (HVAC, sunlight). A dual-technology detector requires BOTH PIR (heat movement) AND microwave (Doppler motion) to trigger simultaneously. This dramatically reduces false alarms because both technologies must independently detect the same moving object, while a real intruder triggers both sensors reliably.",
    order: 180,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-security",
    topicLabel: "MWA E — Security Systems",
    question: "What is supervised wiring in a security alarm system?",
    options: [
      "Wiring that is monitored by CCTV cameras for tampering",
      "Wiring in which a small supervisory current is continuously monitored — a wire break (open) or short circuit is detected as a fault, triggering a tamper alarm",
      "Wiring that uses conduit for physical protection",
      "Wiring that has been inspected and approved by the AHJ"
    ],
    correctIndex: 1,
    explanation: "Supervised security circuits use a continuous small current monitored by the alarm panel. A break in the wire (open circuit) causes current to drop — detected as a fault/tamper. A short circuit (someone bridging the conductors to defeat a sensor) causes current to increase — also detected as a fault. This ensures that tampering with the wiring is detected, not just activation of the sensor.",
    order: 181,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-vdv",
    topicLabel: "MWA E — VDV and Communication Systems",
    question: "What is the maximum cable segment length for horizontal Cat 6A structured cabling in a commercial building?",
    options: [
      "50 m",
      "90 m",
      "100 m",
      "150 m"
    ],
    correctIndex: 1,
    explanation: "TIA-568 and ISO/IEC 11801 standards limit horizontal cabling to 90 m from the telecommunications room (TR) patch panel to the work area outlet. The remaining 10 m is allocated for equipment cords and patch cords at both ends, for a total channel length of 100 m. Cat 6A supports 10 Gigabit Ethernet (10GBase-T) at the full 100 m channel length.",
    order: 182,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-vdv",
    topicLabel: "MWA E — VDV and Communication Systems",
    question: "What is the difference between Cat 6 and Cat 6A structured cabling?",
    options: [
      "Cat 6 is for copper; Cat 6A is for fibre optic cabling",
      "Cat 6 supports 1 Gbps at 100 m; Cat 6A supports 10 Gbps at 100 m with improved alien crosstalk performance",
      "Cat 6A has a smaller outside diameter for easier installation",
      "Cat 6 is the current standard; Cat 6A is discontinued"
    ],
    correctIndex: 1,
    explanation: "Cat 6 supports 1 Gbps (1000Base-T) at 100 m and 10 Gbps (10GBase-T) only to 55 m. Cat 6A (Augmented Category 6) supports 10 Gbps at the full 100 m horizontal channel length, with tighter electrical specifications and improved alien crosstalk (ANEXT) performance. Cat 6A cables are larger diameter and require more space, but are now the standard for new commercial structured cabling installations.",
    order: 183,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-vdv",
    topicLabel: "MWA E — VDV and Communication Systems",
    question: "What is Power over Ethernet (PoE) and what is its maximum power output per port for PoE++ (802.3bt Type 4)?",
    options: [
      "PoE delivers data and 15.4W of power over Cat 5e or better cable — sufficient for IP phones",
      "PoE delivers data and power simultaneously over structured cabling — PoE++ (802.3bt Type 4) delivers up to 90W per port, supporting devices like pan-tilt-zoom cameras, access control readers, and thin clients",
      "PoE is a wireless power delivery standard using the 802.11 WiFi protocol",
      "PoE delivers up to 30W per port — the maximum for all PoE standards"
    ],
    correctIndex: 1,
    explanation: "PoE standards: 802.3af (PoE) = 15.4W; 802.3at (PoE+) = 30W; 802.3bt Type 3 (PoE++) = 60W; 802.3bt Type 4 (PoE++) = 90W. PoE++ Type 4 uses all four pairs in the cable for power delivery and requires Cat 5e or better. It supports power-hungry devices including LED luminaires, PTZ cameras, digital signage, and access control systems — eliminating the need for separate power wiring to remote devices.",
    order: 184,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-vdv",
    topicLabel: "MWA E — VDV and Communication Systems",
    question: "What is a fibre optic splice and when is a fusion splice preferred over a mechanical splice?",
    options: [
      "Both splice types have identical optical performance — the choice is based only on cost",
      "A fusion splice permanently welds two fibres with an electric arc — achieving very low loss (< 0.05 dB) and is preferred for permanent backbone installations; a mechanical splice uses index-matching gel and achieves higher loss (0.1–0.5 dB) but is faster for temporary repairs",
      "Fusion splices are for single-mode fibre only; mechanical splices are for multimode only",
      "Fusion splices are used outdoors only; mechanical splices are used indoors only"
    ],
    correctIndex: 1,
    explanation: "Fusion splicing uses an electric arc to permanently melt and fuse two fibre ends together, achieving loss as low as 0.02–0.05 dB — making it ideal for backbone installations where accumulated loss is critical. Mechanical splices use index-matching gel to align fibres in a precision sleeve — faster and requiring less equipment, but with higher and less consistent loss. Fusion splicing is preferred for permanent, low-loss permanent installations.",
    order: 185,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-vdv",
    topicLabel: "MWA E — VDV and Communication Systems",
    question: "What is the minimum bend radius for Cat 6A UTP (Unshielded Twisted Pair) cable during and after installation?",
    options: [
      "4 times the cable outside diameter during installation; 1 times after",
      "4 times the cable outside diameter after installation; 8 times during installation (under tension)",
      "No minimum — UTP cable can be bent freely",
      "100 mm radius at all times"
    ],
    correctIndex: 1,
    explanation: "TIA-568 specifies minimum bend radii to prevent cable deformation that alters the pair geometry and degrades electrical performance. For Cat 6A UTP: minimum bend radius = 4× the cable OD after installation (at rest). During installation under tension (pulling), the minimum radius is 8× the cable OD. Excessive bending causes pair deformation, increased near-end crosstalk (NEXT), and return loss — potentially failing channel certification.",
    order: 186,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-bas",
    topicLabel: "MWA E — Building Automation Systems",
    question: "What is BACnet and what is it used for in building automation?",
    options: [
      "BACnet is a proprietary Johnson Controls protocol for HVAC control only",
      "BACnet (Building Automation and Control Networks) is an open ASHRAE/ISO standard communication protocol for integrating HVAC, lighting, access control, fire alarm, and other building systems from different manufacturers",
      "BACnet is a wireless protocol for battery-powered sensors only",
      "BACnet is the cabling standard for BAS systems — equivalent to Cat 6A for structured data cabling"
    ],
    correctIndex: 1,
    explanation: "BACnet (ANSI/ASHRAE 135) is an open, vendor-neutral communication protocol for building automation. It allows controllers, sensors, actuators, and supervisory systems from different manufacturers to interoperate on a common network. BACnet supports multiple physical layers (BACnet/IP over Ethernet, MS/TP over RS-485, BACnet/SC). Its open standard nature prevents vendor lock-in and allows integrated building management across all systems.",
    order: 187,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-bas",
    topicLabel: "MWA E — Building Automation Systems",
    question: "What is a DDC (Direct Digital Control) controller in a building automation system?",
    options: [
      "A manual control panel that directly operates HVAC equipment without a computer",
      "A microprocessor-based controller that reads sensors (temperature, pressure, CO₂), executes programmed control algorithms, and directly controls equipment outputs (valves, dampers, fans) to maintain desired setpoints",
      "A device that converts digital BAS signals to analog signals for legacy equipment",
      "A data logging device that records sensor readings for energy management reports"
    ],
    correctIndex: 1,
    explanation: "A DDC controller is the local intelligence in a BAS. It reads analog and digital inputs from sensors and status points, executes programmed PID or on/off control logic, and drives output devices (variable valves, variable speed drives, damper actuators) to maintain temperature, humidity, pressure, or CO₂ setpoints. Multiple DDC controllers communicate with a supervisory workstation via BACnet or other protocols.",
    order: 188,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-bas",
    topicLabel: "MWA E — Building Automation Systems",
    question: "What is demand-controlled ventilation (DCV) and how does a BAS implement it?",
    options: [
      "A system that reduces ventilation when the building is unoccupied on a fixed time schedule",
      "A system that modulates outdoor air supply to occupied spaces based on real-time CO₂ levels — reducing ventilation (and HVAC energy) when actual occupancy is low",
      "A system that delivers maximum ventilation at all times to ensure air quality",
      "A system that controls ventilation based on outdoor temperature only"
    ],
    correctIndex: 1,
    explanation: "DCV uses CO₂ sensors in occupied spaces as a proxy for occupancy. CO₂ rises as more people occupy a space (exhaled CO₂). The BAS modulates outdoor air dampers on the AHU to maintain CO₂ below a setpoint (typically 1,000–1,100 ppm). When the space is partially occupied, less ventilation air is supplied — reducing heating/cooling energy while maintaining code-required air quality. ASHRAE 62.1 defines the framework for DCV.",
    order: 189,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-bas",
    topicLabel: "MWA E — Building Automation Systems",
    question: "What is Modbus and where is it commonly used in building and industrial automation?",
    options: [
      "A wireless mesh networking protocol for IoT sensors",
      "A serial communication protocol widely used to connect PLCs, VFDs, meters, and sensors to supervisory systems — simple, robust, and widely supported on RS-485 or TCP/IP",
      "A proprietary Siemens protocol for building management systems",
      "A fibre optic communication standard for high-speed BAS networks"
    ],
    correctIndex: 1,
    explanation: "Modbus (Modicon, 1979) is one of the most widely used industrial communication protocols. It supports RS-485 (Modbus RTU) and Ethernet (Modbus TCP/IP). Its simplicity — master/slave architecture with register-based data model — makes it easy to implement. It is used to connect VFDs, power meters, temperature controllers, PLCs, and sensors to SCADA, BAS, and energy management systems. Most modern VFDs support Modbus natively.",
    order: 190,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-bas",
    topicLabel: "MWA E — Building Automation Systems",
    question: "What is the purpose of a Building Management System (BMS) in a large commercial building?",
    options: [
      "To replace the electrical permit process for large commercial projects",
      "To centrally monitor, control, and optimise all building systems (HVAC, lighting, access, fire alarm, energy) from a single operator workstation — improving energy efficiency, comfort, and maintenance response",
      "To provide a UPS backup for all critical electrical systems",
      "To manage construction scheduling and subcontractor coordination"
    ],
    correctIndex: 1,
    explanation: "A BMS (also called BAS or EMS) integrates HVAC, lighting, access control, security, fire alarm, and energy metering systems into a single operator interface. Operators can monitor alarms, adjust setpoints, view energy consumption, schedule equipment, and generate reports from one workstation. Integration enables coordinated responses — e.g., on fire alarm, the BMS can shut down HVAC, pressurize stairwells, and release electric door locks automatically.",
    order: 191,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-vdv",
    topicLabel: "MWA E — VDV and Communication Systems",
    question: "What is the purpose of a paging (public address) system in a commercial or industrial facility?",
    options: [
      "To provide background music for customer-facing areas only",
      "To broadcast voice announcements and alert tones throughout the building for general communication, emergency notifications, and evacuation instructions",
      "To replace the fire alarm notification system in low-occupancy buildings",
      "To provide intercom functionality between two specific locations only"
    ],
    correctIndex: 1,
    explanation: "A paging/public address system broadcasts voice messages and tones to all or selected zones of a building. In emergencies, it can broadcast evacuation instructions, shelter-in-place commands, or all-clear announcements. In facilities, it is used for general announcements, locating personnel, and coordinating operations. Emergency voice communication systems (EVCS) integrated with fire alarms are required by code in certain occupancies (high-rise, assembly, etc.).",
    order: 192,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-vdv",
    topicLabel: "MWA E — VDV and Communication Systems",
    question: "What is CATV (Cable Television) distribution in a building, and what is the typical impedance of CATV coaxial cable?",
    options: [
      "CATV is distributed at 50 ohms impedance — the same as data networks",
      "CATV uses 75-ohm coaxial cable (RG-6 or RG-11) to distribute RF signals from a headend or satellite system to outlets throughout the building",
      "CATV uses Cat 6A structured cabling at 100 ohms impedance",
      "CATV is always distributed wirelessly — no cable is used in modern systems"
    ],
    correctIndex: 1,
    explanation: "CATV distribution uses 75-ohm coaxial cable — standardized for broadcast RF signals in the 5 MHz to 1 GHz+ range. RG-6 (18 AWG centre conductor) is used for shorter residential runs; RG-11 (14 AWG) has lower loss per metre and is used for longer building backbone runs. Signal amplifiers (distribution amplifiers) compensate for cable loss in large buildings. All connectors must be properly crimped or compression-fitted to maintain 75-ohm impedance continuity.",
    order: 193,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-vdv",
    topicLabel: "MWA E — VDV and Communication Systems",
    question: "What is a nurse call system and what communication standards govern its installation?",
    options: [
      "A nurse call system is a simple doorbell system — no specific standards apply",
      "A system that allows patients to alert nursing staff, with signals displayed at the nurses' station and corridor lights — governed by CAN/CSA Z317.1 in Canada for healthcare facilities",
      "A nurse call system is part of the fire alarm system in healthcare facilities",
      "A nurse call system uses standard telephone wiring and is governed by TIA-568"
    ],
    correctIndex: 1,
    explanation: "Nurse call systems provide patient-to-nurse communication in healthcare facilities. CAN/CSA Z317.1 (Special Requirements for Electrical Installations in Health Care Facilities) governs nurse call system installation in Canada. Systems include patient call stations, pillow speakers, corridor dome lights, duty station panels, and master stations. Modern IP-based nurse call systems integrate with BAS, telephony, and wireless staff communication systems.",
    order: 194,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What is the purpose of a sprinkler flow switch in a fire alarm system?",
    options: [
      "To control the water pressure in the sprinkler main",
      "To detect water flow in the sprinkler system (indicating a sprinkler head has opened) and send an alarm signal to the FACP, triggering evacuation and notifying the fire department",
      "To shut off water flow when the fire is extinguished",
      "To test the sprinkler system pressure monthly"
    ],
    correctIndex: 1,
    explanation: "A sprinkler flow switch (paddle-type or electronic) detects movement of water in the sprinkler piping caused by a sprinkler head operating. It sends a signal to the FACP, which activates evacuation signals throughout the building and transmits an alarm to the central monitoring station (and fire department). The flow switch provides faster detection than waiting for a smoke or heat detector to activate independently.",
    order: 195,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What is a fire alarm control panel (FACP) supervised power supply requirement?",
    options: [
      "The FACP must be connected to the building's main service — no backup required",
      "The FACP must have a primary (AC mains) power supply and a secondary (battery) backup capable of operating the system for a minimum of 24 hours in normal condition plus 5 minutes of full alarm",
      "The FACP must be connected to a generator that starts within 10 seconds of power failure",
      "Battery backup is only required in buildings over 10 storeys"
    ],
    correctIndex: 1,
    explanation: "CAN/ULC S527 requires the FACP to have: (1) primary AC mains power from a dedicated circuit, and (2) secondary battery backup capable of sustaining the system in standby for 24 hours, followed by 5 minutes of full alarm operation. This ensures the system remains operational through an extended power outage and can alert occupants even when utility power has failed.",
    order: 196,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-security",
    topicLabel: "MWA E — Security and Access Control",
    question: "What is an access control system and what are its main components?",
    options: [
      "A system that controls HVAC zone access to reduce energy consumption",
      "A system that manages entry to secured areas using credential readers, controllers, and electronic locking hardware — granting or denying access based on authorisation database",
      "A system that monitors employee time and attendance only",
      "A system that controls network access from specific devices on the IT infrastructure"
    ],
    correctIndex: 1,
    explanation: "An access control system manages physical entry to secured areas. Main components: (1) Credential reader (card reader, PIN pad, biometric) at the door; (2) Access control panel/controller that validates credentials against a database; (3) Electronic locking hardware (electric strike, magnetic lock, electrified hardware); (4) Door position switch (monitors open/closed status); (5) Request-to-exit (REX) device (PIR or push button for exit without credential). Access events are logged with time, date, and credential ID.",
    order: 197,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-security",
    topicLabel: "MWA E — Security and Access Control",
    question: "What is the difference between an electric strike and an electromagnetic (mag) lock?",
    options: [
      "An electric strike uses AC power; a mag lock uses DC power",
      "An electric strike releases the door latch when energised (fail-secure) or de-energised (fail-safe); a mag lock holds the door closed when energised and releases when de-energised (always fail-safe)",
      "Electric strikes are for exterior doors only; mag locks are for interior doors only",
      "Both are functionally identical — the choice is only aesthetic"
    ],
    correctIndex: 1,
    explanation: "An electric strike replaces the fixed strike plate. Fail-secure (most common) = locked when power is off; fail-safe = unlocked when power is off. A magnetic lock (maglok) uses an electromagnetic to hold a steel armature plate on the door frame — it holds 300–1,200 lbs when energised. Mag locks are always fail-safe (release on power loss) because of fire code requirements — doors must be releasable in an emergency. Mag locks require a REX device to allow free egress.",
    order: 198,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-bas",
    topicLabel: "MWA E — Integrated Systems",
    question: "What is an IP (Internet Protocol) camera system and how does it differ from a traditional analogue CCTV system?",
    options: [
      "IP cameras use coaxial cable; analogue cameras use Cat 6 cable",
      "IP cameras transmit digitally compressed video over a data network — allowing higher resolution, remote access, and integration with BAS; analogue cameras transmit uncompressed composite video over coaxial cable to a DVR",
      "IP cameras are wireless only; analogue cameras are wired only",
      "IP cameras require a separate proprietary network; analogue cameras use the building's standard IT network"
    ],
    correctIndex: 1,
    explanation: "IP cameras encode video as digital data packets transmitted over standard Ethernet infrastructure — enabling megapixel resolution, remote access from any network-connected device, and integration with access control and BMS systems. Analogue cameras transmit composite video over coaxial cable to a Digital Video Recorder (DVR). IP systems use NVRs (Network Video Recorders) or VMS software. IP cameras can be powered via PoE, eliminating separate power wiring runs.",
    order: 199,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-bas",
    topicLabel: "MWA E — Integrated Systems",
    question: "During commissioning of a new fire alarm system, what tests must be conducted per CAN/ULC S537?",
    options: [
      "A visual inspection of device locations only — no functional tests required",
      "100% functional testing of all initiating devices, notification appliances, wiring circuits, and control panel functions — including verification of alarm, trouble, and supervisory signals, battery backup duration, and monitoring station communication",
      "A random sample test of 10% of devices to verify installation quality",
      "Only smoke detector sensitivity testing — other devices are self-testing"
    ],
    correctIndex: 1,
    explanation: "CAN/ULC S537 (Verification of Fire Alarm Systems) requires a complete functional verification of every installed device and function. This includes: operating every smoke detector, heat detector, manual pull station, and flow switch; activating every horn/strobe; verifying zone mapping and display accuracy on the FACP; testing battery backup capacity (24-hour standby + 5-minute alarm); and verifying transmission to the central monitoring station. A commissioning certificate is issued upon successful completion.",
    order: 200,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Safety",
    question: "What is the minimum arc flash PPE category required when performing live work on a 120V panelboard with an incident energy of 4.5 cal/cm²?",
    options: [
      "PPE Category 0 (1.2 cal/cm²)",
      "PPE Category 1 (4 cal/cm²)",
      "PPE Category 2 (8 cal/cm²)",
      "PPE Category 3 (25 cal/cm²)"
    ],
    correctIndex: 2,
    explanation: "PPE Category 1 is rated to 4 cal/cm², which is insufficient for 4.5 cal/cm². PPE Category 2 (rated to 8 cal/cm²) is the minimum that covers the calculated incident energy. Arc flash PPE must always meet or exceed the incident energy at the work location.",
    order: 1,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Safety",
    question: "What is the correct sequence for applying a Lock-Out/Tag-Out (LOTO) procedure?",
    options: [
      "Lock → Test → Notify → Isolate → Tag",
      "Notify → Identify energy sources → Isolate → Lock & Tag → Test for absence of voltage → Verify",
      "Isolate → Notify → Test → Lock → Tag",
      "Test → Isolate → Lock → Notify → Verify"
    ],
    correctIndex: 1,
    explanation: "The correct LOTO sequence is: (1) Notify affected workers, (2) Identify all energy isolation points, (3) Isolate the equipment, (4) Apply personal lock and danger tag, (5) Test for absence of voltage, (6) Verify zero-energy state. Testing before locking creates a hazard; notifying before isolating ensures worker safety.",
    order: 3,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Safety",
    question: "When must a Temporary Protective Ground (TPG) be applied on de-energized high-voltage conductors?",
    options: [
      "Only when the conductor is buried underground",
      "Whenever a worker will contact or work in close proximity to a de-energized HV conductor",
      "Only when the conductor is longer than 100 metres",
      "Only on conductors above 15,000V"
    ],
    correctIndex: 1,
    explanation: "TPGs must be applied whenever a worker will contact or be in close proximity to de-energized HV conductors. TPGs drain induced and stored charge and, if the line is accidentally re-energized, create a bolted fault that trips upstream protection — protecting the worker. The CEC and OH&S regulations require TPGs regardless of line length or voltage (above low voltage).",
    order: 6,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Safety",
    question: "Which WHMIS pictogram indicates a substance that is acutely toxic if inhaled, ingested, or absorbed through the skin?",
    options: [
      "Exploding bomb",
      "Skull and crossbones",
      "Exclamation mark",
      "Flame over circle"
    ],
    correctIndex: 1,
    explanation: "The skull and crossbones pictogram (GHS06) indicates acute toxicity — the substance is lethal or causes severe damage at low exposure levels. The exclamation mark indicates less severe health effects. The flame over circle indicates an oxidizer. The exploding bomb indicates explosive materials.",
    order: 7,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Safety",
    question: "A fall protection plan is required when working at what minimum height above the lower level on a construction site in most Canadian jurisdictions?",
    options: [
      "1.5 metres (5 feet)",
      "2.4 metres (8 feet)",
      "3.0 metres (10 feet)",
      "4.6 metres (15 feet)"
    ],
    correctIndex: 0,
    explanation: "Most Canadian provincial OH&S regulations require fall protection at heights of 3 metres (10 feet) or more for general construction, but many jurisdictions — including Ontario — require fall protection at 3 m for construction. However, specific work on open floors, platforms, or scaffolding often triggers fall protection requirements at 1.5 m. Always check jurisdiction-specific regulations.",
    order: 8,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Safety",
    question: "What is the purpose of a 'danger tag' applied during a LOTO procedure?",
    options: [
      "It substitutes for a personal lock when a lock is unavailable",
      "It warns others that the equipment must not be operated — it does not prevent operation",
      "It certifies the equipment has been electrically tested",
      "It is required only by the prime contractor, not individual workers"
    ],
    correctIndex: 1,
    explanation: "A danger tag is a WARNING device only — it communicates a hazard but provides no physical barrier to operation. A personal lock provides the actual physical lockout. Tags should never substitute for locks when locks are practicable. If a lock cannot be applied, the tag must be accompanied by at least one additional means of securing the energy-isolating device.",
    order: 9,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Safety",
    question: "Under the CEC, what is the minimum clearance required between a service conductor and a window opening on a building?",
    options: [
      "0.3 m (1 ft)",
      "0.6 m (2 ft)",
      "0.9 m (3 ft)",
      "1.0 m (39 in)"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 6-112 requires a minimum horizontal clearance of 0.9 m (3 ft) between service conductors and windows that can be opened. This prevents conductors from being contacted through open windows and reduces the risk of accidental contact with energized conductors.",
    order: 10,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "What does the 'CAT' rating on a clamp meter indicate?",
    options: [
      "The maximum DC current it can measure",
      "The overvoltage category for which it is designed — higher CAT = better transient spike protection",
      "The conductor diameter it can clamp around",
      "The battery capacity of the instrument"
    ],
    correctIndex: 1,
    explanation: "The CAT (Category) rating indicates the overvoltage environment the instrument can safely withstand. CAT I–IV represent increasingly severe transient environments. A higher CAT number means the meter can withstand higher transient spikes, which are more likely in environments closer to the utility source. Using an under-rated meter in a high-CAT environment risks explosion.",
    order: 11,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "A powder-actuated tool (PAT) is being used to fasten conduit straps to a concrete wall. Which requirement applies to PAT operators?",
    options: [
      "Any worker can operate a PAT after a brief demonstration",
      "The operator must hold a valid operator's card issued after completing a manufacturer-approved training course",
      "A PAT can only be operated by a licensed electrician",
      "PAT use requires a hot work permit on all job sites"
    ],
    correctIndex: 1,
    explanation: "Powder-actuated tools are regulated in all Canadian jurisdictions. Operators must complete a manufacturer-approved training course and carry a valid operator's card on site. PATs fire a fastener using an explosive charge and can cause serious injury or penetrate the substrate if used incorrectly. The card must be produced on request.",
    order: 12,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "What is the 4:1 safety rule when positioning an extension ladder?",
    options: [
      "For every 4 feet of height, the ladder must be 1 foot away from the wall at the base",
      "The ladder must extend 4 feet above the landing point for every 1 foot of horizontal reach",
      "No more than 4 workers per ladder; 1 at a time on the rungs",
      "The ladder angle must result in a 4 m height for every 1 m of base setback"
    ],
    correctIndex: 0,
    explanation: "The 4:1 ratio means the base of the ladder should be placed 1 foot away from the wall for every 4 feet of vertical height. For example, a ladder reaching 20 feet high should have its base 5 feet from the wall. This creates an approximate 75° angle, which is the optimal angle for ladder stability.",
    order: 13,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "Before lifting a load with a chain fall, what marking must be checked on the rigging equipment?",
    options: [
      "The manufacturer's logo and country of origin",
      "The Working Load Limit (WLL) and the date of last inspection",
      "The serial number and the colour code of the rigging year",
      "The material grade of the chain only"
    ],
    correctIndex: 1,
    explanation: "The Working Load Limit (WLL) must be clearly marked on all rigging equipment and must never be exceeded. The date of last inspection confirms the equipment is within its inspection cycle. Using rigging without knowing the WLL risks catastrophic failure. Equipment with worn, bent, or damaged links must be removed from service immediately.",
    order: 14,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Work Organization",
    question: "On a set of electrical drawings, what does a dashed line between two devices typically represent?",
    options: [
      "A 120V circuit",
      "A control wiring connection or signal circuit",
      "A conduit run that is underground",
      "A future installation not yet approved"
    ],
    correctIndex: 1,
    explanation: "Dashed lines on electrical drawings conventionally represent control wiring, signal circuits, or hidden (below surface) elements. Solid lines typically represent power conductors or conduit. Always consult the drawing legend as conventions can vary between engineers and jurisdictions.",
    order: 15,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Work Organization",
    question: "An electrical permit has been issued for a new commercial installation. When must the AHJ be notified for inspection?",
    options: [
      "Only at the end of the project during final commissioning",
      "At the intervals specified on the permit, typically before concealing wiring and at final completion",
      "Only if a deficiency is discovered during the work",
      "Once per year regardless of project stage"
    ],
    correctIndex: 1,
    explanation: "Most electrical permits specify mandatory inspection stages — commonly a rough-in inspection (before walls are closed) and a final inspection. The AHJ must inspect the work at each required stage before it is concealed or energized. Bypassing inspections can result in orders to open walls, remove work, or disconnect the installation.",
    order: 17,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Support Components",
    question: "What is the maximum support spacing for electrical metallic tubing (EMT) run horizontally in a commercial building, per the CEC?",
    options: [
      "1.0 m (3 ft)",
      "1.5 m (5 ft)",
      "3.0 m (10 ft)",
      "No spacing limit if secured at each end"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 12-1000 requires EMT to be supported at intervals not exceeding 3.0 m (approximately 10 ft) and within 0.9 m (3 ft) of each box, fitting, or termination. Insufficient support allows conduit to sag, creates stress on fittings, and can damage conductor insulation.",
    order: 18,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Support Components",
    question: "Which conduit body type is designed to allow a 90° change of direction and permits conductor splices?",
    options: [
      "LB conduit body",
      "C conduit body",
      "T conduit body",
      "LL conduit body"
    ],
    correctIndex: 0,
    explanation: "An LB (back access) conduit body allows a 90° bend with the access cover on the back, making it suitable for wall entries. C conduit bodies are used for straight-through pulls. T conduit bodies allow a tee junction. LL and LR allow 90° turns from the left or right. Only conduit bodies with adequate volume may contain splices per CEC rules.",
    order: 19,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Support Components",
    question: "When installing cable tray, what is the maximum allowable load on a cable tray system?",
    options: [
      "500 kg uniformly distributed",
      "The manufacturer's rated load capacity marked on the tray",
      "Always 200 kg regardless of tray size",
      "Determined only by the cable weight, not the tray rating"
    ],
    correctIndex: 1,
    explanation: "Cable tray load capacity is determined by the manufacturer and must be marked on the tray. The CEC requires that cable tray not be loaded beyond its rated capacity. Tray ratings vary by width, depth, material (steel, aluminum, fibreglass), and span between supports. Always consult the manufacturer's load tables and the engineer's specifications.",
    order: 20,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Commissioning",
    question: "Before energizing a new 600V distribution panel, what minimum tests should be performed?",
    options: [
      "Visual inspection only — if wiring looks correct, energize",
      "Insulation resistance (megger) test and continuity verification of grounding conductors",
      "Only a voltage check at the utility meter",
      "Load current test by temporarily energizing at 50% voltage"
    ],
    correctIndex: 1,
    explanation: "Pre-energization commissioning must include: (1) insulation resistance (megger/IR) testing of all conductors to verify no breakdown between phase conductors or to ground, and (2) continuity testing of equipment grounding conductors to confirm the fault return path is intact. Visual inspection alone is insufficient. Low IR readings indicate damaged insulation that must be investigated before energization.",
    order: 21,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Commissioning",
    question: "An insulation resistance (megger) test on a new 600V feeder reads 50 MΩ. Is this acceptable?",
    options: [
      "No — any reading below 100 MΩ requires the cable to be replaced",
      "Yes — a minimum of 1 MΩ per 1000V of operating voltage is the general industry guideline, making 50 MΩ excellent",
      "No — megger tests are not valid on cables rated below 1000V",
      "Yes, but only if the ambient temperature is above 20°C"
    ],
    correctIndex: 1,
    explanation: "The general industry guideline (NETA, IEEE 43) for new insulation is a minimum of 1 MΩ per 1000V of rated voltage. For a 600V feeder, the minimum acceptable IR value is approximately 1 MΩ. A reading of 50 MΩ indicates excellent insulation integrity. Readings near or below the minimum threshold require investigation of damaged insulation, moisture, or improper installation.",
    order: 22,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Commissioning",
    question: "During commissioning of a new motor starter, the motor runs in the wrong direction. What is the simplest correction for a three-phase motor?",
    options: [
      "Swap any two of the three phase conductors at the motor terminals",
      "Reverse the polarity of the control circuit",
      "Change the overload relay setting",
      "Swap the A and C phase conductors at the utility meter only"
    ],
    correctIndex: 0,
    explanation: "For a three-phase motor, swapping any two of the three supply conductors at the motor terminals reverses the phase sequence and changes rotation direction. This is the simplest and correct approach. Swapping at the utility meter would reverse all motors and loads downstream — never the correct solution. Control circuit changes do not affect motor rotation.",
    order: 23,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Commissioning",
    question: "What document must be completed and posted on the door of a distribution panel before it is placed in service?",
    options: [
      "A copy of the electrical permit",
      "An arc flash hazard label and a completed circuit directory",
      "The insulation resistance test report",
      "A load calculation summary from the engineer"
    ],
    correctIndex: 1,
    explanation: "Before energizing and placing a panel in service, both an arc flash warning label (identifying incident energy level, boundary distances, and required PPE) and a completed circuit directory (identifying every circuit by its load) must be posted on the panel door. These are CEC requirements and are verified during the AHJ inspection.",
    order: 24,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "In an Edison three-wire, 120/240V single-phase service, what is the voltage relationship between the two ungrounded conductors?",
    options: [
      "They are both 120V to ground and 120V to each other",
      "They are 120V to the grounded neutral and 240V to each other — 180° out of phase",
      "They are 240V to ground and 480V to each other",
      "They are in phase with each other and 240V to the neutral"
    ],
    correctIndex: 1,
    explanation: "In the Edison three-wire system, the two ungrounded (hot) conductors are each 120V to the grounded neutral, and 240V to each other. The two phases are derived from opposite ends of a centre-tapped transformer secondary — they are 180° out of phase. 120V single-phase loads connect between one hot and neutral; 240V loads connect between both hots.",
    order: 25,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "In a 120/208V, three-phase, four-wire wye system, what is the voltage between any two phase conductors?",
    options: [
      "120V",
      "173V",
      "208V",
      "240V"
    ],
    correctIndex: 2,
    explanation: "In a wye system, line-to-line voltage = line-to-neutral voltage × √3 = 120V × 1.732 = 208V. This is the standard low-voltage distribution system used in commercial and light industrial buildings across Canada. Single-phase 120V loads connect between any phase and neutral; three-phase loads connect between all three phases.",
    order: 26,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "In a 347/600V, three-phase, four-wire wye system, what is the voltage available for single-phase 347V lighting circuits?",
    options: [
      "208V (phase to phase)",
      "347V (phase to neutral)",
      "600V (phase to phase)",
      "480V (phase to neutral)"
    ],
    correctIndex: 1,
    explanation: "In a 347/600V wye system, the line-to-neutral voltage is 347V (used for single-phase 347V fluorescent/LED lighting and small single-phase loads). The line-to-line voltage is 600V (347 × √3 = 601V ≈ 600V), used for three-phase motors and large equipment. This is the most common industrial distribution voltage in Canada.",
    order: 27,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "In a 120/240V, three-phase, four-wire high-leg delta service, which phase has approximately 208V to neutral and must be identified with orange marking?",
    options: [
      "Phase A",
      "Phase B (the high leg)",
      "Phase C",
      "The neutral conductor"
    ],
    correctIndex: 1,
    explanation: "In a high-leg delta system, Phase B (the wild leg or high leg) measures approximately 208V to neutral — (240/2) × √3 = 207.8V. This voltage is unsuitable for standard 120V single-phase loads. The CEC and NEC require the high leg to be identified with orange insulation or marking at all points where it can be confused with a 120V conductor.",
    order: 28,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "What is the minimum overhead clearance required for a service conductor passing over a residential driveway (accessible to vehicles)?",
    options: [
      "3.0 m (10 ft)",
      "4.0 m (13 ft)",
      "4.9 m (16 ft)",
      "5.5 m (18 ft)"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 6-104 requires a minimum clearance of 4.9 m (16 ft) for service conductors passing over areas accessible to vehicle traffic. This clearance prevents contact between service conductors and tall vehicles such as trucks, RVs, and farm equipment. Pedestrian-only areas require a lower minimum clearance.",
    order: 29,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "Why must the secondary of a current transformer (CT) never be open-circuited while primary current is flowing?",
    options: [
      "The meter will provide an inaccurate reading",
      "An open CT secondary develops dangerously high voltages that can damage insulation and harm personnel",
      "The primary fuse will blow immediately",
      "The CT will overheat and require replacement"
    ],
    correctIndex: 1,
    explanation: "A CT secondary must always have a burden (meter or short circuit) connected. The CT attempts to maintain the ampere-turn balance — with an open secondary, all the magnetomotive force drives the core into saturation, and the resulting high-frequency flux induces dangerously high voltage spikes across the open terminals (potentially thousands of volts). Always short the CT secondary before opening the metering circuit.",
    order: 31,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "A three-phase, 600V service has a utility available fault current of 25,000A symmetrical. What minimum interrupting rating must the main service breaker have?",
    options: [
      "10,000A IC",
      "18,000A IC",
      "22,000A IC",
      "At least 25,000A IC"
    ],
    correctIndex: 3,
    explanation: "The interrupting capacity (IC) of the main disconnect must equal or exceed the maximum available fault current at that point. If available fault current is 25,000A, the breaker must be rated for at least 25,000A IC. Using an under-rated breaker risks explosive failure during a fault. A short-circuit study or utility data is required to determine available fault current.",
    order: 32,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "How many service disconnecting means are permitted for a building under the CEC?",
    options: [
      "Always exactly one",
      "A maximum of six disconnects grouped at one location",
      "Unlimited, distributed throughout the building",
      "Two — one for each half of the service"
    ],
    correctIndex: 1,
    explanation: "The CEC (Rule 6-200) permits a maximum of six service disconnects grouped in one location. Each disconnect serves a separate load or group of loads. The grouping requirement ensures firefighters and emergency personnel can disconnect all building power from a single location. If more than six circuits are required, a main disconnect ahead of the group is needed.",
    order: 33,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "What is an antioxidant compound used for when terminating aluminum service conductors?",
    options: [
      "To lubricate the conductor during pulling through conduit",
      "To prevent aluminum oxide formation at connection points, maintaining a low-resistance electrical connection",
      "To insulate the conductor at the terminal lug",
      "To identify aluminum conductors from copper at the service equipment"
    ],
    correctIndex: 1,
    explanation: "Aluminum oxidizes rapidly when exposed to air, forming aluminum oxide — an electrical insulator. Antioxidant compound (such as Noalox® or equivalent) prevents new oxide formation and helps displace existing oxide at the contact surface, ensuring a stable, low-resistance connection. Without it, oxidation increases resistance, which causes heating and eventual failure.",
    order: 34,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "What is the difference between system grounding and equipment bonding?",
    options: [
      "System grounding connects the neutral to earth; bonding connects non-current-carrying metal parts together and to the grounded conductor",
      "They are the same — both connect neutral to earth",
      "Bonding connects the neutral to earth; grounding connects metal enclosures to each other",
      "System grounding is for HV systems only; bonding is for LV systems only"
    ],
    correctIndex: 0,
    explanation: "System grounding establishes a reference voltage by connecting the neutral conductor to earth at the service entrance — this defines all voltages in the system relative to earth. Equipment bonding connects all non-current-carrying metal enclosures, conduits, and equipment together and back to the grounded conductor, creating a low-impedance fault return path. Both serve different but complementary purposes.",
    order: 35,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "A concrete-encased grounding electrode (Ufer ground) requires a minimum of how many metres of rebar or copper conductor embedded in the building footing?",
    options: [
      "2.4 m",
      "4.5 m",
      "6.0 m",
      "7.5 m"
    ],
    correctIndex: 2,
    explanation: "The CEC (Rule 10-700) requires a concrete-encased electrode to consist of at least 6.0 m of rebar (minimum 13 mm diameter) or bare copper conductor embedded in the concrete footing or foundation. The concrete's moisture content and contact with the earth make this one of the most effective grounding electrodes available.",
    order: 36,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "A ground rod electrode must be driven to what minimum depth, or what alternative installation is acceptable when rock prevents full depth?",
    options: [
      "2.4 m deep; if rock prevents this, the rod may be driven at an angle up to 45°",
      "3.0 m deep with no exceptions permitted",
      "1.8 m deep; if rock is encountered, a second rod must be added",
      "2.4 m deep; if rock prevents this, a buried plate electrode may substitute"
    ],
    correctIndex: 0,
    explanation: "CEC Rule 10-700(2) requires ground rods to be driven to a minimum depth of 2.4 m. If rock prevents achieving this depth, the rod may be driven at an angle not exceeding 45° from vertical. If the angled installation also cannot achieve 2.4 m, an alternative electrode type (plate, buried conductor, or concrete-encased) must be used.",
    order: 37,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "What is the purpose of Ground Fault Protection (GFP) on services rated 150V to ground or more and 1000A or more?",
    options: [
      "To protect personnel from shock on the service conductors",
      "To detect low-level ground faults and open the service disconnect before a sustained arcing fault causes a fire",
      "To measure ground leakage current for billing purposes",
      "To trip on any current above the rated service ampacity"
    ],
    correctIndex: 1,
    explanation: "GFP is designed to detect low-level arcing ground faults (as low as 1200A on some systems) that would not trip the main overcurrent protective device but can sustain an arcing fault capable of causing catastrophic fires. CEC Rule 14-102 requires GFP on solidly grounded services rated 150V to ground or greater and 1000A or more.",
    order: 38,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "Which grounding electrode has the highest preference in the CEC electrode hierarchy when a metallic water pipe system is available?",
    options: [
      "Ground rod — it provides the most reliable resistance to earth",
      "Metallic underground water pipe — provided it has at least 3 m of buried length in contact with earth",
      "Structural steel — provided it is connected to a concrete foundation",
      "Plate electrode — provided it has 0.186 m² of exposed surface area"
    ],
    correctIndex: 1,
    explanation: "The CEC prescribes an order of preference for grounding electrodes. A metallic underground water pipe with at least 3 m of buried length in contact with earth is among the highest-preference electrodes because of its extensive earth contact. However, it must be supplemented with an additional electrode because plastic sections may be inserted during maintenance, breaking continuity.",
    order: 39,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "What is step voltage, and why is it hazardous?",
    options: [
      "The voltage across each step of a voltage divider circuit",
      "The voltage difference between two points on the earth's surface during a fault, which can drive current through a person standing with feet apart",
      "The voltage required to step up a transformer secondary from LV to HV",
      "The incremental voltage increase per floor in a high-rise building's distribution system"
    ],
    correctIndex: 1,
    explanation: "Step voltage is the potential difference between two points on the earth's surface separated by the distance of a person's stride. During a ground fault, large currents flow through the earth and create a voltage gradient. A person standing with feet 1 m apart can have dangerous current pass through their lower body (foot to foot), causing muscle paralysis or death. Step voltage is the primary hazard when approaching a downed power line.",
    order: 40,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "In a separately derived system (e.g., a transformer secondary), where must the system grounding connection be made?",
    options: [
      "At the main service entrance only — the transformer does not need its own grounding connection",
      "At the transformer secondary, at the first means of overcurrent protection or disconnecting means on the secondary",
      "At any convenient point on the secondary conductors",
      "At the transformer primary only, since primary grounding protects the secondary"
    ],
    correctIndex: 1,
    explanation: "A separately derived system has no direct metallic connection to the supply system conductors other than through the earth or equipment grounding conductors. The CEC requires the grounding electrode conductor to be connected to the secondary of the transformer (or first overcurrent protection point) and a new system bond established there. This creates a proper reference voltage and fault return path for the secondary system.",
    order: 42,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "Lightning protection systems must be bonded to the electrical system's grounding electrode system. Why?",
    options: [
      "To allow lightning current to be used as a power source during outages",
      "To equalize potential during a lightning strike and prevent side flashing between the lightning system and nearby metal",
      "To provide a path to ground for static electricity only",
      "To meet utility revenue metering requirements"
    ],
    correctIndex: 1,
    explanation: "Bonding the lightning protection system to the electrical grounding system ensures that during a lightning strike, both systems rise to the same potential simultaneously. Without bonding, the massive lightning current creates a large potential difference between the lightning down conductor and nearby grounded metal (pipes, conduit, equipment), causing a dangerous arc (side flash) that can start fires and injure personnel.",
    order: 43,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "Impressed Current Cathodic Protection (ICCP) is used on buried metallic structures. What does this system do?",
    options: [
      "Applies an AC voltage to neutralize corrosion currents on buried pipes",
      "Applies a DC current that makes the protected structure cathodic, suppressing galvanic corrosion",
      "Applies a pulsed DC current to detect corrosion depth in buried pipelines",
      "Electrically isolates the buried structure from stray AC currents"
    ],
    correctIndex: 1,
    explanation: "ICCP systems use a DC power source (rectifier) to supply current from an anode (sacrificial or inert) through the soil to the protected structure (cathode). By making the structure cathodic, the oxidation (corrosion) reaction is suppressed. This is used to protect pipelines, storage tanks, ship hulls, and reinforced concrete structures from galvanic corrosion.",
    order: 44,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Protection and Distribution",
    question: "A current-limiting fuse interrupts a fault in less than one half-cycle. What is the primary benefit of this characteristic?",
    options: [
      "It allows larger fault currents to be cleared safely",
      "It limits the peak let-through current, reducing thermal and mechanical stress on downstream equipment",
      "It provides time-delay operation to coordinate with downstream devices",
      "It is resettable without replacement after clearing a fault"
    ],
    correctIndex: 1,
    explanation: "Current-limiting fuses operate in less than ½ cycle (< 8.3 ms at 60 Hz), interrupting the fault before the current reaches its prospective peak. This dramatically reduces the let-through energy (I²t) — the integrated heat and force — that downstream equipment must withstand. This protects switchgear, cables, and other equipment with lower withstand ratings than the available fault current.",
    order: 45,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What is the difference between an OCPD's interrupting rating and its continuous current rating?",
    options: [
      "They are the same — both refer to the maximum current the device can handle",
      "The continuous rating is the normal load current it can carry; the interrupting rating is the maximum fault current it can safely clear",
      "The interrupting rating is the load current; the continuous rating is the fault capacity",
      "The continuous rating applies to fuses only; the interrupting rating applies to breakers only"
    ],
    correctIndex: 1,
    explanation: "The continuous current rating (e.g., 100A breaker) is the maximum load current the device can carry indefinitely without tripping. The interrupting rating (e.g., 10,000A IC or kAIC) is the maximum fault current the device can safely interrupt without explosion or fire. Both ratings must be adequate for the installation — an OCPD must never be exposed to fault currents exceeding its interrupting rating.",
    order: 46,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Protection and Distribution",
    question: "A GFCI device trips at a ground fault current of approximately how many milliamps?",
    options: [
      "1 mA",
      "5 mA",
      "30 mA",
      "100 mA"
    ],
    correctIndex: 1,
    explanation: "GFCI devices are designed to trip at approximately 4–6 mA (typically 5 mA) of ground fault current — fast enough to prevent ventricular fibrillation in a healthy adult. Current as low as 10 mA can cause muscular paralysis ('let-go threshold'); 100 mA can be fatal. The GFCI compares current in the hot and neutral conductors and trips within 1/40th of a second when they differ by ~5 mA.",
    order: 47,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What is a Surge Protection Device (SPD) and what type of hazard does it protect against?",
    options: [
      "A device that limits continuous overcurrent — it replaces the main breaker",
      "A device that clamps transient overvoltages (voltage spikes from lightning, switching) to a safe level, protecting equipment insulation",
      "A device that detects and clears sustained ground faults on 600V systems",
      "A current-limiting device installed ahead of sensitive electronic loads"
    ],
    correctIndex: 1,
    explanation: "SPDs (formerly called Transient Voltage Surge Suppressors or TVSS) protect equipment from brief, high-amplitude voltage transients caused by lightning strikes, utility switching, or load switching. They clamp the voltage to a safe level (typically using MOVs or TVS diodes) and divert transient energy to ground before it can damage equipment insulation or electronic components.",
    order: 49,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Protection and Distribution",
    question: "An online (double-conversion) UPS has what key advantage over an offline (standby) UPS?",
    options: [
      "Lower cost and simpler maintenance",
      "Zero transfer time on power failure — the load always runs from the inverter, providing complete isolation from utility power quality problems",
      "Better efficiency at full load due to bypass mode",
      "Larger battery capacity for longer backup runtime"
    ],
    correctIndex: 1,
    explanation: "An online UPS continuously converts AC → DC → AC — the load always runs from the inverter with no transfer time on a power failure. It also provides complete isolation from utility power quality problems (harmonics, sags, surges, frequency variations). An offline UPS passes utility power through and switches to battery on failure, with a brief transfer delay (typically 10–20 ms).",
    order: 52,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What is the purpose of a power factor correction capacitor bank installed at a main electrical distribution board?",
    options: [
      "To reduce harmonics generated by non-linear loads",
      "To supply reactive power locally, reducing reactive current flow through the utility's distribution system and improving power factor",
      "To increase the available fault current for faster breaker operation",
      "To store energy for use during utility outages"
    ],
    correctIndex: 1,
    explanation: "Capacitor banks supply reactive power (VARs) locally to inductive loads (motors, transformers), reducing the reactive component of current that must be supplied by the utility. This improves power factor (ratio of real power to apparent power), which reduces utility demand charges, decreases I²R losses in cables, and can increase system capacity. They do not eliminate harmonics — a separate harmonic filter is required for that.",
    order: 53,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Transformers",
    question: "What is K-factor in transformer specifications, and why does it matter when supplying non-linear loads?",
    options: [
      "A coefficient relating transformer kVA to its physical weight",
      "A rating indicating a transformer's ability to handle harmonic currents without excessive heating — higher K-factor handles more distorted loads",
      "The ratio of no-load losses to full-load losses",
      "A factor used to derate transformer capacity at elevated ambient temperatures"
    ],
    correctIndex: 1,
    explanation: "K-factor is a measure of the additional heating a transformer experiences due to harmonic currents from non-linear loads (VFDs, computers, LED drivers, UPS systems). A standard transformer (K-1) is designed for linear loads. Non-linear loads generate harmonics that cause eddy current and stray losses far exceeding normal. K-4, K-13, K-20 transformers have reinforced construction to handle these additional losses. Undersizing K-factor causes premature failure.",
    order: 56,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Transformers",
    question: "What is the voltage regulation of a transformer, and what does a low regulation value indicate?",
    options: [
      "The ratio of primary to secondary voltage — a low value means more step-down",
      "VR% = (VNL − VFL) / VFL × 100% — a low value indicates the secondary voltage stays nearly constant between no-load and full-load",
      "The transformer's efficiency at rated load — a low value indicates high losses",
      "The percentage of rated kVA that can be drawn continuously without overheating"
    ],
    correctIndex: 1,
    explanation: "Voltage regulation (VR%) = (V_no-load − V_full-load) / V_full-load × 100%. A low regulation (e.g., 2–4%) means the secondary voltage is relatively stable between no-load and full-load — indicating low internal impedance (resistance and leakage reactance). High regulation (> 10%) means significant voltage drop under load, which can affect equipment performance. Low impedance also means higher fault current contribution.",
    order: 57,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Transformers",
    question: "A single-phase transformer has a primary winding of 500 turns connected to 240V. The secondary has 50 turns. What are the secondary voltage and the turns ratio?",
    options: [
      "24V, 10:1",
      "2400V, 1:10",
      "24V, 1:10",
      "240V, 1:1"
    ],
    correctIndex: 0,
    explanation: "Turns ratio a = N₁/N₂ = 500/50 = 10:1 (step-down). V₂ = V₁ / a = 240 / 10 = 24V. This is a step-down transformer — secondary voltage is lower than primary, secondary current is proportionally higher. Applications include control power transformers (CPTs) and low-voltage lighting.",
    order: 58,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Transformers",
    question: "Why must the primary of a transformer always be protected by an OCPD, and what sizing rule applies to transformer primary protection?",
    options: [
      "To protect the transformer core from overheating; the OCPD must be rated exactly at the transformer's kVA",
      "To protect the primary conductors and transformer from overcurrent; the OCPD must not exceed 125% of the rated primary current for transformers ≥ 9% impedance",
      "To enable the transformer to be safely isolated; the OCPD must match the utility rating",
      "To coordinate with the secondary breaker; the primary OCPD must be sized the same as the secondary OCPD"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 26-252 requires transformer primary protection. For transformers with ≥ 9% impedance (most distribution transformers), the primary OCPD must not exceed 125% of rated primary current. For transformers with < 9% impedance, the limit is 167%. This protects the primary conductors and limits the fault current the transformer can contribute. Secondary protection is also required and must be sized per CEC rules based on transformer impedance.",
    order: 59,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Renewable Energy",
    question: "What is anti-islanding protection in a grid-tied solar PV system and why is it mandatory?",
    options: [
      "A device that prevents the solar system from overcharging battery banks",
      "A feature that shuts down the grid-tied inverter when utility power is lost, preventing back-energization of de-energized distribution lines",
      "A surge protection system that prevents lightning from entering the solar array",
      "A thermal protection system that limits inverter output during high temperature"
    ],
    correctIndex: 1,
    explanation: "Anti-islanding protection is mandatory on all grid-tied inverters. When the utility grid de-energizes (outage, fault, or maintenance), the inverter must detect the loss of grid power and disconnect within a prescribed time. Without anti-islanding, the solar system could continue to energize distribution lines — creating a lethal hazard for utility workers and emergency responders working on supposedly de-energized equipment.",
    order: 60,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Renewable Energy",
    question: "In a grid-tied solar PV system, what does a string inverter do compared to a micro-inverter?",
    options: [
      "A string inverter converts DC from multiple panels in series to AC at one central location; a micro-inverter converts DC to AC at each individual panel",
      "A string inverter is used for large utility-scale systems only; a micro-inverter is used for residential only",
      "A string inverter generates AC; a micro-inverter generates DC",
      "They are identical in function — the terms are interchangeable"
    ],
    correctIndex: 0,
    explanation: "A string inverter receives the combined DC output of multiple panels connected in series (a string) and converts it to grid-quality AC at one central location. If one panel in the string is shaded, output of the entire string is reduced. Micro-inverters are installed at each individual panel and convert DC to AC at the panel — maximizing each panel's output independently. Micro-inverters perform better with shading but have higher upfront cost.",
    order: 61,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Renewable Energy",
    question: "What is the maximum DC voltage typically used in residential rooftop solar PV systems in Canada per the CEC?",
    options: [
      "120V DC",
      "600V DC",
      "1000V DC",
      "1500V DC"
    ],
    correctIndex: 1,
    explanation: "The CEC limits residential rooftop solar PV systems to a maximum DC system voltage of 600V for safety reasons. Larger commercial and utility-scale systems may use 1000V DC or 1500V DC. The 600V limit is tied to the ratings of readily available residential-grade inverters, combiners, wiring methods, and disconnects.",
    order: 62,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Renewable Energy",
    question: "In an off-grid solar system with battery storage, what is the function of the charge controller?",
    options: [
      "It converts DC battery power to AC for household loads",
      "It regulates the charging current from the solar array to prevent overcharging and over-discharging of the battery bank",
      "It connects the off-grid system to the utility grid for emergency backup",
      "It measures and displays energy production and consumption"
    ],
    correctIndex: 1,
    explanation: "The charge controller sits between the solar array and the battery bank. It regulates charging voltage and current to ensure batteries are charged efficiently without overcharging (which causes gassing and damage) and prevents over-discharge (which reduces battery lifespan). Modern MPPT (Maximum Power Point Tracking) charge controllers also maximize power harvest from the solar array.",
    order: 63,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Renewable Energy",
    question: "A wind turbine generator produces variable-frequency AC. How is this connected to the utility grid?",
    options: [
      "Directly — variable frequency AC is compatible with the utility grid",
      "Through a rectifier (AC to DC) followed by a grid-tied inverter (DC to fixed-frequency AC)",
      "Through a step-up transformer only — no conversion is needed",
      "Through a synchronous condenser that stabilizes the frequency"
    ],
    correctIndex: 1,
    explanation: "Wind turbines produce variable-frequency AC because rotor speed varies with wind speed. The AC is first rectified to DC, then a grid-tied inverter produces fixed-frequency (60 Hz), fixed-voltage AC that is synchronized to and injected into the utility grid. This full power conversion (AC-DC-AC) allows the turbine to operate at variable speed while delivering grid-compatible power.",
    order: 64,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Renewable Energy",
    question: "What is the purpose of an isolation transformer used in an EV charging (EVSE) installation?",
    options: [
      "To step up utility voltage to the 800V DC required by the EV battery",
      "To galvanically isolate the EV charging circuit from the utility supply, providing shock protection",
      "To provide voltage regulation during high EV charging demand",
      "To convert three-phase utility power to single-phase for the EVSE"
    ],
    correctIndex: 1,
    explanation: "Isolation transformers in EVSE installations provide galvanic isolation — no direct metallic connection between primary (utility) and secondary (EV charging) sides. This prevents shock from utility ground faults reaching the vehicle chassis, which a user might contact during charging. It also prevents DC injection into the utility system from certain charger designs.",
    order: 65,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — High Voltage",
    question: "Above what voltage level does a system qualify as 'high voltage' under the CEC?",
    options: [
      "601V",
      "750V",
      "1000V",
      "5000V"
    ],
    correctIndex: 1,
    explanation: "The CEC defines high voltage as systems operating above 750V. Voltages from 751V to 25,000V are classified as medium voltage in industry practice, but CEC rules for HV systems (Section 36) apply above 750V. Common HV distribution voltages in industrial settings include 4,160V, 13,800V, and 27,600V.",
    order: 66,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — High Voltage",
    question: "What is the purpose of stress relief terminations (also called stress cones) on medium-voltage cable terminations?",
    options: [
      "To provide physical support for the cable at the termination point",
      "To control the electric field concentration at the point where the cable shielding is cut back, preventing insulation failure",
      "To colour-code the phases at MV terminations",
      "To provide moisture protection for the cable end"
    ],
    correctIndex: 1,
    explanation: "At the point where MV cable shielding is cut back, the electric field becomes highly concentrated at the cut edge. Without stress relief, this concentration causes corona discharge and eventually insulation breakdown (tracking). Stress cones (moulded rubber or hand-applied tape) gradually redistribute the electric field over a longer distance, eliminating the dangerous concentration and allowing the termination to operate reliably.",
    order: 67,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "c",
    topicLabel: "MWA C — Conductors and Cables",
    question: "A #12 AWG copper conductor with RW90 insulation has a base ampacity of 20A at 30°C ambient. The conductor is bundled with 6 other current-carrying conductors. What correction factor applies?",
    options: [
      "0.50 (50%)",
      "0.70 (70%)",
      "0.80 (80%)",
      "0.90 (90%)"
    ],
    correctIndex: 1,
    explanation: "CEC Table 5C provides bundling correction factors. For 7–9 current-carrying conductors bundled together, the ampacity correction factor is 0.70. Therefore, the derated ampacity = 20A × 0.70 = 14A. Bundling reduces heat dissipation, requiring derating to prevent insulation damage.",
    order: 69,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "c",
    topicLabel: "MWA C — Conductors and Cables",
    question: "What is the minimum conductor size permitted for 15A branch circuits in a commercial building under the CEC?",
    options: [
      "#14 AWG",
      "#12 AWG",
      "#10 AWG",
      "#8 AWG"
    ],
    correctIndex: 0,
    explanation: "CEC Table 2 allows #14 AWG copper as the minimum conductor size for 15A branch circuits. However, many jurisdictions and engineers specify #12 AWG as a minimum for all commercial work for improved voltage drop performance.",
    order: 70,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "Common Occupational Skills",
    question: "Which class of hard hat provides protection against contact with energized conductors up to 20,000 V?",
    options: [
      "Class B",
      "Class E",
      "Class G",
      "Class C"
    ],
    correctIndex: 1,
    explanation: "Class E (Electrical) hard hats are rated to 20,000 V and are the required standard for construction electricians working near energized systems. Class G (General) is rated to 2,200 V and Class C (Conductive) provides no electrical protection.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "Common Occupational Skills",
    question: "After applying lock-out to a circuit, what is the correct next step before beginning work?",
    options: [
      "Notify the supervisor that work is beginning",
      "Apply a personal danger tag to the panel",
      "Test for absence of voltage using rated equipment",
      "Install temporary protective grounds on all conductors"
    ],
    correctIndex: 2,
    explanation: "After isolating and locking out the circuit, the worker must always test for absence of voltage using properly rated test equipment to confirm the circuit is de-energized before making contact. Applying temporary protective grounds comes after confirming absence of voltage, where required.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "Common Occupational Skills",
    question: "A construction electrician discovers a cracked rubber insulating glove before starting a task on an energized panel. What is the correct action?",
    options: [
      "Tape the crack with electrical tape and proceed",
      "Use the glove for low-voltage work only",
      "Tag the glove as defective and remove it from service",
      "Wear leather gloves over the cracked rubber glove"
    ],
    correctIndex: 2,
    explanation: "Damaged or defective PPE must be immediately tagged and removed from service, regardless of the perceived severity of the damage. A cracked rubber insulating glove provides no reliable protection against shock and must never be used.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "Common Occupational Skills",
    question: "What CAT category rating should a multimeter have for use on a 600V three-phase distribution panel busbar?",
    options: [
      "CAT I",
      "CAT II",
      "CAT III",
      "CAT IV"
    ],
    correctIndex: 2,
    explanation: "CAT III covers three-phase distribution systems, busbars, feeders, disconnects, and fixed equipment. Using a lower-rated meter on a higher-category circuit creates a risk of catastrophic failure from transient overvoltages. Always select the highest applicable CAT rating.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "Common Occupational Skills",
    question: "Which tool requires a separate certification to operate on a construction site?",
    options: [
      "Cable puller",
      "Conduit threading machine",
      "Powder-actuated tool",
      "Hydraulic cable cutter"
    ],
    correctIndex: 2,
    explanation: "Powder-actuated tools (PATs) require a specific certification to operate because of the hazards associated with the explosive powder charge. The operator must be certified by the manufacturer or an approved training provider, and must follow strict loading and usage procedures.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "Common Occupational Skills",
    question: "When setting up an extension ladder, what is the correct angle ratio?",
    options: [
      "3:1 (one foot out for every 3 feet of height)",
      "4:1 (one foot out for every 4 feet of height)",
      "5:1 (one foot out for every 5 feet of height)",
      "2:1 (one foot out for every 2 feet of height)"
    ],
    correctIndex: 1,
    explanation: "The correct angle for an extension ladder is 4:1 — for every 4 feet of height, the base is set 1 foot away from the wall. This creates a 75° angle, which is the optimal balance between stability and climbing safety.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "Common Occupational Skills",
    question: "Which test provides a baseline measurement of cable insulation health that can be compared to future readings to detect degradation?",
    options: [
      "Continuity test",
      "Insulation resistance (megger) test",
      "High-potential (hi-pot) test",
      "Ground loop impedance test"
    ],
    correctIndex: 1,
    explanation: "An insulation resistance (IR) test using a megohmmeter provides a baseline value (measured in MΩ or GΩ) that is recorded at commissioning and compared at future maintenance intervals. Declining IR values indicate insulation degradation before a failure occurs.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "Common Occupational Skills",
    question: "Before energizing a new motor installation, what instrument is used to verify correct phase rotation?",
    options: [
      "Multimeter",
      "Oscilloscope",
      "Phase rotation meter",
      "Power quality analyzer"
    ],
    correctIndex: 2,
    explanation: "A phase rotation meter (also called a phase sequence tester) confirms that the phase sequence (A-B-C) at the motor terminals matches the required direction of rotation. Incorrect phase rotation will cause a motor to run backwards, potentially damaging driven equipment.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "In a 120/208V three-phase wye service, what is the voltage measured between any two phase conductors?",
    options: [
      "120V",
      "208V",
      "240V",
      "347V"
    ],
    correctIndex: 1,
    explanation: "In a 120/208V wye system, each phase is 120V to neutral. The phase-to-phase voltage is 120V × √3 = 207.8V ≈ 208V. This is the standard commercial service voltage in Canada.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "Which phase conductor must be identified with orange colour coding in a 120/240V high-leg delta service?",
    options: [
      "Phase A",
      "Phase B (high leg)",
      "Phase C",
      "The neutral"
    ],
    correctIndex: 1,
    explanation: "In a 120/240V high-leg (wild-leg) delta system, the B phase connects to the midpoint of the delta winding, resulting in approximately 208V to neutral — more than double the 120V of A and C phases. This \"high leg\" must be identified with orange conductors or markings to prevent 120V devices from being accidentally connected to it.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "What is the minimum length of a copper-clad steel ground rod per the CEC?",
    options: [
      "1.2 m",
      "1.8 m",
      "2.4 m",
      "3.0 m"
    ],
    correctIndex: 2,
    explanation: "The CEC requires ground rods to be a minimum of 2.4 m (approximately 8 feet) long. If soil conditions prevent driving the rod to its full length, two rods bonded together may be used as an alternative.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "A GFCI device trips when it detects a ground fault current of approximately:",
    options: [
      "50 mA",
      "15 mA",
      "5 mA",
      "100 mA"
    ],
    correctIndex: 2,
    explanation: "GFCI devices are designed to trip at a ground fault current of approximately 4–6 mA (commonly stated as 5 mA). This is below the threshold for ventricular fibrillation (approximately 75–100 mA) but above normal leakage current levels, preventing nuisance tripping.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "Which type of UPS provides the best power quality because the load is always powered through the inverter?",
    options: [
      "Offline (standby) UPS",
      "Line-interactive UPS",
      "Online (double-conversion) UPS",
      "Ferroresonant UPS"
    ],
    correctIndex: 2,
    explanation: "An online (double-conversion) UPS continuously converts incoming AC to DC, then back to AC through its inverter. This provides complete isolation from utility power quality problems (harmonics, transients, sags), zero transfer time on power failure, and the cleanest possible output voltage waveform.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "Which NEMA enclosure type is required for outdoor equipment that must be protected from rain and direct weather?",
    options: [
      "NEMA Type 1",
      "NEMA Type 3R",
      "NEMA Type 12",
      "NEMA Type 7"
    ],
    correctIndex: 1,
    explanation: "NEMA Type 3R enclosures are rated for outdoor use and protect against rain, sleet, and snow. NEMA Type 1 is general-purpose indoor only. Type 12 is indoor dust-tight. Type 7 is for hazardous locations.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "A 75 kVA, 600V/208V three-phase transformer delivers full rated load. What is the approximate full-load secondary current?",
    options: [
      "72A",
      "125A",
      "208A",
      "361A"
    ],
    correctIndex: 2,
    explanation: "I = kVA / (√3 × V) = 75,000 / (1.732 × 208) = 75,000 / 360.3 ≈ 208A. This is the full-load secondary current at the 208V winding. The full-load primary current at 600V would be: 75,000 / (1.732 × 600) ≈ 72A.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "A grid-tied solar inverter must have anti-islanding protection. What is the purpose of this feature?",
    options: [
      "To prevent the inverter from feeding power back to the grid",
      "To shut down the inverter when the utility grid goes offline, preventing back-energization of downed power lines",
      "To protect the inverter from lightning surges on the grid",
      "To regulate the output voltage to match the grid frequency"
    ],
    correctIndex: 1,
    explanation: "Anti-islanding protection shuts down a grid-tied inverter automatically when utility power is lost. Without it, the solar system could continue to energize the utility distribution lines during an outage, creating a lethal hazard for utility workers working on \"de-energized\" lines.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "When terminating a high-voltage shielded cable, what is the purpose of a stress relief termination?",
    options: [
      "To prevent moisture from entering the cable end",
      "To manage the electric field stress concentration at the point where the cable shield ends",
      "To provide mechanical protection at the cable entrance to equipment",
      "To reduce the conductor resistance at the termination point"
    ],
    correctIndex: 1,
    explanation: "When the metallic shield of an HV cable is cut back, the electric field concentrates at the shield cutback point — this can lead to insulation breakdown. Stress relief terminations (heat-shrink or cold-shrink kits with built-in stress cones) redistribute the electric field stress gradually, preventing localized breakdown.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "C",
    topicLabel: "Wiring Systems",
    question: "A 30-metre, single-phase, 120V branch circuit uses #12 AWG copper conductors (resistance = 5.21 Ω/km). The circuit supplies a 15A continuous load. What is the approximate voltage drop?",
    options: [
      "1.6V",
      "3.1V",
      "4.7V",
      "6.2V"
    ],
    correctIndex: 2,
    explanation: "VD = 2 × L × R × I / 1000 = 2 × 30m × 5.21 Ω/km × 15A / 1000 = 2 × 30 × 0.00521 × 15 = 4.69V ≈ 4.7V. The percentage voltage drop = 4.7V / 120V = 3.9%, which exceeds the CEC recommended 3% for branch circuits — a larger conductor should be considered.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "C",
    topicLabel: "Wiring Systems",
    question: "Three #10 AWG conductors are installed in a conduit. The maximum conduit fill is 40% of its cross-sectional area. What does this rule apply to?",
    options: [
      "Any number of conductors in any conduit type",
      "Three or more conductors in any conduit type",
      "Two conductors; three or more use 53%",
      "Only conductors with insulation thicker than 1.5mm"
    ],
    correctIndex: 1,
    explanation: "Per CEC Table B-2 (Conduit Fill), three or more conductors in a conduit are limited to 40% of the conduit's internal cross-sectional area. One conductor is limited to 53%, and two conductors to 31%. These limits ensure adequate pulling clearance and heat dissipation.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "C",
    topicLabel: "Wiring Systems",
    question: "Which conduit type is permitted for direct burial and concrete encasement, and provides the highest level of mechanical protection?",
    options: [
      "EMT",
      "FMC",
      "RNMC (PVC)",
      "RMC (RSC)"
    ],
    correctIndex: 3,
    explanation: "Rigid Metal Conduit (RMC, also called RSC — Rigid Steel Conduit) is the heaviest-wall conduit and is approved for all locations including direct burial, concrete encasement, and hazardous locations. EMT cannot be buried directly. FMC is not for burial. PVC (RNMC) cannot serve as an equipment grounding conductor.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "C",
    topicLabel: "Wiring Systems",
    question: "A recessed luminaire is installed in a ceiling where blown-in insulation will be placed directly over the fixture. What is the minimum requirement?",
    options: [
      "The luminaire must be rated for damp locations",
      "The luminaire must be IC-rated (insulation contact)",
      "A minimum 50mm air gap must be maintained around the fixture",
      "The luminaire must be a Type AT (airtight) LED"
    ],
    correctIndex: 1,
    explanation: "When insulation will be in contact with or cover a recessed luminaire, the fixture must be IC-rated (Insulation Contact rated). Non-IC luminaires can overheat if insulation covers them, creating a fire hazard. IC-rated luminaires are designed to safely operate with insulation in contact.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "C",
    topicLabel: "Wiring Systems",
    question: "In an airport runway series lighting circuit, why is an isolation transformer installed at each individual runway light?",
    options: [
      "To step up the voltage to the required lighting level",
      "To isolate each fixture so that a fault in one lamp does not interrupt the entire series circuit",
      "To provide GFCI protection for each lamp",
      "To regulate the current independently at each fixture"
    ],
    correctIndex: 1,
    explanation: "Airport runway lights are wired in a series circuit powered by a constant current regulator. An isolation transformer at each fixture isolates the lamp so that if the lamp fails (open circuit), the series circuit continues to flow through the transformer secondary — maintaining all other lights in the circuit.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "C",
    topicLabel: "Wiring Systems",
    question: "A 2400W, 240V electric baseboard heater is to be installed. What is the minimum branch circuit breaker size required by the CEC (continuous load rule)?",
    options: [
      "10A",
      "15A",
      "20A",
      "25A"
    ],
    correctIndex: 1,
    explanation: "Load current = 2400W ÷ 240V = 10A. Continuous load rule: circuit breaker ≥ 10A × 125% = 12.5A. The next standard breaker size above 12.5A is 15A. Therefore, a 15A, 240V double-pole breaker with #12 AWG conductors is the minimum required.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "C",
    topicLabel: "Wiring Systems",
    question: "Per the National Building Code, what is the maximum transfer time allowed for an emergency generator to restore power to emergency lighting?",
    options: [
      "5 seconds",
      "10 seconds",
      "30 seconds",
      "60 seconds"
    ],
    correctIndex: 1,
    explanation: "The National Building Code (NBC) requires emergency power to be restored within 10 seconds of normal power failure for emergency lighting and life safety systems. This is achieved through the automatic transfer switch (ATS) and the generator's quick-start system.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "D",
    topicLabel: "Motors and Control Systems",
    question: "A 10 HP, 600V, three-phase motor has a nameplate FLA of 11.0A. What is the minimum branch circuit conductor ampacity required by the CEC?",
    options: [
      "11.0A",
      "13.75A",
      "15.0A",
      "17.0A"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 28-106: Motor branch circuit conductors must be sized to a minimum of 125% of the motor FLA. 11.0A × 125% = 13.75A. Select conductors with an ampacity of at least 13.75A (minimum #14 AWG copper or #12 AWG copper, confirmed against CEC Table 2).",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "D",
    topicLabel: "Motors and Control Systems",
    question: "What is the purpose of the \"holding\" or \"sealing\" auxiliary contact in a three-wire motor starter control circuit?",
    options: [
      "To hold the motor at constant speed during load variations",
      "To maintain the contactor coil energized after the START button is released",
      "To provide overload protection during motor acceleration",
      "To prevent the motor from reversing direction"
    ],
    correctIndex: 1,
    explanation: "The auxiliary holding (sealing) contact is a normally open contact on the main contactor that closes when the contactor energizes. It creates a parallel path around the momentary START pushbutton, maintaining the coil circuit closed after the start button is released. Without it, the motor would stop as soon as the START button is released.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "D",
    topicLabel: "Motors and Control Systems",
    question: "Which internal stage of a VFD produces the variable-frequency AC output to the motor?",
    options: [
      "Rectifier stage",
      "DC bus capacitor bank",
      "Inverter stage (IGBT switching)",
      "EMC input filter"
    ],
    correctIndex: 2,
    explanation: "The inverter stage uses IGBT (Insulated Gate Bipolar Transistor) switches to chop the DC bus voltage into pulses of varying width (PWM — Pulse Width Modulation), creating a variable-frequency, variable-voltage AC output that simulates a sine wave at the desired frequency and voltage.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "D",
    topicLabel: "Motors and Control Systems",
    question: "A squirrel cage induction motor is running at 1740 RPM on a 60 Hz, 4-pole supply. What is the synchronous speed, and what is the percent slip?",
    options: [
      "1800 RPM synchronous speed, 3.3% slip",
      "1500 RPM synchronous speed, 16% slip",
      "3600 RPM synchronous speed, 51.7% slip",
      "1200 RPM synchronous speed, 45% slip"
    ],
    correctIndex: 0,
    explanation: "Synchronous speed: Ns = 120 × f / P = 120 × 60 / 4 = 1800 RPM. Slip = (Ns − Nr) / Ns × 100% = (1800 − 1740) / 1800 × 100% = 3.33%. Normal full-load slip for squirrel cage motors is 2–5%.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "D",
    topicLabel: "Motors and Control Systems",
    question: "In PLC ladder logic, what does an XIC (Examine if Closed) instruction represent?",
    options: [
      "A normally closed contact that opens when the bit is 1",
      "A normally open contact that is TRUE when the corresponding bit is 1",
      "An output coil that energizes when the rung is true",
      "A timer instruction that activates on a rising edge"
    ],
    correctIndex: 1,
    explanation: "XIC (Examine if Closed) is equivalent to a normally open (NO) contact in relay logic. The instruction evaluates as TRUE (passes power) when the corresponding PLC address bit is 1 (ON). It is the most common instruction in PLC ladder programs.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "E",
    topicLabel: "Signalling & Communication Systems",
    question: "In a fire alarm system, what distinguishes a Class A circuit from a Class B circuit?",
    options: [
      "Class A uses 2-wire circuits; Class B uses 4-wire circuits",
      "Class A is a loop circuit that remains functional despite a single open or short; Class B is a T-circuit that is disabled by a single open",
      "Class A circuits require end-of-line resistors; Class B does not",
      "Class A uses addressable devices; Class B uses conventional (zone) devices"
    ],
    correctIndex: 1,
    explanation: "Class A wiring loops both return conductors back to the FACP so that a single open in the circuit does not interrupt communication with devices beyond the open. Class B uses a T-configuration with an end-of-line resistor; a single open fault disables the circuit beyond the open. Class A is required by the NBC in high-rise buildings.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "E",
    topicLabel: "Signalling & Communication Systems",
    question: "Which cable category supports 10 Gbps Ethernet up to a maximum of 100 metres?",
    options: [
      "Cat 5e",
      "Cat 6",
      "Cat 6A",
      "Cat 3"
    ],
    correctIndex: 2,
    explanation: "Cat 6A (Category 6 Augmented) is rated at 500 MHz and supports 10GBASE-T (10 Gbps Ethernet) over the full 100 m channel length. Cat 6 supports 10 Gbps only up to about 55 m. Cat 5e supports only 1 Gbps.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "E",
    topicLabel: "Signalling & Communication Systems",
    question: "Which open protocol is most commonly used for communication between building automation system components from different manufacturers?",
    options: [
      "Modbus RTU",
      "BACnet (ANSI/ASHRAE 135)",
      "Profibus DP",
      "DeviceNet"
    ],
    correctIndex: 1,
    explanation: "BACnet (ANSI/ASHRAE 135) is the dominant open protocol for building automation systems in North America. It was specifically developed for building automation applications (HVAC, lighting, security) and supports multiple physical layers (BACnet/IP, BACnet MS/TP, BACnet wireless). Modbus and Profibus are more common in industrial automation.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "A 120 V single-phase circuit supplies a 16 A load over 40 metres with #12 AWG copper (R = 5.21 Ω/km). What is the voltage drop?",
    options: [
      "3.3 V",
      "5.3 V",
      "6.7 V",
      "10.6 V"
    ],
    correctIndex: 2,
    explanation: "VD = 2 × 40 × 5.21 × 16 / 1000 = 6.67 V ≈ 6.7 V. VD % = 6.7 / 120 = 5.6% — exceeds the CEC 3% recommendation for branch circuits.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "Four conductors each have an outside diameter of 10 mm. What is the minimum internal cross-sectional area of conduit required (fill rule for 3+ conductors)?",
    options: [
      "314 mm²",
      "392 mm²",
      "785 mm²",
      "1257 mm²"
    ],
    correctIndex: 2,
    explanation: "Area per conductor = π × 10² / 4 = 78.54 mm². Total = 4 × 78.54 = 314.2 mm². Minimum conduit area = 314.2 / 0.40 = 785 mm².",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "A 4-pole, 60 Hz squirrel-cage motor runs at 1728 rpm at full load. What is the percent slip?",
    options: [
      "2.0%",
      "3.5%",
      "4.0%",
      "5.0%"
    ],
    correctIndex: 2,
    explanation: "Ns = 120 × 60 / 4 = 1800 rpm. Slip = (1800 − 1728) / 1800 × 100% = 72/1800 × 100% = 4.0%.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "What is the purpose of a Temporary Protective Ground (TPG) applied to a de-energized high-voltage conductor?",
    options: [
      "To provide a continuous grounding path during normal operation",
      "To drain capacitive charge and prevent accidental re-energization from creating a shock hazard",
      "To identify the conductor as de-energized for AHJ inspection",
      "To connect the conductor to the lightning protection system"
    ],
    correctIndex: 1,
    explanation: "TPGs are shorting cables attached between phase conductors and earth on de-energized HV systems. They drain any capacitive or induced voltage, and if the line is accidentally re-energized, they create a bolted fault that trips upstream protection — protecting the worker from shock. Required by the CEC for HV work.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "Which PLC ladder logic instruction is equivalent to a normally closed contact?",
    options: [
      "XIC (Examine If Closed)",
      "XIO (Examine If Open)",
      "OTE (Output Energize)",
      "OTL (Output Latch)"
    ],
    correctIndex: 1,
    explanation: "XIO (Examine If Open) evaluates as TRUE (passes power) when the corresponding PLC address bit is 0 — exactly like a normally closed contact that passes current when the coil is not energized. XIC is the normally open equivalent.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "You encounter a question you are unsure about. What is the best exam strategy?",
    options: [
      "Leave it blank to avoid losing points for a wrong answer",
      "Spend as much time as needed until you are confident",
      "Make your best guess, mark it, move on, and return to it at the end",
      "Choose the longest answer because it is usually correct"
    ],
    correctIndex: 2,
    explanation: "The Red Seal exam has no penalty for wrong answers — an unanswered question always scores 0, but a guess has a 25% chance of scoring. The best strategy is to guess, mark, move on, and return with fresh eyes. Spending too long on one question risks running out of time for easier questions later.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "Which AMA (Area of Measurement) should receive the most study time, and how many exam questions does it represent?",
    options: [
      "AMA B — Generating, distribution and supply systems — 26 questions",
      "AMA D — Motors and control systems — 18 questions",
      "AMA C — Wiring systems — 34 questions",
      "AMA A — Common occupational skills — 12 questions"
    ],
    correctIndex: 2,
    explanation: "AMA C (Wiring systems) is the highest-weighted section with 34 questions (34% of the exam). It covers cable pathways, conductors, cables, branch circuits, lighting, HVAC, electric heating, and emergency lighting. Strong performance here is the single most important factor for passing.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA A] Which class of rubber insulating gloves provides the highest voltage protection?",
    options: [
      "Class 00 — 500V AC",
      "Class 0 — 1,000V AC",
      "Class 2 — 17,000V AC",
      "Class 4 — 40,000V AC"
    ],
    correctIndex: 3,
    explanation: "Rubber insulating glove classes: 00 (500V), 0 (1,000V), 1 (7,500V), 2 (17,000V), 3 (26,500V), 4 (40,000V AC). Class 4 provides the highest protection and is required for high-voltage work.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA A] What is the correct sequence for the first three steps of a LOTO procedure?",
    options: [
      "Isolate → Notify → Test for absence of voltage",
      "Notify → Identify all energy sources → Isolate",
      "Lock → Tag → Test for absence of voltage",
      "Test → Isolate → Lock and tag"
    ],
    correctIndex: 1,
    explanation: "LOTO sequence: (1) Notify, (2) Identify all isolation points and energy sources, (3) Isolate, (4) Lock and tag, (5) Test for absence of voltage, (6) Verify zero-energy state.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA A] A multimeter used on a 600 V three-phase distribution panel bus must be rated at minimum:",
    options: [
      "CAT I",
      "CAT II",
      "CAT III",
      "CAT IV"
    ],
    correctIndex: 2,
    explanation: "CAT III covers three-phase distribution systems, bus bars, disconnects, and fixed equipment — the minimum for this application. CAT IV is for service entrance. Always use the highest applicable category.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA A] Which type of drawing shows the final as-installed condition and routing of all electrical systems after project completion?",
    options: [
      "Shop drawing",
      "Wiring diagram",
      "As-built (record) drawing",
      "Elevation schematic"
    ],
    correctIndex: 2,
    explanation: "As-built (record) drawings are updated throughout the project and at completion to reflect the actual installed condition — including routing changes, conduit sizes, and circuit changes made during construction. They are a required closeout document.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA B] In a 347/600 V three-phase wye system, what is the voltage between a phase conductor and neutral?",
    options: [
      "208 V",
      "240 V",
      "347 V",
      "600 V"
    ],
    correctIndex: 2,
    explanation: "347 V to neutral × √3 = 601 V ≈ 600 V phase-to-phase. This is the standard Canadian industrial supply.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA B] A concrete-encased (Ufer) grounding electrode requires a minimum of how many metres of conductor embedded in the footing?",
    options: [
      "2.4 m",
      "3.0 m",
      "6.0 m",
      "7.5 m"
    ],
    correctIndex: 2,
    explanation: "The CEC requires a minimum of 6 m of rebar (≥ 10 mm diameter) or copper conductor embedded in the concrete footing or foundation for a concrete-encased electrode.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA B] A double-conversion (online) UPS continuously powers the load from its inverter. What is the main advantage of this design?",
    options: [
      "Larger batteries and longer runtime",
      "Zero transfer time on failure and complete isolation from utility power quality issues",
      "Lower cost than standby UPS",
      "Built-in surge suppression that an offline UPS does not have"
    ],
    correctIndex: 1,
    explanation: "Online UPS: AC→DC→AC continuously. The load is always fed by the inverter — zero transfer time and complete isolation from utility harmonics, sags, swells, and frequency variation. Most reliable topology for critical loads.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA B] A 75 kVA, 600 V / 208 V three-phase transformer is fully loaded. What is the approximate full-load secondary current?",
    options: [
      "72 A",
      "125 A",
      "208 A",
      "360 A"
    ],
    correctIndex: 2,
    explanation: "I = S / (√3 × V) = 75,000 / (1.732 × 208) = 75,000 / 360.3 ≈ 208 A.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA B] A current-limiting fuse is specified on a distribution panel. What distinguishes it from a standard time-delay fuse?",
    options: [
      "It opens more slowly to allow motor inrush without opening",
      "It interrupts fault current in less than one half-cycle, limiting let-through peak energy",
      "It uses a reusable fuse element that can be reset after operation",
      "It is rated for higher continuous current than a standard fuse of the same size"
    ],
    correctIndex: 1,
    explanation: "Current-limiting fuses open in less than one half-cycle (< 8 ms at 60 Hz), limiting let-through peak current to a fraction of available fault current. This protects downstream equipment from the mechanical and thermal stress of full-magnitude faults.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA B] Why must antioxidant compound be applied to all aluminium conductor terminations?",
    options: [
      "To lubricate the conductor when pulling in conduit",
      "To prevent the natural aluminium oxide layer from creating a high-resistance connection",
      "To provide corrosion protection only in wet locations",
      "To meet CEC requirement only for conductors larger than 1/0 AWG"
    ],
    correctIndex: 1,
    explanation: "Aluminium oxidizes quickly in air, forming aluminium oxide — an electrical insulator. Antioxidant compound prevents new oxide formation and helps displace existing oxide at the contact interface, ensuring a low-resistance, reliable connection.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA B] What happens if a grid-tied solar inverter lacks anti-islanding protection and the utility is down?",
    options: [
      "The inverter automatically switches to battery backup mode",
      "The solar system could continue to feed de-energized utility lines, creating a lethal hazard",
      "The inverter output voltage rises above normal, damaging connected loads",
      "The solar panels stop producing power without the grid reference voltage"
    ],
    correctIndex: 1,
    explanation: "Without anti-islanding, a grid-tied solar system continues to feed the distribution grid during an outage. Line workers and first responders who assume lines are de-energized could be electrocuted. Anti-islanding is a mandatory safety requirement for all grid-tied inverters.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA B] What NEMA enclosure type is required for outdoor equipment in a food processing plant where corrosion resistance is essential?",
    options: [
      "NEMA Type 1",
      "NEMA Type 3R",
      "NEMA Type 4",
      "NEMA Type 4X"
    ],
    correctIndex: 3,
    explanation: "NEMA Type 4X adds corrosion resistance (stainless steel or fibreglass construction) to the watertight protection of Type 4. Required in food, marine, chemical, and other corrosive environments. Type 3R is rain-resistant for outdoor use but is neither watertight nor corrosion-resistant.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] Three #8 AWG conductors each have a cross-sectional area of 43.2 mm². What is the minimum required internal conduit area?",
    options: [
      "130 mm²",
      "216 mm²",
      "324 mm²",
      "432 mm²"
    ],
    correctIndex: 2,
    explanation: "Total conductor area = 3 × 43.2 = 129.6 mm². Minimum conduit area = 129.6 / 0.40 = 324 mm² (40% fill rule for 3+ conductors).",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] A circuit supplies a continuous 28 A load. What is the minimum conductor ampacity required by the CEC?",
    options: [
      "28 A",
      "30 A",
      "35 A",
      "40 A"
    ],
    correctIndex: 2,
    explanation: "Continuous load (≥ 3 hours): minimum conductor ampacity = FLA × 125% = 28 × 1.25 = 35 A.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] Which conduit uses set-screw or compression fittings, is thin-wall steel, and is the most common conduit in commercial construction?",
    options: [
      "RMC",
      "IMC",
      "EMT",
      "RNMC (PVC)"
    ],
    correctIndex: 2,
    explanation: "EMT (Electrical Metallic Tubing) is thin-wall steel, uses set-screw or compression (non-threaded) fittings, and is the most widely installed conduit in commercial and light industrial work. Not approved for direct burial or concrete embedment.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] What is the maximum total degrees of bend allowed between two conduit pull points?",
    options: [
      "180°",
      "270°",
      "360°",
      "450°"
    ],
    correctIndex: 2,
    explanation: "The CEC limits total bends between two pull points to 360° — equivalent to four 90° bends. More bends require additional pull points.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] A 4,800 W, 240 V single-phase baseboard heater is a continuous load. What is the minimum branch circuit breaker size?",
    options: [
      "20 A",
      "25 A",
      "30 A",
      "35 A"
    ],
    correctIndex: 1,
    explanation: "Load current = 4800 / 240 = 20 A. Continuous: breaker ≥ 20 × 1.25 = 25 A. Next standard size is 25 A — use a 25 A two-pole breaker with #10 AWG copper.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] Which cable has copper tape armour and PVC outer sheath and is rated for direct burial and cable tray?",
    options: [
      "NMD90",
      "AC90 (BX)",
      "TECK90",
      "RW90"
    ],
    correctIndex: 2,
    explanation: "TECK90 has XLPE-insulated conductors, copper tape armour, and 90°C PVC outer sheath. Approved for cable tray, direct burial, wet locations, and outdoor use.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] What protection does the CEC require on 125 V receptacles installed in a bathroom?",
    options: [
      "AFCI breaker",
      "GFCI protection",
      "Surge protection device",
      "Standard 15 A breaker only"
    ],
    correctIndex: 1,
    explanation: "The CEC requires GFCI protection on all 125 V receptacles in bathrooms, garages, kitchens, and outdoors. GFCI trips at a ground fault current of approximately 5 mA within 1/40 of a second.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] What is the maximum voltage drop recommended by the CEC for a branch circuit?",
    options: [
      "1%",
      "3%",
      "5%",
      "8%"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 8-102 recommends ≤ 3% for branch circuits and ≤ 5% total for feeder and branch circuit combined.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] A 120 V single-phase circuit, 40 m long, supplies 16 A with #12 AWG copper (R = 5.21 Ω/km). What is the voltage drop?",
    options: [
      "3.3 V",
      "5.3 V",
      "6.7 V",
      "10.6 V"
    ],
    correctIndex: 2,
    explanation: "VD = 2 × 40 × 5.21 × 16 / 1000 = 6.67 V ≈ 6.7 V. VD % = 6.7 / 120 = 5.6% — exceeds CEC 3% recommendation.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] According to the NBC, what is the minimum battery backup duration that emergency lighting must maintain on loss of power?",
    options: [
      "30 minutes",
      "1 hour",
      "90 minutes",
      "8 hours"
    ],
    correctIndex: 0,
    explanation: "The NBC requires a minimum of 30 minutes of emergency lighting. The annual ULC S524 test requires a full 90-minute discharge test to verify the battery can support the load for the required period.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA D] A 600 V three-phase motor has a nameplate FLA of 15.2 A. What is the minimum ampacity of the branch circuit conductors?",
    options: [
      "14.2 A",
      "19.0 A",
      "22.8 A",
      "25.0 A"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 28-106: conductor ampacity ≥ FLA × 125% = 15.2 × 1.25 = 19.0 A minimum.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA D] A 6-pole, 60 Hz motor runs at 1150 rpm at full load. What is the percent slip?",
    options: [
      "2.1%",
      "4.2%",
      "6.3%",
      "8.4%"
    ],
    correctIndex: 1,
    explanation: "Ns = 120 × 60 / 6 = 1200 rpm. Slip = (1200 − 1150) / 1200 × 100% = 4.2%.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA D] In a wye-delta reduced-voltage starter, starting torque is reduced to what fraction of full-voltage starting torque?",
    options: [
      "50%",
      "33%",
      "67%",
      "75%"
    ],
    correctIndex: 1,
    explanation: "In wye start, each winding receives reduced voltage 1/√3. Torque ∝ V², so torque = (1/√3)² = 1/3 ≈ 33% of full-voltage torque. Starting current is also reduced to 33%.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA D] Which stage of a VFD uses IGBT switches to produce a variable-frequency AC output from the DC bus?",
    options: [
      "Rectifier stage",
      "DC bus capacitor bank",
      "Inverter stage",
      "EMC input filter"
    ],
    correctIndex: 2,
    explanation: "The inverter stage uses IGBT switches with PWM to chop the DC bus voltage into a series of pulses that simulate a sine wave at the desired frequency and voltage — creating the variable-frequency output to the motor.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA D] In PLC ladder logic, what does the XIC (Examine If Closed) instruction do?",
    options: [
      "A normally closed contact that opens when the bit is 1",
      "A normally open contact that is TRUE when the corresponding bit is 1",
      "An output coil that energizes when the rung is true",
      "A timer instruction that activates on a rising edge"
    ],
    correctIndex: 1,
    explanation: "XIC (Examine If Closed) is equivalent to a normally open (NO) contact. The instruction is TRUE (passes power) when the corresponding PLC address bit is 1. It is the most common instruction in PLC ladder programs.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA E] A hospital fire alarm system must remain functional with a single wire open anywhere in the circuit. What wiring class is required?",
    options: [
      "Class B with end-of-line resistor",
      "Class A loop wiring",
      "Standard star wiring with GFCI",
      "Wireless (RF) devices only"
    ],
    correctIndex: 1,
    explanation: "Class A wiring loops both return conductors back to the FACP. A single open fault does not disable the circuit — the FACP communicates with all devices via the other path. Required by the NBC in high-rises, hospitals, and other critical occupancy buildings.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA E] A structured cabling pathway is certified \"Cat 6A\". What does this guarantee for the installed channel?",
    options: [
      "Rated to 250 MHz; supports 1 Gbps up to 100 m",
      "Rated to 500 MHz; supports 10 Gbps Ethernet up to 100 m",
      "Rated to 100 MHz; supports 100 Mbps only",
      "Uses shielded (ScTP) construction exclusively"
    ],
    correctIndex: 1,
    explanation: "Cat 6A is rated at 500 MHz and supports 10GBASE-T (10 Gbps) over the full 100 m horizontal channel length. Cat 6 achieves 10 Gbps only up to about 55 m.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA E] A BAS uses BACnet/IP. Occupancy sensors detect an empty floor, triggering an HVAC setback. Which component sends the \"unoccupied\" signal directly to the DDC controller?",
    options: [
      "The PoE switch powering the sensors",
      "The BAS supervisory server",
      "The occupancy sensor wired to a digital input on the DDC controller",
      "The security station HMI"
    ],
    correctIndex: 2,
    explanation: "Occupancy sensors provide a dry contact or low-voltage digital signal wired directly to a digital input on the local DDC controller. The DDC reads this signal, runs its control program, and commands HVAC actuators. The status is then reported to the BAS server over the BACnet/IP network.",
    order: 0,
  },
];
