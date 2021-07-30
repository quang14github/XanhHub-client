const products = [
  {
    SID: 1,
    NAME: "Nimble Disc Clear iPhone Case",
    img: "https://d13wriz42ny3t5.cloudfront.net/production/2020/08/04153009/nimble-Recycled-iPhone-Case-iphone-11-1.jpg",
    des: "Did you know that 50 million tonnes of e-waste are projected to end up in our landfills each year? In America alone, E-waste represents 70% of all toxic waste found in landfills. Nimble has set out to change the status quo by creating a sustainable pathway for all tech companies to follow by creating high quality tech products using low impact materials. From their plastic free packaging and use of recycled materials, to their e-waste recycling program and ethical labor standards, Nimble puts people and planet first in all aspects of their business. Nimble believes that all customers should know how their products are made, where they come from, and the impact they have on the world. Stop e-waste with Nimble! ",
    feature: [
      {
        ORIGIN: "Designed in California, ethically manufactured in China",
        MATERIALS: "Recycled polycarbonate from 100% recycled compact discs",
        END_OF_LIFE:
          "One-for-One Tech Recovery Project: With every Nimble product, you'll receive a return envelope so you can send 1 pound of old or obsolete electronics or cases directly to Nimble's e-waste recycling partner for safe, responsible recycling at no additional cost! Go to gonimble.com/recycle to print a prepaid shipping label! ",
      },
    ],
    specifications: [
      {
        PRODUCT_CARE:
          "Product packaged in paper packaging that is free of harmful dyes and inks ",
        ADDITIONAL_FEATURES: "Contains no virgin petroleum based plastic",
        RETURNS: "Weight: less than 1oz",
      },
    ],
    company: 15,
    PRICE: 5,
    AVG_RATING: 4,
    RATE_COUNTS: 142,
  },
  {
    SID: 2,
    NAME: "PowerKnit USB-C to Lightning Charging Cable",
    img: "https://d13wriz42ny3t5.cloudfront.net/production/2021/05/27122913/09-nimble-usbc-lightning-charging-cable-1-1.jpg",
    des: "Did you know that 50 million tonnes of e-waste are projected to end up in our landfills each year? In America alone, E-waste represents 70% of all toxic waste found in landfills. Nimble has set out to change the status quo by creating a sustainable pathway for all tech companies to follow by creating high quality tech products using low impact materials. From their plastic free packaging and use of recycled materials, to their e-waste recycling program and ethical labor standards, Nimble puts people and planet first in all aspects of their business. Nimble believes that all customers should know how their products are made, where they come from, and the impact they have on the world. Stop e-waste with Nimble! ",
    feature: [
      {
        ORIGIN: "Designed in California, ethically manufactured in China",
        MATERIALS:
          "Cable is made from recycled water bottles with a PVC-Free Overmold ",
        END_OF_LIFE:
          "One-for-One Tech Recovery Project: With every Nimble product, you'll receive a return envelope so you can send 1 pound of old or obsolete electronics directly to Nimble's e-waste recycling partner for safe, responsible recycling at no additional cost! Go to gonimble.com/recycle to print a prepaid shipping label! ",
      },
    ],
    specifications: [
      {
        PRODUCT_CARE:
          "Product packaged in recycled paper packaging that is free of harmful dyes and inks ",
        ADDITIONAL_FEATURES: "Contains no virgin petroleum based plastic ",
        RETURNS: "1 Meter (3 Feet) ",
      },
    ],
    PRICE: 5,
    AVG_RATING: 4,
    RATE_COUNTS: 142,
    company: 20,
  },
  {
    SID: 3,
    NAME: "Cotopaxi Del Día Trece Laptop Sleeve 13in",
    img: "https://d13wriz42ny3t5.cloudfront.net/production/2020/07/23093042/Cotopaxi-Repurposed-Nylon-Trece-13-laptop-sleeve-surprise.jpg",
    des: "By supporting Cotopaxi, you’re supporting a company whose purpose is to promote equality, sustainability, and improve the human condition by donating to those in need. Founder Davis Smith’s love for the outdoors and drive to support the underprivileged areas of the world lead to the creation of Cotopaxi. Through their sale of ethically and sustainably made backpacks, duffel bags, and other outdoor gear, Cotopaxi contributes 1% of their yearly revenue towards providing grants to nonprofit organizations that promote equality in developing areas of the world. To date, they have provided 42 grants to 6 different countries! To confirm their commitment to social and environmental welfare, Cotopaxi is also a B Corp certified company, ranking in the top 10% of registered B Corporations!",
    feature: [
      {
        ORIGIN:
          "Mindfully made in the Philippines using fabric left over from other companies’ large production runs",
        MATERIALS: "All fabric pieces are 100% repurposed nylon",
        END_OF_LIFE: "Donate!",
      },
    ],
    specifications: [
      {
        PRODUCT_CARE:
          "Ships plastic free in packaging made from recycled content ",
        ADDITIONAL_FEATURES:
          "We recommend spot cleaning all of the packs with a wash cloth and a mild detergent.",
        RETURNS: "12.5 x 9 x 0.6 in (32 x 22.5 x 1.5 cm)",
      },
    ],
    PRICE: 5,
    AVG_RATING: 4,
    RATE_COUNTS: 142,
    company: 2,
  },
  {
    SID: 4,
    NAME: "WALLY Mini Wall Charger",
    img: "https://d13wriz42ny3t5.cloudfront.net/production/2021/05/27122823/05-nimble-wally-mini-1-1.jpg",
    des: "Simply plug and play with the WALLY Mini Wall Charger from Nimble! Featuring dual USB-C and USB-A ports, the WALLY Mini powers your battery with up to 20w of fast charging. With housing made from RePlay™ Certified Recycled Plastic, this'll be the last wall adapter you'll need for your smartphone and tablets! Plus, like all Nimble Products, this charging pad is Climate Neutral Certified and supports environmental non-profits through 1% for the Planet!",
    feature: [
      {
        ORIGIN: "Designed in California, ethically manufactured in China",
        MATERIALS:
          "Housing is made from RePlay™ Certified Recycled Plastic, which contains 72.5% post-consumer recycled plastic",
        END_OF_LIFE:
          "One-for-One Tech Recovery Project: With every Nimble product, you'll receive a return envelope so you can send 1 pound of old or obsolete electronics directly to Nimble's e-waste recycling partner for safe, responsible recycling at no additional cost! Go to gonimble.com/recycle to print a prepaid shipping label! ",
      },
    ],
    specifications: [
      {
        PRODUCT_CARE:
          "Product packaged in recycled paper packaging that is free of harmful dyes and inks ",
        ADDITIONAL_FEATURES: "BPA & PVC free",
        RETURNS: "2.09 x 1.54 x 1.06 inches",
      },
    ],
    company: 21,
    PRICE: 5,
    AVG_RATING: 4,
    RATE_COUNTS: 142,
  },
  {
    SID: 5,
    NAME: "No Bounds Sport Waterproof Bluetooth Speaker",
    img: "https://d13wriz42ny3t5.cloudfront.net/production/2019/04/04102736/house-of-marley-no-bounds-sport-waterproof-bluetooth-speaker-black-1.png",
    des: "No adventure is complete without the perfect soundtrack. But typical speakers can get easily damaged from the elements – and leave you without tunes to jam to. Bring your music wherever you travel with House of Marley's No Bounds Sport Waterproof Bluetooth Speaker! Made from sustainable post-consumer recycled materials like cork, aluminum, and silicone, this travel-friendly speaker is dust-proof, waterproof, and can even float! It charges quickly in less than two hours, and will play up to 12 Read Morecontinuous hours of music so you can go all day. Whether you're connecting via Bluetooth or AUX cord, this mini speaker is easy to stash in a bag, or clip with the carabiner to your backpack. The unique cylindrical design gives you 360 degrees of sound, perfect for amplifying your tunes in all directions. Plus, House of Marley plants a tree for every item purchased, and has planted over 25,000 trees to date – so you can feel great about jammin' to this speaker!",
    feature: [
      {
        ORIGIN: "Recycled REWIND Fabric Outer ",
        MATERIALS: "IP67 Certified to be both Waterproof and Dust-proof",
        END_OF_LIFE:
          "Features specially designed REWIND recycled fabric and REGRIND post-process and post-consumer recycled silicone ",
      },
    ],
    specifications: [
      {
        PRODUCT_CARE: "3 x 3 x 6.5 inches",
        ADDITIONAL_FEATURES: "Battery capacity: 2600mAh ",
        RETURNS:
          "House of Marley offers a Two-Year Limited Warranty. Contact us!",
      },
    ],
    company: 23,
    PRICE: 5,
    AVG_RATING: 4,
    RATE_COUNTS: 142,
  },
  {
    SID: 6,
    NAME: "2-in-1 Wooden Headphone Stand",
    img: "https://d13wriz42ny3t5.cloudfront.net/production/2019/10/29173002/Oakywood-2-in-1-Wooden-Headphone-Stand-Oak-1.jpg",
    des: "What began in the mountains of Poland as one family’s shared tradition, has now blossomed into flourishing eco-business! Mateusz Haberny’s entrepreneurial vision, woodworking background, and creative spirit quickly turned hobby into a collection of quality products. ",
    feature: [
      {
        ORIGIN: "Handcrafted in Ciche, Poland",
        MATERIALS: "FSC Certified Oak or Walnut Wood ",
        END_OF_LIFE:
          "The wood used in all Oakywood products comes from FSC Certified Sources – meaning it comes from responsibly managed forests that ensure the sustainability and health of our forests! ",
      },
    ],
    specifications: [
      {
        PRODUCT_CARE:
          "Hand oiled and hand finished with non-toxic, vegetable based oil",
        ADDITIONAL_FEATURES:
          "Wooden headphone stand made from solid FSC Certified oak or walnut wood and black painted solid steel ",
        RETURNS:
          "Unused, undamaged products in their original product packaging can be returned within 30 days",
      },
    ],
    company: 0,
    PRICE: 5,
    AVG_RATING: 4,
    RATE_COUNTS: 142,
  },
  {
    SID: 7,
    NAME: "Wooden Headphone Stand",
    img: "https://d13wriz42ny3t5.cloudfront.net/production/2019/10/29173623/Oakywood-Wooden-Headphone-Stand-Walnut-1.jpg",
    des: "What began in the mountains of Poland as one family’s shared tradition, has now blossomed into flourishing eco-business! Mateusz Haberny’s entrepreneurial vision, woodworking background, and creative spirit quickly turned hobby into a collection of quality products. ",
    feature: [
      {
        ORIGIN: "Handcrafted in Ciche, Poland",
        MATERIALS: "FSC Certified Oak or Walnut Wood ",
        END_OF_LIFE:
          "The wood used in all Oakywood products comes from FSC Certified Sources – meaning it comes from responsibly managed forests that ensure the sustainability and health of our forests!",
      },
    ],
    specifications: [
      {
        PRODUCT_CARE:
          "Hand oiled and hand finished with non-toxic, vegetable based oil",
        ADDITIONAL_FEATURES:
          "Wooden headphone stand made from solid FSC Certified oak or walnut wood and black painted solid steel ",
        RETURNS:
          "Unused, undamaged products in their original product packaging can be returned within 30 days",
      },
    ],
    company: 23,
    PRICE: 5,
    AVG_RATING: 4,
    RATE_COUNTS: 142,
  },
  {
    SID: 8,
    NAME: "Organic Cotton Laptop Sleeve 15 in",
    img: "https://d13wriz42ny3t5.cloudfront.net/production/2021/01/11135826/06-terra-thread-laptop-sleeve-15-blue-1.jpg",
    des: "Handcrafted in a Fair Trade Certified Factory and made with GOTS Certified dyes and Fairtrade America Certified Organic Cotton, Terra Thread is committed to ethical manufacturing and sourcing materials that are gentle on the planet. Their bags and accessories are not only eco-friendly and responsibly-made, but also incredibly stylish, durable, and affordable. Plus, for every bag or accessory sold, Terra Thread donates meals to underprivileged children, families, and seniors through Feeding America!",
    feature: [
      {
        ORIGIN: "Handmade in a Fair Trade facility in India",
        MATERIALS: "100% 14oz heavy duty GOTS Certified organic cotton ",
        END_OF_LIFE: "Fair Trade USA Certified Factory ",
      },
    ],
    specifications: [
      {
        PRODUCT_CARE: "Made with no GMOs, toxic dyes, or chemicals",
        ADDITIONAL_FEATURES: "Spot clean with cold water ",
        RETURNS: '11 " x 15 " x 1 "',
      },
    ],
    company: 29,
    PRICE: 5,
    AVG_RATING: 4,
    RATE_COUNTS: 142,
  },
  {
    SID: 9,
    NAME: "Apollo Single Wireless Charging Pad",
    img: "https://d13wriz42ny3t5.cloudfront.net/production/2021/05/27122813/04-nimble-apollo-single-1-1.jpg",
    des: "Wirelessly charge all your devices with the Apollo Single Wireless Charging Pad from Nimble! Made from eco-friendly materials like RePlay™ Certified Recycled Plastic and recycled silicone, this device charges newer iPhones, Samsung's, Androids, AirPods (2nd Generation) and Google Pixel 3 on contact. Simply plug it in, lay your device down, and watch it quickly fill up! Plus, like all Nimble Products, this charging pad is Climate Neutral Certified and supports environmental non-profits through Read More1% for the Planet!",
    feature: [
      {
        ORIGIN: "Designed in California, ethically manufactured in China",
        MATERIALS:
          "Made from Recycled Silicone and RePlay™ Certified Recycled Plastic, which contains 72.5% post-consumer recycled plastic ",
        END_OF_LIFE:
          "One-for-One Tech Recovery Project: With every Nimble product, you'll receive a return envelope so you can send 1 pound of old or obsolete electronics directly to Nimble's e-waste recycling partner for safe, responsible recycling at no additional cost! Go to gonimble.com/recycle to print a prepaid shipping label! ",
      },
    ],
    specifications: [
      {
        PRODUCT_CARE:
          "Product packaged in recycled paper packaging that is free of harmful dyes and inks ",
        ADDITIONAL_FEATURES:
          "Wireless charging pad that charges on contact with 15W Qi Fast Charge ",
        RETURNS:
          "All Nimble products have a two year manufacturer's warranty that covers the repair or replacement of defective parts. Reach out to us at support@earthhero.com for more info!",
      },
    ],
    company: 20,
    PRICE: 5,
    AVG_RATING: 4,
    RATE_COUNTS: 142,
  },
  {
    SID: 10,
    NAME: "PowerKnit USB-C to USB-C Cable",
    img: "https://d13wriz42ny3t5.cloudfront.net/production/2021/05/27122853/08-nimble-usbc-usbc-charging-cable-1-1.jpg",
    des: "Did you know that 50 million tonnes of e-waste are projected to end up in our landfills each year? In America alone, E-waste represents 70% of all toxic waste found in landfills. Nimble has set out to change the status quo by creating a sustainable pathway for all tech companies to follow by creating high quality tech products using low impact materials. From their plastic free packaging and use of recycled materials, to their e-waste recycling program and ethical labor standards, Nimble puts people and planet first in all aspects of their business. Nimble believes that all customers should know how their products are made, where they come from, and the impact they have on the world. Stop e-waste with Nimble! ",
    feature: [
      {
        ORIGIN: "Designed in California, ethically manufactured in China",
        MATERIALS:
          "Cable is made from recycled water bottles with a PVC-Free Overmold ",
        END_OF_LIFE:
          "One-for-One Tech Recovery Project: With every Nimble product, you'll receive a return envelope so you can send 1 pound of old or obsolete electronics directly to Nimble's e-waste recycling partner for safe, responsible recycling at no additional cost! Go to gonimble.com/recycle to print a prepaid shipping label! ",
      },
    ],
    specifications: [
      {
        PRODUCT_CARE:
          "Product packaged in recycled paper packaging that is free of harmful dyes and inks ",
        ADDITIONAL_FEATURES: "Contains no virgin petroleum based plastic ",
        RETURNS: "1 Meter (3 Feet) ",
      },
    ],
    company: 13,
    PRICE: 5,
    AVG_RATING: 4,
    RATE_COUNTS: 142,
  },
];
export default function useProduct() {
  return products;
}
