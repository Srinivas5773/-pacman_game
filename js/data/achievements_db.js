(function(root) { const AchievementsDB = { badges: [
  {
    id: "ACH-0001",
    title: "Achievement #1",
    reward: 150,
    description: "Consume 5 pellets without taking damage.",
    criteria: {
      target: 10,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0002",
    title: "Achievement #2",
    reward: 200,
    description: "Consume 10 pellets without taking damage.",
    criteria: {
      target: 20,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0003",
    title: "Achievement #3",
    reward: 250,
    description: "Consume 15 pellets without taking damage.",
    criteria: {
      target: 30,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0004",
    title: "Achievement #4",
    reward: 300,
    description: "Consume 20 pellets without taking damage.",
    criteria: {
      target: 40,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0005",
    title: "Achievement #5",
    reward: 350,
    description: "Consume 25 pellets without taking damage.",
    criteria: {
      target: 50,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0006",
    title: "Achievement #6",
    reward: 400,
    description: "Consume 30 pellets without taking damage.",
    criteria: {
      target: 60,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0007",
    title: "Achievement #7",
    reward: 450,
    description: "Consume 35 pellets without taking damage.",
    criteria: {
      target: 70,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0008",
    title: "Achievement #8",
    reward: 500,
    description: "Consume 40 pellets without taking damage.",
    criteria: {
      target: 80,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0009",
    title: "Achievement #9",
    reward: 550,
    description: "Consume 45 pellets without taking damage.",
    criteria: {
      target: 90,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0010",
    title: "Achievement #10",
    reward: 100,
    description: "Consume 50 pellets without taking damage.",
    criteria: {
      target: 100,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0011",
    title: "Achievement #11",
    reward: 150,
    description: "Consume 55 pellets without taking damage.",
    criteria: {
      target: 110,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0012",
    title: "Achievement #12",
    reward: 200,
    description: "Consume 60 pellets without taking damage.",
    criteria: {
      target: 120,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0013",
    title: "Achievement #13",
    reward: 250,
    description: "Consume 65 pellets without taking damage.",
    criteria: {
      target: 130,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0014",
    title: "Achievement #14",
    reward: 300,
    description: "Consume 70 pellets without taking damage.",
    criteria: {
      target: 140,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0015",
    title: "Achievement #15",
    reward: 350,
    description: "Consume 75 pellets without taking damage.",
    criteria: {
      target: 150,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0016",
    title: "Achievement #16",
    reward: 400,
    description: "Consume 80 pellets without taking damage.",
    criteria: {
      target: 160,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0017",
    title: "Achievement #17",
    reward: 450,
    description: "Consume 85 pellets without taking damage.",
    criteria: {
      target: 170,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0018",
    title: "Achievement #18",
    reward: 500,
    description: "Consume 90 pellets without taking damage.",
    criteria: {
      target: 180,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0019",
    title: "Achievement #19",
    reward: 550,
    description: "Consume 95 pellets without taking damage.",
    criteria: {
      target: 190,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0020",
    title: "Achievement #20",
    reward: 100,
    description: "Consume 100 pellets without taking damage.",
    criteria: {
      target: 200,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0021",
    title: "Achievement #21",
    reward: 150,
    description: "Consume 105 pellets without taking damage.",
    criteria: {
      target: 210,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0022",
    title: "Achievement #22",
    reward: 200,
    description: "Consume 110 pellets without taking damage.",
    criteria: {
      target: 220,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0023",
    title: "Achievement #23",
    reward: 250,
    description: "Consume 115 pellets without taking damage.",
    criteria: {
      target: 230,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0024",
    title: "Achievement #24",
    reward: 300,
    description: "Consume 120 pellets without taking damage.",
    criteria: {
      target: 240,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0025",
    title: "Achievement #25",
    reward: 350,
    description: "Consume 125 pellets without taking damage.",
    criteria: {
      target: 250,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0026",
    title: "Achievement #26",
    reward: 400,
    description: "Consume 130 pellets without taking damage.",
    criteria: {
      target: 260,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0027",
    title: "Achievement #27",
    reward: 450,
    description: "Consume 135 pellets without taking damage.",
    criteria: {
      target: 270,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0028",
    title: "Achievement #28",
    reward: 500,
    description: "Consume 140 pellets without taking damage.",
    criteria: {
      target: 280,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0029",
    title: "Achievement #29",
    reward: 550,
    description: "Consume 145 pellets without taking damage.",
    criteria: {
      target: 290,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0030",
    title: "Achievement #30",
    reward: 100,
    description: "Consume 150 pellets without taking damage.",
    criteria: {
      target: 300,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0031",
    title: "Achievement #31",
    reward: 150,
    description: "Consume 155 pellets without taking damage.",
    criteria: {
      target: 310,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0032",
    title: "Achievement #32",
    reward: 200,
    description: "Consume 160 pellets without taking damage.",
    criteria: {
      target: 320,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0033",
    title: "Achievement #33",
    reward: 250,
    description: "Consume 165 pellets without taking damage.",
    criteria: {
      target: 330,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0034",
    title: "Achievement #34",
    reward: 300,
    description: "Consume 170 pellets without taking damage.",
    criteria: {
      target: 340,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0035",
    title: "Achievement #35",
    reward: 350,
    description: "Consume 175 pellets without taking damage.",
    criteria: {
      target: 350,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0036",
    title: "Achievement #36",
    reward: 400,
    description: "Consume 180 pellets without taking damage.",
    criteria: {
      target: 360,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0037",
    title: "Achievement #37",
    reward: 450,
    description: "Consume 185 pellets without taking damage.",
    criteria: {
      target: 370,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0038",
    title: "Achievement #38",
    reward: 500,
    description: "Consume 190 pellets without taking damage.",
    criteria: {
      target: 380,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0039",
    title: "Achievement #39",
    reward: 550,
    description: "Consume 195 pellets without taking damage.",
    criteria: {
      target: 390,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0040",
    title: "Achievement #40",
    reward: 100,
    description: "Consume 200 pellets without taking damage.",
    criteria: {
      target: 400,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0041",
    title: "Achievement #41",
    reward: 150,
    description: "Consume 205 pellets without taking damage.",
    criteria: {
      target: 410,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0042",
    title: "Achievement #42",
    reward: 200,
    description: "Consume 210 pellets without taking damage.",
    criteria: {
      target: 420,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0043",
    title: "Achievement #43",
    reward: 250,
    description: "Consume 215 pellets without taking damage.",
    criteria: {
      target: 430,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0044",
    title: "Achievement #44",
    reward: 300,
    description: "Consume 220 pellets without taking damage.",
    criteria: {
      target: 440,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0045",
    title: "Achievement #45",
    reward: 350,
    description: "Consume 225 pellets without taking damage.",
    criteria: {
      target: 450,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0046",
    title: "Achievement #46",
    reward: 400,
    description: "Consume 230 pellets without taking damage.",
    criteria: {
      target: 460,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0047",
    title: "Achievement #47",
    reward: 450,
    description: "Consume 235 pellets without taking damage.",
    criteria: {
      target: 470,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0048",
    title: "Achievement #48",
    reward: 500,
    description: "Consume 240 pellets without taking damage.",
    criteria: {
      target: 480,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0049",
    title: "Achievement #49",
    reward: 550,
    description: "Consume 245 pellets without taking damage.",
    criteria: {
      target: 490,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0050",
    title: "Achievement #50",
    reward: 100,
    description: "Consume 250 pellets without taking damage.",
    criteria: {
      target: 500,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0051",
    title: "Achievement #51",
    reward: 150,
    description: "Consume 255 pellets without taking damage.",
    criteria: {
      target: 510,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0052",
    title: "Achievement #52",
    reward: 200,
    description: "Consume 260 pellets without taking damage.",
    criteria: {
      target: 520,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0053",
    title: "Achievement #53",
    reward: 250,
    description: "Consume 265 pellets without taking damage.",
    criteria: {
      target: 530,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0054",
    title: "Achievement #54",
    reward: 300,
    description: "Consume 270 pellets without taking damage.",
    criteria: {
      target: 540,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0055",
    title: "Achievement #55",
    reward: 350,
    description: "Consume 275 pellets without taking damage.",
    criteria: {
      target: 550,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0056",
    title: "Achievement #56",
    reward: 400,
    description: "Consume 280 pellets without taking damage.",
    criteria: {
      target: 560,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0057",
    title: "Achievement #57",
    reward: 450,
    description: "Consume 285 pellets without taking damage.",
    criteria: {
      target: 570,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0058",
    title: "Achievement #58",
    reward: 500,
    description: "Consume 290 pellets without taking damage.",
    criteria: {
      target: 580,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0059",
    title: "Achievement #59",
    reward: 550,
    description: "Consume 295 pellets without taking damage.",
    criteria: {
      target: 590,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0060",
    title: "Achievement #60",
    reward: 100,
    description: "Consume 300 pellets without taking damage.",
    criteria: {
      target: 600,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0061",
    title: "Achievement #61",
    reward: 150,
    description: "Consume 305 pellets without taking damage.",
    criteria: {
      target: 610,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0062",
    title: "Achievement #62",
    reward: 200,
    description: "Consume 310 pellets without taking damage.",
    criteria: {
      target: 620,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0063",
    title: "Achievement #63",
    reward: 250,
    description: "Consume 315 pellets without taking damage.",
    criteria: {
      target: 630,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0064",
    title: "Achievement #64",
    reward: 300,
    description: "Consume 320 pellets without taking damage.",
    criteria: {
      target: 640,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0065",
    title: "Achievement #65",
    reward: 350,
    description: "Consume 325 pellets without taking damage.",
    criteria: {
      target: 650,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0066",
    title: "Achievement #66",
    reward: 400,
    description: "Consume 330 pellets without taking damage.",
    criteria: {
      target: 660,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0067",
    title: "Achievement #67",
    reward: 450,
    description: "Consume 335 pellets without taking damage.",
    criteria: {
      target: 670,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0068",
    title: "Achievement #68",
    reward: 500,
    description: "Consume 340 pellets without taking damage.",
    criteria: {
      target: 680,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0069",
    title: "Achievement #69",
    reward: 550,
    description: "Consume 345 pellets without taking damage.",
    criteria: {
      target: 690,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0070",
    title: "Achievement #70",
    reward: 100,
    description: "Consume 350 pellets without taking damage.",
    criteria: {
      target: 700,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0071",
    title: "Achievement #71",
    reward: 150,
    description: "Consume 355 pellets without taking damage.",
    criteria: {
      target: 710,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0072",
    title: "Achievement #72",
    reward: 200,
    description: "Consume 360 pellets without taking damage.",
    criteria: {
      target: 720,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0073",
    title: "Achievement #73",
    reward: 250,
    description: "Consume 365 pellets without taking damage.",
    criteria: {
      target: 730,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0074",
    title: "Achievement #74",
    reward: 300,
    description: "Consume 370 pellets without taking damage.",
    criteria: {
      target: 740,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0075",
    title: "Achievement #75",
    reward: 350,
    description: "Consume 375 pellets without taking damage.",
    criteria: {
      target: 750,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0076",
    title: "Achievement #76",
    reward: 400,
    description: "Consume 380 pellets without taking damage.",
    criteria: {
      target: 760,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0077",
    title: "Achievement #77",
    reward: 450,
    description: "Consume 385 pellets without taking damage.",
    criteria: {
      target: 770,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0078",
    title: "Achievement #78",
    reward: 500,
    description: "Consume 390 pellets without taking damage.",
    criteria: {
      target: 780,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0079",
    title: "Achievement #79",
    reward: 550,
    description: "Consume 395 pellets without taking damage.",
    criteria: {
      target: 790,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0080",
    title: "Achievement #80",
    reward: 100,
    description: "Consume 400 pellets without taking damage.",
    criteria: {
      target: 800,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0081",
    title: "Achievement #81",
    reward: 150,
    description: "Consume 405 pellets without taking damage.",
    criteria: {
      target: 810,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0082",
    title: "Achievement #82",
    reward: 200,
    description: "Consume 410 pellets without taking damage.",
    criteria: {
      target: 820,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0083",
    title: "Achievement #83",
    reward: 250,
    description: "Consume 415 pellets without taking damage.",
    criteria: {
      target: 830,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0084",
    title: "Achievement #84",
    reward: 300,
    description: "Consume 420 pellets without taking damage.",
    criteria: {
      target: 840,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0085",
    title: "Achievement #85",
    reward: 350,
    description: "Consume 425 pellets without taking damage.",
    criteria: {
      target: 850,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0086",
    title: "Achievement #86",
    reward: 400,
    description: "Consume 430 pellets without taking damage.",
    criteria: {
      target: 860,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0087",
    title: "Achievement #87",
    reward: 450,
    description: "Consume 435 pellets without taking damage.",
    criteria: {
      target: 870,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0088",
    title: "Achievement #88",
    reward: 500,
    description: "Consume 440 pellets without taking damage.",
    criteria: {
      target: 880,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0089",
    title: "Achievement #89",
    reward: 550,
    description: "Consume 445 pellets without taking damage.",
    criteria: {
      target: 890,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0090",
    title: "Achievement #90",
    reward: 100,
    description: "Consume 450 pellets without taking damage.",
    criteria: {
      target: 900,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0091",
    title: "Achievement #91",
    reward: 150,
    description: "Consume 455 pellets without taking damage.",
    criteria: {
      target: 910,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0092",
    title: "Achievement #92",
    reward: 200,
    description: "Consume 460 pellets without taking damage.",
    criteria: {
      target: 920,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0093",
    title: "Achievement #93",
    reward: 250,
    description: "Consume 465 pellets without taking damage.",
    criteria: {
      target: 930,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0094",
    title: "Achievement #94",
    reward: 300,
    description: "Consume 470 pellets without taking damage.",
    criteria: {
      target: 940,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0095",
    title: "Achievement #95",
    reward: 350,
    description: "Consume 475 pellets without taking damage.",
    criteria: {
      target: 950,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0096",
    title: "Achievement #96",
    reward: 400,
    description: "Consume 480 pellets without taking damage.",
    criteria: {
      target: 960,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0097",
    title: "Achievement #97",
    reward: 450,
    description: "Consume 485 pellets without taking damage.",
    criteria: {
      target: 970,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0098",
    title: "Achievement #98",
    reward: 500,
    description: "Consume 490 pellets without taking damage.",
    criteria: {
      target: 980,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0099",
    title: "Achievement #99",
    reward: 550,
    description: "Consume 495 pellets without taking damage.",
    criteria: {
      target: 990,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0100",
    title: "Achievement #100",
    reward: 100,
    description: "Consume 500 pellets without taking damage.",
    criteria: {
      target: 1000,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0101",
    title: "Achievement #101",
    reward: 150,
    description: "Consume 505 pellets without taking damage.",
    criteria: {
      target: 1010,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0102",
    title: "Achievement #102",
    reward: 200,
    description: "Consume 510 pellets without taking damage.",
    criteria: {
      target: 1020,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0103",
    title: "Achievement #103",
    reward: 250,
    description: "Consume 515 pellets without taking damage.",
    criteria: {
      target: 1030,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0104",
    title: "Achievement #104",
    reward: 300,
    description: "Consume 520 pellets without taking damage.",
    criteria: {
      target: 1040,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0105",
    title: "Achievement #105",
    reward: 350,
    description: "Consume 525 pellets without taking damage.",
    criteria: {
      target: 1050,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0106",
    title: "Achievement #106",
    reward: 400,
    description: "Consume 530 pellets without taking damage.",
    criteria: {
      target: 1060,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0107",
    title: "Achievement #107",
    reward: 450,
    description: "Consume 535 pellets without taking damage.",
    criteria: {
      target: 1070,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0108",
    title: "Achievement #108",
    reward: 500,
    description: "Consume 540 pellets without taking damage.",
    criteria: {
      target: 1080,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0109",
    title: "Achievement #109",
    reward: 550,
    description: "Consume 545 pellets without taking damage.",
    criteria: {
      target: 1090,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0110",
    title: "Achievement #110",
    reward: 100,
    description: "Consume 550 pellets without taking damage.",
    criteria: {
      target: 1100,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0111",
    title: "Achievement #111",
    reward: 150,
    description: "Consume 555 pellets without taking damage.",
    criteria: {
      target: 1110,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0112",
    title: "Achievement #112",
    reward: 200,
    description: "Consume 560 pellets without taking damage.",
    criteria: {
      target: 1120,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0113",
    title: "Achievement #113",
    reward: 250,
    description: "Consume 565 pellets without taking damage.",
    criteria: {
      target: 1130,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0114",
    title: "Achievement #114",
    reward: 300,
    description: "Consume 570 pellets without taking damage.",
    criteria: {
      target: 1140,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0115",
    title: "Achievement #115",
    reward: 350,
    description: "Consume 575 pellets without taking damage.",
    criteria: {
      target: 1150,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0116",
    title: "Achievement #116",
    reward: 400,
    description: "Consume 580 pellets without taking damage.",
    criteria: {
      target: 1160,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0117",
    title: "Achievement #117",
    reward: 450,
    description: "Consume 585 pellets without taking damage.",
    criteria: {
      target: 1170,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0118",
    title: "Achievement #118",
    reward: 500,
    description: "Consume 590 pellets without taking damage.",
    criteria: {
      target: 1180,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0119",
    title: "Achievement #119",
    reward: 550,
    description: "Consume 595 pellets without taking damage.",
    criteria: {
      target: 1190,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0120",
    title: "Achievement #120",
    reward: 100,
    description: "Consume 600 pellets without taking damage.",
    criteria: {
      target: 1200,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0121",
    title: "Achievement #121",
    reward: 150,
    description: "Consume 605 pellets without taking damage.",
    criteria: {
      target: 1210,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0122",
    title: "Achievement #122",
    reward: 200,
    description: "Consume 610 pellets without taking damage.",
    criteria: {
      target: 1220,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0123",
    title: "Achievement #123",
    reward: 250,
    description: "Consume 615 pellets without taking damage.",
    criteria: {
      target: 1230,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0124",
    title: "Achievement #124",
    reward: 300,
    description: "Consume 620 pellets without taking damage.",
    criteria: {
      target: 1240,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0125",
    title: "Achievement #125",
    reward: 350,
    description: "Consume 625 pellets without taking damage.",
    criteria: {
      target: 1250,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0126",
    title: "Achievement #126",
    reward: 400,
    description: "Consume 630 pellets without taking damage.",
    criteria: {
      target: 1260,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0127",
    title: "Achievement #127",
    reward: 450,
    description: "Consume 635 pellets without taking damage.",
    criteria: {
      target: 1270,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0128",
    title: "Achievement #128",
    reward: 500,
    description: "Consume 640 pellets without taking damage.",
    criteria: {
      target: 1280,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0129",
    title: "Achievement #129",
    reward: 550,
    description: "Consume 645 pellets without taking damage.",
    criteria: {
      target: 1290,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0130",
    title: "Achievement #130",
    reward: 100,
    description: "Consume 650 pellets without taking damage.",
    criteria: {
      target: 1300,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0131",
    title: "Achievement #131",
    reward: 150,
    description: "Consume 655 pellets without taking damage.",
    criteria: {
      target: 1310,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0132",
    title: "Achievement #132",
    reward: 200,
    description: "Consume 660 pellets without taking damage.",
    criteria: {
      target: 1320,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0133",
    title: "Achievement #133",
    reward: 250,
    description: "Consume 665 pellets without taking damage.",
    criteria: {
      target: 1330,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0134",
    title: "Achievement #134",
    reward: 300,
    description: "Consume 670 pellets without taking damage.",
    criteria: {
      target: 1340,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0135",
    title: "Achievement #135",
    reward: 350,
    description: "Consume 675 pellets without taking damage.",
    criteria: {
      target: 1350,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0136",
    title: "Achievement #136",
    reward: 400,
    description: "Consume 680 pellets without taking damage.",
    criteria: {
      target: 1360,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0137",
    title: "Achievement #137",
    reward: 450,
    description: "Consume 685 pellets without taking damage.",
    criteria: {
      target: 1370,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0138",
    title: "Achievement #138",
    reward: 500,
    description: "Consume 690 pellets without taking damage.",
    criteria: {
      target: 1380,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0139",
    title: "Achievement #139",
    reward: 550,
    description: "Consume 695 pellets without taking damage.",
    criteria: {
      target: 1390,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0140",
    title: "Achievement #140",
    reward: 100,
    description: "Consume 700 pellets without taking damage.",
    criteria: {
      target: 1400,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0141",
    title: "Achievement #141",
    reward: 150,
    description: "Consume 705 pellets without taking damage.",
    criteria: {
      target: 1410,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0142",
    title: "Achievement #142",
    reward: 200,
    description: "Consume 710 pellets without taking damage.",
    criteria: {
      target: 1420,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0143",
    title: "Achievement #143",
    reward: 250,
    description: "Consume 715 pellets without taking damage.",
    criteria: {
      target: 1430,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0144",
    title: "Achievement #144",
    reward: 300,
    description: "Consume 720 pellets without taking damage.",
    criteria: {
      target: 1440,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0145",
    title: "Achievement #145",
    reward: 350,
    description: "Consume 725 pellets without taking damage.",
    criteria: {
      target: 1450,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0146",
    title: "Achievement #146",
    reward: 400,
    description: "Consume 730 pellets without taking damage.",
    criteria: {
      target: 1460,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0147",
    title: "Achievement #147",
    reward: 450,
    description: "Consume 735 pellets without taking damage.",
    criteria: {
      target: 1470,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0148",
    title: "Achievement #148",
    reward: 500,
    description: "Consume 740 pellets without taking damage.",
    criteria: {
      target: 1480,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0149",
    title: "Achievement #149",
    reward: 550,
    description: "Consume 745 pellets without taking damage.",
    criteria: {
      target: 1490,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0150",
    title: "Achievement #150",
    reward: 100,
    description: "Consume 750 pellets without taking damage.",
    criteria: {
      target: 1500,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0151",
    title: "Achievement #151",
    reward: 150,
    description: "Consume 755 pellets without taking damage.",
    criteria: {
      target: 1510,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0152",
    title: "Achievement #152",
    reward: 200,
    description: "Consume 760 pellets without taking damage.",
    criteria: {
      target: 1520,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0153",
    title: "Achievement #153",
    reward: 250,
    description: "Consume 765 pellets without taking damage.",
    criteria: {
      target: 1530,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0154",
    title: "Achievement #154",
    reward: 300,
    description: "Consume 770 pellets without taking damage.",
    criteria: {
      target: 1540,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0155",
    title: "Achievement #155",
    reward: 350,
    description: "Consume 775 pellets without taking damage.",
    criteria: {
      target: 1550,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0156",
    title: "Achievement #156",
    reward: 400,
    description: "Consume 780 pellets without taking damage.",
    criteria: {
      target: 1560,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0157",
    title: "Achievement #157",
    reward: 450,
    description: "Consume 785 pellets without taking damage.",
    criteria: {
      target: 1570,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0158",
    title: "Achievement #158",
    reward: 500,
    description: "Consume 790 pellets without taking damage.",
    criteria: {
      target: 1580,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0159",
    title: "Achievement #159",
    reward: 550,
    description: "Consume 795 pellets without taking damage.",
    criteria: {
      target: 1590,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0160",
    title: "Achievement #160",
    reward: 100,
    description: "Consume 800 pellets without taking damage.",
    criteria: {
      target: 1600,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0161",
    title: "Achievement #161",
    reward: 150,
    description: "Consume 805 pellets without taking damage.",
    criteria: {
      target: 1610,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0162",
    title: "Achievement #162",
    reward: 200,
    description: "Consume 810 pellets without taking damage.",
    criteria: {
      target: 1620,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0163",
    title: "Achievement #163",
    reward: 250,
    description: "Consume 815 pellets without taking damage.",
    criteria: {
      target: 1630,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0164",
    title: "Achievement #164",
    reward: 300,
    description: "Consume 820 pellets without taking damage.",
    criteria: {
      target: 1640,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0165",
    title: "Achievement #165",
    reward: 350,
    description: "Consume 825 pellets without taking damage.",
    criteria: {
      target: 1650,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0166",
    title: "Achievement #166",
    reward: 400,
    description: "Consume 830 pellets without taking damage.",
    criteria: {
      target: 1660,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0167",
    title: "Achievement #167",
    reward: 450,
    description: "Consume 835 pellets without taking damage.",
    criteria: {
      target: 1670,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0168",
    title: "Achievement #168",
    reward: 500,
    description: "Consume 840 pellets without taking damage.",
    criteria: {
      target: 1680,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0169",
    title: "Achievement #169",
    reward: 550,
    description: "Consume 845 pellets without taking damage.",
    criteria: {
      target: 1690,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0170",
    title: "Achievement #170",
    reward: 100,
    description: "Consume 850 pellets without taking damage.",
    criteria: {
      target: 1700,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0171",
    title: "Achievement #171",
    reward: 150,
    description: "Consume 855 pellets without taking damage.",
    criteria: {
      target: 1710,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0172",
    title: "Achievement #172",
    reward: 200,
    description: "Consume 860 pellets without taking damage.",
    criteria: {
      target: 1720,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0173",
    title: "Achievement #173",
    reward: 250,
    description: "Consume 865 pellets without taking damage.",
    criteria: {
      target: 1730,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0174",
    title: "Achievement #174",
    reward: 300,
    description: "Consume 870 pellets without taking damage.",
    criteria: {
      target: 1740,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0175",
    title: "Achievement #175",
    reward: 350,
    description: "Consume 875 pellets without taking damage.",
    criteria: {
      target: 1750,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0176",
    title: "Achievement #176",
    reward: 400,
    description: "Consume 880 pellets without taking damage.",
    criteria: {
      target: 1760,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0177",
    title: "Achievement #177",
    reward: 450,
    description: "Consume 885 pellets without taking damage.",
    criteria: {
      target: 1770,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0178",
    title: "Achievement #178",
    reward: 500,
    description: "Consume 890 pellets without taking damage.",
    criteria: {
      target: 1780,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0179",
    title: "Achievement #179",
    reward: 550,
    description: "Consume 895 pellets without taking damage.",
    criteria: {
      target: 1790,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0180",
    title: "Achievement #180",
    reward: 100,
    description: "Consume 900 pellets without taking damage.",
    criteria: {
      target: 1800,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0181",
    title: "Achievement #181",
    reward: 150,
    description: "Consume 905 pellets without taking damage.",
    criteria: {
      target: 1810,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0182",
    title: "Achievement #182",
    reward: 200,
    description: "Consume 910 pellets without taking damage.",
    criteria: {
      target: 1820,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0183",
    title: "Achievement #183",
    reward: 250,
    description: "Consume 915 pellets without taking damage.",
    criteria: {
      target: 1830,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0184",
    title: "Achievement #184",
    reward: 300,
    description: "Consume 920 pellets without taking damage.",
    criteria: {
      target: 1840,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0185",
    title: "Achievement #185",
    reward: 350,
    description: "Consume 925 pellets without taking damage.",
    criteria: {
      target: 1850,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0186",
    title: "Achievement #186",
    reward: 400,
    description: "Consume 930 pellets without taking damage.",
    criteria: {
      target: 1860,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0187",
    title: "Achievement #187",
    reward: 450,
    description: "Consume 935 pellets without taking damage.",
    criteria: {
      target: 1870,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0188",
    title: "Achievement #188",
    reward: 500,
    description: "Consume 940 pellets without taking damage.",
    criteria: {
      target: 1880,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0189",
    title: "Achievement #189",
    reward: 550,
    description: "Consume 945 pellets without taking damage.",
    criteria: {
      target: 1890,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0190",
    title: "Achievement #190",
    reward: 100,
    description: "Consume 950 pellets without taking damage.",
    criteria: {
      target: 1900,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0191",
    title: "Achievement #191",
    reward: 150,
    description: "Consume 955 pellets without taking damage.",
    criteria: {
      target: 1910,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0192",
    title: "Achievement #192",
    reward: 200,
    description: "Consume 960 pellets without taking damage.",
    criteria: {
      target: 1920,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0193",
    title: "Achievement #193",
    reward: 250,
    description: "Consume 965 pellets without taking damage.",
    criteria: {
      target: 1930,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0194",
    title: "Achievement #194",
    reward: 300,
    description: "Consume 970 pellets without taking damage.",
    criteria: {
      target: 1940,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0195",
    title: "Achievement #195",
    reward: 350,
    description: "Consume 975 pellets without taking damage.",
    criteria: {
      target: 1950,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0196",
    title: "Achievement #196",
    reward: 400,
    description: "Consume 980 pellets without taking damage.",
    criteria: {
      target: 1960,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0197",
    title: "Achievement #197",
    reward: 450,
    description: "Consume 985 pellets without taking damage.",
    criteria: {
      target: 1970,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0198",
    title: "Achievement #198",
    reward: 500,
    description: "Consume 990 pellets without taking damage.",
    criteria: {
      target: 1980,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0199",
    title: "Achievement #199",
    reward: 550,
    description: "Consume 995 pellets without taking damage.",
    criteria: {
      target: 1990,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0200",
    title: "Achievement #200",
    reward: 100,
    description: "Consume 1000 pellets without taking damage.",
    criteria: {
      target: 2000,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0201",
    title: "Achievement #201",
    reward: 150,
    description: "Consume 1005 pellets without taking damage.",
    criteria: {
      target: 2010,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0202",
    title: "Achievement #202",
    reward: 200,
    description: "Consume 1010 pellets without taking damage.",
    criteria: {
      target: 2020,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0203",
    title: "Achievement #203",
    reward: 250,
    description: "Consume 1015 pellets without taking damage.",
    criteria: {
      target: 2030,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0204",
    title: "Achievement #204",
    reward: 300,
    description: "Consume 1020 pellets without taking damage.",
    criteria: {
      target: 2040,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0205",
    title: "Achievement #205",
    reward: 350,
    description: "Consume 1025 pellets without taking damage.",
    criteria: {
      target: 2050,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0206",
    title: "Achievement #206",
    reward: 400,
    description: "Consume 1030 pellets without taking damage.",
    criteria: {
      target: 2060,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0207",
    title: "Achievement #207",
    reward: 450,
    description: "Consume 1035 pellets without taking damage.",
    criteria: {
      target: 2070,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0208",
    title: "Achievement #208",
    reward: 500,
    description: "Consume 1040 pellets without taking damage.",
    criteria: {
      target: 2080,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0209",
    title: "Achievement #209",
    reward: 550,
    description: "Consume 1045 pellets without taking damage.",
    criteria: {
      target: 2090,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0210",
    title: "Achievement #210",
    reward: 100,
    description: "Consume 1050 pellets without taking damage.",
    criteria: {
      target: 2100,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0211",
    title: "Achievement #211",
    reward: 150,
    description: "Consume 1055 pellets without taking damage.",
    criteria: {
      target: 2110,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0212",
    title: "Achievement #212",
    reward: 200,
    description: "Consume 1060 pellets without taking damage.",
    criteria: {
      target: 2120,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0213",
    title: "Achievement #213",
    reward: 250,
    description: "Consume 1065 pellets without taking damage.",
    criteria: {
      target: 2130,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0214",
    title: "Achievement #214",
    reward: 300,
    description: "Consume 1070 pellets without taking damage.",
    criteria: {
      target: 2140,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0215",
    title: "Achievement #215",
    reward: 350,
    description: "Consume 1075 pellets without taking damage.",
    criteria: {
      target: 2150,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0216",
    title: "Achievement #216",
    reward: 400,
    description: "Consume 1080 pellets without taking damage.",
    criteria: {
      target: 2160,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0217",
    title: "Achievement #217",
    reward: 450,
    description: "Consume 1085 pellets without taking damage.",
    criteria: {
      target: 2170,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0218",
    title: "Achievement #218",
    reward: 500,
    description: "Consume 1090 pellets without taking damage.",
    criteria: {
      target: 2180,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0219",
    title: "Achievement #219",
    reward: 550,
    description: "Consume 1095 pellets without taking damage.",
    criteria: {
      target: 2190,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0220",
    title: "Achievement #220",
    reward: 100,
    description: "Consume 1100 pellets without taking damage.",
    criteria: {
      target: 2200,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0221",
    title: "Achievement #221",
    reward: 150,
    description: "Consume 1105 pellets without taking damage.",
    criteria: {
      target: 2210,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0222",
    title: "Achievement #222",
    reward: 200,
    description: "Consume 1110 pellets without taking damage.",
    criteria: {
      target: 2220,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0223",
    title: "Achievement #223",
    reward: 250,
    description: "Consume 1115 pellets without taking damage.",
    criteria: {
      target: 2230,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0224",
    title: "Achievement #224",
    reward: 300,
    description: "Consume 1120 pellets without taking damage.",
    criteria: {
      target: 2240,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0225",
    title: "Achievement #225",
    reward: 350,
    description: "Consume 1125 pellets without taking damage.",
    criteria: {
      target: 2250,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0226",
    title: "Achievement #226",
    reward: 400,
    description: "Consume 1130 pellets without taking damage.",
    criteria: {
      target: 2260,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0227",
    title: "Achievement #227",
    reward: 450,
    description: "Consume 1135 pellets without taking damage.",
    criteria: {
      target: 2270,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0228",
    title: "Achievement #228",
    reward: 500,
    description: "Consume 1140 pellets without taking damage.",
    criteria: {
      target: 2280,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0229",
    title: "Achievement #229",
    reward: 550,
    description: "Consume 1145 pellets without taking damage.",
    criteria: {
      target: 2290,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0230",
    title: "Achievement #230",
    reward: 100,
    description: "Consume 1150 pellets without taking damage.",
    criteria: {
      target: 2300,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0231",
    title: "Achievement #231",
    reward: 150,
    description: "Consume 1155 pellets without taking damage.",
    criteria: {
      target: 2310,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0232",
    title: "Achievement #232",
    reward: 200,
    description: "Consume 1160 pellets without taking damage.",
    criteria: {
      target: 2320,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0233",
    title: "Achievement #233",
    reward: 250,
    description: "Consume 1165 pellets without taking damage.",
    criteria: {
      target: 2330,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0234",
    title: "Achievement #234",
    reward: 300,
    description: "Consume 1170 pellets without taking damage.",
    criteria: {
      target: 2340,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0235",
    title: "Achievement #235",
    reward: 350,
    description: "Consume 1175 pellets without taking damage.",
    criteria: {
      target: 2350,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0236",
    title: "Achievement #236",
    reward: 400,
    description: "Consume 1180 pellets without taking damage.",
    criteria: {
      target: 2360,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0237",
    title: "Achievement #237",
    reward: 450,
    description: "Consume 1185 pellets without taking damage.",
    criteria: {
      target: 2370,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0238",
    title: "Achievement #238",
    reward: 500,
    description: "Consume 1190 pellets without taking damage.",
    criteria: {
      target: 2380,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0239",
    title: "Achievement #239",
    reward: 550,
    description: "Consume 1195 pellets without taking damage.",
    criteria: {
      target: 2390,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0240",
    title: "Achievement #240",
    reward: 100,
    description: "Consume 1200 pellets without taking damage.",
    criteria: {
      target: 2400,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0241",
    title: "Achievement #241",
    reward: 150,
    description: "Consume 1205 pellets without taking damage.",
    criteria: {
      target: 2410,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0242",
    title: "Achievement #242",
    reward: 200,
    description: "Consume 1210 pellets without taking damage.",
    criteria: {
      target: 2420,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0243",
    title: "Achievement #243",
    reward: 250,
    description: "Consume 1215 pellets without taking damage.",
    criteria: {
      target: 2430,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0244",
    title: "Achievement #244",
    reward: 300,
    description: "Consume 1220 pellets without taking damage.",
    criteria: {
      target: 2440,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0245",
    title: "Achievement #245",
    reward: 350,
    description: "Consume 1225 pellets without taking damage.",
    criteria: {
      target: 2450,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0246",
    title: "Achievement #246",
    reward: 400,
    description: "Consume 1230 pellets without taking damage.",
    criteria: {
      target: 2460,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0247",
    title: "Achievement #247",
    reward: 450,
    description: "Consume 1235 pellets without taking damage.",
    criteria: {
      target: 2470,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0248",
    title: "Achievement #248",
    reward: 500,
    description: "Consume 1240 pellets without taking damage.",
    criteria: {
      target: 2480,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0249",
    title: "Achievement #249",
    reward: 550,
    description: "Consume 1245 pellets without taking damage.",
    criteria: {
      target: 2490,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0250",
    title: "Achievement #250",
    reward: 100,
    description: "Consume 1250 pellets without taking damage.",
    criteria: {
      target: 2500,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0251",
    title: "Achievement #251",
    reward: 150,
    description: "Consume 1255 pellets without taking damage.",
    criteria: {
      target: 2510,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0252",
    title: "Achievement #252",
    reward: 200,
    description: "Consume 1260 pellets without taking damage.",
    criteria: {
      target: 2520,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0253",
    title: "Achievement #253",
    reward: 250,
    description: "Consume 1265 pellets without taking damage.",
    criteria: {
      target: 2530,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0254",
    title: "Achievement #254",
    reward: 300,
    description: "Consume 1270 pellets without taking damage.",
    criteria: {
      target: 2540,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0255",
    title: "Achievement #255",
    reward: 350,
    description: "Consume 1275 pellets without taking damage.",
    criteria: {
      target: 2550,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0256",
    title: "Achievement #256",
    reward: 400,
    description: "Consume 1280 pellets without taking damage.",
    criteria: {
      target: 2560,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0257",
    title: "Achievement #257",
    reward: 450,
    description: "Consume 1285 pellets without taking damage.",
    criteria: {
      target: 2570,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0258",
    title: "Achievement #258",
    reward: 500,
    description: "Consume 1290 pellets without taking damage.",
    criteria: {
      target: 2580,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0259",
    title: "Achievement #259",
    reward: 550,
    description: "Consume 1295 pellets without taking damage.",
    criteria: {
      target: 2590,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0260",
    title: "Achievement #260",
    reward: 100,
    description: "Consume 1300 pellets without taking damage.",
    criteria: {
      target: 2600,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0261",
    title: "Achievement #261",
    reward: 150,
    description: "Consume 1305 pellets without taking damage.",
    criteria: {
      target: 2610,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0262",
    title: "Achievement #262",
    reward: 200,
    description: "Consume 1310 pellets without taking damage.",
    criteria: {
      target: 2620,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0263",
    title: "Achievement #263",
    reward: 250,
    description: "Consume 1315 pellets without taking damage.",
    criteria: {
      target: 2630,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0264",
    title: "Achievement #264",
    reward: 300,
    description: "Consume 1320 pellets without taking damage.",
    criteria: {
      target: 2640,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0265",
    title: "Achievement #265",
    reward: 350,
    description: "Consume 1325 pellets without taking damage.",
    criteria: {
      target: 2650,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0266",
    title: "Achievement #266",
    reward: 400,
    description: "Consume 1330 pellets without taking damage.",
    criteria: {
      target: 2660,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0267",
    title: "Achievement #267",
    reward: 450,
    description: "Consume 1335 pellets without taking damage.",
    criteria: {
      target: 2670,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0268",
    title: "Achievement #268",
    reward: 500,
    description: "Consume 1340 pellets without taking damage.",
    criteria: {
      target: 2680,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0269",
    title: "Achievement #269",
    reward: 550,
    description: "Consume 1345 pellets without taking damage.",
    criteria: {
      target: 2690,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0270",
    title: "Achievement #270",
    reward: 100,
    description: "Consume 1350 pellets without taking damage.",
    criteria: {
      target: 2700,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0271",
    title: "Achievement #271",
    reward: 150,
    description: "Consume 1355 pellets without taking damage.",
    criteria: {
      target: 2710,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0272",
    title: "Achievement #272",
    reward: 200,
    description: "Consume 1360 pellets without taking damage.",
    criteria: {
      target: 2720,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0273",
    title: "Achievement #273",
    reward: 250,
    description: "Consume 1365 pellets without taking damage.",
    criteria: {
      target: 2730,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0274",
    title: "Achievement #274",
    reward: 300,
    description: "Consume 1370 pellets without taking damage.",
    criteria: {
      target: 2740,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0275",
    title: "Achievement #275",
    reward: 350,
    description: "Consume 1375 pellets without taking damage.",
    criteria: {
      target: 2750,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0276",
    title: "Achievement #276",
    reward: 400,
    description: "Consume 1380 pellets without taking damage.",
    criteria: {
      target: 2760,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0277",
    title: "Achievement #277",
    reward: 450,
    description: "Consume 1385 pellets without taking damage.",
    criteria: {
      target: 2770,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0278",
    title: "Achievement #278",
    reward: 500,
    description: "Consume 1390 pellets without taking damage.",
    criteria: {
      target: 2780,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0279",
    title: "Achievement #279",
    reward: 550,
    description: "Consume 1395 pellets without taking damage.",
    criteria: {
      target: 2790,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0280",
    title: "Achievement #280",
    reward: 100,
    description: "Consume 1400 pellets without taking damage.",
    criteria: {
      target: 2800,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0281",
    title: "Achievement #281",
    reward: 150,
    description: "Consume 1405 pellets without taking damage.",
    criteria: {
      target: 2810,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0282",
    title: "Achievement #282",
    reward: 200,
    description: "Consume 1410 pellets without taking damage.",
    criteria: {
      target: 2820,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0283",
    title: "Achievement #283",
    reward: 250,
    description: "Consume 1415 pellets without taking damage.",
    criteria: {
      target: 2830,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0284",
    title: "Achievement #284",
    reward: 300,
    description: "Consume 1420 pellets without taking damage.",
    criteria: {
      target: 2840,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0285",
    title: "Achievement #285",
    reward: 350,
    description: "Consume 1425 pellets without taking damage.",
    criteria: {
      target: 2850,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0286",
    title: "Achievement #286",
    reward: 400,
    description: "Consume 1430 pellets without taking damage.",
    criteria: {
      target: 2860,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0287",
    title: "Achievement #287",
    reward: 450,
    description: "Consume 1435 pellets without taking damage.",
    criteria: {
      target: 2870,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0288",
    title: "Achievement #288",
    reward: 500,
    description: "Consume 1440 pellets without taking damage.",
    criteria: {
      target: 2880,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0289",
    title: "Achievement #289",
    reward: 550,
    description: "Consume 1445 pellets without taking damage.",
    criteria: {
      target: 2890,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0290",
    title: "Achievement #290",
    reward: 100,
    description: "Consume 1450 pellets without taking damage.",
    criteria: {
      target: 2900,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0291",
    title: "Achievement #291",
    reward: 150,
    description: "Consume 1455 pellets without taking damage.",
    criteria: {
      target: 2910,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0292",
    title: "Achievement #292",
    reward: 200,
    description: "Consume 1460 pellets without taking damage.",
    criteria: {
      target: 2920,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0293",
    title: "Achievement #293",
    reward: 250,
    description: "Consume 1465 pellets without taking damage.",
    criteria: {
      target: 2930,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0294",
    title: "Achievement #294",
    reward: 300,
    description: "Consume 1470 pellets without taking damage.",
    criteria: {
      target: 2940,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0295",
    title: "Achievement #295",
    reward: 350,
    description: "Consume 1475 pellets without taking damage.",
    criteria: {
      target: 2950,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0296",
    title: "Achievement #296",
    reward: 400,
    description: "Consume 1480 pellets without taking damage.",
    criteria: {
      target: 2960,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0297",
    title: "Achievement #297",
    reward: 450,
    description: "Consume 1485 pellets without taking damage.",
    criteria: {
      target: 2970,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0298",
    title: "Achievement #298",
    reward: 500,
    description: "Consume 1490 pellets without taking damage.",
    criteria: {
      target: 2980,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0299",
    title: "Achievement #299",
    reward: 550,
    description: "Consume 1495 pellets without taking damage.",
    criteria: {
      target: 2990,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0300",
    title: "Achievement #300",
    reward: 100,
    description: "Consume 1500 pellets without taking damage.",
    criteria: {
      target: 3000,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0301",
    title: "Achievement #301",
    reward: 150,
    description: "Consume 1505 pellets without taking damage.",
    criteria: {
      target: 3010,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0302",
    title: "Achievement #302",
    reward: 200,
    description: "Consume 1510 pellets without taking damage.",
    criteria: {
      target: 3020,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0303",
    title: "Achievement #303",
    reward: 250,
    description: "Consume 1515 pellets without taking damage.",
    criteria: {
      target: 3030,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0304",
    title: "Achievement #304",
    reward: 300,
    description: "Consume 1520 pellets without taking damage.",
    criteria: {
      target: 3040,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0305",
    title: "Achievement #305",
    reward: 350,
    description: "Consume 1525 pellets without taking damage.",
    criteria: {
      target: 3050,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0306",
    title: "Achievement #306",
    reward: 400,
    description: "Consume 1530 pellets without taking damage.",
    criteria: {
      target: 3060,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0307",
    title: "Achievement #307",
    reward: 450,
    description: "Consume 1535 pellets without taking damage.",
    criteria: {
      target: 3070,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0308",
    title: "Achievement #308",
    reward: 500,
    description: "Consume 1540 pellets without taking damage.",
    criteria: {
      target: 3080,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0309",
    title: "Achievement #309",
    reward: 550,
    description: "Consume 1545 pellets without taking damage.",
    criteria: {
      target: 3090,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0310",
    title: "Achievement #310",
    reward: 100,
    description: "Consume 1550 pellets without taking damage.",
    criteria: {
      target: 3100,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0311",
    title: "Achievement #311",
    reward: 150,
    description: "Consume 1555 pellets without taking damage.",
    criteria: {
      target: 3110,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0312",
    title: "Achievement #312",
    reward: 200,
    description: "Consume 1560 pellets without taking damage.",
    criteria: {
      target: 3120,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0313",
    title: "Achievement #313",
    reward: 250,
    description: "Consume 1565 pellets without taking damage.",
    criteria: {
      target: 3130,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0314",
    title: "Achievement #314",
    reward: 300,
    description: "Consume 1570 pellets without taking damage.",
    criteria: {
      target: 3140,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0315",
    title: "Achievement #315",
    reward: 350,
    description: "Consume 1575 pellets without taking damage.",
    criteria: {
      target: 3150,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0316",
    title: "Achievement #316",
    reward: 400,
    description: "Consume 1580 pellets without taking damage.",
    criteria: {
      target: 3160,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0317",
    title: "Achievement #317",
    reward: 450,
    description: "Consume 1585 pellets without taking damage.",
    criteria: {
      target: 3170,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0318",
    title: "Achievement #318",
    reward: 500,
    description: "Consume 1590 pellets without taking damage.",
    criteria: {
      target: 3180,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0319",
    title: "Achievement #319",
    reward: 550,
    description: "Consume 1595 pellets without taking damage.",
    criteria: {
      target: 3190,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0320",
    title: "Achievement #320",
    reward: 100,
    description: "Consume 1600 pellets without taking damage.",
    criteria: {
      target: 3200,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0321",
    title: "Achievement #321",
    reward: 150,
    description: "Consume 1605 pellets without taking damage.",
    criteria: {
      target: 3210,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0322",
    title: "Achievement #322",
    reward: 200,
    description: "Consume 1610 pellets without taking damage.",
    criteria: {
      target: 3220,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0323",
    title: "Achievement #323",
    reward: 250,
    description: "Consume 1615 pellets without taking damage.",
    criteria: {
      target: 3230,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0324",
    title: "Achievement #324",
    reward: 300,
    description: "Consume 1620 pellets without taking damage.",
    criteria: {
      target: 3240,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0325",
    title: "Achievement #325",
    reward: 350,
    description: "Consume 1625 pellets without taking damage.",
    criteria: {
      target: 3250,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0326",
    title: "Achievement #326",
    reward: 400,
    description: "Consume 1630 pellets without taking damage.",
    criteria: {
      target: 3260,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0327",
    title: "Achievement #327",
    reward: 450,
    description: "Consume 1635 pellets without taking damage.",
    criteria: {
      target: 3270,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0328",
    title: "Achievement #328",
    reward: 500,
    description: "Consume 1640 pellets without taking damage.",
    criteria: {
      target: 3280,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0329",
    title: "Achievement #329",
    reward: 550,
    description: "Consume 1645 pellets without taking damage.",
    criteria: {
      target: 3290,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0330",
    title: "Achievement #330",
    reward: 100,
    description: "Consume 1650 pellets without taking damage.",
    criteria: {
      target: 3300,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0331",
    title: "Achievement #331",
    reward: 150,
    description: "Consume 1655 pellets without taking damage.",
    criteria: {
      target: 3310,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0332",
    title: "Achievement #332",
    reward: 200,
    description: "Consume 1660 pellets without taking damage.",
    criteria: {
      target: 3320,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0333",
    title: "Achievement #333",
    reward: 250,
    description: "Consume 1665 pellets without taking damage.",
    criteria: {
      target: 3330,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0334",
    title: "Achievement #334",
    reward: 300,
    description: "Consume 1670 pellets without taking damage.",
    criteria: {
      target: 3340,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0335",
    title: "Achievement #335",
    reward: 350,
    description: "Consume 1675 pellets without taking damage.",
    criteria: {
      target: 3350,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0336",
    title: "Achievement #336",
    reward: 400,
    description: "Consume 1680 pellets without taking damage.",
    criteria: {
      target: 3360,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0337",
    title: "Achievement #337",
    reward: 450,
    description: "Consume 1685 pellets without taking damage.",
    criteria: {
      target: 3370,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0338",
    title: "Achievement #338",
    reward: 500,
    description: "Consume 1690 pellets without taking damage.",
    criteria: {
      target: 3380,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0339",
    title: "Achievement #339",
    reward: 550,
    description: "Consume 1695 pellets without taking damage.",
    criteria: {
      target: 3390,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0340",
    title: "Achievement #340",
    reward: 100,
    description: "Consume 1700 pellets without taking damage.",
    criteria: {
      target: 3400,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0341",
    title: "Achievement #341",
    reward: 150,
    description: "Consume 1705 pellets without taking damage.",
    criteria: {
      target: 3410,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0342",
    title: "Achievement #342",
    reward: 200,
    description: "Consume 1710 pellets without taking damage.",
    criteria: {
      target: 3420,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0343",
    title: "Achievement #343",
    reward: 250,
    description: "Consume 1715 pellets without taking damage.",
    criteria: {
      target: 3430,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0344",
    title: "Achievement #344",
    reward: 300,
    description: "Consume 1720 pellets without taking damage.",
    criteria: {
      target: 3440,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0345",
    title: "Achievement #345",
    reward: 350,
    description: "Consume 1725 pellets without taking damage.",
    criteria: {
      target: 3450,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0346",
    title: "Achievement #346",
    reward: 400,
    description: "Consume 1730 pellets without taking damage.",
    criteria: {
      target: 3460,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0347",
    title: "Achievement #347",
    reward: 450,
    description: "Consume 1735 pellets without taking damage.",
    criteria: {
      target: 3470,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0348",
    title: "Achievement #348",
    reward: 500,
    description: "Consume 1740 pellets without taking damage.",
    criteria: {
      target: 3480,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0349",
    title: "Achievement #349",
    reward: 550,
    description: "Consume 1745 pellets without taking damage.",
    criteria: {
      target: 3490,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0350",
    title: "Achievement #350",
    reward: 100,
    description: "Consume 1750 pellets without taking damage.",
    criteria: {
      target: 3500,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0351",
    title: "Achievement #351",
    reward: 150,
    description: "Consume 1755 pellets without taking damage.",
    criteria: {
      target: 3510,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0352",
    title: "Achievement #352",
    reward: 200,
    description: "Consume 1760 pellets without taking damage.",
    criteria: {
      target: 3520,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0353",
    title: "Achievement #353",
    reward: 250,
    description: "Consume 1765 pellets without taking damage.",
    criteria: {
      target: 3530,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0354",
    title: "Achievement #354",
    reward: 300,
    description: "Consume 1770 pellets without taking damage.",
    criteria: {
      target: 3540,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0355",
    title: "Achievement #355",
    reward: 350,
    description: "Consume 1775 pellets without taking damage.",
    criteria: {
      target: 3550,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0356",
    title: "Achievement #356",
    reward: 400,
    description: "Consume 1780 pellets without taking damage.",
    criteria: {
      target: 3560,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0357",
    title: "Achievement #357",
    reward: 450,
    description: "Consume 1785 pellets without taking damage.",
    criteria: {
      target: 3570,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0358",
    title: "Achievement #358",
    reward: 500,
    description: "Consume 1790 pellets without taking damage.",
    criteria: {
      target: 3580,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0359",
    title: "Achievement #359",
    reward: 550,
    description: "Consume 1795 pellets without taking damage.",
    criteria: {
      target: 3590,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0360",
    title: "Achievement #360",
    reward: 100,
    description: "Consume 1800 pellets without taking damage.",
    criteria: {
      target: 3600,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0361",
    title: "Achievement #361",
    reward: 150,
    description: "Consume 1805 pellets without taking damage.",
    criteria: {
      target: 3610,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0362",
    title: "Achievement #362",
    reward: 200,
    description: "Consume 1810 pellets without taking damage.",
    criteria: {
      target: 3620,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0363",
    title: "Achievement #363",
    reward: 250,
    description: "Consume 1815 pellets without taking damage.",
    criteria: {
      target: 3630,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0364",
    title: "Achievement #364",
    reward: 300,
    description: "Consume 1820 pellets without taking damage.",
    criteria: {
      target: 3640,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0365",
    title: "Achievement #365",
    reward: 350,
    description: "Consume 1825 pellets without taking damage.",
    criteria: {
      target: 3650,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0366",
    title: "Achievement #366",
    reward: 400,
    description: "Consume 1830 pellets without taking damage.",
    criteria: {
      target: 3660,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0367",
    title: "Achievement #367",
    reward: 450,
    description: "Consume 1835 pellets without taking damage.",
    criteria: {
      target: 3670,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0368",
    title: "Achievement #368",
    reward: 500,
    description: "Consume 1840 pellets without taking damage.",
    criteria: {
      target: 3680,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0369",
    title: "Achievement #369",
    reward: 550,
    description: "Consume 1845 pellets without taking damage.",
    criteria: {
      target: 3690,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0370",
    title: "Achievement #370",
    reward: 100,
    description: "Consume 1850 pellets without taking damage.",
    criteria: {
      target: 3700,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0371",
    title: "Achievement #371",
    reward: 150,
    description: "Consume 1855 pellets without taking damage.",
    criteria: {
      target: 3710,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0372",
    title: "Achievement #372",
    reward: 200,
    description: "Consume 1860 pellets without taking damage.",
    criteria: {
      target: 3720,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0373",
    title: "Achievement #373",
    reward: 250,
    description: "Consume 1865 pellets without taking damage.",
    criteria: {
      target: 3730,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0374",
    title: "Achievement #374",
    reward: 300,
    description: "Consume 1870 pellets without taking damage.",
    criteria: {
      target: 3740,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0375",
    title: "Achievement #375",
    reward: 350,
    description: "Consume 1875 pellets without taking damage.",
    criteria: {
      target: 3750,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0376",
    title: "Achievement #376",
    reward: 400,
    description: "Consume 1880 pellets without taking damage.",
    criteria: {
      target: 3760,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0377",
    title: "Achievement #377",
    reward: 450,
    description: "Consume 1885 pellets without taking damage.",
    criteria: {
      target: 3770,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0378",
    title: "Achievement #378",
    reward: 500,
    description: "Consume 1890 pellets without taking damage.",
    criteria: {
      target: 3780,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0379",
    title: "Achievement #379",
    reward: 550,
    description: "Consume 1895 pellets without taking damage.",
    criteria: {
      target: 3790,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0380",
    title: "Achievement #380",
    reward: 100,
    description: "Consume 1900 pellets without taking damage.",
    criteria: {
      target: 3800,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0381",
    title: "Achievement #381",
    reward: 150,
    description: "Consume 1905 pellets without taking damage.",
    criteria: {
      target: 3810,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0382",
    title: "Achievement #382",
    reward: 200,
    description: "Consume 1910 pellets without taking damage.",
    criteria: {
      target: 3820,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0383",
    title: "Achievement #383",
    reward: 250,
    description: "Consume 1915 pellets without taking damage.",
    criteria: {
      target: 3830,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0384",
    title: "Achievement #384",
    reward: 300,
    description: "Consume 1920 pellets without taking damage.",
    criteria: {
      target: 3840,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0385",
    title: "Achievement #385",
    reward: 350,
    description: "Consume 1925 pellets without taking damage.",
    criteria: {
      target: 3850,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0386",
    title: "Achievement #386",
    reward: 400,
    description: "Consume 1930 pellets without taking damage.",
    criteria: {
      target: 3860,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0387",
    title: "Achievement #387",
    reward: 450,
    description: "Consume 1935 pellets without taking damage.",
    criteria: {
      target: 3870,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0388",
    title: "Achievement #388",
    reward: 500,
    description: "Consume 1940 pellets without taking damage.",
    criteria: {
      target: 3880,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0389",
    title: "Achievement #389",
    reward: 550,
    description: "Consume 1945 pellets without taking damage.",
    criteria: {
      target: 3890,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0390",
    title: "Achievement #390",
    reward: 100,
    description: "Consume 1950 pellets without taking damage.",
    criteria: {
      target: 3900,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0391",
    title: "Achievement #391",
    reward: 150,
    description: "Consume 1955 pellets without taking damage.",
    criteria: {
      target: 3910,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0392",
    title: "Achievement #392",
    reward: 200,
    description: "Consume 1960 pellets without taking damage.",
    criteria: {
      target: 3920,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0393",
    title: "Achievement #393",
    reward: 250,
    description: "Consume 1965 pellets without taking damage.",
    criteria: {
      target: 3930,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0394",
    title: "Achievement #394",
    reward: 300,
    description: "Consume 1970 pellets without taking damage.",
    criteria: {
      target: 3940,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0395",
    title: "Achievement #395",
    reward: 350,
    description: "Consume 1975 pellets without taking damage.",
    criteria: {
      target: 3950,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0396",
    title: "Achievement #396",
    reward: 400,
    description: "Consume 1980 pellets without taking damage.",
    criteria: {
      target: 3960,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0397",
    title: "Achievement #397",
    reward: 450,
    description: "Consume 1985 pellets without taking damage.",
    criteria: {
      target: 3970,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0398",
    title: "Achievement #398",
    reward: 500,
    description: "Consume 1990 pellets without taking damage.",
    criteria: {
      target: 3980,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0399",
    title: "Achievement #399",
    reward: 550,
    description: "Consume 1995 pellets without taking damage.",
    criteria: {
      target: 3990,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0400",
    title: "Achievement #400",
    reward: 100,
    description: "Consume 2000 pellets without taking damage.",
    criteria: {
      target: 4000,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0401",
    title: "Achievement #401",
    reward: 150,
    description: "Consume 2005 pellets without taking damage.",
    criteria: {
      target: 4010,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0402",
    title: "Achievement #402",
    reward: 200,
    description: "Consume 2010 pellets without taking damage.",
    criteria: {
      target: 4020,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0403",
    title: "Achievement #403",
    reward: 250,
    description: "Consume 2015 pellets without taking damage.",
    criteria: {
      target: 4030,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0404",
    title: "Achievement #404",
    reward: 300,
    description: "Consume 2020 pellets without taking damage.",
    criteria: {
      target: 4040,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0405",
    title: "Achievement #405",
    reward: 350,
    description: "Consume 2025 pellets without taking damage.",
    criteria: {
      target: 4050,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0406",
    title: "Achievement #406",
    reward: 400,
    description: "Consume 2030 pellets without taking damage.",
    criteria: {
      target: 4060,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0407",
    title: "Achievement #407",
    reward: 450,
    description: "Consume 2035 pellets without taking damage.",
    criteria: {
      target: 4070,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0408",
    title: "Achievement #408",
    reward: 500,
    description: "Consume 2040 pellets without taking damage.",
    criteria: {
      target: 4080,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0409",
    title: "Achievement #409",
    reward: 550,
    description: "Consume 2045 pellets without taking damage.",
    criteria: {
      target: 4090,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0410",
    title: "Achievement #410",
    reward: 100,
    description: "Consume 2050 pellets without taking damage.",
    criteria: {
      target: 4100,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0411",
    title: "Achievement #411",
    reward: 150,
    description: "Consume 2055 pellets without taking damage.",
    criteria: {
      target: 4110,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0412",
    title: "Achievement #412",
    reward: 200,
    description: "Consume 2060 pellets without taking damage.",
    criteria: {
      target: 4120,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0413",
    title: "Achievement #413",
    reward: 250,
    description: "Consume 2065 pellets without taking damage.",
    criteria: {
      target: 4130,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0414",
    title: "Achievement #414",
    reward: 300,
    description: "Consume 2070 pellets without taking damage.",
    criteria: {
      target: 4140,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0415",
    title: "Achievement #415",
    reward: 350,
    description: "Consume 2075 pellets without taking damage.",
    criteria: {
      target: 4150,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0416",
    title: "Achievement #416",
    reward: 400,
    description: "Consume 2080 pellets without taking damage.",
    criteria: {
      target: 4160,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0417",
    title: "Achievement #417",
    reward: 450,
    description: "Consume 2085 pellets without taking damage.",
    criteria: {
      target: 4170,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0418",
    title: "Achievement #418",
    reward: 500,
    description: "Consume 2090 pellets without taking damage.",
    criteria: {
      target: 4180,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0419",
    title: "Achievement #419",
    reward: 550,
    description: "Consume 2095 pellets without taking damage.",
    criteria: {
      target: 4190,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0420",
    title: "Achievement #420",
    reward: 100,
    description: "Consume 2100 pellets without taking damage.",
    criteria: {
      target: 4200,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0421",
    title: "Achievement #421",
    reward: 150,
    description: "Consume 2105 pellets without taking damage.",
    criteria: {
      target: 4210,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0422",
    title: "Achievement #422",
    reward: 200,
    description: "Consume 2110 pellets without taking damage.",
    criteria: {
      target: 4220,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0423",
    title: "Achievement #423",
    reward: 250,
    description: "Consume 2115 pellets without taking damage.",
    criteria: {
      target: 4230,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0424",
    title: "Achievement #424",
    reward: 300,
    description: "Consume 2120 pellets without taking damage.",
    criteria: {
      target: 4240,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0425",
    title: "Achievement #425",
    reward: 350,
    description: "Consume 2125 pellets without taking damage.",
    criteria: {
      target: 4250,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0426",
    title: "Achievement #426",
    reward: 400,
    description: "Consume 2130 pellets without taking damage.",
    criteria: {
      target: 4260,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0427",
    title: "Achievement #427",
    reward: 450,
    description: "Consume 2135 pellets without taking damage.",
    criteria: {
      target: 4270,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0428",
    title: "Achievement #428",
    reward: 500,
    description: "Consume 2140 pellets without taking damage.",
    criteria: {
      target: 4280,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0429",
    title: "Achievement #429",
    reward: 550,
    description: "Consume 2145 pellets without taking damage.",
    criteria: {
      target: 4290,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0430",
    title: "Achievement #430",
    reward: 100,
    description: "Consume 2150 pellets without taking damage.",
    criteria: {
      target: 4300,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0431",
    title: "Achievement #431",
    reward: 150,
    description: "Consume 2155 pellets without taking damage.",
    criteria: {
      target: 4310,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0432",
    title: "Achievement #432",
    reward: 200,
    description: "Consume 2160 pellets without taking damage.",
    criteria: {
      target: 4320,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0433",
    title: "Achievement #433",
    reward: 250,
    description: "Consume 2165 pellets without taking damage.",
    criteria: {
      target: 4330,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0434",
    title: "Achievement #434",
    reward: 300,
    description: "Consume 2170 pellets without taking damage.",
    criteria: {
      target: 4340,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0435",
    title: "Achievement #435",
    reward: 350,
    description: "Consume 2175 pellets without taking damage.",
    criteria: {
      target: 4350,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0436",
    title: "Achievement #436",
    reward: 400,
    description: "Consume 2180 pellets without taking damage.",
    criteria: {
      target: 4360,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0437",
    title: "Achievement #437",
    reward: 450,
    description: "Consume 2185 pellets without taking damage.",
    criteria: {
      target: 4370,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0438",
    title: "Achievement #438",
    reward: 500,
    description: "Consume 2190 pellets without taking damage.",
    criteria: {
      target: 4380,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0439",
    title: "Achievement #439",
    reward: 550,
    description: "Consume 2195 pellets without taking damage.",
    criteria: {
      target: 4390,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0440",
    title: "Achievement #440",
    reward: 100,
    description: "Consume 2200 pellets without taking damage.",
    criteria: {
      target: 4400,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0441",
    title: "Achievement #441",
    reward: 150,
    description: "Consume 2205 pellets without taking damage.",
    criteria: {
      target: 4410,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0442",
    title: "Achievement #442",
    reward: 200,
    description: "Consume 2210 pellets without taking damage.",
    criteria: {
      target: 4420,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0443",
    title: "Achievement #443",
    reward: 250,
    description: "Consume 2215 pellets without taking damage.",
    criteria: {
      target: 4430,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0444",
    title: "Achievement #444",
    reward: 300,
    description: "Consume 2220 pellets without taking damage.",
    criteria: {
      target: 4440,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0445",
    title: "Achievement #445",
    reward: 350,
    description: "Consume 2225 pellets without taking damage.",
    criteria: {
      target: 4450,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0446",
    title: "Achievement #446",
    reward: 400,
    description: "Consume 2230 pellets without taking damage.",
    criteria: {
      target: 4460,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0447",
    title: "Achievement #447",
    reward: 450,
    description: "Consume 2235 pellets without taking damage.",
    criteria: {
      target: 4470,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0448",
    title: "Achievement #448",
    reward: 500,
    description: "Consume 2240 pellets without taking damage.",
    criteria: {
      target: 4480,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0449",
    title: "Achievement #449",
    reward: 550,
    description: "Consume 2245 pellets without taking damage.",
    criteria: {
      target: 4490,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0450",
    title: "Achievement #450",
    reward: 100,
    description: "Consume 2250 pellets without taking damage.",
    criteria: {
      target: 4500,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0451",
    title: "Achievement #451",
    reward: 150,
    description: "Consume 2255 pellets without taking damage.",
    criteria: {
      target: 4510,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0452",
    title: "Achievement #452",
    reward: 200,
    description: "Consume 2260 pellets without taking damage.",
    criteria: {
      target: 4520,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0453",
    title: "Achievement #453",
    reward: 250,
    description: "Consume 2265 pellets without taking damage.",
    criteria: {
      target: 4530,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0454",
    title: "Achievement #454",
    reward: 300,
    description: "Consume 2270 pellets without taking damage.",
    criteria: {
      target: 4540,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0455",
    title: "Achievement #455",
    reward: 350,
    description: "Consume 2275 pellets without taking damage.",
    criteria: {
      target: 4550,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0456",
    title: "Achievement #456",
    reward: 400,
    description: "Consume 2280 pellets without taking damage.",
    criteria: {
      target: 4560,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0457",
    title: "Achievement #457",
    reward: 450,
    description: "Consume 2285 pellets without taking damage.",
    criteria: {
      target: 4570,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0458",
    title: "Achievement #458",
    reward: 500,
    description: "Consume 2290 pellets without taking damage.",
    criteria: {
      target: 4580,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0459",
    title: "Achievement #459",
    reward: 550,
    description: "Consume 2295 pellets without taking damage.",
    criteria: {
      target: 4590,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0460",
    title: "Achievement #460",
    reward: 100,
    description: "Consume 2300 pellets without taking damage.",
    criteria: {
      target: 4600,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0461",
    title: "Achievement #461",
    reward: 150,
    description: "Consume 2305 pellets without taking damage.",
    criteria: {
      target: 4610,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0462",
    title: "Achievement #462",
    reward: 200,
    description: "Consume 2310 pellets without taking damage.",
    criteria: {
      target: 4620,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0463",
    title: "Achievement #463",
    reward: 250,
    description: "Consume 2315 pellets without taking damage.",
    criteria: {
      target: 4630,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0464",
    title: "Achievement #464",
    reward: 300,
    description: "Consume 2320 pellets without taking damage.",
    criteria: {
      target: 4640,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0465",
    title: "Achievement #465",
    reward: 350,
    description: "Consume 2325 pellets without taking damage.",
    criteria: {
      target: 4650,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0466",
    title: "Achievement #466",
    reward: 400,
    description: "Consume 2330 pellets without taking damage.",
    criteria: {
      target: 4660,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0467",
    title: "Achievement #467",
    reward: 450,
    description: "Consume 2335 pellets without taking damage.",
    criteria: {
      target: 4670,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0468",
    title: "Achievement #468",
    reward: 500,
    description: "Consume 2340 pellets without taking damage.",
    criteria: {
      target: 4680,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0469",
    title: "Achievement #469",
    reward: 550,
    description: "Consume 2345 pellets without taking damage.",
    criteria: {
      target: 4690,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0470",
    title: "Achievement #470",
    reward: 100,
    description: "Consume 2350 pellets without taking damage.",
    criteria: {
      target: 4700,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0471",
    title: "Achievement #471",
    reward: 150,
    description: "Consume 2355 pellets without taking damage.",
    criteria: {
      target: 4710,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0472",
    title: "Achievement #472",
    reward: 200,
    description: "Consume 2360 pellets without taking damage.",
    criteria: {
      target: 4720,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0473",
    title: "Achievement #473",
    reward: 250,
    description: "Consume 2365 pellets without taking damage.",
    criteria: {
      target: 4730,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0474",
    title: "Achievement #474",
    reward: 300,
    description: "Consume 2370 pellets without taking damage.",
    criteria: {
      target: 4740,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0475",
    title: "Achievement #475",
    reward: 350,
    description: "Consume 2375 pellets without taking damage.",
    criteria: {
      target: 4750,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0476",
    title: "Achievement #476",
    reward: 400,
    description: "Consume 2380 pellets without taking damage.",
    criteria: {
      target: 4760,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0477",
    title: "Achievement #477",
    reward: 450,
    description: "Consume 2385 pellets without taking damage.",
    criteria: {
      target: 4770,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0478",
    title: "Achievement #478",
    reward: 500,
    description: "Consume 2390 pellets without taking damage.",
    criteria: {
      target: 4780,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0479",
    title: "Achievement #479",
    reward: 550,
    description: "Consume 2395 pellets without taking damage.",
    criteria: {
      target: 4790,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0480",
    title: "Achievement #480",
    reward: 100,
    description: "Consume 2400 pellets without taking damage.",
    criteria: {
      target: 4800,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0481",
    title: "Achievement #481",
    reward: 150,
    description: "Consume 2405 pellets without taking damage.",
    criteria: {
      target: 4810,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0482",
    title: "Achievement #482",
    reward: 200,
    description: "Consume 2410 pellets without taking damage.",
    criteria: {
      target: 4820,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0483",
    title: "Achievement #483",
    reward: 250,
    description: "Consume 2415 pellets without taking damage.",
    criteria: {
      target: 4830,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0484",
    title: "Achievement #484",
    reward: 300,
    description: "Consume 2420 pellets without taking damage.",
    criteria: {
      target: 4840,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0485",
    title: "Achievement #485",
    reward: 350,
    description: "Consume 2425 pellets without taking damage.",
    criteria: {
      target: 4850,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0486",
    title: "Achievement #486",
    reward: 400,
    description: "Consume 2430 pellets without taking damage.",
    criteria: {
      target: 4860,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0487",
    title: "Achievement #487",
    reward: 450,
    description: "Consume 2435 pellets without taking damage.",
    criteria: {
      target: 4870,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0488",
    title: "Achievement #488",
    reward: 500,
    description: "Consume 2440 pellets without taking damage.",
    criteria: {
      target: 4880,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0489",
    title: "Achievement #489",
    reward: 550,
    description: "Consume 2445 pellets without taking damage.",
    criteria: {
      target: 4890,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0490",
    title: "Achievement #490",
    reward: 100,
    description: "Consume 2450 pellets without taking damage.",
    criteria: {
      target: 4900,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0491",
    title: "Achievement #491",
    reward: 150,
    description: "Consume 2455 pellets without taking damage.",
    criteria: {
      target: 4910,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0492",
    title: "Achievement #492",
    reward: 200,
    description: "Consume 2460 pellets without taking damage.",
    criteria: {
      target: 4920,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0493",
    title: "Achievement #493",
    reward: 250,
    description: "Consume 2465 pellets without taking damage.",
    criteria: {
      target: 4930,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0494",
    title: "Achievement #494",
    reward: 300,
    description: "Consume 2470 pellets without taking damage.",
    criteria: {
      target: 4940,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0495",
    title: "Achievement #495",
    reward: 350,
    description: "Consume 2475 pellets without taking damage.",
    criteria: {
      target: 4950,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0496",
    title: "Achievement #496",
    reward: 400,
    description: "Consume 2480 pellets without taking damage.",
    criteria: {
      target: 4960,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0497",
    title: "Achievement #497",
    reward: 450,
    description: "Consume 2485 pellets without taking damage.",
    criteria: {
      target: 4970,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0498",
    title: "Achievement #498",
    reward: 500,
    description: "Consume 2490 pellets without taking damage.",
    criteria: {
      target: 4980,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0499",
    title: "Achievement #499",
    reward: 550,
    description: "Consume 2495 pellets without taking damage.",
    criteria: {
      target: 4990,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0500",
    title: "Achievement #500",
    reward: 100,
    description: "Consume 2500 pellets without taking damage.",
    criteria: {
      target: 5000,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0501",
    title: "Achievement #501",
    reward: 150,
    description: "Consume 2505 pellets without taking damage.",
    criteria: {
      target: 5010,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0502",
    title: "Achievement #502",
    reward: 200,
    description: "Consume 2510 pellets without taking damage.",
    criteria: {
      target: 5020,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0503",
    title: "Achievement #503",
    reward: 250,
    description: "Consume 2515 pellets without taking damage.",
    criteria: {
      target: 5030,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0504",
    title: "Achievement #504",
    reward: 300,
    description: "Consume 2520 pellets without taking damage.",
    criteria: {
      target: 5040,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0505",
    title: "Achievement #505",
    reward: 350,
    description: "Consume 2525 pellets without taking damage.",
    criteria: {
      target: 5050,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0506",
    title: "Achievement #506",
    reward: 400,
    description: "Consume 2530 pellets without taking damage.",
    criteria: {
      target: 5060,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0507",
    title: "Achievement #507",
    reward: 450,
    description: "Consume 2535 pellets without taking damage.",
    criteria: {
      target: 5070,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0508",
    title: "Achievement #508",
    reward: 500,
    description: "Consume 2540 pellets without taking damage.",
    criteria: {
      target: 5080,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0509",
    title: "Achievement #509",
    reward: 550,
    description: "Consume 2545 pellets without taking damage.",
    criteria: {
      target: 5090,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0510",
    title: "Achievement #510",
    reward: 100,
    description: "Consume 2550 pellets without taking damage.",
    criteria: {
      target: 5100,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0511",
    title: "Achievement #511",
    reward: 150,
    description: "Consume 2555 pellets without taking damage.",
    criteria: {
      target: 5110,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0512",
    title: "Achievement #512",
    reward: 200,
    description: "Consume 2560 pellets without taking damage.",
    criteria: {
      target: 5120,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0513",
    title: "Achievement #513",
    reward: 250,
    description: "Consume 2565 pellets without taking damage.",
    criteria: {
      target: 5130,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0514",
    title: "Achievement #514",
    reward: 300,
    description: "Consume 2570 pellets without taking damage.",
    criteria: {
      target: 5140,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0515",
    title: "Achievement #515",
    reward: 350,
    description: "Consume 2575 pellets without taking damage.",
    criteria: {
      target: 5150,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0516",
    title: "Achievement #516",
    reward: 400,
    description: "Consume 2580 pellets without taking damage.",
    criteria: {
      target: 5160,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0517",
    title: "Achievement #517",
    reward: 450,
    description: "Consume 2585 pellets without taking damage.",
    criteria: {
      target: 5170,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0518",
    title: "Achievement #518",
    reward: 500,
    description: "Consume 2590 pellets without taking damage.",
    criteria: {
      target: 5180,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0519",
    title: "Achievement #519",
    reward: 550,
    description: "Consume 2595 pellets without taking damage.",
    criteria: {
      target: 5190,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0520",
    title: "Achievement #520",
    reward: 100,
    description: "Consume 2600 pellets without taking damage.",
    criteria: {
      target: 5200,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0521",
    title: "Achievement #521",
    reward: 150,
    description: "Consume 2605 pellets without taking damage.",
    criteria: {
      target: 5210,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0522",
    title: "Achievement #522",
    reward: 200,
    description: "Consume 2610 pellets without taking damage.",
    criteria: {
      target: 5220,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0523",
    title: "Achievement #523",
    reward: 250,
    description: "Consume 2615 pellets without taking damage.",
    criteria: {
      target: 5230,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0524",
    title: "Achievement #524",
    reward: 300,
    description: "Consume 2620 pellets without taking damage.",
    criteria: {
      target: 5240,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0525",
    title: "Achievement #525",
    reward: 350,
    description: "Consume 2625 pellets without taking damage.",
    criteria: {
      target: 5250,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0526",
    title: "Achievement #526",
    reward: 400,
    description: "Consume 2630 pellets without taking damage.",
    criteria: {
      target: 5260,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0527",
    title: "Achievement #527",
    reward: 450,
    description: "Consume 2635 pellets without taking damage.",
    criteria: {
      target: 5270,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0528",
    title: "Achievement #528",
    reward: 500,
    description: "Consume 2640 pellets without taking damage.",
    criteria: {
      target: 5280,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0529",
    title: "Achievement #529",
    reward: 550,
    description: "Consume 2645 pellets without taking damage.",
    criteria: {
      target: 5290,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0530",
    title: "Achievement #530",
    reward: 100,
    description: "Consume 2650 pellets without taking damage.",
    criteria: {
      target: 5300,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0531",
    title: "Achievement #531",
    reward: 150,
    description: "Consume 2655 pellets without taking damage.",
    criteria: {
      target: 5310,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0532",
    title: "Achievement #532",
    reward: 200,
    description: "Consume 2660 pellets without taking damage.",
    criteria: {
      target: 5320,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0533",
    title: "Achievement #533",
    reward: 250,
    description: "Consume 2665 pellets without taking damage.",
    criteria: {
      target: 5330,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0534",
    title: "Achievement #534",
    reward: 300,
    description: "Consume 2670 pellets without taking damage.",
    criteria: {
      target: 5340,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0535",
    title: "Achievement #535",
    reward: 350,
    description: "Consume 2675 pellets without taking damage.",
    criteria: {
      target: 5350,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0536",
    title: "Achievement #536",
    reward: 400,
    description: "Consume 2680 pellets without taking damage.",
    criteria: {
      target: 5360,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0537",
    title: "Achievement #537",
    reward: 450,
    description: "Consume 2685 pellets without taking damage.",
    criteria: {
      target: 5370,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0538",
    title: "Achievement #538",
    reward: 500,
    description: "Consume 2690 pellets without taking damage.",
    criteria: {
      target: 5380,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0539",
    title: "Achievement #539",
    reward: 550,
    description: "Consume 2695 pellets without taking damage.",
    criteria: {
      target: 5390,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0540",
    title: "Achievement #540",
    reward: 100,
    description: "Consume 2700 pellets without taking damage.",
    criteria: {
      target: 5400,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0541",
    title: "Achievement #541",
    reward: 150,
    description: "Consume 2705 pellets without taking damage.",
    criteria: {
      target: 5410,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0542",
    title: "Achievement #542",
    reward: 200,
    description: "Consume 2710 pellets without taking damage.",
    criteria: {
      target: 5420,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0543",
    title: "Achievement #543",
    reward: 250,
    description: "Consume 2715 pellets without taking damage.",
    criteria: {
      target: 5430,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0544",
    title: "Achievement #544",
    reward: 300,
    description: "Consume 2720 pellets without taking damage.",
    criteria: {
      target: 5440,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0545",
    title: "Achievement #545",
    reward: 350,
    description: "Consume 2725 pellets without taking damage.",
    criteria: {
      target: 5450,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0546",
    title: "Achievement #546",
    reward: 400,
    description: "Consume 2730 pellets without taking damage.",
    criteria: {
      target: 5460,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0547",
    title: "Achievement #547",
    reward: 450,
    description: "Consume 2735 pellets without taking damage.",
    criteria: {
      target: 5470,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0548",
    title: "Achievement #548",
    reward: 500,
    description: "Consume 2740 pellets without taking damage.",
    criteria: {
      target: 5480,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0549",
    title: "Achievement #549",
    reward: 550,
    description: "Consume 2745 pellets without taking damage.",
    criteria: {
      target: 5490,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0550",
    title: "Achievement #550",
    reward: 100,
    description: "Consume 2750 pellets without taking damage.",
    criteria: {
      target: 5500,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0551",
    title: "Achievement #551",
    reward: 150,
    description: "Consume 2755 pellets without taking damage.",
    criteria: {
      target: 5510,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0552",
    title: "Achievement #552",
    reward: 200,
    description: "Consume 2760 pellets without taking damage.",
    criteria: {
      target: 5520,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0553",
    title: "Achievement #553",
    reward: 250,
    description: "Consume 2765 pellets without taking damage.",
    criteria: {
      target: 5530,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0554",
    title: "Achievement #554",
    reward: 300,
    description: "Consume 2770 pellets without taking damage.",
    criteria: {
      target: 5540,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0555",
    title: "Achievement #555",
    reward: 350,
    description: "Consume 2775 pellets without taking damage.",
    criteria: {
      target: 5550,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0556",
    title: "Achievement #556",
    reward: 400,
    description: "Consume 2780 pellets without taking damage.",
    criteria: {
      target: 5560,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0557",
    title: "Achievement #557",
    reward: 450,
    description: "Consume 2785 pellets without taking damage.",
    criteria: {
      target: 5570,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0558",
    title: "Achievement #558",
    reward: 500,
    description: "Consume 2790 pellets without taking damage.",
    criteria: {
      target: 5580,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0559",
    title: "Achievement #559",
    reward: 550,
    description: "Consume 2795 pellets without taking damage.",
    criteria: {
      target: 5590,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0560",
    title: "Achievement #560",
    reward: 100,
    description: "Consume 2800 pellets without taking damage.",
    criteria: {
      target: 5600,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0561",
    title: "Achievement #561",
    reward: 150,
    description: "Consume 2805 pellets without taking damage.",
    criteria: {
      target: 5610,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0562",
    title: "Achievement #562",
    reward: 200,
    description: "Consume 2810 pellets without taking damage.",
    criteria: {
      target: 5620,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0563",
    title: "Achievement #563",
    reward: 250,
    description: "Consume 2815 pellets without taking damage.",
    criteria: {
      target: 5630,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0564",
    title: "Achievement #564",
    reward: 300,
    description: "Consume 2820 pellets without taking damage.",
    criteria: {
      target: 5640,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0565",
    title: "Achievement #565",
    reward: 350,
    description: "Consume 2825 pellets without taking damage.",
    criteria: {
      target: 5650,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0566",
    title: "Achievement #566",
    reward: 400,
    description: "Consume 2830 pellets without taking damage.",
    criteria: {
      target: 5660,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0567",
    title: "Achievement #567",
    reward: 450,
    description: "Consume 2835 pellets without taking damage.",
    criteria: {
      target: 5670,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0568",
    title: "Achievement #568",
    reward: 500,
    description: "Consume 2840 pellets without taking damage.",
    criteria: {
      target: 5680,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0569",
    title: "Achievement #569",
    reward: 550,
    description: "Consume 2845 pellets without taking damage.",
    criteria: {
      target: 5690,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0570",
    title: "Achievement #570",
    reward: 100,
    description: "Consume 2850 pellets without taking damage.",
    criteria: {
      target: 5700,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0571",
    title: "Achievement #571",
    reward: 150,
    description: "Consume 2855 pellets without taking damage.",
    criteria: {
      target: 5710,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0572",
    title: "Achievement #572",
    reward: 200,
    description: "Consume 2860 pellets without taking damage.",
    criteria: {
      target: 5720,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0573",
    title: "Achievement #573",
    reward: 250,
    description: "Consume 2865 pellets without taking damage.",
    criteria: {
      target: 5730,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0574",
    title: "Achievement #574",
    reward: 300,
    description: "Consume 2870 pellets without taking damage.",
    criteria: {
      target: 5740,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0575",
    title: "Achievement #575",
    reward: 350,
    description: "Consume 2875 pellets without taking damage.",
    criteria: {
      target: 5750,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0576",
    title: "Achievement #576",
    reward: 400,
    description: "Consume 2880 pellets without taking damage.",
    criteria: {
      target: 5760,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0577",
    title: "Achievement #577",
    reward: 450,
    description: "Consume 2885 pellets without taking damage.",
    criteria: {
      target: 5770,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0578",
    title: "Achievement #578",
    reward: 500,
    description: "Consume 2890 pellets without taking damage.",
    criteria: {
      target: 5780,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0579",
    title: "Achievement #579",
    reward: 550,
    description: "Consume 2895 pellets without taking damage.",
    criteria: {
      target: 5790,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0580",
    title: "Achievement #580",
    reward: 100,
    description: "Consume 2900 pellets without taking damage.",
    criteria: {
      target: 5800,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0581",
    title: "Achievement #581",
    reward: 150,
    description: "Consume 2905 pellets without taking damage.",
    criteria: {
      target: 5810,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0582",
    title: "Achievement #582",
    reward: 200,
    description: "Consume 2910 pellets without taking damage.",
    criteria: {
      target: 5820,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0583",
    title: "Achievement #583",
    reward: 250,
    description: "Consume 2915 pellets without taking damage.",
    criteria: {
      target: 5830,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0584",
    title: "Achievement #584",
    reward: 300,
    description: "Consume 2920 pellets without taking damage.",
    criteria: {
      target: 5840,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0585",
    title: "Achievement #585",
    reward: 350,
    description: "Consume 2925 pellets without taking damage.",
    criteria: {
      target: 5850,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0586",
    title: "Achievement #586",
    reward: 400,
    description: "Consume 2930 pellets without taking damage.",
    criteria: {
      target: 5860,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0587",
    title: "Achievement #587",
    reward: 450,
    description: "Consume 2935 pellets without taking damage.",
    criteria: {
      target: 5870,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0588",
    title: "Achievement #588",
    reward: 500,
    description: "Consume 2940 pellets without taking damage.",
    criteria: {
      target: 5880,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0589",
    title: "Achievement #589",
    reward: 550,
    description: "Consume 2945 pellets without taking damage.",
    criteria: {
      target: 5890,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0590",
    title: "Achievement #590",
    reward: 100,
    description: "Consume 2950 pellets without taking damage.",
    criteria: {
      target: 5900,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0591",
    title: "Achievement #591",
    reward: 150,
    description: "Consume 2955 pellets without taking damage.",
    criteria: {
      target: 5910,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0592",
    title: "Achievement #592",
    reward: 200,
    description: "Consume 2960 pellets without taking damage.",
    criteria: {
      target: 5920,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0593",
    title: "Achievement #593",
    reward: 250,
    description: "Consume 2965 pellets without taking damage.",
    criteria: {
      target: 5930,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0594",
    title: "Achievement #594",
    reward: 300,
    description: "Consume 2970 pellets without taking damage.",
    criteria: {
      target: 5940,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0595",
    title: "Achievement #595",
    reward: 350,
    description: "Consume 2975 pellets without taking damage.",
    criteria: {
      target: 5950,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0596",
    title: "Achievement #596",
    reward: 400,
    description: "Consume 2980 pellets without taking damage.",
    criteria: {
      target: 5960,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0597",
    title: "Achievement #597",
    reward: 450,
    description: "Consume 2985 pellets without taking damage.",
    criteria: {
      target: 5970,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0598",
    title: "Achievement #598",
    reward: 500,
    description: "Consume 2990 pellets without taking damage.",
    criteria: {
      target: 5980,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0599",
    title: "Achievement #599",
    reward: 550,
    description: "Consume 2995 pellets without taking damage.",
    criteria: {
      target: 5990,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0600",
    title: "Achievement #600",
    reward: 100,
    description: "Consume 3000 pellets without taking damage.",
    criteria: {
      target: 6000,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0601",
    title: "Achievement #601",
    reward: 150,
    description: "Consume 3005 pellets without taking damage.",
    criteria: {
      target: 6010,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0602",
    title: "Achievement #602",
    reward: 200,
    description: "Consume 3010 pellets without taking damage.",
    criteria: {
      target: 6020,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0603",
    title: "Achievement #603",
    reward: 250,
    description: "Consume 3015 pellets without taking damage.",
    criteria: {
      target: 6030,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0604",
    title: "Achievement #604",
    reward: 300,
    description: "Consume 3020 pellets without taking damage.",
    criteria: {
      target: 6040,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0605",
    title: "Achievement #605",
    reward: 350,
    description: "Consume 3025 pellets without taking damage.",
    criteria: {
      target: 6050,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0606",
    title: "Achievement #606",
    reward: 400,
    description: "Consume 3030 pellets without taking damage.",
    criteria: {
      target: 6060,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0607",
    title: "Achievement #607",
    reward: 450,
    description: "Consume 3035 pellets without taking damage.",
    criteria: {
      target: 6070,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0608",
    title: "Achievement #608",
    reward: 500,
    description: "Consume 3040 pellets without taking damage.",
    criteria: {
      target: 6080,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0609",
    title: "Achievement #609",
    reward: 550,
    description: "Consume 3045 pellets without taking damage.",
    criteria: {
      target: 6090,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0610",
    title: "Achievement #610",
    reward: 100,
    description: "Consume 3050 pellets without taking damage.",
    criteria: {
      target: 6100,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0611",
    title: "Achievement #611",
    reward: 150,
    description: "Consume 3055 pellets without taking damage.",
    criteria: {
      target: 6110,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0612",
    title: "Achievement #612",
    reward: 200,
    description: "Consume 3060 pellets without taking damage.",
    criteria: {
      target: 6120,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0613",
    title: "Achievement #613",
    reward: 250,
    description: "Consume 3065 pellets without taking damage.",
    criteria: {
      target: 6130,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0614",
    title: "Achievement #614",
    reward: 300,
    description: "Consume 3070 pellets without taking damage.",
    criteria: {
      target: 6140,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0615",
    title: "Achievement #615",
    reward: 350,
    description: "Consume 3075 pellets without taking damage.",
    criteria: {
      target: 6150,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0616",
    title: "Achievement #616",
    reward: 400,
    description: "Consume 3080 pellets without taking damage.",
    criteria: {
      target: 6160,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0617",
    title: "Achievement #617",
    reward: 450,
    description: "Consume 3085 pellets without taking damage.",
    criteria: {
      target: 6170,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0618",
    title: "Achievement #618",
    reward: 500,
    description: "Consume 3090 pellets without taking damage.",
    criteria: {
      target: 6180,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0619",
    title: "Achievement #619",
    reward: 550,
    description: "Consume 3095 pellets without taking damage.",
    criteria: {
      target: 6190,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0620",
    title: "Achievement #620",
    reward: 100,
    description: "Consume 3100 pellets without taking damage.",
    criteria: {
      target: 6200,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0621",
    title: "Achievement #621",
    reward: 150,
    description: "Consume 3105 pellets without taking damage.",
    criteria: {
      target: 6210,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0622",
    title: "Achievement #622",
    reward: 200,
    description: "Consume 3110 pellets without taking damage.",
    criteria: {
      target: 6220,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0623",
    title: "Achievement #623",
    reward: 250,
    description: "Consume 3115 pellets without taking damage.",
    criteria: {
      target: 6230,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0624",
    title: "Achievement #624",
    reward: 300,
    description: "Consume 3120 pellets without taking damage.",
    criteria: {
      target: 6240,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0625",
    title: "Achievement #625",
    reward: 350,
    description: "Consume 3125 pellets without taking damage.",
    criteria: {
      target: 6250,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0626",
    title: "Achievement #626",
    reward: 400,
    description: "Consume 3130 pellets without taking damage.",
    criteria: {
      target: 6260,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0627",
    title: "Achievement #627",
    reward: 450,
    description: "Consume 3135 pellets without taking damage.",
    criteria: {
      target: 6270,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0628",
    title: "Achievement #628",
    reward: 500,
    description: "Consume 3140 pellets without taking damage.",
    criteria: {
      target: 6280,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0629",
    title: "Achievement #629",
    reward: 550,
    description: "Consume 3145 pellets without taking damage.",
    criteria: {
      target: 6290,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0630",
    title: "Achievement #630",
    reward: 100,
    description: "Consume 3150 pellets without taking damage.",
    criteria: {
      target: 6300,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0631",
    title: "Achievement #631",
    reward: 150,
    description: "Consume 3155 pellets without taking damage.",
    criteria: {
      target: 6310,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0632",
    title: "Achievement #632",
    reward: 200,
    description: "Consume 3160 pellets without taking damage.",
    criteria: {
      target: 6320,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0633",
    title: "Achievement #633",
    reward: 250,
    description: "Consume 3165 pellets without taking damage.",
    criteria: {
      target: 6330,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0634",
    title: "Achievement #634",
    reward: 300,
    description: "Consume 3170 pellets without taking damage.",
    criteria: {
      target: 6340,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0635",
    title: "Achievement #635",
    reward: 350,
    description: "Consume 3175 pellets without taking damage.",
    criteria: {
      target: 6350,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0636",
    title: "Achievement #636",
    reward: 400,
    description: "Consume 3180 pellets without taking damage.",
    criteria: {
      target: 6360,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0637",
    title: "Achievement #637",
    reward: 450,
    description: "Consume 3185 pellets without taking damage.",
    criteria: {
      target: 6370,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0638",
    title: "Achievement #638",
    reward: 500,
    description: "Consume 3190 pellets without taking damage.",
    criteria: {
      target: 6380,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0639",
    title: "Achievement #639",
    reward: 550,
    description: "Consume 3195 pellets without taking damage.",
    criteria: {
      target: 6390,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0640",
    title: "Achievement #640",
    reward: 100,
    description: "Consume 3200 pellets without taking damage.",
    criteria: {
      target: 6400,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0641",
    title: "Achievement #641",
    reward: 150,
    description: "Consume 3205 pellets without taking damage.",
    criteria: {
      target: 6410,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0642",
    title: "Achievement #642",
    reward: 200,
    description: "Consume 3210 pellets without taking damage.",
    criteria: {
      target: 6420,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0643",
    title: "Achievement #643",
    reward: 250,
    description: "Consume 3215 pellets without taking damage.",
    criteria: {
      target: 6430,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0644",
    title: "Achievement #644",
    reward: 300,
    description: "Consume 3220 pellets without taking damage.",
    criteria: {
      target: 6440,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0645",
    title: "Achievement #645",
    reward: 350,
    description: "Consume 3225 pellets without taking damage.",
    criteria: {
      target: 6450,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0646",
    title: "Achievement #646",
    reward: 400,
    description: "Consume 3230 pellets without taking damage.",
    criteria: {
      target: 6460,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0647",
    title: "Achievement #647",
    reward: 450,
    description: "Consume 3235 pellets without taking damage.",
    criteria: {
      target: 6470,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0648",
    title: "Achievement #648",
    reward: 500,
    description: "Consume 3240 pellets without taking damage.",
    criteria: {
      target: 6480,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0649",
    title: "Achievement #649",
    reward: 550,
    description: "Consume 3245 pellets without taking damage.",
    criteria: {
      target: 6490,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0650",
    title: "Achievement #650",
    reward: 100,
    description: "Consume 3250 pellets without taking damage.",
    criteria: {
      target: 6500,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0651",
    title: "Achievement #651",
    reward: 150,
    description: "Consume 3255 pellets without taking damage.",
    criteria: {
      target: 6510,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0652",
    title: "Achievement #652",
    reward: 200,
    description: "Consume 3260 pellets without taking damage.",
    criteria: {
      target: 6520,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0653",
    title: "Achievement #653",
    reward: 250,
    description: "Consume 3265 pellets without taking damage.",
    criteria: {
      target: 6530,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0654",
    title: "Achievement #654",
    reward: 300,
    description: "Consume 3270 pellets without taking damage.",
    criteria: {
      target: 6540,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0655",
    title: "Achievement #655",
    reward: 350,
    description: "Consume 3275 pellets without taking damage.",
    criteria: {
      target: 6550,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0656",
    title: "Achievement #656",
    reward: 400,
    description: "Consume 3280 pellets without taking damage.",
    criteria: {
      target: 6560,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0657",
    title: "Achievement #657",
    reward: 450,
    description: "Consume 3285 pellets without taking damage.",
    criteria: {
      target: 6570,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0658",
    title: "Achievement #658",
    reward: 500,
    description: "Consume 3290 pellets without taking damage.",
    criteria: {
      target: 6580,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0659",
    title: "Achievement #659",
    reward: 550,
    description: "Consume 3295 pellets without taking damage.",
    criteria: {
      target: 6590,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0660",
    title: "Achievement #660",
    reward: 100,
    description: "Consume 3300 pellets without taking damage.",
    criteria: {
      target: 6600,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0661",
    title: "Achievement #661",
    reward: 150,
    description: "Consume 3305 pellets without taking damage.",
    criteria: {
      target: 6610,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0662",
    title: "Achievement #662",
    reward: 200,
    description: "Consume 3310 pellets without taking damage.",
    criteria: {
      target: 6620,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0663",
    title: "Achievement #663",
    reward: 250,
    description: "Consume 3315 pellets without taking damage.",
    criteria: {
      target: 6630,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0664",
    title: "Achievement #664",
    reward: 300,
    description: "Consume 3320 pellets without taking damage.",
    criteria: {
      target: 6640,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0665",
    title: "Achievement #665",
    reward: 350,
    description: "Consume 3325 pellets without taking damage.",
    criteria: {
      target: 6650,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0666",
    title: "Achievement #666",
    reward: 400,
    description: "Consume 3330 pellets without taking damage.",
    criteria: {
      target: 6660,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0667",
    title: "Achievement #667",
    reward: 450,
    description: "Consume 3335 pellets without taking damage.",
    criteria: {
      target: 6670,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0668",
    title: "Achievement #668",
    reward: 500,
    description: "Consume 3340 pellets without taking damage.",
    criteria: {
      target: 6680,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0669",
    title: "Achievement #669",
    reward: 550,
    description: "Consume 3345 pellets without taking damage.",
    criteria: {
      target: 6690,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0670",
    title: "Achievement #670",
    reward: 100,
    description: "Consume 3350 pellets without taking damage.",
    criteria: {
      target: 6700,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0671",
    title: "Achievement #671",
    reward: 150,
    description: "Consume 3355 pellets without taking damage.",
    criteria: {
      target: 6710,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0672",
    title: "Achievement #672",
    reward: 200,
    description: "Consume 3360 pellets without taking damage.",
    criteria: {
      target: 6720,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0673",
    title: "Achievement #673",
    reward: 250,
    description: "Consume 3365 pellets without taking damage.",
    criteria: {
      target: 6730,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0674",
    title: "Achievement #674",
    reward: 300,
    description: "Consume 3370 pellets without taking damage.",
    criteria: {
      target: 6740,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0675",
    title: "Achievement #675",
    reward: 350,
    description: "Consume 3375 pellets without taking damage.",
    criteria: {
      target: 6750,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0676",
    title: "Achievement #676",
    reward: 400,
    description: "Consume 3380 pellets without taking damage.",
    criteria: {
      target: 6760,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0677",
    title: "Achievement #677",
    reward: 450,
    description: "Consume 3385 pellets without taking damage.",
    criteria: {
      target: 6770,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0678",
    title: "Achievement #678",
    reward: 500,
    description: "Consume 3390 pellets without taking damage.",
    criteria: {
      target: 6780,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0679",
    title: "Achievement #679",
    reward: 550,
    description: "Consume 3395 pellets without taking damage.",
    criteria: {
      target: 6790,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0680",
    title: "Achievement #680",
    reward: 100,
    description: "Consume 3400 pellets without taking damage.",
    criteria: {
      target: 6800,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0681",
    title: "Achievement #681",
    reward: 150,
    description: "Consume 3405 pellets without taking damage.",
    criteria: {
      target: 6810,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0682",
    title: "Achievement #682",
    reward: 200,
    description: "Consume 3410 pellets without taking damage.",
    criteria: {
      target: 6820,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0683",
    title: "Achievement #683",
    reward: 250,
    description: "Consume 3415 pellets without taking damage.",
    criteria: {
      target: 6830,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0684",
    title: "Achievement #684",
    reward: 300,
    description: "Consume 3420 pellets without taking damage.",
    criteria: {
      target: 6840,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0685",
    title: "Achievement #685",
    reward: 350,
    description: "Consume 3425 pellets without taking damage.",
    criteria: {
      target: 6850,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0686",
    title: "Achievement #686",
    reward: 400,
    description: "Consume 3430 pellets without taking damage.",
    criteria: {
      target: 6860,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0687",
    title: "Achievement #687",
    reward: 450,
    description: "Consume 3435 pellets without taking damage.",
    criteria: {
      target: 6870,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0688",
    title: "Achievement #688",
    reward: 500,
    description: "Consume 3440 pellets without taking damage.",
    criteria: {
      target: 6880,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0689",
    title: "Achievement #689",
    reward: 550,
    description: "Consume 3445 pellets without taking damage.",
    criteria: {
      target: 6890,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0690",
    title: "Achievement #690",
    reward: 100,
    description: "Consume 3450 pellets without taking damage.",
    criteria: {
      target: 6900,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0691",
    title: "Achievement #691",
    reward: 150,
    description: "Consume 3455 pellets without taking damage.",
    criteria: {
      target: 6910,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0692",
    title: "Achievement #692",
    reward: 200,
    description: "Consume 3460 pellets without taking damage.",
    criteria: {
      target: 6920,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0693",
    title: "Achievement #693",
    reward: 250,
    description: "Consume 3465 pellets without taking damage.",
    criteria: {
      target: 6930,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0694",
    title: "Achievement #694",
    reward: 300,
    description: "Consume 3470 pellets without taking damage.",
    criteria: {
      target: 6940,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0695",
    title: "Achievement #695",
    reward: 350,
    description: "Consume 3475 pellets without taking damage.",
    criteria: {
      target: 6950,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0696",
    title: "Achievement #696",
    reward: 400,
    description: "Consume 3480 pellets without taking damage.",
    criteria: {
      target: 6960,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0697",
    title: "Achievement #697",
    reward: 450,
    description: "Consume 3485 pellets without taking damage.",
    criteria: {
      target: 6970,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0698",
    title: "Achievement #698",
    reward: 500,
    description: "Consume 3490 pellets without taking damage.",
    criteria: {
      target: 6980,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0699",
    title: "Achievement #699",
    reward: 550,
    description: "Consume 3495 pellets without taking damage.",
    criteria: {
      target: 6990,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0700",
    title: "Achievement #700",
    reward: 100,
    description: "Consume 3500 pellets without taking damage.",
    criteria: {
      target: 7000,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0701",
    title: "Achievement #701",
    reward: 150,
    description: "Consume 3505 pellets without taking damage.",
    criteria: {
      target: 7010,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0702",
    title: "Achievement #702",
    reward: 200,
    description: "Consume 3510 pellets without taking damage.",
    criteria: {
      target: 7020,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0703",
    title: "Achievement #703",
    reward: 250,
    description: "Consume 3515 pellets without taking damage.",
    criteria: {
      target: 7030,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0704",
    title: "Achievement #704",
    reward: 300,
    description: "Consume 3520 pellets without taking damage.",
    criteria: {
      target: 7040,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0705",
    title: "Achievement #705",
    reward: 350,
    description: "Consume 3525 pellets without taking damage.",
    criteria: {
      target: 7050,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0706",
    title: "Achievement #706",
    reward: 400,
    description: "Consume 3530 pellets without taking damage.",
    criteria: {
      target: 7060,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0707",
    title: "Achievement #707",
    reward: 450,
    description: "Consume 3535 pellets without taking damage.",
    criteria: {
      target: 7070,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0708",
    title: "Achievement #708",
    reward: 500,
    description: "Consume 3540 pellets without taking damage.",
    criteria: {
      target: 7080,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0709",
    title: "Achievement #709",
    reward: 550,
    description: "Consume 3545 pellets without taking damage.",
    criteria: {
      target: 7090,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0710",
    title: "Achievement #710",
    reward: 100,
    description: "Consume 3550 pellets without taking damage.",
    criteria: {
      target: 7100,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0711",
    title: "Achievement #711",
    reward: 150,
    description: "Consume 3555 pellets without taking damage.",
    criteria: {
      target: 7110,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0712",
    title: "Achievement #712",
    reward: 200,
    description: "Consume 3560 pellets without taking damage.",
    criteria: {
      target: 7120,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0713",
    title: "Achievement #713",
    reward: 250,
    description: "Consume 3565 pellets without taking damage.",
    criteria: {
      target: 7130,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0714",
    title: "Achievement #714",
    reward: 300,
    description: "Consume 3570 pellets without taking damage.",
    criteria: {
      target: 7140,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0715",
    title: "Achievement #715",
    reward: 350,
    description: "Consume 3575 pellets without taking damage.",
    criteria: {
      target: 7150,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0716",
    title: "Achievement #716",
    reward: 400,
    description: "Consume 3580 pellets without taking damage.",
    criteria: {
      target: 7160,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0717",
    title: "Achievement #717",
    reward: 450,
    description: "Consume 3585 pellets without taking damage.",
    criteria: {
      target: 7170,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0718",
    title: "Achievement #718",
    reward: 500,
    description: "Consume 3590 pellets without taking damage.",
    criteria: {
      target: 7180,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0719",
    title: "Achievement #719",
    reward: 550,
    description: "Consume 3595 pellets without taking damage.",
    criteria: {
      target: 7190,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0720",
    title: "Achievement #720",
    reward: 100,
    description: "Consume 3600 pellets without taking damage.",
    criteria: {
      target: 7200,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0721",
    title: "Achievement #721",
    reward: 150,
    description: "Consume 3605 pellets without taking damage.",
    criteria: {
      target: 7210,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0722",
    title: "Achievement #722",
    reward: 200,
    description: "Consume 3610 pellets without taking damage.",
    criteria: {
      target: 7220,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0723",
    title: "Achievement #723",
    reward: 250,
    description: "Consume 3615 pellets without taking damage.",
    criteria: {
      target: 7230,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0724",
    title: "Achievement #724",
    reward: 300,
    description: "Consume 3620 pellets without taking damage.",
    criteria: {
      target: 7240,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0725",
    title: "Achievement #725",
    reward: 350,
    description: "Consume 3625 pellets without taking damage.",
    criteria: {
      target: 7250,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0726",
    title: "Achievement #726",
    reward: 400,
    description: "Consume 3630 pellets without taking damage.",
    criteria: {
      target: 7260,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0727",
    title: "Achievement #727",
    reward: 450,
    description: "Consume 3635 pellets without taking damage.",
    criteria: {
      target: 7270,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0728",
    title: "Achievement #728",
    reward: 500,
    description: "Consume 3640 pellets without taking damage.",
    criteria: {
      target: 7280,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0729",
    title: "Achievement #729",
    reward: 550,
    description: "Consume 3645 pellets without taking damage.",
    criteria: {
      target: 7290,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0730",
    title: "Achievement #730",
    reward: 100,
    description: "Consume 3650 pellets without taking damage.",
    criteria: {
      target: 7300,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0731",
    title: "Achievement #731",
    reward: 150,
    description: "Consume 3655 pellets without taking damage.",
    criteria: {
      target: 7310,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0732",
    title: "Achievement #732",
    reward: 200,
    description: "Consume 3660 pellets without taking damage.",
    criteria: {
      target: 7320,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0733",
    title: "Achievement #733",
    reward: 250,
    description: "Consume 3665 pellets without taking damage.",
    criteria: {
      target: 7330,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0734",
    title: "Achievement #734",
    reward: 300,
    description: "Consume 3670 pellets without taking damage.",
    criteria: {
      target: 7340,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0735",
    title: "Achievement #735",
    reward: 350,
    description: "Consume 3675 pellets without taking damage.",
    criteria: {
      target: 7350,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0736",
    title: "Achievement #736",
    reward: 400,
    description: "Consume 3680 pellets without taking damage.",
    criteria: {
      target: 7360,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0737",
    title: "Achievement #737",
    reward: 450,
    description: "Consume 3685 pellets without taking damage.",
    criteria: {
      target: 7370,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0738",
    title: "Achievement #738",
    reward: 500,
    description: "Consume 3690 pellets without taking damage.",
    criteria: {
      target: 7380,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0739",
    title: "Achievement #739",
    reward: 550,
    description: "Consume 3695 pellets without taking damage.",
    criteria: {
      target: 7390,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0740",
    title: "Achievement #740",
    reward: 100,
    description: "Consume 3700 pellets without taking damage.",
    criteria: {
      target: 7400,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0741",
    title: "Achievement #741",
    reward: 150,
    description: "Consume 3705 pellets without taking damage.",
    criteria: {
      target: 7410,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0742",
    title: "Achievement #742",
    reward: 200,
    description: "Consume 3710 pellets without taking damage.",
    criteria: {
      target: 7420,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0743",
    title: "Achievement #743",
    reward: 250,
    description: "Consume 3715 pellets without taking damage.",
    criteria: {
      target: 7430,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0744",
    title: "Achievement #744",
    reward: 300,
    description: "Consume 3720 pellets without taking damage.",
    criteria: {
      target: 7440,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0745",
    title: "Achievement #745",
    reward: 350,
    description: "Consume 3725 pellets without taking damage.",
    criteria: {
      target: 7450,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0746",
    title: "Achievement #746",
    reward: 400,
    description: "Consume 3730 pellets without taking damage.",
    criteria: {
      target: 7460,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0747",
    title: "Achievement #747",
    reward: 450,
    description: "Consume 3735 pellets without taking damage.",
    criteria: {
      target: 7470,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0748",
    title: "Achievement #748",
    reward: 500,
    description: "Consume 3740 pellets without taking damage.",
    criteria: {
      target: 7480,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0749",
    title: "Achievement #749",
    reward: 550,
    description: "Consume 3745 pellets without taking damage.",
    criteria: {
      target: 7490,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0750",
    title: "Achievement #750",
    reward: 100,
    description: "Consume 3750 pellets without taking damage.",
    criteria: {
      target: 7500,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0751",
    title: "Achievement #751",
    reward: 150,
    description: "Consume 3755 pellets without taking damage.",
    criteria: {
      target: 7510,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0752",
    title: "Achievement #752",
    reward: 200,
    description: "Consume 3760 pellets without taking damage.",
    criteria: {
      target: 7520,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0753",
    title: "Achievement #753",
    reward: 250,
    description: "Consume 3765 pellets without taking damage.",
    criteria: {
      target: 7530,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0754",
    title: "Achievement #754",
    reward: 300,
    description: "Consume 3770 pellets without taking damage.",
    criteria: {
      target: 7540,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0755",
    title: "Achievement #755",
    reward: 350,
    description: "Consume 3775 pellets without taking damage.",
    criteria: {
      target: 7550,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0756",
    title: "Achievement #756",
    reward: 400,
    description: "Consume 3780 pellets without taking damage.",
    criteria: {
      target: 7560,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0757",
    title: "Achievement #757",
    reward: 450,
    description: "Consume 3785 pellets without taking damage.",
    criteria: {
      target: 7570,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0758",
    title: "Achievement #758",
    reward: 500,
    description: "Consume 3790 pellets without taking damage.",
    criteria: {
      target: 7580,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0759",
    title: "Achievement #759",
    reward: 550,
    description: "Consume 3795 pellets without taking damage.",
    criteria: {
      target: 7590,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0760",
    title: "Achievement #760",
    reward: 100,
    description: "Consume 3800 pellets without taking damage.",
    criteria: {
      target: 7600,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0761",
    title: "Achievement #761",
    reward: 150,
    description: "Consume 3805 pellets without taking damage.",
    criteria: {
      target: 7610,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0762",
    title: "Achievement #762",
    reward: 200,
    description: "Consume 3810 pellets without taking damage.",
    criteria: {
      target: 7620,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0763",
    title: "Achievement #763",
    reward: 250,
    description: "Consume 3815 pellets without taking damage.",
    criteria: {
      target: 7630,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0764",
    title: "Achievement #764",
    reward: 300,
    description: "Consume 3820 pellets without taking damage.",
    criteria: {
      target: 7640,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0765",
    title: "Achievement #765",
    reward: 350,
    description: "Consume 3825 pellets without taking damage.",
    criteria: {
      target: 7650,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0766",
    title: "Achievement #766",
    reward: 400,
    description: "Consume 3830 pellets without taking damage.",
    criteria: {
      target: 7660,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0767",
    title: "Achievement #767",
    reward: 450,
    description: "Consume 3835 pellets without taking damage.",
    criteria: {
      target: 7670,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0768",
    title: "Achievement #768",
    reward: 500,
    description: "Consume 3840 pellets without taking damage.",
    criteria: {
      target: 7680,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0769",
    title: "Achievement #769",
    reward: 550,
    description: "Consume 3845 pellets without taking damage.",
    criteria: {
      target: 7690,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0770",
    title: "Achievement #770",
    reward: 100,
    description: "Consume 3850 pellets without taking damage.",
    criteria: {
      target: 7700,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0771",
    title: "Achievement #771",
    reward: 150,
    description: "Consume 3855 pellets without taking damage.",
    criteria: {
      target: 7710,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0772",
    title: "Achievement #772",
    reward: 200,
    description: "Consume 3860 pellets without taking damage.",
    criteria: {
      target: 7720,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0773",
    title: "Achievement #773",
    reward: 250,
    description: "Consume 3865 pellets without taking damage.",
    criteria: {
      target: 7730,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0774",
    title: "Achievement #774",
    reward: 300,
    description: "Consume 3870 pellets without taking damage.",
    criteria: {
      target: 7740,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0775",
    title: "Achievement #775",
    reward: 350,
    description: "Consume 3875 pellets without taking damage.",
    criteria: {
      target: 7750,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0776",
    title: "Achievement #776",
    reward: 400,
    description: "Consume 3880 pellets without taking damage.",
    criteria: {
      target: 7760,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0777",
    title: "Achievement #777",
    reward: 450,
    description: "Consume 3885 pellets without taking damage.",
    criteria: {
      target: 7770,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0778",
    title: "Achievement #778",
    reward: 500,
    description: "Consume 3890 pellets without taking damage.",
    criteria: {
      target: 7780,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0779",
    title: "Achievement #779",
    reward: 550,
    description: "Consume 3895 pellets without taking damage.",
    criteria: {
      target: 7790,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0780",
    title: "Achievement #780",
    reward: 100,
    description: "Consume 3900 pellets without taking damage.",
    criteria: {
      target: 7800,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0781",
    title: "Achievement #781",
    reward: 150,
    description: "Consume 3905 pellets without taking damage.",
    criteria: {
      target: 7810,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0782",
    title: "Achievement #782",
    reward: 200,
    description: "Consume 3910 pellets without taking damage.",
    criteria: {
      target: 7820,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0783",
    title: "Achievement #783",
    reward: 250,
    description: "Consume 3915 pellets without taking damage.",
    criteria: {
      target: 7830,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0784",
    title: "Achievement #784",
    reward: 300,
    description: "Consume 3920 pellets without taking damage.",
    criteria: {
      target: 7840,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0785",
    title: "Achievement #785",
    reward: 350,
    description: "Consume 3925 pellets without taking damage.",
    criteria: {
      target: 7850,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0786",
    title: "Achievement #786",
    reward: 400,
    description: "Consume 3930 pellets without taking damage.",
    criteria: {
      target: 7860,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0787",
    title: "Achievement #787",
    reward: 450,
    description: "Consume 3935 pellets without taking damage.",
    criteria: {
      target: 7870,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0788",
    title: "Achievement #788",
    reward: 500,
    description: "Consume 3940 pellets without taking damage.",
    criteria: {
      target: 7880,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0789",
    title: "Achievement #789",
    reward: 550,
    description: "Consume 3945 pellets without taking damage.",
    criteria: {
      target: 7890,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0790",
    title: "Achievement #790",
    reward: 100,
    description: "Consume 3950 pellets without taking damage.",
    criteria: {
      target: 7900,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0791",
    title: "Achievement #791",
    reward: 150,
    description: "Consume 3955 pellets without taking damage.",
    criteria: {
      target: 7910,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0792",
    title: "Achievement #792",
    reward: 200,
    description: "Consume 3960 pellets without taking damage.",
    criteria: {
      target: 7920,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0793",
    title: "Achievement #793",
    reward: 250,
    description: "Consume 3965 pellets without taking damage.",
    criteria: {
      target: 7930,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0794",
    title: "Achievement #794",
    reward: 300,
    description: "Consume 3970 pellets without taking damage.",
    criteria: {
      target: 7940,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0795",
    title: "Achievement #795",
    reward: 350,
    description: "Consume 3975 pellets without taking damage.",
    criteria: {
      target: 7950,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0796",
    title: "Achievement #796",
    reward: 400,
    description: "Consume 3980 pellets without taking damage.",
    criteria: {
      target: 7960,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0797",
    title: "Achievement #797",
    reward: 450,
    description: "Consume 3985 pellets without taking damage.",
    criteria: {
      target: 7970,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0798",
    title: "Achievement #798",
    reward: 500,
    description: "Consume 3990 pellets without taking damage.",
    criteria: {
      target: 7980,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0799",
    title: "Achievement #799",
    reward: 550,
    description: "Consume 3995 pellets without taking damage.",
    criteria: {
      target: 7990,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0800",
    title: "Achievement #800",
    reward: 100,
    description: "Consume 4000 pellets without taking damage.",
    criteria: {
      target: 8000,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0801",
    title: "Achievement #801",
    reward: 150,
    description: "Consume 4005 pellets without taking damage.",
    criteria: {
      target: 8010,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0802",
    title: "Achievement #802",
    reward: 200,
    description: "Consume 4010 pellets without taking damage.",
    criteria: {
      target: 8020,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0803",
    title: "Achievement #803",
    reward: 250,
    description: "Consume 4015 pellets without taking damage.",
    criteria: {
      target: 8030,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0804",
    title: "Achievement #804",
    reward: 300,
    description: "Consume 4020 pellets without taking damage.",
    criteria: {
      target: 8040,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0805",
    title: "Achievement #805",
    reward: 350,
    description: "Consume 4025 pellets without taking damage.",
    criteria: {
      target: 8050,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0806",
    title: "Achievement #806",
    reward: 400,
    description: "Consume 4030 pellets without taking damage.",
    criteria: {
      target: 8060,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0807",
    title: "Achievement #807",
    reward: 450,
    description: "Consume 4035 pellets without taking damage.",
    criteria: {
      target: 8070,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0808",
    title: "Achievement #808",
    reward: 500,
    description: "Consume 4040 pellets without taking damage.",
    criteria: {
      target: 8080,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0809",
    title: "Achievement #809",
    reward: 550,
    description: "Consume 4045 pellets without taking damage.",
    criteria: {
      target: 8090,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0810",
    title: "Achievement #810",
    reward: 100,
    description: "Consume 4050 pellets without taking damage.",
    criteria: {
      target: 8100,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0811",
    title: "Achievement #811",
    reward: 150,
    description: "Consume 4055 pellets without taking damage.",
    criteria: {
      target: 8110,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0812",
    title: "Achievement #812",
    reward: 200,
    description: "Consume 4060 pellets without taking damage.",
    criteria: {
      target: 8120,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0813",
    title: "Achievement #813",
    reward: 250,
    description: "Consume 4065 pellets without taking damage.",
    criteria: {
      target: 8130,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0814",
    title: "Achievement #814",
    reward: 300,
    description: "Consume 4070 pellets without taking damage.",
    criteria: {
      target: 8140,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0815",
    title: "Achievement #815",
    reward: 350,
    description: "Consume 4075 pellets without taking damage.",
    criteria: {
      target: 8150,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0816",
    title: "Achievement #816",
    reward: 400,
    description: "Consume 4080 pellets without taking damage.",
    criteria: {
      target: 8160,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0817",
    title: "Achievement #817",
    reward: 450,
    description: "Consume 4085 pellets without taking damage.",
    criteria: {
      target: 8170,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0818",
    title: "Achievement #818",
    reward: 500,
    description: "Consume 4090 pellets without taking damage.",
    criteria: {
      target: 8180,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0819",
    title: "Achievement #819",
    reward: 550,
    description: "Consume 4095 pellets without taking damage.",
    criteria: {
      target: 8190,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0820",
    title: "Achievement #820",
    reward: 100,
    description: "Consume 4100 pellets without taking damage.",
    criteria: {
      target: 8200,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0821",
    title: "Achievement #821",
    reward: 150,
    description: "Consume 4105 pellets without taking damage.",
    criteria: {
      target: 8210,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0822",
    title: "Achievement #822",
    reward: 200,
    description: "Consume 4110 pellets without taking damage.",
    criteria: {
      target: 8220,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0823",
    title: "Achievement #823",
    reward: 250,
    description: "Consume 4115 pellets without taking damage.",
    criteria: {
      target: 8230,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0824",
    title: "Achievement #824",
    reward: 300,
    description: "Consume 4120 pellets without taking damage.",
    criteria: {
      target: 8240,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0825",
    title: "Achievement #825",
    reward: 350,
    description: "Consume 4125 pellets without taking damage.",
    criteria: {
      target: 8250,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0826",
    title: "Achievement #826",
    reward: 400,
    description: "Consume 4130 pellets without taking damage.",
    criteria: {
      target: 8260,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0827",
    title: "Achievement #827",
    reward: 450,
    description: "Consume 4135 pellets without taking damage.",
    criteria: {
      target: 8270,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0828",
    title: "Achievement #828",
    reward: 500,
    description: "Consume 4140 pellets without taking damage.",
    criteria: {
      target: 8280,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0829",
    title: "Achievement #829",
    reward: 550,
    description: "Consume 4145 pellets without taking damage.",
    criteria: {
      target: 8290,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0830",
    title: "Achievement #830",
    reward: 100,
    description: "Consume 4150 pellets without taking damage.",
    criteria: {
      target: 8300,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0831",
    title: "Achievement #831",
    reward: 150,
    description: "Consume 4155 pellets without taking damage.",
    criteria: {
      target: 8310,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0832",
    title: "Achievement #832",
    reward: 200,
    description: "Consume 4160 pellets without taking damage.",
    criteria: {
      target: 8320,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0833",
    title: "Achievement #833",
    reward: 250,
    description: "Consume 4165 pellets without taking damage.",
    criteria: {
      target: 8330,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0834",
    title: "Achievement #834",
    reward: 300,
    description: "Consume 4170 pellets without taking damage.",
    criteria: {
      target: 8340,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0835",
    title: "Achievement #835",
    reward: 350,
    description: "Consume 4175 pellets without taking damage.",
    criteria: {
      target: 8350,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0836",
    title: "Achievement #836",
    reward: 400,
    description: "Consume 4180 pellets without taking damage.",
    criteria: {
      target: 8360,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0837",
    title: "Achievement #837",
    reward: 450,
    description: "Consume 4185 pellets without taking damage.",
    criteria: {
      target: 8370,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0838",
    title: "Achievement #838",
    reward: 500,
    description: "Consume 4190 pellets without taking damage.",
    criteria: {
      target: 8380,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0839",
    title: "Achievement #839",
    reward: 550,
    description: "Consume 4195 pellets without taking damage.",
    criteria: {
      target: 8390,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0840",
    title: "Achievement #840",
    reward: 100,
    description: "Consume 4200 pellets without taking damage.",
    criteria: {
      target: 8400,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0841",
    title: "Achievement #841",
    reward: 150,
    description: "Consume 4205 pellets without taking damage.",
    criteria: {
      target: 8410,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0842",
    title: "Achievement #842",
    reward: 200,
    description: "Consume 4210 pellets without taking damage.",
    criteria: {
      target: 8420,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0843",
    title: "Achievement #843",
    reward: 250,
    description: "Consume 4215 pellets without taking damage.",
    criteria: {
      target: 8430,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0844",
    title: "Achievement #844",
    reward: 300,
    description: "Consume 4220 pellets without taking damage.",
    criteria: {
      target: 8440,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0845",
    title: "Achievement #845",
    reward: 350,
    description: "Consume 4225 pellets without taking damage.",
    criteria: {
      target: 8450,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0846",
    title: "Achievement #846",
    reward: 400,
    description: "Consume 4230 pellets without taking damage.",
    criteria: {
      target: 8460,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0847",
    title: "Achievement #847",
    reward: 450,
    description: "Consume 4235 pellets without taking damage.",
    criteria: {
      target: 8470,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0848",
    title: "Achievement #848",
    reward: 500,
    description: "Consume 4240 pellets without taking damage.",
    criteria: {
      target: 8480,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0849",
    title: "Achievement #849",
    reward: 550,
    description: "Consume 4245 pellets without taking damage.",
    criteria: {
      target: 8490,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0850",
    title: "Achievement #850",
    reward: 100,
    description: "Consume 4250 pellets without taking damage.",
    criteria: {
      target: 8500,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0851",
    title: "Achievement #851",
    reward: 150,
    description: "Consume 4255 pellets without taking damage.",
    criteria: {
      target: 8510,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0852",
    title: "Achievement #852",
    reward: 200,
    description: "Consume 4260 pellets without taking damage.",
    criteria: {
      target: 8520,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0853",
    title: "Achievement #853",
    reward: 250,
    description: "Consume 4265 pellets without taking damage.",
    criteria: {
      target: 8530,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0854",
    title: "Achievement #854",
    reward: 300,
    description: "Consume 4270 pellets without taking damage.",
    criteria: {
      target: 8540,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0855",
    title: "Achievement #855",
    reward: 350,
    description: "Consume 4275 pellets without taking damage.",
    criteria: {
      target: 8550,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0856",
    title: "Achievement #856",
    reward: 400,
    description: "Consume 4280 pellets without taking damage.",
    criteria: {
      target: 8560,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0857",
    title: "Achievement #857",
    reward: 450,
    description: "Consume 4285 pellets without taking damage.",
    criteria: {
      target: 8570,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0858",
    title: "Achievement #858",
    reward: 500,
    description: "Consume 4290 pellets without taking damage.",
    criteria: {
      target: 8580,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0859",
    title: "Achievement #859",
    reward: 550,
    description: "Consume 4295 pellets without taking damage.",
    criteria: {
      target: 8590,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0860",
    title: "Achievement #860",
    reward: 100,
    description: "Consume 4300 pellets without taking damage.",
    criteria: {
      target: 8600,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0861",
    title: "Achievement #861",
    reward: 150,
    description: "Consume 4305 pellets without taking damage.",
    criteria: {
      target: 8610,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0862",
    title: "Achievement #862",
    reward: 200,
    description: "Consume 4310 pellets without taking damage.",
    criteria: {
      target: 8620,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0863",
    title: "Achievement #863",
    reward: 250,
    description: "Consume 4315 pellets without taking damage.",
    criteria: {
      target: 8630,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0864",
    title: "Achievement #864",
    reward: 300,
    description: "Consume 4320 pellets without taking damage.",
    criteria: {
      target: 8640,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0865",
    title: "Achievement #865",
    reward: 350,
    description: "Consume 4325 pellets without taking damage.",
    criteria: {
      target: 8650,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0866",
    title: "Achievement #866",
    reward: 400,
    description: "Consume 4330 pellets without taking damage.",
    criteria: {
      target: 8660,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0867",
    title: "Achievement #867",
    reward: 450,
    description: "Consume 4335 pellets without taking damage.",
    criteria: {
      target: 8670,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0868",
    title: "Achievement #868",
    reward: 500,
    description: "Consume 4340 pellets without taking damage.",
    criteria: {
      target: 8680,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0869",
    title: "Achievement #869",
    reward: 550,
    description: "Consume 4345 pellets without taking damage.",
    criteria: {
      target: 8690,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0870",
    title: "Achievement #870",
    reward: 100,
    description: "Consume 4350 pellets without taking damage.",
    criteria: {
      target: 8700,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0871",
    title: "Achievement #871",
    reward: 150,
    description: "Consume 4355 pellets without taking damage.",
    criteria: {
      target: 8710,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0872",
    title: "Achievement #872",
    reward: 200,
    description: "Consume 4360 pellets without taking damage.",
    criteria: {
      target: 8720,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0873",
    title: "Achievement #873",
    reward: 250,
    description: "Consume 4365 pellets without taking damage.",
    criteria: {
      target: 8730,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0874",
    title: "Achievement #874",
    reward: 300,
    description: "Consume 4370 pellets without taking damage.",
    criteria: {
      target: 8740,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0875",
    title: "Achievement #875",
    reward: 350,
    description: "Consume 4375 pellets without taking damage.",
    criteria: {
      target: 8750,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0876",
    title: "Achievement #876",
    reward: 400,
    description: "Consume 4380 pellets without taking damage.",
    criteria: {
      target: 8760,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0877",
    title: "Achievement #877",
    reward: 450,
    description: "Consume 4385 pellets without taking damage.",
    criteria: {
      target: 8770,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0878",
    title: "Achievement #878",
    reward: 500,
    description: "Consume 4390 pellets without taking damage.",
    criteria: {
      target: 8780,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0879",
    title: "Achievement #879",
    reward: 550,
    description: "Consume 4395 pellets without taking damage.",
    criteria: {
      target: 8790,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0880",
    title: "Achievement #880",
    reward: 100,
    description: "Consume 4400 pellets without taking damage.",
    criteria: {
      target: 8800,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0881",
    title: "Achievement #881",
    reward: 150,
    description: "Consume 4405 pellets without taking damage.",
    criteria: {
      target: 8810,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0882",
    title: "Achievement #882",
    reward: 200,
    description: "Consume 4410 pellets without taking damage.",
    criteria: {
      target: 8820,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0883",
    title: "Achievement #883",
    reward: 250,
    description: "Consume 4415 pellets without taking damage.",
    criteria: {
      target: 8830,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0884",
    title: "Achievement #884",
    reward: 300,
    description: "Consume 4420 pellets without taking damage.",
    criteria: {
      target: 8840,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0885",
    title: "Achievement #885",
    reward: 350,
    description: "Consume 4425 pellets without taking damage.",
    criteria: {
      target: 8850,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0886",
    title: "Achievement #886",
    reward: 400,
    description: "Consume 4430 pellets without taking damage.",
    criteria: {
      target: 8860,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0887",
    title: "Achievement #887",
    reward: 450,
    description: "Consume 4435 pellets without taking damage.",
    criteria: {
      target: 8870,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0888",
    title: "Achievement #888",
    reward: 500,
    description: "Consume 4440 pellets without taking damage.",
    criteria: {
      target: 8880,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0889",
    title: "Achievement #889",
    reward: 550,
    description: "Consume 4445 pellets without taking damage.",
    criteria: {
      target: 8890,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0890",
    title: "Achievement #890",
    reward: 100,
    description: "Consume 4450 pellets without taking damage.",
    criteria: {
      target: 8900,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0891",
    title: "Achievement #891",
    reward: 150,
    description: "Consume 4455 pellets without taking damage.",
    criteria: {
      target: 8910,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0892",
    title: "Achievement #892",
    reward: 200,
    description: "Consume 4460 pellets without taking damage.",
    criteria: {
      target: 8920,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0893",
    title: "Achievement #893",
    reward: 250,
    description: "Consume 4465 pellets without taking damage.",
    criteria: {
      target: 8930,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0894",
    title: "Achievement #894",
    reward: 300,
    description: "Consume 4470 pellets without taking damage.",
    criteria: {
      target: 8940,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0895",
    title: "Achievement #895",
    reward: 350,
    description: "Consume 4475 pellets without taking damage.",
    criteria: {
      target: 8950,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0896",
    title: "Achievement #896",
    reward: 400,
    description: "Consume 4480 pellets without taking damage.",
    criteria: {
      target: 8960,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0897",
    title: "Achievement #897",
    reward: 450,
    description: "Consume 4485 pellets without taking damage.",
    criteria: {
      target: 8970,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0898",
    title: "Achievement #898",
    reward: 500,
    description: "Consume 4490 pellets without taking damage.",
    criteria: {
      target: 8980,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0899",
    title: "Achievement #899",
    reward: 550,
    description: "Consume 4495 pellets without taking damage.",
    criteria: {
      target: 8990,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0900",
    title: "Achievement #900",
    reward: 100,
    description: "Consume 4500 pellets without taking damage.",
    criteria: {
      target: 9000,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0901",
    title: "Achievement #901",
    reward: 150,
    description: "Consume 4505 pellets without taking damage.",
    criteria: {
      target: 9010,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0902",
    title: "Achievement #902",
    reward: 200,
    description: "Consume 4510 pellets without taking damage.",
    criteria: {
      target: 9020,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0903",
    title: "Achievement #903",
    reward: 250,
    description: "Consume 4515 pellets without taking damage.",
    criteria: {
      target: 9030,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0904",
    title: "Achievement #904",
    reward: 300,
    description: "Consume 4520 pellets without taking damage.",
    criteria: {
      target: 9040,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0905",
    title: "Achievement #905",
    reward: 350,
    description: "Consume 4525 pellets without taking damage.",
    criteria: {
      target: 9050,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0906",
    title: "Achievement #906",
    reward: 400,
    description: "Consume 4530 pellets without taking damage.",
    criteria: {
      target: 9060,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0907",
    title: "Achievement #907",
    reward: 450,
    description: "Consume 4535 pellets without taking damage.",
    criteria: {
      target: 9070,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0908",
    title: "Achievement #908",
    reward: 500,
    description: "Consume 4540 pellets without taking damage.",
    criteria: {
      target: 9080,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0909",
    title: "Achievement #909",
    reward: 550,
    description: "Consume 4545 pellets without taking damage.",
    criteria: {
      target: 9090,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0910",
    title: "Achievement #910",
    reward: 100,
    description: "Consume 4550 pellets without taking damage.",
    criteria: {
      target: 9100,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0911",
    title: "Achievement #911",
    reward: 150,
    description: "Consume 4555 pellets without taking damage.",
    criteria: {
      target: 9110,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0912",
    title: "Achievement #912",
    reward: 200,
    description: "Consume 4560 pellets without taking damage.",
    criteria: {
      target: 9120,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0913",
    title: "Achievement #913",
    reward: 250,
    description: "Consume 4565 pellets without taking damage.",
    criteria: {
      target: 9130,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0914",
    title: "Achievement #914",
    reward: 300,
    description: "Consume 4570 pellets without taking damage.",
    criteria: {
      target: 9140,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0915",
    title: "Achievement #915",
    reward: 350,
    description: "Consume 4575 pellets without taking damage.",
    criteria: {
      target: 9150,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0916",
    title: "Achievement #916",
    reward: 400,
    description: "Consume 4580 pellets without taking damage.",
    criteria: {
      target: 9160,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0917",
    title: "Achievement #917",
    reward: 450,
    description: "Consume 4585 pellets without taking damage.",
    criteria: {
      target: 9170,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0918",
    title: "Achievement #918",
    reward: 500,
    description: "Consume 4590 pellets without taking damage.",
    criteria: {
      target: 9180,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0919",
    title: "Achievement #919",
    reward: 550,
    description: "Consume 4595 pellets without taking damage.",
    criteria: {
      target: 9190,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0920",
    title: "Achievement #920",
    reward: 100,
    description: "Consume 4600 pellets without taking damage.",
    criteria: {
      target: 9200,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0921",
    title: "Achievement #921",
    reward: 150,
    description: "Consume 4605 pellets without taking damage.",
    criteria: {
      target: 9210,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0922",
    title: "Achievement #922",
    reward: 200,
    description: "Consume 4610 pellets without taking damage.",
    criteria: {
      target: 9220,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0923",
    title: "Achievement #923",
    reward: 250,
    description: "Consume 4615 pellets without taking damage.",
    criteria: {
      target: 9230,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0924",
    title: "Achievement #924",
    reward: 300,
    description: "Consume 4620 pellets without taking damage.",
    criteria: {
      target: 9240,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0925",
    title: "Achievement #925",
    reward: 350,
    description: "Consume 4625 pellets without taking damage.",
    criteria: {
      target: 9250,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0926",
    title: "Achievement #926",
    reward: 400,
    description: "Consume 4630 pellets without taking damage.",
    criteria: {
      target: 9260,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0927",
    title: "Achievement #927",
    reward: 450,
    description: "Consume 4635 pellets without taking damage.",
    criteria: {
      target: 9270,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0928",
    title: "Achievement #928",
    reward: 500,
    description: "Consume 4640 pellets without taking damage.",
    criteria: {
      target: 9280,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0929",
    title: "Achievement #929",
    reward: 550,
    description: "Consume 4645 pellets without taking damage.",
    criteria: {
      target: 9290,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0930",
    title: "Achievement #930",
    reward: 100,
    description: "Consume 4650 pellets without taking damage.",
    criteria: {
      target: 9300,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0931",
    title: "Achievement #931",
    reward: 150,
    description: "Consume 4655 pellets without taking damage.",
    criteria: {
      target: 9310,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0932",
    title: "Achievement #932",
    reward: 200,
    description: "Consume 4660 pellets without taking damage.",
    criteria: {
      target: 9320,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0933",
    title: "Achievement #933",
    reward: 250,
    description: "Consume 4665 pellets without taking damage.",
    criteria: {
      target: 9330,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0934",
    title: "Achievement #934",
    reward: 300,
    description: "Consume 4670 pellets without taking damage.",
    criteria: {
      target: 9340,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0935",
    title: "Achievement #935",
    reward: 350,
    description: "Consume 4675 pellets without taking damage.",
    criteria: {
      target: 9350,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0936",
    title: "Achievement #936",
    reward: 400,
    description: "Consume 4680 pellets without taking damage.",
    criteria: {
      target: 9360,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0937",
    title: "Achievement #937",
    reward: 450,
    description: "Consume 4685 pellets without taking damage.",
    criteria: {
      target: 9370,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0938",
    title: "Achievement #938",
    reward: 500,
    description: "Consume 4690 pellets without taking damage.",
    criteria: {
      target: 9380,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0939",
    title: "Achievement #939",
    reward: 550,
    description: "Consume 4695 pellets without taking damage.",
    criteria: {
      target: 9390,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0940",
    title: "Achievement #940",
    reward: 100,
    description: "Consume 4700 pellets without taking damage.",
    criteria: {
      target: 9400,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0941",
    title: "Achievement #941",
    reward: 150,
    description: "Consume 4705 pellets without taking damage.",
    criteria: {
      target: 9410,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0942",
    title: "Achievement #942",
    reward: 200,
    description: "Consume 4710 pellets without taking damage.",
    criteria: {
      target: 9420,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0943",
    title: "Achievement #943",
    reward: 250,
    description: "Consume 4715 pellets without taking damage.",
    criteria: {
      target: 9430,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0944",
    title: "Achievement #944",
    reward: 300,
    description: "Consume 4720 pellets without taking damage.",
    criteria: {
      target: 9440,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0945",
    title: "Achievement #945",
    reward: 350,
    description: "Consume 4725 pellets without taking damage.",
    criteria: {
      target: 9450,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0946",
    title: "Achievement #946",
    reward: 400,
    description: "Consume 4730 pellets without taking damage.",
    criteria: {
      target: 9460,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0947",
    title: "Achievement #947",
    reward: 450,
    description: "Consume 4735 pellets without taking damage.",
    criteria: {
      target: 9470,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0948",
    title: "Achievement #948",
    reward: 500,
    description: "Consume 4740 pellets without taking damage.",
    criteria: {
      target: 9480,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0949",
    title: "Achievement #949",
    reward: 550,
    description: "Consume 4745 pellets without taking damage.",
    criteria: {
      target: 9490,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0950",
    title: "Achievement #950",
    reward: 100,
    description: "Consume 4750 pellets without taking damage.",
    criteria: {
      target: 9500,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0951",
    title: "Achievement #951",
    reward: 150,
    description: "Consume 4755 pellets without taking damage.",
    criteria: {
      target: 9510,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0952",
    title: "Achievement #952",
    reward: 200,
    description: "Consume 4760 pellets without taking damage.",
    criteria: {
      target: 9520,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0953",
    title: "Achievement #953",
    reward: 250,
    description: "Consume 4765 pellets without taking damage.",
    criteria: {
      target: 9530,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0954",
    title: "Achievement #954",
    reward: 300,
    description: "Consume 4770 pellets without taking damage.",
    criteria: {
      target: 9540,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0955",
    title: "Achievement #955",
    reward: 350,
    description: "Consume 4775 pellets without taking damage.",
    criteria: {
      target: 9550,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0956",
    title: "Achievement #956",
    reward: 400,
    description: "Consume 4780 pellets without taking damage.",
    criteria: {
      target: 9560,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0957",
    title: "Achievement #957",
    reward: 450,
    description: "Consume 4785 pellets without taking damage.",
    criteria: {
      target: 9570,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0958",
    title: "Achievement #958",
    reward: 500,
    description: "Consume 4790 pellets without taking damage.",
    criteria: {
      target: 9580,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0959",
    title: "Achievement #959",
    reward: 550,
    description: "Consume 4795 pellets without taking damage.",
    criteria: {
      target: 9590,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0960",
    title: "Achievement #960",
    reward: 100,
    description: "Consume 4800 pellets without taking damage.",
    criteria: {
      target: 9600,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0961",
    title: "Achievement #961",
    reward: 150,
    description: "Consume 4805 pellets without taking damage.",
    criteria: {
      target: 9610,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0962",
    title: "Achievement #962",
    reward: 200,
    description: "Consume 4810 pellets without taking damage.",
    criteria: {
      target: 9620,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0963",
    title: "Achievement #963",
    reward: 250,
    description: "Consume 4815 pellets without taking damage.",
    criteria: {
      target: 9630,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0964",
    title: "Achievement #964",
    reward: 300,
    description: "Consume 4820 pellets without taking damage.",
    criteria: {
      target: 9640,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0965",
    title: "Achievement #965",
    reward: 350,
    description: "Consume 4825 pellets without taking damage.",
    criteria: {
      target: 9650,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0966",
    title: "Achievement #966",
    reward: 400,
    description: "Consume 4830 pellets without taking damage.",
    criteria: {
      target: 9660,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0967",
    title: "Achievement #967",
    reward: 450,
    description: "Consume 4835 pellets without taking damage.",
    criteria: {
      target: 9670,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0968",
    title: "Achievement #968",
    reward: 500,
    description: "Consume 4840 pellets without taking damage.",
    criteria: {
      target: 9680,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0969",
    title: "Achievement #969",
    reward: 550,
    description: "Consume 4845 pellets without taking damage.",
    criteria: {
      target: 9690,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0970",
    title: "Achievement #970",
    reward: 100,
    description: "Consume 4850 pellets without taking damage.",
    criteria: {
      target: 9700,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0971",
    title: "Achievement #971",
    reward: 150,
    description: "Consume 4855 pellets without taking damage.",
    criteria: {
      target: 9710,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0972",
    title: "Achievement #972",
    reward: 200,
    description: "Consume 4860 pellets without taking damage.",
    criteria: {
      target: 9720,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0973",
    title: "Achievement #973",
    reward: 250,
    description: "Consume 4865 pellets without taking damage.",
    criteria: {
      target: 9730,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0974",
    title: "Achievement #974",
    reward: 300,
    description: "Consume 4870 pellets without taking damage.",
    criteria: {
      target: 9740,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0975",
    title: "Achievement #975",
    reward: 350,
    description: "Consume 4875 pellets without taking damage.",
    criteria: {
      target: 9750,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0976",
    title: "Achievement #976",
    reward: 400,
    description: "Consume 4880 pellets without taking damage.",
    criteria: {
      target: 9760,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0977",
    title: "Achievement #977",
    reward: 450,
    description: "Consume 4885 pellets without taking damage.",
    criteria: {
      target: 9770,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0978",
    title: "Achievement #978",
    reward: 500,
    description: "Consume 4890 pellets without taking damage.",
    criteria: {
      target: 9780,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0979",
    title: "Achievement #979",
    reward: 550,
    description: "Consume 4895 pellets without taking damage.",
    criteria: {
      target: 9790,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0980",
    title: "Achievement #980",
    reward: 100,
    description: "Consume 4900 pellets without taking damage.",
    criteria: {
      target: 9800,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0981",
    title: "Achievement #981",
    reward: 150,
    description: "Consume 4905 pellets without taking damage.",
    criteria: {
      target: 9810,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0982",
    title: "Achievement #982",
    reward: 200,
    description: "Consume 4910 pellets without taking damage.",
    criteria: {
      target: 9820,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0983",
    title: "Achievement #983",
    reward: 250,
    description: "Consume 4915 pellets without taking damage.",
    criteria: {
      target: 9830,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0984",
    title: "Achievement #984",
    reward: 300,
    description: "Consume 4920 pellets without taking damage.",
    criteria: {
      target: 9840,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0985",
    title: "Achievement #985",
    reward: 350,
    description: "Consume 4925 pellets without taking damage.",
    criteria: {
      target: 9850,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0986",
    title: "Achievement #986",
    reward: 400,
    description: "Consume 4930 pellets without taking damage.",
    criteria: {
      target: 9860,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0987",
    title: "Achievement #987",
    reward: 450,
    description: "Consume 4935 pellets without taking damage.",
    criteria: {
      target: 9870,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0988",
    title: "Achievement #988",
    reward: 500,
    description: "Consume 4940 pellets without taking damage.",
    criteria: {
      target: 9880,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0989",
    title: "Achievement #989",
    reward: 550,
    description: "Consume 4945 pellets without taking damage.",
    criteria: {
      target: 9890,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0990",
    title: "Achievement #990",
    reward: 100,
    description: "Consume 4950 pellets without taking damage.",
    criteria: {
      target: 9900,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0991",
    title: "Achievement #991",
    reward: 150,
    description: "Consume 4955 pellets without taking damage.",
    criteria: {
      target: 9910,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0992",
    title: "Achievement #992",
    reward: 200,
    description: "Consume 4960 pellets without taking damage.",
    criteria: {
      target: 9920,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0993",
    title: "Achievement #993",
    reward: 250,
    description: "Consume 4965 pellets without taking damage.",
    criteria: {
      target: 9930,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0994",
    title: "Achievement #994",
    reward: 300,
    description: "Consume 4970 pellets without taking damage.",
    criteria: {
      target: 9940,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0995",
    title: "Achievement #995",
    reward: 350,
    description: "Consume 4975 pellets without taking damage.",
    criteria: {
      target: 9950,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-0996",
    title: "Achievement #996",
    reward: 400,
    description: "Consume 4980 pellets without taking damage.",
    criteria: {
      target: 9960,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-0997",
    title: "Achievement #997",
    reward: 450,
    description: "Consume 4985 pellets without taking damage.",
    criteria: {
      target: 9970,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-0998",
    title: "Achievement #998",
    reward: 500,
    description: "Consume 4990 pellets without taking damage.",
    criteria: {
      target: 9980,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-0999",
    title: "Achievement #999",
    reward: 550,
    description: "Consume 4995 pellets without taking damage.",
    criteria: {
      target: 9990,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1000",
    title: "Achievement #1000",
    reward: 100,
    description: "Consume 5000 pellets without taking damage.",
    criteria: {
      target: 10000,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1001",
    title: "Achievement #1001",
    reward: 150,
    description: "Consume 5005 pellets without taking damage.",
    criteria: {
      target: 10010,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1002",
    title: "Achievement #1002",
    reward: 200,
    description: "Consume 5010 pellets without taking damage.",
    criteria: {
      target: 10020,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1003",
    title: "Achievement #1003",
    reward: 250,
    description: "Consume 5015 pellets without taking damage.",
    criteria: {
      target: 10030,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1004",
    title: "Achievement #1004",
    reward: 300,
    description: "Consume 5020 pellets without taking damage.",
    criteria: {
      target: 10040,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1005",
    title: "Achievement #1005",
    reward: 350,
    description: "Consume 5025 pellets without taking damage.",
    criteria: {
      target: 10050,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1006",
    title: "Achievement #1006",
    reward: 400,
    description: "Consume 5030 pellets without taking damage.",
    criteria: {
      target: 10060,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1007",
    title: "Achievement #1007",
    reward: 450,
    description: "Consume 5035 pellets without taking damage.",
    criteria: {
      target: 10070,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1008",
    title: "Achievement #1008",
    reward: 500,
    description: "Consume 5040 pellets without taking damage.",
    criteria: {
      target: 10080,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1009",
    title: "Achievement #1009",
    reward: 550,
    description: "Consume 5045 pellets without taking damage.",
    criteria: {
      target: 10090,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1010",
    title: "Achievement #1010",
    reward: 100,
    description: "Consume 5050 pellets without taking damage.",
    criteria: {
      target: 10100,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1011",
    title: "Achievement #1011",
    reward: 150,
    description: "Consume 5055 pellets without taking damage.",
    criteria: {
      target: 10110,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1012",
    title: "Achievement #1012",
    reward: 200,
    description: "Consume 5060 pellets without taking damage.",
    criteria: {
      target: 10120,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1013",
    title: "Achievement #1013",
    reward: 250,
    description: "Consume 5065 pellets without taking damage.",
    criteria: {
      target: 10130,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1014",
    title: "Achievement #1014",
    reward: 300,
    description: "Consume 5070 pellets without taking damage.",
    criteria: {
      target: 10140,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1015",
    title: "Achievement #1015",
    reward: 350,
    description: "Consume 5075 pellets without taking damage.",
    criteria: {
      target: 10150,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1016",
    title: "Achievement #1016",
    reward: 400,
    description: "Consume 5080 pellets without taking damage.",
    criteria: {
      target: 10160,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1017",
    title: "Achievement #1017",
    reward: 450,
    description: "Consume 5085 pellets without taking damage.",
    criteria: {
      target: 10170,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1018",
    title: "Achievement #1018",
    reward: 500,
    description: "Consume 5090 pellets without taking damage.",
    criteria: {
      target: 10180,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1019",
    title: "Achievement #1019",
    reward: 550,
    description: "Consume 5095 pellets without taking damage.",
    criteria: {
      target: 10190,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1020",
    title: "Achievement #1020",
    reward: 100,
    description: "Consume 5100 pellets without taking damage.",
    criteria: {
      target: 10200,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1021",
    title: "Achievement #1021",
    reward: 150,
    description: "Consume 5105 pellets without taking damage.",
    criteria: {
      target: 10210,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1022",
    title: "Achievement #1022",
    reward: 200,
    description: "Consume 5110 pellets without taking damage.",
    criteria: {
      target: 10220,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1023",
    title: "Achievement #1023",
    reward: 250,
    description: "Consume 5115 pellets without taking damage.",
    criteria: {
      target: 10230,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1024",
    title: "Achievement #1024",
    reward: 300,
    description: "Consume 5120 pellets without taking damage.",
    criteria: {
      target: 10240,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1025",
    title: "Achievement #1025",
    reward: 350,
    description: "Consume 5125 pellets without taking damage.",
    criteria: {
      target: 10250,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1026",
    title: "Achievement #1026",
    reward: 400,
    description: "Consume 5130 pellets without taking damage.",
    criteria: {
      target: 10260,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1027",
    title: "Achievement #1027",
    reward: 450,
    description: "Consume 5135 pellets without taking damage.",
    criteria: {
      target: 10270,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1028",
    title: "Achievement #1028",
    reward: 500,
    description: "Consume 5140 pellets without taking damage.",
    criteria: {
      target: 10280,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1029",
    title: "Achievement #1029",
    reward: 550,
    description: "Consume 5145 pellets without taking damage.",
    criteria: {
      target: 10290,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1030",
    title: "Achievement #1030",
    reward: 100,
    description: "Consume 5150 pellets without taking damage.",
    criteria: {
      target: 10300,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1031",
    title: "Achievement #1031",
    reward: 150,
    description: "Consume 5155 pellets without taking damage.",
    criteria: {
      target: 10310,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1032",
    title: "Achievement #1032",
    reward: 200,
    description: "Consume 5160 pellets without taking damage.",
    criteria: {
      target: 10320,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1033",
    title: "Achievement #1033",
    reward: 250,
    description: "Consume 5165 pellets without taking damage.",
    criteria: {
      target: 10330,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1034",
    title: "Achievement #1034",
    reward: 300,
    description: "Consume 5170 pellets without taking damage.",
    criteria: {
      target: 10340,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1035",
    title: "Achievement #1035",
    reward: 350,
    description: "Consume 5175 pellets without taking damage.",
    criteria: {
      target: 10350,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1036",
    title: "Achievement #1036",
    reward: 400,
    description: "Consume 5180 pellets without taking damage.",
    criteria: {
      target: 10360,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1037",
    title: "Achievement #1037",
    reward: 450,
    description: "Consume 5185 pellets without taking damage.",
    criteria: {
      target: 10370,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1038",
    title: "Achievement #1038",
    reward: 500,
    description: "Consume 5190 pellets without taking damage.",
    criteria: {
      target: 10380,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1039",
    title: "Achievement #1039",
    reward: 550,
    description: "Consume 5195 pellets without taking damage.",
    criteria: {
      target: 10390,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1040",
    title: "Achievement #1040",
    reward: 100,
    description: "Consume 5200 pellets without taking damage.",
    criteria: {
      target: 10400,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1041",
    title: "Achievement #1041",
    reward: 150,
    description: "Consume 5205 pellets without taking damage.",
    criteria: {
      target: 10410,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1042",
    title: "Achievement #1042",
    reward: 200,
    description: "Consume 5210 pellets without taking damage.",
    criteria: {
      target: 10420,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1043",
    title: "Achievement #1043",
    reward: 250,
    description: "Consume 5215 pellets without taking damage.",
    criteria: {
      target: 10430,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1044",
    title: "Achievement #1044",
    reward: 300,
    description: "Consume 5220 pellets without taking damage.",
    criteria: {
      target: 10440,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1045",
    title: "Achievement #1045",
    reward: 350,
    description: "Consume 5225 pellets without taking damage.",
    criteria: {
      target: 10450,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1046",
    title: "Achievement #1046",
    reward: 400,
    description: "Consume 5230 pellets without taking damage.",
    criteria: {
      target: 10460,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1047",
    title: "Achievement #1047",
    reward: 450,
    description: "Consume 5235 pellets without taking damage.",
    criteria: {
      target: 10470,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1048",
    title: "Achievement #1048",
    reward: 500,
    description: "Consume 5240 pellets without taking damage.",
    criteria: {
      target: 10480,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1049",
    title: "Achievement #1049",
    reward: 550,
    description: "Consume 5245 pellets without taking damage.",
    criteria: {
      target: 10490,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1050",
    title: "Achievement #1050",
    reward: 100,
    description: "Consume 5250 pellets without taking damage.",
    criteria: {
      target: 10500,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1051",
    title: "Achievement #1051",
    reward: 150,
    description: "Consume 5255 pellets without taking damage.",
    criteria: {
      target: 10510,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1052",
    title: "Achievement #1052",
    reward: 200,
    description: "Consume 5260 pellets without taking damage.",
    criteria: {
      target: 10520,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1053",
    title: "Achievement #1053",
    reward: 250,
    description: "Consume 5265 pellets without taking damage.",
    criteria: {
      target: 10530,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1054",
    title: "Achievement #1054",
    reward: 300,
    description: "Consume 5270 pellets without taking damage.",
    criteria: {
      target: 10540,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1055",
    title: "Achievement #1055",
    reward: 350,
    description: "Consume 5275 pellets without taking damage.",
    criteria: {
      target: 10550,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1056",
    title: "Achievement #1056",
    reward: 400,
    description: "Consume 5280 pellets without taking damage.",
    criteria: {
      target: 10560,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1057",
    title: "Achievement #1057",
    reward: 450,
    description: "Consume 5285 pellets without taking damage.",
    criteria: {
      target: 10570,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1058",
    title: "Achievement #1058",
    reward: 500,
    description: "Consume 5290 pellets without taking damage.",
    criteria: {
      target: 10580,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1059",
    title: "Achievement #1059",
    reward: 550,
    description: "Consume 5295 pellets without taking damage.",
    criteria: {
      target: 10590,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1060",
    title: "Achievement #1060",
    reward: 100,
    description: "Consume 5300 pellets without taking damage.",
    criteria: {
      target: 10600,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1061",
    title: "Achievement #1061",
    reward: 150,
    description: "Consume 5305 pellets without taking damage.",
    criteria: {
      target: 10610,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1062",
    title: "Achievement #1062",
    reward: 200,
    description: "Consume 5310 pellets without taking damage.",
    criteria: {
      target: 10620,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1063",
    title: "Achievement #1063",
    reward: 250,
    description: "Consume 5315 pellets without taking damage.",
    criteria: {
      target: 10630,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1064",
    title: "Achievement #1064",
    reward: 300,
    description: "Consume 5320 pellets without taking damage.",
    criteria: {
      target: 10640,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1065",
    title: "Achievement #1065",
    reward: 350,
    description: "Consume 5325 pellets without taking damage.",
    criteria: {
      target: 10650,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1066",
    title: "Achievement #1066",
    reward: 400,
    description: "Consume 5330 pellets without taking damage.",
    criteria: {
      target: 10660,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1067",
    title: "Achievement #1067",
    reward: 450,
    description: "Consume 5335 pellets without taking damage.",
    criteria: {
      target: 10670,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1068",
    title: "Achievement #1068",
    reward: 500,
    description: "Consume 5340 pellets without taking damage.",
    criteria: {
      target: 10680,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1069",
    title: "Achievement #1069",
    reward: 550,
    description: "Consume 5345 pellets without taking damage.",
    criteria: {
      target: 10690,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1070",
    title: "Achievement #1070",
    reward: 100,
    description: "Consume 5350 pellets without taking damage.",
    criteria: {
      target: 10700,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1071",
    title: "Achievement #1071",
    reward: 150,
    description: "Consume 5355 pellets without taking damage.",
    criteria: {
      target: 10710,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1072",
    title: "Achievement #1072",
    reward: 200,
    description: "Consume 5360 pellets without taking damage.",
    criteria: {
      target: 10720,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1073",
    title: "Achievement #1073",
    reward: 250,
    description: "Consume 5365 pellets without taking damage.",
    criteria: {
      target: 10730,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1074",
    title: "Achievement #1074",
    reward: 300,
    description: "Consume 5370 pellets without taking damage.",
    criteria: {
      target: 10740,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1075",
    title: "Achievement #1075",
    reward: 350,
    description: "Consume 5375 pellets without taking damage.",
    criteria: {
      target: 10750,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1076",
    title: "Achievement #1076",
    reward: 400,
    description: "Consume 5380 pellets without taking damage.",
    criteria: {
      target: 10760,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1077",
    title: "Achievement #1077",
    reward: 450,
    description: "Consume 5385 pellets without taking damage.",
    criteria: {
      target: 10770,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1078",
    title: "Achievement #1078",
    reward: 500,
    description: "Consume 5390 pellets without taking damage.",
    criteria: {
      target: 10780,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1079",
    title: "Achievement #1079",
    reward: 550,
    description: "Consume 5395 pellets without taking damage.",
    criteria: {
      target: 10790,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1080",
    title: "Achievement #1080",
    reward: 100,
    description: "Consume 5400 pellets without taking damage.",
    criteria: {
      target: 10800,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1081",
    title: "Achievement #1081",
    reward: 150,
    description: "Consume 5405 pellets without taking damage.",
    criteria: {
      target: 10810,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1082",
    title: "Achievement #1082",
    reward: 200,
    description: "Consume 5410 pellets without taking damage.",
    criteria: {
      target: 10820,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1083",
    title: "Achievement #1083",
    reward: 250,
    description: "Consume 5415 pellets without taking damage.",
    criteria: {
      target: 10830,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1084",
    title: "Achievement #1084",
    reward: 300,
    description: "Consume 5420 pellets without taking damage.",
    criteria: {
      target: 10840,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1085",
    title: "Achievement #1085",
    reward: 350,
    description: "Consume 5425 pellets without taking damage.",
    criteria: {
      target: 10850,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1086",
    title: "Achievement #1086",
    reward: 400,
    description: "Consume 5430 pellets without taking damage.",
    criteria: {
      target: 10860,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1087",
    title: "Achievement #1087",
    reward: 450,
    description: "Consume 5435 pellets without taking damage.",
    criteria: {
      target: 10870,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1088",
    title: "Achievement #1088",
    reward: 500,
    description: "Consume 5440 pellets without taking damage.",
    criteria: {
      target: 10880,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1089",
    title: "Achievement #1089",
    reward: 550,
    description: "Consume 5445 pellets without taking damage.",
    criteria: {
      target: 10890,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1090",
    title: "Achievement #1090",
    reward: 100,
    description: "Consume 5450 pellets without taking damage.",
    criteria: {
      target: 10900,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1091",
    title: "Achievement #1091",
    reward: 150,
    description: "Consume 5455 pellets without taking damage.",
    criteria: {
      target: 10910,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1092",
    title: "Achievement #1092",
    reward: 200,
    description: "Consume 5460 pellets without taking damage.",
    criteria: {
      target: 10920,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1093",
    title: "Achievement #1093",
    reward: 250,
    description: "Consume 5465 pellets without taking damage.",
    criteria: {
      target: 10930,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1094",
    title: "Achievement #1094",
    reward: 300,
    description: "Consume 5470 pellets without taking damage.",
    criteria: {
      target: 10940,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1095",
    title: "Achievement #1095",
    reward: 350,
    description: "Consume 5475 pellets without taking damage.",
    criteria: {
      target: 10950,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1096",
    title: "Achievement #1096",
    reward: 400,
    description: "Consume 5480 pellets without taking damage.",
    criteria: {
      target: 10960,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1097",
    title: "Achievement #1097",
    reward: 450,
    description: "Consume 5485 pellets without taking damage.",
    criteria: {
      target: 10970,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1098",
    title: "Achievement #1098",
    reward: 500,
    description: "Consume 5490 pellets without taking damage.",
    criteria: {
      target: 10980,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1099",
    title: "Achievement #1099",
    reward: 550,
    description: "Consume 5495 pellets without taking damage.",
    criteria: {
      target: 10990,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1100",
    title: "Achievement #1100",
    reward: 100,
    description: "Consume 5500 pellets without taking damage.",
    criteria: {
      target: 11000,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1101",
    title: "Achievement #1101",
    reward: 150,
    description: "Consume 5505 pellets without taking damage.",
    criteria: {
      target: 11010,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1102",
    title: "Achievement #1102",
    reward: 200,
    description: "Consume 5510 pellets without taking damage.",
    criteria: {
      target: 11020,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1103",
    title: "Achievement #1103",
    reward: 250,
    description: "Consume 5515 pellets without taking damage.",
    criteria: {
      target: 11030,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1104",
    title: "Achievement #1104",
    reward: 300,
    description: "Consume 5520 pellets without taking damage.",
    criteria: {
      target: 11040,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1105",
    title: "Achievement #1105",
    reward: 350,
    description: "Consume 5525 pellets without taking damage.",
    criteria: {
      target: 11050,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1106",
    title: "Achievement #1106",
    reward: 400,
    description: "Consume 5530 pellets without taking damage.",
    criteria: {
      target: 11060,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1107",
    title: "Achievement #1107",
    reward: 450,
    description: "Consume 5535 pellets without taking damage.",
    criteria: {
      target: 11070,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1108",
    title: "Achievement #1108",
    reward: 500,
    description: "Consume 5540 pellets without taking damage.",
    criteria: {
      target: 11080,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1109",
    title: "Achievement #1109",
    reward: 550,
    description: "Consume 5545 pellets without taking damage.",
    criteria: {
      target: 11090,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1110",
    title: "Achievement #1110",
    reward: 100,
    description: "Consume 5550 pellets without taking damage.",
    criteria: {
      target: 11100,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1111",
    title: "Achievement #1111",
    reward: 150,
    description: "Consume 5555 pellets without taking damage.",
    criteria: {
      target: 11110,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1112",
    title: "Achievement #1112",
    reward: 200,
    description: "Consume 5560 pellets without taking damage.",
    criteria: {
      target: 11120,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1113",
    title: "Achievement #1113",
    reward: 250,
    description: "Consume 5565 pellets without taking damage.",
    criteria: {
      target: 11130,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1114",
    title: "Achievement #1114",
    reward: 300,
    description: "Consume 5570 pellets without taking damage.",
    criteria: {
      target: 11140,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1115",
    title: "Achievement #1115",
    reward: 350,
    description: "Consume 5575 pellets without taking damage.",
    criteria: {
      target: 11150,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1116",
    title: "Achievement #1116",
    reward: 400,
    description: "Consume 5580 pellets without taking damage.",
    criteria: {
      target: 11160,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1117",
    title: "Achievement #1117",
    reward: 450,
    description: "Consume 5585 pellets without taking damage.",
    criteria: {
      target: 11170,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1118",
    title: "Achievement #1118",
    reward: 500,
    description: "Consume 5590 pellets without taking damage.",
    criteria: {
      target: 11180,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1119",
    title: "Achievement #1119",
    reward: 550,
    description: "Consume 5595 pellets without taking damage.",
    criteria: {
      target: 11190,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1120",
    title: "Achievement #1120",
    reward: 100,
    description: "Consume 5600 pellets without taking damage.",
    criteria: {
      target: 11200,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1121",
    title: "Achievement #1121",
    reward: 150,
    description: "Consume 5605 pellets without taking damage.",
    criteria: {
      target: 11210,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1122",
    title: "Achievement #1122",
    reward: 200,
    description: "Consume 5610 pellets without taking damage.",
    criteria: {
      target: 11220,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1123",
    title: "Achievement #1123",
    reward: 250,
    description: "Consume 5615 pellets without taking damage.",
    criteria: {
      target: 11230,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1124",
    title: "Achievement #1124",
    reward: 300,
    description: "Consume 5620 pellets without taking damage.",
    criteria: {
      target: 11240,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1125",
    title: "Achievement #1125",
    reward: 350,
    description: "Consume 5625 pellets without taking damage.",
    criteria: {
      target: 11250,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1126",
    title: "Achievement #1126",
    reward: 400,
    description: "Consume 5630 pellets without taking damage.",
    criteria: {
      target: 11260,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1127",
    title: "Achievement #1127",
    reward: 450,
    description: "Consume 5635 pellets without taking damage.",
    criteria: {
      target: 11270,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1128",
    title: "Achievement #1128",
    reward: 500,
    description: "Consume 5640 pellets without taking damage.",
    criteria: {
      target: 11280,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1129",
    title: "Achievement #1129",
    reward: 550,
    description: "Consume 5645 pellets without taking damage.",
    criteria: {
      target: 11290,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1130",
    title: "Achievement #1130",
    reward: 100,
    description: "Consume 5650 pellets without taking damage.",
    criteria: {
      target: 11300,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1131",
    title: "Achievement #1131",
    reward: 150,
    description: "Consume 5655 pellets without taking damage.",
    criteria: {
      target: 11310,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1132",
    title: "Achievement #1132",
    reward: 200,
    description: "Consume 5660 pellets without taking damage.",
    criteria: {
      target: 11320,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1133",
    title: "Achievement #1133",
    reward: 250,
    description: "Consume 5665 pellets without taking damage.",
    criteria: {
      target: 11330,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1134",
    title: "Achievement #1134",
    reward: 300,
    description: "Consume 5670 pellets without taking damage.",
    criteria: {
      target: 11340,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1135",
    title: "Achievement #1135",
    reward: 350,
    description: "Consume 5675 pellets without taking damage.",
    criteria: {
      target: 11350,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1136",
    title: "Achievement #1136",
    reward: 400,
    description: "Consume 5680 pellets without taking damage.",
    criteria: {
      target: 11360,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1137",
    title: "Achievement #1137",
    reward: 450,
    description: "Consume 5685 pellets without taking damage.",
    criteria: {
      target: 11370,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1138",
    title: "Achievement #1138",
    reward: 500,
    description: "Consume 5690 pellets without taking damage.",
    criteria: {
      target: 11380,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1139",
    title: "Achievement #1139",
    reward: 550,
    description: "Consume 5695 pellets without taking damage.",
    criteria: {
      target: 11390,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1140",
    title: "Achievement #1140",
    reward: 100,
    description: "Consume 5700 pellets without taking damage.",
    criteria: {
      target: 11400,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1141",
    title: "Achievement #1141",
    reward: 150,
    description: "Consume 5705 pellets without taking damage.",
    criteria: {
      target: 11410,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1142",
    title: "Achievement #1142",
    reward: 200,
    description: "Consume 5710 pellets without taking damage.",
    criteria: {
      target: 11420,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1143",
    title: "Achievement #1143",
    reward: 250,
    description: "Consume 5715 pellets without taking damage.",
    criteria: {
      target: 11430,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1144",
    title: "Achievement #1144",
    reward: 300,
    description: "Consume 5720 pellets without taking damage.",
    criteria: {
      target: 11440,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1145",
    title: "Achievement #1145",
    reward: 350,
    description: "Consume 5725 pellets without taking damage.",
    criteria: {
      target: 11450,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1146",
    title: "Achievement #1146",
    reward: 400,
    description: "Consume 5730 pellets without taking damage.",
    criteria: {
      target: 11460,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1147",
    title: "Achievement #1147",
    reward: 450,
    description: "Consume 5735 pellets without taking damage.",
    criteria: {
      target: 11470,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1148",
    title: "Achievement #1148",
    reward: 500,
    description: "Consume 5740 pellets without taking damage.",
    criteria: {
      target: 11480,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1149",
    title: "Achievement #1149",
    reward: 550,
    description: "Consume 5745 pellets without taking damage.",
    criteria: {
      target: 11490,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1150",
    title: "Achievement #1150",
    reward: 100,
    description: "Consume 5750 pellets without taking damage.",
    criteria: {
      target: 11500,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1151",
    title: "Achievement #1151",
    reward: 150,
    description: "Consume 5755 pellets without taking damage.",
    criteria: {
      target: 11510,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1152",
    title: "Achievement #1152",
    reward: 200,
    description: "Consume 5760 pellets without taking damage.",
    criteria: {
      target: 11520,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1153",
    title: "Achievement #1153",
    reward: 250,
    description: "Consume 5765 pellets without taking damage.",
    criteria: {
      target: 11530,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1154",
    title: "Achievement #1154",
    reward: 300,
    description: "Consume 5770 pellets without taking damage.",
    criteria: {
      target: 11540,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1155",
    title: "Achievement #1155",
    reward: 350,
    description: "Consume 5775 pellets without taking damage.",
    criteria: {
      target: 11550,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1156",
    title: "Achievement #1156",
    reward: 400,
    description: "Consume 5780 pellets without taking damage.",
    criteria: {
      target: 11560,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1157",
    title: "Achievement #1157",
    reward: 450,
    description: "Consume 5785 pellets without taking damage.",
    criteria: {
      target: 11570,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1158",
    title: "Achievement #1158",
    reward: 500,
    description: "Consume 5790 pellets without taking damage.",
    criteria: {
      target: 11580,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1159",
    title: "Achievement #1159",
    reward: 550,
    description: "Consume 5795 pellets without taking damage.",
    criteria: {
      target: 11590,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1160",
    title: "Achievement #1160",
    reward: 100,
    description: "Consume 5800 pellets without taking damage.",
    criteria: {
      target: 11600,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1161",
    title: "Achievement #1161",
    reward: 150,
    description: "Consume 5805 pellets without taking damage.",
    criteria: {
      target: 11610,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1162",
    title: "Achievement #1162",
    reward: 200,
    description: "Consume 5810 pellets without taking damage.",
    criteria: {
      target: 11620,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1163",
    title: "Achievement #1163",
    reward: 250,
    description: "Consume 5815 pellets without taking damage.",
    criteria: {
      target: 11630,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1164",
    title: "Achievement #1164",
    reward: 300,
    description: "Consume 5820 pellets without taking damage.",
    criteria: {
      target: 11640,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1165",
    title: "Achievement #1165",
    reward: 350,
    description: "Consume 5825 pellets without taking damage.",
    criteria: {
      target: 11650,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1166",
    title: "Achievement #1166",
    reward: 400,
    description: "Consume 5830 pellets without taking damage.",
    criteria: {
      target: 11660,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1167",
    title: "Achievement #1167",
    reward: 450,
    description: "Consume 5835 pellets without taking damage.",
    criteria: {
      target: 11670,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1168",
    title: "Achievement #1168",
    reward: 500,
    description: "Consume 5840 pellets without taking damage.",
    criteria: {
      target: 11680,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1169",
    title: "Achievement #1169",
    reward: 550,
    description: "Consume 5845 pellets without taking damage.",
    criteria: {
      target: 11690,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1170",
    title: "Achievement #1170",
    reward: 100,
    description: "Consume 5850 pellets without taking damage.",
    criteria: {
      target: 11700,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1171",
    title: "Achievement #1171",
    reward: 150,
    description: "Consume 5855 pellets without taking damage.",
    criteria: {
      target: 11710,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1172",
    title: "Achievement #1172",
    reward: 200,
    description: "Consume 5860 pellets without taking damage.",
    criteria: {
      target: 11720,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1173",
    title: "Achievement #1173",
    reward: 250,
    description: "Consume 5865 pellets without taking damage.",
    criteria: {
      target: 11730,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1174",
    title: "Achievement #1174",
    reward: 300,
    description: "Consume 5870 pellets without taking damage.",
    criteria: {
      target: 11740,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1175",
    title: "Achievement #1175",
    reward: 350,
    description: "Consume 5875 pellets without taking damage.",
    criteria: {
      target: 11750,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1176",
    title: "Achievement #1176",
    reward: 400,
    description: "Consume 5880 pellets without taking damage.",
    criteria: {
      target: 11760,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1177",
    title: "Achievement #1177",
    reward: 450,
    description: "Consume 5885 pellets without taking damage.",
    criteria: {
      target: 11770,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1178",
    title: "Achievement #1178",
    reward: 500,
    description: "Consume 5890 pellets without taking damage.",
    criteria: {
      target: 11780,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1179",
    title: "Achievement #1179",
    reward: 550,
    description: "Consume 5895 pellets without taking damage.",
    criteria: {
      target: 11790,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1180",
    title: "Achievement #1180",
    reward: 100,
    description: "Consume 5900 pellets without taking damage.",
    criteria: {
      target: 11800,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1181",
    title: "Achievement #1181",
    reward: 150,
    description: "Consume 5905 pellets without taking damage.",
    criteria: {
      target: 11810,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1182",
    title: "Achievement #1182",
    reward: 200,
    description: "Consume 5910 pellets without taking damage.",
    criteria: {
      target: 11820,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1183",
    title: "Achievement #1183",
    reward: 250,
    description: "Consume 5915 pellets without taking damage.",
    criteria: {
      target: 11830,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1184",
    title: "Achievement #1184",
    reward: 300,
    description: "Consume 5920 pellets without taking damage.",
    criteria: {
      target: 11840,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1185",
    title: "Achievement #1185",
    reward: 350,
    description: "Consume 5925 pellets without taking damage.",
    criteria: {
      target: 11850,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1186",
    title: "Achievement #1186",
    reward: 400,
    description: "Consume 5930 pellets without taking damage.",
    criteria: {
      target: 11860,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1187",
    title: "Achievement #1187",
    reward: 450,
    description: "Consume 5935 pellets without taking damage.",
    criteria: {
      target: 11870,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1188",
    title: "Achievement #1188",
    reward: 500,
    description: "Consume 5940 pellets without taking damage.",
    criteria: {
      target: 11880,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1189",
    title: "Achievement #1189",
    reward: 550,
    description: "Consume 5945 pellets without taking damage.",
    criteria: {
      target: 11890,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1190",
    title: "Achievement #1190",
    reward: 100,
    description: "Consume 5950 pellets without taking damage.",
    criteria: {
      target: 11900,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1191",
    title: "Achievement #1191",
    reward: 150,
    description: "Consume 5955 pellets without taking damage.",
    criteria: {
      target: 11910,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1192",
    title: "Achievement #1192",
    reward: 200,
    description: "Consume 5960 pellets without taking damage.",
    criteria: {
      target: 11920,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1193",
    title: "Achievement #1193",
    reward: 250,
    description: "Consume 5965 pellets without taking damage.",
    criteria: {
      target: 11930,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1194",
    title: "Achievement #1194",
    reward: 300,
    description: "Consume 5970 pellets without taking damage.",
    criteria: {
      target: 11940,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1195",
    title: "Achievement #1195",
    reward: 350,
    description: "Consume 5975 pellets without taking damage.",
    criteria: {
      target: 11950,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1196",
    title: "Achievement #1196",
    reward: 400,
    description: "Consume 5980 pellets without taking damage.",
    criteria: {
      target: 11960,
      tier: "PLATINUM"
    }
  },
  {
    id: "ACH-1197",
    title: "Achievement #1197",
    reward: 450,
    description: "Consume 5985 pellets without taking damage.",
    criteria: {
      target: 11970,
      tier: "GOLD"
    }
  },
  {
    id: "ACH-1198",
    title: "Achievement #1198",
    reward: 500,
    description: "Consume 5990 pellets without taking damage.",
    criteria: {
      target: 11980,
      tier: "SILVER"
    }
  },
  {
    id: "ACH-1199",
    title: "Achievement #1199",
    reward: 550,
    description: "Consume 5995 pellets without taking damage.",
    criteria: {
      target: 11990,
      tier: "BRONZE"
    }
  },
  {
    id: "ACH-1200",
    title: "Achievement #1200",
    reward: 100,
    description: "Consume 6000 pellets without taking damage.",
    criteria: {
      target: 12000,
      tier: "PLATINUM"
    }
  },
] }; if (typeof module !== "undefined" && module.exports) module.exports = AchievementsDB; else root.AchievementsDB = AchievementsDB; })(typeof window !== "undefined" ? window : global);