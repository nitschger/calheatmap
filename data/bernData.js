var bernData = JSON.parse(`
    [
  {
    "": 1,
    "BETRIEBSTAG": "2018-01-31",
    "verspaetung": 38
  },
  {
    "": 2,
    "BETRIEBSTAG": "2018-01-30",
    "verspaetung": 52
  },
  {
    "": 3,
    "BETRIEBSTAG": "2018-01-29",
    "verspaetung": 42
  },
  {
    "": 4,
    "BETRIEBSTAG": "2018-01-28",
    "verspaetung": 158
  },
  {
    "": 5,
    "BETRIEBSTAG": "2018-01-27",
    "verspaetung": 48
  },
  {
    "": 6,
    "BETRIEBSTAG": "2018-01-26",
    "verspaetung": 36
  },
  {
    "": 7,
    "BETRIEBSTAG": "2018-01-25",
    "verspaetung": 46
  },
  {
    "": 8,
    "BETRIEBSTAG": "2018-01-24",
    "verspaetung": 47
  },
  {
    "": 9,
    "BETRIEBSTAG": "2018-01-23",
    "verspaetung": 79
  },
  {
    "": 10,
    "BETRIEBSTAG": "2018-01-22",
    "verspaetung": 64
  },
  {
    "": 11,
    "BETRIEBSTAG": "2018-01-21",
    "verspaetung": 59
  },
  {
    "": 12,
    "BETRIEBSTAG": "2018-01-20",
    "verspaetung": 52
  },
  {
    "": 13,
    "BETRIEBSTAG": "2018-01-19",
    "verspaetung": 50
  },
  {
    "": 14,
    "BETRIEBSTAG": "2018-01-18",
    "verspaetung": 92
  },
  {
    "": 15,
    "BETRIEBSTAG": "2018-01-17",
    "verspaetung": 94
  },
  {
    "": 16,
    "BETRIEBSTAG": "2018-01-16",
    "verspaetung": 86
  },
  {
    "": 17,
    "BETRIEBSTAG": "2018-01-15",
    "verspaetung": 74
  },
  {
    "": 18,
    "BETRIEBSTAG": "2018-01-14",
    "verspaetung": 45
  },
  {
    "": 19,
    "BETRIEBSTAG": "2018-01-13",
    "verspaetung": 70
  },
  {
    "": 20,
    "BETRIEBSTAG": "2018-01-12",
    "verspaetung": 69
  },
  {
    "": 21,
    "BETRIEBSTAG": "2018-01-11",
    "verspaetung": 75
  },
  {
    "": 22,
    "BETRIEBSTAG": "2018-01-10",
    "verspaetung": 46
  },
  {
    "": 23,
    "BETRIEBSTAG": "2018-01-09",
    "verspaetung": 49
  },
  {
    "": 24,
    "BETRIEBSTAG": "2018-01-08",
    "verspaetung": 605
  },
  {
    "": 25,
    "BETRIEBSTAG": "2018-01-07",
    "verspaetung": 59
  },
  {
    "": 26,
    "BETRIEBSTAG": "2018-01-06",
    "verspaetung": 93
  },
  {
    "": 27,
    "BETRIEBSTAG": "2018-01-05",
    "verspaetung": 57
  },
  {
    "": 28,
    "BETRIEBSTAG": "2018-01-04",
    "verspaetung": 40
  },
  {
    "": 29,
    "BETRIEBSTAG": "2018-01-03",
    "verspaetung": 79
  },
  {
    "": 30,
    "BETRIEBSTAG": "2018-01-02",
    "verspaetung": 60
  },
  {
    "": 31,
    "BETRIEBSTAG": "2018-01-01",
    "verspaetung": 59
  },
  {
    "": 32,
    "BETRIEBSTAG": "2018-02-28",
    "verspaetung": 45
  },
  {
    "": 33,
    "BETRIEBSTAG": "2018-02-27",
    "verspaetung": 119
  },
  {
    "": 34,
    "BETRIEBSTAG": "2018-02-26",
    "verspaetung": 57
  },
  {
    "": 35,
    "BETRIEBSTAG": "2018-02-25",
    "verspaetung": 63
  },
  {
    "": 36,
    "BETRIEBSTAG": "2018-02-24",
    "verspaetung": 48
  },
  {
    "": 37,
    "BETRIEBSTAG": "2018-02-23",
    "verspaetung": 62
  },
  {
    "": 38,
    "BETRIEBSTAG": "2018-02-22",
    "verspaetung": 49
  },
  {
    "": 39,
    "BETRIEBSTAG": "2018-02-21",
    "verspaetung": 69
  },
  {
    "": 40,
    "BETRIEBSTAG": "2018-02-20",
    "verspaetung": 77
  },
  {
    "": 41,
    "BETRIEBSTAG": "2018-02-19",
    "verspaetung": 77
  },
  {
    "": 42,
    "BETRIEBSTAG": "2018-02-18",
    "verspaetung": 77
  },
  {
    "": 43,
    "BETRIEBSTAG": "2018-02-17",
    "verspaetung": 68
  },
  {
    "": 44,
    "BETRIEBSTAG": "2018-02-16",
    "verspaetung": 112
  },
  {
    "": 45,
    "BETRIEBSTAG": "2018-02-15",
    "verspaetung": 89
  },
  {
    "": 46,
    "BETRIEBSTAG": "2018-02-14",
    "verspaetung": 29
  },
  {
    "": 47,
    "BETRIEBSTAG": "2018-02-13",
    "verspaetung": 73
  },
  {
    "": 48,
    "BETRIEBSTAG": "2018-02-12",
    "verspaetung": 56
  },
  {
    "": 49,
    "BETRIEBSTAG": "2018-02-11",
    "verspaetung": 74
  },
  {
    "": 50,
    "BETRIEBSTAG": "2018-02-10",
    "verspaetung": 49
  },
  {
    "": 51,
    "BETRIEBSTAG": "2018-02-09",
    "verspaetung": 44
  },
  {
    "": 52,
    "BETRIEBSTAG": "2018-02-08",
    "verspaetung": 103
  },
  {
    "": 53,
    "BETRIEBSTAG": "2018-02-07",
    "verspaetung": 44
  },
  {
    "": 54,
    "BETRIEBSTAG": "2018-02-06",
    "verspaetung": 81
  },
  {
    "": 55,
    "BETRIEBSTAG": "2018-02-05",
    "verspaetung": 50
  },
  {
    "": 56,
    "BETRIEBSTAG": "2018-02-04",
    "verspaetung": 82
  },
  {
    "": 57,
    "BETRIEBSTAG": "2018-02-03",
    "verspaetung": 46
  },
  {
    "": 58,
    "BETRIEBSTAG": "2018-02-02",
    "verspaetung": 44
  },
  {
    "": 59,
    "BETRIEBSTAG": "2018-02-01",
    "verspaetung": 98
  },
  {
    "": 60,
    "BETRIEBSTAG": "2018-03-31",
    "verspaetung": 65
  },
  {
    "": 61,
    "BETRIEBSTAG": "2018-03-30",
    "verspaetung": 55
  },
  {
    "": 62,
    "BETRIEBSTAG": "2018-03-29",
    "verspaetung": 468
  },
  {
    "": 63,
    "BETRIEBSTAG": "2018-03-28",
    "verspaetung": 74
  },
  {
    "": 64,
    "BETRIEBSTAG": "2018-03-27",
    "verspaetung": 83
  },
  {
    "": 65,
    "BETRIEBSTAG": "2018-03-26",
    "verspaetung": 70
  },
  {
    "": 66,
    "BETRIEBSTAG": "2018-03-25",
    "verspaetung": "NA"
  },
  {
    "": 67,
    "BETRIEBSTAG": "2018-03-24",
    "verspaetung": "NA"
  },
  {
    "": 68,
    "BETRIEBSTAG": "2018-03-23",
    "verspaetung": 45
  },
  {
    "": 69,
    "BETRIEBSTAG": "2018-03-22",
    "verspaetung": 114
  },
  {
    "": 70,
    "BETRIEBSTAG": "2018-03-21",
    "verspaetung": 50
  },
  {
    "": 71,
    "BETRIEBSTAG": "2018-03-20",
    "verspaetung": 106
  },
  {
    "": 72,
    "BETRIEBSTAG": "2018-03-19",
    "verspaetung": 18
  },
  {
    "": 73,
    "BETRIEBSTAG": "2018-03-18",
    "verspaetung": 91
  },
  {
    "": 74,
    "BETRIEBSTAG": "2018-03-17",
    "verspaetung": 40
  },
  {
    "": 75,
    "BETRIEBSTAG": "2018-03-16",
    "verspaetung": 270
  },
  {
    "": 76,
    "BETRIEBSTAG": "2018-03-15",
    "verspaetung": 86
  },
  {
    "": 77,
    "BETRIEBSTAG": "2018-03-14",
    "verspaetung": 378
  },
  {
    "": 78,
    "BETRIEBSTAG": "2018-03-13",
    "verspaetung": 118
  },
  {
    "": 79,
    "BETRIEBSTAG": "2018-03-12",
    "verspaetung": 69
  },
  {
    "": 80,
    "BETRIEBSTAG": "2018-03-11",
    "verspaetung": 71
  },
  {
    "": 81,
    "BETRIEBSTAG": "2018-03-10",
    "verspaetung": 50
  },
  {
    "": 82,
    "BETRIEBSTAG": "2018-03-09",
    "verspaetung": 51
  },
  {
    "": 83,
    "BETRIEBSTAG": "2018-03-08",
    "verspaetung": 256
  },
  {
    "": 84,
    "BETRIEBSTAG": "2018-03-07",
    "verspaetung": 105
  },
  {
    "": 85,
    "BETRIEBSTAG": "2018-03-06",
    "verspaetung": 43
  },
  {
    "": 86,
    "BETRIEBSTAG": "2018-03-05",
    "verspaetung": 106
  },
  {
    "": 87,
    "BETRIEBSTAG": "2018-03-04",
    "verspaetung": 60
  },
  {
    "": 88,
    "BETRIEBSTAG": "2018-03-03",
    "verspaetung": 80
  },
  {
    "": 89,
    "BETRIEBSTAG": "2018-03-02",
    "verspaetung": 68
  },
  {
    "": 90,
    "BETRIEBSTAG": "2018-03-01",
    "verspaetung": 76
  },
  {
    "": 91,
    "BETRIEBSTAG": "2018-04-30",
    "verspaetung": 61
  },
  {
    "": 92,
    "BETRIEBSTAG": "2018-04-29",
    "verspaetung": 49
  },
  {
    "": 93,
    "BETRIEBSTAG": "2018-04-28",
    "verspaetung": 50
  },
  {
    "": 94,
    "BETRIEBSTAG": "2018-04-27",
    "verspaetung": 64
  },
  {
    "": 95,
    "BETRIEBSTAG": "2018-04-26",
    "verspaetung": 54
  },
  {
    "": 96,
    "BETRIEBSTAG": "2018-04-25",
    "verspaetung": 43
  },
  {
    "": 97,
    "BETRIEBSTAG": "2018-04-24",
    "verspaetung": 55
  },
  {
    "": 98,
    "BETRIEBSTAG": "2018-04-23",
    "verspaetung": 110
  },
  {
    "": 99,
    "BETRIEBSTAG": "2018-04-22",
    "verspaetung": 119
  },
  {
    "": 100,
    "BETRIEBSTAG": "2018-04-21",
    "verspaetung": 52
  },
  {
    "": 101,
    "BETRIEBSTAG": "2018-04-20",
    "verspaetung": 38
  },
  {
    "": 102,
    "BETRIEBSTAG": "2018-04-19",
    "verspaetung": 80
  },
  {
    "": 103,
    "BETRIEBSTAG": "2018-04-18",
    "verspaetung": 69
  },
  {
    "": 104,
    "BETRIEBSTAG": "2018-04-17",
    "verspaetung": 42
  },
  {
    "": 105,
    "BETRIEBSTAG": "2018-04-16",
    "verspaetung": 97
  },
  {
    "": 106,
    "BETRIEBSTAG": "2018-04-15",
    "verspaetung": "NA"
  },
  {
    "": 107,
    "BETRIEBSTAG": "2018-04-14",
    "verspaetung": "NA"
  },
  {
    "": 108,
    "BETRIEBSTAG": "2018-04-13",
    "verspaetung": 57
  },
  {
    "": 109,
    "BETRIEBSTAG": "2018-04-12",
    "verspaetung": 48
  },
  {
    "": 110,
    "BETRIEBSTAG": "2018-04-11",
    "verspaetung": 64
  },
  {
    "": 111,
    "BETRIEBSTAG": "2018-04-10",
    "verspaetung": 173
  },
  {
    "": 112,
    "BETRIEBSTAG": "2018-04-09",
    "verspaetung": 59
  },
  {
    "": 113,
    "BETRIEBSTAG": "2018-04-08",
    "verspaetung": "NA"
  },
  {
    "": 114,
    "BETRIEBSTAG": "2018-04-07",
    "verspaetung": "NA"
  },
  {
    "": 115,
    "BETRIEBSTAG": "2018-04-06",
    "verspaetung": 117
  },
  {
    "": 116,
    "BETRIEBSTAG": "2018-04-05",
    "verspaetung": 35
  },
  {
    "": 117,
    "BETRIEBSTAG": "2018-04-04",
    "verspaetung": 47
  },
  {
    "": 118,
    "BETRIEBSTAG": "2018-04-03",
    "verspaetung": 63
  },
  {
    "": 119,
    "BETRIEBSTAG": "2018-04-02",
    "verspaetung": 50
  },
  {
    "": 120,
    "BETRIEBSTAG": "2018-04-01",
    "verspaetung": 88
  },
  {
    "": 121,
    "BETRIEBSTAG": "2018-05-31",
    "verspaetung": 84
  },
  {
    "": 122,
    "BETRIEBSTAG": "2018-05-30",
    "verspaetung": 73
  },
  {
    "": 123,
    "BETRIEBSTAG": "2018-05-29",
    "verspaetung": 91
  },
  {
    "": 124,
    "BETRIEBSTAG": "2018-05-28",
    "verspaetung": 65
  },
  {
    "": 125,
    "BETRIEBSTAG": "2018-05-27",
    "verspaetung": "NA"
  },
  {
    "": 126,
    "BETRIEBSTAG": "2018-05-26",
    "verspaetung": "NA"
  },
  {
    "": 127,
    "BETRIEBSTAG": "2018-05-25",
    "verspaetung": 40
  },
  {
    "": 128,
    "BETRIEBSTAG": "2018-05-23",
    "verspaetung": 167
  },
  {
    "": 129,
    "BETRIEBSTAG": "2018-05-22",
    "verspaetung": 63
  },
  {
    "": 130,
    "BETRIEBSTAG": "2018-05-21",
    "verspaetung": 63
  },
  {
    "": 131,
    "BETRIEBSTAG": "2018-05-20",
    "verspaetung": 75
  },
  {
    "": 132,
    "BETRIEBSTAG": "2018-05-19",
    "verspaetung": 56
  },
  {
    "": 133,
    "BETRIEBSTAG": "2018-05-18",
    "verspaetung": 63
  },
  {
    "": 134,
    "BETRIEBSTAG": "2018-05-17",
    "verspaetung": 73
  },
  {
    "": 135,
    "BETRIEBSTAG": "2018-05-16",
    "verspaetung": 85
  },
  {
    "": 136,
    "BETRIEBSTAG": "2018-05-15",
    "verspaetung": 108
  },
  {
    "": 137,
    "BETRIEBSTAG": "2018-05-14",
    "verspaetung": 76
  },
  {
    "": 138,
    "BETRIEBSTAG": "2018-05-13",
    "verspaetung": 50
  },
  {
    "": 139,
    "BETRIEBSTAG": "2018-05-12",
    "verspaetung": 55
  },
  {
    "": 140,
    "BETRIEBSTAG": "2018-05-11",
    "verspaetung": 46
  },
  {
    "": 141,
    "BETRIEBSTAG": "2018-05-10",
    "verspaetung": 62
  },
  {
    "": 142,
    "BETRIEBSTAG": "2018-05-09",
    "verspaetung": 87
  },
  {
    "": 143,
    "BETRIEBSTAG": "2018-05-08",
    "verspaetung": 74
  },
  {
    "": 144,
    "BETRIEBSTAG": "2018-05-07",
    "verspaetung": 61
  },
  {
    "": 145,
    "BETRIEBSTAG": "2018-05-06",
    "verspaetung": 49
  },
  {
    "": 146,
    "BETRIEBSTAG": "2018-05-05",
    "verspaetung": 57
  },
  {
    "": 147,
    "BETRIEBSTAG": "2018-05-04",
    "verspaetung": 59
  },
  {
    "": 148,
    "BETRIEBSTAG": "2018-05-03",
    "verspaetung": 60
  },
  {
    "": 149,
    "BETRIEBSTAG": "2018-05-02",
    "verspaetung": 42
  },
  {
    "": 150,
    "BETRIEBSTAG": "2018-05-01",
    "verspaetung": 40
  },
  {
    "": 151,
    "BETRIEBSTAG": "2018-06-30",
    "verspaetung": 64
  },
  {
    "": 152,
    "BETRIEBSTAG": "2018-06-29",
    "verspaetung": 50
  },
  {
    "": 153,
    "BETRIEBSTAG": "2018-06-28",
    "verspaetung": 137
  },
  {
    "": 154,
    "BETRIEBSTAG": "2018-06-27",
    "verspaetung": 55
  },
  {
    "": 155,
    "BETRIEBSTAG": "2018-06-26",
    "verspaetung": 53
  },
  {
    "": 156,
    "BETRIEBSTAG": "2018-06-25",
    "verspaetung": 43
  },
  {
    "": 157,
    "BETRIEBSTAG": "2018-06-24",
    "verspaetung": 52
  },
  {
    "": 158,
    "BETRIEBSTAG": "2018-06-23",
    "verspaetung": 47
  },
  {
    "": 159,
    "BETRIEBSTAG": "2018-06-22",
    "verspaetung": 64
  },
  {
    "": 160,
    "BETRIEBSTAG": "2018-06-21",
    "verspaetung": 46
  },
  {
    "": 161,
    "BETRIEBSTAG": "2018-06-20",
    "verspaetung": 61
  },
  {
    "": 162,
    "BETRIEBSTAG": "2018-06-19",
    "verspaetung": 53
  },
  {
    "": 163,
    "BETRIEBSTAG": "2018-06-18",
    "verspaetung": 74
  },
  {
    "": 164,
    "BETRIEBSTAG": "2018-06-17",
    "verspaetung": 52
  },
  {
    "": 165,
    "BETRIEBSTAG": "2018-06-16",
    "verspaetung": 57
  },
  {
    "": 166,
    "BETRIEBSTAG": "2018-06-15",
    "verspaetung": 183
  },
  {
    "": 167,
    "BETRIEBSTAG": "2018-06-14",
    "verspaetung": 38
  },
  {
    "": 168,
    "BETRIEBSTAG": "2018-06-13",
    "verspaetung": 74
  },
  {
    "": 169,
    "BETRIEBSTAG": "2018-06-12",
    "verspaetung": 94
  },
  {
    "": 170,
    "BETRIEBSTAG": "2018-06-11",
    "verspaetung": 48
  },
  {
    "": 171,
    "BETRIEBSTAG": "2018-06-10",
    "verspaetung": 73
  },
  {
    "": 172,
    "BETRIEBSTAG": "2018-06-09",
    "verspaetung": 58
  },
  {
    "": 173,
    "BETRIEBSTAG": "2018-06-08",
    "verspaetung": 77
  },
  {
    "": 174,
    "BETRIEBSTAG": "2018-06-07",
    "verspaetung": 79
  },
  {
    "": 175,
    "BETRIEBSTAG": "2018-06-06",
    "verspaetung": 30
  },
  {
    "": 176,
    "BETRIEBSTAG": "2018-06-05",
    "verspaetung": 127
  },
  {
    "": 177,
    "BETRIEBSTAG": "2018-06-04",
    "verspaetung": 60
  },
  {
    "": 178,
    "BETRIEBSTAG": "2018-06-03",
    "verspaetung": 37
  },
  {
    "": 179,
    "BETRIEBSTAG": "2018-06-02",
    "verspaetung": 53
  },
  {
    "": 180,
    "BETRIEBSTAG": "2018-06-01",
    "verspaetung": 39
  },
  {
    "": 181,
    "BETRIEBSTAG": "2018-07-31",
    "verspaetung": 44
  },
  {
    "": 182,
    "BETRIEBSTAG": "2018-07-30",
    "verspaetung": 60
  },
  {
    "": 183,
    "BETRIEBSTAG": "2018-07-29",
    "verspaetung": 70
  },
  {
    "": 184,
    "BETRIEBSTAG": "2018-07-28",
    "verspaetung": 96
  },
  {
    "": 185,
    "BETRIEBSTAG": "2018-07-27",
    "verspaetung": 38
  },
  {
    "": 186,
    "BETRIEBSTAG": "2018-07-26",
    "verspaetung": 70
  },
  {
    "": 187,
    "BETRIEBSTAG": "2018-07-25",
    "verspaetung": 45
  },
  {
    "": 188,
    "BETRIEBSTAG": "2018-07-24",
    "verspaetung": 76
  },
  {
    "": 189,
    "BETRIEBSTAG": "2018-07-23",
    "verspaetung": 42
  },
  {
    "": 190,
    "BETRIEBSTAG": "2018-07-22",
    "verspaetung": 51
  },
  {
    "": 191,
    "BETRIEBSTAG": "2018-07-21",
    "verspaetung": 68
  },
  {
    "": 192,
    "BETRIEBSTAG": "2018-07-20",
    "verspaetung": 123
  },
  {
    "": 193,
    "BETRIEBSTAG": "2018-07-19",
    "verspaetung": 38
  },
  {
    "": 194,
    "BETRIEBSTAG": "2018-07-18",
    "verspaetung": 73
  },
  {
    "": 195,
    "BETRIEBSTAG": "2018-07-17",
    "verspaetung": 36
  },
  {
    "": 196,
    "BETRIEBSTAG": "2018-07-16",
    "verspaetung": 78
  },
  {
    "": 197,
    "BETRIEBSTAG": "2018-07-15",
    "verspaetung": 78
  },
  {
    "": 198,
    "BETRIEBSTAG": "2018-07-14",
    "verspaetung": 41
  },
  {
    "": 199,
    "BETRIEBSTAG": "2018-07-13",
    "verspaetung": 39
  },
  {
    "": 200,
    "BETRIEBSTAG": "2018-07-12",
    "verspaetung": 51
  },
  {
    "": 201,
    "BETRIEBSTAG": "2018-07-11",
    "verspaetung": 33
  },
  {
    "": 202,
    "BETRIEBSTAG": "2018-07-10",
    "verspaetung": 55
  },
  {
    "": 203,
    "BETRIEBSTAG": "2018-07-09",
    "verspaetung": 88
  },
  {
    "": 204,
    "BETRIEBSTAG": "2018-07-08",
    "verspaetung": 37
  },
  {
    "": 205,
    "BETRIEBSTAG": "2018-07-07",
    "verspaetung": 165
  },
  {
    "": 206,
    "BETRIEBSTAG": "2018-07-06",
    "verspaetung": 52
  },
  {
    "": 207,
    "BETRIEBSTAG": "2018-07-05",
    "verspaetung": 96
  },
  {
    "": 208,
    "BETRIEBSTAG": "2018-07-04",
    "verspaetung": 45
  },
  {
    "": 209,
    "BETRIEBSTAG": "2018-07-03",
    "verspaetung": 59
  },
  {
    "": 210,
    "BETRIEBSTAG": "2018-07-02",
    "verspaetung": 41
  },
  {
    "": 211,
    "BETRIEBSTAG": "2018-07-01",
    "verspaetung": 39
  },
  {
    "": 212,
    "BETRIEBSTAG": "2018-08-31",
    "verspaetung": 56
  },
  {
    "": 213,
    "BETRIEBSTAG": "2018-08-30",
    "verspaetung": 95
  },
  {
    "": 214,
    "BETRIEBSTAG": "2018-08-29",
    "verspaetung": 92
  },
  {
    "": 215,
    "BETRIEBSTAG": "2018-08-28",
    "verspaetung": 124
  },
  {
    "": 216,
    "BETRIEBSTAG": "2018-08-27",
    "verspaetung": 65
  },
  {
    "": 217,
    "BETRIEBSTAG": "2018-08-26",
    "verspaetung": 77
  },
  {
    "": 218,
    "BETRIEBSTAG": "2018-08-25",
    "verspaetung": 81
  },
  {
    "": 219,
    "BETRIEBSTAG": "2018-08-24",
    "verspaetung": 104
  },
  {
    "": 220,
    "BETRIEBSTAG": "2018-08-23",
    "verspaetung": 67
  },
  {
    "": 221,
    "BETRIEBSTAG": "2018-08-22",
    "verspaetung": 57
  },
  {
    "": 222,
    "BETRIEBSTAG": "2018-08-21",
    "verspaetung": 116
  },
  {
    "": 223,
    "BETRIEBSTAG": "2018-08-20",
    "verspaetung": 67
  },
  {
    "": 224,
    "BETRIEBSTAG": "2018-08-19",
    "verspaetung": 61
  },
  {
    "": 225,
    "BETRIEBSTAG": "2018-08-18",
    "verspaetung": 50
  },
  {
    "": 226,
    "BETRIEBSTAG": "2018-08-17",
    "verspaetung": 66
  },
  {
    "": 227,
    "BETRIEBSTAG": "2018-08-16",
    "verspaetung": 73
  },
  {
    "": 228,
    "BETRIEBSTAG": "2018-08-15",
    "verspaetung": 85
  },
  {
    "": 229,
    "BETRIEBSTAG": "2018-08-14",
    "verspaetung": 237
  },
  {
    "": 230,
    "BETRIEBSTAG": "2018-08-13",
    "verspaetung": 67
  },
  {
    "": 231,
    "BETRIEBSTAG": "2018-08-12",
    "verspaetung": 46
  },
  {
    "": 232,
    "BETRIEBSTAG": "2018-08-11",
    "verspaetung": 57
  },
  {
    "": 233,
    "BETRIEBSTAG": "2018-08-10",
    "verspaetung": 58
  },
  {
    "": 234,
    "BETRIEBSTAG": "2018-08-09",
    "verspaetung": 122
  },
  {
    "": 235,
    "BETRIEBSTAG": "2018-08-08",
    "verspaetung": 61
  },
  {
    "": 236,
    "BETRIEBSTAG": "2018-08-07",
    "verspaetung": 41
  },
  {
    "": 237,
    "BETRIEBSTAG": "2018-08-06",
    "verspaetung": 60
  },
  {
    "": 238,
    "BETRIEBSTAG": "2018-08-05",
    "verspaetung": 48
  },
  {
    "": 239,
    "BETRIEBSTAG": "2018-08-04",
    "verspaetung": 45
  },
  {
    "": 240,
    "BETRIEBSTAG": "2018-08-03",
    "verspaetung": 46
  },
  {
    "": 241,
    "BETRIEBSTAG": "2018-08-02",
    "verspaetung": 61
  },
  {
    "": 242,
    "BETRIEBSTAG": "2018-08-01",
    "verspaetung": 121
  },
  {
    "": 243,
    "BETRIEBSTAG": "2018-09-30",
    "verspaetung": 57
  },
  {
    "": 244,
    "BETRIEBSTAG": "2018-09-29",
    "verspaetung": 120
  },
  {
    "": 245,
    "BETRIEBSTAG": "2018-09-28",
    "verspaetung": 37
  },
  {
    "": 246,
    "BETRIEBSTAG": "2018-09-27",
    "verspaetung": 134
  },
  {
    "": 247,
    "BETRIEBSTAG": "2018-09-26",
    "verspaetung": 53
  },
  {
    "": 248,
    "BETRIEBSTAG": "2018-09-25",
    "verspaetung": 78
  },
  {
    "": 249,
    "BETRIEBSTAG": "2018-09-24",
    "verspaetung": 82
  },
  {
    "": 250,
    "BETRIEBSTAG": "2018-09-23",
    "verspaetung": 99
  },
  {
    "": 251,
    "BETRIEBSTAG": "2018-09-22",
    "verspaetung": 236
  },
  {
    "": 252,
    "BETRIEBSTAG": "2018-09-21",
    "verspaetung": 54
  },
  {
    "": 253,
    "BETRIEBSTAG": "2018-09-20",
    "verspaetung": 49
  },
  {
    "": 254,
    "BETRIEBSTAG": "2018-09-19",
    "verspaetung": 117
  },
  {
    "": 255,
    "BETRIEBSTAG": "2018-09-18",
    "verspaetung": 448
  },
  {
    "": 256,
    "BETRIEBSTAG": "2018-09-17",
    "verspaetung": 75
  },
  {
    "": 257,
    "BETRIEBSTAG": "2018-09-16",
    "verspaetung": "NA"
  },
  {
    "": 258,
    "BETRIEBSTAG": "2018-09-15",
    "verspaetung": "NA"
  },
  {
    "": 259,
    "BETRIEBSTAG": "2018-09-14",
    "verspaetung": 60
  },
  {
    "": 260,
    "BETRIEBSTAG": "2018-09-13",
    "verspaetung": 62
  },
  {
    "": 261,
    "BETRIEBSTAG": "2018-09-12",
    "verspaetung": 266
  },
  {
    "": 262,
    "BETRIEBSTAG": "2018-09-11",
    "verspaetung": 45
  },
  {
    "": 263,
    "BETRIEBSTAG": "2018-09-10",
    "verspaetung": 45
  },
  {
    "": 264,
    "BETRIEBSTAG": "2018-09-09",
    "verspaetung": 44
  },
  {
    "": 265,
    "BETRIEBSTAG": "2018-09-08",
    "verspaetung": 129
  },
  {
    "": 266,
    "BETRIEBSTAG": "2018-09-07",
    "verspaetung": 100
  },
  {
    "": 267,
    "BETRIEBSTAG": "2018-09-06",
    "verspaetung": 69
  },
  {
    "": 268,
    "BETRIEBSTAG": "2018-09-05",
    "verspaetung": 100
  },
  {
    "": 269,
    "BETRIEBSTAG": "2018-09-04",
    "verspaetung": 40
  },
  {
    "": 270,
    "BETRIEBSTAG": "2018-09-03",
    "verspaetung": 69
  },
  {
    "": 271,
    "BETRIEBSTAG": "2018-09-02",
    "verspaetung": 47
  },
  {
    "": 272,
    "BETRIEBSTAG": "2018-09-01",
    "verspaetung": 85
  },
  {
    "": 273,
    "BETRIEBSTAG": "2018-10-31",
    "verspaetung": 66
  },
  {
    "": 274,
    "BETRIEBSTAG": "2018-10-30",
    "verspaetung": 54
  },
  {
    "": 275,
    "BETRIEBSTAG": "2018-10-29",
    "verspaetung": 137
  },
  {
    "": 276,
    "BETRIEBSTAG": "2018-10-28",
    "verspaetung": "NA"
  },
  {
    "": 277,
    "BETRIEBSTAG": "2018-10-27",
    "verspaetung": "NA"
  },
  {
    "": 278,
    "BETRIEBSTAG": "2018-10-26",
    "verspaetung": 77
  },
  {
    "": 279,
    "BETRIEBSTAG": "2018-10-25",
    "verspaetung": 53
  },
  {
    "": 280,
    "BETRIEBSTAG": "2018-10-24",
    "verspaetung": 44
  },
  {
    "": 281,
    "BETRIEBSTAG": "2018-10-23",
    "verspaetung": 43
  },
  {
    "": 282,
    "BETRIEBSTAG": "2018-10-22",
    "verspaetung": 46
  },
  {
    "": 283,
    "BETRIEBSTAG": "2018-10-21",
    "verspaetung": 70
  },
  {
    "": 284,
    "BETRIEBSTAG": "2018-10-20",
    "verspaetung": 166
  },
  {
    "": 285,
    "BETRIEBSTAG": "2018-10-19",
    "verspaetung": 46
  },
  {
    "": 286,
    "BETRIEBSTAG": "2018-10-18",
    "verspaetung": 73
  },
  {
    "": 287,
    "BETRIEBSTAG": "2018-10-17",
    "verspaetung": 58
  },
  {
    "": 288,
    "BETRIEBSTAG": "2018-10-16",
    "verspaetung": 139
  },
  {
    "": 289,
    "BETRIEBSTAG": "2018-10-15",
    "verspaetung": 65
  },
  {
    "": 290,
    "BETRIEBSTAG": "2018-10-14",
    "verspaetung": "NA"
  },
  {
    "": 291,
    "BETRIEBSTAG": "2018-10-13",
    "verspaetung": "NA"
  },
  {
    "": 292,
    "BETRIEBSTAG": "2018-10-12",
    "verspaetung": 59
  },
  {
    "": 293,
    "BETRIEBSTAG": "2018-10-11",
    "verspaetung": 138
  },
  {
    "": 294,
    "BETRIEBSTAG": "2018-10-10",
    "verspaetung": 97
  },
  {
    "": 295,
    "BETRIEBSTAG": "2018-10-09",
    "verspaetung": 62
  },
  {
    "": 296,
    "BETRIEBSTAG": "2018-10-08",
    "verspaetung": 52
  },
  {
    "": 297,
    "BETRIEBSTAG": "2018-10-07",
    "verspaetung": 115
  },
  {
    "": 298,
    "BETRIEBSTAG": "2018-10-06",
    "verspaetung": 80
  },
  {
    "": 299,
    "BETRIEBSTAG": "2018-10-05",
    "verspaetung": 111
  },
  {
    "": 300,
    "BETRIEBSTAG": "2018-10-04",
    "verspaetung": 57
  },
  {
    "": 301,
    "BETRIEBSTAG": "2018-10-03",
    "verspaetung": 61
  },
  {
    "": 302,
    "BETRIEBSTAG": "2018-10-02",
    "verspaetung": 47
  },
  {
    "": 303,
    "BETRIEBSTAG": "2018-10-01",
    "verspaetung": 94
  },
  {
    "": 304,
    "BETRIEBSTAG": "2018-11-30",
    "verspaetung": 40
  },
  {
    "": 305,
    "BETRIEBSTAG": "2018-11-29",
    "verspaetung": 31
  },
  {
    "": 306,
    "BETRIEBSTAG": "2018-11-28",
    "verspaetung": 465
  },
  {
    "": 307,
    "BETRIEBSTAG": "2018-11-27",
    "verspaetung": 66
  },
  {
    "": 308,
    "BETRIEBSTAG": "2018-11-26",
    "verspaetung": 47
  },
  {
    "": 309,
    "BETRIEBSTAG": "2018-11-25",
    "verspaetung": 74
  },
  {
    "": 310,
    "BETRIEBSTAG": "2018-11-24",
    "verspaetung": 111
  },
  {
    "": 311,
    "BETRIEBSTAG": "2018-11-23",
    "verspaetung": 56
  },
  {
    "": 312,
    "BETRIEBSTAG": "2018-11-22",
    "verspaetung": 81
  },
  {
    "": 313,
    "BETRIEBSTAG": "2018-11-21",
    "verspaetung": 36
  },
  {
    "": 314,
    "BETRIEBSTAG": "2018-11-20",
    "verspaetung": 203
  },
  {
    "": 315,
    "BETRIEBSTAG": "2018-11-19",
    "verspaetung": 49
  },
  {
    "": 316,
    "BETRIEBSTAG": "2018-11-18",
    "verspaetung": 80
  },
  {
    "": 317,
    "BETRIEBSTAG": "2018-11-17",
    "verspaetung": 100
  },
  {
    "": 318,
    "BETRIEBSTAG": "2018-11-16",
    "verspaetung": 47
  },
  {
    "": 319,
    "BETRIEBSTAG": "2018-11-15",
    "verspaetung": 131
  },
  {
    "": 320,
    "BETRIEBSTAG": "2018-11-14",
    "verspaetung": 41
  },
  {
    "": 321,
    "BETRIEBSTAG": "2018-11-13",
    "verspaetung": 53
  },
  {
    "": 322,
    "BETRIEBSTAG": "2018-11-12",
    "verspaetung": 46
  },
  {
    "": 323,
    "BETRIEBSTAG": "2018-11-11",
    "verspaetung": 67
  },
  {
    "": 324,
    "BETRIEBSTAG": "2018-11-10",
    "verspaetung": 66
  },
  {
    "": 325,
    "BETRIEBSTAG": "2018-11-09",
    "verspaetung": 86
  },
  {
    "": 326,
    "BETRIEBSTAG": "2018-11-08",
    "verspaetung": 62
  },
  {
    "": 327,
    "BETRIEBSTAG": "2018-11-07",
    "verspaetung": 108
  },
  {
    "": 328,
    "BETRIEBSTAG": "2018-11-06",
    "verspaetung": 477
  },
  {
    "": 329,
    "BETRIEBSTAG": "2018-11-05",
    "verspaetung": 58
  },
  {
    "": 330,
    "BETRIEBSTAG": "2018-11-04",
    "verspaetung": 67
  },
  {
    "": 331,
    "BETRIEBSTAG": "2018-11-03",
    "verspaetung": 95
  },
  {
    "": 332,
    "BETRIEBSTAG": "2018-11-02",
    "verspaetung": 56
  },
  {
    "": 333,
    "BETRIEBSTAG": "2018-11-01",
    "verspaetung": 315
  },
  {
    "": 334,
    "BETRIEBSTAG": "2018-12-31",
    "verspaetung": 90
  },
  {
    "": 335,
    "BETRIEBSTAG": "2018-12-30",
    "verspaetung": 106
  },
  {
    "": 336,
    "BETRIEBSTAG": "2018-12-29",
    "verspaetung": 58
  },
  {
    "": 337,
    "BETRIEBSTAG": "2018-12-28",
    "verspaetung": 46
  },
  {
    "": 338,
    "BETRIEBSTAG": "2018-12-27",
    "verspaetung": 57
  },
  {
    "": 339,
    "BETRIEBSTAG": "2018-12-26",
    "verspaetung": 57
  },
  {
    "": 340,
    "BETRIEBSTAG": "2018-12-25",
    "verspaetung": 74
  },
  {
    "": 341,
    "BETRIEBSTAG": "2018-12-24",
    "verspaetung": 58
  },
  {
    "": 342,
    "BETRIEBSTAG": "2018-12-23",
    "verspaetung": 66
  },
  {
    "": 343,
    "BETRIEBSTAG": "2018-12-22",
    "verspaetung": 48
  },
  {
    "": 344,
    "BETRIEBSTAG": "2018-12-21",
    "verspaetung": 87
  },
  {
    "": 345,
    "BETRIEBSTAG": "2018-12-20",
    "verspaetung": 55
  },
  {
    "": 346,
    "BETRIEBSTAG": "2018-12-19",
    "verspaetung": 40
  },
  {
    "": 347,
    "BETRIEBSTAG": "2018-12-18",
    "verspaetung": 91
  },
  {
    "": 348,
    "BETRIEBSTAG": "2018-12-17",
    "verspaetung": 62
  },
  {
    "": 349,
    "BETRIEBSTAG": "2018-12-16",
    "verspaetung": 146
  },
  {
    "": 350,
    "BETRIEBSTAG": "2018-12-15",
    "verspaetung": 166
  },
  {
    "": 351,
    "BETRIEBSTAG": "2018-12-14",
    "verspaetung": 34
  },
  {
    "": 352,
    "BETRIEBSTAG": "2018-12-13",
    "verspaetung": 77
  },
  {
    "": 353,
    "BETRIEBSTAG": "2018-12-12",
    "verspaetung": 47
  },
  {
    "": 354,
    "BETRIEBSTAG": "2018-12-11",
    "verspaetung": 56
  },
  {
    "": 355,
    "BETRIEBSTAG": "2018-12-10",
    "verspaetung": 51
  },
  {
    "": 356,
    "BETRIEBSTAG": "2018-12-09",
    "verspaetung": 54
  },
  {
    "": 357,
    "BETRIEBSTAG": "2018-12-08",
    "verspaetung": 100
  },
  {
    "": 358,
    "BETRIEBSTAG": "2018-12-07",
    "verspaetung": 40
  },
  {
    "": 359,
    "BETRIEBSTAG": "2018-12-06",
    "verspaetung": 135
  },
  {
    "": 360,
    "BETRIEBSTAG": "2018-12-05",
    "verspaetung": 94
  },
  {
    "": 361,
    "BETRIEBSTAG": "2018-12-04",
    "verspaetung": 72
  },
  {
    "": 362,
    "BETRIEBSTAG": "2018-12-03",
    "verspaetung": 104
  },
  {
    "": 363,
    "BETRIEBSTAG": "2018-12-02",
    "verspaetung": 67
  },
  {
    "": 364,
    "BETRIEBSTAG": "2018-12-01",
    "verspaetung": 58
  }
]
    `);

var bernDataNormalized = bernData.map((input) =>{
    return { "date": input.BETRIEBSTAG, "count": input.verspaetung }
});