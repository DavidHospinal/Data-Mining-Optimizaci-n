import React, { useState, useMemo } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { 
  Award, Calculator, Filter, Layers, TrendingUp, 
  RefreshCw, Database, Target 
} from 'lucide-react';

// Datos de proyectos completos
const FULL_DATASET = [
  { proyecto: 'P1', valor: 10, fondo: 3, selected: false },
  { proyecto: 'P2', valor: 20, fondo: 5, selected: true },
  { proyecto: 'P3', valor: 15, fondo: 8, selected: false },
  { proyecto: 'P4', valor: 12, fondo: 4, selected: false },
  { proyecto: 'P5', valor: 30, fondo: 5, selected: true },
  { proyecto: 'P6', valor: 14, fondo: 1, selected: true },
  { proyecto: 'P7', valor: 32, fondo: 8, selected: true },
  { proyecto: 'P8', valor: 11, fondo: 4, selected: false },
  { proyecto: 'P9', valor: 20, fondo: 7, selected: false },
  { proyecto: 'P10', valor: 16, fondo: 5, selected: false },
  { proyecto: 'P11', valor: 10, fondo: 4, selected: false },
  { proyecto: 'P12', valor: 24, fondo: 6, selected: true },
  { proyecto: 'P13', valor: 15, fondo: 7, selected: false },
  { proyecto: 'P14', valor: 16, fondo: 4, selected: false },
  { proyecto: 'P15', valor: 31, fondo: 5, selected: true },
  { proyecto: 'P16', valor: 13, fondo: 1, selected: true },
  { proyecto: 'P17', valor: 27, fondo: 9, selected: false },
  { proyecto: 'P18', valor: 15, fondo: 3, selected: true },
  { proyecto: 'P19', valor: 23, fondo: 6, selected: true },
  { proyecto: 'P20', valor: 18, fondo: 5, selected: false }
];

const SEEDS_DATA = [
  { semilla: 15, valor_total: 202, costo_total: 40 },
  { semilla: 34, valor_total: 202, costo_total: 40 },
  { semilla: 50, valor_total: 202, costo_total: 40 },
  { semilla: 3, valor_total: 199, costo_total: 40 },
  { semilla: 30, valor_total: 198, costo_total: 40 }
];

const GeneticAlgorithmInteractive = () => {
  const [viewMode, setViewMode] = useState('proyectos');
  const [selectedFilter, setSelectedFilter] = useState('todos');

  // Proyectos seleccionados
  const selectedProjects = useMemo(() => 
    FULL_DATASET.filter(p => p.selected), 
    []
  );

  // Filtrar proyectos según el modo seleccionado
  const filteredProjects = useMemo(() => {
    switch(selectedFilter) {
      case 'seleccionados':
        return selectedProjects;
      case 'no_seleccionados':
        return FULL_DATASET.filter(p => !p.selected);
      default:
        return FULL_DATASET;
    }
  }, [selectedFilter]);

  // Calcular métricas
  const projectMetrics = useMemo(() => {
    const seleccionados = selectedProjects;
    const valorTotal = seleccionados.reduce((sum, p) => sum + p.valor, 0);
    const fondoTotal = seleccionados.reduce((sum, p) => sum + p.fondo, 0);
    
    return {
      valorTotal,
      fondoTotal,
      proyectosSeleccionados: seleccionados.length,
      mejorProyecto: seleccionados.reduce((max, p) => 
        p.valor > max.valor ? p : max, 
        { valor: 0 }
      )
    };
  }, []);

  // Renderizar vistas
  const renderView = () => {
    switch(viewMode) {
      case 'proyectos':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Gráfico de Barras de Proyectos */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Layers className="mr-2 text-blue-500" /> 
                Valor de Proyectos
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={filteredProjects}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="proyecto" />
                  <YAxis />
                  <Tooltip 
                    content={({ payload }) => {
                      if (payload && payload.length) {
                        const project = payload[0].payload;
                        return (
                          <div className="bg-white p-4 rounded shadow">
                            <p className="font-bold">{project.proyecto}</p>
                            <p>Valor: {project.valor}</p>
                            <p>Fondo: {project.fondo}</p>
                            <p>Seleccionado: {project.selected ? 'Sí' : 'No'}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="valor" 
                    fill={payload => payload.selected ? "#82ca9d" : "#8884d8"}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Información de Proyectos */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Target className="mr-2 text-green-500" /> 
                Métricas de Optimización
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg text-gray-700">Resumen</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Valor Total: {projectMetrics.valorTotal}</li>
                    <li>Fondos Utilizados: {projectMetrics.fondoTotal}/40</li>
                    <li>Proyectos Seleccionados: {projectMetrics.proyectosSeleccionados}</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg text-green-700">Mejor Proyecto</h4>
                  <p>
                    {selectedProjects.find(p => p.valor === projectMetrics.mejorProyecto.valor)?.proyecto} 
                    {' '}(Valor: {projectMetrics.mejorProyecto.valor})
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'semillas':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Gráfico de Semillas */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <RefreshCw className="mr-2 text-purple-500" /> 
                Resultados por Semilla
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={SEEDS_DATA}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="semilla" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="valor_total" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Tabla de Semillas */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Database className="mr-2 text-blue-500" /> 
                Detalle de Semillas
              </h3>
              <table className="w-full bg-white rounded-lg shadow">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2">Semilla</th>
                    <th className="p-2">Valor Total</th>
                    <th className="p-2">Costo Total</th>
                  </tr>
                </thead>
                <tbody>
                  {SEEDS_DATA.map((seed, index) => (
                    <tr key={index} className="text-center border-t">
                      <td className="p-2">{seed.semilla}</td>
                      <td className="p-2">{seed.valor_total}</td>
                      <td className="p-2">{seed.costo_total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700 flex items-center justify-center">
          <Award className="mr-3 text-yellow-500" />
          Optimización de Recursos Municipales
          <Calculator className="ml-3 text-green-500" />
        </h1>

        {/* Controles de Visualización */}
        <div className="flex justify-center space-x-4 mb-6">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Filtro:</span>
            <select 
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="todos">Todos los Proyectos</option>
              <option value="seleccionados">Proyectos Seleccionados</option>
              <option value="no_seleccionados">Proyectos No Seleccionados</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Vista:</span>
            <button 
              onClick={() => setViewMode('proyectos')}
              className={`p-2 rounded ${viewMode === 'proyectos' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Proyectos
            </button>
            <button 
              onClick={() => setViewMode('semillas')}
              className={`p-2 rounded ${viewMode === 'semillas' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Análisis de Semillas
            </button>
          </div>
        </div>

        {/* Contenido Dinámico */}
        {renderView()}
      </div>
    </div>
  );
};

export default GeneticAlgorithmInteractive;
