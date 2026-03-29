

## Plan: Update All Sections to Match Reference Images

Based on the uploaded reference images, here's what needs to be done:

### 1. Global Layout Updates
- Change `max-w-7xl` to `max-w-[1236px]` in Header, Hero, TrustedPartners, WhyChooseUs, OurPedagogy, WhyTBHCircle
- Header logo: change `h-10 w-10` to `h-[58.7px] w-[58.7px]`
- Header is already sticky — no change needed

### 2. Hero Banner — Fix Missing Images
- Copy the two uploaded banner images (`Frame_2147238252-2.png`, `Property_1_Frame_2147238254.png`) as new hero assets
- Update `heroImages` array to use all 3 distinct images so each dot shows a different person
- Dots remain centered below image, clicking swaps only the image

### 3. Why Choose Us — Match Reference Layout
- Rename title to "Explore Our Approach" per reference image
- Redesign bento grid layout:
  - Yellow card (row-span-2): stars + testimonial + "30,000+ Professionals"
  - "8+ Industries" card with muted bg
  - "15000+ hours" card with white bg + border
  - "50+ Corporates" card with dark bg (`bg-foreground`, white text) + avatar circles
  - "3500+ Days" card with white bg + border

### 4. Our Pedagogy — Full-Width Container
- Remove `max-w-7xl mx-auto px-6` wrapper so the section spans edge-to-edge
- Keep the 2-column grid (image left, cards right) but apply max-width only to inner content alignment

### 5. Why TBH Circle — Full-Width Container
- Same treatment: edge-to-edge layout, no side padding on the outer wrapper

### 6. New Section: Courses
- Create `src/components/Courses.tsx`
- Yellow gradient background
- "Courses" heading
- 2-column grid of white rounded cards with course titles: Human Behaviour, Sales & Negotiation, Strategic Communication, Leadership Development, Change Management, Emotional Intelligence, Customer Experiences

### 7. New Section: Our Methodologies
- Create `src/components/OurMethodologies.tsx`
- Centered heading + subtitle
- Zigzag timeline with 4 numbered steps (T-Group Analysis, Group Process Work, Theatre of the Oppressed, Group Process Work)
- Each step has a card with number, title, description
- Yellow connecting arrows between steps
- Vertical dashed center line

### 8. Update Index.tsx
- Add `Courses` and `OurMethodologies` components after WhyTBHCircle

### Files Modified
- `src/components/Header.tsx` — container width, logo size
- `src/components/Hero.tsx` — container width, new images
- `src/components/TrustedPartners.tsx` — container width
- `src/components/WhyChooseUs.tsx` — container width + redesign
- `src/components/OurPedagogy.tsx` — full-width layout
- `src/components/WhyTBHCircle.tsx` — full-width layout
- `src/pages/Index.tsx` — add new sections

### Files Created
- `src/components/Courses.tsx`
- `src/components/OurMethodologies.tsx`
- Copy 2 uploaded images to `src/assets/`

