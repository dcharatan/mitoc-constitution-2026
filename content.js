// Source content for the MITOC constitution review viewer.
// Each document is a list of blocks. `old` is the current text (verbatim from the
// PDFs), `new` is the proposed text, and `notes` lists the issue ids that explain
// the change. Line syntax: "# " title, "## " article, "### " section; a line that
// starts with "A." or "1." is a list item, and every 4 leading spaces nest it one level.

window.MITOC = {
  meta: {
    sources: {
      form: "Fall 2026 Student Organization Re-registration Form (draft, Submission ID 281446)",
      handbook: "MIT Student Organization Handbook 2026–27"
    }
  },

  issues: [
    // ---------- New findings ----------
    {
      id: "N1", severity: "urgent", source: "new", docs: ["constitution"],
      title: "Match MIT’s revocation statement exactly",
      problem: "",
      fix: "",
      cites: [
        { src: "Form", page: "5", text: "“This section of the constitution must include each of the following statements exactly as written: … The Executive Board reserves the right to revoke the membership or officer position of any member, by a two-thirds majority vote, for non-conduct related reasons. All conduct-related complaints should be referred to the appropriate channel(s) for resolution …”" },
        { src: "Form", page: "6", text: "“If, upon review, we discover that you have not included each of these statements exactly as written in the membership section … your organization will be subject to disciplinary action including freezing or de-recognition.”" },
        { src: "Handbook", page: "5", text: "“The constitution must include all clauses required by the ASA.”" }
      ]
    },
    {
      id: "N2", severity: "urgent", source: "new", docs: ["constitution"],
      title: "Match MIT’s ASA Governance Clause exactly",
      problem: "",
      fix: "",
      cites: [
        { src: "Form", page: "5", text: "“The following ASA Governance Clause exactly as written: [Student Organization Name] agrees to abide by the policies and guidelines of the Association of Student Activities (ASA), its Executive Board, …”" },
        { src: "Form", page: "6", text: "Checkbox: confirm the clause “is included exactly as written in the ASA Governance Clause section”, with the same freezing or de-recognition warning." }
      ]
    },
    {
      id: "N3", severity: "urgent", source: "new", docs: ["constitution"],
      title: "Move quorum rules into the Meetings article",
      problem: "",
      fix: "",
      cites: []
    },
    {
      id: "N4", severity: "recommended", source: "new", docs: ["constitution", "bylaws"],
      title: "Match MIT's definition of who is a student",
      problem: "",
      fix: "",
      cites: [
        { src: "Handbook", page: "62", text: "“Student: An individual with regular student status at MIT. During the fall and spring terms, undergraduate and graduate students must be properly registered with no registration holds. Undergraduate students are not required to register for the Independent Activities Period (IAP) or summer term …”" },
        { src: "Handbook", page: "62", text: "“Non-Student Individual: Any person who is not an MIT student. Examples include students on leave, non-student Institute employees, alumni …”" },
        { src: "Form", page: "5", text: "“All individuals who hold officer positions in recognized student organizations are required to be MIT students.”" }
      ]
    },
    {
      id: "N6", severity: "urgent", source: "new", docs: ["constitution"],
      title: "Constitution changes take effect after ASA and SOLE approve them",
      problem: "",
      fix: "",
      cites: [
        { src: "Handbook", page: "5", text: "“Report any changes to: … Mission (requires ASA and SOLE approval); Constitution (requires ASA and SOLE approval)”" },
        { src: "Handbook", page: "6", text: "Good standing requires “Activities and operations that are in alignment with their constitution as approved by the ASA.”" },
        { src: "Form", page: "2", text: "Required on the Engage group page: “… Constitution”. “It is the required responsibility of core executive officers to make sure that the information posted on the Engage group page … is kept updated and accurate at all times.”" }
      ]
    },
    {
      id: "N8", severity: "recommended", source: "new", docs: ["bylaws"],
      title: "Waive dues for members who can’t afford them",
      problem: "The old bylaws’ Art. II says individuals in every category “shall pay dues”. The Handbook requires groups that charge dues to waive them for members who cannot afford them.",
      fix: "Add a dues waiver to Bylaws Art. II.",
      cites: [
        { src: "Handbook", page: "57", text: "“Student organizations may charge membership dues. However, they must waive dues for members who cannot afford them (in order to comply with the inclusivity requirements for being a student organization).”" },
        { src: "Handbook", page: "4", text: "Responsibility 3: “Ensure all current MIT students are eligible for membership and that participation is not restricted according to MIT’s nondiscrimination policy.”" }
      ]
    },
    {
      id: "N9", severity: "recommended", source: "new", docs: ["bylaws"],
      title: "Keep all MITOC money in MIT accounts",
      problem: "The financial policies say nothing about where revenue goes. The Handbook treats all student organization money as Institute funds. It prohibits outside platforms and requires prompt deposit.",
      fix: "Add prompt deposit to the Bursar's duties.",
      cites: [
        { src: "Handbook", page: "55", text: "“All funds associated with student organizations are considered Institute funds, including those raised through fundraising efforts, membership fees, or event revenues. … The use of unauthorized financial platforms like Venmo, Cash App, Eventbrite or GoFundMe for collecting funds is prohibited.”" },
        { src: "Handbook", page: "58", text: "“All checks and cash should be deposited immediately upon receipt.”" },
        { src: "Form", page: "2", text: "Attestation: “… ensure financial transparency in accordance with MIT guidelines.”" }
      ]
    },
    {
      id: "N10", severity: "recommended", source: "new", docs: ["bylaws"],
      title: "Require the MIT liability waiver",
      problem: "New this cycle, MIT requires every officer, member, and participant to sign the MIT General Liability Waiver. Otherwise the group loses full recognition. The old bylaws’ membership requirements do not mention it.",
      fix: "Add the waiver to the membership requirements in Bylaws Art. II. Ask SOLE whether MITOC guests also count as “participants” for the waiver.",
      cites: [
        { src: "Form", page: "1", text: "“NEW FALL 2026: ALL officers, members, and participants will need to complete and sign the MIT Liability Waiver in order for the student organization to remain fully recognized.”" },
        { src: "Handbook", page: "5", text: "Re-registration requirement: “Read and distribute the link to the General Liability Waiver.”" }
      ]
    },
    {
      id: "N12", severity: "minor", source: "new", docs: ["bylaws"],
      title: "Define the membership tiers and map them to MIT’s categories",
      problem: "The Handbook defines its own categories. A Member is an MIT student, a Participant is an involved non-student, and an Attendee is someone who only attends events. Engage keeps a separate roster for each. MITOC calls its non-student members “community members” and the old bylaws use several names for the tiers, so it is easy to put people on the wrong Engage roster.",
      fix: "Name the tiers MIT Student Member, MIT Community Member, MITOC Guest, and Participating Member, and define them at the start of Bylaws Article II. Then map each tier onto the Handbook category that matches the person’s involvement: an MIT student is a Member or an Attendee; anyone else is a Participant, an Advisor, or an Attendee. The Constitution keeps only a short pointer to the Bylaws.",
      cites: [
        { src: "Handbook", page: "63", text: "“Member: An MIT student involved in a student organization who regularly participates in meetings or organizational operations.” “Participant: A non-student individual involved in a student organization who regularly participates in meetings or organizational operations.” “Student Organization Advisor: A non-student individual who provides guidance, support, and perspective to a student organization …” “Attendee: Any individual, MIT student or non-student, who attends organization events or activities but is not otherwise involved in the student organization.”" },
        { src: "Form", page: "2", text: "Required on Engage: “Current/Active Member Roster; Current/Active Participant and/or Advisor Roster (if applicable)”" }
      ]
    },
    {
      id: "N15", severity: "minor", source: "new", docs: ["constitution", "bylaws"],
      title: "Update the draft date",
      problem: "",
      fix: "",
      cites: []
    },

    {
      id: "N16", severity: "minor", source: "new", docs: ["constitution"],
      title: "List all officers on Engage",
      problem: "",
      fix: "",
      cites: [
        { src: "Form", page: "5", text: "“Your student organization is also required to have all current active officers listed on the student organization's group page on Engage.”" },
        { src: "Handbook", page: "5", text: "Re-registration requirement: “Confirm officer roster on Engage”" }
      ]
    },
    {
      id: "N17", severity: "minor", source: "new", docs: ["bylaws"],
      title: "Remove MITOC discounts",
      problem: "The old bylaws list “Receive MITOC discounts” as a privilege of Active Members. MITOC discounts have been discontinued.",
      fix: "Delete the item from Bylaws Art. II, Sec. 3.B.",
      cites: []
    },
    {
      id: "N18", severity: "minor", source: "new", docs: ["constitution", "bylaws"],
      title: "Rename Active Members to Participating Members",
      problem: "SOLE and Engage use “Active Member” for their own roster category, so MITOC’s tier of the same name invites confusion when reporting membership.",
      fix: "Call the tier Participating Members in the Constitution and the Bylaws.",
      cites: [
        { src: "Form", page: "2", text: "Required on Engage: “Current/Active Member Roster; Current/Active Participant and/or Advisor Roster (if applicable)”" }
      ]
    },

    // ---------- Earlier review findings ----------
    {
      id: "R1", severity: "urgent", source: "review", docs: ["constitution", "bylaws"],
      title: "Executive Board must consist of MIT students",
      problem: "",
      fix: "",
      cites: [
        { src: "Form", page: "5", text: "“All individuals who hold officer positions in recognized student organizations are required to be MIT students. Your student organization is also required to have all current active officers listed on the student organization's group page on Engage.”" },
        { src: "Form", page: "5", text: "Officer section must include, exactly: “Only MIT students are eligible to serve as officers in the organization.”" },
        { src: "Handbook", page: "62", text: "“Officer: An MIT student that serves in a leadership role in a student organization.”" },
        { src: "Handbook", page: "4", text: "“MIT student organizations may only be initiated, organized, and led by MIT students.”" }
      ]
    },
    {
      id: "R2", severity: "urgent", source: "review", docs: ["bylaws"],
      title: "Align removal rules and add the zero-tolerance policy",
      problem: "The old constitution allows revocation of membership or office only for non-conduct reasons, by a two-thirds vote, and sends conduct complaints to IDHR, COD, or SOLE. The old bylaws allow removal for violating policies and community standards, which are conduct matters, with no vote threshold. The MITOC Code of Conduct's zero-tolerance removal policy appears in neither document.",
      fix: "Rewrite Bylaws Art. VII to match the Constitution’s removal rule, and add the zero-tolerance policy there as a safety rule that requires a two-thirds vote. Change Bylaws Art. I, Sec. A.13 to point to Art. VII.",
      cites: [
        { src: "Form", page: "5", text: "Required: “The Executive Board reserves the right to revoke the membership or officer position of any member, by a two-thirds majority vote, for non-conduct related reasons. All conduct-related complaints should be referred to the appropriate channel(s) …”" },
        { src: "Handbook", page: "10", text: "“Student organizations are accountable for the actions of their officers, members, guests, as well as for the actions of participants at their sponsored events.” Concerns include “Harassment or discrimination.”" }
      ]
    },
    {
      id: "R3", severity: "urgent", source: "review", docs: ["constitution", "bylaws"],
      title: "Clarify participation categories",
      problem: "",
      fix: "",
      cites: [
        { src: "Form", page: "5", text: "Membership section must include, exactly: “All MIT students are eligible for membership in the organization.”" },
        { src: "Handbook", page: "4", text: "Responsibility 3: “Ensure all current MIT students are eligible for membership …”" },
        { src: "Handbook", page: "9", text: "“If there are eligibility requirements (e.g., limited to undergraduates, certain majors), they must not be based on race, sex, or other protected characteristics.”" }
      ]
    },
    {
      id: "R4", severity: "urgent", source: "review", docs: ["constitution", "bylaws"],
      title: "Advisory Board appointments",
      problem: "",
      fix: "",
      cites: []
    },
    {
      id: "R5", severity: "minor", source: "review", docs: ["bylaws"],
      title: "Special meetings follow the Constitution",
      problem: "The old bylaws let the whole board call special meetings; the old constitution limits who can.",
      fix: "",
      cites: [
        { src: "Form", page: "5", text: "Meetings section must say “Who runs the meetings”." },
        { src: "Handbook", page: "6", text: "Good standing requires “Activities and operations that are in alignment with their constitution as approved by the ASA.”" }
      ]
    },
    {
      id: "R6", severity: "urgent", source: "review", docs: ["constitution", "bylaws"],
      title: "Define election procedure",
      problem: "",
      fix: "",
      cites: [
        { src: "Form", page: "5", text: "Officer section must include “Officer election procedure and dates (including what makes a quorum)”." }
      ]
    },
    {
      id: "R7", severity: "urgent", source: "review", docs: ["constitution"],
      title: "Set term limits",
      problem: "",
      fix: "",
      cites: [
        { src: "Form", page: "5", text: "Officer section must include “Explicit terms of office of your organization’s officers that encompass every day of the year”." }
      ]
    },
    {
      id: "R8", severity: "urgent", source: "review", docs: ["constitution"],
      title: "List each officer’s duties",
      problem: "List each officer’s duties, including the core executive officers’ responsibilities (MIT’s term for the President and Treasurer), as required by MIT.",
      fix: "",
      cites: [
        { src: "Form", page: "5", text: "Officer section must include “Duties of each of your organization’s officers”." },
        { src: "Form", page: "1", text: "“A core executive officer (President or Treasurer) must complete the following Student Organization Form … your President AND Treasurer must complete the required Fall 2026 Core Officer Training … with 100% score on all quizzes.”" },
        { src: "Form", page: "2", text: "Attestation: “I will maintain accurate records of my organization membership in Engage and ensure financial transparency in accordance with MIT guidelines.”" },
        { src: "Form", page: "5", text: "“As a core executive officer of your student organization, you are responsible for keeping the officer roster on the student organization's group page on Engage accurate and up-to-date at all times.”" },
        { src: "Handbook", page: "6", text: "“Training for Core Officers: … core executive officers (president and treasurer) must complete a required training module to gain access to MIT systems and keep their organization in good standing.”" },
        { src: "Handbook", page: "55", text: "“To gain signatory access, the current President or Treasurer of an organization must submit the Financial Access Form on behalf of the requesting officer annually on or after July 1. … a student must be listed as an officer for that organization on Engage.”" }
      ]
    },
    {
      id: "R9", severity: "urgent", source: "review", docs: ["constitution"],
      title: "Add a quorum for amendment votes",
      problem: "",
      fix: "",
      cites: [
        { src: "Form", page: "5", text: "Amendment section must include “The quorum necessary for an amendment to be passed”." }
      ]
    },
    {
      id: "R10", severity: "minor", source: "review", docs: ["constitution"],
      title: "Call Article II the mission",
      problem: "",
      fix: "",
      cites: [
        { src: "Form", page: "6", text: "“Include your student organization mission statement exactly as it is written in your organization's constitution in the field below.”" },
        { src: "Handbook", page: "5", text: "“A student organization constitution, including a mission statement that distinguishes the group from other existing recognized student organizations at MIT.”" }
      ]
    },
    {
      id: "R11", severity: "minor", source: "review", docs: ["constitution", "bylaws"],
      title: "Name the monthly general meeting",
      problem: "",
      fix: "",
      cites: [
        { src: "Form", page: "5", text: "“As a recognized student organization, you are required to have your student organization's recurring meeting day, time, and location posted to your student organization's group page on Engage.”" },
        { src: "Form", page: "5", text: "Meetings section must include “The frequency of meetings”." }
      ]
    },
    {
      id: "R12", severity: "minor", source: "review", docs: ["constitution"],
      title: "Label Article VI as the amendments article",
      problem: "",
      fix: "",
      cites: [
        { src: "Form", page: "6", text: "Checkbox: confirm statement 7 “is included exactly as written in the amendment procedures section of your organization's constitution”." }
      ]
    },
    {
      id: "R13", severity: "urgent", source: "review", docs: ["constitution"],
      title: "Unify vacancy-filling process",
      problem: "Extend special case to treasurer because student organizations are required to have both a president and a treasurer.",
      fix: "",
      cites: [
        { src: "Form", page: "5", text: "“As a recognized student organization you are required to have the following core executive officer positions: president and treasurer.”" },
        { src: "Form", page: "5", text: "Terms of office must “encompass every day of the year”." }
      ]
    },
    {
      id: "R14", severity: "urgent", source: "review", docs: ["constitution"],
      title: "Remove a duplicate sentence about when terms start",
      problem: "",
      fix: "",
      cites: []
    },
    {
      id: "R15", severity: "urgent", source: "review", docs: ["constitution", "bylaws"],
      title: "Match MIT’s name for the ASA",
      problem: "",
      fix: "",
      cites: [
        { src: "Form", page: "5", text: "“… the Association of Student Activities (ASA), its Executive Board …”" },
        { src: "Handbook", page: "2", text: "“… the Association of Student Activities (ASA), a joint committee of both the Undergraduate Association (UA) and the Graduate Student Council (GSC) …”" }
      ]
    },
    {
      id: "R16", severity: "recommended", source: "review", docs: ["bylaws"],
      title: "Simplify the spending rules",
      problem: "The old bylaws give three different rules for when spending needs approval. They call the budget “non-binding” while also using it for pre-approval. They give each board member $100 a month, which differs from current practice. The Handbook expects a group to spend according to its budget, so a non-binding budget is a problem.",
      fix: "Rewrite Art. V to match the reimbursement page: an approved annual budget, $100 per position per month for incidentals, and all other spending by Executive Board vote.",
      cites: [
        { src: "Handbook", page: "4", text: "Responsibility 6: “Manage their group’s fiscal activities according to the organization’s constitution and budget as approved by the ASA.”" },
        { src: "Handbook", page: "6", text: "Good standing requires “Transparency in financial management and maintenance of accurate officer and account records.”" },
        { src: "Form", page: "2", text: "Attestation: “… ensure financial transparency in accordance with MIT guidelines.”" }
      ]
    },
    {
      id: "R17", severity: "minor", source: "review", docs: ["bylaws"],
      title: "Add missing officer duties",
      problem: "The old bylaws leave out several duties listed on the MITOC officers page: scheduling meetings, answering inquiries, handling revenue, and leading projects.",
      fix: "Add the missing items to Bylaws Art. I, Sec. B to F.",
      cites: [
        { src: "Form", page: "5", text: "Officer section must include “Duties of each of your organization’s officers”." }
      ]
    },
    {
      id: "R18", severity: "minor", source: "review", docs: ["bylaws"],
      title: "Match trip leader approval to practice",
      problem: "The old bylaws give trip leader approval to “the Safety Committee”. In practice, approval depends on the season, and activity chairs approve leaders for smaller programs.",
      fix: "State the seasonal split once and allow the committees to delegate approval to activity chairs.",
      cites: [
        { src: "Handbook", page: "6", text: "Good standing requires “Activities and operations that are in alignment with their constitution as approved by the ASA.”" }
      ]
    },
    {
      id: "R19", severity: "minor", source: "review", docs: ["bylaws"],
      title: "Fix numbering",
      problem: "The old bylaws’ Art. II, Sec. 3.B skipped item 5.",
      fix: "",
      cites: [
        { src: "Form", page: "7", text: "The uploaded constitution and bylaws are reviewed by the ASA (Constitution Art. VII)." }
      ]
    },
    {
      id: "R20", severity: "minor", source: "review", docs: ["bylaws"],
      title: "Fix a typo",
      problem: "“and and” in the old bylaws’ Art. I, Sec. E.",
      fix: "",
      cites: [
        { src: "Form", page: "7", text: "The uploaded constitution and bylaws are reviewed by the ASA (Constitution Art. VII)." }
      ]
    }
  ],

  docs: {
    constitution: {
      name: "Constitution",
      file: "MITOC_Constitution_proposed",
      blocks: [
        {
          id: "c-title", notes: ["N15"],
          old: `# MIT Outing Club Constitution
To be Ratified 12/1/2025`,
          new: `# MIT Outing Club Constitution
Proposed draft, October 2026`
        },
        {
          id: "c-art1", notes: ["R15"],
          old: `## Article I - Name and Charter
The name of this organization shall be the MIT Outing Club, hereinafter referred to as MITOC. MITOC is to be a student club of the Massachusetts Institute of Technology, in accordance with the Massachusetts Institute of Technology’s Student Organizations, Leadership and Engagement Office (SOLE) and Association for Student Activities.`,
          new: `## Article I - Name and Charter
The name of this organization shall be the MIT Outing Club, hereinafter referred to as MITOC. MITOC is to be a student club of the Massachusetts Institute of Technology, in accordance with the Massachusetts Institute of Technology’s Student Organizations, Leadership and Engagement Office (SOLE) and Association of Student Activities (ASA).`
        },
        {
          id: "c-art2", notes: ["R10"],
          old: `## Article II - Purpose
The purpose of MITOC shall be to create a safe community around outdoor recreation and to provide students with the education and means to use, enjoy, and explore the great outdoors.`,
          new: `## Article II - Purpose and Mission
The purpose of MITOC shall be to create a safe community around outdoor recreation and to provide students with the education and means to use, enjoy, and explore the great outdoors.`
        },
        {
          id: "c-art3-members", notes: ["R3", "N4", "N18"], links: {"N18": ["Participating Member"], "R3": ["All members of the general membership may vote"], "N4": ["“regular student status” shall mean MIT undergraduate", "For purposes of this Constitution and the Bylaws", "shall mean a student as defined"]}, rest: "R3",
          old: `## Article III - Membership
Participation in MITOC shall consist of a tiered structure including members and non-members, as delineated in the Bylaws. Members will consist of MIT student members with regular student status and community members, while non-members shall be called “MITOC guests.” All MIT students are eligible for membership in the organization. The general membership shall be defined as the sum of the MIT student members with regular student status and community members. For purposes of this Constitution, “regular student status” shall mean MIT undergraduate and graduate students who are properly registered at MIT as current students and are fulfilling all of their MIT financial obligations to retain the status of regular students. The organization’s membership will at all times consist of at least 10 MIT students.`,
          new: `## Article III - Membership
Participation in MITOC shall consist of members and non-members, as delineated in the Bylaws. All MIT students are eligible for membership in the organization. The general membership shall be defined as the sum of the MIT Student Members, MIT Community Members, and Participating Members, as defined in the Bylaws. All members of the general membership may vote in elections and on amendments at general meetings.

For purposes of this Constitution and the Bylaws, “MIT student” shall mean a student as defined in the MIT Student Organization Handbook: an undergraduate or graduate student who, during the fall and spring terms, is properly registered at MIT with no registration holds. A student on leave from MIT is not an MIT student. The organization’s membership will at all times consist of at least 10 MIT students.`
        },
        {
          id: "c-art3-conduct", notes: ["N1"],
          old: `The organization shall not discriminate based on any characteristic listed in the MIT Nondiscrimination Policy for membership, officer position, or in any other aspect. The Executive Board reserves the right to revoke the membership or officer position of any member, by a two-thirds majority vote, for non-conduct-related reasons. All conduct-related complaints, including but not limited to, harassment, discrimination, or violations of MIT policy, should be referred to the appropriate channel(s) for resolution, including, without limitation, the Institute Discrimination & Harassment Response (IDHR) Office, the Committee on Discipline (COD), and the Student Organizations, Leadership and Engagement (SOLE) Office. All members are encouraged to become better informed regarding these MIT resources by reviewing the MIT Student Organization Handbook. This organization recognizes its responsibility to uphold the values and policies of MIT and will communicate to all trip and event leaders their respective responsibilities to promptly report misconduct to the MITOC Executive Board and at least one of the above-referenced MIT administrative offices. The organization will cooperate fully with SOLE in the implementation of any recommendations by MIT, resulting from such reporting.`,
          new: `The organization shall not discriminate based on any characteristic listed in the MIT Nondiscrimination Policy for membership, officer position, or in any other aspect. The Executive Board reserves the right to revoke the membership or officer position of any member, by a two-thirds majority vote, for non-conduct related reasons. All conduct-related complaints should be referred to the appropriate channel(s) for resolution, including, without limitation, the Institute Discrimination & Harassment Response (IDHR) Office, the Committee on Discipline (COD), and the Student Organizations, Leadership and Engagement (SOLE) Office. Conduct-related complaints include, but are not limited to, complaints of harassment, discrimination, or violations of MIT policy. All members are encouraged to become better informed regarding these MIT resources by reviewing the MIT Student Organization Handbook. This organization recognizes its responsibility to uphold the values and policies of MIT and will communicate to all trip and event leaders their respective responsibilities to promptly report misconduct to the MITOC Executive Board and at least one of the above-referenced MIT administrative offices. The organization will cooperate fully with SOLE in the implementation of any recommendations by MIT, resulting from such reporting.`
        },
        {
          id: "c-art4-s1", notes: ["R4"],
          old: `## Article IV - Organization
### Section 1: Structure
MITOC shall consist of an Executive Board, an Advisory Board, standing committees as delineated in the Bylaws, and special committees as created by the Executive Board.`,
          new: `## Article IV - Organization
### Section 1: Structure
MITOC shall consist of an Executive Board, an Advisory Board, standing committees as delineated in the Bylaws, and special committees as created by the Executive Board. The Advisory Board shall consist of any positions deemed necessary by the Executive Board. Committee activities shall be managed by a chairperson as appointed by the Executive Board. Advisory Board members and committee chairpersons need not be MIT students and are not officers, unless they also hold an officer position.`
        },
        {
          id: "c-art4-s2", notes: ["N16", "R4"], links: {"N16": ["All officers shall be listed on MITOC’s Engage officer roster"], "-": ["Members-at-Large"]}, rest: "R4",
          old: `### Section 2: Officers
A. Only MIT students are eligible to serve as officers in the organization. These officers, also referred to as the Executive Board, are listed below:
    1. President
    2. Vice President
    3. Treasurer
    4. Bursar
    5. Five members at-large
B. The executive board of the organization must include at least one president and one treasurer (or corresponding positions) and each officer role must be held by a distinct MIT student, meaning one student cannot serve as both president and treasurer simultaneously.
C. The Advisory Board shall consist of any positions deemed necessary by the Executive Board.
D. Committee activities shall be managed by a chairperson as appointed by the Executive Board.`,
          new: `### Section 2: Officers
A. Only MIT students are eligible to serve as officers in the organization. These officers, also referred to as the Executive Board, are listed below:
    1. President
    2. Vice President
    3. Treasurer
    4. Bursar
    5. Five Members-at-Large
B. The executive board of the organization must include at least one president and one treasurer (or corresponding positions) and each officer role must be held by a distinct MIT student, meaning one student cannot serve as both president and treasurer simultaneously.
C. All officers shall be listed on MITOC’s Engage officer roster.`
        },
        {
          id: "c-art4-s3-head", notes: ["R7"],
          old: `### Section 3: Elections, Appointments, and Vacancies`,
          new: `### Section 3: Elections, Terms, Appointments, and Vacancies`
        },
        {
          id: "c-art4-s3-elections", notes: ["R6"], whole: true,
          old: `A. Elections
    1. All nominations and elections shall be executed in accordance with the Bylaws.
    2. The outgoing and incoming officers shall transition in an orderly fashion to avoid disruption to the organization. Newly elected officers assume their role at the conclusion of the election meeting.
    3. At the time of election, candidates for the positions of President, Vice President, Treasurer and Bursar must be currently enrolled MIT students. If an individual serving in one of these positions departs from MIT and no longer maintains regular student status, the position is to be considered vacant. Should the President or Treasurer position become vacant, elections will be held immediately to fill them.
    4. If an individual serving as a member at-large departs from MIT and no longer has regular student status, the position may continue to be held provided that a majority of the executive board still remains composed of MIT students with regular student status.`,
          new: `A. Elections
    1. Elections for the Executive Board shall be held each year at a general meeting in April. The date of the election meeting shall be announced to the general membership at least two weeks in advance.
    2. The quorum for an election to the Executive Board, including the annual election and any election to fill an Executive Board vacancy, is at least 10 MIT students who are members of the general membership.
    3. The President shall solicit nominations in advance of the election meeting. Any member may nominate any eligible candidate, including themselves, and nominees must accept their nomination.
    4. The President shall moderate the elections. For any position the President is a candidate for, the Executive Board shall designate another moderator for that election only. A moderator does not vote in the elections they moderate.
    5. Only MIT students may be candidates for Executive Board positions.
    6. All members of the general membership may vote. The moderator decides how votes are cast and counted, using anonymous voting where possible.
    7. For single-seat Executive Board positions, a candidate needs the votes of a majority of the members present; if no candidate has a majority, a runoff is held between the top two.
    8. For Member-at-Large, each member who is not a candidate for Member-at-Large may vote for up to five candidates, and the five candidates with the most votes are elected, with any tie for the last seat decided by a runoff.`
        },
        {
          id: "c-art4-s3-terms", notes: ["R7"], whole: true,
          old: null,
          new: `B. Terms of Office
    1. Executive Board members serve one-year terms, from the end of one April election meeting to the end of the next. Newly elected officers assume their roles at the conclusion of the election meeting.
    2. If an annual election is delayed, Executive Board members continue to serve until their successors are elected, so that every office is held on every day of the year.
    3. An Executive Board member elected to fill a vacancy serves the remainder of the vacant term.
    4. If an officer ceases to be an MIT student, including by taking a leave of absence, the position is vacant and shall be filled under Section 3.D.
    5. The outgoing and incoming officers shall transition in an orderly fashion to avoid disruption to the organization. Outgoing officers shall pass on relevant information, documents, and account access to their successors.`
        },
        {
          id: "c-art4-s3-appointments", notes: ["R4", "R14"], links: {"R14": ["Newly elected officers assume their roles at the conclusion of the annual elections"], "R4": ["Advisory Board members and", "Except for the Mediation Chairs"]}, rest: "R14",
          old: `B. Appointments
    1. Committee chairpersons shall be appointed by the Executive Board in accordance with the Bylaws.
    2. Newly elected officers assume their roles at the conclusion of the annual elections in the spring.`,
          new: `C. Appointments
    1. Advisory Board members and committee chairpersons shall be appointed by the Executive Board in accordance with the Bylaws.
    2. Except for the Mediation Chairs and the Safety Committees, the Executive Board may instead fill a position by election at the annual election meeting or at another general meeting, subject to the quorum for that meeting set out in Article V, Section D.`
        },
        {
          id: "c-art4-s3-vacancies", notes: ["R13"],
          old: `C. Vacancies
    1. A vacancy in the position of the President shall be filled by the Vice President.
    2. Vacancies in the position of Vice President, Treasurer, Bursar, member at-large, or a position on the Advisory Board shall be filled by an appointment by the Executive Board, in accordance with the Constitution and Bylaws, to be approved by the general membership at the next meeting.
    3. Vacancies in a committee chairpersonship shall be filled by appointment of the Executive Board.`,
          new: `D. Vacancies
    1. If the President or Treasurer position becomes vacant, the Vice President or the Bursar, respectively, shall serve as interim President or Treasurer, in addition to their own office, until the position is filled under item 2, so that these offices are never vacant.
    2. Any vacant Executive Board position shall be filled by election at the next general meeting.
    3. The President or Treasurer shall update the Engage officer roster promptly after any change in officers.`
        },
        {
          id: "c-art4-s4", notes: ["R8"],
          old: `### Section 4: Powers
All officers of MITOC shall act in accordance with the Bylaws.`,
          new: `### Section 4: Powers and Duties
A. The President shall preside over all meetings of the Executive Board, Advisory Board, and general membership; schedule the monthly general meetings and prepare their agendas; and represent MITOC to the ASA, SOLE, and the MIT administration.
B. The Vice President shall record the minutes of Executive Board and general membership meetings, manage MITOC’s email lists, respond to public inquiries, and preside over meetings in the President’s absence.
C. The Treasurer shall prepare the annual budget for approval by the Executive Board; review, approve, and process reimbursements and other outgoing transactions; prepare the annual financial report in consultation with the Bursar; and manage the financial signatory access of MITOC’s officers with SOLE.
D. The Bursar shall manage MITOC’s revenue, including the deposit of checks with SOLE; coordinate applications for funding; and assist the Treasurer with the annual budget and financial report.
E. The Members-at-Large shall lead larger club projects and assist the other members of the Executive Board as needed.
F. As core executive officers, the President and the Treasurer shall complete MIT’s required core officer training, complete MITOC’s annual re-registration with SOLE and the ASA, and keep MITOC’s Engage group page, including its officer, member, and participant rosters, accurate and up to date.
G. Executive Board members shall carry out any further duties set out in the Bylaws.`
        },
        {
          id: "c-art4-s5", notes: ["N3"],
          old: `### Section 5: Quorum
A. A quorum for general meetings shall consist of a majority of the Executive Board in attendance.
B. For in-person votes, once a quorum is established, a simple majority of the Executive Board present is required for a decision.
C. For asynchronous email votes, a simple majority of officers who actively participate (i.e., do not abstain) is required for a decision. Upon receiving a call to votes, a 24-hour waiting period will begin before officers will have 48 hours to vote.`,
          new: null
        },
        {
          id: "c-art5", notes: ["R11", "N3", "N4"], links: {"N4": ["regular student status"], "R11": ["This meeting, open to all members"]}, rest: "N3",
          old: `## Article V - Meetings
A. The general membership of MITOC shall meet, with the Executive and Advisory Boards, on a monthly basis.
B. Special meetings of the Executive Board or of the general membership may be called by the President or any three members of the Executive Board who have regular student status by giving written notice and justification to the general membership.
C. Meetings shall be presided over by the President unless they are absent, and in that case the Vice President shall preside.`,
          new: `## Article V - Meetings
A. The general membership of MITOC shall meet, with the Executive and Advisory Boards, on a monthly basis. This meeting, open to all members, is the general meeting.
B. Special meetings of the Executive Board or of the general membership may be called by the President or any three members of the Executive Board who are MIT students by giving written notice and justification to the general membership.
C. Meetings shall be presided over by the President unless they are absent, and in that case the Vice President shall preside.
D. Quorum and decisions
    1. A quorum for general meetings shall consist of a majority of the Executive Board in attendance.
    2. For in-person votes, once a quorum is established, a simple majority of the Executive Board present is required for a decision.
    3. For asynchronous email votes, a simple majority of Executive Board members who actively participate (i.e., do not abstain) is required for a decision. Upon receiving a call to vote, a 24-hour waiting period will begin before Executive Board members will have 48 hours to vote.
    4. Executive Board elections and amendment votes require the quorum set out in Article IV, Section 3.A.2. All other elections require only the quorum in item 1.`
        },
        {
          id: "c-art6-a", notes: ["R12"],
          old: `## Article VI - Founding Documents
A. The Constitution and Bylaws shall be treated as the sole charter and guiding documents from which MITOC derives its authority. The Constitution and Bylaws will supersede any other decisions or policies within the Club.`,
          new: `## Article VI - Founding Documents and Amendments
A. The Constitution and Bylaws shall be treated as the sole charter and guiding documents from which MITOC derives its authority. The Constitution and Bylaws will supersede any other decisions or policies within the Club.`
        },
        {
          id: "c-art6-b", notes: ["R9", "N4"], links: {"N4": ["regular student status"]}, rest: "R9",
          old: `B. The Constitution and Bylaws may be amended by a two-thirds majority vote of the Executive Board or by two-thirds of the votes cast by the general membership, in attendance at the time of voting, provided a simple majority of members casting votes are MIT students with regular student status. In the case that the Executive Board and the general membership disagree, the general membership shall take precedence.`,
          new: `B. The Constitution and Bylaws may be amended by a two-thirds majority vote of the Executive Board or by two-thirds of the votes cast by the general membership, in attendance at the time of voting, provided a simple majority of members casting votes are MIT students. In the case that the Executive Board and the general membership disagree, the general membership shall take precedence. Amendments may be voted on only in person, at a general meeting or at a special meeting called under Article V, Section B, and only when the quorum set out in Article V, Section D is present.`
        },
        {
          id: "c-art6-cd", notes: ["N4"],
          old: `C. If the Constitution and Bylaws are to be amended, the proposed amendments and the date of their consideration must be delivered in writing to the general membership at least two weeks in advance of the meeting at which they are to be ratified or rejected. In no event shall any proposed amendment conflict with ASA guidelines, policies, or other MIT policies.
D. Proposed amendments to the Constitution and Bylaws must be submitted by an MIT student with regular student status.`,
          new: `C. If the Constitution and Bylaws are to be amended, the proposed amendments and the date of their consideration must be delivered in writing to the general membership at least two weeks in advance of the meeting at which they are to be ratified or rejected. In no event shall any proposed amendment conflict with ASA guidelines, policies, or other MIT policies.
D. Proposed amendments to the Constitution and Bylaws must be submitted by an MIT student.`
        },
        {
          id: "c-art6-ef", notes: ["N6"],
          old: `E. Ratified amendments to the Constitution and Bylaws must be delivered, in writing, to the general membership of MITOC.
F. Amendments to the Constitution and Bylaws shall take effect immediately following the adjournment of the meeting at which they were ratified, unless otherwise specified.`,
          new: `E. Ratified amendments to the Constitution and Bylaws must be delivered, in writing, to the general membership of MITOC and submitted to SOLE and the ASA. The President shall post the current Constitution on MITOC’s Engage group page.
F. Amendments to the Bylaws shall take effect immediately following the adjournment of the meeting at which they were ratified, unless otherwise specified. Amendments to this Constitution shall take effect once approved by the ASA and SOLE, as the MIT Student Organization Handbook requires.`
        },
        {
          id: "c-art7", notes: ["N2"],
          old: `## Article VII - ASA Governance Clause
The MIT Outing Club agrees to abide by the policies and guidelines of the Association of Student Activities, its Executive Board, as well as the MIT Mind and Hand Book and the MIT Student Organization Handbook, all as may be subject to change from time to time. This Constitution, amendments to it, and the Bylaws of this organization shall be subject to review by the ASA Executive Board, to ensure that they are in accordance with the aforementioned policies and guidelines.`,
          new: `## Article VII - ASA Governance Clause
The MIT Outing Club agrees to abide by the policies and guidelines of the Association of Student Activities (ASA), its Executive Board, as well as the MIT Mind and Hand Book and the MIT Student Organization Handbook, all as may be subject to change from time to time. This Constitution, amendments to it, and the Bylaws of this organization shall be subject to review by the ASA Executive Board, to ensure that they are in accordance with the aforementioned policies and guidelines.`
        }
      ]
    },

    bylaws: {
      name: "Bylaws",
      file: "MITOC_Bylaws_proposed",
      blocks: [
        {
          id: "b-title", notes: ["N15"],
          old: `# MIT Outing Club Bylaws
Ratified 9/15/2025`,
          new: `# MIT Outing Club Bylaws
Proposed draft, October 2026`
        },
        {
          id: "b-1a", notes: ["R16", "R5", "R6", "R3"], links: {"R3": ["MIT Community Members"], "R16": ["annual advisory", "Approve the annual", "spending in accordance with Article V"], "R6": ["IV, Section 3 of the Constitution"], "R5": ["in accordance with Article V of the Constitution"], "-": ["disciplinary"]},
          old: `## Article I - Organization Structure
### Section 1: Executive Board
A. The Executive Board shall have the following powers and duties:
    1. Establish goals for MITOC,
    2. Prepare and approve an annual advisory budget,
    3. Approve all spending amounting to greater than $100,
    4. Supervise all MITOC elections in accordance with Article VI,
    5. Act for the general membership between its meetings on duties not specifically reserved for the general membership or the Advisory Board,
    6. Serve as a constitutional board of review, which, when serving in this capacity, may include other members appointed by the President,
    7. Set dates and places for regular meetings of the Executive Board, Advisory Board, and general membership,
    8. Take action necessary to execute these powers and all other powers conferred by the constitution and bylaws or any amendment,
    9. Develop and implement Executive Board policies governing the ongoing procedure of MITOC and its Executive Board,
    10. Call special meetings of the Executive Board or of the general membership,
    11. Appoint members to the Advisory Board,
    12. Sponsor community members,
    13. Serve as a special disciplinary committee, as necessary.`,
          new: `## Article I - Organization Structure
### Section 1: Executive Board
A. The Executive Board shall have the following powers and duties:
    1. Establish goals for MITOC,
    2. Approve the annual budget,
    3. Approve spending in accordance with Article V,
    4. Supervise all MITOC elections in accordance with Article IV, Section 3 of the Constitution and Article VI,
    5. Act for the general membership between its meetings on duties not specifically reserved for the general membership or the Advisory Board,
    6. Serve as a constitutional board of review, which, when serving in this capacity, may include other members appointed by the President,
    7. Set dates and places for regular meetings of the Executive Board, Advisory Board, and general membership,
    8. Take action necessary to execute these powers and all other powers conferred by the constitution and bylaws or any amendment,
    9. Develop and implement Executive Board policies governing the ongoing procedure of MITOC and its Executive Board,
    10. Call special meetings of the Executive Board or of the general membership in accordance with Article V of the Constitution,
    11. Appoint members to the Advisory Board,
    12. Sponsor MIT Community Members,
    13. Act on disciplinary matters in accordance with Article VII.`
        },
        {
          id: "b-1b", notes: ["R17", "R15", "R8"], links: {"R15": ["=for", "=of"], "R17": ["Schedule and organize"], "R8": ["core officer training"]}, rest: "R17",
          old: `B. The President must be an MIT student and shall have the following powers and duties:
    1. Preside over all meetings of the Executive Board, Advisory Board, and the general membership,
    2. Serve as chief spokesperson for MITOC to the MIT administration, the MIT Student Organizations, Leadership and Engagement Office, the MIT Association for Student Activities, and to other organizations and in all matters of concern to MITOC,
    3. Draft and manage agendas for Executive and Advisory Board meetings, as well as meetings of the general membership, to be reviewed at said meeting,
    4. Call special meetings of the Executive Board or of the general membership.`,
          new: `B. The President must be an MIT student and shall have the following powers and duties:
    1. Preside over all meetings of the Executive Board, Advisory Board, and the general membership,
    2. Serve as chief spokesperson for MITOC to the MIT administration, the MIT Student Organizations, Leadership and Engagement Office, the MIT Association of Student Activities, and to other organizations and in all matters of concern to MITOC,
    3. Schedule and organize the monthly general meetings,
    4. Draft and manage agendas for Executive and Advisory Board meetings, as well as meetings of the general membership, to be reviewed at said meeting,
    5. Call special meetings of the Executive Board or of the general membership,
    6. Complete MIT’s required core officer training and, with the Treasurer, complete MITOC’s annual re-registration and keep MITOC’s Engage group page accurate.`
        },
        {
          id: "b-1c", notes: ["R17"],
          old: `C. The Vice President must be an MIT student and shall have the following powers and duties:
    1. Attend all meetings of the MITOC general membership and Executive Board,
    2. Assume the powers and duties of the President in the event of the President’s absence,
    3. Record minutes at every meeting of the Executive Board or general membership,
    4. Manage the MITOC maintained email lists,
    5. Serve MITOC in all other ways deemed necessary by the President.`,
          new: `C. The Vice President must be an MIT student and shall have the following powers and duties:
    1. Attend all meetings of the MITOC general membership and Executive Board,
    2. Assume the powers and duties of the President in the event of the President’s absence,
    3. Record minutes at every meeting of the Executive Board or general membership,
    4. Manage the MITOC maintained email lists,
    5. Respond to public inquiries to MITOC,
    6. Serve MITOC in all other ways deemed necessary by the President.`
        },
        {
          id: "b-1d", notes: ["R17", "R16", "R8"], links: {"R17": ["reimbursements, requisitions"], "R16": ["reimbursements, requisitions"], "R8": ["Financial Access Form", "core officer training"]}, rest: "R8",
          old: `D. The Treasurer must be an MIT student and shall have the following powers and duties:
    1. Prepare a tentative budget for the approval of the Executive Board,
    2. In consultation with the Bursar, manage and maintain the financial operation of MITOC, such as preparing and presenting a yearly financial report and budget,
    3. Review, approve, process, and record outgoing financial transactions, including the reimbursement of MITOC funds for official purposes.
    4. Chair the budget committee, should one exist,
    5. Serve MITOC in all other ways deemed necessary by the President.`,
          new: `D. The Treasurer must be an MIT student and shall have the following powers and duties:
    1. Prepare a tentative budget for the approval of the Executive Board,
    2. In consultation with the Bursar, manage and maintain the financial operation of MITOC, such as preparing and presenting a yearly financial report and budget,
    3. Review, approve, process, and record outgoing financial transactions, including reimbursements, requisitions, and discretionary spending under Article V,
    4. Chair the budget committee, should one exist,
    5. Submit SOLE’s Financial Access Form for MITOC’s financial signatories each year on or after July 1,
    6. Complete MIT’s required core officer training and, with the President, complete MITOC’s annual re-registration and keep MITOC’s Engage group page accurate,
    7. Serve MITOC in all other ways deemed necessary by the President.`
        },
        {
          id: "b-1e", notes: ["R20", "R17", "N9"], links: {"R20": ["=and"], "R17": ["MITOC’s revenue"], "N9": ["promptly upon receipt"]},
          old: `E. The Bursar must be an MIT student and and shall have the following powers and duties:
    1. In consultation with the Treasurer, manage and maintain the financial operation of MITOC, such as preparing and presenting a yearly financial report and budget,
    2. Manage the deposition of checks to the Student Organizations, Leadership and Engagement Office,
    3. Coordinate the application for funding opportunities,
    4. Serve MITOC in all other ways deemed necessary by the President.`,
          new: `E. The Bursar must be an MIT student and shall have the following powers and duties:
    1. In consultation with the Treasurer, manage and maintain the financial operation of MITOC, such as preparing and presenting a yearly financial report and budget,
    2. Manage MITOC’s revenue, including the deposit of checks with the Student Organizations, Leadership and Engagement Office promptly upon receipt,
    3. Coordinate the application for funding opportunities,
    4. Serve MITOC in all other ways deemed necessary by the President.`
        },
        {
          id: "b-1f", notes: ["R1", "R17"], links: {"R1": ["must be MIT students and"]}, rest: "R17",
          old: `F. The Members at-Large shall have the following powers and duties:
    1. Attend all meetings of the MITOC general membership and Executive Board,
    2. Assist the other members of the Executive Board in their respective tasks,
    3. Serve MITOC in all other ways deemed necessary by the President.`,
          new: `F. The Members-at-Large must be MIT students and shall have the following powers and duties:
    1. Attend all meetings of the MITOC general membership and Executive Board,
    2. Lead larger club projects,
    3. Assist the other members of the Executive Board in their respective tasks,
    4. Serve MITOC in all other ways deemed necessary by the President.`
        },
        {
          id: "b-1g", notes: ["R4"],
          old: `G. The Advisory Board shall have the following powers and duties:
    1. Advise the Executive Board on best and previous practices and policies,
    2. Assist the Executive Board in managing MITOC activities,
    3. Serve MITOC in all other ways deemed necessary by the Executive Board.`,
          new: `### Section 2: Advisory Board
A. The Advisory Board shall have the following powers and duties:
    1. Advise the Executive Board on best and previous practices and policies,
    2. Assist the Executive Board in managing MITOC activities,
    3. Serve MITOC in all other ways deemed necessary by the Executive Board.`
        },
        {
          id: "b-2", notes: ["R3", "N12", "N8", "N10", "N18"], links: {"N18": ["Participating Member"], "N12": ["Participation in MITOC shall consist of the following", "MIT Student Members: MIT students", "MITOC Guests: non-members", "Participating Members: MIT Student Members", "MIT Community Members: individuals who are not MIT students", "matches their involvement", "are Members if they regularly participate", "are Participants if they regularly participate"], "N8": ["waive dues"], "N10": ["Liability Waiver"]}, rest: "R3",
          old: `## Article II - Membership
The involvement of individuals in MITOC shall be governed based on the categories of Student Members, Community Members , Active Members, and MITOC Guests. These categories shall be defined in the following sections, and individuals in each category shall pay dues to MITOC.`,
          new: `## Article II - Membership
Participation in MITOC shall consist of the following:
- __MIT Student Members__: MIT students, as defined in Article III of the Constitution, who join MITOC.
- __MIT Community Members__: individuals who are not MIT students, who are current MIT faculty, staff, fellows, employees, or affiliates, hold MIT visitor appointments, or have a current Kerberos account, and who join MITOC.
- __MITOC Guests__: non-members who take part in MITOC trips, gear rentals, or events.
- __Participating Members__: MIT Student Members, MIT Community Members, and MITOC Guests who meet the participation requirements in Section 3.

MIT Student Members, MIT Community Members, and Participating Members make up the general membership. These categories shall be defined in the following sections, and individuals in each category shall pay dues to MITOC. MITOC shall waive dues for any MIT Student Member who cannot afford them.

For MIT’s student organization records, including MITOC’s Engage rosters, each person is reported under the category defined in the MIT Student Organization Handbook that matches their involvement:
- MIT Student Members, and Participating Members who are MIT students, are Members if they regularly participate in MITOC’s meetings or organizational operations, and Attendees otherwise.
- MIT Community Members, MITOC Guests, and other Participating Members are Participants if they regularly participate in MITOC’s meetings or organizational operations, Student Organization Advisors if they provide guidance, support, and perspective to MITOC, and Attendees otherwise. A MITOC Guest who is an MIT student is reported as an MIT Student Member would be.

All members must complete and sign the MIT General Liability Waiver for Student Organizations before participating in MITOC activities.`
        },
        {
          id: "b-2s1", notes: ["R3", "R1", "N4", "N18"], links: {"N18": ["Participating Member"], "N4": ["currently enrolled MIT students", "as defined in Article III"], "R3": ["in good standing with MIT", "Vote in elections", "Participating Members"], "R1": ["at Large"]}, rest: "R3",
          old: `### Section 1: Student Members
A. Student members must meet the following requirements:
    1. Student members must be currently enrolled MIT students,
    2. Student members must be in good standing with MIT.
B. Student members shall be privileged to do the following in MITOC:
    1. Serve in the positions of President, Vice President, Treasurer, Bursar or Member at Large,
    2. Act in any of the ways privileged to Community members, Active members, or MITOC Guests.`,
          new: `### Section 1: MIT Student Members
A. MIT Student Members must meet the following requirement:
    1. MIT Student Members must be MIT students, as defined in Article III of the Constitution.
B. MIT Student Members shall be privileged to do the following in MITOC:
    1. Serve in the positions of President, Vice President, Treasurer, Bursar or Member-at-Large,
    2. Vote in elections and on amendments at general meetings,
    3. Act in any of the ways privileged to MIT Community Members, Participating Members, or MITOC Guests.`
        },
        {
          id: "b-2s2", notes: ["R3", "R1", "N12", "N18"], links: {"N18": ["Participating Member"], "R1": ["may not serve on the Executive Board"], "N12": ["must meet the definition"]}, rest: "R3",
          old: `### Section 2: Community Members
A. Community members must meet the following requirements:
    1. Community members must be current MIT faculty, staff, fellows, employees, affiliates, have visitor appointments, or have a current Kerberos.
B. Community members shall be privileged to do the following in MITOC:
    1. Act in any of the ways privileged to Active members or MITOC guests.
C. Limitations:
    1. Community members shall not be permitted to participate in MITOC to the detriment of student members, as deemed by the Executive Board.`,
          new: `### Section 2: MIT Community Members
A. MIT Community Members must meet the following requirement:
    1. MIT Community Members must meet the definition in the opening of this Article.
B. MIT Community Members shall be privileged to do the following in MITOC:
    1. Vote in elections and on amendments at general meetings, subject to the quorum requirements of the Constitution,
    2. Act in any of the ways privileged to Participating Members or MITOC Guests.
C. Limitations:
    1. MIT Community Members shall not be permitted to participate in MITOC to the detriment of MIT Student Members, as deemed by the Executive Board.
    2. MIT Community Members may not serve on the Executive Board.`
        },
        {
          id: "b-2s3", notes: ["R3", "R1", "R18", "N17", "N18"], links: {"N18": ["Participating Member"], "R18": ["with the approval of the Executive Board and the Safety Committee"], "R1": ["Serve as Executive Board members at-large"], "N17": ["Receive MITOC discounts"]}, rest: "R3",
          old: `### Section 3: Active Members
A. Active members must meet the following requirements:
    1. Active members must be in good standing with MIT and the MITOC Executive Board.
    2. Active members must have participated (as a leader or participant) in greater than or equal to 2 trips within the past year.
B. Active members shall be privileged to do the following in MITOC:
    1. Serve as MITOC trip leaders, with the approval of the Executive Board and the Safety Committee,
    2. Vote in Executive Board elections, with the endorsement of the Executive Board,
    3. Serve as Executive Board members at-large,
    4. Serve on the Advisory Board,
    6. Serve on MITOC committees,
    7. Receive MITOC discounts,
    8. Act in any of the ways privileged to MITOC Guests.
C. Limitations:
    1. Active members shall not be permitted to participate in MITOC to the detriment of Student members, as deemed by the Executive Board.`,
          new: `### Section 3: Participating Members
A. An MIT Student Member, MIT Community Member, or MITOC Guest becomes a Participating Member when they meet the following requirements:
    1. They must be in good standing with MIT and the MITOC Executive Board.
    2. They must have participated (as a leader or participant) in greater than or equal to 2 trips within the past year.
B. Participating Members shall be privileged to do the following in MITOC:
    1. Serve as MITOC trip leaders, once approved under Article III,
    2. Vote in Executive Board elections, with the endorsement of the Executive Board,
    3. Serve on the Advisory Board,
    4. Serve on MITOC committees,
    5. Act in any of the ways privileged to MITOC Guests.
C. Limitations:
    1. Participating Members who are not MIT Student Members shall not be permitted to participate in MITOC to the detriment of MIT Student Members, as deemed by the Executive Board.`
        },
        {
          id: "b-2s4", notes: ["R3", "N18"], links: {"N18": ["Participating Member"]}, rest: "R3",
          old: `### Section 4: MITOC Guests
A. MITOC Guests must meet the following requirements:
    1. MITOC Guests must be in good standing with MIT and the MITOC Executive Board.
B. MITOC Guests shall be privileged to do the following in MITOC:
    1. Participate in MITOC trips,
    2. Rent MITOC gear,
    3. Attend MITOC events.
C. Limitations:
    1. MITOC Guests shall not be permitted to participate in MITOC to the detriment of student members, as deemed by the Executive Board.`,
          new: `### Section 4: MITOC Guests
A. MITOC Guests must meet the following requirements:
    1. MITOC Guests must be in good standing with MIT and the MITOC Executive Board.
B. MITOC Guests shall be privileged to do the following in MITOC:
    1. Participate in MITOC trips,
    2. Rent MITOC gear,
    3. Attend MITOC events.
C. Limitations:
    1. MITOC Guests shall not be permitted to participate in MITOC to the detriment of MIT Student Members, as deemed by the Executive Board.
    2. MITOC Guests who are not Participating Members may not vote in elections or on amendments.`
        },
        {
          id: "b-3s1", notes: ["R18"], links: {"R18": ["Winter Safety Committee carries out", "delegate to activity chairs"]},
          old: `## Article III - Committees
### Section 1: Safety Committees
A. There shall be two Safety Committees: the Winter Safety Committee and the 3-Season Safety Committee.
B. The Safety Committees are standing committees and shall have the following powers and duties:
    1. Define when winter conditions are present for MITOC trips,
    2. Approve and rate trip leaders, with the cooperation of the Executive Board,
    3. Review and approve of trip itineraries,
    4. Investigate and report on incidents that take place during MITOC activities,
    5. Issue safety standards for MITOC activities.`,
          new: `## Article III - Committees
### Section 1: Safety Committees
A. There shall be two Safety Committees: the Winter Safety Committee and the 3-Season Safety Committee. The Winter Safety Committee carries out the duties below for winter trips, and the 3-Season Safety Committee for trips at other times of year.
B. The Safety Committees are standing committees and shall have the following powers and duties:
    1. Define when winter conditions are present for MITOC trips,
    2. Approve and rate trip leaders, which they may delegate to activity chairs where applicable,
    3. Review and approve of trip itineraries,
    4. Investigate and report on incidents that take place during MITOC activities,
    5. Issue safety standards for MITOC activities.`
        },
        {
          id: "b-3s2", notes: [],
          old: `### Section 2: Committee Formation
A. Special committees may be formed by the Executive Board with a given mandate.
### Section 3: Committee Requirements
1. Committees must be managed by a designated chairperson appointed by the Executive Board
2. The chairperson shall sit on the Advisory Board.`,
          new: `### Section 2: Committee Formation
A. Special committees may be formed by the Executive Board with a given mandate.
### Section 3: Committee Requirements
1. Committees must be managed by a designated chairperson appointed by the Executive Board.
2. The chairperson shall sit on the Advisory Board.`
        },
        {
          id: "b-4", notes: ["R11"],
          old: `## Article IV - Meetings
A. The Executive Board and Advisory Board shall hold a monthly meeting, open to the general membership
B. All meetings shall be governed in accordance with the Constitution and Bylaws.`,
          new: `## Article IV - Meetings
A. The Executive Board and Advisory Board shall hold the monthly general meeting described in Article V of the Constitution, open to the general membership.
B. All meetings shall be governed in accordance with the Constitution and Bylaws.`
        },
        {
          id: "b-5", notes: ["R16"],
          old: `## Article V - Financial Policies
A. An annual, non-binding budget shall be prepared and approved by the Executive Board for planning purposes.
B. All members of the Executive and Advisory Boards shall be permitted a total of $100 of discretionary spending every month.
C. All purchases over $100 or not pre-approved in the budget must be approved by the Executive Board.`,
          new: `## Article V - Financial Policies
A. The Treasurer shall prepare an annual budget for approval by the Executive Board, normally at a budget meeting in June. Items may be added to the budget at other times by a vote of the Executive Board.
B. Each Executive Board and Advisory Board position may oversee up to $100 of discretionary spending per month. If a position is shared between multiple people, they share a single spending cap; the only exception is the Members-at-Large, each of whom has a separate cap. Discretionary spending may only be used for incidentals. The Treasurer approves discretionary spending. Discretionary spending above this amount may be requested as a budget item.
C. All other spending must be approved by a vote of the Executive Board and recorded in the budget. The Treasurer shall not reimburse spending that has not been approved or that exceeds the budget.`
        },
        {
          id: "b-6", notes: ["R6", "R4"], links: {"R4": ["All other positions"]}, rest: "R6",
          old: `## Article VI - Elections
A. All elected positions must be up for reelection by the general membership in a well-publicized meeting during the spring semester.
B. The Executive Board may use an advisory vote of the general membership to assist in the selection of appointed positions such as those on the Advisory Board or committee chairpersonships.`,
          new: `## Article VI - Elections
A. All Executive Board positions must be up for reelection by the general membership at the annual election meeting in April, held in accordance with Article IV, Section 3 of the Constitution.
B. All other positions, including those on the Advisory Board and committee chairpersonships, shall be appointed or elected at least once per year, at a time deemed appropriate by the President and the Executive Board, either at the annual election meeting or later in the year.
C. The Executive Board may use an advisory vote of the general membership to assist in the selection of appointed positions such as those on the Advisory Board or committee chairpersonships.`
        },
        {
          id: "b-7", notes: ["R2"],
          old: `## Article VII - Discipline
A. Any member or affiliate found by the Executive Board to be in violation of MITOC policies or MIT Policies and Procedures including but not limited to those laid out in the Constitution or these Bylaws, any rules of order or safety standards set by the safety committee, or the purpose or community standards of MITOC may be warned, censured, or removed from office or membership.
B. The Executive Board shall be responsible for maintaining standing rules to govern all MITOC disciplinary actions.`,
          new: `## Article VII - Discipline
A. Any member or affiliate found by the Executive Board to be in violation of MITOC policies or MIT Policies and Procedures including but not limited to those laid out in the Constitution or these Bylaws, any rules of order or safety standards set by the safety committee, or the purpose or community standards of MITOC may be warned, censured, or removed from office or membership. Removal from office or membership requires a two-thirds vote of the Executive Board under Article III of the Constitution and is limited to non-conduct reasons, including violations of the zero-tolerance policy in Section C. Complaints about personal conduct shall be referred to the appropriate MIT offices as Article III of the Constitution requires.
B. The Executive Board shall be responsible for maintaining standing rules to govern all MITOC disciplinary actions.
C. For the safety of its participants, MITOC maintains a zero-tolerance policy for stalking, violent threats of any kind, physical violence (including sexual assault), domestic/dating violence, and sexual harassment. Any person who engages in these behaviors shall be removed from the club by a two-thirds vote of the Executive Board. If an MIT student is involved, the matter shall also be referred to the MIT offices named in Article III of the Constitution. This policy applies to members and MITOC Guests alike.`
        },
        {
          id: "b-8", notes: [],
          old: `## Article VIII - Governing Documents
A. These Bylaws are to be considered subsidiary to the Constitution, and when in conflict shall be superseded by the Constitution.
B. Any policy laid out in another official MITOC document including but not limited to the MITOC website or documents prepared by the Executive Board or committees shall be considered official MITOC rules of order.
C. When in conflict, these Bylaws shall supersede any rules of order.
D. These Bylaws shall be amended in accordance with Article VI of the Constitution.`,
          new: `## Article VIII - Governing Documents
A. These Bylaws are to be considered subsidiary to the Constitution, and when in conflict shall be superseded by the Constitution.
B. Any policy laid out in another official MITOC document including but not limited to the MITOC website or documents prepared by the Executive Board or committees shall be considered official MITOC rules of order.
C. When in conflict, these Bylaws shall supersede any rules of order.
D. These Bylaws shall be amended in accordance with Article VI of the Constitution.`
        }
      ]
    }
  }
};
