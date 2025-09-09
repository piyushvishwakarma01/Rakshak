import axios from 'axios';

// Define the sensor data interface
export interface SensorData {
  ph: number;
  moisture: number;
  tds: number;
  temperature: number;
}

// Create a dedicated service for ESP8 twice sensor data
class ESPSensorService {
  private api = axios.create({
    baseURL: 'http://localhost:3000/api',
  });

  // Fetch latest sensor data
  async getSensorData(): Promise<SensorData> {
    throw new Error('Sensor functionality coming soon');
  }

  // Start real-time data streaming
  async fetchRealTimeData(
    callback: (data: SensorData) => void,
    interval: number = 1000
  ): Promise<() => void> {
    throw new Error('Sensor functionality coming soon');
  }
}

// Export a singleton instance
export const espSensorService = new ESPSensorService();