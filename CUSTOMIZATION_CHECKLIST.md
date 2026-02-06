# Customization Checklist

Use this checklist to personalize your portfolio with your own content.

## 1. Basic Info (5 min)

- [ ] Update `index.html`
  - [ ] Change `<title>` to your name
  - [ ] Update meta description
  - [ ] Update og:title and og:description

- [ ] Update `src/components/Navbar.jsx`
  - [ ] Change `<a href="#" className={styles.logo}>Your Name</a>` to your name

- [ ] Update `src/components/Landing.jsx`
  - [ ] Change headline (currently "Building products that scale.")
  - [ ] Update subtitle with your degree, experience, focus
  - [ ] Update meta items (Skills, Based in, Currently)

- [ ] Update `src/components/Contact.jsx`
  - [ ] Replace `hello@example.com` with your email
  - [ ] Replace `yourusername` with your GitHub username (update URL)
  - [ ] Replace `yourprofile` with your LinkedIn username (update URL)
  - [ ] Update "Your Name" in footer

- [ ] Update `src/App.jsx`
  - [ ] Change copyright year if needed
  - [ ] Change "Your Name" to your name

## 2. Projects (30 min - most important)

Edit `src/components/Projects.jsx`:

For **each project** you want to include:

- [ ] **Project 1**
  - [ ] Title: What's the project called?
  - [ ] Tagline: One-line summary (e.g., "Scalable marketplace platform")
  - [ ] Problem: What problem does it solve? (2-3 sentences)
  - [ ] Approach: How did you solve it? (2-3 sentences with tech details)
  - [ ] Decisions: 3-4 key technical decisions and why you made them
  - [ ] Tech: List of technologies used (5-8 relevant ones)
  - [ ] Learning: What did you learn? Any tradeoffs?
  - [ ] GitHub: Actual link to your project repo
  - [ ] Status: "Production" (live/complete) or "Ongoing" (in progress)

- [ ] **Project 2** (repeat above)
- [ ] **Project 3** (repeat above)

**Tips:**
- Include 2-4 projects max (quality over quantity)
- Focus on projects that showcase your strengths
- Make sure GitHub links work
- Be honest about what you did vs. team effort

## 3. Skills (10 min)

Edit `src/components/Skills.jsx`:

For **each skill group** (What I build, What I understand, What I'm improving):

- [ ] Update category name if desired
- [ ] Update description (1 line max)
- [ ] Update 5-6 skills in each group
- [ ] Remove skills you don't actually use regularly

**Tips:**
- Show focus, not exhaustive lists
- No more than 15-18 skills total
- Be honest about depth vs. breadth

## 4. Journey/Experience (15 min)

Edit `src/components/Experience.jsx`:

For **each timeline item**:

- [ ] Year: What year?
- [ ] Period: Season, month, or project duration
- [ ] Title: What was this phase?
- [ ] Description: What happened? What did you learn?
- [ ] Color: blue, purple, or green

**Tips:**
- Show progression and growth
- Include education, internships, freelance work
- Focus on responsibility and ownership
- No buzzwords—be specific

## 5. Thinking Section (30 min - optional but recommended)

Edit `src/components/Thinking.jsx`:

Replace the 3 example articles with your own:

- [ ] **Article 1**
  - [ ] Title: What's your perspective on?
  - [ ] Excerpt: One-sentence summary
  - [ ] Content: 200-400 words on this topic
  - [ ] ReadTime: Estimate (3-6 min)

- [ ] **Article 2** (repeat above)
- [ ] **Article 3** (repeat above)

**Article ideas:**
- How you debug problems
- How you learn new technologies
- React performance optimization (if relevant)
- Your approach to code quality
- Lessons from a challenging project
- Why you chose your current tech stack

**Tips:**
- Be specific to YOUR experience
- Show your thinking process, not just conclusions
- Authentic voice > formal tone
- These articles differentiate you from everyone else

## 6. Polish (10 min)

- [ ] Read through your portfolio as a recruiter would
- [ ] Check all links work (GitHub, email, LinkedIn)
- [ ] Test on mobile (use DevTools)
- [ ] Spell-check everything
- [ ] Make sure projects are impressive but honest
- [ ] Verify no placeholder text remains

## 7. Optional Customizations

- [ ] **Change colors**: Edit `src/styles/globals.css` (change CSS variables)
  - Update `--accent`, `--bg-primary`, `--text-primary`, etc.
  - Keep contrast high (WCAG AA)

- [ ] **Update timeline marker colors**: Edit color names in `src/components/Experience.jsx`
  - Current: blue, purple, green
  - Can change to anything

- [ ] **Add more projects**: Duplicate project card in `Projects.jsx`
  - No more than 5 recommended (quality over quantity)

- [ ] **Add more timeline items**: Duplicate timeline item in `Experience.jsx`
  - Keep focused on major milestones

## 8. Deployment

- [ ] Choose hosting (Vercel, GitHub Pages, Netlify, etc.)
- [ ] Run `npm run build` to test production build
- [ ] Deploy!
- [ ] Test live site (especially links)

## Time Estimate

- **Minimal (basic setup)**: 15 min
- **Complete (all sections)**: 1-2 hours
- **Thorough (great projects + thinking)**: 2-3 hours

**Remember**: Content > Design. Spend time on great projects and authentic thinking, not on tweaking colors.

## Common Questions

**Q: Do I need to fill in all sections?**
A: Yes. Each section tells part of your story. Landing + Projects + Contact are minimum.

**Q: Should I include old projects?**
A: Only if they're impressive or show growth. 2-3 strong projects beat 5 mediocre ones.

**Q: Can I add images/screenshots?**
A: Sure, but content matters more. Plain text projects are better than image-only ones.

**Q: What if I don't have much experience?**
A: Include projects you built, even small ones. Be honest in your Journey section about where you are.

**Q: Should I include all my skills?**
A: No. Show focus. List only what you're confident in and use regularly.

**Q: Can I change the layout?**
A: Yes, but the current structure is proven to work. Better to keep layout, improve content.

---

**Once you're done:** You'll have a portfolio that actually represents you. Not generic. Not templated. Real.

Good luck! You've got this.
