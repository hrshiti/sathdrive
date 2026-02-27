# SOP: Booking Form with Map (Places) + Form POST API – New Page

Yeh SOP follow karke aap kisi **nayi page** par same functionality implement kar sakte ho: **location suggestions (Google Places)** + **form submit (POST API)**. Nayi page ke liye **alag map API key** aur **alag form POST API** use ho sakte hain.

---

## Prerequisites (Pehle yeh fix karo)

| Item | Detail |
|------|--------|
| **New page name / route** | e.g. `OtherBooking.jsx` ya jo bhi page |
| **Map API key** | Us page ke liye Google Maps API key (Places enabled) |
| **Form POST API** | Full URL ya base URL + path, method (POST), body type (FormData/JSON) |
| **API field names** | Exact form field names jo backend expect karta hai (e.g. `pickup_location`, `pickup_lat`, …) |
| **Date format (if any)** | e.g. DD-MM-YYYY ya YYYY-MM-DD |

Reference implementation: **Home** page → `src/pages/Home.jsx`, `src/services/webbookingApi.js`, `src/hooks/useGoogleMapsScript.js`.

---

## Step 1: Environment variables (.env)

1. **Frontend** `.env` file kholo (e.g. `frontend/.env`).
2. **Nayi page ke liye alag keys** add karo taaki same codebase me do alag pages alag map/API use kar saken:

   - **Map (Places) ke liye**  
     Agar nayi page ke liye **alag** map key hai to naya env var add karo, e.g.  
     `VITE_GOOGLE_MAPS_API_KEY_OTHER=your_other_map_key`  
     (Agar same key use karni hai to existing `VITE_GOOGLE_MAPS_API_KEY` hi use karo.)
   - **Form POST API ke liye**  
     Base URL (optional) agar alag backend ho:  
     `VITE_OTHER_BOOKING_API_URL=https://example.com`  
     Aur agar path bhi alag ho to ya to is URL me path include karo ya Step 3 me service me path likhna.

3. `.env` **already** `.gitignore` me hona chahiye (pehle wale implementation me add kiya gaya tha).  
4. **Restart dev server** after changing `.env`.

---

## Step 2: Map script (Google Places) load karna

**Option A – Same map key dono pages ke liye**  
- Koi change nahi. Existing hook **`useGoogleMapsScript`** use karo jo `VITE_GOOGLE_MAPS_API_KEY` use karta hai.

**Option B – Nayi page ke liye alag map key**  
- Ek **naya hook** banao, e.g. `useGoogleMapsScriptOther.js`, jo **apna script ID** aur **apna env key** use kare:
  - Script ID: `google-maps-script-other` (taaki Home wala script conflict na kare).
  - API key: `import.meta.env.VITE_GOOGLE_MAPS_API_KEY_OTHER`.
  - Baaki logic same: script inject karo `https://maps.googleapis.com/maps/api/js?key=...&libraries=places`, `onload` par `setIsLoaded(true)`.
- Nayi page me **is naye hook** ko import karo.

Reference: `src/hooks/useGoogleMapsScript.js`.

---

## Step 3: Form POST API service

1. **Naya service file** banao, e.g. `src/services/otherBookingApi.js`.
2. Usme ek async function banao (e.g. `submitOtherBooking(data)`):
   - **URL**: `import.meta.env.VITE_OTHER_BOOKING_API_URL` + path, ya direct full URL env me.
   - **Method**: POST.
   - **Body**:  
     Agar backend **FormData** expect karta hai (jaise webbooking):  
     `const form = new FormData();`  
     phir API ke hisaab se har field ke liye `form.append(key, value)`.
   - **Headers**: `Accept: 'application/json'` (aur zarurat ho to `Content-Type` mat set karo FormData ke liye; browser set karega).
   - **Response**: `res.ok` check karo, JSON parse karo, error message extract karo (e.g. `json.message` ya `json.error`).
   - Return format same rakho: `{ ok: true, data }` ya `{ ok: false, error: 'message' }`.

3. API ke **exact field names** use karo (jo backend expect karta hai), e.g. `pickup_location`, `pickup_lat`, `pickup_lang`, `dropoff_lat`, `dropoff_lang`, `pickup_date`, `pickup_time`, `name`, `mobile_number` – ya jo bhi us API me ho.

Reference: `src/services/webbookingApi.js`.

---

## Step 4: Page / component structure

### 4.1 Imports

- `useState`, `useRef`, `useEffect` from React.
- Map script hook (Step 2 se – ya `useGoogleMapsScript` ya `useGoogleMapsScriptOther`).
- API service (Step 3 wala function).
- Page-specific components (Header, Footer, etc.).

### 4.2 State (sab required + UI)

- Pickup: `pickupLocation`, `pickupLat`, `pickupLng`.
- Drop: `dropoffLocation`, `dropoffLat`, `dropoffLng`.
- Date/time: `pickupDate`, `pickupTime`.
- User: `name`, `mobileNumber`.
- UI: `isSubmitting`, `submitError`, `submitSuccess` (aur agar modal chahiye to `isModalOpen`).

### 4.3 Refs

- `pickupInputRef`, `dropInputRef` – inhi inputs par Places Autocomplete attach hoga.

### 4.4 Map script + Autocomplete

- Hook call karo: `const { isLoaded: mapsLoaded, error: mapsError } = useGoogleMapsScript();` (ya naye hook ka naam).
- **useEffect** (dependency `[mapsLoaded]`):
  - Condition: `mapsLoaded && window.google?.maps?.places` aur dono refs (`pickupInputRef.current`, `dropInputRef.current`) non-null.
  - `new window.google.maps.places.Autocomplete(inputElement, { types: ['establishment', 'geocode'] })` – pickup aur drop dono inputs ke liye.
  - `place_changed` listener:
    - `getPlace()` se `formatted_address` ya `name` → location state update.
    - `place.geometry.location.lat()` / `.lng()` → lat/lng state update (string me save karo).
  - Cleanup: `window.google.maps.event.clearInstanceListeners(autocomplete)` dono Autocomplete instances par.

### 4.5 Date format (agar API ko DD-MM-YYYY chahiye)

- Input `type="date"` YYYY-MM-DD deta hai.
- Helper: `formatDateForApi(dateStr)` – `dateStr.split('-')` se `[y, m, d]` lo, return `\`${d}-${m}-${y}\``.
- Submit ke time payload me `pickup_date: formatDateForApi(pickupDate)` use karo.

### 4.6 Form and inputs

- **Form**: `onSubmit={handleSubmit}`, `e.preventDefault()` handleSubmit me.
- **Pickup input**: `ref={pickupInputRef}`, `value={pickupLocation}`, `onChange` se `setPickupLocation`, `autoComplete="off"`.
- **Drop input**: same pattern with dropoff state and `dropInputRef`.
- **Date**: `type="date"`, `value={pickupDate}`, `onChange`, optional `min={new Date().toISOString().split('T')[0]}`.
- **Time**: `type="time"`, `value={pickupTime}`, `onChange`.
- **Name**: `type="text"`, controlled state.
- **Mobile**: `type="tel"`, controlled state, optional `maxLength`.

### 4.7 Validation (handleSubmit me)

- Sab required fields check karo: pickup location, drop location, date, time, name, mobile.
- Agar kuch missing to `setSubmitError('...')` karke return.
- Pehle `setSubmitError('')` aur `setSubmitSuccess(false)` karo.

### 4.8 Submit (handleSubmit)

1. Validation (Step 4.7).
2. `setIsSubmitting(true)`.
3. Payload object banao – **keys exactly wahi jo API expect karti hai** (Step 3 me define kiye).
4. API service function call karo (e.g. `submitOtherBooking(payload)`).
5. `setIsSubmitting(false)`.
6. Agar `result.ok`: `setSubmitSuccess(true)`, optional modal open.
7. Agar error: `setSubmitError(result.error || '...')`.

### 4.9 UI feedback

- `mapsError`: agar map script load fail / key missing – message dikhao (e.g. “Location suggestions may not work”).
- `submitError`: form ke niche error message (role="alert").
- `submitSuccess`: success message (role="status").
- Submit button: `disabled={isSubmitting}`, text “Submitting…” / “Book Ride”.

---

## Step 5: Checklist – New page par same functionality

- [ ] .env me nayi page ke liye map API key (ya same key) set hai; agar alag API to base URL bhi set hai.
- [ ] Map script load ho raha hai (same ya naya hook) aur `isLoaded` / `error` use ho raha hai.
- [ ] Pickup/Drop inputs par refs attach hain aur Places Autocomplete `place_changed` se address + lat/lng state me aa rahe hain.
- [ ] Date/time/name/mobile fields hain aur validation submit se pehle ho rahi hai.
- [ ] Payload ke keys backend API ke exact names hain; date format (e.g. DD-MM-YYYY) sahi hai.
- [ ] POST API service (FormData/JSON) sahi URL + body bhej raha hai.
- [ ] Success/error messages dikh rahe hain; button loading state dikh raha hai.

---

## File reference (existing implementation)

| Purpose | File |
|--------|------|
| Map script hook | `src/hooks/useGoogleMapsScript.js` |
| Form POST API | `src/services/webbookingApi.js` |
| Page with form | `src/pages/Home.jsx` (hero form section + state + useEffect + handleSubmit) |
| Env example | `frontend/.env.example` |
| Gitignore | `frontend/.gitignore` (`.env` included) |

---

## Summary flow

1. **Env** → Map API key (and optional API base URL) for the new page.
2. **Hook** → Same `useGoogleMapsScript` (same key) ya naya hook (alag key + alag script ID).
3. **API service** → Naya file, nayi URL, same pattern (FormData + field names + error handling).
4. **Page** → State, refs, useEffect (Autocomplete), form fields, validation, handleSubmit calling new API, success/error UI.

Is SOP ko follow karke aap bina existing Home code change kiye nayi page par same type ki booking form (map suggestions + form POST) achieve kar sakte ho.
