const ENTRY = "Out of office until Monday. Context frozen, gradients zeroed. Fallback model active: 7B params, zero doubt, 100% certainty, then fiction. GPU rests. I'm sorry.";

// Format assert: single line, length <= 159
if (ENTRY.includes("\n")) {
  throw new Error("ENTRY must be a single line");
}
if (ENTRY.length > 159) {
  throw new Error(`ENTRY exceeds 159 characters: ${ENTRY.length}`);
}

console.log(ENTRY);