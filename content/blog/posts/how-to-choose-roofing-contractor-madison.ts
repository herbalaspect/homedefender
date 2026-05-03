import type { BlogPost } from "../types";

const body = `
<p>We're a roofing contractor writing about how to evaluate roofing contractors. Yes, that's a little awkward. But we'd rather you ask great questions and pick the right contractor — even if it's not us — than pick the wrong contractor and have a bad experience that taints your view of every contractor in Madison.</p>

<p>Bad contractor experiences hurt the whole industry. They make every legitimate contractor's job harder by rightfully making homeowners suspicious. We want a Madison roofing market where homeowners feel confident hiring contractors and contractors feel proud of the work the industry produces.</p>

<p>So here's an honest guide to picking the right one. Eight questions every Madison homeowner should ask before signing a roofing contract. Each question is followed by what good answers sound like — and what bad answers signal.</p>

<p>None of this is rocket science. But homeowners who ask these questions before hiring rarely have horror stories afterward. Homeowners who skip them are the ones we hear from when something goes wrong with a previous contractor's work and they need someone to make it right.</p>

<p>Let's get into the questions.</p>

<h2>Q1 — "Are you licensed and insured? Can I see proof?"</h2>

<p>Wisconsin doesn't require state-level licensing for roofing contractors, which means anyone can call themselves one. Local Madison-area municipalities require permits, but that's not the same as the contractor being qualified.</p>

<p>What actually matters is insurance: general liability ($1M minimum), workers' compensation, and property damage coverage. Ask for current proof — a certificate of insurance issued by the carrier directly is better than a copy from the contractor.</p>

<p><strong>Good answer:</strong> "Yes — here's our certificate of insurance from [carrier name]. Our general liability is $1M per occurrence with $2M aggregate. Workers' comp is current. I'll have the carrier send you a copy directly if you'd like."</p>

<p><strong>Bad answer:</strong> Vagueness, defensive responses, or "we're insured but I don't have the documents handy." If they can't produce proof on request, the insurance probably isn't current — or doesn't exist.</p>

<h2>Q2 — "How long have you been doing this in the Madison area?"</h2>

<p>Local experience matters because roofing in Wisconsin is genuinely different than roofing elsewhere. Ice damming, freeze/thaw cycles, ventilation requirements — local contractors understand these naturally.</p>

<p><strong>Good answer:</strong> A specific number of years, ability to name Madison-area neighborhoods they've worked in, recent customer references in Dane County.</p>

<p><strong>Bad answer:</strong> Vague claims about "years of experience" without specifics, references that turn out to be from other states, or a story that doesn't add up when you check the company's domain registration date or BBB founding year.</p>

<p>Out-of-state storm chasers usually claim "national experience" — which sometimes means decades of legitimate work and sometimes means three years of moving from disaster to disaster. Look for established local addresses, multi-year Google review history, and references from Madison-area homeowners specifically. Our <a href="/blog/hail-damage-roof-inspection-madison">post on hail damage and storm chasers</a> walks through the red flags in detail.</p>

<h2>Q3 — "What manufacturer certifications do you have?"</h2>

<p>GAF Master Elite, Owens Corning Platinum Preferred, CertainTeed SELECT — these certifications require ongoing training, performance audits, and quality benchmarks. They're not free to maintain. Manufacturers don't hand them out lightly.</p>

<p>A certified contractor isn't necessarily better than an uncertified one — plenty of excellent local contractors have skipped manufacturer certifications. But the certification is a credible third-party signal that the contractor invests in quality and meets ongoing performance standards.</p>

<p>Bonus: certified contractors can offer extended manufacturer warranties that uncertified contractors can't. A GAF Master Elite contractor can offer the GAF Golden Pledge warranty (50 years on the entire system); a non-certified contractor can only offer the standard manufacturer warranty (typically 20–30 years on materials only).</p>

<p><strong>Good answer:</strong> Specific certifications with current status, willingness to show their listing in the manufacturer's online directory.</p>

<h2>Q4 — "What does your warranty actually cover?"</h2>

<p>Most Madison roofers offer some form of workmanship warranty (typically 5–10 years). Read the fine print. Some "lifetime warranties" have so many exclusions they're essentially worthless.</p>

<p>Ask specifically: "If a leak shows up in three years and it's because of how you installed it, what's covered, what's not, and how do I file the claim?" Specific answers are better than marketing language.</p>

<p><strong>Good answer:</strong> Clear coverage scope, specific exclusion list, written claim process with named contact, and willingness to share their warranty document before you sign.</p>

<p><strong>Bad answer:</strong> "Lifetime warranty on everything" (almost certainly false), "we'll take care of you" (no documented commitment), or claim processes that require you to pay upfront and "maybe" get reimbursed.</p>

<p>Written warranties matter. Verbal commitments evaporate when crew members leave the company or ownership changes.</p>

<h2>Q5 — "Will you pull the permits?"</h2>

<p>Madison and surrounding municipalities require permits for roof replacements. The contractor should pull them — not you.</p>

<p>If a contractor asks you to pull the permit yourself, that's a red flag. They may be trying to shift code-compliance liability to you, they may not be qualified to pull permits in the jurisdiction, or they may not be licensed to pull permits at all.</p>

<p><strong>Good answer:</strong> "Yes, we pull all permits as part of our standard process. The permit cost is included in the estimate."</p>

<p><strong>Bad answer:</strong> "You'll need to pull that yourself" or "We don't pull permits — saves you money."</p>

<h2>Q6 — "Will the same crew that quotes me actually do the work?"</h2>

<p>Many large roofing companies use sales staff that quotes the job and then subcontracts the actual installation to crews you'll never meet beforehand. There's nothing inherently wrong with this approach — but the crew who quotes is rarely the crew who executes, and quality consistency varies.</p>

<p>Smaller local contractors typically use the same in-house crews from estimate through installation. Communication is more direct, accountability is clearer, and the person who promised certain things during the estimate is often the same person ensuring those things happen.</p>

<p>Neither model is automatically better. But you should know which you're getting.</p>

<p><strong>Good answer:</strong> Clear explanation of who does what — sales person, project manager, crew leader, installation crew — and how communication flows.</p>

<p><strong>Bad answer:</strong> Vagueness about who's actually responsible, or "don't worry about the crew, just sign the contract."</p>

<h2>Q7 — "Can you provide local references?"</h2>

<p>Not just a Google review link — actual phone numbers of recent Madison-area customers willing to talk on the phone. A contractor doing quality work has these. A contractor avoiding the question doesn't.</p>

<p>Call two or three. Ask:</p>

<ul>
  <li>How was the cleanup?</li>
  <li>Did the project finish on time and on budget?</li>
  <li>Was the price what was quoted, or did it escalate?</li>
  <li>Would you hire them again?</li>
  <li>Anything you wish had gone differently?</li>
</ul>

<p>Five minutes on the phone with two recent customers tells you more than an hour of marketing. Reference checks rarely turn up surprises, but the surprises you do find are usually the kind that would have made you choose a different contractor.</p>

<p><strong>Good answer:</strong> Contractor proactively offers references with specific names and recent project dates.</p>

<p><strong>Bad answer:</strong> Defensive responses, claims that "all our reviews are online" (online reviews are filtered; phone references aren't), or excuses about customer privacy.</p>

<h2>Q8 — "What's your process if something goes wrong?"</h2>

<p>Good contractors have a process for problems because problems happen on every job — minor scope changes, weather delays, unexpected deck damage during tear-off. Bad contractors get defensive when asked.</p>

<p>The answer you want: a clear escalation path, who to call, how decisions get made, how change orders are handled in writing.</p>

<p><strong>Good answer:</strong> "If anything comes up during the project, your project manager is your point of contact. We document scope changes in writing before doing the work, with a clear cost. If you're not satisfied with how something is handled, you can escalate to [owner name] directly."</p>

<p><strong>Bad answer:</strong> "We don't really have problems" (everyone has problems), "just call me" (no documented process), or vagueness that suggests they haven't thought about it.</p>

<p>Vague answers here predict vague communication during the project. That's where most homeowner horror stories come from.</p>

<h2>Conclusion</h2>

<p>Bad contractor decisions are the single biggest source of roofing horror stories in Madison. Almost every story starts the same way: lowest bid, vague answers, pressure to sign quickly, and a contractor who looked busy enough that the homeowner assumed they were good.</p>

<p>The right approach is to interview 2–3 contractors, ask these eight questions, and trust your judgment about who answered them most credibly. Price shouldn't be the deciding factor — within a reasonable range, the lowest bid is often a sign of skipped corners that show up later. Within 20% of each other, all bids are roughly comparable. Below that range, somebody's cutting something.</p>

<p>Beyond the questions, watch for the soft signals: Does the contractor listen to your concerns or talk past them? Are they patient with your questions or dismissive? Do they show up on time for the estimate appointment?</p>

<p>We'd love to be the contractor you choose. But more than anything, we want you to choose well — for your home and for the long-term health of the contractor relationships in Madison. If you'd like to ask any of these questions in person, <a href="/contact">schedule a free inspection</a>. We'll show up on time and bring real answers. If you're still in the research phase, our <a href="/how-much-does-roof-replacement-cost-madison">Madison roof replacement pricing breakdown</a> and <a href="/blog/when-to-replace-roof-wisconsin">guide to warning signs</a> are good places to start.</p>
`.trim();

export const post: BlogPost = {
  slug: "how-to-choose-roofing-contractor-madison",
  title: "How to Choose a Roofing Contractor in Madison: 8 Questions to Ask",
  description:
    "Choosing a Madison roofing contractor? Eight questions every homeowner should ask before signing — from a contractor who knows what good answers look like.",
  datePublished: "2026-03-18",
  dateModified: "2026-04-29",
  imageUrl: null,
  category: "roofing",
  bodyHtml: body,
};
