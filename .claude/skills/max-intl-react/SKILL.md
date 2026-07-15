```markdown
# max-intl-react Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `max-intl-react` repository. The codebase is written in TypeScript and is framework-agnostic, focusing on modular, maintainable code with clear naming and import/export practices. The repository uses a freeform commit style and includes tests with a `.test.` file pattern.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `myComponent.ts`, `intlProvider.tsx`

### Import Style
- Use **relative imports** for referencing modules within the project.
  - Example:
    ```typescript
    import { formatMessage } from './intlUtils';
    ```

### Export Style
- Use **named exports** for all modules.
  - Example:
    ```typescript
    // In intlUtils.ts
    export function formatMessage(...) { ... }
    ```

### Commit Messages
- Freeform, no strict prefixing.
- Average commit message length: ~36 characters.
  - Example: `add locale switching support`

## Workflows

### Add a New Utility Module
**Trigger:** When you need to create a new reusable utility.
**Command:** `/add-utility-module`

1. Create a new file using camelCase naming, e.g., `dateFormatter.ts`.
2. Implement your utility function(s).
3. Export all functions using named exports.
    ```typescript
    export function formatDate(date: Date): string { ... }
    ```
4. Import the utility in other modules using a relative path.
    ```typescript
    import { formatDate } from './dateFormatter';
    ```

### Write and Run Tests
**Trigger:** When adding new features or fixing bugs.
**Command:** `/run-tests`

1. Create a test file alongside the module, following the `*.test.*` pattern, e.g., `intlProvider.test.ts`.
2. Write your tests using the project's preferred (unknown) testing framework.
3. Run the tests using the project's test runner (check project scripts or documentation).

### Update an Existing Module
**Trigger:** When modifying or extending existing functionality.
**Command:** `/update-module`

1. Locate the module file (camelCase).
2. Make your changes, ensuring you use named exports.
3. Update or add corresponding test cases in the `*.test.*` file.
4. Commit your changes with a clear, concise message.

## Testing Patterns

- Test files follow the `*.test.*` naming convention (e.g., `intlProvider.test.ts`).
- The specific testing framework is unknown, but tests are colocated with source files.
- Tests should cover all exported functions and components.

## Commands

| Command              | Purpose                                      |
|----------------------|----------------------------------------------|
| /add-utility-module  | Scaffold a new utility module                |
| /run-tests           | Run all test suites                          |
| /update-module       | Update an existing module and its tests      |
```
