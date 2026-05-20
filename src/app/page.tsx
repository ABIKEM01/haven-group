import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import "./landing.css";

export const metadata: Metadata = {
  title: "Handcrafted Haven – Artisan Marketplace",
  description:
    "Discover unique handcrafted items from talented artisans around the world. Buy and sell handmade goods in our vibrant artisan community.",
};

/* ── Static data ── */
const PRODUCTS = [
  {
    id: 1,
    emoji: "🏺",
    bg: "#DBEAFE",
    category: "Ceramics",
    name: "Hand-Thrown Stoneware Bowl",
    artisan: "by Clara Osei",
    price: "$48",
    stars: "★★★★★",
    reviews: 32,
    badge: "Bestseller",
  },
  {
    id: 2,
    emoji: "🧶",
    bg: "#D1FAE5",
    category: "Textiles",
    name: "Merino Wool Throw Blanket",
    artisan: "by Amara Diallo",
    price: "$85",
    stars: "★★★★☆",
    reviews: 18,
    badge: null,
  },
  {
    id: 3,
    emoji: "🪵",
    bg: "#FEF3C7",
    category: "Woodwork",
    name: "Carved Walnut Serving Board",
    artisan: "by Emeka Nwosu",
    price: "$62",
    stars: "★★★★★",
    reviews: 47,
    badge: "New",
  },
  {
    id: 4,
    emoji: "💍",
    bg: "#EDE9FE",
    category: "Jewelry",
    name: "Silver Leaf Drop Earrings",
    artisan: "by Temi Adeyemi",
    price: "$35",
    stars: "★★★★★",
    reviews: 61,
    badge: null,
  },
];

const ARTISANS = [
  {
    id: 1,
    emoji: "👩🏽‍🎨",
    bg: "#DBEAFE",
    name: "Clara Osei",
    specialty: "Ceramics & Pottery",
    bio: "Inspired by Ghanaian traditions, Clara crafts each piece by hand using locally sourced clay and natural glazes.",
    products: 24,
    sales: 312,
    rating: "4.9",
  },
  {
    id: 2,
    emoji: "🧑🏾‍🔧",
    bg: "#D1FAE5",
    name: "Emeka Nwosu",
    specialty: "Woodworking & Carving",
    bio: "A furniture maker with 12 years of experience, Emeka transforms raw timber into heirloom-quality pieces.",
    products: 18,
    sales: 187,
    rating: "4.8",
  },
  {
    id: 3,
    emoji: "👩🏿‍💼",
    bg: "#EDE9FE",
    name: "Amara Diallo",
    specialty: "Weaving & Textiles",
    bio: "Amara weaves traditional West African patterns into contemporary home textiles, one thread at a time.",
    products: 31,
    sales: 429,
    rating: "5.0",
  },
];

const FEATURES = [
  {
    icon: "🏪",
    bg: "blue",
    title: "Seller Profiles",
    desc: "Every artisan gets a dedicated storefront to tell their story, showcase craftsmanship, and build a loyal customer base.",
  },
  {
    icon: "🛍️",
    bg: "green",
    title: "Product Listings",
    desc: "Add items with rich descriptions, multiple images, and pricing. Buyers filter by category, price, or availability.",
  },
  {
    icon: "⭐",
    bg: "amber",
    title: "Reviews & Ratings",
    desc: "Authenticated buyers leave verified reviews, building trust and helping the best artisans rise to the top.",
  },
  {
    icon: "🔍",
    bg: "purple",
    title: "Smart Search",
    desc: "Find exactly what you're looking for with keyword search across products, artisan names, and categories.",
  },
  {
    icon: "🌙",
    bg: "teal",
    title: "Dark Mode",
    desc: "A beautiful dark theme persists across sessions — easy on the eyes while browsing late-night handmade finds.",
  },
  {
    icon: "📱",
    bg: "pink",
    title: "Fully Responsive",
    desc: "Whether on mobile, tablet, or desktop, Handcrafted Haven delivers a seamless, accessible experience.",
  },
];

const STEPS = [
  {
    num: "1",
    title: "Create an Account",
    desc: "Sign up as a buyer or seller in seconds. Your profile is ready to go immediately.",
  },
  {
    num: "2",
    title: "Browse or List",
    desc: "Sellers add their handcrafted items; buyers explore a curated catalog of unique goods.",
  },
  {
    num: "3",
    title: "Connect & Buy",
    desc: "Message artisans directly, add to your cart, and complete purchases securely.",
  },
  {
    num: "4",
    title: "Review & Return",
    desc: "Leave a review, earn community trust, and come back for your next handcrafted treasure.",
  },
];

export default function LandingPage() {
  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar__inner">
            <Link href="/" className="navbar__logo">
              <span className="navbar__logo-icon">✦</span>
              Handcrafted <span>Haven</span>
            </Link>

            <ul className="navbar__nav">
              <li><Link href="/products">Browse</Link></li>
              <li><Link href="/artisans">Artisans</Link></li>
              <li><Link href="/categories">Categories</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>

            <div className="navbar__actions">
              <Link href="/login" className="btn btn-outline">Log In</Link>
              <Link href="/register" className="btn btn-primary">Start Selling</Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero__bg-pattern" aria-hidden="true" />
          <div className="container">
            <div className="hero__inner">
              {/* Left: Copy */}
              <div>
                <div className="hero__badge">
                  <span className="hero__badge-dot" />
                  Now live · 500+ artisans worldwide
                </div>

                <h1 className="hero__title">
                  Discover <em>Handcrafted</em>
                  <br />Treasures, Made with Love
                </h1>

                <p className="hero__subtitle">
                  A vibrant marketplace connecting talented artisans with people
                  who appreciate the beauty and quality of handmade goods. Shop
                  with purpose. Support real creators.
                </p>

                <div className="hero__actions">
                  <Link href="/products" className="btn btn-primary btn-lg">
                    Shop Now →
                  </Link>
                  <Link href="/register" className="btn btn-outline btn-lg">
                    Become a Seller
                  </Link>
                </div>

                <div className="hero__stats">
                  {[
                    { value: "500+", label: "Artisans" },
                    { value: "4,200+", label: "Products" },
                    { value: "12k+", label: "Happy Buyers" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="hero__stat-value">{s.value}</div>
                      <div className="hero__stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Visual */}
              <div className="hero__visual">
                <div className="hero__card-stack">
                  {/* Back cards */}
                  <div className="hero__card hero__card--back-2" aria-hidden="true" />
                  <div className="hero__card hero__card--back-1" aria-hidden="true" />

                  {/* Main card */}
                  <div className="hero__card hero__card--main">
                    <div className="hero__card-img" style={{ background: "#DBEAFE" }}>
                      🏺
                    </div>
                    <div className="hero__card-body">
                      <div className="hero__card-title">Stoneware Bowl</div>
                      <div className="hero__card-price">$48.00</div>
                      <div className="hero__card-rating">★★★★★ (32)</div>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="hero__float-badge hero__float-badge--1">
                    <span className="badge-icon">✅</span>
                    <span>Verified Artisan</span>
                  </div>
                  <div className="hero__float-badge hero__float-badge--2">
                    <span className="badge-icon">🚀</span>
                    <span>Fast Shipping</span>
                  </div>
                  <div className="hero__float-badge hero__float-badge--3">
                    <span className="badge-icon">🔒</span>
                    <span>Secure Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="features">
          <div className="container">
            <div className="section-header fade-up">
              <div className="section-tag">Why Choose Us</div>
              <h2 className="section-title">Everything You Need in One Marketplace</h2>
              <p className="section-subtitle">
                From discovery to delivery, Handcrafted Haven is built to support artisans
                and delight buyers at every step.
              </p>
            </div>

            <div className="features__grid">
              {FEATURES.map((f, i) => (
                <div className="feature-card fade-up" key={f.title} style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className={`feature-card__icon feature-card__icon--${f.bg}`}>
                    {f.icon}
                  </div>
                  <h3 className="feature-card__title">{f.title}</h3>
                  <p className="feature-card__desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED PRODUCTS ── */}
        <section className="products">
          <div className="container">
            <div className="products__header">
              <div>
                <div className="section-tag" style={{ textAlign: "left" }}>Featured Products</div>
                <h2 className="section-title" style={{ textAlign: "left", marginBottom: 0 }}>
                  Handpicked Just for You
                </h2>
              </div>
              <Link href="/products" className="btn btn-outline">
                View All Products →
              </Link>
            </div>

            <div className="products__grid">
              {PRODUCTS.map((p) => (
                <article className="product-card" key={p.id}>
                  <div className="product-card__img" style={{ background: p.bg }}>
                    {p.emoji}
                    {p.badge && <span className="product-card__badge">{p.badge}</span>}
                    <button className="product-card__wishlist" aria-label="Add to wishlist">♡</button>
                  </div>
                  <div className="product-card__body">
                    <div className="product-card__category">{p.category}</div>
                    <h3 className="product-card__name">{p.name}</h3>
                    <p className="product-card__artisan">{p.artisan}</p>
                    <div className="product-card__footer">
                      <span className="product-card__price">{p.price}</span>
                      <div className="product-card__rating">
                        <span className="product-card__stars">{p.stars}</span>
                        <span className="product-card__count">({p.reviews})</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="how-it-works">
          <div className="container">
            <div className="section-header fade-up">
              <div className="section-tag">How It Works</div>
              <h2 className="section-title">Simple from Start to Finish</h2>
              <p className="section-subtitle">
                Getting started on Handcrafted Haven takes minutes, whether youre here to buy or sell.
              </p>
            </div>

            <div className="steps">
              {STEPS.map((s) => (
                <div className="step fade-up" key={s.num}>
                  <div className="step__num">{s.num}</div>
                  <h3 className="step__title">{s.title}</h3>
                  <p className="step__desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED ARTISANS ── */}
        <section className="artisans">
          <div className="container">
            <div className="section-header fade-up">
              <div className="section-tag">Meet the Makers</div>
              <h2 className="section-title">Stories Behind the Craft</h2>
              <p className="section-subtitle">
                Every item has a creator with a story worth knowing. Discover the talented artisans
                who make Handcrafted Haven special.
              </p>
            </div>

            <div className="artisans__grid">
              {ARTISANS.map((a, i) => (
                <div className="artisan-card fade-up" key={a.id} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="artisan-card__avatar" style={{ background: a.bg }}>
                    {a.emoji}
                  </div>
                  <h3 className="artisan-card__name">{a.name}</h3>
                  <div className="artisan-card__specialty">{a.specialty}</div>
                  <p className="artisan-card__bio">{a.bio}</p>
                  <div className="artisan-card__meta">
                    <div className="artisan-card__meta-item">
                      <div className="artisan-card__meta-value">{a.products}</div>
                      <div className="artisan-card__meta-label">Products</div>
                    </div>
                    <div className="artisan-card__meta-item">
                      <div className="artisan-card__meta-value">{a.sales}</div>
                      <div className="artisan-card__meta-label">Sales</div>
                    </div>
                    <div className="artisan-card__meta-item">
                      <div className="artisan-card__meta-value">{a.rating}★</div>
                      <div className="artisan-card__meta-label">Rating</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="cta-banner">
          <div className="container">
            <div className="cta-banner__inner fade-up">
              <h2 className="cta-banner__title">
                Ready to Share Your Craft with the World?
              </h2>
              <p className="cta-banner__subtitle">
                Join hundreds of artisans already earning on Handcrafted Haven. Set up your
                store in minutes — no technical skills needed.
              </p>
              <div className="cta-banner__actions">
                <Link href="/register" className="btn btn-white btn-lg">
                  Start Selling Free
                </Link>
                <Link href="/products" className="btn btn-outline-white btn-lg">
                  Browse the Marketplace
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <div className="footer__brand-name">✦ Handcrafted Haven</div>
              <p className="footer__brand-desc">
                A virtual marketplace connecting talented artisans with customers who
                appreciate the beauty of handmade goods. Shop with heart. Support real makers.
              </p>
              <div className="footer__socials">
                {["𝕏", "f", "in", "📸"].map((s, i) => (
                  <div key={i} className="footer__social">{s}</div>
                ))}
              </div>
            </div>

            <div>
              <div className="footer__col-title">Marketplace</div>
              <ul className="footer__links">
                {["Browse Products", "Featured Artisans", "Categories", "New Arrivals", "Best Sellers"].map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="footer__col-title">Sellers</div>
              <ul className="footer__links">
                {["Start Selling", "Seller Dashboard", "Pricing", "Seller Guide", "Success Stories"].map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="footer__col-title">Company</div>
              <ul className="footer__links">
                {["About Us", "Our Mission", "Blog", "Careers", "Contact"].map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <span>© 2026 Handcrafted Haven · WDD 430 Group Project</span>
            <span>Built with ♥ by Team 02 · BYU-Idaho</span>
          </div>
        </div>
      </footer>

      {/* ── Scroll-reveal script ── */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var els = document.querySelectorAll('.fade-up');
              var io = new IntersectionObserver(function(entries){
                entries.forEach(function(e){
                  if(e.isIntersecting){ e.target.classList.add('visible'); }
                });
              }, { threshold: 0.12 });
              els.forEach(function(el){ io.observe(el); });

              // Navbar shadow on scroll
              var nav = document.querySelector('.navbar');
              window.addEventListener('scroll', function(){
                nav.classList.toggle('scrolled', window.scrollY > 10);
              });
            })();
          `,
        }}
      />
    </>
  );
}