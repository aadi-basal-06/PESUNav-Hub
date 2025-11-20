/*
================================================================================
                    FRONTEND STYLES FOLDER DOCUMENTATION
             CSS Stylesheets for Individual Page Components in PESUNav Hub
================================================================================

DIRECTORY PURPOSE:
  The styles folder contains CSS files that style individual page components.
  Each CSS file corresponds to one page component and contains all styles
  specific to that page. Global styles are in src/index.css.

FILE ORGANIZATION:

  Each CSS file:
    - Styles one page component
    - Uses CSS custom properties from index.css
    - Follows BEM-like naming convention
    - Uses semantic class names
    - Includes responsive media queries
    - Is imported at top of component file


================================================================================
                        CSS FILE: Map.css
================================================================================

PURPOSE:
  Styles for Map.jsx component
  Container: .map-page

IMPORT IN COMPONENT:
  import "../styles/Map.css";
  in Map.jsx

KEY CLASSES:

1. .map-page
   Main page container
   
   Properties:
     - Padding and margins for spacing
     - Background color
     - Responsive layout

2. .map-header
   Header section with title and description
   
   Properties:
     - Padding
     - Text alignment
     - Heading styles

3. .map-container
   Wrapper for MapContainer component
   
   Properties:
     - Height specification
     - Border radius
     - Shadow
     - Responsive sizing

4. .map-view
   The actual MapContainer element (from react-leaflet)
   
   Properties:
     - 100% height to fill container
     - Border radius
     - Responsive adjustments

5. .spaces-list
   Container for study spaces grid
   
   Properties:
     - Margin and padding
     - Grid layout

6. .space-card
   Individual space card in list
   
   Properties:
     - Border and shadow
     - Padding
     - Cursor pointer for interactivity
     - Hover effects
     - Active state highlighting

7. .space-card.active
   Applied when space is selected
   
   Properties:
     - Border color change
     - Background highlight
     - Visual distinction

8. .space-header
   Header within space card
   
   Properties:
     - Flex layout
     - Space between elements

9. .space-type-badge
   Badge showing space type
   
   Properties:
     - Background color
     - Text color
     - Border radius
     - Font weight
     - Padding

10. .space-description
    Description text in card
    
    Properties:
      - Font size
      - Color
      - Margin

11. .space-coordinates
    Coordinates display
    
    Properties:
      - Small font size
      - Muted color
      - Margin

LAYOUT STRUCTURE:

  .map-page
  ├── .map-header
  │   ├── h2
  │   └── p
  ├── .map-container
  │   └── .map-view (MapContainer)
  │       ├── TileLayer
  │       └── Marker x 5
  └── .spaces-list
      ├── h3
      └── .spaces-grid
          └── .space-card x 5

RESPONSIVE DESIGN:

Media Query @ max-width: 860px:
  - Adjust grid columns
  - Reduce font sizes
  - Adjust spacing
  - Modify layout if needed

COLORS USED:

From index.css variables:
  - var(--color-dark-grey)      Text color
  - var(--color-white)          Background
  - var(--color-navy-blue)      Accents
  - Type-specific colors for badges

RESPONSIVE MAP:

MapContainer:
  - Takes 100% width of container
  - Height set to fixed value (e.g., 600px) or viewport relative
  - Responsive via container width changes

ACCESSIBILITY:

Classes should support:
  - Keyboard navigation (buttons/links)
  - Color contrast (check with tools)
  - Readable font sizes
  - Semantic HTML


================================================================================
                        CSS FILE: Feedback.css
================================================================================

PURPOSE:
  Styles for Feedback.jsx component
  Container: .feedback-page

IMPORT IN COMPONENT:
  import "../styles/Feedback.css";
  in Feedback.jsx

KEY CLASSES:

1. .feedback-page
   Main page container
   
   Properties:
     - Display flex or grid
     - Content alignment
     - Padding and spacing

2. .feedback-header
   Header with title and description
   
   Properties:
     - Text alignment
     - Font styles
     - Margin/padding

3. .feedback-content
   Main content area
   
   Properties:
     - Grid or flex layout
     - Two-column design (form + contact info)
     - Gap between sections
     - Responsive adjustments

4. .feedback-form-container
   Wrapper for feedback form
   
   Properties:
     - Background color
     - Padding
     - Border radius
     - Shadow
     - Width constraints

5. .feedback-form
   The actual form element
   
   Properties:
     - Grid layout for form groups
     - Gap between groups
     - Responsive adjustments

6. .form-group
   Individual form field group
   
   Properties:
     - Margin bottom
     - Flex/grid for label + input
     - Width management

7. .success-message
   Success notification after form submit
   
   Properties:
     - Background color (success color)
     - Text color (green/white)
     - Padding
     - Border radius
     - Animation (fade in/out)

8. .contact-info-container
   Container for contact information section
   
   Properties:
     - Padding
     - Flex/grid layout
     - Gap between cards
     - Width constraints

9. .contact-card
   Individual contact information card
   
   Properties:
     - Background color
     - Padding
     - Border radius
     - Shadow
     - Responsive sizing

10. .contact-icon
    Icon styling within contact card
    
    Properties:
      - Font size
      - Color
      - Margin

11. .contact-number
    Phone number link styling
    
    Properties:
      - Color (link color)
      - Font weight
      - Text decoration
      - Hover effects

12. .contact-note
    Supporting text in contact card
    
    Properties:
      - Font size
      - Color (muted)
      - Margin

13. .social-card
    Social media links card
    
    Properties:
      - Special styling
      - Flex layout for links
      - Gap between links

14. .social-links
    Container for social media links
    
    Properties:
      - Flex layout
      - Gap between links
      - Wrapping

15. .social-link
    Individual social media link
    
    Properties:
      - Button-like styling
      - Hover effects
      - Padding

16. .faq-section
    FAQ section container
    
    Properties:
      - Margin
      - Padding

17. .faq-item
    Individual FAQ item
    
    Properties:
      - Margin bottom
      - Border/divider
      - Padding

18. .faq-question
    FAQ question text
    
    Properties:
      - Font weight
      - Font size
      - Color
      - Margin

19. .faq-answer
    FAQ answer text
    
    Properties:
      - Font size
      - Color (muted)
      - Margin
      - Line height

LAYOUT STRUCTURE:

  .feedback-page
  ├── .feedback-header
  │   ├── h2
  │   └── p
  └── .feedback-content
      ├─�� .feedback-form-container
      │   ├── .feedback-form
      │   │   └── .form-group x 4
      │   └── .success-message (conditional)
      └── .contact-info-container
          ├── .contact-card x 4 (Email, Phone, Location, Hours)
          ├── .social-card
          │   └── .social-links
          └── .faq-section
              └── .faq-item x 3

RESPONSIVE DESIGN:

Media Query @ max-width: 860px:
  - Stack form and contact info vertically
  - Adjust grid columns
  - Reduce padding
  - Single column layout

COLORS USED:

  - var(--color-white)        Background
  - var(--color-dark-grey)    Text color
  - var(--color-navy-blue)    Accents
  - Success colors            For success message
  - Link colors               For phone/social links

FORM STYLING:

Input elements styled via index.css:
  - Border styles
  - Focus states
  - Outline colors
  - Padding
  - Font properties

Button styling:
  Inherited from index.css button styles

HOVER EFFECTS:

Contact cards:
  - Box shadow enhancement on hover
  - Color transitions
  - Cursor changes

Links:
  - Color change on hover
  - Underline effects

ACCESSIBILITY:

Labels:
  - Associated with htmlFor/id
  - Visible and clear
  - Proper font size

Links:
  - Visible focus state
  - Color contrast
  - Href attributes

Buttons:
  - Keyboard accessible
  - Clear focus state


================================================================================
                        CSS FILE: Safety.css
================================================================================

PURPOSE:
  Styles for Safety.jsx component
  Container: .safety-page

IMPORT IN COMPONENT:
  import "../styles/Safety.css";
  in Safety.jsx

KEY CLASSES:

1. .safety-page
   Main page container
   
   Properties:
     - Padding
     - Max width
     - Margin auto (centering)

2. .safety-header
   Header with title and description
   
   Properties:
     - Text alignment
     - Font styles
     - Margin/padding

3. .emergency-banner
   Emergency number banner
   
   Properties:
     - Background color (warning/red tint)
     - Text color (white)
     - Padding
     - Border radius
     - Font weight (bold)
     - Text alignment

4. .quick-contacts
   Container for emergency contact cards
   
   Properties:
     - Margin
     - Padding
     - Grid layout

5. .contacts-grid
   Grid of contact cards
   
   Properties:
     - Grid with 2-4 columns
     - Gap between cards
     - Responsive columns

6. .contact-box
   Individual emergency contact card
   
   Properties:
     - Background color
     - Padding
     - Border radius
     - Shadow
     - Text alignment
     - Flex layout (vertical)

7. .contact-icon
   Icon emoji in contact box
   
   Properties:
     - Font size (large, e.g., 2em)
     - Color
     - Margin bottom

8. .contact-number
    Phone number link
    
    Properties:
      - Font weight
      - Color
      - Text decoration
      - Font size

9. .contact-note
    Description text
    
    Properties:
      - Font size
      - Color (muted)
      - Margin top

10. .procedures-section
    Tab-based procedure browser
    
    Properties:
      - Margin
      - Padding
      - Background
      - Border

11. .tabs-header
    Header with tabs
    
    Properties:
      - Flex layout
      - Space between items
      - Border bottom
      - Padding

12. .tabs
    Tab button container
    
    Properties:
      - Flex layout
      - Gap between buttons
      - Wrapping
      - Scrollable on mobile (optional)

13. .tab-btn
    Individual tab button
    
    Properties:
      - Border
      - Background (inactive)
      - Color
      - Padding
      - Cursor pointer
      - Hover effects
      - Transition

14. .tab-btn.active
    Active tab state
    
    Properties:
      - Background color change
      - Border color change
      - Text color change
      - Font weight

15. .procedures-content
    Content area for selected procedure
    
    Properties:
      - Padding
      - Animation (fade in)

16. .procedure-detail
    Detail section for procedure
    
    Properties:
      - Margin
      - Padding
      - Animation

17. .tips-list
    List of safety tips
    
    Properties:
      - List style
      - Padding left
      - Gap between items
      - Margin

18. .tips-list li
    Individual tip
    
    Properties:
      - Margin bottom
      - Line height
      - Color
      - Font size

19. .info-boxes
    Container for info sections
    
    Properties:
      - Grid layout (2 columns)
      - Gap
      - Margin
      - Responsive adjustments

20. .info-box
    Individual info box
    
    Properties:
      - Background color
      - Padding
      - Border radius
      - Shadow
      - Responsive sizing

21. .numbers-table
    Important numbers list
    
    Properties:
      - Structure for number rows
      - Responsive layout

22. .number-row
    Individual number row
    
    Properties:
      - Flex layout
      - Space between
      - Padding
      - Border bottom
      - Alignment

23. .resources-list
    Campus resources list
    
    Properties:
      - List style
      - Padding
      - Gap between items

24. .safety-tips
    Container for safety tip cards
    
    Properties:
      - Margin
      - Padding

25. .tips-cards
    Grid of tip cards
    
    Properties:
      - Grid layout (2-3 columns)
      - Gap
      - Responsive columns

26. .tip-card
    Individual tip card
    
    Properties:
      - Background color
      - Padding
      - Border radius
      - Shadow
      - Text alignment
      - Flex layout (vertical)

27. .tip-number
    Numbered circle in tip card
    
    Properties:
      - Width/height (square or circle)
      - Background color
      - Font size
      - Font weight
      - Display flex (centered)
      - Border radius (50% for circle)
      - Color

28. .footer-note
    Footer note with contact info
    
    Properties:
      - Margin top
      - Padding
      - Border top
      - Text alignment
      - Font size

LAYOUT STRUCTURE:

  .safety-page
  ├── .safety-header
  ├── .emergency-banner
  ├── .quick-contacts
  │   └── .contacts-grid
  │       └── .contact-box x 4
  ├── .procedures-section
  │   ├── .tabs-header
  │   │   └── .tabs
  │   │       └── .tab-btn x 6
  │   └── .procedures-content
  │       └── .procedure-detail
  │           └── .tips-list
  ├── .info-boxes
  │   ├── .info-box (numbers)
  │   └── .info-box (resources)
  ├── .safety-tips
  │   └── .tips-cards
  │       └── .tip-card x 6
  └── .footer-note

RESPONSIVE DESIGN:

Mobile (< 860px):
  - .contacts-grid: 2 columns → 1 column
  - .tabs: horizontal scroll or wrapped
  - .info-boxes: stacked vertically
  - .tips-cards: 2 columns → 1 column
  - .tabs-header: flex-direction: column

Tablet (860px - 1200px):
  - .contacts-grid: 2-4 columns
  - .tips-cards: 2-3 columns

Desktop (> 1200px):
  - Full layout as designed

COLORS USED:

  - var(--color-navy-blue)    Main color
  - var(--color-white)        Background
  - var(--color-dark-grey)    Text
  - Red/warning colors        Emergency banner
  - Green colors              For positive actions
  - Orange/yellow colors      For warnings

INTERACTIVITY:

Tab switching:
  - Click tab button to show different content
  - Active state styling
  - Smooth transitions

Clickable phone numbers:
  - href="tel:..." for mobile phones
  - Hover effects
  - Color changes

ACCESSIBILITY:

Semantic structure:
  - Proper heading hierarchy
  - Semantic HTML elements
  - List structure for tips

Keyboard navigation:
  - Tab buttons focusable
  - Visible focus indicators
  - Tab order logical

Color contrast:
  - Sufficient contrast ratios
  - Not relying on color alone
  - Icons + text for understanding


================================================================================
                        CSS FILE: StudySpaces.css
================================================================================

PURPOSE:
  Styles for StudySpaces.jsx component
  Container: .study-spaces-page

IMPORT IN COMPONENT:
  import "../styles/StudySpaces.css";
  in StudySpaces.jsx

KEY CLASSES:

1. .study-spaces-page
   Main page container
   
   Properties:
     - Padding
     - Max width
     - Margin auto

2. .spaces-header
   Header section
   
   Properties:
     - Text alignment
     - Margin/padding
     - Font styles

3. .filter-section
   Filter buttons container
   
   Properties:
     - Flex layout
     - Gap between buttons
     - Margin
     - Padding
     - Wrapping
     - Justification

4. .filter-btn
   Individual filter button
   
   Properties:
     - Border
     - Background (inactive)
     - Color
     - Padding
     - Border radius
     - Cursor pointer
     - Transition
     - Hover effects

5. .filter-btn.active
   Active filter button state
   
   Properties:
     - Background color (active)
     - Text color (active)
     - Border color (active)
     - Font weight

6. .spaces-content
   Main content area
   
   Properties:
     - Grid layout (showcase + details panel)
     - Gap
     - Responsive adjustments

7. .spaces-showcase
   Grid of space cards
   
   Properties:
     - Grid layout
     - Gap between cards
     - Auto-fit/auto-fill columns
     - Responsive

8. .space-showcase-card
   Individual space card in showcase
   
   Properties:
     - Background color
     - Border
     - Border radius
     - Padding
     - Shadow
     - Cursor pointer
     - Transition
     - Hover effects

9. .space-showcase-card.selected
   Selected space card state
   
   Properties:
     - Border color change
     - Background highlight
     - Shadow enhancement
     - Visual distinction

10. .space-card-header
    Header within space card
    
    Properties:
      - Flex layout
      - Space between items
      - Alignment

11. .type-badge
    Space type badge
    
    Properties:
      - Background color (type-specific)
      - Text color
      - Padding
      - Border radius
      - Font weight
      - Font size

12. .space-description
    Description text
    
    Properties:
      - Font size
      - Color
      - Margin
      - Line height

13. .space-quick-info
    Quick info grid
    
    Properties:
      - Grid layout (2 columns)
      - Gap
      - Margin

14. .info-item
    Individual info item
    
    Properties:
      - Flex layout
      - Direction column or row
      - Alignment

15. .info-label
    Label for info item
    
    Properties:
      - Font weight
      - Color (muted)
      - Font size

16. .info-value
    Value for info item
    
    Properties:
      - Font weight
      - Color
      - Font size

17. .space-details-panel
    Detail panel (conditional)
    
    Properties:
      - Background color
      - Padding
      - Border radius
      - Shadow
      - Position (sticky or fixed)
      - Max width
      - Overflow handling

18. .close-btn
    Close button for details panel
    
    Properties:
      - Position absolute or relative
      - Background
      - Border
      - Cursor pointer
      - Font size
      - Padding

19. .details-content
    Content within details panel
    
    Properties:
      - Padding/margin
      - Overflow (if needed)
      - Max height (if needed)

20. .details-description
    Description in details panel
    
    Properties:
      - Font size
      - Color
      - Margin

21. .details-section
    Section within details
    
    Properties:
      - Margin
      - Padding
      - Border

22. .features-list
    List of features
    
    Properties:
      - List style
      - Padding left
      - Gap between items
      - Margin

23. .details-grid
    Grid of detail items
    
    Properties:
      - Grid layout (2-4 columns)
      - Gap
      - Responsive

24. .detail-item
    Individual detail item
    
    Properties:
      - Flex layout (column)
      - Padding
      - Background (light)
      - Border radius
      - Alignment

25. .detail-label
    Label for detail
    
    Properties:
      - Font weight
      - Color
      - Font size

26. .detail-value
    Value for detail
    
    Properties:
      - Font size
      - Color
      - Font weight

27. .navigate-btn
    Navigate button
    
    Properties:
      - Inherit from button styles
      - Margin top
      - Full width or auto
      - Padding

LAYOUT STRUCTURE:

  .study-spaces-page
  ├── .spaces-header
  ├── .filter-section
  │   └── .filter-btn x n
  └── .spaces-content
      ├── .spaces-showcase
      │   └── .space-showcase-card x 5
      │       ├── .space-card-header
      │       ├── .space-description
      │       └── .space-quick-info
      └── .space-details-panel (conditional)
          └── .details-content
              ├── h3
              ├── .details-description
              ├── .details-section
              ├── .details-grid
              │   └── .detail-item x 4
              └── .navigate-btn

RESPONSIVE DESIGN:

Mobile (< 600px):
  - .spaces-showcase: 1 column
  - .space-quick-info: 1 column
  - .details-grid: 1 column
  - .space-details-panel: Full width, modal overlay

Tablet (600px - 900px):
  - .spaces-showcase: 2 columns
  - .space-quick-info: 2 columns
  - .details-grid: 2 columns

Desktop (> 900px):
  - .spaces-showcase: 2-3 columns
  - .spaces-content: Grid with sidebar
  - .space-details-panel: Fixed or sticky sidebar

COLORS USED:

  - var(--color-white)        Background
  - var(--color-dark-grey)    Text
  - var(--color-navy-blue)    Accents
  - Type-specific colors:
    - Library: Dark colors
    - Cafe: Warm colors
    - Lab: Technical colors
    - Discussion: Friendly colors

INTERACTIVITY:

Card selection:
  - Click card to select
  - Active state styling
  - Open/close details panel
  - Smooth transitions

Button hovering:
  - Color changes
  - Shadow effects
  - Cursor pointer

Filter buttons:
  - Click to filter spaces
  - Visual feedback
  - State changes

ACCESSIBILITY:

Semantic HTML:
  - Proper heading hierarchy
  - Button elements for filters
  - List structure for features

Keyboard navigation:
  - Focusable buttons
  - Focusable cards (optional)
  - Visible focus indicators
  - Tab order logical

Color accessibility:
  - Not relying on color alone
  - Sufficient contrast
  - Type badges have icons/emojis


================================================================================
                        CSS FILE: About.css
================================================================================

PURPOSE:
  Styles for About.jsx component
  Container: .about-page

IMPORT IN COMPONENT:
  import "../styles/About.css";
  in About.jsx

KEY CLASSES:

1. .about-page
   Main page container
   
   Properties:
     - Padding
     - Max width
     - Margin auto
     - Display flex (column)

2. .hero-section
   Hero section with title
   
   Properties:
     - Background color
     - Padding
     - Text alignment
     - Margin bottom
     - Font styles

3. .hero-section h1
   Main title styling
   
   Properties:
     - Font size (large)
     - Font weight
     - Color
     - Margin

4. .hero-section h2
   Subtitle styling
   
   Properties:
     - Font size (smaller than h1)
     - Color (muted)
     - Margin

5. .hero-section p
   Hero description
   
   Properties:
     - Font size
     - Color
     - Margin
     - Line height

6. .about-content
   Main content area
   
   Properties:
     - Padding
     - Sections with gap

7. .mission-section
   Mission statement section
   
   Properties:
     - Padding
     - Margin
     - Background (light)
     - Border radius
     - Text alignment

8. .mission-section p
   Mission text
    
    Properties:
      - Font size
      - Line height
      - Color
      - Text alignment

9. .features-section
   Features section
   
   Properties:
     - Padding
     - Margin

10. .features-grid
    Grid of feature cards
    
    Properties:
      - Grid layout (3 columns)
      - Gap
      - Responsive columns
      - Auto-fit/auto-fill

11. .feature-card
    Individual feature card
    
    Properties:
      - Background color
      - Padding
      - Border radius
      - Shadow
      - Text alignment
      - Flex layout (column)
      - Center alignment

12. .feature-icon
    Feature icon
    
    Properties:
      - Font size (large)
      - Margin bottom
      - Color

13. .feature-card h4
    Feature title
    
    Properties:
      - Font size
      - Font weight
      - Margin
      - Color

14. .feature-card p
    Feature description
    
    Properties:
      - Font size
      - Color
      - Line height

15. .how-it-works
    How it works section
    
    Properties:
      - Padding
      - Margin

16. .steps
    Steps container
    
    Properties:
      - Grid layout (4 columns)
      - Gap
      - Responsive columns

17. .step
    Individual step
    
    Properties:
      - Display flex (column)
      - Alignment
      - Padding
      - Border
      - Border radius
      - Background (light)

18. .step-number
    Step number circle
    
    Properties:
      - Width/height (circle)
      - Background color
      - Color (white)
      - Border radius (50%)
      - Display flex (centered)
      - Font weight
      - Font size
      - Margin (auto or bottom)

19. .step h4
    Step title
    
    Properties:
      - Font weight
      - Font size
      - Margin

20. .step p
    Step description
    
    Properties:
      - Font size
      - Color
      - Line height

21. .team-section
    Team/Technology section
    
    Properties:
      - Padding
      - Margin

22. .team-grid
    Grid of team cards
    
    Properties:
      - Grid layout (3 columns)
      - Gap
      - Responsive columns

23. .team-card
    Individual team card
    
    Properties:
      - Background color
      - Padding
      - Border radius
      - Shadow
      - Text alignment

24. .team-card h4
    Card title
    
    Properties:
      - Font weight
      - Font size
      - Color

25. .team-card p
    Card description
    
    Properties:
      - Font size
      - Color
      - Line height

26. .values-section
    Values section
    
    Properties:
      - Padding
      - Margin

27. .values-grid
    Grid of value items
    
    Properties:
      - Grid layout (4 columns)
      - Gap
      - Responsive columns

28. .value-item
    Individual value
    
    Properties:
      - Padding
      - Background (light)
      - Border radius
      - Text alignment
      - Border left (colored accent)

29. .value-item h4
    Value title
    
    Properties:
      - Font weight
      - Font size
      - Color

30. .value-item p
    Value description
    
    Properties:
      - Font size
      - Color
      - Line height

31. .faq-section
    FAQ section
    
    Properties:
      - Padding
      - Margin

32. .faq-items
    FAQ items container
    
    Properties:
      - Gap between items

33. .faq-item
    Individual FAQ item
    
    Properties:
      - Padding
      - Border bottom
      - Margin

34. .faq-item h4
    Question styling
    
    Properties:
      - Font weight
      - Font size
      - Color
      - Margin

35. .faq-item p
    Answer styling
    
    Properties:
      - Font size
      - Color (muted)
      - Line height
      - Margin

36. .contact-cta
    Call-to-action section
    
    Properties:
      - Padding
      - Background color
      - Text alignment
      - Border radius
      - Margin

37. .contact-cta h3
    CTA heading
    
    Properties:
      - Font weight
      - Font size
      - Margin

38. .contact-cta p
    CTA text
    
    Properties:
      - Font size
      - Margin

39. .cta-button
    CTA button
    
    Properties:
      - Button styling
      - Background color
      - Padding
      - Border radius
      - Text decoration (none)
      - Display (inline-block)
      - Hover effects

40. .about-footer
    Footer section
    
    Properties:
      - Background color
      - Padding
      - Text alignment
      - Border top
      - Color (muted)
      - Font size

LAYOUT STRUCTURE:

  .about-page
  ├── .hero-section
  ├── .about-content
  │   ├── .mission-section
  │   ├── .features-section
  │   │   └── .features-grid
  │   │       └── .feature-card x 6
  │   ├── .how-it-works
  │   │   └── .steps
  │   │       └── .step x 4
  │   ├── .team-section
  │   │   └── .team-grid
  │   │       └── .team-card x 3
  │   ├── .values-section
  │   │   └── .values-grid
  │   │       └── .value-item x 4
  │   ├── .faq-section
  │   │   └── .faq-items
  │   │       └── .faq-item x 6
  │   └── .contact-cta
  └── .about-footer

RESPONSIVE DESIGN:

Mobile (< 600px):
  - .features-grid: 1 column
  - .steps: 1 column
  - .team-grid: 1 column
  - .values-grid: 1 column
  - Full width content

Tablet (600px - 900px):
  - .features-grid: 2 columns
  - .steps: 2 columns
  - .team-grid: 2-3 columns
  - .values-grid: 2 columns

Desktop (> 900px):
  - .features-grid: 3 columns
  - .steps: 4 columns (or 2x2)
  - .team-grid: 3 columns
  - .values-grid: 4 columns

COLORS USED:

  - var(--color-white)        Background
  - var(--color-dark-grey)    Text
  - var(--color-navy-blue)    Accents
  - Light backgrounds:        Light navy or light grey
  - Link/CTA colors:          Primary brand colors
  - Border colors:            Dark grey or navy

TYPOGRAPHY:

Headings:
  - h1: Large, bold
  - h2: Subtitle size
  - h3: Section headers
  - h4: Card titles

Body:
  - Readable size
  - Good line height
  - Proper contrast

INTERACTIVITY:

CTA Button:
  - Hover effects
  - Color changes
  - Link to /feedback

Links:
  - Color change on hover
  - Underline effects
  - Proper focus state

ACCESSIBILITY:

Semantic HTML:
  - Proper heading hierarchy
  - Semantic section elements
  - Article elements for content

Keyboard navigation:
  - Focusable links and buttons
  - Visible focus indicators
  - Tab order logical

Color contrast:
  - Text on background
  - Links distinguishable
  - CTA button visible

Reading experience:
  - Good line length
  - Adequate spacing
  - Readable font sizes


================================================================================
                    STYLING BEST PRACTICES
================================================================================

CSS ORGANIZATION:

1. Use CSS custom properties from index.css
   ✓ var(--color-dark-grey)
   ✓ var(--color-white)
   ✗ #2D3748 (hardcoded color)

2. Follow naming conventions
   ✓ .space-card (semantic, specific)
   ✗ .card-1 (non-semantic)
   ✓ .space-card.active (modifier)
   ✗ .active-card (could be on anything)

3. Use flexbox/grid for layouts
   ✓ display: grid; grid-template-columns: ...
   ✓ display: flex; justify-content: center;
   ✗ float and clearfix (outdated)

4. Responsive design
   ✓ Mobile first
   ✓ Media queries for larger screens
   ✓ Flexible units (%, em, rem)
   ✗ Fixed widths
   ✗ Desktop first only

5. Maintain media query breakpoints
   ✓ 860px max-width for main stacking changes
   ✓ Consistent breakpoints across files
   ✗ Different breakpoints in different files

6. Performance
   ✓ CSS custom properties (used across files)
   ✓ Minimal nesting depth
   ✓ Avoid !important
   ✗ Overly specific selectors


================================================================================
                    IMPORTING STYLES IN COMPONENTS
================================================================================

PATTERN:

At top of component file:
  import "../styles/Map.css";

Effect:
  - Loads CSS when component loads
  - Scoped to component (via class names)
  - Bundled with component in production

NAMING CONVENTION:

Component file:        Styles file:
  Map.jsx            →   Map.css
  Feedback.jsx       →   Feedback.css
  Profile.jsx        →   Profile.css

Container class matches pattern:
  .map-page       (for Map.jsx)
  .feedback-page  (for Feedback.jsx)
  .profile-page   (for Profile.jsx)


================================================================================
                    CSS CUSTOM PROPERTIES USAGE
================================================================================

DEFINED IN: index.css

USAGE PATTERN:

Instead of hardcoding colors:
  ✗ color: #2D3748;
  ✗ background: #FFFFFF;

Use custom properties:
  ✓ color: var(--color-dark-grey);
  ✓ background: var(--color-white);

BENEFITS:

1. Consistency across application
2. Easy theme changes (one place to update)
3. Maintenance simplified
4. Readable color names

AVAILABLE PROPERTIES:

--color-navy-blue:       #12214A
--color-medium-navy:     #1C2A6D
--color-light-navy:      #6A7CB0
--color-dark-grey:       #2D3748
--color-medium-grey:     #4A5568
--color-white:           #FFFFFF
--color-golden-yellow:   #FFD700


================================================================================
                    MEDIA QUERY PATTERN
================================================================================

RESPONSIVE BREAKPOINT:

Primary: max-width: 860px

STRUCTURE:

@media (max-width: 860px) {
  .grid-layout {
    grid-template-columns: 1fr;
  }
  
  .multi-column {
    flex-direction: column;
  }
  
  .item {
    font-size: 0.9em;
  }
}

MOBILE FIRST:

Default styles (mobile):
  - Single column
  - Larger spacing
  - Simple layout

@media (min-width: 861px):
  - Multiple columns
  - Optimized spacing
  - Complex layouts


================================================================================
                    END OF STYLES DOCUMENTATION
================================================================================
*/
