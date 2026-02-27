export type WebBookingEnquiryPayload = {
  pickup_location: string;
  pickup_lat?: number | null;
  pickup_lng?: number | null;
  drop_location: string;
  drop_lat?: number | null;
  drop_lng?: number | null;
  distance?: number | null;
  pickup_date: string;
  pickup_time: string;
  name: string;
  mobile_number: string;
  ride_for: 'city' | 'rental' | 'outstation' | 'airport';
};

type WebBookingSuccess = {
  ok: true;
  data: any;
};

type WebBookingFailure = {
  ok: false;
  error: string;
};

export type WebBookingResult = WebBookingSuccess | WebBookingFailure;

// Vite-style typing for env; narrow to the key we care about.
const API_URL = (import.meta as any).env
  ?.VITE_WEB_BOOKING_API_URL as string | undefined;

export async function submitWebBookingEnquiry(
  payload: WebBookingEnquiryPayload,
): Promise<WebBookingResult> {
  if (!API_URL) {
    return {
      ok: false,
      error: 'Booking API URL is not configured.',
    };
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const rawText = await response.text();
    let json: any = null;

    if (rawText) {
      try {
        json = JSON.parse(rawText);
      } catch {
        // Non-JSON response – ignore, we'll handle based on status code.
      }
    }

    if (!response.ok) {
      const message =
        (json && (json.message || json.error || json.detail)) ||
        `Request failed with status ${response.status}`;

      return {
        ok: false,
        error: message,
      };
    }

    return {
      ok: true,
      data: json ?? {},
    };
  } catch (error: any) {
    return {
      ok: false,
      error:
        error?.message ||
        'Unable to submit booking enquiry. Please check your connection and try again.',
    };
  }
}

