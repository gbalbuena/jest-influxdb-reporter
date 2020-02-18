module.exports = {
  reporters: [
    "default",
    ["<rootDir>/debug-reporter.js", { banana: "yes", pineapple: "no" }]
  ]
}