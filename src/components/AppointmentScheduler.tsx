import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar } from "./ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { CalendarDays, Clock, Plus, Filter, User, Phone } from "lucide-react";

export function AppointmentScheduler() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [viewMode, setViewMode] = useState<'day' | 'week' | 'month'>('day');

  const appointments = [
    {
      id: 1,
      time: "9:00 AM",
      duration: 30,
      patient: "Sarah Johnson",
      patientId: "P001",
      type: "Examen de routine",
      provider: "Dr. Smith",
      status: "Confirmé",
      phone: "(555) 123-4567"
    },
    {
      id: 2,
      time: "9:30 AM",
      duration: 60,
      patient: "Michael Chen",
      patientId: "P002",
      type: "Consultation de suivi",
      provider: "Dr. Smith",
      status: "Confirmé",
      phone: "(555) 234-5678"
    },
    {
      id: 3,
      time: "11:00 AM",
      duration: 30,
      patient: "Emma Williams",
      patientId: "P003",
      type: "Revue de laboratoire",
      provider: "Dr. Johnson",
      status: "En attente",
      phone: "(555) 345-6789"
    },
    {
      id: 4,
      time: "2:00 PM",
      duration: 45,
      patient: "David Brown",
      patientId: "P004",
      type: "Consultation",
      provider: "Dr. Smith",
      status: "Confirmé",
      phone: "(555) 456-7890"
    },
    {
      id: 5,
      time: "3:30 PM",
      duration: 30,
      patient: "Lisa Martinez",
      patientId: "P005",
      type: "Suivi",
      provider: "Dr. Johnson",
      status: "Confirmé",
      phone: "(555) 567-8901"
    }
  ];

  const timeSlots = [
    "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmé': return 'default';
      case 'En attente': return 'secondary';
      case 'Annulé': return 'destructive';
      default: return 'outline';
    }
  };

  const formatSelectedDate = (date: Date | undefined) => {
    if (!date) return "Sélectionner la date";
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Planificateur de rendez-vous</h1>
          <p className="text-muted-foreground">Planifier et gérer les rendez-vous des patients</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtrer
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Nouvelle nomination
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Planifier un nouveau rendez-vous</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Patient</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner le patient" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="p001">Sarah Johnson (P001)</SelectItem>
                      <SelectItem value="p002">Michael Chen (P002)</SelectItem>
                      <SelectItem value="p003">Emma Williams (P003)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Heure</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selectionner l'heure" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Type de rendez-vous</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionner le type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="checkup">Examen de routine</SelectItem>
                      <SelectItem value="followup">Suivi</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="urgent">Soins urgents</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Durée (minutes)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionner la durée" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Notes</Label>
                  <Textarea placeholder="Notes ou instructions supplémentaires..." />
                </div>
                <div className="flex gap-2 pt-4">
                  <Button className="flex-1">Programmer</Button>
                  <Button variant="outline" className="flex-1">Annuler</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* Calendar Sidebar */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              Calendrier
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border-0"
            />
            
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="mb-2">Mode de vue</h4>
                <Select value={viewMode} onValueChange={(value: 'day' | 'week' | 'month') => setViewMode(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Vue quotidienne</SelectItem>
                    <SelectItem value="week">Vue de la semaine</SelectItem>
                    <SelectItem value="month">Vue mensuelle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h4 className="mb-2">Statistiques rapides</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Rendez-vous d'aujourd'hui</span>
                    <Badge variant="outline">{appointments.length}</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Créneaux disponibles</span>
                    <Badge variant="outline">{timeSlots.length - appointments.length}</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule View */}
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {formatSelectedDate(selectedDate)}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Précédent</Button>
                  <Button variant="outline" size="sm">Aujourd'hui</Button>
                  <Button variant="outline" size="sm">Suivant</Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {timeSlots.map((timeSlot) => {
                  const appointment = appointments.find(apt => apt.time === timeSlot);
                  
                  return (
                    <div key={timeSlot} className="flex items-center gap-4 p-2 hover:bg-muted/50 rounded-lg">
                      <div className="w-20 text-sm text-muted-foreground font-medium">
                        {timeSlot}
                      </div>
                      <div className="flex-1">
                        {appointment ? (
                          <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div>
                                <p className="font-medium">{appointment.patient}</p>
                                <p className="text-sm text-muted-foreground">
                                  {appointment.type} • {appointment.duration} min • {appointment.provider}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Badge variant={getStatusColor(appointment.status)}>
                                {appointment.status}
                              </Badge>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <User className="h-3 w-3" />
                                {appointment.patientId}
                              </div>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Phone className="h-3 w-3" />
                                {appointment.phone}
                              </div>
                              <div className="flex gap-1">
                                <Button variant="outline" size="sm">
                                  Modifer
                                </Button>
                                <Button variant="outline" size="sm">
                                  Annuler
                                </Button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between p-3 border-2 border-dashed border-muted rounded-lg">
                            <span className="text-sm text-muted-foreground">Disponible</span>
                            <Button variant="ghost" size="sm" className="gap-2">
                              <Plus className="h-3 w-3" />
                              Noter
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}