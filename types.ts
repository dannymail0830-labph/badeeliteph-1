export interface DrugItem {
  id: string;
  code: string;       // 藥品代碼
  quantity: number;   // 數量
  unit: string;       // 單位
  expiryDate: string; // 效期 (ISO format YYYY-MM-DD)
  importDate?: string; // 進貨日期
  sourceSheet?: string; // Which sheet it came from
}

export enum FilterType {
  ALL = 'ALL',
  TODAY_INTAKE = 'TODAY_INTAKE',
  NEAR_EXPIRY = 'NEAR_EXPIRY',
  STOCK = 'STOCK'
}

export interface DashboardStats {
  todayIntakeCount: number;
  nearExpiryCount: number;
  totalStockCount: number;
}

export type DataSourceMode = 'LOCAL' | 'REMOTE';

export interface AppSettings {
  mode: DataSourceMode;
  remoteUrl: string;
  lastSyncTime?: string;
  expiryThresholdDays: number; // Configurable threshold
}

// Default threshold for "Near Expiry" (e.g., 180 days)
export const DEFAULT_EXPIRY_THRESHOLD = 180;