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
        answer: `For most Madison homes, architectural asphalt shingles offer the best balance of cost, durability, and Wisconsin-specific performance. Metal roofs are excellent for snow management and longer life but cost 2–3x more upfront. We'll walk you through the trade-offs based on your home and budget.`,
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
        answer: `Yes — Home Defender Remodeling also serves nearby DeForest, Cottage Grove, and Marshall, plus the rest of Dane County.`,
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
        answer: `Yes. Verona sees more hail than central Madison — we're experienced with documenting hail damage, writing scopes for adjusters, and getting Verona homeowners a fair claim outcome.`,
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
        answer: `Yes — in addition to Fitchburg, we serve Verona, Oregon, Stoughton, McFarland, and the rest of Dane County's southern communities.`,
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
        answer: `Yes — we serve Middleton, Cross Plains, Black Earth, and the rest of western Dane County.`,
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
        answer: `Yes — we also serve Westport, DeForest, Dane, and the rest of northern Dane County.`,
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
        answer: `Yes — Home Defender Remodeling serves Cottage Grove, Marshall, Deerfield, Sun Prairie, and the rest of eastern Dane County.`,
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
        answer: `Yes — Home Defender Remodeling serves all of McFarland plus Stoughton, Cottage Grove, and the rest of southeast Dane County.`,
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
        answer: `Yes. We document storm damage, write detailed scopes for adjusters, and communicate directly with insurance companies.`,
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
        answer: `Yes — Oregon, Stoughton, Brooklyn, and the rest of southern Dane County.`,
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
        answer: `Yes — DeForest, Windsor, Dane, Waunakee, and the rest of northern Dane County.`,
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
        answer: `Yes — we serve Monona, Maple Bluff, Shorewood Hills, and the rest of central Dane County.`,
      },
    ],
    testimonial: {
      quote: `Re-roof and new gutters in a single week. Yard was spotless when they left — magnetic sweep for nails was a nice touch you don't see from every contractor.`,
      author: "[Customer Name]",
      location: "Monona, WI",
    },
    neighbors: ["madison", "mcfarland", "cottage-grove"],
  },
  // === 6 neighborhoods (Neighborhood Strategy §4) ===
  {
    slug: "maple-bluff",
    cityName: "Maple Bluff",
    cityState: "WI",
    isNeighborhood: true,
    parentCity: "Madison",
    title: "Roof Replacement in Maple Bluff, WI | Home Defender Remodeling",
    metaDescription: "Roofing contractor for Maple Bluff homes. Building Board permits, lakeshore-grade materials, premium installations. Free in-home consultation.",
    h1: "Roof Replacement in Maple Bluff, WI",
    hero: `Maple Bluff isn't part of Madison — it's a separate village on the northeast shore of Lake Mendota, with its own permit office, its own Building Board, and its own approval process for exterior changes. For Maple Bluff homeowners, choosing a roofing contractor means choosing one who actually knows how the village's process works, not one who'll learn at your expense.

Home Defender Remodeling has worked with the Maple Bluff Building Board's review process. We know which projects need full Board approval (material changes, anything affecting the home's exterior appearance) and which projects qualify for administrative permits (identical replacements). We pull the right paperwork the first time and don't slow down your project because of jurisdiction confusion.`,
    localContext: `Maple Bluff was developed across five separate real-estate developments dating from 1892 to 1926. The result is one of the most architecturally diverse neighborhoods in the Madison area, packed into a small geographic footprint along the lake.

The earliest homes — built between 1892 and 1910 along the bluff and McBride's Point — feature Queen Anne and Shingle-style architecture with steep pitches, decorative dormers, intricate roof transitions, and original cedar shake roofing systems. Many of these homes have been re-roofed multiple times over the past century. The original framing is typically heavy timber, in good condition, but the underlayment systems and ventilation often need significant upgrading during replacement.

The 1910–1925 development period brought Period Revival architecture — Tudor Revival, Georgian Revival, Dutch Colonial, and Colonial Revival homes designed by Madison's most prominent architects of the era, including Frank Riley (who designed the Wisconsin Governor's Mansion in Maple Bluff and homes throughout the village). These homes often feature gambrel roofs, multiple gable transitions, slate or imitation-slate roofing originally, and complex flashing details around chimneys and dormers.

The later 1920s development brought larger Craftsman, Prairie School, and early American Foursquare homes. These tend to have lower-pitched roofs with broader eaves, requiring different ventilation strategies than the steeper earlier homes.

What all Maple Bluff homes share: lakefront or lake-adjacent exposure, mature tree canopy, and significant historical and architectural value that makes proper roofing material selection more important than in newer Madison subdivisions. The wrong material choice on a Period Revival home isn't just an aesthetic mismatch — it can affect resale value substantially given the village's premium market positioning.`,
    permittingSection: `The Village of Maple Bluff issues its own building permits. The process differs from Madison's in important ways.

Identical roof replacements (same materials, same colors, same profile) qualify for administrative approval — typically issued within 5–7 business days. No public hearing required.

Material changes (asphalt to metal, color changes that affect curb appearance, addition of skylights or solar) require Maple Bluff Building Board review. The Board meets monthly, and your project goes on the agenda. Approval is generally straightforward for material changes that respect the home's architectural character — but you need to apply with appropriate documentation and time the project to the Board's schedule.

We handle both processes. We've worked Maple Bluff projects through both administrative permits and Board reviews, and we know what documentation each requires. We don't sub-contract the permit work to homeowners — that's a common practice with less-experienced contractors that delays projects and creates unnecessary friction with the village staff.`,
    roofingConsiderations: `Maple Bluff's narrow geography along Lake Mendota means every home in the village is within a few hundred yards of the water. This affects roofing in three measurable ways.

Higher humidity. Lake-effect humidity accelerates wear on metal roofing components — flashings, valley liners, ventilation systems, and exposed fasteners. Standard galvanized flashings that perform fine in inland Madison neighborhoods can show measurable corrosion within 8–10 years on Maple Bluff homes. We use copper or stainless steel flashings on Maple Bluff installs, plus marine-grade sealants at all penetrations.

More frequent moisture cycles. The proximity to Lake Mendota means more days of fog, dew, and surface moisture per year than inland properties experience. Asphalt shingles with adequate granule coverage and proper sealing handle this well; thin asphalt shingles or older 3-tab products fail faster than expected. We typically recommend architectural shingles in mid-tier or higher grades for lake-adjacent homes.

Mature tree canopy. Maple Bluff's namesake mature maples create sustained debris and branch impact issues. Gutters fill faster, valley accumulation is heavier, and branch impact damage is more common than in newer Madison subdivisions. We extend ice and water shield further than minimum code requirements on Maple Bluff installs, and we recommend gutter protection systems on every replacement to manage the ongoing debris load.`,
    faqs: [
      {
        question: "Does Maple Bluff have its own permit process separate from Madison?",
        answer: `Yes. Maple Bluff is a separate village with its own permit office and Building Board. We pull all permits with the Maple Bluff staff directly — Madison's permits don't apply here. The process is generally faster than Madison for identical replacements (5–7 business days), and we handle the Building Board agenda timing if your project requires Board review.`,
      },
      {
        question: "Will I need Building Board approval for my roof project?",
        answer: `It depends on what you're doing. Identical replacements (same material, color, profile as existing) get administrative approval — no Board review needed. Anything that changes the home's exterior appearance — material change, color change, adding skylights, going from asphalt to metal — requires Building Board review. We assess your project up front and tell you which path applies before you commit.`,
      },
      {
        question: "What roofing materials work best on Maple Bluff lakefront homes?",
        answer: `For most Maple Bluff homes, premium architectural asphalt shingles with copper or stainless steel flashings give the best balance of cost, longevity, and humidity resistance. For long-term homeowners or homes with persistent moisture issues, standing seam metal performs even better. We don't recommend basic 3-tab shingles or low-grade asphalt — they don't hold up to lake-effect conditions.`,
      },
      {
        question: "Can I match the slate look on my historic Period Revival home?",
        answer: `Yes. Several manufacturers (CertainTeed Grand Manor, GAF Grand Sequoia, Owens Corning Berkshire, and stone-coated metal options like DECRA) produce shingles designed to mimic slate or wood shake while delivering modern performance and weight. We've installed these on Period Revival homes in Maple Bluff and elsewhere — the visual match is excellent and the Building Board generally approves them readily.`,
      },
      {
        question: "How much does a Maple Bluff roof replacement typically cost?",
        answer: `Maple Bluff homes typically run $14,000–$30,000+ for full roof replacement, due to larger average home size, premium material selections, complex roof geometry on Period Revival homes, and the upgraded flashings we use for lake exposure. Specific costs depend on roof size, pitch, and material — every estimate is in writing after an in-person inspection.`,
      },
    ],
    testimonial: {
      quote: `Home Defender Remodeling re-roofed our Maple Bluff home — a 1924 Period Revival with multiple gables and original slate-look roofing. They handled the Building Board approval, sourced shingles that matched the home's architectural character, and the new flashings have held up beautifully through two lakeside winters.`,
      author: "[Customer Name]",
      location: "Maple Bluff, WI",
    },
    neighbors: ["shorewood-hills", "spring-harbor-madison", "madison"],
  },
  {
    slug: "shorewood-hills",
    cityName: "Shorewood Hills",
    cityState: "WI",
    isNeighborhood: true,
    parentCity: "Madison",
    title: "Roof Replacement in Shorewood Hills, WI | Home Defender Remodeling",
    metaDescription: "Roofing contractor for Shorewood Hills homes. Mid-century to contemporary architecture, lakeshore-grade materials, mature tree canopy expertise.",
    h1: "Roof Replacement in Shorewood Hills, WI",
    hero: `Shorewood Hills sits on Lake Mendota's southwest shore, immediately west of UW-Madison's campus. Like Maple Bluff, it's a separate village from Madison with its own permit process. Unlike Maple Bluff, its housing stock skews toward mid-century modern and contemporary — homes built from the 1940s through today, with architectural variety unique to academic suburbs of that era.

For Shorewood Hills homeowners, roof replacement isn't just a maintenance project — it's an opportunity to address mid-century architectural details that don't exist in newer Madison subdivisions. Flat-roof carports, low-slope sections, deep cantilevered eaves, and unconventional drainage all require contractors who understand mid-century construction. Home Defender Remodeling has the experience, the materials, and the village permit familiarity to do these projects right.`,
    localContext: `Shorewood Hills' housing stock has three distinct eras, each with different roofing implications.

The earliest homes (1920s–1940s) were built when the village was first developed as a streetcar suburb. These tend to be modest Craftsman bungalows and Tudor Revival homes with conventional gable roofs, steep pitches, and original cedar shake or early asphalt shingle systems. Many have been re-roofed multiple times. Common issues during replacement: original tongue-and-groove decking that's still serviceable but uneven, undersized rafters by modern standards, and severely under-ventilated attics.

The mid-century modern era (1950s–1970s) brought Shorewood Hills' most distinctive housing — Frank Lloyd Wright-influenced ranch homes, Eichler-style flat-roof contemporaries, and split-levels with low-slope sections. These homes often have deep cantilevered eaves, transition from sloped to flat roof sections within a single home, large skylight installations, and clerestory windows requiring complex flashing. The original flat-roof areas typically used built-up tar-and-gravel systems that are now well past life. Modern TPO or EPDM membranes installed correctly can give these areas another 25–30 years.

The contemporary era (1990s–present) brought larger custom homes with dramatic architecture — significant gable transitions, mixed materials, exposed timbers, and shed-style additions to existing mid-century cores. These projects often require coordinating multiple roofing systems on a single home, and the visual continuity of the finished product matters as much as the technical performance.

What all Shorewood Hills homes share: significant mature tree canopy (a defining village characteristic), lake-adjacent exposure, and homeowner expectations of premium execution. The neighborhood's home values support quality work and don't tolerate cut corners.`,
    permittingSection: `Shorewood Hills issues its own building permits separately from Madison. The village's permit process is generally similar to Madison's — relatively straightforward for standard roof replacements, with a typical 5–10 business-day turnaround.

The village does have its own zoning ordinance that affects accessory structures, additions, and significant exterior modifications, but most roof replacements (like-for-like material) don't trigger zoning review.

Where Shorewood Hills differs in practice: the village has stronger expectations for project visibility and neighbor communication during the work itself. We coordinate dumpster placement, debris management, and crew presence in ways that respect the residential character of the streets. This isn't a regulatory requirement — it's a courtesy expectation that distinguishes contractors who work the area regularly from those who don't.`,
    faqs: [
      {
        question: "Does Shorewood Hills have its own permit process?",
        answer: `Yes. Shorewood Hills is a separate village with its own building permit office. The process is similar to Madison's but the permits and inspections happen with village staff, not city staff. We pull permits directly with Shorewood Hills — typical turnaround is 5–10 business days for standard replacements.`,
      },
      {
        question: "Can you handle the flat-roof carport on my mid-century home?",
        answer: `Yes. Mid-century flat-roof carports, low-slope additions, and Eichler-style designs need different materials than pitched roofs — typically modern TPO or EPDM membrane systems. We install both and we know how to handle the transitions where flat meets pitched roof on the same home. This is a common mistake that less-experienced contractors get wrong.`,
      },
      {
        question: "My home has skylights — how do those factor in?",
        answer: `Skylights on mid-century Shorewood Hills homes often need replacement at the same time as the roof. The original units are typically 30–50 years old at this point and the seals fail predictably. We can replace the skylights as part of the project, or flash around existing units if they're newer. Either way, the flashing details around skylights matter more than almost any other component for long-term water management.`,
      },
      {
        question: "How does the tree canopy affect material choice?",
        answer: `Significantly. Mature trees create constant debris (leaves, branches, sap, bird droppings), occasional impact damage, and accelerated granule loss from organic acid contact. We recommend impact-resistant Class 4 shingles, gutter protection systems, and upgraded flashings on Shorewood Hills installs to address this. The premium pays for itself in roof life — typical asphalt shingles under heavy canopy fail 5–7 years earlier than rated.`,
      },
      {
        question: "What does a Shorewood Hills roof replacement typically cost?",
        answer: `Most Shorewood Hills homes run $13,000–$25,000 depending on home size, roof complexity, and whether the project includes flat-roof sections or skylights. Mid-century homes with mixed roof systems sometimes run higher due to the multiple material types. Every estimate is in writing after an in-person inspection.`,
      },
    ],
    testimonial: {
      quote: `Home Defender Remodeling re-roofed our 1962 mid-century home in Shorewood Hills — sloped main roof, flat-roof carport, three skylights, the works. They handled the village permit, did the TPO membrane on the carport correctly, and replaced the skylights at the same time. The crew was professional and the project finished on schedule.`,
      author: "[Customer Name]",
      location: "Shorewood Hills, WI",
    },
    neighbors: ["maple-bluff", "spring-harbor-madison", "madison"],
  },
  {
    slug: "spring-harbor-madison",
    cityName: "Spring Harbor",
    cityState: "WI",
    isNeighborhood: true,
    parentCity: "Madison",
    title: "Roof Replacement in Spring Harbor, Madison WI | Home Defender Remodeling",
    metaDescription: "Roofing contractor serving Spring Harbor and Madison's lake-adjacent west side. Lakeshore-grade materials and humidity-resistant installations.",
    h1: "Roof Replacement in Spring Harbor, Madison WI",
    hero: `Spring Harbor spans more than 400 acres on Lake Mendota's southwestern shore, with over 1,200 households across single-family homes and condominium developments. Unlike Maple Bluff or Shorewood Hills, Spring Harbor is part of the City of Madison — Madison permits and Madison processes apply. What makes it distinctive is the combination of significant Lake Mendota frontage, a relatively recent development pattern (most homes 1960s–2000s), and the resulting mix of mid-century, traditional, and contemporary architecture you don't see elsewhere on Madison's near west side.

Home Defender Remodeling has been doing roof replacements on Spring Harbor homes for years. We know what the lake exposure does to roofing materials, we know which of the area's home styles benefit from which material upgrades, and we handle Madison permits as part of every project.`,
    localContext: `Spring Harbor's housing stock developed primarily between the late 1950s and the early 2000s, with roughly three identifiable construction periods.

The early development phase (late 1950s–1970s) brought ranch-style and split-level homes typical of Madison's post-war suburban expansion. These homes are now 50–65 years old, and the original roofs were replaced 25–35 years ago — meaning the current roofs are due or overdue for replacement now. Roof geometry tends to be relatively simple (gable or hip roofs with moderate pitches), which makes replacement cost-efficient. The original construction was typically modest in spec, so we frequently upgrade ventilation, ice-and-water shield coverage, and underlayment quality during replacement.

The 1980s–1990s development brought larger Colonial Revival, Tudor Revival, and Cape Cod-style homes with more elaborate roof geometry — multiple gables, dormers, varied pitches. These homes typically had higher-quality original construction and have aged better, but the original 25–30-year shingles are now near or past end-of-life on most of them.

The contemporary phase (2000s onward) brought larger custom homes with mixed architectural styles, often featuring steep gables, dramatic entry rooflines, mixed materials (asphalt with some metal accents), and substantial square footage. These homes are now 20–25 years old and approaching first replacement.

The through-line for Spring Harbor: every era of home shares lake-adjacent exposure, mature trees from the original development plantings now reaching significant maturity, and proximity to Lake Mendota that affects material selection in measurable ways.`,
    permittingSection: `Spring Harbor is part of the City of Madison, so all roofing projects fall under Madison's permit and inspection process. Standard residential roof replacement permits typically take 5–10 business days to issue.

What's worth knowing: some Spring Harbor condominium associations and the Spring Harbor neighborhood organization have architectural review preferences for material and color choices, even though there's no formal HOA review for most single-family homes. We coordinate any review needed during the estimate process so you don't run into surprises.

For lakefront properties specifically, there can be additional shoreland zoning considerations if the project involves anything beyond standard roof replacement (e.g. dormer additions, structural changes, work near the shoreline setback). We flag these during the inspection and walk you through any additional approvals needed.`,
    faqs: [
      {
        question: "Is Spring Harbor part of Madison or a separate village?",
        answer: `Spring Harbor is part of the City of Madison, unlike nearby Maple Bluff or Shorewood Hills. Madison's permit and inspection process applies. We pull permits with Madison's Building Inspection division as part of every project.`,
      },
      {
        question: "How much does lake exposure affect material choice on my home?",
        answer: `It depends on your distance from the water. Lakefront and near-lake homes (within 2–3 blocks) see measurable wear acceleration on standard roofing components — we recommend upgraded flashings and premium architectural shingles. Inland Spring Harbor homes more than 3 blocks from the shore generally don't need the same upgrades. We assess your specific home during the estimate.`,
      },
      {
        question: "My ranch home was last re-roofed in the 1990s — what should I expect?",
        answer: `A ranch home from the 1950s–1970s with a 1990s re-roof is in the typical replacement window now. Expect to find that the original ventilation, underlayment, and ice-and-water coverage were minimal by modern standards. We typically upgrade these systems during replacement to bring the home up to current performance standards. This adds modestly to project cost but extends roof life and prevents future ice-damming issues.`,
      },
      {
        question: "Are there shoreland setback rules I need to know about?",
        answer: `For standard roof replacement (no structural changes, no expansion of footprint), shoreland setback rules generally don't apply. If your project involves dormer additions, roof-line changes, or structural work near the lake, additional permits may apply. We flag this during the in-person inspection and coordinate any required approvals.`,
      },
      {
        question: "What does a Spring Harbor roof replacement typically cost?",
        answer: `Most Spring Harbor single-family homes run $11,000–$22,000 for full replacement, depending on home size, complexity, and material choice. Larger contemporary homes with steep complex roofs run higher; modest 1960s ranches run lower. Lakefront homes with upgraded flashings carry a small premium for the materials. Every estimate is in writing after an inspection.`,
      },
    ],
    testimonial: {
      quote: `Home Defender Remodeling did our Spring Harbor roof — a 1970s ranch home about three blocks from the lake. They explained which upgrades made sense for our specific exposure level (we didn't need full lakefront-grade flashings) and the price was very reasonable. The new roof has been excellent through two winters.`,
      author: "[Customer Name]",
      location: "Spring Harbor, Madison, WI",
    },
    neighbors: ["maple-bluff", "shorewood-hills", "madison"],
  },
  {
    slug: "university-heights-madison",
    cityName: "University Heights",
    cityState: "WI",
    isNeighborhood: true,
    parentCity: "Madison",
    title: "Roof Replacement in University Heights, Madison WI | Home Defender Remodeling",
    metaDescription: "Roofing contractor experienced with University Heights historic district homes. Landmarks Commission approval, period-appropriate materials, premium installations.",
    h1: "Roof Replacement in University Heights, Madison WI",
    hero: `University Heights is a designated local historic district — Madison's third, established in 1985 and listed on the National Register since 1982. Nearly 400 homes within the district are protected under the Madison Landmarks Commission's oversight, which means roof replacements involving visible exterior changes require a Certificate of Appropriateness before the work can begin.

For University Heights homeowners, this changes how roofing projects work. The contractor has to know what the Landmarks Commission will and won't approve. The contractor has to source materials that meet historic-appropriate standards. And the contractor has to handle the application process so it doesn't delay your project for months.

Home Defender Remodeling has worked University Heights projects through the Landmarks Commission process. We know what gets approved without revisions, what triggers extended review, and how to prepare the documentation the Commission needs. We're not the right choice for every roofing project — but for historic-district homes, that experience matters a lot.`,
    localContext: `University Heights was platted in 1893 and developed in waves through 1965. The district's 397 contributing structures represent one of the most architecturally significant residential collections in Wisconsin — homes designed by Frank Lloyd Wright, Louis Sullivan, George W. Maher, Keck and Keck, and Madison's most prominent architects of the early 20th century.

The early development phase (1894–1900) was constrained by the Panic of 1893, producing only 15 homes — primarily Queen Anne and Shingle-style with steep complex pitches, decorative dormers, and intricate roof transitions. The Charles Buell house at 115 Ely Place (1894), the first home built in the district, exemplifies the style.

The 1900–1915 expansion brought Prairie School architecture, which is what made University Heights nationally significant. Frank Lloyd Wright's Eugene Gilmore House at 120 Ely Place (1908) — the 'Airplane House' — is here, along with George Maher's Edward Elliott House (1910). Prairie School roofs are characterized by deep eaves, low-pitched gables, horizontal emphasis, and broad overhangs that create distinctive flashing and gutter integration challenges.

The 1915–1930 period brought Period Revival architecture — Tudor Revival, Georgian Revival, Colonial Revival, and Dutch Colonial. Frank Riley designed about a dozen homes in the district during this period, including the James Law House (Tudor Revival, 1923) and the Maud and Howard Moore House (Georgian Revival, 1923). These homes feature steep pitches, complex flashing details around chimneys and dormers, false half-timbering, and gambrel roofs requiring specific replacement approaches.

The 1930–1950 fill-in development brought additional period revival and early ranch homes. Post-1950 ranch homes are 'non-contributing' to the historic district under the official designation but still benefit from the same historic-appropriate roofing standards expected throughout the neighborhood.

What all University Heights homes share: irreplaceable architectural significance, Landmarks Commission oversight for visible exterior changes, and homeowner expectations of period-appropriate execution.`,
    roofingConsiderations: `Material choice in University Heights is genuinely constrained — not by what's available, but by what the Landmarks Commission will approve and what's appropriate for the home's specific architectural style. Three categories work well:

Premium architectural asphalt shingles in historic-appropriate colors. CertainTeed Grand Manor, GAF Grand Sequoia, and Owens Corning Berkshire all produce shingles designed to mimic slate or wood shake while delivering modern performance. Dark grays, weathered browns, and slate-color blends are routinely approved. We've installed these on Tudor Revival, Georgian Revival, and Colonial Revival homes throughout the district.

Composite slate shingles (DaVinci, Brava, Inspire). Slightly more expensive but visually closer to true slate. Excellent for homes that originally had real slate roofs (many Period Revival homes did) or that benefit aesthetically from the appearance.

Real slate or terra-cotta tile (for homes that originally had these materials). Significantly more expensive but appropriate for a small number of homes. Limited Wisconsin contractors install these — we coordinate with specialty installers when the project requires real slate.

What we don't recommend in University Heights: basic 3-tab asphalt shingles (the Commission generally won't approve these for visible roof areas), low-grade architectural shingles in inappropriate colors, or radical material changes from the home's original palette without strong architectural justification.

For Prairie School homes specifically, the deep eave and low-pitch design means the roofing material itself is less visible from the street than on Period Revival homes — which gives more flexibility on the visible-from-public-way standard.`,
    faqs: [
      {
        question: "Do I need Landmarks Commission approval for my roof project?",
        answer: `It depends on what you're doing. Identical replacement (same material, same color) can qualify for staff-level approval, faster than full Commission review. Material changes, color changes, or additions like skylights require a Certificate of Appropriateness with Commission review. We handle the determination during the estimate so you know up front which path applies.`,
      },
      {
        question: "What materials does the Landmarks Commission typically approve?",
        answer: `Premium architectural asphalt shingles in historic-appropriate colors are routinely approved. Composite slate-look shingles work well for homes that originally had slate. Real slate or terra-cotta tile is approved for homes that historically had those materials. Standing seam metal is approved less consistently — it depends on the home's style and the Commission's read of historic appropriateness.`,
      },
      {
        question: "How long does the Landmarks Commission process take?",
        answer: `Staff-level approvals (identical replacements) typically add 2–3 weeks beyond a normal Madison roofing permit. Full Commission review (material or color changes) takes 4–8 weeks depending on the Commission's meeting schedule and whether your project goes through on first review. We help time your project to the Commission's calendar so you're not waiting for the next meeting.`,
      },
      {
        question: "My home was designed by Frank Lloyd Wright (or a notable architect) — does that change the process?",
        answer: `Yes. Homes individually designated or designed by significant architects sometimes receive enhanced review. We've worked Wright-designed homes (and homes by Maher, Riley, and others in the district) through the Landmarks Commission process. The bar is higher for these properties, but the process is workable with proper documentation.`,
      },
      {
        question: "Are there tax credits available for historic-district roof replacement?",
        answer: `Possibly. Wisconsin's Historic Rehabilitation Tax Credit can apply to qualifying rehabilitation work on properties listed on the National Register, which includes most University Heights contributing properties. The state credit is 25% of qualified expenses. Federal credits also exist but typically apply to income-producing properties. We're not tax advisors — but we can document the work in the format that supports a credit application, and we can refer you to specialists who handle the filings.`,
      },
    ],
    testimonial: {
      quote: `Home Defender Remodeling re-roofed our Tudor Revival in University Heights — original Frank Riley home, complex roof, the works. They handled the Landmarks Commission application, sourced shingles that the Commission approved on first review, and coordinated the entire process. Couldn't have done this project with a less experienced contractor.`,
      author: "[Customer Name]",
      location: "University Heights, Madison, WI",
    },
    neighbors: ["marquette-madison", "nakoma-madison", "madison"],
  },
  {
    slug: "marquette-madison",
    cityName: "Marquette / Third Lake Ridge",
    cityState: "WI",
    isNeighborhood: true,
    parentCity: "Madison",
    title: "Roof Replacement in Marquette / Willy Street, Madison WI | Home Defender Remodeling",
    metaDescription: "Roofing contractor for Marquette and Third Lake Ridge historic district homes. Landmarks Commission experience, period-appropriate materials, free estimates.",
    h1: "Roof Replacement in Marquette / Third Lake Ridge, Madison WI",
    hero: `The Marquette neighborhood — including the Third Lake Ridge Historic District — is Madison's east-side cultural anchor. Spanning from Blair Street to the Yahara River and from Williamson Street ('Willy Street') to Lake Monona, it's Madison's largest historic district, designated in 1979.

Unlike University Heights, which developed as a planned suburb for university faculty, Marquette grew organically across decades — from worker cottages near the lake to merchant homes along Williamson Street to mansions overlooking Lake Monona. The result is one of the most architecturally diverse neighborhoods in Madison, with everything from late-1800s Italianate cottages to Craftsman bungalows to early multi-family buildings, all subject to the same Madison Landmarks Commission oversight as University Heights.

For Marquette homeowners, roof replacement requires a contractor who can navigate the Landmarks Commission process, work appropriately with multiple architectural styles, and respect the neighborhood's lived-in working-class history rather than treating it like a museum. Home Defender Remodeling has done both kinds of projects — the elaborate Period Revival mansions and the modest worker cottages — and treats both with the same care.`,
    localContext: `Marquette's housing stock spans more than 130 years and includes a wider range of architectural styles than any other Madison historic district. Five identifiable categories matter for roofing.

Worker cottages and modest Italianate homes (1860s–1890s). Among Madison's oldest surviving residential structures, these tend to be small, single-story or 1.5-story homes with simple gable or hip roofs. Original construction was modest — undersized rafters by modern standards, often without proper underlayment. Many have been modified, expanded, or significantly renovated. Roof replacement typically involves structural assessment as well as material work.

Queen Anne and late Victorian homes (1880s–1910). Featured along the lakeshore and Williamson Street main thoroughfare, these include the more ornate residences that gave the neighborhood its early prestige. Steep complex pitches, multiple gable transitions, decorative dormers, original slate or wood shake roofing systems.

Craftsman bungalows and Prairie-influenced homes (1900–1925). The dominant style of the neighborhood's middle-class infill development. Lower pitches, broader eaves, simpler geometry than the Victorian-era homes — but often with original cedar shake roofs that have been replaced multiple times over a century. Common issues during replacement: under-ventilated attics, undersized rafters by modern code, original tongue-and-groove decking.

Early multi-family buildings (1900–1930). Marquette has more original duplexes, triplexes, and small apartment buildings than other Madison historic districts. These have larger roof surfaces with more complex water management requirements and often multiple meter and ventilation penetrations.

Mid-20th century infill (1940s–1970s). Some 'non-contributing' ranch and mid-century homes scattered through the district. These don't trigger the same Landmarks review as contributing structures, but they're still subject to district-character expectations during replacement.

What all Marquette homes share: lake-adjacent exposure (Lake Monona is closer to most homes here than Lake Mendota is to University Heights), historic district oversight, and a neighborhood culture that values genuine local craftsmanship over generic contractor work.`,
    faqs: [
      {
        question: "Is my Marquette home in the historic district?",
        answer: `It depends on the specific address. The Third Lake Ridge Historic District covers most but not all of the Marquette neighborhood. We confirm during the estimate whether your specific home is a contributing or non-contributing structure, which determines the level of Landmarks Commission review your project will require.`,
      },
      {
        question: "My home is a worker cottage from the 1880s — is it worth investing in premium roofing?",
        answer: `Almost always yes. Worker cottages in Marquette have appreciated significantly as the neighborhood has gentrified, and the homes are typically structurally sound under newer roofs. Premium roofing extends the home's life and protects the investment. We've done full replacements on cottages that are now valued at $400K+ and the math works easily.`,
      },
      {
        question: "How does the Lake Monona proximity affect my roofing choices?",
        answer: `For homes within 2–3 blocks of the lake, we recommend upgraded flashings (copper or stainless steel) and premium architectural shingles. For homes further inland, standard premium roofing systems perform fine. The exposure varies measurably with distance from the water, and we tailor recommendations to your specific home.`,
      },
      {
        question: "Do you handle multi-family buildings — duplexes and triplexes?",
        answer: `Yes. Marquette has more original multi-family structures than most Madison neighborhoods, and we work on these regularly. Multi-family roofing involves coordinating tenant access, scheduling around multiple residents, and managing more complex water management on larger roof surfaces. We have experience with all of it.`,
      },
      {
        question: "What does a Marquette historic-district roof replacement typically cost?",
        answer: `Most single-family Marquette homes run $11,000–$20,000 depending on home size and complexity. Larger Period Revival homes run higher; modest worker cottages run lower. Multi-family buildings vary based on size — typically $15,000–$35,000+. Historic-appropriate material upgrades typically add 10–20% over basic asphalt shingle pricing.`,
      },
    ],
    testimonial: {
      quote: `Home Defender Remodeling re-roofed our 1905 Craftsman in the Marquette neighborhood. Lake Monona is a few blocks away so we needed the upgraded flashings, and they handled the Landmarks Commission paperwork because we're inside the historic district. The whole project went smoothly and the new roof matches the home's character beautifully.`,
      author: "[Customer Name]",
      location: "Marquette, Madison, WI",
    },
    neighbors: ["university-heights-madison", "monona", "madison"],
  },
  {
    slug: "nakoma-madison",
    cityName: "Nakoma",
    cityState: "WI",
    isNeighborhood: true,
    parentCity: "Madison",
    title: "Roof Replacement in Nakoma, Madison WI | Home Defender Remodeling",
    metaDescription: "Roofing contractor for Nakoma neighborhood homes. Period Revival expertise, premium materials, free in-home consultation.",
    h1: "Roof Replacement in Nakoma, Madison WI",
    hero: `Nakoma was Madison's first true streetcar suburb — platted in 1915 by the Madison Realty Company, intentionally located beyond the existing streetcar lines, marketed to families seeking a 'better life away from the downtown density.' The developers established lot setbacks, height restrictions, and use restrictions designed to create an attractive, family-oriented neighborhood. A century later, those same restrictions are part of what gives Nakoma its distinctive character.

Nakoma is on the National Register of Historic Places but is not a local historic district under Madison Landmarks Commission oversight. This is an important distinction: the National Register designation provides honorary recognition and tax credit eligibility but doesn't require Certificate of Appropriateness for exterior changes. Roof replacements proceed under standard Madison permits.

What distinguishes Nakoma roofing projects is the architecture itself. The neighborhood developed primarily between 1920 and 1940, with most homes designed in Period Revival styles — Tudor Revival, Spanish Colonial Revival, Dutch Colonial, and English Cottage. Frank Riley designed homes here, as he did in University Heights. The result is a neighborhood with consistently high architectural quality and consistently complex roofing requirements.`,
    localContext: `Most Nakoma homes were built between 1920 and 1940, during what's now called the 'Period Revival era' of American residential architecture. The neighborhood's architecture is concentrated in five distinct styles, each with specific roofing implications.

Tudor Revival — the most common style in Nakoma. Steep complex pitches, decorative half-timbering on gable ends, prominent chimneys with elaborate flashing details, often with one or more dormers. Original roofing was typically slate, simulated slate, or wood shake. Most have been re-roofed multiple times over a century, and current asphalt shingle replacements need to respect the home's architectural intent.

Spanish Colonial Revival — less common but distinctive. Lower-pitched red tile roofs originally, often with stucco walls. The original tile is now 80–100 years old and frequently failing; replacement either matches the original tile (expensive but appropriate) or transitions to high-quality concrete or composite tile alternatives.

Dutch Colonial — the gambrel-roof style with characteristic shaped parapets. The two-pitch gambrel design creates specific water management challenges and requires experienced flashing work at the pitch transition. We've done several Nakoma Dutch Colonial projects and the gambrel detail is consistently the most important element of the install.

English Cottage / Storybook style — less common but distinctive, with steep simulated-thatch roofing details, eyebrow dormers, and intentional asymmetry. Original wood shake roofs are usually long gone; current installs typically use architectural shingles in colors and profiles that respect the storybook character.

American Foursquare and Craftsman — homes from the earlier development period (1915–1925) before Period Revival took over. Simpler geometry, typically lower-pitched hip roofs.

What all Nakoma homes share: high architectural quality, premium home values, mature tree canopy, and proximity to the UW Arboretum and Lake Wingra.`,
    permittingSection: `Nakoma is part of the City of Madison, so standard Madison permits apply. Unlike University Heights and Marquette, Nakoma is not a local historic district — meaning Madison Landmarks Commission review is not required for exterior changes. Roof replacements proceed under standard Madison roofing permits, typically issued in 5–10 business days.

That said, Nakoma is on the National Register of Historic Places, which provides two practical benefits. First, qualifying rehabilitation work may be eligible for Wisconsin Historic Rehabilitation Tax Credits. Second, the neighborhood's collective character creates strong informal expectations that material choices respect the architectural styles of the homes — even though there's no formal review.

We've worked Nakoma projects under both standard Madison permits and with documentation appropriate for tax credit applications. The choice depends on whether you're pursuing the credit, which we're happy to discuss during the estimate.`,
    faqs: [
      {
        question: "Does Nakoma require historic preservation review for roof replacement?",
        answer: `No. Nakoma is on the National Register of Historic Places but is not a local historic district. Madison Landmarks Commission review is not required. Standard Madison roofing permits apply, typically issued in 5–10 business days.`,
      },
      {
        question: "Are tax credits available for my Nakoma home's roof replacement?",
        answer: `Possibly. Wisconsin's Historic Rehabilitation Tax Credit (25% of qualifying expenses) can apply to properties listed on the National Register, which includes contributing properties in Nakoma. The credit applies to qualifying rehabilitation work — not just any maintenance. We can document the project in the format that supports a credit application, and we recommend consulting with a tax specialist familiar with Wisconsin historic credits.`,
      },
      {
        question: "My Tudor Revival has the original slate-look on it — what are my options for replacement?",
        answer: `Three good options. Premium architectural asphalt shingles in slate-color blends from CertainTeed Grand Manor or GAF Grand Sequoia (most cost-effective, excellent visual match). Composite slate-look from DaVinci or Brava (premium option, visually closer to true slate). Real slate (most expensive, requires specialty installer — we coordinate this). Most Nakoma Tudor Revival owners go with one of the first two options.`,
      },
      {
        question: "Can you handle the gambrel roof on my Dutch Colonial?",
        answer: `Yes. Gambrel roofs require experienced flashing work at the pitch transition between the upper steep pitch and the lower less-steep pitch. We've done several Dutch Colonial projects in Nakoma and the gambrel detail is the most important element of the install. The transition flashing has to be done right or the roof will leak there within 5 years.`,
      },
      {
        question: "What does a Nakoma Period Revival roof replacement typically cost?",
        answer: `Most Nakoma homes run $13,000–$22,000 with standard premium architectural shingles. Composite slate-look adds about 30%. Real slate adds significantly more — typically $35,000–$60,000+ for these homes. Larger Tudor Revival homes with complex roofs run higher across all material categories. Every estimate is in writing after an in-person inspection.`,
      },
    ],
    testimonial: {
      quote: `Home Defender Remodeling re-roofed our Nakoma Tudor Revival — original 1928 home, multiple gables, three chimneys, the works. They walked us through composite slate-look options and we ended up with shingles that look incredibly close to the original. The flashing work around the chimneys is much better than the previous contractor's, and we feel confident about the roof for the next 30 years.`,
      author: "[Customer Name]",
      location: "Nakoma, Madison, WI",
    },
    neighbors: ["university-heights-madison", "marquette-madison", "madison"],
  },
];

export function getCityBySlug(slug: string): CityPage | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}
