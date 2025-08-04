# BI Dashboard

A modern React-based business intelligence dashboard built with TypeScript, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Testing**: Vitest + Testing Library
- **Component Development**: Storybook
- **Code Quality**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged

## 📋 Prerequisites

- **Node.js**: >=18.0.0 (see `.nvmrc`)
- **npm**: >=9.0.0
- **Git**: Latest version

## 🛠️ Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd bi-dashboard
```

### 2. Install Dependencies

```bash
# Use nvm to switch to the correct Node version
nvm use

# Install dependencies (npm is enforced)
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## 📁 Project Structure

```
bi-dashboard/
├── .husky/                 # Git hooks configuration
├── .storybook/            # Storybook configuration
├── .vscode/               # VS Code workspace settings
├── public/                # Static assets
├── src/
│   ├── components/        # React components
│   │   └── ui/           # shadcn/ui components
│   ├── assets/           # Images, fonts, etc.
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── .eslintrc.js          # ESLint configuration
├── .nvmrc                # Node version specification
├── .npmrc                # npm configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🎯 Available Scripts

### Development

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build
```

### Code Quality

```bash
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues automatically
npm run format           # Format code with Prettier
npm run type-check       # Run TypeScript type checking
npm run validate         # Run lint + type-check + tests
```

### Testing

```bash
npm run test             # Run tests once
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Run tests with coverage
npm run test:ui          # Run tests with UI
```

### Component Development

```bash
npm run storybook        # Start Storybook
npm run build-storybook  # Build Storybook for deployment
```

### Maintenance

```bash
npm run clean            # Clean build artifacts
npm run clean:all        # Clean everything (including node_modules)
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode (recommended for development)
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Tests are written using **Vitest** and **Testing Library**
- Test files should be named `*.test.ts` or `*.spec.ts`
- Place test files next to the components they test
- Use `screen` queries for better accessibility

### Example Test

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

test('renders button with correct text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
});
```

## 📚 Storybook

### Starting Storybook

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view components.

### Writing Stories

- Create stories for all UI components
- Use Storybook for component development and testing
- Document component props and usage examples

## 🎨 Styling

### Tailwind CSS

- Uses Tailwind CSS v4 with OKLCH color space
- Custom theme variables defined in `src/index.css`
- Responsive design with mobile-first approach

### shadcn/ui Components

- Pre-built, accessible components
- Customizable through CSS variables
- Consistent design system

### Adding New Styles

```css
/* Use Tailwind utilities */
.my-component {
  @apply bg-primary text-white p-4 rounded-lg;
}

/* Or use CSS custom properties */
.my-component {
  background-color: var(--primary);
  border-radius: var(--radius);
}
```

## 🔧 Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Make Changes

- Write code following the established patterns
- Add tests for new functionality
- Update stories for new components

### 3. Pre-commit Checks

The following run automatically on commit:

- **lint-staged**: Format and lint changed files
- **TypeScript**: Incremental type checking

### 6. Create Pull Request

- Ensure all checks pass
- Add tests for new functionality
- Update documentation if needed

## 🚨 Code Quality

### ESLint Rules

- **TypeScript**: Strict type checking and best practices
- **React**: Modern React patterns and performance rules
- **Accessibility**: jsx-a11y rules for inclusive design
- **Import Organization**: Consistent import ordering
- **Testing**: Testing Library and Vitest best practices

### Prettier

- Automatic code formatting
- Consistent code style across the team
- Integrated with ESLint

### Git Hooks

- **Pre-commit**: Format and lint changed files

## 🐛 Troubleshooting

### Common Issues

#### Node Version Issues

```bash
# Ensure you're using the correct Node version
nvm use
node --version  # Should be >=18.0.0
```

#### Package Manager Issues

```bash
# This project enforces npm usage
npm install  # ✅ Works
yarn install  # ❌ Blocked
pnpm install  # ❌ Blocked
```

#### Build Issues

```bash
# Clean and reinstall
npm run clean:all
npm install
npm run build
```

#### Test Issues

```bash
# Clear test cache
npm run test -- --clearCache
```

### Getting Help

1. Check the [Troubleshooting](#troubleshooting) section
2. Review ESLint and TypeScript error messages
3. Check the [Tech Stack](#-tech-stack) for documentation links
4. Ask the team for guidance

## 📖 Contributing

### Code Standards

- Follow TypeScript best practices
- Write tests for new functionality
- Use semantic commit messages
- Keep components small and focused
- Document complex logic

### Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Add/update tests
4. Ensure all checks pass
5. Create a pull request
6. Request review from team members

### Commit Message Format

```
type(scope): description

feat(button): add loading state to Button component
fix(auth): resolve login redirect issue
docs(readme): update installation instructions
```

## 🔒 Environment Variables

Create a `.env.local` file for local development:

```bash
# API Configuration
VITE_API_URL=http://localhost:3000
VITE_API_KEY=your-api-key

# Feature Flags
VITE_ENABLE_ANALYTICS=true
```

## 📦 Deployment

### Build for Production

```bash
npm run build
```

### Environment-Specific Builds

```bash
# Development
npm run build -- --mode development

# Production
npm run build -- --mode production
```

## 🤝 Team Guidelines

### Communication

- Use clear, descriptive commit messages
- Document breaking changes
- Keep pull requests focused and small
- Provide context in code reviews

### Code Review

- Review for functionality, not just style
- Check for security implications
- Ensure tests are comprehensive
- Verify accessibility compliance

### Performance

- Monitor bundle size
- Use React DevTools for performance analysis
- Optimize images and assets
- Implement code splitting where appropriate

## 📚 Resources

### Documentation

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)

### Tools

- [VS Code Extensions](.vscode/extensions.json)
- [ESLint Rules](eslint.config.js)
- [TypeScript Config](tsconfig.json)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
