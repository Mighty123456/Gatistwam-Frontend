import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AnimationProvider } from './context/AnimationContext';
import { Toaster } from 'react-hot-toast';
import Layout from './components/layout/Layout';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage';
import ThankYouPage from './pages/ThankYouPage';
import ManagementSolutions from './pages/services/ManagementSolutions';
import GraphicDesign from './pages/services/GraphicDesign';
import HRSolutions from './pages/services/HRSolutions';
import Research from './pages/services/Research';
import Academy from './pages/services/Academy';
import TechSolutions from './pages/services/TechSolutions';
import EcommerceSupport from './pages/services/EcommerceSupport';
import DigitalBranding from './pages/services/DigitalBranding';
import SocialMediaMarketingPage from './pages/services/SocialMediaMarketingPage';
import SEOServicePage from './pages/services/SEOServicePage';
import WebDevelopmentPage from './pages/services/WebDevelopmentPage';
import UIUXDesignPage from './pages/services/UIUXDesignPage';
import GoogleAdsPPCPage from './pages/services/GoogleAdsPPCPage';
import LeadsGenerationPage from './pages/services/LeadsGenerationPage';
import InfluencerMarketingPage from './pages/services/InfluencerMarketingPage';
import BlogPostPage from './pages/BlogPostPage';
import SocialMediaAdvertisingPage from './pages/services/SocialMediaAdvertisingPage';

// Admin Pages
import AdminProjects from './pages/admin/Projects';
import AdminLogin from './pages/admin/Login';
import ContactManagement from './pages/admin/ContactManagement';
import ContentManagement from './pages/admin/ContentManagement';
import PortfolioManagement from './pages/admin/PortfolioManagement';
import BlogManagement from './pages/admin/BlogManagement';
import ProtectedRoute from './components/admin/ProtectedRoute';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AnimationProvider>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Toaster position="top-right" />
          <WhatsAppButton />
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminProjects />
              </ProtectedRoute>
            } />
            <Route path="/admin/projects" element={
              <ProtectedRoute>
                <AdminProjects />
              </ProtectedRoute>
            } />
            <Route path="/admin/contacts" element={
              <ProtectedRoute>
                <ContactManagement />
              </ProtectedRoute>
            } />
            <Route path="/admin/content" element={
              <ProtectedRoute>
                <ContentManagement />
              </ProtectedRoute>
            } />
            <Route path="/admin/portfolio" element={
              <ProtectedRoute>
                <PortfolioManagement />
              </ProtectedRoute>
            } />
            <Route path="/portfolio/admin" element={
              <ProtectedRoute>
                <PortfolioManagement />
              </ProtectedRoute>
            } />
            <Route path="/admin/blog" element={
              <ProtectedRoute>
                <BlogManagement />
              </ProtectedRoute>
            } />

            {/* Main App Routes */}
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/about" element={<Layout><AboutPage /></Layout>} />
            <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
            <Route path="/thank-you" element={<Layout><ThankYouPage /></Layout>} />
            <Route path="/portfolio" element={<Layout><PortfolioPage /></Layout>} />
            <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
            <Route path="/blog/:id" element={<Layout><BlogPostPage /></Layout>} />
            <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
            <Route path="/services/management-solutions" element={<Layout><ManagementSolutions /></Layout>} />
            <Route path="/services/graphic-design" element={<Layout><GraphicDesign /></Layout>} />
            <Route path="/services/hr-solutions" element={<Layout><HRSolutions /></Layout>} />
            <Route path="/services/research" element={<Layout><Research /></Layout>} />
            <Route path="/services/academy" element={<Layout><Academy /></Layout>} />
            <Route path="/services/tech-solutions" element={<Layout><TechSolutions /></Layout>} />
            <Route path="/services/ecommerce-support" element={<Layout><EcommerceSupport /></Layout>} />
            <Route path="/services/digital-branding" element={<Layout><DigitalBranding /></Layout>} />
            <Route path="/services/digital-branding/social-media-marketing" element={<Layout><SocialMediaMarketingPage /></Layout>} />
            <Route path="/services/digital-branding/seo" element={<Layout><SEOServicePage /></Layout>} />
            <Route path="/services/digital-branding/web-development" element={<Layout><WebDevelopmentPage /></Layout>} />
            <Route path="/services/digital-branding/ui-ux-design" element={<Layout><UIUXDesignPage /></Layout>} />
            <Route path="/services/digital-branding/google-ads-ppc" element={<Layout><GoogleAdsPPCPage /></Layout>} />
            <Route path="/services/digital-branding/leads-generation" element={<Layout><LeadsGenerationPage /></Layout>} />
            <Route path="/services/digital-branding/influencer-marketing" element={<Layout><InfluencerMarketingPage /></Layout>} />
            <Route path="/services/digital-branding/social-media-advertising" element={<Layout><SocialMediaAdvertisingPage /></Layout>} />
          </Routes>
        </Router>
      </AnimationProvider>
    </ThemeProvider>
  );
};

export default App;