// Products Data (Mock - Indian Rupees)
const products = [
  // Vegetables
  { id: 1, name: "Fresh Tomatoes", category: "vegetables", price: 40, unit: "per kg", emoji: "🍅", badge: "Fresh" },
  { id: 2, name: "Onions", category: "vegetables", price: 35, unit: "per kg", emoji: "🧅", badge: null },
  { id: 3, name: "Potatoes", category: "vegetables", price: 30, unit: "per kg", emoji: "🥔", badge: null },
  { id: 4, name: "Green Capsicum", category: "vegetables", price: 60, unit: "per kg", emoji: "🫑", badge: null },
  { id: 5, name: "Carrots", category: "vegetables", price: 45, unit: "per kg", emoji: "🥕", badge: "Fresh" },
  { id: 6, name: "Cauliflower", category: "vegetables", price: 40, unit: "per piece", emoji: "🥬", badge: null },
  { id: 7, name: "Spinach (Palak)", category: "vegetables", price: 25, unit: "per bunch", emoji: "🥬", badge: "Fresh" },
  { id: 8, name: "Lady Finger (Bhindi)", category: "vegetables", price: 50, unit: "per kg", emoji: "🥒", badge: null },
  
  // Fruits
  { id: 9, name: "Bananas", category: "fruits", price: 50, unit: "per dozen", emoji: "🍌", badge: null },
  { id: 10, name: "Apples", category: "fruits", price: 180, unit: "per kg", emoji: "🍎", badge: "Premium" },
  { id: 11, name: "Oranges", category: "fruits", price: 80, unit: "per kg", emoji: "🍊", badge: null },
  { id: 12, name: "Grapes", category: "fruits", price: 90, unit: "per kg", emoji: "🍇", badge: "Fresh" },
  { id: 13, name: "Pomegranate", category: "fruits", price: 150, unit: "per kg", emoji: "🫐", badge: null },
  { id: 14, name: "Papaya", category: "fruits", price: 40, unit: "per kg", emoji: "🥭", badge: null },
  { id: 15, name: "Watermelon", category: "fruits", price: 25, unit: "per kg", emoji: "🍉", badge: "Seasonal" },
  { id: 16, name: "Mango (Seasonal)", category: "fruits", price: 120, unit: "per kg", emoji: "🥭", badge: "Seasonal" },

  // Dairy & Eggs
  { id: 17, name: "Amul Milk (1L)", category: "dairy", price: 60, unit: "per pack", emoji: "🥛", badge: null },
  { id: 18, name: "Curd (400g)", category: "dairy", price: 40, unit: "per pack", emoji: "🥛", badge: "Fresh" },
  { id: 19, name: "Paneer (200g)", category: "dairy", price: 80, unit: "per pack", emoji: "🧀", badge: null },
  { id: 20, name: "Eggs (12 pcs)", category: "dairy", price: 84, unit: "per tray", emoji: "🥚", badge: null },
  { id: 21, name: "Butter (100g)", category: "dairy", price: 55, unit: "per pack", emoji: "🧈", badge: null },
  { id: 22, name: "Cheese Slices", category: "dairy", price: 95, unit: "per pack", emoji: "🧀", badge: null },
  { id: 23, name: "Amul Lassi", category: "dairy", price: 25, unit: "per bottle", emoji: "🥛", badge: null },
  { id: 24, name: "Cream (200ml)", category: "dairy", price: 45, unit: "per pack", emoji: "🥛", badge: null },

  // Staples & Grains
  { id: 25, name: "Basmati Rice (5kg)", category: "staples", price: 450, unit: "per bag", emoji: "🍚", badge: "Best Seller" },
  { id: 26, name: "Wheat Atta (5kg)", category: "staples", price: 220, unit: "per bag", emoji: "🌾", badge: null },
  { id: 27, name: "Toor Dal (1kg)", category: "staples", price: 140, unit: "per kg", emoji: "🫘", badge: null },
  { id: 28, name: "Chana Dal (1kg)", category: "staples", price: 110, unit: "per kg", emoji: "🫘", badge: null },
  { id: 29, name: "Cooking Oil (1L)", category: "staples", price: 160, unit: "per bottle", emoji: "🫒", badge: null },
  { id: 30, name: "Sugar (1kg)", category: "staples", price: 45, unit: "per kg", emoji: "🍬", badge: null },
  { id: 31, name: "Salt (1kg)", category: "staples", price: 22, unit: "per kg", emoji: "🧂", badge: null },
  { id: 32, name: "Besan (500g)", category: "staples", price: 65, unit: "per pack", emoji: "🌾", badge: null },

  // Snacks
  { id: 33, name: "Lays Chips", category: "snacks", price: 20, unit: "per pack", emoji: "🍟", badge: null },
  { id: 34, name: "Haldiram Namkeen", category: "snacks", price: 40, unit: "per pack", emoji: "🍿", badge: "Popular" },
  { id: 35, name: "Parle-G Biscuits", category: "snacks", price: 10, unit: "per pack", emoji: "🍪", badge: null },
  { id: 36, name: "Good Day Cookies", category: "snacks", price: 30, unit: "per pack", emoji: "🍪", badge: null },
  { id: 37, name: "Maggi Noodles", category: "snacks", price: 14, unit: "per pack", emoji: "🍜", badge: "Popular" },
  { id: 38, name: "Kurkure", category: "snacks", price: 20, unit: "per pack", emoji: "🌶️", badge: null },
  { id: 39, name: "Dairy Milk (50g)", category: "snacks", price: 45, unit: "per bar", emoji: "🍫", badge: null },
  { id: 40, name: "Cold Drink (2L)", category: "snacks", price: 85, unit: "per bottle", emoji: "🥤", badge: null },

  // Household
  { id: 41, name: "Surf Excel (1kg)", category: "household", price: 180, unit: "per pack", emoji: "🧴", badge: null },
  { id: 42, name: "Vim Bar", category: "household", price: 12, unit: "per bar", emoji: "🧽", badge: null },
  { id: 43, name: "Lizol Floor Cleaner", category: "household", price: 110, unit: "per bottle", emoji: "🧹", badge: null },
  { id: 44, name: "Harpic", category: "household", price: 85, unit: "per bottle", emoji: "🚽", badge: null },
  { id: 45, name: "Tissue Paper Roll", category: "household", price: 35, unit: "per roll", emoji: "🧻", badge: null },
  { id: 46, name: "Garbage Bags", category: "household", price: 50, unit: "per pack", emoji: "🗑️", badge: null },
  { id: 47, name: "Mosquito Coil", category: "household", price: 45, unit: "per pack", emoji: "🦟", badge: null },
  { id: 48, name: "Colgate Toothpaste", category: "household", price: 55, unit: "per tube", emoji: "🦷", badge: null },

  // More products
  { id: 49, name: "Ginger (Adrak)", category: "vegetables", price: 120, unit: "per kg", emoji: "🫚", badge: null },
  { id: 50, name: "Garlic (Lahsun)", category: "vegetables", price: 200, unit: "per kg", emoji: "🧄", badge: null },
  { id: 51, name: "Green Chilli", category: "vegetables", price: 80, unit: "per kg", emoji: "🌶️", badge: null },
  { id: 52, name: "Coriander Leaves", category: "vegetables", price: 20, unit: "per bunch", emoji: "🌿", badge: "Fresh" },
  { id: 53, name: "Guava", category: "fruits", price: 60, unit: "per kg", emoji: "🍐", badge: "Seasonal" },
  { id: 54, name: "Sweet Lime (Mosambi)", category: "fruits", price: 70, unit: "per kg", emoji: "🍋", badge: null },
  { id: 55, name: "Ghee (500g)", category: "dairy", price: 320, unit: "per jar", emoji: "🧈", badge: "Pure" },
  { id: 56, name: "Khoya (250g)", category: "dairy", price: 120, unit: "per pack", emoji: "🥛", badge: null },
  { id: 57, name: "Moong Dal (1kg)", category: "staples", price: 130, unit: "per kg", emoji: "🫘", badge: null },
  { id: 58, name: "Rajma (1kg)", category: "staples", price: 160, unit: "per kg", emoji: "🫘", badge: null },
  { id: 59, name: "Poha (500g)", category: "staples", price: 40, unit: "per pack", emoji: "🌾", badge: null },
  { id: 60, name: "Bournvita (500g)", category: "snacks", price: 230, unit: "per jar", emoji: "☕", badge: null },
];

// Cart (stored in localStorage)
let cart = JSON.parse(localStorage.getItem('kjfm_cart')) || [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const orderBtn = document.getElementById('orderBtn');
const clearCartBtn = document.getElementById('clearCart');
const noResults = document.getElementById('noResults');
const productCountEl = document.getElementById('productCount');
const yearSpan = document.getElementById('year');

// Set year
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Render Products
function renderProducts(productsToRender) {
  productsGrid.innerHTML = '';
  
  if (productsToRender.length === 0) {
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  productsToRender.forEach(product => {
    const inCart = cart.find(item => item.id === product.id);
    const cardHTML = `
      <div class="product-card" data-id="${product.id}">
        <div class="product-image">
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
          <span>${product.emoji}</span>
        </div>
        <div class="product-info">
          <span class="product-category">${product.category}</span>
          <h4 class="product-name">${product.name}</h4>
          <span class="product-unit">${product.unit}</span>
          <div class="product-price">₹${product.price}</div>
          <div class="product-actions">
            ${inCart ? `
              <div class="quantity-controls">
                <button class="qty-btn" onclick="updateQuantity(${product.id}, -1)">−</button>
                <span class="qty-display">${inCart.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${product.id}, 1)">+</button>
              </div>
            ` : `
              <button class="add-to-cart" onclick="addToCart(${product.id})">🛒 Add to Cart</button>
            `}
          </div>
        </div>
      </div>
    `;
    productsGrid.innerHTML += cardHTML;
  });
}

// Filter Products
function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const sortBy = sortFilter ? sortFilter.value : 'default';

  let filtered = [...products];

  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (searchTerm) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(searchTerm) || 
      p.category.toLowerCase().includes(searchTerm)
    );
  }

  // Sort products
  switch(sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  renderProducts(filtered);
}

// Add to Cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartUI();
  filterProducts(); // Re-render to show quantity controls
}

// Update Quantity
function updateQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartUI();
  filterProducts();
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  filterProducts();
}

// Save Cart to localStorage
function saveCart() {
  localStorage.setItem('kjfm_cart', JSON.stringify(cart));
}

// Update Cart UI
function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  cartCount.textContent = totalItems;
  cartTotal.textContent = `₹${totalPrice}`;

  // Pulse animation on cart button
  cartBtn.classList.add('pulse');
  setTimeout(() => cartBtn.classList.remove('pulse'), 300);

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <span>🛒</span>
        <p>Your cart is empty</p>
        <p>Add some items to get started!</p>
      </div>
    `;
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <span class="cart-item-emoji">${item.emoji}</span>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">🗑️</button>
      </div>
    `).join('');
  }
}

// Toggle Cart Sidebar
function toggleCart() {
  cartSidebar.classList.toggle('active');
  cartOverlay.classList.toggle('active');
}

// Order on WhatsApp
function orderOnWhatsApp() {
  if (cart.length === 0) {
    alert('Your cart is empty! Add some items first.');
    return;
  }

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let message = `🛒 *Order from Kanha Ji Family Mart Website*\n\n`;
  message += `📦 *Items:*\n`;
  
  cart.forEach(item => {
    message += `• ${item.name} × ${item.quantity} = ₹${item.price * item.quantity}\n`;
  });
  
  message += `\n💰 *Total: ₹${totalPrice}*\n\n`;
  message += `Please confirm my order. Thank you! 🙏`;

  const whatsappUrl = `https://wa.me/911234567890?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// Clear Cart
function clearCart() {
  if (cart.length === 0) return;
  if (confirm('Are you sure you want to clear your cart?')) {
    cart = [];
    saveCart();
    updateCartUI();
    filterProducts();
  }
}

// Event Listeners
searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);
if(sortFilter) sortFilter.addEventListener('change', filterProducts);
cartBtn.addEventListener('click', toggleCart);
closeCart.addEventListener('click', toggleCart);
cartOverlay.addEventListener('click', toggleCart);
orderBtn.addEventListener('click', orderOnWhatsApp);
clearCartBtn.addEventListener('click', clearCart);

// Initialize
renderProducts(products);
updateCartUI();
