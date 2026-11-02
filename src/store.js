// Preview for ALIF Boutiques (facebook.com/profile.php?id=61575888253973)
// Product names and prices are SAMPLE values until the seller confirms real ones.

export const store = {
  theme: "premium",
  accent: "#1F4E5A",
  name: "ALIF",
  nameLatin: "Boutiques · Uttara",
  tagline: "Elevated fashion, exquisite detailing and enduring elegance.",
  about:
    "Designed beyond trends. Embroidered formals and printed lawn sets, available for delivery, online booking or pickup from our Uttara store.",

  previewNote: "This is a demo. Product names and prices are samples and will be replaced with yours.",

  whatsapp: "8801941047552",
  messengerUsername: "61575888253973",
  facebookUrl: "https://www.facebook.com/profile.php?id=61575888253973",
  phoneDisplay: "01941-047552",
  address: "House 03, Road 18, Sector 13, Uttara, Dhaka 1230",
  hours: "In-store pickup and delivery",

  delivery: [
    { id: "pickup", label: "Pick up in Uttara", fee: 0, time: "Same day" },
    { id: "dhaka", label: "Inside Dhaka", fee: 80, time: "1–2 days" },
    { id: "bd", label: "Outside Dhaka", fee: 150, time: "3–5 days" },
  ],
  payment: ["Cash on delivery", "bKash", "Card in store"],

  lang: "en",
  builtBy: "Kazi Marzuk",
  builtByUrl: "https://kashshafcodes.github.io/",

  categories: [
    { id: "formal", label: "Embroidered formals" },
    { id: "lawn", label: "Printed lawn" },
  ],

  products: [
    {
      id: "a1",
      name: "Teal Embroidered Formal",
      category: "formal",
      price: 8900,
      image: "photos/a1.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Deep teal with tonal thread embroidery down the front, matching dupatta and trousers.",
      tag: "New in",
    },
    {
      id: "a2",
      name: "Silver Grey Embroidered Formal",
      category: "formal",
      price: 8900,
      image: "photos/a2.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Soft silver grey with white embroidered panels and an embroidered border dupatta.",
    },
    {
      id: "a3",
      name: "Ice Blue Embroidered Formal",
      category: "formal",
      price: 8500,
      image: "photos/a3.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Pale ice blue with delicate white embroidery. Light enough for daytime events.",
      tag: "Bestseller",
    },
    {
      id: "a4",
      name: "Magenta Printed Lawn Set",
      category: "lawn",
      price: 4950,
      image: "photos/a4.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Bright magenta lawn with a printed dupatta. Easy everyday colour.",
    },
    {
      id: "a5",
      name: "Coral Printed Lawn Set",
      category: "lawn",
      price: 4950,
      image: "photos/a5.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Coral pink lawn with a floral printed dupatta and matching trousers.",
    },
  ],
};
