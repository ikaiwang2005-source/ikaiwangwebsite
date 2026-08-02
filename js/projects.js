const projects = [
  {
    id: "pc-cluster-cabinet",
    title: "PC Cluster Cabinet Build",
    category: "Panel Building",
    tags: ["AC Wiring", "DC Distribution", "DIN Rail", "Cable Management", "Modbus"],
    thumbnail: "assets/images/pdf-projects/page-04-image-01.jpg",
    gallery: [
      "assets/images/pdf-projects/page-04-image-01.jpg",
      "assets/images/pdf-projects/page-03-image-01.jpg",
      "assets/images/pdf-projects/page-03-image-02.jpg",
      "assets/images/pdf-projects/page-02-image-01.jpg"
    ],
    summary: "Designed and wired a compact cabinet layout for a Polar Monitoring cluster with power distribution, gateways, networking, and ventilation.",
    description: "Built a PC cluster cabinet from a bare frame and component list. The work included layout planning, wiring diagrams, DIN rail cutting and drilling, AC mains distribution, DC power distribution, surge protection, gateway mounting, network switching, fan wiring, ferrule crimping, soldered fan extensions, heat-shrink insulation, and cable-management decisions to keep the cabinet serviceable in limited space.",
    repoUrl: "",
    cadUrl: "",
    codeSnippet: ""
  },
  {
    id: "grafana-monitoring-dashboard",
    title: "Gateway Monitoring Dashboard",
    category: "Software",
    tags: ["Grafana", "Prometheus", "SQL", "Kubernetes", "Rancher"],
    thumbnail: "assets/images/pdf-projects/page-05-image-02.jpg",
    gallery: [
      "assets/images/pdf-projects/page-05-image-02.jpg",
      "assets/images/pdf-projects/page-05-image-03.png",
      "assets/images/pdf-projects/page-07-image-01.png"
    ],
    summary: "Built Grafana dashboards for device counts, deployed gateway locations, and operational monitoring data.",
    description: "Developed monitoring views for Polar Monitoring by deploying Prometheus and Grafana containers on a Rancher-managed Kubernetes cluster, configuring the services with YAML, connecting Grafana to the company database, and writing SQL queries for device and deployment metrics. The dashboard work focused on turning operational data into clear views that support faster monitoring and decision-making.",
    repoUrl: "",
    cadUrl: "",
    codeSnippet: "SELECT device_type, COUNT(*) AS total\nFROM deployed_devices\nGROUP BY device_type;"
  },
  {
    id: "gateway-connection-exporter",
    title: "Gateway Connection Status Exporter",
    category: "IoT",
    tags: ["Python", "API Integration", "Prometheus Client", "Environment Variables", "Telemetry"],
    thumbnail: "assets/images/pdf-projects/page-07-image-01.png",
    gallery: [
      "assets/images/pdf-projects/page-07-image-01.png",
      "assets/images/pdf-projects/page-05-image-02.jpg"
    ],
    summary: "Wrote a Python exporter that checks gateway connection status through an API and exposes the results for Prometheus scraping.",
    description: "Created a Python metrics exporter for gateway connection status where Grafana could not call the operational API directly. The script queried gateway IDs from the database, called the Polar Monitoring API for each gateway, converted connected and disconnected states into Prometheus-readable metrics, and served them on port 8000. Sensitive values such as API keys, endpoints, and connection strings were moved into environment variables and Kubernetes secrets.",
    repoUrl: "",
    cadUrl: "",
    codeSnippet: "gateway_connection_status{gateway_id=\"5003\"} 1\n# 1 = connected, 0 = disconnected"
  },
  {
    id: "modbus-test-board-rebuild",
    title: "Modbus Test Board Rebuild",
    category: "Panel Building",
    tags: ["24V DC", "Modbus", "Gateways", "Daisy Chain Wiring", "Enclosure"],
    thumbnail: "assets/images/pdf-projects/page-09-image-01.jpg",
    gallery: [
      "assets/images/pdf-projects/page-08-image-01.jpg",
      "assets/images/pdf-projects/page-09-image-01.jpg"
    ],
    summary: "Transferred an older Modbus test board into a cleaner enclosure with improved component mounting and concealed wiring.",
    description: "Rebuilt a test board into a new case to reduce dust exposure, improve presentation, and make the wiring easier to manage. The board included a 24V DC power supply, three MB4442 Modbus units, and two gateways. The work involved measuring and cutting DIN rail, mounting components, bringing AC power into the power supply, and distributing DC power through daisy-chained wiring.",
    repoUrl: "",
    cadUrl: "",
    codeSnippet: ""
  },
  {
    id: "cabinet-wiring-layout",
    title: "Cabinet Wiring Diagram and Layout Plan",
    category: "CAD",
    tags: ["Layout Planning", "Wiring Diagram", "Power Distribution", "Documentation"],
    thumbnail: "assets/images/pdf-projects/page-02-image-01.jpg",
    gallery: [
      "assets/images/pdf-projects/page-02-image-01.jpg",
      "assets/images/pdf-projects/page-04-image-01.jpg"
    ],
    summary: "Produced the cabinet wiring plan used to organize power distribution, gateways, and support hardware before assembly.",
    description: "Planned the cabinet layout before assembly by sketching component placement, minimizing wire runs, and documenting the electrical connections between breakers, surge protection, power supplies, gateways, fans, and networking hardware. The diagram helped translate the design intent into a buildable wiring workflow.",
    repoUrl: "",
    cadUrl: "",
    codeSnippet: ""
  },
  {
    id: "asrs-cad-model",
    title: "Automated Storage and Retrieval System CAD Model",
    category: "CAD",
    tags: ["3D CAD", "Mechanical Design", "AS/RS", "Load Analysis", "Interactive GLB"],
    thumbnail: "assets/images/angeline-presentation/page-01-image-01.png",
    gallery: [
      "assets/images/angeline-presentation/page-01-image-01.png",
      "assets/images/angeline-presentation/page-17-image-01.png",
      "assets/images/angeline-presentation/page-20-image-01.png",
      "assets/images/angeline-presentation/page-09-image-04.png"
    ],
    summary: "Developed a CAD-focused AS/RS concept with X, Y, and Z subsystems, a load-bearing frame, drivetrain choices, and documented safety checks.",
    description: "Created and documented an automated storage and retrieval system concept covering the mechanical architecture, subsystem selection, and structural reasoning behind the design. The system includes a rear-wheel-driven X-axis, a rack-and-pinion Y-axis fork actuator, a power-screw-based Z-axis, and a welded frame/chassis structure designed around pallet handling, rail guidance, stiffness, maintainability, and manufacturability. The design work considered payload capacity, shelf heights, rail constraints, non-derailment, bearing life, shaft deflection, drivetrain sizing, fork deflection, buckling, fatigue, weld stresses, tipping stability, and material selection.",
    modelUrl: "assets/cad/asrs-general-assembly.glb",
    cadDownloadUrl: "",
    repoUrl: "",
    cadUrl: "",
    codeSnippet: ""
  }
];
