"use client";

import { test, expect } from "playwright-browser-unit/browser"

test("workers available", () => {
  expect(typeof Worker !== "undefined").toBe(true);
})

export default function Home() {
  return (
    <main>
      Test page
    </main>
  );
}
