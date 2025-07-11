import React from 'react';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import BIMIntegrationTimeline from './components/BIMIntegrationTimeline';
import UseCaseGallery from './components/UseCaseGallery';
import AIBIMAction from './components/AIBIMAction';
import TechnologyStack from './components/TechnologyStack';
import BenefitsSection from './components/BenefitsSection';
import DocumentLibrary from './components/DocumentLibrary';
import InteractiveCharts from './components/InteractiveCharts';
import RealWorldUseCases from './components/RealWorldUseCases';
import ExpertProfile from './components/ExpertProfile';
import DeveloperProfile from './components/DeveloperProfile';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <OverviewSection />
      <BIMIntegrationTimeline />
      <UseCaseGallery />
      <AIBIMAction />
      <TechnologyStack />
      <DocumentLibrary />
      <RealWorldUseCases />
      <InteractiveCharts />
      <ExpertProfile />
      <BenefitsSection />
      <DeveloperProfile />
      <Footer />
    </div>
  );
}

export default App; 