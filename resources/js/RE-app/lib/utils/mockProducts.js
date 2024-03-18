import model from "/public/img/53.png";
import badge from "../../assets/preset.png";
import tShirt from "../../assets/website-design/product.png";
import pin from "../../assets/REPin.webp";

export default [
  {
    //----------------------------------------------------------
    id: "29ERJBK6F986", //str (random)
    //----------------------------------------------------------
    name: "Nemesis Model", //str
    //----------------------------------------------------------
    description: "Resident EVIL boss toy", //str
    //----------------------------------------------------------
    price: 50, //float
    //----------------------------------------------------------
    categories: ["Toy", "Model", "Evil"], //[str]
    //----------------------------------------------------------
    discountRate: 0, //float
    //----------------------------------------------------------
    image_url: model, //str
    //----------------------------------------------------------
    stockQuantity: 1, //int
    //----------------------------------------------------------
    sku: "f8327h0832", //str
    //----------------------------------------------------------
    isFeatured: true, //bool
    //----------------------------------------------------------
    weight: 2, //float
    //----------------------------------------------------------
    dimensions: "2x2x2", //str
    //----------------------------------------------------------
    status: "active", //str
    //----------------------------------------------------------
    created: "Sun Mar 1 2024 12:51:01", //date
    //----------------------------------------------------------
    lastUpdated: "Sun Mar 10 2024 11:51:01", //date
    //----------------------------------------------------------
    hasSizes: false, //bool
    //----------------------------------------------------------
    variants: ["id1", "id2"], //[str]
    //----------------------------------------------------------
    noOfReviews: 4, //int
    //----------------------------------------------------------
    rating: 5, //int (1-5)
    //----------------------------------------------------------
    tags: ["#nemesis", "#bigdaddy"], //[str]
    //----------------------------------------------------------
    inWishlist: true, //bool
    //----------------------------------------------------------
  },
  /* {
    "id": "YH4FZDYZ46OU",
    "name": "Umbrella Corp Logo Cap",
    "description": "Resident Evil series collectible figure inspired by Umbrella Corporation Logo Cap",
    "price": 41.43,
    "categories": [
        "Collectible",
        "Figure",
        "Resident Evil"
    ],
    "discountRate": 0.48,
    "image_url": tShirt,
    "stockQuantity": 20,
    "sku": "OTLPV5KF91",
    "isFeatured": true,
    "weight": 4.08,
    "dimensions": "1x2x1",
    "status": "inactive",
    "created": "Mon Mar 18 2024 00:00:00",
    "lastUpdated": "Wed Apr 17 2024 00:00:00",
    "hasSizes": true,
    "variants": [
        "TES",
        "LG2",
        "YPD"
    ],
    "noOfReviews": 72,
    "rating": 3,
    "tags": [
        "#umbrellacorporationlogocap",
        "#residentevil"
    ],
    "inWishlist": true
}, */
/* {
    "id": "3KKXW22QNQPX",
    "name": "Biohazard Warning Mug",
    "description": "Resident Evil series collectible figure inspired by Biohazard Warning Mug",
    "price": 79.58,
    "categories": [
        "Collectible",
        "Figure",
        "Resident Evil"
    ],
    "discountRate": 0.5,
    "image_url": badge,
    "stockQuantity": 19,
    "sku": "6IOX2FTD5F",
    "isFeatured": false,
    "weight": 4.46,
    "dimensions": "4x1x2",
    "status": "inactive",
    "created": "Sun Mar 24 2024 00:00:00",
    "lastUpdated": "Thu Mar 28 2024 00:00:00",
    "hasSizes": false,
    "variants": [
        "I90",
        "6GT",
        "WOE"
    ],
    "noOfReviews": 64,
    "rating": 3,
    "tags": [
        "#biohazardwarningmug",
        "#residentevil"
    ],
    "inWishlist": false
}, */
  /* {
    id: "E6660KRDESAQ",
    name: "Tyrant X Model",
    description: "Resident Evil boss toy",
    price: 98.19,
    categories: ["Doll", "Video Game", "Bioweapon"],
    discountRate: 0.31,
    image_url: model,
    stockQuantity: 64,
    sku: "tpxsranpvn",
    isFeatured: true,
    weight: 1.97,
    dimensions: "3x5x4",
    status: "active",
    created: "Thu Feb 22 2024 03:20:56",
    lastUpdated: "Tue Mar 12 2024 03:20:56",
    hasSizes: true,
    variants: ["E5B", "DKN"],
    noOfReviews: 41,
    rating: 2,
    tags: ["#woumjh", "#o39lqc"],
    inWishlist: false,
  },
  {
    id: "APF7Z1VYCJUO",
    name: "Tyrant Model",
    description:
      "Resident Evil series collectible figure inspired by Tyrant Model",
    price: 36.89,
    categories: ["Collectible", "Figure", "Resident Evil"],
    discountRate: 0.26,
    image_url: model,
    stockQuantity: 4,
    sku: "YSUS9KJKB8",
    isFeatured: false,
    weight: 4.54,
    dimensions: "3x4x2",
    status: "active",
    created: "Sat Mar 09 2024 00:00:00",
    lastUpdated: "Tue Mar 26 2024 00:00:00",
    hasSizes: false,
    variants: ["VME"],
    noOfReviews: 20,
    rating: 2,
    tags: ["#tyrantmodel", "#residentevil"],
    inWishlist: false,
  },
     {
       id: "VR1ZGJIV1HF1",
       name: "Hunter Model",
       description:
         "Resident Evil series collectible figure inspired by Hunter Model",
       price: 44.48,
       categories: ["Collectible", "Figure", "Resident Evil"],
       discountRate: 0.04,
       image_url: model,
       stockQuantity: 10,
       sku: "H4LTANF9QF",
       isFeatured: true,
       weight: 0.55,
       dimensions: "2x4x1",
       status: "inactive",
       created: "Fri Jan 12 2024 00:00:00",
       lastUpdated: "Sat Feb 03 2024 00:00:00",
       hasSizes: true,
       variants: ["0KS"],
       noOfReviews: 77,
       rating: 5,
       tags: ["#huntermodel", "#residentevil"],
       inWishlist: true,
     },
   {
       "id": "8NM2E40QDCG1",
       "name": "Jack Baker Statue",
       "description": "Resident Evil series collectible figure inspired by Jack Baker Statue",
       "price": 66.14,
       "categories": [
           "Collectible",
           "Figure",
           "Resident Evil"
       ],
       "discountRate": 0.02,
       "image_url": model,
       "stockQuantity": 3,
       "sku": "ASY0HCU6MI",
       "isFeatured": true,
       "weight": 2.02,
       "dimensions": "3x2x5",
       "status": "active",
       "created": "Mon Jan 01 2024 00:00:00",
       "lastUpdated": "Mon Jan 01 2024 00:00:00",
       "hasSizes": false,
       "variants": [
           "E6I"
       ],
       "noOfReviews": 51,
       "rating": 2,
       "tags": [
           "#jackbakerstatue",
           "#residentevil"
       ],
       "inWishlist": false
   }, */
   /* {
       "id": "LW49QKEVLBZ6",
       "name": "S.T.A.R.S. Uniform T-Shirt",
       "description": "Resident Evil series collectible figure inspired by Jill Valentine's S.T.A.R.S. Uniform T-Shirt",
       "price": 85.65,
       "categories": [
           "Collectible",
           "Figure",
           "Resident Evil"
       ],
       "discountRate": 0.18,
       "image_url": tShirt,
       "stockQuantity": 19,
       "sku": "LAAEO21XPC",
       "isFeatured": false,
       "weight": 2.57,
       "dimensions": "2x4x1",
       "status": "inactive",
       "created": "Thu Jan 11 2024 00:00:00",
       "lastUpdated": "Sat Feb 10 2024 00:00:00",
       "hasSizes": true,
       "variants": [
           "5Z2",
           "0W9"
       ],
       "noOfReviews": 92,
       "rating": 1,
       "tags": [
           "#jillvalentine's.s.t.a.r.s.uniformt-shirt",
           "#residentevil"
       ],
       "inWishlist": false
   }, */
    {
       "id": "AHP1HF791F2U",
       "name": "Leon Kennedy RPD Hoodie",
       "description": "Resident Evil series collectible figure inspired by Leon S. Kennedy RPD Hoodie",
       "price": 131.84,
       "categories": [
           "Collectible",
           "Figure",
           "Resident Evil"
       ],
       "discountRate": 0.28,
       "image_url": tShirt,
       "stockQuantity": 1,
       "sku": "YJTFPG4ICX",
       "isFeatured": false,
       "weight": 4.95,
       "dimensions": "3x1x1",
       "status": "active",
       "created": "Sat Mar 23 2024 00:00:00",
       "lastUpdated": "Wed Apr 10 2024 00:00:00",
       "hasSizes": true,
       "variants": [
           "G1U",
           "QUJ",
           "YAW"
       ],
       "noOfReviews": 99,
       "rating": 1,
       "tags": [
           "#leons.kennedyrpdhoodie",
           "#residentevil"
       ],
       "inWishlist": true
   },
   /*{
       "id": "YH4FZDYZ46OU",
       "name": "Umbrella Corp Logo Cap",
       "description": "Resident Evil series collectible figure inspired by Umbrella Corporation Logo Cap",
       "price": 41.43,
       "categories": [
           "Collectible",
           "Figure",
           "Resident Evil"
       ],
       "discountRate": 0.48,
       "image_url": tShirt,
       "stockQuantity": 20,
       "sku": "OTLPV5KF91",
       "isFeatured": true,
       "weight": 4.08,
       "dimensions": "1x2x1",
       "status": "inactive",
       "created": "Mon Mar 18 2024 00:00:00",
       "lastUpdated": "Wed Apr 17 2024 00:00:00",
       "hasSizes": true,
       "variants": [
           "TES",
           "LG2",
           "YPD"
       ],
       "noOfReviews": 72,
       "rating": 3,
       "tags": [
           "#umbrellacorporationlogocap",
           "#residentevil"
       ],
       "inWishlist": true
   }, */
   /* {
       "id": "3KKXW22QNQPX",
       "name": "Biohazard Warning Mug",
       "description": "Resident Evil series collectible figure inspired by Biohazard Warning Mug",
       "price": 79.58,
       "categories": [
           "Collectible",
           "Figure",
           "Resident Evil"
       ],
       "discountRate": 0.5,
       "image_url": badge,
       "stockQuantity": 19,
       "sku": "6IOX2FTD5F",
       "isFeatured": false,
       "weight": 4.46,
       "dimensions": "4x1x2",
       "status": "inactive",
       "created": "Sun Mar 24 2024 00:00:00",
       "lastUpdated": "Thu Mar 28 2024 00:00:00",
       "hasSizes": false,
       "variants": [
           "I90",
           "6GT",
           "WOE"
       ],
       "noOfReviews": 64,
       "rating": 3,
       "tags": [
           "#biohazardwarningmug",
           "#residentevil"
       ],
       "inWishlist": false
   },
   {
       "id": "H955FQD50R72",
       "name": "RCPD Keychain",
       "description": "Resident Evil series collectible figure inspired by Raccoon City Police Department Keychain",
       "price": 110.44,
       "categories": [
           "Collectible",
           "Figure",
           "Resident Evil"
       ],
       "discountRate": 0.03,
       "image_url": pin,
       "stockQuantity": 4,
       "sku": "5Y4PZ7EMZO",
       "isFeatured": false,
       "weight": 2.87,
       "dimensions": "2x3x2",
       "status": "inactive",
       "created": "Sun Jan 21 2024 00:00:00",
       "lastUpdated": "Tue Feb 13 2024 00:00:00",
       "hasSizes": true,
       "variants": [
           "ACX"
       ],
       "noOfReviews": 45,
       "rating": 4,
       "tags": [
           "#raccooncitypolicedepartmentkeychain",
           "#residentevil"
       ],
       "inWishlist": false
   }, */
   {
       "id": "UY5U1J0FSUFD",
       "name": "Nemesis Enamel Pin",
       "description": "Resident Evil series collectible figure inspired by Nemesis Enamel Pin",
       "price": 145.56,
       "categories": [
           "Collectible",
           "Figure",
           "Resident Evil"
       ],
       "discountRate": 0.08,
       "image_url": pin,
       "stockQuantity": 12,
       "sku": "FELGQM643F",
       "isFeatured": false,
       "weight": 0.57,
       "dimensions": "4x1x4",
       "status": "active",
       "created": "Fri Jan 05 2024 00:00:00",
       "lastUpdated": "Thu Jan 25 2024 00:00:00",
       "hasSizes": true,
       "variants": [
           "QIR",
           "TW8",
           "NW2"
       ],
       "noOfReviews": 11,
       "rating": 5,
       "tags": [
           "#nemesisenamelpin",
           "#residentevil"
       ],
       "inWishlist": true
   }
];
