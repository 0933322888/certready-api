/**
 * Practice questions for hairstylist.
 * Edit this file to add or change questions; run seedPracticeQuestions.js to seed the DB.
 */

export default [
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Under OHSA, which of the following is a worker's right?",
    options: [
      "The right to refuse unsafe work without penalty",
      "The right to choose their own PPE brand",
      "The right to modify chemical dilution ratios",
      "The right to skip WHMIS training if experienced"
    ],
    correctIndex: 0,
    explanation: "OHSA gives workers three key rights: to know, to participate, and to refuse. The right to refuse unsafe work without reprisal is explicitly protected by law.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "A Safety Data Sheet (SDS) for a hydrogen peroxide developer would list it under which WHMIS hazard class?",
    options: [
      "Flammable liquid",
      "Oxidizing agent",
      "Compressed gas",
      "Carcinogen"
    ],
    correctIndex: 1,
    explanation: "Hydrogen peroxide releases oxygen and is classified as an oxidizing agent under WHMIS. Oxidizers can intensify combustion and are common in salons as hair colour developers.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which of the following best describes professional ethics in hairstyling?",
    options: [
      "Rules set only by the employer that can change at any time",
      "Moral standards guiding professional behavior to protect clients and colleagues",
      "Technical cutting and colouring techniques",
      "The minimum wage requirements under employment law"
    ],
    correctIndex: 1,
    explanation: "Professional ethics encompasses courtesy, competency, non-discrimination, confidentiality, and honesty. These are moral principles — not just employer policies or technical skills.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "What is the correct term for the document that provides detailed 16-section safety information about a chemical product?",
    options: [
      "Manufacturer's instruction booklet",
      "Safety Data Sheet (SDS)",
      "Hazardous Product Label",
      "OHSA Regulation Sheet"
    ],
    correctIndex: 1,
    explanation: "Formerly called MSDS, the SDS provides 16 standardized sections of safety information as required under WHMIS 2015 / GHS.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "An employer's responsibility under OHSA includes:",
    options: [
      "Purchasing all personal grooming products for employees",
      "Providing a safe workplace and necessary worker training",
      "Deciding which clients hairstylists may serve",
      "Setting provincial pricing standards for services"
    ],
    correctIndex: 1,
    explanation: "Employers must provide safety information, training, supervision, and a safe physical environment under OHSA.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Before performing a chemical service, a client must provide:",
    options: [
      "Proof of identity",
      "Informed consent after being told about the procedure, products, and risks",
      "A written contract",
      "Their complete medical history"
    ],
    correctIndex: 1,
    explanation: "Informed consent means the client voluntarily agrees after being fully informed. This is an ethical and legal requirement before any chemical or potentially risky service.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "What signal word on a WHMIS label indicates a MORE severe hazard?",
    options: [
      "Caution",
      "Warning",
      "Danger",
      "Notice"
    ],
    correctIndex: 2,
    explanation: "Under WHMIS 2015 (GHS), 'DANGER' is used for more severe hazards and 'WARNING' for less severe hazards. There are only two signal words.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "A hairstylist notices a client has a scalp rash that may be a fungal infection. The appropriate action is to:",
    options: [
      "Apply a medicated shampoo and proceed with the service",
      "Refer the client to a physician and decline the service until cleared",
      "Complete the service carefully to avoid the affected area",
      "Ask the client if they have a diagnosis"
    ],
    correctIndex: 1,
    explanation: "Performing a service on a potentially contagious or medically compromised scalp violates scope of practice, could spread infection, and may harm the client.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "What is the HIGHEST level of decontamination?",
    options: [
      "Sanitation",
      "Disinfection",
      "Sterilization",
      "Fumigation"
    ],
    correctIndex: 2,
    explanation: "Sterilization destroys ALL microorganisms including resistant bacterial spores. It is the highest level. Autoclaves (pressurized steam) achieve sterilization. Disinfection kills most pathogens but not all spores.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which bacteria form thick, protective coatings to survive unfavorable conditions?",
    options: [
      "Cocci in active stage",
      "Bacilli in active stage",
      "Spore-forming bacteria in inactive stage",
      "Spirilla at all stages"
    ],
    correctIndex: 2,
    explanation: "Bacterial endospores are formed in the inactive stage. They are highly resistant to most disinfectants and heat. Only sterilization can destroy them.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Blood has contaminated a hairstylist's cape. The correct disposal method is:",
    options: [
      "Place it in the regular trash",
      "Launder it with other capes at high heat",
      "Double-bag in a biohazard bag and follow local regulations",
      "Soak in quaternary ammonium solution for 24 hours"
    ],
    correctIndex: 2,
    explanation: "Items contaminated with blood must be handled as biohazardous waste. Double-bagging and proper regulated disposal protects staff and waste handlers from blood-borne pathogens.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which disinfectant should NOT be used to immerse metal implements because it corrodes metal?",
    options: [
      "Quaternary ammonium compounds",
      "Phenolics",
      "Bleach (sodium hypochlorite)",
      "70% isopropyl alcohol"
    ],
    correctIndex: 2,
    explanation: "Bleach (sodium hypochlorite) is highly corrosive to metal implements and will cause pitting, dulling, and rusting with prolonged exposure.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "The FIRST step in disinfecting a pair of scissors between clients is:",
    options: [
      "Immerse in disinfectant solution for the required contact time",
      "Wipe with an alcohol wipe",
      "Remove all visible debris with soap and water (pre-clean)",
      "Rinse with hot water"
    ],
    correctIndex: 2,
    explanation: "Pre-cleaning to remove all visible organic matter (hair, debris) MUST happen before disinfection. Disinfectants cannot penetrate through organic matter and will be ineffective if this step is skipped.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "A hairstylist discovers a client has pediculosis capitis (head lice). The correct action is:",
    options: [
      "Apply a medicated shampoo and complete the service",
      "Refuse the service and refer the client to a physician",
      "Drape extra towels and complete the haircut only",
      "Use disposable gloves and proceed with the service"
    ],
    correctIndex: 1,
    explanation: "Head lice are parasites that spread easily in a salon. The service must be refused, the client referred for treatment, and all implements and linens must be thoroughly cleaned and disinfected.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "The correct response when a client gets hair dye in their eye is:",
    options: [
      "Apply a neutralizing shampoo to the eye",
      "Flush the eye with water for 15 or more minutes",
      "Place a cool cloth over the closed eye",
      "Rinse with a 1:10 bleach solution"
    ],
    correctIndex: 1,
    explanation: "Chemical exposure to eyes requires immediate, prolonged flushing with clean water for a minimum of 15 minutes. Medical attention should follow.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which muscle disorder is common among hairstylists due to repetitive gripping and wrist movement?",
    options: [
      "Plantar fasciitis",
      "Lumbar disc herniation",
      "Carpal tunnel syndrome",
      "Rotator cuff tear"
    ],
    correctIndex: 2,
    explanation: "Carpal tunnel syndrome results from repetitive hand/wrist motions and sustained gripping — both very common in hairstyling. Ergonomic shears, neutral wrist position, and stretch breaks help prevent it.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which of the following is an example of pre-booking?",
    options: [
      "Calling a client a week after their appointment",
      "Encouraging a client to book their next appointment before leaving",
      "Accepting walk-in clients",
      "Booking multiple clients for the same time slot"
    ],
    correctIndex: 1,
    explanation: "Pre-booking — scheduling the next appointment at the end of the current visit — is the single most effective client retention strategy and provides predictable income for the stylist.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "A hairstylist rents a chair from the salon owner, keeps all earnings, and pays for their own supplies. This model is called:",
    options: [
      "Commission-based employment",
      "Booth rental",
      "Salary employment",
      "Franchise ownership"
    ],
    correctIndex: 1,
    explanation: "Booth rental means the stylist pays rent to the salon owner and operates as a self-employed independent contractor, keeping all revenue and covering all personal business expenses.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Under the Privacy Act (PIPEDA), client records should be:",
    options: [
      "Posted in the salon for transparency",
      "Kept confidential and accessible only to authorized staff",
      "Shared freely among all salon stylists",
      "Destroyed after each visit to protect client privacy"
    ],
    correctIndex: 1,
    explanation: "PIPEDA requires that personal information be collected for a stated purpose, kept accurate, and protected from unauthorized access. Client records must be confidential.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which legislation governs minimum wage, overtime, and vacation pay for salon employees in Ontario?",
    options: [
      "Occupational Health and Safety Act (OHSA)",
      "Ontario College of Trades and Apprenticeship Act",
      "Employment Standards Act (ESA)",
      "Human Rights Code"
    ],
    correctIndex: 2,
    explanation: "The Employment Standards Act (ESA) sets minimum employment standards in Ontario including minimum wage, maximum hours, overtime pay, vacation, and public holidays.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "During a client consultation, the BEST type of question to gather detailed information is:",
    options: [
      "Closed-ended (yes/no)",
      "Leading questions",
      "Open-ended questions",
      "Rhetorical questions"
    ],
    correctIndex: 2,
    explanation: "Open-ended questions like 'Tell me about your current routine' encourage clients to describe their needs in detail, giving the stylist the information needed to plan the service.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "A client complains that their colour result was not what they expected. The FIRST step is to:",
    options: [
      "Offer a full refund immediately",
      "Ask the client to come back and see the manager",
      "Listen fully to the concern without interrupting, then acknowledge their feelings",
      "Explain why the result is correct"
    ],
    correctIndex: 2,
    explanation: "The first step in complaint resolution is always to listen fully and acknowledge the client's feelings without becoming defensive. This de-escalates the situation and demonstrates genuine care.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "A hairstylist sets a goal: 'Add 10 new regular clients within 6 months by attending 2 networking events per month.' This is an example of:",
    options: [
      "A vague aspiration",
      "A SMART goal",
      "A long-term vision statement",
      "A mission statement"
    ],
    correctIndex: 1,
    explanation: "This goal is Specific (10 new clients), Measurable (trackable), Achievable (networking events), Relevant (career growth), and Time-bound (6 months).",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which of the following BEST represents comprehensive ongoing professional development for a hairstylist?",
    options: [
      "Relying only on techniques learned during apprenticeship",
      "Attending trade shows, manufacturer training, and following industry publications",
      "Only practicing techniques requested by existing clients",
      "Watching one tutorial video per year"
    ],
    correctIndex: 1,
    explanation: "Professional development requires multiple channels: hands-on training (shows, workshops), product knowledge (manufacturer education), and staying current (publications, social media).",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which organization publishes the National Occupational Analysis (NOA) for hairstylists?",
    options: [
      "Skilled Trades Ontario",
      "Ontario College of Trades",
      "Canadian Council of Directors of Apprenticeship (CCDA)",
      "Ontario Ministry of Education"
    ],
    correctIndex: 2,
    explanation: "The NOA is published by the CCDA and defines the skills and knowledge of a trade at the national level. It forms the basis for the Red Seal Interprovincial Standards Program.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which of the following is an example of a SHORT-TERM career goal for a newly certified hairstylist?",
    options: [
      "Opening their own salon",
      "Teaching at a cosmetology college",
      "Building clientele to 30 regular clients within one year",
      "Becoming a national brand educator"
    ],
    correctIndex: 2,
    explanation: "Building a regular clientele is a realistic, measurable short-term goal achievable within the first year of practice. The other options are long-term goals requiring years of experience.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "Which layer of the hair shaft is the site of ALL permanent chemical changes including colour, perms, and relaxers?",
    options: [
      "Cuticle",
      "Cortex",
      "Medulla",
      "Dermal papilla"
    ],
    correctIndex: 1,
    explanation: "The cortex is the middle layer of the hair shaft. It contains keratin protein fibers, melanin, and all the chemical bonds (disulfide, hydrogen, ionic) that are modified by chemical services.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "A client's hair stretches when wet but does NOT spring back to its original length. This indicates:",
    options: [
      "Low porosity",
      "High elasticity",
      "Poor elasticity — damaged cortex",
      "Normal porosity"
    ],
    correctIndex: 2,
    explanation: "Good elasticity means hair stretches approximately 50% when wet and returns to original length. Hair that stays stretched has a damaged cortex with over-softened or broken disulfide bonds — it should not receive additional chemical services.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "Which phase of the hair growth cycle is active, involves cell division, and accounts for approximately 85% of scalp hairs at any time?",
    options: [
      "Telogen",
      "Catagen",
      "Anagen",
      "Exogen"
    ],
    correctIndex: 2,
    explanation: "The anagen (growth) phase is active — mitosis occurs in the hair bulb and hair grows ~1–1.5 cm per month. It lasts 2–7 years. 85–90% of scalp hairs are in anagen at any given time.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "Before a chemical colour service, which test is performed 24–48 hours in advance to check for allergic reaction?",
    options: [
      "Strand test",
      "Porosity test",
      "Patch (predisposition) test",
      "Elasticity test"
    ],
    correctIndex: 2,
    explanation: "The patch test detects potential allergic reactions to PPD (para-phenylenediamine) and other chemicals in oxidative colour. A positive reaction (redness, swelling, itching) is a contraindication.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "The parietal ridge is described as:",
    options: [
      "The lowest point of the occipital bone",
      "The widest area of the head, where it begins to curve inward above the ears",
      "The hairline at the nape of the neck",
      "The very top/peak of the crown area"
    ],
    correctIndex: 1,
    explanation: "The parietal ridge is the widest point of the head — a critical reference point in haircutting used to determine weight distribution and where elevation changes.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "Which of the following bonds is the STRONGEST in the hair and provides its primary structural integrity?",
    options: [
      "Hydrogen bonds",
      "Ionic (salt) bonds",
      "Disulfide bonds",
      "Van der Waals forces"
    ],
    correctIndex: 2,
    explanation: "Disulfide bonds (S-S) are the strongest bonds in the hair. They require chemical reducing agents (thio or hydroxide) to break. They provide hair's primary strength, elasticity, and wave/curl pattern.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "A client has high-porosity hair. How will this affect a colour service?",
    options: [
      "The hair will be resistant and need extra processing time",
      "The hair will absorb colour very quickly and may become uneven",
      "The hair will not absorb colour at all",
      "The colour result will be lighter than expected"
    ],
    correctIndex: 1,
    explanation: "High-porosity hair has a raised or damaged cuticle that absorbs products rapidly and unevenly. Colour may process too fast, fade quickly, and appear patchy. A filler or porosity equalizer may be needed.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "A hairstylist is applying a permanent wave solution. The pH of most alkaline (cold wave) perm solutions is approximately:",
    options: [
      "4.5–5.5",
      "7 (neutral)",
      "8–9.5 (alkaline)",
      "12–14 (strongly alkaline)"
    ],
    correctIndex: 2,
    explanation: "Alkaline perm solutions have a pH of approximately 8–9.5. This alkalinity is necessary to open the cuticle and allow the reducing agent (ATG) to penetrate the cortex and break disulfide bonds.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "A client presents with circular, scaly, hair-breaking patches on the scalp consistent with tinea capitis. The hairstylist should:",
    options: [
      "Apply a medicated antifungal shampoo and proceed with a haircut",
      "Refuse the service, refer to a physician, and thoroughly disinfect all implements",
      "Apply a clarifying shampoo to remove the flakes and continue",
      "Proceed with a colour service only, avoiding the affected patches"
    ],
    correctIndex: 1,
    explanation: "Tinea capitis is a highly contagious fungal infection. It is a contraindication for all salon services. The client must be refused, referred to a physician for antifungal treatment, and all implements must be disinfected.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "Which massage movement involves kneading, lifting, and circular pressure to stimulate blood circulation in the scalp?",
    options: [
      "Effleurage",
      "Tapotement",
      "Petrissage",
      "Vibration"
    ],
    correctIndex: 2,
    explanation: "Petrissage uses kneading and lifting movements that stimulate blood circulation and sebaceous gland activity in the scalp.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "Healthy hair and scalp have a pH of approximately:",
    options: [
      "7.0 (neutral)",
      "8.5 (mildly alkaline)",
      "4.5–5.5 (slightly acidic)",
      "2.0–3.0 (strongly acidic)"
    ],
    correctIndex: 2,
    explanation: "Healthy hair and scalp are slightly acidic (pH 4.5–5.5). This natural acid mantle keeps the cuticle closed and smooth and provides some protection against bacteria and fungi.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "Which type of shampoo should be used BEFORE a chemical service to remove product buildup and ensure even processing?",
    options: [
      "Moisturizing shampoo",
      "Anti-dandruff shampoo",
      "Clarifying shampoo",
      "Color-safe shampoo"
    ],
    correctIndex: 2,
    explanation: "Clarifying shampoo removes residue from styling products, dry shampoo, and hard water minerals. Buildup creates a barrier that prevents chemicals from penetrating evenly.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "A protein reconstructor is best used on:",
    options: [
      "Fine hair before a volumizing service",
      "Normal, healthy hair for extra shine",
      "Severely damaged, brittle, or overprocessed hair",
      "Oily hair to reduce sebum production"
    ],
    correctIndex: 2,
    explanation: "Protein reconstructors deposit hydrolyzed proteins into the cortex to rebuild strength in damaged hair. They are specifically designed for overprocessed, brittle, or chemically compromised hair.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "A haircut performed at 0° elevation produces which result?",
    options: [
      "Even layers throughout",
      "Maximum weight at the perimeter with no interior layers",
      "Short at the nape, long on top",
      "Uniform removal of weight"
    ],
    correctIndex: 1,
    explanation: "0° elevation means no lifting — hair is combed to its natural fall and cut. All hair meets at the perimeter, creating maximum weight there with no layering above.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "Which cutting line creates a classic graduated (stacked) bob with a shorter back and longer front?",
    options: [
      "Horizontal",
      "Vertical",
      "Diagonal forward",
      "Diagonal back"
    ],
    correctIndex: 3,
    explanation: "A diagonal back cutting line (angled from a lower back to higher front) creates a longer back and shorter front — the classic A-line and graduated bob shape.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "The most important variable for controlling weight distribution in any haircut is:",
    options: [
      "The type of scissors used",
      "The elevation (angle of lifting) of the hair",
      "The thickness of each subsection",
      "The direction of the part"
    ],
    correctIndex: 1,
    explanation: "Elevation controls everything: 0° = maximum perimeter weight; 45° = graduated weight; 90° = evenly distributed layers; over 90° = longer exterior weight. It is the primary structural variable.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "A traveling (moving) guide is BEST used when cutting:",
    options: [
      "A blunt one-length bob",
      "A graduated nape",
      "Uniform or long layers throughout the head",
      "A precision perimeter line"
    ],
    correctIndex: 2,
    explanation: "A traveling guide moves section by section through the head, carrying the length measurement forward. It is the correct technique for layered cuts where length needs to be distributed evenly throughout.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "Point cutting is a texturizing technique that:",
    options: [
      "Removes weight by cutting parallel to the hair shaft",
      "Softens and breaks the perimeter cutting line by cutting into the ends with the scissor tips",
      "Creates maximum weight at the ends",
      "Uses the razor to feather the ends"
    ],
    correctIndex: 1,
    explanation: "Point cutting places scissor tips into the ends of a subsection at varying depths and cuts upward, creating a soft, broken, non-blunt finish — removing scissor marks and adding movement.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "Cross-checking a haircut serves which purpose?",
    options: [
      "Adds texture to the ends",
      "Verifies evenness and balance by examining the cut from the opposite direction it was performed",
      "Removes bulk from thick sections",
      "Determines the final styling technique to use"
    ],
    correctIndex: 1,
    explanation: "Cross-checking involves re-sectioning the hair in the perpendicular direction from the original cutting direction to verify that all sections are even and no areas were missed or unbalanced.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "Which tool is MOST appropriate for creating a soft, feathered, textured finish on a wet bob haircut?",
    options: [
      "Thinning shears",
      "Straight-edge razor / feather razor",
      "Electric clippers",
      "Trimmer outliner"
    ],
    correctIndex: 1,
    explanation: "The straight/feather razor creates soft, diffused, feathered ends on wet hair. It is ideal for textured, deconstructed shapes and should always be used on wet hair to avoid pulling and damage.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "A hairstylist cuts the nape area by holding the comb horizontally against the skin at an angle and running scissors across the comb teeth. This technique is called:",
    options: [
      "Point cutting",
      "Clipper-over-comb",
      "Scissors-over-comb",
      "Razor over comb"
    ],
    correctIndex: 2,
    explanation: "Scissors-over-comb is the classic barbering and precision cutting technique where the comb acts as a guide and the scissors cut across it — allowing very close tapering and graduation without a clipper.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "What is the chemical basis for all temporary wet and thermal styling?",
    options: [
      "Breaking and re-forming disulfide bonds",
      "Breaking and re-forming hydrogen bonds",
      "Breaking peptide bonds with heat",
      "Oxidizing the melanin in the cortex"
    ],
    correctIndex: 1,
    explanation: "Hydrogen bonds are broken by water (wet) or heat (thermal). When hair dries or cools in a new position, hydrogen bonds re-form in the new shape — holding the style. This is why wet sets and blow-drying work.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "The \"cool shot\" at the end of blow-drying a section serves to:",
    options: [
      "Remove moisture quickly from the hair",
      "Lock the style in place by re-forming hydrogen bonds as the hair cools",
      "Open the cuticle for better product absorption",
      "Reduce the time needed to style the next section"
    ],
    correctIndex: 1,
    explanation: "The cool shot closes the cuticle (adding shine) and re-forms the hydrogen bonds that were temporarily broken by the heat. This \"sets\" the blow-dry shape and significantly extends the longevity of the style.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "Applying a flat iron to slightly damp hair causes a sizzling sound. This means:",
    options: [
      "The heat protectant is activating correctly",
      "The temperature setting is appropriate",
      "Steam is damaging the hair protein structure — this is a serious error",
      "The iron needs to be cleaned"
    ],
    correctIndex: 2,
    explanation: "The sizzle is water turning to steam inside the hair shaft under a closed iron. The rapid expansion of steam ruptures the hair cortex from within, causing severe, irreversible thermal damage.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "A diffuser attachment on a blow dryer is MOST appropriate for:",
    options: [
      "Creating a very smooth, straight blow-dry",
      "Enhancing natural curl or wave pattern with minimal disruption",
      "Rapid rough-drying of thick, straight hair",
      "Directing airflow for precision root lift"
    ],
    correctIndex: 1,
    explanation: "Diffusers disperse airflow gently and widely, reducing the direct airforce that would disrupt and frizz curly hair. They allow curls to dry in their natural pattern with definition and reduced frizz.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "Which styling product provides the HIGHEST hold level with a wet/high-gloss finish?",
    options: [
      "Mousse",
      "Serum",
      "Gel (strong-hold)",
      "Heat protectant"
    ],
    correctIndex: 2,
    explanation: "Strong-hold gel creates a rigid polymer film around each hair strand when it dries, providing the highest hold of common styling products with a wet, glossy appearance.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "A Dutch braid differs from a French braid in that:",
    options: [
      "It uses four strands instead of three",
      "The strands cross under instead of over, creating a raised braid above the scalp",
      "It is done only at the nape of the neck",
      "It uses added hair extensions throughout"
    ],
    correctIndex: 1,
    explanation: "The Dutch braid (reverse/inside-out French braid) crosses strands under the center — the opposite of a French braid — creating a 3D raised effect on top of the scalp.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "The LOC method for natural hair refers to:",
    options: [
      "Length, Oil, Conditioning",
      "Liquid, Oil, Cream — a moisture-sealing layering technique",
      "Leave-in, Oil, Curl cream — always applied to dry hair only",
      "Low heat, Oil treatment, Cold rinse"
    ],
    correctIndex: 1,
    explanation: "LOC stands for Liquid (water or leave-in conditioner), Oil (seals the moisture in), and Cream (provides additional hold and sealing). It is a popular layering method for natural, coily textures to maximize moisture retention.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "What is the primary reducing agent in a standard alkaline cold wave perm?",
    options: [
      "Hydrogen peroxide",
      "Sodium hydroxide",
      "Ammonium thioglycolate (ATG)",
      "Glyceryl monothioglycolate (GMTG)"
    ],
    correctIndex: 2,
    explanation: "Ammonium thioglycolate (ATG) is the active reducing agent in alkaline cold wave perms. It breaks disulfide bonds in the cortex at room temperature. GMTG is used in acid perms.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "The purpose of the neutralizer in a permanent wave is to:",
    options: [
      "Lower the pH of the hair after waving lotion",
      "Re-form disulfide bonds in their new position to make the curl permanent",
      "Remove the waving lotion from the hair",
      "Add moisture lost during processing"
    ],
    correctIndex: 1,
    explanation: "Neutralization (oxidation) re-forms the broken disulfide bonds in the new configuration around the perm rod — permanently locking in the curl. Without proper neutralization, the curl will not last.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "An acid wave perm differs from an alkaline cold wave in that:",
    options: [
      "It uses a stronger reducing agent and requires no heat",
      "It is gentler on the hair, has a lower pH (4.5–6.5), and requires heat for activation",
      "It uses hydrogen peroxide as the reducing agent",
      "It processes much faster at room temperature"
    ],
    correctIndex: 1,
    explanation: "Acid perms use glyceryl monothioglycolate (GMTG) at a lower pH (4.5–6.5), which is gentler on the hair and scalp. They require added heat (hood dryer or exothermic activation) to process and are recommended for colour-treated or sensitized hair.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "The S-test during perm processing checks for:",
    options: [
      "The correct neutralizer application time",
      "Whether the hair has softened enough to take on the shape of the rod",
      "The porosity of the finished curl",
      "The pH level of the waving lotion after application"
    ],
    correctIndex: 1,
    explanation: "The S-test involves gently unrolling a rod at the nape to see if the hair forms an S-shape matching the rod size — indicating sufficient processing. Under-processed hair shows a weak or flat S.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Which rod type produces a tighter curl at the mid-shaft and softer curl at the roots and ends, helping to reduce root kinking?",
    options: [
      "Straight/cylindrical rod",
      "Concave (hourglass) rod",
      "Spiral rod",
      "Bender rod"
    ],
    correctIndex: 1,
    explanation: "Concave rods have a smaller diameter at the center and larger at the ends. This creates tighter curls at the mid-shaft and a gentler bend at the roots — reducing the common \"root kink\" seen with straight rods.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Over-processing during a perm results in:",
    options: [
      "Insufficient curl formation and straight ends",
      "Excessive curl, mushy texture, and potential breakage from over-softened disulfide bonds",
      "A stronger, more defined curl than expected",
      "Colour fading if the client also has tinted hair"
    ],
    correctIndex: 1,
    explanation: "Over-processing occurs when the waving lotion is left on too long, breaking too many bonds. The hair becomes over-softened and mushy, loses its strength, and may break. The curl will have no spring and may not form at all.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Lanthionization describes the chemical process in which:",
    options: [
      "Disulfide bonds are broken by ATG and re-formed by neutralizer in perming",
      "Hydroxide relaxers permanently break disulfide bonds, creating irreversible monosulfide lanthionine bonds",
      "The hair's melanin is permanently removed by bleaching agents",
      "Hydrogen bonds are broken by heat during flat ironing"
    ],
    correctIndex: 1,
    explanation: "Lanthionization is the permanent, irreversible process caused by hydroxide relaxers (lye and no-lye). Disulfide bonds are broken and replaced by single lanthionine bonds — this CANNOT be neutralized or reversed.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "During a retouch relaxer service, the product must be applied:",
    options: [
      "To the entire head of hair from roots to ends",
      "Only to the new growth, never overlapping onto previously relaxed hair",
      "Starting at the ends and working toward the roots",
      "To the scalp area only, not the hair shaft"
    ],
    correctIndex: 1,
    explanation: "Overlap onto previously relaxed hair is the most common cause of relaxer-related breakage. Previously relaxed hair is already lanthionized — additional hydroxide causes severe over-softening and breakage.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "The CRITICAL incompatibility in chemical hair services is:",
    options: [
      "Using a moisturizing shampoo before a perm",
      "Applying a thio-based product (perm or relaxer) to hair previously treated with a hydroxide relaxer",
      "Using a protein treatment before a colour service",
      "Applying a deep conditioner before a haircut"
    ],
    correctIndex: 1,
    explanation: "Thio chemistry and hydroxide chemistry are fundamentally incompatible. Applying thio to hair that has been hydroxide-relaxed causes extreme softening and catastrophic breakage — this is one of the most dangerous errors in chemical hairstyling.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Why should a hairstylist NOT shampoo the client's hair 24–48 hours before a sodium hydroxide relaxer service?",
    options: [
      "To ensure the hair is in a dirty, oily state for better product adhesion",
      "Shampooing removes the scalp's natural protective oil barrier, increasing the risk of scalp irritation and burns",
      "Shampooing makes the hair swell, reducing the effectiveness of the relaxer",
      "Shampooing would dilute the relaxer chemistry"
    ],
    correctIndex: 1,
    explanation: "The scalp's natural sebum provides a small but meaningful protective barrier against the highly alkaline relaxer (pH 12–14). Removing this barrier by shampooing close to the service increases the risk of scalp irritation and chemical burns.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "A neutralizing shampoo used after a relaxer service is designed to:",
    options: [
      "Add protein to rebuild the damaged cortex",
      "Return the hair pH to acidic range and confirm complete relaxer removal",
      "Provide moisture to chemically dry hair",
      "Activate the remaining relaxer for final processing"
    ],
    correctIndex: 1,
    explanation: "Neutralizing shampoo contains pH-lowering agents to counteract the highly alkaline relaxer and a colour indicator (pink to clear) to show when all relaxer residue is completely removed.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "On the level scale, which number represents the darkest hair?",
    options: [
      "10",
      "7",
      "1",
      "5"
    ],
    correctIndex: 2,
    explanation: "Level 1 is the darkest (black). Level 10 is the lightest (lightest blonde). The level system measures only lightness/darkness, not tone.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "The complementary colour used to neutralize orange/brassy tones is:",
    options: [
      "Red",
      "Blue (or blue-based ash)",
      "Yellow",
      "Violet"
    ],
    correctIndex: 1,
    explanation: "Orange and blue are complementary (opposite on the colour wheel). Blue-based ash toners neutralize orange brassiness by canceling out the warm orange pigment.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Which developer volume produces approximately 2 levels of lift when used with permanent oxidative colour?",
    options: [
      "5 vol. (1.5%)",
      "10 vol. (3%)",
      "20 vol. (6%)",
      "30 vol. (9%)"
    ],
    correctIndex: 3,
    explanation: "20 vol. provides 1–2 levels of lift (standard). 30 vol. provides 2–3 levels of lift, making it the correct answer for approximately 2 levels of lift in a colour service.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "A client has naturally dark brown (Level 3) hair and wants to achieve a pale blonde (Level 9). The correct approach is:",
    options: [
      "Apply a Level 9 permanent colour with 40 vol. developer directly",
      "Pre-lighten with bleach to achieve the required level first, then apply a toner",
      "Apply a high-lift colour at 20 vol. in one step",
      "Apply a demi-permanent Level 9 shade"
    ],
    correctIndex: 1,
    explanation: "A 6-level lift (from Level 3 to Level 9) cannot be achieved with permanent colour — the maximum lift is typically 3–4 levels with high-lift at 40 vol. The correct approach is bleach pre-lightening to the target pale yellow, then toning.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Balayage differs from traditional foil highlighting in that:",
    options: [
      "It uses stronger bleach formulas for faster results",
      "Colour is painted freehand onto the surface of sections without foil, creating a soft, graduated, sun-kissed effect",
      "It requires higher-volume developer (40 vol.) in all cases",
      "It must be done on dry hair only"
    ],
    correctIndex: 1,
    explanation: "Balayage is a freehand technique — colour or lightener is painted onto selected surface areas without foil. The open-air processing creates a softer, more graduated, natural result compared to the more precise, even result of foiling.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Eumelanin is responsible for which hair colours?",
    options: [
      "Red and golden blonde tones only",
      "Black to brown hair colours",
      "White hair (lack of melanin)",
      "Copper and strawberry blonde tones"
    ],
    correctIndex: 1,
    explanation: "Eumelanin produces black to brown hair colours. Pheomelanin produces red to yellow-gold tones. The two types combine in varying ratios to produce all natural hair colours.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "When formulating a permanent colour to cover resistant white hair, a hairstylist should:",
    options: [
      "Use a lighter level than the target to compensate for the white",
      "Add a warm base or mix a warm complementary shade into the formula to improve coverage",
      "Use only 10 vol. developer for maximum deposit",
      "Avoid using any tone — use only natural/neutral shades"
    ],
    correctIndex: 1,
    explanation: "Resistant white hair often has a tightly closed cuticle and no underlying pigment. Adding a warm-base shade helps the colour penetrate and provides a more even, full coverage result.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "The maximum recommended developer volume for on-scalp bleach application is:",
    options: [
      "10 vol.",
      "20–30 vol.",
      "40 vol.",
      "50 vol."
    ],
    correctIndex: 1,
    explanation: "For on-scalp bleach (root touch-up lightening), a maximum of 20–30 vol. developer is recommended. The scalp's natural body heat accelerates processing. 40 vol. on scalp creates significant risk of burns and damage.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Remy human hair extensions are distinguished from non-Remy by:",
    options: [
      "Being made of synthetic fibers that closely mimic human hair",
      "Having all cuticles aligned in the same direction (root to tip) — preventing tangling",
      "Being the least expensive type of extension available",
      "Requiring no maintenance after application"
    ],
    correctIndex: 1,
    explanation: "Remy hair has cuticles all aligned root-to-tip, which prevents tangling and matting. Non-Remy hair has mixed cuticle directions and often relies on silicone coating to smooth initially.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Which extension method requires NO heat and NO adhesive for application?",
    options: [
      "Keratin bond (K-tip) fusion",
      "Tape-in extensions",
      "Micro-ring / micro-bead (cold fusion)",
      "Sew-in / weave"
    ],
    correctIndex: 2,
    explanation: "Micro-ring/micro-bead extensions use a small metal ring crimped with pliers to attach the extension to natural hair — no heat and no adhesive are involved, which is why they are called \"cold fusion.\"",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Why should oil-based products be avoided near tape-in extension bonds?",
    options: [
      "Oil discolours the tape",
      "Oil breaks down the adhesive bond, causing premature slippage and extension loss",
      "Oil causes the extension hair to tangle",
      "Oil causes a chemical reaction with the human extension hair"
    ],
    correctIndex: 1,
    explanation: "The medical-grade adhesive used in tape-in extensions is broken down by oils and oil-based products. Contact with oils causes the bond to loosen prematurely, leading to extension slippage and loss.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Which extension method carries the HIGHEST risk of traction alopecia if applied incorrectly?",
    options: [
      "Clip-in extensions (temporary)",
      "Micro-ring / micro-bead extensions",
      "Sew-in weave with tight cornrows",
      "Tape-in extensions"
    ],
    correctIndex: 2,
    explanation: "Sew-in weave requires the natural hair to be tightly braided into cornrows. If the cornrows are excessively tight, the constant tension causes traction alopecia, particularly along the hairline and temples.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Under OHSA, which right allows a worker to stop work they believe is unsafe without fear of penalty?",
    options: [
      "Right to Know",
      "Right to Participate",
      "Right to Refuse",
      "Right to Resign"
    ],
    correctIndex: 2,
    explanation: "The Right to Refuse unsafe work is protected by OHSA. Workers cannot be penalized (fired, demoted, disciplined) for exercising this right.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "What WHMIS pictogram indicates a flammable substance?",
    options: [
      "Skull and crossbones",
      "Flame symbol",
      "Exclamation mark",
      "Health hazard (star burst)"
    ],
    correctIndex: 1,
    explanation: "The flame pictogram is used under WHMIS 2015 (GHS) for flammable gases, liquids, solids, and aerosols.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which of the following correctly describes sterilization?",
    options: [
      "Reduces the number of pathogens to a safe level",
      "Kills most but not all pathogens on non-living surfaces",
      "Destroys all microorganisms including bacterial spores",
      "Removes visible debris from implements"
    ],
    correctIndex: 2,
    explanation: "Sterilization is the highest level of decontamination — it destroys ALL microorganisms including the most resistant bacterial endospores.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The FIRST and most critical step before disinfecting implements is:",
    options: [
      "Immersing in quat solution",
      "Pre-cleaning to remove all visible organic matter",
      "Rinsing with alcohol",
      "Placing in UV cabinet"
    ],
    correctIndex: 1,
    explanation: "Organic matter (blood, hair, product) blocks disinfectants from reaching the surface. Pre-cleaning is always the first step — disinfection is ineffective on soiled implements.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which hair condition is a CONTRAINDICATION requiring the hairstylist to refuse all services?",
    options: [
      "Dry dandruff (pityriasis capitis simplex)",
      "Seborrhea",
      "Tinea capitis (scalp ringworm)",
      "Alopecia areata"
    ],
    correctIndex: 2,
    explanation: "Tinea capitis is a highly contagious fungal infection. All services must be refused, the client referred to a physician, and all implements disinfected.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The cortex is the site of ALL permanent chemical changes because it contains:",
    options: [
      "Melanin and disulfide bonds in the keratinized protein structure",
      "The cuticle scales that control absorption",
      "Air pockets and medullary cells",
      "The dermal papilla and blood supply"
    ],
    correctIndex: 0,
    explanation: "The cortex contains keratin chains linked by disulfide bonds, hydrogen bonds, and ionic bonds, plus melanin. All permanent colour, perm, and relaxer chemistry targets the cortex.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "A client's hair stretches 50% when wet and springs back fully. This indicates:",
    options: [
      "Poor elasticity requiring a protein treatment before any service",
      "Normal, healthy elasticity",
      "High porosity requiring a pre-service filler",
      "Excessive moisture — the hair should be dried before consultation"
    ],
    correctIndex: 1,
    explanation: "Healthy hair stretches approximately 50% of its length when wet and returns to its original length. This is the definition of normal elasticity, indicating a healthy cortex.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The ANAGEN phase of hair growth lasts approximately:",
    options: [
      "2–3 weeks",
      "3–4 months",
      "2–7 years",
      "1–2 days"
    ],
    correctIndex: 2,
    explanation: "The anagen (active growth) phase lasts 2–7 years. Hair grows approximately 1–1.5 cm per month. Longer anagen = longer potential maximum hair length.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which massage movement opens and closes the scalp massage treatment and produces a relaxing, soothing effect?",
    options: [
      "Petrissage",
      "Tapotement",
      "Vibration",
      "Effleurage"
    ],
    correctIndex: 3,
    explanation: "Effleurage uses light, slow, gliding strokes. It is the opening and closing movement of every scalp massage, producing relaxation and promoting lymphatic drainage.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "A 90° elevation in haircutting produces which weight distribution?",
    options: [
      "Maximum weight at the perimeter",
      "Weight line above the perimeter (graduation)",
      "Even, distributed layers throughout with no perimeter concentration",
      "Minimal weight at the nape only"
    ],
    correctIndex: 2,
    explanation: "90° elevation (hair held straight out from the head) creates a round layer — weight is evenly distributed throughout. No perimeter concentration; no graduation.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "A traveling guide is used when cutting:",
    options: [
      "Blunt one-length perimeters",
      "Graduated nape areas",
      "Uniform layers throughout the head",
      "Precision fringes (bangs)"
    ],
    correctIndex: 2,
    explanation: "A traveling guide moves section by section through the haircut, carrying length information forward — it is the correct guide type for layered cuts (uniform layers and long layers).",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The \"cool shot\" at the end of blow-drying locks in the style by:",
    options: [
      "Removing excess moisture rapidly from the hair shaft",
      "Closing the cuticle and re-forming hydrogen bonds in the new position",
      "Breaking and re-forming disulfide bonds through heat and cold cycles",
      "Activating the heat protectant product"
    ],
    correctIndex: 1,
    explanation: "Cool air closes the cuticle (increasing shine) and re-forms the hydrogen bonds that were broken by heat — \"setting\" the shape created during blow-drying.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which styling product provides the highest hold and a wet, high-gloss finish?",
    options: [
      "Mousse",
      "Shine serum",
      "Strong-hold gel",
      "Hair wax"
    ],
    correctIndex: 2,
    explanation: "Strong-hold gel forms a rigid polymer film around hair that provides maximum hold and a wet, high-gloss look when it dries.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "In perm chemistry, neutralization re-forms disulfide bonds by:",
    options: [
      "Breaking them with ammonium thioglycolate",
      "Reducing the alkalinity with an acid rinse",
      "Oxidizing the open sulfur bonds back into disulfide linkages in the new position",
      "Removing the waving lotion with a clarifying shampoo"
    ],
    correctIndex: 2,
    explanation: "Neutralization is an oxidation reaction. The neutralizer (hydrogen peroxide or sodium bromate) oxidizes the open sulfur atoms (created by ATG) back into disulfide bonds, locked in the shape of the rod.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Acid wave perms require which additional step that alkaline (cold wave) perms do not?",
    options: [
      "A pre-service clarifying shampoo",
      "Heat (from a hood dryer or the exothermic activator)",
      "Neutralization with hydrogen peroxide",
      "A patch test 24–48 hours before service"
    ],
    correctIndex: 1,
    explanation: "Acid wave perms use glyceryl monothioglycolate (GMTG), which requires heat to be activated and penetrate the cortex effectively. Alkaline (cold wave) perms process at room temperature without added heat.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Overlapping a relaxer retouch onto previously relaxed hair causes:",
    options: [
      "Improved straightening results on the previously processed hair",
      "Severe over-processing and breakage — the most common error in relaxer services",
      "A temporary darkening of the previously relaxed section",
      "Improved shine on the previously processed length"
    ],
    correctIndex: 1,
    explanation: "Previously relaxed hair has already been lanthionized. Additional hydroxide relaxer causes extreme over-softening of the already-processed hair, resulting in severe breakage or dissolution.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Level 1 on the hair level scale represents:",
    options: [
      "Lightest blonde",
      "Medium brown",
      "Darkest black",
      "Dark blonde"
    ],
    correctIndex: 2,
    explanation: "The level scale runs from 1 (darkest/black) to 10 (lightest blonde). Level 1 is black; Level 10 is the lightest blonde.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "To neutralize an orange, brassy tone left after lightening, the correct toner choice is:",
    options: [
      "A warm gold toner",
      "A blue or blue-ash based toner",
      "A red-based toner",
      "A violet/purple toner"
    ],
    correctIndex: 1,
    explanation: "Orange and blue are complementary colours — they neutralize each other. A blue or blue-ash toner is applied after lightening to cancel orange brassiness, typically at Level 7 underlying pigment.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which developer volume provides the standard lift for permanent hair colour (1–2 levels of lift)?",
    options: [
      "5 vol. (1.5%)",
      "10 vol. (3%)",
      "20 vol. (6%)",
      "40 vol. (12%)"
    ],
    correctIndex: 2,
    explanation: "20 vol. (6% hydrogen peroxide) is the standard developer for permanent colour — providing 1–2 levels of lift. 10 vol. is used for deposit-only or grey coverage; 30 vol. for 2–3 levels; 40 vol. for maximum lift.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Remy human hair extensions are preferred over non-Remy because:",
    options: [
      "They are less expensive",
      "All cuticles are aligned in the same direction, preventing tangling and matting",
      "They can be coloured with temporary colour only",
      "They are made from heat-resistant synthetic fibers"
    ],
    correctIndex: 1,
    explanation: "Remy hair has all cuticles aligned root-to-tip. Aligned cuticles lay flat and do not catch on each other, preventing tangling, matting, and premature wear.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which type of shampoo should be used before a chemical service to remove product buildup?",
    options: [
      "Moisturizing shampoo",
      "Clarifying (chelating) shampoo",
      "Colour-safe sulfate-free shampoo",
      "Baby shampoo"
    ],
    correctIndex: 1,
    explanation: "Clarifying shampoo removes styling product residue, hard water mineral deposits, and excess oils that would otherwise act as a barrier to even chemical penetration.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The parietal ridge is the:",
    options: [
      "Peak of the crown",
      "Widest area of the head where it begins to curve inward above the ears",
      "Bony prominence at the back of the skull",
      "Hairline at the nape of the neck"
    ],
    correctIndex: 1,
    explanation: "The parietal ridge is the widest point of the head — the area where the skull begins to curve inward toward the top. It is the primary reference for weight distribution in haircutting.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which face shape is considered the most versatile because almost any hairstyle is flattering?",
    options: [
      "Square",
      "Round",
      "Oval",
      "Oblong"
    ],
    correctIndex: 2,
    explanation: "The oval face shape is considered the ideal in hairstyling because its balanced proportions mean almost any cut, length, or style will be flattering. All other shapes are typically styled to create the illusion of an oval.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The Employment Standards Act (ESA) governs:",
    options: [
      "Workplace safety and hazard communication",
      "Minimum wage, hours of work, vacation pay, and termination notice",
      "Trade certification and apprenticeship registration",
      "Privacy of client records and personal information"
    ],
    correctIndex: 1,
    explanation: "The ESA sets minimum employment standards in Ontario including minimum wage, maximum hours, overtime, vacation pay, public holidays, pregnancy and parental leave, and termination requirements.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "SMART goal setting stands for:",
    options: [
      "Simple, Meaningful, Aligned, Reasonable, Timed",
      "Specific, Measurable, Achievable, Relevant, Time-bound",
      "Strategic, Manageable, Attainable, Rational, Trackable",
      "Structured, Mindful, Ambitious, Realistic, Thorough"
    ],
    correctIndex: 1,
    explanation: "SMART = Specific, Measurable, Achievable, Relevant, Time-bound. Each element transforms a vague aspiration into an actionable, trackable plan.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which of the following is an example of petrissage in scalp massage?",
    options: [
      "Light, smooth gliding strokes across the scalp with flat palms",
      "Firm kneading and circular lifting movements with thumbs and fingertips",
      "Rapid tapping with the fingertips to stimulate circulation",
      "Fine, rapid trembling movements to reduce muscle tension"
    ],
    correctIndex: 1,
    explanation: "Petrissage uses kneading, lifting, and circular pressure — it is the main body of the scalp massage and stimulates blood circulation and the sebaceous glands.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which layer of skin contains the hair follicles, sebaceous glands, and blood vessels?",
    options: [
      "Epidermis",
      "Dermis",
      "Hypodermis",
      "Stratum corneum"
    ],
    correctIndex: 1,
    explanation: "The dermis is the middle layer of the skin. It houses hair follicles, sebaceous glands, sweat glands, blood vessels, nerve endings, collagen, and elastin.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Pre-booking at the end of a client's appointment means:",
    options: [
      "Charging the client in advance for the next service",
      "Scheduling the client's next appointment before they leave the salon",
      "Calling the client the day before their scheduled appointment",
      "Booking multiple services in a single appointment"
    ],
    correctIndex: 1,
    explanation: "Pre-booking is the practice of scheduling the next appointment at the end of the current visit. It is the most effective client retention strategy and provides predictable income for the stylist.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "A patch (predisposition) test for colour is applied how far in advance of the service?",
    options: [
      "Immediately before the service",
      "1 hour before the service",
      "24–48 hours before the service",
      "One week before the service"
    ],
    correctIndex: 2,
    explanation: "The patch test must be applied 24–48 hours before the service to allow sufficient time for a delayed hypersensitivity reaction to develop. Applying it immediately before is not sufficient.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The S-test during permanent waving checks whether:",
    options: [
      "The neutralizer has been rinsed completely",
      "The hair has softened sufficiently to take the curl shape of the rod",
      "The waving lotion pH is within the correct range",
      "The rod placement is even throughout the head"
    ],
    correctIndex: 1,
    explanation: "The S-test involves gently unrolling a test rod (usually at the nape) to see if the hair forms an S-shape equal to the rod diameter — confirming that sufficient reduction (softening) has occurred.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which bond is broken by water and heat and re-forms when hair dries or cools?",
    options: [
      "Disulfide bond",
      "Peptide bond",
      "Hydrogen bond",
      "Ionic (salt) bond"
    ],
    correctIndex: 2,
    explanation: "Hydrogen bonds are weak, temporary bonds broken by water and heat. They re-form as the hair dries or cools around a new shape — the chemical basis for all wet and thermal styling.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "A graduate bob differs from a one-length (blunt) cut in that:",
    options: [
      "It uses 90° elevation throughout",
      "Hair is stacked above the perimeter by cutting at angles between 1–89°, creating a weight line above the nape",
      "It requires no guide",
      "The back is longer than the front in all variations"
    ],
    correctIndex: 1,
    explanation: "A graduated (stacked) cut uses angles between 1–89° elevation, building weight and stacking the hair above the perimeter line — creating the characteristic \"stacked\" shape above the nape.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which of the following is NOT a role of the dermal papilla?",
    options: [
      "Supplying blood to the hair bulb",
      "Delivering oxygen and nutrients for hair growth",
      "Producing sebum to lubricate the hair shaft",
      "Providing the signals that initiate and sustain hair growth"
    ],
    correctIndex: 2,
    explanation: "The dermal papilla is the vascular connector at the base of the follicle — it delivers blood, oxygen, and growth signals. Sebum is produced by the sebaceous gland, which is a separate structure.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "WHMIS 2015 requires all three of the following EXCEPT:",
    options: [
      "Hazard labels on all controlled products",
      "Safety Data Sheets (SDS) for all hazardous products",
      "Worker education and training about hazards",
      "A government inspector present during all chemical applications"
    ],
    correctIndex: 3,
    explanation: "WHMIS 2015 requires labels, SDS, and worker education. A government inspector is not required to be present during normal salon operations.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The \"law of colour\" in hair colouring refers to:",
    options: [
      "Provincial regulations governing colour product use",
      "The principle that mixing complementary (opposite) colours neutralizes them, and primary colours combine to produce all others",
      "The rule that colour should always be applied darker than the target level",
      "The formula for calculating developer volume"
    ],
    correctIndex: 1,
    explanation: "The law of colour in pigment theory describes how the three primary colours (red, yellow, blue) combine to make all others, and how complementary colour pairs (red/green, orange/blue, yellow/violet) neutralize each other.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which extension method uses a curved needle and thread to attach wefts to braided cornrows?",
    options: [
      "Tape-in",
      "Micro-ring (cold fusion)",
      "Sew-in weave",
      "Keratin bond (K-tip fusion)"
    ],
    correctIndex: 2,
    explanation: "The sew-in weave method involves braiding the natural hair into cornrows and sewing weft extension hair to the cornrows with a special curved needle and thread.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The purpose of using an end paper (end wrap) when winding perm rods is to:",
    options: [
      "Speed up the chemical processing",
      "Protect the delicate hair tips and ensure they lie flat and even on the rod for a consistent curl",
      "Create more tension at the root area",
      "Hold the rod in the base position during processing"
    ],
    correctIndex: 1,
    explanation: "End papers prevent the delicate tips of the hair from bending or doubling back (\"fishhooking\") on the rod, ensuring even winding and protecting the ends from the harsh waving lotion.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "High-porosity hair in a colour service will:",
    options: [
      "Be resistant to colour penetration and need extra processing time",
      "Absorb colour very quickly, potentially unevenly, and fade faster",
      "Not be affected by porosity during a colour service",
      "Always produce a lighter-than-expected result"
    ],
    correctIndex: 1,
    explanation: "High-porosity hair has a damaged or raised cuticle that absorbs chemicals rapidly and unevenly. Colour may process too fast, streak, and fade quickly. A porosity equalizer or filler may be recommended.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Lye (sodium hydroxide) relaxers have an approximate pH of:",
    options: [
      "4.5–6.5",
      "7–8",
      "9–10",
      "12–14"
    ],
    correctIndex: 3,
    explanation: "Sodium hydroxide (lye) relaxers are extremely alkaline, with a pH of 12–14. This extreme alkalinity is what allows them to break the very strong disulfide bonds in coily, resistant hair.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which technique involves painting bleach or colour freehand onto the surface of subsections without foil for a soft, graduated effect?",
    options: [
      "Foiling",
      "Balayage",
      "Babylights",
      "Colour melt"
    ],
    correctIndex: 1,
    explanation: "Balayage (French for \"sweeping\") is the freehand painting technique where lightener or colour is swept onto the surface of sections in a painting motion without foil. The open-air processing creates a soft, natural, sun-kissed gradient.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The natural hair growth cycle phase in which cell division ceases and the follicle shrinks is called:",
    options: [
      "Anagen",
      "Catagen",
      "Telogen",
      "Exogen"
    ],
    correctIndex: 1,
    explanation: "The catagen phase is the brief transitional period (2–3 weeks) where mitosis stops and the follicle detaches from the dermal papilla and shrinks. Only 1–2% of hairs are in catagen at any time.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "A hairstylist's responsibility under the Human Rights Code includes:",
    options: [
      "Charging premium rates to clients with more complex hair needs",
      "Providing equal, professional service to all clients regardless of race, gender, age, disability, or any other protected ground",
      "Refusing services to any client if the stylist is uncomfortable",
      "Prioritizing existing clients over new clients at all times"
    ],
    correctIndex: 1,
    explanation: "Ontario's Human Rights Code prohibits discrimination in the provision of services. Every client has the legal right to equal, professional, non-discriminatory service.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "To achieve a Level 9 (very light blonde) result from naturally dark brown (Level 3) hair, the first step is:",
    options: [
      "Apply a Level 9 colour with 40 vol. developer",
      "Apply a demi-permanent ash toner",
      "Pre-lighten with bleach to remove sufficient underlying pigment",
      "Apply a high-lift blonde at 30 vol."
    ],
    correctIndex: 2,
    explanation: "Permanent colour cannot lift 6 levels in one step — maximum lift with high-lift colour is approximately 3–4 levels. Pre-lightening with bleach is required before toning to achieve very light blonde from dark brown hair.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Cross-checking a haircut involves:",
    options: [
      "Reviewing the price of the service with the client at the end",
      "Re-sectioning the hair in the opposite direction to verify evenness, balance, and symmetry",
      "Confirming the client's satisfaction by showing all angles with a mirror",
      "Applying a finishing product to check the final shape"
    ],
    correctIndex: 1,
    explanation: "Cross-checking is a quality-control step where the stylist re-examines the cut by taking sections perpendicular to the original cutting direction — catching uneven sections, missed areas, and imbalances.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which type of conditioner is applied to clean, damp hair and is NOT rinsed out?",
    options: [
      "Instant / rinse-out conditioner",
      "Deep conditioning masque",
      "Leave-in conditioner",
      "Protein reconstructor"
    ],
    correctIndex: 2,
    explanation: "Leave-in conditioner is applied to towel-dried or damp hair after shampooing and is not rinsed out. It provides ongoing moisture, detangling support, and light hold or heat protection throughout the day.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "A concave perm rod reduces \"root kinking\" because:",
    options: [
      "It is larger in diameter than standard rods",
      "Its smaller center diameter creates a tighter mid-shaft curl while the larger ends provide a gentler angle at the root and tip",
      "It does not require end papers",
      "The rod surface is textured to prevent slippage"
    ],
    correctIndex: 1,
    explanation: "Concave (hourglass-shaped) rods have a smaller diameter at the center and larger at the ends. This creates a tighter curl at mid-shaft and a softer, more natural bend at the roots — reducing the harsh 90° root kink seen with straight-cylindrical rods.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "An overprocessed perm results from:",
    options: [
      "Using the wrong neutralizer brand",
      "Insufficient waving lotion saturation during application",
      "Leaving the waving lotion on too long or using too strong a formula for the hair condition",
      "Rinsing waving lotion for too long before neutralizing"
    ],
    correctIndex: 2,
    explanation: "Over-processing occurs when the waving lotion breaks too many disulfide bonds. The hair becomes over-softened (mushy), loses its elasticity, and may break. The S-test would show a limp, weak curl with no spring.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which of the following BEST describes the purpose of a client consultation?",
    options: [
      "To upsell additional products and services",
      "To assess hair condition, understand client goals, manage expectations, perform tests, and obtain informed consent before any service",
      "To determine the most profitable service to perform",
      "To review the client's loyalty card and booking history"
    ],
    correctIndex: 1,
    explanation: "The consultation is the most important step in any service. It establishes trust, ensures safety, confirms the service plan, manages expectations realistically, and forms the legal basis for informed consent. Everything else in the service depends on it.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Pheomelanin produces which natural hair tones?",
    options: [
      "Black and dark brown",
      "Red, copper, golden, and yellow tones",
      "White/grey (no colour)",
      "Ash and cool brown tones"
    ],
    correctIndex: 1,
    explanation: "Pheomelanin produces warm, red-to-yellow-gold tones. It is the pigment type responsible for red hair and the warm underlying pigment visible in brown and black hair when lightened.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "A stationary guide is BEST used for which type of haircut?",
    options: [
      "Uniform layers throughout",
      "Long layers with a traveling guide",
      "Blunt/one-length or graduated cuts",
      "Razor-cut textured styles"
    ],
    correctIndex: 2,
    explanation: "A stationary guide stays in one place — all subsequent sections are brought to it for cutting. This is the correct technique for one-length (blunt) and graduated cuts where the perimeter must be consistent.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Spaced repetition as a study strategy involves:",
    options: [
      "Studying the same material for many hours in one session",
      "Reviewing material at increasing time intervals to strengthen long-term memory",
      "Reading each chapter only once before the exam",
      "Studying only the topics that appeared most recently in the textbook"
    ],
    correctIndex: 1,
    explanation: "Spaced repetition spaces review sessions over increasing intervals (1 day, 3 days, 1 week, 2 weeks). The slight forgetting that occurs between sessions, followed by successful recall, powerfully strengthens long-term memory.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "A client arrives with open sores on the scalp. What is the most appropriate course of action before proceeding with any salon service?",
    options: [
      "Apply an antiseptic and proceed with the service",
      "Refer the client to a physician and decline the service until cleared",
      "Cover the affected area with a towel and continue",
      "Perform the service using extra protective gloves only"
    ],
    correctIndex: 1,
    explanation: "Open sores or breaks in the skin may indicate an infectious or medical condition. The hairstylist must refuse the service and refer the client to a physician. Proceeding risks cross-contamination between clients, worsening the client's condition, and violating occupational health and safety standards.",
    order: 1,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "Which level of decontamination is required for metal haircutting shears between clients?",
    options: [
      "Sterilization using an autoclave",
      "Disinfection with an approved hospital-grade disinfectant",
      "Sanitation by wiping with a damp cloth",
      "Sanitizing with soap and water only"
    ],
    correctIndex: 1,
    explanation: "Haircutting shears are semi-critical implements that contact intact skin. They require disinfection — immersion in or wiping with an approved hospital-grade or EPA/Health Canada-registered disinfectant between clients. Sterilization (destruction of all microorganisms including spores) is required only for implements that penetrate skin. Sanitation alone reduces microbial load but does not disinfect.",
    order: 2,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "What is the correct procedure for a hairstylist who develops an allergic reaction to a chemical product used in the salon?",
    options: [
      "Continue working while wearing double gloves",
      "Switch to a different brand of the same product",
      "Consult a physician and report the reaction to the employer — use barrier protection and avoid the irritant",
      "Wash hands frequently and reduce exposure time"
    ],
    correctIndex: 2,
    explanation: "Occupational contact dermatitis is a serious and progressive condition. The stylist must consult a physician, report the reaction to the employer as required by occupational health and safety legislation, and take steps to reduce exposure — including using appropriate barrier protection (gloves, barrier cream) and, if necessary, avoiding the specific chemical. Continuing without intervention worsens sensitization.",
    order: 3,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "A client's skin patch test for hair colour is performed 24–48 hours before the service. A positive reaction (redness, swelling, itching at the test site) is observed. What action should the hairstylist take?",
    options: [
      "Proceed — a mild reaction means the client can tolerate the colour",
      "Reduce the developer volume and proceed",
      "Do not perform the colour service and inform the client of the reaction",
      "Rinse the test site and perform the service within 30 minutes"
    ],
    correctIndex: 2,
    explanation: "Any positive patch test reaction — regardless of severity — is a contraindication for the colour service. Performing colour after a positive reaction risks anaphylaxis, severe contact dermatitis, or other serious adverse events. The client must be informed that the service cannot proceed and should be advised to consult a physician if they wish to explore alternatives.",
    order: 4,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "What is the proper method for disposing of a used single-use razor blade in the salon?",
    options: [
      "Wrap in tissue and place in the regular waste bin",
      "Place directly into the sharps (biohazard) container without resheathing",
      "Resheath by hand and place in the regular bin",
      "Flush down the sink drain"
    ],
    correctIndex: 1,
    explanation: "Used razor blades are sharps and must be placed directly into a puncture-resistant sharps container — never resheathed by hand (risk of needlestick/laceration injury) and never placed in the regular waste stream where they can injure waste handlers. Sharps containers are disposed of according to provincial biohazard waste regulations.",
    order: 5,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "Which of the following is an example of a direct (person-to-person) mode of disease transmission in the salon environment?",
    options: [
      "Touching a contaminated surface and then touching the face",
      "Breathing in airborne fungal spores from infected hair clippings on the floor",
      "Direct contact with an open lesion from tinea capitis on a client's scalp",
      "Using tools from a shared drawer without disinfecting"
    ],
    correctIndex: 2,
    explanation: "Direct transmission requires physical contact between the source and a new host without an intermediary. Direct scalp contact with a tinea capitis (ringworm) lesion transfers the fungal infection directly. The other options describe indirect transmission (fomites — contaminated surfaces/tools), droplet/airborne transmission, and contact via a fomite respectively.",
    order: 6,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "How long should implements be immersed in a disinfectant solution to achieve effective disinfection, as typically required by most provincial regulations?",
    options: [
      "1–2 minutes",
      "5–10 minutes",
      "At least 10 minutes (or per manufacturer's contact time instructions)",
      "30 seconds is sufficient for high-grade disinfectants"
    ],
    correctIndex: 2,
    explanation: "Effective disinfection requires the implement to be fully immersed in a registered disinfectant solution for the contact time specified by the manufacturer — commonly 10 minutes or more for hospital-grade quaternary ammonium compounds. Shorter contact times may not achieve the required microbial kill. Implements must also be clean (free of organic matter) before disinfection, as debris inactivates disinfectants.",
    order: 7,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "What is the purpose of WHMIS (Workplace Hazardous Materials Information System) in the salon?",
    options: [
      "To track product inventory and expiry dates for salon retail products",
      "To regulate the pricing of salon chemical services",
      "To ensure workers are informed of hazards associated with chemical products through Safety Data Sheets, labels, and training",
      "To certify that salon products are approved for professional use only"
    ],
    correctIndex: 2,
    explanation: "WHMIS is Canada's national hazard communication standard. It requires employers to provide workers with access to Safety Data Sheets (SDS) for all hazardous products used in the workplace (including salon chemicals such as bleach, colour, relaxers, perms), proper labelling, and worker training on hazards and safe handling. This protects workers from chemical injury and illness.",
    order: 8,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "A hairstylist experiences repeated headaches and eye irritation during chemical services. What is the most appropriate workplace safety measure?",
    options: [
      "Take over-the-counter pain medication and continue working",
      "Ensure adequate ventilation in the salon — open windows and use exhaust fans during chemical services",
      "Work faster to reduce exposure time",
      "Switch from powder bleach to cream bleach only"
    ],
    correctIndex: 1,
    explanation: "Headaches and eye irritation are symptoms of chemical vapour exposure (from persulfate bleaches, oxidants, ammonia, or formaldehyde-based smoothing products). The primary control is engineering ventilation — ensuring the salon has adequate air exchange (local exhaust ventilation and general dilution ventilation). Provincial OH&S regulations require employers to control chemical hazards, starting with engineering controls before PPE.",
    order: 9,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "Which type of haircutting scissors is designed to remove bulk and create texture while maintaining the perimeter length?",
    options: [
      "Straight blunt scissors",
      "Thinning (texturizing) scissors with one serrated blade",
      "Curved scissors",
      "Offset-handle scissors"
    ],
    correctIndex: 1,
    explanation: "Thinning or texturizing scissors have one straight blade and one notched (serrated) blade. Only the hair between the notches is cut, removing bulk while leaving the perimeter length intact. They differ from chunking scissors (wider notches, remove more bulk) and from blending shears. Straight blunt scissors create a clean solid line. Curved scissors follow contours of the head.",
    order: 10,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "What is the correct method for sharpening haircutting scissors?",
    options: [
      "Sharpen on a household whetstone to maintain the original angle",
      "Have scissors sharpened by a professional scissor technician who preserves the original bevel and convex edge",
      "Use the built-in sharpener inside the shear case",
      "Rub the blades together briefly to realign the edge"
    ],
    correctIndex: 1,
    explanation: "Haircutting scissors — especially Japanese steel with a convex edge — require sharpening by a qualified scissor technician using specialized equipment that preserves the original bevel angle and hollow or convex grind. Incorrect sharpening damages the edge, causes the scissors to fold or push hair, and shortens the life of the tool significantly. Scissors should never be sharpened on a household whetstone.",
    order: 11,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "A client with very coarse, thick hair requires maximum cutting precision on a blunt solid perimeter. Which cutting tool is most appropriate?",
    options: [
      "Thinning scissors",
      "A razor (feather/shaper)",
      "Sharp straight scissors (7–8 inch)",
      "Electric clippers with a #2 guard"
    ],
    correctIndex: 2,
    explanation: "A straight blunt scissors (7–8 inch for larger sections) provides the most precise, clean perimeter line on coarse, thick hair. Razors work best on fine to medium hair when wet and produce softer, diffused edges — not the clean blunt perimeter required. Thinning scissors would reduce bulk rather than define a solid perimeter. Clippers are for very short precision work and fades.",
    order: 12,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "What is the main purpose of a boar-bristle brush compared to a nylon-bristle brush?",
    options: [
      "A boar-bristle brush cuts hair faster during blow-drying",
      "Boar bristles distribute the hair's natural oils from root to ends, add shine, and are gentler — best for fine or fragile hair; nylon bristles detangle more effectively and are more aggressive",
      "Boar-bristle brushes are only used for beard grooming",
      "Nylon brushes are always preferred because they withstand high heat better"
    ],
    correctIndex: 1,
    explanation: "Boar bristles are natural, soft, and closely spaced — they smooth the cuticle, distribute sebum (natural scalp oil) along the hair shaft for shine, and are gentle enough for fine, fragile, or chemically treated hair. Nylon bristles are stiffer, better for detangling and handling thicker hair, and more durable under high heat tools. Many professional brushes combine both materials.",
    order: 13,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "When using an electric clipper, what does the taper lever on the side of the clipper do?",
    options: [
      "Adjusts the blade speed for different hair textures",
      "Changes the guard size from short to long",
      "Opens and closes the blade to adjust the cutting length between guard sizes, allowing blending and graduated fades",
      "Activates the detachable blade release mechanism"
    ],
    correctIndex: 2,
    explanation: "The taper (or fade) lever adjusts the closeness of the moving blade to the fixed blade, effectively changing the cutting length incrementally between guard sizes — moving toward 'open' cuts longer, toward 'closed' cuts closer. This allows seamless blending and creating smooth graduation in fades without switching guards, which is the foundation of clipper-over-comb and fade techniques.",
    order: 14,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Client Consultation",
    question: "During a client consultation, the hairstylist should primarily use which technique to understand what the client truly wants?",
    options: [
      "Tell the client what would suit them best based on visual assessment only",
      "Ask open-ended questions, listen actively, and use visual references (photos, style books) to confirm mutual understanding",
      "Show the client the same style that is trending currently without discussion",
      "Begin the service and adjust based on client feedback mid-way through"
    ],
    correctIndex: 1,
    explanation: "Effective consultation combines open-ended questions ('What do you like or dislike about your current style?') with active listening and visual confirmation using style images or a mannequin to ensure both client and stylist share the same vision before any service begins. Relying on verbal description alone leads to misunderstanding. Discovering a mismatch mid-service wastes time and damages the client relationship.",
    order: 15,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Client Consultation",
    question: "What information should be recorded on a client record card after each visit?",
    options: [
      "The client's credit card information for convenience",
      "Services performed, products used and formulas applied, results achieved, any contraindications noted, and the client's preferences and reactions",
      "Only the price charged for the service",
      "The hairstylist's personal opinion of the client's hair condition"
    ],
    correctIndex: 1,
    explanation: "Client record cards (service history) must document: all services performed, exact product formulas used (colour formulas, chemical service details), results achieved, client reactions or sensitivities, and future service recommendations. This information protects both client and stylist, ensures consistency across visits (especially when clients see different stylists), and is essential for troubleshooting problems in future services.",
    order: 16,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Client Consultation",
    question: "A client's hair has three different conditions present: normal at the roots, chemically coloured in the mid-lengths, and previously highlighted (very porous) at the ends. How should this information affect service planning?",
    options: [
      "Apply all products uniformly from root to end using the same formula and timing",
      "Ignore the variation — all professional products are designed to work on any hair condition",
      "Plan product application, processing times, and formulas to account for each zone's different porosity and response to chemicals",
      "Always start services at the ends where the most damage is present"
    ],
    correctIndex: 2,
    explanation: "Understanding the porosity and condition of each zone of the hair is fundamental to professional service planning. Highly porous ends absorb colour faster and lift more easily — using the same formula and timing as the roots will result in uneven results, over-processing at the ends, or inadequate development at the roots. Sectioned application, staggered timing, and adjusted formulas per zone ensure even, predictable results.",
    order: 17,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Client Consultation",
    question: "Which face shape would benefit most from a haircut that adds width at the temples and reduces length at the crown?",
    options: [
      "Round face shape",
      "Oval face shape",
      "Oblong (long/rectangular) face shape",
      "Heart face shape"
    ],
    correctIndex: 2,
    explanation: "An oblong (long/rectangular) face appears elongated. The goal is to add visual width and reduce perceived length — achieved with side-parted styles, waves, or styles that add width at the temples and cheekbones while avoiding height at the crown and minimizing length below the chin. Round faces benefit from length and height. Oval faces suit most styles. Heart faces benefit from width at the jaw.",
    order: 18,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Communication",
    question: "A junior hairstylist in the salon consistently rushes through client consultations. What is the most effective mentoring approach for the senior stylist?",
    options: [
      "Take over all the junior's client consultations until they improve",
      "Observe the junior in action, provide specific feedback using examples, and role-model a thorough consultation technique",
      "Warn the junior that they will be dismissed if they do not improve",
      "Assign extra reading on consultation theory only"
    ],
    correctIndex: 1,
    explanation: "Effective mentoring combines observation of actual performance, specific behavioural feedback (not vague criticism), demonstration of correct technique through modelling, and supportive coaching. Simply assigning reading or taking over tasks does not build the junior's competence. Warning of dismissal without constructive guidance is counter-productive and creates a negative learning environment.",
    order: 19,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Communication",
    question: "A client becomes upset after seeing the result of a haircut and says the length is shorter than expected. What is the most professional response?",
    options: [
      "Blame the client for not being clear during the consultation",
      "Apologize and immediately offer a refund without any discussion",
      "Acknowledge the client's feelings, review what was discussed during consultation, and collaboratively explore options to address their concerns",
      "Explain technically why the cut is correct and tell the client they are wrong"
    ],
    correctIndex: 2,
    explanation: "Professional conflict resolution begins with empathy — acknowledging the client's feelings without becoming defensive. Then, reviewing the consultation notes together establishes a shared understanding. Exploring options (complimentary styling, a follow-up service, a partial adjustment) demonstrates commitment to client satisfaction. Blaming the client or being defensive damages trust; reflexive refunds without discussion establish a problematic precedent.",
    order: 20,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Communication",
    question: "What is a Material Safety Data Sheet (MSDS), now known as a Safety Data Sheet (SDS), and when should a hairstylist access it?",
    options: [
      "A product brochure from the manufacturer describing recommended uses",
      "A legal document listing hazard information, safe handling, emergency procedures, and first aid for a hazardous product — accessed before working with an unfamiliar chemical or in response to an accident or spill",
      "A government tax document for chemical product purchases",
      "A client consent form for chemical services"
    ],
    correctIndex: 1,
    explanation: "An SDS (formerly MSDS) is a standardized 16-section document required by WHMIS that details a chemical product's hazards, composition, safe handling, storage, PPE requirements, emergency response, and disposal. Hairstylists must access SDS before using an unfamiliar chemical, when an accidental exposure or spill occurs, or to determine if a product is safe for a specific client scenario. SDS binders must be accessible in the salon at all times.",
    order: 21,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Communication",
    question: "When a client discloses a history of severe allergic reactions to hair colour products, what is the most appropriate documentation and service decision?",
    options: [
      "Document the disclosure and proceed with a lower-strength colour formula",
      "Document the allergy on the client record card, decline the service, and recommend the client consult a dermatologist before any colour service",
      "Perform a patch test and if it is negative, proceed immediately",
      "Offer a semi-permanent colour instead since it is 'gentler'"
    ],
    correctIndex: 1,
    explanation: "A history of severe allergic reactions (especially anaphylaxis or systemic reaction) to hair colour is a significant contraindication. The disclosure must be recorded on the client record card. The service should be declined and the client referred to a dermatologist for proper allergy testing before any colour service is attempted. A patch test alone is insufficient to rule out re-exposure risk in a client with a history of severe reaction.",
    order: 22,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Communication",
    question: "Which professional behaviour best demonstrates respect for client confidentiality in the salon?",
    options: [
      "Discussing interesting client stories with other stylists during quiet periods",
      "Sharing client before-and-after photos on social media without written consent",
      "Keeping all client information, service history, and personal disclosures private and not sharing with anyone except for legitimate professional need and with consent",
      "Posting client transformation photos with faces blurred — no consent needed"
    ],
    correctIndex: 2,
    explanation: "Client confidentiality is both an ethical and, in many jurisdictions, a legal obligation. Client records, personal disclosures, and identifying photos must not be shared without explicit written consent. Before-and-after photos — even with blurred faces — may be identifiable and require consent. Discussing client information in the salon with other staff or clients violates trust and professional ethics.",
    order: 23,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "A client's hair stretches significantly when wet and then breaks without returning to its original length. What does this indicate?",
    options: [
      "High elasticity — ideal for chemical services",
      "Low elasticity caused by internal cortex damage — the hair may not be suitable for chemical services",
      "High porosity — the hair absorbs water quickly",
      "Normal hair — stretching when wet is expected"
    ],
    correctIndex: 1,
    explanation: "Healthy hair has good elasticity — it stretches up to 50% when wet and returns fully to its original length. Hair that stretches excessively and then breaks (rather than returning) has low or poor elasticity, indicating cortex damage (from over-processing, heat abuse, or mechanical damage). Poor elasticity is a key contraindication for chemical services — further processing risks breakage.",
    order: 24,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "How does a hairstylist test the porosity of hair?",
    options: [
      "By pulling a strand and measuring the force required to break it",
      "By sliding fingers from the ends toward the roots along a dry strand — rough, catching texture indicates high porosity; smooth indicates low porosity",
      "By measuring the strand diameter with a calliper",
      "By checking whether the hair floats or sinks in a bowl of water"
    ],
    correctIndex: 1,
    explanation: "The porosity slide test: slide fingers from ends toward roots. If the cuticle scales are raised (high porosity), fingers catch and the strand feels rough. If cuticles are flat (low porosity), the strand feels smooth and glassy. High porosity hair absorbs products quickly but does not retain them, processes faster chemically, and requires porosity equalizers before chemical services. Low porosity hair resists product penetration and processes slowly.",
    order: 25,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "What does the term 'hair density' refer to, and how does it affect service planning?",
    options: [
      "Density refers to the diameter of individual hair strands — fine hair has low density",
      "Density refers to the number of hairs per square centimetre on the scalp — high density means more hair follicles, requiring larger sections and stronger product formulations for even penetration",
      "Density is synonymous with elasticity",
      "Density describes how heavy the hair feels when freshly washed"
    ],
    correctIndex: 1,
    explanation: "Hair density is the number of individual hairs per square centimetre of scalp — categorized as low, medium, or high. High-density hair has many tightly packed follicles and requires larger partings, thorough saturation of product, and potentially longer processing time to ensure even coverage. Low-density hair requires finer sections and careful handling to avoid exposing the scalp or creating sparse areas.",
    order: 26,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "A client presents with small, oily, yellowish scales on the scalp with mild itching. The scalp skin appears slightly red. Which scalp condition does this most likely describe?",
    options: [
      "Tinea capitis (ringworm of the scalp)",
      "Seborrhoeic dermatitis (dandruff)",
      "Psoriasis",
      "Alopecia areata"
    ],
    correctIndex: 1,
    explanation: "Seborrhoeic dermatitis (the pathological form of dandruff) presents with oily, yellowish-white scales, mild erythema (redness), and itching — caused by an overgrowth of Malassezia yeast on an oily scalp. Tinea capitis is a fungal infection with patchy hair loss and broken shafts. Psoriasis produces thick, silvery, dry scales with well-defined plaques. Alopecia areata presents with smooth, coin-shaped bald patches without scaling.",
    order: 27,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "A client is observed to have circular patches of hair loss with smooth, shiny skin, broken hair shafts at the surface ('black dot' pattern), and slight scaling. What is the most likely diagnosis and appropriate action?",
    options: [
      "Alopecia areata — proceed with the service using gentle products",
      "Tinea capitis (ringworm) — refer the client to a physician; do not perform any service",
      "Trichotillomania — advise the client to stop pulling their hair",
      "Traction alopecia — recommend looser hairstyles and proceed with a conditioning treatment"
    ],
    correctIndex: 1,
    explanation: "Tinea capitis is a highly contagious fungal infection presenting with circular, scaly patches, broken hair shafts at the scalp surface (black dot pattern), and possible lymph node involvement. It requires antifungal medication prescribed by a physician — it cannot be treated topically in the salon. Any service must be refused to prevent spread to other clients. Hairstyling tools that contact the infected scalp must be thoroughly disinfected.",
    order: 28,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "A client has fine, straight hair that is colour-treated and highly porous. Which characteristic would be expected when performing a permanent wave?",
    options: [
      "The hair will process slowly and require a stronger waving solution",
      "The hair will process quickly and require a milder waving solution with careful monitoring to avoid over-processing",
      "Porosity has no effect on permanent wave processing time",
      "Fine hair cannot be permed under any circumstances"
    ],
    correctIndex: 1,
    explanation: "Highly porous hair has a raised cuticle layer that allows chemicals to penetrate rapidly and deeply. Combined with the fine hair shaft (lower protein content), this means the waving solution will process faster than on resistant, low-porosity hair. A milder (lower-pH, lower-ammonium thioglycolate concentration) waving solution and frequent strand tests are required to avoid over-processing, which causes extreme frizz, loss of elasticity, and breakage.",
    order: 29,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "What is the primary structural protein that makes up the hair shaft?",
    options: [
      "Collagen",
      "Melanin",
      "Keratin",
      "Elastin"
    ],
    correctIndex: 2,
    explanation: "Hair is composed primarily of keratin — a fibrous structural protein rich in the amino acid cysteine. Cysteine residues form disulfide bonds between adjacent keratin chains, giving hair its strength, elasticity, and ability to be chemically rearranged. Chemical services (perms, relaxers) work by breaking and reforming these disulfide bonds. Melanin is the pigment in the cortex. Collagen and elastin are found in skin but not in significant amounts in the hair shaft.",
    order: 30,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "A client's scalp has patches of thick, dry, silvery-white scales that bleed slightly when lifted, with well-defined reddish plaques. What condition does this indicate?",
    options: [
      "Seborrhoeic dermatitis",
      "Psoriasis",
      "Contact dermatitis",
      "Ringworm"
    ],
    correctIndex: 1,
    explanation: "Psoriasis is an autoimmune skin condition characterised by thick, dry, silvery-white scales on well-defined, inflamed plaques that bleed (Auspitz sign) when scales are removed. It is not contagious, but chemical services may irritate affected areas. The client should be consulted with a physician before any chemical service. Gentle handling is required; scratching or abrading the scalp before chemical services is contraindicated.",
    order: 31,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "What is the purpose of performing an elasticity test before a chemical service?",
    options: [
      "To determine the hair's colour level and tone",
      "To determine if the internal cortex bonds are intact enough to withstand the chemical process without causing breakage",
      "To measure the hair's natural oil content",
      "To assess the diameter of the individual hair shaft"
    ],
    correctIndex: 1,
    explanation: "The elasticity test assesses the condition of the cortex and its disulfide and peptide bonds — the internal structure that gives hair stretch and recovery. Hair with poor elasticity (over-processed, weakened cortex) cannot withstand the stress of further chemical processing without breaking. A failing elasticity test is a direct contraindication for permanent waving, relaxing, or high-lift colour services.",
    order: 32,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "Which of the following scalp conditions is contagious and requires the hairstylist to refuse the service and refer the client?",
    options: [
      "Androgenetic alopecia (male/female pattern baldness)",
      "Pediculosis capitis (head lice)",
      "Alopecia areata",
      "Seborrhoeic dermatitis"
    ],
    correctIndex: 1,
    explanation: "Pediculosis capitis (head lice infestation) is contagious and easily spread through direct contact with infested hair or sharing of tools and linens. The hairstylist must decline the service, inform the client sensitively, recommend treatment, and disinfect or dispose of any items that may have contacted the client's hair. Non-contagious conditions (alopecia areata, androgenetic alopecia, seborrhoeic dermatitis) do not require service refusal, though appropriate product selection is important.",
    order: 33,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Shampooing and Conditioning",
    question: "What pH range is typical for most professional shampoos, and why is this range important?",
    options: [
      "pH 1–3 (strongly acidic) — to remove mineral buildup",
      "pH 4.5–5.5 (slightly acidic) — close to the hair's natural pH to maintain the cuticle in a closed, smooth state",
      "pH 7 (neutral) — to avoid any reaction with the hair",
      "pH 8–10 (alkaline) — to open the cuticle for deep cleansing"
    ],
    correctIndex: 1,
    explanation: "Healthy hair and scalp have a natural pH of approximately 4.5–5.5 (slightly acidic). Professional shampoos are formulated at this pH range to match the hair's acid mantle, keeping the cuticle smooth and flat for shine and reduced tangling. Alkaline pH opens and roughens the cuticle. Strongly acidic pH damages the cuticle. After chemical services (which use alkaline products), acidic aftercare products are used to normalize pH.",
    order: 34,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Shampooing and Conditioning",
    question: "What type of shampoo is most appropriate for a client who has very oily hair and scalp?",
    options: [
      "Moisturizing (emollient) shampoo",
      "Clarifying or deep-cleansing shampoo",
      "Dry shampoo",
      "Colour-safe (sulphate-free) shampoo"
    ],
    correctIndex: 1,
    explanation: "Clarifying shampoos contain stronger surfactants (such as ammonium lauryl sulphate) that more effectively remove excess sebum, product buildup, and environmental residue from the hair and scalp. They are appropriate for oily hair used periodically. Moisturizing shampoos add emollients, worsening oiliness. Sulphate-free shampoos are gentler — designed for colour-treated or dry hair, not for oil removal.",
    order: 35,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Shampooing and Conditioning",
    question: "Why should the scalp NOT be vigorously scratched or abraded before applying a chemical service such as a relaxer or permanent wave?",
    options: [
      "It makes the product harder to distribute evenly",
      "Abrasion creates micro-lesions in the scalp skin, allowing the chemical to penetrate more deeply and cause chemical burns",
      "It wastes the hairstylist's time during the service",
      "Scratching causes dandruff, which interferes with processing"
    ],
    correctIndex: 1,
    explanation: "Scratching or abrading the scalp — even during a shampoo — creates micro-abrasions (tiny cuts or breaks) in the skin's protective barrier. When an alkaline chemical (relaxer at pH 12–14 or waving solution at pH 8.5–9.5) is then applied, it enters through these lesions, causing chemical scalp burns. For this reason, most protocols specify that hair should NOT be shampooed immediately before applying hydroxide relaxers or that only a gentle pre-service rinse with no scalp manipulation should be performed.",
    order: 36,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Shampooing and Conditioning",
    question: "What is the difference between a conditioner (rinse-out) and a deep conditioning treatment?",
    options: [
      "They are identical — just different marketing terms",
      "A rinse-out conditioner is applied and removed immediately after shampooing to smooth the cuticle; a deep conditioner (mask or treatment) uses heat and longer processing time to penetrate the cortex and rebuild internal protein or moisture bonds",
      "Rinse-out conditioners contain protein; deep conditioners contain moisture only",
      "Deep conditioners are only for dry hair; rinse-out conditioners are for all hair types"
    ],
    correctIndex: 1,
    explanation: "Rinse-out conditioners contain cationic polymers and silicones that coat and smooth the cuticle, reducing friction and adding temporary shine — they are applied after shampoo and rinsed within 2–5 minutes. Deep conditioning treatments (protein packs or moisture masks) are formulated to penetrate the cortex, either rebuilding protein bonds (protein treatment) or replenishing moisture (humectant treatment), and require 10–30 minutes of processing, often under heat.",
    order: 37,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Shampooing and Conditioning",
    question: "A client's hair is brittle and breaking easily despite regular conditioning. A stylist suspects protein overload. What symptom distinguishes protein overload from lack of moisture?",
    options: [
      "Hair is limp and stretches excessively without returning",
      "Hair feels stiff, rigid, and lacks elasticity — stretches only slightly then breaks, and feels 'straw-like'",
      "Hair appears frizzy and has a rough texture with a spongy feel when wet",
      "Hair is oily at the roots and dry at the ends only"
    ],
    correctIndex: 1,
    explanation: "Protein overload occurs when hair absorbs an excessive amount of protein, causing the strands to become overly rigid and brittle — they feel stiff and 'straw-like' and break easily with minimal stretch. This contrasts with hygral fatigue (too much moisture) where hair feels mushy, stretches excessively without bouncing back, and has a spongy texture when wet. The treatment for protein overload is to stop protein treatments and use moisture-only products until balance is restored.",
    order: 38,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Shampooing and Conditioning",
    question: "What is the function of a chelating (clarifying) treatment, and when should it be used?",
    options: [
      "It adds protein to strengthen the hair before chemical services",
      "It removes mineral deposits (hard water calcium and magnesium ions) from the hair, restoring conductivity for chemical services and eliminating dull, rough texture",
      "It permanently straightens hair using chelating agents",
      "It removes artificial hair colour from the hair shaft"
    ],
    correctIndex: 1,
    explanation: "Chelating agents (EDTA and similar compounds) bind to mineral ions — particularly calcium and magnesium from hard water, chlorine from pools, and iron from well water — and remove them from the hair. Mineral buildup makes hair feel rough, look dull, resist chemical penetration (affecting colour results and perm processing), and behave unevenly. Chelating treatments are recommended before colour or chemical services for clients who swim regularly or live in hard-water areas.",
    order: 39,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Shampooing and Conditioning",
    question: "What is the correct water temperature for shampooing most clients?",
    options: [
      "Cold water — to stimulate the scalp and close the cuticle",
      "Hot water (above 50°C) — to open the cuticle for thorough cleansing",
      "Warm/comfortably warm water — comfortable to the client, effective for product removal without scalding or causing discomfort",
      "Room temperature water only — to prevent over-stimulation of sebaceous glands"
    ],
    correctIndex: 2,
    explanation: "Warm water (approximately 38–42°C) is appropriate for shampooing — warm enough to emulsify and rinse scalp oils and product residue effectively without scalding the scalp or the stylist's hands, and comfortable for the client. Very hot water can stimulate sebaceous glands (increasing oiliness), cause scalp irritation, and damage colour-treated hair by opening the cuticle excessively. A cool final rinse helps close the cuticle for added shine.",
    order: 40,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Shampooing and Conditioning",
    question: "A client with fine, flat hair asks for product advice after shampooing. Which type of conditioning product should be recommended?",
    options: [
      "A heavy, rich moisturising mask applied from roots to ends",
      "A volumizing leave-in conditioner or lightweight spray conditioner applied to ends only — avoiding the roots",
      "A hot oil treatment applied to the scalp",
      "The same deep conditioning mask used for coarse hair"
    ],
    correctIndex: 1,
    explanation: "Fine hair is easily weighed down by heavy conditioning products — especially at the roots, where they cause flatness and rapid re-oiling. A lightweight volumizing conditioner or leave-in spray applied to the mid-lengths and ends provides necessary moisture and detangling without weighing hair down. Heavy masks and oils applied to fine hair's roots accelerate the greasy-looking, flat appearance the client wants to avoid.",
    order: 41,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the result of cutting hair at 0° elevation (no elevation)?",
    options: [
      "A heavily layered look with lots of movement",
      "A one-length, solid form — all hair falls to the same perimeter line when the hair is combed down",
      "A short-to-long graduated effect",
      "Maximum volume at the top with minimal length at the perimeter"
    ],
    correctIndex: 1,
    explanation: "0° elevation means the hair is held straight down (combed down and cut at the natural fall). The result is a solid, blunt, one-length form where all hair falls to the same perimeter line — such as a classic blunt bob. There is no layering, maximum weight build-up at the perimeter, and no movement from layering. This is the foundation of one-length cutting.",
    order: 42,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What type of cut is produced when hair is elevated to 90° from the head and cut to a consistent guide length?",
    options: [
      "A one-length (solid) cut",
      "A uniform layer cut — all hair is the same length regardless of section location, creating maximum volume and movement",
      "A heavily graduated (stacked) bob",
      "A disconnected undercut"
    ],
    correctIndex: 1,
    explanation: "Elevating hair to 90° from the head form and cutting to a consistent guide creates a uniform layer cut. Because each section is projected directly away from the head at 90°, the cut follows the head's curvature — resulting in all hair cutting to the same length when the hair falls, creating maximum volume, movement, and a rounded shape. This is the basis of classic layered cuts.",
    order: 43,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "In a graduation (stacked) cut, what happens to the hair length from the nape upward?",
    options: [
      "Hair is the same length from nape to crown",
      "Hair gets progressively longer from nape to crown, creating a stacked, full appearance at the back",
      "Hair gets shorter from nape to crown",
      "Hair is cut in a disconnected pattern with no consistent length change"
    ],
    correctIndex: 1,
    explanation: "In a graduated (stacked) cut, the hair is elevated at 45° (between 0° and 90°). The resulting form shows progressively longer hair lengths from the nape upward — the lower sections are shorter and the upper sections are longer. This creates a stacked appearance with fullness and weight buildup at the perimeter. Classic example: the graduated bob, where the back has a rounded stacked shape above the nape.",
    order: 44,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the purpose of using a travelling guide (moving guide) in a haircut?",
    options: [
      "To keep the guide stationary and cut all sections to it",
      "To move the guide with each section so that each subsequent section uses the previously cut hair as its guide — used to create layers in long or uniform layer cuts",
      "To cut hair without using any guide for free-form results",
      "To establish a fixed perimeter length only"
    ],
    correctIndex: 1,
    explanation: "A travelling (mobile) guide moves forward with each new section — a small amount of the previously cut hair is picked up and included as the guide for the next section. This ensures consistent graduation or layering throughout the haircut as the guide progresses. It is used in uniform layer cuts, long-layer cuts, and when working around the head form. A stationary guide, by contrast, pulls all hair to one fixed point.",
    order: 45,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What effect does over-direction (pulling hair away from its natural fall direction before cutting) create?",
    options: [
      "It makes the cut perfectly even with no weight variation",
      "Over-directing hair away from the growth creates longer hair at the point of growth (weight) and shorter hair at the point of pull, building weight in one area — used intentionally for asymmetric or disconnected designs",
      "It creates maximum elevation and removes all weight",
      "It results in the same effect as 0° elevation"
    ],
    correctIndex: 1,
    explanation: "Over-direction involves pulling hair away from its natural fall direction toward a predetermined point before cutting. The hair that is pulled farthest will be cut shorter, while hair at the point of growth will be left longer, creating a weight build-up at the point of growth. This technique is used to create asymmetric designs, build volume in specific areas, or create intentional weight and disconnection in the cut.",
    order: 46,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the purpose of point cutting (tip cutting) at the ends of the hair?",
    options: [
      "To create a blunt, precise perimeter line",
      "To remove bulk from the interior of the section without affecting the perimeter length",
      "To soften and texturize the perimeter line, removing the harsh edge from a blunt cut and creating movement",
      "To create dramatic, chiselled disconnection in the cut"
    ],
    correctIndex: 2,
    explanation: "Point cutting (also called tip cutting) involves inserting the open scissors vertically into the ends of a section at an angle and making small cuts. This removes the harsh, solid line from a blunt cut, softening and texturizing the perimeter. The result is a natural-looking edge with movement and reduced bulk at the ends. It differs from slicing (which removes bulk from the body of the section) and thinning (which removes interior bulk).",
    order: 47,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "A client with a large, prominent nose wants a haircut that minimizes this feature. What styling principle should the hairstylist apply?",
    options: [
      "Cut the hair very short to draw attention away from the nose",
      "Add volume and width at the sides of the face to balance the feature and draw the eye outward from the central focal point",
      "Recommend a centre-parted style with flat hair close to the head to frame the face",
      "Add height at the crown to elongate the face"
    ],
    correctIndex: 1,
    explanation: "The principle of visual balance applies: creating width and volume at the sides of the face shifts the viewer's eye horizontally, reducing the perceived prominence of central facial features. Soft waves, volume at the cheekbones, and side-swept styles effectively balance a prominent nose. Centre partings draw the eye directly to the centre of the face, emphasising the nose. Short cuts can draw more attention to the face overall.",
    order: 48,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the difference between a razor cut and a scissors cut on fine straight hair?",
    options: [
      "Razors and scissors produce identical results on fine hair",
      "A razor cut produces softer, more diffused ends with natural movement — best used on damp fine hair; scissors create more precise, blunt ends; razors can cause thin fine hair to look even thinner if overused",
      "A razor always creates more volume than scissors",
      "Scissors cannot be used on fine straight hair"
    ],
    correctIndex: 1,
    explanation: "Razor cutting (using a feather razor or shaper) thins the hair at the ends as it cuts, creating a soft, natural, diffused edge with movement. On fine hair, this can reduce density at the ends and reduce apparent fullness — so it must be used judiciously. Scissors create a cleaner, more precise line. Razors require damp hair to slide cleanly and should not be used on dry hair as they cause breakage.",
    order: 49,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "Which technique involves cutting hair sections at varying lengths using the scissors in an open-and-close motion while sliding along the hair strand?",
    options: [
      "Point cutting",
      "Blunt cutting",
      "Slide cutting (effilating)",
      "Channelling"
    ],
    correctIndex: 2,
    explanation: "Slide cutting (effilating) involves sliding the open scissors along the hair strand while opening and closing the blades. This removes bulk and weight along the length of the section, creates movement, and produces softer, tapered ends. It is highly effective for removing weight on long, thick hair while maintaining length. It requires sharp scissors and damp hair for the blades to slide smoothly without catching.",
    order: 50,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "When performing a clipper fade, the hairstylist uses the taper lever and gradually transitions from shorter to longer lengths. What technique creates a seamless blend where the shorter length transitions invisibly into the longer hair?",
    options: [
      "Cutting with only one guard size throughout the fade",
      "Using a rocking motion with the clipper — flicking the wrist away from the head as the clipper moves upward, reducing the cutting depth gradually at the blend line",
      "Cutting all hair at the same length and then finger-combing",
      "Applying heat to the hair before clippering to make it stand up"
    ],
    correctIndex: 1,
    explanation: "A seamless clipper fade is created by gradually changing guard sizes and using a rocking or flicking motion — as the clipper travels upward, the operator flicks the wrist away from the head, feathering out the cut and preventing a harsh demarcation line. The taper lever further adjusts the cutting depth between guard changes. Overlapping guard sizes while using this technique creates the gradual, invisible transition that defines a professional fade.",
    order: 51,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the purpose of cutting a 'guide' at the beginning of a haircut?",
    options: [
      "A guide is an optional step that experienced stylists skip",
      "A guide is the initial section cut to an established length that all subsequent sections will be measured against — it ensures consistency and accuracy throughout the haircut",
      "A guide is the final perimeter cut performed at the end of the haircut",
      "A guide is a reference photo used during the consultation only"
    ],
    correctIndex: 1,
    explanation: "The guide (also called a guideline) is the first section cut to the desired length. All subsequent sections are then cut to match (or graduate from) this guide, ensuring the entire haircut is consistent in length and graduation. Without a guide, cuts become uneven and unpredictable. Interior guides create layers; perimeter guides establish the perimeter length.",
    order: 52,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "A client with naturally curly hair (Type 3B) asks for a dry cut. Why might the hairstylist prefer to cut curly hair dry rather than wet?",
    options: [
      "Dry cutting is always faster and produces the same results",
      "Cutting curly hair dry allows the stylist to see and work with the natural curl pattern and shrinkage — wet curly hair stretches and, when cut, springs back shorter than expected, leading to uneven results",
      "Dry cutting is required because curly hair damages scissors when wet",
      "Dry cutting prevents the curl from going straight during blow-drying"
    ],
    correctIndex: 1,
    explanation: "Curly hair has significant shrinkage — wet curly hair stretches up to 50% longer than its dry, natural coiled state. If cut wet, the curls spring up shorter when dry, often resulting in an unexpectedly short result. Cutting curly hair in its natural dry state allows the hairstylist to see the curl's natural fall, distribution, and behaviour — enabling a more accurate and predictable result that works with the curl pattern rather than against it.",
    order: 53,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the 'four-corners' sectioning system used for in haircutting?",
    options: [
      "To divide the head into sections for applying foil highlights",
      "To divide the head into four equal sections (front, back, left, right) using a centre parting and ear-to-ear parting, providing organised working zones for systematic cutting",
      "To identify the four skull bones relevant to cutting graduation",
      "To create four separate elevation lines for extreme layering"
    ],
    correctIndex: 1,
    explanation: "The four-corners sectioning system divides the head into four quadrants — front-left, front-right, back-left, back-right — using a centre crown-to-nape parting and an ear-to-ear parting across the top of the head. This systematic division ensures organized, balanced, and controlled cutting, prevents the stylist from losing their place, and allows easy cross-checking between sections for symmetry and balance.",
    order: 54,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "When performing a long-layered haircut designed to maintain weight and length while adding movement, which elevation and technique is most appropriate?",
    options: [
      "0° elevation, blunt perimeter cut with no interior layering",
      "45° elevation throughout for heavy graduation at the back",
      "90° elevation from the head form with a travelling guide, working from the perimeter upward",
      "180° elevation — holding hair straight up and cutting horizontally"
    ],
    correctIndex: 2,
    explanation: "A long-layered cut uses 90° elevation with a travelling guide to create uniform layers throughout — giving movement and volume while the perimeter length is maintained. The 90° projection ensures the layers follow the head's curvature. Working with a travelling guide ensures the layering is consistent throughout. This differs from a graduated cut (45°) which builds stacking, or 0° which creates a solid perimeter.",
    order: 55,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "A client has a cowlick at the front hairline. How should the hairstylist manage this during a cut?",
    options: [
      "Cut against the direction of the cowlick for a clean result",
      "Ignore the cowlick — products will control it after the cut",
      "Identify the direction the cowlick grows and cut with its natural growth direction, leaving enough weight to fall into place rather than fighting it",
      "Cut the cowlick section very short so it lies flat"
    ],
    correctIndex: 2,
    explanation: "A cowlick is a section where hair grows in a circular or opposing direction. The hairstylist must identify the direction of growth by observing how the hair falls naturally. Cutting with the cowlick — leaving sufficient length and weight for the hair to lie in the direction of natural growth — allows it to fall correctly. Cutting against it or cutting it too short causes it to stand up. Products can then enhance the result, but the cut must work with the natural growth pattern.",
    order: 56,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is 'disconnection' in the context of a haircut design?",
    options: [
      "When the comb disconnects from the hair during cutting",
      "An intentional design element where two adjacent sections are cut at significantly different lengths with no blending between them, creating a dramatic contrast",
      "When the hair is too tangled to cut smoothly",
      "A sectioning error that results in uneven layers"
    ],
    correctIndex: 1,
    explanation: "Disconnection is a deliberate design technique where sections of the cut are intentionally left unblended — creating a stark, visible contrast between longer and shorter areas. This creates bold, graphic effects and visual interest. Examples include undercuts with disconnection, where the interior is heavily layered while the exterior length is preserved, or disconnected fringes. The key is that the disconnection is intentional, not an error.",
    order: 57,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "A client requests an 'A-line' bob. What defines this shape?",
    options: [
      "A bob that is shorter at the back and longer in the front, angling from a shorter back nape to longer front sections — creating an A-shape silhouette",
      "A bob that is the same length all around, creating a square A-frame silhouette",
      "A bob with heavy fringe (bangs) that frames the face like the letter A",
      "A bob that is longer at the back and shorter at the front"
    ],
    correctIndex: 0,
    explanation: "An A-line bob is shorter at the back (nape area) and progressively longer toward the front, creating a front-to-back diagonal line that resembles the letter 'A' when viewed from the side. This is achieved by angling the cutting guide from short at the back nape to longer at the front. The silhouette frames the face with longer pieces at the cheeks. It differs from the inverted bob (which is the reverse — shorter at front, longer at back).",
    order: 58,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the function of a comb in the scissor-over-comb technique?",
    options: [
      "The comb holds the hair in place while the scissors slide over it, cutting only the hair projecting above the spine of the comb — creating seamless graduation in short haircuts without using clippers",
      "The comb is used only to detangle the hair before cutting begins",
      "The comb prevents the scissors from slipping during the cut",
      "The comb measures the exact length of hair being cut"
    ],
    correctIndex: 0,
    explanation: "Scissor-over-comb is a technique for creating smooth graduation in short haircuts. The comb lifts and projects hair from the head at a consistent angle, and only the hair extending above the top of the comb's spine is cut by the scissors passed over it. By tilting the comb gradually as it moves up the head, the hairstylist creates a smooth, graduated blend — an alternative to clippers that allows greater control, especially in sensitive areas around the ears and nape.",
    order: 59,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "When cutting hair to create a fringe (bangs), what key factor determines whether the fringe will lay flat or spring up shorter than expected after drying?",
    options: [
      "The colour of the hair",
      "The diameter of the hair shaft only",
      "The presence of natural curl, wave, or cowlick in the fringe area — curly hair will spring up significantly shorter when dry; straight hair cuts more predictably",
      "The sharpness of the scissors"
    ],
    correctIndex: 2,
    explanation: "Natural wave, curl, or cowlick in the fringe area causes the hair to spring up shorter when dry. A stylist cutting a fringe on curly or wavy hair must cut it slightly longer than the desired finished length to account for the spring. Additionally, growth direction (cowlick) affects how the fringe falls — a cowlick in the fringe must be identified and the cut planned accordingly. Straight hair has minimal shrinkage and cuts most predictably.",
    order: 60,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the 'occipital bone' and why is it significant in haircutting?",
    options: [
      "It is the prominent bone of the forehead that affects fringe placement",
      "It is the protruding bone at the back of the skull — the point above which hair tends to curve away from the head, marking a key reference point for weight line placement in bobs and graduated cuts",
      "It is the bone that forms the cheekbone, relevant to face-framing sections",
      "It is the bone behind the ear, which affects the shape of the sideburn area"
    ],
    correctIndex: 1,
    explanation: "The occipital bone is the protruding bone at the lower back of the skull (about 2 inches above the nape hairline). It is the heaviest, most visible weight-bearing point in the back of the head. In graduated cuts and bobs, the weight line (the area of maximum fullness) is typically placed at or just below the occipital bone. Hair above the occipital naturally falls away from the head; below it falls toward the nape. Weight line placement relative to this bone dramatically affects the silhouette.",
    order: 61,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "A client has thick, coarse hair and requests that bulk be removed without shortening the perimeter length. Which technique is most appropriate?",
    options: [
      "Razor cut the entire perimeter",
      "Use thinning scissors in the interior of large sections at the mid-lengths and ends, working with vertical or diagonal strokes inside the section",
      "Cut 2 inches off the perimeter to remove weight at the ends",
      "Use a flat iron to compress the hair rather than cutting"
    ],
    correctIndex: 1,
    explanation: "Thinning scissors (texturizing shears) used in the interior of sections remove bulk without changing perimeter length. Inserting the shears vertically or diagonally into the mid-lengths to ends (avoiding the root area to prevent holes) and closing removes bulk from inside the section. The perimeter guide is untouched. This technique is specifically designed for bulk removal while maintaining length — the primary goal for this client.",
    order: 62,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is 'point-to-point' or 'check cutting' after completing a haircut?",
    options: [
      "Measuring the hair with a ruler to verify exact centimetre lengths",
      "Cross-checking the cut by picking up sections from opposite sides of the head and comparing them visually and between the fingers to verify balance and symmetry",
      "Re-cutting all sections to make them slightly shorter",
      "Applying product to check how the style will look when finished"
    ],
    correctIndex: 1,
    explanation: "After completing a haircut, the hairstylist should check cut (cross-check) by picking up sections from opposite sides of the head and bringing them together between the fingers to compare length and graduation. This identifies any asymmetry, missed sections, or inconsistencies before the client is finished and dried. It is the quality assurance step of the haircutting process.",
    order: 63,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "Which of the following correctly describes the effect of natural hair texture on a blunt, solid-form haircut?",
    options: [
      "All hair textures produce the same visual result from a blunt cut",
      "Straight hair produces a clean, precise blunt line; wavy hair produces a softer, slightly irregular edge; curly hair appears shorter and can look diffuse rather than blunt due to spring and curl formation",
      "Curly hair produces the cleanest blunt line because curls align neatly",
      "Wavy hair should never be cut blunt — it always needs layering"
    ],
    correctIndex: 1,
    explanation: "Hair texture profoundly affects how a solid blunt cut appears when dry. Straight hair shows the cleanest, most graphic blunt perimeter. Wavy hair softens the line slightly as the waves fall in varying directions. Curly hair springs up significantly and the blunt perimeter is obscured by the curl's volume and irregular fall — often appearing rounded and diffuse rather than blunt. This must be considered when planning the cut and setting client expectations.",
    order: 64,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the proper tension to use when holding a hair section for cutting?",
    options: [
      "Maximum tension — pull the hair as tightly as possible for the most accurate cut",
      "No tension — allow the hair to hang freely",
      "Even, consistent, moderate tension — enough to keep the section controlled and straight for accurate cutting without stretching or distorting the natural fall",
      "Different tension for each section based on feel"
    ],
    correctIndex: 2,
    explanation: "Consistent, even tension is fundamental to accuracy in haircutting. Too much tension stretches the hair, causing it to spring back shorter than cut when released — especially significant on curly or elastic hair. Too little tension causes the section to slip and be cut unevenly. Consistent tension throughout the cut ensures each section is at the same tension, producing the balanced, even result the guide has established.",
    order: 65,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "When creating a classic one-length bob at chin level, what must the hairstylist ensure about the parting lines used to take sections?",
    options: [
      "Partings should be taken diagonally to create a natural, asymmetric result",
      "Partings should be taken horizontally (parallel to the floor), working from the nape upward, to ensure each row is cut precisely to the guide and the perimeter remains level",
      "Partings should radiate from the crown downward",
      "Random partings create the best one-length result"
    ],
    correctIndex: 1,
    explanation: "For a one-length (solid form) bob, horizontal partings taken parallel to the floor — working from the nape upward — are essential. Each horizontal section is comb down at 0° elevation and cut to the established perimeter guide. Diagonal or radiating partings would introduce inconsistency and elevation, breaking the solid weight line. The precision of horizontal sectioning is what produces the clean, level perimeter of a classic bob.",
    order: 66,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "A client requests a 'textured crop' with a disconnected undercut. What does 'disconnected undercut' mean in this context?",
    options: [
      "The lower section is tapered very close with clippers, while the upper section retains length and is NOT blended into the shorter section — the contrast is intentional",
      "The clippers are disconnected (turned off) for the upper section",
      "The perimeter line is cut at an angle to create a disconnected shape",
      "The undercut is performed with scissors only, not clippers"
    ],
    correctIndex: 0,
    explanation: "A disconnected undercut involves clippering or shaving the lower section (above the ears and at the nape) very short or to the skin, while leaving the top sections long. Crucially, there is NO blending between the short undercut and the long top — the contrast is a deliberate design choice. This differs from a traditional fade where the transition is seamlessly blended. The disconnection creates a high-contrast, contemporary graphic effect.",
    order: 67,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is 'dry cutting' as an approach for textured or curly hair, and what is its primary advantage?",
    options: [
      "Cutting with dry, unsharpened scissors to create a natural frayed edge",
      "Cutting the hair in its natural dry state, allowing the stylist to work with the curl's actual pattern, spring, and distribution",
      "Cutting hair after applying dry shampoo to add grip",
      "Cutting with a dryer blowing on the hair during the service"
    ],
    correctIndex: 1,
    explanation: "Dry cutting for curly hair means cutting after the hair has been detangled and allowed to dry completely in its natural curl pattern — without straightening or blowing dry. The advantages are: the stylist sees exactly how the curls fall and cluster, can remove bulk and balance the shape where needed, and avoids the spring-back problem (cutting too short). The result works with the natural curl, not against it. Many specialists dry-cut curly hair to tailor the shape uniquely to each curl pattern.",
    order: 68,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "When using the 'clipper-over-comb' technique in the occipital area, what is the function of the clipper's angle relative to the head?",
    options: [
      "The clipper must always be parallel to the floor regardless of the head position",
      "The clipper is held parallel to the comb and the comb angle controls the graduation — tilting the comb closer to the head as it moves upward creates a tighter blend; holding it farther away creates a looser, longer blend",
      "The clipper angle determines the width of each hair section",
      "The clipper angle has no effect — only the guard size matters"
    ],
    correctIndex: 1,
    explanation: "In clipper-over-comb, it is the comb's angle (not the clipper's position relative to the floor) that controls the graduation. As the comb moves up the head, gradually tilting its spine away from the scalp increases the amount of hair projecting above the comb — producing a longer result. Tilting the spine closer to the scalp reduces projection — producing a tighter, shorter result. This angle control creates the smooth graduation of a taper or fade in the occipital region.",
    order: 69,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the primary difference between a 'layer' and 'graduation' in haircutting?",
    options: [
      "Graduation and layering are identical terms for the same technique",
      "Layers are created by elevating hair above 90° and cutting; graduation uses 90° elevation only",
      "Graduation (45° elevation) builds weight at the perimeter with progressively longer hair toward the interior; uniform layers (90°) remove weight throughout and create movement without building a perimeter weight line",
      "Graduation always removes more hair than layering"
    ],
    correctIndex: 2,
    explanation: "Graduation (45° elevation) creates a stacked, weight-building effect where shorter hair at the nape progressively transitions to longer hair higher up — the perimeter appears heavy and full. Uniform layering (90° elevation) cuts all hair to the same length from the head form, removing weight throughout and creating movement and volume without a stacked perimeter. Both techniques are fundamentally different in their visual effect and construction.",
    order: 70,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "A client with a very round face wants the illusion of a longer, more oval face shape. Which haircut approach best achieves this?",
    options: [
      "Add maximum volume at the sides through heavy graduation and layers at the cheekbones",
      "Create height at the crown and minimize width at the sides — using lengthening vertical layers and avoiding excessive side volume",
      "Cut hair very short and uniform across the head",
      "Create a wide, horizontal fringe that emphasises the width of the forehead"
    ],
    correctIndex: 1,
    explanation: "A round face has width equal to or greater than its length. To create the illusion of an oval (longer) face, the hairstylist should: add height and volume at the crown to elongate, minimize volume at the widest points of the face (cheekbones), use lengthening vertical layers, and avoid styles that add horizontal width at the sides. A centre part with soft volume at the crown is classic. A wide horizontal fringe emphasises width — the opposite of the goal.",
    order: 71,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "When sectioning hair for a haircut, what is the purpose of the ear-to-ear parting across the top of the head?",
    options: [
      "To separate the colour-treated hair from the natural-growth hair",
      "To divide the top (front) sections from the back sections, creating a systematic working order and preventing over-direction of sections across the divide",
      "To identify the position of the occipital bone",
      "To determine the client's natural part line"
    ],
    correctIndex: 1,
    explanation: "The ear-to-ear parting runs over the top of the head from ear to ear, dividing the head into a front upper section and a back lower section. This creates a clear boundary that prevents inadvertent over-direction of hair from the back to the front (which would create uneven results), allows the hairstylist to work each section systematically, and is the foundation of the four-corners sectioning system used in most cutting techniques.",
    order: 72,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What special consideration is required when cutting hair around the ears and sideburn area?",
    options: [
      "This area should always be left uncut to avoid damaging the ear",
      "The hairstylist must identify and work with the natural growth direction around the ear (which often grows forward or in multiple directions), fold the ear down for safety, and use precision cutting or a detail clipper for clean outlining",
      "Always use a razor in this area for a smooth result",
      "Cut this area first before any other sectioning for consistency"
    ],
    correctIndex: 1,
    explanation: "The area around the ear has complex, often multi-directional hair growth. The ear must be gently folded down during cutting to protect it and gain access to hair growing above and behind it. Growth direction must be observed so that sideburn hair is cut with its natural growth pattern. Detail (trimming) clippers or scissors are used to outline the perimeter cleanly. Razor use in this sensitive area risks cutting the skin.",
    order: 73,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "A male client requests a 'skin fade' where the hair goes from skin (0 guard) at the bottom to longer hair at the top. What is the critical area where the hairstylist must avoid a harsh line?",
    options: [
      "The crown — where the fade finishes at the longest section",
      "The blend line — the transition zone where the very short clipped area meets the longer hair above, which must be feathered seamlessly with no visible demarcation",
      "The fringe area — where the hair sits forward at the front",
      "The nape — which is always blended the same way in every fade"
    ],
    correctIndex: 1,
    explanation: "The blend line is the most technically challenging element of a skin fade. This is the transition zone where the skin (0 guard) or very short base meets the progressively longer hair above. Without proper technique (using the taper lever, transitional guards, and scissor-over-comb or clipper-over-comb), a harsh horizontal line (demarcation) appears. A seamless blend requires overlapping guard sizes and feathering the transition so no distinct boundary is visible.",
    order: 74,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Facial and Nape Hair",
    question: "What is the correct technique for outlining a beard using a straight razor?",
    options: [
      "Apply lather to the entire beard area and remove all hair with the razor in a single session",
      "Comb and trim the beard with scissors first to establish shape, then use the razor to define crisp, clean boundary lines (neckline, cheek lines) in the direction of hair growth with a stretched, taut skin",
      "Use clippers only — razors are not used for beard outlining",
      "Apply no product and use the razor dry for the most precise line"
    ],
    correctIndex: 1,
    explanation: "Beard outlining with a straight razor requires: (1) establishing the shape with scissors or clippers first, (2) applying a light lather or shave gel to the outline areas, (3) stretching the skin taut with the non-dominant hand for safety and a clean glide, and (4) using precise, controlled strokes with the razor at a consistent angle along the established boundary lines. Shaving against the grain in sensitive areas risks irritation; shaving with the grain at the outline gives the clearest line.",
    order: 75,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Facial and Nape Hair",
    question: "A male client has a dense, full beard he wants shaped to complement his square jaw. What approach enhances his facial balance?",
    options: [
      "Keep the beard the same length at the chin and jaw line to emphasise the square shape",
      "Trim the beard slightly shorter at the jawline angles (corners) and leave more length and fullness at the chin — creating a more rounded or oval beard silhouette that softens the square jaw",
      "Remove all beard hair on the cheeks and keep only chin hair",
      "Cut the beard very short and uniform to emphasize facial features"
    ],
    correctIndex: 1,
    explanation: "A square jaw has strong, prominent angles at the jaw corners. To soften and balance this, the beard is shaped to have slightly less volume and angular prominence at the jaw corners while maintaining or adding fullness at the chin — creating a rounded or oval beard silhouette. This distributes the visual weight away from the corners and elongates the face shape, providing a more balanced appearance.",
    order: 76,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Facial and Nape Hair",
    question: "When trimming a male client's neckline, what is the most important guideline for determining where the natural neckline should fall?",
    options: [
      "The neckline should always be cut as high as possible to look professional",
      "The neckline should be placed at the two-finger width above the natural hairline, using a small 'V' or 'U' shape following the client's natural neckline growth",
      "The neckline should always follow a perfectly straight horizontal line",
      "Cut the neckline to the lowest natural hair growth regardless of shape"
    ],
    correctIndex: 1,
    explanation: "A natural-looking neckline is placed approximately two finger-widths above the client's natural (lowest) neck hairline growth. This avoids cutting into the natural hairline (which grows back coarser and requires frequent trimming) while providing a clean, defined perimeter. The shape (V, U, or square) follows the client's natural neckline growth pattern for the most flattering and longest-lasting result. High-cut necklines require more frequent maintenance.",
    order: 77,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Facial and Nape Hair",
    question: "What is the difference between a 'blocked' and a 'tapered' neckline?",
    options: [
      "They are the same — just regional terminology differences",
      "A blocked neckline cuts a straight horizontal line across the natural hairline; a tapered neckline uses the clippers with a taper lever to fade the natural hairline into the skin gradually without a defined edge",
      "A blocked neckline is for women; a tapered neckline is for men",
      "A tapered neckline is more formal; a blocked neckline is casual"
    ],
    correctIndex: 1,
    explanation: "A blocked neckline creates a clean, straight horizontal line across the back neckline using clippers or scissors — the perimeter is defined and sharp. A tapered neckline uses the taper lever to gradually reduce the hair at the neckline into the skin (no defined line), blending naturally into the client's natural hairline. Tapered necklines are more natural-looking and lower maintenance; blocked necklines are sharp but show regrowth more quickly.",
    order: 78,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Facial and Nape Hair",
    question: "A client requests eyebrow trimming as an add-on service. What is the safest method for trimming eyebrow hair?",
    options: [
      "Use a straight razor to outline and remove stray hairs precisely",
      "Comb the brow hairs upward with a small comb and trim any hairs that extend beyond the natural brow line using small scissors — wax or tweeze stray hairs outside the brow shape",
      "Use thinning scissors throughout the entire eyebrow to reduce density",
      "Apply bleach to lighten the brow colour before trimming"
    ],
    correctIndex: 1,
    explanation: "Safe eyebrow trimming: comb brows upward with a clean mascara wand or brow comb to identify hairs exceeding the natural brow length, trim these extended hairs with small, pointed shear tips. Stray hairs outside the brow shape are removed by waxing, threading, or tweezing — not by razor, which risks cutting the skin. Thinning scissors would reduce density too aggressively. The goal is to refine, not dramatically alter, the natural brow shape.",
    order: 79,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Facial and Nape Hair",
    question: "When trimming a moustache, what technique ensures a clean, even upper lip line without cutting the moustache too short?",
    options: [
      "Cut horizontally across the entire moustache at once for speed",
      "Comb the moustache hair downward over the upper lip, trim only the hair extending below the upper lip line using scissors, then comb it to its natural position to check the shape",
      "Use clippers with no guard directly on the moustache area",
      "Have the client smile widely then cut — this shows the natural shape"
    ],
    correctIndex: 1,
    explanation: "For moustache trimming: (1) comb the moustache hair downward to show which hairs extend below the upper lip, (2) trim precisely along the upper lip line with scissors — only the hairs projecting below the lip, (3) comb back to natural position and check for balance. Cutting the moustache while it is combed to its natural position without combing down first risks cutting too much hair because the hair that lies against the lip is not visible. This step-by-step approach avoids removing too much length.",
    order: 80,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Facial and Nape Hair",
    question: "During neckline shaving with a straight razor, what is the primary safety concern and how is it managed?",
    options: [
      "Speed — the faster the stroke, the cleaner the shave",
      "The risk of cutting the skin — managed by holding the razor at the correct angle (30–45°), using short, controlled strokes, keeping the skin taut with the non-dominant hand, and maintaining a sharp, clean blade",
      "Razor temperature — the blade must be warmed before use",
      "Applying too much shave cream, which obscures the hairline"
    ],
    correctIndex: 1,
    explanation: "Straight razor neckline shaving carries a risk of skin laceration. Safety is maintained by: holding the blade at 30–45° to the skin (not perpendicular), using short, controlled strokes with the grain of hair growth, keeping the skin taut at all times with the non-dominant hand (to prevent the razor riding into a fold), and using a clean, sharp blade (dull blades require more pressure, increasing cut risk). A stropped, well-maintained blade is essential.",
    order: 81,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "What is the purpose of a setting lotion (wet setting foam or liquid) applied before roller setting?",
    options: [
      "To chemically straighten the hair for a smooth set",
      "To provide temporary hold, body, and help the set last longer by stiffening the temporary hydrogen bonds formed as the hair dries around the roller",
      "To condition and moisturise the hair while it sets",
      "To replace the need for a neutralizer after roller setting"
    ],
    correctIndex: 1,
    explanation: "Setting lotions are styling aids that coat the hair shaft to reinforce the temporary change in shape created by wet setting. They work with the hydrogen bonds that form as wet hair dries in the shape of the roller (or other setting tool). The setting agent stiffens the hydrogen bonds slightly, improving hold and longevity of the set. Without setting lotion, the style has less memory and falls more quickly — especially in humid conditions.",
    order: 82,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "When performing a wet roller set, what is the correct roller size for producing tight, defined curls?",
    options: [
      "Large rollers (2 inch diameter or more)",
      "Small rollers (3/4 inch or less diameter) — smaller roller = tighter curl",
      "Magnetic rollers produce the tightest curls regardless of size",
      "All roller sizes produce the same curl tightness — only the product formula affects curl size"
    ],
    correctIndex: 1,
    explanation: "The principle of wet roller setting: the smaller the diameter of the roller, the tighter the curl produced when the hair dries. Large rollers produce loose waves and volume. Small rollers produce tight, defined curls or waves. Medium rollers produce medium waves. This relationship applies because the curvature of the roller sets the hair in a curve — a tighter curve (smaller roller) sets the hydrogen bonds into a tighter coil.",
    order: 83,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "What must be ensured about the base section size when placing a roller for wet setting?",
    options: [
      "The base section can be any size — it does not affect the result",
      "The base section should not be wider than the roller and should be no longer than the diameter of the roller — ensuring the hair wraps smoothly and the roller sits on its own base for maximum volume at the root",
      "The base section must always be exactly twice the roller diameter",
      "No base sectioning is needed — the hair is simply wound around each roller randomly"
    ],
    correctIndex: 1,
    explanation: "The base section width should not exceed the length (diameter) of the roller, and the depth of the section should not exceed the diameter of the roller. This ensures the entire section wraps smoothly around the roller without overcrowding or missing coverage. Proper base size also determines base control: a section size equal to the roller diameter creates volume at the base (on-base position). Oversized sections cause gaps in the set; undersized sections waste time.",
    order: 84,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "A client wants a spiral perm-like curl effect created with wet setting. Which roller placement pattern creates alternating curl directions for a more natural appearance?",
    options: [
      "All rollers placed in the same direction using a brick-lay (offset) pattern",
      "All rollers placed in the same direction top to bottom",
      "Alternating rollers placed toward the face and away from the face in each row — creating directional variation",
      "Spiral wrapping vertically using pin curls only"
    ],
    correctIndex: 0,
    explanation: "A brick-lay (staggered, alternating offset) roller placement mimics the offset pattern of bricklaying. Rollers in each row are staggered from the row above and below — this prevents a consistent straight parting from appearing in the finished set, creates a more natural flow, and allows curls from adjacent rows to blend together. It also helps reduce the appearance of root sections when the set is finished and dressed out.",
    order: 85,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "What is a finger wave and on which hair lengths and textures does it work best?",
    options: [
      "A modern wave created with a curling iron on dry hair — works best on long, coarse hair",
      "A sculptural pattern of alternating ridges and waves shaped by the fingers, comb, and waving lotion into damp hair — works best on short to medium-length, fine to medium straight hair",
      "A braiding technique that creates a wave pattern — works best on thick coily hair",
      "A blow-dry technique for creating beach waves — works best on any length"
    ],
    correctIndex: 1,
    explanation: "Finger waving is a classic wet-setting technique where the hairstylist uses fingers, a fine-tooth comb, and waving lotion to sculpt alternating ridges (high points) and waves (hollow points) into damp hair. The pattern is secured with pins or clips until dry. It works best on short to medium, smooth or slightly wavy hair with enough length to follow the pattern, and fine to medium texture that holds the sculpted shape without the weight of coarse or long hair collapsing the waves.",
    order: 86,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "How does a diffuser attachment change the effect of a blow dryer on curly or wavy hair?",
    options: [
      "A diffuser concentrates airflow into a single stream for faster drying",
      "A diffuser disperses airflow over a wide area, reducing velocity and turbulence — preserving the curl or wave pattern, enhancing definition, and minimizing frizz",
      "A diffuser heats the air to a higher temperature for faster setting",
      "A diffuser is used only with straightening techniques"
    ],
    correctIndex: 1,
    explanation: "A diffuser is a bowl-shaped attachment with multiple prongs or fingers that disperses the airflow from the blow dryer over a wider, softer area with significantly reduced velocity. This gentle drying action preserves the curl's natural clump and coil pattern without disturbing it, defines curls, reduces frizz (by not separating the curl with high-velocity air), and maintains the shape that a concentrated nozzle would blow out. Ideal for type 2–4 wavy and curly hair.",
    order: 87,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "What is the correct sequence for blow-drying a haircut to maximize volume at the root?",
    options: [
      "Dry ends first, then mid-lengths, then roots in any direction",
      "Direct the airflow from the nozzle downward along the cuticle and dry from roots to ends — at the root, use the round brush to lift and dry the hair against its natural fall direction, then direct downward for cuticle smoothing at the ends",
      "Apply maximum heat to the lengths first and finish by blasting the roots with cold air",
      "Flip the head upside down, dry roughly without direction, then flip upright and apply product"
    ],
    correctIndex: 1,
    explanation: "For maximum volume during blow-drying: work from roots to ends, lifting sections with a round brush opposite to the natural fall direction (creating lift at the root) while directing the dryer nozzle downward along the hair (cuticle smoothing). Complete each section with a burst of cool air to set the shape in the hydrogen bonds. The cool shot closes the cuticle, sealing in the smoothness and locking in the volume created by the directional drying.",
    order: 88,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "What is 'scrunching' as a drying technique, and for which hair type is it most appropriate?",
    options: [
      "Wrapping the hair tightly in a towel and squeezing — for all hair types",
      "Gathering sections of hair and squeezing upward toward the scalp (scrunching) while diffusing — for wavy and curly hair to encourage and define the natural curl pattern without frizz",
      "Pulling the hair flat against the head and pressing with a brush — for fine, straight hair",
      "Combing the hair upward with a wide-tooth comb while drying — for coarse, thick hair"
    ],
    correctIndex: 1,
    explanation: "Scrunching involves gathering sections of wet, product-applied curly or wavy hair and squeezing it upward toward the scalp in a cupping motion — either with the hands or while holding a diffuser beneath the hair. This encourages the natural curl clump to form, defines waves and curls, and minimizes frizz by avoiding brushing or combing during drying. Pulling or brushing curly hair while it dries breaks the curl clumps and causes frizz.",
    order: 89,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "What is the purpose of using a 'concentrator' (nozzle) attachment on a blow dryer?",
    options: [
      "To reduce heat output and prevent damage to fine hair",
      "To diffuse airflow for gentle drying of curly hair",
      "To concentrate and direct airflow into a narrow stream — allowing precision control of direction for smooth blow-drying and directing air down the cuticle for shine",
      "To increase the volume of air output for faster drying of thick hair"
    ],
    correctIndex: 2,
    explanation: "A concentrator nozzle narrows the blow dryer's airflow into a focused, directional stream. This allows the hairstylist to direct air precisely down the hair shaft following the brush, smoothing the cuticle and creating a sleek, smooth finish with shine. It is the essential attachment for smooth blow-dries, Brazilian blowouts, and precision directional drying. For curly hair, the diffuser is preferred as the concentrator's high velocity disrupts curl formation.",
    order: 90,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "When applying mousse to wet hair before styling, what is the correct application method?",
    options: [
      "Apply mousse directly to the scalp and massage in for maximum root volume",
      "Dispense a golf-ball to apple-sized amount of mousse into the palm, emulsify between both palms, and work through the hair from roots to ends — scrunching into the hair for curly styles or combing through for smooth styles",
      "Apply mousse only to the hair ends to avoid weighing down the roots",
      "Apply mousse to dry hair at the end of the style for extra hold"
    ],
    correctIndex: 1,
    explanation: "Mousse is a wet styling product applied before drying. The correct method: dispense an appropriate amount (varies by hair length and density — golf ball for short, apple for long), emulsify between palms to break down the foam, and distribute evenly from roots to ends. For curly hair, scrunch in from below; for smooth styles, comb through from root to end. Applying only to ends leaves roots unsupported; applying to dry hair is ineffective as hydrogen bonds are already set.",
    order: 91,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "What is a round brush's primary function when used with a blow dryer?",
    options: [
      "To detangle the hair before shampooing",
      "To create a smooth, voluminous blow-dry — the barrel adds curl and direction while the bristles smooth the cuticle; used to create volume, bend, and body in the hair as it dries",
      "To backcomb the hair for added height in updos",
      "To distribute product from roots to ends evenly before a roller set"
    ],
    correctIndex: 1,
    explanation: "A round brush used with a blow dryer serves multiple functions: the cylindrical barrel rolls under or over the hair section creating direction (curl, bend, smoothness), while the bristles grip and smooth the cuticle as heat passes through or over the section. The combination creates volume at the root (when the brush lifts the section), a smooth, closed cuticle for shine, and a shaped bend or curl at the ends. Barrel diameter determines the tightness of the bend — smaller barrels create tighter curls.",
    order: 92,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "After completing a roller set or wet set, why must the hair be completely dry before removing the rollers or pins?",
    options: [
      "Removing rollers early has no effect on the finished result",
      "If the hair is removed before fully dry, the hydrogen bonds — which form as the hair dries in the set shape — are not fully established, and the set will not hold, leaving limp, barely defined results",
      "Removing rollers before drying damages the scalp",
      "Partial drying creates more defined curls than complete drying"
    ],
    correctIndex: 1,
    explanation: "The scientific basis of wet setting is the temporary rearrangement of hydrogen bonds. When wet hair is placed in a shaped position (around a roller, in a finger wave) and dried, the hydrogen bonds re-form in the new shape as the water evaporates. If rollers are removed before the hair is completely dry, incomplete hydrogen bond formation results in a weak, fading set. The hair must be completely dry — 100% of the water must evaporate — before removing setting tools.",
    order: 93,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "What is a 'pin curl' and what factor determines the resulting curl size?",
    options: [
      "A curl created by wrapping hair around a heated curling iron barrel",
      "A small curl formed by winding a section of wet hair in a circular pattern and securing with a clip or pin — the diameter of the circle formed by the curl determines its size when dry",
      "A curl created by backcombing the hair and pinning it at the root",
      "A curl formed by braiding wet hair and unravelling after drying"
    ],
    correctIndex: 1,
    explanation: "A pin curl is a wet-set curl formed by winding a small section of hair in a circular or flat coil and securing flat against the head with a pin or clip. The diameter of the wound circle determines the finished curl size — a small diameter produces a tight curl; a large diameter produces a wide wave. Pin curls can be placed in various directions and orientations (clockwise, counterclockwise, flat, stand-up) to produce different patterns and effects in the finished style.",
    order: 94,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "What is the correct temperature range for a flat iron used on fine, chemically treated hair?",
    options: [
      "230–260°C (450–500°F) — maximum heat for fastest results",
      "120–160°C (250–325°F) — lower temperatures for fine or damaged hair to prevent heat damage",
      "180°C (350°F) is appropriate for all hair types and textures",
      "The temperature setting is irrelevant as long as the passes are quick"
    ],
    correctIndex: 1,
    explanation: "Heat damage is cumulative and irreversible. Fine or chemically treated hair has a thinner cuticle and cortex with less protein density — it reaches damaging temperatures more quickly. A lower temperature setting (120–160°C) achieves straightening for fine hair without burning or denaturing the keratin protein. Coarse, resistant hair may require higher temperatures (175–200°C). Maximum heat (230°C+) on fine or damaged hair causes immediate irreversible cortex damage.",
    order: 95,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "When using a curling iron to create defined spiral curls, which wrapping direction technique produces the most uniform result?",
    options: [
      "Wrap all sections in the same direction (all toward or all away from face) for the entire head",
      "Alternate the wrapping direction on each section across the head",
      "Wrap only the ends of each section, leaving the mid-lengths straight",
      "Apply maximum tension to each section and hold for 60 seconds per curl regardless of hair texture or condition"
    ],
    correctIndex: 0,
    explanation: "For defined, uniform spiral curls, consistent wrapping direction throughout is essential. Wrapping all sections in the same direction (all toward the face or all away from the face, or alternating by row in a deliberate pattern) ensures the curls follow a consistent flow. Random alternating direction produces inconsistent curl directions that create a messy rather than defined result. Each section is wound from the roots or mid-lengths to the ends around the barrel.",
    order: 96,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "What is the purpose of applying a heat protectant product before using thermal tools (flat iron, curling iron, blow dryer)?",
    options: [
      "Heat protectants chemically straighten the hair, making thermal tools more effective",
      "Heat protectants coat the hair shaft with a film of silicone or polymer that reduces direct heat transfer to the cortex, reducing the risk of protein denaturation and moisture loss",
      "Heat protectants allow the use of higher temperatures without any risk of damage",
      "Heat protectants add fragrance to the hair during thermal styling"
    ],
    correctIndex: 1,
    explanation: "Heat protectants work by forming a protective coating on the hair shaft that acts as a thermal buffer — reducing the rate of heat transfer to the hair's cortex and cuticle. They typically contain silicones (dimethicone, cyclopentasiloxane) and/or PVP polymers that can withstand high temperatures. They significantly reduce protein denaturation (irreversible structural damage), moisture loss, and cuticle lifting caused by thermal tools — especially important for fine, colour-treated, or previously damaged hair.",
    order: 97,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "What is the backcombing (teasing) technique and what effect does it create?",
    options: [
      "Combing hair downward from ends to roots — used to remove tangles",
      "Combing or raking small amounts of hair backward from the ends toward the root, creating a compact, tangled mass of hair at the root area — used to create volume, height, and support for updos and elevated styles",
      "Combing hair in an upward direction using a wide-tooth comb to add volume",
      "Applying hairspray while combing — a combined product-and-technique for hold"
    ],
    correctIndex: 1,
    explanation: "Backcombing (teasing or ratting) is performed by holding a small section of hair upright and combing from mid-lengths toward the roots in small, firm strokes — creating a matted, interlocked base of hair at the root region. This provides height, volume, and structural support for updos and elevated styles that would otherwise collapse. To avoid damage, back-combing should be gentle and on healthy hair only; removing teasing requires patient detangling from ends inward.",
    order: 98,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "What is the function of hairspray as a finishing product, and what is the difference between a light-hold and a maximum-hold hairspray?",
    options: [
      "All hairsprays provide the same hold — differences are only in fragrance",
      "Hairspray creates a film over the finished style to maintain shape; light-hold sprays create a flexible, touchable film suitable for everyday styles; maximum-hold sprays create a rigid, stiff film for styles requiring maximum longevity such as updos or theatrical work",
      "Hairspray conditions the hair while providing hold",
      "Hairspray should be applied before all other styling products as a base coat"
    ],
    correctIndex: 1,
    explanation: "Hairspray is a finishing product sprayed over the completed style. It deposits a polymer film (PVP, PVP/VA) on the hair surface that maintains the style's shape. Light-hold sprays form a flexible film that allows movement and can be brushed through — for soft, wearable everyday styles. Maximum-hold sprays form a rigid, stiff film that locks the style in place — used for structured updos, competitive styling, or theatrical work where longevity and firmness are paramount.",
    order: 99,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "A client requests a sleek, smooth updo for a formal event. What products and tools are essential?",
    options: [
      "Dry shampoo, thinning scissors, and a wide-tooth comb",
      "Smoothing serum or anti-frizz cream (applied to damp hair before drying), a bristle brush for final smoothing, bobby pins and hair pins for structure, and a strong-hold hairspray for finishing",
      "Maximum-hold gel applied to wet hair, followed by air-drying and pinning",
      "Only mousse and a blow dryer — no pins or spray needed"
    ],
    correctIndex: 1,
    explanation: "A sleek formal updo requires: (1) smoothing product (serum, cream) applied damp to reduce frizz and add shine, (2) a smooth blow-dry with a boar-bristle brush to close the cuticle, (3) sectioning and pinning structure using bobby pins and hair pins — bobby pins grip sections, pins secure the style invisibly, (4) strong-hold hairspray to lock the finished style and manage flyaways. Without proper product and pinning technique, the style will not hold through an event.",
    order: 100,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "What is the purpose of using a pomade versus a mousse when finishing a style?",
    options: [
      "They are interchangeable — both work identically on all hair types",
      "Pomade is a heavy, oil- or wax-based product that provides strong hold, definition, and shine with a wet or polished finish — best for short, defined styles; mousse is a lightweight foam applied to wet hair to provide flexible hold, body, and support for volume-based or curl-enhancing styles",
      "Mousse is only for curly hair; pomade is only for straight hair",
      "Pomade opens the cuticle; mousse closes it"
    ],
    correctIndex: 1,
    explanation: "Pomades (oil-based, wax-based, or water-based) provide hold and definition with a shiny, polished, or textured finish — applied to dry or slightly damp hair. Ideal for short styles (quiffs, pompadours, defined beards, slick-backs). Mousse is a wet-apply foam that provides flexible hold, volume, and curl enhancement without heaviness — best applied to wet hair before drying. Using pomade on long, fine hair weights it down; using mousse on an updo provides insufficient structural hold.",
    order: 101,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "When using a flat iron to create a sleek, straight result, which technique minimizes the number of passes required and reduces heat exposure?",
    options: [
      "Use maximum heat and fast passes, repeating until straight",
      "Ensure the hair is completely dry, section thinly (no thicker than the width of the flat iron plate), apply heat protectant, and glide the iron slowly and steadily in one smooth pass from root to end — maintaining consistent tension and angle",
      "Use the flat iron on wet hair to save time drying first",
      "Apply no product and use maximum tension while ironing"
    ],
    correctIndex: 1,
    explanation: "Minimizing flat iron passes reduces cumulative heat damage. Best technique: section hair thinly enough to fit within the iron plates without overflow, apply heat protectant, and glide the iron in one slow, steady pass from close to the root to the ends — maintaining consistent pressure and speed. One thorough pass on a thin section is far more effective (and less damaging) than multiple rushed passes on thick sections. Damp hair in a flat iron causes 'steam damage' — always completely dry first.",
    order: 102,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "What is braiding and how does the three-strand braid differ from a French braid?",
    options: [
      "They are the same braid — 'French braid' is just a regional name for a three-strand braid",
      "A three-strand braid is formed entirely from three sections hanging freely from a fixed starting point; a French braid incorporates additional hair from the scalp into each crossing motion, anchoring the braid to the head and creating an on-the-scalp, seamlessly integrated effect",
      "French braids use four strands; three-strand braids use three",
      "A three-strand braid is tighter than a French braid"
    ],
    correctIndex: 1,
    explanation: "A three-strand (plait) braid starts at one point and crosses three free-hanging sections — the resulting braid hangs away from the scalp. A French braid starts at the hairline or crown and with each crossing motion, a small section of unbraided hair is picked up and incorporated into the strand before crossing — anchoring the braid to the scalp and creating a herringbone-like integrated pattern that lies flat against the head. The Dutch braid is the reverse (crossing under rather than over).",
    order: 103,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "When creating an updo for a client with a wedding, what is the most important first step?",
    options: [
      "Begin pinning immediately to save time",
      "Complete a thorough consultation including viewing inspiration photos, determining the desired style, assessing hair texture and length for feasibility, discussing the timeline and scheduling a trial run",
      "Apply maximum-hold gel to the hair before even discussing the style",
      "Trim the hair on the wedding day to freshen the cut before styling"
    ],
    correctIndex: 1,
    explanation: "A bridal updo is a high-stakes service. The most critical first step is consultation — including reviewing inspiration photos for mutual vision, assessing hair characteristics (length, texture, density, health) to determine what is achievable, discussing the dress neckline and accessories, setting the timeline, and scheduling a bridal trial run well before the wedding day. A trial run identifies any needed adjustments and ensures both client and stylist are fully aligned on the style before the event.",
    order: 104,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "What is the function of dry shampoo as a styling/finishing product?",
    options: [
      "It cleanses the hair as effectively as a water-and-shampoo wash",
      "It absorbs excess sebum (scalp oil) at the root area, refreshes the hair between washes, adds texture and grip for styling, and extends the life of a style — it does not replace a proper shampoo",
      "It conditions the ends of dry hair to prevent breakage",
      "It adds shine to the hair when sprayed on the mid-lengths and ends"
    ],
    correctIndex: 1,
    explanation: "Dry shampoo contains starch, talc, or kaolin clay that physically absorbs excess scalp oil (sebum) and sweat when sprayed at the roots. This removes the greasy, flat appearance of unwashed hair, adds texture and grip for second-day styling, and extends the time between shampoo washes. It is not a substitute for shampooing — it does not remove scalp bacteria, chemical residue, or deep-seated buildup, and regular overuse can cause product accumulation at the follicle.",
    order: 105,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "A client has short, fine, straight hair and wants maximum volume for a special occasion. Which combination of products and techniques will best achieve this?",
    options: [
      "Apply heavy serum to roots and ends, blow-dry flat, then backcomb aggressively",
      "Apply volumizing mousse to damp roots, blow-dry using a round brush with lift at the roots, use a medium-hold spray, and backcomb lightly at the crown for additional height",
      "Air-dry and apply maximum-hold gel while wet for long-lasting volume",
      "Apply pomade to dry hair and backcomb heavily — no blow-dry needed"
    ],
    correctIndex: 1,
    explanation: "For fine, straight hair requiring maximum volume: (1) volumizing mousse applied at the roots provides body and hold at the root zone — the area where fine hair collapses most; (2) blow-drying with a round brush while directing air upward at the root lifts and dries the root with volume built in; (3) light backcombing at the crown adds height; (4) medium-hold hairspray maintains the volume without weighing the fine hair down. Heavy serums and oils would immediately flatten fine hair.",
    order: 106,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "When applying thermal protectant before using a flat iron, what should the hairstylist verify before pressing the iron on the hair?",
    options: [
      "That the iron is at maximum temperature to process the protectant",
      "That the hair is completely dry — applying a flat iron to product-applied damp hair creates steam within the cortex, causing severe internal damage called 'bubble hair'",
      "That no protectant is used, as it reduces the iron's effectiveness",
      "That the product is oil-based for maximum heat resistance"
    ],
    correctIndex: 1,
    explanation: "'Bubble hair' is a form of severe heat damage where moisture trapped inside the hair shaft is superheated by a flat iron, turning to steam and creating internal bubbles that rupture the cortex. Even a small amount of residual moisture or a wet heat protectant that hasn't dried can cause this. The hair must be 100% dry before pressing with any thermal tool. Always pass the iron through the air first to listen/feel for any sizzling — an indicator of moisture.",
    order: 107,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "A client with naturally coily Type 4 hair wants a wash-and-go style with maximum definition. Which product application technique best supports this goal?",
    options: [
      "Apply a light serum to dry hair and comb through aggressively to separate coils",
      "Apply a leave-in conditioner, then a curl cream, then a gel (the LOC or LCO method) section by section to soaking-wet hair, smooth each section without disturbing the curl clump, and diffuse or air-dry without touching until fully dry",
      "Apply maximum-hold mousse to dry hair and scrunch upward",
      "Blow-dry on high heat first then apply curl cream to reactivate coils"
    ],
    correctIndex: 1,
    explanation: "Type 4 coily hair benefits from the LOC (Leave-in, Oil, Cream) or LCO method applied to soaking-wet hair — the water provides slip and hydration while the layered products seal moisture in and define curl clumps. Products are applied section by section, smoothing gently to encourage the curl to clump together. The hair must not be disturbed until completely dry (diffuse or air-dry) — any manipulation while drying causes frizz by separating curl clumps. The 'cast' from gel, once dry, is scrunched out gently.",
    order: 108,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "What is the active ingredient in most alkaline (cold wave) permanent waving solutions, and at what pH do they typically operate?",
    options: [
      "Hydrogen peroxide at pH 3–4",
      "Ammonium thioglycolate at pH 8.5–9.5",
      "Sodium hydroxide at pH 12–14",
      "Cysteamine at pH 6–7"
    ],
    correctIndex: 1,
    explanation: "Alkaline (cold wave) permanent waving solutions use ammonium thioglycolate (ATG) as the active reducing agent at pH 8.5–9.5. The alkaline pH swells and opens the hair cuticle, allowing the thioglycolate ion to penetrate the cortex and break the disulfide (cystine) bonds — softening the hair so it conforms to the rod shape. Sodium hydroxide is used in hydroxide relaxers. Hydrogen peroxide is the neutralizer. Cysteamine is the active in 'true acid' perms.",
    order: 109,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "What is the chemical action of the neutralizer (fixative) in a permanent wave service?",
    options: [
      "It removes the waving solution from the hair by washing it away",
      "It re-oxidises the broken disulfide bonds in their new position around the rod, permanently fixing the wave pattern into the cortex",
      "It acidifies the cortex to create the wave without rods",
      "It opens the cuticle so the waving solution can penetrate more deeply"
    ],
    correctIndex: 1,
    explanation: "The neutralizer (typically hydrogen peroxide at 5–10 volume) re-oxidises (reforms) the disulfide bonds that were broken by the waving solution — now in their new position around the rod. This permanently fixes the new curl or wave configuration into the cortex's protein structure. Without proper neutralization, the bonds remain open, the curl relaxes out, and the hair is weakened and frizzy. Thorough rinsing of the waving solution BEFORE applying the neutralizer is essential.",
    order: 110,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "During a permanent wave, the stylist performs an S-test (strand test) by unrolling a small section of hair from the rod and pushing it gently. What does a well-formed 'S' pattern indicate?",
    options: [
      "The hair needs more processing time — the S is not yet defined enough",
      "The hair is sufficiently softened and the wave pattern has formed correctly — processing is complete and the neutralizer should be applied",
      "The hair is over-processed — the S means the disulfide bonds have been broken permanently",
      "The waving solution should be reapplied to deepen the wave"
    ],
    correctIndex: 1,
    explanation: "The S-test is the standard method to determine when a cold wave has processed sufficiently. When a small section of hair is gently unrolled from the rod and pushed from the ends toward the roots, a clear, defined S-shaped wave pattern that mirrors the rod diameter indicates adequate processing — the disulfide bonds have been sufficiently softened and the hair has assumed the rod's shape. An undefined or very loose S indicates under-processing; the complete absence of an S, or a frizzy, spongy texture, indicates over-processing.",
    order: 111,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "A client has fine, highlighted hair that shows low elasticity. Which permanent wave selection is most appropriate?",
    options: [
      "A strong alkaline wave (high pH, high ATG concentration) for a long-lasting result",
      "Refuse the service — any permed fine, highlighted hair will break",
      "A gentle acid-balanced or cysteamine wave at a lower pH, combined with a pre-service protein treatment and careful S-test monitoring",
      "Apply a regular alkaline wave but leave it on for only half the normal time"
    ],
    correctIndex: 2,
    explanation: "Fine, highlighted hair has reduced protein integrity and elevated porosity — making it vulnerable to over-processing with strong alkaline waves. An acid-balanced wave (pH 6.5–7) or cysteamine wave requires heat activation, processes more slowly and gently, and causes less cuticle disruption. A pre-service protein/conditioning treatment rebuilds cortex integrity. Careful S-test monitoring every 5 minutes prevents over-processing. Strong alkaline waves risk breakage and severe frizz on this hair type.",
    order: 112,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "What is the purpose of applying a protective base cream around the hairline and ears before a permanent wave service?",
    options: [
      "To help the waving solution process more quickly in the hairline area",
      "To protect the delicate facial skin from chemical irritation by the waving solution — the alkaline pH can cause redness, burns, or allergic reactions on exposed skin",
      "To prevent the hairline hair from being wrapped onto rods",
      "To keep the hairline hair straight while the rest of the hair is permed"
    ],
    correctIndex: 1,
    explanation: "The waving solution (pH 8.5–9.5) is caustic to skin, particularly in sensitive areas like the hairline, forehead, ears, and nape. A petroleum-based barrier cream applied to these areas before the service protects the skin from direct contact with the chemical, preventing redness, irritation, and chemical burns. This is standard protocol for all chemical texture services including relaxers.",
    order: 113,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "When wrapping rods for a permanent wave, what is 'base control' and which base placement provides maximum root volume?",
    options: [
      "Base control describes the tension used when wrapping — on-base wrapping uses the tightest tension",
      "Base control refers to where the rod sits in relation to its own base section. On-base placement (rod sitting directly on its base) provides maximum root volume and lift; half-off base provides moderate lift; off-base provides minimal root lift",
      "Base control is the diameter of the rod chosen — larger rods always produce more root volume",
      "Base control is the application order of the waving solution — always applied from nape to front for maximum volume"
    ],
    correctIndex: 1,
    explanation: "Base control determines the angle at which the hair is wound onto the rod and where the rod sits relative to its own base section. On-base: hair is elevated to 135° (above horizontal) before wrapping — the rod sits directly on top of its base, producing maximum root volume and lift. Half-off base: hair elevated to 90° — moderate volume. Off-base: hair elevated below 45° — minimal root volume, minimal lift, more drape. Base control is chosen based on the desired finished volume at the root.",
    order: 114,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "What is 'over-processing' in a permanent wave, and what are the visual and tactile signs?",
    options: [
      "Using too many rods — the hair is too tightly wrapped",
      "Leaving the waving solution on longer than needed — the hair's disulfide bonds and peptide bonds are excessively broken, resulting in extreme frizz, loss of elasticity, mushy texture when wet, and potential breakage",
      "Applying the neutralizer for too long — the wave is set too firmly",
      "Selecting a rod that is too small for the hair length"
    ],
    correctIndex: 1,
    explanation: "Over-processing occurs when the waving solution is left on beyond the required time — excessive disulfide bond breaking, extending into peptide (backbone) bond damage. Signs: the S-test shows no defined curl (hair is limp or frizzy rather than wave-formed), hair has a mushy, spongy texture when wet and reduced elasticity, the finished result is frizzy and weak rather than defined, and in severe cases breakage occurs. Over-processing is irreversible — affected hair must grow out.",
    order: 115,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "Why must the waving solution be thoroughly rinsed from the hair (typically 3–5 minutes) before the neutralizer is applied?",
    options: [
      "To prevent the neutralizer from working too quickly",
      "Residual waving solution contains thioglycolate that would react with the hydrogen peroxide neutralizer — reducing its effectiveness and potentially causing uneven bonding; thorough rinsing ensures the neutralizer acts only on the broken disulfide bonds",
      "To cool the hair down before applying the neutralizer",
      "To remove the rod endpapers which would otherwise block neutralizer penetration"
    ],
    correctIndex: 1,
    explanation: "Thorough rinsing is critical because residual thioglycolate in the hair would react with and consume the hydrogen peroxide neutralizer (a competing oxidation-reduction reaction) before it can re-oxidize the broken disulfide bonds. This leaves bonds incompletely reformed — producing a weak, under-neutralized wave that relaxes quickly and leaves the hair damaged and frizzy. A complete rinse (at least 3–5 minutes) ensures the neutralizer has 100% of its oxidizing capacity available to reform the disulfide bonds.",
    order: 116,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "What type of permanent wave rod produces a loose, natural-looking spiral wave rather than a traditional S-wave?",
    options: [
      "Standard straight cylindrical rod",
      "Concave (centre-dip) rod",
      "Spiral or corkscrew rod — the hair is wound lengthwise along a vertically positioned rod, producing an elongated spiral",
      "Bender (flexible foam) rod wound in the standard horizontal method"
    ],
    correctIndex: 2,
    explanation: "A spiral rod (also called a corkscrew or vertical rod) is wound lengthwise — the hair is wound diagonally from base to tip along the vertical length of the rod rather than horizontally around the circumference. This produces an elongated spiral or corkscrew curl that looks natural and falls more like a ringlet than a traditional S-wave. Standard horizontal wrapping on straight rods produces S-waves. The spiral technique requires longer rods and a specific wrapping angle.",
    order: 117,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "A client's permanent wave result is uneven — some areas have defined curl, others are barely wavy. What is the most likely cause?",
    options: [
      "The rods were too large for the hair length",
      "Uneven saturation of the waving solution — areas that received insufficient product processed less; may also result from inconsistent wrapping tension creating uneven rod contact",
      "The neutralizer was applied too quickly after rinsing",
      "The client's hair was too short for an even result"
    ],
    correctIndex: 1,
    explanation: "Uneven perm results are most commonly caused by inadequate or inconsistent saturation of the waving solution. Areas with insufficient product do not process fully — producing a weaker, less-defined wave or no wave. Contributing factors: thick sections preventing product from reaching the inner layers, wrapping tension inconsistencies (too tight prevents penetration, too loose allows slipping), or inconsistent processing time if the solution was applied gradually over a long period. Systematic, thorough saturation of each rod immediately after wrapping is essential.",
    order: 118,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "How long should a client typically wait before shampooing after a permanent wave service?",
    options: [
      "Immediately — shampooing after the service improves the wave definition",
      "24–48 hours — newly formed disulfide bonds need time to fully stabilize; shampooing or wetting the hair too soon can weaken or relax the freshly set wave",
      "At least 2 weeks — the wave is not chemically stable for 14 days",
      "No waiting period is needed with modern neutralizers"
    ],
    correctIndex: 1,
    explanation: "After a perm, the newly reformed disulfide bonds require 24–48 hours to fully stabilize and oxidize completely. Wetting, shampooing, or placing the hair in a tight style too soon can disturb the newly set bonds before they are fully stable, resulting in a relaxed or weakened wave. Clients should be advised to avoid wetting, shampooing, or tying up the hair for 48 hours after the service for best longevity.",
    order: 119,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "What is the difference between an 'alkaline' (cold wave) and a 'true acid' (heat-activated) permanent wave?",
    options: [
      "Alkaline waves use higher temperatures; acid waves are processed at room temperature",
      "Alkaline waves (pH 8.5–9.5) process at room temperature without heat and produce stronger, longer-lasting waves; true acid waves (pH 4.5–7) require heat activation from a dryer or hood, process more slowly, are gentler on the hair, and produce softer waves — preferred for fine, fragile, or chemically treated hair",
      "Acid waves use sodium hydroxide; alkaline waves use thioglycolate",
      "There is no practical difference — both produce identical results"
    ],
    correctIndex: 1,
    explanation: "Alkaline cold waves use ATG at pH 8.5–9.5 — no heat required, faster processing, stronger wave result, more potential for damage on delicate hair. True acid waves use glyceryl monothioglycolate (GMTG) at pH 4.5–7.0 — require external heat (dryer) for activation, process slowly, are gentler on the cuticle, produce softer waves, and are better tolerated by fine, highlighted, or previously processed hair. Acid waves have a longer lasting chemical change in the hair but require the heat activation step.",
    order: 120,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "What is a 'body wave' and how does it differ from a standard perm?",
    options: [
      "A body wave uses a different chemical — glycolic acid — instead of thioglycolate",
      "A body wave uses large-diameter rods and shorter processing time to produce loose waves and added volume rather than defined tight curls — the curl pattern is intentionally soft and natural-looking",
      "A body wave is a heat-based treatment that straightens the hair temporarily",
      "A body wave and a standard perm produce the same result — the name is only a marketing term"
    ],
    correctIndex: 1,
    explanation: "A body wave uses large rods (32 mm and above) and is typically processed for a shorter time to produce a loose, soft wave pattern with body and volume — not tight defined curls. The goal is to add fullness and movement to flat, fine, or limp hair rather than create curl. Standard perms use smaller to medium rods and longer processing for defined curl patterns. The chemical process is identical — the rod size and processing time differentiate the result.",
    order: 121,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "A client wants a permanent wave but also has permanent hair colour applied at the same appointment. In what order should these services be performed, and why?",
    options: [
      "Colour first, then perm the same day — the colour needs to be fresh before chemical services",
      "Perm first, wait the full 48-hour stabilization period, then colour — the waving solution and neutralizer chemically alter the hair, affecting colour uptake; colouring first then perming would strip the colour",
      "Both services can be done simultaneously to save time",
      "Colour and perm can be done in any order as long as a deep conditioner is applied between services"
    ],
    correctIndex: 1,
    explanation: "Always perm first, then colour — ideally with at least 48–72 hours between services. Reasons: (1) the waving solution's alkaline pH and reducing action removes freshly applied colour from the cortex; (2) the hair must be in a stable state before colour is applied; (3) the perm process opens the cuticle maximally, making the hair receptive to colour after the wave is set. Applying colour first then perming within the same service removes the colour investment and may cause uneven results.",
    order: 122,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "What is the key chemical difference between a lye (sodium hydroxide) relaxer and a no-lye (calcium hydroxide/guanidine) relaxer?",
    options: [
      "They are chemically identical — 'lye' and 'no-lye' are only marketing terms",
      "Lye relaxers use sodium hydroxide (NaOH) at pH 12–14, process quickly, and are more effective on resistant hair; no-lye relaxers use calcium hydroxide activated with guanidine carbonate at a slightly lower pH — gentler on the scalp but can cause more dryness in the hair shaft",
      "No-lye relaxers are stronger than lye relaxers",
      "Lye relaxers require heat activation; no-lye relaxers process at room temperature"
    ],
    correctIndex: 1,
    explanation: "Sodium hydroxide (lye) relaxers operate at pH 12–14, are highly effective even on coarse, resistant hair, process quickly, and require careful scalp protection. No-lye relaxers combine calcium hydroxide + guanidine carbonate at mixing, producing guanidine hydroxide at a slightly lower pH — generally gentler on the scalp but tend to cause more calcium buildup in the hair shaft (leading to dryness and brittleness over time). A chelating shampoo is recommended after no-lye services to remove calcium deposits.",
    order: 123,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "When applying a sodium hydroxide relaxer, what is the correct application sequence and why?",
    options: [
      "Apply from hairline to nape in one pass for consistent timing",
      "Apply to the most resistant sections first (typically the back/nape), work toward the most sensitive areas (front hairline and temples), and always apply to the new growth only — avoiding previously relaxed hair to prevent over-processing",
      "Apply to previously relaxed hair first to refresh the straightening, then apply to new growth",
      "Apply to the hairline first so the client can see immediate results"
    ],
    correctIndex: 1,
    explanation: "Hydroxide relaxers work extremely quickly — consistent timing is critical. Application begins at the most resistant area (usually the back/nape where hair is often coarser and thicker) and progresses toward the most sensitive areas (front hairline, temples) so all sections have approximately equal processing time. Application goes to new growth ONLY — applying relaxer over previously relaxed hair causes severe over-processing and breakage in the weakened, already-straightened sections.",
    order: 124,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "How does a sodium hydroxide relaxer permanently straighten hair at the molecular level?",
    options: [
      "It breaks the hydrogen bonds in the hair, which are then re-formed in a straight position",
      "It permanently breaks and rearranges the disulfide bonds in the cortex through lanthionization — converting cystine (disulfide) bonds to lanthionine bonds, which are permanent single sulfur bonds that cannot be re-formed by neutralizer",
      "It melts the cuticle layer, allowing the cortex to expand into a straight shape",
      "It uses the same chemistry as a perm neutralizer to set the hair straight"
    ],
    correctIndex: 1,
    explanation: "Hydroxide relaxers (NaOH, KOH, guanidine hydroxide, lithium hydroxide) straighten hair through lanthionization — the hydroxide ions break disulfide bonds and simultaneously convert them to permanent lanthionine bonds in the straightened position. Unlike thio perms (where neutralizer re-oxidizes disulfide bonds), hydroxide relaxers do NOT use a neutralizer to refix bonds — the lanthionine bond is permanent and cannot be reversed. A normalizing/neutralizing shampoo is used to stop the hydroxide action and restore pH.",
    order: 125,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "A client has not had a relaxer for 8 months and has significant new growth. What is the MOST important pre-service assessment?",
    options: [
      "Checking the client's preferred fragrance of the relaxer product",
      "Assessing the scalp for any abrasions, scalp conditions, open sores, or irritations — any break in the skin is an absolute contraindication for hydroxide relaxer application",
      "Checking whether the client has used conditioner recently",
      "Measuring the exact length of new growth with a ruler"
    ],
    correctIndex: 1,
    explanation: "Hydroxide relaxers (pH 12–14) cause severe chemical burns on broken or abraded skin. A thorough scalp examination is the most critical pre-service assessment. Any open sores, scratches, abrasions, active scalp conditions, or recent scratching must be identified — these are absolute contraindications. The scalp should not be scratched or shampooed for at least 3–7 days before a relaxer to allow the skin barrier to be fully intact.",
    order: 126,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "What is the purpose of applying a base (protective base cream or petroleum jelly) to the scalp before a sodium hydroxide relaxer?",
    options: [
      "It helps the relaxer process more quickly at the scalp",
      "It creates a protective barrier on the scalp skin to prevent the highly alkaline relaxer (pH 12–14) from contacting the scalp directly and causing chemical burns",
      "It conditions the scalp to prevent dryness after the service",
      "It holds the sections in place during application"
    ],
    correctIndex: 1,
    explanation: "A 'base' (petroleum jelly, Vaseline, or specialized protective cream) is applied to the scalp — especially the hairline, ears, and nape — before a lye relaxer application. The petroleum creates a physical barrier that resists the highly caustic sodium hydroxide from penetrating and burning the scalp skin. 'Basing' the scalp is a standard safety protocol for all hydroxide relaxer services. No-lye relaxers are sometimes used 'no-base' due to their slightly lower pH, but scalp sensitivity must still be considered.",
    order: 127,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "What is a 'normalizing' or 'neutralizing' shampoo used at the end of a hydroxide relaxer service, and why is it different from a regular shampoo?",
    options: [
      "It is a high-pH shampoo that adds extra lifting to the hair after relaxing",
      "It is a mildly acidic shampoo formulated to stop the hydroxide chemical reaction and restore the hair and scalp to a normal pH after the highly alkaline relaxer — preventing continued damage after the relaxer is rinsed",
      "It permanently neutralizes the straightening effect if left on too long",
      "It is identical to a regular salon shampoo — 'normalizing' is only a marketing term"
    ],
    correctIndex: 1,
    explanation: "Hydroxide relaxers work at pH 12–14. After rinsing, residual hydroxide in the hair continues to break bonds and damage the protein structure. A normalizing/neutralizing shampoo is mildly acidic (pH 4–5.5) with indicators that change colour (from pink to white) when all the alkaline residue is neutralized — providing a visual confirmation. Multiple lathers are performed until the shampoo no longer changes colour, confirming the pH is fully normalized. This step is critical to stopping damage.",
    order: 128,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "A client who has a thio (ATG) permanent wave in her hair asks for a sodium hydroxide relaxer at the same appointment. What is the professional response?",
    options: [
      "Apply both — the perm first, then the relaxer in the same session",
      "Refuse the service entirely and permanently — this combination is never possible",
      "Explain that thio-permed hair and hydroxide relaxers are chemically incompatible — hydroxide applied over thio-processed hair causes severe breakage; the service must be refused until the perm has grown out",
      "Apply the relaxer first, then re-perm the same day"
    ],
    correctIndex: 2,
    explanation: "Thio-processed hair (perm) and hydroxide-processed hair are chemically incompatible. Thio perms leave lanthionine-like cross-links that are unstable when exposed to a strong hydroxide. More critically, hydroxide relaxers applied over ATG-permed hair cause catastrophic breakage — the hair literally dissolves under the combination. This is the most serious chemical incompatibility in professional hairstyling. The perm must grow out completely before any hydroxide service is performed.",
    order: 129,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "What is 'smoothing' (or 'relaxer smoothing') during a hydroxide relaxer application, and why must it be performed carefully?",
    options: [
      "Smoothing is the final blow-dry technique after the relaxer is rinsed",
      "Smoothing is the physical manipulation of the relaxer through the hair using the back of a comb or gloved fingers — it physically straightens the hair in conjunction with the chemical action; it must be done gently to avoid breaking the softened hair, which is at its most fragile during processing",
      "Smoothing is applying the protective base cream before relaxer application",
      "Smoothing is a technique for removing the relaxer from the scalp using a damp cloth"
    ],
    correctIndex: 1,
    explanation: "Relaxer smoothing combines chemical and physical straightening — the hairstylist uses the back of a fine-tooth comb or gloved fingers to gently smooth sections straight as the chemical softens the disulfide bonds. This physical action assists the chemical in achieving maximum straightness. However, the hair is at its most fragile during this process — it must be smoothed gently without pulling, stretching, or excessive tension. Aggressive combing or rough manipulation at this stage causes breakage of the weakened cortex.",
    order: 130,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "How does a stylist determine which relaxer strength (mild, regular, super) to select for a client?",
    options: [
      "Always start with super-strength for the fastest results regardless of hair type",
      "Based on the client's hair texture and coarseness: mild for fine or sensitised hair; regular for medium texture; super for coarse, resistant, or very tightly coiled hair — always begin with the mildest effective strength",
      "Select strength based on the client's skin tone",
      "Use only the brand's regular strength — mild and super are not professional products"
    ],
    correctIndex: 1,
    explanation: "Relaxer strength is selected based on hair texture (fine, medium, coarse) and resistance (how tightly coiled). The professional guideline is to begin with the mildest strength that will achieve the desired result — to protect the hair's integrity. Mild: fine, colour-treated, sensitized, or previously relaxed hair. Regular: medium-textured hair. Super: coarse, resistant, tightly coiled hair that processes slowly. Using too strong a formulation causes over-processing and breakage; too mild requires more processing time.",
    order: 131,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "A client who self-applied a no-lye box relaxer at home visits the salon. Her hair is dry, breaking, and has calcium deposits. What professional treatment is recommended first?",
    options: [
      "Apply a fresh professional lye relaxer immediately to correct the previous result",
      "Perform a chelating treatment to remove calcium deposits left by the no-lye relaxer, followed by an intensive protein and moisture treatment program — a professional relaxer can be considered only after the hair's integrity is restored",
      "Cut all the hair off and start fresh",
      "Apply a toning treatment to change the hair colour"
    ],
    correctIndex: 1,
    explanation: "No-lye (calcium hydroxide) relaxers deposit calcium in the hair shaft over time, causing dryness, brittleness, and mineral buildup. The corrective protocol: (1) chelating treatment to remove calcium deposits, (2) assess hair integrity — elasticity and moisture balance, (3) intensive protein treatment to rebuild cortex strength, (4) moisture treatment to restore hydration. Only after the hair demonstrates adequate health indicators should a relaxer be considered. Applying another relaxer over already-compromised hair risks catastrophic breakage.",
    order: 132,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "What is a 'keratin smoothing treatment' (Brazilian Blowout, Cezanne, etc.) and how does it differ from a chemical relaxer?",
    options: [
      "Keratin treatments are identical to lye relaxers but with a different brand name",
      "Keratin smoothing treatments temporarily fill and coat the hair with keratin protein, reducing frizz and adding smoothness — the result is temporary (2–6 months) and fades gradually; chemical relaxers permanently alter the disulfide bond structure of the hair",
      "Keratin treatments permanently straighten hair using formaldehyde only",
      "Keratin treatments are a type of perm that adds wave to the hair"
    ],
    correctIndex: 1,
    explanation: "Keratin smoothing treatments deposit hydrolyzed keratin protein and a crosslinking agent (formaldehyde or formaldehyde-releasing agents in many formulas) that temporarily seals the cuticle and fills the cortex — reducing frizz, adding smoothness, and reducing curl for 2–6 months. As the coating wears off with shampooing, the original texture returns. Chemical relaxers (hydroxide-based) permanently break and reform the disulfide bond structure — the change is permanent in treated hair and only grows out. They are fundamentally different processes.",
    order: 133,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "What health and safety concern must hairstylists address before performing keratin smoothing treatments that contain formaldehyde or methylene glycol?",
    options: [
      "No special precautions are needed — keratin treatments are completely safe",
      "Formaldehyde vapours generated during the flat-iron step are a respiratory and eye irritant and a known carcinogen — the stylist must ensure exceptional ventilation, use a high-quality respirator (N95 or better), and wear chemical splash goggles; client safety precautions must also be implemented",
      "The client should wear a face mask; the stylist needs no special protection",
      "Only latex allergy is a concern with keratin treatments — no respiratory protection needed"
    ],
    correctIndex: 1,
    explanation: "Many keratin smoothing products release formaldehyde gas when heated with a flat iron during the sealing step. Formaldehyde is a respiratory irritant, sensitizer, and IARC Group 1 carcinogen. Occupational exposure must be controlled through: maximum ventilation (open windows, exhaust fans, air purifiers), respiratory protection (N95 minimum, or supplied-air respirator for extended exposure), eye protection, and limiting the number of treatments performed per day. Health Canada and provincial occupational health authorities have issued warnings regarding formaldehyde exposure in salons.",
    order: 134,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "When must a strand test be performed before a thio permanent wave on a client who had a hydroxide relaxer six months ago?",
    options: [
      "Strand testing is not needed if the client has had both services before",
      "A strand test must always be performed when any chemical history is present — especially the thio/hydroxide combination; the strand test determines if the remaining relaxed hair is strong enough to withstand the perm without breaking",
      "Only perform the strand test if the client reports recent breakage",
      "Strand tests are only required for colour services, not texture services"
    ],
    correctIndex: 1,
    explanation: "A strand test is mandatory before performing any chemical service on hair with a complex chemical history — particularly when thio and hydroxide services may coexist. The strand test: a small section is wound on a perm rod, waving solution applied, and monitored closely. If the hair becomes spongy, breaks, or dissolves within minutes, the service cannot proceed safely. If the strand test demonstrates adequate integrity, the service may proceed with the mildest appropriate wave solution and very careful monitoring.",
    order: 135,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "After completing a sodium hydroxide relaxer service, a client develops mild scalp irritation and redness at the hairline. What is the appropriate first response?",
    options: [
      "Apply more neutralizing shampoo to the affected area and leave it on",
      "Immediately and gently rinse the area with cool water, apply a soothing post-relaxer conditioner, document the reaction on the client record, advise the client to seek medical attention if the irritation worsens, and note it as a contraindication for future services",
      "Apply hydrogen peroxide to the area to neutralize the alkali",
      "Apply the protective base cream now — after the fact — to soothe the area"
    ],
    correctIndex: 1,
    explanation: "Post-relaxer scalp irritation requires: (1) gentle cool-water rinsing to ensure all hydroxide is removed from the area, (2) application of a soothing post-relaxer conditioner or treatment, (3) documentation on the client record — this is critical for future service planning and liability, (4) advising the client to monitor the irritation and seek medical attention if it progresses (blistering, severe burning, or weeping indicates a chemical burn requiring medical care). This information will guide future services — lower pH product, additional basing, or discontinuing relaxer services.",
    order: 136,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "On the standard 10-level hair colour system, what does a level 1 represent versus a level 10?",
    options: [
      "Level 1 is blonde; level 10 is black",
      "Level 1 is the darkest (black); level 10 is the lightest (lightest blonde) — the scale measures depth from darkest to lightest",
      "Level 1 is fine hair; level 10 is coarse hair",
      "Level 1 represents warm tones; level 10 represents cool tones"
    ],
    correctIndex: 1,
    explanation: "The 10-level system measures depth (darkness) of hair colour from Level 1 (black — deepest, most melanin) to Level 10 (lightest blonde — least melanin). Level 5 = medium brown (midpoint). This system is universal across professional colour lines. When lifting or darkening, the stylist must understand the current level, the target level, and how many levels of lift or fill are required.",
    order: 137,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "What is underlying pigment (contributing pigment) and why is it critical to colour formulation?",
    options: [
      "It is the artificial pigment remaining from a previous colour service",
      "It is the natural warm pigment (from pheomelanin) that is revealed as melanin is lightened — each level of the hair corresponds to a predictable underlying warm tone (red, orange, gold, yellow) that affects final colour results",
      "It is the pigment that gives grey hair its silver tone",
      "It is the depth of colour added by a toner after bleaching"
    ],
    correctIndex: 1,
    explanation: "As melanin is oxidized (lifted) during colour or lightening, the eumelanin (dark, cool) is removed progressively, revealing the underlying warm pheomelanin — the natural warm tone inherent to that level. Level 1–3: red; Level 4–5: red-orange; Level 6: orange; Level 7: orange-gold; Level 8: gold; Level 9: yellow-gold; Level 10: pale yellow. Underlying pigment affects every colour formula — if not accounted for, warm or brassy results occur. Formulas must include neutralizing tones or the warm tone intentionally.",
    order: 138,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "A client at Level 6 (dark blonde) wants to achieve a Level 9 (light blonde) result. How many levels of lift are required, and what developer volume is typically needed?",
    options: [
      "1 level of lift — 10 volume developer",
      "2 levels of lift — 20 volume developer",
      "3 levels of lift — 30 or 40 volume developer (or lightener)",
      "5 levels of lift — 10 volume developer applied twice"
    ],
    correctIndex: 2,
    explanation: "From Level 6 to Level 9 requires 3 levels of lift. Each 10-volume developer provides approximately 1 level of lift; 20 volume provides 1–2 levels; 30 volume provides 2–3 levels; 40 volume provides 3–4 levels. For 3 levels of lift, 30 or 40 volume developer with a high-lift colour or powder lightener is required. It is important to also account for the underlying gold/orange pigment at Level 6–7 that will need to be neutralized with a toner after lifting.",
    order: 139,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "What is the difference between permanent, demi-permanent, and semi-permanent hair colour in terms of chemistry and durability?",
    options: [
      "They are identical in chemistry — only the processing time differs",
      "Permanent colour uses oxidative dye and hydrogen peroxide — permanently alters the hair's melanin and deposits new artificial colour that does not wash out; demi-permanent uses low-volume peroxide with smaller dye molecules for translucent, long-lasting colour that fades gradually; semi-permanent has no peroxide and only coats the cuticle — washes out in 4–6 shampoos",
      "Semi-permanent is the strongest and most damaging; permanent is the gentlest",
      "Demi-permanent lifts hair 3 levels; permanent lifts 1 level; semi-permanent lifts 5 levels"
    ],
    correctIndex: 1,
    explanation: "Permanent colour: uses para-dye intermediates + hydrogen peroxide (10–40 vol) — oxidative reaction builds large, permanent colour molecules in the cortex; lifts natural melanin; does not wash out. Demi-permanent: uses direct dyes + very low peroxide (5–10 vol or no peroxide) — deposits without significant lift; fades gradually over 12–24 shampoos; adds tone, glosses, blends grey up to 50–75%. Semi-permanent: direct dyes only, no peroxide — coats the cuticle surface; washes out in 4–6 shampoos; no lift; ideal for healthy, non-damaged hair conditioning and subtle tone.",
    order: 140,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "A client with 50% grey hair wants full, natural-looking coverage. Which colour type and developer volume is most appropriate?",
    options: [
      "Semi-permanent colour with no developer — it will cover grey naturally",
      "Permanent colour at the client's natural level using 20 volume developer — permanent colour with adequate peroxide fully oxidises grey (white/colourless) hair, depositing pigment throughout the cortex for complete coverage",
      "A demi-permanent colour with 6 volume developer for gentle coverage",
      "20 volume developer with bleach to pre-lighten the grey first"
    ],
    correctIndex: 1,
    explanation: "Grey (white) hair lacks melanin and has a resistant cuticle — it requires permanent colour with 20 volume developer for complete, opaque coverage. 20 volume provides enough oxidation to fully open the resistant cuticle of white hair, allowing the colour molecules to penetrate and develop throughout the cortex. Demi-permanent (low peroxide) blends grey up to about 50–75% but cannot achieve full opaque coverage. Semi-permanent has no peroxide and cannot penetrate the cuticle of resistant white hair.",
    order: 141,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "What is a double-process colour and when is it used?",
    options: [
      "Applying two different colour formulas to the same appointment for a blended result",
      "A two-step service where the hair is first lightened (bleached) and then toned — used when the desired result cannot be achieved in a single oxidation step, such as going from dark to very light or achieving a specific fashion tone on dark hair",
      "Applying permanent colour and a semi-permanent colour on the same head simultaneously",
      "Performing the same colour service twice in one visit for deeper saturation"
    ],
    correctIndex: 1,
    explanation: "A double-process colour consists of: Step 1 — lightening (bleach) to remove enough underlying pigment to reach the desired lightness level. Step 2 — toning to deposit the desired tone over the lightened base, neutralizing unwanted warmth and achieving the final target colour. This is required when a single oxidative colour cannot lift the hair sufficiently (e.g., dark brown to platinum blonde requires bleach first) or when a specific tone is only achievable on a pre-lightened base.",
    order: 142,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "How does the colour wheel guide a hairstylist in neutralizing unwanted tones?",
    options: [
      "The colour wheel shows which colours can be applied to the same hair without mixing",
      "Complementary colours (opposite on the colour wheel) neutralize each other — orange brassy tones are neutralized by blue, yellow tones by violet/purple, red tones by green; this guides the selection of toning formulas",
      "The colour wheel shows the order in which colours should be applied during a full-head colour",
      "Adjacent colours on the colour wheel always produce darker results when combined"
    ],
    correctIndex: 1,
    explanation: "The colour wheel is the fundamental tool for neutralization formulations. Complementary colours are directly opposite each other and, when mixed in appropriate proportions, cancel each other out to produce a neutral (grey/brown) result. Key neutralizations: orange (Level 6 underlying) → neutralized by blue; yellow (Level 9 underlying) → neutralized by violet; red → neutralized by green. Toners and colour formulas include these complementary pigments to neutralize specific unwanted warm tones.",
    order: 143,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "A client's grey regrowth is resistant to colour coverage despite using 20 volume developer and a matching permanent formula. What adjustment should the hairstylist consider?",
    options: [
      "Switch to a semi-permanent colour for better coverage on resistant grey",
      "Add 5–10% natural (Level N) to the colour formula and/or increase to 30 volume developer — adding natural base pigments fills resistant cuticle and improves coverage; higher developer opens the cuticle more fully",
      "Apply the colour to wet hair for better penetration",
      "Double the amount of colour applied without changing the formula or developer"
    ],
    correctIndex: 1,
    explanation: "Resistant grey hair has a particularly dense, tightly packed cuticle structure and no melanin — it requires extra formulation strategies. Adding 5–10% natural (N or 0) shade to the target formula adds extra base pigment molecules that help fill and anchor in resistant hair. Increasing developer to 30 volume opens the cuticle more fully to allow larger penetration of colour molecules. Both strategies together significantly improve coverage on stubborn resistant grey.",
    order: 144,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "What is the standard mixing ratio for most permanent oxidative hair colours with developer?",
    options: [
      "1 part colour : 3 parts developer",
      "1 part colour : 1 part developer (1:1)",
      "2 parts colour : 1 part developer",
      "Equal parts colour and developer mixed with water"
    ],
    correctIndex: 1,
    explanation: "The industry standard mixing ratio for most permanent oxidative colours is 1:1 (1 part colour : 1 part developer by weight or volume). Some manufacturers specify 1:1.5 or 1:2 for high-lift colours or when using very high volumes. Always follow the specific manufacturer's recommended ratio — deviating affects the hydrogen peroxide concentration, the dye concentration, the consistency, and the processing chemistry. Ratios printed in the technical manual override general guidelines.",
    order: 145,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "A client has naturally dark brown (Level 4) hair and wants warm copper highlights at Level 7. Which colouring technique is most efficient for this result?",
    options: [
      "Apply an all-over permanent colour from Level 4 to Level 7 copper",
      "Use foiling — isolating fine sections with foil and applying powder lightener to lift to Level 7, followed by a copper toner to achieve the target tone while leaving the base natural",
      "Apply a Level 7 copper demi-permanent all-over for a warm result",
      "Use a semi-permanent copper colour applied to the full head from root to ends"
    ],
    correctIndex: 1,
    explanation: "Going from Level 4 to Level 7 copper requires 3 levels of lift — which a single permanent colour application cannot achieve on dark natural hair without risking a muddy, uneven result. Foil highlighting with powder lightener efficiently and precisely lifts the selected sections to the target level, preserving the natural dark base between sections. After lightening, a copper toner is applied to achieve the exact warm copper tone. This is the technically correct approach for dimensional, highlighted results requiring significant lift.",
    order: 146,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "What is the purpose of performing a colour patch test, and how far in advance must it be performed?",
    options: [
      "48 hours before the service — to detect allergic contact dermatitis to para-phenylenediamine (PPD) and related oxidative dye intermediates in permanent colour",
      "5 minutes before — a quick test behind the ear tells you immediately if there will be a reaction",
      "The same day — apply a small amount and wait 30 minutes before the service",
      "Patch tests are only required for clients with known allergies"
    ],
    correctIndex: 0,
    explanation: "A predisposition (patch/skin sensitivity) test must be performed 24–48 hours before every oxidative colour service — even for regular clients, as sensitization can develop at any time after previous exposures. The test involves applying a small amount of the mixed colour behind the ear or in the crook of the elbow. A positive reaction (redness, swelling, itching, blistering) at 24–48 hours indicates IgE-mediated allergy or allergic contact dermatitis to PPD or related para-dye intermediates — a definitive contraindication for the service.",
    order: 147,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "A client's natural hair is Level 7 (dark blonde) and she requests a Level 7 ash result. Which formula should be selected?",
    options: [
      "Level 7 natural (N) with 20 volume — natural tones produce ash results",
      "Level 7 ash (A or 1) with 10 volume developer — since there is no desired lift, 10 volume provides deposit-only action; the ash tone neutralizes the natural warmth present at Level 7",
      "Level 7 warm (W or 3) with 20 volume to add shine first",
      "A bleach application first to Level 10, then tone with ash"
    ],
    correctIndex: 1,
    explanation: "When the target level matches the existing level (no lift needed), 10 volume developer provides deposit-only action — sufficient to open the cuticle for colour deposition without unnecessary lightening. Selecting an ash (A or .1) shade neutralizes the natural gold-orange underlying pigment at Level 7. Using 20 volume when no lift is needed increases the risk of over-lightening the existing colour and unnecessary hair damage. Ash tones at 10 volume are the professional choice for toning or colour refreshing at the same level.",
    order: 148,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "When performing a virgin colour application (first-time colour on hair that has never been chemically treated), what is the standard application sequence?",
    options: [
      "Apply from roots to ends simultaneously with no consideration for heat zones",
      "Apply from the ends to the roots — ends always process first",
      "Apply from 1 cm from the scalp through the mid-lengths and ends first, then apply to the root area last — body heat accelerates processing at the scalp, so the roots are applied last to equalize development timing",
      "Apply the colour only to the roots and allow bleeding down naturally"
    ],
    correctIndex: 2,
    explanation: "On a virgin application, body heat from the scalp accelerates the oxidation reaction in the root area — causing it to process faster and potentially lighter than the rest. To compensate: apply colour to 1 cm away from the scalp (mid-lengths to ends) first, allow these sections to develop, then apply to the root zone for the remaining time. This technique ensures the roots and lengths develop to the same depth simultaneously. On retouches, only the new growth is coloured to avoid build-up on previously coloured lengths.",
    order: 149,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "What is a 'gloss' or 'glaze' colour service, and when is it most appropriate?",
    options: [
      "A gloss applies a heavy, opaque colour layer over the existing hair colour",
      "A gloss or glaze uses a demi-permanent, no or very low ammonia formula to add shine, refresh faded colour, deposit a tonal shift, and improve condition — appropriate between permanent colour services, for tone refreshing, or for clients wanting a non-committal colour enhancement without lightening or full grey coverage",
      "A gloss service permanently lifts the hair 2 levels for a lightening effect",
      "A gloss is a finishing product applied after colour — not a colour service"
    ],
    correctIndex: 1,
    explanation: "A gloss or glaze is a low-commitment colour service using demi-permanent or gloss-specific formulas with little to no ammonia and very low (or no) peroxide. Results: adds intense shine, refreshes faded ends, deposits tone (e.g., adds warmth, deepens colour, neutralizes brassiness), and improves hair feel and condition. It fades gradually over 4–6 weeks. Appropriate for clients between colour services, those new to colour wanting a risk-free entry, or those wanting a conditioning, shine-boosting tonal treatment.",
    order: 150,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "A client notices their permanent colour fades to a warm, brassy tone within 2–3 weeks of each colour appointment. What is the most likely cause?",
    options: [
      "The developer volume was too low",
      "The colour formula lacks sufficient warm tones to maintain vibrancy",
      "The artificial colour molecules are smaller than the cuticle openings — highly porous hair deposits colour easily but loses it quickly through wash; the cuticle cannot retain the colour; OR the formula did not include adequate neutralizing tones to maintain the ash/cool result",
      "The client is washing with cold water — which causes colour to fade quickly"
    ],
    correctIndex: 2,
    explanation: "Rapid colour fading to warmth is most often a porosity issue — highly porous hair (raised, damaged cuticle) allows colour molecules to exit during washing as easily as they entered during processing. Solutions: deep conditioning before colour to temporarily improve cuticle integrity, using a deposit-heavy (low developer) formula on ends, recommending colour-safe sulphate-free shampoo, and adding cool/neutralizing tones to the formula. For ash colours specifically, the problem is that cool tones (ash, green) fade faster than warm tones — requiring extra cool/blue/violet in the formula.",
    order: 151,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "What is the primary active ingredient in powder (off-scalp) bleach, and what causes the lifting action?",
    options: [
      "Ammonia alone — it opens the cuticle and bleaches the melanin",
      "Persulphate salts (ammonium, potassium, or sodium persulphate) activated by hydrogen peroxide — the combination creates free radicals that oxidize and decompose melanin molecules progressively",
      "Sodium hydroxide — it breaks the disulfide bonds and dissolves melanin simultaneously",
      "Hydrogen peroxide alone — no additional agents are required for powder bleach"
    ],
    correctIndex: 1,
    explanation: "Powder bleach contains persulphate salts (ammonium, potassium, sodium persulphate) plus alkalising agents. When mixed with hydrogen peroxide, the persulphates generate powerful free radicals (peroxydisulphate ions) that aggressively oxidize and decompose melanin molecules — providing significantly more lift than developer alone. Persulphates are responsible for the allergic reactions (contact urticaria, respiratory sensitization) associated with bleach — a key occupational health hazard in hairdressing.",
    order: 152,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "A client with Level 5 dark brown hair wants to achieve a Level 9 pale gold result in one service. Is this achievable and what is the risk?",
    options: [
      "Yes, easily achieved with 40 volume developer and powder bleach in one session on most hair",
      "Lifting 4 levels in a single session is possible on some hair types but carries significant risk of over-processing, breakage, and scalp damage — a strand test and thorough assessment are essential; for many clients this requires two appointments",
      "Not possible — hair cannot be lifted more than 2 levels per session",
      "Yes, achievable using a high-lift colour at 40 volume without bleach"
    ],
    correctIndex: 1,
    explanation: "Lifting 4 levels (Level 5 to Level 9) in a single session is technically possible but depends heavily on the hair's condition, texture, and history. On virgin, healthy, medium-coarse hair it may be achievable with powder bleach and 40 volume developer. On fine, previously processed, or fragile hair it risks over-processing, elasticity loss, and breakage. A strand test is essential to assess the hair's ability to withstand the process. Many professionals recommend achieving extreme lifts over two sessions with a treatment in between — prioritizing hair integrity over speed.",
    order: 153,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "What is the difference between on-scalp bleach (cream) and off-scalp bleach (powder) formulations?",
    options: [
      "They are identical products — only the application method differs",
      "On-scalp (cream/oil) bleach is formulated without persulphates, with emollient agents to protect the scalp — used for root applications; off-scalp (powder) bleach contains persulphates for maximum lift — used for foiling, balayage, and freehand techniques away from the scalp",
      "Powder bleach is always stronger than cream bleach regardless of the developer used",
      "On-scalp bleach requires 60 volume developer; off-scalp uses 20 volume only"
    ],
    correctIndex: 1,
    explanation: "On-scalp (cream or oil) lighteners are formulated without or with minimal persulphates, include conditioning and emollient agents to reduce scalp irritation and insulate against heat, and are safe for application at the scalp. Off-scalp (powder) lighteners contain persulphates for maximum lifting power and are used in foils, balayage, or open-air techniques away from the scalp — they would cause excessive irritation or burns if applied directly to the scalp. Selecting the correct product type based on proximity to the scalp is a fundamental safety requirement.",
    order: 154,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "What is balayage and how does it differ from traditional foil highlighting?",
    options: [
      "Balayage is a French term for foil highlighting — they are the same technique",
      "Balayage (French: 'to sweep') is a freehand lightening technique where lightener is painted directly onto selected sections of dry hair without foil — creating a soft, sun-kissed, graduated effect that is most concentrated at the ends; foil highlighting isolates sections, provides more lift, creates more uniform, precise results",
      "Balayage uses semi-permanent colour; foil uses permanent colour",
      "Balayage is only applied to the roots; foil highlights only the ends"
    ],
    correctIndex: 1,
    explanation: "Balayage is a freehand painting technique where lightener is applied to the surface of sections with a brush or paddle — without foil enclosure. The result is softer, more natural-looking gradients (most light at the ends, less at the root) that blend seamlessly and grow out gracefully. Foil highlights enclose each section — controlling processing by concentrating heat, allowing more precise placement, and achieving more lift than open-air balayage. Balayage is lower-maintenance; foil highlights are more precisely controlled.",
    order: 155,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "During a bleaching service, a client's hair has reached a pale yellow (Level 9/10) but still has a slight yellow tone. What is the next step to achieve a cool, white-blonde result?",
    options: [
      "Apply more bleach and continue processing beyond pale yellow",
      "Apply a violet or pearl toner over the bleached base — violet tones neutralize the remaining yellow (complementary on the colour wheel), producing a cool silver, white, or champagne result",
      "Apply a warm golden toner to enhance the yellow and call it complete",
      "Wash with blue shampoo immediately without toning"
    ],
    correctIndex: 1,
    explanation: "After lifting to pale yellow (Level 9–10), the underlying yellow pigment must be neutralized to achieve a cool, icy, or white-blonde result. Violet/purple tones are directly complementary to yellow on the colour wheel — a violet or pearl toner applied over the pale yellow base neutralizes it, producing silver, cool blonde, or white depending on the depth of violet and processing time. Purple shampoo and conditioner maintain this result between salon visits.",
    order: 156,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "What is the maximum developer volume that should be used when bleaching on or near the scalp, and why?",
    options: [
      "60 volume — for maximum lift in one session",
      "40 volume is generally the maximum recommended for scalp applications — higher volumes generate excessive heat, cause scalp burns, and can cause sufficient heat generation to damage the hair structure immediately at the scalp",
      "10 volume only — for scalp safety",
      "There is no maximum — the hairstylist should use whatever volume the formula requires"
    ],
    correctIndex: 1,
    explanation: "Body heat from the scalp accelerates the chemical reaction of bleach — the root area processes faster than the lengths. Using 40 volume at the scalp takes advantage of this heat rather than fighting it. Using 50 or 60 volume at the scalp generates excessive heat, increases scalp burn risk significantly, and can cause the root area to process faster than the stylist can monitor — leading to over-processing, breakage at the scalp, and uneven results. 20–30 volume is often preferred on fine or sensitized scalps.",
    order: 157,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "What are persulphate allergies in relation to bleach use, and how should a hairstylist manage a client who reports them?",
    options: [
      "Persulphate allergy is a minor inconvenience — proceed with a lower volume developer",
      "Persulphates (in powder bleach) are common allergens that can cause contact urticaria, rhinitis, asthma, and in severe cases anaphylaxis — a client reporting a persulphate allergy must not receive any service containing powder bleach; cream bleach without persulphates may be an alternative if tolerated, with medical clearance",
      "Persulphate allergy only affects the scalp — proceed with foils that keep product off the scalp",
      "Persulphate allergy is the same as a hydrogen peroxide allergy"
    ],
    correctIndex: 1,
    explanation: "Persulphate salts are potent occupational and consumer allergens. They cause IgE-mediated immediate hypersensitivity reactions including contact urticaria (hives), rhinoconjunctivitis, asthma, and in severe cases anaphylaxis. A client disclosing persulphate allergy must not receive any service containing powder (off-scalp) bleach. Even inhalation during mixing poses a risk. Cream bleach formulated without persulphates may be an alternative for some clients — but only after confirming the specific allergen and with physician guidance. Hairstylists themselves are at high occupational risk.",
    order: 158,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "What is the effect of adding heat (processing cap, hooded dryer) during a bleaching service?",
    options: [
      "Heat causes the bleach to process more slowly and gently",
      "Heat accelerates the bleach reaction — speeds up processing time and can achieve greater lift in less time, but also increases the risk of over-processing and scalp sensitivity if not carefully monitored",
      "Heat has no effect on bleach processing",
      "Heat is required for all bleach services to activate the persulphates"
    ],
    correctIndex: 1,
    explanation: "Heat accelerates the oxidation reaction of bleach — reducing processing time and potentially achieving greater lift. However, accelerated processing requires more frequent monitoring to prevent over-processing — once the hair reaches the target level, it must be removed immediately. Excessive heat also increases scalp sensitivity and the risk of chemical burns. Heat is sometimes used strategically to speed up processing on resistant hair, but should never be applied to sensitive scalps or fine, fragile hair.",
    order: 159,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "When monitoring a bleaching service in foils, how does the hairstylist determine when the target level has been reached without removing all foils?",
    options: [
      "The foils are left on for a standard time (30 minutes) without checking",
      "Periodically open one or two test foils placed in the most resistant area — gently unfolding to check the level of the strand and comparing against the target; check every 5–10 minutes after the initial processing period",
      "Monitor by the smell — a stronger odour indicates the target level has been reached",
      "Check only the outermost sections visible without opening foils"
    ],
    correctIndex: 1,
    explanation: "Monitoring foil bleach processing requires periodically opening test foils — ideally placed in the most resistant area at the beginning of the service. The hairstylist gently folds back the foil and checks the strand colour against the target level. Checking every 5–10 minutes (or more frequently near the end of processing) prevents over-processing. Relying on time alone without visual checks is a professional error — processing times vary significantly based on hair texture, natural level, product strength, heat, and porosity.",
    order: 160,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "What is 'banding' in the context of hair lightening, and what causes it?",
    options: [
      "A technique for creating defined horizontal highlights across the hair",
      "Visible, horizontal lines of different lightness levels (light, dark, light, dark) in the hair length — caused by multiple overlapping lightener applications at different times, inconsistent overlap on regrowth, or different processing from previous services",
      "The natural colour banding that occurs in healthy hair due to melanin distribution",
      "A highlighting technique using rubber bands to section hair before bleaching"
    ],
    correctIndex: 1,
    explanation: "Banding is a result of inconsistent lightening that produces horizontal lines of alternating lighter and darker colour across the length of the hair. Common causes: applying new lightener that overlaps previously lightened areas (which lift more quickly, appearing lighter), inconsistent application timing across sections, or applying lightener over previously coloured hair that responds differently at different levels. Banding is particularly evident on straight, single-coloured hair. Correcting banding requires careful colour correction formulation.",
    order: 161,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "A client has previously applied a box colour at home resulting in a very dark, opaque Level 3 result on naturally Level 6 hair. She wants to return to her natural Level 6. What is the first step?",
    options: [
      "Apply bleach immediately at 40 volume to lift the artificial colour",
      "Perform a colour remover (reducer) treatment to remove the artificial colour molecules without significantly lightening the natural melanin — then assess and re-colour if needed",
      "Apply a Level 6 permanent colour over the dark result — it will lift and deposit simultaneously",
      "The client must wait for the colour to grow out — correction is not possible"
    ],
    correctIndex: 1,
    explanation: "A colour remover (colour reducer/eraser) works by shrinking the large oxidative colour molecules back to their original small, colourless state — allowing them to wash out of the cortex without significantly altering the natural melanin. This is the first step before re-colouring in correction work, as it avoids the damage of bleach while removing the artificial pigment. After removal, the hair often reveals a warm, uneven result that requires careful tonal correction and equalization before re-colouring.",
    order: 162,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "A client's highlights are extremely orange/brassy at Level 6 when she wanted a cool Level 8 ash blonde. What is the corrective approach?",
    options: [
      "Apply a red-based toner to warm up the result and hide the orange",
      "Continue bleaching until the orange is lifted to pale yellow, then apply a blue-violet ash toner to neutralize the remaining warm tones",
      "Apply a green-based colour to neutralize the red undertones",
      "No correction is possible — the client must start over with a new colour"
    ],
    correctIndex: 1,
    explanation: "The orange indicates the hair was lifted to Level 6 — insufficient for the desired Level 8 ash. Correction: (1) continue lightening (additional bleach or high-lift colour) to bring the hair to Level 8–9 (gold-pale yellow), neutralizing the orange. (2) Apply a blue-ash or blue-violet toner — blue neutralizes the orange underlying pigment at Level 7–8, and ash/violet tones neutralize remaining yellow. The colour wheel governs: orange → neutralized by blue; yellow → neutralized by violet.",
    order: 163,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "What is 'colour fill' (pre-pigmentation) and when is it necessary before re-colouring?",
    options: [
      "A technique for filling foils with lightener before the client arrives",
      "A pre-colouring step where warm pigment is deposited back into hair that has been over-lightened or has lost its warm tones — ensuring the target depth colour develops correctly and does not turn ashy, dull, or green",
      "A technique for filling in grey hair before full-coverage colour",
      "Colour fill refers to adding extra product to ensure full saturation during application"
    ],
    correctIndex: 1,
    explanation: "Colour fill (pre-pigmentation) is required when the hair has been lightened beyond the target level's natural underlying pigment zone — for example, hair lifted to pale yellow (Level 10) that needs to be taken back to dark brown (Level 4). Without filling the warm red-orange pigment back into the cortex, a Level 4 permanent colour applied directly to pale yellow produces a flat, greenish, or muddy result because there is no warm underlying pigment for the colour to build on. Filling restores the warm foundation the colour needs.",
    order: 164,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "A client used a permanent black box colour all-over. She now wants to achieve a warm brown (Level 5) result. Why is this correction complex?",
    options: [
      "Black permanent colour simply washes out after 6–8 weeks — no correction needed",
      "Artificial black permanent colour is heavily pigment-saturated and difficult to remove — colour removers may take multiple applications, lightening risks damage and orange banding, and the process requires multiple careful sessions to avoid breakage and achieve an even result",
      "Correction is simple — apply a Level 5 warm colour directly over the black",
      "Bleach cannot remove black permanent colour — it can only remove natural melanin"
    ],
    correctIndex: 1,
    explanation: "Black permanent colour contains an extremely high concentration of dark, large colour molecules that are resistant to removal. Colour removers help but may require multiple applications. If lightening is needed, the dark artificial pigment lifts unevenly — lighter sections from previous processing emerge as bands, and the underlying pigment exposure is non-linear. Multiple careful sessions with condition assessments, colour removal, targeted lightening, and colour correction are required. Attempting this in a single session risks irreversible damage.",
    order: 165,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "When performing a colour correction consultation, what key information must the hairstylist obtain about the client's colour history?",
    options: [
      "Only the most recent colour service is relevant",
      "The complete colour history: all chemical services (colour, bleach, relaxer, perm), products used, timing, results, home maintenance products, water quality, health changes, and any previous correction attempts — this information determines what is in the hair and what approach is safe",
      "Only the original natural colour level — nothing else matters",
      "The brand of box colour used — professional results are unrelated to history"
    ],
    correctIndex: 1,
    explanation: "Colour correction requires a complete colour history because every previous chemical service has modified the hair's internal structure and composition. Knowing: artificial colour types and levels present, lightening history (how light and how many times), chemical texture services (thio or hydroxide), home products (box colour chemistry), water quality (mineral buildup), and health factors (medication, hormonal changes) — all of this guides the hairstylist's diagnosis, determines compatibility, identifies risks, and informs a safe, realistic corrective plan.",
    order: 166,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "After completing a colour correction service, the client's hair shows green tones in the highlights. What caused this and how is it corrected?",
    options: [
      "Green tones are caused by too much yellow underlying pigment — corrected with more bleach",
      "Green tones result from red tones being neutralized too strongly — corrected by applying a warm copper or red-based toner to add red back into the affected areas",
      "Green tones indicate a chemical reaction with hard water — corrected by chelating treatment only",
      "Green tones are caused by excessive blue toner left on too long and corrected with an orange-based product"
    ],
    correctIndex: 1,
    explanation: "Green results in highlights typically occur when too much red was removed during lifting and an overly ashy formula was applied — blue + yellow (residual underlying) can produce green, or over-neutralization of red leaves a green cast. The colour wheel: green is corrected by its complement — red/copper. Applying a warm copper, red-gold, or warm brown toner deposits the complementary red pigment needed to neutralize the green and shift the result to a neutral or warm blonde. The exact formula depends on the depth and saturation of the green.",
    order: 167,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "What does 'porosity equalization' achieve before a colour service on hair with multiple porosity zones?",
    options: [
      "It makes all sections of the hair the same level before colouring",
      "Applying a filler or porosity equalizer temporarily closes and standardizes the cuticle of highly porous areas so colour penetrates and develops evenly throughout the hair length — preventing over-dark or over-warm results at porous ends and under-developed results at resistant roots",
      "It removes existing colour from overly porous sections before re-colouring",
      "It deposits melanin into the hair cortex to increase resistance"
    ],
    correctIndex: 1,
    explanation: "Hair with different porosity zones (e.g., resistant roots, normal mid-lengths, very porous ends) responds to colour unevenly — highly porous ends absorb colour faster, process darker, and fade faster. A porosity equalizer (typically a diluted acidic conditioner or specific filler product) is applied to the porous areas before colouring to temporarily reduce the porosity differential — making the cuticle more uniform. This ensures the colour formula develops to the same depth and tone throughout the length.",
    order: 168,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "A client's permanent hair colour result is darker than expected — the target was Level 7 but the result is Level 5. The client's hair appears to have processed too dark, especially at the ends. What is the most likely cause?",
    options: [
      "The developer volume was too high",
      "The ends were highly porous from previous colour services — highly porous hair absorbs and deposits more colour pigment than intended, resulting in a darker-than-formula result at the ends",
      "The colour was applied in the wrong order — roots should always be done last",
      "The client's hair is naturally more resistant than estimated"
    ],
    correctIndex: 1,
    explanation: "Highly porous hair (raised cuticle) absorbs colour faster and deeper than the formula predicts — taking in more pigment molecules than expected and depositing at a darker level. This is especially prominent at the ends of previously coloured hair. Prevention: use a porosity equalizer on porous ends before colouring, apply a lighter or diluted formula to ends compared to roots, or apply the colour to roots first and ends last. If already occurred, a gentle colour reducer or clarifying treatment can open the over-dark ends selectively.",
    order: 169,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "What is 'toning' in hair colouring and which developer volume is typically used for a toning service?",
    options: [
      "Toning refers to applying a permanent colour at full developer strength for maximum deposit",
      "Toning uses a semi-permanent or demi-permanent formula at low developer volume (5–10 volume) applied to pre-lightened hair to neutralize unwanted warm tones and deposit the desired cool, neutral, or fashion tone without additional lifting",
      "Toning uses 40 volume developer for maximum lift and tone deposit simultaneously",
      "Toning is a conditioning treatment that does not alter hair colour"
    ],
    correctIndex: 1,
    explanation: "Toning is performed on pre-lightened hair to achieve the target tone by neutralizing underlying warm pigment. Toners are typically semi-permanent or demi-permanent formulas with very low peroxide (5–10 volume) — just enough to open the cuticle slightly for deposit without any lightening action. This provides the final colour result on bleached or highlighted hair, completing a double-process service. Common toners: violet for silver/white, beige for champagne, ash for cool blonde, pearl for icy results.",
    order: 170,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "A client with previously highlighted, porous hair is getting a fashion pastel pink colour. What special consideration is required for the formula?",
    options: [
      "Apply the most concentrated formula available for the most vibrant result",
      "The hair must be pre-lightened to at least pale yellow (Level 9–10) before applying any pastel fashion colour; porous hair absorbs colour faster but also fades faster — the formula may need to be slightly more concentrated than the target shade to account for fade, and bond-building treatments should be incorporated to reduce porosity and extend longevity",
      "Apply a pink semi-permanent directly over unbleached hair for a subtle result",
      "Use a permanent colour formula for pastel colours — it is the only one that holds"
    ],
    correctIndex: 1,
    explanation: "Pastel fashion colours are highly diluted direct dyes — they are visible only on a very light base (Level 9–10 pale yellow or white). On darker bases, pastel pigments are invisible. Porous hair deposits quickly but fades rapidly — to achieve longevity, the formula can be slightly over-concentrated, a bond builder (Olaplex, K18) incorporated during the service to reduce porosity, and the client advised to use colour-safe, sulphate-free shampoo and limit washing frequency. Direct dye pastels typically last 4–8 washes.",
    order: 171,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "What is the purpose of a bond-building treatment (e.g., Olaplex, K18) when used during or after a colour or bleaching service?",
    options: [
      "It is a marketing product — no proven benefit during chemical services",
      "Bond builders work within the cortex to reconnect broken disulfide and peptide bonds damaged during chemical processing — when used during bleaching or colouring, they reduce the degree of bond breakage, maintaining strength, elasticity, and integrity; used after as a treatment to restore compromised bonds",
      "Bond builders permanently change the hair's curl pattern",
      "Bond builders replace the neutralizer step in a permanent wave service"
    ],
    correctIndex: 1,
    explanation: "Bond builders (Olaplex uses bis-aminopropyl diglycol dimaleate; K18 uses a patented peptide) work within the cortex during or after chemical services. Added to bleach, colour, or relaxers, they reconnect disulfide bonds that are cleaved during processing — reducing breakage, improving elasticity, and maintaining cortex integrity. Post-treatment use continues rebuilding broken bonds. Clinical evidence and widespread professional use support their efficacy in reducing chemical damage — they are not merely conditioning agents.",
    order: 172,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "How long should a stylist wait between a colour removal service and a re-colouring service in a single appointment?",
    options: [
      "Re-colour immediately after rinsing the colour remover for best results",
      "Wait at least 30 minutes after colour removal and perform a strand test — the colour remover's reducing action can interfere with a new permanent colour's oxidation if the hair is not fully rinsed and the reducing agent dissipated",
      "Wait 48 hours between colour removal and re-colouring",
      "No waiting period is needed — colour removers are colour-safe"
    ],
    correctIndex: 1,
    explanation: "Colour removers work through reduction (the same chemistry as perm waving solutions). Residual reducing agent in the hair after rinsing can interfere with the oxidative chemistry of the new permanent colour — reducing the hydrogen peroxide before it can fully develop the new colour molecules, producing uneven or underdeveloped results. After thorough rinsing, applying a few drops of the new developer to a test strand and watching for fizzing (indicating residual reductant) confirms whether it is safe to proceed. Most protocols recommend at least a 30-minute wait with thorough rinsing.",
    order: 173,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "What formula guideline helps a hairstylist predict the result of mixing two permanent colour shades?",
    options: [
      "The two shades simply average in depth and tone with no predictable law",
      "The law of colour: mix equal parts of two formulas and the resulting depth is the average of the two levels; the resulting tone is a mixture of both tones — a warm shade and an ash shade of the same level mixed equally produce a natural result",
      "The darker shade always dominates — the lighter shade has no influence",
      "Mixing colours of different levels always produces a mid-level result of Level 5"
    ],
    correctIndex: 1,
    explanation: "When mixing two permanent colour formulas: the resulting depth is approximately the average of the two levels. Example: 5N + 7N at equal parts = approximately Level 6 natural. The resulting tone combines both tones proportionally. Example: 7G (gold) + 7A (ash) at equal parts = 7N (natural). This allows hairstylists to fine-tune formulas precisely — adding a percentage of a complementary tone to neutralize an undesired tone, or averaging levels to achieve between-level results. Understanding this principle is foundational to professional formulation.",
    order: 174,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Hair Extensions",
    question: "What is the primary difference between a keratin bond (fusion) hair extension and a tape-in extension?",
    options: [
      "Keratin bonds are temporary; tape-ins are permanent",
      "Keratin bond extensions use a heat-fused keratin adhesive to attach individual strands near the root of natural hair; tape-in extensions use a double-sided adhesive strip sandwiched between a thin weft of extension hair and the natural hair — a flatter, faster method",
      "Tape-in extensions are applied with a hot glue gun; keratin bonds use cold fusion",
      "They are identical — only the brand name differs"
    ],
    correctIndex: 1,
    explanation: "Keratin/fusion extensions: a single pre-tipped strand is attached to a small section of natural hair using a heated fusion tool that melts the keratin tip, bonding it near the root. Provides the most natural movement. Takes 2–4 hours. Tape-in extensions: thin, pre-made wefts with adhesive strips are sandwiched onto sections of natural hair. Faster to apply (1 hour), lie flat, and are less detectable under the hair. Both require professional maintenance and are repositioned every 6–8 weeks as the hair grows.",
    order: 175,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Hair Extensions",
    question: "A client interested in clip-in hair extensions has fine, fragile hair. What concern must be discussed before recommending a method?",
    options: [
      "Fine hair cannot support any type of extension",
      "Clip-in extensions are always the safest choice — recommend immediately without assessment",
      "The weight of extensions on fine, fragile hair can cause traction alopecia — hair loss from the sustained mechanical tension at the root; the weight, length, and frequency of wear must be discussed; lightweight extensions worn short-term are preferable",
      "Clip-in extensions can only be used on naturally thick hair with no modifications"
    ],
    correctIndex: 2,
    explanation: "Extensions on fine or fragile hair carry a risk of traction alopecia — gradual hair loss caused by sustained mechanical tension at the root. Fine hair has fewer and thinner strands to anchor the additional weight. Clip-in extensions are the least damaging method (not worn 24/7), but even temporary use can stress fine hair. The hairstylist must discuss realistic expectations, recommend lightweight extensions, limit length and volume, and advise against daily wear to minimize cumulative tension on vulnerable follicles.",
    order: 176,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Hair Extensions",
    question: "When colouring a client's hair that has keratin bond extensions, what must be avoided?",
    options: [
      "Apply colour freely — extensions do not affect the colour process",
      "Avoid applying colour directly onto the keratin bond area — oxidative colour and bleach can dissolve the keratin bond adhesive, causing extensions to slip out; application must be carefully kept away from the bonds",
      "Colour must always be applied at 40 volume to prevent bond slippage",
      "Apply toner only — permanent colour cannot be used with any extensions"
    ],
    correctIndex: 1,
    explanation: "Oxidative colour and bleach formulas are alkaline and/or contain reducing agents that break down the keratin adhesive bonds. Applying colour products directly to or through the bond area causes the adhesive to weaken and the extension strand to slip out — or fall off completely. When colouring a client with extensions, the hairstylist must section carefully, avoid the bond areas, and work with formulas that minimize contact time near the bonds. Bond-safe colour formulas with lower alkalinity are preferred.",
    order: 177,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Hair Extensions",
    question: "What is Remy hair in the context of human hair extensions, and why is it considered higher quality?",
    options: [
      "Remy is a brand name — all extension hair is equivalent in quality",
      "Remy hair is human hair collected and processed with all cuticles aligned in the same direction (root to tip) — this prevents tangling, maintains natural shine and smoothness, and extends the life of the extension compared to non-Remy hair where cuticles are randomly oriented",
      "Remy hair is synthetic hair that has been treated to resemble human hair",
      "Remy hair has been chemically processed to remove all cuticle layers for the smoothest feel"
    ],
    correctIndex: 1,
    explanation: "Remy hair is human hair where all strands are collected and kept in the same root-to-tip (cuticle-aligned) direction throughout processing. Because the cuticles all lay in the same direction, they lay flat against each other — preventing friction-induced tangling, maintaining natural shine, and extending the usable life of the extension. Non-Remy hair has randomly oriented cuticles — they catch on each other and tangle quickly. Remy is the gold standard for natural-looking, long-lasting extension hair.",
    order: 178,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Hair Extensions",
    question: "Before fitting a client with a ready-made wig (stock wig), what measurements and assessments are needed?",
    options: [
      "No measurements are required — all wigs fit all head sizes",
      "Measure the client's head circumference, front hairline to nape length, ear-to-ear across the crown, and temple-to-temple; assess the client's existing hair length and density to determine how to prepare the hair underneath for the most natural fit and appearance",
      "Only the head circumference is needed — all other dimensions are standardized",
      "No assessment needed for ready-made wigs — only custom wigs require measurement"
    ],
    correctIndex: 1,
    explanation: "Fitting a wig properly requires measuring the full head: circumference around the perimeter at the hairline, front hairline to nape (length), ear-to-ear across the top, and ear-to-ear front-to-back across the crown. These measurements identify whether a stock wig will fit and which size is appropriate. The existing hair must be assessed — long hair must be flat-wrapped under a wig cap to avoid bulk that changes the fit. Improper fit causes discomfort and an unnatural appearance.",
    order: 179,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Hair Extensions",
    question: "What is the purpose of a lace-front wig, and what makes it more realistic-looking than a full-cap wig?",
    options: [
      "Lace-front wigs are machine-made and always lower quality than full-cap wigs",
      "Lace-front wigs have a sheer lace panel at the front hairline where individual hairs are hand-knotted — when applied with adhesive, the lace becomes invisible against the scalp, creating the illusion of a natural hairline; standard full-cap wigs have a machine-wefted perimeter that is visible and more artificial-looking at the hairline",
      "Lace-front wigs use stronger adhesive than full-cap wigs for better hold",
      "Lace-front wigs are only used for medical hair loss — not for fashion use"
    ],
    correctIndex: 1,
    explanation: "The distinguishing feature of a lace-front wig is the hand-knotted lace panel at the front — when the lace is trimmed close to the hairline and secured with medical-grade adhesive or tape, it becomes invisible against the skin, creating a completely natural-looking hairline. Individual hairs appear to grow directly from the scalp. Standard full-cap wigs have a woven track at the perimeter — the edge is clearly visible at the hairline. Lace fronts are the professional standard for theatrical, fashion, and medical hair replacement.",
    order: 180,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Specialized Services",
    question: "A client undergoing chemotherapy experiences complete hair loss (alopecia totalis). What special considerations apply when they visit the salon for a wig fitting?",
    options: [
      "Treat the appointment exactly as a standard wig fitting — no modifications needed",
      "Approach with sensitivity to the emotional and psychological impact of hair loss; ensure privacy; use gentle, non-irritating materials on a potentially sensitive scalp; offer wig cap liner options for sensitive scalps; measure carefully as the head shape changes without hair; and be prepared for an emotionally supportive conversation",
      "Advise the client to wait until chemotherapy is complete before purchasing a wig",
      "Recommend only synthetic wigs — human hair wigs are not appropriate for medical hair loss"
    ],
    correctIndex: 1,
    explanation: "Hairstylists serving clients experiencing medically-induced hair loss must approach the appointment with heightened sensitivity and professionalism. Key considerations: emotional support (hair loss is psychologically significant), privacy for a potentially vulnerable client, scalp sensitivity (chemo-affected scalp may be more sensitive — use soft, non-irritating wig caps and liners), accurate measurements (scalp without hair is measured differently), and education about wig care. Both human hair and high-quality synthetic wigs are appropriate — the choice depends on budget, lifestyle, and preference.",
    order: 181,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Specialized Services",
    question: "What is a 'skin fade' on the face (temple/cheek region) in barbering-influenced hairstyling, and what tool is used?",
    options: [
      "A chemical bleaching technique to lighten facial hair for a gradient effect",
      "A clipper technique where facial/temple hair is gradually blended from skin-close (zero guard) at the perimeter to the desired length higher up — creating a seamless transition from shaved to longer hair across the temple and cheek area",
      "A shaving cream application technique using a straight razor only",
      "A contouring technique using makeup to define the hairline"
    ],
    correctIndex: 1,
    explanation: "A skin fade on the temple or cheek extends the head's clipper fade onto the face — the hairline at the temple and cheek corners is faded from skin-close at the boundary to the desired length of the sideburn or hair at the sides. This requires precise clipper work using decreasing guard sizes, the taper lever, and detailed finish work with a trimmer/outliner around the hairline to define the edge. This technique bridges hairdressing and barbering and is increasingly expected in full-service salons.",
    order: 182,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Specialized Services",
    question: "When performing a scalp massage for a client, which type of manipulation stimulates circulation and is appropriate for most scalp conditions?",
    options: [
      "Friction (vigorous rubbing) applied directly to any scalp condition",
      "Effleurage (light, gliding strokes) and petrissage (kneading/lifting movements) applied with the pads of the fingers — stimulating blood flow without irritating the scalp; friction is avoided on sensitive or inflamed scalps",
      "Tapotement (percussive tapping) only — other massage types are not used on the scalp",
      "Vibration massage using an electric tool applied directly to irritated scalp areas"
    ],
    correctIndex: 1,
    explanation: "Effleurage (light, rhythmic gliding) and petrissage (circular kneading, lifting) are the foundational scalp massage movements. They promote blood circulation to the follicles, relax scalp muscles, stimulate sebaceous gland secretion, and enhance client relaxation. The pads (not tips) of the fingers are used to avoid nail scratching. Friction is appropriate on healthy scalps but avoided on inflamed, abraded, or sensitive scalps. Scalp massage is contraindicated before chemical services to avoid creating micro-abrasions.",
    order: 183,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Specialized Services",
    question: "What is the purpose of a hot oil treatment in the salon, and which hair types benefit most?",
    options: [
      "Hot oil treatments are used before perming to pre-process the hair",
      "Hot oil treatments use warmed botanical or mineral oils (olive, coconut, argan, jojoba) applied to the hair and scalp with gentle heat — softening and conditioning dry, brittle, or over-processed hair; the heat opens the cuticle to allow oil penetration, adding moisture, elasticity, and shine",
      "Hot oil removes excess colour pigment between colour services",
      "Hot oil is used only on the scalp — it must not contact the hair shaft"
    ],
    correctIndex: 1,
    explanation: "Hot oil treatments apply warmed oil to dry or damp hair and the scalp. Gentle external heat (towel wrap, steam cap, or hooded dryer) opens the cuticle slightly, allowing oil molecules to penetrate into the cortex — adding lubrication, softening, and flexibility to dry, brittle, heat-damaged, or chemically over-processed hair. They are particularly beneficial for: very dry/coarse hair, low-porosity hair (which benefits from the heat-opened cuticle), scalp dryness, and hair that has been depleted of natural oils by harsh surfactants.",
    order: 184,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Specialized Services",
    question: "A client wants a scalp micropigmentation (SMP) procedure. Is this within the scope of practice for a licensed hairstylist?",
    options: [
      "Yes — it is a standard hairstyling service performed in most salons",
      "No — scalp micropigmentation is a cosmetic tattooing procedure that involves penetrating the dermis with pigment; it is outside the scope of practice for a hairstylist and is regulated as a cosmetic tattooing or micropigmentation service requiring specific separate licensing",
      "Yes, if the hairstylist uses a special SMP tool approved for salon use",
      "It depends on the province — hairstylists can perform SMP in some jurisdictions"
    ],
    correctIndex: 1,
    explanation: "Scalp micropigmentation involves using a tattoo-style device to deposit pigment into the dermis of the scalp — creating the appearance of hair follicle dots to simulate a closely shaved head or add density. This procedure involves skin penetration, which is outside the regulated scope of practice for a hairstylist. It requires separate training and licensing as a cosmetic tattooist or micropigmentation specialist. A hairstylist who performs SMP without proper licensing is practising an unlicensed regulated health profession in most jurisdictions.",
    order: 185,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Specialized Services",
    question: "What is the purpose of applying a pre-waxing powder to the skin before facial waxing (brow or upper lip)?",
    options: [
      "To help the wax adhere to the skin for maximum waxing effectiveness",
      "To absorb surface moisture and oils from the skin — ensuring the wax adheres to the hair rather than sliding on the skin's natural oils, improving wax grip and hair removal effectiveness while reducing skin lifting",
      "To cool the skin before applying hot wax",
      "To chemically weaken the hair before removal"
    ],
    correctIndex: 1,
    explanation: "Pre-waxing powder (cornstarch or talcum) absorbs sebum and surface moisture from the skin, creating a dry surface. Wax adheres primarily to the hair rather than the skin — this reduces 'grab' on the skin, minimizes skin lifting risk, and maximizes hair removal efficiency. Oily skin prevents wax from gripping the hair adequately, resulting in incomplete removal and repeated strips that irritate the skin. The pre-powder step is a standard part of professional waxing protocol.",
    order: 186,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "mwa-h-frontdesk",
    topicLabel: "MWA H — Front Desk and Salon Operations",
    question: "When booking a client appointment over the phone, which information is essential to collect?",
    options: [
      "Only the client's name and preferred stylist",
      "Client name and contact number, service(s) requested, any known allergies or chemical history relevant to the service, preferred stylist, date and time — and confirm whether a patch test is required (colour services)",
      "Only the service and time — personal information is not collected by phone",
      "Payment information only — other details are collected at check-in"
    ],
    correctIndex: 1,
    explanation: "Effective appointment booking captures: client name and callback number (for confirmation and reminders), all services requested (to allow adequate time), any allergy or chemical history that affects service planning, preferred stylist, and confirmed appointment time. For colour services, the booking team must confirm whether a patch test has been performed within 48 hours — if not, the patch test must be scheduled before the colour appointment. Incomplete booking information leads to scheduling errors, inadequate service time, and safety risks.",
    order: 187,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "mwa-h-frontdesk",
    topicLabel: "MWA H — Front Desk and Salon Operations",
    question: "A client calls to complain about a service performed last week. What is the most professional way to handle the complaint?",
    options: [
      "Tell the client the result was correct and they are mistaken about the outcome",
      "Listen empathetically without interrupting, apologize for the client's dissatisfaction, invite them in for a consultation to assess the concern in person, and work toward a mutually acceptable solution — document the complaint in the client record",
      "Offer a full refund immediately over the phone without hearing the details",
      "Transfer the call to voicemail — complaints are handled by mail only"
    ],
    correctIndex: 1,
    explanation: "Professional complaint resolution: (1) listen completely without interrupting or becoming defensive, (2) acknowledge the client's feelings and apologize for their dissatisfaction (without necessarily admitting fault before assessment), (3) invite the client in for an in-person assessment — many service issues can be identified and corrected in a follow-up appointment, (4) offer a realistic solution (correction, complimentary service, partial adjustment), and (5) document the complaint and resolution in the client record for future reference.",
    order: 188,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "mwa-h-frontdesk",
    topicLabel: "MWA H — Front Desk and Salon Operations",
    question: "What is the purpose of maintaining a client record card (service history), and what are the professional obligations surrounding this data?",
    options: [
      "Client records are optional — experienced stylists remember all client details",
      "Client records document service history, formulas, reactions, and preferences — enabling consistent results across multiple visits and stylists, supporting safety decisions, and providing a legal record; they must be stored securely, kept confidential, and their handling must comply with applicable privacy legislation (e.g., PIPEDA in Canada)",
      "Client records are only required for chemical services",
      "Client records are the property of the stylist personally, not the salon"
    ],
    correctIndex: 1,
    explanation: "Client records serve: (1) service consistency — exact formulas are reproducible; (2) safety — allergies, contraindications, and reactions are documented and reviewed before each service; (3) legal protection — if a dispute or adverse reaction occurs, the record demonstrates informed consent and professional practice; (4) business analytics — service history informs marketing and retention strategies. In Canada, personal health-adjacent information must be stored securely and handled in compliance with privacy legislation (PIPEDA federally; provincial equivalents).",
    order: 189,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "mwa-h-frontdesk",
    topicLabel: "MWA H — Front Desk and Salon Operations",
    question: "How should a hairstylist calculate the retail price of a service to ensure the salon remains profitable?",
    options: [
      "Set prices the same as the competitor down the street",
      "Calculate costs: product cost per service + hairstylist's time (labour cost) + allocated overhead (rent, utilities, supplies per service hour) + desired profit margin — then set the price accordingly",
      "Charge only for materials — labour time should not factor into service pricing",
      "Use the manufacturer's suggested retail price for all services"
    ],
    correctIndex: 1,
    explanation: "Service pricing must cover all costs and provide profit margin. A proper calculation includes: (1) direct product cost per service (colour, chemicals, etc.), (2) labour cost (stylist's wage or commission for the service time), (3) allocated overhead (portion of rent, utilities, insurance, equipment depreciation), and (4) desired profit margin. Pricing below cost is economically unsustainable regardless of competitor pricing. Regular cost reviews ensure pricing remains profitable as product and overhead costs change.",
    order: 190,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "mwa-h-frontdesk",
    topicLabel: "MWA H — Front Desk and Salon Operations",
    question: "What is the professional etiquette regarding recommending retail products to a client after a service?",
    options: [
      "Never recommend retail products — it is aggressive sales behaviour",
      "Base all recommendations on the specific needs identified during the consultation and service — recommend products that genuinely support the service result and address the client's hair concerns; explain the benefit specifically related to their hair and service, and avoid recommending products purely for commission",
      "Recommend only the most expensive products available for maximum revenue",
      "Retail recommendations are only appropriate for new clients — regular clients should not be offered retail"
    ],
    correctIndex: 1,
    explanation: "Professional retail recommendations are client-centred, not sales-centred. The hairstylist is in a unique position of expertise — clients trust product recommendations based on the professional's knowledge of their hair. Recommending products that genuinely address the client's specific concerns (e.g., a colour-safe sulphate-free shampoo after a colour service, or a strengthening treatment after a chemical service) is a professional service, not a sales technique. Recommending products for commission alone undermines trust and is unprofessional.",
    order: 191,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "What is the difference between an employee hairstylist and a booth-renter (independent contractor) in a salon?",
    options: [
      "There is no difference — all hairstylists in Canada are self-employed",
      "An employee hairstylist receives a wage or salary, has taxes deducted at source, and works within the employer's direction (schedule, services, pricing); a booth renter is self-employed, pays rent to the salon owner for use of a station, sets their own prices, controls their schedule, and is responsible for their own taxes, insurance, and business expenses",
      "Booth renters earn more because they are senior stylists",
      "Employees keep all their tips; booth renters remit tips to the salon owner"
    ],
    correctIndex: 1,
    explanation: "The employee/independent contractor distinction has legal implications in Canada. An employee: wage or salary with source deductions (CPP, EI, income tax), entitled to Employment Standards Act protections (vacation pay, overtime, termination notice), works within employer direction. A booth renter (self-employed): pays chair rent to the salon, sets their own prices and schedule, keeps all revenue, is responsible for own HST/GST registration (if revenue threshold exceeded), no source deductions, no EI entitlement. Misclassifying an employee as a contractor is a violation of employment law.",
    order: 192,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "A hairstylist employed at a wage wants to calculate whether a potential booth-rental opportunity is financially advantageous. What costs must she consider?",
    options: [
      "Only the monthly rent amount compared to her current wage",
      "Total booth rent, product costs (she pays for all products herself), professional liability insurance, tools and equipment maintenance, provincial trade license fees, HST/GST registration and remittance, income tax instalments, absence of EI/CPP employer contributions, and the need to self-fund retirement savings — all must be weighed against the revenue she would generate",
      "Only product costs — everything else remains the same as when employed",
      "Booth rental is always more financially advantageous — no calculation needed"
    ],
    correctIndex: 1,
    explanation: "A booth renter (self-employed) bears all business costs independently. The full cost analysis must include: monthly chair rent, all professional products (no employer subsidy), professional liability insurance (mandatory for self-employed practitioners), ongoing tool maintenance and replacement, provincial/territorial licensing fees, HST/GST registration and quarterly remittance, federal and provincial income tax instalments, no employer CPP contributions (must pay both employee and employer portions), no access to employment insurance. These costs significantly exceed the wage deductions of an employee and must be covered by a sufficient client base.",
    order: 193,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "What is the purpose of a salon's appointment book occupancy rate as a business metric?",
    options: [
      "It measures the number of products sold per stylist per month",
      "Occupancy rate (booked appointment hours / available appointment hours × 100%) measures how efficiently the salon's time capacity is being used — a consistently low rate indicates insufficient clients or pricing issues; a consistently high rate indicates the salon may need additional staff or extended hours",
      "It measures the percentage of clients who purchase retail products",
      "It measures the proportion of new clients versus returning clients"
    ],
    correctIndex: 1,
    explanation: "Appointment book occupancy rate = (hours booked / hours available) × 100%. A rate below 60% suggests underutilization — the salon may need to invest in marketing, client retention, or pricing review. A rate consistently above 80–85% suggests the salon is at capacity and growth may require additional staff, extended hours, or relocation to a larger space. Occupancy rate is one of the key performance indicators (KPIs) for salon business health.",
    order: 194,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "Under provincial trade regulations, when is a hairstylist legally required to display their trade certificate or licence in the salon?",
    options: [
      "Only when a provincial inspector requests it",
      "Provincial regulations in most Canadian jurisdictions require that a hairstylist's trade certificate or provincial licence be displayed prominently in the work area where clients can see it — demonstrating the stylist's qualifications and regulatory compliance",
      "Only in salons with more than 5 employees",
      "Trade certificates are personal property and must never be displayed publicly"
    ],
    correctIndex: 1,
    explanation: "Most Canadian provincial and territorial hairstyling regulatory bodies require that a licensed hairstylist's certificate or licence be displayed prominently in the salon — visible to clients. This serves as consumer protection: clients can verify that the person performing services on their hair and scalp is properly licensed and regulated. Failure to display may result in regulatory penalties. The licence must be current (renewed as required by the province) and must match the person performing the services.",
    order: 195,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "What is the importance of professional liability (errors and omissions) insurance for a hairstylist?",
    options: [
      "It is optional — only salon owners require insurance",
      "Professional liability insurance protects the hairstylist against financial claims from clients who allege harm caused by the service (chemical burns, allergic reactions, hair damage, injury) — without it, the stylist bears personal legal and financial liability for adverse outcomes",
      "It is only required for stylists performing chemical services, not cutting or styling",
      "The salon owner's general liability insurance covers all employed stylists — individual insurance is never needed"
    ],
    correctIndex: 1,
    explanation: "Professional liability (malpractice/errors and omissions) insurance is essential for any hairstylist — whether employed or self-employed. It covers legal costs and financial settlements if a client claims harm from a service. Employed stylists may have some coverage under the salon's general liability policy, but this often has limitations. Self-employed stylists and booth renters must carry their own policy. Given the potential for chemical burns, allergic reactions, scalp injuries, or property damage in salon services, professional liability insurance is a non-negotiable professional protection.",
    order: 196,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "What is the 'client lifetime value' concept in salon business and why does it matter for a hairstylist?",
    options: [
      "It is the total amount a client spends in a single appointment",
      "It is the total revenue a client generates over their entire relationship with the salon — factoring in visit frequency, average service spend, retail purchases, and referrals; retaining an existing client is far less costly than acquiring a new one, making client retention strategies central to salon profitability",
      "It measures how long a client's colour result lasts before needing a touch-up",
      "It is an assessment of how many years a client has been visiting the salon"
    ],
    correctIndex: 1,
    explanation: "Client lifetime value (CLV) estimates the total revenue a single client generates over their entire relationship with the salon. Example: a client spending $150/visit, visiting every 6 weeks, for 5 years = approximately $6,500 in service revenue, plus retail purchases and referrals. Losing a single client to a poor experience or inadequate follow-up is not just one appointment lost — it is potentially thousands of dollars over years. Understanding CLV motivates investment in client experience, follow-up calls, loyalty programs, and service excellence.",
    order: 197,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "What is the role of continuing education (CE) for a licensed hairstylist after obtaining their Red Seal certification?",
    options: [
      "Continuing education is optional and has no impact on licence renewal",
      "CE keeps the hairstylist current with new techniques, products, chemistry advances, safety protocols, and evolving industry standards — many provincial licensing bodies require a minimum number of CE hours for licence renewal; it is a professional obligation and competitive advantage",
      "CE is only required for stylists who failed part of their initial certification exam",
      "The Red Seal designation means no further education is ever required"
    ],
    correctIndex: 1,
    explanation: "The hairstyling industry evolves continuously — new colouring techniques, chemical formulations, hair extension methods, safety regulations (WHMIS updates, carcinogen advisories), accessibility standards, and diversity competencies emerge regularly. Many provinces require CE hours for licence renewal. Beyond the regulatory requirement, ongoing education distinguishes professionals, expands service menus, improves client outcomes, and demonstrates commitment to excellence. The Red Seal certification reflects knowledge at the time of exam — it does not account for subsequent industry developments.",
    order: 198,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "A hairstylist notices a colleague at work performing services without a valid provincial licence. What is the most appropriate professional response?",
    options: [
      "Ignore the situation — it is not the hairstylist's responsibility",
      "Speak privately with the colleague first; if unresolved, report the concern to the salon manager and/or the provincial regulatory body — unlicensed practice endangers clients and undermines the professional standards of the trade",
      "Compete for the colleague's clients to reduce their business",
      "Contact the media immediately without speaking to the colleague or management first"
    ],
    correctIndex: 1,
    explanation: "Unlicensed practice is a regulatory violation in all Canadian provinces and territories with licensing requirements. It endangers clients who have no assurance of the practitioner's competency and puts the salon at legal risk. The professional response: address it directly with the colleague first (they may be unaware of an issue with their renewal), then escalate to the salon manager, and if not resolved, report to the provincial regulatory body. Hairstylists have a professional obligation to protect the public and uphold regulatory standards of the trade.",
    order: 199,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "A hairstylist is considering opening their own salon. Which regulatory requirements must they research before launching?",
    options: [
      "Only the local business name registration — no other regulatory research is needed",
      "Provincial business registration, trade-specific salon licensing (where required), zoning and building code compliance for salon premises, health and safety regulations (OH&S, salon sanitation standards), WHMIS compliance, HST/GST registration (if revenue threshold is met), employment standards for any employees hired, and professional liability insurance",
      "Only the provincial hairstyling licence — business licensing is handled by the landlord",
      "Only a municipal business licence is needed — provincial regulations do not apply to small salons"
    ],
    correctIndex: 1,
    explanation: "Opening a salon requires compliance with multiple regulatory layers: (1) federal — business number and HST/GST registration if applicable, (2) provincial — business registration, trade-specific salon licence (required in many provinces), employment standards compliance for employees, OH&S compliance for chemical hazards (WHMIS), (3) municipal — business licence, zoning compliance, signage permits, building permit for renovations, and (4) professional obligations — sanitation and infection control standards set by the provincial regulatory body. Failure to comply with any layer risks closure, fines, or legal action.",
    order: 200,
  }
];
