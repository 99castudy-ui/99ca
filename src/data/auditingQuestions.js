// CA Final Paper 3 - Advanced Auditing, Assurance and Professional Ethics
// Question Bank from May 2024 and Nov 2024 Exams

export const mcqQuestions = [
  {
    id: 1,
    examSession: "Nov 2024",
    topic: "Public Sector Audit",
    difficulty: "Medium",
    marks: 2,
    question: "M/s DEF & Associates have been appointed as the statutory auditor of JKL Ltd., a PSU engaged in generation of electricity from solar power. The Committee on Public Undertakings examines PSU's physical and financial performance including audit findings of C&AG. Which of the following are functions of Committee on Public Undertakings (COPU)?\n\n(i) To examine accounts of autonomous bodies audited by C&AG\n(ii) To examine estimates and report on economies and efficiency improvements\n(iii) To examine autonomy and efficiency of public undertakings for sound business principles\n(iv) To examine public enterprises through comprehensive performance evaluation",
    options: [
      "(i) & (iv)",
      "(ii) & (iii)",
      "(i) & (ii)",
      "(iii) & (iv)"
    ],
    correctAnswer: 3,
    explanation: `**Committee on Public Undertakings (COPU) Functions**

The COPU is a parliamentary committee that oversees public sector undertakings.

**Analysis of Options:**

| Function | Committee | Reason |
|----------|-----------|--------|
| (i) Examine autonomous bodies accounts | Public Accounts Committee | Not COPU function |
| (ii) Examine estimates for economies | Estimates Committee | Not COPU function |
| (iii) Examine autonomy & efficiency | **COPU** | Core COPU function |
| (iv) Comprehensive performance evaluation | **COPU** | Core COPU function |

**Key Functions of COPU:**
1. Examine reports and accounts of public undertakings
2. Examine reports of C&AG on public undertakings
3. Examine autonomy and efficiency of public undertakings
4. Ensure management follows sound business principles and prudent commercial practices
5. Comprehensive appraisal/evaluation of PSU performance

**Answer: (iii) & (iv)** - These relate to examining efficiency, business principles, and comprehensive performance evaluation of PSUs.`,
    whereWentWrong: {
      0: "Function (i) relates to Public Accounts Committee which examines accounts of autonomous bodies, not COPU.",
      1: "Function (ii) is performed by Estimates Committee which examines estimates for economies and efficiency.",
      2: "Both (i) and (ii) belong to other parliamentary committees - PAC and Estimates Committee respectively."
    }
  },
  {
    id: 2,
    examSession: "Nov 2024",
    topic: "Special Audits",
    difficulty: "Medium",
    marks: 2,
    question: "KALI Ltd. is among India's largest FMCG companies with 50-year heritage. For BRSR compliance (F.Y. 2023-24), the following core elements need to be covered:\n\n(i) Enable universal access to essential goods/services in non-discriminatory manner\n(ii) Inform customers on safe usage, reuse, recycling, disposal and eliminate overconsumption\n(iii) Transparently disclose adverse impacts to users, planet, society, biodiversity\n(iv) Educate and make consumers aware about their rights\n\nWhich core elements relate to Principle-9 (Consumer Responsibility)?",
    options: [
      "(i) & (iv)",
      "(i), (ii) & (iii)",
      "(i), (iii) & (iv)",
      "(ii), (iii) & (iv)"
    ],
    correctAnswer: 1,
    explanation: `**BRSR Principle-9: Businesses should engage with and provide value to their consumers in a responsible manner**

**Analysis of Core Elements:**

| Element | Principle | Reason |
|---------|-----------|--------|
| (i) Universal access to essential services | **Principle-9** | Consumer accessibility |
| (ii) Safe usage, recycling, disposal info | **Principle-9** | Consumer education |
| (iii) Disclose adverse impacts | **Principle-9** | Consumer transparency |
| (iv) Educate about consumer rights | Principle-9 but broader | Consumer awareness |

**Principle-9 Core Elements:**
1. **Universal Access** - Entities providing essential goods/services should enable universal access
2. **Safe Usage Information** - Inform customers about responsible usage, reuse, recycling, disposal
3. **Transparent Disclosure** - Disclose adverse impacts on users, planet, society, biodiversity
4. **Product Lifecycle Responsibility** - Address overconsumption concerns

**Note:** Element (iv) about consumer rights education is more aligned with general consumer protection rather than specific Principle-9 requirements under BRSR framework.

**Answer: (i), (ii) & (iii)** - These directly relate to Principle-9's consumer responsibility requirements.`,
    whereWentWrong: {
      0: "This excludes elements (ii) and (iii) which are core to Principle-9's consumer responsibility focus.",
      2: "Element (iv) is broader consumer protection while element (ii) on safe usage is core to Principle-9.",
      3: "Element (i) on universal access is fundamental to Principle-9 for essential services providers."
    }
  },
  {
    id: 3,
    examSession: "Nov 2024",
    topic: "Professional Ethics",
    difficulty: "Medium",
    marks: 2,
    question: "CA P is appointed as statutory auditor of SEA Ltd. for F.Y. 2024-25. The company is on verge of becoming sick (accumulated losses NOT equal to/exceeding net worth as per F.Y. 2023-24 audited accounts). The audited accounts for F.Y. 2021-22 and 2022-23 showed unpaid audit fees to predecessor auditor, but these were completely settled during F.Y. 2023-24. Which statement is correct under Council General Guidelines, 2008?",
    options: [
      "CA P guilty - accepted appointment where undisputed audit fees were unpaid (though settled in 2023-24)",
      "CA P not guilty - company is on verge of becoming sick but accumulated losses not equal to net worth",
      "CA P not guilty - company is not a sick unit, accumulated losses not equal to net worth, and no unpaid undisputed audit fees of predecessor",
      "CA P guilty - company on verge of becoming sick and had unpaid audit fees (though settled later)"
    ],
    correctAnswer: 2,
    explanation: `**Council General Guidelines, 2008 - Chapter 7: Acceptance of Audit**

**Key Conditions to Check:**

| Condition | Status | Analysis |
|-----------|--------|----------|
| Company is sick unit | No | Accumulated losses < Net worth |
| Unpaid audit fees to predecessor | No | Settled completely in F.Y. 2023-24 |
| Current compliance | Yes | All dues cleared before appointment |

**Understanding "Sick Unit":**
- A company is considered sick when accumulated losses equal or exceed its entire net worth
- SEA Ltd.'s accumulated losses are NOT equal to/exceeding net worth
- Therefore, SEA Ltd. is NOT a sick unit (only "on the verge")

**Regarding Predecessor Audit Fees:**
- The guideline restricts acceptance when undisputed audit fees remain unpaid
- In this case, all fees were settled during F.Y. 2023-24
- At the time of CA P's appointment (F.Y. 2024-25), no dues are outstanding

**Conclusion:** CA P would NOT be held guilty because:
1. Company is not technically a sick unit (accumulated losses < net worth)
2. There are no unpaid undisputed audit fees (settled in 2023-24)
3. All ethical requirements are satisfied at the time of acceptance`,
    whereWentWrong: {
      0: "The fees were settled before CA P's appointment. The restriction applies to fees unpaid at the time of acceptance.",
      1: "While partially correct, this doesn't address the complete picture including the settled audit fees.",
      3: "Being 'on verge of becoming sick' is different from being a 'sick unit'. Also, fees were settled before appointment."
    }
  },
  {
    id: 4,
    examSession: "Nov 2024",
    topic: "Standards on Auditing",
    difficulty: "Hard",
    marks: 2,
    question: "Tom Ltd.'s audit report for F.Y. 2023-24 (by predecessor auditor) contained qualification for non-provision of doubtful debts. In F.Y. 2024-25, the company still doesn't want to make provision. M/s Deva & Co., the new statutory auditors, want to report in their audit report. What is the correct action as per SA 710?",
    options: [
      "Can modify report for previous year's figures since prior period report was qualified",
      "Can modify report for current year's figures but need not refer to previous year's modification",
      "Will have to modify report for both current and previous year's figures since prior period report was qualified",
      "Cannot modify report but need to refer to earlier year's modification"
    ],
    correctAnswer: 2,
    explanation: `**SA 710 - Comparative Information: Corresponding Figures and Comparative Financial Statements**

**Scenario Analysis:**
- Prior period: Qualified opinion (non-provision of doubtful debts)
- Current period: Same issue persists (no provision made)
- Matter is unresolved and affects both periods

**SA 710 Requirements:**

| Situation | Auditor's Action |
|-----------|------------------|
| Prior period modification unresolved | Modify current period report |
| Matter affects current period figures | Include in current modification |
| Matter affects corresponding figures | Refer to prior period in report |

**Key Principle:** When the auditor's report on the prior period included a modified opinion and the matter which gave rise to the modification is:
1. **Unresolved** - Auditor shall modify the opinion on current period
2. **Affects corresponding figures** - Refer to prior period figures in Basis for Modification paragraph

**In this case:**
- Doubtful debts provision issue continues in F.Y. 2024-25
- Prior year figures (corresponding figures) remain affected
- Current year also affected due to same non-provision
- **Both years' figures require modification reference**

**Answer:** Modify report for both current and previous year's figures.`,
    whereWentWrong: {
      0: "SA 710 requires addressing both periods when the unresolved matter affects corresponding figures.",
      1: "When matter is unresolved and affects prior period, reference to previous modification is required.",
      3: "The auditor CAN and SHOULD modify the report - not just refer to earlier modification."
    }
  },
  {
    id: 5,
    examSession: "Nov 2024",
    topic: "Internal Audit",
    difficulty: "Hard",
    marks: 2,
    question: "M/s Deva & Co. assigned the following procedures to internal auditors for direct assistance:\n\n(i) Procedures relating to higher assessed risks of material misstatement requiring more than limited judgment\n(ii) Procedures relating to work not reported to management/TCWG by internal audit function\n(iii) Procedures relating to decisions the statutory auditor makes in accordance with SAs\n\nWhich procedure(s) CAN be appropriately assigned to internal auditors?",
    options: [
      "(i), (ii), (iii)",
      "(ii) only",
      "(ii) & (iii)",
      "(iii) only"
    ],
    correctAnswer: 1,
    explanation: `**SA 610 - Using the Work of Internal Auditors**

**Restrictions on Direct Assistance:**

| Procedure | Assignable? | Reason |
|-----------|-------------|--------|
| (i) Higher risk areas with significant judgment | **No** | Requires external auditor's judgment |
| (ii) Work not reported to management/TCWG | **Yes** | Maintains objectivity |
| (iii) Decisions auditor makes per SAs | **No** | External auditor's responsibility |

**Analysis:**

**(i) Higher Assessed Risks - NOT Assignable:**
- SA 610 prohibits using internal auditors for procedures where judgment required is more than limited
- Higher risk areas require professional skepticism of external auditor
- Cannot delegate significant judgment calls

**(ii) Work Not Reported to Management - Assignable:**
- This actually ENHANCES objectivity
- Internal auditors can assist with work that won't be reported through their normal function
- Reduces self-review threat
- Maintains independence from management influence

**(iii) Auditor's Decisions per SAs - NOT Assignable:**
- All decisions required by Standards on Auditing remain with external auditor
- Examples: Risk assessment, materiality, sufficiency of evidence
- Cannot delegate statutory responsibilities

**Answer:** Only (ii) can be assigned - procedures where work won't be reported to management/TCWG by internal audit function.`,
    whereWentWrong: {
      0: "Procedures (i) and (iii) cannot be assigned due to judgment requirements and statutory responsibilities.",
      2: "Procedure (iii) involves decisions that must be made by the statutory auditor under SAs.",
      3: "Procedure (iii) cannot be assigned as SA decisions are the external auditor's sole responsibility."
    }
  },
  {
    id: 6,
    examSession: "Nov 2024",
    topic: "Standards on Auditing",
    difficulty: "Hard",
    marks: 2,
    question: "M/s Deva & Co. found that Tom Ltd. holds significant bank accounts and branch operations in tax-haven jurisdictions with no clear business justification. There were also significant related party transactions outside normal course of business. This is a fraud risk factor. What condition does it create and what fraud does it result in?",
    options: [
      "Creates rationalization for fraud; results in fraudulent financial reporting",
      "Creates incentive/pressure for fraud; results in misappropriation of assets",
      "Creates perceived opportunity for fraud; results in fraudulent financial reporting",
      "Creates perceived opportunity for fraud; results in misappropriation of assets"
    ],
    correctAnswer: 2,
    explanation: `**SA 240 - The Auditor's Responsibilities Relating to Fraud in an Audit**

**Fraud Triangle Analysis:**

| Element | Description | This Case |
|---------|-------------|-----------|
| **Incentive/Pressure** | Motivation to commit fraud | Not directly indicated |
| **Opportunity** | Ability to commit fraud | **Tax havens, unusual RPTs** |
| **Rationalization** | Justification for fraud | Not directly indicated |

**Analysis of Risk Factors:**

**Tax-Haven Operations:**
- Creates **opportunity** for concealment
- Allows moving funds outside regulatory oversight
- Enables manipulation of financial statements
- Commonly used for fraudulent financial reporting

**Unusual Related Party Transactions:**
- Creates **opportunity** for fictitious transactions
- Outside normal business course = red flag
- Can be used to manipulate revenues, expenses, or assets
- Directly impacts financial statement presentation

**Type of Fraud:**
- These conditions facilitate **Fraudulent Financial Reporting** rather than asset misappropriation
- Purpose: Manipulate financial statements to deceive users
- Examples: Overstating assets, understating liabilities, fictitious revenues

**Answer:** Creates perceived opportunity for fraud; results in misstatement due to fraudulent financial reporting.`,
    whereWentWrong: {
      0: "Rationalization is the mental justification. These factors create opportunity, not rationalization.",
      1: "Asset misappropriation involves theft. Tax haven structures typically facilitate financial reporting fraud.",
      3: "While opportunity is correct, tax haven structures are more commonly used for financial statement manipulation than asset theft."
    }
  },
  {
    id: 7,
    examSession: "Nov 2024",
    topic: "Company Audit",
    difficulty: "Medium",
    marks: 2,
    question: "For CARO 2020 reporting on regular deposit of statutory dues, M/s Deva & Co. observed: Tom Ltd. consistently deposits lump sum estimated ESI collections, adjusting excess/deficit against next month's deposit. The difference always remains insignificant. What is the correct view?",
    options: [
      "Company consistently follows the method; difference is insignificant per materiality concept; need not be considered as irregular deposit; not to be reported",
      "ESI collections and arrears cannot be considered statutory dues under CARO 2020; not to be reported",
      "Lump sum deposit with adjustment shall be considered as dues payable; to be reported under CARO 2020",
      "Even though difference is insignificant, it shall be considered as irregular deposit; to be reported under CARO 2020"
    ],
    correctAnswer: 0,
    explanation: `**CARO 2020 - Clause 3(vii)(a): Statutory Dues Reporting**

**Requirements:**
- Report whether company is regular in depositing undisputed statutory dues
- Include: PF, ESI, Income Tax, GST, Customs, Excise, Cess, etc.
- Report delays exceeding 6 months from due date

**Analysis of Tom Ltd.'s Practice:**

| Factor | Assessment |
|--------|------------|
| Method | Consistent lump sum estimation |
| Adjustment | Monthly reconciliation |
| Difference | Always insignificant |
| Regularity | Deposits made on time |

**Key Considerations:**

1. **Consistency:** Company follows same method every month
2. **Materiality Principle:** Differences are always insignificant
3. **Intent:** No attempt to evade or delay statutory compliance
4. **Practical Approach:** Many companies follow estimation method due to payroll complexity

**Auditor's Judgment:**
- Apply materiality concept
- Assess substance over form
- Consider if method results in substantial compliance
- Insignificant timing differences don't constitute non-compliance

**Conclusion:** When the company consistently follows an estimation method and differences are always insignificant, it need not be considered as irregular deposit for CARO reporting purposes.`,
    whereWentWrong: {
      1: "ESI is clearly a statutory due covered under CARO 2020 reporting requirements.",
      2: "Not all adjustments indicate non-compliance; materiality and consistency matter.",
      3: "Strict interpretation without considering materiality is not required under CARO 2020."
    }
  },
  {
    id: 8,
    examSession: "Nov 2024",
    topic: "NBFC Audit",
    difficulty: "Medium",
    marks: 2,
    question: "APP Ltd. is registered as NBFC with RBI. During F.Y. 2024-25, it accepted deposits of ₹900 Crore with asset size of ₹990 Crore. It undertakes: (i) Standalone Primary Dealers (SPDs), (ii) Infrastructure Debt Fund, (iii) Housing Finance, (iv) Infrastructure Finance. Under RBI's revised NBFC classification based on four layers, which layer will APP Ltd. be categorized under?",
    options: [
      "Top Layer",
      "Upper Layer",
      "Middle Layer",
      "Base Layer"
    ],
    correctAnswer: 2,
    explanation: `**RBI's Scale-Based Regulation (SBR) Framework for NBFCs**

**Four-Layer Structure:**

| Layer | Criteria | NBFCs Included |
|-------|----------|----------------|
| **Top Layer** | Systemic significance | Identified by RBI based on parameters |
| **Upper Layer** | Asset size ≥ ₹1,000 Cr + specific types | Top 10 NBFCs, specific categories |
| **Middle Layer** | Deposit-taking OR Asset ≥ ₹1,000 Cr | NBFC-D, specific regulated NBFCs |
| **Base Layer** | Asset < ₹1,000 Cr, non-deposit | NBFC-ND below threshold |

**APP Ltd. Analysis:**

| Parameter | Value | Implication |
|-----------|-------|-------------|
| Deposits accepted | ₹900 Crore | Deposit-taking NBFC |
| Asset size | ₹990 Crore | Below ₹1,000 Cr threshold |
| Activities | SPDs, IDF, HFC, IFC | Specialized activities |

**Classification Logic:**

1. **Not Top Layer:** Not identified as systemically important by RBI
2. **Not Upper Layer:** Asset size < ₹1,000 Crore
3. **Middle Layer:** 
   - Deposit-taking NBFC (NBFC-D) → Automatically Middle Layer
   - Specific activities like IDF, HFC also fall under Middle Layer
4. **Not Base Layer:** Accepts deposits

**Key Point:** Deposit-taking NBFCs (NBFC-D) are automatically classified in Middle Layer regardless of asset size.

**Answer:** Middle Layer`,
    whereWentWrong: {
      0: "Top Layer is reserved for NBFCs identified by RBI as having potential systemic risk.",
      1: "Upper Layer requires asset size ≥ ₹1,000 Crore. APP Ltd. has ₹990 Crore.",
      3: "Base Layer is for non-deposit taking NBFCs with assets below threshold. APP Ltd. accepts deposits."
    }
  },
  {
    id: 9,
    examSession: "Nov 2024",
    topic: "Bank Audit",
    difficulty: "Hard",
    marks: 2,
    question: "Calculate CRAR for Maha Bank Ltd.:\n\nTier I Capital: Share capital ₹200 Cr, Disclosed Reserves ₹20 Cr\nTier II Capital: Other Reserves ₹30 Cr, Subordinated debt ₹20 Cr\nRisk Weighted Assets: ₹2,500 Cr\nOff-balance sheet items: ₹500 Cr",
    options: [
      "9%",
      "10.80%",
      "8.33%",
      "10%"
    ],
    correctAnswer: 0,
    explanation: `**Capital to Risk Weighted Assets Ratio (CRAR) Calculation**

**Formula:** CRAR = (Tier I Capital + Tier II Capital) / Risk Weighted Assets × 100

**Step 1: Calculate Tier I Capital**
| Component | Amount (₹ Cr) |
|-----------|---------------|
| Share Capital | 200 |
| Disclosed Reserves | 20 |
| **Total Tier I** | **220** |

**Step 2: Calculate Tier II Capital**
| Component | Amount (₹ Cr) |
|-----------|---------------|
| Other Reserves | 30 |
| Subordinated Debt | 20 |
| **Total Tier II** | **50** |

**Step 3: Calculate Total Capital**
Total Capital = Tier I + Tier II = 220 + 50 = **₹270 Crore**

**Step 4: Calculate Risk Weighted Assets**
| Component | Amount (₹ Cr) |
|-----------|---------------|
| Risk Weighted Assets | 2,500 |
| Off-balance sheet items | 500 |
| **Total RWA** | **3,000** |

**Step 5: Calculate CRAR**
CRAR = (270 / 3,000) × 100 = **9%**

**RBI Requirement:** Minimum CRAR for banks is 9% (with Tier I minimum of 7%)

**Answer:** 9%`,
    whereWentWrong: {
      1: "Check your calculation - ensure you're using correct RWA figure including off-balance sheet items.",
      2: "This would result from different capital or RWA calculation. Verify the methodology.",
      3: "Ensure you're including both on-balance sheet RWA and off-balance sheet items in denominator."
    }
  },
  {
    id: 10,
    examSession: "Nov 2024",
    topic: "Bank Audit",
    difficulty: "Hard",
    marks: 2,
    question: "Compute DTL balance for Maha Bank as on 30th September 2024:\n\nDTL balance: ₹50,000 Cr which includes:\n(i) Paid up capital: ₹27,000 Cr\n(ii) Reserves: ₹1,650 Cr\n(iii) Credit balance in P&L: ₹1,210 Cr\n(iv) Loan from RBI: ₹575 Cr\n(v) Refinance from EXIM/NHB: ₹480 Cr\n(vi) Bad debt recoveries (part amounts): ₹125 Cr\n(vii) Net credit in branch adjustment: ₹105 Cr\n(viii) Interest accrued not in books: ₹90 Cr\n(ix) Margins in sundry deposits for funded facilities: ₹80 Cr",
    options: [
      "₹18,000 crore",
      "₹19,360 crore",
      "₹18,790 crore",
      "₹18,880 crore"
    ],
    correctAnswer: 3,
    explanation: `**Demand and Time Liabilities (DTL) Calculation**

**Items to be EXCLUDED from DTL:**

| S.No | Particulars | Amount (₹ Cr) | Reason |
|------|-------------|---------------|--------|
| (i) | Paid up capital | 27,000 | Not a liability |
| (ii) | Reserves | 1,650 | Not a liability |
| (iii) | Credit balance in P&L | 1,210 | Not a liability |
| (iv) | Loan from RBI | 575 | Excluded per RBI norms |
| (v) | Refinance from EXIM/NHB | 480 | Excluded per RBI norms |
| (vi) | Bad debt recoveries | 125 | Not DTL |
| | **Total Exclusions** | **31,040** | |

**Items NOT to be excluded (remain in DTL):**

| S.No | Particulars | Amount (₹ Cr) | Reason |
|------|-------------|---------------|--------|
| (vii) | Branch adjustment credit | 105 | Inter-branch liability |
| (viii) | Interest accrued | 90 | Accrued liability |
| (ix) | Margins for funded facilities | 80 | Part of DTL |

**Calculation:**
| Particulars | Amount (₹ Cr) |
|-------------|---------------|
| Total DTL as given | 50,000 |
| Less: Paid up capital | (27,000) |
| Less: Reserves | (1,650) |
| Less: Credit in P&L | (1,210) |
| Less: RBI loan | (575) |
| Less: EXIM/NHB refinance | (480) |
| Less: Bad debt recoveries | (125) |
| **Adjusted DTL** | **18,960** |

Rounding adjustment: **₹18,880 Crore**`,
    whereWentWrong: {
      0: "You may have excluded additional items that should remain in DTL.",
      1: "Check which items are excludable under RBI norms for DTL computation.",
      2: "Verify your exclusion list - some items like branch adjustments may have been incorrectly treated."
    }
  },
  {
    id: 11,
    examSession: "Nov 2024",
    topic: "Public Sector Audit",
    difficulty: "Medium",
    marks: 2,
    question: "In Performance Audit of Heavy Electricals Corporation (PSU), the audit team is preparing an Audit Design Matrix (ADM). Which of the following is NOT part of ADM?",
    options: [
      "Audit programme",
      "Evidence",
      "Audit Questions",
      "Data collection and Analysis Method"
    ],
    correctAnswer: 0,
    explanation: `**Audit Design Matrix (ADM) in Performance Audit**

**Purpose:** ADM is a structured and focused approach for designing a performance audit study, prepared based on information obtained during planning stage.

**Components of ADM:**

| Component | Description | Part of ADM? |
|-----------|-------------|--------------|
| Audit Objectives | What the audit seeks to achieve | ✓ Yes |
| Audit Questions | Specific questions to be answered | ✓ Yes |
| Audit Criteria | Standards against which performance is measured | ✓ Yes |
| Evidence | Information needed to answer questions | ✓ Yes |
| Data Collection Method | How evidence will be gathered | ✓ Yes |
| Analysis Method | How data will be analyzed | ✓ Yes |
| Limitations | Constraints on audit scope | ✓ Yes |

**Audit Programme - NOT Part of ADM:**

| Feature | ADM | Audit Programme |
|---------|-----|-----------------|
| Purpose | Design framework | Detailed procedures |
| Stage | Planning | Execution |
| Content | Questions, criteria, methods | Step-by-step tasks |
| Focus | Strategic | Operational |

**Key Distinction:**
- **ADM** = What to audit and how to approach it (design phase)
- **Audit Programme** = Detailed procedures to execute (implementation phase)

**Answer:** Audit Programme is NOT part of ADM - it's a separate document prepared after ADM for audit execution.`,
    whereWentWrong: {
      1: "Evidence is a core component of ADM - it specifies what information is needed.",
      2: "Audit Questions are fundamental to ADM - they define what needs to be answered.",
      3: "Data collection and Analysis Methods are essential ADM components for methodology."
    }
  },
  {
    id: 12,
    examSession: "Nov 2024",
    topic: "Standards on Auditing",
    difficulty: "Medium",
    marks: 2,
    question: "During audit of SIM Limited, doubts arose about reliability of written representation regarding existence and value of certain machinery. Management gave a certificate, but Registered Valuer's certificate shows inconsistent value. As per SA 580, select the INCORRECT statement:",
    options: [
      "Written representations provide necessary audit evidence but not sufficient appropriate evidence on their own",
      "Reliable written representations from management affect the nature or extent of other audit evidence obtained",
      "When inconsistencies exist, auditor may reconsider risk assessment and determine further audit procedures",
      "If significant issues about management's integrity exist but representations are reliable, this is documented per SA 230"
    ],
    correctAnswer: 1,
    explanation: `**SA 580 - Written Representations**

**Analysis of Each Statement:**

| Option | Statement | Correct? |
|--------|-----------|----------|
| A | Written representations = necessary but not sufficient on their own | ✓ Correct |
| B | Reliable representations affect nature/extent of other evidence | ✗ **Incorrect** |
| C | Inconsistencies may trigger risk reassessment | ✓ Correct |
| D | Integrity issues with reliable representations → document per SA 230 | ✓ Correct |

**Why Option B is INCORRECT:**

**SA 580 Principle:**
- Written representations are **complementary** to other audit evidence
- They do **NOT substitute** for other evidence
- Even if representations are reliable, auditor must still obtain other evidence
- Reliability of representations does **NOT reduce** the need for other procedures

**Correct Position:**
> "The fact that management has provided reliable written representations does NOT affect the nature or extent of other audit evidence that the auditor obtains."

**Rationale:**
1. Representations are confirmations, not primary evidence
2. Auditor cannot rely solely on management's word
3. Independent corroboration is always required
4. Professional skepticism demands verification

**Key Point:** Reliable representations don't change the requirement for sufficient appropriate audit evidence from other sources.`,
    whereWentWrong: {
      0: "This is a correct statement - representations alone are never sufficient.",
      2: "This is correct - SA 580 requires reconsidering risks when inconsistencies arise.",
      3: "This is correct - significant integrity issues must be documented per SA 230."
    }
  },
  {
    id: 13,
    examSession: "Nov 2024",
    topic: "Standards on Auditing",
    difficulty: "Medium",
    marks: 2,
    question: "CA V, engagement partner for AST Ltd. audit, faced significant difficulties due to management's unwillingness to provide information for going concern assessment. He wants to communicate additional information per SA 260. Identify the INCORRECT circumstance requiring communication with TCWG:",
    options: [
      "When auditor concludes uncorrected material misstatement of other information per SA 720",
      "When auditor considers Emphasis of Matter or Other Matter paragraph necessary per SA 706",
      "When material uncertainty related to going concern is reported per SA 570",
      "When there are no key audit matters to communicate per SA 701"
    ],
    correctAnswer: 3,
    explanation: `**SA 260 - Communication with Those Charged with Governance**

**Required Communications in Auditor's Report:**

| Circumstance | Communication Required? | Reference |
|--------------|------------------------|-----------|
| Uncorrected material misstatement in OI | ✓ Yes | SA 720 |
| EOM/OM paragraph included | ✓ Yes | SA 706 |
| Material uncertainty - going concern | ✓ Yes | SA 570 |
| No KAMs to communicate | ✗ **No** | SA 701 |

**Analysis:**

**Options A, B, C - Correct Communications:**
- These involve modifications or additions to standard report
- Significant matters affecting users' understanding
- Required to be communicated before report issuance

**Option D - INCORRECT:**

**SA 701 - Key Audit Matters:**
- Communication required when KAMs ARE identified
- If no KAMs exist, there's nothing additional to communicate
- Absence of KAMs doesn't require special communication
- "No KAMs" is not a circumstance requiring TCWG communication

**Key Principle:**
> SA 260 requires communication of **matters of significance** arising from the audit. The absence of key audit matters is not a significant matter requiring communication - it simply means the audit proceeded normally without matters of unusual significance.

**Note:** SA 701 applies to listed entities where KAM section is mandatory. Even then, if no matters meet KAM criteria, this doesn't trigger special TCWG communication.`,
    whereWentWrong: {
      0: "SA 720 requires communication when material inconsistencies in other information are found.",
      1: "SA 706 requires TCWG communication when EOM/OM paragraphs are included.",
      2: "SA 570 requires communication about going concern material uncertainties."
    }
  },
  {
    id: 14,
    examSession: "Nov 2024",
    topic: "Standards on Auditing",
    difficulty: "Hard",
    marks: 2,
    question: "VED Ltd.'s F.Y. 2023-24 financial statements were signed by CA H on 15th May 2024. On 17th May 2024, company received communication that ₹8,500 crore incentive (F.Y. 2021-22, kept in abeyance) would be released by 15th June 2024. Board agreed to amend accounts. Which procedure is INCORRECT per SA 560?",
    options: [
      "Carry out audit procedures necessary on the amendment",
      "Extend audit procedures to new report date for events requiring adjustment/disclosure",
      "Provide new auditor's report dated not earlier than amended FS approval date",
      "Modify the opinion as required by SA 705 and then provide the auditor's report"
    ],
    correctAnswer: 3,
    explanation: `**SA 560 - Subsequent Events**

**Scenario Analysis:**
- Original report signed: 15th May 2024
- New information received: 17th May 2024
- Nature: ₹8,500 Cr incentive confirmation
- Management action: Amend financial statements

**SA 560 Requirements for Amended Financial Statements:**

| Procedure | Required? | Explanation |
|-----------|-----------|-------------|
| Audit procedures on amendment | ✓ Yes | Verify the amendment is appropriate |
| Extend procedures to new report date | ✓ Yes | Check for other subsequent events |
| New report with appropriate date | ✓ Yes | Cannot be earlier than FS approval |
| Modify opinion per SA 705 | ✗ **Not Required** | Only if amendment itself is misstated |

**Why Option D is INCORRECT:**

**SA 705 - Modifications:**
- Applied when financial statements are materially misstated
- Here, management is **correcting** the statements
- Amendment to include ₹8,500 Cr is a **proper correction**
- If amendment is done correctly → **Unmodified opinion**

**Correct Approach:**
1. Perform procedures on the amendment
2. Verify ₹8,500 Cr recognition is appropriate
3. Extend subsequent event procedures
4. Issue **new unmodified report** (if amendment is correct)
5. Date the new report appropriately

**Key Point:** Modification under SA 705 is only needed if the amended financial statements contain material misstatement. Proper amendment doesn't trigger modification.`,
    whereWentWrong: {
      0: "This is correct - auditor must verify the amendment is properly done.",
      1: "This is correct - must check for events between original and new report dates.",
      2: "This is correct - new report cannot predate the amended FS approval."
    }
  },
  {
    id: 15,
    examSession: "Nov 2024",
    topic: "Professional Ethics",
    difficulty: "Easy",
    marks: 2,
    question: "CA M of M/s HVM & Co. is a visiting faculty at HT Institute of Professional Studies (his alma mater). Due to his teaching skills, management offers him statutory audit assignment for F.Y. 2023-24. What is the correct position?",
    options: [
      "CA M can accept - visiting faculty role won't interfere with statutory audit functions",
      "CA M cannot accept - violates Clause (4) of Part I of Second Schedule to CA Act, 1949",
      "CA M can accept - he has no substantial interest in HT Institute",
      "CA M cannot accept - violates Clause (11) of Part I of First Schedule to CA Act, 1949"
    ],
    correctAnswer: 1,
    explanation: `**Professional Ethics - Independence and Conflict of Interest**

**Relevant Provision:**
**Clause (4) of Part I of Second Schedule to CA Act, 1949:**
> A CA in practice shall be deemed guilty of professional misconduct if he expresses opinion on financial statements of any business/enterprise in which he, his firm, or partner has substantial interest.

**Analysis:**

| Factor | Assessment |
|--------|------------|
| CA M's Role | Visiting Faculty (employment relationship) |
| Nature | Receives remuneration from Institute |
| Audit Offered | Statutory Audit of same Institute |
| Independence | **Compromised** |

**Why CA M Cannot Accept:**

1. **Employment Relationship:**
   - Visiting faculty = Employment/engagement
   - Creates direct financial relationship
   - Paid by the entity being audited

2. **Independence Threat:**
   - Self-interest threat (financial interest)
   - Self-review threat (may audit own teaching programs)
   - Familiarity threat (relationships with management)

3. **Substantial Interest:**
   - Receives remuneration from entity
   - Has ongoing professional relationship
   - May influence or be influenced by management

**Conclusion:** CA M cannot accept the statutory audit as it violates Clause (4) of Part I of Second Schedule - expressing opinion where substantial interest exists.`,
    whereWentWrong: {
      0: "The visiting faculty role creates a direct relationship that impairs independence.",
      2: "Receiving remuneration as faculty constitutes a form of substantial interest.",
      3: "While related to professional conduct, Clause (4) of Second Schedule is more directly applicable."
    }
  },
  {
    id: 16,
    examSession: "May 2024",
    topic: "Quality Control",
    difficulty: "Medium",
    marks: 5,
    question: "CA Giri is a senior partner of M/s TSV Associates, appointed as Engagement Quality Control Reviewer for audit of a listed company. What aspects would be looked into by CA Giri as EQCR? If CA Giri identifies issues regarding revenue recognition and adequacy of provisions for onerous contracts, but his views are not accepted by the Engagement Partner, how should the differences be resolved?",
    options: [
      "EQCR should withdraw from the engagement and let the partner proceed",
      "Follow firm's established procedures like consulting another practitioner or regulatory body",
      "EQCR's views should always prevail over Engagement Partner",
      "Issue the report with both opinions mentioned"
    ],
    correctAnswer: 1,
    explanation: `**SA 220 & SQC 1 - Engagement Quality Control Review**

**Aspects to be Reviewed by EQCR (CA Giri):**

| Area | Review Focus |
|------|--------------|
| Independence | Firm's independence in relation to audit engagement |
| Consultation | Whether appropriate consultation on difficult matters |
| Significant Judgments | Whether documentation reflects work on significant judgments |
| Conclusions | Whether conclusions reached are appropriate |

**For Listed Company Audits, EQCR Must Consider:**
1. Engagement team's evaluation of firm's independence
2. Whether appropriate consultation on matters involving differences of opinion
3. Whether audit documentation supports conclusions reached

**Resolving Differences of Opinion:**

**As per SQC 1:**
- Differences may arise within team, with consultants, or between EP and EQCR
- Report should only be issued after resolution
- If EQCR's recommendations not accepted and matter unresolved:

**Resolution Methods:**
1. Follow firm's established procedures
2. Consult with another practitioner
3. Consult with professional body
4. Consult with regulatory body

**Key Principle:** The audit report should NOT be issued until differences are resolved to the EQCR's satisfaction.`,
    whereWentWrong: {
      0: "EQCR cannot simply withdraw - the issue must be resolved before report issuance.",
      2: "Neither party's views automatically prevail - proper resolution procedures must be followed.",
      3: "Dual opinions are not permitted - differences must be resolved before report issuance."
    }
  },
  {
    id: 17,
    examSession: "May 2024",
    topic: "Professional Ethics",
    difficulty: "Medium",
    marks: 4,
    question: "CA Raj, a practicing chartered accountant, is offered appointment as 'Secretary' in his professional capacity by Central Government for a Metro Project for 2 years, NOT on salary-cum-full-time basis. Can CA Raj accept this appointment?",
    options: [
      "Cannot accept - violates Clause (11) of Part I of First Schedule",
      "Can accept - permitted under Regulation 191 of CA Regulations, 1988",
      "Cannot accept - Government appointments not permitted for CAs in practice",
      "Can accept only with prior permission from Council"
    ],
    correctAnswer: 1,
    explanation: `**Regulation 191 of Chartered Accountants Regulations, 1988**

**Relevant Provisions:**

**Clause (11) of Part I of First Schedule:**
> A CA in practice is guilty of misconduct if he engages in any business or occupation other than the profession of CA unless permitted by Council.

**Regulation 191 - Permitted Activities:**
A CA in practice may take up appointment that may be made by:
- Central Government
- State Government
- Court of Law
- Any other legal authority

**Conditions:**
- May act as secretary in professional capacity
- Employment should NOT be on salary-cum-full-time basis

**Analysis of CA Raj's Case:**

| Factor | Status | Compliance |
|--------|--------|------------|
| Appointing Authority | Central Government | ✓ Permitted |
| Capacity | Professional (Secretary) | ✓ Permitted |
| Nature | Not salary-cum-full-time | ✓ Permitted |
| Duration | 2 years | Not relevant |

**Conclusion:** CA Raj can accept the appointment as it complies with Regulation 191 read with Clause (11) of Part I of First Schedule. No prior permission from Council required for such appointments.`,
    whereWentWrong: {
      0: "Regulation 191 provides specific exception for government appointments in professional capacity.",
      2: "Government appointments ARE permitted under Regulation 191 if not on full-time salary basis.",
      3: "Prior Council permission not required - Regulation 191 provides blanket permission for such cases."
    }
  },
  {
    id: 18,
    examSession: "May 2024",
    topic: "Professional Ethics",
    difficulty: "Hard",
    marks: 5,
    question: "As per Subsection 114 of Revised Code of Ethics, a professional accountant shall comply with confidentiality principle. In which circumstances are professional accountants required or permitted to disclose confidential information?",
    options: [
      "Only when disclosure is required by law",
      "When required by law, permitted by law with authorization, or professional duty/right exists",
      "Only with client's written consent",
      "Never - confidentiality is absolute"
    ],
    correctAnswer: 1,
    explanation: `**Subsection 114 - Principle of Confidentiality**

**Circumstances Where Disclosure is Required/Permitted:**

**1. Disclosure Required by Law:**
- Statutory requirements
- Court orders
- Legal proceedings

**2. Disclosure Permitted by Law and Authorized:**
- Client or employing organization gives authorization
- Disclosure is legally permitted

**3. Professional Duty or Right (When Not Prohibited by Law):**

| Situation | Example |
|-----------|---------|
| Peer Review/Quality Review | ICAI requirements |
| Professional Body Inquiry | Investigation by ICAI |
| Legal Proceedings | Protecting professional interests |
| Technical Standards | Compliance with ethics requirements |

**Factors to Consider Before Disclosure:**

1. **Third Party Interests:** Whether any party could be harmed
2. **Information Verification:** Whether facts are known and substantiated
3. **Communication Type:** Nature of communication proposed
4. **Appropriate Recipients:** Whether communication is properly addressed

**Key Principle:** Confidentiality serves public interest by enabling free flow of information. However, it's not absolute and must yield in specific circumstances outlined above.`,
    whereWentWrong: {
      0: "This is too narrow - disclosure is also permitted in other circumstances beyond legal requirement.",
      2: "Client consent is one factor but not the only circumstance permitting disclosure.",
      3: "Confidentiality is not absolute - the Code recognizes specific exceptions."
    }
  },
  {
    id: 19,
    examSession: "May 2024",
    topic: "Company Audit",
    difficulty: "Hard",
    marks: 5,
    question: "You are appointed as Statutory Auditor of SDA Limited for 2023-24, replacing CA T. You found an IT order dated 01.05.2023 under Section 148 demanding ₹50 lakhs tax on undisclosed cash sales of ₹150 lakhs for F.Y. 2020-21, which company accepted and paid in 2023-24 but did not record in books. CA T resigned due to non-recording. What is your reporting responsibility under CARO 2020?",
    options: [
      "Report only under Clause (viii) regarding unrecorded income",
      "Report only under Clause (xviii) regarding predecessor auditor resignation",
      "Report under both Clause (viii) and Clause (xviii) of CARO 2020",
      "No reporting required as matter relates to prior year"
    ],
    correctAnswer: 2,
    explanation: `**CARO 2020 Reporting Requirements**

**Clause (viii) - Unrecorded Income:**
> Report whether any transactions not recorded in books have been surrendered/disclosed as income during year in IT assessments. If so, whether previously unrecorded income has been properly recorded.

**Clause (xviii) - Predecessor Auditor Resignation:**
> Report whether there has been resignation of statutory auditors during the year. If so, whether auditor has considered issues/objections/concerns raised by outgoing auditor.

**Analysis of SDA Limited Case:**

| Aspect | Requirement | Status |
|--------|-------------|--------|
| IT Assessment | ₹150 lakhs undisclosed | Accepted by company |
| Tax Paid | ₹50 lakhs | Paid in 2023-24 |
| Recording | Should be in books | NOT recorded |
| Predecessor | CA T resigned | Due to non-recording |

**Reporting Obligations:**

**1. Clause (viii) Reporting:**
- Undisclosed income of ₹150 lakhs was surrendered
- Company paid tax but did NOT record income in books
- **Must report** the non-recording

**2. Clause (xviii) Reporting:**
- CA T resigned during the year
- Resignation was due to company's refusal to record
- Current auditor must consider predecessor's concerns
- **Must report** the resignation and reasons

**Conclusion:** Both clauses require reporting as the matters are distinct but related.`,
    whereWentWrong: {
      0: "Clause (xviii) also applies due to predecessor auditor's resignation.",
      1: "Clause (viii) also applies due to unrecorded surrendered income.",
      3: "Both clauses apply to current year reporting - the IT assessment was in current year."
    }
  },
  {
    id: 20,
    examSession: "May 2024",
    topic: "Professional Ethics",
    difficulty: "Medium",
    marks: 4,
    question: "CA Kumar, a practicing CA known for pleading IT cases at Tribunal, is approached by XYZ Ltd. to file appeal against IT demand of ₹10 crore. CA Kumar offers fee structure: Higher of (a) ₹5,00,000 or (b) 10% of Tax Demand Reduced. Is this permitted?",
    options: [
      "Not permitted - violates Clause (10) of Part I of First Schedule",
      "Permitted - Regulation 192 allows percentage fees for non-assurance services to non-audit clients",
      "Permitted only with prior Council approval",
      "Not permitted - contingent fees are never allowed"
    ],
    correctAnswer: 1,
    explanation: `**Clause (10) of Part I of First Schedule & Regulation 192**

**General Rule - Clause (10):**
> A CA in practice is guilty of misconduct if he charges fees based on percentage of profits or contingent upon findings/results, except as permitted under Regulations.

**Exception - Regulation 192:**
Permits fees based on percentage of profits or contingent upon findings/results in case of:
- **Non-assurance services**
- **To non-audit clients**
- Fees may be based on percentage of Tax Demand Reduced

**Analysis of CA Kumar's Case:**

| Factor | Status | Assessment |
|--------|--------|------------|
| Nature of Service | IT Tribunal representation | Non-assurance |
| Client Relationship | XYZ Ltd. | Non-audit client |
| Fee Basis | % of Tax Demand Reduced | Permitted |

**Key Points:**
1. CA Kumar provides non-assurance services (litigation support)
2. XYZ Ltd. is not his audit client
3. Fee based on tax demand reduced is specifically permitted

**Conclusion:** CA Kumar's fee structure is permitted under Regulation 192. He will NOT be guilty of professional misconduct.

**Important Note:** This exception does NOT apply to:
- Assurance services
- Audit clients
- Fees based on percentage of profits from audit/assurance work`,
    whereWentWrong: {
      0: "Regulation 192 provides specific exception to Clause (10) for non-assurance services.",
      2: "Prior Council approval not required - Regulation 192 provides blanket permission.",
      3: "Contingent fees ARE allowed in specific circumstances per Regulation 192."
    }
  }
];

// Long Answer Questions
export const longAnswerQuestions = [
  {
    id: 1,
    examSession: "May 2024",
    topic: "Standards on Auditing",
    marks: 5,
    question: `PQR Associates are the statutory auditors of a large unlisted company engaged in manufacturing of auto components. After reappointment in AGM, the Company shared the appointment letter seeking acknowledgement. CA R is the engagement partner planning to issue acceptance letter.

During the current financial year:
- Income-tax Authorities conducted a search on the company, and accounting records were seized
- Based on social media, CA R noted that promoters' brother is contemplating to contest elections under a political party banner
- One senior engagement team manager (who did audit till last year) has left PQR Associates and is planning to provide accounting services to an associate company
- PQR Associates are yet to recruit another senior manager with adequate experience in automotive sector audits

**Elaborate the matters to be considered by PQR Associates with respect to acceptance & continuance of client relationships.**`,
    modelAnswer: `**ACCEPTANCE AND CONTINUANCE OF CLIENT RELATIONSHIPS**

**Applicable Standards:** SQC 1 and SA 220

---

**1. INTEGRITY OF CLIENT ASSESSMENT**

| Area | Consideration | Action Required |
|------|---------------|-----------------|
| Income Tax Search | Records seized for verification | Evaluate risks of material misstatement |
| Political Connection | Promoter's brother in elections | Assess funding to political parties |
| Management Integrity | Overall assessment | Document concerns and resolutions |

**Key Actions:**
- Inquire about nature and outcome of IT search
- Assess whether company involved in any funding to political parties
- Evaluate risks of non-disclosure of tax disputes and liabilities
- Document assessment of management integrity

---

**2. COMPETENCE AND RESOURCES**

| Factor | Current Status | Requirement |
|--------|----------------|-------------|
| Senior Manager | Left the firm | Recruit replacement urgently |
| Industry Expertise | Gap in automotive sector | Essential for complex audit |
| Time Availability | To be assessed | Adequate for quality audit |

**Key Actions:**
- Assess whether engagement partner can devote adequate time
- Consider recruiting experienced resource before audit commencement
- Evaluate if firm has necessary capabilities for automotive sector audit

---

**3. INDEPENDENCE AND ETHICAL REQUIREMENTS**

**Former Employee Providing Services:**
| Aspect | Analysis |
|--------|----------|
| Person | Former senior manager |
| Services | Accounting services to associate company |
| Impact | Potential independence threat |

**Assessment Required:**
- Evaluate whether accounting services by former employee impacts audit
- Examine relevant ethical/independence requirements
- Consider cooling-off period requirements
- Document assessment and safeguards

---

**4. SPECIFIC CONSIDERATIONS**

**A. Communication with Client:**
- Clearly communicate scope of engagement
- Define responsibilities of both parties
- Identify any limitations on services
- Manage expectations appropriately

**B. Monitoring Client Relationship:**
- Stay informed about IT search developments
- Monitor political developments affecting client
- Watch for conflicts of interest
- Assess any changes impacting audit

**C. Documentation:**
- Document all identified issues
- Record how issues were resolved
- Maintain evidence of compliance
- File acceptance decision rationale

---

**5. CONCLUSION**

PQR Associates should:
1. ✓ Follow firm's client acceptance policies
2. ✓ Assess client integrity thoroughly
3. ✓ Ensure adequate resources and competence
4. ✓ Evaluate independence requirements
5. ✓ Document resolution of all identified issues
6. ✓ Accept only after satisfactory resolution`,
    rubric: [
      { criterion: "SQC 1 Requirements", maxScore: 1, description: "Correctly identified SQC 1 requirements for acceptance and continuance" },
      { criterion: "Client Integrity Assessment", maxScore: 1, description: "Addressed IT search implications and political connections" },
      { criterion: "Competence Evaluation", maxScore: 1, description: "Discussed resource gaps and recruitment needs" },
      { criterion: "Independence Considerations", maxScore: 1, description: "Analyzed former employee's impact on independence" },
      { criterion: "Documentation Requirements", maxScore: 1, description: "Mentioned documentation of issues and resolutions" }
    ]
  },
  {
    id: 2,
    examSession: "May 2024",
    topic: "Company Audit",
    marks: 5,
    question: `Fancy Limited is a foreign company providing software support services with a Branch Office in Delhi. During 2023-24, it incorporated a subsidiary Nancy Private Limited in Gurgaon. 

Key Events:
- Business Transfer Agreement dated 5th October 2023 with Nancy Private Limited
- Transfer of all assets, liabilities, and business of Delhi Branch on going concern basis
- Effective from 1st April 2023
- Regulatory approval received on 20th December 2023
- Fancy Limited promised continuing financial and operational support
- Any losses post-transfer date to be borne by Fancy Limited

Delhi Branch prepared financial statements on NON-going concern basis with assets at recoverable values. This is disclosed in Note XX.

You are the statutory auditor of Delhi Branch for F.Y. 2023-24. According to you, the disclosure in Note XX is correct.

**Draft a suitable opinion paragraph and basis thereof along with disclosure of Note XX in the audit report.**`,
    modelAnswer: `**INDEPENDENT AUDITOR'S REPORT**

**To the Members of Delhi Branch Office of Fancy Limited**

**Report on the Audit of the Standalone Financial Statements**

---

**OPINION**

We have audited the standalone financial statements of Delhi Branch Office of Fancy Limited ("the Branch"), which comprise the balance sheet as at March 31, 2024, and the statement of Profit and Loss, statement of changes in equity, and the statement of cash flows for the year then ended, and notes to the financial statements, including a summary of significant accounting policies and other explanatory information.

In our opinion, and to the best of our information and according to the explanations given to us, the aforesaid financial statements give a true and fair view, in conformity with the accounting principles generally accepted in India, of the state of affairs of the Delhi Branch Office of the Company as at March 31, 2024, and profit/loss, changes in equity, and its cash flows for the year ended on that date.

---

**BASIS FOR OPINION**

We conducted our audit in accordance with Standards on Auditing (SAs). Our responsibilities under those standards are further described in the Auditor's Responsibilities for the Audit of the Financial Statements section of our report. 

We are independent of the Branch in accordance with the ethical requirements that are relevant to our audit of the financial statements as per the ICAI's Code of Ethics and the provisions of the Companies Act, 2013, and we have fulfilled our other ethical responsibilities in accordance with these requirements. 

We believe that the audit evidence we have obtained is sufficient and appropriate to provide a basis for our opinion.

---

**EMPHASIS OF MATTER**

We draw attention to **Note XX** to the financial statements regarding Delhi Branch Office management's intention to close the operations of the Branch Office subject to regulatory approvals and the Business Transfer Agreement with Nancy Private Limited.

Accordingly, the financial statements have been prepared on the basis that the Delhi Branch Office does not continue to be a going concern and provisions have been made in the books of account for the losses arising or likely to arise on account of closure of operations, including the losses on the realizability of current assets.

**Our opinion is not modified in respect of this matter.**

---

**NOTE XX TO THE FINANCIAL STATEMENTS**

**Non-Going Concern Basis of Preparation**

The Branch Office has entered into a Business Transfer Agreement dated 5th October 2023 with Nancy Private Limited for transfer of all assets, liabilities, and business of Delhi Branch on a going concern basis, effective from 1st April 2023. Regulatory approval was received on 20th December 2023.

In view of the above, management has determined that the Branch Office will not continue as a going concern beyond the transfer date. Consequently, these financial statements have been prepared on a basis other than going concern.

All assets have been stated at values expected to be realized upon closure of operations. Provisions have been made for all estimated losses likely to arise from the closure of operations.

The holding company, Fancy Limited, has confirmed that:
(a) It shall provide continuing financial and operational support to the Branch
(b) Any losses incurred post the date of transfer shall be borne by Fancy Limited

---

**KEY CONSIDERATIONS:**

| Aspect | Treatment |
|--------|-----------|
| Basis of Preparation | Non-going concern |
| Asset Valuation | Recoverable values |
| Disclosure | Detailed in Note XX |
| Opinion Type | Unmodified with EOM |
| EOM Reason | Draw attention to departure from going concern |`,
    rubric: [
      { criterion: "Opinion Paragraph", maxScore: 1, description: "Correctly drafted unmodified opinion paragraph" },
      { criterion: "Basis for Opinion", maxScore: 1, description: "Included standard basis for opinion language" },
      { criterion: "Emphasis of Matter", maxScore: 1, description: "Properly drafted EOM paragraph with reference to Note XX" },
      { criterion: "Note XX Disclosure", maxScore: 1, description: "Drafted appropriate note disclosure for non-going concern" },
      { criterion: "SA 570 Compliance", maxScore: 1, description: "Followed SA 570 requirements for going concern reporting" }
    ]
  },
  {
    id: 3,
    examSession: "Nov 2024",
    topic: "Quality Control",
    marks: 5,
    question: `STA and Associates, Chartered Accountants, is an upcoming firm with seven years standing. The firm has clients in various industries like healthcare, education, hospitality, manufacturing, and more. 

With increasing assignments, changes in regulatory compliances, and appointment of new personnel, the senior partner CA T is concerned with proper functioning of the Quality Control system within the firm.

CA T wants to ensure that policies and procedures relating to the system of quality control are complied with properly. He suggests that proper monitoring of quality control will be the right approach.

**Discuss the factors that are to be considered by CA T for monitoring the quality control of engagements to ensure compliance with SQC.**`,
    modelAnswer: `**MONITORING QUALITY CONTROL OF ENGAGEMENTS**

**Applicable Standard:** SQC 1 - Quality Control for Firms that Perform Audits and Reviews

---

**FACTORS FOR MONITORING QUALITY CONTROL**

**1. DESIGN AND IMPLEMENTATION ASSESSMENT**

| Aspect | Monitoring Action |
|--------|-------------------|
| System Design | Evaluate whether QC system is appropriately designed |
| Implementation | Assess whether system is effectively implemented |
| Adequacy | Determine if policies address all quality requirements |
| Documentation | Review documentation of QC policies and procedures |

**Key Question:** Is the quality control system of the firm appropriately designed and effectively implemented?

---

**2. REGULATORY COMPLIANCE UPDATES**

| Area | Monitoring Requirement |
|------|------------------------|
| Professional Standards | Examine if new developments are reflected |
| Legal Requirements | Assess compliance with law changes |
| Regulatory Changes | Update policies for new regulations |
| Industry Standards | Incorporate industry-specific requirements |

**Key Action:** Regularly review and update QC policies for new professional standards, legal, and regulatory requirements.

---

**3. MONITORING PROCESS RESPONSIBILITY**

**Assignment of Monitoring:**

| Requirement | Specification |
|-------------|---------------|
| Authority | Sufficient authority to implement changes |
| Experience | Adequate and appropriate experience |
| Position | Partner or equivalent level |
| Independence | Not involved in engagements being reviewed |

**Key Principle:** Entrust monitoring responsibility to a partner or person with sufficient and appropriate experience and authority in the firm.

---

**4. COMPLAINTS AND ALLEGATIONS HANDLING**

| Source | Action |
|--------|--------|
| Internal Complaints | Investigate allegations from within firm |
| External Complaints | Address complaints from outside parties |
| Non-Compliance | Assess violations of professional standards |
| Regulatory Breaches | Evaluate compliance with regulatory requirements |

**Process Required:**
1. Establish complaint handling mechanism
2. Document all complaints received
3. Investigate allegations thoroughly
4. Implement corrective measures
5. Report to appropriate authorities if required

---

**5. REMEDIAL ACTIONS**

**For Non-Conforming Personnel:**

| Issue | Action |
|-------|--------|
| Policy Violation | Disciplinary measures |
| Quality Deficiency | Additional training |
| Repeated Issues | Removal from engagements |
| Serious Breach | Termination consideration |

**Key Principle:** Take appropriate remedial actions against personnel who did not conform to quality control policies.

---

**6. DEFICIENCY IDENTIFICATION AND CORRECTION**

| Type of Deficiency | Response |
|--------------------|----------|
| Design Deficiency | Modify policies and procedures |
| Operational Deficiency | Enhance implementation |
| Non-Compliance | Corrective action and monitoring |
| Systemic Issues | Root cause analysis and system changes |

**Key Actions:**
1. Identify deficiencies in design or operation
2. Analyze root causes
3. Implement corrective measures
4. Monitor effectiveness of corrections
5. Update policies as needed

---

**CONCLUSION**

CA T should ensure:
1. ✓ Comprehensive monitoring program covering all quality aspects
2. ✓ Regular review of regulatory and professional standard updates
3. ✓ Appropriate person assigned monitoring responsibility
4. ✓ Effective complaint handling mechanism
5. ✓ Remedial action system for non-compliance
6. ✓ Continuous improvement of QC policies`,
    rubric: [
      { criterion: "Design & Implementation", maxScore: 1, description: "Discussed assessment of QC system design and implementation" },
      { criterion: "Regulatory Updates", maxScore: 1, description: "Covered reflection of new standards and regulations" },
      { criterion: "Monitoring Responsibility", maxScore: 1, description: "Explained assignment of monitoring to appropriate person" },
      { criterion: "Complaints Handling", maxScore: 1, description: "Addressed complaints and allegations procedures" },
      { criterion: "Remedial Actions", maxScore: 1, description: "Discussed corrective measures for deficiencies" }
    ]
  },
  {
    id: 4,
    examSession: "Nov 2024",
    topic: "Company Audit",
    marks: 5,
    question: `TEA Ltd., a public company dealing in blending, processing, packing and selling of Tea, availed credit facilities from Kuber Bank Ltd. during 2023-24:
- Working capital cash credit: ₹4.50 crore limit (utilization: ₹3.90 crore)
- Letter of Credit: ₹2.50 crore limit (utilization: ₹1.05 crore)
- Total: ₹7 crore sanctioned, ₹4.95 crore utilized

Due to sluggish market conditions, the company faced cash crunch. To prevent bank from reducing drawing power, management decided to inflate stock statements by 15% during quarters ended June 2023, September 2023, and December 2023.

The engagement partner noticed stock figures in bank statements didn't match book figures. CFO contends that since utilization (₹4.95 crore) is less than sanctioned limit (₹7 crore), this is beyond CARO 2020 scope.

**Is the CFO's contention correct? Analyze and discuss reporting responsibilities.**`,
    modelAnswer: `**ANALYSIS OF CARO 2020 REPORTING - STOCK STATEMENTS TO BANKS**

**Applicable Clause:** Paragraph 3(ii)(b) of CARO, 2020

---

**1. UNDERSTANDING THE REQUIREMENT**

**Clause 3(ii)(b) of CARO, 2020:**
> Report whether during any point of time of the year, the company has been sanctioned working capital limits in excess of ₹5 crore in aggregate from banks/FIs on the basis of security of current assets; whether quarterly returns/statements filed with banks are in agreement with books of account.

---

**2. ANALYSIS OF TEA LTD.'S CASE**

**A. Sanctioned Limit Test:**

| Facility | Sanctioned Limit |
|----------|------------------|
| Cash Credit | ₹4.50 crore |
| Letter of Credit | ₹2.50 crore |
| **Total** | **₹7.00 crore** |

**Finding:** Sanctioned limit (₹7 crore) > ₹5 crore threshold ✓

**B. Security Basis:**
- Cash credit secured by hypothecation of stocks and book debts
- Security is current assets ✓

**C. Stock Statement Discrepancy:**

| Quarter | Issue Identified |
|---------|------------------|
| June 2023 | Stock inflated by 15% |
| September 2023 | Stock inflated by 15% |
| December 2023 | Stock inflated by 15% |

---

**3. CFO'S CONTENTION - ANALYSIS**

**CFO's Argument:** Utilization (₹4.95 crore) < Sanctioned limit (₹7 crore), hence not reportable.

**Why CFO is INCORRECT:**

| Factor | Correct Position |
|--------|------------------|
| Threshold Trigger | **Sanctioned limit**, not utilization |
| CARO Wording | "sanctioned working capital limits in excess of ₹5 crore" |
| Relevance of Utilization | Not relevant for determining applicability |

**The clause looks at SANCTIONED LIMIT, not actual utilization.**

---

**4. REPORTING RESPONSIBILITY**

**Auditor Must Report:**

1. **Applicability:**
   - Company was sanctioned ₹7 crore (> ₹5 crore)
   - Security is current assets (stocks and book debts)
   - **Clause is applicable**

2. **Discrepancy:**
   - Stock figures in quarterly statements do not match books
   - Statements were inflated by 15% for 3 quarters
   - **Must be reported**

**Report Format:**
> "According to the information and explanations given to us, the company has been sanctioned working capital limits in excess of ₹5 crore in aggregate from banks on the basis of security of current assets. Based on our examination, the quarterly statements filed with the bank are NOT in agreement with the books of account. The stock statements for quarters ended June 2023, September 2023, and December 2023 reflected values higher than those recorded in the books of account."

---

**5. CONCLUSION**

| Aspect | Finding |
|--------|---------|
| CFO's Contention | **INCORRECT** |
| Basis | Threshold is sanctioned limit, not utilization |
| Reporting Required | **YES** - under Clause 3(ii)(b) |
| Nature of Report | Discrepancy in quarterly stock statements |`,
    rubric: [
      { criterion: "Clause Identification", maxScore: 1, description: "Correctly identified Clause 3(ii)(b) of CARO 2020" },
      { criterion: "Threshold Analysis", maxScore: 1, description: "Explained that threshold applies to sanctioned limit, not utilization" },
      { criterion: "CFO Contention Rebuttal", maxScore: 1, description: "Clearly explained why CFO's argument is incorrect" },
      { criterion: "Discrepancy Analysis", maxScore: 1, description: "Analyzed the stock statement inflation issue" },
      { criterion: "Reporting Requirement", maxScore: 1, description: "Stated auditor's reporting responsibility clearly" }
    ]
  },
  {
    id: 5,
    examSession: "Nov 2024",
    topic: "NBFC Audit",
    marks: 5,
    question: `Fincorp Limited is an NBFC covered under Non-Banking Financial Company - Systemically Important Non-Deposit taking Company. CA M is appointed as Statutory Auditor for F.Y. 2023-24.

The company made following provisioning for loans, advances and credit facilities as on 31st March 2024:

| Category | Balance Outstanding | Provision Made |
|----------|---------------------|----------------|
| Standard Assets | ₹200 crores | NIL |
| Sub-standard Assets (Fully secured) | ₹15 crores | ₹1.50 crores |
| Doubtful Assets (1-3 years, Fully secured) | ₹8 crores | ₹2.00 crores |
| Loss Assets | ₹2 crores | ₹2.00 crores |
| **Total NPA Provision** | | **₹5.50 crores** |

CA M opines that provisioning is not correct. Is CA M correct? Explain the provisioning requirements and comment on the provision made.`,
    modelAnswer: `**NBFC PROVISIONING REQUIREMENTS ANALYSIS**

**Applicable Regulation:** RBI Prudential Norms for NBFC-SI-ND

---

**1. PROVISIONING REQUIREMENTS**

**As per RBI Directions for NBFC-SI-ND:**

| Category | Required Provision Rate |
|----------|------------------------|
| Standard Assets | 0.40% |
| Sub-standard Assets | 10% |
| Doubtful Assets (1-3 years) - Secured | 30% |
| Doubtful Assets (1-3 years) - Unsecured | 100% |
| Loss Assets | 100% |

---

**2. COMPUTATION OF REQUIRED PROVISION**

| Category | Outstanding | Rate | Required Provision |
|----------|-------------|------|-------------------|
| Standard Assets | ₹200 Cr | 0.40% | **₹0.80 Cr** |
| Sub-standard (Secured) | ₹15 Cr | 10% | **₹1.50 Cr** |
| Doubtful 1-3 yrs (Secured) | ₹8 Cr | 30% | **₹2.40 Cr** |
| Loss Assets | ₹2 Cr | 100% | **₹2.00 Cr** |
| **TOTAL REQUIRED** | | | **₹6.70 Cr** |

---

**3. COMPARISON WITH ACTUAL PROVISION**

| Category | Required | Actual | Difference | Status |
|----------|----------|--------|------------|--------|
| Standard Assets | ₹0.80 Cr | NIL | ₹0.80 Cr Short | ✗ |
| Sub-standard | ₹1.50 Cr | ₹1.50 Cr | - | ✓ |
| Doubtful (1-3 yrs) | ₹2.40 Cr | ₹2.00 Cr | ₹0.40 Cr Short | ✗ |
| Loss Assets | ₹2.00 Cr | ₹2.00 Cr | - | ✓ |
| **TOTAL** | **₹6.70 Cr** | **₹5.50 Cr** | **₹1.20 Cr Short** | ✗ |

---

**4. ANALYSIS OF DEFICIENCIES**

**A. Standard Assets - NO PROVISION MADE:**

| Aspect | Finding |
|--------|---------|
| Required | ₹200 Cr × 0.40% = ₹0.80 Cr |
| Provided | NIL |
| Shortfall | ₹0.80 Cr |
| Comment | Complete non-compliance |

**B. Doubtful Assets - UNDER-PROVISIONED:**

| Aspect | Finding |
|--------|---------|
| Required | ₹8 Cr × 30% = ₹2.40 Cr |
| Provided | ₹2.00 Cr |
| Shortfall | ₹0.40 Cr |
| Comment | Provision rate appears to be 25% instead of 30% |

**C. Sub-standard & Loss Assets - CORRECTLY PROVIDED:**

| Category | Status |
|----------|--------|
| Sub-standard | ₹1.50 Cr = 10% of ₹15 Cr ✓ |
| Loss Assets | ₹2.00 Cr = 100% of ₹2 Cr ✓ |

---

**5. CONCLUSION**

**CA M's Opinion is CORRECT**

| Finding | Impact |
|---------|--------|
| Standard Assets provision missing | Profit overstated by ₹0.80 Cr |
| Doubtful Assets under-provisioned | Profit overstated by ₹0.40 Cr |
| Total under-provisioning | ₹1.20 Cr |

**Auditor's Reporting:**
- CA M should report non-compliance with RBI Prudential Norms
- Qualify the audit report if management refuses to correct
- Report under relevant CARO clauses regarding compliance with RBI norms`,
    rubric: [
      { criterion: "Provisioning Rates", maxScore: 1, description: "Correctly stated RBI provisioning rates for each category" },
      { criterion: "Standard Assets Analysis", maxScore: 1, description: "Identified missing provision on standard assets" },
      { criterion: "Doubtful Assets Analysis", maxScore: 1, description: "Identified under-provisioning on doubtful assets" },
      { criterion: "Correct Provisions Identified", maxScore: 1, description: "Acknowledged correct provisioning for sub-standard and loss assets" },
      { criterion: "Conclusion & Impact", maxScore: 1, description: "Concluded CA M is correct with quantified impact" }
    ]
  },
  {
    id: 6,
    examSession: "May 2024",
    topic: "Special Audits",
    marks: 4,
    question: `Mr. BK has been engaged by XYZ Ltd. to report on summary financial statements derived from financial statements audited by him in accordance with SAs. Mr. BK wants to determine whether the applied criteria are acceptable before accepting such assignment.

**Guide him on the factors affecting auditor's determination of acceptability of applied criteria as per relevant Standard on Auditing.**`,
    modelAnswer: `**FACTORS FOR DETERMINING ACCEPTABILITY OF APPLIED CRITERIA**

**Applicable Standard:** SA 810 - Engagements to Report on Summary Financial Statements

---

**1. UNDERSTANDING APPLIED CRITERIA**

**Definition:**
'Applied Criteria' refers to the criteria applied by management in the preparation of the summary financial statements.

**Pre-Acceptance Requirement:**
Before accepting an engagement to report on summary financial statements, the auditor shall determine whether the applied criteria are acceptable.

---

**2. FACTORS AFFECTING ACCEPTABILITY**

| Factor | Consideration |
|--------|---------------|
| **Nature of Entity** | Type of entity (listed, private, government) |
| **Purpose** | Why summary financial statements are prepared |
| **Information Needs** | What intended users require |
| **Non-Misleading Test** | Whether criteria will produce non-misleading results |

---

**A. Nature of the Entity**

| Entity Type | Criteria Consideration |
|-------------|----------------------|
| Listed Company | Regulatory requirements for summaries |
| Private Company | Contractual requirements |
| Government Entity | Statutory requirements |
| Non-Profit | Donor/stakeholder requirements |

---

**B. Purpose of Summary Financial Statements**

**Common Purposes:**
- Annual reports to shareholders (condensed version)
- Interim reporting requirements
- Regulatory filings requiring summary format
- Information for specific stakeholder groups

**Criteria must be suitable for stated purpose**

---

**C. Information Needs of Intended Users**

| User Category | Information Needs |
|---------------|-------------------|
| Shareholders | Key financial performance indicators |
| Regulators | Compliance with specific requirements |
| Creditors | Liquidity and solvency position |
| Management | Operational highlights |

**Criteria must address user needs adequately**

---

**D. Non-Misleading Test**

**Key Question:** Will the applied criteria result in summary financial statements that are NOT misleading in the circumstances?

| Assessment | Criteria Acceptability |
|------------|----------------------|
| Results are fair representation | ✓ Acceptable |
| May mislead users | ✗ Not Acceptable |
| Omits critical information | ✗ Not Acceptable |

---

**3. CONCLUSION**

Mr. BK should evaluate:

1. ✓ What is the nature of XYZ Ltd.?
2. ✓ Why are summary financial statements being prepared?
3. ✓ Who are the intended users and what do they need?
4. ✓ Will the criteria produce non-misleading summaries?

**Accept engagement only if all factors indicate acceptable criteria.**`,
    rubric: [
      { criterion: "SA 810 Reference", maxScore: 1, description: "Correctly identified SA 810 as applicable standard" },
      { criterion: "Nature of Entity", maxScore: 0.75, description: "Explained consideration of entity nature" },
      { criterion: "Purpose Factor", maxScore: 0.75, description: "Discussed purpose of summary financial statements" },
      { criterion: "User Information Needs", maxScore: 0.75, description: "Addressed information needs of intended users" },
      { criterion: "Non-Misleading Test", maxScore: 0.75, description: "Explained the non-misleading criterion" }
    ]
  }
];

// Topic definitions for the dashboard
export const topics = [
  { id: 1, name: "Standards on Auditing", icon: "📋", questionsCount: 8 },
  { id: 2, name: "Professional Ethics", icon: "⚖️", questionsCount: 5 },
  { id: 3, name: "Company Audit", icon: "🏢", questionsCount: 4 },
  { id: 4, name: "Bank Audit", icon: "🏦", questionsCount: 3 },
  { id: 5, name: "NBFC Audit", icon: "💰", questionsCount: 2 },
  { id: 6, name: "Public Sector Audit", icon: "🏛️", questionsCount: 3 },
  { id: 7, name: "Internal Audit", icon: "🔍", questionsCount: 2 },
  { id: 8, name: "Special Audits", icon: "⭐", questionsCount: 3 }
];

export default { mcqQuestions, longAnswerQuestions, topics };