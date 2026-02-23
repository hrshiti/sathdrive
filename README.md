# Saathi Drive

**Bangalore's Premier Commute Partner**

## Project Overview
- **Name**: Saathi Drive
- **Goal**: Modern, professional commute and transportation service platform for Bangalore
- **Features**: Multi-page React application with routing, responsive design, and premium UI/UX

## 🚀 Live Application
- **Sandbox URL**: https://3000-i9779zy4crbk9vr49n0ci-a402f90a.sandbox.novita.ai
- **Status**: ✅ **FULLY WORKING** - All host blocking issues resolved
- **Original AI Studio**: https://ai.studio/apps/drive/1DtJSg03NndQWiVQzw7VABw8-ynquMfM3

## 📦 Tech Stack
- **Frontend**: React 19.2.4 with TypeScript
- **Router**: React Router DOM 6.22.3
- **Build Tool**: Vite 6.2.0
- **Styling**: TailwindCSS (via CDN), Google Fonts (Inter), Material Symbols
- **Development**: PM2 for process management

## 🎨 Application Structure
- **Home Page** (`/`) - Main landing page with hero section and service overview
- **About Page** (`/about`) - Company information and mission
- **Partner Page** (`/partner`) - Partnership and driver opportunities
- **Support Page** (`/support`) - Customer support and help center

## 🗂️ Data Architecture
- **Type**: Static React SPA (Single Page Application)
- **Routing**: Client-side routing with HashRouter
- **Components**: 
  - Navbar - Navigation component
  - Footer - Footer component
  - Pages - Home, About, Partner, Support

## 💻 Local Development

**Prerequisites**: Node.js 16+ and npm

**Setup & Run:**
```bash
# Install dependencies
npm install

# Set your Gemini API key (optional - for AI features)
# Edit .env.local and add your GEMINI_API_KEY

# Start development server
npm run dev

# Or use PM2 for production-like environment
pm2 start ecosystem.config.cjs
pm2 logs saathi-drive --nostream
```

**Build:**
```bash
npm run build
npm run preview
```

## 📝 User Guide
1. Navigate to the application URL
2. Use the top navigation bar to explore different sections
3. **Home** - View services and features
4. **About** - Learn about Saathi Drive's mission
5. **Partner** - Explore partnership opportunities
6. **Support** - Get help and customer support

## 🔧 Development Commands
```bash
# Clean port 3000
fuser -k 3000/tcp 2>/dev/null || true

# Start with PM2
cd /home/user/webapp && pm2 start ecosystem.config.cjs

# Check logs
pm2 logs saathi-drive --nostream

# Stop application
pm2 delete saathi-drive
```

## 🌐 Deployment Status
- **Platform**: Vite Development Server (via PM2)
- **Status**: ✅ Active and Running
- **Port**: 3000
- **Environment**: Sandbox Development
- **Last Updated**: February 15, 2026

## 📋 Current Features
- ✅ Responsive navigation with mobile menu support
- ✅ Multi-page routing (Home, About, Partner, Support)
- ✅ Premium UI with custom Tailwind configuration
- ✅ Glass-morphism effects and gradient designs
- ✅ Material Symbols icons integration
- ✅ Footer with social links and company information
- ✅ Loading state handling
- ✅ Error boundary and diagnostic tools

## 🚧 Future Enhancements
- [ ] Backend API integration for booking system
- [ ] User authentication and profiles
- [ ] Real-time ride tracking
- [ ] Payment gateway integration
- [ ] Admin dashboard for fleet management
- [ ] Driver app companion
- [ ] Analytics and reporting

## 📄 License
Private - Saathi Drive Project
