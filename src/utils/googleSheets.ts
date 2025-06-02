// Google Sheets API configuration
const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbzhShS2yclXZR1Smhy6X60TmcPda72ADqzJ252MiFA1TlbS6k8Qms5-cKZ8mQPu9VEDtQ/exec';

export interface SubscriptionData {
  email: string;
  timestamp: string;
  source: string;
}

export const saveToGoogleSheets = async (data: SubscriptionData): Promise<boolean> => {
  try {
    const response = await fetch(GOOGLE_SHEETS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      mode: 'no-cors'
    });

    return true;
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    return false;
  }
}; 