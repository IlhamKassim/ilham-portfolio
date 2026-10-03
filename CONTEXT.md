# Portfolio Content

The content model for Ilham's personal portfolio site (`lib/data.ts` and the components that render it). This context governs how career/education/project facts are sourced, verified, and phrased for the site's audience (prospective freelance clients first, then recruiters, followers and the general public).

## Language

**Source of Record**:
The LinkedIn "Complete Data Export" (Positions.csv, Education.csv, Projects.csv, Certifications.csv, Organizations.csv, etc.) and Ilham's current tailored resume (`public/Ilham_Resume.pdf`) are the authoritative records of what roles/projects/credentials exist, their dates, and their most current framing. Site content is reconciled against these, not the other way around. When the resume and LinkedIn disagree, the resume wins — it's the more recently curated, interview-facing document.
_Avoid_: treating `lib/data.ts` as authoritative when it conflicts with either Source of Record document.

**Displayed Title**:
The role title shown on the site for an Experience entry. May be reworded from the Official Title (the literal LinkedIn/employer title) for clarity or positioning, as long as the described scope of work stays accurate to what was actually done.
_Avoid_: Official Title (used only to mean the literal LinkedIn/HR string, not what's displayed).

**Verified Metric**:
A quantified claim in an Experience or Project bullet (e.g. "25% increase," "8,000+ students") that Ilham can personally substantiate if asked in an interview.
_Avoid_: using any number in a bullet that isn't a Verified Metric — see Flagged ambiguities.

**Skill Category**:
A named group (e.g. "Languages & Frameworks," "Systems & AI," "Leadership & Operations") that Skills are organized under on the site, so recruiters can scan for technical fit while general visitors still see leadership breadth. Distinct from raw LinkedIn skill endorsements — categories are a curated, opinionated subset, not an exhaustive list.
_Avoid_: displaying the full ~90-item LinkedIn skill list; Skill Category membership is a deliberate edit, not a mirror of LinkedIn.

**Primary Audience**:
Prospective freelance clients: small teams, founders and students deciding whether to hire Ilham to build something or teach them. Every home-page wording decision is optimized for them first. Recruiters are the secondary audience and keep a clear path (résumé link in the hero, Experience section, "open to full-time roles" in Contact). Changed from "Recruiters" on 2026-10-04 when the site was repositioned freelance-first.
_Avoid_: recruiter-only framing on the home page (status-first headlines, "seeking entry-level roles" as the lead message); hiding the résumé entirely.

**Service**:
An item in the Build or Teach catalog (`profile.services` in `lib/data.ts`) with a code (B1, T1...), a starting price in USD and a unit. Prices are "from" figures, not quotes: the real quote is sent after a conversation.
_Avoid_: presenting a Service price as a fixed final price; listing a Service Ilham hasn't shown he can deliver (each should map to at least one Project or role on the site).

**Community Role**:
Ongoing, unpaid or volunteer involvement that doubles as proof for Teach services: KrackedDevs Ambassador (Borneo branch events), DeckerGUI Developers contributor, The Borneo co-founder. Sourced from Ilham directly (2026-10-04), not from the LinkedIn export.
_Avoid_: describing a Community Role as client work or employment.

**Client Proof**:
Testimonials, client names or outcomes from paid freelance work. None exist on the site yet. Never invent or paraphrase one; add only what Ilham supplies.

**Journey Page**:
A separate route (`/journey`) telling Ilham's chronological origin story, from childhood in Papar through arriving at Penn State. Sourced directly from Ilham's own account in conversation, not from the Source of Record (LinkedIn export / resume) — those govern career facts, not personal narrative. Deliberately off the main scroll path so it doesn't compete for recruiter scan-time; its Primary Audience is general-public/follower readers, the opposite of the site-wide default.
_Avoid_: holding this page to the Source of Record rule or the Primary Audience rule. Both are explicitly overridden here by design.

## Resolved decisions

- **Metrics audit (2026-07-07)**: every quantified claim in Experience was reviewed against what Ilham could verify. Non-verifiable numbers were removed or rewritten as qualitative impact statements rather than invented figures (e.g. DDAR alumni count corrected to 200+; NSO mentee count corrected to 5; peer-reviewed-article and prep-time-reduction claims dropped from the poultry research and Online Program Moderator roles). This is the reference precedent for how to handle any future unverifiable stat.
- **Projects list merge (2026-07-07)**: the site's Projects section now merges the old hand-picked list, the Source of Record's project list, and recently-active GitHub repos not yet declared on LinkedIn. Projects without a public repo (e.g. AI in Fundraising Briefs) are still shown as description-only cards with no link, rather than dropped.
- **Freelance-first repositioning (2026-10-04)**: home page reordered to Hero, Services (with quote builder), Work, About, Experience, Notes, Contact. Experience on the home page shows only `highlight: true` roles; the full history stays one click away and in the résumé. Project copy for SabahKu, PolitikKu, ShariahTrading, Langkah and the newer repos was sourced from their live sites, READMEs and Ilham's own LinkedIn posts. PolitikKu is described as team work ("we"), since Ilham's posts credit the team.
