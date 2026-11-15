// Blog articles. Each section: { h: heading, p: [paragraphs], list: [bullets] }.

export const posts = [
  {
    slug: 'how-to-get-an-accurate-machining-quote',
    title: 'How to Get an Accurate Machining Quote the First Time',
    description:
      'The seven details a machine shop needs to quote your job correctly, and how to send them even when you have no drawing.',
    date: '2026-11-10',
    category: 'Buying guide',
    image: '/images/generated/engineering-drawing.webp',
    services: ['cnc-machining', 'lathe-work'],
    sections: [
      {
        p: [
          'Most delays in job work happen before a single chip is cut. An enquiry arrives as a blurry photo with the words “how much for this?”, three days of back-and-forth follow, and the plant is still down. A complete enquiry gets a firm price in hours, not days.',
          'Here is what a machine shop actually needs from you.',
        ],
      },
      {
        h: '1. A drawing, a model or a measured sample',
        p: [
          'A dimensioned drawing is best. A STEP or DXF file is equally good for CNC and profile-cutting work. If neither exists, send the part itself, or clear photos taken square-on with a scale or vernier in the frame, plus the main dimensions written down.',
        ],
      },
      {
        h: '2. Material and grade',
        p: [
          '“Steel” is not a specification. Mild steel, EN8, EN24 and SS 316 differ several times over in price and in how long they take to machine. If you do not know the grade, describe the duty: what the part does, what it runs against, and whether it sees water, chemicals or heat.',
        ],
      },
      {
        h: '3. Quantity, now and later',
        p: [
          'One piece and fifty pieces are planned differently. If the part is likely to repeat, say so. A shop may make a simple fixture on the first order that reduces the price of every later batch.',
        ],
      },
      {
        h: '4. Tolerances that matter',
        p: [
          'Mark the dimensions that are genuinely critical: bearing seats, bores, thread fits, sealing faces. Leaving everything else on a general tolerance keeps the price down. Asking for tight limits on every dimension can double the machining time for no benefit.',
        ],
      },
      {
        h: '5. Finish and treatment',
        p: [
          'State any hardening, plating, blackening, polishing or painting required, and whether the shop should arrange it. Heat treatment affects the machining sequence, so it has to be known before the job starts.',
        ],
      },
      {
        h: '6. Who supplies the material',
        p: [
          'If you are issuing certified bar or a casting, say so. If the shop is to buy material, mention whether test certificates are needed.',
        ],
      },
      {
        h: '7. The real deadline',
        p: [
          '“Urgent” means different things to different people. Give a date and a reason: a shutdown ending on Sunday, a vessel sailing on Thursday. A shop can then tell you honestly whether it is achievable.',
        ],
      },
      {
        h: 'A message you can copy',
        p: [
          'Part: pump shaft, as per attached drawing. Material: SS 316. Quantity: 2 now, 4 more next quarter. Critical: bearing seats and thread. Needed by: Friday. Material: please supply. Send that with a drawing on WhatsApp and you will have a meaningful quote quickly.',
        ],
      },
    ],
  },
  {
    slug: 'cnc-machining-vs-conventional-lathe-work',
    title: 'CNC Machining vs Conventional Lathe Work: Which Does Your Job Need?',
    description:
      'CNC is not always better, and manual is not always cheaper. A practical way to choose between them by quantity, shape and deadline.',
    date: '2026-11-03',
    category: 'Machining basics',
    image: '/images/generated/cnc-machining.webp',
    services: ['cnc-machining', 'lathe-work', 'milling-work'],
    sections: [
      {
        p: [
          'Customers often ask for “CNC work” because it sounds more accurate. Sometimes it is the right call. Just as often, a skilled turner on a conventional lathe will deliver the same part sooner and for less. The difference comes down to three things: how many, how complex, and how soon.',
        ],
      },
      {
        h: 'How the two differ',
        p: [
          'On a conventional lathe or milling machine the operator controls every cut by hand, measuring as the work proceeds. On a CNC machine the tool path is programmed and the machine repeats it exactly, cycle after cycle.',
          'The CNC machine needs programming, tool setting and a proven first piece before it earns anything. That preparation is the price of repeatability.',
        ],
      },
      {
        h: 'When conventional work wins',
        list: [
          'One-off spares and repairs, where setup time would exceed machining time',
          'Simple shapes: plain shafts, bushes, spacers, faced flanges',
          'Repair jobs that need judgement, such as cleaning up a worn journal to the smallest usable size',
          'Breakdowns where the part is needed today',
        ],
      },
      {
        h: 'When CNC wins',
        list: [
          'Batches, where every part must match the last',
          'Curves, tapers, radii and profiles that are slow to produce by hand',
          'Parts with many features or hole patterns positioned from CAD data',
          'Repeat orders, since the program is kept and reused',
        ],
      },
      {
        h: 'What about accuracy?',
        p: [
          'Both methods can hold the tolerances that general engineering parts require. CNC’s real advantage is consistency: the hundredth part is the same as the first. For a single shaft, a good operator with a micrometer will hold a bearing fit just as well.',
        ],
      },
      {
        h: 'A simple rule of thumb',
        p: [
          'One to five simple parts: conventional. Complex geometry or repeat batches: CNC. Everything in between: ask. A workshop that has both will route the job to whichever is cheaper for your quantity, and many parts use both, with turning done conventionally and a profiled feature finished on CNC.',
        ],
      },
    ],
  },
  {
    slug: 'choosing-the-right-material-for-machined-parts',
    title: 'Choosing the Right Material for a Machined Part: MS, EN8, EN24 or Stainless?',
    description:
      'A plain-language guide to the steel grades most Indian workshops use every day, what each is good at, and when paying more is worth it.',
    date: '2026-10-22',
    category: 'Materials',
    image: '/images/generated/raw-materials.webp',
    services: ['lathe-work', 'cnc-machining', 'band-saw-cutting'],
    sections: [
      {
        p: [
          'Material choice decides how long a part lasts and a large share of what it costs. Over-specify and you pay for strength you never use. Under-specify and you are back in the workshop in three months with the same broken part.',
        ],
      },
      {
        h: 'Mild steel (MS)',
        p: [
          'Cheap, easy to machine and easy to weld. Right for brackets, base plates, covers, spacers and lightly loaded parts. It cannot be hardened to any useful degree and it rusts, so it is the wrong choice for shafts under heavy load or parts in wet service.',
        ],
      },
      {
        h: 'EN8: the general-purpose shaft steel',
        p: [
          'A medium-carbon steel that is noticeably stronger than mild steel and can be hardened on the surface. Most ordinary shafts, pins, keys and studs are EN8. It is the sensible default when mild steel is not strong enough.',
        ],
      },
      {
        h: 'EN19 and EN24: for load and shock',
        p: [
          'These alloy steels are tough as well as strong, which means they resist shock and fatigue. Crusher shafts, heavy gear shafts, oilfield parts and highly stressed bolts are typical uses. They cost more and machine more slowly, so use them where the duty demands it.',
        ],
      },
      {
        h: 'EN31: for wear',
        p: [
          'A high-carbon bearing steel that hardens to a very high level. Used for rollers, wear pins and guides. It is brittle compared with EN24, so it is not for parts that take impact.',
        ],
      },
      {
        h: 'Stainless steel 304 and 316',
        p: [
          'SS 304 handles water, food products and mild chemicals. SS 316 adds molybdenum, which gives far better resistance to salt and acids; it is the grade for marine, pharmaceutical and aggressive chemical service. Both are tougher to machine than carbon steel, which is reflected in the price.',
        ],
      },
      {
        h: 'Brass, bronze and aluminium',
        p: [
          'Bronze and gunmetal are the classic bush materials because they run well against steel shafts and survive sea water. Brass suits fittings and small turned parts. Aluminium is chosen when weight matters or when a part must be machined quickly.',
        ],
      },
      {
        h: 'Three questions that settle most choices',
        list: [
          'Does it carry load or shock? Move up from MS to EN8, then to EN19 or EN24.',
          'Does it get wet, salty or washed down? Use stainless or bronze.',
          'Does it rub against another part? Make one of the pair softer and replaceable, such as a bronze bush on a steel shaft.',
        ],
      },
    ],
  },
  {
    slug: 'shaft-repair-or-replacement',
    title: 'Worn Shaft: Repair It or Make a New One?',
    description:
      'Weld build-up, sleeving or a new shaft? How to decide when a bearing seat is worn, a keyway is damaged or a shaft has bent.',
    date: '2026-10-14',
    category: 'Maintenance',
    image: '/images/generated/shaft-repair.webp',
    services: ['lathe-work', 'fabrication-welding'],
    sections: [
      {
        p: [
          'A shaft rarely fails all at once. A bearing spins on its seat, a key works loose, a seal cuts a groove, and one day the machine will not run true. The question for the maintenance engineer is always the same: can it be saved, and should it be?',
        ],
      },
      {
        h: 'Option 1: Weld build-up and re-machining',
        p: [
          'The worn area is built up with weld metal and turned back to the original size. It is quick and economical for worn bearing seats and seal areas on plain carbon-steel shafts.',
          'It carries risk on alloy steels and on highly stressed sections, because welding heat can leave hard, crack-prone zones and can bend a long shaft. Those cases need controlled preheating, and sometimes they should not be welded at all.',
        ],
      },
      {
        h: 'Option 2: Sleeving',
        p: [
          'The damaged diameter is turned down and a sleeve is fitted over it, then finished to size. There is little heat involved, so distortion is minimal. Sleeving works well for seal and bearing areas provided enough shaft remains underneath to carry the load.',
        ],
      },
      {
        h: 'Option 3: A new shaft',
        p: [
          'Sometimes the honest answer is replacement. Make a new shaft when:',
        ],
        list: [
          'There is a crack, especially at a step or keyway',
          'The shaft is bent and cannot be straightened reliably',
          'Wear is so deep that repair would leave too little parent metal',
          'The shaft has been repaired before in the same place',
          'A failure would endanger people or cause expensive secondary damage',
        ],
      },
      {
        h: 'Do not ignore the cause',
        p: [
          'A repaired shaft that goes back into the same misaligned, under-lubricated or overloaded machine will fail again. Before refitting, check the bearing, the housing bore, the alignment and the key fit. A loose housing is often the real culprit behind a “worn shaft”.',
        ],
      },
      {
        h: 'What to tell the workshop',
        p: [
          'Send photos of the damage, the shaft’s overall length and diameters, the bearing number if you have it, and the material if known. Mention how long the shaft ran before failing. With that, a workshop can recommend repair or replacement before you even dismantle the rest of the machine.',
        ],
      },
    ],
  },
  {
    slug: 'wire-edm-vs-laser-vs-plasma-cutting',
    title: 'Wire EDM vs Laser vs Plasma Cutting: Choosing the Right Process',
    description:
      'Three ways to cut a profile in metal, compared by thickness, accuracy, edge quality and cost so you can ask for the right one.',
    date: '2026-10-02',
    category: 'Machining basics',
    image: '/images/generated/laser-plasma-cutting.webp',
    services: ['wire-cut-edm', 'laser-plasma-cutting'],
    sections: [
      {
        p: [
          'All three processes cut a shape out of metal without a conventional cutting tool, but they are not interchangeable. Choosing the wrong one either wastes money or produces a part that needs hours of extra machining.',
        ],
      },
      {
        h: 'Plasma cutting: fast and economical on plate',
        p: [
          'A jet of ionised gas melts and blows the metal away. Plasma is the workhorse for profiling medium and thick steel plate. The edge has a slight bevel and a heat-affected skin, which is perfectly acceptable for fabrication and for blanks that will be machined afterwards.',
        ],
      },
      {
        h: 'Laser cutting: clean edges and fine detail',
        p: [
          'A focused beam gives a narrow cut, a square edge and small, accurate holes. Laser is at its best on sheet and moderate plate thicknesses and on parts that will be used as cut, such as covers, brackets and panels.',
        ],
      },
      {
        h: 'Wire EDM: precision in any hardness',
        p: [
          'A thin wire erodes the metal with electrical sparks while submerged in fluid. It is slow compared with the other two, but it is extremely accurate, leaves a fine finish and cuts fully hardened tool steel as easily as soft steel. It can also produce sharp internal corners.',
        ],
      },
      {
        h: 'Quick comparison',
        list: [
          'Rough blanks from thick plate, to be welded or machined: plasma',
          'Sheet-metal parts with clean edges and many holes: laser',
          'Dies, punches, splines and hardened parts: wire EDM',
          'Very tight profile tolerances or tall, thin sections: wire EDM',
          'Lowest cost per metre of cut: plasma, then laser, then wire EDM',
        ],
      },
      {
        h: 'Combining processes',
        p: [
          'Many jobs use more than one. A flange may be plasma-cut as a ring, turned on a lathe and drilled. A die block may be milled soft, hardened and then wire-cut to final profile. Tell the workshop what the finished part must do and let them plan the route.',
        ],
      },
    ],
  },
  {
    slug: 'thread-types-explained-metric-bsp-npt-acme',
    title: 'Thread Types Explained: Metric, BSP, NPT, Square and Trapezoidal',
    description:
      'How to identify the thread on your part and specify it correctly, so the replacement screws in the first time.',
    date: '2026-09-24',
    category: 'Machining basics',
    image: '/images/generated/shaft-thread-fitting-parts.webp',
    services: ['lathe-work', 'drilling-tapping-slotting'],
    sections: [
      {
        p: [
          'More replacement parts are rejected for a wrong thread than for any other reason. Two threads can look identical and still refuse to fit, because they differ in pitch or flank angle by a fraction. Knowing the main families saves a second trip to the workshop.',
        ],
      },
      {
        h: 'Metric threads (M)',
        p: [
          'The standard for general fasteners. Written as diameter and pitch in millimetres, for example M20 × 2.5. If no pitch is given, the coarse pitch is implied. Fine-pitch metric threads are common on shafts, lock nuts and adjusters, so always state the pitch.',
        ],
      },
      {
        h: 'BSP pipe threads',
        p: [
          'The usual pipe thread in India. BSPP is parallel and seals with a washer or O-ring; BSPT is tapered and seals on the thread. The size name refers to the nominal pipe bore, not the thread diameter, so a “1 inch BSP” thread measures about 33 mm across.',
        ],
      },
      {
        h: 'NPT pipe threads',
        p: [
          'The American tapered pipe thread, found on imported equipment and in oil and gas service. It has a 60° flank angle against BSP’s 55° and a different pitch in most sizes. NPT and BSP will start together and then bind. Never mix them on a pressure joint.',
        ],
      },
      {
        h: 'Square, ACME and trapezoidal threads',
        p: [
          'These are power threads, designed to move loads rather than clamp parts. You find them on lead screws, vice screws, valve spindles and jacks. Trapezoidal (metric, 30°) and ACME (inch, 29°) have largely replaced the true square thread because they are stronger and easier to produce.',
        ],
      },
      {
        h: 'How to identify an unknown thread',
        list: [
          'Measure the outside diameter of the male thread with a vernier',
          'Measure the pitch with a thread gauge, or count threads over 25.4 mm',
          'Check whether the thread is parallel or tapered',
          'Note the hand: most are right-hand, but left-hand threads are used on rotating parts',
          'When in doubt, send the mating part',
        ],
      },
      {
        h: 'Order threads as a pair where you can',
        p: [
          'For lead screws and special threads, having the screw and nut made together is the surest way to get a smooth fit with the right clearance.',
        ],
      },
    ],
  },
  {
    slug: 'design-tips-to-reduce-machining-cost',
    title: '8 Design Tips That Reduce Machining Cost Without Hurting Quality',
    description:
      'Small drawing changes that cut setup time, tooling and scrap, from a workshop’s point of view.',
    date: '2026-09-15',
    category: 'Buying guide',
    image: '/images/generated/milling-work.webp',
    services: ['cnc-machining', 'milling-work'],
    sections: [
      {
        p: [
          'Machining cost is mostly time: time to set up, time to cut, time to measure. Designers control more of that time than they realise. These eight habits make a part cheaper to produce while keeping every function intact.',
        ],
      },
      {
        h: '1. Tolerance only what matters',
        p: ['Tight limits belong on fits and sealing faces. Everywhere else, a general tolerance is enough and far quicker to achieve.'],
      },
      {
        h: '2. Add corner radii to pockets',
        p: ['A milling cutter is round, so a perfectly sharp internal corner is impossible without EDM. Specify a radius slightly larger than a standard cutter.'],
      },
      {
        h: '3. Use standard hole and thread sizes',
        p: ['Standard drills and taps are on the shelf. Odd sizes mean special tooling or slow boring operations.'],
      },
      {
        h: '4. Avoid very deep holes and pockets',
        p: ['Depths beyond about four times the tool diameter need special tools and slower cutting. If a deep feature is essential, widen it.'],
      },
      {
        h: '5. Design for fewer setups',
        p: ['Every time a part is unclamped and turned over, time is spent and accuracy is risked. Put features on as few faces as possible.'],
      },
      {
        h: '6. Start from stock sizes',
        p: ['A 50 mm finished shaft is best made from 50 mm bright bar where the surface allows, not turned down from 60 mm. Check available bar and plate sizes before fixing dimensions.'],
      },
      {
        h: '7. Choose the easiest material that does the job',
        p: ['SS 316 can take twice as long to machine as mild steel. Use it where corrosion demands it, not by default.'],
      },
      {
        h: '8. Ask the workshop early',
        p: ['Ten minutes of discussion before the drawing is frozen often removes an operation altogether. A good machinist will tell you which feature is costing the most.'],
      },
    ],
  },
  {
    slug: 'ss-304-vs-ss-316-for-food-and-marine-parts',
    title: 'SS 304 vs SS 316: Which Stainless Steel for Food, Chemical and Marine Parts?',
    description:
      'The two most common stainless grades look the same and cost differently. Here is when 304 is enough and when 316 pays for itself.',
    date: '2026-09-05',
    category: 'Materials',
    image: '/images/generated/food-machinery-components.webp',
    services: ['cnc-machining', 'fabrication-welding'],
    sections: [
      {
        p: [
          'Put a bar of SS 304 next to a bar of SS 316 and you cannot tell them apart. In service, the difference shows within months if the wrong one is chosen: brown staining, pitting, and eventually leaks or contamination.',
        ],
      },
      {
        h: 'What is the actual difference?',
        p: [
          'Both are chromium-nickel stainless steels. SS 316 contains added molybdenum, which greatly improves resistance to chlorides, the salts found in sea water, brine, many sauces and common cleaning chemicals.',
        ],
      },
      {
        h: 'Where SS 304 is the right choice',
        list: [
          'Dry food products: flour, grains, sugar, snacks',
          'Dairy and beverage equipment cleaned with mild detergents',
          'Machine guards, frames, hoppers and tables',
          'General water service and indoor architectural work',
        ],
      },
      {
        h: 'Where SS 316 is worth the premium',
        list: [
          'Salty or acidic foods: pickles, sauces, brines, seafood',
          'Marine parts exposed to sea water or sea air',
          'Pharmaceutical and chemical process equipment',
          'Plants that sanitise with chlorine-based cleaners',
        ],
      },
      {
        h: 'Machining and welding notes',
        p: [
          'Both grades work-harden, so they are machined with sharp tools and steady feeds. Welds should be made with matching filler and cleaned afterwards, because heat tint left on the surface is where corrosion starts.',
          'Stainless parts should also be kept clear of carbon-steel grinding dust and tools. Embedded iron particles are a common cause of “rusting stainless”.',
        ],
      },
      {
        h: 'How to check what you have',
        p: [
          'The grade cannot be confirmed by eye or with a magnet. Ask for a material test certificate with the bar, or have the material checked with a spot test or analyser when the application is critical.',
        ],
      },
      {
        h: 'The short answer',
        p: [
          'If the part sees salt, acid or chlorine, specify SS 316. For everything else, SS 304 does the job at lower cost.',
        ],
      },
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);

export function readingMinutes(post) {
  const words = post.sections
    .flatMap((s) => [s.h || '', ...(s.p || []), ...(s.list || [])])
    .join(' ')
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}
