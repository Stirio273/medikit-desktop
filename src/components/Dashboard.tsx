import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Search, Calendar, Clock, TrendingUp, Users } from "lucide-react";

export function Dashboard() {
  const upcomingAppointments = [
    { id: 1, patient: "Sarah Johnson", time: "9:00 AM", type: "Examen de routine" },
    { id: 2, patient: "Michael Chen", time: "10:30 AM", type: "Suivi" },
    { id: 3, patient: "Emma Williams", time: "2:00 PM", type: "Consultation" },
    { id: 4, patient: "David Brown", time: "3:30 PM", type: "Revue de laboratoire" },
  ];

  const recentActivity = [
    { id: 1, patient: "Alice Cooper", action: "Historique médical mis à jour", time: "Il y a 2 heures" },
    { id: 2, patient: "Robert Davis", action: "Résultats de laboratoire téléchargés", time: "Il y a 4 heures" },
    { id: 3, patient: "Lisa Martinez", action: "Prescription mise à jour", time: "Il y a 6 heures" },
    { id: 4, patient: "James Wilson", action: "Rendez-vous programmé", time: "Il y a 1 jour" },
  ];

  const stats = [
    { title: "Total des patients", value: "1,247", icon: Users, trend: "+12%" },
    { title: "Rendez-vous d'aujourd'hui", value: "18", icon: Calendar, trend: "+5%" },
    { title: "Suivis en attente", value: "23", icon: Clock, trend: "-8%" },
    { title: "Ce mois-ci", value: "342", icon: TrendingUp, trend: "+15%" },
  ];

  return (
    <div className="space-y-6">
      {/* Header with Search */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Tableau de bord</h1>
          <p className="text-muted-foreground">Bienvenue ! Voici ce qui se passe aujourd'hui.</p>
        </div>
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher des patients, des rendez-vous ou des dossiers..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm text-muted-foreground">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{stat.value}</span>
                  <Badge variant={stat.trend.startsWith('+') ? 'default' : 'secondary'} className="text-xs">
                    {stat.trend}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Rendez-vous à venir
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium">{appointment.patient}</p>
                  <p className="text-sm text-muted-foreground">{appointment.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">{appointment.time}</p>
                  <Badge variant="outline" className="text-xs">Aujourd'hui</Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              Voir tous les rendez-vous
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Activité récente des patients
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="h-2 w-2 bg-primary rounded-full mt-2.5"></div>
                <div className="flex-1">
                  <p className="font-medium">{activity.patient}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              Voir toute l'activité
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}