# Portfolio Content

The content model for Ilham's personal portfolio site (`lib/data.ts` and the components that render it). This context governs how career/education/project facts are sourced, verified, and phrased for the site's audience (general public, followers, recruiters).

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
Recruiters — the reader every wording decision on the site is optimized for first. The site still serves general-public and follower visitors (named in the intro above), but as a secondary constraint: copy shouldn't become dry or jargon-only in service of recruiter-scannability.
_Avoid_: treating "the audience" as undifferentiated; when a wording choice serves recruiters and general visitors differently, recruiters win.

## Resolved decisions

- **Metrics audit (2026-07-07)**: every quantified claim in Experience was reviewed against what Ilham could verify. Non-verifiable numbers were removed or rewritten as qualitative impact statements rather than invented figures (e.g. DDAR alumni count corrected to 200+; NSO mentee count corrected to 5; peer-reviewed-article and prep-time-reduction claims dropped from the poultry research and Online Program Moderator roles). This is the reference precedent for how to handle any future unverifiable stat.
- **Projects list merge (2026-07-07)**: the site's Projects section now merges the old hand-picked list, the Source of Record's project list, and recently-active GitHub repos not yet declared on LinkedIn. Projects without a public repo (e.g. AI in Fundraising Briefs) are still shown as description-only cards with no link, rather than dropped.
