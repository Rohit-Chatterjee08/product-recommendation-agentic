# 🤖 Multi-Agent Product Recommendation System (MAPR)

A sophisticated agentic AI system that provides personalized product recommendations through a multi-agent architecture. This project includes both a **standalone Python implementation** with a complete MAPR system simulation and a **full-stack web application** for real-world deployment.

## 🎯 Project Overview

This repository contains two distinct but related implementations:

1. **Standalone Python MAPR System** (`mapr_system.py`) - A complete simulation of the multi-agent recommendation engine
2. **Full-Stack Web Application** - A production-ready system with backend API and frontend interface

## 🏗️ Architecture

### Multi-Agent Architecture (MAPR)
The system employs four specialized agents:

- **🔍 Browsing Agent**: Analyzes user profiles and generates initial recommendations using hybrid filtering
- **❓ Questioning Agent**: Generates clarifying questions to refine recommendations
- **✅ Finalizer Agent**: Creates final recommendations with cross-sell, upsell, and bundling options
- **🎭 Coordinator Agent**: Orchestrates the entire multi-agent workflow

### Tech Stack
- **Backend**: Node.js, Express.js, TypeScript, MongoDB Atlas
- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **AI/ML**: Multiple recommendation algorithms (collaborative, content-based, hybrid)
- **MCP Server**: Model Context Protocol for agent orchestration
- **Authentication**: JWT-based authentication
- **Deployment**: Vercel (frontend), Render/Heroku (backend)

## 🚀 Quick Start

### Option 1: Run Standalone Python Demo

```bash
# Run the complete MAPR system simulation
python mapr_system.py
```

This will demonstrate the full multi-agent workflow with sample users and show:
- Personalized product recommendations
- Dynamic question generation
- Cross-sell and upsell suggestions
- Bundle offers with pricing
- Performance metrics

### Option 2: Full-Stack Application

#### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB Atlas account (free tier)

#### Backend Setup

```bash
cd backend
npm install

# Copy environment file and configure
cp .env.example .env
# Edit .env with your MongoDB URI and other secrets

npm run dev
```

#### Frontend Setup

```bash
cd frontend
npm install

# Copy environment file and configure
cp .env.example .env.local
# Set NEXT_PUBLIC_API_URL to your backend URL

npm run dev
```

## 📁 Project Structure

```
product-recommendation-agentic/
├── mapr_system.py                 # 🎯 Standalone MAPR implementation
├── backend/                       # 🖥️ Backend API
│   ├── src/
│   │   ├── agents/               # Agent implementations
│   │   │   ├── plannerAgent.ts
│   │   │   ├── researchAgent.ts
│   │   │   └── executionAgent.ts
│   │   ├── mcp/                  # MCP Server setup
│   │   ├── models/               # Database models
│   │   ├── routes/               # API routes
│   │   ├── types/                # TypeScript definitions
│   │   ├── utils/                # Utilities
│   │   └── app.ts                # Main application
│   ├── package.json
│   └── tsconfig.json
├── frontend/                      # 🌐 Frontend application
│   ├── src/
│   │   ├── components/           # React components
│   │   ├── pages/                # Next.js pages
│   │   ├── styles/               # Styling
│   │   └── utils/                # Frontend utilities
│   ├── package.json
│   └── next.config.js
├── README.md                      # 📖 This file
└── .gitignore                     # Git ignore patterns
```

## 🎮 Features

### Core Functionality
- **🎯 Personalized Recommendations**: AI-driven product matching based on user profiles
- **🤖 Multi-Agent Workflow**: Specialized agents for different aspects of recommendation
- **❓ Dynamic Questioning**: Intelligent question generation for preference refinement
- **💰 Smart Pricing**: Bundle creation with dynamic pricing and savings calculation
- **🛒 Cart Integration**: Seamless cart preview with tax and shipping estimates
- **📊 Analytics**: Performance metrics and recommendation confidence scoring

### Advanced Features
- **🔄 Hybrid Filtering**: Combines collaborative and content-based filtering
- **🎁 Cross-sell & Upsell**: Intelligent product suggestions for increased value
- **📦 Bundle Offers**: Dynamic bundle creation with automatic discounts
- **🎭 User Personas**: Age and preference-based recommendation personalization
- **💳 Payment Options**: Multiple payment methods including financing
- **📱 Responsive Design**: Mobile-first frontend design

## 🛠️ Configuration

### Backend Environment Variables

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your-jwt-secret-key
OPENAI_API_KEY=your-openai-key (optional)
GEMINI_API_KEY=your-gemini-key (optional)
```

### Frontend Environment Variables

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 🧪 Testing the System

### Python Demo
The standalone Python system includes three sample users with different profiles:

- **Alex Chen** (28): Gaming and technology enthusiast with $200-$800 budget
- **Sarah Johnson** (45): Home and convenience focused with $50-$300 budget  
- **Mike Rodriguez** (35): Fitness and health oriented with $100-$500 budget

Each demo shows the complete MAPR workflow with realistic recommendations.

### Web Application
1. Register/Login through the web interface
2. Access the Agent Dashboard
3. Select agent type (Research, Planner, Execution)
4. Submit tasks and view results

## 📈 Performance Metrics

The system tracks several metrics:
- **Recommendation Confidence**: AI confidence in suggestions (typically 85-95%)
- **User Engagement Score**: Interaction quality measurement
- **Conversion Probability**: Likelihood of purchase completion
- **Session Efficiency**: Agent interaction optimization

## 🚀 Deployment

### Backend Deployment (Render/Heroku)

1. Connect your repository to Render/Heroku
2. Set environment variables in the dashboard
3. Deploy from the `backend` directory

### Frontend Deployment (Vercel)

1. Connect your repository to Vercel
2. Set the root directory to `frontend`
3. Configure environment variables
4. Deploy automatically on push

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- OpenAI for AI model APIs
- MongoDB Atlas for database hosting
- Vercel and Render for deployment platforms
- The open-source community for amazing tools and libraries

---

**Ready to revolutionize e-commerce with AI-powered recommendations? 🛒✨**
