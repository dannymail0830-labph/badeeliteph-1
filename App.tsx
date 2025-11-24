import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { InventoryProvider } from './context/InventoryContext';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { DetailList } from './pages/DetailList';
import { Settings } from './pages/Settings';
import { FilterType } from './types';

const App: React.FC = () => {
  return (
    <InventoryProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route 
              path="/intake" 
              element={
                <DetailList 
                  type={FilterType.TODAY_INTAKE} 
                  title="今日進貨明細" 
                  description="檢視今日剛入庫的藥品清單"
                />
              } 
            />
            <Route 
              path="/expiry" 
              element={
                <DetailList 
                  type={FilterType.NEAR_EXPIRY} 
                  title="近效期藥品明細" 
                  description="依照效期排序，急需處理的項目"
                />
              } 
            />
            <Route 
              path="/stock" 
              element={
                <DetailList 
                  type={FilterType.STOCK} 
                  title="現有庫存明細" 
                  description="目前藥局內所有藥品的庫存狀態"
                />
              } 
            />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </InventoryProvider>
  );
};

export default App;