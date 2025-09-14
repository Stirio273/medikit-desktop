import { useState } from "react";
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { Button } from "./components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Calendar, 
  FileText, 
  Settings,
  Menu,
  Stethoscope,
  Heart
} from "lucide-react";
import { Dashboard } from "./components/Dashboard";
import { PatientList } from "./components/PatientList";
import { PatientProfile } from "./components/PatientProfile";
import { AppointmentScheduler } from "./components/AppointmentScheduler";

type ActiveScreen = 'dashboard' | 'patients' | 'profile' | 'appointments' | 'reports' | 'settings';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('dashboard');

  const navigation = [
    { id: 'dashboard', name: 'Tableau de bord', icon: LayoutDashboard },
    { id: 'patients', name: 'Liste des patients', icon: Users },
    { id: 'profile', name: 'Profil patient', icon: UserCheck },
    { id: 'appointments', name: 'Rendez-vous', icon: Calendar },
    { id: 'reports', name: 'Reports', icon: FileText },
    { id: 'settings', name: 'Configuration', icon: Settings },
  ];

  const renderActiveScreen = () => {
    switch (activeScreen) {
      case 'dashboard':
        return <Dashboard />;
      case 'patients':
        return <PatientList />;
      case 'profile':
        return <PatientProfile />;
      case 'appointments':
        return <AppointmentScheduler />;
      case 'reports':
        return (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="mb-2">Module de rapports</h3>
              <p className="text-muted-foreground">Générer et consulter les rapports et analyses des patients</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <Settings className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="mb-2">Paramètres système</h3>
              <p className="text-muted-foreground">Configurer les préférences de l'application et les paramètres utilisateur</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Left Sidebar */}
        <Sidebar className="border-r">
          <SidebarHeader className="p-6 border-b">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg tracking-tight">Medikit</h2>
                <p className="text-xs text-muted-foreground">Plateforme de gestion des dossiers patients</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-4">
            <nav className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = activeScreen === item.id;
                
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    className="w-full justify-start gap-3 h-11"
                    onClick={() => setActiveScreen(item.id as ActiveScreen)}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </Button>
                );
              })}
            </nav>
            
            <div className="mt-8 p-4 bg-muted/30 rounded-lg">
              <h4 className="text-sm mb-2">Actions rapides</h4>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  Contact d'urgence
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  Mode nuit
                </Button>
              </div>
            </div>
          </SidebarContent>
        </Sidebar>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Header Bar */}
          <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center gap-4 px-6">
              <SidebarTrigger className="lg:hidden">
                <Menu className="h-5 w-5" />
              </SidebarTrigger>
              
              <div className="flex-1" />
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm">Dr. Sarah Mitchell</p>
                  <p className="text-xs text-muted-foreground">Medecin traitant</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                  SM
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6 bg-muted/30">
            {renderActiveScreen()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}