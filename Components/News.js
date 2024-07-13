import React, { useEffect, useState } from "react";
import axios from "axios";

const DummyNews = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(
  //         "https://alagaby-dummynews-api.vercel.app/news"
  //       );
  //       const newsData = res.data.data;
  //       setNews(newsData);
  //     } catch (error) {
  //       console.error("Error fetching news:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <h4 className="text-2xl font-bold text-black ml-24 max-sm:m-10">
        TOP NEWS INSIGHTS ↘
      </h4>
      {news.length === 0 ? (
        <p className="text-2xl font-thin text-white ml-24">Loading...</p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 max-sm:px-6 px-24 py-8 justify-center items-center">
          {news
            .slice()
            .reverse()
            .map((data, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 bg-white border text-black border-neutral-200 p-4 rounded-md shadow-md h-full"
              >
                <div className="flex justify-center">
                  {data.image ? (
                    <img
                      className="h-40 w-40 max-sm:h-16 max-sm:w-16 object-cover rounded-md mb-4 border border-gray-100"
                      src={data.image}
                      alt=" :') "
                    />
                  ) : (
                    <img
                      className="h-40 w-40 max-sm:h-16 max-sm:w-16 object-cover rounded-md mb-4 border border-gray-100"
                      src="/newsLogo.png"
                      alt=" :') "
                    />
                  )}
                </div>

                <div className="flex flex-col justify-center flex-grow">
                  <h6 className="text-md text-black font-semibold mb-2">
                    {data.title}
                  </h6>
                  <p className="text-black">{data.description}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};
const news = [
  {
    _id: {
      $oid: "661d4aa04f10d6fc082ee51d",
    },
    title:
      "&#039;First people on Mars in 7-9 years&#039;: Elon Musk envisions 1,000 spaceships take off for the red planet",
    description:
      "In a conversation with Nicolai Tangen, the CEO of Norway’s Norges Bank Investment Management, Musk said that SpaceX would also be sending people to the Moon, which would be sooner than the human mission to Mars.",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa04f10d6fc082ee521",
    },
    title:
      "&#039;Pranab Mukherjee, Chidambaram used to pressurise RBI to present rosier picture of growth,&#039; claims ex-Governor Subbarao",
    description:
      "Subbarao was finance secretary (2007-08) before taking over as the governor of the RBI for five years on September 5, 2008. ",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa04f10d6fc082ee523",
    },
    title:
      "IPO Market Action: 3 public issues to open for subscription with 2 listings scheduled next week - Moneycontrol",
    description:
      "The SME segment will remain busy with two IPOs opening for subscription and two companies listing shares, in the coming week.",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa04f10d6fc082ee525",
    },
    title:
      "Israel-Iran conflict: Policymakers, experts keep close tab on escalating tensions",
    description:
      "Commerce secretary says ministry monitoring issues, will take measures as required; experts say any escalation of the conflict could lead to higher oil prices",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa04f10d6fc082ee527",
    },
    title:
      "TCS announces salary hikes: Here’s what employees can expect - India Today",
    description:
      "TCS Chief HR Officer said that the salary hikes will range from 45 to 7 based on individual performance Exceptional performers can anticipate double-digit increments",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa04f10d6fc082ee52b",
    },
    title:
      "MoRTH looks at record ₹60,000 crore monetization in FY25 | Mint - Mint",
    description:
      "MoRTH plans to raise record  ₹60,000 crore through monetization this fiscal, with a focus on toll-operate-transfer highways and NHAI InvIT. The target is part of the national monetization pipeline to achieve  ₹1.6 trillion by FY25.",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa04f10d6fc082ee529",
    },
    title:
      "Iran-Israel hostilities: India to take policy stance once impact of conflict is understood",
    description:
      "Iran-Israel conflict: India, meanwhile, has asked its citizens to not travel to Iran and Israel until further notice in view of the prevailing situation in the region. ",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa04f10d6fc082ee52f",
    },
    title:
      "Oil seen opening up after Iran's attack on Israel, but further gains may depend on response - Investing.com",
    description:
      "Oil seen opening up after Iran's attack on Israel, but further gains may depend on response",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa04f10d6fc082ee52d",
    },
    title:
      "Mahindra Group to invest Rs 1,200 cr in renewable energy, set up 150 MW hybrid project",
    description:
      "The hybrid project will be developed by Mahindra Susten, which is part of the group, and will have global investor Ontario Teachers’ Pension Plan Board as a strategic partner.",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee531",
    },
    title: "Tesla scouts for its first India showroom locations: Report",
    description:
      "The US carmaker wants to begin with a showroom of 3,000 to 5,000 square feet (280-465 square metres) as well as a service hub in each city",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee533",
    },
    title: "Jeep Wrangler facelift India launch on April 22 - Team-BHP",
    description:
      "Jeep is all set to launch the updated Wrangler in India on April 22. The facelift version gets several updates both inside and out. The Jeep Wrangler facelift made its global debut last year. As part of the update, the SUV gets a revised front grille with bla…",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee535",
    },
    title:
      "Zerodha&#039;s Nikhil Kamath launches WTFund to empower young entrepreneurs",
    description:
      "The WTFund will offer a package including a non-dilutive grant of Rs 20 lakh and will enable founders to retain full equity in their ventures",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee537",
    },
    title:
      "Hyderabad: Lamborghini set ablaze over money issues, case booked - The Siasat Daily",
    description:
      "A Lamborghini worth Rs 1 crore was set on fire by a group at Pahadi Shareef. The group, who posed as potential buyers, had ulterior motives.",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee539",
    },
    title:
      "NCLT rejects bankruptcy plea filed by SBI, IDBI against Mumbai Metro One: Reliance Infra",
    description:
      "Earlier, this month the Supreme Court overturned its prior ruling that compelled the DMRC to pay an arbitration award of around Rs 8,000 crore to Reliance Infra's subsidiary, Delhi Airport Metro Express Pvt Ltd",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee53b",
    },
    title:
      "Ahead of Market: 10 things that will decide D-Street action on Monday - The Economic Times",
    description:
      "Nifty on Friday ended 234 points lower to form a Doji candle on the weekly scale. On the daily charts, the index closed below the lows of the previous three sessions, indicating weakness. The index is in the process of retracing the rise it has witnessed from…",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee53d",
    },
    title: "Higher food price drives wholesale inflation to 0.53% in March",
    description:
      "The commerce ministry attributed the rise in inflation to increase in prices of food articles, electricity, crude petroleum & natural gas, machinery & equipment and other manufacturing, etc",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee53f",
    },
    title: "Adani Investment Makes LIC Richer By Nearly 60% - NDTV Profit",
    description:
      "Despite trimming its ownership, LIC investments saw a 59% surge in value in FY24, according to stock exchange data.",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee541",
    },
    title:
      "Ambuja Cements to acquire My Home Group&#039;s cement grinding unit for Rs 413 crore",
    description:
      "The facility is spread across 61 acres and is conveniently located near the Tuticorin Port. The acquisition is expected to enhance the company's footprint across the southern markets of Tamil Nadu and Kerala",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee543",
    },
    title:
      "HDFC share price target 2024: Dividend, Q4 2024 result date and time ANNOUNCED, Time to buy? - ET Now",
    description:
      "HDFC Bank dividend, Q4 FY24 result date and time: HDFC Bank Ltd is a prominent player in the Indian banking sector, known for its strong financial performance and extensive customer base. As of April 12, 2024, HDFC Bank's stock closed at ₹1518.90, showing a d…",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee545",
    },
    title:
      "Iran will soon allow Indian officials to meet 17 Indians in seized ship, it says",
    description:
      "Iran-Israel hostilities: The Iranian Foreign Minister said that the Iranian government was following up on the details related to the seized cargo ship, MSC Aries.",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee547",
    },
    title:
      "Toyota Taisor to be sold as Starlet Cross in overseas markets - Team-BHP",
    description:
      "Toyota recently launched the Urban Cruiser Taisor in India. The carmaker is reportedly planning to export the compact crossover to overseas markets, however, under a different brand name. According to a media report, the made-in-India Urban Cruiser Taisor wil…",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee549",
    },
    title:
      "Ramkrishna Forgings secures Rs 270-cr order for Vande Bharat train set",
    description:
      "The Rs 270-crore order from BHEL-TRSL consortium is for 32 train sets of the sleeper version of the Vande Bharat",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee54b",
    },
    title:
      "Market Trading Guide: IRCTC, Samvardhana Motherson among 5 stock recommendations for Monday - Stock Ideas - The Economic Times",
    description:
      "Benchmark equity indices dropped 1% each on Friday, weighed down by financial and ITstocks, as hot US inflation data dimmed hopes of early interest rate cuts by the Federal Reserve. The S&P BSE Sensex closed 1.06% lower at 74,245, while the NSE Nifty50 index …",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee54d",
    },
    title: "Byju’s CEO Arjun Mohan resigns, edtech to consolidate business",
    description:
      "Byju's CEO Arjun Mohan has resigned from his position just about seven months after he took over",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee54f",
    },
    title: "Hyundai Creta EV interior leaked via new spy images - Team-BHP",
    description:
      "The Hyundai Creta EV has been spotted testing yet again. This time, the spy images reveal the electric SUV’s interior. While the exterior of the Creta EV will be based on the ICE version, the interior will sport a few unique touches. Spy images reveal a 2-spo…",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee553",
    },
    title:
      "Could FII selling intensify next week on higher US CPI, risk aversion due to Iran-Israel conflict? - Moneycontrol",
    description:
      "Escalating Israel-Iran tensions, the rise in bond yields due to hotter-than-expected US inflation and amendment in the India-Mauritius tax treaty is likely to impact FII flow and dampen the sentiments.",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa14f10d6fc082ee551",
    },
    title:
      "Climate groups want Japan&#039;s top banks to have oversight on green goals while lending",
    description:
      "A coalition of climate groups filed shareholder proposals with Japan's top three banks, including Mitsubishi UFJ Financial Group, calling for stricter board oversight of climate-related risk",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa24f10d6fc082ee555",
    },
    title:
      "Iran-Israel hostilities: Oil prices fall after Iranian attack escalates tensions",
    description:
      "Iran attacks Israel: Asian markets began the week on a cautious footing, with MSCI’s broadest index of Asia-Pacific shares outside Japan falling 0.7 per cent.",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa24f10d6fc082ee557",
    },
    title:
      "Let a hundred flowers bloom: Nikhil Kamath’s approach to life and investing explained | Mint - Mint",
    description:
      "The co-founder of Zerodha is also a hedge fund founder and a prop tech and private equity investor, but his animating force these days is WTF, a podcast he launched in early 2023.",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa24f10d6fc082ee559",
    },
    title:
      "&quot;India must step up focus on...&quot;: Anand Mahindra hails Israel&#039;s air defence system",
    description:
      "Anand Mahindra hailed Israel's successful response to knock off the majority of the drones and missiles from the Iranian attack on April 13 and urged India to develop a similar air defence system",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa24f10d6fc082ee55b",
    },
    title:
      "Toyota Discounts April 2024 – Fortuner, Innova, Glanza, Hyryder - GaadiWaadi.com",
    description:
      "Toyota is offering discounts of up to Rs. 1.5 lakh on its select models; Free extended warranty and accessories are also a part of the benefits",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa24f10d6fc082ee55d",
    },
    title:
      "Iran-Israel hostilities: India to remain in touch with both Israel, Iran amid hostilities, says Jaishankar",
    description:
      "Iran attacks Israel: The Ministry of External Affairs expressed its concerns about the escalation of hostilities between Israel and Iran, and called for immediate de-escalation. ",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa24f10d6fc082ee55f",
    },
    title:
      "Q4 Results: Earnings growth is forecast to reduce from 25% in last 9 months to 6-8% on a YoY basis, here's why | Mint - Mint",
    description:
      "The onset of business growth in FY24 was notably favourable, buoyed by a low base in FY23. This upswing was propelled by a sharp decline in global inflation.",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa24f10d6fc082ee561",
    },
    title:
      "&#039;Not for sale&#039;: Alpine&#039;s team boss Bruno Famin talks resilience and commitment to F1",
    description:
      'In an exclusive video call with Formula 1 reporter Lawrence Barretto, Famin stated, "We are not for sale. We have a real project with Alpine.',
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa24f10d6fc082ee563",
    },
    title:
      "Stocks to buy: Motherson and SAIL among top bets, here's why | Mint - Mint",
    description:
      "The Bank Nifty index experienced significant selling pressure, marking a return of bearish momentum after a prolonged period.",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa24f10d6fc082ee565",
    },
    title:
      "&#039;I think it&#039;s not great&#039;: Verstappen questions wisdom of sprint race on China return",
    description:
      "Verstappen expressed reservations about the sprint format being implemented at a circuit where drivers have been absent for five years due to the pandemic.",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa24f10d6fc082ee567",
    },
    title: "Gold shines bright for investors as tension in West Asia flare up",
    description:
      "The precious metal has witnessed a staggering 3 percent increase in just one week, driven by escalating tensions in the Middle East",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa24f10d6fc082ee569",
    },
    title:
      "Bitcoin price pares some losses following Iran's attacks at Israel By Investing.com - Investing.com",
    description:
      "Bitcoin price pares some losses following Iran's attacks at Israel",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa24f10d6fc082ee56b",
    },
    title: "Auto exports record 5.5 percent decline in FY24: SIAM data",
    description:
      "The last fiscal saw a sizeable drop in commercial vehicle, two-wheeler and three-wheeler shipments, although passenger vehicles grew marginally, according to SIAM data",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa24f10d6fc082ee56d",
    },
    title:
      "Stockology: Week ahead evenly poised between bulls and bears - Moneycontrol",
    description:
      "The auto index looks positive, along with many midcap (auto?) ancillary stocks. Technology and bank stocks are showing negative movement in the coming week.",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa24f10d6fc082ee56f",
    },
    title: "Lahore professor gets back home lost in partition from India",
    description:
      "A door, symbolizing home and memories, made an extraordinary journey from Batala to Mumbai, then Dubai, Karachi, and finally to Lahore, where it found its way to Prof Amin Chohan.",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa24f10d6fc082ee571",
    },
    title:
      "West Asia tensions: AI, Vistara opt for alternative paths for flights",
    description:
      "Air India is the only Indian carrier that operates flights to Israel. It has four weekly flights connecting Delhi and Tel Aviv",
    __v: 0,
  },
  {
    _id: {
      $oid: "661d4aa34f10d6fc082ee573",
    },
    title: "Glenmark recalls 6,528 bottles of blood pressure drug in US",
    description:
      "Glenmark initiated Class Il recall of the drug across the US on March 26",
    __v: 0,
  },
];

export default DummyNews;
