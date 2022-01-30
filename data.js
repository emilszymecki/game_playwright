const data = [
    {
      "EIN": "80-1579069",
      "Company Name": "Meetz",
      "Sector": "Technology",
      "Address": "9 Thompson Center",
      "Automation Tool": "UiPath",
      "Annual Saving": "$282317.42",
      "Date": "25/07/2019"
    },
    {
      "EIN": "87-5018740",
      "Company Name": "Rhybox",
      "Sector": "Consumer Services",
      "Address": "54 Harbort Way",
      "Automation Tool": "Python",
      "Annual Saving": "$813313.08",
      "Date": "15/09/2019"
    },
    {
      "EIN": "62-8933114",
      "Company Name": "Rhyzio",
      "Sector": "Energy",
      "Address": "97 Montana Trail",
      "Automation Tool": "Blueprism",
      "Annual Saving": "$3654561.03",
      "Date": "12/05/2021"
    },
    {
      "EIN": "92-5273061",
      "Company Name": "Jayo",
      "Sector": "n/a",
      "Address": "1 Cherokee Pass",
      "Automation Tool": "Microsoft Power Automate",
      "Annual Saving": "$641180.04",
      "Date": "29/03/2018"
    },
    {
      "EIN": "38-9011924",
      "Company Name": "Buzzshare",
      "Sector": "Consumer Services",
      "Address": "677 Magdeline Lane",
      "Automation Tool": "Selenium",
      "Annual Saving": "$9178369.68",
      "Date": "11/01/2022"
    },
    {
      "EIN": "12-2358361",
      "Company Name": "Browsedrive",
      "Sector": "Health Care",
      "Address": "0814 Crownhardt Terrace",
      "Automation Tool": "Python",
      "Annual Saving": "$2983461.21",
      "Date": "29/05/2019"
    },
    {
      "EIN": "96-8033504",
      "Company Name": "Jabbersphere",
      "Sector": "Finance",
      "Address": "808 Nancy Point",
      "Automation Tool": "UiPath",
      "Annual Saving": "$2029971.17",
      "Date": "14/07/2021"
    },
    {
      "EIN": "63-7890035",
      "Company Name": "Pixoboo",
      "Sector": "Finance",
      "Address": "37 Garrison Road",
      "Automation Tool": "Microsoft Power Automate",
      "Annual Saving": "$9421042.94",
      "Date": "26/12/2022"
    },
    {
      "EIN": "47-2219509",
      "Company Name": "Lazz",
      "Sector": "Public Utilities",
      "Address": "024 Charing Cross Road",
      "Automation Tool": "Selenium",
      "Annual Saving": "$6625426.81",
      "Date": "02/08/2017"
    },
    {
      "EIN": "25-7471407",
      "Company Name": "Oba",
      "Sector": "Finance",
      "Address": "787 David Place",
      "Automation Tool": "Blueprism",
      "Annual Saving": "$8892471.99",
      "Date": "07/11/2017"
    },
    {
      "EIN": "71-1625217",
      "Company Name": "Leexo",
      "Sector": "n/a",
      "Address": "83449 Becker Drive",
      "Automation Tool": "Other",
      "Annual Saving": "$1993747.06",
      "Date": "03/01/2020"
    },
    {
      "EIN": "39-7237352",
      "Company Name": "Zoombeat",
      "Sector": "Health Care",
      "Address": "15 Dayton Parkway",
      "Automation Tool": "Microsoft Power Automate",
      "Annual Saving": "$7895436.65",
      "Date": "02/01/2022"
    },
    {
      "EIN": "62-4470052",
      "Company Name": "Vinder",
      "Sector": "Health Care",
      "Address": "90 Fremont Park",
      "Automation Tool": "Other",
      "Annual Saving": "$6066843.46",
      "Date": "13/11/2017"
    },
    {
      "EIN": "30-6320283",
      "Company Name": "Agivu",
      "Sector": "n/a",
      "Address": "36 Muir Center",
      "Automation Tool": "Other",
      "Annual Saving": "$8577367.58",
      "Date": "23/07/2019"
    },
    {
      "EIN": "27-5964510",
      "Company Name": "Devbug",
      "Sector": "Basic Industries",
      "Address": "6272 Erie Hill",
      "Automation Tool": "Blueprism",
      "Annual Saving": "$1067892.54",
      "Date": "29/03/2018"
    },
    {
      "EIN": "96-4637568",
      "Company Name": "Edgeblab",
      "Sector": "Consumer Non-Durables",
      "Address": "5431 Sullivan Hill",
      "Automation Tool": "Blueprism",
      "Annual Saving": "$5403821.46",
      "Date": "13/04/2019"
    },
    {
      "EIN": "64-9788583",
      "Company Name": "Wordify",
      "Sector": "Consumer Non-Durables",
      "Address": "57 Sommers Circle",
      "Automation Tool": "Other",
      "Annual Saving": "$7331356.11",
      "Date": "11/04/2019"
    },
    {
      "EIN": "24-7240266",
      "Company Name": "Jayo",
      "Sector": "n/a",
      "Address": "90058 Dayton Parkway",
      "Automation Tool": "Microsoft Power Automate",
      "Annual Saving": "$4620561.38",
      "Date": "08/08/2017"
    },
    {
      "EIN": "26-4295742",
      "Company Name": "Kwideo",
      "Sector": "Consumer Services",
      "Address": "1549 Trailsway Court",
      "Automation Tool": "Microsoft Power Automate",
      "Annual Saving": "$3296311.62",
      "Date": "25/10/2021"
    },
    {
      "EIN": "88-7839321",
      "Company Name": "Mycat",
      "Sector": "n/a",
      "Address": "78 Oriole Center",
      "Automation Tool": "Python",
      "Annual Saving": "$2937135.67",
      "Date": "16/08/2021"
    },
    {
      "EIN": "29-9087053",
      "Company Name": "Tambee",
      "Sector": "Capital Goods",
      "Address": "4 John Wall Trail",
      "Automation Tool": "Automation Anywhere",
      "Annual Saving": "$1865307.63",
      "Date": "07/11/2018"
    },
    {
      "EIN": "87-6690084",
      "Company Name": "Fivespan",
      "Sector": "n/a",
      "Address": "15 Maywood Way",
      "Automation Tool": "Automation Anywhere",
      "Annual Saving": "$9906914.72",
      "Date": "01/01/2022"
    },
    {
      "EIN": "71-1782596",
      "Company Name": "Yakijo",
      "Sector": "Health Care",
      "Address": "30 Mallory Road",
      "Automation Tool": "Python",
      "Annual Saving": "$2341585.44",
      "Date": "10/11/2022"
    },
    {
      "EIN": "86-6277862",
      "Company Name": "Geba",
      "Sector": "Finance",
      "Address": "225 Superior Point",
      "Automation Tool": "Microsoft Power Automate",
      "Annual Saving": "$6968103.27",
      "Date": "06/10/2019"
    },
    {
      "EIN": "18-3244728",
      "Company Name": "Voolia",
      "Sector": "Finance",
      "Address": "616 Oak Parkway",
      "Automation Tool": "Microsoft Power Automate",
      "Annual Saving": "$3310207.11",
      "Date": "15/06/2020"
    },
    {
      "EIN": "65-8087877",
      "Company Name": "Quatz",
      "Sector": "Finance",
      "Address": "9762 Gulseth Hill",
      "Automation Tool": "Blueprism",
      "Annual Saving": "$4842136.43",
      "Date": "16/10/2020"
    },
    {
      "EIN": "33-9694147",
      "Company Name": "Twiyo",
      "Sector": "Health Care",
      "Address": "630 Dryden Crossing",
      "Automation Tool": "Microsoft Power Automate",
      "Annual Saving": "$9327271.97",
      "Date": "12/10/2022"
    },
    {
      "EIN": "37-6153894",
      "Company Name": "Wordtune",
      "Sector": "Health Care",
      "Address": "78946 Kedzie Court",
      "Automation Tool": "Microsoft Power Automate",
      "Annual Saving": "$1804201.93",
      "Date": "14/10/2017"
    },
    {
      "EIN": "47-4450757",
      "Company Name": "Twimbo",
      "Sector": "Capital Goods",
      "Address": "90 Rutledge Trail",
      "Automation Tool": "Microsoft Power Automate",
      "Annual Saving": "$6737678.55",
      "Date": "25/11/2021"
    },
    {
      "EIN": "22-0274256",
      "Company Name": "Skinder",
      "Sector": "n/a",
      "Address": "10473 Sachs Court",
      "Automation Tool": "UiPath",
      "Annual Saving": "$8680714.27",
      "Date": "06/04/2022"
    },
    {
      "EIN": "84-6831613",
      "Company Name": "Thoughtworks",
      "Sector": "Energy",
      "Address": "48 Homewood Crossing",
      "Automation Tool": "UiPath",
      "Annual Saving": "$4655062.51",
      "Date": "30/09/2021"
    },
    {
      "EIN": "62-4801454",
      "Company Name": "Buzzshare",
      "Sector": "Consumer Services",
      "Address": "5077 Nobel Terrace",
      "Automation Tool": "Blueprism",
      "Annual Saving": "$6360104.43",
      "Date": "23/06/2020"
    },
    {
      "EIN": "26-9547060",
      "Company Name": "Dynazzy",
      "Sector": "Miscellaneous",
      "Address": "79 Hazelcrest Place",
      "Automation Tool": "Selenium",
      "Annual Saving": "$7529974.85",
      "Date": "03/07/2017"
    },
    {
      "EIN": "70-2276326",
      "Company Name": "Trupe",
      "Sector": "Finance",
      "Address": "03972 Katie Circle",
      "Automation Tool": "UiPath",
      "Annual Saving": "$9471976.68",
      "Date": "06/02/2020"
    },
    {
      "EIN": "61-2721674",
      "Company Name": "Dabfeed",
      "Sector": "n/a",
      "Address": "90 Dahle Plaza",
      "Automation Tool": "Blueprism",
      "Annual Saving": "$4496698.00",
      "Date": "11/09/2018"
    },
    {
      "EIN": "82-7627032",
      "Company Name": "Aibox",
      "Sector": "Consumer Non-Durables",
      "Address": "3 Muir Way",
      "Automation Tool": "Microsoft Power Automate",
      "Annual Saving": "$1946062.00",
      "Date": "04/12/2018"
    },
    {
      "EIN": "77-0791332",
      "Company Name": "Fivespan",
      "Sector": "Technology",
      "Address": "60942 Carioca Place",
      "Automation Tool": "Blueprism",
      "Annual Saving": "$653533.14",
      "Date": "06/12/2017"
    },
    {
      "EIN": "67-9177929",
      "Company Name": "Janyx",
      "Sector": "n/a",
      "Address": "41366 Lawn Trail",
      "Automation Tool": "Automation Anywhere",
      "Annual Saving": "$6412659.51",
      "Date": "07/01/2020"
    },
    {
      "EIN": "06-2505834",
      "Company Name": "Livefish",
      "Sector": "Health Care",
      "Address": "2763 Elka Road",
      "Automation Tool": "Automation Anywhere",
      "Annual Saving": "$2596704.52",
      "Date": "24/12/2019"
    },
    {
      "EIN": "32-3551328",
      "Company Name": "Jayo",
      "Sector": "Consumer Services",
      "Address": "14855 Steensland Hill",
      "Automation Tool": "Python",
      "Annual Saving": "$6146577.21",
      "Date": "18/02/2021"
    },
    {
      "EIN": "05-7863278",
      "Company Name": "Centidel",
      "Sector": "Consumer Services",
      "Address": "2 Sunnyside Court",
      "Automation Tool": "Automation Anywhere",
      "Annual Saving": "$9770055.04",
      "Date": "16/01/2020"
    },
    {
      "EIN": "99-4164657",
      "Company Name": "Demizz",
      "Sector": "Basic Industries",
      "Address": "27 Springs Court",
      "Automation Tool": "Blueprism",
      "Annual Saving": "$493541.05",
      "Date": "02/03/2022"
    },
    {
      "EIN": "16-9623079",
      "Company Name": "Realpoint",
      "Sector": "Finance",
      "Address": "7349 Schlimgen Trail",
      "Automation Tool": "Blueprism",
      "Annual Saving": "$2486671.62",
      "Date": "24/10/2020"
    },
    {
      "EIN": "99-8600503",
      "Company Name": "Reallinks",
      "Sector": "Finance",
      "Address": "43 Mariners Cove Junction",
      "Automation Tool": "Python",
      "Annual Saving": "$8265908.50",
      "Date": "22/05/2021"
    },
    {
      "EIN": "98-9036902",
      "Company Name": "Devpulse",
      "Sector": "Consumer Services",
      "Address": "62905 Merrick Terrace",
      "Automation Tool": "Selenium",
      "Annual Saving": "$966461.53",
      "Date": "24/09/2019"
    },
    {
      "EIN": "65-0282634",
      "Company Name": "Vimbo",
      "Sector": "Energy",
      "Address": "1722 Bonner Place",
      "Automation Tool": "Automation Anywhere",
      "Annual Saving": "$6765637.78",
      "Date": "13/07/2022"
    },
    {
      "EIN": "66-3798280",
      "Company Name": "Babblestorm",
      "Sector": "Capital Goods",
      "Address": "1459 Lighthouse Bay Point",
      "Automation Tool": "Microsoft Power Automate",
      "Annual Saving": "$9737048.66",
      "Date": "24/02/2019"
    },
    {
      "EIN": "45-0072498",
      "Company Name": "Thoughtblab",
      "Sector": "n/a",
      "Address": "56 Ohio Park",
      "Automation Tool": "UiPath",
      "Annual Saving": "$624273.52",
      "Date": "19/03/2021"
    },
    {
      "EIN": "25-3231762",
      "Company Name": "Jaxworks",
      "Sector": "Capital Goods",
      "Address": "1 Bellgrove Trail",
      "Automation Tool": "UiPath",
      "Annual Saving": "$5963046.52",
      "Date": "20/08/2022"
    },
    {
      "EIN": "56-3594599",
      "Company Name": "Minyx",
      "Sector": "n/a",
      "Address": "5 Meadow Valley Alley",
      "Automation Tool": "Other",
      "Annual Saving": "$5314756.74",
      "Date": "09/03/2022"
    }
  ];

  exports.data = data;