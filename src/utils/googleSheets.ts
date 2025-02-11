import type { RegistrationFormData } from '../types';

const SHEETDB_API_URL = import.meta.env.VITE_SHEETDB_API_URL; // Store the API URL in .env file

if (!SHEETDB_API_URL) {
  throw new Error("Missing SheetDB API URL.");
}

export async function addRegistrationToSheet(data: RegistrationFormData) {
  try {
    console.log(data)
    const response = await fetch(SHEETDB_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, id : "INCREMENT" }), // SheetDB expects a "data" object
    });

    const result = await response.json();

    if (response.ok) {
      console.log("Data successfully added to Google Sheets via SheetDB.");
      return true;
    } else {
      console.error("Error from SheetDB API:", result);
      return false;
    }
  } catch (error) {
    console.error("Error adding registration:", error);
    return false;
  }
}
