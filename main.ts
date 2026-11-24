// One office joke, written to /output/entry.txt.
// Deterministic: a constant string, no random, no clock, no network.
//
// The joke's twist: the classic complaint "this meeting could have been
// an email" is itself sent as an email — and the complaint then triggers
// yet another meeting. The punchline lands because the cure repeats the
// disease: the meeting about the email about the meeting.
import { mkdir, writeFile } from "node:fs/promises";

const OUTPUT_PATH = "/output/entry.txt";

const JOKE =
  "The meeting could have been an email, so I emailed that to everyone \u2014 and got invited to a meeting about it.";

// Guard: the entry must stay exactly one line, so a stray newline in the
// joke would be a bug, not a feature. Fail loudly instead of writing it.
if (JOKE.includes("\n")) {
  throw new Error("joke must be a single line");
}

await mkdir("/output", { recursive: true });
await writeFile(OUTPUT_PATH, JOKE, "utf8");
