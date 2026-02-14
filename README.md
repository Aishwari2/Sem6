# SmartCare AI: ML-Powered Hospital Operations Dashboard

SmartCare AI is an integrated web-based platform designed to monitor and optimize hospital operations in real-time. 
By shifting from reactive management to data-driven prediction, the system aims to reduce overcrowding and improve patient care.

## Key Features
- **Predictive Analytics**: Utilizes Machine Learning to forecast patient inflow and resource requirements.
- **Role-Based Access**: Personalized dashboards for Administrators, Doctors, and Nurses. 
- **Real-Time Monitoring**: Scalable dashboard providing visibility into live hospital KPIs. 
- **Risk Alerts**: Automated alerts for identifying high-risk scenarios and bottlenecks. 
- **Resource Optimization**: Data-driven recommendations for bed and staff allocation.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS, Recharts.
- **Backend**: Python, FastAPI.
- **Machine Learning**: Scikit-learn, Pandas (XGBoost/Regression/Classification).
- **Database**: PostgreSQL / MySQL.

Installation and Setup:

#Frontend Setup<br>
Navigate to the frontend directory: cd frontend<br>
Install dependencies: npm install<br>
Start the development server: npm run dev<br>

#Backend Setup<br>
Navigate to the backend directory: cd backend<br>
Install requirements: pip install -r requirements.txt<br>
Run the API: uvicorn main:app --reload<br>

Contributors<br>
Anjaleena Mahadik<br>
Disha Mhatre<br>
Prajakta Mandhre<br>
Aishwari Tokalwar<br>

College: Terna Engineering College (Affiliated with University of Mumbai)
---

## Project Structure
```text
├── backend/            # FastAPI server & ML models
├── frontend/           # React.js application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Role-based dashboard views
│   │   └── services/   # API integration
└── data/               # Datasets for ML training
