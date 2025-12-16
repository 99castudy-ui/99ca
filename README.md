# CA Final Indirect Tax Laws Practice App

A React + Vite application for practicing CA Final Paper 5 (Indirect Tax Laws) with MCQs and long answer questions from past exam papers.

## Features

- **Dashboard**: Overview with progress tracking, stats, and quick access to practice modes
- **MCQ Practice**: 14 multiple choice questions with detailed explanations
- **Long Answer Practice**: 3 comprehensive case studies with self-evaluation rubrics
- **Dark Theme**: Modern Bolt.new-inspired dark theme with smooth animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

- React 18
- Vite 5
- Pure CSS (no frameworks)
- Modern ES6+ JavaScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## Project Structure

```
ca-indirect-tax-app/
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── README.md              # This file
└── src/
    ├── main.jsx           # React entry point
    ├── App.jsx            # Main app component
    ├── App.css            # Application styles
    ├── index.css          # Base/reset styles
    └── data/
        └── questions.js   # Question data (MCQs and long answers)
```

## Question Data

The app includes:
- **14 MCQ Questions** covering topics like Customs, GST Registration, ITC, Time of Supply, Valuation, Exemptions, RCM, and Penalties
- **3 Long Answer Questions** with comprehensive case studies on GST Computation, Place of Supply, and Customs Valuation

All questions are from actual CA Final exam papers (May 2024, Nov 2024, May 2025).

## Features in Detail

### Dashboard
- Circular progress indicator showing overall completion
- Stats cards displaying questions solved, accuracy rate, and study hours
- Quick action cards to jump to MCQ or Long Answer practice
- Topics grid showing progress for each topic area

### MCQ Practice
- Question-by-question navigation with prev/next buttons
- Visual feedback for correct/incorrect answers
- Detailed explanations with legal section references
- Step-by-step calculations in table format
- "Where You Went Wrong" analysis for incorrect answers
- Question palette showing answered/unanswered status
- Score tracking

### Long Answer Practice
- Full case study display
- Large textarea for writing answers with word count
- Model answer comparison
- Self-evaluation rubric with individual criterion scoring
- Total score calculation with percentage
- Improvement tips and takeaways

## Design System

### Colors
- Primary Background: `#0f1419`
- Secondary Background: `#1a1f2e`
- Card Background: `#242b3d`
- Accent Blue: `#3b82f6`
- Accent Purple: `#8b5cf6`
- Success: `#10b981`
- Error: `#ef4444`
- Warning: `#f59e0b`

### Typography
- Headings: Plus Jakarta Sans (system fallback)
- Body: Inter (system fallback)
- Code/Numbers: JetBrains Mono (system fallback)

## Development

The app uses React hooks for state management. All components are functional components using `useState` for local state.

### Adding New Questions

To add new questions, edit `src/data/questions.js`:

```javascript
export const mcqQuestions = [
  // Add new MCQ objects here
];

export const longAnswerQuestions = [
  // Add new long answer objects here
];
```

### Styling

All styles are in `src/App.css`. The design follows a dark theme with:
- Smooth transitions (150-300ms)
- Subtle shadows with colored glows on hover
- Gradient accents (blue to purple)
- 12px border radius for cards

## License

This project is for educational purposes as part of CA Final exam preparation.

## Contributing

This is a personal study tool. However, suggestions and improvements are welcome!

---

**Good luck with your CA Final preparation!** 📚✨






