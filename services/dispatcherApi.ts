export type ListPackagesPayload = {
  pick_lat: number;
  pick_lng: number;
  transport_type: string;
};

export interface RentalTypeWithPrice {
  zone_type_id: string;
  type_id: string;
  name: string;
  icon: string;
  capacity: number;
  currency: string;
  unit: number;
  unit_in_words: string;
  distance_price_per_km: string;
  time_price_per_min: string;
  free_distance: string;
  free_min: string;
  payment_type: string;
  fare_amount: number;
  description: string;
  short_description: string;
  supported_vehicles: string | null;
  is_default: boolean;
  discounted_total: number;
  has_discount: boolean;
  promocode_id: string | null;
  user_wallet_balance: number;
  preference: any[];
  preference_price_total: number;
  total: number;
}

export interface RentalPackage {
  id: number;
  package_name: string;
  description: string;
  short_description: string;
  user_wallet_balance: number;
  currency: string;
  currency_name: string;
  max_price: number;
  min_price: number;
  typesWithPrice: {
    data: RentalTypeWithPrice[];
  };
}

export interface ListPackagesApiResponse {
  success: boolean;
  message: string;
  data: RentalPackage[];
}

export type ListPackagesResult =
  | { ok: true; data: ListPackagesApiResponse }
  | { ok: false; error: string };

export type EtaPayload = {
  pick_lat: number;
  pick_lng: number;
  drop_lat: number;
  drop_lng: number;
  transport_type: string;
};

export interface EtaVehicle {
  type_id?: string;
  id?: string | number;
  name?: string;
  icon?: string;
  capacity?: number;
  total?: number;
  currency?: string;
  [key: string]: any;
}

export interface EtaApiResponse {
  success: boolean;
  message: string;
  data: EtaVehicle[];
}

export type EtaResult =
  | { ok: true; data: EtaApiResponse }
  | { ok: false; error: string };

const DISPATCHER_BASE =
  (import.meta as any).env?.VITE_DISPATCHER_API_URL as string | undefined;

export async function listPackages(
  payload: ListPackagesPayload,
): Promise<ListPackagesResult> {
  const url = `https://admin.saathidrive.com/api/v1/dispatcher/request/list_packages`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const rawText = await response.text();
    let json: unknown = null;

    if (rawText) {
      try {
        json = JSON.parse(rawText);
      } catch {
        // Non-JSON response
      }
    }

    if (!response.ok) {
      const message =
        (json &&
          typeof json === 'object' &&
          'message' in json &&
          typeof (json as any).message === 'string') ||
        (json &&
          typeof json === 'object' &&
          'error' in json &&
          typeof (json as any).error === 'string') ||
        (json &&
          typeof json === 'object' &&
          'detail' in json &&
          typeof (json as any).detail === 'string') ||
        `Request failed with status ${response.status}`;

      return {
        ok: false,
        error: typeof message === 'string' ? message : 'Request failed',
      };
    }

    return {
      ok: true,
      data: (json ?? {}) as ListPackagesApiResponse,
    };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Unknown error';
    return {
      ok: false,
      error:
        message ||
        'Unable to fetch packages. Please check your connection and try again.',
    };
  }
}

export async function getEtaVehicles(
  payload: EtaPayload,
): Promise<EtaResult> {
  const url = `https://admin.saathidrive.com/api/v1/dispatcher/request/eta-public`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const rawText = await response.text();
    let json: unknown = null;

    if (rawText) {
      try {
        json = JSON.parse(rawText);
      } catch {
        // Non-JSON response
      }
    }

    if (!response.ok) {
      const message =
        (json &&
          typeof json === 'object' &&
          'message' in json &&
          typeof (json as any).message === 'string') ||
        (json &&
          typeof json === 'object' &&
          'error' in json &&
          typeof (json as any).error === 'string') ||
        (json &&
          typeof json === 'object' &&
          'detail' in json &&
          typeof (json as any).detail === 'string') ||
        `Request failed with status ${response.status}`;

      return {
        ok: false,
        error: typeof message === 'string' ? message : 'Request failed',
      };
    }

    return {
      ok: true,
      data: (json ?? {}) as EtaApiResponse,
    };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Unknown error';
    return {
      ok: false,
      error:
        message ||
        'Unable to fetch vehicles. Please check your connection and try again.',
    };
  }
}
