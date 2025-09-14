import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  FileText, 
  Upload,
  Edit,
  Heart,
  Pill,
  AlertTriangle,
  Clock
} from "lucide-react";

export function PatientProfile() {
  const patient = {
    id: "P001",
    name: "Sarah Johnson",
    age: 34,
    dateOfBirth: "1989-08-15",
    gender: "Femme",
    phone: "(555) 123-4567",
    email: "sarah.johnson@email.com",
    address: "123 Main Street, Anytown, ST 12345",
    emergencyContact: "John Johnson (Husband) - (555) 765-4321",
    insuranceProvider: "Blue Cross Blue Shield",
    policyNumber: "BC123456789"
  };

  const diagnoses = [
    { condition: "Hypertension", date: "2023-03-15", severity: "Modéré", status: "Active" },
    { condition: "Diabète de type 2", date: "2023-06-20", severity: "Faible", status: "Active" },
    { condition: "Allergies saisonnières", date: "2022-04-10", severity: "Faible", status: "Saisonnier" }
  ];

  const medications = [
    { name: "Lisinopril", dosage: "10mg", frequency: "Une fois par jour", prescriber: "Dr. Smith", startDate: "2023-03-15" },
    { name: "Metformin", dosage: "500mg", frequency: "Deux fois par jour", prescriber: "Dr. Smith", startDate: "2023-06-20" },
    { name: "Loratadine", dosage: "10mg", frequency: "Au besoin", prescriber: "Dr. Johnson", startDate: "2022-04-10" }
  ];

  const allergies = [
    { allergen: "Pénicilline", reaction: "Éruption cutanée sévère", severity: "Elevé" },
    { allergen: "Fruits de mer", reaction: "Anaphylaxie", severity: "Critique" },
    { allergen: "Pollen", reaction: "Éternuements, nez qui coule", severity: "Faible" }
  ];

  const visitHistory = [
    { date: "2024-01-15", type: "Examen de routine", provider: "Dr. Smith", notes: "Pression artérielle stable, continuer la médication actuelle." },
    { date: "2023-12-20", type: "Revue de laboratoire", provider: "Dr. Smith", notes: "L'HbA1c s'est améliorée à 6,8 %, excellent progrès." },
    { date: "2023-11-10", type: "Suivi", provider: "Dr. Smith", notes: "Le patient rapporte se sentir mieux, sans effets secondaires." },
    { date: "2023-10-05", type: "Soins urgents", provider: "Dr. Johnson", notes: "Traité pour des allergies saisonnières, prescrit un antihistaminique" }
  ];

  const documents = [
    { name: "Résultats de laboratoire - Janvier 2024", type: "Rapport de laboratoire", date: "2024-01-15", size: "245 KB" },
    { name: "Rapport d'ECG", type: "Diagnostic", date: "2024-01-15", size: "180 KB" },
    { name: "Copie de la carte d'assurance", type: "Assurance", date: "2023-12-01", size: "95 KB" },
    { name: "Lettre de recommandation", type: "Orientation", date: "2023-11-20", size: "120 KB" }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critique': return 'destructive';
      case 'élevé': return 'destructive';
      case 'modéré': return 'secondary';
      case 'faible': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="text-lg">SJ</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="mb-1">{patient.name}</h1>
            <p className="text-muted-foreground">ID du patient: {patient.id}</p>
            <div className="flex items-center gap-4 mt-2">
              <Badge variant="default">Patient actif</Badge>
              <span className="text-sm text-muted-foreground">Dernière visite : 15 janvier 2024</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Edit className="h-4 w-4" />
            Modifier le profil
          </Button>
          <Button className="gap-2">
            <Calendar className="h-4 w-4" />
            Planifier un rendez-vous
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Patient Demographics */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Données démographiques du patient
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Date de naissance</p>
                <p>{new Date(patient.dateOfBirth).toLocaleDateString()} (Age {patient.age})</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Genre</p>
                <p>{patient.gender}</p>
              </div>
              <Separator />
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{patient.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{patient.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                <span className="text-sm">{patient.address}</span>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">Contact d'urgence</p>
                <p className="text-sm">{patient.emergencyContact}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Assurance</p>
                <p className="text-sm">{patient.insuranceProvider}</p>
                <p className="text-xs text-muted-foreground">{patient.policyNumber}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="col-span-2">
          <Tabs defaultValue="medical-history" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="medical-history">Antécédents médicaux</TabsTrigger>
              <TabsTrigger value="visits">Visitez l'Historique</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="medical-history" className="space-y-6">
              {/* Diagnoses */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Diagnoses actuelles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {diagnoses.map((diagnosis, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <p className="font-medium">{diagnosis.condition}</p>
                          <p className="text-sm text-muted-foreground">
                            Diagnostiqué: {new Date(diagnosis.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={getSeverityColor(diagnosis.severity)}>
                            {diagnosis.severity}
                          </Badge>
                          <Badge variant="outline">{diagnosis.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Medications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Pill className="h-5 w-5" />
                    Médicaments actuels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {medications.map((medication, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <p className="font-medium">{medication.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {medication.dosage} - {medication.frequency}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Prescrit par {medication.prescriber} on {new Date(medication.startDate).toLocaleDateString()}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Modifier
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Allergies */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Allergies connues
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {allergies.map((allergy, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <p className="font-medium">{allergy.allergen}</p>
                          <p className="text-sm text-muted-foreground">
                            Reaction: {allergy.reaction}
                          </p>
                        </div>
                        <Badge variant={getSeverityColor(allergy.severity)}>
                          {allergy.severity}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="visits" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Visitez l'Historique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {visitHistory.map((visit, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium">{visit.type}</p>
                            <p className="text-sm text-muted-foreground">{visit.provider}</p>
                          </div>
                          <Badge variant="outline">
                            {new Date(visit.date).toLocaleDateString()}
                          </Badge>
                        </div>
                        <p className="text-sm">{visit.notes}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Documents du patient
                  </CardTitle>
                  <Button className="gap-2">
                    <Upload className="h-4 w-4" />
                    Télécharger un document
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {documents.map((document, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{document.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {document.type} • {document.size} • {new Date(document.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Voir
                          </Button>
                          <Button variant="outline" size="sm">
                            Télécharger
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notes" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notes cliniques</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium">Note de suivi</p>
                        <Badge variant="outline">Dr. Smith • Jan 15, 2024</Badge>
                      </div>
                      <p className="text-sm">Le patient répond bien au plan de traitement actuel.  Les lectures de la pression artérielle se sont considérablement améliorées.  Continuez les médicaments actuels et planifiez un suivi dans 3 mois.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium">Mise à jour du plan de traitement</p>
                        <Badge variant="outline">Dr. Smith • Dec 20, 2023</Badge>
                      </div>
                      <p className="text-sm">Ajustement de la posologie de Metformine en fonction des résultats de laboratoire récents.  Patient éduqué sur les modifications alimentaires.  Objectif d'HbA1c atteint.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}