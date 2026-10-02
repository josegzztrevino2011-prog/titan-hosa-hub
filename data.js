/* Titan HOSA site content. The teacher editor on the site can download a new copy of this file.
   Upload it to GitHub (replace this file) to update the live site for everyone.
   Test codes (a): Y = Yes, Texas Area | N = No | C = Confirm with advisor | I = In-person test
   Upload codes (u): N = No | AS = Area & State | ILC = ILC only | S = State | T = Online tracking | F = Forms / special process | C = Confirm with advisor */
var P = "https://texashosa.org/wp-content/uploads/";
function e(n, w, t, s, a, u, note, pdf) { return { n: n, w: w, t: t, s: s, a: a, u: u, note: note || "", pdf: pdf || "" }; }
function ind(n, w, a, u, note, pdf) { return e(n, w, "Individual", "1 person", a, u, note, pdf); }
var JG = "José González", SA = "Sierra Allen", YS = "Yadira Solis", LM = "Lidia Martinez", SB = "Stefania Bautista", KC = "Kyle Cano";
var ELIG = "Eligibility requirements apply; review the event guidelines.";
var UPL = "Upload by the Area deadline. If advancing, follow the State and ILC resubmission requirements.";

window.SITE = {
  // Default teacher code is TITAN2026. Change it in the editor right away.
  codeHash: "131325c1df02b3ece2ca223db417ae876b1e2a2b854ff4e20456246409f1658d",
  update: "Welcome, future health professionals! Check here for chapter updates, meeting details, and competition resources.",
  meetings: [{ day: "23", mon: "Oct", title: "Official Meeting (Mandatory)", sub: "Friday, 2026 · 8:00-8:30 · Room C108" }],
  dates: [
    { day: "2", mon: "Oct", title: "Candy Drive", sub: "Friday, 2026" },
    { day: "17", mon: "Oct", title: "Fall Leadership Conference", sub: "Saturday, 2026" }
  ],
  past: [{ day: "28", mon: "Sep", title: "Fundraiser 9/28 - 10/2", sub: "Monday, 2026 · Outside C Building" }],
  cats: [
    { name: "Health Science", events: [
      ind("Behavioral Health", JG, "Y", "N", "", P + "26-27-Behavioral-Health-Txgl.pdf"),
      ind("Biomedical Equipment Technician", JG, "Y", "N", "", P + "26-27-Bio-Equip-Tech-Txgl.pdf"),
      ind("Dental Terminology", JG, "Y", "N", "", P + "26-27-Dental-Term-Txgl-1.pdf"),
      ind("Healthcare Administration", JG, "Y", "N", "", P + "26-27-Health-Adminstration-Txgl-1.pdf"),
      ind("Health Informatics", JG, "Y", "N", "", P + "26-27-Health-Informatics-Txgl-1.pdf"),
      ind("Human Growth & Development", JG, "Y", "N", "", P + "26-27-Human-Growth-Txgl.pdf"),
      ind("Medical Law & Ethics", JG, "Y", "N", "", P + "26-27-Med-Law-and-Ethics-Txgl.pdf"),
      ind("Medical Math", JG, "Y", "N", "", P + "26-27-Med-Math-Txgl-1.pdf"),
      ind("Medical Reading", JG, "Y", "N", "", P + "26-27-Medical-Reading-Txgl-1.pdf"),
      ind("Medical Spelling", JG, "Y", "N", "", P + "26-27-Med-Spelling-Txgl-1.pdf"),
      ind("Medical Terminology", JG, "Y", "N", "", P + "26-27-Med-Term-Txgl-1.pdf"),
      ind("Nutrition", JG, "Y", "N", "", P + "26-27-Nutrition-Txgl-1.pdf"),
      ind("Pharmacology", SA, "Y", "N", "", P + "26-27-Phamacology-Txgl-1.pdf"),
      ind("Pathophysiology", SA, "Y", "N", "", P + "26-27-Pathophysiology-Txgl-1.pdf"),
      ind("World Health & Disparities", SA, "Y", "N", "", P + "26-27-World-Health-Txgl-1.pdf")
    ] },
    { name: "Health Professions", events: [
      ind("Biotechnology", SA, "Y", "N"),
      ind("Clinical Laboratory Science", SA, "Y", "N"),
      ind("Clinical Specialty", SA, "N", "AS"),
      ind("Dental Science", SA, "Y", "N"),
      ind("Family Medicine Physician", SA, "C", "ILC", "Texas: bring a printed interview verification form; upload it for ILC. Section G lists an Area test, but the event guideline describes interviews and a presentation without a test. Ask your advisor to resolve this discrepancy."),
      ind("Home Health Aide", SA, "Y", "N"),
      ind("Medical Assisting", SA, "Y", "N"),
      ind("Clinical Nursing", "To be assigned", "Y", "N"),
      ind("Nursing Assisting", YS, "Y", "N"),
      ind("Occupational Therapy", YS, "Y", "N"),
      ind("Patient Care Technician", YS, "Y", "N"),
      ind("Pharmacy Science", YS, "Y", "N"),
      ind("Phlebotomy", YS, "Y", "N"),
      ind("Physical Therapy", YS, "Y", "N"),
      ind("Respiratory Therapy", YS, "Y", "N"),
      ind("Sports Medicine", YS, "Y", "N"),
      ind("Surgical Technologist", YS, "Y", "N"),
      ind("Veterinary Science", YS, "Y", "N"),
      ind("Personal Care", YS, "C", "C", ELIG),
      e("Physician Assistant – Medical Case Challenge", JG, "Individual", "2 people", "Y", "N")
    ] },
    { name: "Emergency Preparedness", events: [
      e("CERT Skills", YS, "Team", "2 people", "Y", "N"),
      e("CPR/First Aid", LM, "Team", "2 people", "Y", "N"),
      e("Emergency Medical Technician", LM, "Team", "2 people", "Y", "N"),
      e("MRC Partnership", LM, "Team", "2–6 people", "N", "AS"),
      e("Public Health", LM, "Team", "2–6 people", "N", "AS"),
      e("Mental Health Promotion", LM, "Team", "2–6 people", "N", "AS"),
      ind("Epidemiology", LM, "Y", "N"),
      ind("Life Support Skills", LM, "N", "N", ELIG)
    ] },
    { name: "Leadership", events: [
      ind("Extemporaneous Writing – Health Policy", LM, "N", "ILC", "Write at the event. Texas uses a supplied USB drive; ILC uses a digital upload after the timed writing. No advance online upload or online test."),
      ind("Health Career Photography", LM, "N", "AS"),
      ind("Healthy Living", LM, "Y", "N", "Area Round 1 is online; State rounds are in person. Bring a printed portfolio for the presentation; it is not uploaded."),
      ind("Job Seeking Skills", LM, "N", "AS"),
      ind("Interviewing Skills", LM, "N", "AS", ELIG + " " + UPL),
      ind("Organizational Leadership", SB, "I", "N"),
      ind("Prepared Speaking", SB, "N", "N"),
      ind("Researched Persuasive Writing & Speaking", SB, "N", "AS"),
      ind("Speaking Skills", SB, "N", "N", ELIG)
    ] },
    { name: "Teamwork", events: [
      e("Biomedical Debate", SB, "Team", "3–4 people", "Y", "N"),
      e("Community Awareness", SB, "Team", "2–6 people", "C", "AS", "Upload the portfolio for Area and again for State/ILC if advancing. Section G lists an Area test, but the event guideline uses portfolio judging and a presentation. Ask your advisor to confirm testing."),
      e("Health Education", SB, "Team", "2–6 people", "N", "AS"),
      e("Creative Problem Solving", SB, "Team", "2–6 people", "Y", "N"),
      e("Forensic Science", SB, "Team", "2 people", "Y", "ILC", "Area Round 1 is online. Texas Area/State case-study conclusions are written on paper. ILC requires a digital conclusion submission during Round 2; no advance upload."),
      e("Health Career Display", SB, "Team", "2 people", "N", "AS"),
      e("HOSA Bowl", SB, "Team", "4 people", "Y", "N"),
      e("Research Poster", JG, "Team", "2–4 people", "N", "AS", "Changed to a team event for 2026–2027. " + UPL),
      e("Medical Innovation", KC, "Team", "2–4 people", "N", "AS"),
      e("Parliamentary Procedure", KC, "Team", "5–8 people", "Y", "N"),
      e("Public Service Announcement", KC, "Team", "2–6 people", "N", "AS")
    ] },
    { name: "Texas State Events", events: [
      ind("Medical Art Poster", KC, "N", "N", "Bring the physical poster to competition; no online test or advance digital entry upload is listed."),
      e("Texas HOSA Blood Drive", KC, "Chapter", "Whole chapter", "N", "F", "One student is registered to receive the chapter recognition. Submit the blood-bank verification letter and form for State recognition. The Texas guideline allows mail or email; confirm the conference submission instructions with your advisor."),
      ind("Officer Candidate", KC, "Y", "F", "Officer candidacy; confirm eligibility and application requirements with your advisor. Take the Area officer exam online. Submit application materials and an unlisted video through the candidate application process; see the officer handbook.")
    ] },
    { name: "Recognition", events: [
      e("America's Blood Centers & HOSA Blood Drive", KC, "Chapter", "Whole chapter", "N", "T", "Report donor numbers through the ABC data portal. Texas lists this recognition at ILC only."),
      ind("Barbara James Service Award", KC, "N", "T", "Enter service hours in HATS and have your advisor approve them by the applicable State/ILC deadline."),
      ind("Healthcare Issues Exam", KC, "Y", "N"),
      e("Emotional Well-Being Challenge", KC, "Team", "2–6 people", "N", "ILC", "Submit the presentation video and evaluation tool through the form linked in the guideline. This recognition is offered at ILC only."),
      e("HOSA Happenings", KC, "Chapter", "Whole chapter", "N", "S", "Chapter project coordinated by one appointed member. Submit the chapter communication entry before the Texas State conference deadline using the State submission process."),
      e("HOSA Service Project", "To be assigned", "Chapter", "Whole chapter", "N", "T", "Record volunteer hours and fundraising through NMDP. Complete State submissions by the State conference deadline; follow the ILC deadline when applicable.")
    ] }
  ]
};
