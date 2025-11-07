# Ahmed Abdulqader Company Website

## Overview

This is a bilingual (Arabic/English) corporate website for Ahmed Abdulqader Company, a Yemen-based catering and logistics service provider specializing in oil field catering, relief organization support, transportation services, and workforce provision. The application is built as a single-page React application with a focus on professional B2B presentation, RTL (right-to-left) language support, and responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, built using Vite as the build tool and development server.

**UI Component Library**: Shadcn UI (New York style variant) built on top of Radix UI primitives, providing accessible, customizable components with consistent styling through Tailwind CSS.

**Styling System**: 
- Tailwind CSS with CSS variables for theming
- Custom design tokens defined in `client/src/index.css` for light/dark mode support
- Responsive design following mobile-first approach
- RTL (right-to-left) support for Arabic language through CSS direction attributes

**State Management**: 
- React Query (@tanstack/react-query) for server state management
- Local component state using React hooks
- No global state management library (Redux, Zustand, etc.) is currently implemented

**Routing**: 
- Wouter for lightweight client-side routing
- Single-page application with component-based navigation
- Hash-based anchor navigation for scrolling to page sections

**Internationalization**: 
- i18next with react-i18next for bilingual support (Arabic/English)
- Translation files embedded in `client/src/lib/i18n.ts`
- Language switching triggers full re-render with updated text and direction (RTL/LTR)

**Component Structure**:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/`
- Shadcn UI primitives in `client/src/components/ui/`
- Section-based layout (Header, Hero, About, Services, Contact, Footer)

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Server Structure**:
- Minimal backend currently implemented as a placeholder
- Routes defined in `server/routes.ts` (currently empty)
- Storage interface abstraction in `server/storage.ts` with in-memory implementation
- Vite middleware integration for development with HMR (Hot Module Replacement)

**Build Process**:
- Client built with Vite (outputs to `dist/public`)
- Server bundled with esbuild (outputs to `dist`)
- Production mode serves static client files from Express

**Session Management**: 
- Infrastructure prepared for session storage using connect-pg-simple
- Currently not actively used as authentication is not implemented

### Data Storage

**Database ORM**: Drizzle ORM configured for PostgreSQL (via `@neondatabase/serverless`).

**Schema**: Minimal user schema defined in `shared/schema.ts` with:
- Users table with UUID primary key, username, and password fields
- Drizzle-Zod integration for runtime validation

**Database Configuration**: 
- Connection configured via `DATABASE_URL` environment variable
- Migration files output to `./migrations` directory
- Schema push capability via `npm run db:push`

**Note**: Database functionality is not currently utilized by the application. The website is purely informational with no user authentication or dynamic data.

### Deployment Options

**GitHub Pages Deployment**:
- Configured with GitHub Actions workflow (`.github/workflows/deploy.yml`)
- Automatic build and deployment on push to `main` branch
- Static site deployment suitable for this frontend-only website
- Instructions available in `DEPLOY_TO_GITHUB_PAGES.md`
- `.nojekyll` file prevents Jekyll processing

**Replit Deployment**:
- Can be published directly from Replit using the "Publish" button
- Supports both static and full-stack deployment
- Provides `.replit.app` domain with optional custom domain support

### API Design

**API Structure**: RESTful endpoints prefixed with `/api` (prepared but not implemented).

**Request/Response Handling**:
- JSON-based communication
- Custom request logging middleware tracking response times
- Error handling with HTTP status codes
- CORS and credentials support configured

**Client-Server Communication**: 
- Fetch API wrapped in `apiRequest` utility (`client/src/lib/queryClient.ts`)
- React Query for caching and request deduplication
- Configured for credential-based requests

## External Dependencies

### Third-Party Services

**Google Fonts**: 
- Cairo font family for Arabic text
- Inter font family for English text
- Loaded via CDN links in HTML head

**Leaflet Maps**: 
- OpenStreetMap integration for displaying company location
- Leaflet.js library loaded via CDN
- Map marker at coordinates: 15.301483, 44.238522 (Yemen)

### Development Tools

**Replit Integration**:
- `@replit/vite-plugin-runtime-error-modal` for error overlay
- `@replit/vite-plugin-cartographer` for development environment mapping
- `@replit/vite-plugin-dev-banner` for development mode banner

### Key NPM Dependencies

**React Ecosystem**:
- react, react-dom (core)
- wouter (routing)
- @tanstack/react-query (data fetching)
- react-i18next, i18next (internationalization)
- react-hook-form with @hookform/resolvers (form handling)

**UI Libraries**:
- @radix-ui/* packages (accordion, dialog, dropdown, etc.)
- lucide-react (icon library)
- embla-carousel-react (carousel functionality)
- vaul (drawer component)

**Styling**:
- tailwindcss (utility-first CSS)
- tailwind-merge (class merging utility)
- class-variance-authority (variant-based styling)
- clsx (conditional class names)

**Database**:
- drizzle-orm (ORM)
- drizzle-zod (schema validation)
- @neondatabase/serverless (PostgreSQL driver)

**Utilities**:
- date-fns (date manipulation)
- nanoid (unique ID generation)
- zod (runtime validation)