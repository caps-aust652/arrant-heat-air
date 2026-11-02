const arrantServices = [
  {
    name: "Lorem Ipsum Dolor",
    category: "Cooling",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/services/lorem-one"
  },
  {
    name: "Consectetur Adipiscing",
    category: "Heating",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "/services/lorem-two"
  },
  {
    name: "Sed Do Eiusmod",
    category: "Air Quality",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "/services/lorem-three"
  },
  {
    name: "Tempor Incididunt",
    category: "Cooling",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "/services/lorem-four"
  },
  {
    name: "Ut Labore Et Dolore",
    category: "Heating",
    description: "Mollis pretium lorem primis senectus habitasse lectus scelerisque donec. Cubilia maecenas quisque sit efficitur habitant.",
    link: "/services/lorem-five"
  },
  {
    name: "Magna Aliqua Ut",
    category: "Air Quality",
    description: "Phasellus vehicula litora tristique integer sed parturient. Semper morbi inceptos curae aliquet iaculis pretium cras.",
    link: "/services/lorem-six"
  }
];

const arrantServicesGrid = document.getElementById("services-track");

arrantServicesGrid.innerHTML = arrantServices.map(service => `
  <div class="service-card">
    <div class="stream-container">
      <div class="stream mr-bg offset-0 animation-set-1"></div>
      <div class="stream ssr-bg offset-1 animation-set-2"></div>
      <div class="stream vm-bg offset-2 animation-set-3"></div>
      <div class="stream b-bg offset-3 animation-set-1"></div>
      <div class="stream lg-bg offset-4 animation-set-3"></div>
      <div class="stream bgg-bg offset-5 animation-set-2"></div>
      <div class="stream cm-bg offset-6 animation-set-1"></div>
      <div class="stream ml-bg offset-7 animation-set-3"></div>
      <div class="stream gts-bg offset-8 animation-set-2"></div>
      <div class="stream sd-bg offset-9 animation-set-1"></div>
    </div>
    <div class="service-header">
      <h3 class="service-name">${service.name}</h3>
      <p class="service-category">${service.category}</p>
      <img class="service-image">
    </div>
    <div class="service-content">
      <p class="service-description">${service.description}</p>
    </div>
    <div class="service-btn-wrapper">
      <button>Explore Service</button>
    </div>
  </div>
`).join('');
