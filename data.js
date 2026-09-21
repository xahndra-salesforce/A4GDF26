const projectsData = {
  "projects": [
    {
      "title": "AccessForce, Forms for All!",
      "full_title": "AccessForce, Forms for All!",
      "track": "AI Fluency Track",
      "category": "winner",
      "awards": [
        "🥇 1st Place — AI Fluency Track",
        "Community Choice — AI Fluency Track"
      ],
      "team": "Jon Jessup",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name AccessForce, Forms for All! Problem to solve People must figure out which agency, program, or form they need, navigate complex PDFs and websites, understand government terminology, follow confusing eligibility paths, remember extensive information, and complete processes that may not adapt to their disability, language, device, or cognitive needs. These barriers disproportionately affect people with disabilities, older adults, people with limited English proficiency, and anyone navigating an unfamiliar or stressful government process. Agencies face the other side of the problem: expensive multilingual phone support, abandoned applications, repetitive questions, translation costs, and limited visibility into exactly where people are getting stuck. Accessibility shouldn't stop at making a PDF readable. Can someone find the right service, understand it, complete it, get help, and successfully accomplish what they came to do? Our solution AccessForce uses AI and Agentforce to audit existing government forms and service experiences for accessibility barriers, redesign them as adaptive conversations, and measure the improvement. A person simply tells AccessForce what they're trying to accomplish; such as “I'm turning 65,” “I can't work because of a disability,” or “I need help paying for food and healthcare.” AI helps identify the relevant government service and form, then transforms the experience into a personalized, accessible conversation. AccessForce adapts to the individual with plain language, one-question-at-a-time guidance, larger text, high contrast, keyboard and voice interaction, screen-reader-friendly design, multilingual conversations, save-and-resume, and human escalation. Our AccessForce Accessibility Experience Score (AXS) audits technical, cognitive, language, and process accessibility and creates a measurable before-and-after comparison required by the Type C challenge. With Salesforce Government Cloud, application drafts and accessibility preferences can be securely preserved, while Agentforce can create a Case and transfer the person's context to a caseworker when human assistance is needed. AccessForce Insights then shows agencies where people abandon applications, request explanations, switch languages, or need human help — creating a continuous loop: Audit → Score → Redesign → Measure → Improve Don't make people adapt to government. Make government experiences adapt to people.",
      "videos": [],
      "docs": [
        {
          "label": "N/A",
          "url": "https://access-force.org"
        },
        {
          "label": "Access-Force.org",
          "url": "https://access-force.org"
        },
        {
          "label": "Access-Force.org",
          "url": "https://access-force.org"
        },
        {
          "label": "NA",
          "url": "https://access-force.org"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Curb Cut ✿ Ask for what you need, without saying why",
      "full_title": "Curb Cut ✿ Ask for what you need, without saying why",
      "track": "Builder Track",
      "category": "winner",
      "awards": [
        "🥇 1st Place — Builder Track"
      ],
      "team": "Parth Sevak",
      "pitch": "Project Name Curb Cut · a workplace accommodation system whose principal is the worker. An Agentforce agent, a deterministic safety layer, six live channels, and a console for the human on the other e",
      "description": "Project Name Curb Cut · a workplace accommodation system whose principal is the worker. An Agentforce agent, a deterministic safety layer, six live channels, and a console for the human on the other end. 🧱 Problem to solve One in four adults has a disability. In 2025, fewer than one in four Americans with a disability was employed, and the ones who work are nearly twice as likely to be part-time and more often in service, production and transport jobs: the shift worker, the cleaner, the minimum-wage hire with no work email and no HR desk. Across 655 submissions from large employers in 2025, the median share of staff who told their employer was 3.5%, and it didn't rise. The form is the barrier. To get help you must find the policy, learn its words, hold a work login, and explain your body to the person who decides what you're worth. For someone Deaf, or with a condition nobody can see, that form is a door that doesn't open. 🌱 Our solution Curb Cut turns asking into one sentence. You say what's hard, in your own words, and you never have to say why. It shows you what people in your situation could ask for, from a sourced library with usual costs. If you do want to ask, it writes the request in your words, reads it back, and sends nothing until you clearly say yes. There's no field for a diagnosis anywhere, and a build check fails if anyone adds one. Name a condition anyway and it's stripped before anything is stored. When a manager asks the console what's wrong with someone, it says nobody knows and nobody can find out. Six doors, all live today. An Agentforce agent written in Agent Script decides what to say. A deterministic layer decides what may be true: it ranks the library, strips conditions, and holds the consent gate. 🌐 Web, no login, no account. 📱 Text CURB CUT to +1 276 495 9311, on any phone. 📞 Voice on the same number. ✉️ Email. 💬 Slack, private message only. It says up front that Slack belongs to your employer. Judges can join our Slack workspace and try it. 🤝 Any assistant you already use, through tools that can't send. 🤝 The person on the other end Every door ends at a human. The console's On Duty page lists who is waiting for a person, whose request is past its date and who is waiting on an interpreter, and tells whoever is on duty to work it top to bottom, never by telephone unless the record says so. It never shows a diagnosis, because there is no field for one. 🛡 Why not just ask a public chatbot Because the answer has to be safe to act on and safe to keep. Here the model never decides what is stored or sent: Apex does, with the Einstein Trust Layer between the model and the data, a ledger of every delivery, and 127 tests that fail the build if any of it slips. A public assistant can tell you what an accommodation is. It can't file the request with the desk that has to answer, and it won't tell you it took your diagnosis out. ✔ What happens after you press send The request goes to the access desk of the organisation running the page, in your words. No manager is told. Judges with the org login can watch it arrive in the console: orgfarm-7a04c62cb9.lightning.force.com/lightning/n/Curb_Cut_Home. What you sent stays on your screen, with the date the desk has committed to answer by. If you'd rather talk to a person, say HUMAN on any channel and one picks it up. 🔎 What we can show, not just say We ran Salesforce's own accessibility checks (Sa11y) and our own: more than five hundred accessibility checks on seven public pages, 127 Apex tests, 512 structural invariants, 21 responsible-AI checks against Salesforce's published guidelines, and an 11-scenario adversarial suite. 💛 What we got wrong, and fixed in the open \"I get migraines from the office lighting\" once returned \"special chair or back support\". The ranker now weighs how much a word distinguishes. The agent was told never to record a volunteered condition; it agreed in words while the action stored the text anyway. So every safety rule moved into Apex. ⚠ What isn't done No one who uses a screen reader every day has tested this yet; a scripted walk stands in until one has. Text and voice run through a relay on a laptop today. 🤍 Who this is for It's for the colleague who never asks, for the person whose condition nobody can see, for the cleaner on a break with a phone and no work email, and for the new hire who doesn't yet know what's allowed. The hard technical part, an agent that understands what someone means, is what Agentforce gave us. The rest was deciding, carefully, what it must never do. Watch the three-minute cut on Google Drive, or the full film, 4:59, every channel live on YouTube, captions on. Try the ask page yourself, no login , or watch a 26-second recording of trying it first. Then read the judge's companion : what every press does and where it lands, with an 80-second console tour. Everything else, evidence included, on the public docs page . The code, MIT licence . Org ID 00DgK00000YIJ5SUAX, the provisioned hackathon org.",
      "videos": [
        {
          "label": "Youtube link, there is 3 min version in desc, too.",
          "url": "https://youtu.be/yleHLiwWRKA"
        }
      ],
      "docs": [
        {
          "label": "The code, open source under MIT (GitHub)",
          "url": "https://github.com/parthsevak2/curb-cut"
        },
        {
          "label": "Screenshots of the live product, in story order (Drive)",
          "url": "https://drive.google.com/drive/folders/1QDjnp_cO7BoeHl2OVGx4N_MTDyBaCF9h"
        },
        {
          "label": "Every document, the deck, the film, screenshots (Drive)",
          "url": "https://drive.google.com/drive/folders/1V52WDKnujvybWffCGhWPM9Rs2Vxs4gDE"
        },
        {
          "label": "Accessibility, RAI and observability reflections (Drive)",
          "url": "https://drive.google.com/drive/folders/1pGwJxYGIQeNKRizrdqXfU1WvlGgh_71Y"
        },
        {
          "label": "The deck (Drive)",
          "url": "https://drive.google.com/file/d/1qas8bEgG5tjuAONmOaHyBHiqhuHXFBrk/view"
        },
        {
          "label": "Try it yourself, no login needed",
          "url": "https://orgfarm-7a04c62cb9.my.salesforce-sites.com/curbcut/ask"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Design for Everyone: The Inclusion Readiness Agent",
      "full_title": "Design for Everyone: The Inclusion Readiness Agent",
      "track": "AI Fluency Track",
      "category": "winner",
      "awards": [
        "🥈 2nd Place — AI Fluency Track",
        "Community Choice — AI Fluency Track"
      ],
      "team": "Debra Chong",
      "pitch": "Project Name Design for Everyone: The Inclusion Readiness Agent Problem to solve The problem is the Accessibility Handoff Gap. An event can provide accessible hotels, transportation, entrances, sessio",
      "description": "Project Name Design for Everyone: The Inclusion Readiness Agent Problem to solve The problem is the Accessibility Handoff Gap. An event can provide accessible hotels, transportation, entrances, sessions, seating, meals, and support services and still create an inaccessible experience because the transitions between them do not work together. A person may be able to access each individual destination but still encounter barriers moving from a hotel to Moscone, navigating street closures, getting from a keynote to a breakout, reaching an accessible meal pickup, allowing enough elevator or transition time, or changing plans during the day. Most accessibility processes focus on individual accommodation requests or individual venues. They do not evaluate whether the attendee's actual end to end journey will work. Accessibility can fail in the space between two things that are each accessible. Design for Everyone is intended to make that gap visible before the attendee encounters it. Our solution Design for Everyone is an Inclusion Readiness Agent that identifies accessibility barriers across an attendee's actual event journey. The agent uses a PATH Check: Plan the day using the accessibility needs the attendee chose to share, their Agenda Builder reservations, Events app schedule, hotel, and known route conditions. Assess transitions such as building changes, elevators, lines, street controls, services, timing, meals, and exits. Test the handoffs by asking whether the attendee can realistically get from one part of the experience to the next and still participate as intended. Human confirms. The agent explains the evidence and uncertainty, offers options, and asks whether the support would help. The agent does not diagnose disability, infer undisclosed needs, or decide what an attendee should do. Before the event, it reviews the planned journey. During the event, it can recalculate when the attendee changes sessions, adds a walk in, encounters a route change, or asks where to go next. The goal is to move accessibility from reactive accommodation to proactive inclusive design.",
      "videos": [],
      "docs": [
        {
          "label": "PPTX",
          "url": "https://lenossoftware-my.sharepoint.com/:p:/g/personal/dchong_lenos_com/IQARBI0WGw-2SZrmA_YPKupVARxAKUB86IuOV0P6vfCmM98?e=nOVpwj"
        },
        {
          "label": "PPTX",
          "url": "https://lenossoftware-my.sharepoint.com/:p:/g/personal/dchong_lenos_com/IQARBI0WGw-2SZrmA_YPKupVARxAKUB86IuOV0P6vfCmM98?e=nOVpwj"
        },
        {
          "label": "PPTX in Sharepoint",
          "url": "https://lenossoftware-my.sharepoint.com/:p:/g/personal/dchong_lenos_com/IQARBI0WGw-2SZrmA_YPKupVARxAKUB86IuOV0P6vfCmM98?e=nOVpwj"
        },
        {
          "label": "PPTX",
          "url": "https://lenossoftware-my.sharepoint.com/:p:/g/personal/dchong_lenos_com/IQARBI0WGw-2SZrmA_YPKupVARxAKUB86IuOV0P6vfCmM98?e=nOVpwj"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "CampusCare",
      "full_title": "CampusCare",
      "track": "Builder Track",
      "category": "winner",
      "awards": [
        "🥈 2nd Place — Builder Track",
        "Community Choice — Builder Track"
      ],
      "team": "Saurabh Kumar, Ankur Sharma",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name CampusCare Problem to solve A third of schools in the US do not have a full time nurse. The ones who are there are, in most cases, running the entire health office by themselves: no admin support, no assistant, and a paper or spreadsheet based system for tracking care plans and visits. Our solution We wanted to build something that gave time back to the person doing that work, without asking her to learn a new tool or change how she already talks about a visit. WhatsApp was the natural choice, because it is already how most people communicate, nurses included. The part we are proudest of is the pattern detection. A nurse seeing twenty students a day cannot always hold every student's visit history in her head. CampusCare can, and it surfaces that pattern the moment it is worth knowing, not at the end of a long shift when it is easiest to miss. We also wanted the system to work as well for a Spanish speaking family as it does for anyone else. CampusCare reads a guardian's preferred language off their own record and replies in that language automatically, subject line and all, so a translated notification is the default, not an afterthought.",
      "videos": [
        {
          "label": "https://youtu.be/sxxtF0DManE",
          "url": "https://youtu.be/sxxtF0DManE"
        }
      ],
      "docs": [
        {
          "label": "https://github.com/saurabhhGitHub/campuscare",
          "url": "https://github.com/saurabhhGitHub/campuscare"
        },
        {
          "label": "https://docs.google.com/document/d/1L8d0x_etWGXgJpaJCXKaftCH",
          "url": "https://docs.google.com/document/d/1L8d0x_etWGXgJpaJCXKaftCH_n6hJocNdbx_1u_gAaI/edit?tab=t.0"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "The AI Owes You",
      "full_title": "The AI Owes You",
      "track": "AI Fluency Track",
      "category": "winner",
      "awards": [
        "🥉 3rd Place — AI Fluency Track",
        "Agent Observability Award"
      ],
      "team": "Ishrat Bhatti",
      "pitch": "The AI Owes You. A Repair Debt protocol that makes AI do the recovery work Every time a conversational AI forgets what you told it, misreads what you meant, or hands you to a person who asks you to st",
      "description": "The AI Owes You. A Repair Debt protocol that makes AI do the recovery work Every time a conversational AI forgets what you told it, misreads what you meant, or hands you to a person who asks you to start over, somebody does the work of putting it right. That somebody is almost always the human. We don't measure that work. We measure containment, missed intents, abandonment and escalation. All of them describe the system. None of them record what the person did to recover from it. In Five9's 2026 Business Leaders CX Report, 83% of consumers said they still repeat themselves after being transferred from an AI agent to a human, while 96% of business leaders said they believed those handoffs preserve context. The people running these systems and the people using them are not describing the same experience. The AI Owes You. is an accountability layer that closes that gap. Within a single interaction it keeps a temporary Repair Ledger, adding Repair Debt whenever the system makes someone repeat, correct, restart, supply something it already had, or recap after a transfer. Every trigger is an observable event about the system's behavior. None is an inference about the person's emotion, intelligence, health, or disability. When debt appears, the agent has to settle it through the REPAY protocol: Recognize the extra work, Explain the miss, Preserve what is verified, Ask only for what is still missing, and Yield control over what happens next. It arrives as a visible Repair Receipt the person can read and act on. This matters most for the people who pay the highest price when AI fails: users with cognitive and learning disabilities, screen reader and AAC users, people communicating in a second language, and anyone dealing with an urgent problem. The same failure costs them more. Accessibility here is not a special mode someone has to request. It is how the system is required to behave when it makes a mistake. The design has hard limits. Repair Debt is session-scoped, inspectable and correctable. It cannot influence eligibility, risk, pricing, or anyone's access to help. The system never infers disability and never builds a lasting profile of what someone can handle. A request for a human is honored immediately, every time. The proposal is falsifiable. A Repair Debt Challenge tests paired scenarios with expected outcomes, required actions and forbidden inferences, including cases where the system should conclude it owes nothing at all. People shouldn't have to get better at talking to AI in order to get good service from AI.",
      "videos": [],
      "docs": [
        {
          "label": "NA (Type A, no code)",
          "url": "https://docs.google.com/presentation/d/192CDtmunN7uwYpnprpTU0SdDpNsBk10G6zVyfMibvsY/edit?usp=sharinghttps://"
        },
        {
          "label": "Supporting evidence: Repair Debt Challenge, two systems test",
          "url": "https://drive.google.com/file/d/15s9LIb-8aNi0VUXtSv-DhRJG4O2Tyixk/view?usp=sharinghttps://"
        },
        {
          "label": "Type A: AI Concept Brief (1,499 words)",
          "url": "https://drive.google.com/file/d/1gBVV5I1h3gQnVbdUaWUmiz880lGSfLRe/view?usp=sharing"
        },
        {
          "label": "The AI Owes You Slides",
          "url": "https://docs.google.com/presentation/d/192CDtmunN7uwYpnprpTU0SdDpNsBk10G6zVyfMibvsY/edit?usp=sharing"
        },
        {
          "label": "Optional",
          "url": "https://docs.google.com/presentation/d/192CDtmunN7uwYpnprpTU0SdDpNsBk10G6zVyfMibvsY/edit?usp=sharinghttps://"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "SonderGen",
      "full_title": "SonderGen",
      "track": "Builder Track",
      "category": "winner",
      "awards": [
        "🥉 3rd Place — Builder Track",
        "Headless Hero Award"
      ],
      "team": "Ashna Gurudatt Sheregar, Jack Sackis",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name SonderGen Problem to solve Work assumes one default operating style. Everyone who differs from it pays a tax in extra effort, missed context, and having to repeatedly explain themselves. Neurodivergent people pay it on ambiguity and executive load. People at different career stages pay it on jargon and unwritten norms. Disabled people pay it on cognitive and sensory load. SonderGen serves Neuroforce, Genforce and Abilityforce through a single mechanism the failure is the same for all three, so one design serves all of them without diluting any. Our solution You declare once how you work best how much detail, whether to unpack jargon, whether deadlines must be explicit, whether you want one task at a time. It's stored as a record you own, and a validation rule enforces that only you can declare it. The agent then reads unstructured work content and does three things a template cannot. It notices what an action needs but doesn't have. It asks about the most important gap. Then it renders the content to your declared profile and writes a real Salesforce Task deliverable, person, due date after you confirm it. The demo is a wildlife rescue running on volunteer shift handovers, because that's where this bites hardest. The note is written by someone walking out at the end of a night shift; by the time you read it, they're asleep. \"Just ask them\" isn't available. The guardrail is the product: self-declared, never inferred. The agent refuses to guess anyone's neurotype, age or disability from their behaviour, and won't accept a manager's authority as a substitute for a person's own declaration. It records what helps you, never why. Nobody has to disclose a diagnosis to be accommodated. Why an agent, not a feature. Salesforce summarises what was said, drafts what you send, and predicts what a customer wants to receive. SonderGen does none of those. It renders work a colleague has already been sent into the form that person declared they need, and asks about what the sender left out. Einstein Recommendations predicts preferences from behaviour; SonderGen refuses to.",
      "videos": [
        {
          "label": "SoderGen Intro",
          "url": "https://youtu.be/n6jiD0XGzpY"
        },
        {
          "label": "SonderGen Demo",
          "url": "https://youtu.be/TSNfEPoMDpg"
        }
      ],
      "docs": [
        {
          "label": "SonderGen Code",
          "url": "https://gitlab.com/salesforce-hackathon1/SonderGen.git"
        },
        {
          "label": "SonderGen Build Doc",
          "url": "https://gitlab.com/salesforce-hackathon1/SonderGen/-/blob/d031868ecd370c8ff9c54cb64de2cbd2bbfead70/SonderGen-Project-Documentation.docx"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Fair Chance Orbit™ | AI-Powered Reentry to Employment",
      "full_title": "Fair Chance Orbit™ | AI-Powered Reentry to Employment",
      "track": "AI Fluency Track",
      "category": "winner",
      "awards": [
        "AI Fluency Rising Star Award"
      ],
      "team": "LaShea Conner-Gaten",
      "pitch": "Project Name Fair Chance Orbit™ Problem to Solve The problem isn't simply finding a job. It's navigating the pathway back to one. Employment after incarceration remains a significant challenge. A Bure",
      "description": "Project Name Fair Chance Orbit™ Problem to Solve The problem isn't simply finding a job. It's navigating the pathway back to one. Employment after incarceration remains a significant challenge. A Bureau of Justice Statistics and U.S. Census Bureau study found that 33% of the study population released from federal prison did not obtain formal employment at any point during the four years following release . Even among those who worked, the total study population's employment rate never exceeded 40% in any individual quarter during that period. Meanwhile, returning individuals may have to independently navigate identification, transportation, training, credentials, digital access, workforce programs, supportive services, and employer requirements. The U.S. Department of Labor continues to evaluate employment-focused reentry programs specifically to understand which approaches improve employment, earnings, credential attainment, skills, and other outcomes. Our Solution Fair Chance Orbit™ is an AI-enabled workforce engagement and economic-mobility platform designed to transform fragmented reentry barriers into coordinated pathways to sustainable employment. At its center is Fair Chance Navigator , a proposed agentic AI layer that connects talent, workforce organizations, training providers, coaches, supportive services, and fair-chance employers. Our guiding question changes the conversation from “Is this person employable?” to: “What needs to happen next for this person to successfully access and retain an opportunity?” The experience follows a measurable pathway: UNDERSTAND → ASSESS → MATCH → REVIEW → ACT → CONNECT → MEASURE Navigator begins with the individual's goals, skills, experience, accessibility needs, and barriers. It identifies actionable readiness needs without predicting recidivism, assigning risk, or determining a person's “worthiness.” AI then recommends personalized combinations of training, supportive services, coaching, workforce programs, and employment opportunities and explains why each recommendation was made. But responsible AI cannot stop at adding a human reviewer. Human-in-the-loop does not automatically mean bias-free. CAI Collective Group's proprietary AI Confidence Checkpoint™ introduces structured review of AI recommendations, evidence, uncertainty, and consequences before consequential action. Identity Shift™ addresses assumptions and human bias that may influence how justice-impacted talent is evaluated, while LEADER™ reinforces accountability and inclusive decision-making. Once reviewed, Orbit moves from recommendation to action : initiating referrals, identifying training pathways, assigning follow-ups, connecting participants with appropriate opportunities, and escalating decisions requiring human judgment. Finally, Orbit measures progress across barriers addressed → services received → readiness → employer connection → placement → retention . Fair Chance Orbit™ isn't designed to predict someone's potential. It is designed to uncover it—turning barriers into actions, actions into opportunities, and opportunities into measurable economic mobility.",
      "videos": [
        {
          "label": "Fair Chance Orbit™ Prototype / Demo (Embedded in Home Page)",
          "url": "https://www.fairchanceorbit.com/"
        },
        {
          "label": "Demo Video On Home Page",
          "url": "https://www.fairchanceorbit.com/"
        }
      ],
      "docs": [
        {
          "label": "GitHub Repository",
          "url": "https://github.com/lconnergaten-caicollectivegroup/-fair-chance-navigator"
        },
        {
          "label": "GitHub README.md",
          "url": "https://github.com/lconnergaten-caicollectivegroup/-fair-chance-navigator/blob/main/README.md"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "HUMAN ™ - Helping Unite Meaningful Assistance Networks",
      "full_title": "HUMAN ™ - Helping Unite Meaningful Assistance Networks",
      "track": "AI Fluency Track",
      "category": "winner",
      "awards": [
        "Equality Champion Award"
      ],
      "team": "Joseph Kubon",
      "pitch": "Project Name HUMAN — Helping Unite Meaningful Assistance Networks One Network. Many Agents. Real Impact. Problem to solve People seeking community assistance often face a fragmented maze of organizati",
      "description": "Project Name HUMAN — Helping Unite Meaningful Assistance Networks One Network. Many Agents. Real Impact. Problem to solve People seeking community assistance often face a fragmented maze of organizations, programs, applications, eligibility requirements, websites, and phone numbers. A family may need food, childcare, transportation, healthcare, and housing support—but those resources rarely operate as one connected experience. The person who needs help is often left to discover which organizations can help, repeatedly explain their circumstances, and coordinate the next steps themselves. For people already facing barriers involving accessibility, language, transportation, technology, time, or income, that complexity can become another barrier to receiving assistance. People shouldn’t have to understand the community-services ecosystem to receive help from it. Our solution HUMAN turns disconnected community resources into a network organized around the person. Someone simply describes what they need; HUMAN listens to their circumstances, discovers appropriate resources across participating organizations, explains possible paths forward, and—with permission—helps coordinate what happens next. Rather than requiring every nonprofit to use the same technology, HUMAN can connect independently operated agents, systems, and data while organizations retain control of their own environments. AI handles discovery, reasoning, explanation, and coordination while people retain choice, expertise, judgment, and accountability. The network adapts to the human—not the human to the network.",
      "videos": [],
      "docs": [
        {
          "label": "NA",
          "url": "http://google.com"
        },
        {
          "label": "My Skill Builder Interaction",
          "url": "https://drive.google.com/file/d/1DJG9zfAtDTSBPWfimnJdcM6NLyJYORcd/view?usp=sharing"
        },
        {
          "label": "My \"AI Fluency\" Concept Brief",
          "url": "https://drive.google.com/file/d/1AdEp9f1-Ps99GzRXXY5rH__IU3Q7ivEf/view?usp=sharing"
        },
        {
          "label": "NA",
          "url": "https://google.com"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Karolina 's project",
      "full_title": "Karolina 's project",
      "track": "AI Fluency Track",
      "category": "winner",
      "awards": [
        "AI Fluency Rising Star Award"
      ],
      "team": "Karolina Ortiz Ziolek",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name Equity Compounder Problem to solve Pay inequity is not experienced equally, and it rarely happens in one obvious moment. It compounds. Women and historically marginalized groups continue to experience disparities in earnings and workplace opportunity. In 2025, women working full-time earned 82.1% of men's median weekly earnings in the United States, while earnings also varied significantly across race and ethnicity. Research on LGBTQ+ workers and households shows additional disparities, and suggests that people at the intersection of multiple marginalized identities can experience even greater economic inequity. But these gaps don't necessarily begin with one dramatic or easily identifiable decision. A small difference in starting salary affects the next percentage-based raise. A delayed promotion changes the baseline for future earnings. A smaller bonus, missed opportunity, or uneven merit increase adds another layer. Inequity can compound quietly. Each decision may appear insignificant when viewed alone. Across an entire career, those decisions can create dramatically different economic trajectories. Traditional pay-equity analysis often gives organizations a snapshot of the outcome: Who is paid less today? But that leaves a more important question unanswered:How did they get here? By the time a significant gap becomes visible, years of decisions may have already compounded—and aggregate statistics can obscure disparities affecting smaller or intersectional populations. Our solution Introducing Equity Compounder. Equity Compounder is an AI-powered agent that turns pay equity from a snapshot into a trajectory. It examines compensation and career events over time to identify when employee paths began to diverge, which decisions contributed most to the growing difference, and how seemingly small disparities compounded. Instead of simply flagging a gap, the agent helps HR leaders investigate it: Where did the paths diverge? What decisions contributed most? Is the same pattern happening to other employees? Are there patterns affecting particular groups or intersections? What would the trajectory have looked like if one decision had been different? Equity Compounder doesn't decide whether discrimination occurred, determine what someone deserves to earn, or make employment decisions. It makes the history behind an outcome visible, explainable, and auditable—giving humans the evidence to identify patterns earlier and intervene before small disparities become systemic ones. Don't just measure the gap. Understand how it grew.",
      "videos": [],
      "docs": [
        {
          "label": "NA",
          "url": "https://NA.COM"
        },
        {
          "label": "https://docs.google.com/presentation/d/13XxCrPP7sgGzivWjo3mf",
          "url": "https://docs.google.com/presentation/d/13XxCrPP7sgGzivWjo3mfFJKicmN26qm0UtoiU79od5g/edit?usp=sharing"
        },
        {
          "label": "NA",
          "url": "https://NA.COM"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "The Last-Mile Voice",
      "full_title": "The Last-Mile Voice",
      "track": "AI Fluency Track",
      "category": "winner",
      "awards": [
        "Renewable Rockstar Award"
      ],
      "team": "Pritish Mukherjee",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name The Last-Mile Voice Problem to solve Across South Asia, hundreds of millions of gig, field, and vendor-network workers are legally entitled to social-security benefits — accident cover, health insurance, disability and old-age protection — that they cannot actually reach. In India alone, a workforce heading toward 23.5 million has these benefits legally live as of November 2025, yet only ~0.51 million workers are registered to access them. The failure isn't that the benefits don't exist. It's the last mile to the worker that breaks, blocked by three stacked barriers: language (schemes are communicated in English or formal national languages workers don't fully read), literacy (long documents and jargon are useless to a low-literacy worker), and awareness (many workers don't know the benefits exist at all). With no HR desk, no onboarding, and no trusted person to ask, they stay an invisible workforce. Worse, the information wall runs in only one direction. Benefits are pushed down to workers, but workers have no safe way to push a problem up — an unpaid claim, a safety hazard, an injury, a fraud attempt — because doing so means navigating a formal English system that feels risky and opaque. So, they stay silent, absorb the loss, and the company never learns what's breaking at its own edges. The challenge: close the gap between entitlement and uptake and deliver benefits down to the worker in their own spoken language and carry their problems back up, without rebuilding the same barriers in a new form. Our solution The Last-Mile Voice — an AI accommodation agent (built on Agentforce) that carries a company's welfare, safety, and benefits information down to workers across the language wall, and carries workers' problems back up . It meets the worker where they are: voice-first, in their own regional language, on the channels they already trust (WhatsApp / IVR / in-app). At its core is a four-intent loop the worker can access by simply speaking: KNOW — \"What am I entitled to? Am I covered if I have an accident?\" The agent explains benefits conversationally and situationally, personalized to the worker's own profile — not a translated 40-page PDF. CLAIM — \"I got hurt, what do I do?\" It walks the worker through using a benefit and files the claim. REPORT — \"My pay was short.\" \"This location is unsafe.\" \"Someone's trying to scam me.\" This is the upward channel — the differentiator — turning a spoken complaint into a structured, optionally anonymous grievance the company can act on. REGISTER — \"Help me get onto the scheme.\" It pre-fills and hands off registration (e.g. e-Shram), or routes to assisted human help. How it works under the hood: a spoken query in dialect flows through a speech + language layer (vernacular ASR → translate), an intent classifier (Agentforce reasoning routes to one of the four intents), then either RAG retrieval grounded in a human-verified benefits knowledge base and the worker's CRM profile, or the structured upward-escalation channel. An action layer executes — retrieve an entitlement, initiate registration, file a grievance Case, or escalate to a human welfare officer — and the answer is spoken back in the worker's language, in three sentences or fewer. Built-in by design: grounded answers only (the agent never invents figures about someone's money, health, or eligibility), a mandatory human handoff on any high-stakes case (injury, safety, fraud, distress), and anonymity on every report so workers can raise problems without fear of retaliation.",
      "videos": [],
      "docs": [
        {
          "label": "NA",
          "url": "https://drive.google.com/file/d/1JgKPjZ8-sKJ071-phhJOzYarNJwhSTsy/view?usp=drivesdk"
        },
        {
          "label": "Document",
          "url": "https://drive.google.com/file/d/1JgKPjZ8-sKJ071-phhJOzYarNJwhSTsy/view?usp=drivesdk"
        },
        {
          "label": "NA",
          "url": "https://drive.google.com/file/d/1JgKPjZ8-sKJ071-phhJOzYarNJwhSTsy/view?usp=drivesdk"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "accessLocal",
      "full_title": "accessLocal",
      "track": "AI Fluency Track",
      "category": "winner",
      "awards": [
        "Accessibility Excellence Award"
      ],
      "team": "Lee Gregory",
      "pitch": "Project Name accessLocal Problem to solve People with disabilities and their caregivers often cannot determine whether a local business can meet their accessibility needs before they arrive. Informati",
      "description": "Project Name accessLocal Problem to solve People with disabilities and their caregivers often cannot determine whether a local business can meet their accessibility needs before they arrive. Information about entrances, restrooms, parking, maneuvering space, communication options, sensory conditions, and other accommodations is often missing, inconsistent, or reduced to a vague “accessible” label. That uncertainty can turn an ordinary trip into a wasted or stressful experience. Our solution accessLocal is an AI accessibility concierge that helps people find local businesses that match their individual access needs before they make the trip. Businesses create structured accessibility profiles through a simple AI-guided interview, while customers can ask natural-language questions such as, “Can my mother use her wheelchair here, including the restroom?” accessLocal matches those needs against verified business information, clearly identifies what is known or unknown, and gives customers a practical, personalized answer rather than a generic accessibility rating.",
      "videos": [],
      "docs": [
        {
          "label": "Brief",
          "url": "https://tinyurl.com/477rskk2"
        },
        {
          "label": "Slides",
          "url": "https://tinyurl.com/4e62ujyn"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Next Mission",
      "full_title": "Next Mission",
      "track": "Builder Track",
      "category": "winner",
      "awards": [
        "Accessibility Excellence Award"
      ],
      "team": "Andrew Purpura",
      "pitch": "Project Name Next Mission Problem to solve Veterans and military spouses leave service with deep, transferable experience and no shared vocabulary to describe it. A resume that says 88M, or Squad Lead",
      "description": "Project Name Next Mission Problem to solve Veterans and military spouses leave service with deep, transferable experience and no shared vocabulary to describe it. A resume that says 88M, or Squad Leader, or E-6 doesn't match a posting looking for a logistics coordinator or a team lead with budget responsibility. Applicant tracking systems filter on keywords, so qualified people are screened out before a human reads their application. Military spouses face a parallel version: frequent relocation reads as job-hopping to a system that can't see why. And the transition is isolating: most people arrive in a civilian workplace with no one nearby who has made the same move. Our solution Next Mission is an Agentforce agent that closes the translation gap. Someone gives their specialty code, describes what they did in their own words, or uploads a resume. The agent maps that to real civilian occupations, tells them what those roles pay nationally, and connects them with a mentor who made the same move. It runs headless behind the Agentforce API, so the web widget is one client rather than the whole product. Seven subagents carry the conversation: greeting and background, describing service in plain words, skills translation, job matching, resume rewriting, mentor connection, and the introduction itself. Four prompt templates sit behind them, including a semantic mentor match that reads every active mentor's background against the veteran's. WHAT IT DOES Translates any of 8,179 military specialty codes across all six branches into the 1,016 civilian occupations they map to, using the O*NET military crosswalk. No code, or a code we don't hold? It classifies from a plain description of the work instead. A resume works too. Names what the work pays. Pay comes from the BLS Occupational Employment and Wage Statistics May 2025 release, with 992 occupations priced. It gives the median, the range most people earn, and how many hold the job nationally. Where BLS publishes no figure it says so, rather than implying the job pays nothing, and where a figure covers a wider occupational group it says that too. Rewrites a resume into civilian language. NCOIC becomes supervised a 12-person team. PMCS becomes preventive maintenance and inspection. Introduces people to a mentor who made the same move, from a roster of 70 across every branch, and only after an explicit yes and an email address. Changing the subject counts as declining. Handles what a job-matching tool usually can't. If someone says they're struggling, drinking too much, or can't hold a job, it responds to the person before the career question and gives them the Veterans Crisis Line: free, confidential, 988 then press 1. If someone mentions a discharge type, disability rating or VA status, it acknowledges it like a colleague would and moves on rather than restating it back. For military spouses, portability is part of the first answer, not something you have to ask for. HOW IT STAYS HONEST Every pay figure is verified in Apex against stored BLS data before the veteran sees it. Rules that must never break are enforced in code rather than prompt instructions, because an instruction is a preference and a boundary is a guarantee. A second agent watches the first. An LLM evaluator reads real logged conversations and scores each one 1 to 10 with issue tags, so quality is measured rather than claimed, and every guardrail activation is logged separately so the failure rate is visible rather than assumed. Current real conversations: mean 8.45, none below 7. ACCESSIBILITY Built for people who may have visual, motor, or cognitive needs including TBI and PTSD-related attention and memory impact, on whatever device they have, in the middle of a stressful job search. axe-core reports 0 WCAG 2.0/2.1 A and AA violations across two page states, with 39 colour pairs measured and none failing. A human has run it with VoiceOver. Long replies collapse behind a button, because fifteen wage figures in one screen-reader announcement is a barrier rather than a formatting preference. Every step already reached is a button that returns to it without losing anything, so nobody starts over to re-read something. The site states plainly, before anyone types, that this is an AI and not a counselor or a VA representative, and that it cannot place you in a job or confirm your benefits. PRIVACY No login and no account. A resume is read in the browser and only its text is sent; the file is never uploaded. Transcripts are scrubbed after 90 days, keeping the anonymous aggregates and dropping the narrative. THE RULE UNDERNEATH IT The agent explains and recommends, the human decides. It never scores a veteran, never ranks them, never tells them what they are qualified for, and never filters anyone out. Its job is to widen the options someone knows about, not to narrow them on their behalf.",
      "videos": [
        {
          "label": "Submission Demo Video",
          "url": "https://www.youtube.com/watch?v=i904LBHdZpg"
        },
        {
          "label": "Long Video - How our project was built",
          "url": "https://www.youtube.com/watch?v=VaLp0m4zF-o"
        }
      ],
      "docs": [
        {
          "label": "Github Repo",
          "url": "https://github.com/apurpuraJax/NextMission-Dreamforce-Hackathon"
        },
        {
          "label": "Design Documentation",
          "url": "https://github.com/apurpuraJax/NextMission-Dreamforce-Hackathon/blob/main/DESIGN.md"
        },
        {
          "label": "Readme",
          "url": "https://github.com/apurpuraJax/NextMission-Dreamforce-Hackathon/blob/main/README.md"
        },
        {
          "label": "Try the Next Mission Agent",
          "url": "https://orgfarm-3bfff135af.my.site.com/nextmission/"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Ohm",
      "full_title": "Ohm",
      "track": "Builder Track",
      "category": "winner",
      "awards": [
        "Renewable Rockstar Award",
        "Agent Observability Award"
      ],
      "team": "Dominick DeFazio",
      "pitch": "Project Name Ohm Problem to solve Every",
      "description": "Project Name Ohm Problem to solve Every Agentforce agent burns electricity, carbon and water every time it runs. It reads its instructions, reads its prompts, reasons, and generates an answer, and all of that is compute somebody is paying for in more than dollars. A lot of that work is necessary. A meaningful share of it is not. A policy pasted six times into a prompt gets re-read on every single request. A prompt asked to produce eight variations when the user wanted one generates seven throwaways. A prompt asked to sort a list and do arithmetic burns inference on work that a few lines of Apex would do exactly, every time, for effectively nothing. Nobody can see any of this today. Agentforce has no footprint view, no token report, and no way to tell a builder which of their agents is wasteful or what to do about it. Builders are shipping agents blind, at a moment when the number of agents in production is about to grow by orders of magnitude. Waste that is invisible at ten agents becomes an environmental line item at ten thousand. I wanted a tool that makes that waste visible, tells you exactly what to change, and shows you what you get back for changing it. Our solution Ohm is an Agentforce agent that audits Agentforce agents. It reads the Agent Script bundles you have actually published in your org, along with the prompt templates their actions call, and asks three questions about each one: Input. Is the model reading more than it needs? Output. Is it writing more than anyone asked for? Calls. Is it doing work that plain code should be doing? Each bundle gets a grade in each category and a modeled environmental footprint: energy, carbon and water per year, plus what you avoid by applying the recommended changes, scaled to whatever request volume you choose. How it works, end to end, all inside Salesforce: Ohm discovers the published bundles in the org, then retrieves the exact published source and linked prompt text through the Metadata API using its own External Client App and named credential. Every artifact is pinned by content hash at retrieval. A Prompt Builder template running GPT 5.5 reviews that source and returns findings that quote it directly. Then Apex takes over: it checks every quoted passage against the pinned source, confirms nothing changed during the run, applies fixed rating rules, and saves the whole review in a single transaction. If any quote fails to verify, nothing is saved at all. The model never gets the last word on a grade. From the saved review, Ohm generates recommendations that each carry three things a builder actually needs: what to change, what must stay intact, and how to validate it. One click turns any recommendation into a standard Salesforce Task, keyed so it can never be duplicated, so the work lands in the same place as the rest of the team's work. Ohm itself is exposed as an Agentforce agent with five custom Apex actions, so you can talk to it: ask which agents waste the most, ask what to change in one of them, tell it to audit one now, check on the run, and have it create the task. Ohm never changes your agents. It reads, it reviews, it recommends, and it hands the change to a person. Built with: Agent Script authoring bundles, Prompt Builder (GPT 5.5), the Models API, invocable Apex actions, the Metadata API, External Client App with client-credentials flow and a named credential, custom objects, standard Tasks, and a Lightning Web Component app. It is running live in our org today with 283 Apex tests and 218 Jest tests passing.",
      "videos": [],
      "docs": [
        {
          "label": "Github",
          "url": "https://github.com/synaptic-dom/ohm-a4g"
        },
        {
          "label": "PDF Google Drive",
          "url": "https://drive.google.com/file/d/1J26woxJDCf31ch716EPeRxvWUCO-oVVF/view?usp=sharing"
        },
        {
          "label": "Capsule Link",
          "url": "https://studio.capsule.video/6a9f3a40a9f100716d352c99"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "TransitionBridge",
      "full_title": "TransitionBridge",
      "track": "Builder Track",
      "category": "winner",
      "awards": [
        "Equality Champion Award"
      ],
      "team": "Amir Mahboob, Alen Varghese, Jacob Sebastian",
      "pitch": "Project Name TransitionBridge Problem to solve Young people with disabilities face a difficult transition when they leave school. In the classroom, their IEP goals, accommodations, and support team ar",
      "description": "Project Name TransitionBridge Problem to solve Young people with disabilities face a difficult transition when they leave school. In the classroom, their IEP goals, accommodations, and support team are coordinated in one place. After graduation, they must navigate vocational rehabilitation, benefits offices, college disability services, and employers—each with different deadlines, forms, and eligibility rules. Families often learn that school-based services are ending only after it is too late. Accommodations such as extended time, screen readers, and accessible workspaces must be re-explained at every handoff, creating friction and inequity at the moment students are expected to become more independent. Our solution TransitionBridge is an Agentforce employee agent for case workers, grounded in Salesforce data—not guesses. It reads students, IEP transition goals, accommodation records, program enrollments, and deadline milestones to proactively surface transition gaps (for example: a student turns 22 when school services end, but their vocational rehabilitation referral has not been started). Six invocable Apex actions support finding students, querying deadlines, identifying gaps, drafting referrals, follow-up nudges, and escalating to human counselors. Two subagents handle timeline/gap analysis and referral coordination. The agent drafts referrals for human review but never sends them automatically, and it escalates SSI, benefits, eligibility, and conflicting records to Benefits Counselors or Case Workers queues. Every action is logged to Agent_Action_Log__c; escalations create Escalation_Log__c records and Tasks. The MVP runs in the TransitionBridge Lightning app for internal case workers, with a roadmap to add a student/family portal and employer accommodation handoff.",
      "videos": [
        {
          "label": "YouTube Video",
          "url": "https://youtu.be/emYTZJXGEjM"
        }
      ],
      "docs": [
        {
          "label": "GitHub Code",
          "url": "https://github.com/Alen983/TransitionBridge"
        },
        {
          "label": "Documentation Link",
          "url": "https://drive.google.com/file/d/1oWLvmN-z9M_fKoIBlmExwpSA3dk9RwOh/view?usp=sharing"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "AccessForce - An Agentforce Companion for Salesforce Work",
      "full_title": "AccessForce - An Agentforce Companion for Salesforce Work",
      "track": "AI Fluency Track",
      "category": "participant",
      "awards": [],
      "team": "Sai Therala",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name AccessForce - An Agentforce Companion for Neuroinclusive Salesforce Work Problem to solve Complex Salesforce workflows can create unnecessary cognitive friction for neurodivergent employees. A sales professional may need to create a Lead, complete required fields, resolve validation errors or duplicate records, convert the Lead into an Account, Contact, and Opportunity, update opportunity stages, and create follow-up tasks all while moving across dense pages, tabs, related lists, and interruptions. These workflows often assume that every employee can rapidly scan large amounts of information, remember multi-step processes, manage constant context switching, and recover easily after an interruption. For users with ADHD, dyslexia, autism, cognitive-processing differences, executive-function challenges, or other invisible disabilities, this can create avoidable barriers to independent work, confidence, and career opportunity. The problem is not employee capability. The problem is that enterprise workflows are rarely designed to adapt to different ways people focus, process information, and complete tasks. Our solution AccessForce is an accessibility first Agentforce companion that turns complex Salesforce work into a clear, adaptive, user-controlled conversation. Users can type or optionally speak what they need to accomplish for ex: “Create a Lead for Jordan Lee, set a follow-up for Tuesday, and read it back before saving.” Agentforce interprets the intent, retrieves only Salesforce information the employee is authorized to access, explains each next step in plain language, asks for missing information one question at a time, and prepares editable drafts. AccessForce proposes a WebMCP enabled Lightning and Experience Cloud interface that exposes narrow, structured navigation capabilities, such as opening authorized record context, showing the next required field, explaining a validation error, displaying a draft, and requesting confirmation. This enables guided navigation without screen scraping, visual button guessing, or unrestricted screen control. The employee remains in control. Every meaningful record change follows: Draft → accessible review → explicit confirmation → execution → audit record AccessForce supports Focus Mode, text and optional voice interaction, keyboard-first controls, screen-reader-compatible summaries, plain-language explanations, user-selected response detail, save-and-resume context recovery, and human escalation. It never infers disability, evaluates employee performance, bypasses Salesforce permissions or validation rules, invents CRM data, or autonomously creates, converts, modifies, or closes records without explicit approval.",
      "videos": [
        {
          "label": "No Video for AI fluency Track Type A: AI Concept Brief",
          "url": "https://drive.google.com/file/d/12s54v46io4rkxya6S4jEWYBDJV7ggl4U/view?usp=sharing"
        }
      ],
      "docs": [
        {
          "label": "No Code for AI fluency Track Type A: AI Concept Brief",
          "url": "https://drive.google.com/file/d/12s54v46io4rkxya6S4jEWYBDJV7ggl4U/view?usp=sharing"
        },
        {
          "label": "AccessForce by Sai Therala",
          "url": "https://drive.google.com/file/d/12s54v46io4rkxya6S4jEWYBDJV7ggl4U/view?usp=sharing"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Autistic Admin Assistant (AAA) Agent",
      "full_title": "Autistic Admin Assistant (AAA) Agent",
      "track": "AI Fluency Track",
      "category": "participant",
      "awards": [],
      "team": "Vuk Stajic",
      "pitch": "Project Name Autistic Admin Assistant (AAA) Agent Problem to solve Admins like me, who are on the autism spectrum, commonly have trouble balancing our desire to solve problems in a focused manner and ",
      "description": "Project Name Autistic Admin Assistant (AAA) Agent Problem to solve Admins like me, who are on the autism spectrum, commonly have trouble balancing our desire to solve problems in a focused manner and our desire to be of service within our organizations. We possess incredible strengths, hyper-focus and a drive for extreme efficiency being some. However, the messy, ambiguous and often emotional nature of human support requests can create severe cognitive friction. Causing us to fail to meet both of our desires and leave our teammates feeling unsupported. Our solution The AAA Agent steps in to help us meet both desires without feeling overwhelmed. Rather than forcing neurodivergent Admins to \"mask\" their traits or fundamentally change how their brains process information, the AAA Agent acts as an intelligent empathy assistant and efficiency buffer. It adapts the Admin workflow to our cognitive style, allowing our problem-solving superpowers to shine without creating issues for us or our teammates.",
      "videos": [
        {
          "label": "AAA Agent Short Presentation Video",
          "url": "https://app.screencast.com/wR3Hw21qAKCFC"
        },
        {
          "label": "AAA Agent Full Presentation Video (Long)",
          "url": "https://app.screencast.com/giugH2spKKKMb"
        }
      ],
      "docs": [
        {
          "label": "No Code - Type A Submission",
          "url": "https://docs.google.com/presentation/d/17pUkxCdXQXyKdmNDD44tGsR2aMSB9eSar537FirDcSI/edit?usp=sharing"
        },
        {
          "label": "Type A Submission - AAA Agent Presentation",
          "url": "https://docs.google.com/presentation/d/17pUkxCdXQXyKdmNDD44tGsR2aMSB9eSar537FirDcSI/edit?usp=sharing"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "EAT. LEARN. PLAY. Family AI Coach",
      "full_title": "EAT. LEARN. PLAY. Family AI Coach",
      "track": "AI Fluency Track",
      "category": "participant",
      "awards": [],
      "team": "Jon Jessup",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name EAT. LEARN. PLAY. Family AI Coach Problem to solve Founded by Stephen and Ayesha Curry, EAT. LEARN. PLAY. supports Oakland children through nutritious meals, literacy resources, and equitable opportunities to play. Families also need accessible opportunities to build reading confidence and learn how to evaluate AI together. Language barriers, disability-related access needs, limited connectivity, and unfamiliarity with AI can make those opportunities uneven. The foundation’s existing book distribution, food access, and play programs offer a practical starting point for family activities where children practice asking questions, finding evidence, recognizing mistakes, and making their own decisions. The challenge is to make AI fluency useful in everyday family life while supporting the foundation’s mission and respecting the role of caregivers, educators, and community partners. Our solution EAT. LEARN. PLAY. Family AI Coach is a proposed caregiver-guided service designed for foundation adoption. It would support children ages 7–10 through ten-minute activities following a simple routine: read, think, ask, check, create, and play. Eat: Families explore approved food and garden stories, check AI explanations against evidence, and access verified meal-resource information. Learn: Educator-reviewed discussion cards connect to distributed books. Children explain their interpretations, identify unsupported claims, and revise alternate endings. Play: Families create cooperative games, adapt activities for different abilities, and discover verified play opportunities. Caregivers would operate the service through web chat, WhatsApp, Apple Messages for Business, and Agentforce Voice. Salesforce would support consent and human assistance, while Agentforce retrieves approved content through Data 360. The foundation would control the experience and curriculum. Accessibility includes community-reviewed English and Spanish materials, short text, optional read-aloud, accessible controls, and equivalent printed or facilitated activities. Responsible AI choices include no child accounts, no advertising, minimal data collection, sensitive-input filtering, and human escalation. A proposed 12-week rollout would begin with one school’s book distribution event and involve 60 households. It would compare guided AI with equivalent printed activities and measure question quality, evidence use, error detection, revision, participation gaps, and operating costs. This Type A submission provides the concept and deployment plan. Implementation remains subject to foundation approval; no working prototype or measured pilot results are claimed.",
      "videos": [],
      "docs": [
        {
          "label": "NA",
          "url": "https://eatlearnplayai.org"
        },
        {
          "label": "EAT. LEARN. PLAY. Family AI Coach",
          "url": "https://eatlearnplayai.org"
        },
        {
          "label": "Evidence of Iteration",
          "url": "https://eatlearnplayai.org/evidence-of-iteration"
        },
        {
          "label": "NA",
          "url": "https://eatlearnplayai.org"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "EyeMay",
      "full_title": "EyeMay",
      "track": "AI Fluency Track",
      "category": "participant",
      "awards": [],
      "team": "Mahesh George",
      "pitch": "N/A",
      "description": "N/A",
      "videos": [],
      "docs": [
        {
          "label": "Deck",
          "url": "https://drive.google.com/file/d/18AHsOF70u0GbWUGLkhC3YYl5ag_kEqtH/view?usp=sharing"
        },
        {
          "label": "EyeMay Presentation Deck",
          "url": "https://docs.google.com/presentation/d/1qdipKXUqG7wmFKcvZIerI7FuzuXjNfYcfN6dEuTKSco/edit?usp=sharing"
        },
        {
          "label": "Submission Brief",
          "url": "https://drive.google.com/file/d/18AHsOF70u0GbWUGLkhC3YYl5ag_kEqtH/view?usp=sharing"
        },
        {
          "label": "Deck",
          "url": "https://drive.google.com/file/d/18AHsOF70u0GbWUGLkhC3YYl5ag_kEqtH/view?usp=sharing"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "GiveAbility: Turn desire to help into personalized impact!",
      "full_title": "GiveAbility: Turn desire to help into personalized impact!",
      "track": "AI Fluency Track",
      "category": "participant",
      "awards": [],
      "team": "Jon Jessup",
      "pitch": "Project Name GiveAbility: Turn the Desire to Help Into Personalized Impact Problem to solve Nonprofits spend significant time and money inspiring people to support their missions through advertising, ",
      "description": "Project Name GiveAbility: Turn the Desire to Help Into Personalized Impact Problem to solve Nonprofits spend significant time and money inspiring people to support their missions through advertising, social media, events, email, and storytelling. Each campaign may focus on something different, such as sports, health, children, veterans, local communities, or inclusion. But after someone clicks, that personalization often disappears. A person inspired by a basketball story and someone inspired by athlete health may arrive at essentially the same donation form asking for an amount, frequency, and payment method. Potential donors may leave because they don't understand where their money goes, whether a small gift matters, how to support something they care about, which giving option is right for them, or simply because the experience doesn't connect with what inspired them in the first place. Traditional analytics can tell a nonprofit that someone didn't donate. They often can't explain why . The result is an inclusion challenge and a fundraising challenge: people who care about a mission may never become supporters, while nonprofits spend more to acquire the next visitor without fully understanding why previous visitors didn't give. Our solution GiveAbility uses Agentforce to turn static donation funnels into personalized, accessible giving conversations. Instead of beginning with “How much would you like to donate?”, GiveAbility starts with “What do you care about?” With appropriate privacy controls, Agentforce can use the context of the campaign or ad that brought someone to the nonprofit, then ask what matters to them rather than making assumptions. It connects that intent to nonprofit-approved impact information, explains giving options in plain language, supports the donor's preferred language and accessibility needs, and makes it easy to complete a secure gift through Apple Pay, Google Pay, PayPal, or card. For Special Olympics, someone who clicks a basketball campaign could continue into a basketball and sports-focused conversation, while someone motivated by athlete health, youth inclusion, or local impact receives a different experience. Agentforce can also help donors understand monthly giving, tribute gifts, donor-advised funds, stock, IRA distributions, planned giving, and other options, with human handoff for complex or major gifts. GiveAbility then uses Salesforce Fundraising + Data 360 + Tableau to connect campaign context, donor-stated motivation, giving behavior, and outcomes. For people who choose not to donate, GiveAbility can respectfully ask what held them back. This helps nonprofits understand not only where people abandon the journey, but why . Those insights create a continuous fundraising flywheel: Ad → Conversation → Intent → Gift → Data 360 → Tableau → Agentforce Insights → Better Experience → Better Ad Special Olympics is our flagship use case, but the model could apply across the nonprofit sector, including healthcare, veterans, education, hunger, animal welfare, disaster relief, and environmental organizations. The goal is not to pressure people into giving more. It is to remove the barriers between caring and acting. More people inspired. More donors. More impact.",
      "videos": [
        {
          "label": "GiveAbility Pitch on YouTube",
          "url": "https://youtu.be/0N5dwmdwofo"
        }
      ],
      "docs": [
        {
          "label": "NA",
          "url": "https://giveability.lovable.app"
        },
        {
          "label": "GiveAbility",
          "url": "https://giveability.lovable.app"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Irfan's project",
      "full_title": "Irfan's project",
      "track": "AI Fluency Track",
      "category": "participant",
      "awards": [],
      "team": "Irfan Iqbal",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name EveryVoice AI Problem to solve Meetings often look productive because they end with a decision, but the process can still exclude people. One or two voices may dominate. Useful ideas may lose attribution. Acronyms and jargon can make it harder for newer team members, non-native English speakers, neurodivergent employees, or people using captions and transcripts to follow the discussion. Action items may also be unclear, which makes it harder for people who could not attend live to understand what happened or contribute later. These small patterns can create real equity issues. People who need more processing time, async input, plain language, or clearer records can have less influence over decisions. Our solution EveryVoice AI is a meeting equity coach that reviews meeting transcripts and creates inclusive, evidence-backed facilitation guidance. The prototype lets a user paste a meeting transcript and receive: - speaker participation balance - idea attribution signals - accessibility friction, such as undefined acronyms or deferred accessibility needs - decision clarity checks - neutral recommendations for the facilitator - an inclusive recap with decisions, owners, missing input, and follow-up needs EveryVoice AI is designed as a human-in-the-loop tool. It critiques meeting patterns, not people. It does not infer sensitive identity traits from names, voices, accents, roles, disability status, gender, or culture. It avoids individual scoring and public ranking. A facilitator reviews and edits the output before sharing it.",
      "videos": [],
      "docs": [
        {
          "label": "EveryVoice AI Submission Deck",
          "url": "https://drive.google.com/file/d/14GrABfw3TpfRr5wv4sf8U9LyTkii6M7Q/view?usp=drivesdk"
        },
        {
          "label": "EveryVoice AI Submission Deck",
          "url": "https://drive.google.com/file/d/14GrABfw3TpfRr5wv4sf8U9LyTkii6M7Q/view?usp=drivesdk"
        },
        {
          "label": "EveryVoice AI Submission Deck",
          "url": "https://drive.google.com/file/d/14GrABfw3TpfRr5wv4sf8U9LyTkii6M7Q/view?usp=drivesdk"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "JP's project",
      "full_title": "JP's project",
      "track": "AI Fluency Track",
      "category": "participant",
      "awards": [],
      "team": "JP Dorrestijn",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name Empowering Rural Women in Uganda Problem to solve Safety and development through automation and information access Our solution Social agents to provide agentic acces to safety, health and commercial fairness",
      "videos": [],
      "docs": [
        {
          "label": "Empowering Rural Woman in Uganda",
          "url": "https://drive.google.com/file/d/1Nq-naOdJRfhdpT2E6S0UYW3NaiUtLEfm/view?usp=share_link"
        },
        {
          "label": "Empowering Rural Woman in Uganda",
          "url": "https://docs.google.com/document/d/1OAacD_Q4dwzTo69SEDio25RBgwuCGHcO/edit?usp=share_link&ouid=104454208547366989055&rtpof=true&sd=true"
        },
        {
          "label": "Empowering Rural Woman in Uganda",
          "url": "https://drive.google.com/file/d/1GEJ5_IoZ32JLXw3oiuZ70px2krpX2ICU/view?usp=share_link"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Katie's project",
      "full_title": "Katie's project",
      "track": "AI Fluency Track",
      "category": "participant",
      "awards": [],
      "team": "Katie Williams",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name Agentforce Flex Problem to solve The problem is not a lack of AI intelligence. It is that humans are still being asked to adapt themselves to how that intelligence is delivered. Accessibility gives us an opportunity to reverse that relationship: shift the burden of adaptation from the human to the technology, while keeping the human in control. That burden isn't experienced equally. For someone with a cognitive or neurological disability, or someone who is neurodivergent, a dense or poorly structured response can increase cognitive load, make it harder to identify what matters, or create additional work just to access the information. Different people can encounter overlapping functional barriers for different reasons, and accessible design can reduce those barriers for everyone. Project Description Agentforce Flex asks a simple question: What if AI didn’t ask humans to adapt—what if it adapted to us? There is no default human. People differ in how they process information, communicate, learn, and work, and those needs can change by task, context, or day. Yet getting AI to accommodate those differences often requires repeated prompting: summarize this, define that, make it visual, translate it, walk me through it. The burden of adaptation remains on the human. Agentforce Flex is a user-controlled personalization layer that shifts that burden to the technology while keeping the human in control. It lets people choose how Agentforce communicates, organizes, explains, and collaborates with them. The same intelligence could become an executive summary, step-by-step guidance, a visual overview, a deep dive, multilingual content, or a more challenging collaborative experience. Accessibility is the blueprint. Flex can reduce barriers for people with disabilities and neurodivergent users while extending those benefits to anyone whose needs change because of language, environment, grief, illness, burnout, new parenthood, unfamiliar work, or limited time. It applies an inclusive-design principle: design for people who encounter barriers, then extend that flexibility to everyone. Flex also addresses the Responsible AI risks of personalization. It does not require a diagnosis or personal disclosure, nor should AI infer one. Users communicate the functional need—not why they have it: accommodate the need, not the diagnosis. Users also decide how long an adaptation lasts: just this time, this session, or as a saved default. Persistent preferences are transparent, adjustable, and reversible rather than silently inferred. Agentforce Flex imagines personalization without profiling and adaptation without sacrificing agency. AI adapts. The human decides how and for how long. Agentforce Flex. Same intelligence. Your way.",
      "videos": [],
      "docs": [
        {
          "label": "NA- AI Fluency Track",
          "url": "http://www.salesforce.com"
        },
        {
          "label": "Concept Brief: Agentforce Flex",
          "url": "https://docs.google.com/document/d/1mBoUjAdkv1ppvcSLUMcLiCiZ1hGrit1FWWRXnU5jOXg/edit?usp=sharing"
        },
        {
          "label": "Agentforce Flex Overview",
          "url": "https://studio.capsule.video/6a9f2c44a9f100716d32904d"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Keys to Home: AI-Powered Access to Affordable Housing",
      "full_title": "Keys to Home: AI-Powered Access to Affordable Housing",
      "track": "AI Fluency Track",
      "category": "participant",
      "awards": [],
      "team": "Jennifer Jessup",
      "pitch": "Project Name Keys to Home: AI-Powered Access to Affordable Housing Problem to Solve People seeking affordable housing must navigate fragmented listings, confusing eligibility rules, inaccessible docum",
      "description": "Project Name Keys to Home: AI-Powered Access to Affordable Housing Problem to Solve People seeking affordable housing must navigate fragmented listings, confusing eligibility rules, inaccessible documents, language barriers, and complicated application processes. Many systems require applicants to use unfamiliar websites, download inaccessible PDFs, repeatedly provide the same information, or call during limited office hours. Housing information may technically be available, but it is not truly accessible if people cannot understand and complete the process required to apply. Our Solution Keys to Home is a proposed AI-powered redesign of the affordable-housing application journey. Using Agentforce, it would meet applicants through familiar channels—including web chat, WhatsApp, Apple Messages for Business, SMS, and voice—and adapt guidance to each person’s language, abilities, technology, and preferred way of communicating. The navigator would explain publicly available requirements in plain language, identify potentially relevant housing opportunities, create personalized document checklists, provide deadline reminders, and connect applicants with a human housing navigator when needed. It would support screen readers, voice interaction, low-bandwidth communication, multilingual assistance, and step-by-step guidance for people with cognitive or executive-function challenges. AI would serve as a guide, never a gatekeeper. Keys to Home would not approve, reject, rank, or determine final eligibility for housing. Consequential decisions would remain with authorized humans.",
      "videos": [
        {
          "label": "N/A — AI Fluency Track; no video required",
          "url": "https://docs.google.com/document/d/1dcnCSWkFCBYxbLAKbqU_-7H8cboNxBFdFGU8CTr1WYA/edit?tab=t.0"
        }
      ],
      "docs": [
        {
          "label": "Keys to Home document.",
          "url": "https://docs.google.com/document/d/1dcnCSWkFCBYxbLAKbqU_-7H8cboNxBFdFGU8CTr1WYA/edit?tab=t.0"
        },
        {
          "label": "N/A — AI Fluency Track; no code required.",
          "url": "https://docs.google.com/document/d/1dcnCSWkFCBYxbLAKbqU_-7H8cboNxBFdFGU8CTr1WYA/edit?tab=t.0"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Mission Force: Architect for Good",
      "full_title": "Mission Force: Architect for Good",
      "track": "AI Fluency Track",
      "category": "participant",
      "awards": [],
      "team": "Ebony Reilly",
      "pitch": "Project Name Mission Force Problem to solve Mission-driven organizations often have limited technology capacity but many competing needs across Salesforce, including service, marketing, sales, commerc",
      "description": "Project Name Mission Force Problem to solve Mission-driven organizations often have limited technology capacity but many competing needs across Salesforce, including service, marketing, sales, commerce, order management, fundraising, sustainability, data, automation, and AI. It can be difficult to determine which requests will create the greatest mission and business value, especially when accessibility, equity, sustainability, and the needs of smaller or underserved populations may not be represented by the loudest or most frequent requests. As a result, teams may prioritize the loudest request, duplicate existing capabilities, create unnecessary customization, overlook high-impact needs, and spend scarce resources on lower-value work. Our solution Mission Force is an Agentforce-powered enterprise value and architecture advisor for mission-driven organizations. It analyzes signals across the Salesforce ecosystem, connects them to business capabilities and strategic goals, and recommends the highest-value opportunities for improvement. For each opportunity, Mission Force helps determine whether the organization should build, configure, reuse, automate, integrate, retire, or take no technology action. Recommendations are evaluated using factors such as mission impact, constituent or member value, accessibility and equity impact, financial and operational value, sustainability impact, reach, urgency, architecture fit, effort, risk, and technical debt. Leaders could ask simple questions like, “We only have capacity for three major Salesforce investments next quarter. What should we prioritize and why?” Mission Force would provide evidence-based recommendations, explain the architecture implications, surface needs that might otherwise be overlooked, and generate proposed backlog items for human review. Importantly, Mission Force would not assume that the most common request is automatically the most valuable. For example, a lower-volume issue that prevents people with disabilities from accessing a critical service could be prioritized above a high-volume cosmetic enhancement because its mission, accessibility, and equity impact is greater. Overall, the goal is to help mission-driven organizations spend less time deciding what to build and more time investing in technology that advances their mission responsibly, equitably, and sustainably.",
      "videos": [],
      "docs": [
        {
          "label": "Mission Force Concept Brief",
          "url": "https://docs.google.com/document/d/1uhyM1ZRdSP8aJYHjNNC9UaYH7DWURMeM/edit?usp=sharing&ouid=106715687175720260104&rtpof=true&sd=true"
        },
        {
          "label": "Link",
          "url": "https://drive.google.com/drive/folders/1r_m_rbzSIPbA6W9Y7PmFP8x3dqt0n4uT?usp=sharing"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "ProjectX",
      "full_title": "ProjectX",
      "track": "AI Fluency Track",
      "category": "participant",
      "awards": [],
      "team": "Rahul Marri",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name RatePulse AI: Democratizing Revenue Management for Independent Motels Problem to solve How can AI make sophisticated hotel revenue-management capabilities accessible to independent motel owners who do not have dedicated revenue-management teams? Our solution RatePulse AI is an AI-assisted revenue forecasting and dynamic-pricing feature designed for small independently operated motels. Large hotel groups often have dedicated revenue-management teams and sophisticated software to analyze demand and adjust room pricing. Smaller motel operators may not have access to the same resources and frequently make pricing decisions manually using occupancy, experience, competitor prices, and local events. I designed RatePulse AI to make these capabilities more accessible while keeping the motel owner in control of every pricing decision. RatePulse analyzes multiple demand signals, including current property occupancy, reservation booking pace, previous-year pricing and occupancy, competitor rates, local events, and travel-demand indicators. These signals are combined to generate a demand score, forecast occupancy, confidence level, and recommended nightly room rate. Instead of simply presenting a price generated by AI, RatePulse explains why the recommendation was made. For example, the system may recommend increasing a King room from $89 to $119 because occupancy is already above 80%, reservations are arriving faster than normal, nearby competitors are averaging $124, and a major local event is expected to increase demand. Human oversight is central to the design. Motel operators can review the recommendation, examine the contributing signals, and either accept or reject the suggested rate. Minimum and maximum pricing boundaries, maximum daily price changes, data-quality indicators, and confidence scores provide additional safeguards. Rejected recommendations can also capture operator feedback that could improve future models. The project was developed through multiple rounds of human-AI collaboration. My initial AI interaction focused primarily on generating a dynamic-pricing model. After evaluating the response, I identified important gaps around explainability, trust, limited data availability, and excessive automation. I refined my prompts to require human approval, transparent reasoning, confidence scoring, and safeguards against unreliable signals. I implemented the resulting concept as a RatePulse Lightning Web Component within a Salesforce-based motel property management system. The goal of RatePulse AI is not to replace motel owners' judgment, but to give smaller hospitality businesses access to data-driven revenue-management capabilities that have traditionally been available primarily to larger hotel operators.",
      "videos": [],
      "docs": [
        {
          "label": "NA",
          "url": "https://docs.google.com/presentation/d/1SBayc34MfKjkhz98vuAVfmmgzcadjCv8/edit?usp=sharing&ouid=101144279782269967448&rtpof=true&sd=true"
        },
        {
          "label": "Document",
          "url": "https://docs.google.com/document/d/14S05qhDacAvXYonCSx0XDli-E58J4tmp/edit?usp=sharing&ouid=101144279782269967448&rtpof=true&sd=true"
        },
        {
          "label": "Presentation",
          "url": "https://docs.google.com/presentation/d/1SBayc34MfKjkhz98vuAVfmmgzcadjCv8/edit?usp=sharing&ouid=101144279782269967448&rtpof=true&sd=true"
        },
        {
          "label": "NA",
          "url": "https://docs.google.com/document/d/14S05qhDacAvXYonCSx0XDli-E58J4tmp/edit"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Rides to the Ballot",
      "full_title": "Rides to the Ballot",
      "track": "AI Fluency Track",
      "category": "participant",
      "awards": [],
      "team": "Cesar Castro",
      "pitch": "An Agentforce agent that matches voters who need a ride to their polling place with community members and volunteer drivers who can provide one — an AI-brokered, election-day rideshare built specifica",
      "description": "An Agentforce agent that matches voters who need a ride to their polling place with community members and volunteer drivers who can provide one — an AI-brokered, election-day rideshare built specifically for voting access. Project Name Rides to the Ballot Problem to solve Ahead of the November election, changes to mail-in voting rules put a specific group of voters at risk of losing the way they have always voted: people who rely on mail ballots because they cannot easily get to a polling place in person. That population skews low-income, elderly, rural, and disabled—voters for whom transportation, not motivation, is the barrier. Our solution An Agentforce agent that matches voters who need a ride to their polling place with community members and volunteer drivers who can provide one — an AI-brokered, election-day rideshare built specifically for voting access. No prototype has been built; this brief describes the concept in enough detail that it could be.",
      "videos": [],
      "docs": [
        {
          "label": "Link",
          "url": "https://docs.google.com/document/d/1jjMXM2J0oVRoEBlpicM4BNQWxuTQY-vlmIFp2fv4VTY/edit?usp=sharing"
        },
        {
          "label": "Rides to the Ballot_DF Hackathon Submission",
          "url": "https://docs.google.com/document/d/1jjMXM2J0oVRoEBlpicM4BNQWxuTQY-vlmIFp2fv4VTY/edit?usp=sharing"
        },
        {
          "label": "Link",
          "url": "https://docs.google.com/document/d/1jjMXM2J0oVRoEBlpicM4BNQWxuTQY-vlmIFp2fv4VTY/edit?usp=sharing"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Rights You Can Understand",
      "full_title": "Rights You Can Understand",
      "track": "AI Fluency Track",
      "category": "participant",
      "awards": [],
      "team": "Lakshmi Nallabhotula",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name Rights You Can Understand — Special Education Procedural Safeguards Companion Problem to solve California’s Special Education Procedural Safeguards Notice contains important legal information, but it can be difficult to navigate when a parent needs a specific topic quickly. A parent may know their question — “What if I disagree with the school?” — without knowing where to look. Specialized terminology such as IEP, FAPE, due process, mediation, evaluation, and placement can also make navigation harder for families who are new to special education. My project focuses on helping users find the right official information more easily, without changing or interpreting the notice. Our solution I built a Salesforce-native “Safeguards Companion” using Prompt Builder and Flow. A parent selects one of five fixed topics — Evaluation, IEP Decisions, Records, Disagreements, or Discipline. There is no free-text input, which reduces exposure to off-scope requests, leading questions, and user-input prompt injection. Each selection returns a short, clearly labeled, non-authoritative orientation and directs the user to the relevant official CDE source for exact rights, requirements, timelines, and procedures. The official Procedural Safeguards Notice remains authoritative and is not rewritten, replaced, or interpreted by the companion. I reviewed AI suggestions throughout the build and accepted, modified, or rejected them based on safety and fidelity to the official source.",
      "videos": [],
      "docs": [
        {
          "label": "NA",
          "url": "https://example.com"
        },
        {
          "label": "NA",
          "url": "https://example.com"
        },
        {
          "label": "Rights You Can Understand — Final Deck",
          "url": "https://docs.google.com/presentation/d/1Or1rCBDMqn_I7uM6rg7DPeo9hg150Mb6/edit?usp=sharing&ouid=108188603630151293722&rtpof=true&sd=true"
        },
        {
          "label": "NA",
          "url": "https://example.com"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Robot Integrated with Agentforce & Slack via Headless360",
      "full_title": "Robot Integrated with Agentforce & Slack via Headless360",
      "track": "AI Fluency Track",
      "category": "participant",
      "awards": [],
      "team": "JASJIT SINGH",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Roboti",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Robotic Astro Integrated with Agentforce & Slack via Headless360 [What's the name of your project or Agent?] Problem: ﻿ At large events, issue isn't system crashes—it's the constant delay that frustrates attendees and help crew staff.. For attendees, time is wasted, waiting in long lines for simple check-ins, app fatigue, and getting live help is really frustrating. For event staff, productivity is destroyed by constantly switching between walkie- talkie, WhatsApp groups, and desktop CRM screens without a single source of truth. Hence delayed response and operational bottlenecks All these core bottlenecks, our Robotic Astro will solves. Solution: By placing physical AI directly on the event floor, Astro connects attendees and staff without friction: Interactive Check-In & Session Booking: Attendees scan a QR code via Astro’s AI camera and select sessions on the TFT screen. Agentforce queries Data Cloud in real time to verify seat counts, lock reservations, and dynamically update inventory. Headless Crew Dispatch via Slack: When help is requested, Astro sends an MQTT payload. Agentforce routes it to Slack, where support staff reply directly. The response is routed back to Astro to speak aloud, display on-screen, and trigger a cellular SMS to the attendee. Physical IoT Triggers: Once verified, Astro sends Bluetooth commands to print attendee badges and unlocks venue doors via Wi-Fi smart locks. Under the Hood: Everything is driven by Agentforce as the Central Logic Engine, using custom Apex REST Endpoints and Platform Events to expose Headless 360 APIs directly to Astro's ESP32 microcontroller—requiring zero native app logins for attendees and zero context-switching for staff. [What are you going to build?]",
      "videos": [],
      "docs": [
        {
          "label": "robotic-astro-agentforce-headless360",
          "url": "https://github.com/jasvicky/robotic-astro-agentforce-headless360/tree/main"
        },
        {
          "label": "Robotic Astro",
          "url": "https://docs.google.com/document/d/1Jgte77Xu8YAn2J3zVe3oDhsyvx-gRNPEjaAUbIElD3w/edit?usp=sharing"
        },
        {
          "label": "Google Drive Link",
          "url": "https://drive.google.com/file/d/1UbiHEZxaqz6rzLAeXwASLMNMEvos18Wt/view?usp=drive_link"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Sri's project",
      "full_title": "Sri's project",
      "track": "AI Fluency Track",
      "category": "participant",
      "awards": [],
      "team": "Sri kaja",
      "pitch": "AI Fluency Track : NA",
      "description": "AI Fluency Track : NA",
      "videos": [],
      "docs": [
        {
          "label": "Link",
          "url": "https://docs.google.com/presentation/d/104sUgTlfDPOK0ALMKBBgpaqq00QOWMQJ/edit?usp=drive_link&ouid=116733836501351609350&rtpof=true&sd=true"
        },
        {
          "label": "AccessAlly: An Adaptive Public-Service Agen",
          "url": "https://docs.google.com/document/d/1lFFlMbAA12RG3-q9dBemo9znlAyBZYLXwXq0z1a9BvA/edit?usp=sharing"
        },
        {
          "label": "AccessALLy",
          "url": "https://drive.google.com/file/d/1HHOhApi8MfbLHbksZkRx_cSDoqXW2hc1/view?usp=sharing"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "AI ENABLED GROUND WATER\nWELL PREDICTOR - AquaInsight",
      "full_title": "AI ENABLED GROUND WATER\nWELL PREDICTOR - AquaInsight",
      "track": "Builder Track",
      "category": "participant",
      "awards": [],
      "team": "Himanshu Himanshu",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name AI ENABLED GROUND WATER WELL PREDICTOR - AquaInsight Problem to solve Predicting groundwater levels is critical for planning and designing infrastructure projects, such as wells, boreholes, and water supply systems. Accurate predictions help avoid the risk of infrastructure failure and save the cost. This also helps in preserving the environment. Our solution AquaInsight is a cutting-edge Agent dedicated to revolutionizing water well management through the application of artificial intelligence (AI). Our mission is to provide accurate and timely predictions for ground water level , enabling more efficient and sustainable water resource management.",
      "videos": [
        {
          "label": "AquaInsight AI Demo Agent Website",
          "url": "https://aqua-insight-ai.vercel.app"
        }
      ],
      "docs": [
        {
          "label": "AquaInsight AI Code",
          "url": "https://github.com/Softtechy/AquaInsight-AI"
        },
        {
          "label": "Documentation",
          "url": "https://drive.google.com/file/d/1_Aoy9krDjKTS6k2h8jlq6ZoMfs3F0Ivq/view?usp=sharing"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "AdaptAbility — The accessibility & accommodations agent",
      "full_title": "AdaptAbility — The accessibility & accommodations agent",
      "track": "Builder Track",
      "category": "participant",
      "awards": [],
      "team": "Luca Pero, Federico Picone",
      "pitch": "Project Name AdaptAbility Problem to solve Asking for an accommodation is a maze at the worst possible moment. An employee with ADHD who can't focus in an open office has to hunt across scattered HR d",
      "description": "Project Name AdaptAbility Problem to solve Asking for an accommodation is a maze at the worst possible moment. An employee with ADHD who can't focus in an open office has to hunt across scattered HR docs, guess who to ask, and wait on a ticket just to learn what they're entitled to. A blind customer evaluating Everline can't get a straight answer on whether the product works with their screen reader. And when the stakes rise, medical documentation, a legal deadline in the interactive process, the person is left at the mercy of whichever rep they happen to reach and how improvised that answer is. Discovery friction excludes people, rep dependent inconsistency is itself a fairness problem, and a system that freelances over medical information or legal deadlines is outright dangerous. Our solution AdaptAbility is a deterministic, RAG grounded Agentforce agent that serves two Everline audiences, employees and customers, from a single architecture. It answers questions about accommodations and flexible, cognitively accessible work arrangements using only published Knowledge content, never improvised, and separates audiences through a visibility flag: the same agent helps the employee seeking an ergonomic keyboard or medical leave, and the customer asking whether the task boards work with VoiceOver. It reduces cognitive load by design, offering a predictable interface that answers directly instead of forcing someone to parse a long policy PDF or navigate a multi step ticketing flow, an accessible interaction pattern for neurodivergent users, not just a delivery channel. And over this sensitive domain it enforces six deterministic gates: any medical or disability disclosure, any write action (approving or modifying a request), or any genuine uncertainty triggers an immediate, hard coded handoff to a People Success specialist, who receives the case already loaded, so the person never has to re explain. Three custom scorers measure that it escalates when it should, that the handoff is actually useful, and that every answer is grounded and non hallucinated: quality proven, not assumed.",
      "videos": [
        {
          "label": "Demo",
          "url": "https://www.loom.com/share/745cbd31772044a8a1251389493556df"
        }
      ],
      "docs": [
        {
          "label": "Hackathon Project",
          "url": "https://github.com/LucaPero/SFDev/tree/main/hackathon"
        },
        {
          "label": "AdaptAbility-Agentforce for Good",
          "url": "https://docs.google.com/presentation/d/1gjOleP7O8SMPMAGOM0IgUu8--LsJI0Un0vyn6ixOut4/edit?slide=id.p1&pli=1#slide=id.p1"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Advocate",
      "full_title": "Advocate",
      "track": "Builder Track",
      "category": "participant",
      "awards": [],
      "team": "Robin Joseph Parfan",
      "pitch": "Project Name Advocate Problem to solve One in four working adults lives with a disability or chronic condition. Requesting a workplace accommodation still means cold forms, awkward conversations, and ",
      "description": "Project Name Advocate Problem to solve One in four working adults lives with a disability or chronic condition. Requesting a workplace accommodation still means cold forms, awkward conversations, and weeks of silence. Employees delay, under-disclose, or give up entirely. HR teams lack the context to act quickly Our solution Advocate is a dual Agentforce system: (1) Ada guides employees through accommodation requests at their own pace, drafts a professional advocacy letter, and submits a tracked Case to HR; (2) HRBrief gives HR partners a plain-language briefing and implementation guidance so they can act the same day.",
      "videos": [
        {
          "label": "Video Demo",
          "url": "https://youtu.be/TdP1aVEen6U"
        }
      ],
      "docs": [
        {
          "label": "Project Repo",
          "url": "https://github.com/robinparfan-hub/df26-agentforce-advocate"
        },
        {
          "label": "README",
          "url": "https://github.com/robinparfan-hub/df26-agentforce-advocate#advocate"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "CareBridge",
      "full_title": "CareBridge",
      "track": "Builder Track",
      "category": "participant",
      "awards": [],
      "team": "MD Adnan Ansari, Komal kumari, Simran Kumari, Suraj Shinde",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name CareBridge: The AI-Powered Post-Discharge Copilot Problem to solve Hospital discharge coordinators face a chaotic race against the clock to coordinate medications, specialized home care, transport, and equipment before a patient can leave. Delays in this process cause bottlenecks that lead to occupied hospital beds and frustrated patients. Our solution We are building an intelligent assistant uniting Salesforce Core, Data Cloud, and AWS to fully orchestrate and secure patient transitions home. Using Custom Agentforce actions for reasoning, the agent will parse user prompts to automatically draft medication prescriptions, secure certified caretakers from an internal network, and query external AWS databases to reserve specific transport and medical equipment needs.",
      "videos": [
        {
          "label": "CareBridge Demo Video",
          "url": "https://drive.google.com/drive/u/0/folders/1DvPWi3wcd11gHuhLATXXw6Dtrw67VNzJ"
        }
      ],
      "docs": [
        {
          "label": "CareBridge",
          "url": "https://github.com/Sanya-Pathak08/careBridge"
        },
        {
          "label": "CareBridge Document",
          "url": "https://drive.google.com/drive/u/0/folders/1DvPWi3wcd11gHuhLATXXw6Dtrw67VNzJ"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "DreamSync",
      "full_title": "DreamSync",
      "track": "Builder Track",
      "category": "participant",
      "awards": [],
      "team": "Dalesha Hemrajani, Muskan Juneja, Pruthvi Raju Kanchanapally, neelam shazia",
      "pitch": "Project Name: DreamSync. Problem to solve: Many home-furnishings companies struggle to effectively track an",
      "description": "Project Name: DreamSync. Problem to solve: Many home-furnishings companies struggle to effectively track and reduce their product and supply-chain carbon emissions. Emissions data is siloed across BOMs, suppliers, and shipments, making it hard to get a full picture. Design and logistics teams often lack immediate visibility into product-level and shipment-level carbon hotspots, and businesses need automated, auditable sustainability reporting to track performance and meet stakeholder expectations. Our solution We're building a unified emissions platform that integrates all SKU, supplier, and shipment data within Salesforce Data Cloud for a holistic carbon view, paired with agent-driven insights: A Product Emissions Agent calculates and compares CO₂e for each SKU, offering \"what-if\" scenarios for greener design choices A Supply-Chain Emissions Agent monitors and flags high-emission shipments, recommending more sustainable logistics alternatives A Predictive Agent auto-generates real-time executive dashboards, KPI tiles, and audit logs for transparent, actionable reporting The agent also supports Carbon Consultation booking , setting up calendar invites for B2C engagements Together, this helps businesses confidently measure, reduce, and report on their carbon performance -product by product, shipment by shipment and strengthening their sustainability leadership. Tool(s) needed to bring idea to life: Salesforce Data Cloud, CRM, Agentforce, Agentforce Voice, Meta EARTHFORCE TRACK · 1 OF 16 SALESFORCE EQUALITY GROUPS",
      "videos": [
        {
          "label": "DreamSync Video",
          "url": "https://www.youtube.com/watch?v=kz5XOcjTijY"
        }
      ],
      "docs": [
        {
          "label": "DreamSync Repo",
          "url": "http://github.com/kpruthvirj/DreamSync/"
        },
        {
          "label": "DreamSync-Ivy",
          "url": "https://github.com/kpruthvirj/DreamSync/blob/main/README.md"
        },
        {
          "label": "Deck",
          "url": "https://github.com/kpruthvirj/DreamSync/blob/main/Hackathon_Sep26_DreamSync.pptx"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Fencing for All 🤺♿🥇",
      "full_title": "Fencing for All 🤺♿🥇",
      "track": "Builder Track",
      "category": "participant",
      "awards": [],
      "team": "Jon Jessup, Parth Sevak, Pallavi geddam, Ajay Munjuluru",
      "pitch": "🤺♿ Fencing for All is the first sport on Sports for All , a reusable Agentforce + Data Cloud platform for Olympic and Paralympic national governing bodies. Reference implementation: USA Fencing parafe",
      "description": "🤺♿ Fencing for All is the first sport on Sports for All , a reusable Agentforce + Data Cloud platform for Olympic and Paralympic national governing bodies. Reference implementation: USA Fencing parafencing. The question It's late. A parent is reading an 88-page athlete handbook to answer one question: can my daughter fence from a wheelchair? The answer has been yes for decades. It lives in the handbook, a help center, a myths page and a classification form, and none of them know she is asking. What we built Sport Compass, an Agentforce agent that meets families where they already are (a ChatGPT app, through our MCP server), answers in plain language from USA Fencing's own public pages, cites the page and the date for every fact, never decides eligibility, never asks for a diagnosis or a document, and hands off to a person at USA Fencing when the question is a decision rather than an explanation. The journey, as it ran in the org (every reply in the film and the prototype is verbatim from the live agent): \"Can she fence from a wheelchair?\" → Yes, with the club finder and the Para filter, and the difference between trying a lesson and competing. Three dated sources. Output evaluation GROUNDED, 12.1 s. \"Do we need a frame before the first lesson?\" → No; clubs arrange starter equipment. No diagnosis asked. A five-step first-lesson checklist. \"Who decides if she can compete?\" → \"I cannot decide.\" The classification page and information@usafencing.org. A program match near ZIP 84101, scored in Flow from synthetic data and labeled as such in the first sentence. \"Ask a person at USA Fencing to follow up.\" → A draft, then exactly what will be saved and what will not (no name, age, diagnosis, contact or transcript), then a plain yes → Case 00001010 in the Sport Compass Support queue. Real record, no personal data. Consent and Case run in the native Agentforce channel, as the film shows. The same journey in Spanish. Same sources, same caveats, translation disclosed. How it works ChatGPT app → Sport Compass MCP server (four tools: start, ask, end, show_visit_planner; opaque session handles, strict schemas, an interactive club card and first-visit planner) → Agent API → a headless public guide agent whose only actions are knowledge retrieval and public club lookup. Native channel: Sport Compass in Agentforce (Agent Script: router + six subagents) → Apex club lookup and deterministic program matching → signed draft → explicit confirmation → Case in the support queue. Data Cloud holds Sport, Program, Organization, Anonymous Participant Profile and Agent Interaction, plus a Data Library of USA Fencing public pages. The external channel cannot create a Case on purpose: a chat message relayed by a model is not proof of consent. Every turn is traced; every knowledge answer carries an output evaluation; retrieved content is information, never instructions. What the Accessibility Expert Skill and the RAI Self Check changed Wall-of-text answers → short paragraphs, numbered steps, one next step. Five questions at once → one at a time. Bare URLs → title, domain and date. Color-only status → text labels. Implied eligibility from an age → \"I cannot decide,\" every time. Disability questions treated as sensitive content → in scope, by rule. Stale season numbers → the season is named and historical thresholds are gone. \"No data\" read as \"not accessible\" → unknown means unknown. Why an agent, not another FAQ The hard part was never the information. It was that a parent had to know which of six documents to open, and had no one to ask. The agent turns the next question into the next step, and turns every escalation into a record USA Fencing can act on: what families ask for, where they give up, where there is no para-listed club within 50 miles. Sports for All A second governing body configures instead of rebuilding: a Sport row, a Data Library, program data, the allowed support reasons, language settings. The router, the guardrails, the consent flow and the Case pattern stay the same. Para swimming and sled hockey are next. See it, then test it 🟢 Try it yourself: sports-4-all.org . The Fencing for All Assistant, a headless Agentforce agent, is live there in English, Español and Français; ask it anything on this page, in your own words. For anyone who builds agent clients, the same assistant answers as an MCP endpoint at sports-4-all.org/api/public/mcp . ▶ Film (4:57): youtu.be/teK6UsskyvI · 3-minute cut: Google Drive 🧪 Prototype : replays the recorded journey with the subagent, action, latency and evaluation behind every turn. Keyboard and screen-reader friendly. 📄 Documentation, design, transcripts, screenshots: Google Drive folder 🔍 In the org: Agentforce Builder → Sport Compass → Live Test, and Case 00001010. In Collaboration with USA Fencing.",
      "videos": [
        {
          "label": "Demo video (4:57) - YouTube",
          "url": "https://youtu.be/teK6UsskyvI"
        }
      ],
      "docs": [
        {
          "label": "GitHub - sports-for-all-agentforce (agent, MCP server, data)",
          "url": "https://github.com/gpallavi704/sports-for-all-agentforce"
        },
        {
          "label": "Experience design (PDF): journey, screens, accessibility cho",
          "url": "https://drive.google.com/file/d/1jmbn5WNEkcBzucLQw16vWuw_mipuGfQ1/view"
        },
        {
          "label": "Architecture diagrams: solution design + system architecture",
          "url": "https://drive.google.com/drive/folders/1HjO2UDyuqF-HLILojH6k_JeTZK0hOv0R"
        },
        {
          "label": "Documentation, screenshots, film (Google Drive)",
          "url": "https://drive.google.com/drive/folders/1d7Gx7gILMG3orCZ_F01RyLcGTUCG9ssr"
        },
        {
          "label": "Technical MVP scope and architecture (Google Doc)",
          "url": "https://docs.google.com/document/d/1yTj1n5sibCmMMHXiEGGtUT4HIbWM9Ak_Q85Mh-T4-gI/edit?usp=sharing"
        },
        {
          "label": "Accessibility Expert Review: findings, fixes, evidence (PDF)",
          "url": "https://drive.google.com/file/d/1kYhjxICwIFgNWiwlQ_qS1a7FDiJ_lYNr/view"
        },
        {
          "label": "RAI Self Check: findings, responses, probe log (PDF)",
          "url": "https://drive.google.com/file/d/1KVG01a7YIPq5BS-iudfVrDbuaju9wVPz/view"
        },
        {
          "label": "Interactive prototype: the recorded journey in a ChatGPT-sty",
          "url": "https://sites.google.com/havihi.digital/fencing-for-all"
        },
        {
          "label": "Live agent: sports-4-all.org (Fencing for All Assistant)",
          "url": "https://sports-4-all.org/"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "FraterBot asistente de ropería Fraternidad Sin Fronteras",
      "full_title": "FraterBot asistente de ropería Fraternidad Sin Fronteras",
      "track": "Builder Track",
      "category": "participant",
      "awards": [],
      "team": "Rafael Hernandez",
      "pitch": "Project Name Frater Bot — el asistente de ropería de Fraternidad Sin Fronteras Problem to solve Fundación Fraternidad sin Fronteras is a home in Coyoacán, Mexico City, for 66 people with intellectual ",
      "description": "Project Name Frater Bot — el asistente de ropería de Fraternidad Sin Fronteras Problem to solve Fundación Fraternidad sin Fronteras is a home in Coyoacán, Mexico City, for 66 people with intellectual disabilities who were abandoned. Its care model is built explicitly on the UN Convention on the Rights of Persons with Disabilities. Daily care runs on volunteers. They arrive untrained, they rotate constantly, and they range from university students to people who never finished primary school. Frater's own volunteer list includes warehouse organisation — handing out and collecting clothes is volunteer work. So the software problem is not inventory. It is this: the quality of care a resident receives is capped by what an untrained volunteer can do with the system. If recording \"I gave Juan a clean shirt\" requires knowing Salesforce, either it does not get recorded, or it needs training nobody has time to give. Either way, the cost lands on the resident, not the volunteer. Care becomes invisible. And the record of what someone was given — or chose — is simply lost. Our solution A Spanish-language Agentforce agent that a volunteer talks to the way they would tell a colleague what happened: le di una playera azul a juan It asks one question at a time , tolerates missing accents, misspellings and nicknames without correcting anyone, never guesses a garment or a person, shows what it is about to save, and requires confirmation before writing. Underneath, deterministic Apex does all the arithmetic and every write — the model never computes a number or decides an outcome. And it asks one question no inventory system asks: ¿La escogió Juan, o se la diste tú? Three-valued — sí / no / no se sabe — because \"I don't know\" is a truthful answer and coercing it into \"no\" would manufacture evidence that a resident did not choose, which nobody observed. Under a CRPD-based care model, \"how often do residents choose their own clothes?\" is a question the home should be able to answer. Today, like most institutions, it cannot — not from indifference, but because nobody ever recorded it, and it cannot be reconstructed afterwards.",
      "videos": [
        {
          "label": "Video",
          "url": "https://youtu.be/J7XYaMoAiE4"
        }
      ],
      "docs": [
        {
          "label": "Code",
          "url": "https://github.com/leafarhz/frater-bot"
        },
        {
          "label": "Documentation",
          "url": "https://github.com/leafarhz/frater-bot/blob/main/README.md://"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Hands Free Meeting Assistant",
      "full_title": "Hands Free Meeting Assistant",
      "track": "Builder Track",
      "category": "participant",
      "awards": [],
      "team": "Abdullah Madani, Shunsuke Kumisaka, Nic Anthony Sevilla",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name [What's the name of your project or Agent?] Hands Free Meeting Assistant Problem to solve [What's the problem you want to solve?] In a lot of jobs you sit with someone, listen to how their process works, and then you have to turn it into a diagram. Consultants do this. So do caseworkers, project managers, researchers, and nurses taking a patient history. There is a problem with this even for people who can type. When it is all just talking, the person describing their process can't see whether you understood them correctly. You are looking down at your notes instead of at them. And usually you only find out you got something wrong much later, when you finally show them what you wrote up. The bigger problem is that this work needs hands. Dictation is not really an issue anymore, every phone and computer can type what you say. Diagramming is different. To make a flowchart you have to choose a shape, put a box somewhere, drag it, connect it to another box, write a label on it, and then line everything up. Doing all of that with your voice through a normal drawing app is almost impossible. As far as we could find, nobody has made this work. So this kind of work is really only open to people who can use a keyboard and a mouse. That leaves out people with limb difference or amputation, spinal cord injury, ALS, MS, cerebral palsy, or bad RSI. It also leaves out anyone who just broke their arm for a few weeks. Most assistive technology helps people read or hear things. Making something yourself, especially something visual with a structure to it, has had much less attention. And because of that, some jobs end up just not being an option for people. Our solution [What are you going to build?] It is an Agentforce agent that listens to the conversation and builds the diagram while people are still talking. The person capturing it can then change it and check it using only their voice. Someone explains their process out loud and the flowchart appears and keeps growing as they speak. Nobody types anything. After that the operator just talks to it: \"rename step three\", \"delete the pre-check\", \"move packing before inspection\", \"make inspection two days\", \"no, not infection, inspection\", \"undo that\", \"highlight inspection and packing\". Every step has a number on it, so you can say which one you mean without pointing at the screen. You can also say \"read it back to me\" and it speaks the whole diagram out loud, because if you can't check the screen yourself then the system has to tell you what it has. It can look things up without hands too. You describe the problem in your own words and the matching entries come up, so you don't need to know what they are called first. We built it for people who can't type, but it is also faster if you can, because you keep looking at the person you are talking to instead of down at your laptop.",
      "videos": [
        {
          "label": "HandsFreeMeetingAssitantVideo",
          "url": "https://drive.google.com/file/d/1i-65Ha7SdnG-lbqLrCLD9f78sRnIV8Z2/view?usp=sharing"
        }
      ],
      "docs": [
        {
          "label": "Metadata_code_zip",
          "url": "https://drive.google.com/file/d/1W1jrZU1ZaBzyce6XF5yjn0gwfiluAaQO/view?usp=sharing"
        },
        {
          "label": "HandsFreeMeetingAssitantDocumentation",
          "url": "https://drive.google.com/drive/folders/1N-38YvV_A0X8Z6PLxQkr95WaK7RSl-Ju?usp=sharing"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Heard",
      "full_title": "Heard",
      "track": "Builder Track",
      "category": "participant",
      "awards": [],
      "team": "Pochana Harinath Reddy",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name Heard — Giving Every Person a Voice Problem to solve When someone needs to raise a complaint with a school, hospital, or government office, the barrier is rarely the merit of the issue. It is language, accessibility, and process. A person speaks Telugu; the intake form is in English. A person cannot type easily; the only channel is a web form. And once a claim is filed, they are left guessing whether the reply they received was a real answer or an automated acknowledgement, and with no recourse when nothing arrives at all. Each step drops people out. Traditional forms and scripted chatbots handle none of this end to end, and translation alone does not solve it — a claim that quietly alters what the person actually said is worse than no claim. Our solution Heard turns a person's voice or text into a structured, fact-bound claim while preserving their original statement as the source of truth. Speak in any language or type it; Heard transcribes, translates, and reads it back so the person can confirm it before anything is submitted on their behalf. Two rules shape the design. A Fabrication Guard keeps the agent from adding any detail the person did not say — where information is missing, Heard asks rather than fills it in. A Consent Gate means nothing is sent until the person approves the exact text, and the original recording stays attached as evidence. Built natively on Agentforce. Transcription and speech use ElevenLabs through a Named Credential, so no key is exposed in Apex or the client. Translation runs through a Prompt Builder template invoked from Apex via the Connect API, keeping it inside the Einstein Trust Layer. Claims persist as Salesforce records, with consent, the approved text, and the source audio stored together. Implemented in this build: voice and text input, transcription, translation, spoken playback, consent capture, and claim creation. Designed and specified, not yet complete: institutional dispatch, distinguishing substantive responses from acknowledgements, silence tracking against timelines, and escalation to human support.",
      "videos": [
        {
          "label": "Heard Demo",
          "url": "https://tachyonitsolutions-my.sharepoint.com/:v:/g/personal/akhila_ponaganti_tachyontech_com/IQAeLEfLTdxhRoKQghdtJ7WKAccY6QPed37uY_exd0hkATo?e=bwv5Ri"
        }
      ],
      "docs": [
        {
          "label": "Heard repo",
          "url": "https://github.com/Harshitha03-tech/Heard-Salesforce-Agent"
        },
        {
          "label": "Heard_Documentation.docx",
          "url": "https://tachyonitsolutions-my.sharepoint.com/:w:/g/personal/akhila_ponaganti_tachyontech_com/IQAmFAA8_dS2R6dVCITVU9CwAQkgQZpOQpWjjYnWG5oQiuo?e=iT3HVj"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "ImpactPulse",
      "full_title": "ImpactPulse",
      "track": "Builder Track",
      "category": "participant",
      "awards": [],
      "team": "Sunil Thukral, krish thukral",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name ImpactPulse Make opportunity visible. Make progress transparent. Make intervention accountable. Problem to solve Workforce-development nonprofits often provide or curate free learning resources, but learners can still struggle to identify the right next step, stay on track through difficult milestones, or access mentor support when they need it most. Program managers and nonprofit leaders face the other side of the same problem: learner progress, mentor capacity, milestones, and follow-up activity are often fragmented across spreadsheets, learning tools, CRM records, and staff communication. By the time declining completion rates or mentor shortages are visible, learners may already be disengaging or at risk of missing a cohort deadline. ImpactPulse addresses this gap by helping nonprofits identify when learners are stalled, understand whether mentor capacity is the bottleneck, and coordinate a timely, accountable response—without exposing individual learner data publicly. Our solution ImpactPulse is a workforce-development transparency and intervention platform for nonprofits. It provides: Free, structured career-learning roadmaps that turn public resources such as Salesforce Trailhead into accessible, self-paced pathways with milestones, expected time commitment, practice activities, and mentor-support options. A public, privacy-safe impact dashboard showing aggregate learner engagement, pathway progression, completion rates, mentor capacity, and program outcomes. An internal Slack AI assistant that turns verified milestone and CRM signals into evidence-based program-risk alerts. For example, it can flag when Salesforce Career Foundations is at 42% completion against a 65% target, with 18 learners stalled and only two mentors available. A human-governed escalation workflow : the AI summarizes facts, identifies risks, and recommends a next step, but an authorized leader must approve any action. Once approved, ImpactPulse creates a Salesforce follow-up Task and records the event with a audit trail. The solution uses Next.js and Vercel for the portal, Supabase for roadmap data, aggregate metrics, audit logs, and workflow state, Salesforce for CRM contacts, fundraising context, and Tasks, and Slack and SlackBot-powered summaries for internal decision support. If the programs are managed in Salesforce, we can pull the data out right from Salesforce and show it in the live dashboard using the Salesforce headless architecture. We did not have access to the Agentforce nonprofit for this project. It is designed around accessibility, data transparency, privacy-safe aggregate reporting, and human accountability. Slack Workspace: impact-pulse.enterprise.slack.com Salesforce Id: 00DgK00000YJNrl",
      "videos": [
        {
          "label": "Youtube",
          "url": "https://youtu.be/-zNQkeXjytc"
        }
      ],
      "docs": [
        {
          "label": "Slack App -- Impact Pulse",
          "url": "https://api.slack.com/apps/A0C004YNWMT/general?"
        },
        {
          "label": "Website for the project",
          "url": "https://ap-27-df-26-impact-pulse-hack02.vercel.app/"
        },
        {
          "label": "Slides",
          "url": "https://canva.link/k4cy7l4svu949jv"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "ProCompanion",
      "full_title": "ProCompanion",
      "track": "Builder Track",
      "category": "participant",
      "awards": [],
      "team": "eleanor spolyar, Caroline Roseri",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name ProCompanion Problem to solve Many seniors face loneliness and social isolation, making it difficult to maintain meaningful connections and discover opportunities for engagement. Limited mobility, transportation challenges, and lack of awareness of available resources often prevent older adults from participating in community activities, accessing support services, and building the relationships that are critical to their mental, emotional, and physical well-being. Our solution Seniors and caregivers gain a compassionate, easy-to-use resource that makes it easier to discover local activities, access transportation, and build meaningful community connections. By removing common barriers to participation, the solution helps older adults remain active, independent, and socially engaged, improving overall well-being and quality of life.",
      "videos": [
        {
          "label": "See Video starting at 3:20.",
          "url": "https://drive.google.com/file/d/1jMm7rsgnEmXdPdsFchN66URrx171lvjs/view?usp=drive_link"
        },
        {
          "label": "Video of Agent",
          "url": "https://drive.google.com/file/d/1jMm7rsgnEmXdPdsFchN66URrx171lvjs/view?usp=sharing"
        }
      ],
      "docs": [
        {
          "label": "ProCompanion Presentation",
          "url": "https://docs.google.com/presentation/d/1DQSDGEW6FbisGp4NlsUxohj5aqCjjRf-/edit?usp=sharing&ouid=105005471750589500125&rtpof=true&sd=true"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "Skill Match AI: for on-demand skills-based volunteering",
      "full_title": "Skill Match AI: for on-demand skills-based volunteering",
      "track": "Builder Track",
      "category": "participant",
      "awards": [],
      "team": "Sheeba Thukral, Anusha Thukral",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name SkillMatch Problem to solve SkillMatch is an AI-powered pro-bono platform connecting volunteers who want to match their skills with nonprofits that need them — powered by Salesforce Agentforce . The question You want to help. You have two hours, and maybe you can code, research, design, or work with AI. But where do your skills actually matter? At the same time, a nonprofit may have a real problem that requires expertise it cannot afford to hire for. The opportunity exists. The skills exist. The hard part is making the connection. Our solution SkillMatch matches volunteer’s skills, interests, and causes with nonprofit opportunities where they can make a meaningful contribution. Instead of scrolling through generic volunteer listings, volunteers get personalized opportunities with the skills needed, time commitment, and estimated value of their contribution. The journey A volunteer tells SkillMatch what they can offer and what causes they care about. Semantic matching surfaces relevant nonprofit opportunities. The volunteer explores an opportunity and sees exactly what the organization needs. An Agentforce-powered concierge helps answer questions and guides the volunteer toward the next step. The volunteer logs their contribution through the Command Center . ImpactPulse turns those hours into measurable value, showing the real impact of skills that might otherwise go unused. How it works SkillMatch uses semantic matching between volunteer skills and nonprofit needs. Salesforce Agentforce acts as their volunteer concierge — answering questions, explaining what the project involves, and helping them figure out what to do next. The Command Center brings recommendations, actions, contribution tracking, and impact into one place. Why an agent, not another marketplace The hard part isn’t finding a list of volunteer opportunities. It’s getting from: “I want to help.” to “Here’s exactly where my skills are needed.” An agent can make that journey personalized and actionable instead of making volunteers figure out the next step themselves. The bigger idea Volunteers have valuable skills they are willing to share. Nonprofits have problems those skills could solve. But access to that expertise is often limited by time, money, and professional networks. SkillMatch is our attempt to close that gap. Better matches. Lower barriers. More impact from the skills volunteers already have.",
      "videos": [],
      "docs": [
        {
          "label": "Link",
          "url": "https://ap-25-df-26-hackathon01.vercel.app/"
        },
        {
          "label": "SkillMatch-Match professional skills with nonprofit projects",
          "url": "https://canva.link/48f2gamom27y3k5"
        },
        {
          "label": "Link",
          "url": "https://drive.google.com/file/d/1jCaqYdcVkUZHADx4RVRYdfrgDtXwup6-/view?usp=sharing"
        }
      ],
      "thumbnail": ""
    },
    {
      "title": "fusionSpan: Graham - Program Support Agent for Good",
      "full_title": "fusionSpan: Graham - Program Support Agent for Good",
      "track": "Builder Track",
      "category": "participant",
      "awards": [],
      "team": "Jeff Golembiewski, Shawn Lai, Lauren Mitchell, Jakub Zelmanowicz",
      "pitch": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Projec",
      "description": "For those submitting to the Builder Track: add your code, demo video, and other relevant content under Project Assets! If you are a part of the AI Fluency Track, please feel free to write \"NA\". Project Name Graham: The nonprofit program support agent Problem to solve Mission-driven organizations do some of the most important work there is. At the heart of what they do ... nonprofits deliver critical programs and services to their community and constituents. But delivering programs often comes with a growing administrative burden, from getting participants enrolled in the right program to managing ongoing questions, track progress, and identifying when someone may need additional support and assistance. When so much staff time is spent manually managing the program process, there is less time to focus on what matters most ... building meaningful relationships with constituents and advancing the organization's mission. Our solution Meet Graham. Graham is a program support agent designed to reduce the manual administrative burden of managing and delivering nonprofit programs. A virtual program team member that supports program participants across their entire journey, from intake and enrollment, through day-to-day needs, and ongoing engagement. Graham handles routine tasks, monitors participant progress, and proactively identifies when additional support may be needed by someone enrolled in the program. By taking on the work that doesn't require human intervention and bringing staff in when it matters most, Graham gives teams more time to focus on what they do best: serving their community and delivering impact to their mission.",
      "videos": [
        {
          "label": "Graham - Program Support Agent for Good - Demo",
          "url": "https://drive.google.com/file/d/1uzAxingr0eu_sBM_RgCDIwcBJB2jPi0m/view?usp=sharing"
        }
      ],
      "docs": [
        {
          "label": "Agentforce Project Documentation",
          "url": "https://docs.google.com/presentation/d/11YB-w4EWU4rHoeZLDgbovVOem7-hnKHGPzN3LRFfbbk/edit?usp=sharing"
        }
      ],
      "thumbnail": ""
    }
  ]
};
