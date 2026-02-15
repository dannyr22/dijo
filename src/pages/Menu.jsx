import './Menu.css';

const HERO = 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/ca88983c-99f7-4b5f-398d-312dc43b5e00/publicContain';

const sections = [
  {
    title: 'Coffee & Drinks',
    emoji: '☕',
    items: [
      { name: 'Espresso', desc: 'Strong & aromatic', price: '£2.50' },
      { name: 'Americano', desc: 'Espresso with hot water', price: '£2.80' },
      { name: 'Cappuccino', desc: 'Espresso with steamed milk foam', price: '£3.20' },
      { name: 'Latte', desc: 'Espresso with steamed milk', price: '£3.20' },
      { name: 'Mocha', desc: 'Espresso with chocolate & milk', price: '£3.50' },
      { name: 'Galão', desc: 'Portuguese milk & coffee', price: '£3.00' },
      { name: 'Bica', desc: 'Traditional Portuguese espresso', price: '£2.50' },
      { name: 'Porto Flip', desc: 'Port wine, coffee & cream', price: '£5.50' },
    ],
  },
  {
    title: 'Fresh Sandwiches',
    emoji: '🥖',
    items: [
      { name: 'Francesinha', desc: 'Portuguese sandwich with ham, sausage, cheese & beer sauce', price: '£8.50' },
      { name: 'Prego', desc: 'Steak sandwich with garlic & mustard', price: '£7.50' },
      { name: 'Bifana', desc: 'Pork sandwich with spicy marinade', price: '£6.50' },
      { name: 'Chicken Piri-Piri', desc: 'Grilled chicken with Portuguese spicy sauce', price: '£7.00' },
      { name: 'Chorizo & Cheese', desc: 'Portuguese chorizo with melted cheese', price: '£6.50' },
      { name: 'Veggie Delight', desc: 'Grilled vegetables, hummus & fresh greens', price: '£6.00' },
    ],
  },
  {
    title: 'Pastries & Desserts',
    emoji: '🥐',
    items: [
      { name: 'Pastel de Nata', desc: 'Traditional custard tart (each)', price: '£2.50' },
      { name: 'Pastéis de Nata (4 pack)', desc: 'Fresh from the oven', price: '£8.50' },
      { name: 'Queijo Frescal', desc: 'Fresh Portuguese cheese', price: '£4.50' },
      { name: 'Bolo de Arroz', desc: 'Portuguese rice cake', price: '£3.50' },
      { name: 'Pudim Flan', desc: 'Portuguese caramel pudding', price: '£4.00' },
      { name: 'Mousse de Chocolate', desc: 'Rich chocolate mousse', price: '£4.50' },
    ],
  },
  {
    title: 'Portuguese Deli',
    emoji: '🫒',
    items: [
      { name: 'Portuguese Chorizo', desc: 'Smoked cured sausage', price: '£6.50' },
      { name: 'Presunto', desc: 'Cured ham', price: '£8.00' },
      { name: 'Azeite Olives', desc: 'Olive oil & olives selection', price: '£5.50' },
      { name: 'Port Wine', desc: 'Selection of fine ports', price: 'From £12.00' },
      { name: 'Portuguese Tinned Fish', desc: 'Sardines, mackerel & tuna', price: '£4.50' },
      { name: 'Arroz de Marisco', desc: 'Seafood rice mix', price: '£7.00' },
    ],
  },
];

export default function Menu() {
  return (
    <div className="menu-page">
      {/* Hero */}
      <div className="page-hero" style={{ backgroundImage: `url(${HERO})` }}>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>Our Menu</h1>
          <p>Fresh sandwiches, pastéis de nata, specialty coffee, and Portuguese deli goods</p>
        </div>
      </div>

      {/* Menu sections */}
      <div className="menu-content">
        <div className="container">
          {sections.map(({ title, emoji, items }) => (
            <div key={title} className="menu-section">
              <div className="menu-section-header">
                <span className="menu-emoji">{emoji}</span>
                <h2>{title}</h2>
              </div>
              <div className="menu-items-grid">
                {items.map(({ name, desc, price }) => (
                  <div key={name} className="menu-item-card">
                    <div className="menu-item-info">
                      <h3>{name}</h3>
                      <p>{desc}</p>
                    </div>
                    <span className="menu-item-price">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order CTA */}
      <div className="menu-order-cta">
        <div className="container order-cta-inner">
          <h2>Ready to Order?</h2>
          <p>Call us ahead to place your order or visit us at High Street, Dorking</p>
          <a href="tel:01306331144" className="btn-primary">Call ahead to order deli items: 01306 331144</a>
        </div>
      </div>
    </div>
  );
}
