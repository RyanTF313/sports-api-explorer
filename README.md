# :basketball: Sports API Explorer

A developer-focused web application for exploring public sports data APIs with a documentation-first, usability-driven experience.

This project is designed to reduce friction for developers learning a new API by providing guardrails, examples, and immediate feedback—inspired by tools like Postman, Swagger UI, and interactive API docs.

## :rocket: Why This Exists

Public APIs are powerful, but their learning curve often includes:

Sparse documentation

Unclear required parameters

Trial-and-error request building

Sports API Explorer addresses these issues by:

Offering predefined, documented endpoints

Generating request forms automatically

Displaying formatted, copy-ready responses

Providing human-readable error feedback

This tool is intended for developers evaluating or learning a sports data API, not for production use.

## :dart: Target Audience

Frontend & full-stack developers

Developer Advocates / DevRel engineers

Engineers evaluating sports data APIs

Anyone learning how REST APIs behave in real time

## :jigsaw: Features

📌 Predefined API endpoints with inline documentation

📝 Auto-generated parameter forms

▶️ One-click request execution

⏳ Loading & empty states

❌ Friendly error handling

📄 Syntax-highlighted JSON responses

📋 Copy-to-clipboard response output

## :brain: Design Principles
Documentation-First UX

Endpoints are defined as configuration, allowing the UI to scale without code changes and ensuring every request is documented by default.

Guardrails Over Freedom

Rather than allowing free-form URLs, the app limits users to supported endpoints to:

Prevent invalid requests

Encourage exploration through examples

Reduce cognitive load

Developer Empathy

Error states, placeholders, and examples are written for humans—not machines.

## :building_construction: Architecture Overview

```
src/
├─ components/
│  ├─ EndpointSelector
│  ├─ EndpointDocs
│  ├─ ParamsForm
│  ├─ ResponseViewer
│  └─ ErrorBanner
├─ config/
│  └─ endpoints.ts
├─ types/
│  └─ api.ts
└─ App.tsx
```

## Endpoint Configuration

Endpoints are defined declaratively:

type ApiEndpoint = {
  id: string;
  name: string;
  description: string;
  method: "GET";
  baseUrl: string;
  path: string;
  params: {
    key: string;
    label: string;
    required: boolean;
    example?: string;
  }[];
};


This approach allows new endpoints to be added without modifying UI logic.

## :hammer_and_wrench: Tech Stack

React

TypeScript

Vite

Tailwind CSS

Fetch API

Prism.js (syntax highlighting for response JSON)

## :globe_with_meridians: API Used

TheSportsDB (Public Sports API)

Free, no authentication required

Read-only endpoints

Real-world sports data

This project uses only public endpoints and performs all requests client-side.

## :crystal_ball: Future Improvements

Request history & sharable URLs

Example curl command generation

Rate-limit awareness

Auth-enabled endpoints

OpenAPI schema ingestion

## :pushpin: Portfolio Summary

Built a developer-focused API exploration tool for public sports data, emphasizing documentation-first UX, guardrails, and usability for technical audiences.

## :pencil: Disclaimer

This project is for educational and demonstration purposes only and is not affiliated with TheSportsDB.