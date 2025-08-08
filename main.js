/**
 * This script demonstrates the usage of the generateId function from the idGenerator module.
 * It shows how to generate unique IDs with different parameters.
 */
// Import the generateId function from the idGenerator module
import { generateId } from "./idGenerator.js";

// Generate a default ID (using default parameters)
console.log(generateId());
// Generate an 8-character ID (using default character set)
console.log(generateId(8));
// Generate an 8-character ID using only numeric characters
console.log(generateId(8, "1234567890"));
// Generate an 8-character ID using numeric characters with a "Demo_" prefix
console.log(generateId(8, "1234567890", "Demo_"));
// Generate a default-length ID using default character set with a "Demo_" prefix
console.log(generateId(undefined, undefined, "Demo_"));
