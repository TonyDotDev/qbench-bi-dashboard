# BI Dashboard - Sample Throughput Analytics

A modern React-based business intelligence dashboard for tracking laboratory sample processing throughput with interactive charts and real-time data visualization.

## 🚀 How to Run Locally

### Prerequisites

- **Node.js**: >=18.0.0 (see `.nvmrc`)
- **npm**: >=9.0.0 (enforced package manager)
- **Git**: Latest version

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd bi-dashboard

# Switch to correct Node version
nvm use

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the dashboard.

### Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode
npm run storybook        # Start Storybook for component development
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript type checking
```

## 🏗️ Architecture & Design System Choices

### **Frontend Architecture**

**React 19 + TypeScript + Vite**

- **React 19**: Latest features with improved performance and concurrent rendering
- **TypeScript**: Strict type safety for better developer experience and fewer runtime errors
- **Vite**: Fast development server and optimized builds with HMR

**Component Architecture**

```
bi-dashboard/
├── .husky/                          # Git hooks configuration
├── .storybook/                      # Storybook configuration
├── .vscode/                         # VS Code workspace settings
├── public/                          # Static assets
├── src/
│   ├── api/                         # Data layer & API integration
│   │   ├── index.ts                 # API exports
│   │   ├── sampleThroughputApi.ts   # API client for sample data
│   │   ├── sample_throughput_data.json # Mock data
│   │   └── useSampleThroughput.ts   # React hook for data fetching
│   │
│   ├── components/                  # React components
│   │   ├── cards/                   # Layout & container components
│   │   │   ├── DashboardCard.tsx    # Main dashboard card wrapper
│   │   │   ├── constants.ts         # Card configuration constants
│   │   │   ├── index.ts             # Card exports
│   │   │   └── variants.ts          # Card styling variants
│   │   │
│   │   ├── charts/                  # Data visualization components
│   │   │   └── LineChart.tsx        # Interactive line chart with tooltips
│   │   │
│   │   ├── inputs/                  # Form & input components
│   │   │   └── DateRangePicker/     # Date selection component
│   │   │
│   │   ├── layouts/                 # Layout components
│   │   │   ├── DashboardLayout.tsx  # Main dashboard layout
│   │   │   └── index.ts             # Layout exports
│   │   │
│   │   ├── Typography/              # Text components
│   │   │   ├── Typography.tsx       # Typography component
│   │   │   ├── typographyVariants.ts # Typography styles
│   │   │   └── index.ts             # Typography exports
│   │   │
│   │   └── ui/                      # Reusable UI components (shadcn/ui)
│   │       ├── button/              # Button component
│   │       ├── calendar.tsx         # Calendar component
│   │       ├── card.tsx             # Card component
│   │       ├── chart.tsx            # Chart container
│   │       ├── label.tsx            # Label component
│   │       ├── popover.tsx          # Popover component
│   │       └── index.ts             # UI exports
│   │
│   ├── context/                     # Global state management
│   │   ├── dashboard/               # Dashboard-specific context
│   │   │   ├── DashboardContext.tsx # Main dashboard context
│   │   │   ├── useDashboardContext.ts # Context hook
│   │   │   └── index.ts             # Context exports
│   │   └── index.ts                 # Context exports
│   │
│   ├── lib/                         # Utilities & helpers
│   │   ├── auth/                    # Authentication utilities
│   │   │   └── useMockAuth.ts       # Mock authentication hook
│   │   ├── date.ts                  # Date formatting utilities
│   │   └── utils.ts                 # General utilities
│   │
│   ├── pages/                       # Page-level components
│   │   ├── DashboardPage.tsx        # Main dashboard page
│   │   ├── LoginPage.tsx            # Login page
│   │   └── UnauthorizedPage.tsx     # Unauthorized access page
│   │
│   ├── routes/                      # Routing configuration
│   │   ├── applyGuardsAndLayouts.tsx # Route guard application
│   │   ├── AppRouter.tsx            # Main router component
│   │   ├── layouts.tsx              # Layout wrapper
│   │   ├── paths.ts                 # Route path constants
│   │   ├── RouteGuard.tsx           # Route protection component
│   │   ├── routes.tsx               # Route definitions
│   │   └── index.ts                 # Route exports
│   │
│   ├── test/                        # Test configuration
│   │   └── setup.ts                 # Test setup file
│   │
│   ├── App.css                      # App-specific styles
│   ├── App.tsx                      # Main application component
│   ├── index.css                    # Global styles & CSS variables
│   ├── main.tsx                     # Application entry point
│   └── vite-env.d.ts                # Vite type definitions
│
├── .eslintrc.js                     # ESLint configuration
├── .nvmrc                           # Node version specification
├── .npmrc                           # npm configuration
├── .prettierrc                      # Prettier configuration
├── components.json                  # shadcn/ui configuration
├── package.json                     # Dependencies & scripts
├── tailwind.config.ts               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
├── tsconfig.app.json                # App-specific TypeScript config
├── tsconfig.node.json               # Node-specific TypeScript config
├── vite.config.ts                   # Vite configuration
└── vitest.shims.d.ts                # Vitest type definitions
```

### **Design System**

**Tailwind CSS v4 with OKLCH Colors**

- **OKLCH Color Space**: Better color perception and accessibility
- **Design Tokens**: Consistent spacing, typography, and color variables
- **Responsive Design**: Mobile-first approach with breakpoint system

**shadcn/ui Component Library**

- **Accessible Components**: Built with ARIA standards and keyboard navigation
- **Customizable**: Themeable through CSS variables
- **Type-Safe**: Full TypeScript support with proper prop types

**Chart System**

- **Recharts**: React-native charting library with accessibility features
- **Custom Tooltips**: Enhanced with detailed information and ARIA labels
- **Responsive**: Adapts to different screen sizes and orientations

### **Data Architecture**

**API Layer**

```typescript
interface SampleThroughputData {
  date: string;
  lab: string;
  sample_type: string;
  count: number;
  status: 'complete' | 'processing' | 'pending' | 'failed';
}
```

**State Management**

- **React Context**: For global dashboard state (date ranges, filters)
- **Custom Hooks**: For data fetching and transformation
- **Local State**: Component-specific state with useState/useReducer

### **Testing Strategy**

**Vitest + Testing Library**

- **Unit Tests**: Component behavior and utility functions
- **Accessibility Tests**: ARIA compliance and keyboard navigation

**Storybook**

- **Component Documentation**: Interactive examples and prop documentation
- **Visual Testing**: Component variations and edge cases
- **Design System**: Living documentation of UI components

## 🔮 What I'd Improve with More Time

### **Immediate Improvements (1-2 weeks)**

1. **Data Visualization Enhancements**

   - Add more chart types (bar charts, pie charts, heatmaps)
   - Implement data aggregation and filtering
   - Add export functionality (CSV, PDF reports)
   - Real-time data updates with WebSocket integration

2. **Performance Optimizations**

   - Implement virtual scrolling for large datasets
   - Add data caching with React Query
   - Optimize bundle size with code splitting
   - Add service worker for offline functionality

3. **User Experience**

   - Add loading states and skeleton screens
   - Implement error boundaries and retry mechanisms
   - Add keyboard shortcuts for power users
   - Improve mobile responsiveness

4. **Testing**
   - Playwright with E2E/integration tests.

### **Medium-term Enhancements (1-2 months)**

1. **Advanced Analytics**

   - Trend analysis and forecasting
   - Statistical summaries and KPIs
   - Custom dashboard builder

2. **Accessibility & Internationalization**

   - Full i18n support with react-intl
   - Enhanced screen reader support
   - High contrast mode

3. **Backend Integration**
   - Real API endpoints with authentication
   - Database integration (PostgreSQL/MongoDB)
   - Caching layer (Redis)
   - API rate limiting and monitoring

## 🤔 Assumptions Made

### **Technical Assumptions**

1. **Data Structure**

   - Sample data follows a consistent format with date, lab, sample_type, count, and status
   - Status values are limited to: complete, processing, pending, failed
   - Count values are always positive integers

2. **User Requirements**

   - Users need to view sample throughput over time
   - Detailed information (lab, sample type, status) is important for tooltips
   - Color-coded status indicators improve data comprehension

3. **Performance Requirements**

   - Initial load time should be under 3 seconds
   - Chart interactions should be smooth (60fps)
   - Mobile devices should be supported

4. **Accessibility Requirements**
   - WCAG 2.1 AA compliance
   - Keyboard navigation support
   - Screen reader compatibility
   - Color contrast ratios meet standards

## 🤖 Use of AI Tools

### **How AI Assisted in This Project**

**Development Assistance**

- **GitHub Copilot**: Used extensively for code completion and boilerplate generation

  - React component structure and TypeScript interfaces
  - Test file generation and assertions
  - Documentation

- **ChatGPT (Claude)**: Used for architectural decisions and problem-solving
  - Chart component design and Recharts implementation
  - Accessibility improvements and ARIA attributes
  - Color scheme selection and OKLCH color space
  - Testing strategies and best practices

**Specific AI Contributions**

1. **LineChart Component**

   - AI helped design the tooltip structure with proper accessibility
   - Assisted with Recharts configuration and customization

2. **Accessibility Improvements**

   - AI identified missing ARIA attributes and semantic HTML
   - Suggested proper heading hierarchy and screen reader support

3. **Styling and Design**
   - AI recommended OKLCH color space for better accessibility

**Responsible AI Usage**

- **Code Review**: All AI-generated code was reviewed and modified as needed
- **Understanding**: Ensured comprehension of all implemented solutions
- **Customization**: Adapted AI suggestions to fit project requirements
- **Testing**: Verified AI-generated code with proper tests
- **Documentation**: Documented AI contributions transparently

**AI Tools Used**

- **GitHub Copilot**: Real-time code completion and suggestions
- **ChatGPT/Claude**: Problem-solving and architectural guidance
- **VS Code Extensions**: AI-powered linting and formatting

## 📊 Key Features Implemented

### **Interactive Line Chart**

- Real-time data visualization with hover tooltips
- Monthly and daily view options
- Color-coded status indicators
- Responsive design for all screen sizes

### **Enhanced Tooltips**

- Detailed information display (lab, sample type, count, status)
- Accessibility features with ARIA labels
- Color-coded status badges
- Semantic HTML structure

### **Dashboard Layout**

- Responsive card-based layout
- Loading states and error handling
- Date range selection
- Clean, modern UI design

### **Data Management**

- Type-safe API integration
- Custom React hooks for data fetching
- Efficient data transformation and aggregation
- Error handling

## 🧪 Testing Coverage

- **Unit Tests**: Component behavior and utility functions
- **Integration Tests**: API interactions and data flow
- **Accessibility Tests**: ARIA compliance and keyboard navigation
- **Visual Tests**: Component rendering and styling
- **Storybook**: Interactive component documentation
