interface FurnitureItem {
  name: string;
  picture: string;
  width: number;
  height: number;
  category: string;
}export const furnitureData: Record<string, FurnitureItem[]> = {
  dmci: [
    { name: "Sofas", picture: "/Roomplanner/Living Room/1132423705.png", width: 228.6, height: 99.06, category: "Living Room"},
    { name: "Loveseats", picture: "/Roomplanner/Living Room/1243345615.png", width: 167.64, height: 96.52, category: "Living Room" },
    { name: "Reclining Sofas", picture: "/Roomplanner/Living Room/1174906435.png", width: 241.3, height: 101.6, category: "Living Room" },
    { name: "Rocker Recliner", picture: "/Roomplanner/Living Room/1745177693.png", width: 99.06, height: 99.06, category: "Living Room"},
    { name: "Wing Chairs", picture: "/Roomplanner/Living Room/2124960037.png", width: 81.28, height: 88.9, category: "Living Room"},
    
    { name: "Bunk Beds", picture: "/Roomplanner/Bedroom/9486650.png", width: 193.04, height: 142.24, category: "Bedroom"},
    { name: "Nightstands", picture: "/Roomplanner/Bedroom/215817956.png", width: 66.04, height: 45.72, category: "Bedroom" },
    { name: "Panel Beds", picture: "/Roomplanner/Bedroom/771289725.png", width: 160.02, height: 210.82, category: "Bedroom" },
    { name: "Poster Beds", picture: "/Roomplanner/Bedroom/1980902233.png", width: 182.88, height: 218.44, category: "Bedroom", },
    { name: "Sleigh Beds", picture: "/Roomplanner/Bedroom/1337412148.png", width: 170.18, height: 228.6, category: "Bedroom"},
  
    { name: "Dining Arm Chairs", picture: "/Roomplanner/Dining Room/1595380367.png", width: 63.5, height: 60.96, category: "Dining Room" },
    { name: "Dining Side Chairs", picture: "/Roomplanner/Dining Room/396017649.png", width: 50.8, height: 55.8, category: "Dining Room" },
    { name: "Dining Tables", picture: "/Roomplanner/Dining Room/1781466465.png", width: 134.62, height: 147.32, category: "Dining Room" },
    { name: "Pub Tables", picture: "/Roomplanner/Dining Room/2126708219.png", width: 114.3, height: 119.38, category: "Dining Room" },
    { name: "Servers", picture: "/Roomplanner/Dining Room/202785245.png", width: 307.34, height: 50.8, category: "Dining Room"},

    { name: "Closed Bookcases", picture: "/Roomplanner/Home Office/1202722276.png", width: 101.6, height: 40.64, category: "Home Office"},
    { name: "Desk Hutch Sets", picture: "/Roomplanner/Home Office/116396946.png", width: 139.7, height: 63.5, category: "Home Office" },
    { name: "Open Bookcases", picture: "/Roomplanner/Home Office/362099337.png", width: 86.36, height: 35.56, category: "Home Office" },
    { name: "Single Pedestal Desks", picture: "/Roomplanner/Home Office/530986763.png", width: 124.46, height: 55.88, category: "Home Office" },
    { name: "Table Desks", picture: "/Roomplanner/Home Office/847214268.png", width: 127, height: 66.04, category: "Home Office" },

    { name: "Rugs", picture: "/Roomplanner/Miscellaneous/263639812.png", width: 228.6, height: 154.94, category: "Miscellaneous" },
    { name: "Door Opens Left", picture: "/Roomplanner/Structural/2062599889.png", width: 91.44, height: 70, category: "Structural" },
    { name: "Door Opens Right", picture: "/Roomplanner/Structural/366401021.png", width: 91.44, height: 70, category: "Structural" },
    { name: "French Doors", picture: "/Roomplanner/Structural/1861061313.png", width: 203.2, height: 91.44, category: "Structural" },
    { name: "Fireplace", picture: "/Roomplanner/Structural/23175773.png", width: 132.08, height: 22.86, category: "Structural" },

    { name: "Sliding Doors", picture: "/Roomplanner/Structural/652179417.png", width: 203.2, height: 12.7, category: "Structural"},
    { name: "Window", picture: "/Roomplanner/Structural/1210572537.png", width: 139.7, height: 7.62, category: "Structural" },
    { name: "Toilets", picture: "/Roomplanner/Bathroom/596380351.png", width: 30.5, height: 73.5, category: "Bathroom" },
    { name: "Pedestal Sinks", picture: "/Roomplanner/Bathroom/178413739.png", width: 55.8, height: 87, category: "Bathroom" },
    { name: "Bathtubs", picture: "/Roomplanner/Bathroom/1375049375.png", width: 170, height: 75, category: "Bathroom" },

    { name: "Ovens", picture: "/Roomplanner/Kitchen/768782455.png", width: 91.4, height: 95.3, category: "Kitchen" },
    { name: "Sinks", picture: "/Roomplanner/Kitchen/674100858.png", width: 106.3, height: 50.8, category: "Kitchen"},
    { name: "Refrigerators", picture: "/Roomplanner/Kitchen/540764304.png", width: 60.96, height: 152.4, category: "Kitchen" },
    { name: "Partitions", picture: "/Roomplanner/Structural/141703244.png", width: 100, height: 7.62, category: "Structural" },
    { name: "Queen Beds", picture: "/Roomplanner/Bedroom/254019203.jpg", width: 152, height: 190, category: "Bedroom"  },
    { name: "King Beds", picture: "/Roomplanner/Bedroom/633048086.jpg", width: 182, height: 198, category: "Bedroom" },
    { name: "Double Beds", picture: "/Roomplanner/Bedroom/122449278.jpg", width: 120, height: 190, category: "Bedroom" },
    { name: "Single Beds", picture: "/Roomplanner/Bedroom/840872244.jpg", width: 91, height: 190, category: "Bedroom" },
    { name: "Twin Beds", picture: "/Roomplanner/Bedroom/428510373.jpg", width: 96.52, height: 190, category: "Bedroom" }

],
  alveo: [
    { name: "Modern Chair", picture: "modern-chair.png", width: 100, height: 100, category: "Office"}
  ],

};
