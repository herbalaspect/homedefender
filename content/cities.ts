/**
 * City + neighborhood pages — generated from this single data file by the
 * dynamic route at src/app/services/roofing/roof-replacement-[city]/page.tsx
 *
 * Source copy:
 *   - 12 cities:        docs/HomeDefender_Website_Content_Library.txt §3
 *   - 6 neighborhoods:  docs/HomeDefender_Neighborhood_Strategy.txt §4
 *
 * Author lines for the per-city testimonials are placeholders — real names
 * go in only after verification (CLAUDE.md non-negotiable).
 */

export interface FAQ {
  question: string;
  answer: string;
}

export interface CityPage {
  /** URL slug — full path becomes /services/roofing/roof-replacement-{slug} */
  slug: string;
  cityName: string;
  cityState: string;
  /** True for the 6 neighborhood pages; false for the 12 city pages. */
  isNeighborhood: boolean;
  /** For neighborhoods only — the city this neighborhood belongs to. */
  parentCity?: string;
  title: string;
  metaDescription: string;
  h1: string;
  hero: string;
  localContext: string;
  permittingSection?: string;
  roofingConsiderations?: string;
  faqs: FAQ[];
  testimonial: { quote: string; author: string; location: string };
  /** Slugs of neighboring city or neighborhood pages to cross-link. */
  neighbors: string[];
}

export const cities: CityPage[] = [
  {
    slug: "madison",
    cityName: "Madison",
    cityState: "WI",
    isNeighborhood: false,
    title: "Roof Replacement in Madison, WI | Home Defender Remodeling",
    metaDescription: "Expert roof replacement for Madison homes. GAF, Owens Corning, CertainTeed materials. 10-year workmanship warranty. Free estimates from $9,000.",
    h1: "Roof Replacement in Madison, WI",
    hero: `Madison sits at the intersection of two lakes, four seasons, and some of the toughest weather Wisconsin produces. Lake-effect humidity in summer. Wind off Lake Mendota in fall. Ice damming on north-facing slopes every February. Whether you live in an older home near downtown or a newer build out toward Mineral Point Road, your roof is working hard year-round to protect what's underneath. When it's time for a replacement, you need a contractor who knows what Madison roofs go through.`,
    localContext: `Madison's housing stock spans more than a century. The Cape Cod-style homes around the Tenney-Lapham, Marquette, and Dudgeon-Monroe neighborhoods often have steep pitches and intricate dormer geometry that requires careful flashing work. The newer west-side and far-east-side subdivisions tend to be larger ranch and Colonial-style homes with more straightforward installs but bigger surface area. Both styles have one thing in common: Wisconsin freeze/thaw cycles will eventually find any weak spot. Home Defender Remodeling's roof replacements include ice and water shield extending well past the eaves — critical for Madison's ice damming patterns — synthetic underlayment that handles humidity changes without buckling, and proper attic ventilation that most older Madison homes desperately need but rarely had built in originally.`,
    faqs: [
      {
        question: "Do I need a permit for a roof replacement in Madison?",
        answer: `Yes. The City of Madison requires a building permit for any roof replacement. We pull all permits as part of our standard process — you don't need to navigate the permit office yourself. Permits typically take 5–10 business days.`,
      },
      {
        question: "How long does a roof replacement take in Madison?",
        answer: `Most full roof replacements complete in 1–2 days. Larger homes (3,500+ square feet) or complex roof geometry can take 3 days. Weather can extend the timeline — we monitor forecasts closely and won't start a tear-off if we can't dry-in before storms arrive.`,
      },
      {
        question: "What's the best time of year to replace a roof in Madison?",
        answer: `Late spring through early fall is ideal — May through October. We can install year-round if needed, but cold weather affects shingle adhesion and asphalt sealing. If your roof can wait, plan for the warmer months.`,
      },
      {
        question: "Do you handle insurance claims for hail or wind damage?",
        answer: `Yes. We document storm damage with photos, write detailed scopes of work, and communicate directly with your insurance adjuster. Most Madison homeowners under-document and lose claims they should win. We don't let that happen to our customers.`,
      },
      {
        question: "What roofing material is best for Madison's climate?",
        answer: `For most Madison homes, architectural asphalt shingles offer the best balance of cost, durability, and Wisconsin-specific performance. Metal roofs are excellent for snow management and longer life but cost 2–3x more upfront. We'll walk you through the trade-offs based on your home and budget. LOCAL TESTIMONIAL placeholder (replace with real Madison customer once available) Home Defender Remodeling replaced our roof on the east side last fall. They were on time, the crew was professional, and the cleanup was actually thorough — we didn't find a single nail in the yard afterwards. The new roof handled this past winter beautifully. — [Customer Name], Madison, WI Use the master template (Section 2) for: service overview, why choose us, our process, materials, warranty, pricing, service area neighbors, final CTA. Substitute {{CITY}} with 'Madison' throughout.`,
      },
    ],
    testimonial: {
      quote: `Replaced our roof on the east side last fall. Crew showed up on time, finished in two days, cleaned the yard better than they found it. Pricing matched the estimate to the dollar.`,
      author: "[Customer Name]",
      location: "Madison, WI",
    },
    neighbors: ["sun-prairie", "verona", "fitchburg", "middleton", "monona"],
  },
  {
    slug: "sun-prairie",
    cityName: "Sun Prairie",
    cityState: "WI",
    isNeighborhood: false,
    title: "Roof Replacement in Sun Prairie, WI | Home Defender Remodeling",
    metaDescription: "Trusted roof replacement for Sun Prairie homeowners. Quality materials, 10-year warranty, free estimates. Serving Sun Prairie and the rest of Dane County.",
    h1: "Roof Replacement in Sun Prairie, WI",
    hero: `Sun Prairie has grown faster than almost any other Madison-area community over the past two decades, which means it has more 1990s and 2000s-era homes than just about anywhere else in Dane County. Those roofs are now hitting the 20–25 year mark — right in the replacement window. If you're a Sun Prairie homeowner noticing curling shingles, granules in the gutter, or daylight in the attic, you're not alone. Home Defender Remodeling has been replacing roofs across Sun Prairie's subdivisions, and we know what these specific homes need.`,
    localContext: `Most Sun Prairie homes built between 1995 and 2010 used architectural asphalt shingles with 25–30 year ratings. In Wisconsin's climate, those shingles typically deliver 20–25 years of real-world service life — meaning the original roof on a Sun Prairie 1998 build is overdue. The good news: most of these homes were built with relatively straightforward roof geometry (limited dormers, simple gable lines), which keeps replacement costs reasonable. The bad news: many of these original installs skimped on attic ventilation and underlayment quality, which accelerated wear. When we replace a roof in Sun Prairie, we upgrade the underlying systems alongside the shingles — proper ventilation, ice and water shield extending up from the eaves, and synthetic underlayment that outperforms the old felt paper most original installs used.`,
    faqs: [
      {
        question: "Do I need a permit for a roof replacement in Sun Prairie?",
        answer: `Yes. The City of Sun Prairie requires a building permit for roof replacements. We handle the permit application and pickup as part of our standard process.`,
      },
      {
        question: "How much does a roof replacement cost in Sun Prairie?",
        answer: `Most Sun Prairie homes fall in the $10,000–$16,000 range for a full replacement, depending on roof size, pitch, and material choice. Larger Colonial-style homes can run higher; smaller ranches lower.`,
      },
      {
        question: "Are there HOA restrictions on roofing materials in Sun Prairie?",
        answer: `Some Sun Prairie subdivisions have HOA architectural review committees that approve material and color choices. We'll help you navigate that process — most associations approve standard architectural shingles within a week.`,
      },
      {
        question: "How does Sun Prairie's weather affect roof life?",
        answer: `Sun Prairie sees the same freeze/thaw cycles as the rest of Dane County, plus higher exposure to summer storm cells coming from the southwest. South- and west-facing roof slopes typically wear faster than north or east slopes.`,
      },
      {
        question: "Do you serve the rest of the Sun Prairie area?",
        answer: `Yes — Home Defender Remodeling also serves nearby DeForest, Cottage Grove, and Marshall, plus the rest of Dane County. LOCAL TESTIMONIAL placeholder (replace with real Sun Prairie customer once available) We had Home Defender Remodeling replace our roof last summer. They came in two days, finished on schedule, and the price matched the estimate exactly. Crew was great with our dog too. — [Customer Name], Sun Prairie, WI Use the master template (Section 2) for: service overview, why choose us, our process, materials, warranty, pricing, service area neighbors, final CTA. Substitute {{CITY}} with 'Sun Prairie' throughout.`,
      },
    ],
    testimonial: {
      quote: `Hailstorm last summer wrecked our shingles. The team handled the insurance documentation and we had a new roof in less than three weeks total — start to finish.`,
      author: "[Customer Name]",
      location: "Sun Prairie, WI",
    },
    neighbors: ["madison", "deforest", "cottage-grove", "waunakee"],
  },
  {
    slug: "verona",
    cityName: "Verona",
    cityState: "WI",
    isNeighborhood: false,
    title: "Roof Replacement in Verona, WI | Home Defender Remodeling",
    metaDescription: "Quality roof replacement for Verona homes. Local Madison-area contractor with 10-year workmanship warranty. Free written estimates and insurance claim help.",
    h1: "Roof Replacement in Verona, WI",
    hero: `Verona — 'Hometown USA' — has transformed from a small farming community into one of the most desirable Madison suburbs over the past 15 years. The mix of older homes near downtown and newer construction along Cross Country Road and out toward Epic's campus means Verona homeowners have a wide range of roofing needs. Whether you're updating an older 1970s ranch or replacing the original roof on a 2005 Colonial, Home Defender Remodeling brings the same attention to detail to every Verona project.`,
    localContext: `Verona's geography puts it in a slightly different weather pattern than central Madison — slightly higher elevation, more open exposure to wind from the southwest, and more direct hail-cell paths during summer storm season. We see more wind-related shingle damage on Verona roofs than on equivalent Madison homes, which means ridge cap quality and starter-strip installation matter more here. Newer Verona subdivisions out near Cross Country Road and the developments around Verona Area High School are typically larger homes with more complex roof geometry — multiple gables, valleys, and dormers — which makes flashing details critical. We don't shortcut flashing work.`,
    faqs: [
      {
        question: "Does Verona require a permit for roof replacement?",
        answer: `Yes. The City of Verona requires a building permit. We handle permitting as part of every project — typically 5–7 business days for approval.`,
      },
      {
        question: "What roofing materials work best in Verona?",
        answer: `Architectural asphalt shingles handle Verona's wind and hail exposure well. For homeowners willing to invest more upfront, impact-resistant Class 4 shingles can earn an insurance discount and significantly extend roof life.`,
      },
      {
        question: "How long does a roof replacement take in Verona?",
        answer: `1–2 days for most homes. Larger 4,000+ square foot homes in the newer subdivisions can take 2–3 days. Weather can extend the timeline.`,
      },
      {
        question: "Are you familiar with Verona HOA requirements?",
        answer: `Yes. We've worked with most of the Verona-area architectural review processes and know what materials and colors typically get approved without delays.`,
      },
      {
        question: "Do you handle hail damage insurance claims in Verona?",
        answer: `Yes. Verona sees more hail than central Madison — we're experienced with documenting hail damage, writing scopes for adjusters, and getting Verona homeowners a fair claim outcome. LOCAL TESTIMONIAL placeholder (replace with real Verona customer once available) Home Defender Remodeling did our Verona roof and dealt with our insurance company on a hail claim. They handled the whole insurance side — saved us hours of paperwork and got us a much better outcome than I would have gotten on my own. — [Customer Name], Verona, WI Use the master template (Section 2) for: service overview, why choose us, our process, materials, warranty, pricing, service area neighbors, final CTA. Substitute {{CITY}} with 'Verona' throughout.`,
      },
    ],
    testimonial: {
      quote: `Asked for a free inspection because of a small leak. They could have sold us a full replacement; instead they did a $400 repair that has held up two winters now.`,
      author: "[Customer Name]",
      location: "Verona, WI",
    },
    neighbors: ["madison", "fitchburg", "middleton", "oregon"],
  },
  {
    slug: "fitchburg",
    cityName: "Fitchburg",
    cityState: "WI",
    isNeighborhood: false,
    title: "Roof Replacement in Fitchburg, WI | Home Defender Remodeling",
    metaDescription: "Roof replacement contractor serving Fitchburg homeowners. Quality materials, transparent pricing, 10-year workmanship warranty. Free in-home estimates.",
    h1: "Roof Replacement in Fitchburg, WI",
    hero: `Fitchburg's residential growth has been steady for decades, with established neighborhoods south of the Beltline alongside newer developments out toward Verona and the McKee Road corridor. The mix means Fitchburg roofs span a wide range of ages — from 1970s original installs that are well past their service life, to mid-2000s replacements that are now hitting end-of-life. Home Defender Remodeling has been serving Fitchburg homeowners across all of these neighborhoods.`,
    localContext: `Fitchburg's southern suburbs share Madison's weather patterns but tend to see slightly more wind exposure due to the more open terrain south of the Beltline. We see more wind damage on Fitchburg roofs than on the more sheltered Madison central neighborhoods. The newer subdivisions south and west of the city center typically feature larger homes with steeper pitches and more complex geometry — premium starter strips, six-nail patterns on architectural shingles, and properly sealed ridge caps make a measurable difference in long-term roof life on these homes.`,
    faqs: [
      {
        question: "Does Fitchburg require a roof replacement permit?",
        answer: `Yes. The City of Fitchburg requires a building permit. We handle the permit application and ensure inspection coordination.`,
      },
      {
        question: "How long has Home Defender Remodeling been serving Fitchburg?",
        answer: `We serve all of Dane County including Fitchburg, with crews that work the area regularly.`,
      },
      {
        question: "What does a roof replacement cost in Fitchburg?",
        answer: `Most Fitchburg replacements run between $10,000 and $17,000 depending on home size and material choice.`,
      },
      {
        question: "Are there specific Fitchburg HOA requirements I should know about?",
        answer: `Some neighborhoods have architectural review committees that approve material and color choices. We coordinate this approval as part of our process.`,
      },
      {
        question: "Do you serve the southern Madison metro area generally?",
        answer: `Yes — in addition to Fitchburg, we serve Verona, Oregon, Stoughton, McFarland, and the rest of Dane County's southern communities. LOCAL TESTIMONIAL placeholder (replace with real Fitchburg customer once available) Smooth experience from estimate to install. Home Defender Remodeling came in well below the other quotes I got, and the work quality was better. Our Fitchburg roof has held up beautifully through the past two winters. — [Customer Name], Fitchburg, WI Use the master template (Section 2) for: service overview, why choose us, our process, materials, warranty, pricing, service area neighbors, final CTA. Substitute {{CITY}} with 'Fitchburg' throughout.`,
      },
    ],
    testimonial: {
      quote: `Solid work and an honest crew. They explained the ice-and-water shield up front, walked us through warranty paperwork, and answered every follow-up call.`,
      author: "[Customer Name]",
      location: "Fitchburg, WI",
    },
    neighbors: ["madison", "verona", "oregon", "mcfarland"],
  },
  {
    slug: "middleton",
    cityName: "Middleton",
    cityState: "WI",
    isNeighborhood: false,
    title: "Roof Replacement in Middleton, WI | Home Defender Remodeling",
    metaDescription: "Quality roof replacement for Middleton homes. Trusted Madison-area contractor with 10-year warranty, transparent pricing, and insurance claim help.",
    h1: "Roof Replacement in Middleton, WI",
    hero: `Middleton — twice voted one of the best places to live in America — has some of the most architecturally diverse homes in Dane County. Older neighborhoods near downtown Middleton mix with the newer developments out toward Pope Farm Conservancy and the homes built around the Middleton-area schools. Whether you're updating a mid-century home in the city center or replacing the roof on a newer construction near the western edges, Home Defender Remodeling has the experience to do it right.`,
    localContext: `Middleton's housing market commands premium prices, which means homeowners typically expect premium materials and execution. We see a higher percentage of Middleton homeowners choosing architectural shingles in the higher tiers (lifetime warranty options from GAF or Owens Corning) or moving to metal roofing entirely. The older homes near downtown Middleton often have unique architectural details — turrets, multiple roof planes, mixed materials — that require experienced flashing and trim work. Our crews are comfortable with the more complex geometry common to Middleton's older housing stock.`,
    faqs: [
      {
        question: "Does Middleton require a permit for roof replacement?",
        answer: `Yes. The City of Middleton requires a building permit. We pull all permits as part of every project.`,
      },
      {
        question: "What's the cost range for a Middleton roof replacement?",
        answer: `Middleton homes typically range from $11,000 to $22,000 due to larger average home size and frequent premium-material selections. Mid-century homes in older neighborhoods may run lower; newer custom homes higher.`,
      },
      {
        question: "Are you experienced with Middleton's older home architecture?",
        answer: `Yes. Older Middleton homes often have intricate roof geometry — multiple gables, dormers, turrets, mixed materials — that require experienced flashing work. We're comfortable with these details.`,
      },
      {
        question: "What premium roofing materials do you install in Middleton?",
        answer: `We install lifetime-warranty architectural shingles from GAF, Owens Corning, and CertainTeed, plus standing seam and stone-coated metal roofing. We can match almost any architectural style.`,
      },
      {
        question: "Do you serve the Middleton-Cross Plains area?",
        answer: `Yes — we serve Middleton, Cross Plains, Black Earth, and the rest of western Dane County. LOCAL TESTIMONIAL placeholder (replace with real Middleton customer once available) Home Defender Remodeling replaced the roof on our older Middleton home — multiple dormers, complex valleys, the works. Their crew handled all the trim details perfectly. Roof looks beautiful and we've had zero issues two winters in. — [Customer Name], Middleton, WI Use the master template (Section 2) for: service overview, why choose us, our process, materials, warranty, pricing, service area neighbors, final CTA. Substitute {{CITY}} with 'Middleton' throughout.`,
      },
    ],
    testimonial: {
      quote: `We had three estimates. Home Defender Remodeling was middle on price but the only one who actually went up on the roof to look. Easy choice from there.`,
      author: "[Customer Name]",
      location: "Middleton, WI",
    },
    neighbors: ["madison", "verona", "waunakee"],
  },
  {
    slug: "waunakee",
    cityName: "Waunakee",
    cityState: "WI",
    isNeighborhood: false,
    title: "Roof Replacement in Waunakee, WI | Home Defender Remodeling",
    metaDescription: "Reliable roof replacement for Waunakee homeowners. Quality materials, fair pricing, 10-year workmanship warranty. Free in-home estimates and insurance help.",
    h1: "Roof Replacement in Waunakee, WI",
    hero: `Waunakee's continued growth — the only Waunakee in the world, as the saying goes — has produced a mix of established downtown homes and new subdivisions stretching north and west of Madison. Waunakee homeowners face the same Wisconsin weather as everyone else in Dane County, plus slightly more exposure to north-coming weather systems due to the town's geography. Home Defender Remodeling has been serving Waunakee residents with quality roofing replacements that handle whatever the seasons throw at them.`,
    localContext: `Waunakee's housing growth picked up significantly in the early 2000s, which means a substantial portion of the town's homes are now 20+ years old and approaching the natural end of their original roof's life. The newer subdivisions north and west of downtown tend to feature larger homes with more roof surface area, which scales the project but doesn't change the fundamentals — ice and water shield, proper underlayment, ventilation, and quality flashing make the difference between a 25-year roof and a 40-year roof.`,
    faqs: [
      {
        question: "Does Waunakee require a roof replacement permit?",
        answer: `Yes. The Village of Waunakee requires a building permit. We handle permitting as part of every project.`,
      },
      {
        question: "How much will a roof replacement cost in Waunakee?",
        answer: `Most Waunakee homes fall in the $10,000–$18,000 range, depending on size and material choice.`,
      },
      {
        question: "Are there architectural review requirements in Waunakee?",
        answer: `Some newer Waunakee subdivisions have HOA architectural review for exterior changes. We help navigate the approval process.`,
      },
      {
        question: "How does Waunakee's weather affect roof choice?",
        answer: `Waunakee sees similar weather to the rest of Dane County. North-facing roof slopes are particularly susceptible to ice damming — our installs include extended ice and water shield to address this.`,
      },
      {
        question: "Do you serve Waunakee surrounding communities?",
        answer: `Yes — we also serve Westport, DeForest, Dane, and the rest of northern Dane County. LOCAL TESTIMONIAL placeholder (replace with real Waunakee customer once available) Home Defender Remodeling did our Waunakee roof in two days and the crew was professional throughout. We've recommended them to two neighbors since. — [Customer Name], Waunakee, WI Use the master template (Section 2) for: service overview, why choose us, our process, materials, warranty, pricing, service area neighbors, final CTA. Substitute {{CITY}} with 'Waunakee' throughout.`,
      },
    ],
    testimonial: {
      quote: `Great communication. We got a written quote within 48 hours of the inspection, and the install date held even when the weather got tight.`,
      author: "[Customer Name]",
      location: "Waunakee, WI",
    },
    neighbors: ["madison", "middleton", "deforest", "sun-prairie"],
  },
  {
    slug: "cottage-grove",
    cityName: "Cottage Grove",
    cityState: "WI",
    isNeighborhood: false,
    title: "Roof Replacement in Cottage Grove, WI | Home Defender Remodeling",
    metaDescription: "Trusted roof replacement for Cottage Grove homes. Local Madison-area contractor with 10-year workmanship warranty and free written estimates.",
    h1: "Roof Replacement in Cottage Grove, WI",
    hero: `Cottage Grove's small-town feel and easy access to both Madison and Sun Prairie has made it one of the steadier-growing communities in eastern Dane County. The mix of older farmhouses, established neighborhoods, and newer subdivisions means Cottage Grove roofs come in every shape, age, and style. Home Defender Remodeling brings the same care to a 1950s farmhouse roof as we do to a brand-new construction in the newer subdivisions.`,
    localContext: `Cottage Grove's eastern Dane County location puts it in a slightly different weather exposure pattern — more open agricultural land surrounding the village means stronger wind exposure during severe weather events. We pay particular attention to ridge cap quality and starter-strip installation on Cottage Grove roofs, which addresses the most common wind-uplift failure points. The older farmhouse-style homes still common in Cottage Grove often have steep pitches and limited attic ventilation, which we upgrade as part of any replacement project.`,
    faqs: [
      {
        question: "Does Cottage Grove require permits for roof replacement?",
        answer: `Yes. The Village of Cottage Grove requires a building permit. We handle the permit application as part of our standard process.`,
      },
      {
        question: "What does roof replacement cost in Cottage Grove?",
        answer: `Most Cottage Grove homes range from $9,500 to $16,000, depending on size and materials.`,
      },
      {
        question: "How does Cottage Grove's weather impact roof choice?",
        answer: `Open exposure to wind from agricultural land surrounding the village means wind-rated installation matters. We use 6-nail patterns and quality starter strips on every Cottage Grove install.`,
      },
      {
        question: "Are there local building requirements I should know about?",
        answer: `Cottage Grove's permit office is straightforward to work with — typical approval is 5–7 business days. We coordinate everything.`,
      },
      {
        question: "Do you serve the eastern Dane County area generally?",
        answer: `Yes — Home Defender Remodeling serves Cottage Grove, Marshall, Deerfield, Sun Prairie, and the rest of eastern Dane County. LOCAL TESTIMONIAL placeholder (replace with real Cottage Grove customer once available) Got three quotes for our Cottage Grove roof. Home Defender Remodeling wasn't the cheapest but they were the most thorough during the estimate process. We're glad we chose them — solid work that's holding up well. — [Customer Name], Cottage Grove, WI Use the master template (Section 2) for: service overview, why choose us, our process, materials, warranty, pricing, service area neighbors, final CTA. Substitute {{CITY}} with 'Cottage Grove' throughout.`,
      },
    ],
    testimonial: {
      quote: `Storm took out part of our gutter line and tore some shingles. They came out the next morning, tarped the damage, and scheduled the repair for that week.`,
      author: "[Customer Name]",
      location: "Cottage Grove, WI",
    },
    neighbors: ["madison", "sun-prairie", "mcfarland", "monona"],
  },
  {
    slug: "mcfarland",
    cityName: "McFarland",
    cityState: "WI",
    isNeighborhood: false,
    title: "Roof Replacement in McFarland, WI | Home Defender Remodeling",
    metaDescription: "Quality roof replacement for McFarland homeowners. Lake-area expertise, 10-year warranty, transparent pricing. Free written estimates.",
    h1: "Roof Replacement in McFarland, WI",
    hero: `McFarland's location on Lake Waubesa gives the village its character — and gives McFarland homes a slightly different set of weather considerations than inland communities. Lake-effect humidity, more frequent fog, and direct exposure to north-coming weather systems all affect how roofs age. Home Defender Remodeling understands these conditions and installs roofing systems built to handle them.`,
    localContext: `McFarland's lakefront and lake-adjacent properties experience higher humidity and more frequent moisture cycles than inland Dane County homes. This accelerates wear on roofing components — particularly metal flashings, valley liners, and ventilation systems. Our McFarland installs include corrosion-resistant flashings, fully sealed valley underlayment, and properly sized ventilation specifically calibrated for higher-humidity environments. These details cost slightly more upfront but add years to roof life in McFarland's lake-adjacent climate.`,
    faqs: [
      {
        question: "Does McFarland require a roof replacement permit?",
        answer: `Yes. The Village of McFarland requires a building permit. We handle the permit process as part of every project.`,
      },
      {
        question: "What about lake-adjacent homes — any special considerations?",
        answer: `Yes. Lake-adjacent homes see higher humidity, more frequent fog, and accelerated wear on metal components. We use corrosion-resistant flashings and proper ventilation systems on every McFarland install.`,
      },
      {
        question: "How much does a roof replacement cost in McFarland?",
        answer: `Most McFarland homes range from $9,500 to $16,500. Lake-adjacent homes sometimes carry a slight premium for upgraded weather-resistance components.`,
      },
      {
        question: "What materials work best on McFarland's lake-adjacent properties?",
        answer: `We typically recommend architectural asphalt shingles with upgraded flashing and underlayment, or metal roofing for the longest service life. Both perform well in McFarland's humidity-heavy environment.`,
      },
      {
        question: "Do you serve all of McFarland and surrounding areas?",
        answer: `Yes — Home Defender Remodeling serves all of McFarland plus Stoughton, Cottage Grove, and the rest of southeast Dane County. LOCAL TESTIMONIAL placeholder (replace with real McFarland customer once available) Home Defender Remodeling replaced the roof on our lake-area home in McFarland. They knew exactly what to do for the higher-humidity conditions — different flashing, better underlayment. Two seasons in, no issues. — [Customer Name], McFarland, WI Use the master template (Section 2) for: service overview, why choose us, our process, materials, warranty, pricing, service area neighbors, final CTA. Substitute {{CITY}} with 'McFarland' throughout.`,
      },
    ],
    testimonial: {
      quote: `Used them for both the roof and new gutters. Coordinating one contractor for both jobs saved us a week and they were honest about what we needed and what we didn't.`,
      author: "[Customer Name]",
      location: "McFarland, WI",
    },
    neighbors: ["madison", "fitchburg", "monona", "stoughton"],
  },
  {
    slug: "stoughton",
    cityName: "Stoughton",
    cityState: "WI",
    isNeighborhood: false,
    title: "Roof Replacement in Stoughton, WI | Home Defender Remodeling",
    metaDescription: "Roof replacement contractor serving Stoughton homeowners. Quality work for historic and newer homes alike. 10-year warranty and insurance claim help.",
    h1: "Roof Replacement in Stoughton, WI",
    hero: `Stoughton's deep history shows up in its housing stock — Norwegian-heritage homes from the 1800s mix with mid-century neighborhoods and newer subdivisions throughout the city. The diversity of architectural styles means Stoughton roofs require contractors who can handle everything from steep historic gables to straightforward modern ranch lines. Home Defender Remodeling brings the same attention to detail to every project.`,
    localContext: `Stoughton's older homes — particularly those in the historic district near downtown — often have unique architectural details that require experienced flashing work and material matching. Many of these older homes still have minimal attic insulation and ventilation, which we address as part of any roof replacement to bring the home up to modern performance standards. Stoughton's newer south-side and west-side subdivisions feature more conventional roof geometry but typically larger square footage, scaling project size without significantly changing complexity.`,
    faqs: [
      {
        question: "Does Stoughton require permits for roof replacement?",
        answer: `Yes. The City of Stoughton requires a building permit. We handle all permitting.`,
      },
      {
        question: "Are there special requirements for historic Stoughton homes?",
        answer: `Homes in Stoughton's historic district may require Historic Preservation Commission review for material and color changes. We help navigate this process.`,
      },
      {
        question: "What's a typical roof replacement cost in Stoughton?",
        answer: `Most Stoughton homes fall in the $9,500–$17,000 range. Historic homes with complex roof geometry can run higher; newer subdivisions homes within typical ranges.`,
      },
      {
        question: "How long has Home Defender Remodeling served Stoughton?",
        answer: `We serve all of Dane County, including regular work in Stoughton and surrounding Rutland and Pleasant Springs.`,
      },
      {
        question: "Do you handle insurance claims for Stoughton homeowners?",
        answer: `Yes. We document storm damage, write detailed scopes for adjusters, and communicate directly with insurance companies. LOCAL TESTIMONIAL placeholder (replace with real Stoughton customer once available) We have an older Stoughton home with a complicated roof — multiple peaks, dormers, the whole deal. Home Defender Remodeling handled it perfectly. Crew was respectful of our historic property and the work quality is excellent. — [Customer Name], Stoughton, WI Use the master template (Section 2) for: service overview, why choose us, our process, materials, warranty, pricing, service area neighbors, final CTA. Substitute {{CITY}} with 'Stoughton' throughout.`,
      },
    ],
    testimonial: {
      quote: `Older home with a steep pitch and tricky valleys. They didn't blink — sent the experienced crew, did the flashing right, and the leak we'd been chasing for years is gone.`,
      author: "[Customer Name]",
      location: "Stoughton, WI",
    },
    neighbors: ["oregon", "mcfarland", "cottage-grove"],
  },
  {
    slug: "oregon",
    cityName: "Oregon",
    cityState: "WI",
    isNeighborhood: false,
    title: "Roof Replacement in Oregon, WI | Home Defender Remodeling",
    metaDescription: "Reliable roof replacement for Oregon, WI homeowners. 10-year workmanship warranty, quality materials, transparent pricing. Free estimates.",
    h1: "Roof Replacement in Oregon, WI",
    hero: `Oregon's growth as a southern Madison commuter community has produced a healthy mix of housing — from established homes near downtown to newer subdivisions stretching out toward the surrounding countryside. Oregon homeowners face the same Wisconsin weather as everyone else, with slightly more open exposure to wind from the south and southwest. Home Defender Remodeling has been serving Oregon residents with thorough, well-installed roof replacements built to handle whatever the seasons bring.`,
    localContext: `Oregon's location at the southern edge of the Madison metro area exposes homes to slightly more direct wind than central Madison neighborhoods. We've seen more wind-uplift damage on Oregon roofs than on equivalent central-city Madison homes, which is why our Oregon installs include 6-nail patterns and quality starter strips as standard practice. The newer subdivisions south and east of downtown Oregon typically feature larger homes with more straightforward roof geometry — scale matters, but the fundamentals stay the same.`,
    faqs: [
      {
        question: "Does Oregon require a roof replacement permit?",
        answer: `Yes. The Village of Oregon requires a building permit. We handle permitting as part of every project.`,
      },
      {
        question: "How much will a roof replacement cost in Oregon?",
        answer: `Most Oregon homes range from $9,500 to $17,000 depending on size and materials.`,
      },
      {
        question: "What roofing materials handle Oregon's wind exposure best?",
        answer: `Architectural asphalt shingles with proper installation handle Oregon's wind well. For maximum wind resistance, Class 4 impact-resistant shingles are an upgrade option.`,
      },
      {
        question: "Are there HOA approvals to worry about in Oregon?",
        answer: `Some newer Oregon subdivisions have HOA architectural review processes. We coordinate approvals.`,
      },
      {
        question: "Do you serve the southern Dane County area?",
        answer: `Yes — Oregon, Stoughton, Brooklyn, and the rest of southern Dane County. LOCAL TESTIMONIAL placeholder (replace with real Oregon customer once available) Home Defender Remodeling did our Oregon roof in late summer. They were patient explaining options, the price was fair, and the work was done in two days. Cleanup was thorough. Highly recommend. — [Customer Name], Oregon, WI Use the master template (Section 2) for: service overview, why choose us, our process, materials, warranty, pricing, service area neighbors, final CTA. Substitute {{CITY}} with 'Oregon' throughout.`,
      },
    ],
    testimonial: {
      quote: `Friendly, professional, and they actually answered the phone when we called. Felt like a local business, not a sales operation. Roof looks great.`,
      author: "[Customer Name]",
      location: "Oregon, WI",
    },
    neighbors: ["verona", "fitchburg", "stoughton"],
  },
  {
    slug: "deforest",
    cityName: "DeForest",
    cityState: "WI",
    isNeighborhood: false,
    title: "Roof Replacement in DeForest, WI | Home Defender Remodeling",
    metaDescription: "Roof replacement for DeForest homeowners. Quality materials, fair pricing, 10-year warranty. Serving DeForest and the rest of northern Dane County.",
    h1: "Roof Replacement in DeForest, WI",
    hero: `DeForest's growth along the I-39/90 corridor has made it one of the fastest-developing communities north of Madison. The mix of older homes near downtown and newer subdivisions out toward the highway means DeForest residents have a wide range of roof ages and styles. Whether you're updating an established home or replacing the original roof on a newer build, Home Defender Remodeling brings consistent quality to every project.`,
    localContext: `DeForest's location at the northern edge of Dane County exposes homes to slightly more open weather patterns coming from the north. The newer subdivisions east of downtown DeForest tend to be larger Colonial and ranch-style homes with more conventional roof geometry, while the older homes near the village center sometimes have steeper pitches and more complex details. We treat both with the same attention — proper underlayment, ice and water shield extending well past the eaves (critical for north-facing slopes that hold snow longer), and quality flashing on every transition.`,
    faqs: [
      {
        question: "Does DeForest require permits for roof replacement?",
        answer: `Yes. The Village of DeForest requires a building permit. We handle the permit process.`,
      },
      {
        question: "What roof replacement costs should I expect in DeForest?",
        answer: `Most DeForest homes range from $10,000 to $17,500.`,
      },
      {
        question: "How does DeForest's northern location affect roof life?",
        answer: `North-facing slopes hold snow longer, which can lead to ice damming. We extend ice and water shield further up the roof on north-facing slopes for DeForest homes.`,
      },
      {
        question: "Are there HOA requirements in DeForest subdivisions?",
        answer: `Some newer subdivisions have architectural review committees. We help with approval processes.`,
      },
      {
        question: "Do you serve all of northern Dane County?",
        answer: `Yes — DeForest, Windsor, Dane, Waunakee, and the rest of northern Dane County. LOCAL TESTIMONIAL placeholder (replace with real DeForest customer once available) Home Defender Remodeling replaced our DeForest roof last spring. The crew was on time both days, the cleanup was thorough, and the price matched the estimate exactly. Quality work. — [Customer Name], DeForest, WI Use the master template (Section 2) for: service overview, why choose us, our process, materials, warranty, pricing, service area neighbors, final CTA. Substitute {{CITY}} with 'DeForest' throughout.`,
      },
    ],
    testimonial: {
      quote: `Quick turnaround on the estimate, fair price, and the install crew was respectful of the property. We'd hire them again without hesitation.`,
      author: "[Customer Name]",
      location: "DeForest, WI",
    },
    neighbors: ["waunakee", "sun-prairie", "madison"],
  },
  {
    slug: "monona",
    cityName: "Monona",
    cityState: "WI",
    isNeighborhood: false,
    title: "Roof Replacement in Monona, WI | Home Defender Remodeling",
    metaDescription: "Quality roof replacement for Monona homeowners. Lake-area expertise, 10-year workmanship warranty, transparent pricing. Free written estimates.",
    h1: "Roof Replacement in Monona, WI",
    hero: `Monona sits on Lake Monona's south shore, just minutes from downtown Madison but with its own distinct character. The mix of older mid-century homes and lakefront properties creates a roofing landscape with unique weather considerations — lake-effect humidity, lake-area moisture, and direct exposure to weather systems coming off the lake. Home Defender Remodeling installs roofing systems specifically suited to Monona's lakeside climate.`,
    localContext: `Monona's lake-adjacent location means higher humidity, more frequent fog, and accelerated wear on metal roofing components compared to inland Dane County homes. This is particularly true for homes within a few blocks of the lake. Our Monona installs use corrosion-resistant flashings, fully sealed valley underlayment, and properly sized ventilation systems calibrated for higher humidity. The older mid-century ranch homes that dominate much of Monona's housing stock often have inadequate attic ventilation by modern standards — we upgrade ventilation as part of any roof replacement project.`,
    faqs: [
      {
        question: "Does Monona require a roof replacement permit?",
        answer: `Yes. The City of Monona requires a building permit. We pull all permits.`,
      },
      {
        question: "How does the lake affect roof considerations in Monona?",
        answer: `Lake-adjacent homes see higher humidity and more frequent moisture cycles, which accelerate wear on flashings and ventilation. We use corrosion-resistant components and properly sized ventilation on every Monona install.`,
      },
      {
        question: "What does roof replacement cost in Monona?",
        answer: `Most Monona homes range from $9,500 to $16,500. Lake-adjacent homes may carry a small premium for upgraded weather-resistance components.`,
      },
      {
        question: "What roofing materials work best for Monona's climate?",
        answer: `Architectural asphalt shingles with upgraded flashing perform well. For longest service life, metal roofing handles humidity excellently.`,
      },
      {
        question: "Do you serve Monona, Maple Bluff, and surrounding areas?",
        answer: `Yes — we serve Monona, Maple Bluff, Shorewood Hills, and the rest of central Dane County. LOCAL TESTIMONIAL placeholder (replace with real Monona customer once available) We had Home Defender Remodeling do our Monona roof. They knew exactly what to do for our lake-side home — better flashing, better ventilation. The work was finished quickly and the new roof has performed flawlessly. — [Customer Name], Monona, WI Use the master template (Section 2) for: service overview, why choose us, our process, materials, warranty, pricing, service area neighbors, final CTA. Substitute {{CITY}} with 'Monona' throughout. Section 4 — Three Additional Priority Pages 4.1 — Storm Damage Roof Repair in Madison URL: /services/roofing/storm-damage-roof-repair-madison-wi Title Storm Damage Roof Repair in Madison, WI | Home Defender Remodeling Meta Storm or hail damage to your Madison roof? Free inspection, full insurance documentation, fast emergency response. We handle the claim. Call (608) 925-3576. H1 Storm Damage Roof Repair in Madison, WI HERO SECTION Wisconsin storms hit hard. Hail, high winds, ice events, and severe thunderstorms can damage a roof in minutes that's been holding up fine for years. If your Madison home was just hit by a storm, two things matter: getting an honest inspection fast, and documenting damage properly so your insurance pays for what they should. Home Defender Remodeling provides free post-storm inspections across Madison and Dane County. We climb the roof, document everything with photos, and give you an honest assessment — not a sales pitch. PRIMARY CTA Schedule a free post-storm inspection — call (608) 925-3576 or use the form below. SECTION HEADING What storm damage actually looks like Section copy Most storm damage isn't visible from the ground. The granule loss, lifted shingles, dented metal flashings, and cracked seals that compromise a roof are usually only visible when someone is up there looking. By the time damage shows up as a leak or a stain on your ceiling, the underlying problem has been working for weeks. The most common forms of storm damage we see in Madison: Hail damage Visible as small circular impact marks on shingles, with displaced granules collecting in gutters. Hail compromises the shingle's protective layer even when the shingle itself isn't visibly cracked. Insurance companies typically cover hail damage — but only if it's documented before the next storm causes more damage. Wind damage Lifted shingles, missing shingles, and creased shingles from high winds. Even shingles that look reseated may have been compromised — they often fail in the next storm rather than the one that lifted them. Ice damage Wisconsin's freeze/thaw cycles can crack flashings, split sealants, and expand small leaks into major problems. Ice damming damage often shows up as water stains inside the home weeks or months after the freezing event. Tree and debris damage Branches, debris, and even hailstones can puncture or crack roofing materials. Even small punctures compromise the entire system underneath. SECTION HEADING What to do immediately after a storm Step 1 Don't climb on your own roof. After a storm, surfaces are more dangerous than usual — wet, possibly damaged, possibly hiding nails or sharp debris. Let a professional inspect. Step 2 Document anything visible from the ground. Photos of obvious damage, debris, or water entry. Date-stamp them. This helps with insurance claims. Step 3 Call your insurance company to start the claim file — but do not get repairs done before an inspection from your own roofing contractor. Insurance adjusters work for the insurance company. You want an independent voice in the room. Step 4 Schedule a free inspection with Home Defender Remodeling. We'll document the damage thoroughly, write a scope of work for your adjuster, and be present when the adjuster inspects if you'd like. SECTION HEADING How we handle insurance claims for Madison homeowners Section copy Most homeowners under-document storm damage and lose claims they should win. Insurance adjusters move fast, work for the insurance company, and don't always identify damage that exists. Home Defender Remodeling levels the playing field. For every storm damage inspection, we provide: Documentation Detailed photos of every damage point, with location annotations, severity ratings, and timestamps. Documented in a format your adjuster recognizes. Written scope of work A clear, line-item document specifying what work needs to be done, what materials are needed, and what the costs are. Adjusters work from these scopes — having one professionally prepared significantly improves claim outcomes. Adjuster meetings If you'd like, we'll be on-site when your insurance adjuster comes to inspect. We don't argue with adjusters — we just make sure damage gets documented properly. Direct repair coordination Once the claim is approved, we coordinate the repair work directly. You don't need to manage between insurance, contractor, and material supplier — we handle it. FAQ 1 How quickly can you inspect my storm-damaged roof? In most cases, within 24–48 hours. Major weather events sometimes extend this to 3–5 days due to demand. Defender Shield members get guaranteed 24-hour callback. FAQ 2 Do I need to file an insurance claim before calling you? No. Many homeowners call us first for an inspection, and based on what we find, decide whether to file a claim. We'll give you an honest assessment of whether the damage is worth filing. FAQ 3 What if my insurance denies my claim? We can help with appeals if appropriate. We'll review the adjuster's report, identify documentation gaps, and help you put together a stronger case for reconsideration. FAQ 4 Do you offer emergency tarping? Yes. If your roof has active leaks or visible structural damage, we can tarp the affected areas to prevent further damage while the claim and repair process moves forward. FAQ 5 How much does storm damage repair cost? Costs vary widely based on damage severity. If a claim is approved, your insurance typically covers most or all of the repair cost minus your deductible. We work within insurance scopes. 4.2 — Roof Inspection in Madison URL: /services/roofing/roof-inspection-madison-wi Title Roof Inspection in Madison, WI | Home Defender Remodeling Meta Free 30-point roof inspection for Madison and Dane County homes. Get an honest assessment of your roof's condition with photos and a written report. H1 Free Roof Inspection in Madison, WI HERO SECTION Don't wait until you have a leak. Most roof problems are visible long before they cause damage inside your home — but only if someone's looking. Home Defender Remodeling's free 30-point roof inspection gives Madison homeowners a clear, honest picture of what's working, what's wearing, and what to plan for. No high-pressure sales. No fake emergencies. Just a thorough inspection by people who do this every day. SECTION HEADING What our 30-point inspection covers Section copy We don't shortcut roof inspections. Our inspectors physically climb every roof we inspect — drone footage and ground-level photos miss too much. Each inspection covers thirty distinct check points, organized into six categories: Shingles & roofing material (8 points) Granule loss, curling, cupping, missing shingles, lifted shingles, hail impact marks, sealant condition, and overall material wear stage. Flashings & penetrations (6 points) Chimney flashing, plumbing vent boots, skylight flashing, valley flashings, drip edges, and step flashings at sidewall transitions. Gutters & drainage (5 points) Gutter pitch and securement, downspout function, splash guards, debris accumulation, and visible damage to fascia or soffits. Ventilation (4 points) Ridge vents, soffit vents, attic ventilation balance, and signs of moisture or condensation issues in the attic. Structural (4 points) Visible deck issues, sagging or unevenness, ice damming evidence, and any visible signs of structural compromise. Documentation (3 points) Overall photo documentation, damage-specific close-ups, and a written summary of findings. SECTION HEADING What you get after the inspection Written report A clear, plain-language summary of what we found. Each finding gets a severity rating (good / monitor / repair recommended / urgent) and a recommended action. Photo documentation Every issue gets photographed. We share photos in a format you can keep — useful for your records, for insurance, and for selling the home if you ever do. Honest recommendation If your roof has years of life left, we'll tell you. If it needs replacement, we'll tell you that too. We're not the contractor that finds 'urgent repairs' on every inspection — that approach hurts homeowners and hurts our reputation. Estimate (if needed) If repairs or replacement are recommended, you'll receive a written estimate within 1–2 business days. No pressure to act immediately — the report is yours to use however you want. FAQ 1 How long does a roof inspection take? Most inspections take 45–60 minutes. Larger or more complex roofs can take longer. FAQ 2 Is the inspection really free? Yes. Free, no obligation, no sales pressure. We do this because most homeowners need help understanding their roof's condition, and an honest inspection often turns into a customer over time. FAQ 3 When should I get my roof inspected? At minimum, every 2–3 years for asphalt shingle roofs and every 3–5 years for metal roofing. Also after any major storm, and before listing your home for sale. FAQ 4 Will you tell me my roof is fine if it actually is? Yes. Plenty of Madison homeowners worry about their roof's age but are years away from needing replacement. We tell people the truth — including when their roof is in good shape. 4.3 — Pricing Transparency Page URL: /how-much-does-roof-replacement-cost-madison Title How Much Does a Roof Replacement Cost in Madison, WI? 2026 Pricing Guide Meta Real Madison-area roof replacement pricing for 2026. Cost ranges by roof size, material, and home type. No marketing fluff — actual numbers from a local contractor. H1 How Much Does a Roof Replacement Cost in Madison, WI? Complete 2026 Pricing Guide INTRODUCTION (240 words) Most roofing companies won't tell you what a roof actually costs. They want you to call, schedule an in-home estimate, and only learn pricing after you've invested time in the conversation. That's a sales tactic — not customer service. We think Madison homeowners deserve straight numbers. So we wrote this guide. For 2026, the realistic price range for a full roof replacement in Madison and the surrounding Dane County area is $9,000 to $22,000. Most homes fall in the $11,000 to $16,000 range. Below, we break down exactly what drives those numbers — roof size, material, complexity, accessories, and the variables homeowners often don't know about until they're staring at the estimate. A few caveats up front. These ranges reflect typical replacement projects. Insurance-claim work, commercial properties, structural repairs, and exotic materials (slate, premium tile, custom metal systems) can fall outside these ranges. The only way to know exactly what your roof will cost is an in-person inspection — anyone giving you a firm number over the phone before seeing your roof is guessing. We inspect for free. We document with photos. We give you a written estimate within 1–2 business days. And we never use high-pressure sales tactics. If you're shopping for roofing in Madison, the rest of this guide should help you understand what you're going to be paying for. Let's break it down. SECTION HEADING The five biggest cost drivers 1. Roof size (square footage) Pricing is typically calculated per 'square,' which equals 100 square feet of roof surface. A typical Madison single-family home has 20–35 squares of roof surface. The base cost per square varies by material — see the next section. A 1,500 sq ft single-story ranch typically has 18–22 squares of roof. A 2,500 sq ft two-story with a moderate pitch has around 25–30 squares. A larger 3,500+ sq ft home or a steep complex roof can run 35–50 squares. 2. Material choice Architectural asphalt shingles run $400–$600 per square installed. Premium architectural shingles (lifetime warranty grades) run $550–$700 per square. Metal roofing runs $1,000–$1,500 per square installed for standard panels, higher for premium standing seam systems. Tile and slate are significantly more — $1,500–$2,500+ per square — and uncommon in Wisconsin's climate. 3. Roof complexity Steeper pitches require more labor (and special safety equipment). Multiple gables, dormers, valleys, and skylights all add to flashing complexity and labor hours. A simple gable roof costs roughly 20–30% less per square foot than a complex roof of the same size. 4. Tear-off and structural condition If your existing roof has only one layer of shingles, tear-off costs are minimal. Two layers (which Wisconsin code now disallows for new installs but is common on older homes) doubles tear-off labor and disposal costs. If we find rotted decking during tear-off, replacement of damaged plywood adds $50–$100 per sheet. 5. Accessories and upgrades Ice and water shield, synthetic underlayment, ridge vents, drip edge, and proper flashing all add to material cost but extend roof life. Cheaping out on accessories saves a few hundred dollars upfront and costs thousands later. We don't recommend it. SECTION HEADING Realistic price ranges by home type Below is a breakdown of typical price ranges for common Madison-area home types. These assume single-layer tear-off, architectural asphalt shingles, and standard accessories. Premium materials, complex roofs, or structural repairs would add to these ranges. Small ranch home (1,200–1,600 sq ft) Roof surface: ~18–22 squares. Typical replacement cost: $9,000–$13,000. Mid-size home (1,800–2,400 sq ft, two-story) Roof surface: ~22–28 squares. Typical replacement cost: $11,500–$15,500. Larger home (2,500–3,500 sq ft, complex roof) Roof surface: ~30–40 squares. Typical replacement cost: $14,000–$20,000. Premium home (3,500+ sq ft, complex roof, premium materials) Roof surface: 40+ squares. Typical replacement cost: $18,000–$30,000+. SECTION HEADING Financing and payment options Section copy Roof replacement is a significant investment. Home Defender Remodeling offers financing through Synchrony, including: — 0% interest short-term plans (typically 12 months) — Low monthly payment plans (up to 10 years) — No prepayment penalties We can run a soft credit check during your estimate to give you exact monthly payment options before you commit. No surprises, no hidden fees. FINAL CTA Want a real number for your specific home? Schedule a free roof inspection. We'll come out, climb the roof, document the condition, and give you a written estimate within 1–2 business days. No pressure, no sales pitch. Section 5 — Five Foundational Blog Posts These five blog posts are the foundation of your content marketing strategy. Each is 1,200–1,500 words, optimized for a specific search query, and structured to rank in Google search and convert readers to leads. Publishing cadence: aim to publish all five within 60 days. Then maintain a one-post-per-week cadence on supplemental topics. Every post needs: Article schema markup (JSON-LD), author byline (use the owner's name), publish date, last-updated date, and 2–3 internal links to relevant service pages or service-area pages. Blog Post 1 — When Should You Replace Your Roof in Wisconsin? URL: /blog/when-to-replace-roof-wisconsin Target keyword: 'when should I replace my roof in Wisconsin' Title When Should You Replace Your Roof in Wisconsin? 7 Warning Signs Meta How do you know when it's time to replace your roof in Wisconsin? Seven warning signs every Madison homeowner should watch — and what to do when you spot them. H1 When Should You Replace Your Roof in Wisconsin? 7 Warning Signs Madison Homeowners Should Watch INTRO (200 words) Your roof is the most expensive component on your home that you're least likely to inspect. Most Madison homeowners go years between thinking seriously about their roof — typically until something goes wrong. By that point, you're often dealing with a problem that could have been caught earlier. Wisconsin's climate is particularly hard on roofs. Freeze/thaw cycles, ice damming, summer hail, and high winds combine to wear down even quality roofing materials faster than they would in milder climates. The 30-year shingle on your house typically delivers 22–25 years of real-world service in Wisconsin. This guide walks through seven specific warning signs that indicate your roof needs attention. Some of these signal that a repair will buy you a few more years. Others signal that replacement should be on your near-term radar. We've tried to be honest about which is which. If you're noticing one or more of these signs on your Madison home, the smartest first step is a free inspection. You'll know exactly where you stand instead of guessing — and you'll be in a better position to plan rather than react when something fails. Sign 1 — Curling, cupping, or cracked shingles Asphalt shingles are designed to lay flat against the roof deck. When the edges start curling up or cupping inward, the protective seal between shingles is compromised. Wind, water, and ice can get underneath and accelerate damage rapidly. What to do: A few curled shingles in one area might be repairable. Widespread curling across multiple areas of the roof typically signals end-of-life. Time for a full inspection. Sign 2 — Granules in your gutters The colored granules on asphalt shingles are the protective layer. They block UV rays and resist hail impact. As shingles age, they shed granules — and you'll see them collecting in your gutters and at the base of downspouts. A little granule loss is normal, especially in the first year after installation. Heavy granule loss (visible patches of bare shingle, gutters full of granules every season) signals the shingles are past their prime. Sign 3 — Daylight in your attic Go up into your attic on a sunny day with the lights off. If you can see daylight coming through the roof boards, you have gaps. Even small gaps are a problem — they let in water, allow heat to escape in winter, and provide entry points for pests. This is one of the more urgent warning signs. Schedule an inspection within 30 days. Sign 4 — Sagging roof deck Stand across the street from your home and look at the rooflines. They should be straight. Any sagging, dipping, or wavy lines in the roof surface signal structural problems with the deck underneath — usually moisture damage that's been working for years. A sagging roof is not a 'monitor and see' situation. Inspect immediately. Sign 5 — Persistent water stains on ceilings Water stains inside your home — particularly on ceilings on the top floor — almost always trace back to a roof leak. The leak might be small and intermittent (only after heavy rain or ice melt), but it's not getting better on its own. Water finds the path of least resistance. By the time you see a stain inside, water has been working on insulation, drywall, and structural elements for some time. Sign 6 — Higher energy bills with no other explanation Heating and cooling costs creeping higher each season — without obvious causes like aging HVAC equipment or significant rate hikes — often signal poor attic ventilation or insulation breakdown. Both can be related to roof health. A failing roof allows conditioned air to escape and outside temperatures to penetrate. Not the most urgent warning sign, but worth investigating. Sign 7 — Your roof is approaching its expected service life Wisconsin asphalt shingle roofs typically deliver 20–25 years of service. Metal roofs deliver 40–60. Tile and slate can go longer. If you don't know your roof's age — and many Madison homeowners don't, especially if they bought the home from a previous owner — that's a reason to schedule an inspection. Knowing where you stand on the lifecycle helps you plan rather than react. CONCLUSION (100 words) If you're seeing one or two of these warning signs in isolation, you might have years of life left in your roof — particularly if the signs are minor and the rest of the roof looks healthy. If you're seeing three or more, replacement should be on your near-term radar. The smartest move at any sign of concern is a free inspection. We'll climb the roof, document the actual condition, and give you an honest assessment. No pressure, no sales pitch — just a clear picture of where your roof stands and what to plan for. Schedule yours today. Blog Post 2 — How Much Does a Roof Replacement Cost in Madison? Note: This is the same topic as the pricing transparency page. The blog post version should be slightly different — more conversational, written from the homeowner's POV, includes more contextual information. Use the pricing page as the canonical authoritative source; the blog post drives blog-search traffic to that page. URL: /blog/roof-replacement-cost-madison-2026-guide Title tag Roof Replacement Cost Madison WI 2026 — A Real Pricing Breakdown Meta Wondering what a roof actually costs in Madison? Real 2026 numbers from a local contractor — no marketing fluff. Cost ranges, financing options, and price drivers. H1 Roof Replacement Cost in Madison, WI: A Real 2026 Pricing Breakdown OPENING (180 words) Last week a Madison homeowner called us asking about roof replacement pricing. He'd called four other contractors first. Three refused to give him any pricing information until he scheduled an in-home estimate. The fourth gave him a 'starts at $7,500' pitch that conveniently became $15,000 by the time the estimator was done. He wasn't impressed. Neither would you be. We think Madison homeowners deserve straight numbers. Roof replacement is a significant financial decision, and you should have realistic pricing information before any contractor walks into your living room. So this guide tells you what a roof actually costs in 2026 — by home type, by material, and by complexity. No marketing spin, no bait-and-switch. What you'll learn: — Realistic 2026 price ranges for Madison-area homes ($9,000–$22,000) — The five biggest factors that drive your specific price — Cost-per-year-of-life calculations that change how you should think about material choice — Financing options that make replacement actually achievable for most homeowners Let's get into it. FULL POST DIRECTION Use the pricing transparency page (Section 4.3) as your foundation, but in this blog post version: (1) keep the conversational opening above, (2) walk through the 5 cost drivers in slightly more conversational language, (3) include the home-type ranges, (4) end with the financing section and a CTA linking BOTH to the canonical pricing page (/how-much-does-roof-replacement-cost-madison) and to a free estimate scheduling page. Total target length: 1,400 words. Blog Post 3 — Hail Damage Roof Inspection Guide for Madison Homeowners URL: /blog/hail-damage-roof-inspection-madison Title Hail Damage Roof Inspection in Madison: A Homeowner's Guide Meta Hailstorm hit your Madison home? Here's how to inspect for damage, file a successful insurance claim, and avoid the storm-chasing scams that follow every major event. H1 Hail Damage Roof Inspection in Madison: A Homeowner's Guide to Insurance Claims OPENING (150 words) Wisconsin gets serious hail. In May 2024, a single storm cell produced golf-ball-sized hail across Dane County, generating thousands of insurance claims. In June 2025, another wave hit western Madison particularly hard. If you've owned a Madison home for more than a few years, the question isn't whether your roof will see significant hail — it's when, and what you'll do about it. This guide walks through what hail damage actually looks like, how to inspect safely, the right way to file an insurance claim, and how to avoid the storm-chasing contractors who flood Madison after every major event. Most homeowners under-document hail damage and lose claim money they should win. After reading this, you won't. SECTION 1 — What hail damage looks like (250 words) Hail damage isn't always obvious. The dramatic scenes of shattered windows and dented cars are the visible part. The damage to your roof is usually subtler — and that's where most claims get under-paid. Key indicators of hail damage on asphalt shingles: — Circular impact marks on the shingle surface, typically 1/4 to 1 inch in diameter — Granule displacement around the impact, often visible as a slightly lighter spot — Cracked or split shingles, particularly along the edges — Bruised areas (visible mostly to the touch — hail can compress the underlying mat without obvious surface damage) Key indicators on metal flashings and components: — Dents in metal flashings, vents, and gutters — Scratched or chipped paint on metal trim — Bent or compressed gutter sections Damage may also be visible on: — Window screens (often the first to show hail damage) — Shutters, especially older painted ones — Air conditioner condenser fins — Mailbox dents (an indicator of hail size) If you see hail damage on visible surfaces (windows, AC unit, mailbox), there's a high probability of damage on your roof — even if it's not obvious from the ground. The granule layer on asphalt shingles is designed to resist exactly this kind of impact, and even when shingles look fine from below, the granules near impact points often shift or dislodge. SECTION 2 — How to inspect safely after a hailstorm (200 words) First rule: don't climb on your roof yourself, especially right after a storm. Wet surfaces, possibly damaged decking, and the chance of further weather make DIY inspections genuinely risky. Almost every fatal residential ladder accident in Wisconsin happens to homeowners doing routine maintenance — not professional contractors. What you can safely do from the ground: — Walk around your home and photograph anything visibly damaged (windows, trim, AC unit, mailbox, vehicles) — Look up at gutters from the ground and photograph any visible dents or damage — Check your downspouts for shingle granules — heavy granule loss after a storm is a strong indicator of hail damage on the roof — Note the date, time, and approximate hail size if you saw the storm Document these observations in writing the day of or the day after the storm. Insurance adjusters give weight to documentation that's contemporaneous with the storm. A description written three weeks later is less compelling. For anything requiring climbing the roof, schedule a professional inspection. A free post-storm inspection from a contractor you trust is the right next step. SECTION 3 — How to file a successful insurance claim (300 words) Most Madison homeowners under-document hail damage. They photograph one obviously damaged shingle, file the claim, and accept whatever the adjuster offers. The result is often a partial repair when a full replacement was warranted, or a denied claim when an approved one was achievable. The right process: Step 1 — Contact your insurance company within 30 days of the storm to start the claim file. Don't get any repairs done yet. Don't even commit to filing a claim — just open the file. This preserves your timeline. Step 2 — Get a professional roof inspection from your own contractor. A contractor working for you (not for the insurance company) will identify damage the adjuster might miss and document it in a format adjusters recognize. Step 3 — Have your contractor present during the adjuster's inspection if possible. Adjusters work for the insurance company. Your contractor's job is to make sure damage gets documented properly. This is not about arguing — it's about making sure both parties are looking at the same things. Step 4 — Review the adjuster's scope of work carefully. Compare it line-by-line against your contractor's findings. If anything is missing or under-priced, this is your moment to address it. Once you sign off on the scope, the negotiation is largely over. Step 5 — Once the claim is approved, schedule the actual repair work. Your insurance pays the contractor (often in two installments — initial payment after work begins, final payment after completion). Your responsibility is your deductible plus any code-required upgrades not covered by the policy. This process generally takes 6–12 weeks from storm to repair completion. Patience matters. Rushing can cost you significant claim money. SECTION 4 — Avoiding storm-chaser scams (200 words) Major hail events in Madison attract contractors from out of state who arrive with rented trucks and convince homeowners to sign contracts on the spot. Some are legitimate. Many aren't. Common red flags: — Door-to-door sales after a storm — Pressure to sign immediately or 'lose your spot' on the schedule — Out-of-state license plates — Contracts with vague scope language — Insistence that you don't need to file a claim or that they'll 'absorb your deductible' (this is insurance fraud and Wisconsin law explicitly prohibits it) Legitimate Madison roofing contractors typically: — Have an established local address (look it up in advance) — Show up by appointment, not unsolicited — Provide written estimates with detailed line items — Don't pressure you to sign that day — Don't tell you to 'skip the claim' — that conversation is between you, your insurance company, and tax authorities If a contractor knocks on your door after a storm and pressures you to sign, decline politely and call a contractor you've researched in advance. The minor inconvenience of waiting for a scheduled inspection is much better than the potential disaster of hiring the wrong contractor. CLOSING CTA If your Madison home was hit by hail, schedule a free post-storm inspection. We'll document everything thoroughly, write a detailed scope for your insurance adjuster, and walk you through what to expect through the claim process. No charge, no obligation. Blog Post 4 — Asphalt Shingle vs Metal Roofing in Wisconsin URL: /blog/asphalt-shingle-vs-metal-roof-wisconsin Target: 'asphalt shingle vs metal roof Wisconsin' (informational, top of funnel) Title Asphalt Shingle vs Metal Roofing for Wisconsin Homes: Honest Comparison Meta Asphalt or metal? Real cost, lifespan, and performance comparison for Wisconsin homes from a Madison-area roofing contractor. No marketing spin. H1 Asphalt Shingle vs Metal Roofing in Wisconsin: An Honest Comparison INTRO (150 words) Most Madison homeowners ask this exact question when their old roof needs replacing. The marketing materials from each industry don't help — asphalt shingle manufacturers say their product is just as good for less money, metal manufacturers say theirs is better in every way. The truth is more nuanced. We install both. We have no commercial reason to push one over the other on a given home. So this guide gives you the honest version: real cost differences, real lifespan numbers in Wisconsin's climate, real performance trade-offs, and clear guidance on which homeowners benefit most from each option. Nothing in this guide is generic. The numbers and recommendations are based on what we actually see on Wisconsin roofs across thousands of inspections and installations. By the end, you should have a much clearer sense of which option fits your home, your budget, and your timeline. SECTION 1 — Cost comparison (200 words) Asphalt shingles run $400–$600 per square installed. Metal roofing runs $1,000–$1,500 per square for standard panel systems and higher for premium standing seam. For a typical Madison home (25 squares of roof surface), that translates to: — Architectural asphalt shingles: $11,000–$15,000 — Premium architectural shingles (lifetime warranty grades): $14,000–$17,000 — Standard metal roofing: $25,000–$32,000 — Premium standing seam metal: $32,000–$45,000 That's a real difference — typically $13,000–$20,000 more upfront for metal. For most homeowners, this gap is the deciding factor. But cost-per-year-of-service is a more useful metric than upfront cost. Asphalt shingles delivering 22 years of Wisconsin service at $13,000 cost about $590/year. Metal roofing delivering 50 years at $28,000 costs about $560/year. The math is closer than the upfront cost suggests. That said, most homeowners don't stay in one home for 50 years. The real question is: how long will you own this home? If under 15 years, asphalt almost always makes more financial sense. If 20+ years, metal becomes increasingly attractive. SECTION 2 — Lifespan in Wisconsin's climate (200 words) Asphalt shingle lifespan in Wisconsin is shorter than the manufacturer rating suggests. A '30-year shingle' typically delivers 22–25 years of real-world service. Wisconsin's freeze/thaw cycles, summer heat, and winter ice damming all accelerate granule loss and seal degradation. Metal roofing in Wisconsin typically delivers 40–60 years of service. The metal itself often outlasts the building. Failure points are typically the fasteners (every 25–30 years on exposed-fastener systems), the underlayment (which can fail before the metal does), and paint coatings on coated metals. In practical terms: — Asphalt shingles: plan for replacement every 22–25 years — Metal roofing: plan for fastener service at 25 years, full replacement at 50+ This matters more than it sounds. If you buy a new roof at age 40 and stay in your home through age 80, an asphalt roof needs to be replaced once during your tenure. A metal roof doesn't. That's a real cost savings — but only if you stay long enough to capture it. SECTION 3 — Performance differences (250 words) Snow and ice management: Metal roofs shed snow effectively, which can prevent ice damming on slopes prone to it. Asphalt shingles hold snow longer, which contributes to ice damming on north-facing slopes — a particular issue in Madison's climate. Energy efficiency: Metal reflects more of the summer sun, slightly lowering cooling costs. Modern asphalt with cool-roof granule technology partially closes this gap. Real-world energy bill differences are typically 5–15% in summer, less significant in winter. Wind resistance: Both systems can be installed to handle 130+ mph winds. Modern asphalt with proper installation (six-nail patterns, quality starter strip) holds up well in Wisconsin wind conditions. Metal panels are slightly more wind-resistant at extreme speeds but the difference doesn't matter for most Madison homes. Hail resistance: This is where metal has a real edge. Metal dents under hail but rarely fails. Asphalt cracks and loses granules under hail and may need full replacement after a serious storm. Class 4 impact-resistant asphalt shingles narrow this gap and may earn an insurance discount. Fire resistance: Both rate Class A when properly installed. Metal has a slight edge for properties in fire-prone areas (more relevant in rural areas than central Madison). Noise: Metal is louder during rain than people expect. Modern installs with proper underlayment and decking minimize this dramatically — but don't eliminate it. Some homeowners love the rain sound; others find it disruptive. Worth thinking about. SECTION 4 — Aesthetics and home style fit (150 words) Asphalt shingles match almost any architectural style. Wide range of colors, profiles, and styles — from traditional 3-tab to dramatic architectural designs that mimic wood shake or slate. Most Madison neighborhoods feature asphalt shingle roofs, so it's the safe aesthetic choice. Metal roofing has more limited stylistic range but increasing variety. Standing seam metal looks distinctly modern — works beautifully on contemporary architecture, more challenging on traditional Cape Cod or Colonial homes. Stone-coated metal mimics shingle or tile appearance while delivering metal's longevity. HOA considerations: Some Madison-area subdivisions have HOA architectural review committees that restrict roofing materials. Asphalt is almost always approved without question. Metal sometimes requires explicit approval and may be restricted to specific styles or colors. Check before committing. Resale value: Metal roofs are increasingly desirable to buyers, particularly to homeowners planning to stay long-term. Asphalt is the expected default — neither a plus nor a minus to most buyers. SECTION 5 — Which is right for which homes (250 words) Asphalt shingles make sense for: — Most standard Madison homes — Budget-conscious replacements where lowest upfront cost matters — Homeowners planning to stay 7–15 years — Homes in HOA-restricted neighborhoods where metal isn't approved — Historic preservation areas where original aesthetic must be matched — Homes with simpler roof geometry where the per-square cost difference scales meaningfully Metal roofing makes sense for: — Long-term homeowners (planning to stay 20+ years in the home) — Homes with persistent ice damming on north-facing slopes — Modern architectural styles where metal complements the design — Fire-prone rural properties — Homeowners who value the lowest possible long-term cost-of-ownership — Properties with significant attic ventilation challenges (metal's reflective properties help) Specific Madison considerations: — Lake-area homes (McFarland, Monona, Maple Bluff): metal handles humidity better than asphalt — Historic district homes: asphalt usually required, sometimes specific historic color profiles — Newer subdivisions with HOA review: check material approval before deciding — Rural Dane County properties: metal makes financial sense for long-term ownership The practical answer for most Madison homeowners staying 7–15 years is architectural asphalt shingles in the lifetime-warranty grade. For homeowners planning to stay 20+ years OR dealing with persistent ice damming OR with strong aesthetic preferences for metal, the upfront premium is worth paying. CONCLUSION (150 words) There's no universally 'right' answer. The right choice depends on how long you'll own the home, your budget tolerance for upfront cost, and your specific roof's exposure profile. For most Madison homeowners, architectural asphalt shingles in the lifetime-warranty grade are the practical choice. They handle Wisconsin's climate well, fit most home styles, work within most budgets, and don't require explaining choices to HOA review committees. For homeowners with longer time horizons, ice damming concerns, or modern architectural styles, metal is worth paying more upfront. The cost-per-year math gets attractive when you stay long enough to amortize the higher initial cost. Want help thinking it through for your specific home? Schedule a free roof inspection. We'll look at your roof, talk through both options based on your specific situation, and give you a written estimate for whichever direction makes sense for you. No pressure, no preset push toward either material. Blog Post 5 — How to Choose a Roofing Contractor in Madison URL: /blog/how-to-choose-roofing-contractor-madison Target: 'how to choose a roofing contractor Madison' (informational, decision-making stage) Title How to Choose a Roofing Contractor in Madison: 8 Questions to Ask Meta Choosing a Madison roofing contractor? Eight questions every homeowner should ask before signing — from a contractor who knows what good answers look like. H1 How to Choose a Roofing Contractor in Madison, WI: 8 Questions to Ask Before Signing INTRO (200 words) We're a roofing contractor writing about how to evaluate roofing contractors. Yes, that's a little awkward. But we'd rather you ask great questions and pick the right contractor — even if it's not us — than pick the wrong contractor and have a bad experience that taints your view of every contractor in Madison. Bad contractor experiences hurt the whole industry. They make every legitimate contractor's job harder by rightfully making homeowners suspicious. We want a Madison roofing market where homeowners feel confident hiring contractors and contractors feel proud of the work the industry produces. So here's an honest guide to picking the right one. Eight questions every Madison homeowner should ask before signing a roofing contract. Each question is followed by what good answers sound like — and what bad answers signal. None of this is rocket science. But homeowners who ask these questions before hiring rarely have horror stories afterward. Homeowners who skip them are the ones we hear from when something goes wrong with a previous contractor's work and they need someone to make it right. Let's get into the questions. Q1 — 'Are you licensed and insured? Can I see proof?' (150 words) Wisconsin doesn't require state-level licensing for roofing contractors, which means anyone can call themselves one. Local Madison-area municipalities require permits, but that's not the same as the contractor being qualified. What actually matters is insurance: general liability ($1M minimum), workers' compensation, and property damage coverage. Ask for current proof — a certificate of insurance issued by the carrier directly is better than a copy from the contractor. Good answer: 'Yes — here's our certificate of insurance from [carrier name]. Our general liability is $1M per occurrence with $2M aggregate. Workers' comp is current. I'll have the carrier send you a copy directly if you'd like.' Bad answer: vagueness, defensive responses, or 'we're insured but I don't have the documents handy.' If they can't produce proof on request, the insurance probably isn't current — or doesn't exist. Q2 — 'How long have you been doing this in the Madison area?' (150 words) Local experience matters because roofing in Wisconsin is genuinely different than roofing elsewhere. Ice damming, freeze/thaw cycles, ventilation requirements — local contractors understand these naturally. Good answer: a specific number of years, ability to name Madison-area neighborhoods they've worked in, recent customer references in Dane County. Bad answer: vague claims about 'years of experience' without specifics, references that turn out to be from other states, or a story that doesn't add up when you check the company's domain registration date or BBB founding year. Out-of-state storm chasers usually claim 'national experience' — which sometimes means decades of legitimate work and sometimes means three years of moving from disaster to disaster. Look for established local addresses, multi-year Google review history, and references from Madison-area homeowners specifically. Q3 — 'What manufacturer certifications do you have?' (150 words) GAF Master Elite, Owens Corning Platinum Preferred, CertainTeed SELECT — these certifications require ongoing training, performance audits, and quality benchmarks. They're not free to maintain. Manufacturers don't hand them out lightly. A certified contractor isn't necessarily better than an uncertified one — plenty of excellent local contractors have skipped manufacturer certifications. But the certification is a credible third-party signal that the contractor invests in quality and meets ongoing performance standards. Bonus: certified contractors can offer extended manufacturer warranties that uncertified contractors can't. A GAF Master Elite contractor can offer the GAF Golden Pledge warranty (50 years on the entire system); a non-certified contractor can only offer the standard manufacturer warranty (typically 20–30 years on materials only). Good answer: specific certifications with current status, willingness to show their listing in the manufacturer's online directory. Q4 — 'What does your warranty actually cover?' (150 words) Most Madison roofers offer some form of workmanship warranty (typically 5–10 years). Read the fine print. Some 'lifetime warranties' have so many exclusions they're essentially worthless. Ask specifically: 'If a leak shows up in three years and it's because of how you installed it, what's covered, what's not, and how do I file the claim?' Specific answers are better than marketing language. Good answer: clear coverage scope, specific exclusion list, written claim process with named contact, and willingness to share their warranty document before you sign. Bad answer: 'lifetime warranty on everything' (almost certainly false), 'we'll take care of you' (no documented commitment), or claim processes that require you to pay upfront and 'maybe' get reimbursed. Written warranties matter. Verbal commitments evaporate when crew members leave the company or ownership changes. Q5 — 'Will you pull the permits?' (100 words) Madison and surrounding municipalities require permits for roof replacements. The contractor should pull them — not you. If a contractor asks you to pull the permit yourself, that's a red flag. They may be trying to shift code-compliance liability to you, they may not be qualified to pull permits in the jurisdiction, or they may not be licensed to pull permits at all. Good answer: 'Yes, we pull all permits as part of our standard process. The permit cost is included in the estimate.' Bad answer: 'You'll need to pull that yourself' or 'We don't pull permits — saves you money.' Q6 — 'Will the same crew that quotes me actually do the work?' (150 words) Many large roofing companies use sales staff that quotes the job and then subcontracts the actual installation to crews you'll never meet beforehand. There's nothing inherently wrong with this approach — but the crew who quotes is rarely the crew who executes, and quality consistency varies. Smaller local contractors typically use the same in-house crews from estimate through installation. Communication is more direct, accountability is clearer, and the person who promised certain things during the estimate is often the same person ensuring those things happen. Neither model is automatically better. But you should know which you're getting. Good answer: clear explanation of who does what — sales person, project manager, crew leader, installation crew — and how communication flows. Bad answer: vagueness about who's actually responsible, or 'don't worry about the crew, just sign the contract.' Q7 — 'Can you provide local references?' (150 words) Not just a Google review link — actual phone numbers of recent Madison-area customers willing to talk on the phone. A contractor doing quality work has these. A contractor avoiding the question doesn't. Call two or three. Ask: — How was the cleanup? — Did the project finish on time and on budget? — Was the price what was quoted, or did it escalate? — Would you hire them again? — Anything you wish had gone differently? Five minutes on the phone with two recent customers tells you more than an hour of marketing. Reference checks rarely turn up surprises, but the surprises you do find are usually the kind that would have made you choose a different contractor. Good answer: contractor proactively offers references with specific names and recent project dates. Bad answer: defensive responses, claims that 'all our reviews are online' (online reviews are filtered; phone references aren't), or excuses about customer privacy. Q8 — 'What's your process if something goes wrong?' (150 words) Good contractors have a process for problems because problems happen on every job — minor scope changes, weather delays, unexpected deck damage during tear-off. Bad contractors get defensive when asked. The answer you want: a clear escalation path, who to call, how decisions get made, how change orders are handled in writing. Good answer: 'If anything comes up during the project, your project manager is your point of contact. We document scope changes in writing before doing the work, with a clear cost. If you're not satisfied with how something is handled, you can escalate to [owner name] directly.' Bad answer: 'We don't really have problems' (everyone has problems), 'just call me' (no documented process), or vagueness that suggests they haven't thought about it. Vague answers here predict vague communication during the project. That's where most homeowner horror stories come from. CONCLUSION (200 words) Bad contractor decisions are the single biggest source of roofing horror stories in Madison. Almost every story starts the same way: lowest bid, vague answers, pressure to sign quickly, and a contractor who looked busy enough that the homeowner assumed they were good. The right approach is to interview 2–3 contractors, ask these eight questions, and trust your judgment about who answered them most credibly. Price shouldn't be the deciding factor — within a reasonable range, the lowest bid is often a sign of skipped corners that show up later. Within 20% of each other, all bids are roughly comparable. Below that range, somebody's cutting something. Beyond the questions, watch for the soft signals: Does the contractor listen to your concerns or talk past them? Are they patient with your questions or dismissive? Do they show up on time for the estimate appointment? We'd love to be the contractor you choose. But more than anything, we want you to choose well — for your home and for the long-term health of the contractor relationships in Madison. If you'd like to ask any of these questions in person, schedule a free inspection. We'll show up on time and bring real answers.`,
      },
    ],
    testimonial: {
      quote: `Re-roof and new gutters in a single week. Yard was spotless when they left — magnetic sweep for nails was a nice touch you don't see from every contractor.`,
      author: "[Customer Name]",
      location: "Monona, WI",
    },
    neighbors: ["madison", "mcfarland", "cottage-grove"],
  },
];

export function getCityBySlug(slug: string): CityPage | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}
