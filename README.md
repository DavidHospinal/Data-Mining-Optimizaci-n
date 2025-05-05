<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Mining Optimization - Algoritmo Genético</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2 {
            color: #2a4365;
        }
        h1 {
            text-align: center;
            border-bottom: 2px solid #4299e1;
            padding-bottom: 10px;
            margin-bottom: 30px;
        }
        h2 {
            border-left: 4px solid #4299e1;
            padding-left: 10px;
            margin-top: 30px;
        }
        .badge {
            display: inline-block;
            padding: 8px 12px;
            margin: 5px;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            text-decoration: none;
            font-size: 14px;
        }
        .badge-react {
            background-color: #61DAFB;
            color: #282c34;
        }
        .badge-algo {
            background-color: #4B8BBE;
        }
        .badge-container {
            text-align: center;
            margin: 20px 0;
        }
        .feature-list {
            list-style-type: none;
            padding-left: 5px;
        }
        .feature-list li {
            margin-bottom: 8px;
            position: relative;
            padding-left: 30px;
        }
        .feature-list li::before {
            content: attr(data-emoji);
            position: absolute;
            left: 0;
            top: 0;
        }
        code {
            background-color: #f1f1f1;
            padding: 2px 5px;
            border-radius: 3px;
            font-family: Consolas, Monaco, 'Courier New', monospace;
        }
        pre {
            background-color: #f1f1f1;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }
        .binder-badge {
            vertical-align: middle;
        }
        .contact {
            margin-top: 40px;
            text-align: center;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <h1>🧩 Optimización de Recursos Municipales con Algoritmo Genético 💡</h1>
    
    <div class="badge-container">
        <a href="https://davidhospinal.github.io/Data-Mining-Optimization/" class="badge badge-react">
            📱 Aplicación React
        </a>
        <a href="https://mybinder.org/v2/gh/DavidHospinal/Data-Mining-Optimization/f49b1f17b7b01c751460ba0759b372ba88ff53d6?urlpath=lab%2Ftree%2FSoluci%C3%B3n_Actividad_IV_Optimizaci%C3%B3n_David_Hospinal.ipynb" class="badge badge-algo">
            🧬 Algoritmo Genético
        </a>
    </div>

    <h2>📋 Resumen del Proyecto</h2>
    <p>
        Este proyecto implementa un algoritmo genético en R para optimizar la asignación de fondos municipales a proyectos de emprendimiento local. 
        El objetivo es maximizar el valor total de proyectos seleccionados dentro de un presupuesto limitado, utilizando técnicas avanzadas de optimización combinatoria.
    </p>

    <h2>📱 Aplicación Interactiva en React</h2>
    <p>
        <a href="https://davidhospinal.github.io/Data-Mining-Optimization/">Ver Demo en Vivo</a>
    </p>
    <p>
        Esta implementación incluye una interfaz de usuario interactiva desarrollada en React que permite visualizar y explorar los resultados 
        del algoritmo genético de forma dinámica.
    </p>
    <p><strong>Dependencias principales:</strong></p>
    <ul>
        <li>React 18.2.0</li>
        <li>Recharts 2.10.3</li>
        <li>Lucide React 0.294.0</li>
        <li>Tailwind CSS 3.3.5</li>
    </ul>

    <h2>🔍 Exploraciones Realizadas</h2>
    <ul class="feature-list">
        <li data-emoji="✅">Optimización de asignación de recursos municipales</li>
        <li data-emoji="🔢">Evaluación de 20 proyectos de emprendimiento</li>
        <li data-emoji="💰">Maximización del valor total con restricción presupuestaria</li>
        <li data-emoji="🧮">Análisis de múltiples configuraciones de parámetros genéticos</li>
    </ul>

    <h2>🔑 Hallazgos Clave</h2>
    <ul class="feature-list">
        <li data-emoji="🏆">Mejor solución: 9 proyectos seleccionados</li>
        <li data-emoji="💸">Valor total optimizado: 202 unidades</li>
        <li data-emoji="📊">Utilización de 38/40 unidades de presupuesto</li>
        <li data-emoji="🚀">Optimización mediante técnicas de algoritmos genéticos</li>
    </ul>

    <h2>🛠️ Técnicas Utilizadas</h2>
    <ul class="feature-list">
        <li data-emoji="🧬">Algoritmo Genético</li>
        <li data-emoji="📈">Optimización combinatoria</li>
        <li data-emoji="🔬">Análisis de parámetros (elitismo, iteraciones, población)</li>
        <li data-emoji="💻">Implementación en R y visualización en React</li>
        <li data-emoji="📉">Librería GenAlgo</li>
    </ul>

    <h2>📚 Herramientas y Tecnologías</h2>
    <h3>Análisis de Datos:</h3>
    <ul>
        <li><strong>Lenguaje:</strong> R</li>
        <li><strong>Bibliotecas:</strong> GenAlgo, ggplot2</li>
        <li><strong>Técnicas:</strong> Optimización por Algoritmo Genético</li>
    </ul>

    <h3>Visualización Interactiva:</h3>
    <ul>
        <li><strong>Frontend:</strong> React, Tailwind CSS</li>
        <li><strong>Gráficos:</strong> Recharts</li>
        <li><strong>Iconos:</strong> Lucide React</li>
        <li><strong>Despliegue:</strong> GitHub Pages</li>
    </ul>

    <h2>🚀 Cómo Ejecutar el Proyecto</h2>
    <h3>Versión React (Interfaz Interactiva):</h3>
    <ol>
        <li>
            <strong>Ver online:</strong>
            <p>Acceda directamente a la <a href="https://davidhospinal.github.io/Data-Mining-Optimization/">aplicación desplegada</a></p>
        </li>
        <li>
            <strong>Ejecutar localmente:</strong>
            <pre><code># Clonar el repositorio
git clone https://github.com/DavidHospinal/Data-Mining-Optimization.git

# Entrar al directorio
cd Data-Mining-Optimization

# Instalar dependencias
npm install

# Ejecutar la aplicación
npm start</code></pre>
        </li>
    </ol>

    <h3>Versión R (Jupyter Notebook):</h3>
    <ul>
        <li>
            <strong>Ejecutar online:</strong>
            <a href="https://mybinder.org/v2/gh/DavidHospinal/Data-Mining-Optimization/f49b1f17b7b01c751460ba0759b372ba88ff53d6?urlpath=lab%2Ftree%2FSoluci%C3%B3n_Actividad_IV_Optimizaci%C3%B3n_David_Hospinal.ipynb">
                <img src="https://mybinder.org/badge_logo.svg" alt="Binder" class="binder-badge">
            </a>
        </li>
        <li>
            <strong>Ejecutar localmente:</strong>
            <ol>
                <li>Abra el archivo <code>Solución_Actividad_IV_Optimización_David_Hospinal.ipynb</code> en Jupyter Notebook</li>
                <li>Instale las dependencias con: <code>install.packages(c("GenAlgo", "ggplot2"))</code></li>
                <li>Ejecute las celdas del notebook</li>
            </ol>
        </li>
    </ul>

    <h2>📊 Resultados Principales</h2>
    <p>Los resultados de la optimización muestran una distribución eficiente de recursos con:</p>
    <ul>
        <li>Selección óptima de 9 proyectos de mayor valor</li>
        <li>Aprovechamiento del 95% del presupuesto disponible (38/40 unidades)</li>
        <li>Valor total maximizado de 202 unidades</li>
    </ul>

    <div class="contact">
        <h2>📞 Contacto</h2>
        <p>Para más información, contactar a:</p>
        <p><a href="https://github.com/DavidHospinal">David Hospinal</a></p>
    </div>
</body>
</html>
