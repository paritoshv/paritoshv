// Recomputes years of experience since 3 July 2023 and rewrites the
// <!-- yoe:start -->…<!-- yoe:end --> span in README.md as "years.months".
const fs = require("fs");

const START = { year: 2023, month: 6, day: 3 }; // month is 0-indexed: 6 = July
const now = new Date();

let months =
  (now.getUTCFullYear() - START.year) * 12 + (now.getUTCMonth() - START.month);
if (now.getUTCDate() < START.day) months -= 1;

const years = Math.floor(months / 12);
const label = `${years}.${months % 12} years`;

const file = "README.md";
const before = fs.readFileSync(file, "utf8");
const after = before.replace(
  /(<!-- yoe:start -->)[\s\S]*?(<!-- yoe:end -->)/,
  `$1${label}$2`,
);

if (after !== before) {
  fs.writeFileSync(file, after);
  console.log(`updated to ${label}`);
} else {
  console.log(`already ${label}`);
}
