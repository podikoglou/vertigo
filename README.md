# Vertigo

This is my opinionated template for bootstrapping React-based web apps. It follows a few basic principles based on my own experience:

- **Always use TypeScript**,
- **No RSC**, they overcomplicate the app,
- **No Node.js**, [Bun](https://bun.sh) is used for package management, building and possibly serving,
- **No Babel**, only SWC is used,
- **No ESLint**, it overcomplicates everything.

## Components

- [Vite](https://vitejs.dev) for building and as a super fast development server,
- [SWC](https://swc.rs/) for bundling,
- [Biome](https://biomejs.dev/) for fast, no-bullshit linting and formatting,
- [TanStack Router](https://tanstack.com/router/) for routing and fetching,
- [Jotai](https://jotai.org/) for sane state management,
- [styled-components](https://styled-components.com/) for dead simple styling.

## Scripts

- `dev`: Starts the development server,
- `build`: Type checks, lints and formats and builds for production,
- `check`: Lints and formats the code.

## File Structure
```
src/
    assets/
    components/
        Counter.tsx
    main.tsx
    routeTree.gen.ts
    routes/
        __root.tsx
        index.lazy.tsx
    stores/
        counter.ts
    styling/
        theme.ts
    vite-env.d.ts
```
