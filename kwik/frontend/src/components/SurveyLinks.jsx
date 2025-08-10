import React from "react";

const surveyLinks = [
  {
    name: "BitLabs",
    color: "bg-green-100",
    url: "https://web.bitlabs.ai/?token=USER_ID",
    logo: "https://bitlabs.ai/favicon.ico",
  },
  {
    name: "inbrain.ai",
    color: "bg-blue-100",
    url: "https://survey.inbrain.ai/surveys?uid=USER_ID",
    logo: "https://inbrain.ai/favicon.ico",
  },
  {
    name: "Samplicious",
    color: "bg-yellow-100",
    url: "https://www.samplicio.us/surveys?partnerId=USER_ID",
    logo: "https://samplicio.us/favicon.ico",
  },
];

export default function SurveyLinks({ userId }) {
  return (
    <div className="flex flex-col gap-4">
      {surveyLinks.map((s) => (
        <a
          key={s.name}
          href={s.url.replace("USER_ID", userId)}
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.color} p-4 flex items-center rounded-lg shadow hover:scale-105 transition-transform`}
        >
          <img src={s.logo} alt="" className="w-8 h-8 mr-4" />
          <span className="font-semibold text-gray-800">{s.name} Surveys</span>
        </a>
      ))}
    </div>
  );
}