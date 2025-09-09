# GramRakshak - Intelligent Agricultural Assistant

GramRakshak is an intelligent, farmer-centric product designed to empower small-scale agricultural stakeholders with real-time, personalized crop disease detection and advisory services. By combining machine learning, data analytics, and user-friendly interfaces, the solution bridges the gap between traditional farming and modern technology.

## Key Features

### 1. Crop Disease Detection
- **Early Disease Identification**: Detect plant diseases at early stages using advanced ML models
- **Real-time Analysis**: Upload plant images for instant disease detection
- **Detailed Reports**: Get comprehensive disease information and treatment recommendations
- **Preventive Measures**: Receive guidance on disease prevention and management

### 2. Soil Quality Analysis
- **Soil Health Monitoring**: Track soil moisture, pH levels, and fertility
- **Smart Recommendations**: Get crop-specific soil improvement suggestions
- **Fertilizer Optimization**: Receive precise fertilizer recommendations
- **Historical Analysis**: Track soil health trends over time

### 3. Water Quality Management
- **Water Quality Monitoring**: Track pH, turbidity, and temperature
- **Irrigation Optimization**: Smart irrigation recommendations
- **Water Conservation**: Efficient water usage suggestions
- **Quality Alerts**: Get notified about water quality issues

### 4. Crop Advisory Services
- **Crop Selection**: Get recommendations based on soil and climate conditions
- **Growth Monitoring**: Track crop health and growth stages
- **Pest Management**: Receive integrated pest management advice
- **Harvest Planning**: Optimize harvest timing and methods

## Technology Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- Shadcn UI components
- Chart.js for data visualization

### Backend
- Django REST Framework
- TensorFlow for ML models
- PostgreSQL database
- RESTful APIs

### Machine Learning
- Custom-trained models for disease detection
- Soil quality prediction models
- Water quality analysis algorithms
- Crop recommendation systems

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- PostgreSQL
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gramrakshak.git
cd gramrakshak
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
pip install -r requirements.txt
```

4. Set up the database:
```bash
python manage.py migrate
```

5. Start the development servers:
```bash
# Frontend
cd frontend
npm run dev

# Backend
cd backend
python manage.py runserver
```

## Project Structure

```
gramrakshak/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility functions
│   │   └── hooks/          # Custom React hooks
│   └── public/             # Static assets
│
├── backend/                 # Django backend application
│   ├── api/                # API endpoints
│   ├── models/             # ML models
│   ├── utils/              # Utility functions
│   └── requirements.txt    # Python dependencies
│
└── README.md               # Project documentation
```

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Farmers and agricultural experts for their valuable insights
- Open-source community for their contributions
- Research institutions for their agricultural datasets

