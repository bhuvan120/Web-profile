# Developer Portfolio

A modern, professional developer portfolio built for serious engineers. Clean design, strong fundamentals, and authentic content over flashy animations.

## Philosophy

This portfolio is built on the principle that **substance matters more than style**. It's designed to help recruiters and hiring managers understand:
- What you've built (real projects with real impact)
- How you think (engineering mindset and problem-solving)
- Who you are (authentic, honest, learning-focused)

Not a generic template. A real engineer's space.

## Features

- **Landing Section**: Sharp positioning statement + credibility indicators
- **Skills Section**: Grouped by capability (build, understand, improving)
- **Projects Section**: Deep-dive case studies with problems, approaches, decisions
- **Journey/Experience**: Timeline showing learning progression and real work
- **Thinking Section**: Articles on debugging, learning, performance optimization
- **Contact Section**: Simple, direct ways to reach you
- **Responsive Design**: Works perfectly on desktop and mobile
- **Accessible**: WCAG AA compliant with proper contrast and semantic HTML
- **Dark Mode**: Eye-friendly, professional aesthetic
- **No Tracking**: Clean, private by default

## Tech Stack

- **React 19** - UI framework
- **Vite** - Lightning-fast build tool
- **CSS Modules** - Scoped, maintainable styles
- **No dependencies** beyond React and React-DOM

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173/`

### Build

```bash
npm run build
```

Production-ready files in `dist/`

## Customization Guide

### 1. **Update Personal Info**

Edit these files with your actual information:

- `index.html` - Page title and meta tags
- `src/components/Landing.jsx` - Headline, subtitle, meta info
- `src/components/Contact.jsx` - Email, GitHub, LinkedIn links
- `src/App.jsx` - Footer copyright

### 2. **Personalize Projects**

Edit `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    tagline: 'One line summary',
    problem: 'What problem does this solve?',
    approach: 'How did you approach it?',
    decisions: [
      'Key decision 1',
      'Key decision 2',
    ],
    tech: ['React', 'TypeScript', ...],
    learning: 'What did you learn?',
    github: 'https://github.com/yourname/project',
    status: 'Production' // or 'Ongoing'
  },
  // ... more projects
];
```

**Guidelines for projects:**
- Focus on problems solved, not just features
- Show your decision-making process
- Include real tech stack, not buzzwords
- Explain learning and tradeoffs
- Make GitHub links functional

### 3. **Update Skills**

Edit `src/components/Skills.jsx`:

```javascript
const skillGroups = [
  {
    category: 'What I build',
    description: 'Your focus area',
    skills: ['Skill 1', 'Skill 2', ...]
  },
  // ... more groups
];
```

**Keep it focused:**
- No more than 5-6 skills per group
- Honest about depth, not breadth
- Shows specialization, not exhaustive lists

### 4. **Customize Journey/Timeline**

Edit `src/components/Experience.jsx`:

```javascript
const timeline = [
  {
    year: '2024',
    period: 'Summer',
    title: 'What happened',
    description: 'Context and what you learned',
    color: 'blue' // 'blue', 'purple', 'green'
  },
  // ... more timeline items
];
```

### 5. **Update Thinking Section**

Edit `src/components/Thinking.jsx`:

Replace the three articles with your own. Topics could be:
- How you approach a common problem
- Lessons from a specific project
- Your perspective on a technology
- Problem-solving methodology

Keep articles authentic and specific to your experience.

### 6. **Modify Colors (Optional)**

Colors are defined in `src/styles/globals.css`:

```css
:root {
  --bg-primary: #0a0e27;
  --accent: #6366f1;
  /* ... more colors */
}
```

Current palette: Dark blue background with indigo accent. Change if needed, but maintain high contrast.

## Design Principles

1. **Typography First** - Content readability over decoration
2. **High Contrast** - Accessible for everyone
3. **Subtle Motion** - Smooth transitions, not distracting animations
4. **Semantic HTML** - Proper structure for accessibility and SEO
5. **Mobile First** - Responsive on all devices
6. **No Fluff** - Every section serves a purpose

## Accessibility

- WCAG AA compliant color contrast
- Semantic HTML structure
- Proper heading hierarchy
- Focus visible states
- ARIA labels where needed
- Responsive touch targets on mobile

## Performance

- **Lazy loading** not needed (small bundle)
- **Fast load time** - optimized CSS, minimal JS
- **No external fonts** - system fonts for speed
- **No tracking** - no scripts, no cookies

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### GitHub Pages

1. Add to `package.json`:
   ```json
   "homepage": "https://yourname.github.io/portfolio"
   ```

2. Build and deploy:
   ```bash
   npm run build
   git add dist/
   git commit -m "Deploy"
   git push
   ```

### Any Static Host

1. Run `npm run build`
2. Upload `dist/` folder to your host
3. Done!

## What Makes This Different

✅ Real case studies, not just card designs  
✅ Problem → Approach → Decisions framework  
✅ Shows thinking, not just skills  
✅ Honest about learning and growth  
✅ No fake "passion" language  
✅ Mobile perfect  
✅ Fast loading  
✅ Actually responsive (tested)  
✅ Accessible by default  
✅ Zero tracking  

❌ No hero image  
❌ No "Hi, I'm a Developer" headline  
❌ No fake testimonials  
❌ No heavy animations  
❌ No gradient hero section  
❌ No random icons  
❌ No contact form (email is better)  

## FAQ

**Q: Can I use this as a template?**
Yes! Customize it with your own info, projects, and thinking.

**Q: How long does it take to customize?**
2-3 hours to personalize with your real content. Content matters more than design.

**Q: Can I change the colors?**
Yes, edit CSS variables in `globals.css`. Keep contrast high (WCAG AA minimum).

**Q: Should I add more sections?**
No. These six sections cover everything a recruiter needs to know. Less is more.

**Q: Can I add animations?**
Yes, but sparingly. Current subtle hover effects are intentional. More animations distract from content.

## License

Feel free to use and modify. Built to be remixed.

## Support

This is a solid foundation. Questions? Read the code—it's clean and well-structured.
