// Centralized production-ready product catalog data layer for Cadence Mart.
// Designed to mirror the schema and response structure of the Django/PostgreSQL API.

const CATEGORIES = {
  ELECTRONICS: "Electronics",
  FASHION: "Fashion",
  HOME: "Home & Living",
  SPORTS: "Sports & Fitness",
  BEAUTY: "Beauty",
};

const BRANDS = {
  [CATEGORIES.ELECTRONICS]: ["Apple", "Samsung", "Sony", "Logitech"],
  [CATEGORIES.FASHION]: ["Zara", "H&M", "Nike", "Adidas", "Puma"],
  [CATEGORIES.HOME]: ["IKEA"],
  [CATEGORIES.SPORTS]: ["Nike", "Adidas", "Puma"],
  [CATEGORIES.BEAUTY]: ["GlowSkin", "AuraBeauty", "PureNourish"],
};

const IMAGES = {
  [CATEGORIES.ELECTRONICS]: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
  ],
  [CATEGORIES.FASHION]: [
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=80",
  ],
  [CATEGORIES.HOME]: [
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&auto=format&fit=crop&q=80",
  ],
  [CATEGORIES.SPORTS]: [
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1593164842264-854604db2260?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=80",
  ],
  [CATEGORIES.BEAUTY]: [
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&auto=format&fit=crop&q=80",
  ],
};

export const PRODUCT_TEMPLATES = {
  [CATEGORIES.ELECTRONICS]: [
    "Pro Active Noise-Cancelling Headphones",
    "MagSafe Portable Wireless Charger",
    "Multi-Device Charging Dock",
    "Ultra-Thin Mechanical Keyboard",
    "SuperLight Wireless Gaming Mouse",
    "Portable Mini Projector HD",
    "True Wireless Bass Earbuds",
    "SoundBar Home Theatre Speaker",
    "Active Waterproof Action Camera",
    "Vibrant Smartwatch with Health Tracker",
  ],
  [CATEGORIES.FASHION]: [
    "Classic Vintage Leather Jacket",
    "Warm Wool Blend Trench Coat",
    "Casual Slim Fit Denim Jeans",
    "Heavyweight Cotton Crewneck Tee",
    "Knit Cardigan Sweater",
    "Minimalist Linen Button Down",
    "Durable Canvas High-Top Sneakers",
    "Handcrafted Suede Chelsea Boots",
    "Water-Resistant Commuter Backpack",
    "Full-Grain Leather Wallet",
  ],
  [CATEGORIES.HOME]: [
    "Mid-Century Modern Lounge Chair",
    "Adjustable Brass Floor Lamp",
    "Handmade Glazed Ceramic Vase",
    "Premium Tufted Wool Area Rug",
    "Tempered Glass Coffee Table",
    "Solid Oak Wood Dining Chair",
    "Professional Damascus Knife Set",
    "Organic Flax Linen Cushion Cover",
    "Double-Walled Glass Coffee Cups",
    "Minimalist Bamboo Desk Organizer",
  ],
  [CATEGORIES.SPORTS]: [
    "Eco-Friendly Non-Slip Yoga Mat",
    "Ultra-Cushioned Trail Running Shoes",
    "Adjustable Smart Dumbbell Set",
    "High-Density Foam Roller",
    "Vacuum Insulated Hydro Flask",
    "Heavy-Duty Hiking Backpack",
    "Aero-Vent Cycling Safety Helmet",
    "Resilience Band Strength Kit",
    "Waterproof Sports Gym Duffle",
    "Breathable Compression Wrist Guards",
  ],
  [CATEGORIES.BEAUTY]: [
    "Hyaluronic Acid Hydrating Serum",
    "Restorative Botanical Night Cream",
    "French Lavender Soothing Essential Oil",
    "Hydrating Pure Coconut Body Scrub",
    "Dead Sea Mud Detox Mask",
    "Velvet Matte Liquid Lipstick",
    "Argan Oil Intense Repair Hair Mask",
    "Broad Spectrum Mineral Sunscreen",
    "Sandalwood & Citrus Cologne Spray",
    "Nourishing Botanical Facial Cleanser",
  ],
};

export const METADATA_MAPPING = {
  [CATEGORIES.ELECTRONICS]: {
    "Pro Active Noise-Cancelling Headphones": {
      description:
        "Premium over-ear headphones with advanced hybrid active noise cancellation, high-resolution audio, and plush memory foam earcups for ultimate comfort.",
      tags: ["headphones", "audio", "noise-cancelling", "anc", "wireless", "bluetooth", "over-ear"],
    },
    "MagSafe Portable Wireless Charger": {
      description:
        "Sleek and compact magnetic wireless power bank designed for seamless snap-on charging on the go. Compatible with all MagSafe devices.",
      tags: ["charger", "wireless", "magsafe", "powerbank", "battery", "portable"],
    },
    "Multi-Device Charging Dock": {
      description:
        "All-in-one charging station that powers your smartphone, smartwatch, and wireless earbuds simultaneously with fast wireless technology.",
      tags: ["charger", "dock", "charging station", "wireless", "multi-device"],
    },
    "Ultra-Thin Mechanical Keyboard": {
      description:
        "Low-profile mechanical keyboard featuring tactile switches, customizable RGB backlighting, and dual-mode wireless/wired connectivity.",
      tags: ["keyboard", "mechanical", "wireless", "rgb", "gaming", "office"],
    },
    "SuperLight Wireless Gaming Mouse": {
      description:
        "Ultra-lightweight wireless gaming mouse with a high-precision optical sensor, zero-latency response, and ergonomic grip.",
      tags: ["mouse", "gaming", "wireless", "lightweight", "rgb"],
    },
    "Portable Mini Projector HD": {
      description:
        "Compact high-definition mini projector with built-in speakers and smart streaming support, perfect for home theater movie nights.",
      tags: ["projector", "hd", "video", "cinema", "portable", "home theater"],
    },
    "True Wireless Bass Earbuds": {
      description:
        "True wireless earbuds delivering punchy bass, crystal-clear calls, touch gestures, and an IPX7 sweat-resistant design.",
      tags: ["earbuds", "earphones", "audio", "wireless", "bass", "bluetooth", "sweatproof"],
    },
    "SoundBar Home Theatre Speaker": {
      description:
        "Slim home theater soundbar delivering immersive 3D surround sound, deep bass, and multiple input options including HDMI and Bluetooth.",
      tags: ["soundbar", "speaker", "audio", "home theater", "bluetooth", "surround sound"],
    },
    "Active Waterproof Action Camera": {
      description:
        "Rugged 4K ultra-HD action camera with advanced electronic image stabilization and a waterproof housing for extreme outdoor sports.",
      tags: ["camera", "action camera", "4k", "video", "waterproof", "sports", "adventure"],
    },
    "Vibrant Smartwatch with Health Tracker": {
      description:
        "Feature-rich smartwatch with an AMOLED touchscreen, continuous heart rate monitoring, sleep tracking, and custom workout modes.",
      tags: ["watch", "smartwatch", "fitness", "tracker", "health", "amoled", "heart rate"],
    },
  },
  [CATEGORIES.FASHION]: {
    "Classic Vintage Leather Jacket": {
      description:
        "Premium full-grain leather jacket with a timeless vintage cut, sturdy metal zippers, and soft inner lining for a bold, classic look.",
      tags: ["jacket", "leather", "outerwear", "vintage", "coat", "apparel"],
    },
    "Warm Wool Blend Trench Coat": {
      description:
        "Elegant double-breasted trench coat crafted from a warm wool blend, featuring a tailored silhouette and adjustable waist belt.",
      tags: ["coat", "trench coat", "wool", "winter", "outerwear", "warm", "apparel"],
    },
    "Casual Slim Fit Denim Jeans": {
      description:
        "Classic 5-pocket denim jeans made from stretch cotton denim for a comfortable slim fit, suitable for everyday casual wear.",
      tags: ["jeans", "denim", "pants", "slim fit", "casual", "apparel"],
    },
    "Heavyweight Cotton Crewneck Tee": {
      description:
        "Durable crewneck t-shirt made from thick, premium heavyweight organic cotton for a structured, comfortable fit.",
      tags: ["shirt", "t-shirt", "tee", "cotton", "organic", "basics", "apparel"],
    },
    "Knit Cardigan Sweater": {
      description:
        "Cozy button-up knit cardigan sweater featuring a relaxed drape and premium textured stitch pattern for layering.",
      tags: ["sweater", "cardigan", "knitwear", "warm", "layering", "apparel"],
    },
    "Minimalist Linen Button Down": {
      description:
        "Breathable linen-blend button-down shirt designed with a relaxed collar and clean lines for a fresh, breezy summer style.",
      tags: ["shirt", "linen", "button down", "summer", "minimalist", "apparel"],
    },
    "Durable Canvas High-Top Sneakers": {
      description:
        "Classic high-top sneakers constructed with durable canvas upper, reinforced rubber toe cap, and cushioned insoles.",
      tags: ["shoes", "sneakers", "high-top", "canvas", "footwear"],
    },
    "Handcrafted Suede Chelsea Boots": {
      description:
        "Sophisticated Chelsea boots handcrafted from premium water-resistant suede, featuring elastic side panels and durable crepe soles.",
      tags: ["boots", "chelsea boots", "suede", "shoes", "footwear"],
    },
    "Water-Resistant Commuter Backpack": {
      description:
        "Sleek commuter backpack with a water-resistant finish, padded laptop compartment, and multiple organizational pockets.",
      tags: ["backpack", "bag", "commuter", "water-resistant", "laptop bag"],
    },
    "Full-Grain Leather Wallet": {
      description:
        "Slim bi-fold wallet made from premium full-grain leather, featuring RFID blocking slots and a clean minimalist design.",
      tags: ["wallet", "leather", "cardholder", "rfid", "accessory"],
    },
  },
  [CATEGORIES.HOME]: {
    "Mid-Century Modern Lounge Chair": {
      description:
        "Elegant accent lounge chair featuring a mid-century modern aesthetic, solid walnut frame, and premium textured upholstery.",
      tags: ["chair", "furniture", "lounge", "sofa", "mid-century", "home"],
    },
    "Adjustable Brass Floor Lamp": {
      description:
        "Sophisticated floor lamp with a brushed brass finish and adjustable swivel head, providing focused warm lighting for reading.",
      tags: ["lamp", "lighting", "floor lamp", "brass", "home", "decor"],
    },
    "Handmade Glazed Ceramic Vase": {
      description:
        "Unique hand-thrown ceramic vase finished with a subtle satin glaze, perfect as a sculptural statement piece or for fresh floral arrangements.",
      tags: ["vase", "ceramic", "decor", "handmade", "pottery", "home"],
    },
    "Premium Tufted Wool Area Rug": {
      description:
        "Thick, hand-tufted area rug crafted from premium New Zealand wool, featuring a modern geometric pattern and plush underfoot texture.",
      tags: ["rug", "carpet", "wool", "decor", "home", "floor"],
    },
    "Tempered Glass Coffee Table": {
      description:
        "Minimalist coffee table constructed with a thick tempered glass top and sculptural solid oak wood base.",
      tags: ["table", "coffee table", "furniture", "glass", "oak", "home"],
    },
    "Solid Oak Wood Dining Chair": {
      description:
        "Sturdy and beautifully crafted dining chair constructed from solid white oak, featuring an ergonomic curved backrest.",
      tags: ["chair", "dining", "furniture", "oak", "wood", "home"],
    },
    "Professional Damascus Knife Set": {
      description:
        "High-carbon Japanese Damascus steel kitchen knife set with ergonomic wood handles, offering exceptional sharpness and durability.",
      tags: ["knives", "knife set", "kitchen", "cooking", "chef"],
    },
    "Organic Flax Linen Cushion Cover": {
      description:
        "Soft and sustainable cushion cover woven from 100% organic French flax linen with a relaxed, pre-washed finish.",
      tags: ["cushion", "pillow cover", "linen", "decor", "sofa", "bedding"],
    },
    "Double-Walled Glass Coffee Cups": {
      description:
        "Set of insulated double-walled glass mugs designed to keep your espresso hot while remaining cool to the touch.",
      tags: ["cups", "mugs", "glasses", "coffee", "kitchen", "drinkware"],
    },
    "Minimalist Bamboo Desk Organizer": {
      description:
        "Eco-friendly desk tidy crafted from natural bamboo, featuring slots for writing tools, phone stand, and small accessories.",
      tags: ["organizer", "bamboo", "desk", "office", "storage"],
    },
  },
  [CATEGORIES.SPORTS]: {
    "Eco-Friendly Non-Slip Yoga Mat": {
      description:
        "High-density, non-toxic TPE yoga mat with dual-sided non-slip texture and alignment lines for perfect yoga poses.",
      tags: ["yoga mat", "yoga", "fitness", "exercise", "non-slip"],
    },
    "Ultra-Cushioned Trail Running Shoes": {
      description:
        "Rugged outdoor running shoes featuring responsive foam cushioning, breathable mesh uppers, and high-traction rubber lugs.",
      tags: ["shoes", "running shoes", "trail", "sneakers", "footwear", "sports"],
    },
    "Adjustable Smart Dumbbell Set": {
      description:
        "Space-saving adjustable dumbbells that let you select weights from 5 to 52.5 lbs with a simple dial turn.",
      tags: ["dumbbells", "weights", "fitness", "gym", "workout", "strength"],
    },
    "High-Density Foam Roller": {
      description:
        "Firm foam roller designed for deep tissue muscle massage, myofascial release, and quick post-workout recovery.",
      tags: ["foam roller", "massage", "recovery", "fitness", "mobility"],
    },
    "Vacuum Insulated Hydro Flask": {
      description:
        "Double-wall vacuum insulated stainless steel water bottle that keeps drinks ice cold for 24 hours or hot for 12 hours.",
      tags: ["bottle", "water bottle", "flask", "insulated", "sports"],
    },
    "Heavy-Duty Hiking Backpack": {
      description:
        "Rugged multi-day internal frame hiking backpack with water-repellent shell, ergonomic harness, and trekking pole attachments.",
      tags: ["backpack", "hiking", "travel", "camping", "bag"],
    },
    "Aero-Vent Cycling Safety Helmet": {
      description:
        "Aerodynamic and impact-absorbing road cycling safety helmet featuring MIPS protection and multiple cooling vents.",
      tags: ["helmet", "cycling", "safety", "gear", "bike"],
    },
    "Resilience Band Strength Kit": {
      description:
        "Set of 5 heavy-duty latex resistance bands with handles, ankle straps, and door anchor for full-body home workouts.",
      tags: ["resistance bands", "fitness", "workout", "strength", "home gym"],
    },
    "Waterproof Sports Gym Duffle": {
      description:
        "Spacious water-resistant gym bag featuring a ventilated wet pocket, shoe compartment, and padded shoulder strap.",
      tags: ["duffle bag", "gym bag", "bag", "waterproof", "sports"],
    },
    "Breathable Compression Wrist Guards": {
      description:
        "Supportive neoprene compression wrist wraps offering adjustable wrist stability for heavy weightlifting and sports.",
      tags: ["wrist guards", "compression", "support", "fitness", "gym"],
    },
  },
  [CATEGORIES.BEAUTY]: {
    "Hyaluronic Acid Hydrating Serum": {
      description:
        "Ultra-hydrating serum formulated with pure hyaluronic acid to instantly plump skin, smooth fine lines, and lock in moisture.",
      tags: ["serum", "hydrating", "skincare", "beauty", "face"],
    },
    "Restorative Botanical Night Cream": {
      description:
        "Rich nourishing night cream infused with botanical extracts and peptides to repair skin barrier and restore radiance overnight.",
      tags: ["cream", "night cream", "skincare", "moisturizer", "beauty"],
    },
    "French Lavender Soothing Essential Oil": {
      description:
        "100% pure therapeutic grade essential oil steam-distilled from organic French lavender flowers for aromatherapy and relaxation.",
      tags: ["essential oil", "lavender", "aromatherapy", "organic", "wellness"],
    },
    "Hydrating Pure Coconut Body Scrub": {
      description:
        "Exfoliating body scrub made with organic raw sugar and cold-pressed coconut oil to gently polish away dry skin and restore glow.",
      tags: ["body scrub", "exfoliator", "coconut", "skincare", "body care"],
    },
    "Dead Sea Mud Detox Mask": {
      description:
        "Mineral-rich clay mask formulated with authentic Dead Sea mud to deep clean pores, extract impurities, and absorb excess oil.",
      tags: ["mask", "clay mask", "mud mask", "skincare", "detox", "face"],
    },
    "Velvet Matte Liquid Lipstick": {
      description:
        "Highly-pigmented liquid lipstick that glides on smooth and dries to a comfortable, transfer-proof velvet matte finish.",
      tags: ["lipstick", "makeup", "lip gloss", "matte", "cosmetics", "beauty"],
    },
    "Argan Oil Intense Repair Hair Mask": {
      description:
        "Deep conditioning treatment hair mask enriched with cold-pressed Moroccan argan oil to repair dry, damaged, and color-treated hair.",
      tags: ["hair mask", "argan oil", "haircare", "conditioner", "beauty"],
    },
    "Broad Spectrum Mineral Sunscreen": {
      description:
        "Lightweight, non-greasy SPF 50 mineral sunscreen formulated with zinc oxide to provide broad spectrum UVA/UVB protection.",
      tags: ["sunscreen", "spf", "skincare", "mineral", "sun protection"],
    },
    "Sandalwood & Citrus Cologne Spray": {
      description:
        "Sophisticated fragrance cologne featuring warm woody notes of sandalwood balanced with fresh citrus bergamot peel.",
      tags: ["cologne", "perfume", "fragrance", "scent", "beauty"],
    },
    "Nourishing Botanical Facial Cleanser": {
      description:
        "Gentle sulfate-free gel cleanser infused with soothing chamomile and aloe vera to wash away dirt and makeup without stripping moisture.",
      tags: ["cleanser", "face wash", "skincare", "botanical", "beauty"],
    },
  },
};

const generateProducts = () => {
  const products = [];
  const counts = {
    [CATEGORIES.ELECTRONICS]: 60,
    [CATEGORIES.FASHION]: 90,
    [CATEGORIES.HOME]: 40,
    [CATEGORIES.SPORTS]: 30,
    [CATEGORIES.BEAUTY]: 30,
  };

  let globalId = 1;

  Object.entries(counts).forEach(([category, targetCount]) => {
    const brands = BRANDS[category];
    const images = IMAGES[category];

    for (let i = 0; i < targetCount; i++) {
      const brandIdx = i % brands.length;
      const brand = brands[brandIdx];
      const imgIdx = i % images.length;

      let name = "";
      let subcategory = "";
      let gender = "unisex";
      let tags = [];
      let description = "";

      // ----------------------------------------------------
      // Category 1: Electronics (60 items)
      // ----------------------------------------------------
      if (category === CATEGORIES.ELECTRONICS) {
        if (brand === "Apple") {
          const appleItems = [
            {
              name: "iPhone 15 Pro",
              sub: "Smartphones",
              tag: ["iphone", "smartphone", "mobile", "ios"],
            },
            { name: "iPad Pro M2", sub: "Laptops", tag: ["ipad", "tablet", "screen", "ios"] },
            {
              name: "MacBook Air M3",
              sub: "Laptops",
              tag: ["macbook", "laptop", "computer", "macos"],
            },
            {
              name: "Watch Series 9",
              sub: "Smart Watches",
              tag: ["watch", "smartwatch", "wearable", "fitness"],
            },
            {
              name: "AirPods Pro 2",
              sub: "Earbuds",
              tag: ["airpods", "earbuds", "audio", "wireless", "headphones"],
            },
            {
              name: "AirPods Max",
              sub: "Headphones",
              tag: ["headphones", "audio", "wireless", "max"],
            },
            { name: "HomePod Mini", sub: "Gaming", tag: ["homepod", "speaker", "audio", "smart"] },
            {
              name: "Magic Keyboard",
              sub: "Gaming",
              tag: ["keyboard", "magic", "wireless", "accessory"],
            },
            {
              name: "Magic Mouse 2",
              sub: "Gaming",
              tag: ["mouse", "magic", "wireless", "accessory"],
            },
            { name: "Apple TV 4K", sub: "Gaming", tag: ["tv", "streaming", "box", "media"] },
            {
              name: "Watch Ultra 2",
              sub: "Smart Watches",
              tag: ["watch", "smartwatch", "wearable", "fitness", "ultra"],
            },
            {
              name: "USB-C Power Adapter",
              sub: "Smartphones",
              tag: ["charger", "adapter", "power", "charging"],
            },
            {
              name: "MagSafe Battery Pack",
              sub: "Smartphones",
              tag: ["charger", "magsafe", "battery", "powerbank"],
            },
            {
              name: "Polishing Cloth",
              sub: "Smartphones",
              tag: ["cloth", "polishing", "accessory", "cleaning"],
            },
            {
              name: "AirTag 4-Pack",
              sub: "Smart Watches",
              tag: ["airtag", "tracker", "gps", "keychain"],
            },
          ];
          const item = appleItems[i % appleItems.length];
          name = `Apple ${item.name}`;
          subcategory = item.sub;
          tags = item.tag;
          description = `Official Apple ${item.name}. Engineered with precision design, premium materials, and industry-leading performance.`;
        } else if (brand === "Samsung") {
          const samsungItems = [
            {
              name: "Galaxy S24 Ultra",
              sub: "Smartphones",
              tag: ["galaxy", "smartphone", "mobile", "android"],
            },
            {
              name: "Galaxy Watch 6",
              sub: "Smart Watches",
              tag: ["watch", "smartwatch", "wearable", "fitness"],
            },
            {
              name: "Galaxy Buds2 Pro",
              sub: "Earbuds",
              tag: ["buds", "earbuds", "audio", "wireless", "headphones"],
            },
            {
              name: "Galaxy Book 4",
              sub: "Laptops",
              tag: ["galaxybook", "laptop", "computer", "windows"],
            },
            { name: "Galaxy Tab S9", sub: "Laptops", tag: ["tablet", "screen", "android"] },
            {
              name: "Odyssey OLED G9 Monitor",
              sub: "Gaming",
              tag: ["monitor", "gaming", "screen", "display"],
            },
            {
              name: "T9 Portable SSD 2TB",
              sub: "Gaming",
              tag: ["ssd", "storage", "portable", "drive"],
            },
            {
              name: "Super Fast Wireless Charger Duo",
              sub: "Smartphones",
              tag: ["charger", "wireless", "charging", "duo"],
            },
            { name: "Galaxy SmartTag2", sub: "Smart Watches", tag: ["tracker", "smarttag", "gps"] },
            {
              name: "AKG Y500 Wireless Headphones",
              sub: "Headphones",
              tag: ["headphones", "audio", "wireless", "akg"],
            },
            {
              name: "Pro Slim Keyboard Case",
              sub: "Gaming",
              tag: ["keyboard", "case", "tablet", "accessory"],
            },
            {
              name: "Galaxy Watch Active 2",
              sub: "Smart Watches",
              tag: ["watch", "smartwatch", "wearable", "active"],
            },
            {
              name: "USB-C Super Fast Charger 45W",
              sub: "Smartphones",
              tag: ["charger", "adapter", "fast"],
            },
            {
              name: "Bar Plus USB 3.1 Flash Drive",
              sub: "Gaming",
              tag: ["usb", "flashdrive", "storage"],
            },
            { name: "Galaxy Buds FE", sub: "Earbuds", tag: ["buds", "earbuds", "audio", "fe"] },
          ];
          const item = samsungItems[i % samsungItems.length];
          name = `Samsung ${item.name}`;
          subcategory = item.sub;
          tags = item.tag;
          description = `Premium Samsung ${item.name} combining next-generation smart technology, reliable components, and elegant styling.`;
        } else if (brand === "Sony") {
          const sonyItems = [
            {
              name: "WH-1000XM5 Noise Cancelling Headphones",
              sub: "Headphones",
              tag: ["headphones", "audio", "noise", "cancelling"],
            },
            {
              name: "WF-1000XM5 Wireless Earbuds",
              sub: "Earbuds",
              tag: ["earbuds", "audio", "wireless", "anc"],
            },
            {
              name: "SRS-XB100 Portable Speaker",
              sub: "Headphones",
              tag: ["speaker", "speaker", "audio", "portable"],
            },
            {
              name: "ZV-E10 Mirrorless Camera",
              sub: "Cameras",
              tag: ["camera", "vlog", "video", "mirrorless"],
            },
            {
              name: "Alpha 7 IV Creator Camera",
              sub: "Cameras",
              tag: ["camera", "pro", "photography", "alpha"],
            },
            {
              name: "PlayStation 5 DualSense Edge",
              sub: "Gaming",
              tag: ["controller", "gaming", "ps5", "playstation"],
            },
            {
              name: "Pulse 3D Wireless Headset",
              sub: "Headphones",
              tag: ["headset", "audio", "ps5", "gaming"],
            },
            {
              name: "HT-S2000 Soundbar",
              sub: "Headphones",
              tag: ["soundbar", "speaker", "audio", "theatre"],
            },
            {
              name: "Reon Pocket 5 Wearable Cooler",
              sub: "Smart Watches",
              tag: ["cooler", "wearable", "smart", "device"],
            },
            {
              name: "MDR-7506 Professional Headphones",
              sub: "Headphones",
              tag: ["headphones", "audio", "studio", "pro"],
            },
            {
              name: "DualSense Charging Station",
              sub: "Gaming",
              tag: ["charger", "dock", "ps5", "accessory"],
            },
            {
              name: "CFexpress Type A Memory Card",
              sub: "Gaming",
              tag: ["storage", "sdcard", "memory", "camera"],
            },
            {
              name: "SRS-XV500 Wireless Party Speaker",
              sub: "Headphones",
              tag: ["speaker", "party", "bass", "audio"],
            },
            {
              name: "Vlog Monitor Screen",
              sub: "Gaming",
              tag: ["monitor", "camera", "vlog", "accessory"],
            },
            {
              name: "LinkBuds S Wireless Earbuds",
              sub: "Earbuds",
              tag: ["earbuds", "audio", "linkbuds", "wireless"],
            },
          ];
          const item = sonyItems[i % sonyItems.length];
          name = `Sony ${item.name}`;
          subcategory = item.sub;
          tags = item.tag;
          description = `High-end Sony ${item.name} offering world-renowned audio acoustics, build quality, and creative options.`;
        } else if (brand === "Logitech") {
          const logitechItems = [
            {
              name: "MX Master 3S Wireless Mouse",
              sub: "Gaming",
              tag: ["mouse", "mx", "wireless", "office", "accessory"],
            },
            {
              name: "MX Keys S Advanced Keyboard",
              sub: "Gaming",
              tag: ["keyboard", "mx", "wireless", "office"],
            },
            {
              name: "G Pro X Superlight 2 Mouse",
              sub: "Gaming",
              tag: ["mouse", "gaming", "pro", "superlight", "accessory"],
            },
            {
              name: "G915 TKL Mechanical Keyboard",
              sub: "Gaming",
              tag: ["keyboard", "gaming", "mechanical", "wireless"],
            },
            {
              name: "Brio 4K Stream Webcam",
              sub: "Cameras",
              tag: ["webcam", "camera", "streaming", "video"],
            },
            {
              name: "Yeti GX USB Gaming Microphone",
              sub: "Gaming",
              tag: ["mic", "microphone", "audio", "usb", "gaming"],
            },
            {
              name: "G733 Lightspeed Headset",
              sub: "Headphones",
              tag: ["headset", "audio", "wireless", "gaming"],
            },
            {
              name: "Z407 Bluetooth Computer Speakers",
              sub: "Headphones",
              tag: ["speakers", "audio", "desktop", "bluetooth"],
            },
            {
              name: "Casa Pop-Up Desk Organizer",
              sub: "Gaming",
              tag: ["desk", "organizer", "dock", "accessory"],
            },
            {
              name: "K380 Multi-Device Keyboard",
              sub: "Gaming",
              tag: ["keyboard", "portable", "wireless", "bluetooth"],
            },
            {
              name: "Lift Vertical Ergonomic Mouse",
              sub: "Gaming",
              tag: ["mouse", "vertical", "ergonomic", "wireless"],
            },
            {
              name: "Litra Glow Streaming Light",
              sub: "Gaming",
              tag: ["light", "streaming", "video", "litra"],
            },
            {
              name: "G502 X Plus Gaming Mouse",
              sub: "Gaming",
              tag: ["mouse", "gaming", "g502", "rgb"],
            },
            {
              name: "C920s HD Pro Webcam",
              sub: "Cameras",
              tag: ["webcam", "camera", "pro", "video"],
            },
            {
              name: "Pebble 2 Mouse & Keyboard Combo",
              sub: "Gaming",
              tag: ["combo", "keyboard", "mouse", "pebble"],
            },
          ];
          const item = logitechItems[i % logitechItems.length];
          name = `Logitech ${item.name}`;
          subcategory = item.sub;
          tags = item.tag;
          description = `Advanced Logitech ${item.name}. Fully optimized for high-performance productivity, office ergonomic standards, and pro gaming.`;
        }

        gender =
          name.includes("Mini") ||
          name.includes("Pebble") ||
          name.includes("Tag") ||
          name.includes("Buds FE") ||
          name.includes("SmartTag2") ||
          i % 6 === 5
            ? "kids"
            : "unisex";
      }

      // ----------------------------------------------------
      // Category 2: Fashion (90 items)
      // ----------------------------------------------------
      else if (category === CATEGORIES.FASHION) {
        if (brand === "Zara") {
          const zaraItems = [
            {
              name: "Premium Wool Trench Coat",
              sub: "Winterwear",
              gender: "women",
              tag: ["coat", "trench", "wool", "winterwear", "jacket"],
            },
            {
              name: "Vintage Oversized Leather Jacket",
              sub: "Winterwear",
              gender: "men",
              tag: ["jacket", "leather", "biker", "coat"],
            },
            {
              name: "Pleated Midi Skirt",
              sub: "Bottomwear",
              gender: "women",
              tag: ["skirt", "midi", "pleated", "bottomwear"],
            },
            {
              name: "Casual Slim Fit Chino Trousers",
              sub: "Bottomwear",
              gender: "men",
              tag: ["trousers", "chinos", "pants", "bottomwear"],
            },
            {
              name: "Linen Button-Up Collar Shirt",
              sub: "Topwear",
              gender: "men",
              tag: ["shirt", "linen", "buttonup", "topwear"],
            },
            {
              name: "Satin V-Neck Blouse",
              sub: "Topwear",
              gender: "women",
              tag: ["blouse", "satin", "shirt", "topwear"],
            },
            {
              name: "Kids Unisex Cotton Hoodie",
              sub: "Winterwear",
              gender: "kids",
              tag: ["hoodie", "kids", "sweatshirt", "hooded"],
            },
            {
              name: "Kids Elastic Waist Denim Jeans",
              sub: "Bottomwear",
              gender: "kids",
              tag: ["jeans", "denim", "kids", "bottomwear"],
            },
            {
              name: "Warm Shearling Winter Booties",
              sub: "Winterwear",
              gender: "women",
              tag: ["boots", "winterwear", "shoes"],
            },
            {
              name: "Classic Chelsea Leather Boots",
              sub: "Bottomwear",
              gender: "men",
              tag: ["boots", "shoes", "leather", "bottomwear"],
            },
            {
              name: "Urban Canvas Sling Backpack",
              sub: "Topwear",
              gender: "unisex",
              tag: ["bag", "backpack", "topwear"],
            },
            {
              name: "Classic Brass Buckle Belt",
              sub: "Bottomwear",
              gender: "unisex",
              tag: ["belt", "buckle", "leather", "bottomwear"],
            },
            {
              name: "Kids Fleece Zip-Up Cardigan",
              sub: "Winterwear",
              gender: "kids",
              tag: ["cardigan", "kids", "fleece", "sweater"],
            },
            {
              name: "Tailored Blazer Dress",
              sub: "Topwear",
              gender: "women",
              tag: ["dress", "blazer", "formal", "suit"],
            },
            {
              name: "High-Waist Wide-Leg Pants",
              sub: "Bottomwear",
              gender: "women",
              tag: ["pants", "trousers", "highwaist", "bottomwear"],
            },
            {
              name: "Oversized Knitted Vest",
              sub: "Topwear",
              gender: "unisex",
              tag: ["vest", "knit", "sweater", "topwear"],
            },
            {
              name: "Platform Comfort Loafers",
              sub: "Bottomwear",
              gender: "women",
              tag: ["loafers", "shoes", "leather", "bottomwear"],
            },
            {
              name: "Urban Canvas Tote Bag",
              sub: "Topwear",
              gender: "women",
              tag: ["bag", "tote", "handbag", "topwear"],
            },
          ];
          const item = zaraItems[i % zaraItems.length];
          name = `Zara ${item.name}`;
          subcategory = item.sub;
          gender = item.gender;
          tags = item.tag;
          description = `Elegant ${name} crafted with Zara's signature European styling, premium cuts, and contemporary runway inspiration.`;
        } else if (brand === "H&M") {
          const hmItems = [
            {
              name: "Classic Fine-Knit Cardigan",
              sub: "Winterwear",
              gender: "women",
              tag: ["cardigan", "sweater", "knitwear", "winterwear"],
            },
            {
              name: "Heavyweight Boxy Crewneck Tee",
              sub: "Topwear",
              gender: "men",
              tag: ["tshirt", "tee", "crewneck", "cotton", "topwear"],
            },
            {
              name: "Rib-Knit Mock-Neck Sweater",
              sub: "Winterwear",
              gender: "women",
              tag: ["sweater", "knitwear", "mockneck", "winterwear"],
            },
            {
              name: "Regular Fit Cargo Joggers",
              sub: "Bottomwear",
              gender: "men",
              tag: ["joggers", "cargo", "pants", "bottomwear"],
            },
            {
              name: "Kids Printed Cotton T-Shirt",
              sub: "Topwear",
              gender: "kids",
              tag: ["tshirt", "tee", "kids", "printed", "topwear"],
            },
            {
              name: "Super-Stretch High-Waist Denim",
              sub: "Bottomwear",
              gender: "women",
              tag: ["jeans", "denim", "skinny", "bottomwear"],
            },
            {
              name: "Kids Fleece-Lined Puffer Coat",
              sub: "Winterwear",
              gender: "kids",
              tag: ["coat", "puffer", "jacket", "kids", "winterwear"],
            },
            {
              name: "Canvas High-Top Sneakers",
              sub: "Bottomwear",
              gender: "unisex",
              tag: ["sneakers", "canvas", "shoes", "hightop", "bottomwear"],
            },
            {
              name: "Waterproof Travel Duffle Backpack",
              sub: "Topwear",
              gender: "unisex",
              tag: ["backpack", "bag", "duffle", "travel", "topwear"],
            },
            {
              name: "Pack of 3 Everyday Socks",
              sub: "Bottomwear",
              gender: "unisex",
              tag: ["socks", "pack", "cotton", "bottomwear"],
            },
            {
              name: "Wool Blend Tailored Overcoat",
              sub: "Winterwear",
              gender: "men",
              tag: ["coat", "overcoat", "wool", "winterwear"],
            },
            {
              name: "Oversized Flannel Button-Down",
              sub: "Topwear",
              gender: "unisex",
              tag: ["shirt", "flannel", "buttondown", "topwear"],
            },
            {
              name: "Kids Cotton Knit Jogger Pants",
              sub: "Bottomwear",
              gender: "kids",
              tag: ["joggers", "pants", "kids", "bottomwear"],
            },
            {
              name: "Comfort Slip-On Mule Flats",
              sub: "Bottomwear",
              gender: "women",
              tag: ["flats", "mules", "shoes", "bottomwear"],
            },
            {
              name: "Drawstring Linen Pull-On Shorts",
              sub: "Bottomwear",
              gender: "unisex",
              tag: ["shorts", "linen", "drawstring", "bottomwear"],
            },
            {
              name: "Vegan Leather Crossbody Bag",
              sub: "Topwear",
              gender: "women",
              tag: ["bag", "crossbody", "handbag", "topwear"],
            },
            {
              name: "Kids Denim dungaree Suit",
              sub: "Bottomwear",
              gender: "kids",
              tag: ["dungaree", "kids", "suit", "bottomwear"],
            },
            {
              name: "Ribbed Knit Beanie Hat",
              sub: "Topwear",
              gender: "unisex",
              tag: ["beanie", "hat", "ribbed", "topwear"],
            },
          ];
          const item = hmItems[i % hmItems.length];
          name = `H&M ${item.name}`;
          subcategory = item.sub;
          gender = item.gender;
          tags = item.tag;
          description = `Trendy and highly sustainable ${name} offering essential comfort, modern fit guidelines, and everyday practicality.`;
        } else if (brand === "Nike" || brand === "Adidas" || brand === "Puma") {
          const athleticTemplates = [
            {
              name: "Tech Fleece Full-Zip Hoodie",
              sub: "Winterwear",
              tag: ["hoodie", "fleece", "zipup", "jacket", "winterwear", "sports"],
            },
            {
              name: "Essential Drawstring Fleece Joggers",
              sub: "Bottomwear",
              tag: ["joggers", "pants", "fleece", "bottomwear", "sports"],
            },
            {
              name: "Court Classic Retro Sneakers",
              sub: "Bottomwear",
              tag: ["sneakers", "shoes", "classic", "leather", "bottomwear"],
            },
            {
              name: "Graphic Logo Performance Tee",
              sub: "Topwear",
              tag: ["tshirt", "tee", "topwear", "cotton", "logo"],
            },
            {
              name: "Kids Fleece Pullover Sweatshirt",
              sub: "Winterwear",
              tag: ["sweatshirt", "kids", "pullover", "winterwear"],
            },
            {
              name: "Aeroready Running Track Pants",
              sub: "Bottomwear",
              tag: ["pants", "trackpants", "running", "bottomwear"],
            },
            {
              name: "Kids Active-Wear Jogger Shorts",
              sub: "Bottomwear",
              tag: ["shorts", "kids", "active", "bottomwear"],
            },
            {
              name: "Original Running Gym Shoes",
              sub: "Bottomwear",
              tag: ["sneakers", "shoes", "running", "cushion", "bottomwear"],
            },
            {
              name: "Performance Duffle Utility Bag",
              sub: "Topwear",
              tag: ["bag", "duffle", "gym", "sports", "topwear"],
            },
            {
              name: "Classic Logo Snapback Cap",
              sub: "Topwear",
              tag: ["cap", "hat", "snapback", "topwear"],
            },
            {
              name: "Puffer Down Warm Jacket",
              sub: "Winterwear",
              tag: ["jacket", "puffer", "down", "winterwear", "coat"],
            },
            {
              name: "Dry-Fit Training Polo Shirt",
              sub: "Topwear",
              tag: ["polo", "shirt", "training", "topwear"],
            },
            {
              name: "Kids Elastic Training Leggings",
              sub: "Bottomwear",
              tag: ["leggings", "kids", "training", "bottomwear"],
            },
            {
              name: "Slide Sandal Comfort Footwear",
              sub: "Bottomwear",
              tag: ["slides", "sandals", "shoes", "comfort", "bottomwear"],
            },
            {
              name: "Drawstring Gym Sackpack Bag",
              sub: "Topwear",
              tag: ["bag", "sackpack", "drawstring", "gym", "topwear"],
            },
            {
              name: "Adjustable Elastic Headbands Pack",
              sub: "Topwear",
              tag: ["headband", "accessory", "pack", "gym", "topwear"],
            },
            {
              name: "Kids Windrunner Zip Hoodie",
              sub: "Winterwear",
              tag: ["hoodie", "kids", "windbreaker", "winterwear"],
            },
            {
              name: "Training Tech Mesh Shorts",
              sub: "Bottomwear",
              tag: ["shorts", "training", "mesh", "bottomwear"],
            },
          ];
          const item = athleticTemplates[i % athleticTemplates.length];
          name = `${brand} ${item.name}`;
          subcategory = item.sub;
          tags = item.tag;
          description = `Authentic ${name} engineered with high-performance sports technology, breathable fabrics, and athletic lifestyle styling.`;

          if (item.name.includes("Kids")) {
            gender = "kids";
          } else {
            const genderPool = ["men", "women", "unisex", "men", "women"];
            gender = genderPool[i % genderPool.length];
          }
        }
      }

      // ----------------------------------------------------
      // Category 3: Home & Living (40 items)
      // ----------------------------------------------------
      else if (category === CATEGORIES.HOME) {
        const ikeaItems = [
          {
            name: "Klippan Compact Sofa",
            sub: "Furniture",
            tag: ["sofa", "couch", "furniture", "lounge"],
          },
          {
            name: "Poäng Classic Armchair",
            sub: "Furniture",
            tag: ["chair", "armchair", "furniture", "wood"],
          },
          {
            name: "Linnmon Wooden Study Desk",
            sub: "Furniture",
            tag: ["desk", "table", "furniture", "study"],
          },
          {
            name: "Billy Standard Bookcase",
            sub: "Furniture",
            tag: ["bookcase", "shelf", "furniture", "storage"],
          },
          {
            name: "Lack Square Side Table",
            sub: "Furniture",
            tag: ["table", "sidetable", "furniture", "lack"],
          },
          {
            name: "Fado Spherical Table Lamp",
            sub: "Lighting",
            tag: ["lamp", "tablelamp", "lighting", "globe"],
          },
          {
            name: "Hektar Steel Pendant Lamp",
            sub: "Lighting",
            tag: ["lamp", "pendant", "lighting", "industrial"],
          },
          {
            name: "Sinnlig Vanilla Scented Candle",
            sub: "Decor",
            tag: ["candle", "scented", "decor", "vanilla"],
          },
          {
            name: "Tejn Faux Sheepskin Area Rug",
            sub: "Decor",
            tag: ["rug", "carpet", "sheepskin", "decor"],
          },
          {
            name: "Färgklar Ceramic Dining Plate Set",
            sub: "Kitchen",
            tag: ["plates", "dining", "ceramic", "kitchen"],
          },
          {
            name: "365+ Glass Drink Carafe",
            sub: "Kitchen",
            tag: ["carafe", "glass", "bottle", "kitchen"],
          },
          {
            name: "Kallax Shelf Square Unit",
            sub: "Furniture",
            tag: ["shelf", "storage", "kallax", "furniture"],
          },
          {
            name: "Markus Ergonomic Office Chair",
            sub: "Furniture",
            tag: ["chair", "officechair", "ergonomic", "furniture"],
          },
          {
            name: "Nävlinge LED Clamp Spot Light",
            sub: "Lighting",
            tag: ["light", "led", "clamp", "lighting"],
          },
          {
            name: "Fejka Artificial Potted Plant",
            sub: "Decor",
            tag: ["plant", "artificial", "decor", "greenery"],
          },
          {
            name: "Ikea 365+ Food Containers Set",
            sub: "Kitchen",
            tag: ["container", "lunchbox", "storage", "kitchen"],
          },
          {
            name: "Ribba Classic Square Photo Frame",
            sub: "Decor",
            tag: ["frame", "picture", "photo", "decor"],
          },
          {
            name: "Malm 3-Drawer Storage Chest",
            sub: "Furniture",
            tag: ["drawers", "chest", "malm", "furniture"],
          },
          {
            name: "Tertial Adjustable Desk Arm Lamp",
            sub: "Lighting",
            tag: ["lamp", "desklamp", "lighting", "work"],
          },
          {
            name: "Toftbo Microfiber Soft Bath Mat",
            sub: "Decor",
            tag: ["mat", "bathmat", "microfiber", "decor"],
          },
        ];
        const item = ikeaItems[i % ikeaItems.length];
        name =
          `IKEA ${item.name} ${i >= ikeaItems.length ? `v${Math.floor(i / ikeaItems.length) + 1}` : ""}`.trim();
        subcategory = item.sub;
        tags = item.tag;
        description = `Functional, flat-packaged ${name} featuring IKEA's signature Nordic minimalism, space efficiency, and assemble-yourself ease.`;

        if (i % 8 === 7) {
          gender = "kids";
          name = name.replace("IKEA ", "IKEA Kids ");
        } else if (i % 12 === 11) {
          gender = "women";
        } else if (i % 12 === 10) {
          gender = "men";
        } else {
          gender = "unisex";
        }
      }

      // ----------------------------------------------------
      // Category 4: Sports & Fitness (30 items)
      // ----------------------------------------------------
      else if (category === CATEGORIES.SPORTS) {
        const sportsItems = [
          {
            name: "Air Zoom Pegasus Training Running Shoes",
            sub: "Running",
            tag: ["shoes", "running", "sneakers", "pegasus", "footwear"],
          },
          {
            name: "Supernova Cushioned Sports Shoes",
            sub: "Running",
            tag: ["shoes", "running", "sneakers", "supernova"],
          },
          {
            name: "Nitro Velocity Foam Gym Shoes",
            sub: "Running",
            tag: ["shoes", "running", "sneakers", "nitro"],
          },
          {
            name: "Aero-Vent Pro Cycling Helmet",
            sub: "Cycling",
            tag: ["helmet", "cycling", "safety", "headgear"],
          },
          {
            name: "Adjustable Heavy Dumbbell Set 20kg",
            sub: "Gym Equipment",
            tag: ["dumbbells", "weights", "strength", "fitness"],
          },
          {
            name: "Extra-Grip 8mm Cushion Yoga Mat",
            sub: "Gym Equipment",
            tag: ["mat", "yogamat", "fitness", "stretching"],
          },
          {
            name: "Heavy-Duty Latex Resistance Band Kit",
            sub: "Gym Equipment",
            tag: ["resistancebands", "bands", "gym", "fitness"],
          },
          {
            name: "Insulated Double-Wall Hydro Flask 1L",
            sub: "Outdoor",
            tag: ["flask", "bottle", "insulated", "waterbottle", "outdoor"],
          },
          {
            name: "Wind-Resistant 2-Person Camping Tent",
            sub: "Outdoor",
            tag: ["tent", "camping", "shelter", "outdoor"],
          },
          {
            name: "Ergonomic Internal Frame Hiking Backpack",
            sub: "Outdoor",
            tag: ["backpack", "hiking", "backpacking", "outdoor"],
          },
          {
            name: "Gel-Padded Breathable Cycling Gloves",
            sub: "Cycling",
            tag: ["gloves", "cycling", "bike", "handwear"],
          },
          {
            name: "Foam Roller Trigger Muscle Massager",
            sub: "Gym Equipment",
            tag: ["foamroller", "roller", "massage", "recovery"],
          },
          {
            name: "Steel Wire High-Speed Jump Rope",
            sub: "Gym Equipment",
            tag: ["jumprope", "rope", "skipping", "cardio"],
          },
          {
            name: "Waterproof Sports Duffle Gym Bag",
            sub: "Outdoor",
            tag: ["duffle", "bag", "waterproof", "gym"],
          },
          {
            name: "U-Lock Anti-Theft Heavy Duty Bike Lock",
            sub: "Cycling",
            tag: ["lock", "bikelock", "cycling", "anti-theft"],
          },
        ];
        const item = sportsItems[i % sportsItems.length];
        name = `${brand} ${item.name}`;
        subcategory = item.sub;
        tags = item.tag;
        description = `Authentic ${name} built to stand up to heavy active use, outdoors exploration, and professional fitness routines.`;

        if (i % 6 === 5) {
          gender = "kids";
          name = name.replace(brand, `${brand} Kids`);
        } else if (i % 3 === 0) {
          gender = "men";
        } else if (i % 3 === 1) {
          gender = "women";
        } else {
          gender = "unisex";
        }
      }

      // ----------------------------------------------------
      // Category 5: Beauty (30 items)
      // ----------------------------------------------------
      else if (category === CATEGORIES.BEAUTY) {
        if (brand === "GlowSkin") {
          const skincareItems = [
            {
              name: "Salicylic Acid Cleansing Face Wash",
              sub: "Skincare",
              tag: ["facewash", "cleanser", "skincare", "acne"],
            },
            {
              name: "Hyaluronic Acid Hydrating Facial Serum",
              sub: "Skincare",
              tag: ["serum", "hydrating", "skincare", "plump"],
            },
            {
              name: "Retinol Anti-Aging Recovery Night Cream",
              sub: "Skincare",
              tag: ["cream", "nightcream", "skincare", "retinol"],
            },
            {
              name: "Broad Spectrum Mineral SPF 50 Sunscreen",
              sub: "Skincare",
              tag: ["sunscreen", "spf", "skincare", "mineral", "sun"],
            },
            {
              name: "Vitamin C Brightening Facial Scrub",
              sub: "Skincare",
              tag: ["scrub", "exfoliator", "skincare", "vitaminc"],
            },
          ];
          const item = skincareItems[i % skincareItems.length];
          name =
            `GlowSkin ${item.name} ${i >= skincareItems.length ? `v${Math.floor(i / skincareItems.length) + 1}` : ""}`.trim();
          subcategory = item.sub;
          tags = item.tag;
          description = `Organic GlowSkin ${item.name} formulated by skin specialists. Gently restores skin barrier health and boosts radiance.`;
          gender = i % 3 === 0 ? "women" : "unisex";
        } else if (brand === "AuraBeauty") {
          const makeupItems = [
            {
              name: "Velvet Matte High-Pigment Lipstick",
              sub: "Makeup",
              tag: ["lipstick", "makeup", "matte", "lips", "cosmetics"],
            },
            {
              name: "Liquid Matte Full Coverage Foundation",
              sub: "Makeup",
              tag: ["foundation", "makeup", "liquid", "cosmetics", "face"],
            },
            {
              name: "Volumizing Waterproof Jet Black Mascara",
              sub: "Makeup",
              tag: ["mascara", "makeup", "eyes", "waterproof"],
            },
            {
              name: "12-Color Nude Eyeshadow Palette",
              sub: "Makeup",
              tag: ["eyeshadow", "makeup", "palette", "eyes"],
            },
            {
              name: "Hydrating Satin Finish Lip Gloss",
              sub: "Makeup",
              tag: ["lipgloss", "makeup", "lips", "satin"],
            },
          ];
          const item = makeupItems[i % makeupItems.length];
          name =
            `AuraBeauty ${item.name} ${i >= makeupItems.length ? `v${Math.floor(i / makeupItems.length) + 1}` : ""}`.trim();
          subcategory = item.sub;
          tags = item.tag;
          description = `Premium AuraBeauty ${item.name} built with non-toxic, long-lasting ingredients. Delivers flawless cosmetic results.`;
          gender = "women";
        } else if (brand === "PureNourish") {
          const beautyItems = [
            {
              name: "Cold-Pressed Moroccan Argan Hair Oil",
              sub: "Hair Care",
              tag: ["hairoil", "arganoil", "haircare", "nourishing"],
            },
            {
              name: "Tea Tree Hydrating Botanical Shampoo",
              sub: "Hair Care",
              tag: ["shampoo", "haircare", "botanical", "hydrating"],
            },
            {
              name: "Coconut Milk Intense Repair Hair Mask",
              sub: "Hair Care",
              tag: ["hairmask", "haircare", "coconut", "repair"],
            },
            {
              name: "Warm Sandalwood & Amber Cologne Spray",
              sub: "Perfumes",
              tag: ["cologne", "perfume", "fragrance", "sandalwood", "men"],
            },
            {
              name: "Fresh Lavender & Blossom Perfume Mist",
              sub: "Perfumes",
              tag: ["perfume", "fragrance", "lavender", "women"],
            },
          ];
          const item = beautyItems[i % beautyItems.length];
          name =
            `PureNourish ${item.name} ${i >= beautyItems.length ? `v${Math.floor(i / beautyItems.length) + 1}` : ""}`.trim();
          subcategory = item.sub;
          tags = item.tag;
          description = `Nourishing PureNourish ${item.name} crafted from 100% natural, botanic floral ingredients for hair and scent.`;

          if (item.name.includes("Cologne")) {
            gender = "men";
          } else if (item.name.includes("Perfume")) {
            gender = "women";
          } else {
            gender = "unisex";
          }
        }
      }

      // ----------------------------------------------------
      // Standardize price, discount, review markers
      // ----------------------------------------------------
      const basePrice = Math.round((25 + ((i * 17) % 450)) * 100) / 100;
      const hasDiscount = i % 3 === 0;
      const discountPercent = hasDiscount ? 10 + ((i * 7) % 40) : 0;
      const price = hasDiscount
        ? Math.round(basePrice * (1 - discountPercent / 100) * 100) / 100
        : basePrice;

      const stock = i % 8 === 0 ? 0 : 15 + ((i * 13) % 85);
      const rating = Math.round((4.0 + ((i * 0.13) % 1.0)) * 10) / 10;
      const reviewCount = 12 + ((i * 19) % 380);

      const featured = i % 7 === 0;
      const newArrival = i % 5 === 0;
      const bestseller = i % 6 === 0;

      const colors =
        category === CATEGORIES.FASHION || category === CATEGORIES.ELECTRONICS
          ? ["Carbon Black", "Ash Gray", "Forest Green"].slice(0, 1 + (i % 3))
          : [];

      const sizes =
        category === CATEGORIES.FASHION ? ["S", "M", "L", "XL"].slice(0, 2 + (i % 3)) : [];

      // Add common tags based on category, brand, and subcategory
      const finalTags = Array.from(
        new Set([
          category.toLowerCase(),
          brand.toLowerCase(),
          subcategory.toLowerCase(),
          gender.toLowerCase(),
          ...(tags || []),
        ])
      );

      const slug = name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      products.push({
        _id: `prod-${globalId}`,
        name,
        title: name,
        slug,
        category,
        subcategory,
        brand,
        price,
        originalPrice: hasDiscount ? basePrice : undefined,
        discount: discountPercent,
        stock,
        rating,
        reviewCount,
        description,
        tags: finalTags,
        image: [images[imgIdx], images[(imgIdx + 1) % images.length]],
        thumbnail: images[imgIdx],
        colors,
        sizes,
        featured,
        newArrival,
        bestseller,
        gender,
      });

      globalId++;
    }
  });

  return products;
};

export const mockProducts = generateProducts();
export { CATEGORIES };
