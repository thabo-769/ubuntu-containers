const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
const phoneIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
const mailIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>';
const mapIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';
const clockIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
const checkIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
const plusIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';
const zoomIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>';

const image = (name) => `/images/${name}.jpg`;

const services = [
  ['Container accommodation', 'accommodation', 'Comfortable, insulated spaces for homes, lodges, farms, and workforce housing.'],
  ['Custom conversions', 'showcase', 'Purpose-built offices, retail spaces, clinics, classrooms, and mobile workspaces.'],
  ['Container sales', 'containers', 'New and quality pre-owned 20ft and 40ft containers for storage or conversion.'],
  ['Rentals & delivery', 'delivery', 'Flexible container hire, nationwide transport, crane offloading, and placement.']
];

const galleryItems = [
  {
    title: 'Master Bedroom Suite',
    category: 'accommodation',
    tag: '20ft Conversion',
    photo: 'bedroom',
    desc: 'Fully insulated master suite with natural pine cladding, recessed LED lighting, and double-glazed awning windows.'
  },
  {
    title: 'Open-Plan Living Lounge',
    category: 'accommodation',
    tag: 'Modular Home',
    photo: 'living',
    desc: 'Spacious modular lounge featuring hardwood finish flooring, custom wall shelving, and large exterior sliding glass doors.'
  },
  {
    title: 'Fitted Modular Kitchen',
    category: 'interiors',
    tag: 'Turnkey Interior',
    photo: 'kitchen',
    desc: 'Custom kitchenette with quartz-look countertops, built-in storage cabinets, ceramic splashback, and plumbing pre-installed.'
  },
  {
    title: 'Ensuite Bathroom Conversion',
    category: 'interiors',
    tag: 'Sanitary Unit',
    photo: 'bathroom',
    desc: 'Waterproofed container bathroom with porcelain tiling, walk-in shower cubicle, vanity unit, and instant hot water heating.'
  },
  {
    title: 'Architectural Creative Studio',
    category: 'commercial',
    tag: 'Workspace',
    photo: 'interior',
    desc: 'High-ceiling open-plan creative studio featuring acoustic insulation, commercial grade electricals, and floor-to-ceiling glass.'
  },
  {
    title: 'Executive Site Office',
    category: 'commercial',
    tag: 'Site Infrastructure',
    photo: 'showcase',
    desc: 'Heavy-duty steel-reinforced command office designed for agricultural, mining, and civil construction sites across Zimbabwe.'
  },
  {
    title: 'Safari Lodge & Farm Living',
    category: 'accommodation',
    tag: 'Hospitality',
    photo: 'accommodation',
    desc: 'Modular accommodation quarters designed for eco-tourism lodges, commercial farms, and remote staff housing.'
  },
  {
    title: 'Precision Crane Delivery',
    category: 'commercial',
    tag: 'Logistics',
    photo: 'delivery',
    desc: 'Nationwide flatbed transport with integrated hydraulic crane for immediate offloading and leveling on site.'
  }
];

const faqs = [
  {
    q: 'Do container homes and offices require special foundations in Zimbabwe?',
    a: 'Container buildings require substantially less ground preparation than conventional brick structures. In most cases, level concrete corner piers, pre-cast plinths, or treated foundation pads are sufficient. This drastically reduces site disturbance, civil costs, and enables easy relocation if required.'
  },
  {
    q: 'How do you insulate against extreme Zimbabwean heat and cold?',
    a: 'We install high-performance multi-layer insulation systems utilizing high-density rockwool or polyurethane spray foam, paired with reflective vapor barriers and internal air cavities. Combined with cross-ventilation design and optional solar-reflective roof paint, interiors stay refreshingly cool during hot summers and comfortably warm in winter.'
  },
  {
    q: 'Can you deliver to remote farms, mines, or rural plots nationwide?',
    a: 'Yes. We deliver across all 10 provinces in Zimbabwe. Our logistics network includes heavy-duty flatbed trucks equipped with hydraulic cranes capable of navigating rural and unpaved roads to precisely position and level your container on site.'
  },
  {
    q: 'What is the difference between a 20ft and a 40ft container?',
    a: 'A 20ft container measures 6.06m x 2.44m (about 14.8 m² of floor space), making it ideal for compact living units, site offices, farm storage, and retail kiosks. A 40ft container (12.19m x 2.44m, about 29.7 m² of floor area), or 40ft High Cube (2.89m tall), provides room for one or two bedroom homes, clinics, boardroom offices, and multi-room suites.'
  },
  {
    q: 'How long does a custom container conversion take from order to delivery?',
    a: 'Standard storage containers can be dispatched within 48 to 72 hours. Custom conversions, such as accommodation units, mobile offices, and clinics, are made in South Africa. Timing depends on the project and delivery arrangements.'
  },
  {
    q: 'Are your converted containers weather-resistant and secure?',
    a: 'All our containers are built from heavy-gauge Corten anti-corrosion marine steel. Converted units feature welded window frames with burglar bars, deadbolted steel entry doors, and anti-tamper lockboxes, offering unmatched security and a 25+ year lifespan with minimal maintenance.'
  }
];

document.querySelector('#root').innerHTML = `
  <header class="header">
    <div class="header-inner container">
      <a href="#home" class="brand">
        <img src="${image('logo')}" alt="Ubuntu Container Sales">
        <span><b>UBUNTU</b><small>CONTAINER SALES</small></span>
      </a>
      <button class="menu" aria-label="Toggle menu" aria-expanded="false">&#9776;</button>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Solutions</a>

        <a href="#gallery">Gallery</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
        <a class="nav-button" href="#contact">Request a quote ${arrow}</a>
      </nav>
    </div>
  </header>

  <main>
    <!-- HERO SECTION -->
    <section class="hero" id="home">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-inner container">
        <div class="hero-content">
          <div class="eyebrow"><span></span> MODULAR SPACES &middot; MADE IN SOUTH AFRICA</div>
          <h1>Room to do<br><em>more.</em></h1>
          <p>Practical container solutions for living, working, building, and growing. Designed around your needs and delivered directly to your site across Zimbabwe.</p>
          <div class="hero-actions">
            <a class="btn" href="#services">Explore our solutions ${arrow}</a>
            <a class="ghost" href="#contact">Let's talk about your project ${arrow}</a>
          </div>
        </div>
        <div class="hero-bottom">
          <div class="hero-caption"><i></i> SMARTER SPACES. STRONGER POSSIBILITIES.</div>
          <div class="hero-index">01 <span></span> 04</div>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section class="about" id="about">
      <div class="about-inner container">
        <div class="about-header">
          <div class="about-copy">
            <div class="eyebrow dark"><span></span> ABOUT UBUNTU</div>
            <h2>Practical spaces.<br><em>Thoughtfully made.</em></h2>
            <p class="about-lead">Ubuntu Container Sales helps turn a simple container into a space with purpose.</p>
            <p class="about-subtext">From secure storage to a custom home, office, or business space, we make it easier to find the right starting point for your project.</p>
            <ul class="about-points">
              <li>${checkIcon}<span>Ready-to-use containers and custom conversions</span></li>
              <li>${checkIcon}<span>Options shaped around your use and location</span></li>
              <li>${checkIcon}<span>Delivery planning for your site</span></li>
            </ul>
            <a class="btn" href="#services">Explore our solutions ${arrow}</a>
          </div>
          <div class="about-main-image">
            <img src="${image('about')}" alt="Container home with timber decking" loading="lazy">
            <span class="about-image-caption">A fresh take on modular living</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SOLUTIONS SECTION -->
    <section class="services" id="services">
      <div class="services-inner container">
        <div class="section-head">
          <div>
            <div class="eyebrow dark"><span></span> WHAT WE DO</div>
            <h2>Space for your<br><em>next big thing.</em></h2>
          </div>
          <p>From one standard storage container to a multi-unit architectural compound, we deliver the exact space your project needs.</p>
        </div>
        <div class="service-grid">
          ${services.map(([title, photo, copy], i) => `
            <a class="service-card" href="#contact">
              <img src="${image(photo)}" alt="${title}" loading="lazy">
              <span class="service-shade"></span>
              <span class="service-num">0${i + 1}</span>
              <span class="service-info">
                <b>${title}</b>
                <small>${copy}</small>
                <i>${arrow}</i>
              </span>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FULL MULTI-IMAGE GALLERY SECTION -->
    <section class="gallery-section" id="gallery">
      <div class="gallery-inner container">
        <div class="gallery-header">
          <div>
            <div class="eyebrow dark"><span></span> PORTFOLIO & REAL PROJECTS</div>
            <h2>Explore our finished<br><em>container conversions.</em></h2>
          </div>
          <p>Browse through container spaces made in South Africa and installed at client sites.</p>
        </div>

        <!-- Filter tabs -->
        <div class="gallery-filters" role="tablist">
          <button class="filter-btn active" data-filter="all">All Projects</button>
          <button class="filter-btn" data-filter="accommodation">Living & Lodges</button>
          <button class="filter-btn" data-filter="interiors">Kitchens & Bathrooms</button>
          <button class="filter-btn" data-filter="commercial">Offices & Logistics</button>
        </div>

        <!-- Dynamic Photo Grid -->
        <div class="gallery-grid">
          ${galleryItems.map((item, index) => `
            <div class="gallery-card" data-category="${item.category}" data-index="${index}">
              <div class="gallery-media">
                <img src="${image(item.photo)}" alt="${item.title}" loading="lazy">
                <div class="gallery-overlay">
                  <span class="gallery-zoom-icon">${zoomIcon}</span>
                  <span class="gallery-tag">${item.tag}</span>
                </div>
              </div>
              <div class="gallery-info">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CRAFTSMANSHIP & DIFFERENCE HIGHLIGHT -->
    <section class="feature" id="difference">
      <div class="feature-photo">
        <img src="${image('living')}" alt="Finished modular container interior" loading="lazy">
        <div class="photo-label">DESIGNED FOR EVERYDAY LIVING</div>
      </div>
      <div class="feature-copy">
        <div class="feature-copy-content">
          <div class="eyebrow"><span></span> THE UBUNTU DIFFERENCE</div>
          <h2>Made to work.<br><em>Made for you.</em></h2>
          <p>Every project starts with a conversation. We'll help you explore layouts, insulation options, electrical work, and the details that make your space work from day one.</p>
          <ul>
            <li><b>01</b> <span>Practical, made-to-fit architectural layouts</span></li>
            <li><b>02</b> <span>Advanced thermal insulation and acoustic lining</span></li>
            <li><b>03</b> <span>Complete electrical wiring, plumbing & certification</span></li>
            <li><b>04</b> <span>Nationwide delivery with precision crane placement</span></li>
          </ul>
          <a class="btn" href="#contact">Start planning your space ${arrow}</a>
        </div>
      </div>
    </section>

    <!-- 3-STEP PROCESS SECTION -->
    <section class="process">
      <div class="process-inner container">
        <div class="eyebrow dark"><span></span> FROM IDEA TO INSTALLATION</div>
        <h2>Simple steps.<br><em>Solid results.</em></h2>
        <div class="steps">
          <article>
            <b>01</b>
            <h3>Talk it through</h3>
            <p>Tell us what you need, your plot location, and how you plan to use your space. We'll recommend sizes and layouts.</p>
          </article>
          <article>
            <b>02</b>
            <h3>Plan & Customize</h3>
            <p>Choose window placements, insulation, partition walls, electrical fittings, and durable interior finishes.</p>
          </article>
          <article>
            <b>03</b>
            <h3>We build & deliver</h3>
            <p>We build in South Africa, arrange road transport, and coordinate offloading at your site.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="faq-section" id="faq">
      <div class="faq-inner container">
        <div class="section-head">
          <div>
            <div class="eyebrow dark"><span></span> FREQUENTLY ASKED QUESTIONS</div>
            <h2>Everything you need<br><em>to know.</em></h2>
          </div>
          <p>Answers to common questions about container purchasing, site readiness, thermal insulation, and delivery in Zimbabwe.</p>
        </div>

        <div class="faq-list">
          ${faqs.map((faq, i) => `
            <details class="faq-item" ${i === 0 ? 'open' : ''}>
              <summary class="faq-question">
                <span>${faq.q}</span>
                <span class="faq-icon">${plusIcon}</span>
              </summary>
              <div class="faq-answer">
                <p>${faq.a}</p>
              </div>
            </details>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CONTACT & QUOTE REQUEST SECTION -->
    <section class="contact" id="contact">
      <div class="contact-inner container">
        <div class="contact-layout">

          <!-- LEFT: Contact Info Column -->
          <div class="contact-info-col">
            <div class="eyebrow dark"><span></span> GET IN TOUCH</div>
            <h2>Let's build your<br><em>ideal space.</em></h2>
            <p class="contact-intro">Talk directly to our container specialists in Harare. We'll prepare an itemized quote within 24 hours.</p>

            <div class="contact-details-list">
              <div class="contact-detail-item">
                ${phoneIcon}
                <div>
                  <span>Call / WhatsApp</span>
                  <a href="tel:+263771234567">+263 77 123 4567</a>
                </div>
              </div>
              <div class="contact-detail-item">
                ${mailIcon}
                <div>
                  <span>Email Enquiries</span>
                  <a href="mailto:info@ubuntucontainers.co.zw">info@ubuntucontainers.co.zw</a>
                </div>
              </div>
              <div class="contact-detail-item">
                ${mapIcon}
                <div>
                  <span>Main Yard & Workshops</span>
                  <p>Workington Industrial Area,<br>Harare, Zimbabwe</p>
                </div>
              </div>
              <div class="contact-detail-item">
                ${clockIcon}
                <div>
                  <span>Working Hours</span>
                  <p>Monday to Friday: 08:00 to 17:00<br>Saturday: 08:00 to 13:00</p>
                </div>
              </div>
            </div>

            <a class="whatsapp-btn contact-wa" href="https://wa.me/263771234567?text=Hello%20Ubuntu%20Container%20Sales,%20I%20would%20like%20to%20enquire%20about%20a%20container%20project." target="_blank" rel="noopener">
              <span>Chat on WhatsApp</span>
              ${arrow}
            </a>
          </div>

          <!-- RIGHT: Quote Form Column -->
          <div class="contact-form-col">
            <div class="contact-form-header">
              <h3>Request a Free Quote</h3>
              <p>Fill in your details and we'll get back to you with a tailored proposal.</p>
            </div>

            <form class="quote-form" id="quoteForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="clientName">Full Name *</label>
                  <input type="text" id="clientName" required placeholder="e.g. Tendai Moyo">
                </div>
                <div class="form-group">
                  <label for="clientPhone">Phone / WhatsApp *</label>
                  <input type="tel" id="clientPhone" required placeholder="e.g. +263 77 123 4567">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="clientEmail">Email Address</label>
                  <input type="email" id="clientEmail" placeholder="e.g. tendai@example.co.zw">
                </div>
                <div class="form-group">
                  <label for="projectLocation">Delivery Location *</label>
                  <input type="text" id="projectLocation" required placeholder="e.g. Harare, Mutare, Gweru">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="solutionType">Solution Needed</label>
                  <select id="solutionType">
                    <option value="accommodation">Container Accommodation / Living Unit</option>
                    <option value="office">Commercial Office / Studio Conversion</option>
                    <option value="sales-20ft">20ft Container Purchase (New/Pre-owned)</option>
                    <option value="sales-40ft">40ft High Cube Container Purchase</option>
                    <option value="rental">On-site Storage Rental</option>
                    <option value="custom">Custom Multi-Container Project</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="timeframe">Desired Timeframe</label>
                  <select id="timeframe">
                    <option value="immediate">Immediate (Ready-to-go stock)</option>
                    <option value="1-month">Within 2 to 4 weeks</option>
                    <option value="planning">Planning / Pricing stage</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="projectNotes">Project Details & Requirements</label>
                <textarea id="projectNotes" rows="3" placeholder="Tell us about size, doors/windows, insulation, power requirements..."></textarea>
              </div>

              <button type="submit" class="btn submit-btn contact-submit">
                <span>Submit Quote Request</span>
                ${arrow}
              </button>

              <div class="form-feedback" id="formFeedback" style="display:none;"></div>
            </form>
          </div>

        </div>
      </div>
    </section>
  </main>

  <!-- LIGHTBOX MODAL -->
  <div class="lightbox" id="galleryLightbox" aria-hidden="true" role="dialog">
    <div class="lightbox-overlay"></div>
    <div class="lightbox-content">
      <button class="lightbox-close" aria-label="Close modal">&times;</button>
      <div class="lightbox-img-wrap">
        <img id="lightboxImg" src="" alt="">
      </div>
      <div class="lightbox-details">
        <span class="lightbox-tag" id="lightboxTag"></span>
        <h3 id="lightboxTitle"></h3>
        <p id="lightboxDesc"></p>
        <a class="btn" href="#contact" id="lightboxEnquireBtn">Enquire about this finish ${arrow}</a>
      </div>
    </div>
  </div>

  <!-- COMPLETE CORPORATE FOOTER -->
  <footer class="footer">
    <div class="footer-inner container">
      <div class="footer-grid">
        <div class="footer-col footer-about">
          <a href="#home" class="brand">
            <img src="${image('logo')}" alt="Ubuntu Container Sales">
            <span><b>UBUNTU</b><small>CONTAINER SALES</small></span>
          </a>
          <p class="footer-desc">
            Zimbabwe's specialist in quality shipping container sales, turnkey modular accommodation, custom conversions, and nationwide crane delivery.
          </p>
          <div class="footer-badge">
            <span class="badge-dot"></span> Harare Yard &middot; Bulawayo Depot &middot; All 10 Provinces
          </div>
        </div>

        <div class="footer-col">
          <h4>Navigation</h4>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Solutions & Conversions</a></li>

            <li><a href="#gallery">Finished Projects Gallery</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
            <li><a href="#contact">Request a Quote</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Our Solutions</h4>
          <ul class="footer-links">
            <li><a href="#services">20ft & 40ft Containers</a></li>
            <li><a href="#services">Container Accommodation</a></li>
            <li><a href="#services">Custom Office Conversions</a></li>
            <li><a href="#contact">Container Sales (New & Pre-owned)</a></li>
            <li><a href="#services">Secure Storage Rentals</a></li>
            <li><a href="#services">Crane Transport & Delivery</a></li>
          </ul>
        </div>

        <div class="footer-col footer-contact">
          <h4>Get in Touch</h4>
          <ul class="footer-contact-list">
            <li>
              ${phoneIcon}
              <div>
                <span>Call / WhatsApp</span>
                <a href="tel:+263771234567">+263 77 123 4567</a>
              </div>
            </li>
            <li>
              ${mailIcon}
              <div>
                <span>Email Enquiries</span>
                <a href="mailto:info@ubuntucontainers.co.zw">info@ubuntucontainers.co.zw</a>
              </div>
            </li>
            <li>
              ${mapIcon}
              <div>
                <span>Main Yard & Workshops</span>
                <p>Workington Industrial Area, Harare, Zimbabwe</p>
              </div>
            </li>
            <li>
              ${clockIcon}
              <div>
                <span>Working Hours</span>
                <p>Monday to Friday: 08:00 to 17:00 | Saturday: 08:00 to 13:00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-copy">
          <span>&copy; 2026 Ubuntu Container Sales (Pvt) Ltd. All rights reserved.</span>
          <span class="footer-tagline">Built for living, working, and growing across Zimbabwe.</span>
        </div>
        <a class="back-top" href="#home" aria-label="Back to top">
          Back to top
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </a>
      </div>
    </div>
  </footer>
`;

// Mobile Menu
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menu.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  }));
}

// Gallery Filter Functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryCards = document.querySelectorAll('.gallery-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');

    galleryCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Lightbox Functionality
const lightbox = document.getElementById('galleryLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxTag = document.getElementById('lightboxTag');
const lightboxDesc = document.getElementById('lightboxDesc');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxOverlay = document.querySelector('.lightbox-overlay');

if (lightbox) {
  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      const index = parseInt(card.getAttribute('data-index'), 10);
      const data = galleryItems[index];
      if (data) {
        lightboxImg.src = image(data.photo);
        lightboxImg.alt = data.title;
        lightboxTitle.textContent = data.title;
        lightboxTag.textContent = data.tag;
        lightboxDesc.textContent = data.desc;
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxOverlay.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });
}

// Quote Form Submission
const quoteForm = document.getElementById('quoteForm');
const formFeedback = document.getElementById('formFeedback');

if (quoteForm && formFeedback) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('clientName').value;
    const phone = document.getElementById('clientPhone').value;
    const email = document.getElementById('clientEmail').value || 'N/A';
    const location = document.getElementById('projectLocation').value;
    const solution = document.getElementById('solutionType').value;
    const timeframe = document.getElementById('timeframe').value;
    const notes = document.getElementById('projectNotes').value || 'None';

    const subject = encodeURIComponent(`Container Quote Enquiry: ${name} (${location})`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nLocation: ${location}\nSolution: ${solution}\nTimeframe: ${timeframe}\n\nProject Notes:\n${notes}`
    );

    formFeedback.style.display = 'block';
    formFeedback.innerHTML = `
      <div class="feedback-success">
        <b>Thank you, ${name}!</b>
        <p>Your quotation request has been recorded. Click below to confirm via Email or WhatsApp for immediate processing:</p>
        <div class="feedback-links">
          <a class="btn" href="mailto:info@ubuntucontainers.co.zw?subject=${subject}&body=${body}">Send via Email ${arrow}</a>
          <a class="whatsapp-btn" href="https://wa.me/263771234567?text=${encodeURIComponent(`Hi Ubuntu Containers, my name is ${name}. I submitted a quote enquiry for ${solution} in ${location}. Phone: ${phone}`)}" target="_blank" rel="noopener">Confirm on WhatsApp ${arrow}</a>
        </div>
      </div>
    `;
    quoteForm.reset();
  });
}
