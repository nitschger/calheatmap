var combinedData = JSON.parse(`
[
    {
      "": 1,
      "BETRIEBSTAG": "01.01.2018",
      "verspaetung": 106
    },
    {
      "": 2,
      "BETRIEBSTAG": "02.01.2018",
      "verspaetung": 121
    },
    {
      "": 3,
      "BETRIEBSTAG": "03.01.2018",
      "verspaetung": 120
    },
    {
      "": 4,
      "BETRIEBSTAG": "04.01.2018",
      "verspaetung": 87
    },
    {
      "": 5,
      "BETRIEBSTAG": "05.01.2018",
      "verspaetung": 97
    },
    {
      "": 8,
      "BETRIEBSTAG": "08.01.2018",
      "verspaetung": 648
    },
    {
      "": 9,
      "BETRIEBSTAG": "09.01.2018",
      "verspaetung": 99
    },
    {
      "": 10,
      "BETRIEBSTAG": "10.01.2018",
      "verspaetung": 91
    },
    {
      "": 11,
      "BETRIEBSTAG": "11.01.2018",
      "verspaetung": 113
    },
    {
      "": 12,
      "BETRIEBSTAG": "12.01.2018",
      "verspaetung": 121
    },
    {
      "": 15,
      "BETRIEBSTAG": "15.01.2018",
      "verspaetung": 120
    },
    {
      "": 16,
      "BETRIEBSTAG": "16.01.2018",
      "verspaetung": 195
    },
    {
      "": 17,
      "BETRIEBSTAG": "17.01.2018",
      "verspaetung": 141
    },
    {
      "": 18,
      "BETRIEBSTAG": "18.01.2018",
      "verspaetung": 128
    },
    {
      "": 19,
      "BETRIEBSTAG": "19.01.2018",
      "verspaetung": 89
    },
    {
      "": 22,
      "BETRIEBSTAG": "22.01.2018",
      "verspaetung": 110
    },
    {
      "": 23,
      "BETRIEBSTAG": "23.01.2018",
      "verspaetung": 127
    },
    {
      "": 24,
      "BETRIEBSTAG": "24.01.2018",
      "verspaetung": 83
    },
    {
      "": 25,
      "BETRIEBSTAG": "25.01.2018",
      "verspaetung": 105
    },
    {
      "": 26,
      "BETRIEBSTAG": "26.01.2018",
      "verspaetung": 76
    },
    {
      "": 29,
      "BETRIEBSTAG": "29.01.2018",
      "verspaetung": 84
    },
    {
      "": 30,
      "BETRIEBSTAG": "30.01.2018",
      "verspaetung": 94
    },
    {
      "": 31,
      "BETRIEBSTAG": "31.01.2018",
      "verspaetung": 80
    },
    {
      "": 32,
      "BETRIEBSTAG": "01.02.2018",
      "verspaetung": 179
    },
    {
      "": 33,
      "BETRIEBSTAG": "02.02.2018",
      "verspaetung": 85
    },
    {
      "": 36,
      "BETRIEBSTAG": "05.02.2018",
      "verspaetung": 132
    },
    {
      "": 37,
      "BETRIEBSTAG": "06.02.2018",
      "verspaetung": 121
    },
    {
      "": 38,
      "BETRIEBSTAG": "07.02.2018",
      "verspaetung": 82
    },
    {
      "": 39,
      "BETRIEBSTAG": "08.02.2018",
      "verspaetung": 139
    },
    {
      "": 40,
      "BETRIEBSTAG": "09.02.2018",
      "verspaetung": 101
    },
    {
      "": 43,
      "BETRIEBSTAG": "12.02.2018",
      "verspaetung": 119
    },
    {
      "": 44,
      "BETRIEBSTAG": "13.02.2018",
      "verspaetung": 133
    },
    {
      "": 45,
      "BETRIEBSTAG": "14.02.2018",
      "verspaetung": 81
    },
    {
      "": 46,
      "BETRIEBSTAG": "15.02.2018",
      "verspaetung": 139
    },
    {
      "": 47,
      "BETRIEBSTAG": "16.02.2018",
      "verspaetung": 170
    },
    {
      "": 50,
      "BETRIEBSTAG": "19.02.2018",
      "verspaetung": 125
    },
    {
      "": 51,
      "BETRIEBSTAG": "20.02.2018",
      "verspaetung": 147
    },
    {
      "": 52,
      "BETRIEBSTAG": "21.02.2018",
      "verspaetung": 119
    },
    {
      "": 53,
      "BETRIEBSTAG": "22.02.2018",
      "verspaetung": 84
    },
    {
      "": 54,
      "BETRIEBSTAG": "23.02.2018",
      "verspaetung": 99
    },
    {
      "": 57,
      "BETRIEBSTAG": "26.02.2018",
      "verspaetung": 94
    },
    {
      "": 58,
      "BETRIEBSTAG": "27.02.2018",
      "verspaetung": 163
    },
    {
      "": 59,
      "BETRIEBSTAG": "28.02.2018",
      "verspaetung": 81
    },
    {
      "": 60,
      "BETRIEBSTAG": "01.03.2018",
      "verspaetung": 134
    },
    {
      "": 61,
      "BETRIEBSTAG": "02.03.2018",
      "verspaetung": 139
    },
    {
      "": 64,
      "BETRIEBSTAG": "05.03.2018",
      "verspaetung": 159
    },
    {
      "": 65,
      "BETRIEBSTAG": "06.03.2018",
      "verspaetung": 104
    },
    {
      "": 66,
      "BETRIEBSTAG": "07.03.2018",
      "verspaetung": 146
    },
    {
      "": 67,
      "BETRIEBSTAG": "08.03.2018",
      "verspaetung": 291
    },
    {
      "": 68,
      "BETRIEBSTAG": "09.03.2018",
      "verspaetung": 113
    },
    {
      "": 71,
      "BETRIEBSTAG": "12.03.2018",
      "verspaetung": 117
    },
    {
      "": 72,
      "BETRIEBSTAG": "13.03.2018",
      "verspaetung": 156
    },
    {
      "": 73,
      "BETRIEBSTAG": "14.03.2018",
      "verspaetung": 412
    },
    {
      "": 74,
      "BETRIEBSTAG": "15.03.2018",
      "verspaetung": 256
    },
    {
      "": 75,
      "BETRIEBSTAG": "16.03.2018",
      "verspaetung": 338
    },
    {
      "": 78,
      "BETRIEBSTAG": "19.03.2018",
      "verspaetung": 71
    },
    {
      "": 79,
      "BETRIEBSTAG": "20.03.2018",
      "verspaetung": 140
    },
    {
      "": 80,
      "BETRIEBSTAG": "21.03.2018",
      "verspaetung": 143
    },
    {
      "": 81,
      "BETRIEBSTAG": "22.03.2018",
      "verspaetung": 175
    },
    {
      "": 82,
      "BETRIEBSTAG": "23.03.2018",
      "verspaetung": 96
    },
    {
      "": 85,
      "BETRIEBSTAG": "26.03.2018",
      "verspaetung": 115
    },
    {
      "": 86,
      "BETRIEBSTAG": "27.03.2018",
      "verspaetung": 159
    },
    {
      "": 87,
      "BETRIEBSTAG": "28.03.2018",
      "verspaetung": 111
    },
    {
      "": 88,
      "BETRIEBSTAG": "29.03.2018",
      "verspaetung": 598
    },
    {
      "": 89,
      "BETRIEBSTAG": "30.03.2018",
      "verspaetung": 116
    },
    {
      "": 92,
      "BETRIEBSTAG": "02.04.2018",
      "verspaetung": 147
    },
    {
      "": 93,
      "BETRIEBSTAG": "03.04.2018",
      "verspaetung": 135
    },
    {
      "": 94,
      "BETRIEBSTAG": "04.04.2018",
      "verspaetung": 90
    },
    {
      "": 95,
      "BETRIEBSTAG": "05.04.2018",
      "verspaetung": 75
    },
    {
      "": 96,
      "BETRIEBSTAG": "06.04.2018",
      "verspaetung": 174
    },
    {
      "": 99,
      "BETRIEBSTAG": "09.04.2018",
      "verspaetung": 107
    },
    {
      "": 100,
      "BETRIEBSTAG": "10.04.2018",
      "verspaetung": 291
    },
    {
      "": 101,
      "BETRIEBSTAG": "11.04.2018",
      "verspaetung": 126
    },
    {
      "": 102,
      "BETRIEBSTAG": "12.04.2018",
      "verspaetung": 80
    },
    {
      "": 103,
      "BETRIEBSTAG": "13.04.2018",
      "verspaetung": 88
    },
    {
      "": 106,
      "BETRIEBSTAG": "16.04.2018",
      "verspaetung": 160
    },
    {
      "": 107,
      "BETRIEBSTAG": "17.04.2018",
      "verspaetung": 81
    },
    {
      "": 108,
      "BETRIEBSTAG": "18.04.2018",
      "verspaetung": 142
    },
    {
      "": 109,
      "BETRIEBSTAG": "19.04.2018",
      "verspaetung": 137
    },
    {
      "": 110,
      "BETRIEBSTAG": "20.04.2018",
      "verspaetung": "#WERT!"
    },
    {
      "": 113,
      "BETRIEBSTAG": "23.04.2018",
      "verspaetung": 164
    },
    {
      "": 114,
      "BETRIEBSTAG": "24.04.2018",
      "verspaetung": 92
    },
    {
      "": 115,
      "BETRIEBSTAG": "25.04.2018",
      "verspaetung": 85
    },
    {
      "": 116,
      "BETRIEBSTAG": "26.04.2018",
      "verspaetung": 134
    },
    {
      "": 117,
      "BETRIEBSTAG": "27.04.2018",
      "verspaetung": 98
    },
    {
      "": 120,
      "BETRIEBSTAG": "30.04.2018",
      "verspaetung": 98
    },
    {
      "": 121,
      "BETRIEBSTAG": "01.05.2018",
      "verspaetung": 147
    },
    {
      "": 122,
      "BETRIEBSTAG": "02.05.2018",
      "verspaetung": 76
    },
    {
      "": 123,
      "BETRIEBSTAG": "03.05.2018",
      "verspaetung": 107
    },
    {
      "": 124,
      "BETRIEBSTAG": "04.05.2018",
      "verspaetung": 106
    },
    {
      "": 127,
      "BETRIEBSTAG": "07.05.2018",
      "verspaetung": 97
    },
    {
      "": 128,
      "BETRIEBSTAG": "08.05.2018",
      "verspaetung": 115
    },
    {
      "": 129,
      "BETRIEBSTAG": "09.05.2018",
      "verspaetung": 149
    },
    {
      "": 130,
      "BETRIEBSTAG": "10.05.2018",
      "verspaetung": 116
    },
    {
      "": 131,
      "BETRIEBSTAG": "11.05.2018",
      "verspaetung": 90
    },
    {
      "": 134,
      "BETRIEBSTAG": "14.05.2018",
      "verspaetung": 127
    },
    {
      "": 135,
      "BETRIEBSTAG": "15.05.2018",
      "verspaetung": 229
    },
    {
      "": 136,
      "BETRIEBSTAG": "16.05.2018",
      "verspaetung": 137
    },
    {
      "": 137,
      "BETRIEBSTAG": "17.05.2018",
      "verspaetung": 168
    },
    {
      "": 138,
      "BETRIEBSTAG": "18.05.2018",
      "verspaetung": 133
    },
    {
      "": 141,
      "BETRIEBSTAG": "21.05.2018",
      "verspaetung": 124
    },
    {
      "": 142,
      "BETRIEBSTAG": "22.05.2018",
      "verspaetung": 100
    },
    {
      "": 143,
      "BETRIEBSTAG": "23.05.2018",
      "verspaetung": 209
    },
    {
      "": 144,
      "BETRIEBSTAG": "25.05.2018",
      "verspaetung": 104
    },
    {
      "": 147,
      "BETRIEBSTAG": "28.05.2018",
      "verspaetung": 169
    },
    {
      "": 148,
      "BETRIEBSTAG": "29.05.2018",
      "verspaetung": 141
    },
    {
      "": 149,
      "BETRIEBSTAG": "30.05.2018",
      "verspaetung": 116
    },
    {
      "": 150,
      "BETRIEBSTAG": "31.05.2018",
      "verspaetung": 134
    },
    {
      "": 151,
      "BETRIEBSTAG": "01.06.2018",
      "verspaetung": 328
    },
    {
      "": 154,
      "BETRIEBSTAG": "04.06.2018",
      "verspaetung": 113
    },
    {
      "": 155,
      "BETRIEBSTAG": "05.06.2018",
      "verspaetung": 179
    },
    {
      "": 156,
      "BETRIEBSTAG": "06.06.2018",
      "verspaetung": 102
    },
    {
      "": 157,
      "BETRIEBSTAG": "07.06.2018",
      "verspaetung": 122
    },
    {
      "": 158,
      "BETRIEBSTAG": "08.06.2018",
      "verspaetung": 177
    },
    {
      "": 161,
      "BETRIEBSTAG": "11.06.2018",
      "verspaetung": 93
    },
    {
      "": 162,
      "BETRIEBSTAG": "12.06.2018",
      "verspaetung": 145
    },
    {
      "": 163,
      "BETRIEBSTAG": "13.06.2018",
      "verspaetung": 199
    },
    {
      "": 164,
      "BETRIEBSTAG": "14.06.2018",
      "verspaetung": 99
    },
    {
      "": 165,
      "BETRIEBSTAG": "15.06.2018",
      "verspaetung": 232
    },
    {
      "": 168,
      "BETRIEBSTAG": "18.06.2018",
      "verspaetung": 107
    },
    {
      "": 169,
      "BETRIEBSTAG": "19.06.2018",
      "verspaetung": 131
    },
    {
      "": 170,
      "BETRIEBSTAG": "20.06.2018",
      "verspaetung": 208
    },
    {
      "": 171,
      "BETRIEBSTAG": "21.06.2018",
      "verspaetung": 88
    },
    {
      "": 172,
      "BETRIEBSTAG": "22.06.2018",
      "verspaetung": 190
    },
    {
      "": 175,
      "BETRIEBSTAG": "25.06.2018",
      "verspaetung": 92
    },
    {
      "": 176,
      "BETRIEBSTAG": "26.06.2018",
      "verspaetung": 95
    },
    {
      "": 177,
      "BETRIEBSTAG": "27.06.2018",
      "verspaetung": 183
    },
    {
      "": 178,
      "BETRIEBSTAG": "28.06.2018",
      "verspaetung": 181
    },
    {
      "": 179,
      "BETRIEBSTAG": "29.06.2018",
      "verspaetung": 83
    },
    {
      "": 182,
      "BETRIEBSTAG": "02.07.2018",
      "verspaetung": 78
    },
    {
      "": 183,
      "BETRIEBSTAG": "03.07.2018",
      "verspaetung": 102
    },
    {
      "": 184,
      "BETRIEBSTAG": "04.07.2018",
      "verspaetung": 96
    },
    {
      "": 185,
      "BETRIEBSTAG": "05.07.2018",
      "verspaetung": 211
    },
    {
      "": 186,
      "BETRIEBSTAG": "06.07.2018",
      "verspaetung": 91
    },
    {
      "": 189,
      "BETRIEBSTAG": "09.07.2018",
      "verspaetung": 159
    },
    {
      "": 190,
      "BETRIEBSTAG": "10.07.2018",
      "verspaetung": 98
    },
    {
      "": 191,
      "BETRIEBSTAG": "11.07.2018",
      "verspaetung": 76
    },
    {
      "": 192,
      "BETRIEBSTAG": "12.07.2018",
      "verspaetung": 96
    },
    {
      "": 193,
      "BETRIEBSTAG": "13.07.2018",
      "verspaetung": 141
    },
    {
      "": 196,
      "BETRIEBSTAG": "16.07.2018",
      "verspaetung": 248
    },
    {
      "": 197,
      "BETRIEBSTAG": "17.07.2018",
      "verspaetung": 104
    },
    {
      "": 198,
      "BETRIEBSTAG": "18.07.2018",
      "verspaetung": 125
    },
    {
      "": 199,
      "BETRIEBSTAG": "19.07.2018",
      "verspaetung": 131
    },
    {
      "": 200,
      "BETRIEBSTAG": "20.07.2018",
      "verspaetung": 177
    },
    {
      "": 203,
      "BETRIEBSTAG": "23.07.2018",
      "verspaetung": 107
    },
    {
      "": 204,
      "BETRIEBSTAG": "24.07.2018",
      "verspaetung": 125
    },
    {
      "": 205,
      "BETRIEBSTAG": "25.07.2018",
      "verspaetung": 90
    },
    {
      "": 206,
      "BETRIEBSTAG": "26.07.2018",
      "verspaetung": 112
    },
    {
      "": 207,
      "BETRIEBSTAG": "27.07.2018",
      "verspaetung": 116
    },
    {
      "": 210,
      "BETRIEBSTAG": "30.07.2018",
      "verspaetung": 146
    },
    {
      "": 211,
      "BETRIEBSTAG": "31.07.2018",
      "verspaetung": 165
    },
    {
      "": 212,
      "BETRIEBSTAG": "01.08.2018",
      "verspaetung": 172
    },
    {
      "": 213,
      "BETRIEBSTAG": "02.08.2018",
      "verspaetung": 104
    },
    {
      "": 214,
      "BETRIEBSTAG": "03.08.2018",
      "verspaetung": 118
    },
    {
      "": 217,
      "BETRIEBSTAG": "06.08.2018",
      "verspaetung": 120
    },
    {
      "": 218,
      "BETRIEBSTAG": "07.08.2018",
      "verspaetung": 84
    },
    {
      "": 219,
      "BETRIEBSTAG": "08.08.2018",
      "verspaetung": 112
    },
    {
      "": 220,
      "BETRIEBSTAG": "09.08.2018",
      "verspaetung": 225
    },
    {
      "": 221,
      "BETRIEBSTAG": "10.08.2018",
      "verspaetung": 110
    },
    {
      "": 224,
      "BETRIEBSTAG": "13.08.2018",
      "verspaetung": 96
    },
    {
      "": 225,
      "BETRIEBSTAG": "14.08.2018",
      "verspaetung": 286
    },
    {
      "": 226,
      "BETRIEBSTAG": "15.08.2018",
      "verspaetung": 324
    },
    {
      "": 227,
      "BETRIEBSTAG": "16.08.2018",
      "verspaetung": 106
    },
    {
      "": 228,
      "BETRIEBSTAG": "17.08.2018",
      "verspaetung": 103
    },
    {
      "": 231,
      "BETRIEBSTAG": "20.08.2018",
      "verspaetung": 193
    },
    {
      "": 232,
      "BETRIEBSTAG": "21.08.2018",
      "verspaetung": 160
    },
    {
      "": 233,
      "BETRIEBSTAG": "22.08.2018",
      "verspaetung": 156
    },
    {
      "": 234,
      "BETRIEBSTAG": "23.08.2018",
      "verspaetung": 108
    },
    {
      "": 235,
      "BETRIEBSTAG": "24.08.2018",
      "verspaetung": 234
    },
    {
      "": 238,
      "BETRIEBSTAG": "27.08.2018",
      "verspaetung": 120
    },
    {
      "": 239,
      "BETRIEBSTAG": "28.08.2018",
      "verspaetung": 182
    },
    {
      "": 240,
      "BETRIEBSTAG": "29.08.2018",
      "verspaetung": 147
    },
    {
      "": 241,
      "BETRIEBSTAG": "30.08.2018",
      "verspaetung": 250
    },
    {
      "": 242,
      "BETRIEBSTAG": "31.08.2018",
      "verspaetung": 111
    },
    {
      "": 245,
      "BETRIEBSTAG": "03.09.2018",
      "verspaetung": 134
    },
    {
      "": 246,
      "BETRIEBSTAG": "04.09.2018",
      "verspaetung": 124
    },
    {
      "": 247,
      "BETRIEBSTAG": "05.09.2018",
      "verspaetung": 183
    },
    {
      "": 248,
      "BETRIEBSTAG": "06.09.2018",
      "verspaetung": 120
    },
    {
      "": 249,
      "BETRIEBSTAG": "07.09.2018",
      "verspaetung": 146
    },
    {
      "": 252,
      "BETRIEBSTAG": "10.09.2018",
      "verspaetung": 117
    },
    {
      "": 253,
      "BETRIEBSTAG": "11.09.2018",
      "verspaetung": 153
    },
    {
      "": 254,
      "BETRIEBSTAG": "12.09.2018",
      "verspaetung": 323
    },
    {
      "": 255,
      "BETRIEBSTAG": "13.09.2018",
      "verspaetung": 97
    },
    {
      "": 256,
      "BETRIEBSTAG": "14.09.2018",
      "verspaetung": "#WERT!"
    },
    {
      "": 259,
      "BETRIEBSTAG": "17.09.2018",
      "verspaetung": 141
    },
    {
      "": 260,
      "BETRIEBSTAG": "18.09.2018",
      "verspaetung": 483
    },
    {
      "": 261,
      "BETRIEBSTAG": "19.09.2018",
      "verspaetung": 178
    },
    {
      "": 262,
      "BETRIEBSTAG": "20.09.2018",
      "verspaetung": 99
    },
    {
      "": 263,
      "BETRIEBSTAG": "21.09.2018",
      "verspaetung": 92
    },
    {
      "": 266,
      "BETRIEBSTAG": "24.09.2018",
      "verspaetung": 118
    },
    {
      "": 267,
      "BETRIEBSTAG": "25.09.2018",
      "verspaetung": 143
    },
    {
      "": 268,
      "BETRIEBSTAG": "26.09.2018",
      "verspaetung": 115
    },
    {
      "": 269,
      "BETRIEBSTAG": "27.09.2018",
      "verspaetung": 194
    },
    {
      "": 270,
      "BETRIEBSTAG": "28.09.2018",
      "verspaetung": 77
    },
    {
      "": 273,
      "BETRIEBSTAG": "01.10.2018",
      "verspaetung": 240
    },
    {
      "": 274,
      "BETRIEBSTAG": "02.10.2018",
      "verspaetung": 101
    },
    {
      "": 275,
      "BETRIEBSTAG": "03.10.2018",
      "verspaetung": 130
    },
    {
      "": 276,
      "BETRIEBSTAG": "04.10.2018",
      "verspaetung": 134
    },
    {
      "": 277,
      "BETRIEBSTAG": "05.10.2018",
      "verspaetung": 250
    },
    {
      "": 280,
      "BETRIEBSTAG": "08.10.2018",
      "verspaetung": 105
    },
    {
      "": 281,
      "BETRIEBSTAG": "09.10.2018",
      "verspaetung": 107
    },
    {
      "": 282,
      "BETRIEBSTAG": "10.10.2018",
      "verspaetung": 140
    },
    {
      "": 283,
      "BETRIEBSTAG": "11.10.2018",
      "verspaetung": 262
    },
    {
      "": 284,
      "BETRIEBSTAG": "12.10.2018",
      "verspaetung": 213
    },
    {
      "": 287,
      "BETRIEBSTAG": "15.10.2018",
      "verspaetung": 110
    },
    {
      "": 288,
      "BETRIEBSTAG": "16.10.2018",
      "verspaetung": 189
    },
    {
      "": 289,
      "BETRIEBSTAG": "17.10.2018",
      "verspaetung": 100
    },
    {
      "": 290,
      "BETRIEBSTAG": "18.10.2018",
      "verspaetung": 112
    },
    {
      "": 291,
      "BETRIEBSTAG": "19.10.2018",
      "verspaetung": 80
    },
    {
      "": 294,
      "BETRIEBSTAG": "22.10.2018",
      "verspaetung": 146
    },
    {
      "": 295,
      "BETRIEBSTAG": "23.10.2018",
      "verspaetung": 110
    },
    {
      "": 296,
      "BETRIEBSTAG": "24.10.2018",
      "verspaetung": 257
    },
    {
      "": 297,
      "BETRIEBSTAG": "25.10.2018",
      "verspaetung": 157
    },
    {
      "": 298,
      "BETRIEBSTAG": "26.10.2018",
      "verspaetung": 136
    },
    {
      "": 300,
      "BETRIEBSTAG": "28.10.2018",
      "verspaetung": 0
    },
    {
      "": 301,
      "BETRIEBSTAG": "29.10.2018",
      "verspaetung": 186
    },
    {
      "": 302,
      "BETRIEBSTAG": "30.10.2018",
      "verspaetung": 93
    },
    {
      "": 303,
      "BETRIEBSTAG": "31.10.2018",
      "verspaetung": 124
    },
    {
      "": 304,
      "BETRIEBSTAG": "01.11.2018",
      "verspaetung": 494
    },
    {
      "": 305,
      "BETRIEBSTAG": "03.11.2018",
      "verspaetung": 0
    },
    {
      "": 306,
      "BETRIEBSTAG": "04.11.2018",
      "verspaetung": 0
    },
    {
      "": 307,
      "BETRIEBSTAG": "05.11.2018",
      "verspaetung": 128
    },
    {
      "": 308,
      "BETRIEBSTAG": "06.11.2018",
      "verspaetung": 516
    },
    {
      "": 309,
      "BETRIEBSTAG": "07.11.2018",
      "verspaetung": 145
    },
    {
      "": 310,
      "BETRIEBSTAG": "08.11.2018",
      "verspaetung": 146
    },
    {
      "": 311,
      "BETRIEBSTAG": "09.11.2018",
      "verspaetung": 132
    },
    {
      "": 312,
      "BETRIEBSTAG": "10.11.2018",
      "verspaetung": 0
    },
    {
      "": 313,
      "BETRIEBSTAG": "11.11.2018",
      "verspaetung": 0
    },
    {
      "": 314,
      "BETRIEBSTAG": "12.11.2018",
      "verspaetung": 91
    },
    {
      "": 315,
      "BETRIEBSTAG": "13.11.2018",
      "verspaetung": 110
    },
    {
      "": 316,
      "BETRIEBSTAG": "14.11.2018",
      "verspaetung": 73
    },
    {
      "": 317,
      "BETRIEBSTAG": "15.11.2018",
      "verspaetung": 203
    },
    {
      "": 318,
      "BETRIEBSTAG": "16.11.2018",
      "verspaetung": 153
    },
    {
      "": 319,
      "BETRIEBSTAG": "17.11.2018",
      "verspaetung": 0
    },
    {
      "": 320,
      "BETRIEBSTAG": "18.11.2018",
      "verspaetung": 0
    },
    {
      "": 321,
      "BETRIEBSTAG": "19.11.2018",
      "verspaetung": 88
    },
    {
      "": 322,
      "BETRIEBSTAG": "20.11.2018",
      "verspaetung": 249
    },
    {
      "": 323,
      "BETRIEBSTAG": "21.11.2018",
      "verspaetung": 77
    },
    {
      "": 324,
      "BETRIEBSTAG": "22.11.2018",
      "verspaetung": 145
    },
    {
      "": 325,
      "BETRIEBSTAG": "23.11.2018",
      "verspaetung": 101
    },
    {
      "": 326,
      "BETRIEBSTAG": "24.11.2018",
      "verspaetung": 0
    },
    {
      "": 327,
      "BETRIEBSTAG": "25.11.2018",
      "verspaetung": 0
    },
    {
      "": 328,
      "BETRIEBSTAG": "26.11.2018",
      "verspaetung": 103
    },
    {
      "": 329,
      "BETRIEBSTAG": "27.11.2018",
      "verspaetung": 132
    },
    {
      "": 330,
      "BETRIEBSTAG": "28.11.2018",
      "verspaetung": 496
    },
    {
      "": 331,
      "BETRIEBSTAG": "29.11.2018",
      "verspaetung": 164
    },
    {
      "": 332,
      "BETRIEBSTAG": "30.11.2018",
      "verspaetung": 107
    },
    {
      "": 333,
      "BETRIEBSTAG": "01.12.2018",
      "verspaetung": 0
    },
    {
      "": 334,
      "BETRIEBSTAG": "02.12.2018",
      "verspaetung": 0
    },
    {
      "": 335,
      "BETRIEBSTAG": "03.12.2018",
      "verspaetung": 154
    },
    {
      "": 336,
      "BETRIEBSTAG": "04.12.2018",
      "verspaetung": 127
    },
    {
      "": 337,
      "BETRIEBSTAG": "05.12.2018",
      "verspaetung": 131
    },
    {
      "": 338,
      "BETRIEBSTAG": "06.12.2018",
      "verspaetung": 197
    },
    {
      "": 339,
      "BETRIEBSTAG": "07.12.2018",
      "verspaetung": 87
    },
    {
      "": 340,
      "BETRIEBSTAG": "08.12.2018",
      "verspaetung": 0
    },
    {
      "": 341,
      "BETRIEBSTAG": "09.12.2018",
      "verspaetung": 0
    },
    {
      "": 342,
      "BETRIEBSTAG": "10.12.2018",
      "verspaetung": 128
    },
    {
      "": 343,
      "BETRIEBSTAG": "11.12.2018",
      "verspaetung": 94
    },
    {
      "": 344,
      "BETRIEBSTAG": "12.12.2018",
      "verspaetung": 96
    },
    {
      "": 345,
      "BETRIEBSTAG": "13.12.2018",
      "verspaetung": 127
    },
    {
      "": 346,
      "BETRIEBSTAG": "14.12.2018",
      "verspaetung": 97
    },
    {
      "": 347,
      "BETRIEBSTAG": "15.12.2018",
      "verspaetung": 0
    },
    {
      "": 348,
      "BETRIEBSTAG": "16.12.2018",
      "verspaetung": 0
    },
    {
      "": 349,
      "BETRIEBSTAG": "17.12.2018",
      "verspaetung": 106
    },
    {
      "": 350,
      "BETRIEBSTAG": "18.12.2018",
      "verspaetung": 149
    },
    {
      "": 351,
      "BETRIEBSTAG": "19.12.2018",
      "verspaetung": 79
    },
    {
      "": 352,
      "BETRIEBSTAG": "20.12.2018",
      "verspaetung": 92
    },
    {
      "": 353,
      "BETRIEBSTAG": "21.12.2018",
      "verspaetung": 156
    },
    {
      "": 354,
      "BETRIEBSTAG": "22.12.2018",
      "verspaetung": 0
    },
    {
      "": 355,
      "BETRIEBSTAG": "23.12.2018",
      "verspaetung": 0
    },
    {
      "": 356,
      "BETRIEBSTAG": "24.12.2018",
      "verspaetung": 116
    },
    {
      "": 357,
      "BETRIEBSTAG": "25.12.2018",
      "verspaetung": 137
    },
    {
      "": 358,
      "BETRIEBSTAG": "26.12.2018",
      "verspaetung": 210
    },
    {
      "": 359,
      "BETRIEBSTAG": "27.12.2018",
      "verspaetung": 101
    },
    {
      "": 360,
      "BETRIEBSTAG": "28.12.2018",
      "verspaetung": 93
    },
    {
      "": 361,
      "BETRIEBSTAG": "29.12.2018",
      "verspaetung": 0
    },
    {
      "": 362,
      "BETRIEBSTAG": "30.12.2018",
      "verspaetung": 0
    },
    {
      "": 363,
      "BETRIEBSTAG": "31.12.2018",
      "verspaetung": 164
    },
    {
      "": "",
      "BETRIEBSTAG": "",
      "verspaetung": 0
    },
    {
      "": "",
      "BETRIEBSTAG": "",
      "verspaetung": 0
    }
  ]`);

var combinedDataNormalized = combinedData.map((input) =>{
    return { "date": input.BETRIEBSTAG, "count": input.verspaetung }
});