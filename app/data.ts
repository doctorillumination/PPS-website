export type Episode = {
  title: string;
  specs: string;
  sales?: string;
  description: string;
  image: string;
  film: string;
  extras?: { label: string; href: string }[];
};

export const episodes: Episode[] = [
  {
    title: "Albert Hofmann, the Puppets, and how LSD was created",
    specs: "1 minute and 21 seconds // 1080p // 9:16",
    sales: "0.172 ETH in sales",
    description:
      "An unexpected look into how the psychedelic puppets intervened with Albert Hofmann and jumpstarted the Cambrian Explosion of Mind!",
    image: "/media/episode-albert.png",
    film: "https://foundation.app/mint/base/0x639659Ec1B192e4804339F2Af0f7B00CbdFEe1F9/2",
    extras: [
      {
        label: "Edition of 5: Iconic Clip",
        href: "https://foundation.app/mint/base/0x2DfAC13E256f9c11D0a51370cb38aE8ce127a06F",
      },
      {
        label: "Unlimited timed edition",
        href: "https://foundation.app/mint/base/0x371BFe0A89C112DB885742dbA9EF15D7a9A2DCce",
      },
    ],
  },
  {
    title: "NarraPen",
    specs: "1 minute and 57 seconds // 1080p // 9:16",
    description:
      "In a world where stories are forbidden, a motley crew of psychedelic puppets invents a vape pen that lets you inhale narratives. As the establishment fights to silence them, the puppets press on with their mission!",
    image: "/media/episode-narrapen.png",
    film: "https://foundation.app/mint/base/0x639659Ec1B192e4804339F2Af0f7B00CbdFEe1F9/3",
  },
  {
    title: "MDMA MMA",
    specs: "1 minute // 1080p // 9:16",
    description: "Come learn about the emerging sport of empathy fights!",
    image: "/media/episode-mdma.png",
    film: "https://foundation.app/mint/base/0x639659Ec1B192e4804339F2Af0f7B00CbdFEe1F9/11",
  },
  {
    title: "Stoned Puppet Theory",
    specs: "1 minute // 1080p // 16:9",
    sales: "0.7 ETH in sales",
    description:
      "Ever wonder what sparked human consciousness? The brothers Terence and Dennis McPuppet have a theory!",
    image: "/media/episode-stoned.png",
    film: "https://foundation.app/mint/base/0x639659Ec1B192e4804339F2Af0f7B00CbdFEe1F9/10",
  },
  {
    title: "Alan Watts on Puppeting",
    specs: "44 seconds // 1080p // 9:16",
    sales: "1 ETH in sales",
    description:
      "Just as a leaf emerges naturally from a tree, we are the universe expressing itself in puppet form.",
    image: "/media/episode-watts.jpg",
    film: "https://foundation.app/mint/base/0x639659Ec1B192e4804339F2Af0f7B00CbdFEe1F9/9",
  },
  {
    title: "Young Paul Stamets's First Trip",
    specs: "1 minute // 1080p // 9:16",
    sales: "1 ETH in sales",
    description: "Journey into the mythical beginnings of our favorite mycologist!",
    image: "/media/episode-stamets.png",
    film: "https://foundation.app/mint/base/0x639659Ec1B192e4804339F2Af0f7B00CbdFEe1F9/4",
  },
  {
    title: "Visions",
    specs: "59 seconds // 1080p // 9:16",
    sales: "1.1 ETH in sales",
    description: "Care to wander through the unconscious realm of archetypes and symbols?",
    image: "/media/episode-visions.png",
    film: "https://foundation.app/mint/base/0x639659Ec1B192e4804339F2Af0f7B00CbdFEe1F9/12",
  },
  {
    title: "Jason Silva and the Council of Psychedelic Puppets",
    specs: "55 seconds // 1080p // 9:16",
    description:
      "A council of psychedelic puppets has assembled to expand Jason's consciousness and manifest his imagination!",
    image: "/media/episode-jason.png",
    film: "https://foundation.app/mint/base/0x639659Ec1B192e4804339F2Af0f7B00CbdFEe1F9/5",
  },
  {
    title: "Heroes",
    specs: "3 minutes and 33 seconds // 1080p // 9:16",
    description:
      "The Literalist crushes reality with an iron grip, smothering creativity and awe. A band of visionaries rises to fight back with absurdity, art, and wonder.",
    image: "/media/episode-heroes.png",
    film: "https://foundation.app/mint/base/0x639659Ec1B192e4804339F2Af0f7B00CbdFEe1F9/6",
  },
  {
    title: "Robin Carhart-Harris and the Entropic Puppet Theory",
    specs: "2 minutes and 9 seconds // 1080p // 9:16",
    sales: "1 ETH in sales",
    description:
      "See how the psychedelic puppets helped jumpstart the renaissance of psychedelic neuroscience!",
    image: "/media/episode-robin.png",
    film: "https://foundation.app/mint/base/0x639659Ec1B192e4804339F2Af0f7B00CbdFEe1F9/14",
  },
  {
    title: "Council of the Psychedelic Puppets",
    specs: "2 minutes and 48 seconds // 1080p // 9:16",
    description:
      "Welcome to one of the many Psychedelic Puppet Councils, where cosmic puppets gather to debate the nature of Being and dream humanity's imagination into reality!",
    image: "/media/episode-council.png",
    film: "https://foundation.app/mint/base/0x639659Ec1B192e4804339F2Af0f7B00CbdFEe1F9/13",
  },
];
export type Product = {
  slug: string;
  name: string;
  price: number;
  priceLabel: string;
  image: string;
  category?: "Stamets";
  description: string;
  details: string[];
  colors?: string[];
  sizes?: string[];
};

const organicDetails = [
  "100% organic combed ring-spun cotton",
  "Fabric weight: 5.3 oz./yd.² (180 g/m²)",
  "Regular fit with set-in sleeves",
  "1 × 1 rib at collar",
  "Double-needle topstitch on the sleeves and bottom hems",
  "Made on demand to help reduce overproduction",
];

const standardColors = [
  "Black",
  "French Navy",
  "India Ink Grey",
  "Stargazer",
  "Khaki",
  "Heather Grey",
  "Lavender",
];

const standardSizes = ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

export const products: Product[] = [
  {
    slug: "unisex-organic-t-shirt-stamets-rainbow",
    name: "Unisex organic t-shirt - Stamets Rainbow",
    price: 51,
    priceLabel: "from $51.00",
    image: "/media/product-stamets-rainbow.jpg",
    category: "Stamets",
    description:
      "Stay stylish with this unisex t-shirt. It is made from 100% organic combed ring-spun cotton, combining comfort with durability. The textured ribbed neck adds versatility to your wardrobe.",
    details: organicDetails,
    colors: standardColors.slice(0, 6),
    sizes: standardSizes.slice(0, 7),
  },
  {
    slug: "unisex-organic-ribbed-neck-t-shirt-paul",
    name: "Unisex organic t-shirt - Stamets Cosmos",
    price: 51,
    priceLabel: "from $51.00",
    image: "/media/product-stamets-cosmos.jpg",
    category: "Stamets",
    description:
      "Stay stylish with this unisex t-shirt. It is made from 100% organic combed ring-spun cotton, combining comfort with durability. The textured ribbed neck adds versatility to your wardrobe.",
    details: organicDetails,
    colors: standardColors.slice(0, 6),
    sizes: standardSizes.slice(0, 7),
  },
  {
    slug: "unisex-garment-dyed-sweatshirt",
    name: "Unisex sweatshirt",
    price: 56,
    priceLabel: "from $56.00",
    image: "/media/product-garment-sweatshirt.jpg",
    description:
      "This sweatshirt is like a thrifted gem, but better. It provides a soft, worn-in feel, vintage-washed colors, and a relaxed fit, ideal for everyday wear.",
    details: [
      "80% ring-spun cotton, 20% polyester",
      "Garment-dyed 3-end fleece with a 100% cotton face",
      "Relaxed fit and side-seamed construction",
      "OEKO-TEX Standard 100-certified fabric",
    ],
    colors: ["True Navy", "Pepper", "Denim", "Flo Blue", "Light Green", "Grey", "Violet"],
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    slug: "unisex-organic-t-shirt-5",
    name: "Unisex organic t-shirt",
    price: 45,
    priceLabel: "from $45.00",
    image: "/media/product-shirt-5.jpg",
    description: "A timeless organic cotton t-shirt with a comfortable regular fit and ribbed neck.",
    details: organicDetails,
    colors: standardColors,
    sizes: standardSizes,
  },
  {
    slug: "stainless-steel-water-bottle-with-a-straw-lid",
    name: "Stainless steel water bottle",
    price: 44,
    priceLabel: "$44.00",
    image: "/media/product-water-bottle.jpg",
    description:
      "Stay hydrated all day with this 32 oz water bottle, with a foldable straw and rotating handle for easy carrying.",
    details: ["Double-walled stainless steel", "32 oz. (950 ml)", "Glossy finish", "Hand-wash only"],
  },
  {
    slug: "holographic-stickers-1",
    name: "Holographic stickers",
    price: 12,
    priceLabel: "from $12.00",
    image: "/media/product-stickers.jpg",
    description:
      "Add some sparkle with high-quality holographic vinyl stickers and long-lasting adhesive backing.",
    details: ["Hot-embossed 3D pattern", "Durable vinyl", "Bubble-free application", "Indoor use"],
    sizes: ["3″×3″", "4″×4″", "5.5″×5.5″"],
  },
  {
    slug: "unisex-organic-t-shirt-3",
    name: "Unisex organic t-shirt",
    price: 41.41,
    priceLabel: "from $41.41",
    image: "/media/product-shirt-3.jpg",
    description: "A comfortable organic cotton t-shirt with a polished ribbed collar.",
    details: organicDetails,
    colors: standardColors,
    sizes: standardSizes,
  },
  {
    slug: "eco-tote-bag",
    name: "Eco Tote Bag",
    price: 30,
    priceLabel: "$30.00",
    image: "/media/product-tote.jpg",
    description: "An organic cotton tote with room for groceries, books, and anything in between.",
    details: ["100% certified organic cotton", "30 lb weight limit", "Open main compartment"],
  },
  {
    slug: "fanny-pack",
    name: "Fanny Pack",
    price: 50,
    priceLabel: "$50.00",
    image: "/media/product-fanny.jpg",
    description:
      "The hands-free festival accessory with a small inside pocket, water-resistant fabric, and adjustable straps.",
    details: ["100% polyester", "Water-resistant", "Top zipper with two sliders", "Adjustable straps"],
    sizes: ["S/M", "M/L"],
  },
  {
    slug: "unisex-organic-ribbed-neck-t-shirt",
    name: "Unisex organic t-shirt",
    price: 43.5,
    priceLabel: "from $43.50",
    image: "/media/product-shirt-ribbed.jpg",
    description: "A versatile organic cotton t-shirt for everyday wear.",
    details: organicDetails,
    colors: standardColors,
    sizes: standardSizes,
  },
  {
    slug: "womens-organic-t-shirt",
    name: "Women's organic t-shirt",
    price: 40.58,
    priceLabel: "from $40.58",
    image: "/media/product-womens.jpg",
    description:
      "Designed to flatter, this women's organic tee offers a premium feel and a polished ribbed neck.",
    details: organicDetails,
    colors: ["Black", "French Navy", "Green Bay", "Fiesta", "Bubble Pink", "Lavender"],
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    slug: "unisex-hoodie",
    name: "Unisex hoodie",
    price: 70.5,
    priceLabel: "from $70.50",
    image: "/media/product-hoodie.jpg",
    description:
      "A quality Champion hoodie with moisture-wicking Double Dry technology for comfort on the move.",
    details: ["50% cotton, 50% polyester", "Two-ply hood", "Kangaroo pocket", "Regular fit"],
    colors: ["Black", "Light Steel"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    slug: "unisex-organic-t-shirt",
    name: "Unisex organic t-shirt",
    price: 40.58,
    priceLabel: "from $40.58",
    image: "/media/product-shirt.jpg",
    description: "A comfortable organic cotton t-shirt with a textured ribbed neck.",
    details: organicDetails,
    colors: standardColors,
    sizes: standardSizes,
  },
  {
    slug: "unisex-organic-t-shirt-1",
    name: "Unisex organic t-shirt",
    price: 40.58,
    priceLabel: "from $40.58",
    image: "/media/product-shirt-1.jpg",
    description: "A comfortable organic cotton t-shirt made for repeat wear.",
    details: organicDetails,
    colors: standardColors,
    sizes: standardSizes,
  },
  {
    slug: "unisex-organic-t-shirt-2",
    name: "Unisex organic t-shirt",
    price: 40.58,
    priceLabel: "from $40.58",
    image: "/media/product-shirt-2.jpg",
    description: "A colorful, comfortable organic cotton t-shirt with a regular fit.",
    details: organicDetails,
    colors: standardColors,
    sizes: standardSizes,
  },
  {
    slug: "beanie",
    name: "Beanie",
    price: 40,
    priceLabel: "$40.00",
    image: "/media/product-beanie.jpg",
    description: "A cozy fisherman-style beanie with a thick ribbed knit and snug fit.",
    details: ["100% acrylic", "Wide ribbed knit", "One size fits most"],
  },
  {
    slug: "latte-mug",
    name: "Latte mug",
    price: 26,
    priceLabel: "$26.00",
    image: "/media/product-latte.jpg",
    description: "A classic 12 oz ceramic mug for coffee, tea, and quiet mornings.",
    details: ["100% white ceramic", "12 oz volume", "Dishwasher and microwave-safe"],
  },
  {
    slug: "unisex-sweatshirt",
    name: "Unisex sweatshirt",
    price: 64,
    priceLabel: "from $64.00",
    image: "/media/product-sweatshirt.jpg",
    description: "A vintage-washed, relaxed sweatshirt with a soft, worn-in feel.",
    details: ["80% ring-spun cotton, 20% polyester", "Relaxed fit", "Garment-dyed fleece"],
    colors: ["True Navy", "Pepper", "Denim", "Flo Blue", "Watermelon", "Grey", "Violet"],
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    slug: "mug-with-color-inside",
    name: "Mug with Color Inside",
    price: 26,
    priceLabel: "$26.00",
    image: "/media/product-color-mug.jpg",
    description: "A ceramic mug with a colorful rim, handle, and inside.",
    details: ["11 oz ceramic mug", "Lead and BPA-free", "Dishwasher and microwave safe"],
    colors: ["Black", "Red", "Dark Green", "Orange", "Blue", "Pink", "Golden Yellow", "Green"],
  },
  {
    slug: "unisex-organic-t-shirt-4",
    name: "Unisex organic t-shirt",
    price: 44.5,
    priceLabel: "from $44.50",
    image: "/media/product-shirt-4.jpg",
    description: "A timeless organic cotton t-shirt with a versatile regular fit.",
    details: organicDetails,
    colors: standardColors,
    sizes: standardSizes,
  },
];

export const collabArtists = [
  "Trudy Erin Elmore",
  "Veronika McGinnis",
  "Jordan Loewen-Colon",
  "Michael Oliver",
  "Justin Ogilvie, Dane Cree",
];

export const festivalFilms = [
  ["Em Memoria", "Bruno Bez", "https://www.instagram.com/bruno3ez"],
  ["Stories of Transformation: Sam Juan", "Stephen Apkon and Sean Gallagher", "https://www.reconsider.org/"],
  ["Ethereal Odyssey", "Abbey M Wright", "https://www.instagram.com/abbwri/"],
  ["Dragon", "Dane Cree", "https://www.instagram.com/danecree/"],
  ["Communing", "Chigdem Karadogan", "https://www.instagram.com/tt.twisler/"],
  ["21", "AlanX AI", "https://www.instagram.com/alanx_ai/"],
  ["Bipolar", "aAron Christopher Munson", "https://aaronmunson.com"],
  ["Flow Go", "John Dawson", "https://www.youtube.com/channel/UCTei_Uytc5t56UqeuRNUGGg"],
  ["Consecution", "Scott Portingale", "https://www.instagram.com/scottportingale/"],
  ["The Inner Rat", "Katrina Mortko", "https://www.instagram.com/m0rtko"],
];
