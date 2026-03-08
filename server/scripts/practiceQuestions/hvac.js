/**
 * Practice questions for refrigeration & air conditioning mechanic.
 * Edit this file to add or change questions; run seedPracticeQuestions.js to seed the DB.
 */

export default [
  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-a-safety',
    topicLabel: 'MWA A — Safety and Healthy Workplace',
    question: 'A mechanic is working on a rooftop and must drill through a metal roof deck. Which combination of PPE is MOST appropriate for this specific task?',
    options: [
      'Safety glasses, hearing protection, and cut-resistant gloves',
      'Full face shield, hearing protection, steel-toed boots, and cut-resistant gloves',
      'Safety glasses and steel-toed boots only',
      'Chemical-resistant gloves and a half-face respirator'
    ],
    correctIndex: 1,
    explanation: 'Drilling through metal creates flying metal chips (requiring a full face shield, not just safety glasses), high noise levels (hearing protection), risk of cuts from sharp metal edges (cut-resistant gloves), and the risk of foot injury from dropped tools on a roof deck (steel-toed boots). A full face shield provides better protection than safety glasses alone for drilling operations.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-a-safety',
    topicLabel: 'MWA A — Safety and Healthy Workplace',
    question: 'An HVAC/R mechanic notices a colleague showing signs of heat exhaustion while working on a hot rooftop in summer. What is the FIRST appropriate action?',
    options: [
      'Continue working and ask the colleague to rest after the job is complete',
      'Call 911 immediately without doing anything else',
      'Move the colleague to a cool, shaded area, provide water, and monitor for worsening symptoms while someone contacts emergency services if needed',
      'Apply ice packs directly to the colleague\'s chest and back'
    ],
    correctIndex: 2,
    explanation: 'Heat exhaustion first aid involves removing the person from the hot environment, cooling them gradually, and rehydrating. Moving them to shade and providing cool water addresses the immediate cause. Monitoring for progression to heat stroke (loss of consciousness, confusion, stopping sweating) determines if 911 is needed. Applying ice directly can cause thermal shock; simply calling 911 without providing first aid wastes critical time.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-a-safety',
    topicLabel: 'MWA A — Safety and Healthy Workplace',
    question: 'Under WHMIS 2015, which label element tells a worker the most important steps to take if exposed to a hazardous product?',
    options: [
      'The product identifier (name)',
      'The supplier identifier (company name)',
      'The precautionary statements section',
      'The pictograms'
    ],
    correctIndex: 2,
    explanation: 'Precautionary statements on a WHMIS 2015 label provide specific, actionable instructions for prevention, response, storage, and disposal. They directly answer "what do I do if this happens?" — for example, "IF IN EYES: Rinse cautiously with water for several minutes." Pictograms communicate hazard type visually but do not provide specific response actions. The product and supplier identifiers are for tracking and emergency contact only.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-a-safety',
    topicLabel: 'MWA A — Safety and Healthy Workplace',
    question: 'Which of the following is classified as a PHYSICAL hazard in an HVAC/R workplace?',
    options: [
      'Inhaling refrigerant vapour in a confined mechanical room',
      'Skin contact with an alkaline coil-cleaning chemical',
      'Falls from a rooftop while moving equipment',
      'Developing hearing loss from chronic noise exposure over years'
    ],
    correctIndex: 2,
    explanation: 'A physical hazard is one that can cause immediate physical injury through energy transfer — in this case, a fall from height transferring kinetic energy. Inhaling refrigerant is a chemical/health hazard. Skin contact with a coil cleaner is a chemical hazard. Chronic hearing loss from noise is a health hazard (though noise itself is a physical agent, the harm described is a chronic health outcome). Falls represent the classic immediate physical hazard in trades work.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-a-safety',
    topicLabel: 'MWA A — Safety and Healthy Workplace',
    question: 'A safety data sheet (SDS) for a refrigerant coil cleaner lists a flash point of 38°C. It is a hot July day and the rooftop surface temperature is estimated at 55°C. What is the implication for the work task?',
    options: [
      'No implication — flash point only applies to indoor use',
      'The product is below its flash point and safe to use in any quantity',
      'The ambient surface temperature exceeds the flash point, meaning the product vapours could ignite if exposed to a spark or open flame — additional precautions or a substitute product are required',
      'The product\'s flash point is high enough that there is no flammability risk at these temperatures'
    ],
    correctIndex: 2,
    explanation: 'Flash point is the minimum temperature at which a liquid produces enough vapour to ignite momentarily when exposed to an ignition source. If the ambient or surface temperature (55°C) exceeds the flash point (38°C), the product is already generating flammable vapours. Using it near electrical sparks, hot surfaces, or an oxy-acetylene torch creates a fire/explosion risk. The mechanic must either use a non-flammable alternative or implement strict ignition source elimination and ventilation controls.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-a-loto',
    topicLabel: 'MWA A — Lock-out/Tag-out',
    question: 'During a LOTO procedure on a large chiller, a second mechanic arrives to assist and needs to work on the same equipment. What is the correct procedure?',
    options: [
      'The second mechanic can proceed — the first mechanic\'s lock is sufficient for both workers',
      'The second mechanic must apply their own personal lock to every isolated energy source before beginning work',
      'The first mechanic removes their lock so the second mechanic can apply a shared lock',
      'The supervisor applies a master lock and both mechanics can work under it'
    ],
    correctIndex: 1,
    explanation: 'Each worker exposed to a hazard must have their own personal lock on every isolation point. The lock is a personal safety device — no worker\'s safety should depend on another person\'s lock. If the first mechanic finishes and leaves, they remove their own lock only. The second mechanic\'s lock remains until they personally complete and leave the area. Using a shared or supervisor lock defeats the purpose of LOTO by creating a single point of failure.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-a-communication',
    topicLabel: 'MWA A — Communication and Mentoring',
    question: 'A building owner calls to complain that their HVAC system is not maintaining temperature after a recent service call. When responding to this complaint professionally, what should the mechanic do FIRST?',
    options: [
      'Immediately blame the equipment and recommend a full system replacement',
      'Listen actively and without interruption, ask clarifying questions to understand the exact symptom, and schedule a follow-up visit',
      'Tell the owner that the system was working when the mechanic left and the problem must be their fault',
      'Refer the owner to the equipment manufacturer\'s warranty department'
    ],
    correctIndex: 1,
    explanation: 'Professional communication in trades begins with active listening and empathy. The mechanic must understand the specific symptom (when does it fail? which zones? what temperature?) before drawing any conclusions. Interrupting, deflecting blame, or immediately recommending expensive solutions damages the client relationship and may be factually wrong. Scheduling a revisit shows accountability and commitment to resolution, which is both professional and often required under service warranty obligations.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-a-communication',
    topicLabel: 'MWA A — Communication and Mentoring',
    question: 'An apprentice makes a mistake during a brazing task that results in a poor joint. What is the MOST effective mentoring response from the journeyperson?',
    options: [
      'Complete the repair yourself without comment to save time',
      'Immediately report the error to the supervisor without speaking to the apprentice first',
      'Describe specifically what went wrong and why, demonstrate the correct technique, then have the apprentice practice it again under supervision',
      'Reassign the apprentice to a non-technical task for the rest of the day'
    ],
    correctIndex: 2,
    explanation: 'Effective mentoring uses errors as learning opportunities, not punishments. Specific, behavioural feedback ("the heat was applied to the solder rather than the fitting base metal, which prevented capillary draw-in") is far more instructive than general criticism. Demonstrating the correct technique and having the apprentice immediately practice it (while the lesson is fresh) reinforces both the knowledge and the motor skill. Removing the apprentice from technical work prevents skill development and undermines confidence.',
    order: 0
  },

  // ============================================================
  // MWA B — Routine Trade Activities (16 questions)
  // ============================================================

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-tools',
    topicLabel: 'MWA B — Tools and Equipment',
    question: 'A mechanic is preparing to use an oxy-acetylene torch to braze refrigerant piping. Before lighting the torch, which safety device must be installed on BOTH the oxygen and acetylene hoses?',
    options: [
      'Pressure gauges rated for the specific gas',
      'Flashback arresters and check valves',
      'Needle valves for fine flow control',
      'Flow meters calibrated in litres per minute'
    ],
    correctIndex: 1,
    explanation: 'Flashback arresters stop a reverse flame from travelling back through the hose toward the regulator and cylinder — a potentially explosive event called a flashback. Check valves prevent gas from one hose from flowing backward into the other hose, which can create a flammable mixture inside the hose. Both must be installed at each torch handle connection (or at the regulator) on both hoses before any brazing operation. Pressure gauges and flow meters are useful but are not the required safety devices.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-tools',
    topicLabel: 'MWA B — Tools and Equipment',
    question: 'A digital manifold gauge set is connected to a running R-410A system. The high-side gauge reads 2,758 kPa and the corresponding saturation temperature shown on the display is 42°C. The actual liquid line temperature measured with a clamp-on thermometer is 30°C. What is the subcooling?',
    options: [
      '12°C',
      '30°C',
      '42°C',
      '72°C'
    ],
    correctIndex: 0,
    explanation: 'Subcooling = Saturation Temperature at condensing pressure − Measured liquid line temperature = 42°C − 30°C = 12°C. A subcooling of 12°C falls within the typical acceptable range of 10–15°C for a TXV-controlled system, indicating the system is likely properly charged. Digital manifolds automate the P/T lookup but the mechanic must still understand what the calculation means and whether the result is normal.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-tools',
    topicLabel: 'MWA B — Tools and Equipment',
    question: 'When using a clamp-on (inductive) ammeter to measure current on a single-phase compressor, the mechanic clamps around BOTH conductors simultaneously and reads 0 amps, even though the compressor is running. Why?',
    options: [
      'The compressor is drawing no current because it is in a soft-start mode',
      'The ammeter is faulty and must be replaced',
      'The two conductors carry equal and opposite currents that cancel each other out inside the clamp, producing a net zero reading — the clamp must be placed around only ONE conductor',
      'The compressor is single-phase and requires a different type of meter'
    ],
    correctIndex: 2,
    explanation: 'A clamp-on ammeter works by measuring the magnetic field produced by current flow through the conductor. In a single-phase circuit, the two conductors carry the same current in opposite directions at any given moment. When both are clamped together, their magnetic fields are equal and opposite and cancel, producing a zero reading. The clamp must be placed around only one conductor to measure the actual current. This is a common new-mechanic error.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-tools',
    topicLabel: 'MWA B — Tools and Equipment',
    question: 'A vacuum pump is being prepared for use after a long period of storage. The mechanic checks the pump oil and finds it is dark brown, cloudy, and has a slightly sweet odour. What should be done before using the pump?',
    options: [
      'The pump can be used — oil colour does not affect pump performance',
      'Add fresh oil on top of the existing oil to dilute the contamination',
      'Change the oil completely with fresh vacuum pump oil, run the pump briefly with the inlet capped to verify it reaches its blank-off vacuum, then proceed',
      'Heat the oil with a heat gun to evaporate the contamination'
    ],
    correctIndex: 2,
    explanation: 'Dark, cloudy vacuum pump oil indicates contamination with refrigerant, moisture, and acid from previous use — or degradation during storage. Contaminated oil dramatically reduces the pump\'s ability to reach deep vacuum (the oil\'s vapour pressure limits the minimum achievable vacuum). The oil must be changed before use. Running the pump briefly with the inlet capped and checking with a micron gauge confirms the pump can reach its rated blank-off vacuum (typically <20 microns) before being connected to a system.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-refrigerants',
    topicLabel: 'MWA B — Refrigerants and Oils',
    question: 'What does the ASHRAE refrigerant safety classification "A2L" mean?',
    options: [
      'Non-toxic and non-flammable at all concentrations',
      'Lower toxicity, mildly flammable with a maximum burning velocity ≤ 10 cm/s',
      'Higher toxicity and highly flammable',
      'Non-toxic and highly flammable with a low ignition energy'
    ],
    correctIndex: 1,
    explanation: 'ASHRAE Standard 34 safety classifications use two characters: the letter (A or B) indicates toxicity (A = lower toxicity, B = higher toxicity based on occupational exposure limits), and the number (1, 2, 2L, 3) indicates flammability. "2L" specifically designates refrigerants that are flammable but have a very low burning velocity (≤ 10 cm/s) and a relatively high minimum ignition energy — making them significantly harder to ignite than Class 2 or 3 refrigerants. Examples include R-32, R-454B, and R-1234yf.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-refrigerants',
    topicLabel: 'MWA B — Refrigerants and Oils',
    question: 'R-22 is classified as an HCFC refrigerant. What does "HCFC" stand for and what is its primary environmental concern?',
    options: [
      'Hydro-Carbon-Fluoride-Compound; its primary concern is high flammability',
      'Hydrochlorofluorocarbon; it contains chlorine atoms that destroy stratospheric ozone (non-zero ODP) and has moderate global warming potential',
      'High-Compression-Fluorocarbon; its primary concern is high discharge temperatures',
      'Hydrated-Chloride-Fluoride-Compound; its primary concern is toxicity to workers'
    ],
    correctIndex: 1,
    explanation: 'HCFC stands for Hydrochlorofluorocarbon. The chlorine atom in the molecule is the key environmental concern: when released, it rises to the stratosphere where it catalytically destroys ozone molecules. R-22 has an Ozone Depletion Potential (ODP) of 0.05 and a GWP of approximately 1,810. Canada has phased out the production and import of R-22 for use in new equipment; it is now only available through recovered/recycled sources for servicing existing equipment.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-refrigerants',
    topicLabel: 'MWA B — Refrigerants and Oils',
    question: 'What is "temperature glide" in a zeotropic refrigerant blend, and why does it matter for servicing?',
    options: [
      'The temperature rise of the refrigerant as it passes through the compressor; it matters because high glide damages compressor valves',
      'The difference between the bubble point and dew point of a blend at a given pressure; it matters because P/T charts show dew point temperatures, and this must be accounted for when measuring superheat',
      'The rate at which a refrigerant transitions from liquid to gas in the metering device; it only matters for TXV selection',
      'The temperature at which a blend separates into its component gases; it matters only during recovery'
    ],
    correctIndex: 1,
    explanation: 'In zeotropic blends, the mixture does not change phase at a single temperature like a pure refrigerant. Instead, boiling begins at the bubble point and completes at the dew point — the temperature difference between these two is the temperature glide. P/T charts for blended refrigerants list the dew point (the temperature at which the last liquid vaporizes), which is what is used for superheat calculations. Using the bubble point temperature instead would give an incorrect (lower) superheat reading. R-407C, for example, has a glide of approximately 7°C.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-piping',
    topicLabel: 'MWA B — Piping and Trade Activities',
    question: 'When performing a pressure test on a newly installed refrigerant system using dry nitrogen, the pressure holds for 30 minutes but then drops slightly when the ambient temperature drops by 5°C. Is there a leak?',
    options: [
      'Yes — any pressure drop indicates a leak and the system must be repaired before proceeding',
      'No — a pressure drop due to a temperature decrease is expected and is governed by Gay-Lussac\'s Law; a true leak would cause pressure to continue dropping regardless of temperature',
      'Yes — nitrogen is not affected by temperature changes so any pressure drop is a leak',
      'Maybe — the only way to confirm is to apply soap solution to every joint'
    ],
    correctIndex: 1,
    explanation: 'Gay-Lussac\'s Law states that at constant volume, pressure is directly proportional to absolute temperature. A 5°C drop in temperature (e.g., from 20°C = 293 K to 15°C = 288 K) will cause approximately a 1.7% drop in absolute pressure — entirely due to thermal contraction of the gas, not a leak. If pressure stabilizes at the new level consistent with the temperature change, there is no leak. A true leak causes pressure to continue falling beyond what temperature change accounts for. Bubble solution should be used to supplement the test, not replace the pressure-temperature analysis.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-piping',
    topicLabel: 'MWA B — Piping and Trade Activities',
    question: 'Which type of leak detection method is MOST appropriate for locating a small refrigerant leak on a system containing R-410A in an occupied office building where chemical detectors could cause a false alarm evacuation?',
    options: [
      'Halide torch (open flame) detector',
      'Fluorescent UV dye injected into the system, detected with a UV lamp',
      'Nitrogen overpressure with soap bubbles',
      'Litmus paper applied to suspect joints'
    ],
    correctIndex: 1,
    explanation: 'UV dye leak detection is ideal for occupied buildings because it is completely non-intrusive — the system remains operating normally, and only the UV lamp (not any chemical sensor) is used to locate the leak. The dye circulates with the refrigerant and accumulates at the leak point, glowing bright yellow-green under UV light. Electronic detectors can trigger building evacuation systems in sensitive locations. Halide torches are prohibited indoors and with HFC refrigerants. Nitrogen overpressure requires shutting the system down and removing the charge.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-piping',
    topicLabel: 'MWA B — Piping and Trade Activities',
    question: 'A press-fit refrigerant connection tool (such as ZoomLock) is being used to join 1-1/8" copper suction line. The tool is equipped with a 7/8" jaw set. What should the mechanic do?',
    options: [
      'Proceed — press tools have a tolerance range and 7/8" jaws can be used on 1-1/8" pipe with extra force',
      'Stop and obtain the correct 1-1/8" jaw set before making the connection — using the wrong jaw produces an improper crimp that cannot hold refrigerant pressure',
      'Use the 7/8" jaw and make two passes to ensure a tight crimp',
      'The connection can be brazed instead without any effect on the press fitting'
    ],
    correctIndex: 1,
    explanation: 'Press-fit refrigerant fittings (rated for refrigerant service per UL and CSA listings) require an exact jaw-set matched to the specific pipe diameter and fitting series. Using an incorrectly sized jaw produces a deformed crimp that may visually appear complete but will not achieve the required sealing geometry. The resulting joint will leak under pressure. Each pipe size requires its own calibrated jaw, and the tool must be calibrated per manufacturer specifications. This is a safety and code-compliance requirement, not merely a best practice.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-piping',
    topicLabel: 'MWA B — Piping and Trade Activities',
    question: 'During evacuation, the mechanic positions the vacuum pump and connects hoses to the system. To achieve the deepest and fastest vacuum, what hose configuration is BEST?',
    options: [
      'Use the standard 1/4" hoses that came with the manifold gauge set',
      'Use the longest hoses available to keep the pump away from the work area',
      'Use the largest diameter hoses available (3/8" or 1/2") and connect directly to the system\'s largest access ports, bypassing the manifold if possible',
      'Use two 1/4" hoses in parallel connected to both the high and low side simultaneously'
    ],
    correctIndex: 2,
    explanation: 'The primary limitation on evacuation speed is the conductance of the hose and connection path between the system and the pump. Conductance increases with the fourth power of the hose diameter (Hagen-Poiseuille law) — so a 3/8" hose has dramatically higher conductance than a 1/4" hose. Manifold valves and standard hose fittings add significant restriction. Connecting with large-bore hoses directly to the system access ports (using core removal tools to open Schrader valves fully) can reduce evacuation time significantly on large systems.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-documentation',
    topicLabel: 'MWA B — Work Organization and Site Prep',
    question: 'A mechanic completes a service call and adds 850 grams of R-410A to a 4 kg split system. According to Canada\'s Ozone-Depleting Substances and Halocarbon Alternatives Regulations, what is the minimum information that must be recorded in the refrigerant log?',
    options: [
      'Only the date and the amount added',
      'The date, quantity added, refrigerant type, system identifier (location/serial), reason for addition, and the mechanic\'s certification number',
      'The customer name and invoice number only',
      'Logs are only required for systems with charges over 5 kg'
    ],
    correctIndex: 1,
    explanation: "Canada's federal regulations require a refrigerant log for every service event on refrigerant-containing equipment. The log must capture: the date, the type and quantity of refrigerant added or removed, the system identifier (enough to locate the specific unit), and the certification number of the technician handling the refrigerant. These records must be maintained for a minimum of 5 years and produced on request by an inspector. The regulation applies to all system sizes, not just those above 5 kg.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-documentation',
    topicLabel: 'MWA B — Work Organization and Site Prep',
    question: 'What is the purpose of a "toolbox talk" (tailgate meeting) held at the start of each work day on a construction site?',
    options: [
      'To review billing rates and project budget with the crew',
      'To discuss site-specific hazards, the day\'s planned tasks, required PPE, and any safety incidents from the previous day',
      'To assign overtime work hours to crew members',
      'To review the project drawings for accuracy before work begins'
    ],
    correctIndex: 1,
    explanation: "Toolbox talks are brief (5–15 minute) daily safety meetings required on most commercial construction sites. Their purpose is to keep safety top-of-mind by discussing: the hazards specific to that day's work tasks (e.g., working near an energized electrical service today), the required controls and PPE, lessons learned from any near-misses or incidents, and any new site hazards. They are documented with a sign-in sheet and kept on file to demonstrate due diligence under the OHSA.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-rigging',
    topicLabel: 'MWA B — Rigging and Hoisting',
    question: 'Before making a lift with a synthetic web sling, a mechanic notices a cut that penetrates through approximately 40% of the sling width. What is the correct action?',
    options: [
      'Proceed with the lift at 60% of the rated WLL to account for the damage',
      'Reinforce the cut area with duct tape and proceed at full WLL',
      'Remove the sling from service immediately, mark it as defective, and destroy it so it cannot be reused',
      'Use the sling for light lifts only (under 100 kg) regardless of its rated WLL'
    ],
    correctIndex: 2,
    explanation: 'A cut of any significant depth into a synthetic web sling is a mandatory disqualification from service. Sling strength is distributed across the entire width of the webbing — a cut that penetrates 40% of the width reduces the remaining load-bearing width by at least 40%, but stress concentration at the cut tip can cause catastrophic failure well below even the reduced capacity. The sling must be permanently removed from service — cutting it into unusable lengths or similar destruction prevents it from being inadvertently returned to use by someone unaware of the damage.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-rigging',
    topicLabel: 'MWA B — Rigging and Hoisting',
    question: 'When using a crane to set a 2,000 kg air-cooled chiller on a rooftop, what is the purpose of using tag lines during the lift?',
    options: [
      'Tag lines are used to increase the crane\'s lifting capacity for heavy loads',
      'Tag lines allow workers to control the load\'s rotation and lateral movement from a safe distance, preventing the load from contacting the building or injuring workers',
      'Tag lines are used to signal the crane operator when to stop the lift',
      'Tag lines secure the load to the crane hook as a backup to the primary rigging'
    ],
    correctIndex: 1,
    explanation: "A suspended load is inherently unstable and subject to wind forces and pendulum motion. Tag lines (ropes attached to the load and held by ground workers) allow the rigging crew to guide, control rotation, and prevent the load from swinging into the building, personnel, or other equipment — all from a safe distance where they are not under the suspended load. ASME B30.5 and CSA Z150 require the use of tag lines when there is any risk of the load contacting personnel or structures.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-rigging',
    topicLabel: 'MWA B — Rigging and Hoisting',
    question: 'A round sling is rated at 3,600 kg in a vertical straight lift. The sling is used in a "choker" configuration to lift a condenser. What is the approximate WLL for the choker configuration?',
    options: [
      '3,600 kg — the rating does not change with configuration',
      '5,400 kg — choker hitches increase capacity',
      '2,520 kg — approximately 70% of vertical WLL',
      '1,800 kg — 50% of vertical WLL'
    ],
    correctIndex: 2,
    explanation: 'Rigging configuration dramatically affects the effective WLL. A choker hitch (sling passed around the load and through its own eye or choke point) reduces the effective WLL to approximately 70% of the rated vertical capacity. This reduction occurs because the sling is bent around a tight radius and the load distributes unevenly through the choke point. For a 3,600 kg vertical rating: 3,600 × 0.70 = 2,520 kg in choker configuration. Mechanics must know these configuration factors: vertical = 100%, choker = 70%, basket = 200% (when both legs share the load equally at 0° from vertical).',
    order: 0
  },

  // ============================================================
  // MWA C — Plans Installation (13 questions)
  // ============================================================

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-c-planning',
    topicLabel: 'MWA C — Planning Systems and Components',
    question: 'A mechanic is reviewing the specification for a commercial HVAC installation and sees "Division 23" referenced. What does Division 23 cover in the Construction Specifications Institute (CSI) MasterFormat?',
    options: [
      'Electrical systems and equipment',
      'Heating, Ventilating, and Air-Conditioning (HVAC) — the mechanical specification covering equipment, materials, and installation standards for HVAC systems',
      'Structural steel and building framework',
      'Plumbing systems including domestic water and sanitary'
    ],
    correctIndex: 1,
    explanation: 'CSI MasterFormat organizes construction specifications into numbered divisions. Division 23 covers HVAC — including requirements for air distribution, refrigeration, heating and cooling piping, central heating and cooling equipment, HVAC instrumentation, and controls. Division 22 covers plumbing. Division 26 covers electrical. Division 28 covers electronic safety and security. Understanding this organization allows the mechanic to quickly locate the relevant installation requirements for HVAC work on commercial projects.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-c-planning',
    topicLabel: 'MWA C — Planning Systems and Components',
    question: 'When reviewing a mechanical drawing, the mechanic encounters a component labeled "PRV" on a hot water heating loop. What does this component do?',
    options: [
      'Controls the flow rate through the heating coil',
      'Opens automatically when system pressure exceeds a set value, preventing dangerous overpressure by discharging fluid',
      'Measures the pressure differential across the heating coil for balancing purposes',
      'Prevents backflow of water from the heating system into the domestic water supply'
    ],
    correctIndex: 1,
    explanation: 'A PRV (Pressure Relief Valve) — also called a pressure safety valve — is a safety device that opens automatically and discharges fluid when system pressure rises above its set pressure. It is a mandatory safety component on all closed pressure vessels and heating/cooling loops. In a hot water heating system, if the expansion tank fails or the system overheats, pressure can rise to dangerous levels — the PRV protects against boiler or pipe rupture. It is distinct from a backflow preventer (BFP), flow control valve (FCV), and differential pressure sensor.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-c-planning',
    topicLabel: 'MWA C — Planning Systems and Components',
    question: 'A designer specifies a Sensible Heat Ratio (SHR) of 0.70 for an HVAC system in a humid climate. What does this mean?',
    options: [
      '70% of the total cooling capacity is used to reduce air temperature; 30% is used to remove moisture',
      '70% of the system\'s energy comes from solar heat gain',
      'The system has a 70% efficiency rating compared to an ideal system',
      'The ratio of supply air temperature to return air temperature is 0.70'
    ],
    correctIndex: 0,
    explanation: 'Sensible Heat Ratio = Sensible Cooling Capacity ÷ Total Cooling Capacity (sensible + latent). An SHR of 0.70 means 70% of the system\'s capacity removes sensible heat (lowers air temperature) and 30% removes latent heat (condenses moisture from the air). In humid climates, a lower SHR (more dehumidification capacity) is desirable. Systems with SHRs too high for the application will maintain temperature setpoint but fail to control humidity, leading to occupant discomfort and potential mold growth.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-c-planning',
    topicLabel: 'MWA C — Planning Systems and Components',
    question: 'An engineer\'s drawing shows a chilled water system designed with a "primary-secondary" piping arrangement. What is the main advantage of this configuration?',
    options: [
      'It allows the chiller to operate at variable flow, while the secondary distribution loop can operate at a constant or variable flow independent of the chiller\'s minimum flow requirements',
      'It reduces the total amount of pipe required for the installation',
      'It allows two chillers to be piped in parallel without a bypass valve',
      'It eliminates the need for balancing valves in the distribution system'
    ],
    correctIndex: 0,
    explanation: 'Primary-secondary piping decouples the chiller loop from the distribution loop through a common pipe section (the "decoupler" or "bypass leg"). The primary loop maintains the minimum flow rate required by the chiller. The secondary loops can vary their flow independently based on building load, without affecting chiller operation. This protects the chiller from low-flow damage while allowing efficient variable flow distribution. It is the standard design for large commercial chilled water systems with multiple air handlers.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-c-load',
    topicLabel: 'MWA C — Load Calculations and Component Sizing',
    question: 'When sizing a replacement condenser for a refrigeration system, the mechanic determines that the system has a cooling capacity of 20 kW and a compressor shaft power input of 7 kW. What minimum heat rejection capacity must the replacement condenser have?',
    options: [
      '20 kW',
      '7 kW',
      '27 kW',
      '13 kW'
    ],
    correctIndex: 2,
    explanation: 'The condenser must reject ALL the heat that enters the refrigerant circuit: the heat absorbed at the evaporator (cooling capacity = 20 kW) PLUS the heat added by the compressor work (shaft power = 7 kW). Heat rejection = 20 + 7 = 27 kW. This is the fundamental heat balance equation: Qcondenser = Qevaporator + Wcompressor. A condenser sized for only the cooling capacity (20 kW) would be unable to maintain design condensing temperature, causing the head pressure to rise until the high-pressure cut-out trips.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-c-load',
    topicLabel: 'MWA C — Load Calculations and Component Sizing',
    question: 'A rooftop unit is described as having a "nominal" cooling capacity of 10 tons (35 kW). A mechanic is asked to verify this will handle the building load. What is the most important thing to understand about "nominal" capacity?',
    options: [
      'Nominal capacity is the actual capacity the unit delivers in all conditions',
      'Nominal capacity is a rounded marketing value rated at standard AHRI conditions (95°F outdoor / 80°F DB / 67°F WB indoor); actual capacity will be lower in hot weather and may differ significantly from the nominal rating',
      'Nominal capacity always includes both sensible and latent heat removal',
      'Nominal capacity is 10% higher than the actual capacity to provide a safety margin'
    ],
    correctIndex: 1,
    explanation: 'Nominal capacity (tons or BTU/h) is rated at AHRI (Air-Conditioning, Heating, and Refrigeration Institute) standard conditions of 95°F (35°C) outdoor dry-bulb and 80°F DB/67°F WB (27°C/19°C) return air. In real-world conditions — particularly in hot climates where outdoor temperatures exceed 35°C — actual capacity can be 10–25% lower than nominal. System sizing must use actual (net) capacity at the design conditions, not nominal. Using nominal capacity without de-rating for local conditions is a common oversizing/undersizing error.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-c-load',
    topicLabel: 'MWA C — Load Calculations and Component Sizing',
    question: 'A supply fan is being replaced. The existing fan delivers 2,000 CFM at 1.5 inches w.c. static pressure and runs at 900 RPM. Using the Affinity Laws, if the fan speed is increased to 1,080 RPM (a 20% increase), what will the new airflow be?',
    options: [
      '2,000 CFM — airflow does not change with speed',
      '2,200 CFM',
      '2,400 CFM',
      '2,880 CFM'
    ],
    correctIndex: 2,
    explanation: 'The first Affinity Law states that airflow (CFM) varies directly with fan speed ratio (linear relationship). New CFM = Original CFM × (New RPM / Original RPM) = 2,000 × (1,080 / 900) = 2,000 × 1.20 = 2,400 CFM. Note that static pressure varies as the square of the speed ratio: New SP = 1.5 × (1.20)² = 1.5 × 1.44 = 2.16 in. w.c. And power varies as the cube: New Power = Original Power × (1.20)³ = Original × 1.728 — a 72.8% power increase for a 20% speed increase.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-c-retrofit',
    topicLabel: 'MWA C — Retrofits and Environmental Upgrades',
    question: 'A grocery store is replacing an R-404A rack system with a CO2 (R-744) transcritical system to reduce its carbon footprint. What is the MOST significant design difference the installing mechanic must be aware of?',
    options: [
      'CO2 systems require less refrigerant charge than R-404A systems',
      'CO2 transcritical systems operate at much higher pressures — high-side pressures can exceed 12 MPa (1,740 PSI) — requiring pressure-rated components, piping, and service equipment specifically designed for CO2',
      'CO2 systems do not require a recovery step before service',
      'CO2 is compatible with mineral oil, simplifying the oil management process'
    ],
    correctIndex: 1,
    explanation: 'CO2 (R-744) transcritical systems operate above the critical point on the high side (above 73.8 bar / 1,071 PSI), making high-side operating pressures 5–8 times higher than a typical R-404A system. Every component — compressors, heat exchangers, valves, piping, fittings, safety relief valves, and service tools — must be rated for CO2 operating pressures. Standard HVAC/R tools and materials will fail catastrophically at these pressures. CO2 also requires POE oil (not mineral oil) and dedicated recovery equipment rated for high-pressure transcritical service.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-c-retrofit',
    topicLabel: 'MWA C — Retrofits and Environmental Upgrades',
    question: 'An energy audit recommends installing an economizer on an existing rooftop unit. What is the function of an air-side economizer?',
    options: [
      'It recovers heat from the exhaust air stream to pre-heat the incoming outdoor air',
      'It uses outdoor air for free cooling when outdoor conditions are cooler and/or drier than the return air, reducing or eliminating mechanical refrigeration',
      'It increases the efficiency of the refrigeration cycle by subcooling the liquid refrigerant with outdoor air',
      'It reduces the outdoor air quantity during extreme weather to save energy'
    ],
    correctIndex: 1,
    explanation: 'An air-side economizer modulates the outdoor air damper to bring in 100% outdoor air (up to the system\'s full supply airflow capacity) when outdoor air conditions (dry-bulb or enthalpy) are favourable for free cooling. When outdoor air is at or below the supply air setpoint, mechanical compressor cooling can be completely turned off. In Canadian climates with significant shoulder seasons (spring and fall), economizer operation can save 15–30% of annual cooling energy. Control strategies include dry-bulb, differential dry-bulb, fixed enthalpy, and differential enthalpy.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-c-retrofit',
    topicLabel: 'MWA C — Retrofits and Environmental Upgrades',
    question: 'When labeling a refrigeration system after a refrigerant retrofit from R-22 to R-448A, what information is REQUIRED on the new label?',
    options: [
      'Only the contractor\'s name and the service date',
      'The new refrigerant type (R-448A), the required oil type (POE), the new refrigerant charge weight, and the date of conversion',
      'The original R-22 charge weight only, for reference',
      'No labeling is required — the equipment nameplate is sufficient'
    ],
    correctIndex: 1,
    explanation: "After a refrigerant conversion, the system must be permanently and prominently labeled to prevent a future technician from unknowingly adding the wrong refrigerant type or wrong oil. The label must clearly state the new refrigerant designation (R-448A), the required lubricant type (POE oil, specified grade), the new system refrigerant charge weight, and the conversion date. Adding R-22 to a system that has been converted and has POE oil will cause severe oil incompatibility and system contamination.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-c-planning',
    topicLabel: 'MWA C — Planning Systems and Components',
    question: 'A project requires a refrigerant machinery room with R-717 (ammonia) equipment. Under CSA B52, which ventilation requirement applies specifically to ammonia machinery rooms?',
    options: [
      'Natural ventilation through operable windows is sufficient',
      'Mechanical exhaust ventilation with air changes sufficient to maintain ammonia concentrations below 25 ppm TLV-TWA, with emergency ventilation capable of rapid air changes activated by ammonia detection',
      'A general HVAC supply air system providing positive pressure to the room is adequate',
      'Ventilation is not required for ammonia systems under 50 kg charge'
    ],
    correctIndex: 1,
    explanation: 'CSA B52 has specific requirements for ammonia machinery rooms due to ammonia\'s toxicity (IDLH = 300 ppm) and flammability. Normal ventilation must maintain concentrations below the 25 ppm TLV-TWA. Emergency ventilation (activated automatically by ammonia detectors set at 25 ppm) must provide sufficient air changes to prevent accumulation to dangerous levels. Rooms must be under negative pressure (exhaust > supply) to prevent ammonia from migrating to occupied areas. The exhaust must discharge to a safe outdoor location, not recirculated.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-c-planning',
    topicLabel: 'MWA C — Planning Systems and Components',
    question: 'A mechanical engineer specifies "ASHRAE 62.1 minimum outdoor air ventilation rates" for a commercial HVAC system. What does this standard govern?',
    options: [
      'The minimum efficiency ratings for HVAC equipment',
      'The minimum outdoor air quantities required to maintain acceptable indoor air quality for human occupancy, based on occupant density and floor area',
      'The maximum refrigerant charge per square metre of occupied space',
      'The minimum insulation R-values for ductwork in different climate zones'
    ],
    correctIndex: 1,
    explanation: 'ASHRAE Standard 62.1 (Ventilation for Acceptable Indoor Air Quality) establishes the minimum outdoor airflow rates for commercial and institutional buildings. The ventilation rate is calculated using a combination of the occupant-based component (CFM per person, based on occupancy type) and the area-based component (CFM per square foot of floor area, accounting for off-gassing from building materials). Insufficient outdoor air leads to CO2 buildup, volatile organic compound accumulation, and poor perceived air quality — commonly called "sick building syndrome."',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-c-planning',
    topicLabel: 'MWA C — Planning Systems and Components',
    question: 'On a mechanical drawing, a dashed line connecting two pieces of HVAC equipment typically represents:',
    options: [
      'A future equipment connection not yet installed',
      'A control or signal connection (wiring, pneumatic tubing, or data), as opposed to a solid line representing a physical fluid or air connection',
      'An equipment connection that must be field-verified',
      'A refrigerant line operating at pressures below atmospheric'
    ],
    correctIndex: 1,
    explanation: 'In mechanical and P&ID drawing conventions, solid lines represent physical piping or ductwork carrying fluids or air. Dashed lines (or dotted lines, depending on the drawing standard) represent control connections — electrical signal wiring, pneumatic control tubing, or data network connections. Understanding this distinction is essential for reading P&IDs correctly: a dashed line from a temperature sensor to a controller means "this sensor sends a signal to this controller," not "this pipe carries refrigerant between these two components."',
    order: 0
  },

  // ============================================================
  // MWA D — Performs Installation (21 questions)
  // ============================================================

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-installation',
    topicLabel: 'MWA D — Installing HVAC/R Systems',
    question: 'When installing a split-system heat pump, the outdoor unit is placed on a rooftop. What installation detail is essential to prevent "hydraulic hammering" (liquid slugging) in the compressor on startup after a cold-soak period?',
    options: [
      'Installing a vibration pad under the outdoor unit',
      'Ensuring the crankcase heater is permanently wired and energized whenever the compressor is off',
      'Orienting the outdoor unit so the service valves face south',
      'Installing a larger liquid line between the outdoor and indoor units'
    ],
    correctIndex: 1,
    explanation: 'During cold periods when the compressor is off, refrigerant migrates by vapor pressure differential toward the coldest point — often the compressor crankcase. This refrigerant dissolves in the warm oil, forming a refrigerant/oil solution. When the compressor starts, the sudden pressure drop causes violent boiling of the dissolved refrigerant, creating a compressor-damaging slug of foam and liquid. The crankcase heater keeps the crankcase oil warm (above ambient) to prevent refrigerant migration. It must be wired to be energized whenever the compressor is off, including during off-season storage.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-installation',
    topicLabel: 'MWA D — Installing HVAC/R Systems',
    question: 'A rooftop unit is installed with flexible duct connectors between the unit and the supply/return ductwork. What is the PRIMARY purpose of these flexible connectors?',
    options: [
      'To allow the ductwork to be easily disconnected for cleaning',
      'To isolate vibration and noise from the RTU fan and compressor from transmitting into the building ductwork and structure',
      'To compensate for misalignment between the unit and the ductwork',
      'To reduce the static pressure drop at the supply and return connections'
    ],
    correctIndex: 1,
    explanation: 'RTUs contain rotating equipment (supply fans, condenser fans, compressors) that generate mechanical vibration. If the unit is hard-piped to the building ductwork, this vibration transmits through the metal duct system and can be heard throughout the building as rumble or drumming. Flexible duct connectors (canvas or neoprene) act as vibration isolators, breaking the structural path between the RTU and the ductwork. The connectors must be installed without tension — they must be slack to function as isolators.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-installation',
    topicLabel: 'MWA D — Installing HVAC/R Systems',
    question: 'A heat pump system uses a refrigerant accumulator on the suction line. What is the function of this component and why is it especially important in heat pump applications?',
    options: [
      'The accumulator subcools the liquid refrigerant before the metering device',
      'The accumulator separates liquid refrigerant from the suction gas, holding liquid refrigerant until it can evaporate safely, protecting the compressor from liquid slugging — particularly important in heat pumps during defrost cycle termination and mode switching',
      'The accumulator stores excess refrigerant charge when the system operates at part load',
      'The accumulator filters oil and particulate from the suction gas before it reaches the compressor'
    ],
    correctIndex: 1,
    explanation: 'A suction line accumulator is a vessel with a U-tube outlet that allows vapor to exit while trapping liquid refrigerant in the bottom until it evaporates. In heat pump applications, liquid carryover to the compressor is particularly likely during: defrost cycle termination (where liquid refrigerant that melted the frost can flood back), mode reversal (heating to cooling or vice versa), and low outdoor temperature operation where the outdoor coil has limited capacity to fully evaporate the refrigerant. The accumulator is a critical compressor protection device in these conditions.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-installation',
    topicLabel: 'MWA D — Installing HVAC/R Systems',
    question: 'When installing copper refrigerant pipe hangers and supports, what material must be used between the copper pipe and a steel hanger or support to prevent a specific type of corrosion?',
    options: [
      'Nothing is needed — copper and steel are compatible',
      'A dielectric isolation material (rubber insert, plastic-coated hanger, or neoprene isolator) to prevent galvanic corrosion where dissimilar metals contact each other in the presence of moisture',
      'Lead flashing to create a weather-tight seal at the support',
      'Stainless steel fasteners to match the strength of the copper pipe'
    ],
    correctIndex: 1,
    explanation: 'Copper and steel have different electrochemical potentials. When they are in direct contact in the presence of an electrolyte (condensation, atmospheric moisture), galvanic corrosion occurs — the less noble metal (steel) corrodes preferentially and copper develops a green oxide coating (verdigris). In cold suction line applications, condensation on the pipe provides the electrolyte. Dielectric isolation — plastic-coated hangers, rubber-lined clamps, or neoprene inserts — breaks the electrical connection between the metals and prevents galvanic corrosion.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-installation',
    topicLabel: 'MWA D — Installing HVAC/R Systems',
    question: 'A condensate drain trap is being installed under a fan coil unit operating in a negative-pressure air handler section. What is the critical dimension that must be calculated for the trap?',
    options: [
      'The drain pipe diameter must match the condensate pan outlet exactly',
      'The trap must be installed with a positive slope of at least 1:100 toward the drain',
      'The trap depth (seal height) must be greater than the static pressure in the drain pan section (in inches of water column) to prevent the trap from being siphoned out, allowing air to bypass the trap',
      'The trap must be installed within 300 mm of the condensate pan outlet'
    ],
    correctIndex: 2,
    explanation: 'In negative-pressure sections of air handlers (return side and before the supply fan), the static pressure in the drain pan is negative relative to atmospheric. If the condensate trap seal depth is insufficient, the negative pressure will draw the trap seal out, allowing unconditioned air to bypass the unit through the drain line — this is called "trap pull-out." The trap seal depth (the vertical height of water in the trap) must exceed the maximum negative static pressure at the drain pan location, typically expressed in inches of water column. A common rule of thumb is trap depth = twice the negative static pressure.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-installation',
    topicLabel: 'MWA D — Installing HVAC/R Systems',
    question: 'When installing a receiver on a refrigeration system, why must the receiver outlet valve (king valve) remain OPEN during normal operation and only be front-seated for service?',
    options: [
      'Closing the king valve during operation increases system efficiency',
      'With the king valve closed, liquid refrigerant cannot flow from the receiver to the metering device, causing the evaporator to be starved and the system to stop cooling — while the high side continues to pump and build pressure',
      'The king valve regulates the refrigerant flow rate and must be open to avoid excessive subcooling',
      'A closed king valve causes refrigerant migration to the compressor'
    ],
    correctIndex: 1,
    explanation: "The king valve (receiver outlet service valve) is the only valve between the receiver's liquid refrigerant supply and the rest of the system. Front-seating it during operation immediately starves the entire high side of the refrigerant circuit — the metering device gets no liquid, the evaporator stops cooling, suction pressure drops to near-vacuum, and the compressor continues to operate under potentially damaging conditions. The king valve is used only during service to isolate the receiver or to perform a pump-down procedure that collects the system charge into the receiver.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-controls',
    topicLabel: 'MWA D — Installing Control Systems',
    question: 'A duct-mounted CO2 sensor is being installed in the return air duct of a demand-controlled ventilation (DCV) system. What does this sensor control and why?',
    options: [
      'The CO2 sensor monitors carbon monoxide from gas combustion equipment',
      'The CO2 sensor modulates the outdoor air damper — as occupancy increases, exhaled CO2 rises, the sensor detects this, and the controller opens the outdoor air damper to bring in more fresh air; as occupancy drops, the damper closes to save energy',
      'The CO2 sensor acts as a fire detection device, closing dampers in emergency',
      'The CO2 sensor monitors refrigerant leaks from CO2 (R-744) refrigeration equipment in the building'
    ],
    correctIndex: 1,
    explanation: 'Demand-Controlled Ventilation (DCV) uses CO2 as a proxy for occupancy. People exhale CO2, so indoor CO2 levels rise with occupancy. The CO2 sensor (measuring parts per million) sends a signal to the AHU controller, which modulates the outdoor air damper proportionally — opening it more when CO2 (and therefore occupancy) is high, and closing it when the space is unoccupied. This saves heating and cooling energy by not conditioning outdoor air for empty rooms, while ensuring adequate ventilation when people are present. Outdoor air CO2 is approximately 400–420 ppm; occupied space targets are typically ≤ 1,000 ppm.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-controls',
    topicLabel: 'MWA D — Installing Control Systems',
    question: 'A chilled water valve actuator is specified as "fail-open" (FO). What does this mean and in which application is it appropriate?',
    options: [
      'The valve opens when the actuator motor overheats; used as a safety device on chillers',
      'The valve spring-returns to the open position if power or control signal is lost; appropriate for cooling coil valves where a loss of cooling on loss of power would cause overheating in a critical area (e.g., a data centre)',
      'The valve opens to 100% when the BAS commands 0% open',
      'The valve opens automatically during fire alarm activation'
    ],
    correctIndex: 1,
    explanation: 'Actuator fail position describes where the valve goes when power or control signal is lost. A fail-open (FO) actuator has an internal spring that drives the valve to 100% open on loss of signal/power. This is appropriate for data centres and critical cooling applications where a power failure should default to maximum cooling to protect servers. In contrast, a fail-closed (FC) actuator defaults to shut — appropriate for heating coils where loss of control should not cause overheating. The correct fail position for each valve must be specified based on the consequence of failure.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-controls',
    topicLabel: 'MWA D — Installing Control Systems',
    question: 'A 0–10V analog output from a DDC controller is connected to a variable frequency drive. When the controller outputs 10V, the VFD runs the fan at 100% speed. When the controller outputs 0V, the VFD runs the fan at 0% (off). During installation, the mechanic notices the fan runs at full speed when the output wire is accidentally disconnected. Why?',
    options: [
      'The VFD defaults to full speed on loss of signal as a fail-safe mode — the wiring is correct',
      'The VFD is interpreting the open circuit (floating input) as a 10V signal — the input must be configured for a 2–10V signal or a fail-safe resistor must be installed to pull the input to 0V on wire break',
      'The controller output has failed in the high state',
      'The fan motor is wired in bypass mode'
    ],
    correctIndex: 1,
    explanation: 'An open (disconnected) analog input to a VFD creates a floating voltage that can be interpreted unpredictably — often as a high value (near 10V) due to stray capacitance or noise. The solution is to configure the VFD to use a 2–10V input signal range (where 0V = wire fault, not zero speed) or to install a pull-down resistor (typically 10kΩ) from the signal input to ground, which forces the input to 0V on wire break. This is a common commissioning issue that can cause fans to run at full speed during controller failures or wiring faults.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-ductwork',
    topicLabel: 'MWA D — Installing Air Delivery Systems',
    question: 'A supply air duct runs through a cold, uninsulated crawlspace. The mechanic notices condensation forming on the outer surface of the insulated duct. What does this indicate and what is the solution?',
    options: [
      'The duct insulation is working correctly — surface condensation is expected',
      'The duct insulation is insufficient — the outer surface of the insulation is below the dew point of the crawlspace air. A vapour barrier must be added over the insulation or the insulation R-value must be increased to keep the outer surface above the dew point.',
      'The condensation indicates a leak in the duct allowing cold air to escape',
      'The condensation is from the crawlspace groundwater and is unrelated to the duct'
    ],
    correctIndex: 1,
    explanation: 'Condensation on the outside of duct insulation means the outer surface of the insulation is cold enough to be at or below the dew point of the surrounding air. This happens when the insulation R-value is insufficient to maintain the outer surface temperature above the dew point, or when the vapour barrier (facing) has been damaged or is missing. The moisture will saturate the insulation over time, dramatically reducing its thermal performance and potentially causing mold, structural damage, and air quality problems. The fix is to increase insulation R-value or add an effective vapour barrier over the insulation.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-ductwork',
    topicLabel: 'MWA D — Installing Air Delivery Systems',
    question: 'Which type of duct fitting creates the LEAST amount of turbulence and pressure drop in a duct system?',
    options: [
      'A square elbow with no turning vanes',
      'A mitered elbow at 90° with sheet metal turning vanes inside',
      'A radius elbow with a centerline radius equal to 1.5 times the duct width',
      'A sharp 90° branch takeoff using a straight-cut connection'
    ],
    correctIndex: 2,
    explanation: 'A smooth-radius elbow with a centerline radius of 1.5× the duct width (expressed as R/W = 1.5) creates the lowest pressure drop because it gradually changes airflow direction with minimal flow separation. Square elbows with turning vanes are better than plain square elbows but still create more turbulence than radius elbows. Mitered elbows with turning vanes are used where space constraints prevent radius elbows but have higher loss coefficients. Sharp branch takeoffs create significant turbulence and energy loss at the separation point.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-installation',
    topicLabel: 'MWA D — Installing HVAC/R Systems',
    question: 'An oil separator is installed in the discharge line of a large reciprocating compressor system. What is the PRIMARY function of this component?',
    options: [
      'To cool the hot discharge gas before it enters the condenser',
      'To separate compressor lubricating oil from the refrigerant discharge gas and return it directly to the compressor crankcase, maintaining proper oil level and preventing oil logging in the system',
      'To filter particulate from the discharge gas to protect the condenser coil',
      'To reduce the pressure pulsations in the discharge line from the reciprocating compressor'
    ],
    correctIndex: 1,
    explanation: 'Reciprocating compressors discharge oil-laden gas on every stroke. Without an oil separator, significant oil migrates through the system, logs in the evaporator (reducing heat transfer efficiency and potentially starving the compressor), and changes the refrigerant charge behaviour. An oil separator uses baffles, screens, or centrifugal action to separate oil droplets from the discharge gas stream. The separated oil drains back to the crankcase through a float valve, maintaining proper oil level without the need for complex oil management circuits. Oil separators are standard on systems where reliable oil return is critical.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-installation',
    topicLabel: 'MWA D — Installing HVAC/R Systems',
    question: 'When installing a glycol secondary cooling loop for a process refrigeration application, why is it important to install an air separator near the pump outlet?',
    options: [
      'To remove refrigerant vapour that migrates from the primary circuit into the glycol loop',
      'To remove entrained air bubbles from the glycol — dissolved and entrained air reduces heat transfer efficiency, causes pump cavitation, accelerates corrosion, and creates air pockets that cause flow problems in the system',
      'To filter glycol degradation products before they reach the heat exchanger',
      'To equalize pressure between the primary and secondary circuits'
    ],
    correctIndex: 1,
    explanation: 'Air in a closed glycol loop causes multiple problems: air bubbles insulate heat transfer surfaces, reducing system efficiency; air in the pump impeller eye causes cavitation (damaging the pump); dissolved oxygen reacts with glycol at elevated temperatures to form acidic degradation products that corrode system components; and air pockets cause flow noise, water hammer, and uneven flow distribution. An air separator (magnetic or centrifugal type, installed at the point of highest velocity and lowest pressure — the pump outlet) continuously removes entrained air from the system over time.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-controls',
    topicLabel: 'MWA D — Installing Control Systems',
    question: 'A hot gas bypass valve is installed between the compressor discharge and the suction line (or evaporator inlet) on a refrigeration system. What is its purpose?',
    options: [
      'To provide emergency cooling if the main TXV fails',
      'To allow the compressor to operate at reduced capacity without short-cycling, by bypassing hot discharge gas to the low side to artificially maintain minimum suction pressure and prevent low-pressure trips at very low loads',
      'To recover heat from the discharge gas for use in space heating',
      'To control maximum head pressure during hot ambient conditions'
    ],
    correctIndex: 1,
    explanation: 'At very low system loads (e.g., a refrigeration rack in a near-empty store), suction pressure can drop below the minimum acceptable level, tripping the low-pressure safety and causing short-cycling. A hot gas bypass valve (HGBV) opens when suction pressure drops below a setpoint and injects hot discharge gas into the low side, artificially loading the evaporator to maintain minimum suction pressure and allow the compressor to run continuously. It is a capacity control device of last resort — it wastes energy (the compressor does work that produces no cooling) but prevents damaging operational conditions.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-installation',
    topicLabel: 'MWA D — Installing HVAC/R Systems',
    question: 'When sizing and installing pipe supports for copper refrigerant suction line in a commercial application, what is the primary factor governing maximum hanger spacing?',
    options: [
      'The operating pressure of the refrigerant in the pipe',
      'The pipe diameter — larger pipes can span further between supports, with maximum spacing typically specified per SMACNA or the local mechanical code based on pipe size and material',
      'The ambient temperature where the pipe is installed',
      'The refrigerant type — some refrigerants are heavier than others and require closer hanger spacing'
    ],
    correctIndex: 1,
    explanation: 'Maximum hanger spacing for refrigerant piping is primarily determined by pipe diameter and material — a larger diameter pipe is stiffer and can span greater distances without sagging. SMACNA and most local mechanical codes provide tables specifying maximum hanger spacing (e.g., 1-1/2" copper: support every 2.4 m; 4" copper: every 3.0 m). Inadequate support spacing allows pipes to sag, which disrupts oil return in low-velocity suction lines, creates stress at brazed joints and fittings, and causes vibration-induced fatigue cracks over time.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-ductwork',
    topicLabel: 'MWA D — Installing Air Delivery Systems',
    question: 'What is the purpose of a "breakaway" duct connection on either side of a fire damper installed in a rated wall assembly?',
    options: [
      'To allow the ductwork to be removed easily for cleaning',
      'To prevent the ductwork from transmitting structural loads to the fire damper sleeve during normal operation',
      'To allow the ductwork to separate from the damper sleeve during a fire so the sleeve remains embedded in the rated wall assembly without being pulled out by duct movement or thermal expansion',
      'To provide a visual inspection port for the damper blades'
    ],
    correctIndex: 2,
    explanation: 'In a fire, the building structure and ductwork experience significant thermal expansion and potentially collapse. If the ductwork is rigidly connected to the fire damper sleeve, this movement can pull the sleeve out of the rated wall assembly, destroying the fire separation. A breakaway duct connection (typically a slip-and-drive joint without screws, or a specific breakaway bracket) allows the duct to separate from the sleeve under the forces of a fire without displacing the sleeve. The damper sleeve remains in the wall, maintaining the fire rating. This is a UL listing requirement for fire damper installations.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-installation',
    topicLabel: 'MWA D — Installing HVAC/R Systems',
    question: 'A multi-circuit evaporator coil for a refrigerated display case uses a distributor to split the refrigerant among multiple refrigerant circuits. If one circuit becomes partially blocked, what happens to the coil\'s performance?',
    options: [
      'The other circuits automatically compensate by carrying more refrigerant',
      'The partially blocked circuit will have less refrigerant flow, resulting in higher superheat and a frosting/icing pattern on that circuit while other circuits remain clear — reducing overall coil capacity',
      'A blocked distributor circuit causes the entire system to trip on high superheat',
      'No effect — the TXV automatically adjusts total flow to compensate'
    ],
    correctIndex: 1,
    explanation: 'A distributor divides the refrigerant flow equally among multiple parallel evaporator circuits. If one circuit is blocked (often by oil logging, debris, or ice), less refrigerant enters that circuit and the available heat transfer area is reduced. That circuit will frost up differently than the others (or not defrost fully), causing a visible imbalanced frost pattern. The TXV controls total superheat across all circuits in aggregate — it cannot compensate for an individual blocked circuit. Diagnosing uneven frosting patterns is a key skill for refrigerated display case service.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-installation',
    topicLabel: 'MWA D — Installing HVAC/R Systems',
    question: 'An evaporative condenser requires a water treatment system. What is the PRIMARY reason for treating the recirculating water in an evaporative condenser?',
    options: [
      'To prevent algae growth that would discolour the equipment',
      'To prevent scale buildup (from mineral precipitation), biological growth (including Legionella bacteria), and corrosion — all of which reduce heat transfer efficiency and risk public health',
      'To reduce the water consumption of the system',
      'To prevent the water from freezing during winter operation'
    ],
    correctIndex: 1,
    explanation: "Evaporative condensers recirculate water that continuously evaporates, concentrating dissolved minerals (causing scale on heat transfer surfaces), and the warm, nutrient-rich water is an ideal environment for microbial growth — including Legionella pneumophila (which causes Legionnaires' disease). Ontario's Ontario Water and Sewage Systems Act and ASHRAE 188 (Legionellosis: Risk Management for Building Water Systems) require water treatment programs including biocides, scale inhibitors, corrosion inhibitors, and drift eliminators. Unmanaged evaporative condensers are a public health risk. Scale buildup also significantly reduces condensing efficiency.",
    order: 0
  },

  // ============================================================
  // MWA E — Performs Commissioning (17 questions)
  // ============================================================

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-e-startup',
    topicLabel: 'MWA E — Commissioning Systems',
    question: 'During the first startup of a large commercial rooftop unit, the mechanic notices the supply fan draws 28 amps on all three phases at full speed. The nameplate FLA is 24 amps. What should the mechanic do FIRST?',
    options: [
      'Reduce the supply voltage to lower the amperage',
      'Immediately shut down the unit and investigate — possible causes include incorrect fan speed (wrong sheave or VFD setpoint), high external static pressure, or a blocked filter or coil',
      'Continue operating — the 4-amp overage is within a 10% tolerance on startup',
      'Add a second run capacitor to reduce current draw'
    ],
    correctIndex: 1,
    explanation: 'Operating a motor at 28 amps when the nameplate FLA is 24 amps (a 17% overcurrent) will trip the overload relay and will overheat the motor windings if sustained. Causes of overcurrent on a supply fan include: fan spinning faster than designed (wrong sheave diameter or VFD programmed to too high a frequency), higher external static pressure than designed (blocked filter, undersized ductwork, closed damper), or the motor being connected to incorrect voltage. The system must be shut down to investigate rather than running until the overload trips, which adds thermal stress to the motor.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-e-startup',
    topicLabel: 'MWA E — Commissioning Systems',
    question: 'A new refrigeration system with a fixed-orifice metering device (piston) is being charged. What measurement is used to determine the correct charge for this type of metering device?',
    options: [
      'Subcooling at the liquid line — charge until subcooling reaches 10–15°C',
      'Total (compressor inlet) superheat — charge is added or removed until total superheat falls within the manufacturer\'s target range based on outdoor ambient and indoor wet-bulb temperature',
      'System weight charge — add exactly the amount printed on the nameplate',
      'Discharge pressure — charge until discharge pressure matches the P/T chart at the current ambient temperature'
    ],
    correctIndex: 1,
    explanation: 'Fixed-orifice metering devices (pistons, capillary tubes) do not modulate flow. The amount of refrigerant in the system directly determines how much liquid reaches the metering device and how much evaporator surface is active. The correct charging indicator for fixed-orifice systems is total (compressor inlet) superheat, measured as: suction line temperature at the compressor inlet minus the saturation temperature at the measured suction pressure. Manufacturers provide target total superheat tables based on outdoor dry-bulb and indoor wet-bulb — this two-variable approach accounts for varying load conditions. Subcooling is the target measurement for TXV systems.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-e-startup',
    topicLabel: 'MWA E — Commissioning Systems',
    question: 'During commissioning of a refrigeration system with an electronic expansion valve (EEV), the mechanic observes the valve hunting — rapidly opening and closing, causing suction pressure to oscillate. What is the MOST likely cause?',
    options: [
      'The EEV is stuck partially open due to debris in the valve seat',
      'The control parameters (PID gains, superheat target, or response time) are not tuned for the system — the valve is over-responding to small changes in superheat',
      'The refrigerant charge is too low, causing the valve to search for liquid',
      'The suction pressure transducer is installed in the wrong location'
    ],
    correctIndex: 1,
    explanation: 'Electronic expansion valves are controlled by a PID algorithm that adjusts valve position to maintain a superheat setpoint. If the proportional gain is too high, or the response time constant is too fast for the thermal mass of the system, the valve over-reacts: it opens more than needed, causing suction pressure to rise; it then closes more than needed, causing suction pressure to drop — this hunting cycle continues. The solution is to tune the EEV controller parameters to match the system\'s thermal response characteristics. EEV controllers typically allow adjustment of superheat setpoint, proportional band, integral time, and minimum opening.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-e-startup',
    topicLabel: 'MWA E — Commissioning Systems',
    question: 'A mechanic is commissioning a new installation and notices oil pooling in the bottom of a suction line P-trap that was installed at the base of a vertical riser. This oil accumulation is observed after several hours of operation. What does this indicate?',
    options: [
      'The system is operating correctly — P-traps are designed to collect oil',
      'There is an excess oil charge in the system that needs to be removed',
      'The gas velocity in the suction riser is too low to carry oil droplets upward — the oil is collecting in the trap rather than being returned to the compressor. The pipe may be oversized, the load is too low, or a double riser is needed.',
      'The compressor is pumping excessive oil — the oil separator must be serviced'
    ],
    correctIndex: 2,
    explanation: "A P-trap at the base of a suction riser is designed to collect oil during off-cycles and re-entrain it into the gas stream when the system starts. However, if gas velocity in the riser is consistently too low to carry oil upward during operation (typically < 500 fpm in horizontal lines, < 1,000 fpm in vertical risers), oil will accumulate in the trap rather than being transported. The growing oil mass reduces compressor oil level, eventually causing bearing damage. Solutions include reducing pipe diameter (if oversized), a double riser, or ensuring the system doesn't operate at excessively low loads for extended periods.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-e-performance',
    topicLabel: 'MWA E — Performance Verification',
    question: 'During commissioning of a chilled water air handler coil, the entering water temperature is 7°C and the leaving water temperature is 13°C. The design calls for a 6°C water temperature rise. The measured air temperature drop across the coil is only 6°C instead of the designed 10°C. What is the MOST likely cause?',
    options: [
      'The chilled water temperature is too cold',
      'The chilled water flow rate through the coil is higher than the design GPM — too much water flow reduces the temperature rise across the coil (less heat extracted per litre) while also reducing air cooling',
      'The air coil is oversized for this application',
      'The chilled water flow is too low, reducing the coil\'s heat transfer capacity'
    ],
    correctIndex: 1,
    explanation: 'This is a classic high-flow condition. Water side: entering 7°C, leaving 13°C = 6°C rise (matches design). Air side: only 6°C drop instead of 10°C. If water flow is too high, water passes through the coil too quickly to exchange enough heat with the air — the water temperature rise is maintained at 6°C because both the numerator (heat transferred) and denominator (flow rate) are proportionally higher, but the coil cooling capacity is limited by the air-side heat transfer area. Actually, the water ΔT matches but air side is low — this points to insufficient coil surface contact time for air, meaning airflow is too high, not water flow. (At high air flow, air moves too fast across the coil for adequate heat exchange.)',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-e-performance',
    topicLabel: 'MWA E — Performance Verification',
    question: 'After commissioning a split-system air conditioner, the unit\'s energy efficiency ratio (EER) is estimated to be significantly lower than the rated value. Which of the following conditions would MOST reduce the EER in the field versus the lab rating?',
    options: [
      'Outdoor ambient temperature of 33°C versus the 35°C AHRI rating condition',
      'Extended refrigerant line set (longer than factory standard) combined with a dirty condenser coil and slightly elevated suction superheat',
      'Slightly undersized supply ductwork reducing airflow by 5%',
      'A programmable thermostat instead of a standard thermostat'
    ],
    correctIndex: 1,
    explanation: 'EER (Energy Efficiency Ratio) = Cooling Capacity (BTU/h) ÷ Power Input (Watts). EER decreases when: cooling capacity is reduced (by dirty coil limiting heat rejection, raising head pressure) AND power input is increased (compressor works harder against higher head pressure). A long line set adds pressure drop and refrigerant heat gain that reduces system capacity. Combined, these factors can reduce actual EER by 15–25% below the nameplate rating — a significant difference in operating costs. Slightly lower ambient temperature would slightly improve EER, and minor airflow or thermostat changes would have minimal effect.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-e-performance',
    topicLabel: 'MWA E — Performance Verification',
    question: 'What is a "punch list" in the context of HVAC/R commissioning?',
    options: [
      'A list of all tools and materials used during the commissioning process',
      'A formal document listing all deficiencies, incomplete items, and corrections required before the system is accepted by the building owner or general contractor',
      'A checklist of pre-startup inspection items the mechanic completes before first system start',
      'A billing document recording the labour hours spent on commissioning activities'
    ],
    correctIndex: 1,
    explanation: "A punch list is a contractual document used in construction project closeout. It lists every deficiency identified during commissioning and final inspection — items that don't meet the specification, equipment that doesn't function correctly, missing components, or incomplete work. The contractor must resolve every item on the punch list before final payment is released. Items might include: a supply fan not achieving design CFM, a safety device that doesn't function, a missing label, or a seal that leaks. The punch list drives accountability for project completion.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-e-performance',
    topicLabel: 'MWA E — Performance Verification',
    question: 'During commissioning verification, a high-pressure safety cut-out on a new system is tested. The system nameplate specifies a cut-out setting of 4,150 kPa. The safety trips at 3,800 kPa during testing. What is the appropriate action?',
    options: [
      'Accept this result — the safety tripped below the maximum, which provides more protection',
      'Adjust the safety cut-out setpoint upward to match the nameplate specification, or replace the switch if it cannot be calibrated to the correct setpoint',
      'No action is needed — a 350 kPa variance is within acceptable tolerance',
      'Reduce the system refrigerant charge to lower the maximum achievable pressure'
    ],
    correctIndex: 1,
    explanation: 'Safety controls must trip at their specified setpoints — both too high AND too low is a problem. If a high-pressure cut-out trips at 3,800 kPa when set for 4,150 kPa, it may cause nuisance trips during normal high ambient operating conditions, short-cycling the compressor unnecessarily and interfering with system performance. Safety switches have calibrated setpoints for a reason — system designers calculated the correct trip pressures based on design operating conditions and maximum allowable pressure ratings. The switch must be adjusted to the correct setting or replaced if it cannot hold calibration.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-e-performance',
    topicLabel: 'MWA E — Performance Verification',
    question: 'When verifying the performance of a new air-cooled chiller, the mechanic calculates the COP (Coefficient of Performance). The chiller produces 105 kW of cooling and draws 35 kW of electrical power. What is the COP?',
    options: [
      '0.33',
      '1.0',
      '3.0',
      '3.5'
    ],
    correctIndex: 2,
    explanation: 'COP (Coefficient of Performance) = Cooling Capacity ÷ Power Input = 105 kW ÷ 35 kW = 3.0. A COP of 3.0 means the chiller delivers 3 kW of cooling for every 1 kW of electrical power consumed — significantly more efficient than direct electric heating/cooling (COP = 1.0). For comparison, the chiller rejects 105 + 35 = 140 kW through the condenser. Modern high-efficiency chillers can achieve COPs of 5–7 under favourable conditions. COP is the metric system equivalent of EER (1 EER ≈ 0.293 COP; or COP × 3.41 = EER in BTU/Wh).',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-e-startup',
    topicLabel: 'MWA E — Commissioning Systems',
    question: 'A new installation uses a multi-circuit refrigeration rack with electronic controllers. Before start-up, the mechanic downloads the equipment configuration from the manufacturer\'s software. What is this process called and why is it necessary?',
    options: [
      'Firmware update — to install the latest manufacturer software patches',
      'Parameterization (or programming) — loading the site-specific setpoints, safety limits, refrigerant type, sensor calibration offsets, and sequence-of-operations logic that matches the specific installation into the controller before it can control the system correctly',
      'Network mapping — assigning IP addresses to the controllers',
      'Commissioning backup — saving the controller state in case of future memory loss'
    ],
    correctIndex: 1,
    explanation: "Electronic refrigeration controllers (such as those from Danfoss, Emerson, or Dixell) ship from the factory with default parameters. Before the first start, they must be parameterized (programmed) with the site-specific configuration: the refrigerant type (determines the P/T relationship used by the controller), safety trip points, superheat targets, defrost schedule, suction pressure setpoints, and sensor calibration values. A controller running on default parameters in a different refrigerant application than it's programmed for will operate incorrectly and may damage the system.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-e-performance',
    topicLabel: 'MWA E — Performance Verification',
    question: 'A heat recovery ventilator (HRV) is being commissioned in a new residential building. What is the correct measurement to verify it is achieving its rated heat recovery efficiency?',
    options: [
      'Measure the outdoor air temperature only — if it is below 0°C, the HRV is working',
      'Measure the exhaust air entering and leaving the heat exchanger core, and the supply air entering and leaving the core, then calculate sensible efficiency = (Supply air leaving − Supply air entering) ÷ (Exhaust air entering − Supply air entering) × 100%',
      'Measure the static pressure drop across the HRV core on both the supply and exhaust sides',
      'Verify that the HRV produces equal airflow on both the supply and exhaust sides'
    ],
    correctIndex: 1,
    explanation: 'HRV sensible efficiency (also called "apparent sensible effectiveness" or "temperature efficiency") measures how effectively heat is transferred from the warm exhaust air to the cold incoming supply air. The formula compares the actual temperature rise of the supply air to the maximum possible temperature rise (the difference between exhaust inlet and supply inlet temperatures). A well-performing HRV should achieve 65–85% sensible efficiency at 0°C outdoor conditions. Simply verifying equal flows or pressure drops does not confirm heat transfer performance.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-e-performance',
    topicLabel: 'MWA E — Performance Verification',
    question: 'During a commissioning test of a commercial walk-in freezer, the pulldown time from +20°C (product loading temperature) to −18°C (design setpoint) takes 8 hours. The design pulldown time was 5 hours. What is the MOST productive diagnostic step?',
    options: [
      'Add more refrigerant charge immediately',
      'Verify that the evaporator airflow is correct, that the defrost cycle is not activating during pulldown, that the door seals are intact, and that the refrigeration system is meeting its design suction and discharge pressures under full load',
      'Replace the evaporator fans with higher-speed motors',
      'Reduce the setpoint to −25°C to compensate for the slower pulldown'
    ],
    correctIndex: 1,
    explanation: 'Slow pulldown is a systematic problem that requires systematic diagnosis. Check: (1) Is the refrigerant circuit performing correctly (correct suction/discharge pressures, superheat, subcooling under full load)? (2) Is the evaporator receiving the correct airflow (fans all running, coil not prematurely frosted)? (3) Are the box panels and door seals intact (no air infiltration adding load)? (4) Is the defrost system disabling fans or applying heat during pulldown? Only after ruling out these common causes should unusual causes like refrigerant charge be suspected.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-e-performance',
    topicLabel: 'MWA E — Performance Verification',
    question: 'A building automation system displays a chiller\'s "kW/ton" metric at 0.75. What does this mean and is it a good or poor performance indicator for a modern centrifugal chiller?',
    options: [
      '0.75 kW per ton of cooling capacity; this is excellent performance for a centrifugal chiller (modern high-efficiency centrifugal chillers typically achieve 0.45–0.65 kW/ton at design conditions)',
      '0.75 kW per ton; this is poor performance — modern centrifugal chillers always operate at under 0.3 kW/ton',
      '0.75 kW per ton; this is acceptable for all chiller types at all conditions',
      '0.75 kW represents the chiller\'s minimum power consumption'
    ],
    correctIndex: 0,
    explanation: 'kW/ton (kilowatts per ton of refrigeration) is the primary energy efficiency metric for chillers in North America. Lower kW/ton = more efficient. A modern high-efficiency centrifugal chiller typically achieves 0.45–0.65 kW/ton at AHRI rating conditions. A kW/ton of 0.75 indicates the chiller is operating less efficiently than optimal — possible causes include a dirty condenser, operating at off-design conditions (higher chilled water supply temperature, higher condenser water temperature), or a degraded chiller requiring service. For comparison, a screw chiller might achieve 0.55–0.75 kW/ton and a reciprocating chiller 0.8–1.2 kW/ton.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-e-startup',
    topicLabel: 'MWA E — Commissioning Systems',
    question: 'During the final stage of commissioning, what is the purpose of "trend logging" in the building automation system?',
    options: [
      'To record contractor hours for billing verification',
      'To automatically log values from sensors and control outputs at regular intervals over time, allowing the mechanic and owner to verify that the system is operating correctly across varying load conditions, time of day, and seasons',
      'To backup the control programming in case the controller memory is lost',
      'To monitor energy consumption for utility billing purposes only'
    ],
    correctIndex: 1,
    explanation: "Trend logging captures time-stamped historical data from BAS points (temperatures, pressures, valve positions, flow rates, equipment states) at configurable intervals (e.g., every 1–5 minutes). This allows verification that the system performs correctly not just at the commissioning snapshot, but over hours, days, and weeks — catching issues like: night setback not activating, economizer not engaging during cool weather, a zone that never reaches setpoint during peak hours, or equipment short-cycling. Trend data is also used for fault detection, warranty support, and performance benchmarking over the system's life.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-e-startup',
    topicLabel: 'MWA E — Commissioning Systems',
    question: 'A refrigeration system uses a suction pressure regulator (SPR) valve between the evaporator and the compressor. What is the function of this component?',
    options: [
      'To limit the maximum suction pressure, protecting the compressor from high suction pressures during pulldown or defrost termination',
      'To boost suction pressure to the compressor during low-load conditions',
      'To filter refrigerant vapour before it enters the compressor suction',
      'To maintain a constant suction pressure regardless of the refrigerant charge level'
    ],
    correctIndex: 0,
    explanation: "A suction pressure regulator (also called an evaporator pressure regulator or crankcase pressure regulator) limits the maximum suction pressure seen by the compressor. This is critical during system pulldown (when the suction pressure is initially high), defrost cycle termination (where hot gas can raise evaporator pressure rapidly), or on high-temperature loads. Without an SPR, an excessively high suction pressure causes the compressor motor to draw very high current (overloading it) and creates excessive head pressure. The SPR throttles the suction line to keep compressor inlet pressure at or below its setpoint.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-e-performance',
    topicLabel: 'MWA E — Performance Verification',
    question: 'A mechanic completing commissioning documentation must complete an "as-built" markup. What does this require?',
    options: [
      'Writing a detailed narrative report describing every installation step taken',
      'Redlining (marking in red ink or on digital drawings) all field deviations from the original design drawings — including actual equipment locations, pipe routing changes, valve locations, and any substituted components — and submitting updated drawings for the project record',
      'Photographing every component installed and attaching photos to the service report',
      'Calculating the actual energy consumption of the installed system'
    ],
    correctIndex: 1,
    explanation: "As-built drawings are the final record of what was actually installed versus what was originally designed. In the field, changes are inevitable: equipment is shifted for clearance, pipe routing is modified to avoid structural conflicts, substituted components have different connection sizes. Without updated drawings, future service technicians and facility managers don't know what's actually in the walls and ceilings. As-built drawings are a contract deliverable, a legal record, and an operational necessity. They are typically created by redlining paper prints or using digital markup tools, then formally drafted into updated CAD drawings by the engineer or designer.",
    order: 0
  },

  // ============================================================
  // MWA F — Maintenance and Service (25 questions)
  // ============================================================

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-maintenance',
    topicLabel: 'MWA F — Performing Maintenance',
    question: 'A commercial refrigeration system uses a brazed-plate heat exchanger as a condenser on a water-cooled application. During maintenance, the mechanic notices the entering and leaving condenser water temperatures are 29°C and 31°C respectively under a full load condition. The design specifies a leaving water temperature of 35°C. What does this indicate?',
    options: [
      'The system is operating very efficiently — lower leaving water temperature is always better',
      'The condenser water flow rate is higher than the design GPM — water is flowing too fast through the heat exchanger, resulting in insufficient heat transfer contact time and a lower-than-design temperature rise',
      'The system is undercharged with refrigerant',
      'The heat exchanger is fouled with scale, reducing heat transfer'
    ],
    correctIndex: 1,
    explanation: "The heat exchanger is transferring heat, but the water is picking it up at a lower temperature rise than designed. If the flow rate is too high, more water passes through per unit of time — each litre carries away less heat, so the rise is small. The total heat rejection may still be adequate, but the system is not matched to its design condition. Consequences include: the cooling tower must work with lower entering water temperature (less efficient), and the chiller/condenser may operate at a lower condensing temperature than intended. The balancing valve should be adjusted to reduce flow to the design GPM.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-maintenance',
    topicLabel: 'MWA F — Performing Maintenance',
    question: 'During an annual PM inspection of a belt-driven fan, the mechanic observes a glazed (shiny, hardened) belt surface and black powder residue around the sheaves. What caused this and what is the required maintenance action?',
    options: [
      'The belt is new and has not yet broken in — no action required',
      'The belt has been slipping on the sheaves due to insufficient tension or misaligned sheaves, generating heat that glazes the rubber surface; the belt must be replaced and the cause (tension or alignment) corrected',
      'The belt is the wrong type — switch to a notched V-belt',
      'The sheaves are the wrong size — recalculate the drive ratio'
    ],
    correctIndex: 1,
    explanation: 'Belt glazing (a hard, shiny surface) is caused by belt slip — the belt is not gripping the sheave properly and slides on the surface. The friction generates heat that hardens and glazes the rubber, which further reduces the coefficient of friction and worsens slipping. Black dust is degraded rubber material. A glazed belt cannot be restored — it must be replaced. Before replacing, the mechanic must identify and correct the root cause: most commonly insufficient belt tension (adjust the motor mount) or sheave misalignment (realign to within 1/16" per foot of center distance). Simply replacing the belt without fixing the cause means the new belt will glaze within days.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-maintenance',
    topicLabel: 'MWA F — Performing Maintenance',
    question: 'When lubricating a fan motor bearing with a grease gun during PM, the mechanic continues injecting grease until it comes out the other side of the bearing. Why is this incorrect?',
    options: [
      'It is correct — overfilling ensures maximum bearing protection',
      'Overfilling forces grease into the motor windings, causing insulation breakdown and motor failure; bearing housings should be filled to only 1/3 to 1/2 of their free space with the correct grease type',
      'Overfilling wastes expensive grease but has no mechanical effect',
      'The grease coming out the other side means the bearing is already full and no more should have been added'
    ],
    correctIndex: 1,
    explanation: "Bearing lubrication is a precise task, not a 'more is better' situation. Overfilling a bearing housing increases churning losses (the grease becomes an obstacle), which generates heat that liquefies the grease and causes it to migrate — often into the motor windings. Grease contaminating windings degrades insulation and can cause motor failure. The correct procedure is to add a small amount (per the manufacturer's specification, typically measured in grams), run the motor briefly to distribute the grease, and stop when excess exits the relief port. Many motors have grease relief ports specifically to prevent overfilling.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-maintenance',
    topicLabel: 'MWA F — Performing Maintenance',
    question: 'A cooling tower is being prepared for seasonal startup after winter shutdown. Which component should be tested before any water is introduced to ensure safety?',
    options: [
      'The fan motor bearings — check for rust that developed over winter',
      'The basin heater — confirm it is working before needing it for freeze protection',
      'The drift eliminators — ensure they are not degraded from winter conditions',
      'The Legionella risk assessment and water treatment system — commission the biocide dosing system and ensure the tower is properly disinfected before startup per ASHRAE 188 and the facility\'s water management plan'
    ],
    correctIndex: 3,
    explanation: 'Cooling towers that sit dormant over winter accumulate sediment, biological scale, and potentially Legionella bacteria in residual water and biofilm on wetted surfaces. ASHRAE 188 and Health Canada guidelines require that before seasonal startup, the tower undergo a documented disinfection procedure (typically hyperchlorination or biocide treatment) and that the water management plan (including Legionella risk assessment) be reviewed. Starting a tower with contaminated water without disinfection aerosolizes potentially Legionella-laden droplets — a serious public health risk that has caused deadly outbreaks.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-diagnostics',
    topicLabel: 'MWA F — Diagnosing Systems',
    question: 'A customer reports that their split-system air conditioner is running continuously but the house is not cooling. The outdoor unit\'s compressor and condenser fan are both running. The indoor fan is blowing air but it is not cold. What is the FIRST thing to check?',
    options: [
      'Check the refrigerant charge immediately',
      'Check whether the indoor evaporator coil is completely frozen over (iced up), which would block all airflow and heat transfer — caused by low airflow (dirty filter) or low refrigerant charge',
      'Replace the thermostat',
      'Check the outdoor unit disconnect fuse'
    ],
    correctIndex: 1,
    explanation: "A running system that blows uncooled air despite all components running points to either no heat transfer occurring or airflow being blocked. A completely iced evaporator is the most common single cause — ice insulates the coil surface and blocks airflow. Before refrigerant testing (which requires gauges and time), the mechanic should visually inspect or feel the indoor unit: an ice-covered coil is immediately apparent. The ice itself is typically caused by either very low airflow (check/replace air filter first) or a low refrigerant charge causing evaporator temperature to drop below 0°C. The system must be shut down (fan only mode) to thaw the coil before further diagnosis.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-diagnostics',
    topicLabel: 'MWA F — Diagnosing Systems',
    question: 'An ammonia (R-717) refrigeration system has a suspected refrigerant leak. Which leak detection method is APPROVED and APPROPRIATE for ammonia?',
    options: [
      'An electronic halide leak detector (the type used for HFCs)',
      'A sulfur candle or incense stick — the smoke will change colour in the presence of ammonia',
      'An electrochemical ammonia-specific gas detector, pH paper (turns blue in ammonia), or a commercial "snoop"-type soapy solution at joints, along with a personal ammonia detector worn by the mechanic',
      'UV dye injected into the system — the dye glows under UV light at the leak point'
    ],
    correctIndex: 2,
    explanation: "Ammonia (R-717) requires specific detection methods. Electronic halide detectors are designed for halogenated refrigerants and do NOT detect ammonia. UV dye is not used in ammonia systems (incompatible chemistry). Approved methods include: (1) Electrochemical gas detectors calibrated for ammonia, (2) pH-sensitive paper or wet litmus paper held near suspect joints (ammonia is alkaline and turns pH paper blue), (3) Electronic sniffers specifically rated for ammonia. All ammonia leak detection must be performed with ammonia-rated PPE, and the mechanic should wear a personal ammonia monitor whenever working on or near ammonia systems.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-diagnostics',
    topicLabel: 'MWA F — Diagnosing Systems',
    question: 'A commercial walk-in freezer operating at −18°C setpoint has a suction pressure corresponding to a saturation temperature of −28°C. The evaporator is clean and the fans are running. What does the 10°C difference between box temperature and saturation temperature suggest?',
    options: [
      'This is normal — a 10°C temperature difference (TD) between box and coil surface is typical for commercial freezers and represents the coil\'s driving temperature difference for heat transfer',
      'The evaporator coil is severely undersized for the freezer load',
      'There is a refrigerant leak causing low suction pressure',
      'The evaporator fans are running backward'
    ],
    correctIndex: 0,
    explanation: "The temperature difference (TD) between the freezer air temperature (−18°C) and the refrigerant saturation temperature in the evaporator (−28°C) is the driving force for heat transfer across the evaporator coil. For commercial refrigeration, a TD of 8–12°C is typical and intentional — the coil must be colder than the air to absorb heat from it. A very small TD would mean the coil has little ability to draw heat from the box (undersized or dirty coil at marginal conditions); a very large TD (>15°C) might indicate a restricted metering device or low charge. 10°C is squarely in the normal range.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-diagnostics',
    topicLabel: 'MWA F — Diagnosing Systems',
    question: 'A multi-zone VRF (Variable Refrigerant Flow) system has one indoor unit that is not cooling despite the outdoor unit running and all other indoor units cooling normally. The faulty indoor unit\'s refrigerant line connections feel warm. What is the MOST likely cause?',
    options: [
      'The outdoor unit compressor is failing and cannot supply enough refrigerant to all zones',
      'The faulty indoor unit\'s electronic expansion valve (EEV) is stuck closed or has failed in the closed position, preventing refrigerant flow to that unit while other units operate normally',
      'The refrigerant charge is low — add refrigerant until all units cool properly',
      'The indoor unit\'s fan motor has failed'
    ],
    correctIndex: 1,
    explanation: 'VRF systems use individually controlled EEVs in each indoor unit to modulate refrigerant flow to that zone independently. If one unit\'s EEV is stuck closed (electrical failure, stuck valve, or controller fault), no refrigerant flows to that unit — the lines will be warm (or ambient temperature) rather than cold. All other units are unaffected because their EEVs are independent. This is diagnosed by: checking the indoor unit controller for EEV fault codes, measuring line temperatures, and using a VRF service tool to command the EEV to open manually.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-diagnostics',
    topicLabel: 'MWA F — Diagnosing Systems',
    question: 'A centrifugal chiller is experiencing "surging" — a rhythmic booming sound with fluctuating suction and discharge pressures. What condition typically causes surge in a centrifugal compressor?',
    options: [
      'The chilled water supply temperature is set too cold',
      'The compressor is operating at a very low load (low lift condition) where the impeller can no longer maintain the required pressure ratio, causing flow reversal through the impeller in a cyclic pattern',
      'The refrigerant charge is too high, causing liquid carryover to the compressor',
      'The condenser water temperature is too cold, causing the condensing pressure to be too low for stable operation'
    ],
    correctIndex: 3,
    explanation: 'Centrifugal compressor surge occurs when the pressure ratio the compressor must produce exceeds the compressor\'s capability at the current speed and flow. This is more commonly caused by very LOW lift (not high load) — when condensing pressure is too low (cold condenser water), the compressor operates far left of its surge line. Cold condenser water in spring or fall can actually cause surge. Additionally, it can occur at low load with hot gas bypass insufficient to maintain minimum flow. The surge line on a chiller performance map shows the boundary — operating left of the surge line causes the cyclic flow reversal. The operator typically responds by raising chilled water temperature setpoint or limiting minimum condenser water temperature.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-diagnostics',
    topicLabel: 'MWA F — Diagnosing Systems',
    question: 'A mechanic is called to a refrigerated warehouse where the refrigeration system is running but the freezer is slowly warming up over several days. The suction pressure is slightly low and the superheat is higher than normal. The system was serviced 6 months ago. What is the MOST systematic first diagnostic approach?',
    options: [
      'Add refrigerant immediately to correct the low suction pressure and high superheat',
      'Perform a complete set of operational measurements: suction and discharge pressures, suction and liquid line temperatures (superheat and subcooling), compressor amperage, and box temperature — compare to previous service records to identify what has changed over 6 months',
      'Replace the TXV — the high superheat indicates valve failure',
      'Check for refrigerant leaks using only an electronic detector'
    ],
    correctIndex: 1,
    explanation: "Good diagnostic practice requires establishing a complete operational baseline before taking any corrective action. 'Slightly low suction, slightly high superheat' could be caused by: a slow refrigerant leak, a gradually clogging filter-drier, a slowly degrading TXV, or increasing box load. Without comparing current measurements to previous service records, the mechanic cannot determine which cause is responsible. Adding refrigerant without finding and repairing a leak wastes refrigerant and delays resolving the root cause. A complete measurement set takes 10 minutes and eliminates most of the differential diagnosis.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-repair',
    topicLabel: 'MWA F — Repairing Systems',
    question: 'When replacing a compressor in a system that used POE oil, what must be done with the oil in the new replacement compressor if it ships with a mineral oil factory fill?',
    options: [
      'Nothing — small amounts of mineral oil are compatible with POE in the system',
      'The mineral oil factory fill must be drained and replaced with the correct POE oil before installation, as mineral oil and HFC refrigerants are not miscible and will cause compressor damage',
      'Add extra POE oil to the system to dilute the mineral oil to an acceptable level',
      'Use the compressor as shipped — the system\'s existing POE oil will flush the mineral oil out within 24 hours'
    ],
    correctIndex: 1,
    explanation: "HFC refrigerants require POE oil for miscibility (the oil must mix with the refrigerant to be circulated throughout the system). Mineral oil is not miscible with HFCs — it separates from the refrigerant and coats heat exchanger surfaces (reducing efficiency) and pools in low points (causing oil starvation at the compressor). Some replacement compressors ship with a mineral oil factory fill for preservation. The mechanic must drain this mineral oil, refill with the correct grade of POE oil per the manufacturer's specification, and then install the compressor. Mixing even 5% mineral oil into a POE system can exceed the maximum allowable contamination level.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-repair',
    topicLabel: 'MWA F — Repairing Systems',
    question: 'After replacing a leaking brazed-plate heat exchanger on a chilled water system, the mechanic pressure tests the refrigerant circuit. The test pressure holds for one hour. What must be done BEFORE connecting the chilled water piping back to the new heat exchanger?',
    options: [
      'Nothing — if the refrigerant side holds pressure, the water side is ready to connect',
      'The water side of the heat exchanger must also be pressure tested separately, as the refrigerant-side test only verifies the refrigerant passages and internal plates — the water passages and nozzle connections must be independently verified leak-free',
      'Flush the new heat exchanger with refrigerant to remove manufacturing debris',
      'Apply thread sealant to all water-side connections before reconnecting'
    ],
    correctIndex: 1,
    explanation: 'A brazed-plate heat exchanger has two completely separate fluid circuits — the refrigerant circuit and the water circuit — separated by thin stainless steel plates. A pressure test on the refrigerant side only tests the refrigerant passages and the integrity of the plate-to-plate brazed joints on the refrigerant side. The water-side nozzle connections, threaded fittings, and water-side face of the plates must be separately verified for leaks before the water piping is reconnected and the system is filled with chilled water. A small leak in the water-side piping connections would cause both refrigerant contamination and water damage.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-repair',
    topicLabel: 'MWA F — Repairing Systems',
    question: 'After completing a compressor replacement and system cleanup on a refrigeration rack following a burnout, the mechanic installs a new liquid-line filter-drier and a suction-line acid drier. When should the suction-line acid drier be replaced?',
    options: [
      'After 1 year of operation — the same as a standard annual PM schedule',
      'The suction-line drier never needs replacement — it regenerates itself',
      'After the first 24–48 hours of operation, and then again after each subsequent oil change, until acid test results (TAN) confirm the system oil and refrigerant are clean — typically 2–4 changes',
      'Only if suction pressure drop across the drier exceeds 35 kPa'
    ],
    correctIndex: 2,
    explanation: "The suction-line acid drier is installed specifically to capture acid, carbon, and moisture from the contaminated system during the cleanup process. It becomes saturated much faster than a standard liquid-line drier because it is actively capturing contaminants in every pound of refrigerant that flows through it. The drier is changed along with each oil change (every 24–48 hours of operation) during the cleanup protocol. Once the oil acid test shows clean results (TAN < 0.05 mg KOH/g), the suction-line drier is replaced with a standard filter-drier and the system is returned to normal monitoring.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-repair',
    topicLabel: 'MWA F — Repairing Systems',
    question: 'A refrigerant solenoid valve on the liquid line of a refrigeration system fails in the OPEN position. What is the immediate consequence during the off cycle?',
    options: [
      'No consequence — the metering device will prevent refrigerant migration during the off cycle',
      'Liquid refrigerant floods through the open solenoid and metering device into the evaporator and suction line during the off cycle, and can migrate to the compressor crankcase, causing liquid slugging on the next startup',
      'The high-pressure safety will trip as refrigerant pressure builds in the condenser',
      'The compressor will start and stop rapidly as the solenoid cycles rapidly'
    ],
    correctIndex: 1,
    explanation: "The liquid-line solenoid valve is specifically designed to close during the off cycle to prevent refrigerant migration from the warm high side to the cold low side (through the metering device) while the compressor is not running. If the solenoid fails open, liquid refrigerant follows the pressure gradient through the metering device and floods the evaporator and suction line. On the next startup, the compressor ingests liquid refrigerant (liquid slugging) — which, unlike vapor, is incompressible and bends connecting rods, breaks valve plates, and destroys the compressor. This is one of the most common compressor failure modes related to electrical control failures.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-repair',
    topicLabel: 'MWA F — Repairing Systems',
    question: 'A VFD controlling a chilled water pump trips on "Ground Fault" fault code. What does this indicate and what is the first step in diagnosis?',
    options: [
      'The VFD cooling fan has failed — clean the heat sink and restart',
      'There is an insulation breakdown between one of the motor windings and the motor frame/ground — de-energize and LOTO, then test the motor winding insulation resistance with a megohmmeter (500V DC) to confirm the fault location',
      'The VFD programming has been corrupted — restore default parameters',
      'The input fuses have blown — replace with the correct rating'
    ],
    correctIndex: 1,
    explanation: 'A ground fault occurs when current finds a path from a live conductor to ground (earth) through a fault in insulation rather than through the intended circuit. On a VFD-driven pump motor, this typically means the motor winding insulation has broken down — possibly from moisture ingress, age, overheating, or physical damage. The VFD detects this abnormal current path and trips to prevent electrical shock hazard and further damage. After LOTO, a megohmmeter test at 500V DC between each winding and the motor frame will confirm whether the insulation is compromised. An insulation resistance below 1 MΩ indicates the motor requires replacement.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-repair',
    topicLabel: 'MWA F — Repairing Systems',
    question: 'A reciprocating compressor is replaced on a large refrigeration system. After installation, the mechanic runs the system and checks the oil level in the crankcase sight glass. The oil level appears correct initially but drops significantly after one hour of operation. What is the MOST likely cause?',
    options: [
      'The new compressor has a crankshaft seal leak causing external oil loss',
      'The oil charge in the system was insufficient — the oil is distributing to the rest of the refrigerant circuit and not returning because oil return velocity in the suction piping is inadequate or the system has excessive oil in the piping from the previous compressor failure',
      'The sight glass is giving a false reading due to refrigerant flashing',
      'The compressor oil pump has failed, causing the oil to be pumped into the suction line'
    ],
    correctIndex: 1,
    explanation: 'After a compressor replacement, oil loss from the crankcase into the system is normal as the circulation process re-establishes equilibrium. However, if the oil level drops significantly and does not recover, it indicates a system-level oil return problem: the oil is migrating into the refrigerant circuit but not returning at the same rate. Possible causes: oil velocity in the suction line is insufficient for oil return (oversized pipe, low load), the previous burnout left oil distributed throughout the system that is now mixing with the new oil, or accumulated oil in low points is not being swept back. The suction line oil return design must be verified.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-repair',
    topicLabel: 'MWA F — Repairing Systems',
    question: 'A head pressure control valve (HPC) is installed on an air-cooled condensing unit to maintain minimum condensing pressure during cold weather. The valve is found to be stuck in the full-open position in winter. What is the consequence?',
    options: [
      'The system will run more efficiently due to lower condensing pressure',
      'Condensing pressure will be too low in cold weather, causing the TXV to lose sufficient pressure differential to feed the evaporator properly, resulting in low suction pressure, high superheat, and possible low-pressure trips',
      'The compressor will overheat due to low discharge pressure',
      'The fan cycling control will be unable to modulate condenser capacity'
    ],
    correctIndex: 1,
    explanation: 'Head pressure control valves (also called condenser pressure regulating valves) maintain a minimum condensing pressure during cold ambient conditions. Without adequate head pressure: (1) the liquid line pressure drops below the minimum required by the TXV to create enough pressure differential across the metering orifice; (2) flash gas forms in the liquid line before the TXV; (3) the evaporator is starved of liquid refrigerant; (4) superheat rises and suction pressure drops; and (5) low-pressure cut-outs trip. This is why many outdoor refrigeration systems that operate year-round require head pressure control, especially in Canadian winters.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-diagnostics',
    topicLabel: 'MWA F — Diagnosing Systems',
    question: 'An electronic leak detector is used to locate a refrigerant leak on a running system. The alarm sounds near a brazed joint on the liquid line. Before condemning the joint and opening the system for repair, what should the mechanic do to confirm the leak location?',
    options: [
      'Immediately recover the refrigerant and open the joint for inspection',
      'Use a secondary confirmation method — apply an approved soapy bubble solution to the suspect joint, or use a second detector with a different sensing technology, to confirm the leak is at that specific location before opening the system',
      'Wrap the joint with foil tape temporarily and monitor system pressures',
      'Add sealant additive to the refrigerant circuit to stop the leak'
    ],
    correctIndex: 1,
    explanation: "Electronic detectors can produce false alarms from: residual refrigerant from a previous service, refrigerant that has settled at a low point (not the actual leak source), or contamination on the sensor tip. Before opening the refrigerant circuit (which is expensive and must be done correctly), a secondary confirmation prevents wasted effort. A soap bubble test at the exact suspect location provides visual confirmation of the leak point and rate. Alternatively, a different detector technology (e.g., ultrasonic vs. electrochemical) at the same spot provides independent confirmation. Opening the system based solely on an unconfirmed electronic detection alarm is premature.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-diagnostics',
    topicLabel: 'MWA F — Diagnosing Systems',
    question: 'A heat pump is operating in heating mode. The outdoor coil (acting as the evaporator) is developing heavy frost at −5°C outdoor temperature. The system initiates defrost at regular intervals but the coil frost is not clearing fully. What is the MOST likely cause of incomplete defrost?',
    options: [
      'The refrigerant charge is too high, flooding the outdoor coil with liquid',
      'The defrost heater is too small for the coil size',
      'The defrost cycle termination thermostat or timer is ending the defrost cycle before the coil is fully clear — the defrost time or thermostat setpoint may need adjustment, or a refrigerant issue is limiting heat delivery to the coil during reverse-cycle defrost',
      'The outdoor fan is continuing to run during defrost, removing heat from the coil before it can melt the frost'
    ],
    correctIndex: 2,
    explanation: 'Most heat pumps use "reverse-cycle" defrost — the reversing valve switches to cooling mode, directing hot refrigerant gas into the outdoor coil to melt the frost from the inside. The defrost cycle ends when either a timer expires or a defrost termination thermostat mounted on the outdoor coil reaches a set temperature (typically 5–10°C), confirming all frost has melted. If the thermostat setpoint is too low, defrost ends too early. If the hot gas flow is insufficient (refrigerant issue), the coil may not reach the termination temperature within the allowed time, and the system reverts to heating mode with residual frost. The outdoor fan is correctly OFF during reverse-cycle defrost.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-repair',
    topicLabel: 'MWA F — Repairing Systems',
    question: 'After a service call, a mechanic writes a service report and lists three recommendations for the building owner. According to professional service standards, what is the purpose of listing recommendations on a service report?',
    options: [
      'To increase the invoice value by suggesting additional work',
      'To document observed conditions (worn belts, elevated acid in oil, marginal bearing noise) that may lead to future failures — providing the owner with the information needed to make preventive maintenance decisions, and protecting the contractor from liability if those items later cause a failure that the owner was not warned about',
      'Recommendations are not required and are optional commentary only',
      'To satisfy the equipment manufacturer\'s warranty inspection requirements'
    ],
    correctIndex: 1,
    explanation: "Recommendations on service reports serve two professional purposes: (1) They inform the building owner of developing issues they may wish to address before they become failures — this is genuine value-add service that builds trust. (2) They protect the contractor from liability. If a mechanic notes 'compressor insulation resistance is 0.9 MΩ — approaching end of life, recommend replacement planning' and the owner declines to act, the contractor cannot be held responsible when the compressor fails three months later. A signed acknowledgment of the recommendation further strengthens this protection. Professional recommendations are factual observations, not sales tactics.",
    order: 0
  },

  // ============================================================
  // Additional questions to complete 100 total
  // ============================================================

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-a-safety',
    topicLabel: 'MWA A — Safety and Healthy Workplace',
    question: 'A mechanic is asked to work on a rooftop without fall protection because the job will only take 10 minutes. What is the correct response?',
    options: [
      'Proceed — short-duration tasks do not require fall protection under Ontario regulations',
      'Proceed only if a co-worker is present to watch',
      'Refuse until appropriate fall protection (guardrails, travel restraint, or fall arrest system) is in place — Ontario OHSA requires fall protection at any unprotected edge above 3 metres, regardless of task duration',
      'Tie off only if the roof slope exceeds 20 degrees'
    ],
    correctIndex: 2,
    explanation: "Ontario Regulation 213/91 (Construction Projects) and O. Reg. 67/93 (Industrial Establishments) both require fall protection at unprotected edges above 3 metres, with no exception for task duration. The '10 minutes' argument is frequently cited on job sites and is incorrect — falls take less than a second. The mechanic has the legal right (and duty) to refuse unsafe work under Section 43 of the OHSA. Appropriate fall protection must be selected and donned before approaching any unprotected roof edge.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-tools',
    topicLabel: 'MWA B — Tools and Equipment',
    question: 'An acetylene cylinder must be stored and used in which orientation, and why?',
    options: [
      'Horizontally — to keep the porous filler material evenly distributed',
      'At any angle — acetylene cylinders are safe in any position',
      'Upright (valve end up) — acetylene is dissolved in liquid acetone inside the porous filler; if the cylinder is tipped, liquid acetone can enter the regulator and torch, contaminating the flame and potentially causing equipment damage',
      'Inverted (valve end down) — so the acetylene gas rises naturally toward the valve'
    ],
    correctIndex: 2,
    explanation: "Acetylene cylinders contain acetylene gas dissolved under pressure in liquid acetone, which is absorbed in a porous filler material (such as calcium silicate). If the cylinder is used or stored on its side or inverted, liquid acetone can flow through the porous material toward the valve and enter the regulator and hoses. Acetone in the gas stream contaminates the flame (yellow, sooty) and can damage seals and diaphragms in the regulator. Always store and use acetylene cylinders upright. If a cylinder has been tipped, stand it upright for at least one hour before using it.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-b-refrigerants',
    topicLabel: 'MWA B — Refrigerants and Oils',
    question: 'R-290 (propane) is being used as a refrigerant in a new self-contained display case. What specific service practice is CRITICAL when performing any repair involving opening the refrigerant circuit on this system?',
    options: [
      'R-290 requires POE oil, so the oil must be changed at every service event',
      'R-290 must be charged as a liquid to prevent fractionation',
      'All ignition sources must be eliminated from the work area before opening the circuit — R-290 is an A3 (highly flammable) refrigerant with a very low ignition energy, and any spark or open flame can ignite a leak',
      'R-290 requires a special recovery machine rated for 600 PSI minimum working pressure'
    ],
    correctIndex: 2,
    explanation: "R-290 (propane) has an ASHRAE A3 safety classification — highly flammable, with a lower flammability limit (LFL) of 2.1% by volume and a very low minimum ignition energy (0.25 mJ — less than a static discharge from a human hand). When opening an R-290 circuit, any spark from tools, electrical equipment, or static can ignite a refrigerant/air mixture. Strict ignition source elimination includes: powering off all electrical equipment in the area, using non-sparking tools, eliminating open flames, grounding the equipment and mechanic, and ensuring ventilation. The system's small charge size (typically < 150 g per circuit) limits the quantity, but does not eliminate the risk.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-c-load',
    topicLabel: 'MWA C — Load Calculations and Component Sizing',
    question: 'An HVAC system is designed for a building in Ottawa, Ontario. The designer selects an outdoor design temperature of −27°C for heating load calculations. This temperature represents which design standard?',
    options: [
      'The absolute coldest temperature ever recorded in Ottawa',
      'The ASHRAE 99% heating design dry-bulb temperature — the temperature that is equalled or exceeded 99% of all hours in a typical year (or below which outdoor temperature falls only 1% of the time)',
      'The average winter temperature in Ottawa',
      'The temperature at which all HVAC equipment must be rated for operation'
    ],
    correctIndex: 1,
    explanation: "ASHRAE 99% heating design conditions represent the temperature exceeded by 99% of the annual hours (8,760 total) — meaning outdoor temperature falls below this value for approximately 88 hours per year. This is the accepted industry standard for sizing heating systems: equipment sized to maintain setpoint at this condition will be adequate for all but the coldest 1% of hours (which may fall slightly short but for brief periods). Using the all-time record low would result in massive oversizing with high capital cost and poor part-load performance. Ottawa's ASHRAE 99% heating design temperature is approximately −27°C.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-installation',
    topicLabel: 'MWA D — Installing HVAC/R Systems',
    question: 'A mechanic is installing refrigerant piping through a fire-rated wall assembly. After the pipe is brazed, what additional step is REQUIRED before the installation is considered complete?',
    options: [
      'Apply refrigerant-rated pipe insulation over the penetration',
      'Seal the annular space around the pipe with a listed fire-stopping sealant or system that maintains the fire resistance rating of the wall assembly',
      'Install a pressure relief valve within 300 mm of the penetration',
      'Wrap the pipe with aluminum foil tape at the wall penetration'
    ],
    correctIndex: 1,
    explanation: 'The Ontario Building Code (OBC), the National Building Code (NBC), and NFPA 13 all require that any penetration through a fire-rated assembly (wall, floor, ceiling) be sealed with a listed fire-stopping system that restores the rated fire resistance of the assembly. The fire-stopping material (intumescent sealant, firestop collar, or putty pad) must be installed per the manufacturer\'s UL/ULC listing, which specifies the exact sealant depth, backing material, and applicable pipe sizes. Failing to firestop a pipe penetration violates code and can allow fire and smoke to spread between fire compartments.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-d-controls',
    topicLabel: 'MWA D — Installing Control Systems',
    question: 'An outdoor air temperature sensor for a building automation system must be installed on the building exterior. Where is the MOST appropriate mounting location?',
    options: [
      'On the south-facing wall in direct sunlight for maximum solar gain measurement',
      'On the north-facing wall or in a shaded location, protected from direct solar radiation, precipitation, and local heat sources such as exhaust fans or mechanical equipment',
      'Inside the fresh air intake ductwork, behind the outdoor air damper',
      'On the rooftop next to the condenser exhaust fan discharge'
    ],
    correctIndex: 1,
    explanation: "An outdoor air temperature sensor must measure true outdoor ambient temperature — the temperature of the air the building is actually exposed to. Direct solar radiation on an unshielded sensor can read 10–20°C above actual air temperature. Mounting near exhaust fans or mechanical equipment introduces local heat sources. Mounting inside the fresh air intake measures the air temperature after it has been affected by solar gain on the intake grille and ductwork. A north-facing location (no direct sun in the northern hemisphere) or a sensor with a radiation shield provides the most accurate outdoor air temperature reading for economizer and heating controls.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-e-startup',
    topicLabel: 'MWA E — Commissioning Systems',
    question: 'During commissioning of a rooftop unit with an integrated economizer, the mechanic must verify that the economizer controls are functioning correctly. At what outdoor condition should the economizer be fully open (100% outdoor air)?',
    options: [
      'When outdoor temperature exceeds the return air temperature',
      'When the outdoor air enthalpy (or dry-bulb temperature, depending on the control strategy) is below the setpoint that indicates free cooling is available — typically when outdoor air is cool enough to meet the supply air setpoint without mechanical cooling',
      'The economizer is always fully open during occupied hours to maximize ventilation',
      'When outdoor humidity exceeds 60% relative humidity'
    ],
    correctIndex: 1,
    explanation: "Economizer controls open the outdoor air damper to 100% when outdoor conditions are favourable for free cooling — meaning outdoor air is cool (and/or dry) enough to cool the space without running the compressor. The specific control logic depends on the strategy: dry-bulb control opens on outdoor temperature below a fixed setpoint (e.g., 16°C); differential dry-bulb opens when outdoor air is cooler than return air by a defined margin; enthalpy-based control compares total heat content (temperature + humidity). The economizer closes or modulates back when mechanical cooling is needed. Verifying correct operation at both above- and below-setpoint conditions is a commissioning requirement.",
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-maintenance',
    topicLabel: 'MWA F — Performing Maintenance',
    question: 'During a PM inspection of an air-cooled condensing unit, the mechanic measures a voltage imbalance of 3.5% across the three phases supplying a scroll compressor. What action should be taken?',
    options: [
      'No action — up to 5% voltage imbalance is acceptable for scroll compressors',
      'Document the finding, notify the electrical contractor or utility, and advise the building owner — NEMA MG-1 specifies a maximum 1% voltage imbalance for motors; a 3.5% voltage imbalance causes disproportionately higher current imbalance (approximately 6–10× the voltage imbalance percentage) that will overheat the motor',
      'Add a capacitor to the phase with the lowest voltage to correct the imbalance',
      'Swap any two of the three phase leads to redistribute the imbalance'
    ],
    correctIndex: 1,
    explanation: 'NEMA MG-1 specifies that motor voltage imbalance should not exceed 1%. The relationship between voltage and current imbalance is highly amplified: a 3.5% voltage imbalance typically causes a current imbalance of 15–35% on the affected phase. This high current overheats the motor windings, accelerates insulation degradation, and causes the thermal overload to trip. The voltage imbalance originates in the supply (often a utility issue, a high-resistance connection, or an unequally loaded distribution panel) and must be corrected at the source — not by altering the motor connections. The compressor should be monitored closely until the supply is corrected.',
    order: 0
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'mwa-f-repair',
    topicLabel: 'MWA F — Repairing Systems',
    question: 'When a refrigerant recovery cylinder is returned to the reclaimer, what information MUST be labeled on the cylinder?',
    options: [
      'Only the weight of the refrigerant inside',
      'The refrigerant type, whether it is mixed with another refrigerant, the system it came from, and the gross weight — mixing different refrigerants in the same recovery cylinder renders the refrigerant unrecyclable and is a regulatory violation',
      'The date the cylinder was last hydrostatically tested',
      'The contractor\'s company name and GST number'
    ],
    correctIndex: 1,
    explanation: "Recovered refrigerant must be labeled with: the specific refrigerant type (e.g., R-410A), an indication of whether it may be contaminated or mixed with other refrigerants, and the gross weight. Mixing different refrigerant types in the same recovery cylinder is prohibited — the resulting mixture is a non-specification blend that cannot be reclaimed or recycled (it must be destroyed, at significant cost). If a mechanic is uncertain whether a cylinder contains a different refrigerant, a separate cylinder must be used. Cylinders with mixed or unknown refrigerants must be labeled 'mixed/contaminated' before sending to the reclaimer.",
    order: 0
  },
  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'C',
    topicLabel: 'Common Occupational Skills (MWA A)',
    question: 'When sizing a suction line for a refrigeration system with a 40-foot vertical riser, what is the primary design concern?',
    options: [
      'Minimizing total pressure drop to under 1 PSIG for maximum efficiency.',
      'Maintaining a refrigerant gas velocity high enough to carry oil droplets back to the compressor.',
      'Reducing the amount of liquid refrigerant trapped in the riser at shutdown.',
      'Ensuring the pipe is large enough to prevent high compressor discharge temperatures.'
    ],
    correctIndex: 1,
    explanation: 'In vertical suction risers, the gas must flow upward and must carry entrained oil droplets with it. A minimum gas velocity of approximately 1,000–1,500 fpm is required for oil return in risers. If the pipe is oversized, velocity drops below this threshold, and oil will accumulate in the riser, eventually starving the compressor. P-traps are installed at the base of risers to assist with oil return at low loads.'
  },
  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Routine Trade Activities (MWA B)',
    question: 'Where should a liquid-line sight glass be installed for the most accurate indication of a fully subcooled refrigerant charge?',
    options: [
      'Immediately after the condenser outlet, before the receiver.',
      'After the receiver outlet but before the filter-drier.',
      'As close to the metering device as possible, after the filter-drier.',
      'In the bypass line of the head pressure control valve.'
    ],
    correctIndex: 2,
    explanation: 'Placing the sight glass immediately upstream of the TXV (and downstream of the filter-drier) tells you the actual state of the refrigerant entering the metering device. This is the most critical location: a flash (bubbles) here indicates either an undercharge or a restriction in the filter-drier causing a pressure drop. A clear glass does not guarantee correct charge — it confirms there is a solid column of liquid at that specific point.'
  },
  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Plans Installation (MWA C)',
    question: 'During commissioning of a 3-phase scroll compressor system, the unit starts and runs but suction pressure remains high and discharge pressure remains low. What is the most likely cause?',
    options: [
      'The system is severely undercharged with refrigerant.',
      'The compressor is rotating in the wrong direction due to incorrect phase sequencing.',
      'The TXV is stuck in the wide-open position.',
      'The crankcase heater was not energized prior to startup.'
    ],
    correctIndex: 1,
    explanation: 'Scroll compressors are direction-sensitive — reverse rotation causes the scroll geometry to pump backward, resulting in near-equal suction and discharge pressures (the compressor is not "pumping"). This is diagnosed by swapping any two of the three phase leads and observing whether pressures immediately separate. This is the first thing to check on any 3-phase scroll or screw compressor that is running but not building differential.'
  },
  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Installation (MWA D)',
    question: 'An air-cooled AC system has HIGH suction pressure, LOW discharge pressure, and HIGH superheat. What is the most likely diagnosis?',
    options: [
      'Inefficient compressor (leaking internal valves or worn scrolls).',
      'Restricted metering device (TXV stuck partially closed).',
      'Dirty condenser coil.',
      'Overcharged refrigerant system.'
    ],
    correctIndex: 0,
    explanation: 'An inefficient compressor (bad valves, worn scrolls, or broken piston rings) cannot compress the refrigerant effectively — hot gas flows backward across the worn seals, raising suction pressure and lowering discharge pressure. High superheat results because the compressor is also not pulling adequate suction. This differs from a restriction (which causes LOW suction, LOW discharge, HIGH superheat) and differs from an overcharge (HIGH discharge, LOW superheat).'
  },
  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    question: 'After a major compressor motor burnout, which specific component MUST be installed to protect the replacement compressor?',
    options: [
      'A high-capacity liquid-line filter-drier with a sight glass.',
      'An oil separator in the discharge line.',
      'A suction-line filter-drier with acid-removing desiccant, installed upstream of the new compressor.',
      'A new crankcase heater with a larger watt rating.'
    ],
    correctIndex: 2,
    explanation: "After a burnout, the entire refrigerant circuit contains acid, carbon soot, and moisture. A suction-line drier with acid-neutralizing desiccant (activated alumina or a combination desiccant) is the only way to intercept these contaminants before they enter the new compressor's bearings and valves. A liquid-line drier alone will not protect the compressor because contaminants in the suction piping bypass it entirely."
  },
  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'A',
    topicLabel: 'Common Occupational Skills (MWA A)',
    question: 'Which safety procedure must be performed before working on a system with a variable frequency drive (VFD)?',
    options: [
      'Immediate discharge of capacitors using a grounded screwdriver.',
      'Waiting for the manufacturer-specified time for capacitors to discharge after lock-out, then verifying zero voltage with a calibrated multimeter.',
      'Shorting the DC bus terminals to the chassis with a jumper wire.',
      'Verifying zero voltage with a standard non-contact voltage tester only.'
    ],
    correctIndex: 1,
    explanation: 'VFDs contain large DC bus capacitors that store a lethal charge (up to 800V DC) even minutes after power is disconnected. You must wait the time specified on the unit (usually 5–10 minutes) and then verify with a calibrated, rated multimeter set to DC voltage — not a non-contact tester, which is only reliable for AC.'
  },
  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'B',
    topicLabel: 'Routine Trade Activities (MWA B)',
    question: "A system is being evacuated and the micron gauge levels off at 2,000 microns and holds steady after the pump is isolated. What does this most likely indicate?",
    options: [
      'A deep vacuum has been achieved and the system is ready to charge.',
      'There is a leak in the system.',
      'There is moisture still present in the system that is boiling off.',
      'The vacuum pump oil is saturated and the pump must be serviced.'
    ],
    correctIndex: 2,
    explanation: 'When a vacuum levels off above 500 microns and holds at a steady value after the pump is isolated (no continuous rise), it indicates moisture boiling off at that vacuum level. If the reading continuously rises (decays) after isolation, that indicates a leak. These require different responses: moisture requires continued evacuation or triple evacuation; a leak requires finding and repairing the joint before re-evacuating.'
  },
  // ============================================================

  // ============================================================
  // MWA A — Common Occupational Skills (~8 questions)
  // ============================================================

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'A',
    topicLabel: 'Common Occupational Skills (MWA A)',
    chapter: 2,
    difficulty: 'easy',
    question: 'Before beginning work on an HVAC/R system, a mechanic must complete a hazard assessment. Under the Ontario Occupational Health and Safety Act (OHSA), who is ultimately responsible for ensuring this is done?',
    options: [
      'The apprentice assigned to the job.',
      'The employer and the supervisor.',
      'The Authority Having Jurisdiction (AHJ).',
      'The building owner or property manager.'
    ],
    correctIndex: 1,
    explanation: 'Under OHSA, the employer has the primary duty to ensure a safe workplace, and supervisors are responsible for ensuring workers follow safe work practices. While workers also have duties, the employer and supervisor bear ultimate legal responsibility for hazard assessment on site.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'A',
    topicLabel: 'Common Occupational Skills (MWA A)',
    chapter: 2,
    difficulty: 'medium',
    question: 'A mechanic is about to perform maintenance on a rooftop air handler. Which of the following correctly describes the "one person, one lock" rule in a LOTO procedure?',
    options: [
      'Only one mechanic is allowed to work on the equipment at a time.',
      'Every worker performing maintenance must apply their own personal lock to every isolation point.',
      'One supervisor applies a single lock on behalf of the entire crew.',
      'A single lock is applied to the main electrical disconnect only.'
    ],
    correctIndex: 1,
    explanation: 'The "one person, one lock" rule means that each individual worker who is exposed to the hazard must apply their own personal lock to every energy isolation point. No single person can remove another\'s lock. This ensures the equipment cannot be re-energized while any worker is still in the danger zone.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'A',
    topicLabel: 'Common Occupational Skills (MWA A)',
    chapter: 2,
    difficulty: 'hard',
    question: 'A mechanic isolates power to a rooftop unit at the disconnect and applies a personal lock. Before opening the control panel, what additional energy source MUST be verified?',
    options: [
      'The gas line shutoff valve must be verified closed.',
      'The suction and liquid service valves must be front-seated.',
      'Any stored charge in capacitors (motor run, motor start, VFD bus) must be allowed to dissipate and verified at zero volts.',
      'The condensate drain must be plugged to prevent spills.'
    ],
    correctIndex: 2,
    explanation: 'Capacitors in motor start circuits, motor run circuits, and especially VFD DC bus sections store potentially lethal charge even after the main disconnect is opened. LOTO on HVAC equipment must include waiting for the manufacturer-specified discharge time and then confirming zero voltage with a calibrated meter before touching any internal component.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'A',
    topicLabel: 'Common Occupational Skills (MWA A)',
    chapter: 2,
    difficulty: 'easy',
    question: 'A mechanic is working in a mechanical room where ammonia (R-717) refrigerant is used. What type of respiratory protection is required if an ammonia leak is detected?',
    options: [
      'An N95 particulate mask.',
      'A half-face respirator with organic vapor cartridges.',
      'A supplied-air (SCBA or airline) respirator rated for ammonia.',
      'No respirator is needed if the room has natural ventilation.'
    ],
    correctIndex: 2,
    explanation: 'Ammonia is both toxic and has a very low IDLH (Immediately Dangerous to Life or Health) of 300 ppm. Standard half-face respirators with OV/P100 cartridges do not provide adequate protection at concentrations near a leak. A supplied-air respirator (SCBA or airline breathing apparatus) is required for entry into an area with a known ammonia leak.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'A',
    topicLabel: 'Common Occupational Skills (MWA A)',
    chapter: 2,
    difficulty: 'medium',
    question: 'A permit-required confined space is identified at a job site. Which THREE conditions would require a confined space entry permit?',
    options: [
      'The space is large enough to enter, has limited means of entry/exit, and contains a potential hazardous atmosphere.',
      'The space requires a ladder for access, is outdoors, and is used regularly by building staff.',
      'The space is a walk-in cooler with a standard door, even if the refrigeration system is operating.',
      'The space has restricted headroom but multiple doors and windows.'
    ],
    correctIndex: 0,
    explanation: 'A permit-required confined space meets all three criteria: (1) large enough to bodily enter and perform work, (2) limited means of entry or exit, and (3) is not designed for continuous occupancy AND contains or has the potential to contain a serious hazard (hazardous atmosphere, engulfment hazard, converging walls, or another serious safety hazard).'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'A',
    topicLabel: 'Common Occupational Skills (MWA A)',
    chapter: 3,
    difficulty: 'easy',
    question: 'A new generation of mildly flammable refrigerants (A2L classification) is increasingly being used in equipment. What is the BEST resource for a mechanic to get current, accurate information on safe service procedures for these refrigerants?',
    options: [
      'Advice from a colleague who recently worked with a similar system.',
      'Manufacturer-specific installation and service manuals, combined with ASHRAE Standard 15 and refrigerant safety data sheets.',
      'General HVAC/R textbooks printed before 2020.',
      'Online forums and trade blogs.'
    ],
    correctIndex: 1,
    explanation: 'Primary sources — manufacturer documentation, CSA/ASHRAE standards, and SDS sheets — are the only reliable basis for safe service on equipment with A2L refrigerants. These refrigerants have specific requirements for leak detection, recovery equipment ratings, and ignition source elimination that are not consistently covered in older textbooks or informal sources.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'A',
    topicLabel: 'Common Occupational Skills (MWA A)',
    chapter: 4,
    difficulty: 'medium',
    question: 'A journeyperson mechanic completes a service call and adds 1.2 kg of R-410A to a commercial rooftop unit. What documentation is legally required in most Canadian provinces?',
    options: [
      'No documentation is required for amounts under 2 kg.',
      'A refrigerant log recording the date, amount added, system identifier, and mechanic certification number.',
      'A full commissioning report must be filed with the manufacturer.',
      'A notification must be sent to Environment and Climate Change Canada within 24 hours.'
    ],
    correctIndex: 1,
    explanation: "Canada's Ozone-depleting Substances and Halocarbon Alternatives Regulations require that records be kept for all refrigerant purchases, additions, recoveries, and disposals. The refrigerant log must include the substance type, quantity, date, system identifier, and the certification number of the technician. These records must be kept for a minimum of 5 years and made available for inspection."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'A',
    topicLabel: 'Common Occupational Skills (MWA A)',
    chapter: 4,
    difficulty: 'medium',
    question: 'When supervising an apprentice performing a brazing task for the first time, which instructional approach is MOST effective?',
    options: [
      'Hand the apprentice the torch and let them learn by trial and error.',
      'Demonstrate the complete task, then observe the apprentice perform it, and provide specific corrective feedback immediately.',
      'Describe the process verbally and ask the apprentice to read the textbook chapter before attempting.',
      'Have the apprentice watch a video and then complete the task unsupervised.'
    ],
    correctIndex: 1,
    explanation: 'The "show-do-review" (or "I do, you do, we review") model is recognized as the most effective instructional method for trade skills. The journeyperson demonstrates the full task correctly, the apprentice replicates it under direct observation, and feedback is given immediately while the experience is fresh. This approach builds both competency and confidence safely.'
  },

  // ============================================================
  // MWA B — Routine Trade Activities (~16 questions)
  // ============================================================

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'B',
    topicLabel: 'Routine Trade Activities (MWA B)',
    chapter: 6,
    difficulty: 'easy',
    question: 'When brazing copper-to-copper refrigerant fittings, which filler metal does NOT require flux?',
    options: [
      '45% silver solder (Sil-Fos 45)',
      'Phosphor-copper (PhosCopper / BCuP-2)',
      'Brass filler rod',
      '15% silver solder'
    ],
    correctIndex: 1,
    explanation: 'Phosphor-copper (BCuP-2, ~94% copper / 6% phosphorus) is self-fluxing on copper-to-copper joints because the phosphorus acts as a deoxidizer. Flux is required when brazing copper to brass, copper to steel, or when using 45% silver alloys, as these do not contain a self-fluxing element.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'B',
    topicLabel: 'Routine Trade Activities (MWA B)',
    chapter: 6,
    difficulty: 'medium',
    question: 'When cutting copper refrigerant tubing with a tube cutter, why is it critical to ream the cut end before brazing?',
    options: [
      'To increase the surface area for a stronger brazed joint.',
      'To remove the internal burr that restricts flow and can break off into the system.',
      'To allow the fitting to slide on more easily.',
      'To create a flared end for a mechanical connection.'
    ],
    correctIndex: 1,
    explanation: 'A tube cutter creates a smooth, square cut but rolls a burr into the inside of the tube. This burr reduces the internal cross-sectional area (increasing pressure drop) and, more critically, can break free during brazing or operation and travel through the system to clog a TXV orifice or strainer. Reaming restores full internal diameter before every brazed joint.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'B',
    topicLabel: 'Routine Trade Activities (MWA B)',
    chapter: 6,
    difficulty: 'hard',
    question: 'A recovery cylinder bears a yellow shoulder band and is rated at 400 PSI working pressure. It currently contains some R-410A liquid. What is the maximum fill level permitted before returning the cylinder?',
    options: [
      '100% of the cylinder\'s water volume capacity.',
      '90% of the cylinder\'s water volume capacity.',
      '80% of the cylinder\'s water volume capacity.',
      '60% of the cylinder\'s water volume capacity.'
    ],
    correctIndex: 2,
    explanation: 'DOT/TC regulations limit recovery cylinders to 80% of their water volume capacity (by weight). This 20% vapor space is mandatory to allow for thermal expansion of the liquid refrigerant. Overfilling a recovery cylinder is a serious safety violation — a liquid-full cylinder subjected to heat has no vapor space to absorb expansion and will hydrostatically rupture.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'B',
    topicLabel: 'Routine Trade Activities (MWA B)',
    chapter: 6,
    difficulty: 'medium',
    question: 'During evacuation, a micron gauge reads 450 microns. The vacuum pump is then isolated from the system. After 10 minutes, the reading has risen to 2,800 microns and is still climbing steadily. What does this indicate?',
    options: [
      'The system has achieved an acceptable vacuum.',
      'There is residual moisture in the system boiling off.',
      'There is a leak in the system or the hose connections.',
      'The micron gauge battery is low and giving a false reading.'
    ],
    correctIndex: 2,
    explanation: "A continuously rising (decaying) micron reading after the pump is isolated indicates a leak. The pressure rises because outside air (or system gases from an incompletely sealed joint) is entering the evacuated space. This is distinguished from moisture: moisture causes the reading to level off and hold at a steady mid-range value (typically 1,000–3,000 microns) rather than continuously climbing."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'B',
    topicLabel: 'Routine Trade Activities (MWA B)',
    chapter: 6,
    difficulty: 'hard',
    question: 'A 4-leg synthetic web sling is used to lift a 1,200 kg condensing unit. The slings form a 45° angle from vertical. The sling\'s rated WLL in a straight vertical lift is 800 kg per leg. Is this lift within the WLL?',
    options: [
      'Yes — four legs at 800 kg each provides 3,200 kg capacity, well over 1,200 kg.',
      'No — at a 45° sling angle, the capacity factor is approximately 0.71, reducing each leg\'s effective WLL to ~568 kg; total effective capacity is ~2,272 kg which is adequate.',
      'No — at a 45° sling angle, the capacity factor is approximately 0.71; however, a 4-leg sling is only rated as a 2-leg lift in calculations; total = 2 × 568 = 1,136 kg, which is BELOW the 1,200 kg load.',
      'Yes — the angle has no effect on the WLL; the rating applies at any angle.'
    ],
    correctIndex: 2,
    explanation: 'This is a critical rigging concept. First, the sling angle reduces capacity: at 45° from vertical, the sling tension factor is 1/sin(45°) ≈ 1.41, so each leg\'s effective WLL is 800 ÷ 1.41 ≈ 568 kg. Second, for multi-leg slings, engineering standards (ASME B30.9) rate a 4-leg sling as equivalent to 2 legs because load distribution is never perfectly equal. Effective capacity = 2 × 568 = 1,136 kg, which is below the 1,200 kg load. This lift is NOT safe as configured.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'B',
    topicLabel: 'Routine Trade Activities (MWA B)',
    chapter: 7,
    difficulty: 'medium',
    question: 'Why is dry nitrogen flowed through copper refrigerant tubing at low pressure (1–2 PSI) during the brazing process?',
    options: [
      'To cool the pipe and prevent the braze joint from overheating.',
      'To prevent oxidation (scale/soot) on the internal pipe wall that would contaminate the system.',
      'To test for leaks at the joint immediately after brazing.',
      'To remove moisture from the pipe before sealing the system.'
    ],
    correctIndex: 1,
    explanation: "When copper is heated to brazing temperatures in the presence of oxygen, copper oxide (black soot/scale) forms on the internal pipe wall. This scale flakes off during operation and can clog TXV orifices, strainer screens, and compressor valve ports. A slight positive pressure of dry nitrogen (1–2 PSI) displaces the oxygen from inside the pipe during heating, preventing oxidation entirely. The nitrogen flow must be maintained throughout the heat-up and cool-down phases."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'B',
    topicLabel: 'Routine Trade Activities (MWA B)',
    chapter: 7,
    difficulty: 'hard',
    question: 'A CO2 (R-744) transcritical refrigeration system requires a high-side pressure test before commissioning. What is the MOST important equipment consideration compared to testing a conventional R-404A system?',
    options: [
      'CO2 requires a lower test pressure than R-404A.',
      'A standard nitrogen regulator is adequate for CO2 pressure testing.',
      'CO2 high-side test pressures can exceed 1,400 kPa (200 PSI); a high-pressure-rated regulator and fittings rated for these pressures are required.',
      'CO2 systems are tested with refrigerant vapor, not nitrogen.'
    ],
    correctIndex: 2,
    explanation: 'CO2 (R-744) operates at dramatically higher pressures than conventional refrigerants. High-side design pressures for transcritical CO2 systems typically range from 12–14 MPa (1,740–2,030 PSI). Test pressures are correspondingly high. Standard nitrogen regulators (max output ~1,000 kPa / 145 PSI) are completely inadequate. High-pressure-rated regulators, hoses, and fittings rated for CO2 service are mandatory, and all personnel must be behind a blast shield during pressurization.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'B',
    topicLabel: 'Routine Trade Activities (MWA B)',
    chapter: 7,
    difficulty: 'medium',
    question: 'A system originally charged with R-410A develops a large leak in the vapor phase. After repairing the leak, the remaining charge in the system should be:',
    options: [
      'Topped up with new R-410A vapor to reach the correct charge weight.',
      'Fully recovered, and the system recharged with a fresh, verified charge of R-410A liquid.',
      'Left in place, as R-410A is a near-azeotropic blend that does not fractionate.',
      'Supplemented with R-32 to compensate for the R-32 that leaked out preferentially.'
    ],
    correctIndex: 1,
    explanation: "R-410A is a zeotropic blend of R-32 and R-125. Although it has very low temperature glide (~0.1°C) and is often called near-azeotropic, it CAN fractionate during vapor-phase leaks. R-32 has a higher vapor pressure and leaks out preferentially, changing the composition of the remaining blend. The correct procedure after a vapor-phase leak on any blended refrigerant is to recover the remaining charge fully, weigh it, and recharge with a fresh, verified-composition cylinder of liquid R-410A."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'B',
    topicLabel: 'Routine Trade Activities (MWA B)',
    chapter: 7,
    difficulty: 'easy',
    question: 'Which lubricating oil is REQUIRED in a system using an HFC refrigerant such as R-134a?',
    options: [
      'Mineral oil (MO)',
      'Alkylbenzene oil (AB)',
      'Polyolester oil (POE)',
      'Polyalkylene glycol oil (PAG)'
    ],
    correctIndex: 2,
    explanation: 'HFC refrigerants are not miscible with mineral oil or alkylbenzene oil. These oils would separate from the refrigerant and accumulate on heat-transfer surfaces, dramatically reducing efficiency and potentially starving bearings of lubrication. Polyolester (POE) oil is miscible with HFCs and is the standard lubricant for all HFC and most HFO refrigerant systems. PAG oil is primarily limited to automotive AC applications.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'B',
    topicLabel: 'Routine Trade Activities (MWA B)',
    chapter: 7,
    difficulty: 'hard',
    question: 'A mechanic opens a sealed container of POE oil to add it to a new compressor. The oil is accidentally left open and exposed to the shop air for about 20 minutes. What should the mechanic do?',
    options: [
      'Use the oil — 20 minutes of exposure is acceptable per manufacturer guidelines.',
      'Discard the exposed oil and use oil from a freshly opened, sealed container.',
      'Add a desiccant packet to the oil container before use to absorb the moisture.',
      'Boil the oil at 100°C for 10 minutes to drive off the absorbed moisture.'
    ],
    correctIndex: 1,
    explanation: 'POE oil is extremely hygroscopic — it absorbs moisture from the air at a rate many times greater than mineral oil. Even brief exposure (minutes) to ambient air can introduce enough moisture to cause acid formation within the refrigerant system when the oil contacts HFC refrigerant at operating temperatures. The only safe action is to discard the exposed oil and use oil from a freshly punctured, sealed container. Opened containers must be resealed with dry nitrogen or used immediately.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'B',
    topicLabel: 'Routine Trade Activities (MWA B)',
    chapter: 7,
    difficulty: 'medium',
    question: 'When routing low-voltage control wiring (24V) near a variable frequency drive (VFD) output, which wiring practice is MOST important?',
    options: [
      'Using the largest available wire gauge to minimize resistance.',
      'Using shielded twisted-pair (STP) cable and routing it in a separate conduit away from VFD output wiring.',
      'Using standard NMD-90 wire is acceptable since the voltage is only 24V.',
      'Running all wiring in the same conduit to keep the installation neat.'
    ],
    correctIndex: 1,
    explanation: 'VFD output conductors carry high-frequency switching noise (PWM waveforms) that generates strong electromagnetic interference (EMI). This EMI is easily induced into adjacent low-voltage control wiring, causing sensor errors, control instability, and false fault codes. Shielded twisted-pair cable and physical separation in a dedicated conduit are both required to prevent EMI coupling. The shield must be grounded at one end only (typically the controller end) to prevent ground loops.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'B',
    topicLabel: 'Routine Trade Activities (MWA B)',
    chapter: 8,
    difficulty: 'medium',
    question: 'On a P&ID (Piping and Instrumentation Diagram) for a chilled water system, a circle with a "T" inside and the designation "TT-101" refers to what type of instrument?',
    options: [
      'A temperature transmitter that sends a 4–20 mA signal to the controller.',
      'A thermostat that directly opens or closes a circuit at a set temperature.',
      'A thermal expansion valve with a 101-inch capillary tube.',
      'A test and balancing port for temperature measurement.'
    ],
    correctIndex: 0,
    explanation: 'In standard ISA (Instrumentation, Systems, and Automation) P&ID notation, the first letter "T" indicates the measured variable is Temperature, the second letter "T" indicates the instrument type is a Transmitter (as opposed to "C" for controller, "I" for indicator, or "S" for switch). "TT-101" is a temperature transmitter that typically outputs a 4–20 mA analog signal proportional to temperature range.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'B',
    topicLabel: 'Routine Trade Activities (MWA B)',
    chapter: 8,
    difficulty: 'easy',
    question: 'A pressure-temperature (P/T) chart for R-410A shows a saturation pressure of 1,220 kPa at 30°C. A mechanic measures a suction pressure of 1,220 kPa and a suction line temperature of 38°C. What is the evaporator superheat?',
    options: [
      '0°C — the refrigerant is saturated.',
      '8°C',
      '30°C',
      '38°C'
    ],
    correctIndex: 1,
    explanation: 'Superheat = Actual suction line temperature − Saturation temperature at measured suction pressure. Saturation temperature at 1,220 kPa = 30°C (from the P/T chart). Suction line temperature = 38°C. Superheat = 38°C − 30°C = 8°C. This is a normal superheat reading for a TXV-controlled comfort cooling system (target: 8–12°C).'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'B',
    topicLabel: 'Routine Trade Activities (MWA B)',
    chapter: 8,
    difficulty: 'medium',
    question: 'A mechanic is preparing to cut through a concrete pad on a commercial property to run refrigerant piping. What MUST be done before any ground penetration?',
    options: [
      'Notify the building owner at least 5 business days in advance.',
      'Contact the underground utility locating service (Ontario One Call — 1-800-400-2255) and wait for locates to be marked.',
      'Visually inspect the area and proceed if no utilities are visible.',
      'Review the original building drawings and proceed if no utilities are shown.'
    ],
    correctIndex: 1,
    explanation: 'Ontario Regulation 22/04 (under the OHSA) and the Ontario Underground Infrastructure Notification System Act require contacting Ontario One Call (1-800-400-2255) at least 5 business days before any ground disturbance. Visual inspection and old drawings are both inadequate — utilities are frequently installed after original construction and may not be on record. Striking a buried gas line or high-voltage cable can be fatal and carries serious legal liability.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'B',
    topicLabel: 'Routine Trade Activities (MWA B)',
    chapter: 7,
    difficulty: 'hard',
    question: 'A triple evacuation is being performed on a newly piped refrigeration system. After the first evacuation reaches 1,500 microns, the system is broken with dry nitrogen. What is the PRIMARY purpose of the nitrogen break?',
    options: [
      'To pressure-test the system for leaks between evacuation passes.',
      'To dilute and carry away residual moisture vapour that boiled off during the first evacuation.',
      'To cool the system before the second evacuation begins.',
      'To verify the vacuum pump is working correctly.'
    ],
    correctIndex: 1,
    explanation: 'During the first evacuation, moisture in the system absorbs heat and changes phase, lowering the temperature of the tubing walls. Some moisture may not fully vaporize at this temperature/pressure combination. When nitrogen is introduced, it mixes with the residual moisture vapour and carries it to a higher concentration in the vapor phase. When the system is evacuated again, this moisture is much easier to remove. The process is repeated (typically three times) until the final evacuation reaches and holds below 500 microns.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'B',
    topicLabel: 'Routine Trade Activities (MWA B)',
    chapter: 6,
    difficulty: 'medium',
    question: 'What is the minimum recommended vacuum level a properly functioning two-stage vacuum pump should achieve before it is considered adequate for deep system evacuation?',
    options: [
      '25 inches of mercury (Hg)',
      '29 inches of mercury (Hg)',
      '500 microns (0.5 mmHg)',
      '5,000 microns (5 mmHg)'
    ],
    correctIndex: 2,
    explanation: 'The industry standard target for system evacuation is 500 microns (0.5 mmHg absolute), measured with a calibrated electronic micron gauge. Manifold gauges that read in inches of mercury are not suitable for measuring deep vacuum — 29.9 in. Hg represents only ~2,540 microns, which is far above the 500-micron target. A properly maintained two-stage vacuum pump should be capable of reaching below 100 microns in the pump itself when blank-flanged.'
  },

  // ============================================================
  // MWA C — Plans Installation (~13 questions)
  // ============================================================

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'C',
    topicLabel: 'Plans Installation (MWA C)',
    chapter: 10,
    difficulty: 'easy',
    question: 'CSA Standard B52 governs the installation of refrigeration systems in Canada. Which of the following is a primary requirement of B52 for equipment placed in a machinery room?',
    options: [
      'All equipment must be painted safety yellow.',
      'The room must have mechanical ventilation capable of removing leaked refrigerant to maintain concentrations below the occupational exposure limit.',
      'A minimum room temperature of 18°C must be maintained.',
      'The AHJ must be present during all commissioning activities.'
    ],
    correctIndex: 1,
    explanation: 'CSA B52 requires that machinery rooms housing refrigerant-containing equipment have mechanical ventilation systems that activate automatically on refrigerant detection. The ventilation must be sufficient to prevent refrigerant concentrations from exceeding the occupational exposure limits and to prevent hazardous accumulations. The specific requirements vary by refrigerant safety class (A1 vs. B2L vs. A2L).'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'C',
    topicLabel: 'Plans Installation (MWA C)',
    chapter: 10,
    difficulty: 'hard',
    question: 'When calculating the cooling load for a commercial space, which of the following represents a LATENT heat gain?',
    options: [
      'Solar radiation through a south-facing glass wall.',
      'Heat generated by 20 computers running at full load.',
      'Moisture added to the space by 50 occupants.',
      'Conduction through the roof from a hot day.'
    ],
    correctIndex: 2,
    explanation: 'Latent heat gain involves a change in moisture content (humidity) of the air, not a change in temperature. Occupant respiration and perspiration add water vapour to the space — this is latent heat that the air conditioning system must remove through condensation on the evaporator coil. Solar radiation, computer heat, and roof conduction all raise the air temperature without adding moisture — these are sensible heat gains.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'C',
    topicLabel: 'Plans Installation (MWA C)',
    chapter: 10,
    difficulty: 'hard',
    question: 'A refrigeration system\'s condenser is sized with a heat rejection capacity of 50 kW. The system\'s compressor is rated at 35 kW cooling capacity. Approximately what is the compressor\'s heat of compression (power input)?',
    options: [
      '5 kW',
      '15 kW',
      '35 kW',
      '50 kW'
    ],
    correctIndex: 1,
    explanation: 'The heat balance equation for a refrigeration system is: Heat Rejection (condenser) = Cooling Capacity (evaporator) + Heat of Compression (compressor power input). Therefore: Heat of Compression = 50 kW − 35 kW = 15 kW. This also correlates to a coefficient of performance (COP) of 35/15 ≈ 2.3, which is reasonable for a commercial refrigeration system. The condenser must always reject both the heat absorbed at the evaporator AND the heat added by the compressor.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'C',
    topicLabel: 'Plans Installation (MWA C)',
    chapter: 10,
    difficulty: 'medium',
    question: 'When sizing refrigerant piping, a suction line that is too LARGE in diameter will cause which of the following problems?',
    options: [
      'Excessive pressure drop, leading to high compression ratios.',
      'Gas velocity too low to return oil to the compressor, leading to oil starvation.',
      'Liquid refrigerant floodback to the compressor.',
      'High suction superheat due to heat gain from the pipe walls.'
    ],
    correctIndex: 1,
    explanation: 'Oil circulates throughout the refrigerant system mixed with refrigerant. In suction lines (especially vertical risers), the refrigerant gas must flow fast enough to carry oil droplets back to the compressor. A minimum velocity of approximately 150–450 m/min (500–1,500 fpm) is required for oil return in horizontal and vertical lines respectively. If the pipe is oversized, gas velocity falls below this threshold, oil accumulates in the suction line, and the compressor is eventually starved of lubrication, causing failure.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'C',
    topicLabel: 'Plans Installation (MWA C)',
    chapter: 11,
    difficulty: 'medium',
    question: 'On a construction project, a rooftop unit (RTU) is scheduled to be craned into place on Week 8. Which preceding task is on the CRITICAL PATH for this activity?',
    options: [
      'Installing the interior diffusers and grilles.',
      'Setting, flashing, and inspecting the roof curb.',
      'Completing the refrigerant piping rough-in inside the building.',
      'Programming the building automation system.'
    ],
    correctIndex: 1,
    explanation: "The roof curb must be set on the roof deck, properly flashed by the roofing contractor, and inspected before the RTU can be craned and placed. If the curb is not in place, the RTU cannot be set — there is no alternative sequence. This makes the curb installation a critical path activity for RTU placement. Interior diffusers, rough-in piping, and BAS programming can all proceed in parallel and don't directly block the crane activity."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'C',
    topicLabel: 'Plans Installation (MWA C)',
    chapter: 11,
    difficulty: 'easy',
    question: 'Before a large chiller is delivered to a job site, what electrical information must the mechanic confirm with the electrical contractor?',
    options: [
      'The colour of the equipment disconnect switch.',
      'The supply voltage, phase, frequency, MCA (Minimum Circuit Ampacity), and MOP (Maximum Overcurrent Protection) matching the equipment nameplate.',
      'Whether the electrical contractor has a journeyperson on site that day.',
      'The cost per kilowatt-hour charged by the local utility.'
    ],
    correctIndex: 1,
    explanation: 'Voltage, phase, and frequency must exactly match the equipment nameplate. The supply conductor must meet or exceed the MCA (Minimum Circuit Ampacity) specified on the nameplate, and the fuse or breaker size must not exceed the MOP (Maximum Overcurrent Protection). Confirming these parameters before equipment delivery prevents the costly scenario of receiving a 208V/3-phase chiller when only 600V/3-phase service is available at the disconnect.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'C',
    topicLabel: 'Plans Installation (MWA C)',
    chapter: 11,
    difficulty: 'medium',
    question: 'During a material take-off for a new refrigeration installation, which category is most commonly overlooked and causes project delays?',
    options: [
      'Major components (compressors, condensers, evaporators)',
      'Consumables such as nitrogen, silver solder, flux, and vacuum pump oil',
      'Refrigerant cylinders',
      'Electrical disconnects'
    ],
    correctIndex: 1,
    explanation: 'Major components are prominent in drawings and specifications and are rarely forgotten. Consumables — nitrogen gas, brazing alloys, flux, PTFE tape, acid-neutralizing flush, and vacuum pump oil — are small individual items that are easily overlooked in the MTO process but are needed for nearly every step of the installation. Running out of nitrogen mid-installation, for example, can halt brazing operations for a day while waiting for resupply.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'C',
    topicLabel: 'Plans Installation (MWA C)',
    chapter: 12,
    difficulty: 'hard',
    question: 'A commercial refrigeration rack system originally designed for R-22 is being retrofitted to R-448A (a low-GWP HFO/HFC blend). After recovering the R-22 and changing the oil to POE, what additional component change is MOST likely required?',
    options: [
      'Replacing all copper refrigerant piping with stainless steel.',
      'Replacing the TXV orifice or the entire TXV to match R-448A\'s pressure/flow characteristics.',
      'Installing a liquid receiver with a 50% larger capacity.',
      'Replacing all electrical wiring with high-temperature rated cable.'
    ],
    correctIndex: 1,
    explanation: "R-448A has different thermophysical properties from R-22, including different pressure-temperature relationships and liquid density. The TXV that was correctly sized for R-22's flow rate and pressure drop may be severely undersized or oversized for R-448A, resulting in poor control and either floodback or excessive superheat. At minimum, the orifice must be re-evaluated against the new refrigerant's capacity tables; in many cases, the entire valve body requires replacement."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'C',
    topicLabel: 'Plans Installation (MWA C)',
    chapter: 12,
    difficulty: 'medium',
    question: 'A supply fan motor running at full speed consumes 15 kW. A VFD is installed and the fan speed is reduced to 80% of its original speed. According to the Affinity Laws, what is the approximate new power consumption?',
    options: [
      '12 kW (80% of original)',
      '9.6 kW (64% of original)',
      '7.68 kW (51.2% of original)',
      '6 kW (40% of original)'
    ],
    correctIndex: 2,
    explanation: "The Affinity Laws state that fan power varies as the CUBE of the speed ratio. New Power = Original Power × (New Speed / Original Speed)³. New Power = 15 kW × (0.80)³ = 15 × 0.512 = 7.68 kW. This represents a 49% reduction in power consumption for only a 20% reduction in speed — which is why VFDs provide such significant energy savings on fan and pump applications. This is a high-frequency exam calculation."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'C',
    topicLabel: 'Plans Installation (MWA C)',
    chapter: 10,
    difficulty: 'medium',
    question: 'What is the minimum clearance requirement around refrigeration equipment that a mechanic must verify during layout planning?',
    options: [
      'A standard 600 mm (24 inches) on all sides for all equipment.',
      'The clearances specified by the equipment manufacturer in the installation manual, which override generic rules.',
      '1,000 mm (39 inches) on all sides to comply with CSA B52.',
      'No clearance is required if the equipment is accessible from the front only.'
    ],
    correctIndex: 1,
    explanation: "There is no single universal clearance requirement. Manufacturer installation manuals specify the exact minimum clearances required for proper airflow, safe operation, and service access — and these clearances vary widely between equipment types and brands. Manufacturer specifications are typically enforced as a condition of the equipment warranty and are referenced by the AHJ during inspection. CSA B52 defers to manufacturer requirements for equipment clearances."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'C',
    topicLabel: 'Plans Installation (MWA C)',
    chapter: 12,
    difficulty: 'medium',
    question: 'After completing a VFD upgrade on a chilled water pump system, what measurement should be taken to document energy savings for a government incentive program?',
    options: [
      'The noise level reduction in the mechanical room.',
      'A comparison of measured kWh consumption before and after the upgrade under similar operating conditions.',
      'The number of hours the pump runs per year.',
      'The inlet water temperature to the chiller.'
    ],
    correctIndex: 1,
    explanation: "Energy incentive programs (like Save on Energy in Ontario) require verification of energy savings per the IPMVP (International Performance Measurement and Verification Protocol). The standard method is to measure baseline kWh consumption before the retrofit, install the upgrade, and measure post-retrofit consumption under similar load conditions (same season, similar occupancy). The difference represents verified savings and is used to calculate the incentive payment."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'C',
    topicLabel: 'Plans Installation (MWA C)',
    chapter: 11,
    difficulty: 'easy',
    question: 'Which of the following permits is required before beginning refrigerant piping work on a new commercial building in Ontario?',
    options: [
      'A federal Transport Canada refrigerant handling certificate.',
      'A municipal mechanical permit (Building Permit for mechanical work).',
      'A Ministry of Labour construction notice.',
      'No permit is required if the system charge is under 10 kg.'
    ],
    correctIndex: 1,
    explanation: 'In Ontario, mechanical work on new buildings (including refrigerant piping) requires a municipal Building Permit that covers the mechanical system. The permit must be obtained before work begins, and the installation must pass a rough-in inspection and a final inspection by the local building department. The charge size does not exempt the contractor from permit requirements.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'C',
    topicLabel: 'Plans Installation (MWA C)',
    chapter: 10,
    difficulty: 'hard',
    question: 'A walk-in freezer operates in a grocery store. When calculating the refrigeration load, which factor contributes the MOST to the infiltration load?',
    options: [
      'The R-value of the wall insulation panels.',
      'The frequency and duration of door openings during store hours.',
      'The wattage of the LED lighting inside the cooler.',
      'The temperature of the compressor discharge gas.'
    ],
    correctIndex: 1,
    explanation: "Infiltration through open doorways is typically the single largest refrigeration load component in walk-in coolers and freezers in commercial applications. Every time a door opens, warm, humid store air rushes in. The energy required to cool this air and condense its moisture content is substantial. This is why walk-in freezers in high-traffic areas use air curtains, strip curtains, and automatic door closers — to minimize the infiltration load during the door-opening events that occur hundreds of times per day."
  },

  // ============================================================
  // MWA D — Performs Installation (~21 questions)
  // ============================================================

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 14,
    difficulty: 'easy',
    question: 'A split-system condensing unit is installed on a concrete pad. The mechanic discovers the pad is sloped 3° to one side. Why is this a concern?',
    options: [
      'It violates aesthetic installation standards.',
      'A sloped condensing unit may cause the compressor crankcase oil to pool away from the oil pickup screen, leading to inadequate lubrication.',
      'The airflow pattern through the condenser coil will be uneven, reducing efficiency by 50%.',
      'The refrigerant piping connections will be under mechanical stress.'
    ],
    correctIndex: 1,
    explanation: 'Compressors rely on an oil pickup screen submerged in the crankcase oil sump. If the unit is significantly out of level, the oil surface tilts and the pickup screen may be exposed, especially during startup. Even a brief period of dry running can cause irreversible bearing damage. Manufacturers typically specify a maximum allowable tilt of 1–3° from level. Shims or a new pad must be used to achieve level installation.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 14,
    difficulty: 'hard',
    question: 'On a refrigeration system with a compressor 10 metres below the evaporator, a suction line oil trap (P-trap) is installed at the base of the vertical riser. What is the function of a SECOND trap installed 6 metres up the riser?',
    options: [
      'To act as a moisture separator before the refrigerant reaches the compressor.',
      'To collect oil that has drained down from above during off-cycles and re-entrain it into the gas stream during the next on-cycle.',
      'To reduce the pressure drop across the suction riser.',
      'To prevent liquid refrigerant from reaching the compressor during startup.'
    ],
    correctIndex: 1,
    explanation: 'During off-cycles, oil that was previously carried up the riser drains back down by gravity to the trap at the bottom. Without intermediate traps on tall risers (>6–8 m), the bottom trap becomes overfilled with oil. At startup, this oil dump into the compressor can cause liquid slugging. Intermediate traps at regular intervals collect oil that drains down during off-cycles and re-entrain small amounts of oil into the gas stream during on-cycles, preventing oil buildup at the bottom trap.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 14,
    difficulty: 'medium',
    question: 'In what order should components be installed in the liquid line of a refrigeration system, reading from the condenser outlet toward the metering device?',
    options: [
      'Filter-Drier → Sight Glass → Solenoid Valve → TXV',
      'Receiver → Sight Glass → Filter-Drier → Solenoid Valve → TXV',
      'Sight Glass → Filter-Drier → Receiver → TXV',
      'Solenoid Valve → Filter-Drier → Sight Glass → TXV'
    ],
    correctIndex: 1,
    explanation: 'The correct liquid line sequence is: Condenser → Receiver → King/Outlet Valve → Filter-Drier → Sight Glass/Moisture Indicator → Solenoid Valve → TXV. The filter-drier must be upstream of the sight glass (so the sight glass shows you if the drier is restricting) and upstream of the TXV (to protect the orifice). The sight glass is positioned after the drier so it shows the condition of the refrigerant actually entering the metering device.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 14,
    difficulty: 'medium',
    question: 'A refrigerant suction line passes through an unconditioned space (attic) before entering the building. What installation step is MOST critical in this location?',
    options: [
      'The pipe must be painted silver to reflect sunlight.',
      'The pipe must be insulated with closed-cell insulation to prevent heat gain and suction superheat increase.',
      'The pipe diameter must be increased by one size in unconditioned spaces.',
      'A pressure relief valve must be installed at the highest point.'
    ],
    correctIndex: 1,
    explanation: 'Suction lines in unconditioned spaces (hot attics, exterior walls) are exposed to ambient temperatures much higher than the refrigerant saturation temperature. Without insulation, the refrigerant absorbs substantial heat, increasing suction superheat significantly. This raises the compressor suction temperature, increases discharge temperatures, reduces efficiency, and can cause compressor overheating. Closed-cell (non-vapour-permeable) insulation of adequate thickness is required to prevent both heat gain and surface condensation on the cold pipe.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 15,
    difficulty: 'medium',
    question: 'Where is the CORRECT location to install a duct-mounted supply air temperature sensor for a VAV air handling unit?',
    options: [
      'In the return air duct, 300 mm downstream from the return air grille.',
      'In the mixed air plenum, before the cooling coil.',
      'In the supply air duct, downstream of the cooling coil and heating coil, in a location with well-mixed, representative airflow.',
      'At the face of the nearest supply diffuser.'
    ],
    correctIndex: 2,
    explanation: "The supply air temperature sensor controls the cooling and heating coil valves to maintain the supply air setpoint. It must be located downstream of both coils in a duct section with fully mixed, representative airflow — not in thermal stratification zones near bends or duct transitions. Placement before the coils (mixed air) would measure outdoor/return air blend, not supply conditions. Placement at a diffuser is too far away and influenced by local conditions."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 15,
    difficulty: 'hard',
    question: 'A high-pressure safety cut-out switch is installed on a compressor discharge line. In terms of control wiring, how should this switch be wired relative to the compressor contactor?',
    options: [
      'In parallel with the compressor contactor coil — it energizes an alarm when pressure is high.',
      'In series in the control circuit, wired as a hardwired safety interlock that de-energizes the contactor coil when the pressure switch opens.',
      'Connected to the BAS analog input as a 4–20 mA signal for monitoring only.',
      'In series with the compressor power supply conductors at line voltage.'
    ],
    correctIndex: 1,
    explanation: 'Safety controls (high-pressure cut-out, low-pressure cut-out, oil pressure switch, freeze-stat) must be wired as hardwired series interlocks in the control circuit. When the safety trips (contact opens), it de-energizes the compressor contactor coil, which in turn opens the main power contacts to the compressor. Software-only limits in the BAS can be defeated by programming errors or controller failures. Hardwired interlocks function independently of the control software.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 15,
    difficulty: 'medium',
    question: 'When installing a BACnet MS/TP (RS-485) communication network, a 120-ohm end-of-line (EOL) termination resistor must be installed at:',
    options: [
      'Every device on the network.',
      'The BAS workstation only.',
      'Only at the two physical end devices of the daisy-chain network segment.',
      'Every third device in the network to prevent signal reflection.'
    ],
    correctIndex: 2,
    explanation: 'RS-485 networks (including BACnet MS/TP) require termination resistors equal to the cable\'s characteristic impedance (typically 120 ohms) at each end of the physical cable segment only — not at every device. Terminating at the two end points prevents signal reflections from bouncing back down the cable and causing data corruption. Installing resistors at additional points creates a parallel resistance that lowers the effective termination impedance and causes communication errors.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 16,
    difficulty: 'easy',
    question: 'A sheet metal duct installation requires sealing all joints and seams. Which sealing method is code-compliant for a sealed duct system per SMACNA standards?',
    options: [
      'Standard grey cloth duct tape.',
      'Mastic sealant or UL-181-rated foil tape.',
      'Fiberglass insulation wrapped tightly over the joint.',
      'Silicone caulk rated for interior use.'
    ],
    correctIndex: 1,
    explanation: "Standard grey cloth duct tape fails within 1–2 years from heat cycling and drying out, becoming completely ineffective. SMACNA standards and most building codes (including NECB) require duct sealing with water-based mastic sealant (brushed on and reinforced with mesh tape at transverse joints) or with UL-181 listed pressure-sensitive aluminum foil tape. These methods maintain their seal for the life of the ductwork."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 16,
    difficulty: 'medium',
    question: 'When installing flexible duct between a VAV box and a ceiling diffuser, what installation requirement is MOST important for maintaining design airflow?',
    options: [
      'The flexible duct must be as long as possible to absorb vibration.',
      'The flexible duct must be kept as short as practical, fully extended without compression, with no sharp bends.',
      'The flexible duct must be insulated with a minimum R-12 value.',
      'The flexible duct inner liner must be painted with duct sealant.'
    ],
    correctIndex: 1,
    explanation: "Flexible duct has corrugated inner walls that create significantly more friction resistance than smooth metal duct. When kinked, compressed, or installed with sharp bends, the resistance increases dramatically — studies show a single 90° kink can increase static pressure by 5–10 times the straight-run loss. The correct installation keeps flex duct as short as possible (< 1.5 m is best practice), fully extended and stretched, with gentle radius bends ≥ 1.5× the duct diameter."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 16,
    difficulty: 'hard',
    question: 'A fire damper is being installed in a 2-hour fire-rated wall assembly. What is a critical installation requirement per NFPA 80 and the Ontario Building Code?',
    options: [
      'The damper must be installed with the fusible link horizontal.',
      'The damper sleeve must be secured to the wall with the correct sleeve thickness and length, with a breakaway duct connection on each side and access for inspection and resetting.',
      'The damper must be installed with the blades parallel to airflow at all times.',
      'Fire dampers are not required if the supply air duct is insulated with fire-rated insulation.'
    ],
    correctIndex: 1,
    explanation: 'Fire damper installation is tightly prescribed: the damper sleeve must have the correct gauge and projection beyond the wall as specified by the manufacturer\'s UL listing. Breakaway duct connections (that release without transmitting force to the damper sleeve during wall expansion) are required on each side. An access door or panel must be provided for inspection of the fusible link and for manual resetting after actuation. The installation must exactly match the conditions of the UL listing for the fire-rated assembly.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 14,
    difficulty: 'medium',
    question: 'What is the purpose of installing seismic restraints on HVAC equipment in specified seismic zones?',
    options: [
      'To reduce vibration transmitted to the building structure during normal operation.',
      'To prevent the equipment from moving, tipping, or becoming a projectile hazard during a seismic event.',
      'To satisfy fire insurance requirements for all mechanical equipment.',
      'To meet the wind load requirements of the National Building Code.'
    ],
    correctIndex: 1,
    explanation: 'Seismic restraints are specifically designed to prevent equipment displacement, tipping, and detachment from their mounts during an earthquake. An unrestrained chiller or rooftop unit can shift off its pad, break refrigerant connections, and become a projectile hazard to occupants and emergency responders. In Canada, the NBC and OBC require seismic restraints on mechanical equipment in buildings located in seismic design categories above a defined threshold (based on ground motion values for the site).'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 16,
    difficulty: 'medium',
    question: 'A VAV box is installed in a ductwork system. What is the minimum straight duct requirement upstream of the VAV box flow sensor?',
    options: [
      'No straight duct is required.',
      'At least 3–5 duct diameters of straight, unobstructed duct upstream of the flow sensor inlet.',
      'At least 10 duct diameters of straight duct upstream.',
      'A flow straightener must always be installed, regardless of duct geometry.'
    ],
    correctIndex: 1,
    explanation: 'VAV box flow sensors (typically a multi-point averaging pitot tube or a flow cross) require a settled, undisturbed velocity profile to measure airflow accurately. Elbows, transitions, and branch takeoffs immediately upstream create turbulence that produces inaccurate flow readings, causing the VAV controls to deliver incorrect CFM to the zone. A minimum of 3–5 duct diameters of straight unobstructed duct upstream is required per most manufacturer installation manuals.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 14,
    difficulty: 'easy',
    question: 'A liquid line filter-drier is being replaced during a service call. In which orientation should the drier be installed for a horizontal liquid line?',
    options: [
      'Vertically, with the outlet at the top.',
      'Horizontally, with the refrigerant flow direction arrow pointing toward the TXV.',
      'At a 45° angle, with the outlet downward.',
      'Any orientation is acceptable for liquid line driers.'
    ],
    correctIndex: 1,
    explanation: "Liquid line driers are directional — they have an internal filter screen on the outlet side to catch any desiccant particles that might break loose. The flow direction arrow (always marked on the drier body) must point in the direction of refrigerant flow (toward the metering device). Installing a drier backward will cause the refrigerant to bypass the desiccant bed on the first pass and may push contaminants further into the system."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 15,
    difficulty: 'hard',
    question: 'During installation of a heat pump system, the reversing valve solenoid coil is found to be energized during the cooling mode. This means the solenoid is configured as:',
    options: [
      'A normally open (NO) valve that closes when energized.',
      'Energized in cooling, de-energized in heating — the valve shifts the refrigerant flow path when the solenoid is powered.',
      'Always energized to prevent the valve from sticking in one position.',
      'A normally closed (NC) valve that opens only during defrost.'
    ],
    correctIndex: 1,
    explanation: "Reversing valve solenoids can be configured either way depending on the manufacturer — some energize in heating mode, some in cooling mode. The key principle is that de-energized = the valve goes to its spring-return (default) position. Most manufacturers default to de-energized in heating mode, meaning if there's a control failure, the system defaults to heat (safer in cold climates). When a mechanic notes \"energized in cooling,\" they must understand that a wiring failure will cause the system to default to heating mode."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 14,
    difficulty: 'medium',
    question: 'A split-system air conditioner is installed on a rooftop. The refrigerant line set is 30 metres long — 15 metres longer than the factory-charged length. What action must be taken?',
    options: [
      'Nothing — the factory charge is sufficient for all installations.',
      'Recover the factory charge and recharge with the exact correct amount for the actual installation.',
      'Add refrigerant per the manufacturer\'s charge chart (typically listed in grams per metre of additional lineset).',
      'Increase the pipe diameter to compensate for the extra length.'
    ],
    correctIndex: 2,
    explanation: "Most mini-split and split-system manufacturers pre-charge their equipment for a standard line set length (typically 7.5–10 m). For each additional metre of line set beyond the standard length, additional refrigerant must be added per the manufacturer's published chart. For 15 extra metres, the additional charge might be (for example) 15 g/m × 15 m = 225 g added. The amount varies by refrigerant type and pipe diameter and must be taken from the specific product's documentation."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 16,
    difficulty: 'medium',
    question: 'When installing filters in a commercial AHU filter rack, what is the purpose of the MERV rating?',
    options: [
      'It indicates the maximum air velocity permitted through the filter.',
      'It indicates the filter\'s ability to capture particles of various sizes — higher MERV = finer filtration.',
      'It specifies the filter\'s fire resistance rating in minutes.',
      'It indicates the filter\'s maximum differential pressure before replacement.'
    ],
    correctIndex: 1,
    explanation: 'MERV (Minimum Efficiency Reporting Value) is an ASHRAE-defined scale from 1 to 16 (with HEPA filters extending beyond). Higher MERV values capture smaller particles: MERV 8 captures particles ≥ 3 μm, MERV 13 captures particles ≥ 0.3 μm (including most bacteria and virus-carrying aerosols). The trade-off is that higher MERV filters have greater resistance (higher initial static pressure) and require more frequent replacement and a fan capable of overcoming the added resistance.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 14,
    difficulty: 'hard',
    question: 'Why is a double suction riser used on refrigeration systems with wide capacity modulation (e.g., a system that can operate from 25% to 100% capacity)?',
    options: [
      'To increase total pipe cross-sectional area and reduce pressure drop at full capacity.',
      'To maintain adequate gas velocity for oil return at both minimum and maximum loads.',
      'To provide a redundant flow path in case one riser becomes blocked.',
      'To reduce the amount of refrigerant charge required in the suction piping.'
    ],
    correctIndex: 1,
    explanation: "A double suction riser solves the conflicting requirements of oil return at different load conditions. At minimum load (25%), refrigerant flow is low. If a single large riser were used, gas velocity would be too low to carry oil up. If a single small riser were used, pressure drop at full load would be excessive. The solution: a small riser (sized for 25–50% load) and a large riser (sized for full load) in parallel, with the large riser's inlet P-trap keeping it liquid-sealed at low loads. At low load, all flow is through the small pipe at adequate velocity. At high load, the P-trap purges and both pipes are active."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 15,
    difficulty: 'easy',
    question: 'When terminating control wiring in a terminal strip, which tool and technique ensures a reliable, vibration-resistant connection?',
    options: [
      'Stripping the wire and inserting it directly into the terminal without any preparation.',
      'Using wire nuts to join the control cable to the terminal strip wiring.',
      'Crimping a correctly sized ferrule onto the stripped conductor end before inserting it into the terminal.',
      'Soldering the conductor to the terminal lug.'
    ],
    correctIndex: 2,
    explanation: 'Ferrules (hollow metal crimps applied to the end of a stranded wire) prevent the individual strands from fraying and spreading over time. They provide a solid, reliable mechanical connection in terminal blocks, preventing loose strands from causing short circuits to adjacent terminals. Most industrial control panels and HVAC/R controller manufacturers specify or recommend ferrules on all stranded conductors. Soldering is inappropriate for terminal blocks (it creates a rigid joint prone to fatigue fracture under vibration).'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 14,
    difficulty: 'medium',
    question: 'When mounting a residential split-system indoor fan coil unit (air handler) in a ceiling mechanical space, which installation detail is MOST often overlooked and causes water damage?',
    options: [
      'The refrigerant line set insulation.',
      'The primary condensate drain piping and installation of a secondary drain pan with a separate drain to a visible location.',
      'The filter access panel orientation.',
      'The return air grille size.'
    ],
    correctIndex: 1,
    explanation: "Condensate drain overflow is one of the most common causes of water damage from HVAC equipment installed in ceilings. The primary drain pan and trap must be sized and pitched correctly for gravity drainage. A secondary drain pan (that catches overflow from the primary) must be installed under ceiling-mounted units, with its overflow drain piped to a conspicuous location (e.g., over a window) that would alert occupants to a blockage before a flood occurs. Many jurisdictions require this by code."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 16,
    difficulty: 'hard',
    question: 'Per SMACNA standards, what is the required insulation R-value for supply air ductwork located in an unconditioned attic space in a climate zone with significant heating and cooling loads (e.g., Southern Ontario)?',
    options: [
      'R-4 (RSI 0.7)',
      'R-6 (RSI 1.06)',
      'R-8 (RSI 1.41)',
      'R-12 (RSI 2.11)'
    ],
    correctIndex: 2,
    explanation: "ASHRAE 90.1 and the National Energy Code for Buildings (NECB) require a minimum insulation R-value of R-8 (RSI 1.4) for supply and return ductwork in unconditioned spaces (including attics) in climate zones similar to Southern Ontario. R-6 is the historical minimum and is still referenced in some older standards, but R-8 is the current code-minimum in most commercial applications. Some high-performance programs require R-12 or higher."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'D',
    topicLabel: 'Performs Installation (MWA D)',
    chapter: 14,
    difficulty: 'medium',
    question: 'An expansion tank is installed on a closed chilled water loop. What is its PRIMARY function?',
    options: [
      'To store extra chilled water when the system load is low.',
      'To absorb the volumetric expansion of water as it warms up, preventing pressure spikes from rupturing components.',
      'To provide a suction reservoir for the chilled water pump.',
      'To separate air bubbles from the chilled water stream.'
    ],
    correctIndex: 1,
    explanation: "Water expands approximately 0.023% per °C of temperature rise. In a closed loop, even modest temperature increases create significant pressure rise if there is no mechanism to absorb this volume change. The expansion tank (diaphragm or bladder type) contains a pre-charged nitrogen cushion that compresses as system water expands, keeping system pressure within the design range. Without an expansion tank, water temperature increases during off-cycles will cause the pressure relief valve to open repeatedly, wasting water and eventually damaging the valve."
  },

  // ============================================================
  // MWA E — Performs Commissioning (~17 questions)
  // ============================================================

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Performs Commissioning (MWA E)',
    chapter: 18,
    difficulty: 'easy',
    question: 'Why must a crankcase heater be energized for a minimum of 24 hours before the FIRST startup of a compressor in a cold environment?',
    options: [
      'To bring the compressor oil to operating viscosity before the first start.',
      'To drive refrigerant that has migrated into the crankcase oil during the off-period back into the system.',
      'To pre-heat the suction gas before it enters the compressor.',
      'To verify the electrical supply before running the compressor.'
    ],
    correctIndex: 1,
    explanation: 'During extended off-periods (especially in cold weather), refrigerant migrates from the condenser and high-side piping toward the coldest point — often the compressor crankcase oil sump. This refrigerant dissolves in the oil, thinning it significantly. When the compressor starts, the sudden pressure drop causes the refrigerant to violently boil out of the oil, creating a foam that cannot lubricate bearings. The crankcase heater drives this refrigerant out of the oil before startup, preventing liquid slugging and oil foaming.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Performs Commissioning (MWA E)',
    chapter: 18,
    difficulty: 'medium',
    question: 'Before starting a newly installed 3-phase scroll compressor, why is phase rotation critical?',
    options: [
      'Scroll compressors require specific phase rotation to maintain proper oil pressure.',
      'Scroll compressors are direction-sensitive; reverse rotation causes them to not pump refrigerant and can destroy the scroll set within minutes.',
      'Phase rotation only matters for centrifugal compressors — scroll compressors are not sensitive to rotation direction.',
      'Reverse rotation on a scroll compressor causes high discharge pressure and a tripped high-pressure cut-out.'
    ],
    correctIndex: 1,
    explanation: 'Scroll compressors have interlocking spiral scroll sets that are designed to pump in one rotational direction only. If the motor rotates in the wrong direction (due to incorrect phase sequencing), the scrolls orbit backward. This does not pump refrigerant (resulting in nearly equal suction and discharge pressures) and the scrolls wear against each other in the wrong direction, destroying the scroll set rapidly. Phase rotation is verified with a phase rotation meter before the first start, and corrected by swapping any two of the three power leads.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Performs Commissioning (MWA E)',
    chapter: 18,
    difficulty: 'hard',
    question: 'A split-system air conditioner with a TXV is being commissioned. The system has the correct refrigerant charge by weight. The evaporator superheat is measured at 18°C (target is 8–12°C). What is the MOST likely cause?',
    options: [
      'The system is overcharged.',
      'The TXV sensing bulb has lost its charge or is poorly clamped to the suction line.',
      'The condenser coil is dirty.',
      'There is moisture in the system.'
    ],
    correctIndex: 1,
    explanation: "The TXV sensing bulb measures the suction line temperature and controls the valve opening to maintain target superheat. If the bulb has lost its refrigerant charge (a dead bulb), it loses sensing ability and the valve defaults to nearly closed — starving the evaporator and causing very high superheat. A poorly clamped bulb reads ambient temperature instead of suction line temperature, causing similar symptoms. A dirty condenser would cause high discharge pressure and low superheat (flooding). An overcharge causes low superheat."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Performs Commissioning (MWA E)',
    chapter: 18,
    difficulty: 'medium',
    question: 'A zeotropic refrigerant blend (e.g., R-407C or R-454B) must always be charged as a LIQUID. What happens if it is charged as a VAPOR?',
    options: [
      'Nothing — vapor or liquid charging is acceptable for all refrigerants.',
      'The system will overheat due to superheated vapor entering the low side.',
      'Fractionation occurs — the lighter-boiling component leaves the cylinder first, leaving a different composition in the cylinder and delivering an off-spec blend to the system.',
      'The compressor will flood back with liquid on the first start.'
    ],
    correctIndex: 2,
    explanation: "Zeotropic blends are composed of refrigerants with different boiling points. When the cylinder is inverted and charged as liquid, the entire blend exits in the correct composition. If charged as vapor (upright cylinder), the component with the lowest boiling point (highest vapor pressure) boils off first and enters the system first, leaving a different blend ratio in the cylinder. The system ends up with an incorrect refrigerant composition that will not match the P/T chart, affecting all performance parameters."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Performs Commissioning (MWA E)',
    chapter: 18,
    difficulty: 'medium',
    question: 'During control system startup, I/O verification is performed. A supply air temperature sensor reads 28°C on the BAS screen when the actual measured temperature with a reference thermometer is 21°C. What is the FIRST diagnostic step?',
    options: [
      'Replace the sensor immediately.',
      'Verify the sensor type (thermistor NTC/PTC, RTD PT100/PT1000) matches what the controller input is programmed for, and check the sensor wiring for loose connections.',
      'Recalibrate the BAS software offset to read 7°C lower.',
      'Replace the controller input card.'
    ],
    correctIndex: 1,
    explanation: "A 7°C offset is a classic symptom of a sensor type mismatch. For example, a PT1000 RTD will give incorrect readings on a controller configured for a PT100, or a 10k thermistor will give incorrect readings on a controller expecting a 20k thermistor. Before replacing hardware, verify the sensor type matches the controller input configuration. Also check wiring resistance (a loose connection adds resistance that reads as higher temperature on an RTD). Software offset corrections should only be applied for calibration trim after root cause is confirmed."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Performs Commissioning (MWA E)',
    chapter: 19,
    difficulty: 'hard',
    question: 'An air-cooled condensing unit is running in 35°C ambient. The refrigerant is R-410A. Discharge pressure reads 3,100 kPa. From the R-410A P/T chart, the saturation temperature at 3,100 kPa is 45°C. The liquid line temperature is 38°C. What is the subcooling?',
    options: [
      '3°C',
      '7°C',
      '10°C',
      '45°C'
    ],
    correctIndex: 1,
    explanation: 'Subcooling = Saturation Temperature at discharge pressure − Measured liquid line temperature. Subcooling = 45°C − 38°C = 7°C. A subcooling of 7°C is within the typical acceptable range of 5–15°C for a TXV system. Low subcooling (< 5°C) indicates possible undercharge or a restriction upstream; high subcooling (> 20°C) may indicate overcharge or a malfunctioning head pressure control valve.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Performs Commissioning (MWA E)',
    chapter: 19,
    difficulty: 'medium',
    question: 'During commissioning of a 3-phase scroll compressor, the unit runs but suction and discharge pressures equalize within 2 minutes of startup. The compressor motor is cool to the touch. What should the mechanic do FIRST?',
    options: [
      'Add more refrigerant — the system is severely undercharged.',
      'Shut down immediately and check phase rotation with a phase rotation meter before restarting.',
      'Adjust the TXV superheat setting.',
      'Replace the compressor — internal valves have failed.'
    ],
    correctIndex: 1,
    explanation: 'Equalizing suction and discharge pressures on a scroll compressor that is running (motor sounds fine, no trip) is the classic symptom of reverse rotation. The motor is cool because it is not doing compression work. The scrolls orbit in the wrong direction, producing no pressure differential. This is confirmed and corrected by checking phase rotation with a meter and swapping two supply phase leads. Running a scroll in reverse for more than a few minutes causes internal damage, so immediate shutdown is warranted.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Performs Commissioning (MWA E)',
    chapter: 19,
    difficulty: 'medium',
    question: 'An air handling unit\'s cooling coil is designed to produce a 12°C temperature drop across the coil (entering air 26°C, leaving air 14°C). During commissioning, the measured leaving air temperature is 19°C. What is the MOST likely air-side cause?',
    options: [
      'The refrigerant charge is too low.',
      'The coil is frosted over.',
      'Total airflow through the unit is higher than the design CFM — the air is moving too fast across the coil for adequate heat transfer.',
      'The supply air fan is running backward.'
    ],
    correctIndex: 2,
    explanation: "If the fan is delivering more airflow than designed (e.g., due to incorrect sheave sizing or fan running on wrong speed tap), the air contact time with the coil surface is reduced. The air doesn't have enough time to cool to the design leaving air temperature, resulting in a higher LAT and a smaller temperature split. This is diagnosed by measuring the actual supply CFM with a flow hood or total pressure/velocity measurement and comparing to the design airflow."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Performs Commissioning (MWA E)',
    chapter: 19,
    difficulty: 'medium',
    question: 'After completing commissioning of a new chiller and air handling system, what must be provided to the building owner before the project is considered complete?',
    options: [
      'The contractor\'s invoice only.',
      'Completed start-up reports, as-built drawings, equipment manuals, warranty letters, and operator training.',
      'A refrigerant recovery certificate.',
      'A copy of the engineer\'s stamped drawings.'
    ],
    correctIndex: 1,
    explanation: 'A complete project handover package includes: manufacturer start-up reports (signed by the factory or authorized technician); as-built drawings (redlined to show field deviations); operation and maintenance manuals for all equipment; warranty documents and registration confirmations; test, adjust, and balance (TAB) reports; and documented operator/facility manager training. Missing any of these items can void equipment warranties and expose the contractor to liability if the equipment fails.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Performs Commissioning (MWA E)',
    chapter: 19,
    difficulty: 'hard',
    question: 'A VAV system is being commissioned and supply fan total static pressure is measured at 800 Pa, but the design calls for 650 Pa. All VAV boxes are fully open. What is the MOST likely cause?',
    options: [
      'The fan is undersized and needs to be replaced.',
      'Duct leakage is causing additional airflow that increases the system resistance.',
      'One or more duct sections are undersized, or a component (coil, filter, fire damper) has higher than designed pressure drop.',
      'The VFD frequency is set too high.'
    ],
    correctIndex: 2,
    explanation: "If all VAV boxes are fully open (minimum resistance), the total static pressure reading reflects only the resistance of the duct system, coils, filters, and terminal components. A higher-than-design static pressure reading with all zones open indicates an undersized duct section, a dirty or clogged coil/filter with higher resistance than expected, or a fire/smoke damper that is not fully open. The mechanic should measure static pressure at multiple points along the main duct to find where the excess pressure drop is occurring."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Performs Commissioning (MWA E)',
    chapter: 18,
    difficulty: 'medium',
    question: 'During commissioning of a heat pump system in heating mode, the discharge pressure is 2,800 kPa and the saturation temperature at 2,800 kPa (R-410A) is 43°C. The liquid line temperature is 35°C. The suction pressure is 690 kPa (saturation temperature: 5°C). The suction line temperature is 14°C. What is the superheat and subcooling?',
    options: [
      'Superheat = 9°C, Subcooling = 8°C',
      'Superheat = 5°C, Subcooling = 35°C',
      'Superheat = 14°C, Subcooling = 43°C',
      'Superheat = 43°C, Subcooling = 5°C'
    ],
    correctIndex: 0,
    explanation: 'In heating mode, the indoor coil acts as the condenser. Subcooling = Saturation temp at condensing pressure − Liquid line temperature = 43°C − 35°C = 8°C. Superheat = Suction line temperature − Saturation temp at suction pressure = 14°C − 5°C = 9°C. Both readings are within normal ranges, indicating a properly charged and functioning system in heating mode. This question tests whether the student can apply the calculations regardless of operating mode.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Performs Commissioning (MWA E)',
    chapter: 19,
    difficulty: 'hard',
    question: 'During air balancing of a multi-zone VAV system, one zone consistently delivers less airflow than the design CFM even when the VAV box damper is fully open. What is the MOST likely cause?',
    options: [
      'The thermostat in that zone is faulty.',
      'Static pressure available at the VAV box inlet is insufficient due to undersized branch ductwork or excessive frictional resistance upstream.',
      'The supply fan is running backward.',
      'The VAV box actuator is wired incorrectly.'
    ],
    correctIndex: 1,
    explanation: "A VAV box can only deliver its rated CFM if the inlet static pressure is at or above the minimum required (typically 25–75 Pa depending on the box model). If the ductwork feeding that branch is undersized, or if there are too many fittings (elbows, transitions) creating excessive friction loss, the available static pressure at the box inlet will be too low to achieve design CFM even with the damper fully open. The solution is to measure duct static pressure at the box inlet and compare to the box's minimum inlet pressure requirement."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Performs Commissioning (MWA E)',
    chapter: 18,
    difficulty: 'easy',
    question: 'Before the first startup of a new installation, a mechanic verifies that all refrigerant service valves are in the correct position. In which position should suction and discharge service valves be set during normal operation?',
    options: [
      'Front-seated (fully clockwise) to isolate the gauge ports.',
      'Mid-position to allow both gauge readings and system operation.',
      'Back-seated (fully counterclockwise) to open the system to full flow.',
      'A quarter-turn from front-seated to maximize metering.'
    ],
    correctIndex: 2,
    explanation: "Service valves on compressors and components have three positions. Back-seated (fully counterclockwise) is the normal operating position — it opens the main port to full refrigerant flow and isolates the gauge port (prevents refrigerant from venting through the gauge port to atmosphere). Front-seated (fully clockwise) isolates the component for service. Mid-position opens the gauge port for reading pressures. Running a system with a service valve front-seated will result in immediate high-pressure trip or compressor damage."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Performs Commissioning (MWA E)',
    chapter: 19,
    difficulty: 'medium',
    question: 'A refrigeration system\'s compression ratio is calculated at 14:1. Why is this a concern?',
    options: [
      'A compression ratio above 10:1 indicates the compressor is operating in an efficient range.',
      'High compression ratios increase compressor discharge temperature, increase power consumption, and accelerate wear on internal components.',
      'A compression ratio of 14:1 is normal for low-temperature refrigeration.',
      'Compression ratio is only relevant for ammonia systems.'
    ],
    correctIndex: 1,
    explanation: "Compression ratio = Absolute Discharge Pressure ÷ Absolute Suction Pressure. As compression ratio increases, the compressor must do more work to compress each kg of refrigerant, discharge temperatures rise (accelerating oil breakdown and damaging valve plates), volumetric efficiency drops (less refrigerant pumped per stroke), and mechanical wear increases. Ratios above 10:1 are generally considered the threshold for concern; above 12:1, many compressors overheat. For low-temperature applications, two-stage compression or a compressor rated for low-temperature operation is required."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Performs Commissioning (MWA E)',
    chapter: 19,
    difficulty: 'medium',
    question: 'After commissioning a new DDC control system, the supply air temperature oscillates ±4°C around the setpoint continuously. What type of control issue does this describe, and what is the primary correction?',
    options: [
      'A setpoint error — adjust the temperature setpoint by 4°C.',
      'PID loop instability (hunting) — typically corrected by reducing the proportional gain (or increasing the integral time) to make the control response less aggressive.',
      'A failed cooling coil valve that is stuck oscillating.',
      'Low refrigerant charge causing intermittent cooling output.'
    ],
    correctIndex: 1,
    explanation: 'Continuous oscillation around setpoint is classic PID control instability, commonly called "hunting." It is usually caused by a proportional gain that is too high, making the control loop over-react to small errors. The correction is to reduce the proportional gain (Kp) or increase the integral time (Ti), making the loop respond more slowly and smoothly. This is a commissioning and optimization activity — "tuning" the PID loop is part of the mechanic\'s responsibilities during the E-14.03 task.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Performs Commissioning (MWA E)',
    chapter: 19,
    difficulty: 'hard',
    question: 'During commissioning of a glycol secondary loop for a refrigeration system, the mechanic measures the glycol concentration with a refractometer and gets a reading corresponding to a freeze point of −15°C. The design calls for a −25°C freeze point. What action is required?',
    options: [
      'No action — a −15°C freeze point provides adequate protection for all applications.',
      'Add water to dilute the glycol and lower the freeze point.',
      'Drain some glycol solution and replace with pure propylene or ethylene glycol to increase concentration and lower the freeze point.',
      'Add a chemical freeze-point depressant additive to achieve −25°C.'
    ],
    correctIndex: 2,
    explanation: "The freeze point of a glycol/water mixture decreases (gets colder) as glycol concentration increases. At −15°C freeze point, the glycol concentration is too low — if the ambient or system temperature drops below −15°C, the fluid will freeze and rupture the piping. To lower the freeze point to −25°C, glycol concentration must be increased. This is done by removing some of the existing diluted solution and replacing it with undiluted glycol, then rechecking with the refractometer until the target freeze point is achieved."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'E',
    topicLabel: 'Performs Commissioning (MWA E)',
    chapter: 18,
    difficulty: 'medium',
    question: 'During control system commissioning, an I/O point labeled "CHW-V-01 (Chilled Water Valve)" is commanded to 100% open from the BAS. The chilled water flow through the coil does not increase. Which of the following is NOT a likely cause?',
    options: [
      'The valve actuator is not wired to the correct controller output.',
      'The valve actuator is a fail-closed type and requires a 2–10V signal; the controller is outputting 0–10V.',
      'The BAS point is mapped to the wrong controller address.',
      'The chilled water pump on/off command is wired in parallel with the valve command.'
    ],
    correctIndex: 3,
    explanation: "Options A, B, and C are all legitimate causes of a valve that does not respond to BAS commands. A wiring error, signal range mismatch (the actuator may require a 2–10V signal and won't open when the controller outputs 0V when at minimum), or an address mapping error are all common commissioning faults. Option D is incorrect because CHW pump control is a separate point — how the pump is wired has no effect on whether the valve actuator responds to its control signal."
  },

  // ============================================================
  // MWA F — Maintenance and Service (~25 questions)
  // ============================================================

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 21,
    difficulty: 'easy',
    question: 'During a routine PM inspection, a mechanic notices that the condenser coil on a rooftop unit is heavily fouled with cottonwood seeds and grease. What is the MOST direct impact of this fouling on system performance?',
    options: [
      'Increased suction pressure and low superheat.',
      'Increased condensing pressure (head pressure) and increased power consumption.',
      'Decreased suction pressure and high superheat.',
      'Increased suction pressure and decreased discharge pressure.'
    ],
    correctIndex: 1,
    explanation: "A fouled condenser coil restricts airflow and reduces the coil's ability to reject heat. The refrigerant cannot condense efficiently, so condensing pressure (head pressure) rises. Higher head pressure means the compressor must work harder to achieve the same compression ratio, increasing power consumption and reducing capacity. Left unaddressed, this eventually trips the high-pressure cut-out. This is the single most common cause of high-pressure faults on air-cooled equipment."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 21,
    difficulty: 'medium',
    question: 'When testing a run capacitor on a single-phase condenser fan motor during a maintenance inspection, a capacitor rated at 10 μF reads 8.2 μF on a capacitor tester. What should the mechanic do?',
    options: [
      'The capacitor is within tolerance — continue operation.',
      'Replace the capacitor, as it is reading more than 6% below its rated value.',
      'Recharge the capacitor with a capacitor charger.',
      'Add a second capacitor in parallel to bring the total up to 10 μF.'
    ],
    correctIndex: 1,
    explanation: 'Industry standard practice and most manufacturers specify that a run capacitor reading more than ±6% of its rated capacitance should be replaced. 10 μF × 6% = 0.6 μF; acceptable range = 9.4–10.6 μF. A reading of 8.2 μF is an 18% deviation — well outside tolerance. An underrated run capacitor causes the motor to draw higher current (stresses windings), run hotter, and have reduced starting torque, eventually leading to motor failure.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 21,
    difficulty: 'medium',
    question: 'A high-pressure safety cut-out on a commercial condenser is being tested during annual PM. The mechanic slowly blocks condenser airflow to raise discharge pressure. The cut-out trips at 3,800 kPa. The nameplate setting is 3,100 kPa. What does this indicate?',
    options: [
      'The safety is working correctly — it tripped before damaging pressure was reached.',
      'The safety cut-out has a drifted set point and is no longer providing adequate protection; it must be recalibrated or replaced.',
      'The system is operating normally; the nameplate is just a guideline.',
      'The cut-out is hypersensitive and should have its setpoint increased.'
    ],
    correctIndex: 1,
    explanation: "Safety controls must trip at or below their nameplate set point to protect the equipment. A safety that trips 700 kPa above its rated set point has drifted and is no longer providing the protection it was designed for. In the interim between the rated and actual trip points, the compressor, condenser, and piping are exposed to pressures that may exceed their design ratings. The safety must be replaced or recalibrated and the system tested again to confirm the correct trip point."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 21,
    difficulty: 'easy',
    question: 'Under Canada\'s Halocarbon Regulations, what is the annual refrigerant leak rate threshold that triggers enhanced leak inspection requirements for a system with a charge greater than 5 kg?',
    options: [
      '5% annual leak rate',
      '10% annual leak rate',
      '20% annual leak rate',
      '30% annual leak rate'
    ],
    correctIndex: 1,
    explanation: "Canada's Regulations Amending the Ozone-depleting Substances and Halocarbon Alternatives Regulations define a system with a charge > 5 kg that loses more than 10% of its total charge in a 12-month period as having an 'enhanced leak' that requires a comprehensive leak inspection, identification and repair of all leak sources, and additional documentation. This applies to commercial refrigeration, air conditioning, and heat pump equipment."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 22,
    difficulty: 'hard',
    question: 'An air-cooled condensing unit exhibits: HIGH suction pressure, HIGH discharge pressure, LOW superheat, and a FLOODED evaporator. What is the MOST likely diagnosis?',
    options: [
      'Restricted liquid line filter-drier.',
      'Overcharged refrigerant system.',
      'Bad compressor valves.',
      'Non-condensable gas in the system.'
    ],
    correctIndex: 1,
    explanation: "An overcharge increases the amount of liquid refrigerant in the system. The excess refrigerant floods the evaporator (reducing superheat), overfills the condenser (reducing surface area for heat rejection, raising discharge pressure), and backs up into the suction line (raising suction pressure). The combination of HIGH suction pressure + HIGH discharge pressure + LOW/zero superheat is the diagnostic signature of overcharge. Bad compressor valves would cause high suction + low discharge. Non-condensables cause high discharge only."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 22,
    difficulty: 'medium',
    question: 'A refrigeration system shows normal suction pressure, HIGH discharge pressure, and NORMAL superheat. The discharge temperature is very high. What is the MOST likely cause?',
    options: [
      'Undercharged refrigerant.',
      'Non-condensable gases (air, nitrogen) in the refrigerant circuit.',
      'Restricted TXV.',
      'Compressor running backward.'
    ],
    correctIndex: 1,
    explanation: "Non-condensable gases (air, nitrogen from an improper charging procedure) occupy space in the condenser that should be occupied by condensing refrigerant. They do not condense at system temperatures, so they accumulate in the top of the condenser and reduce effective condensing surface area. This causes discharge pressure to rise disproportionately — higher than what the P/T chart would predict for the ambient temperature. Normal suction pressure and superheat distinguish this from an overcharge (which would also raise suction pressure) or a dirty condenser."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 22,
    difficulty: 'hard',
    question: 'A system shows LOW suction pressure, LOW discharge pressure, HIGH superheat, and the suction line is frosted all the way back to the compressor. What does this indicate?',
    options: [
      'Overcharge of refrigerant.',
      'Completely restricted liquid line or filter-drier.',
      'Defective high-pressure cut-out.',
      'Non-condensables in the system.'
    ],
    correctIndex: 1,
    explanation: "A complete or severe restriction in the liquid line (typically a blocked filter-drier, kinked liquid line, or closed solenoid valve) starves the evaporator of liquid refrigerant. The small amount of refrigerant that gets past the restriction flashes to vapor rapidly and cannot absorb adequate heat. Suction pressure drops far below normal, the evaporator and suction line frost due to extreme drop in saturation temperature, discharge pressure drops (compressor is pumping vapor down to very low pressure), and superheat is very high. This symptom cluster distinguishes a liquid line restriction from a refrigerant undercharge (undercharge shows rising suction temp as the system hunts for refrigerant but won't typically cause suction-line frosting)."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 22,
    difficulty: 'medium',
    question: 'A single-phase compressor motor fails to start. The run capacitor tests good. What is the NEXT component to test?',
    options: [
      'The high-pressure cut-out switch.',
      'The start capacitor and potential relay (or start relay).',
      'The thermostat setpoint.',
      'The liquid line solenoid valve.'
    ],
    correctIndex: 1,
    explanation: 'Single-phase compressor motors typically use a start capacitor (for starting torque) switched by a potential relay (PTC relay or current relay) that disconnects the start capacitor once the motor reaches approximately 75% of its running speed. If the start capacitor has failed (common after the start winding is overloaded) or the potential relay has failed (stuck open or closed), the motor cannot generate enough starting torque to overcome the system pressure difference and will hum without starting. After confirming the run capacitor is good, start capacitor and relay testing is the logical next step.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 22,
    difficulty: 'hard',
    question: 'A megohmmeter (Megger) test at 500V DC on a compressor motor shows an insulation resistance of 0.8 MΩ between winding and ground. What does this indicate?',
    options: [
      'Excellent insulation — the motor is in perfect health.',
      'Insulation resistance is below the 1 MΩ minimum threshold, indicating compromised winding insulation and impending motor failure.',
      'The reading is normal for a motor that has been running for more than 10 years.',
      'The Megger battery is low — the test must be repeated before drawing any conclusions.'
    ],
    correctIndex: 1,
    explanation: 'Industry standard (IEEE 43) specifies a minimum insulation resistance of 1 MΩ for motors rated under 1 kV. A reading of 0.8 MΩ falls below this threshold, indicating that the winding insulation has been degraded by heat, moisture, or contamination. The motor is at risk of insulation breakdown, which would result in a ground fault. The recommended action is to plan for compressor replacement before a catastrophic failure occurs, rather than waiting for a complete breakdown burnout that contaminates the refrigerant system.'
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 22,
    difficulty: 'medium',
    question: 'A mechanic is troubleshooting a 3-phase condenser fan motor that trips on thermal overload after running for 15 minutes. The motor itself is cool. What is the MOST likely cause?',
    options: [
      'The motor windings are shorted to ground.',
      'The phase current imbalance exceeds 10% — one leg is significantly higher than the others due to a voltage imbalance or a winding issue.',
      'The overload relay is set too low for the motor\'s rated FLA.',
      'The fan blades are bent and causing vibration.'
    ],
    correctIndex: 1,
    explanation: "When a motor is cool but its thermal overload trips repeatedly, the overload is measuring excessive current on one or more legs rather than overall motor heat. A current imbalance of more than 2% (NEMA MG-1 standard) — caused by supply voltage imbalance or a developing winding problem — causes disproportionate current increase on the affected phase, which the single-element overload relay interprets as overcurrent. Measuring all three phase currents with a clamp meter will reveal the imbalance. Tripping on a cool motor is a classic clue that the issue is current imbalance, not heat."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 23,
    difficulty: 'medium',
    question: 'After recovering refrigerant from a system for compressor replacement, the recovered refrigerant weighs 30% less than the original charge. Before recharging with new refrigerant, what should the mechanic do?',
    options: [
      'Charge the system with fresh refrigerant — the missing 30% must have leaked out.',
      'Investigate the cause of the missing charge before recharging — a 30% loss indicates a significant leak that must be found and repaired first.',
      'Add refrigerant equivalent to 30% of the original charge without further investigation.',
      'The difference is normal due to refrigerant losses during recovery.'
    ],
    correctIndex: 1,
    explanation: "A 30% shortage is far more than normal recovery losses (which are typically less than 1–2% of the charge). This large discrepancy strongly indicates there is an active leak in the system — likely the same leak that caused the compressor to fail in the first place (liquid slugging from a flooded system, or low oil return from operating with a low charge). If the system is recharged without finding and repairing the leak, the new compressor will fail for the same reason. The leak must be found with a pressure test and electronic detector before recharging."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 23,
    difficulty: 'hard',
    question: 'After a motor burnout in a hermetic compressor, how many oil changes are typically required before the system oil is considered clean enough to protect the new compressor?',
    options: [
      'One oil change immediately after startup is sufficient.',
      'Two to four oil changes over 24–48 hour operational intervals, testing oil with an acid test kit after each change until the TAN reads below 0.05 mg KOH/g.',
      'Oil changes are not required — the new suction-line drier will absorb all contamination.',
      'Seven oil changes over one week of continuous operation.'
    ],
    correctIndex: 1,
    explanation: "After a burnout, acid and carbon are distributed throughout the entire refrigerant circuit (piping walls, heat exchangers, and oil). A single oil change cannot remove all contamination because acid-laden oil coats the pipe walls and is gradually washed back into the new oil by circulating refrigerant. The standard protocol is: install a suction-line acid drier, start the system, run for 24–48 hours, pull an oil sample, perform an acid test (TAN), change the oil and drier, and repeat. This cycle typically takes 2–4 iterations before the TAN drops below the acceptable threshold of 0.05 mg KOH/g."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 23,
    difficulty: 'medium',
    question: 'A TXV sensing bulb must be re-clamped to a 7/8" suction line after a component replacement. At which position on the pipe circumference should it be clamped?',
    options: [
      'At the top of the pipe (12 o\'clock), insulated from above.',
      'At the bottom of the pipe (6 o\'clock) to sit in any oil that flows past.',
      'At the 4 o\'clock or 8 o\'clock position, with the bulb fully insulated from ambient air.',
      'At the side of the pipe (3 or 9 o\'clock), without insulation.'
    ],
    correctIndex: 2,
    explanation: "On suction lines larger than 7/8\" OD, the TXV sensing bulb is clamped at the 4 o'clock or 8 o'clock position (lower side quadrant). This prevents oil that pools at the bottom from insulating the bulb from the refrigerant (bottom position) and prevents inaccurate reading from condensation or frost that forms on the top. On lines ≤ 7/8\", the bulb can be clamped on top. In all cases, the bulb must be thoroughly insulated from ambient air to prevent the ambient temperature from influencing the sensing signal."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 22,
    difficulty: 'medium',
    question: 'A heat pump in heating mode shows: normal suction pressure, high discharge pressure, low subcooling (3°C), and a bubbling sight glass. What is the MOST likely diagnosis?',
    options: [
      'The system is overcharged.',
      'The system is undercharged with refrigerant.',
      'The outdoor coil (evaporator in heating mode) is heavily frosted.',
      'The reversing valve is stuck in the cooling position.'
    ],
    correctIndex: 1,
    explanation: "In heating mode, the indoor coil is the condenser. Low subcooling (3°C) and flash in the sight glass indicate that the liquid line refrigerant is not sufficiently subcooled — the refrigerant is flashing to vapor before reaching the metering device. This is caused by insufficient refrigerant charge: there is not enough liquid in the condenser (indoor coil) to fill it and provide adequate subcooling. The normal suction pressure rules out an evaporator (outdoor coil) issue, and the high discharge pressure is a secondary effect of the reduced condensing area from the insufficient charge."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 22,
    difficulty: 'hard',
    question: 'A freezer system uses a hot gas defrost cycle. After a defrost cycle, the freezer temperature rises above the setpoint and takes an unusually long time to pull back down. What is the MOST likely cause related to the defrost system?',
    options: [
      'The defrost heater is drawing too much power.',
      'The defrost termination thermostat or timer is ending defrost correctly, but the drain pan heater has failed, causing ice to block the condensate drain and allowing meltwater to refreeze on the evaporator coil.',
      'The evaporator fan is running during defrost, blowing warm air into the freezer.',
      'The refrigerant charge is too low for the post-defrost pull-down.'
    ],
    correctIndex: 2,
    explanation: "In most commercial freezer defrost systems, the evaporator fans are interlocked to SHUT OFF during the defrost cycle. If the fan interlock fails and the fans run during defrost, they circulate the warm air generated by the defrost heaters throughout the freezer box, raising the product temperature significantly above what a normal defrost (where heat is localized to the coil area) would cause. The unusually slow pull-down is a consequence of the elevated box temperature caused by the fans distributing the defrost heat. Verifying fan motor contactor de-energization during defrost is the diagnostic check."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 21,
    difficulty: 'medium',
    question: 'During a routine PM on a belt-driven supply air fan, the mechanic checks belt tension using the deflection method. The specification calls for 13 mm of deflection at midspan under a 4 N (1 lb) force. The measured deflection is 25 mm. What should be done?',
    options: [
      'The belt tension is correct — 25 mm is within the typical range.',
      'The belt is too tight — loosen the motor mount to reduce tension.',
      'The belt is too loose — adjust the motor mount to increase tension and recheck.',
      'Replace the belt and sheaves immediately.'
    ],
    correctIndex: 2,
    explanation: "A belt that deflects 25 mm under a 4 N force when the spec calls for 13 mm is significantly under-tensioned (too loose). A loose belt slips on the sheaves under load, causing belt glazing (hardening of the belt surface), premature belt wear, reduced fan speed (lower than design CFM), increased heat generation, and possible belt squeal. The motor mount must be adjusted to move the motor away from the fan, increasing center-to-center distance and belt tension. After adjustment, recheck deflection and verify fan RPM with a tachometer."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 23,
    difficulty: 'easy',
    question: 'A service call reveals a failed hermetic compressor. After removing the compressor, the mechanic notices the oil in the crankcase is black, has a burnt smell, and an acid test shows a very high TAN. What type of compressor failure has occurred?',
    options: [
      'Mechanical failure due to liquid slugging.',
      'Motor burnout — the winding insulation broke down, causing an electrical arc and chemical contamination of the refrigerant circuit.',
      'Bearing seizure due to lack of lubrication.',
      'Valve failure due to liquid refrigerant entering the compression chamber.'
    ],
    correctIndex: 1,
    explanation: "Black, burned-smelling oil with high acid content (high TAN) is the definitive indicator of a motor burnout. When a compressor motor's winding insulation fails (from overheating, voltage spike, moisture contamination, or age), an electrical arc carbonizes the oil and insulation material, producing soot and hydrofluoric/hydrochloric acid in the refrigerant circuit. This combination destroys every component it contacts. Liquid slugging damages mechanical components (connecting rods, valve plates) but does not typically produce acid or black oil."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 22,
    difficulty: 'medium',
    question: 'A 3-phase compressor draws the following current on each leg: L1 = 18A, L2 = 18A, L3 = 24A. The nameplate FLA is 19A. What is the MOST likely cause of the imbalance?',
    options: [
      'The compressor is operating at above its rated capacity.',
      'There is a supply voltage imbalance on L3, or the L3 winding in the compressor motor is developing a partial short.',
      'The refrigerant charge is too high on the L3 cylinder.',
      'The crankcase heater is energized on the L3 circuit.'
    ],
    correctIndex: 1,
    explanation: "A significant current imbalance on one phase (L3 drawing 24A vs. 18A on the others — approximately 25% higher) indicates either a supply voltage problem on L3 (low voltage on one phase causes higher current draw on that phase) or a developing winding issue on the L3 motor winding (a partial turn-to-turn short reduces impedance on that winding, increasing current). L3 is also above the nameplate FLA of 19A, which will eventually trip the overload. Supply voltage should be measured first to rule out a utility issue before condemning the compressor."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 23,
    difficulty: 'medium',
    question: 'After a major repair involving opening the refrigerant circuit, which is the CORRECT sequence of steps before returning the system to service?',
    options: [
      'Charge with refrigerant → pressure test → evacuate → start the system.',
      'Pressure test with nitrogen → evacuate to 500 microns → charge with correct refrigerant → start and verify performance.',
      'Start the system → check pressures → add refrigerant if needed.',
      'Evacuate → pressure test → charge → start the system.'
    ],
    correctIndex: 1,
    explanation: "The correct post-repair sequence is always: (1) Pressure test with nitrogen (at least the maximum allowable working pressure for the lowest-rated component) to verify all new joints are leak-free before introducing moisture or refrigerant. (2) Evacuate to 500 microns or below, hold to confirm no leak and no moisture. (3) Charge with the correct refrigerant type and quantity. (4) Start the system and verify operating parameters (superheat, subcooling, pressures, currents). Charging before pressure testing introduces refrigerant into potentially leaking joints; starting without evacuation introduces air and moisture."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 21,
    difficulty: 'hard',
    question: 'During a PM inspection, a vibration analysis reading on a compressor shows high vibration amplitude at a frequency equal to twice the running speed (2X). What type of mechanical issue does this typically indicate?',
    options: [
      'Mass imbalance of a rotating component.',
      'Misalignment of the shaft coupling or bearing wear.',
      'Loose mounting bolts causing the entire unit to vibrate.',
      'Electrical supply frequency variation.'
    ],
    correctIndex: 1,
    explanation: "In vibration analysis, the frequency of the vibration signal points to the root cause. A dominant vibration at 1X (running speed) typically indicates mass imbalance. A dominant vibration at 2X (twice running speed) is a classic indicator of shaft misalignment or angular misalignment, which produces a force impulse twice per revolution in misaligned direct-drive or coupling systems. It can also indicate bearing defects in specific configurations. Loose bolts typically produce sub-synchronous or broadband vibration. This type of predictive maintenance analysis can identify problems weeks before failure."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 22,
    difficulty: 'medium',
    question: 'A DDC controller shows a "communication fault" for a specific field device on a BACnet MS/TP network. The other devices on the same network segment are communicating normally. What is the FIRST diagnostic step?',
    options: [
      'Replace the controller.',
      'Cycle power to the entire network segment.',
      'Verify the device address is unique (no duplicate), check wiring to that specific device, and verify the device is powered and showing normal status LEDs.',
      'Reinstall the BAS software.'
    ],
    correctIndex: 2,
    explanation: "When only one device on a segment is in communication fault (others are normal), the problem is isolated to that device or its wiring. The diagnostic approach is: verify the device is powered (LED indicator); verify the device address (duplicate addresses on RS-485 cause one or both devices to drop off); check the physical wiring between the controller and the device for loose terminations, broken conductors, or damaged cable. Network-wide issues (all devices in fault) would suggest a hub, head-end, or cable fault. Replacing the controller for an isolated device fault is premature and expensive."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 23,
    difficulty: 'hard',
    question: 'A liquid line filter-drier on a running system shows a temperature differential of 8°C between the inlet and outlet of the drier (inlet is warmer). What does this indicate?',
    options: [
      'The drier is working correctly — temperature drop indicates it is actively removing moisture.',
      'The drier is saturated or partially blocked, causing a pressure drop and flash cooling across the restriction — the drier must be replaced.',
      'This is a normal seasonal condition when ambient temperature is low.',
      'The sight glass downstream is indicating moisture — add a second drier in parallel.'
    ],
    correctIndex: 1,
    explanation: "A noticeable temperature drop across a liquid line filter-drier (inlet warmer than outlet) indicates a significant pressure drop across the drier. In a properly functioning drier, pressure drop should be minimal (< 35 kPa / 5 PSI). When the drier becomes saturated with moisture/acid or its filter screen becomes clogged with particulate, flow is restricted, causing a pressure drop. Liquid refrigerant flashing across this restriction absorbs latent heat, causing the observed temperature drop. A temperature differential of 8°C indicates the drier is due for replacement. This is often seen simultaneously with flash in the sight glass."
  },

  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 21,
    difficulty: 'medium',
    question: 'A walk-in cooler evaporator is running a defrost cycle. After defrost ends, the coil temperature sensor reads −8°C (defrost terminated early). One corner of the coil still has ice. What is the MOST likely cause?',
    options: [
      'The defrost timer is set for too long a defrost period.',
      'The defrost termination thermostat is located at the wrong position on the coil — it reached its setpoint before the entire coil was fully defrosted.',
      'The coil refrigerant charge is too low.',
      'The freezer door was opened during the defrost cycle.'
    ],
    correctIndex: 1,
    explanation: "Defrost termination thermostats end the defrost cycle when they sense the coil has reached a set temperature (typically 5–15°C), indicating the frost has melted. If the thermostat is positioned in a location that defrosts first (close to a heater) while the remote end of the coil (farthest from heater) still has ice, the thermostat will end defrost prematurely. The solution is to relocate the termination thermostat to the last area of the coil to defrost — typically the coldest corner, farthest from the defrost heater inlet."
  },
  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 22,
    difficulty: 'medium',
    question: 'A mechanic arrives at a commercial building to find the air-cooled chiller locked out on a high-pressure fault. The ambient temperature is 32°C. After resetting the fault and allowing the system to run for 5 minutes, the fault returns. Discharge pressure is reading 3,600 kPa (saturation: 55°C for R-410A). What should the mechanic check FIRST?',
    options: [
      'Refrigerant charge level — add refrigerant until the discharge pressure normalizes.',
      'Condenser coil cleanliness and condenser fan operation — both fans may not be running.',
      'Compressor valve condition using a compression ratio test.',
      'Liquid line filter-drier pressure drop.'
    ],
    correctIndex: 1,
    explanation: "High discharge pressure in warm weather is almost always a heat rejection problem. The saturation temperature at discharge (55°C) is 23°C above the 32°C ambient — the normal rule of thumb for air-cooled condensers is a condensing temperature 10–15°C above ambient. A 23°C split indicates the condenser is not rejecting heat efficiently. Before anything else, the mechanic should verify all condenser fans are running (a failed condenser fan motor is the most common single cause of high-pressure trips), check the coil for fouling or blockage, and verify there is no recirculation of hot discharge air back into the condenser inlet."
  },
  {
    tradeSlug: 'refrigeration-air-conditioning-mechanic',
    topicId: 'F',
    topicLabel: 'Performs Maintenance and Service (MWA F)',
    chapter: 23,
    difficulty: 'medium',
    question: 'A service report is being written after a complex repair involving compressor replacement and system cleanup on a commercial refrigeration rack. Which information is MOST critical to include for warranty and liability purposes?',
    options: [
      'The weather conditions at the time of the service call.',
      'The root cause of failure, all parts replaced (with model and serial numbers), final operating parameters, refrigerant quantities added or recovered, and recommendations for preventing recurrence.',
      'The customer\'s credit card payment confirmation.',
      'The time the mechanic arrived and departed the site.'
    ],
    correctIndex: 1,
    explanation: "A technically complete service report serves as the legal record of the repair. The root cause analysis protects the contractor from liability if the same issue recurs (did the previous mechanic miss something?). Part serial numbers are required for warranty claim submission. Final operating parameters (superheat, subcooling, pressures, currents) prove the system was left in correct working condition. Refrigerant quantities are required by law. Recommendations provide evidence of due diligence. Arrival/departure times are important for billing but are not the most critical for technical and legal purposes."
  }
];
