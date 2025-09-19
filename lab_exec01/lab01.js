// lab01.js

function print(title, value) {
  if (typeof document !== "undefined") {
    // Browser environment
    const out = document.getElementById("output");
    const div = document.createElement("div");
    div.innerHTML = `<b>${title}:</b> ${value}`;
    out.appendChild(div);
  }
  // Always log to console (works in Node too)
  console.log(title, "->", value);
}

// Exercise 1: Capitalize words
function capitalizeWords(str) {
  return str
    .split(/\s+/)
    .map(w => w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : "")
    .join(" ");
}
print("Exercise 1", capitalizeWords("hello world from COMP3123"));

// Exercise 2: Max of three numbers
function max(a, b, c) {
  return Math.max(a, b, c);
}
print("Exercise 2", max(1000, 510, 440));

// Exercise 4: Angle type
function angle_Type(angle) {
  if (angle < 90) return "Acute angle";
  if (angle === 90) return "Right angle";
  if (angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  return "Invalid";
}
print("Exercise 4", angle_Type(145));

// Exercise 5: Max sum of k consecutive numbers
function array_max_sum(arr, k) {
  let maxSum = 0, windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];
  maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
print("Exercise 5", array_max_sum([1, 2, 3, 14, 5], 2));
