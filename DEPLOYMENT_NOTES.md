# Saathi Drive - Deployment Notes

## ✅ Issues Fixed

### 1. Vite Host Blocking Error
**Problem:** "This host is not allowed" error when accessing via sandbox URL

**Solution:** Updated `vite.config.ts` to allow all hosts:
```typescript
server: {
  port: 3000,
  host: '0.0.0.0',
  allowedHosts: ['all'], // Allow all hosts including sandbox URLs
  hmr: {
    clientPort: 3000
  }
}
```

### 2. GEMINI_API_KEY Question
**Answer:** The GEMINI_API_KEY is **NOT actually used** in the application.

**Details:**
- It's configured in `vite.config.ts` as `process.env.GEMINI_API_KEY`
- However, no component in the codebase makes any API calls to Gemini
- The app is a purely static React frontend with no backend integration
- The images use `googleusercontent.com/aida-public` URLs (Google AI Studio generated)
- The API key was likely included as a template/boilerplate from AI Studio export

**Recommendation:** 
- The `.env.local` file with `GEMINI_API_KEY=PLACEHOLDER_API_KEY` can be safely ignored
- If you want to add AI features later (like chatbot, smart booking, etc.), you can use the key
- For now, the app works perfectly without it

## Application Architecture

### Current State
- **Type:** Pure static React SPA (Single Page Application)
- **No Backend:** No API calls, no database, no server-side logic
- **Routing:** Client-side only with HashRouter
- **Data:** All content is hardcoded in the components

### Pages & Features
1. **Home** - Hero section, booking widget (UI only), service cards
2. **About** - Company information, mission, values
3. **Partner** - Driver/partner signup information
4. **Support** - Customer support and FAQ

### Technology Stack
- React 19.2.4 with TypeScript
- React Router DOM 6.22.3 (HashRouter)
- Vite 6.2.0 (build tool)
- TailwindCSS via CDN
- Material Symbols icons
- Google Fonts (Inter)

## Running the Application

### Development Mode
```bash
# Using PM2 (recommended for sandbox)
cd /home/user/webapp
pm2 start ecosystem.config.cjs
pm2 logs saathi-drive --nostream

# Direct (blocks terminal)
cd /home/user/webapp
npm run dev
```

### Production Build
```bash
cd /home/user/webapp
npm run build
npm run preview
```

## Access URLs
- **Sandbox URL:** https://3000-i9779zy4crbk9vr49n0ci-a402f90a.sandbox.novita.ai
- **Local:** http://localhost:3000
- **Original AI Studio:** https://ai.studio/apps/drive/1DtJSg03NndQWiVQzw7VABw8-ynquMfM3

## Future Enhancement Ideas

If you want to make this a functional booking app, you would need to add:

1. **Backend API** (Hono on Cloudflare Workers recommended)
   - User authentication
   - Booking system endpoints
   - Payment processing
   
2. **Database** (Cloudflare D1 recommended)
   - Users table
   - Bookings table
   - Drivers/vehicles table
   
3. **Real-time Features**
   - Live location tracking
   - Driver assignment
   - Ride status updates

4. **Payment Integration**
   - Stripe/Razorpay/PayPal API
   - Wallet system
   
5. **AI Features** (this is where GEMINI_API_KEY would be used)
   - Smart route optimization
   - Chatbot for customer support
   - Fare prediction
   - Demand forecasting

## Git Repository
```bash
# Current commits
git log --oneline

# 51d80f0 Fix Vite config to allow sandbox hosts
# d2d9337 Add PM2 configuration and update README with deployment info
# d374476 Initial commit: Saathi Drive app
```

## Status
✅ **Fully Functional** - All pages load correctly, routing works, UI is responsive
⚠️ **Note:** Booking widgets are UI-only (no backend integration yet)
