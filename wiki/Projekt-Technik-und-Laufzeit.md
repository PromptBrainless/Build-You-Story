# Technik und Laufzeit

## Start und Build

```bash
npm install
npm run dev
npm run typecheck
npm run check:knowledge
npm run build:dev
npm test
```

Die Entwicklungsseite läuft standardmäßig auf Port 8080. Die Scripts stehen in [package.json](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/package.json).

## Anwendungsschale

- [src/router.tsx](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/router.tsx) – TanStack-Router-Erzeugung.
- [src/routes/__root.tsx](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/routes/__root.tsx) – Dokumenthülle.
- [src/routes/index.tsx](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/routes/index.tsx) – Hauptseite.
- [src/routes/editor.tsx](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/routes/editor.tsx) – Editorroute.
- [src/routeTree.gen.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/routeTree.gen.ts) – generierter Routencode.
- [src/styles.css](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/styles.css) – globale Darstellung.
- [vite.config.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/vite.config.ts) – Vite/Nitro-Konfiguration.
- [tsconfig.json](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/tsconfig.json) – TypeScript-Konfiguration.

## Daten, Authentifizierung und Migrationen

- [src/lib/db.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/lib/db.ts) – Datenbankzugriff.
- [src/lib/env.server.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/lib/env.server.ts) – Serverumgebung.
- [src/lib/auth](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/tree/main/src/lib/auth) – Authentifizierung, Gate-Identität und Session.
- [src/lib/app-data](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/tree/main/src/lib/app-data) – Connector- und Bereitstellungsdaten.
- [migrations/auth/0001_auth.sql](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/migrations/auth/0001_auth.sql) – Auth-Schema.
- [scripts/migrate.mjs](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/scripts/migrate.mjs) – Migrationen.

## Qualitätssicherung

- [scripts/check-szenen.mjs](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/scripts/check-szenen.mjs)
- [scripts/check-prosa.mjs](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/scripts/check-prosa.mjs)
- [scripts/check-lore.mjs](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/scripts/check-lore.mjs)
- [scripts/check-textvergleich.mjs](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/scripts/check-textvergleich.mjs)
- [scripts/check-questreihe.mjs](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/scripts/check-questreihe.mjs)
- [scripts/check-systemsteuerung.mjs](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/scripts/check-systemsteuerung.mjs)
- [docs/regression-checklist.md](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/docs/regression-checklist.md)
