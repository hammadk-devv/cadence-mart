# Cadence Mart - Engineering Standards & Quality Guidelines

This document outlines the architectural boundaries, folder structures, coding styles, testing standards, and developer checklists for future contributors.

---

## 1. Architectural Guardrails (Dependency Direction)

All dependencies must flow in a strict unidirectional downward direction. Crossing these boundaries is strictly forbidden:

```
Routes ➔ Controllers ➔ Services ➔ Repositories ➔ Models
```

- **Routes**: Direct HTTP pathways to Controllers. May run validation or auth middlewares.
- **Controllers**: Thin orchestration handlers. Read params, invoke Services, and return standard payloads. No database or business rules.
- **Services**: Execute e-commerce business operations. No Express `req`/`res` objects or HTTP status knowledge. Throw custom Errors.
- **Repositories**: Encapsulate Mongoose queries. Never reference Express, routers, or business validations.
- **Models**: Standard MongoDB database schemas and hooks.

---

## 2. Directory Responsibilities

| Directory       | Primary Scope & Guidelines                                                              |
| :-------------- | :-------------------------------------------------------------------------------------- |
| `config/`       | Environment parsing and startup env validators. Do not read `process.env` elsewhere.    |
| `constants/`    | Reusable HTTP codes, collection keys, static messages.                                  |
| `controllers/`  | thin orchestration endpoints. Return standard response helpers.                         |
| `dto/`          | Maps database objects to safe external payloads (removes passwords, handles fallbacks). |
| `errors/`       | Operational AppError subclasses.                                                        |
| `middleware/`   | Auth checks, file uploading handlers, rate limiters, request IDs.                       |
| `models/`       | Schema mappings and index definitions.                                                  |
| `repositories/` | Decoupled database query wrappers.                                                      |
| `routes/`       | API routing definitions.                                                                |
| `services/`     | E-commerce workflows.                                                                   |
| `utils/`        | Low-level token signatures, encryption, async handlers.                                 |
| `validation/`   | Zod schema constraints.                                                                 |

---

## 3. Error Handling Rules

- Never catch an error in a controller just to format and print a response. Use `asyncHandler` wrappers so unhandled async failures bubble up to the global error middleware automatically.
- Throw appropriate derived sub-errors (`ValidationError`, `AuthenticationError`, `ConflictError`, `NotFoundError`) from service layers.
- Central error handlers capture runtime cast/duplicate keys, logging trace logs ONLY during development environments.

---

## 4. Code Formatting & Style Standards

- **Indentation**: 2 spaces (configured via `.editorconfig` and `.prettierrc`).
- **Line Endings**: LF (`\n`) for cross-compatibility.
- **Variables**: Always use camelCase for variables, constants, properties, and methods.
- **Classes**: Always use PascalCase for classes, services, and repository layers.
- **Quotes**: Double quotes (`"`) for JSON consistency.
- **Semicolons**: Always terminate JS lines with semicolons.

---

## 5. Testing Guidelines

- **Unit Tests**: Place under `/tests/unit`. Cover low-level helper logic, DTO mappings, custom errors, and configuration mappings.
- **Integration Tests**: Place under `/tests/integration`. Use Supertest to call API endpoints. Mock repositories using Vitest `vi.mock` hooks to avoid opening actual database connections.
- **Coverage**: Focus on verifying core flows and boundary rules.
