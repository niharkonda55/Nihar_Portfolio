# Portfolio Website - replit.md

## Overview

This is a modern cybersecurity-themed portfolio website built as a full-stack application. The project showcases a cybersecurity professional's work, skills, and experience through an interactive, visually striking interface with cyberpunk aesthetics. The application features a React frontend with TypeScript, an Express.js backend, and is configured for database integration using Drizzle ORM with PostgreSQL.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Custom components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom cyberpunk theme variables
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Animation**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL sessions with connect-pg-simple
- **Development**: Hot reloading with tsx for server-side development

## Key Components

### Frontend Components
- **Custom Cursor**: Interactive cursor with follower animation
- **Particle Background**: Dynamic particle system for visual effects
- **Floating Navigation**: Smooth-scrolling navigation bar
- **Hero Section**: Main landing area with call-to-action buttons
- **About Section**: Professional background and expertise showcase
- **Skills Section**: Technical skills organized by categories
- **Projects Section**: Portfolio project showcase with interactive cards
- **Contact Section**: Contact form with server-side submission

### Backend Components
- **Contact API**: `/api/contact` endpoint for form submissions with validation
- **User Storage**: In-memory and database user management interfaces
- **Request Logging**: Comprehensive request/response logging middleware
- **Error Handling**: Centralized error handling with proper HTTP status codes

### UI Component Library
- Comprehensive set of reusable components based on shadcn/ui
- Radix UI primitives for accessibility and functionality
- Custom styling with Tailwind CSS and CSS variables
- Dark theme optimized for cybersecurity aesthetic

## Data Flow

### Frontend to Backend Communication
1. Contact form submissions use TanStack Query mutations
2. API requests go through centralized `apiRequest` function
3. Error handling and success notifications via toast system
4. Form validation on both client and server sides

### Database Integration
- Drizzle ORM manages database schema and migrations
- PostgreSQL configured as the primary database
- Connection through Neon Database serverless platform
- Schema definitions in shared directory for type safety

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **wouter**: Lightweight routing
- **zod**: Schema validation

### UI and Styling
- **@radix-ui/***: Headless UI components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Tools
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit integration

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: Node.js with tsx for TypeScript execution
- **Database**: Neon Database with environment-based connection
- **Build Process**: Separate build processes for client and server

### Production Build
- **Frontend**: Static files generated in `dist/public`
- **Backend**: Bundled with esbuild for Node.js execution
- **Static Serving**: Express serves built frontend files
- **Environment**: Production mode detection and optimization

### File Structure
- `client/`: Frontend React application
- `server/`: Backend Express application  
- `shared/`: Shared TypeScript types and schemas
- `migrations/`: Database migration files
- Root-level configuration files for build tools and dependencies

The application is designed as a modern, responsive portfolio website with a focus on cybersecurity themes, featuring smooth animations, interactive elements, and professional presentation of technical skills and projects.