"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  collabArtists,
  episodes,
  festivalFilms,
  Product,
  products,
} from "./data";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  options: string;
  quantity: number;
};

const navItems = [
  ["home", "/"],
  ["mission", "/#mision"],
  ["about", "/#about"],
  ["NFT", "/#nft"],
  ["donate", "/#donate"],
  ["collab contact", "/#contact"],
  ["collabs", "/collabs"],
  ["Stamets Stack Launch", "/paul-stamets-launch"],
  ["shop", "/shop"],
] as const;

function Header({ cartCount, openCart }: { cartCount: number; openCart: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#page">
        Skip to content
      </a>
      <div className="header-inner">
        <div className="social-links" aria-label="Social media">
          <a href="https://www.instagram.com/psychedelicpuppetshow/" target="_blank" rel="noreferrer" aria-label="Instagram">
            IG
          </a>
          <a href="https://twitter.com/showpsychedelic" target="_blank" rel="noreferrer" aria-label="X">
            X
          </a>
          <a href="https://www.youtube.com/channel/UCobXb7XRyz7dd2rtuE6YHMA" target="_blank" rel="noreferrer" aria-label="YouTube">
            YT
          </a>
        </div>
        <a className="brand" href="/">
          Psychedelic Puppet Show
        </a>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <div className="mobile-social">
            <a href="https://www.instagram.com/psychedelicpuppetshow/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://twitter.com/showpsychedelic" target="_blank" rel="noreferrer">X</a>
            <a href="https://www.youtube.com/channel/UCobXb7XRyz7dd2rtuE6YHMA" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </nav>
        <button className="cart-button" type="button" onClick={openCart} aria-label={`Open cart with ${cartCount} items`}>
          Cart <span>{cartCount}</span>
        </button>
        <button
          className={`menu-button ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-email" href="mailto:community@psychedelicpuppet.show">
        community@psychedelicpuppet.show
      </a>
      <nav aria-label="Legal">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/nft-license">NFT License</a>
        <a href="/terms-of-service">Terms of Service</a>
      </nav>
      <p>Copyright. All rights reserved.</p>
    </footer>
  );
}

function CartDrawer({
  items,
  open,
  close,
  updateQuantity,
}: {
  items: CartItem[];
  open: boolean;
  close: () => void;
  updateQuantity: (id: string, quantity: number) => void;
}) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const orderText = items
    .map((item) => `${item.quantity} × ${item.name}${item.options ? ` (${item.options})` : ""}`)
    .join("\n");
  const orderHref = `mailto:community@psychedelicpuppet.show?subject=${encodeURIComponent("Puppet Show shop order")}&body=${encodeURIComponent(`Hello, I would like to order:\n\n${orderText}\n\nEstimated total: $${total.toFixed(2)} CAD\n\nPlease send payment and shipping instructions.`)}`;

  return (
    <>
      <button className={`cart-scrim ${open ? "is-open" : ""}`} type="button" onClick={close} aria-label="Close cart" />
      <aside className={`cart-drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="cart-heading">
          <h2>Your cart</h2>
          <button type="button" onClick={close} aria-label="Close cart">×</button>
        </div>
        {items.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt="" />
                  <div>
                    <h3>{item.name}</h3>
                    {item.options && <p>{item.options}</p>}
                    <p>${item.price.toFixed(2)}</p>
                    <label>
                      Quantity
                      <input
                        type="number"
                        min="0"
                        value={item.quantity}
                        onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
                      />
                    </label>
                  </div>
                </article>
              ))}
            </div>
            <div className="cart-total">
              <span>Estimated total</span>
              <strong>${total.toFixed(2)} CAD</strong>
            </div>
            <a className="button button-pink full-button" href={orderHref}>
              Email order request
            </a>
            <p className="cart-note">Secure online checkout can be connected before launch. Until then, order requests go directly to the nonprofit.</p>
          </>
        )}
      </aside>
    </>
  );
}

function DonateBox({ compact = false }: { compact?: boolean }) {
  const [amount, setAmount] = useState("20");
  const [frequency, setFrequency] = useState("Monthly");
  const href = `mailto:psychedelicpuppetshow@gmail.com?subject=${encodeURIComponent("Psychedelic Puppet Show donation")}&body=${encodeURIComponent(`Hello, I would like to make a ${frequency.toLowerCase()} donation of $${amount || "a custom amount"} CAD. Please send payment instructions.`)}`;

  return (
    <div className={`donation-box ${compact ? "compact" : ""}`}>
      {!compact && <h3>Make a donation</h3>}
      <div className="donation-amounts" role="group" aria-label="Donation amount">
        {["20", "6850", "10250"].map((value) => (
          <label key={value}>
            <input type="radio" name={`amount-${compact}`} value={value} checked={amount === value} onChange={() => setAmount(value)} />
            <span>${Number(value).toLocaleString()}.00</span>
          </label>
        ))}
        <label>
          <input type="radio" name={`amount-${compact}`} value="custom" checked={!['20', '6850', '10250'].includes(amount)} onChange={() => setAmount("")} />
          <span>Custom</span>
        </label>
      </div>
      {!['20', '6850', '10250'].includes(amount) && (
        <label className="field-label">
          Custom amount
          <input type="number" min="1" value={amount} onChange={(event) => setAmount(event.target.value)} />
        </label>
      )}
      <label className="field-label">
        Donation frequency
        <select value={frequency} onChange={(event) => setFrequency(event.target.value)}>
          <option>One-time</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </label>
      <a className="button button-pink full-button" href={href}>
        Donate (donations in CAD)
      </a>
      <p className="donation-note">
        E-transfers avoid transaction fees and can be sent to <strong>psychedelicpuppetshow@gmail.com</strong>.
      </p>
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");

  function submit(event: FormEvent) {
    event.preventDefault();
    const body = `Please add ${email} to the Psychedelic Puppet Show newsletter.`;
    window.location.href = `mailto:community@psychedelicpuppet.show?subject=${encodeURIComponent("Newsletter subscription")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="newsletter-form" onSubmit={submit}>
      <label htmlFor="newsletter-email">Email Address</label>
      <div>
        <input id="newsletter-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" />
        <button className="button button-navy" type="submit">Sign up</button>
      </div>
      <p>We respect your privacy.</p>
    </form>
  );
}

function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "New collaboration");
    const message = String(data.get("message") || "");
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:community@psychedelicpuppet.show?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>Name<input name="name" required /></label>
      <label>Email<input name="email" type="email" required /></label>
      <label>Subject<input name="subject" required /></label>
      <label>Message<textarea name="message" rows={6} required /></label>
      <button className="button button-pink" type="submit">Send email</button>
    </form>
  );
}

function HomePage() {
  return (
    <main id="page">
      <section className="hero-section">
        <video autoPlay muted loop playsInline poster="/media/home-hero.jpg" aria-hidden="true">
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <h1>Psychedelic Puppet Show</h1>
      </section>

      <section className="mission-section" id="mision">
        <div className="mission-copy">
          <p className="eyebrow">Our mission</p>
          <h2>Awakening curiosity and connection through storytelling, psychedelic art, and creative wonder</h2>
          <p>We believe creativity is essential for mental well-being. We are more than a content outlet, we fund and uplift artists, ensuring they can create freely. Creativity is a lifeline, and we are here to keep the inspiration alive.</p>
        </div>
        <div className="mission-orbit" aria-hidden="true">
          <span className="orbit-one" />
          <span className="orbit-two" />
          <span className="orbit-center">?</span>
        </div>
      </section>

      <section className="what-section">
        <div className="narrow-copy">
          <h2>What we DO!</h2>
          <p>The Psychedelic Puppet Show is a non-profit addressing a deep global need for connection, inclusivity, and understanding, combating stigma and misunderstanding surrounding psychedelics and non-ordinary states of consciousness.</p>
          <p>Our platform creates content that awakens curiosity, encourages open dialogue, and invites audiences into a state of awe and wonder.</p>
          <p>Art and storytelling can demystify these experiences, cultivate empathy, and build an interconnected global community.</p>
          <p>We celebrate diverse perspectives and support artists worldwide through commissions, grants, distribution, and revenue-sharing opportunities.</p>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-prompts">
          <h2>Who are the Psychedelic Puppets?</h2>
          <h2>What are they doing here?</h2>
          <h2>Let&apos;s find out...</h2>
        </div>
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/kpZmmI2qfbM?rel=0"
            title="The Arrival of The Psychedelic Puppets"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="nft-intro" id="nft">
        <div className="wide-copy">
          <p className="eyebrow">Collect the stories</p>
          <h2>Psychedelic Puppet Show NFTs</h2>
          <div className="nft-columns">
            <div>
              <p>The Psychedelic Puppet Show is excited to launch NFT collections. These digital collectibles are more than art, they represent a commitment to fostering creativity, supporting artists, and advancing our non-profit mission.</p>
              <p>Artists receive up to 90% of every sale. Your support also funds new commissions, grants, live events, and a growing global creative community.</p>
            </div>
            <div className="edition-list">
              <p><strong>1 of 1, Full Episode</strong><br />Own the complete piece.</p>
              <p><strong>Edition of 5, Iconic Clips</strong><br />Collect high-impact moments.</p>
              <p><strong>Limited Edition of 25</strong><br />Loopable character videos.</p>
              <p><strong>Open Edition, Stills</strong><br />Time-limited still images.</p>
            </div>
          </div>
          <p className="launch-note">Collections based on each episode are launching throughout 2026.</p>
        </div>
      </section>

      <section className="episodes-section" aria-labelledby="episode-heading">
        <div className="wide-copy">
          <p className="eyebrow light-text">The collection</p>
          <h2 id="episode-heading">Films from the puppet universe</h2>
          <div className="episode-grid">
            {episodes.map((episode) => (
              <article className="episode-card" key={episode.title}>
                <img src={episode.image} alt="" loading="lazy" />
                <div className="episode-body">
                  <h3>{episode.title}</h3>
                  <p className="specs">{episode.specs}</p>
                  {episode.sales && <p className="sales">{episode.sales}</p>}
                  <p>{episode.description}</p>
                  <div className="episode-links">
                    <a href={episode.film} target="_blank" rel="noreferrer">1 of 1: Film</a>
                    {episode.extras?.map((extra) => (
                      <a key={extra.label} href={extra.href} target="_blank" rel="noreferrer">{extra.label}</a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fund-section" id="donate">
        <div className="wide-copy">
          <p className="eyebrow light-text">Change the conversation</p>
          <h2>Fund a question. Create a film.</h2>
          <div className="fund-layout">
            <div className="fund-copy">
              <h3>What We Do</h3>
              <p>We produce artist-led 5-minute mini-films exploring psychedelics, consciousness, mental health, and transformation. Each film is built around one resonant question and brought to life by a commissioned artist working in animation, live action, collage, experimental video, or hybrid forms.</p>
              <h3>How It Works</h3>
              <ol>
                <li><strong>Choose or propose a question.</strong> Bring an inquiry about meaning, healing, creativity, Indigenous knowledge, ethics, or the future of consciousness.</li>
                <li><strong>We commission an artist.</strong> A filmmaker, animator, or visual storyteller develops the project with creative freedom.</li>
                <li><strong>The work gets made and shared.</strong> Your funding creates a finished film distributed through our platform, festivals, and education.</li>
                <li><strong>The conversation grows.</strong> Each project amplifies voices and challenges stigma.</li>
              </ol>
              <h3>Investment Levels</h3>
              <p><strong>Base Project: $5,000 USD (about $6,800 CAD)</strong><br />Remote or conceptual work, including animation, archival, narrated essays, and experimental pieces.</p>
              <p><strong>In-Person Interview Add-On: +$2,500 USD (about $3,400 CAD)</strong><br />Travel, on-location filming, and expanded production.</p>
              <p><strong>90% or more of funds go directly to artists and production.</strong></p>
            </div>
            <div>
              <div className="question-card">
                <h3>Example Project Questions</h3>
                <p>What does a psychedelic experience mean after the experience is over?</p>
                <p>Can psychedelics change how people relate to suffering?</p>
                <p>Is modern science catching up to Indigenous knowledge?</p>
                <p>Why do psychedelics so often unlock artistic expression and play?</p>
                <p>What risks do we face as psychedelics become medicalized and commercialized?</p>
              </div>
              <DonateBox />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-grid">
          <div>
            <p className="eyebrow light-text">Make something strange with us</p>
            <h2>Contact us</h2>
            <p>The Psychedelic Puppet Show aims to create a community of creatives who spread knowledge and promote each other. We are open to new collaborations, so please get in touch.</p>
            <ContactForm />
          </div>
          <div className="subscribe-panel">
            <h2>Subscribe</h2>
            <p>Sign up with your email address to receive news and updates.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function CollabsPage() {
  return (
    <main id="page" className="inner-page collabs-page">
      <section className="inner-hero collabs-hero" aria-label="Psychedelic puppet collaborators" />
      <section className="collab-section navy-section">
        <div className="wide-copy">
          <h1>Artist grants and collaborators</h1>
          <div className="two-columns">
            <div>
              <p>The Psychedelic Puppet Show supports artists by gathering funding, collaborating on interesting projects, and providing grants so artists can focus on their craft.</p>
              <p>We recently raised $33,000 USD through our collaboration with Gitcoin in their GG21 round, helping fund amazing projects.</p>
            </div>
            <div>
              <h2>Current grant winners</h2>
              <ul className="name-list">
                {collabArtists.map((artist) => <li key={artist}>{artist}</li>)}
              </ul>
            </div>
          </div>
          <div className="collaborator-callout">
            <span>Our amazing collaborators</span>
            <strong>Paul Stamets · Rick Doblin · Jason Silva · Brad Necyk</strong>
          </div>
        </div>
      </section>
      <section className="festival-section">
        <div className="wide-copy">
          <h2>Film festivals</h2>
          <p className="lead">Winners and artists from our first official New York film festival, “The Psychedelic Puppet Show Presents!”</p>
          <div className="film-list">
            {festivalFilms.map(([film, artist, href]) => (
              <p key={film}><strong>{film}</strong><span>by</span><a href={href} target="_blank" rel="noreferrer">{artist}</a></p>
            ))}
          </div>
          <p className="festival-note">Our film festivals are funded mainly by board donations and volunteer work. We currently do not make a profit on screenings.</p>
          <h3>Upcoming festivals and events</h3>
          <p>September 2025: The Psychedelic Puppet Show Presents! 02 at Psychedelic Assembly</p>
        </div>
      </section>
    </main>
  );
}

function PaulPage({ addToCart }: { addToCart: (product: Product, options?: string, quantity?: number) => void }) {
  const stametsProducts = products.filter((product) => product.category === "Stamets");

  return (
    <main id="page" className="inner-page paul-page">
      <section className="paul-hero">
        <img src="/media/paul-hero.png" alt="Paul Stamets in the psychedelic puppet universe" />
        <div className="hero-shade" />
        <div>
          <p className="eyebrow light-text">Psychedelic Puppet Show × Paul Stamets</p>
          <h1>Welcome to the Stamets Stack Collection!</h1>
        </div>
      </section>
      <section className="paul-intro">
        <div className="wide-copy paul-intro-grid">
          <img src="/media/paul-portrait.png" alt="Psychedelic portrait of Paul Stamets" />
          <div>
            <h2>Fungi meet felt</h2>
            <p className="lead">Step into a surreal journey where fungi meet felt. The Psychedelic Puppet Show joins forces with Paul Stamets in a mind-expanding film and collectible series inspired by the legendary Stamets Stack.</p>
            <h3>Love what we are making and want to support artists?</h3>
            <DonateBox compact />
          </div>
        </div>
      </section>
      <section className="collectibles-section">
        <div className="wide-copy collectibles-grid">
          <div>
            <p className="eyebrow light-text">Own a piece of puppet history</p>
            <h2>Digital collectibles</h2>
            <p>Exclusive collectibles are available in ETH, BTC, or USD, with credit card purchase options on supported marketplaces.</p>
            <article><h3>1-of-1 Stamets Stack Short Film</h3><p>Own the only edition of the full animated episode, where puppets, mushrooms, and Paul Stamets collide in cosmic absurdity.</p></article>
            <article><h3>1-of-1 Scene & Outtake Collection</h3><p>A rare set of behind-the-scenes moments, spontaneous puppet chaos, and unreleased production gems.</p></article>
            <article><h3>Script Inscribed on the Bitcoin Blockchain</h3><p>The full film script immutably etched into Bitcoin, storytelling as ledgered legacy.</p></article>
            <div className="collectible-links">
              <a href="https://opensea.io/item/ethereum/0x5e390edc698fbe8b28441fa9abd99eb3969f6c7f/1" target="_blank" rel="noreferrer">1 of 1 Film</a>
              <a href="https://magiceden.io/u/PsychedelicPuppets?chains=%5B%22bitcoin%22%5D" target="_blank" rel="noreferrer">Bitcoin inscribed script</a>
              <a href="https://opensea.io/collection/the-stamets-stack-collection" target="_blank" rel="noreferrer">Scene and Outtake Collection</a>
            </div>
          </div>
          <img src="/media/paul-collection.png" alt="Stamets Stack digital collectible" />
        </div>
      </section>
      <section className="stamets-shop-section">
        <div className="wide-copy">
          <h2>New merchandise</h2>
          <p className="lead">Want a Stamets Stack film shirt? Check out our store now!</p>
          <div className="featured-products">
            {stametsProducts.map((product) => (
              <ProductCard key={product.slug} product={product} addToCart={addToCart} />
            ))}
          </div>
          <a className="button button-navy" href="/shop">Full shop</a>
        </div>
      </section>
      <section className="subscribe-strip">
        <div><h2>Subscribe to stay connected</h2><p>Sign up to stay in touch with our independent creative community.</p></div>
        <NewsletterForm />
      </section>
    </main>
  );
}

function ProductCard({ product, addToCart }: { product: Product; addToCart: (product: Product) => void }) {
  const hasOptions = Boolean(product.colors?.length || product.sizes?.length);
  return (
    <article className="product-card">
      <a href={`/shop/p/${product.slug}`} className="product-image-link">
        <img src={product.image} alt={product.name} loading="lazy" />
      </a>
      <a href={`/shop/p/${product.slug}`} className="product-title">{product.name}</a>
      <span className="product-price">{product.priceLabel}</span>
      {hasOptions ? (
        <a className="button button-outline" href={`/shop/p/${product.slug}`}>View options</a>
      ) : (
        <button className="button button-outline" type="button" onClick={() => addToCart(product)}>Add to cart</button>
      )}
    </article>
  );
}

function ShopPage({ addToCart, stametsOnly = false }: { addToCart: (product: Product) => void; stametsOnly?: boolean }) {
  const shownProducts = stametsOnly ? products.filter((product) => product.category === "Stamets") : products;
  return (
    <main id="page" className="shop-page">
      <section className="shop-shell">
        <h1>Shop</h1>
        <div className="shop-layout">
          <aside className="shop-categories" aria-label="Shop categories">
            <a className={!stametsOnly ? "active" : ""} href="/shop">All</a>
            <a className={stametsOnly ? "active" : ""} href="/shop/stamets">Stamets</a>
          </aside>
          <div className="product-grid">
            {shownProducts.map((product) => (
              <ProductCard key={product.slug} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ProductPage({ product, addToCart }: { product: Product; addToCart: (product: Product, options?: string, quantity?: number) => void }) {
  const [color, setColor] = useState(product.colors?.[0] || "");
  const [size, setSize] = useState(product.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const options = [color && `Color: ${color}`, size && `Size: ${size}`].filter(Boolean).join(", ");

  return (
    <main id="page" className="product-page">
      <div className="breadcrumbs"><a href="/shop">shop</a><span>›</span><span>{product.name}</span></div>
      <section className="product-detail">
        <div className="product-main-image"><img src={product.image} alt={product.name} /></div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="detail-price">{product.priceLabel}</p>
          <p>{product.description}</p>
          <ul>{product.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          {product.colors && (
            <label className="field-label">Color<select value={color} onChange={(event) => setColor(event.target.value)}>{product.colors.map((value) => <option key={value}>{value}</option>)}</select></label>
          )}
          {product.sizes && (
            <label className="field-label">Size<select value={size} onChange={(event) => setSize(event.target.value)}>{product.sizes.map((value) => <option key={value}>{value}</option>)}</select></label>
          )}
          <label className="quantity-field">Quantity<input type="number" min="1" max="20" value={quantity} onChange={(event) => setQuantity(Math.max(1, Number(event.target.value)))} /></label>
          <button className="button button-pink full-button" type="button" onClick={() => addToCart(product, options, quantity)}>Add to cart</button>
          <p className="product-note">This product is made especially for you as soon as you place an order. Making products on demand helps reduce overproduction.</p>
        </div>
      </section>
    </main>
  );
}

function VideosPage() {
  return (
    <main id="page" className="inner-page videos-page">
      <section className="simple-hero"><p className="eyebrow light-text">Explainer videos</p><h1>Custom explainer videos with soul + storytelling</h1><p>Where education meets imagination, one puppet at a time.</p></section>
      <section className="video-services">
        <div className="wide-copy two-columns">
          <div><h2>What You Get</h2><ul><li>Collaborative custom scriptwriting</li><li>Original visual assets made with our unique AI methodology</li><li>Original sound design and voice work</li><li>Post-production and brand integration</li><li>High-quality 4K delivery for all platforms</li></ul></div>
          <div><h2>Perfect for</h2><ul><li>Program and mission explainers</li><li>Awareness campaigns</li><li>Course launches</li><li>Community storytelling</li><li>Psychedelic education and integration tools</li><li>Brand storytelling with heart</li></ul></div>
        </div>
      </section>
      <section className="pricing-section">
        <div className="wide-copy"><h2>Pricing tiers (per finished minute)</h2><div className="pricing-grid"><article><h3>Animation Tier</h3><strong>$2,500/min USD</strong><p>Custom visual assets, simple AI-assisted set and editing, collaborative moodboard development, and one revision round.</p></article><article><h3>Production Tier</h3><strong>$5,000/min USD</strong><p>Collaborative scriptwriting and aesthetic development, custom visual assets, full post-production, and two revision rounds.</p></article></div><p className="lead">Let&apos;s make something people will remember, laugh at, and maybe even cry over, in a good way.</p><a className="button button-pink" href="/#contact">Start a conversation</a></div>
      </section>
    </main>
  );
}

type LegalKind = "terms" | "privacy" | "nft";

const legalPages: Record<LegalKind, { title: string; updated?: string; sections: { title: string; body: string[] }[] }> = {
  terms: {
    title: "Terms of Service",
    updated: "Last updated: March 20, 2025",
    sections: [
      { title: "Introduction and Acceptance", body: ["Psychedelic Puppet Show (PPS) is a not-for-profit corporation incorporated under the Canada Not-For-Profit Corporations Act.", "By accessing this website, you agree to be bound by these terms. The terms govern access to this website, its content and services, and the acquisition or ownership of any PPS NFT. If you do not agree, you must not use the website or acquire a PPS NFT."] },
      { title: "PPS NFTs", body: ["By acquiring a PPS NFT, the NFT Holder accepts these Terms and the NFT License. The NFT License is incorporated into these Terms by reference."] },
      { title: "Not Investments", body: ["PPS NFTs are collectible digital artwork only. They are not investment products, securities, or financial instruments. The market is high-risk, speculative, and volatile. PPS makes no representation regarding value and is not liable for losses from buying, selling, or trading PPS NFTs."] },
      { title: "Buying, Selling, and Trading", body: ["PPS NFTs may be acquired on third-party marketplaces or directly from other NFT Holders. Your use of a marketplace is subject to that marketplace's terms. PPS is not responsible for marketplace, exchange, gas, failed transaction, or payment fees."] },
      { title: "Resale Royalty", body: ["PPS NFTs are subject to a 10% resale royalty. If a platform does not automatically collect it, the NFT Holder agrees to pay it to PPS within seven days of the transaction."] },
      { title: "Taxes", body: ["You are responsible for determining and paying applicable taxes on NFT transactions. PPS recommends consulting a qualified tax professional."] },
      { title: "Intellectual Property", body: ["Ownership of a PPS NFT does not grant ownership of associated intellectual property. An NFT Holder receives only the limited rights described in the NFT License."] },
      { title: "Limited Warranties and Liability", body: ["PPS NFTs and website content are provided as is, subject to minimum warranties required by applicable law. PPS is not responsible for user error, blockchain or network error, server failure, wallet corruption, unauthorized access, or third-party attacks."] },
      { title: "PPS Merch", body: ["The Merch Store is offered with third-party partners. Payment is handled by Stripe and merchandise is fulfilled by Printful. Orders are subject to their applicable terms, alongside your statutory rights under British Columbia law. Damaged, defective, or incorrectly described items may be returned within 30 days of receipt."] },
      { title: "Donations", body: ["PPS is a registered not-for-profit corporation, not a charity, and cannot issue tax receipts. Donation payments may be handled by Stripe or accepted by e-transfer."] },
      { title: "Email Newsletter", body: ["By subscribing, you consent to receive electronic messages from PPS in accordance with Canada's Anti-Spam Legislation. You can withdraw consent at any time by using an unsubscribe link or emailing community@psychedelicpuppet.show."] },
      { title: "Indemnification", body: ["Users and NFT Holders agree to indemnify PPS and its directors, officers, employees, and agents against third-party claims arising from a breach of these Terms, the NFT License, or applicable law."] },
      { title: "Disputes", body: ["These Terms are governed by the laws of British Columbia and applicable federal laws of Canada. Disputes will be heard in the courts of British Columbia, Canada."] },
      { title: "Miscellaneous", body: ["These Terms, the NFT License, and Privacy Policy form the entire agreement for the subject matter described. If one provision is invalid, the remaining provisions stay in force. Material changes will be posted at least 30 days before taking effect."] },
      { title: "Contact", body: ["Questions about these Terms can be sent to community@psychedelicpuppet.show."] },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: March 20, 2025",
    sections: [
      { title: "Introduction and Acceptance", body: ["Psychedelic Puppet Show (PPS) is a not-for-profit corporation incorporated under the Canada Not-For-Profit Corporations Act. By using our services, you acknowledge this Privacy Policy."] },
      { title: "Scope", body: ["Personal Information means information about an identifiable individual, including name, address, email, financial information, and other data that may be linked to an individual. This policy applies to our website, store, newsletter, NFTs, donations, and social media services."] },
      { title: "Information Collection and Use", body: ["We collect information needed to provide services, communicate with you, complete merchandise orders, receive donations, deliver the newsletter, transfer NFTs, collect royalties, and improve the site.", "Information may include website usage data, email addresses, information you send by email or social media, public blockchain addresses and transaction records, and order or donation data shared by payment processors."] },
      { title: "Cookies and Tracking Technologies", body: ["The website and service providers may use cookies and similar technologies for security, essential functionality, analytics, and remembering preferences. Browser settings can be used to limit non-essential cookies."] },
      { title: "Data Sharing and Disclosure", body: ["Information may be shared with service providers such as payment, fulfillment, email, hosting, analytics, and marketplace providers when needed to provide services. We may also disclose information when required by law."] },
      { title: "Data Security", body: ["We use reasonable administrative and technical safeguards. No internet transmission or storage method can be guaranteed completely secure."] },
      { title: "Your Rights", body: ["Depending on your location, you may request access to or correction of Personal Information, withdraw consent, request deletion where applicable, or raise a concern about how information is handled."] },
      { title: "International Data Transfers", body: ["Some service providers operate outside Canada. Information may be processed in other jurisdictions and subject to their laws."] },
      { title: "Children", body: ["PPS does not knowingly collect Personal Information from children under 13. If such information is identified, it will be deleted promptly."] },
      { title: "Changes to the Privacy Policy", body: ["We may update this policy. Material changes will be posted on the website at least 30 days before they take effect."] },
      { title: "Contact Information", body: ["Privacy Officer: Brad Necyk", "Email: community@psychedelicpuppet.show", "We aim to respond to privacy inquiries within 30 days."] },
    ],
  },
  nft: {
    title: "NFT License",
    sections: [
      { title: "Acceptance", body: ["By acquiring a PPS NFT, the NFT Holder agrees to this NFT License, the PPS Terms of Service, and the Privacy Policy."] },
      { title: "Intellectual Property", body: ["Holding a PPS NFT does not grant ownership of copyright, trademark, design rights, or other associated intellectual property. Those rights remain with PPS or the original artist."] },
      { title: "Grant of Rights", body: ["An NFT Holder may display and exhibit the NFT privately or publicly, transfer or resell it, loan or lease it for exhibition, charge admission to an exhibition, or destroy and dispose of it. Public display must include the attribution information associated with the NFT."] },
      { title: "No Commercial Use", body: ["Except as expressly permitted, the artwork may not be commercially exploited, including through merchandise, prints, or other reproductions, without written permission from the intellectual property owner."] },
      { title: "No Modification of Artwork", body: ["The NFT Holder may not modify, distort, or otherwise alter the NFT artwork."] },
      { title: "Transfer or Resale", body: ["When the NFT is transferred, rights under this license transfer to the new holder and the previous holder relinquishes them."] },
      { title: "Resale Royalty", body: ["A transfer for consideration is subject to a royalty equal to 10% of the gross proceeds. If a platform does not collect it automatically, the transferor must pay PPS within seven days."] },
      { title: "Termination", body: ["A breach may result in immediate termination of this license and the rights granted under it."] },
      { title: "Governing Law", body: ["This license is governed by the laws of British Columbia, Canada, unless agreed otherwise in writing."] },
      { title: "No Warranty", body: ["The PPS NFT is provided as is without warranty, except as required by applicable law."] },
    ],
  },
};

function LegalPage({ kind }: { kind: LegalKind }) {
  const page = legalPages[kind];
  return (
    <main id="page" className="legal-page">
      <div className="legal-inner">
        <h1>{page.title}</h1>
        <p>https://psychedelicpuppet.show</p>
        {page.updated && <p>{page.updated}</p>}
        {page.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
      </div>
    </main>
  );
}

function ContactPage() {
  return <main id="page" className="standalone-contact"><div><p className="eyebrow light-text">Collaboration</p><h1>Have a project? Let&apos;s talk.</h1><p>Tell us about the story, film, event, artwork, or partnership you have in mind.</p><ContactForm /></div></main>;
}

function LegacyPage({ path }: { path: string }) {
  if (path.startsWith("/notes-on-puppets")) {
    return <main id="page" className="legacy-page"><article><p className="eyebrow">Notes on puppets</p><h1>Today is World Puppetry Day.</h1><p>By Dennis Walker</p><p>The craft of puppetry has deep roots in varied cultures across the globe. From India to Vietnam, from Mexico to Nigeria, puppetry is a living folk tradition that educates and inspires audiences through storytelling and stagecraft.</p><p>The historical puppeteer is equal parts cultural archivist and trickster, historian and entertainer. From Balinese Wayang Kulit and Vietnamese water puppets to Italian marionettes and Japanese Bunraku, every culture contributes to a rich global folk heritage.</p><p>Today, the Psychedelic Puppet Show carries this ancient craft into the age of digital media and artificial intelligence. We honor the roots of the form while inviting our audience to help educate, inspire, and uplift the psychedelic community.</p></article></main>;
  }
  if (path === "/call-for-submissions") {
    return <main id="page" className="legacy-page"><article><p className="eyebrow">Artist archive</p><h1>Call for submissions</h1><p>We want to hear your trip reports, insights, moments of awe, and the challenges you experienced when you jumped on the bus.</p><p>We are looking for vertical videos of 60 seconds or less, ready for YouTube Shorts as MP4 files. Animate, let AI run wild, or make the visuals as psychedelic and full of puppets as you want.</p><p>Send submissions to <a href="mailto:episodes@psychedelicpuppet.show">episodes@psychedelicpuppet.show</a>.</p></article></main>;
  }
  if (path === "/gitcoin-round") {
    return <main id="page" className="legacy-page"><article><p className="eyebrow">Project archive</p><h1>Gitcoin round</h1><p>We raised funds to create a prize pool for a creative competition and the first season of the Psychedelic Puppet Show.</p><p>Gitcoin uses quadratic funding, where each donation also works as a vote that helps multiply matching funds. This archived page documents the campaign and its community-funded origins.</p></article></main>;
  }
  return <main id="page" className="legacy-page"><article><p className="eyebrow">Puppet archive</p><h1>Creativity, storytelling, and wonder</h1><p>This archived page has been preserved as part of the Psychedelic Puppet Show&apos;s history.</p><a className="button button-pink" href="/">Return home</a></article></main>;
}

function NotFoundPage() {
  return <main id="page" className="not-found"><div><p className="eyebrow light-text">Lost in the puppet universe</p><h1>That page wandered off.</h1><a className="button button-pink" href="/">Return home</a></div></main>;
}

export function Site({ pathname }: { pathname: string }) {
  const normalizedPath = (pathname || "/").replace(/\/+$/, "") || "/";
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  function addToCart(product: Product, options = "", quantity = 1) {
    const id = `${product.slug}-${options}`;
    setCart((items) => {
      const existing = items.find((item) => item.id === id);
      if (existing) return items.map((item) => item.id === id ? { ...item, quantity: item.quantity + quantity } : item);
      return [...items, { id, name: product.name, image: product.image, price: product.price, options, quantity }];
    });
    setCartOpen(true);
  }

  function updateQuantity(id: string, quantity: number) {
    setCart((items) => quantity <= 0 ? items.filter((item) => item.id !== id) : items.map((item) => item.id === id ? { ...item, quantity } : item));
  }

  let content;
  if (normalizedPath === "/" || normalizedPath === "/home") content = <HomePage />;
  else if (normalizedPath === "/collabs") content = <CollabsPage />;
  else if (normalizedPath === "/paul-stamets-launch") content = <PaulPage addToCart={addToCart} />;
  else if (normalizedPath === "/shop") content = <ShopPage addToCart={addToCart} />;
  else if (normalizedPath === "/shop/stamets") content = <ShopPage addToCart={addToCart} stametsOnly />;
  else if (normalizedPath.startsWith("/shop/p/")) {
    const product = products.find((item) => `/shop/p/${item.slug}` === normalizedPath);
    content = product ? <ProductPage product={product} addToCart={addToCart} /> : <NotFoundPage />;
  } else if (normalizedPath === "/videos") content = <VideosPage />;
  else if (normalizedPath === "/contact") content = <ContactPage />;
  else if (normalizedPath === "/terms-of-service") content = <LegalPage kind="terms" />;
  else if (normalizedPath === "/privacy-policy") content = <LegalPage kind="privacy" />;
  else if (normalizedPath === "/nft-license") content = <LegalPage kind="nft" />;
  else if (["/call-for-submissions", "/gitcoin-round", "/video-competition", "/notes-on-puppets", "/notes-on-puppets-1", "/home-1"].includes(normalizedPath) || normalizedPath.startsWith("/notes-on-puppets/")) content = <LegacyPage path={normalizedPath} />;
  else content = <NotFoundPage />;

  return (
    <div className="site-shell">
      <Header cartCount={cartCount} openCart={() => setCartOpen(true)} />
      {content}
      <Footer />
      <CartDrawer items={cart} open={cartOpen} close={() => setCartOpen(false)} updateQuantity={updateQuantity} />
    </div>
  );
}
