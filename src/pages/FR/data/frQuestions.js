// Financial Reporting MCQ Questions Data
export const frMcqQuestions = [
  {
    id: 1,
    examSession: "Nov 2024",
    topic: "Consolidation",
    difficulty: "Medium",
    marks: 2,
    indAsReference: "Ind AS 110",
    question: "Under Ind AS 110, when should a parent entity consolidate a subsidiary?",
    options: [
      "Only when it holds more than 50% of voting rights",
      "When it has control over the subsidiary, which includes power, exposure to variable returns, and ability to affect returns",
      "Only when it owns 100% of the subsidiary",
      "When it has significant influence over the subsidiary"
    ],
    correctAnswer: 1,
    explanation: `**Ind AS 110 - Consolidated Financial Statements:**

A parent entity consolidates a subsidiary when it has **control** over the subsidiary. Control is defined as having all three elements:
1. **Power** over the investee
2. **Exposure or rights to variable returns** from involvement with the investee
3. **Ability to use power** to affect the amount of returns

Control is not determined solely by ownership percentage. A parent can have control with less than 50% ownership if it has de facto control through other means.

**Answer: Option B** - Control requires power, exposure to variable returns, and ability to affect returns.`,
    whereWentWrong: {
      0: "Control is not determined solely by voting rights percentage. Ind AS 110 focuses on control, not just ownership.",
      2: "100% ownership is not required for consolidation. Control can exist with less ownership.",
      3: "Significant influence (20-50%) applies to associates under Ind AS 28, not consolidation."
    }
  },
  {
    id: 2,
    examSession: "Nov 2024",
    topic: "Financial Instruments",
    difficulty: "Hard",
    marks: 2,
    indAsReference: "Ind AS 109",
    question: "A company issues a convertible bond. Under Ind AS 109, how should this be initially recognized?",
    options: [
      "Entirely as equity",
      "Entirely as a financial liability",
      "Split between liability and equity components based on fair value",
      "As a compound financial instrument at cost"
    ],
    correctAnswer: 2,
    explanation: `**Ind AS 109 - Financial Instruments:**

Convertible bonds are **compound financial instruments** containing both:
- A **liability component** (the obligation to pay interest and principal)
- An **equity component** (the conversion option)

**Initial Recognition:**
1. First, measure the liability component at fair value (present value of future cash flows)
2. The equity component is the residual (total proceeds minus liability component)

**Answer: Option C** - Must be split between liability and equity components.`,
    whereWentWrong: {
      0: "The bond has a liability component. It cannot be entirely equity.",
      1: "The conversion option is an equity component that must be separated.",
      3: "Compound instruments must be split, not recognized at cost."
    }
  },
  {
    id: 3,
    examSession: "May 2024",
    topic: "Revenue Recognition",
    difficulty: "Medium",
    marks: 2,
    indAsReference: "Ind AS 115",
    question: "When should revenue be recognized under Ind AS 115?",
    options: [
      "When cash is received",
      "When a contract is signed",
      "When control of goods or services is transferred to the customer",
      "When invoice is raised"
    ],
    correctAnswer: 2,
    explanation: `**Ind AS 115 - Revenue from Contracts with Customers:**

Revenue is recognized when (or as) an entity transfers **control** of goods or services to a customer.

**Five-Step Model:**
1. Identify the contract
2. Identify performance obligations
3. Determine transaction price
4. Allocate price to obligations
5. Recognize revenue when control transfers

**Answer: Option C** - Revenue recognition is based on transfer of control, not cash receipt or invoicing.`,
    whereWentWrong: {
      0: "Revenue recognition follows accrual basis, not cash basis.",
      1: "Contract signing alone doesn't transfer control.",
      3: "Invoicing is a billing event, not a revenue recognition event."
    }
  },
  {
    id: 4,
    examSession: "May 2024",
    topic: "Leases",
    difficulty: "Medium",
    marks: 2,
    indAsReference: "Ind AS 116",
    question: "Under Ind AS 116, what is the key change from the previous lease accounting standard?",
    options: [
      "Operating leases are no longer recognized",
      "Lessees must recognize right-of-use asset and lease liability for most leases",
      "Only finance leases are recognized",
      "Lease term must be exactly 12 months"
    ],
    correctAnswer: 1,
    explanation: `**Ind AS 116 - Leases:**

**Key Change:** Ind AS 116 eliminates the distinction between operating and finance leases for **lessees**.

**Lessee Accounting:**
- Recognize a **right-of-use (ROU) asset** and **lease liability** for most leases
- Exception: Short-term leases (≤12 months) and low-value assets can be expensed

**Lessor Accounting:** Remains largely unchanged (operating vs finance lease distinction retained)

**Answer: Option B** - Lessees now recognize ROU asset and liability for most leases.`,
    whereWentWrong: {
      0: "Operating leases are still recognized, but now on-balance sheet for lessees.",
      2: "The distinction is eliminated for lessees, not just finance leases.",
      3: "12 months is the threshold for short-term lease exception, not a requirement."
    }
  },
  {
    id: 5,
    examSession: "Nov 2024",
    topic: "Employee Benefits",
    difficulty: "Hard",
    marks: 2,
    indAsReference: "Ind AS 19",
    question: "How should defined benefit plan obligations be measured under Ind AS 19?",
    options: [
      "At historical cost",
      "Using projected unit credit method",
      "At market value",
      "At nominal value"
    ],
    correctAnswer: 1,
    explanation: `**Ind AS 19 - Employee Benefits:**

**Defined Benefit Plans** require actuarial valuation using the **Projected Unit Credit Method**.

**Key Components:**
- **Present value of defined benefit obligation** (PV of DBO)
- **Fair value of plan assets**
- **Net defined benefit liability/asset** = PV of DBO - Fair value of plan assets

**Projected Unit Credit Method:**
- Attributes benefit to years of service
- Uses actuarial assumptions (discount rate, salary growth, mortality, etc.)
- Recognizes service cost, interest cost, and remeasurements

**Answer: Option B** - Defined benefit obligations are measured using projected unit credit method.`,
    whereWentWrong: {
      0: "Historical cost is not appropriate for future obligations.",
      2: "Market value applies to plan assets, not the obligation itself.",
      3: "Obligations must be discounted to present value, not nominal."
    }
  },
  {
    id: 6,
    examSession: "May 2024",
    topic: "Ind AS 101",
    difficulty: "Medium",
    marks: 2,
    indAsReference: "Ind AS 101",
    question: "What is the purpose of Ind AS 101 - First-time Adoption of Indian Accounting Standards?",
    options: [
      "To provide guidance on transition from Indian GAAP to Ind AS",
      "To establish new accounting standards",
      "To replace all existing standards",
      "To provide industry-specific guidance"
    ],
    correctAnswer: 0,
    explanation: `**Ind AS 101 - First-time Adoption of Indian Accounting Standards:**

Ind AS 101 provides guidance for entities **first-time adopting** Ind AS.

**Key Provisions:**
- Establishes **opening Ind AS balance sheet**
- Provides **mandatory exceptions** and **optional exemptions**
- Sets **retrospective application** requirements
- Addresses **transitional provisions**

**Answer: Option A** - Ind AS 101 guides the transition from Indian GAAP to Ind AS.`,
    whereWentWrong: {
      1: "Ind AS 101 doesn't establish new standards, it guides adoption.",
      2: "It doesn't replace standards, it facilitates transition.",
      3: "It's not industry-specific, it applies to all first-time adopters."
    }
  },
  {
    id: 7,
    examSession: "Nov 2024",
    topic: "Impairment",
    difficulty: "Hard",
    marks: 2,
    indAsReference: "Ind AS 36",
    question: "Under Ind AS 36, when should an entity test an asset for impairment?",
    options: [
      "Only at the end of each reporting period",
      "When there are indicators of impairment, or annually for goodwill and intangible assets with indefinite lives",
      "Only when the asset's market value decreases",
      "Never, as impairment is not recognized under Ind AS"
    ],
    correctAnswer: 1,
    explanation: `**Ind AS 36 - Impairment of Assets:**

**Impairment Testing Requirements:**

1. **At each reporting date:** Assess whether there are indicators of impairment
2. **Annual testing required for:**
   - Goodwill
   - Intangible assets with indefinite useful lives
   - Intangible assets not yet available for use

**Impairment Indicators:**
- External: Market value decline, adverse changes, interest rate increases
- Internal: Obsolescence, physical damage, worse performance than expected

**Answer: Option B** - Test when indicators exist, or annually for goodwill and indefinite-life intangibles.`,
    whereWentWrong: {
      0: "Testing is required when indicators exist, not just at period end.",
      2: "Market value decline is one indicator, but not the only trigger.",
      3: "Impairment is recognized under Ind AS 36."
    }
  },
  {
    id: 8,
    examSession: "May 2024",
    topic: "Business Combinations",
    difficulty: "Hard",
    marks: 2,
    indAsReference: "Ind AS 103",
    question: "Under Ind AS 103, how should goodwill be calculated in a business combination?",
    options: [
      "As the excess of purchase consideration over book value of net assets",
      "As the excess of purchase consideration over fair value of identifiable net assets acquired",
      "As the purchase consideration itself",
      "Goodwill is not recognized under Ind AS 103"
    ],
    correctAnswer: 1,
    explanation: `**Ind AS 103 - Business Combinations:**

**Goodwill Calculation:**

Goodwill = **Purchase Consideration** - **Fair Value of Identifiable Net Assets Acquired**

**Key Points:**
- Purchase consideration includes fair value of assets given, liabilities assumed, and equity instruments issued
- Identifiable assets and liabilities must be measured at **fair value** (not book value)
- Only **identifiable** assets are included (excludes internally generated goodwill)

**Answer: Option B** - Goodwill is excess of consideration over fair value of identifiable net assets.`,
    whereWentWrong: {
      0: "Must use fair value, not book value, of net assets.",
      2: "Goodwill is the excess, not the full consideration.",
      3: "Goodwill is recognized and measured under Ind AS 103."
    }
  }
];

// Financial Reporting Long Answer Questions Data
export const frLongAnswerQuestions = [
  {
    id: 1,
    examSession: "Nov 2024",
    topic: "Consolidation",
    marks: 8,
    question: `Parent Ltd. acquired 80% of Subsidiary Ltd. on 1st April 2023 for ₹8,00,000. The fair value of net assets of Subsidiary Ltd. on that date was ₹9,00,000. The carrying amount of net assets was ₹7,50,000.

You are required to:
(i) Calculate goodwill or gain on bargain purchase
(ii) Prepare consolidation adjustments for the year ended 31st March 2024
(iii) Explain the treatment of non-controlling interest`,
    modelAnswer: `**SOLUTION: CONSOLIDATION ACCOUNTING**

---

**PART (i): Goodwill Calculation**

**Purchase Consideration:** ₹8,00,000
**Fair Value of Net Assets Acquired (80%):** ₹9,00,000 × 80% = ₹7,20,000

**Goodwill:** ₹8,00,000 - ₹7,20,000 = **₹80,000**

*Note: Goodwill is calculated based on parent's share only under Ind AS 110.*

---

**PART (ii): Consolidation Adjustments**

**1. Eliminate Investment in Subsidiary:**
   Dr. Share Capital (Subsidiary) - 80%
   Dr. Retained Earnings (Subsidiary) - 80%
   Cr. Investment in Subsidiary    ₹8,00,000

**2. Recognize Non-Controlling Interest:**
   Dr. Share Capital (Subsidiary) - 20%
   Dr. Retained Earnings (Subsidiary) - 20%
   Cr. Non-Controlling Interest    ₹1,80,000
   (20% of ₹9,00,000)

**3. Recognize Goodwill:**
   Dr. Goodwill    ₹80,000
   Cr. Investment in Subsidiary    ₹80,000

**4. Eliminate Inter-company Transactions:**
   - Eliminate inter-company sales/purchases
   - Eliminate inter-company receivables/payables
   - Eliminate unrealized profits in inventory

---

**PART (iii): Non-Controlling Interest Treatment**

**Initial Recognition:**
- NCI is recognized at fair value of 20% of net assets = ₹1,80,000
- Shown separately in equity section of consolidated balance sheet

**Subsequent Measurement:**
- NCI share of profit/loss is deducted from consolidated profit
- NCI share of other comprehensive income is shown separately
- NCI is adjusted for share of dividends paid

**Presentation:**
- Shown as separate line item in equity
- Not as a liability`,
    workingNotes: `**WORKING NOTES:**

1. **Fair Value vs Carrying Amount:**
   - Fair value of net assets: ₹9,00,000
   - Carrying amount: ₹7,50,000
   - Difference of ₹1,50,000 represents fair value adjustments

2. **Goodwill Calculation Method:**
   - Under Ind AS 110, goodwill is calculated on parent's share only
   - Alternative method (full goodwill) is not used here

3. **Non-Controlling Interest:**
   - 20% of fair value of net assets = ₹1,80,000
   - This represents the NCI's share at acquisition date

4. **Consolidation Principles:**
   - All inter-company balances must be eliminated
   - Only external transactions remain in consolidated statements
   - Unrealized profits must be eliminated`,
    rubric: [
      {
        description: "Calculation of goodwill/gain on bargain purchase",
        maxScore: 2,
        criterion: "Correct calculation using purchase consideration and fair value of net assets acquired"
      },
      {
        description: "Consolidation adjustment entries",
        maxScore: 3,
        criterion: "Proper elimination of investment, recognition of NCI, and goodwill"
      },
      {
        description: "Treatment and presentation of non-controlling interest",
        maxScore: 2,
        criterion: "Correct explanation of NCI recognition, measurement, and presentation"
      },
      {
        description: "Presentation and structure",
        maxScore: 1,
        criterion: "Clear structure, proper formatting, and professional presentation"
      }
    ]
  },
  {
    id: 2,
    examSession: "May 2024",
    topic: "Revenue Recognition",
    marks: 10,
    question: `ABC Ltd. enters into a contract with a customer on 1st January 2024 to deliver:
- Product A: ₹5,00,000 (standalone selling price ₹4,50,000)
- Product B: ₹3,00,000 (standalone selling price ₹3,50,000)
- Installation service: ₹2,00,000 (standalone selling price ₹2,00,000)

Total contract price: ₹10,00,000

Product A is delivered on 1st February 2024, Product B on 1st March 2024, and installation is completed on 1st April 2024.

You are required to:
(i) Identify the performance obligations
(ii) Allocate the transaction price to each performance obligation
(iii) Determine when revenue should be recognized for each obligation`,
    modelAnswer: `**SOLUTION: REVENUE RECOGNITION UNDER IND AS 115**

---

**PART (i): Identification of Performance Obligations**

Under Ind AS 115, a performance obligation is a promise to transfer a good or service that is distinct.

**Analysis:**
1. **Product A** - Distinct (can be sold separately)
2. **Product B** - Distinct (can be sold separately)
3. **Installation Service** - Distinct (can be provided separately)

**Conclusion:** There are **three separate performance obligations** as each item is capable of being distinct and separately identifiable.

---

**PART (ii): Allocation of Transaction Price**

**Step 1: Determine Standalone Selling Prices**
- Product A: ₹4,50,000
- Product B: ₹3,50,000
- Installation: ₹2,00,000
- **Total:** ₹10,00,000

**Step 2: Allocate Transaction Price Proportionally**

**Allocation Ratio:**
- Product A: 4,50,000 / 10,00,000 = 45%
- Product B: 3,50,000 / 10,00,000 = 35%
- Installation: 2,00,000 / 10,00,000 = 20%

**Allocated Transaction Price:**
- Product A: ₹10,00,000 × 45% = **₹4,50,000**
- Product B: ₹10,00,000 × 35% = **₹3,50,000**
- Installation: ₹10,00,000 × 20% = **₹2,00,000**

---

**PART (iii): Revenue Recognition Timing**

Revenue is recognized when (or as) control of goods/services is transferred to the customer.

**Product A:**
- Control transferred: 1st February 2024
- **Revenue recognized: ₹4,50,000 on 1st February 2024**

**Product B:**
- Control transferred: 1st March 2024
- **Revenue recognized: ₹3,50,000 on 1st March 2024**

**Installation Service:**
- Control transferred: 1st April 2024
- **Revenue recognized: ₹2,00,000 on 1st April 2024**

**Total Revenue:** ₹10,00,000 (recognized over three months)`,
    workingNotes: `**WORKING NOTES:**

1. **Performance Obligation Identification:**
   - Each product and service is capable of being distinct
   - Customer can benefit from each item on its own
   - Installation is not highly dependent on products

2. **Price Allocation Method:**
   - Standalone selling price method is used
   - This is the most reliable method when standalone prices are available
   - Alternative: Expected cost plus margin method (if standalone prices unavailable)

3. **Revenue Recognition Principle:**
   - Point in time recognition for products (control transfers on delivery)
   - Point in time recognition for installation (control transfers on completion)
   - No over time recognition needed as each obligation is satisfied at a point in time

4. **Contract Considerations:**
   - Total contract price equals sum of standalone prices
   - No discount allocation needed
   - Each performance obligation is satisfied independently`,
    rubric: [
      {
        description: "Identification of performance obligations",
        maxScore: 3,
        criterion: "Correct identification of distinct performance obligations with proper reasoning"
      },
      {
        description: "Allocation of transaction price",
        maxScore: 4,
        criterion: "Correct calculation using standalone selling price method with proper allocation"
      },
      {
        description: "Revenue recognition timing",
        maxScore: 2,
        criterion: "Correct determination of when control transfers and revenue is recognized"
      },
      {
        description: "Presentation and clarity",
        maxScore: 1,
        criterion: "Clear structure, proper formatting, and professional presentation"
      }
    ]
  }
];










