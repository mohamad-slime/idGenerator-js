/**
 * Generates a unique ID.
 * @param {number} length - The length of the ID.
 * @param {string} chars - The characters to use in the ID.
 * @param {string} prefix - The prefix for the ID.
 * @returns {string} A unique ID.
 */

export function generateId(
  length = 6,
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" ??
    "",
  prefix = "",
) {
  let id = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
  }
  return prefix + id;
}
