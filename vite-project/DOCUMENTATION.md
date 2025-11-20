/*
================================================================================
                    VITE PROJECT TEMPLATE DOCUMENTATION
                    Unused Standard Vite Project Template
================================================================================

DIRECTORY PURPOSE:
  The vite-project folder is a standard Vite project template that was created
  but is NOT actively used in the PESUNav Hub application. This is a separate
  project template that can be used as reference or for testing purposes.

STATUS: NOT ACTIVELY USED
  The main application is in the frontend/ folder
  This folder is an unused template


================================================================================
                    FOLDER STRUCTURE
================================================================================

vite-project/
├── package.json              Project metadata and dependencies
├── package-lock.json         Locked dependency versions
├── tsconfig.json            TypeScript configuration
├── vite.config.ts           Vite configuration
├── index.html               HTML entry point
│
├── public/
│   └── vite.svg             Vite logo
│
└── src/
    ├── main.ts              TypeScript entry point
    ├── counter.ts           Sample component logic
    ├── style.css            Global styles
    ├── vite-env.d.ts        Type definitions
    └── typescript-logo.svg   TypeScript logo


================================================================================
                    KEY FILES
================================================================================

1. package.json
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: Project metadata and dependency management
   
   TYPE: TypeScript ("type": "module")
   SCRIPT: "dev" runs vite (development server)
   
   DEPENDENCIES:
     None (minimal template)
   
   DEV DEPENDENCIES:
     - typescript                TypeScript compiler
     - vite                     Build tool
     - @vitejs/plugin-react     React plugin (if using React)

2. index.html
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: HTML entry point
   
   CONTAINS:
     - Standard HTML5 structure
     - Root div with id="app"
     - Script reference to main.ts
   
   NOTES:
     - Similar to frontend/index.html but simpler
     - Uses TypeScript (main.ts) instead of JavaScript (main.jsx)

3. src/main.ts
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: TypeScript entry point
   
   TYPICAL CONTENT:
     import './style.css'
     import typescriptLogo from './typescript-logo.svg'
     import viteLogo from '/vite.svg'
     import { setupCounter } from './counter'
     
     document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
       <!-- HTML content -->
     `
   
   DIFFERENCES FROM FRONTEND:
     - TypeScript (main.ts) instead of React (main.jsx)
     - Direct DOM manipulation instead of React
     - Import-based asset loading

4. src/counter.ts
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: Sample component with TypeScript
   
   TYPICAL CONTENT:
     export function setupCounter(element: HTMLButtonElement) {
       let count: number = 0
       const increment = () => {
         count++
         element.innerHTML = `count is ${count}`
       }
       element.addEventListener('click', increment)
     }
   
   FEATURES:
     - Pure JavaScript (no framework)
     - TypeScript types
     - Event listener pattern
     - DOM manipulation

5. src/style.css
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: Global styles template
   
   CONTAINS:
     - Minimal CSS reset
     - Sample button and link styles
     - Color definitions
     - Font configuration

6. tsconfig.json
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: TypeScript configuration
   
   KEY SETTINGS:
     - target: ES2020 (modern JavaScript)
     - useDefineForClassFields: true
     - lib: ES2020, DOM, DOM.Iterable
     - module: ESNext
     - skipLibCheck: true

7. vite.config.ts
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: Vite build configuration
   
   TYPICAL CONTENT:
     import { defineConfig } from 'vite'
     
     export default defineConfig({
       plugins: [/* plugins here */],
     })
   
   DIFFERS FROM FRONTEND:
     - May not have React plugin
     - Simpler configuration
     - Pure JavaScript/TypeScript


================================================================================
                    PURPOSE AND USE CASES
================================================================================

WHY IT EXISTS:

This folder was likely created as:
  1. Initial project template
  2. Development/testing environment
  3. Reference for TypeScript + Vite setup
  4. Backup or alternative approach

CURRENT STATUS:

  ✗ NOT used for PESUNav Hub application
  ✓ Can be used as reference
  ✓ Can be used for testing Vite features
  ✓ Can be used for prototyping

WHERE TO USE:

If you need to work with vanilla TypeScript + Vite:
  - Learning/testing
  - Small utility projects
  - Non-React projects
  - TypeScript practice


================================================================================
                    DIFFERENCES FROM FRONTEND PROJECT
================================================================================

VITE-PROJECT              vs.        FRONTEND
──────────────────────────────────────────────────────────────────────
TypeScript                           JavaScript/JSX
main.ts                              main.jsx
Pure JavaScript                      React framework
HTML template strings                JSX components
DOM manipulation                      React rendering
No package.json scripts               Scripts: dev, build, lint
Minimal dependencies                  Full React stack
counter.ts sample                     Full page components
Vite.svg template                     PESUNav Hub app


WHEN TO USE FRONTEND:

For PESUNav Hub development:
  ✓ Use frontend/ folder
  ✗ Don't use vite-project/

When frontend is not suitable:
  - Building separate utility
  - Testing vanilla Vite setup
  - Prototyping without React
  - Learning Vite/TypeScript


================================================================================
                    GETTING STARTED (IF NEEDED)
================================================================================

INSTALLATION:

cd vite-project
npm install

DEVELOPMENT:

npm run dev
  - Starts dev server
  - Usually on http://localhost:5173
  - Hot reload enabled

BUILD:

npm run build
  - Creates dist/ folder
  - Optimized production build
  - Can be deployed

PREVIEW:

npm run preview
  - Preview production build locally


================================================================================
                    PROJECT TEMPLATE STRUCTURE
================================================================================

TYPICAL VITE PROJECT FLOW:

1. index.html loads
2. Executes main.ts
3. Imports modules and styles
4. Manipulates DOM or renders framework
5. Application runs


================================================================================
                    WHEN TO DELETE

This folder can be safely deleted if:
  ✓ Not using vanilla Vite/TypeScript
  ✓ Using frontend/ folder for all development
  ✓ Not needed for reference anymore
  ✓ Cleaning up project structure

Keep this folder if:
  ✓ Using for testing/prototyping
  ✓ Reference for TypeScript setup
  ✓ Planning multi-project monorepo


================================================================================
                    NOTES FOR DEVELOPERS
================================================================================

IGNORE IN PRODUCTION:

This folder should be:
  - Excluded from production deployment
  - Not included in build process
  - Ignored in Docker builds
  - Not documented in main README

CLEANUP:

If not using:
  1. Delete vite-project/ folder
  2. Update .gitignore if needed
  3. Update documentation

DOCUMENTATION:

Only document if:
  - Actually using this project
  - It's part of monorepo
  - Serves specific purpose


================================================================================
                    REFERENCE ONLY
================================================================================

This documentation is provided for reference purposes only. The actual
PESUNav Hub application development should use the frontend/ folder.

See PROJECT_DOCUMENTATION.md and frontend/DOCUMENTATION.md for the
actual application structure and development guidelines.


================================================================================
                    END OF VITE PROJECT DOCUMENTATION
================================================================================
*/
