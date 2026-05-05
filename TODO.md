# TODO

## Step 1: Confirm issue source
- [x] Search for `@import url('https://...')` occurrences in CSS
- [x] Read `frontend/src/index.css` to locate Tailwind directive ordering issue

## Step 2: Fix CSS ordering
- [ ] Move the Google Fonts `@import` so it appears before any `@tailwind` directives

## Step 3: Validate build
- [ ] Run the frontend build/dev command to ensure Vite CSS compilation error is gone
