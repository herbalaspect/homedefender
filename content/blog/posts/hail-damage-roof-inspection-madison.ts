import type { BlogPost } from "../types";

const body = `
<p>Wisconsin gets serious hail. In May 2024, a single storm cell produced golf-ball-sized hail across Dane County, generating thousands of insurance claims. In June 2025, another wave hit western Madison particularly hard. If you've owned a Madison home for more than a few years, the question isn't whether your roof will see significant hail — it's when, and what you'll do about it.</p>

<p>This guide walks through what hail damage actually looks like, how to inspect safely, the right way to file an insurance claim, and how to avoid the storm-chasing contractors who flood Madison after every major event. Most homeowners under-document hail damage and lose claim money they should win. After reading this, you won't.</p>

<h2>Section 1 — What hail damage looks like</h2>

<p>Hail damage isn't always obvious. The dramatic scenes of shattered windows and dented cars are the visible part. The damage to your roof is usually subtler — and that's where most claims get under-paid.</p>

<p><strong>Key indicators of hail damage on asphalt shingles:</strong></p>

<ul>
  <li>Circular impact marks on the shingle surface, typically 1/4 to 1 inch in diameter</li>
  <li>Granule displacement around the impact, often visible as a slightly lighter spot</li>
  <li>Cracked or split shingles, particularly along the edges</li>
  <li>Bruised areas (visible mostly to the touch — hail can compress the underlying mat without obvious surface damage)</li>
</ul>

<p><strong>Key indicators on metal flashings and components:</strong></p>

<ul>
  <li>Dents in metal flashings, vents, and gutters</li>
  <li>Scratched or chipped paint on metal trim</li>
  <li>Bent or compressed gutter sections</li>
</ul>

<p><strong>Damage may also be visible on:</strong></p>

<ul>
  <li>Window screens (often the first to show hail damage)</li>
  <li>Shutters, especially older painted ones</li>
  <li>Air conditioner condenser fins</li>
  <li>Mailbox dents (an indicator of hail size)</li>
</ul>

<p>If you see hail damage on visible surfaces (windows, AC unit, mailbox), there's a high probability of damage on your roof — even if it's not obvious from the ground. The granule layer on asphalt shingles is designed to resist exactly this kind of impact, and even when shingles look fine from below, the granules near impact points often shift or dislodge.</p>

<h2>Section 2 — How to inspect safely after a hailstorm</h2>

<p>First rule: don't climb on your roof yourself, especially right after a storm. Wet surfaces, possibly damaged decking, and the chance of further weather make DIY inspections genuinely risky. Almost every fatal residential ladder accident in Wisconsin happens to homeowners doing routine maintenance — not professional contractors.</p>

<p><strong>What you can safely do from the ground:</strong></p>

<ul>
  <li>Walk around your home and photograph anything visibly damaged (windows, trim, AC unit, mailbox, vehicles)</li>
  <li>Look up at gutters from the ground and photograph any visible dents or damage</li>
  <li>Check your downspouts for shingle granules — heavy granule loss after a storm is a strong indicator of hail damage on the roof</li>
  <li>Note the date, time, and approximate hail size if you saw the storm</li>
</ul>

<p>Document these observations in writing the day of or the day after the storm. Insurance adjusters give weight to documentation that's contemporaneous with the storm. A description written three weeks later is less compelling.</p>

<p>For anything requiring climbing the roof, schedule a professional inspection. A free post-storm inspection from a contractor you trust is the right next step.</p>

<h2>Section 3 — How to file a successful insurance claim</h2>

<p>Most Madison homeowners under-document hail damage. They photograph one obviously damaged shingle, file the claim, and accept whatever the adjuster offers. The result is often a partial repair when a full replacement was warranted, or a denied claim when an approved one was achievable.</p>

<p><strong>The right process:</strong></p>

<p><strong>Step 1</strong> — Contact your insurance company within 30 days of the storm to start the claim file. Don't get any repairs done yet. Don't even commit to filing a claim — just open the file. This preserves your timeline.</p>

<p><strong>Step 2</strong> — Get a professional roof inspection from your own contractor. A contractor working for you (not for the insurance company) will identify damage the adjuster might miss and document it in a format adjusters recognize.</p>

<p><strong>Step 3</strong> — Have your contractor present during the adjuster's inspection if possible. Adjusters work for the insurance company. Your contractor's job is to make sure damage gets documented properly. This is not about arguing — it's about making sure both parties are looking at the same things.</p>

<p><strong>Step 4</strong> — Review the adjuster's scope of work carefully. Compare it line-by-line against your contractor's findings. If anything is missing or under-priced, this is your moment to address it. Once you sign off on the scope, the negotiation is largely over.</p>

<p><strong>Step 5</strong> — Once the claim is approved, schedule the actual repair work. Your insurance pays the contractor (often in two installments — initial payment after work begins, final payment after completion). Your responsibility is your deductible plus any code-required upgrades not covered by the policy.</p>

<p>This process generally takes 6–12 weeks from storm to repair completion. Patience matters. Rushing can cost you significant claim money.</p>

<h2>Section 4 — Avoiding storm-chaser scams</h2>

<p>Major hail events in Madison attract contractors from out of state who arrive with rented trucks and convince homeowners to sign contracts on the spot. Some are legitimate. Many aren't. Common red flags:</p>

<ul>
  <li>Door-to-door sales after a storm</li>
  <li>Pressure to sign immediately or "lose your spot" on the schedule</li>
  <li>Out-of-state license plates</li>
  <li>Contracts with vague scope language</li>
  <li>Insistence that you don't need to file a claim or that they'll "absorb your deductible" (this is insurance fraud and Wisconsin law explicitly prohibits it)</li>
</ul>

<p><strong>Legitimate Madison roofing contractors typically:</strong></p>

<ul>
  <li>Have an established local address (look it up in advance)</li>
  <li>Show up by appointment, not unsolicited</li>
  <li>Provide written estimates with detailed line items</li>
  <li>Don't pressure you to sign that day</li>
  <li>Don't tell you to "skip the claim" — that conversation is between you, your insurance company, and tax authorities</li>
</ul>

<p>If a contractor knocks on your door after a storm and pressures you to sign, decline politely and call a contractor you've researched in advance. The minor inconvenience of waiting for a scheduled inspection is much better than the potential disaster of hiring the wrong contractor. Our <a href="/blog/how-to-choose-roofing-contractor-madison">guide to choosing a roofing contractor</a> walks through the right questions to ask before signing.</p>

<h2>Schedule a free post-storm inspection</h2>

<p>If your Madison home was hit by hail, <a href="/services/roofing/storm-damage-roof-repair-madison-wi">schedule a free post-storm inspection</a>. We'll document everything thoroughly, write a detailed scope for your insurance adjuster, and walk you through what to expect through the claim process. No charge, no obligation.</p>

<p>And if you'd like to lock in priority response and free post-storm assessments before the next big storm hits, take a look at <a href="/defender-shield">The Defender Shield</a> — our annual home protection plan that includes free post-storm damage assessments and full insurance documentation help.</p>
`.trim();

export const post: BlogPost = {
  slug: "hail-damage-roof-inspection-madison",
  title: "Hail Damage Roof Inspection in Madison: A Homeowner's Guide",
  description:
    "Hailstorm hit your Madison home? Here's how to inspect for damage, file a successful insurance claim, and avoid the storm-chasing scams that follow every major event.",
  datePublished: "2026-04-01",
  dateModified: "2026-04-29",
  imageUrl: null,
  category: "roofing",
  bodyHtml: body,
};
