# AGENTS.md

## Purpose
This file tells coding agents how to operate in this repository.

## Repository Snapshot
- TypeScript script project with one entry script: `script.ts`
- Runtime launcher: `tsx`
- Type checking via `typescript`
- Node typings enabled in `tsconfig.json`

## How To Run
- Install deps: `npm install`
- Run script: `npm run start -- <username> <password> <securityCode>`
- Type-check only: `npx tsc --noEmit`

## Agent Working Rules
1. Make the smallest possible change for the user request.
2. Keep existing behavior unless explicitly asked to change it.
3. Do not edit dependency lockfiles unless dependency changes are requested.
4. Preserve strict TypeScript compatibility.
5. After code edits, run `npx tsc --noEmit` to verify no type errors.
6. If behavior changes, run a representative command with `npm run start -- ...`.
7. Never hardcode secrets from real systems.
8. Ask before introducing new dependencies.

## Style Guidelines
- Prefer clear, explicit variable names over short abbreviations.
- Keep messages user-readable and specific.
- Avoid broad refactors in this repository unless requested.

## Output Expectations
When finishing a task, agents should report:
- What files were changed
- What behavior changed
- What validation commands were run
- Any remaining risks or assumptions
