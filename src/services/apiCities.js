import { api } from "../data/api";

/**
 * Generic API request handler
 * @param {string} method - HTTP method (get, post, delete, patch)
 * @param {string} url - API endpoint
 * @param {object} [data=null] - Request body (optional)
 * @returns {Promise<any>}
 */

export async function apiRequest(method, url, data = null) {
  console.log(data, "data in apiRequest");
  try {
    const res = await api[method](url, data);
    return res.data;
  } catch (error) {
    console.error(`Error in ${method.toUpperCase()} ${url}:`, error);
    throw error.response || new Error("Unknown error occurred");
  }
}
