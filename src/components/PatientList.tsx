import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Search, Filter, Plus, ChevronUp, ChevronDown } from "lucide-react";

export function PatientList() {
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const patients = [
    {
      id: "P001",
      name: "Sarah Johnson",
      age: 34,
      lastVisit: "2024-01-15",
      status: "Active",
      phone: "(555) 123-4567",
      condition: "Hypertension"
    },
    {
      id: "P002", 
      name: "Michael Chen",
      age: 45,
      lastVisit: "2024-01-10",
      status: "Follow-up Needed",
      phone: "(555) 234-5678",
      condition: "Diabetes Type 2"
    },
    {
      id: "P003",
      name: "Emma Williams",
      age: 28,
      lastVisit: "2024-01-12",
      status: "Active",
      phone: "(555) 345-6789",
      condition: "Allergies"
    },
    {
      id: "P004",
      name: "David Brown",
      age: 52,
      lastVisit: "2024-01-08",
      status: "Follow-up Needed",
      phone: "(555) 456-7890",
      condition: "Heart Disease"
    },
    {
      id: "P005",
      name: "Lisa Martinez",
      age: 38,
      lastVisit: "2024-01-14",
      status: "Active",
      phone: "(555) 567-8901",
      condition: "Migraine"
    },
    {
      id: "P006",
      name: "James Wilson",
      age: 41,
      lastVisit: "2024-01-09",
      status: "Inactive",
      phone: "(555) 678-9012",
      condition: "Back Pain"
    },
    {
      id: "P007",
      name: "Alice Cooper",
      age: 29,
      lastVisit: "2024-01-13",
      status: "Active",
      phone: "(555) 789-0123",
      condition: "Anxiety"
    },
    {
      id: "P008",
      name: "Robert Davis",
      age: 67,
      lastVisit: "2024-01-11",
      status: "Follow-up Needed",
      phone: "(555) 890-1234",
      condition: "Arthritis"
    }
  ];

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: string) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />;
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Active':
        return 'default';
      case 'Follow-up Needed':
        return 'secondary';
      case 'Inactive':
        return 'outline';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Liste des patients</h1>
          <p className="text-muted-foreground">Gérer et consulter tous les dossiers des patients</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Ajouter un nouveau patient
        </Button>
      </div>

      {/* Search and Filter Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Recherchez par nom, numéro de patient ou condition..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filtrer
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Patient Table */}
      <Card>
        <CardHeader>
          <CardTitle>Tous les patients ({patients.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead 
                  className="cursor-pointer select-none"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center gap-2">
                    Nom du patient
                    {getSortIcon('name')}
                  </div>
                </TableHead>
                <TableHead 
                  className="cursor-pointer select-none"
                  onClick={() => handleSort('id')}
                >
                  <div className="flex items-center gap-2">
                    ID du patient
                    {getSortIcon('id')}
                  </div>
                </TableHead>
                <TableHead 
                  className="cursor-pointer select-none"
                  onClick={() => handleSort('age')}
                >
                  <div className="flex items-center gap-2">
                    Age
                    {getSortIcon('age')}
                  </div>
                </TableHead>
                <TableHead 
                  className="cursor-pointer select-none"
                  onClick={() => handleSort('lastVisit')}
                >
                  <div className="flex items-center gap-2">
                    Dernière visite
                    {getSortIcon('lastVisit')}
                  </div>
                </TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Condition principale</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="font-medium">{patient.name}</TableCell>
                  <TableCell className="text-muted-foreground">{patient.id}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{new Date(patient.lastVisit).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(patient.status)}>
                      {patient.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{patient.condition}</TableCell>
                  <TableCell className="text-muted-foreground">{patient.phone}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Voir les détails
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}