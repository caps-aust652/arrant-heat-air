const arrantServices = [
  {
    name: "Furnace Installation & Repair",
    category: "&#x2600;&#xfe0f; Heating",
    description: "Keep your home warm all winter with expert furnace installation, fast diagnostics, and reliable repairs for all major makes and models.",
    link: "/services/lorem-one"
  },
  {
    name: "Heat Pump Serices",
    category: "&#x2600;&#xfe0f; Heating",
    description: "Energy-efficient heating and cooling in one system, backged by certified installation, repairs, and seasonal tune-ups.",
    link: "/services/lorem-two"
  },
  {
    name: "Geothermal Comfort Systems",
    category: "&#x2600;&#xfe0f; Heating",
    description: "Harness clean, sustainable underground energy with specialized installation and maintenance from certified geothermal professionals.",
    link: "/services/lorem-two"
  },
  {
    name: "Fireplace & Heating Stoves",
    category: "&#x2600;&#xfe0f; Heating",
    description: "Add warmth and ambiance to any room with safe, professional installation and routine servicing for fireplaces and heating stoves.",
    link: "/services/lorem-two"
  },
  {
    name: "Whole-House Humidifiers",
    category: "&#x1F343; Air Quality",
    description: "Eliminate dry winter air and protect your home with whole-home humidifiers integrated directly into your ductwork and water supply.",
    link: "/services/lorem-three"
  },
  {
    name: "Indoor Air Filtration & Quality",
    category: "&#x1F343; Air Quality",
    description: "Breathe cleaner, healthier indoor air with tailored air purification, filtration upgrades, and ventilation solutions.",
    link: "/services/lorem-three"
  },
  {
    name: "Custom Duct Fabrication",
    category: "&#x1F343; Air Quality",
    description: "Maximize your HVAC efficiency and indoor airflow with custom-built ductwork designed and installed specifically for your property.",
    link: "/services/lorem-three"
  },
  {
    name: "Central Air Conditioning",
    category: "&#x2744&#xfe0f; Cooling",
    description: "Stay cool through the summer with complete AC system replacements, precision troubleshooting, and preventative maintenance.",
    link: "/services/lorem-four"
  },
  {
    name: "Ductless Mini-Split Systems",
    category: "&#x2744&#xfe0f; Cooling",
    description: "Enjoy customizable, zoned temperature control without bulky ductwork through expert ductless system installation and repair.",
    link: "/services/lorem-four"
  }
];

var arrantServicesToDisplay = [...arrantServices];

const form = document.querySelector('.search-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formData = new FormData(form);

  const searchQuery = formData.get('q')

  arrantServicesToDisplay = searchArrantServices(searchQuery);

  renderServices()
});

function searchArrantServices(query) {
  const cleanQuery = query.toLowerCase().trim();
  
  return arrantServices.filter(item => 
    item.name.toLowerCase().includes(cleanQuery) ||
    item.category.toLowerCase().includes(cleanQuery) ||
    item.description.toLowerCase().includes(cleanQuery)
  );
}

const arrantServicesGrid = document.getElementById("services-track");

function renderServices() {
  arrantServicesGrid.innerHTML = arrantServicesToDisplay.map(service => `
    <div class="service-card">
      <div class="service-header">
        <h3 class="service-name">${service.name}</h3>
        <p class="service-category">${service.category}</p>
        <img class="service-image" src="${service.link}">
      </div>
      <div class="service-content">
        <p class="service-description">${service.description}</p>
      </div>
      <div class="service-btn-wrapper">
        <button>Explore Service</button>
      </div>
    </div>
  `).join('');
};

renderServices()
