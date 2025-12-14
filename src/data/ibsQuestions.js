// CA Final - Integrated Business Solutions (Paper 6) Questions
// May 2024 & November 2024 Exam Sessions

export const mcqQuestions = [
    // ============ MAY 2024 QUESTIONS ============
    {
      id: 1,
      examSession: "May 2024",
      caseStudy: "KLM Private Ltd., Jaipur",
      topic: "GST & Customs",
      difficulty: "Medium",
      marks: 2,
      caseContext: `KLM Private Ltd., Jaipur is a wholly owned subsidiary of MNO Ltd., Mumbai. KLM is engaged in manufacture of textile goods and beverages. The GST return of KLM for the financial year 2020-21 contained some fake/false figures regarding inward supply and consequent input tax credit availed in respect of inter-state transactions. Penalty proceedings were also initiated against the GST consultant A & Co (firm) who has filed the GST returns of KLM, on a charge of abetment and aiding for filing false return.`,
      question: "How much could be the maximum penalty levied on the GST consultant A & Co for aiding and abatement in furnishing of the GST return with fake/false information?",
      options: [
        "No penalty is leviable on CA firm",
        "₹ 50,000 under IGST",
        "₹ 25,000 under CGST and ₹ 25,000 under SGST/UTGST",
        "₹ 50,000 under CGST and ₹ 50,000 under SGST/UTGST"
      ],
      correctAnswer: 1,
      explanation: `**Section 122(3) of CGST Act, 2017** provides for penalty on persons who aid or abet any offence under the Act.
  
  **Relevant Provision:**
  Any person who aids or abets any of the offences specified in clauses (i) to (xxi) of sub-section (1) shall be liable to a penalty which may extend to ₹ 25,000.
  
  **Analysis:**
  | Particulars | Amount |
  |-------------|--------|
  | Penalty under CGST Act | Up to ₹ 25,000 |
  | Penalty under SGST Act | Up to ₹ 25,000 |
  | **For Inter-state transactions (IGST)** | **Up to ₹ 50,000** |
  
  Since the transactions were inter-state in nature, IGST provisions apply. Under Section 20 of IGST Act, the provisions of CGST Act apply mutatis mutandis to IGST matters.
  
  **Key Principle:** For inter-state transactions involving fake/false information, the penalty under IGST can extend up to ₹ 50,000.`,
      whereWentWrong: {
        0: "Penalty is indeed leviable on professionals who aid or abet in filing false returns. Section 122(3) specifically covers this.",
        2: "This would apply for intra-state transactions. Since the case involves inter-state transactions, IGST provisions apply.",
        3: "This is double the correct amount. The maximum penalty under IGST is ₹ 50,000, not ₹ 1,00,000."
      }
    },
    {
      id: 2,
      examSession: "May 2024",
      caseStudy: "KLM Private Ltd., Jaipur",
      topic: "Strategic Financial Management",
      difficulty: "Medium",
      marks: 2,
      caseContext: `KLM proposes to invest ₹ 500 lakhs in a new project in FY 2024-25. The risk-free rate of return is 7%. The risk premium expected by the management is 7%. The life of the project is 5 years. The estimated cash flows over the life of the project are: Year 1 = ₹ 120 lakhs; Year 2 = ₹ 180 lakhs; Year 3 = ₹ 300 lakhs; Year 4 = ₹ 210 lakhs; Year 5 = ₹ 130 lakhs. Present Value of ₹ 1 @ 14%: Year 1: 0.877, Year 2: 0.769, Year 3: 0.675, Year 4: 0.592, Year 5: 0.519.`,
      question: "What is the net present value of the proposed project of KLM adopting risk adjusted rate to consider the new proposal in financial year 2024-25?",
      options: [
        "₹ 637.95 lakhs",
        "₹ 121.70 lakhs",
        "₹ 137.95 lakhs",
        "₹ 440.00 lakhs"
      ],
      correctAnswer: 2,
      explanation: `**Risk Adjusted Discount Rate (RADR) Method**
  
  **Step 1: Calculate Risk Adjusted Discount Rate**
  | Component | Rate |
  |-----------|------|
  | Risk-free rate | 7% |
  | Risk premium | 7% |
  | **RADR** | **14%** |
  
  **Step 2: Calculate Present Value of Cash Flows**
  | Year | Cash Flow (₹ lakhs) | PV Factor @14% | Present Value (₹ lakhs) |
  |------|---------------------|----------------|------------------------|
  | 1 | 120 | 0.877 | 105.24 |
  | 2 | 180 | 0.769 | 138.42 |
  | 3 | 300 | 0.675 | 202.50 |
  | 4 | 210 | 0.592 | 124.32 |
  | 5 | 130 | 0.519 | 67.47 |
  | **Total PV of Inflows** | | | **637.95** |
  
  **Step 3: Calculate NPV**
  | Particulars | Amount (₹ lakhs) |
  |-------------|------------------|
  | PV of Cash Inflows | 637.95 |
  | Less: Initial Investment | 500.00 |
  | **Net Present Value** | **137.95** |
  
  **Key Principle:** RADR incorporates risk by adjusting the discount rate upward for riskier projects.`,
      whereWentWrong: {
        0: "This is the total PV of inflows (₹ 637.95 lakhs), not the NPV. You forgot to subtract the initial investment of ₹ 500 lakhs.",
        1: "Check your PV calculations. Ensure you're using the correct PV factors for each year.",
        3: "This seems to be an arbitrary figure. Review the step-by-step calculation above."
      }
    },
    {
      id: 3,
      examSession: "May 2024",
      caseStudy: "KLM Private Ltd., Jaipur",
      topic: "Direct Tax",
      difficulty: "Hard",
      marks: 2,
      caseContext: `KLM placed order for 2 passenger vehicles (vans) for ₹ 25 lakhs each with seating capacity of each vehicle being 16 persons (excluding driver). It paid ₹ 50 lakhs plus GST @28%. It used one passenger vehicle (van) from 1st December 2023 for bringing its staff from their home to factory and for dropping them back. It donated another passenger vehicle (van) to Mother Charitable Trust. KLM acquired on 5th July 2023, one fork-lift truck for transport of textile goods inside the factory premises for ₹ 20 lakhs (excluding GST @18%).`,
      question: "How much depreciation and additional depreciation under Income-tax Act, 1961 would be allowed to KLM in respect of passenger vehicles and fork-lift truck acquired during the financial year 2023-24?",
      options: [
        "₹ 4,87,500",
        "₹ 6,75,000",
        "₹ 8,87,500",
        "₹ 10,75,000"
      ],
      correctAnswer: 2,
      explanation: `**Depreciation Calculation under Income-tax Act, 1961**
  
  **Analysis of Assets:**
  
  | Asset | Cost | Depreciation Rate | Additional Dep. | Eligibility |
  |-------|------|-------------------|-----------------|-------------|
  | Van for staff transport | ₹ 25 lakhs | 15% | Not eligible | Used < 180 days |
  | Van donated | - | - | - | Not used in business |
  | Fork-lift truck | ₹ 20 lakhs | 15% | 20% | Manufacturing asset |
  
  **Calculation:**
  
  **1. Passenger Vehicle (Van for staff transport):**
  - Put to use from 1st December 2023 (less than 180 days in FY 2023-24)
  - Depreciation = ₹ 25,00,000 × 15% × 50% = ₹ 1,87,500
  
  **2. Van donated to Trust:**
  - Not used for business purposes
  - No depreciation allowed
  
  **3. Fork-lift Truck:**
  - Used for more than 180 days
  - Normal Depreciation = ₹ 20,00,000 × 15% = ₹ 3,00,000
  - Additional Depreciation = ₹ 20,00,000 × 20% = ₹ 4,00,000
  - Total = ₹ 7,00,000
  
  **Total Depreciation:**
  | Component | Amount |
  |-----------|--------|
  | Van (staff transport) | ₹ 1,87,500 |
  | Fork-lift (Normal + Additional) | ₹ 7,00,000 |
  | **Total** | **₹ 8,87,500** |`,
      whereWentWrong: {
        0: "You may have missed the additional depreciation on fork-lift truck or calculated only half-year depreciation on it.",
        1: "Check if you've included additional depreciation on the fork-lift truck which is used in manufacturing.",
        3: "You may have calculated depreciation on both vans. The donated van doesn't qualify for depreciation."
      }
    },
    {
      id: 4,
      examSession: "May 2024",
      caseStudy: "KLM Private Ltd., Jaipur",
      topic: "GST & Customs",
      difficulty: "Hard",
      marks: 2,
      caseContext: `KLM placed order for 2 passenger vehicles (vans) for ₹ 25 lakhs each with seating capacity of each vehicle being 16 persons (excluding driver). It paid ₹ 50 lakhs plus GST @28%. It used one passenger vehicle (van) from 1st December 2023 for bringing its staff from their home to factory and for dropping them back. It donated another passenger vehicle (van) to Mother Charitable Trust. KLM acquired on 5th July 2023, one fork-lift truck for transport of textile goods inside the factory premises for ₹ 20 lakhs (excluding GST @18%).`,
      question: "How much of GST input tax credit will be available to KLM in respect of passenger vehicles and fork-lift truck acquired by it during the financial year 2023-24?",
      options: [
        "₹ 17,60,000",
        "₹ 10,60,000",
        "₹ 7,00,000",
        "₹ 3,60,000"
      ],
      correctAnswer: 1,
      explanation: `**ITC Eligibility Analysis under Section 17(5) of CGST Act**
  
  **Section 17(5)(a) - Blocked Credit:**
  ITC on motor vehicles with seating capacity ≤ 13 persons (excluding driver) is blocked.
  
  **Exception:** ITC is allowed when such vehicles are used for:
  - Transportation of passengers
  - Transportation of goods
  - Imparting training on driving such vehicles
  
  **Analysis:**
  | Asset | GST Paid | ITC Available | Reason |
  |-------|----------|---------------|--------|
  | Van 1 (Staff transport) | ₹ 7,00,000 | ₹ 7,00,000 | Seating > 13 persons, used for passenger transport |
  | Van 2 (Donated) | ₹ 7,00,000 | Nil | Not used in business |
  | Fork-lift truck | ₹ 3,60,000 | ₹ 3,60,000 | Used for goods transport within factory |
  
  **Total ITC Available:**
  | Asset | ITC Amount |
  |-------|------------|
  | Van for staff transport (28% of ₹ 25L) | ₹ 7,00,000 |
  | Fork-lift truck (18% of ₹ 20L) | ₹ 3,60,000 |
  | **Total ITC Available** | **₹ 10,60,000** |`,
      whereWentWrong: {
        0: "This includes GST on both vans and fork-lift. The donated van doesn't qualify for ITC as it's not used in business.",
        2: "This is only the ITC on vans. You've missed the fork-lift truck ITC of ₹ 3,60,000.",
        3: "This is only the fork-lift ITC. The van used for staff transport also qualifies for ITC."
      }
    },
    {
      id: 5,
      examSession: "May 2024",
      caseStudy: "KLM Private Ltd., Jaipur",
      topic: "Financial Reporting",
      difficulty: "Easy",
      marks: 2,
      caseContext: `KLM changed its inventory cost formula for the year ended 31st March 2024. The change resulted in understatement of inventory by ₹ 50 lakhs.`,
      question: "What would you say when KLM has changed its inventory cost formula?",
      options: [
        "Change in accounting estimate",
        "Change in accounting policy",
        "Neither a change in accounting estimate nor a change in accounting policy",
        "Change in method of accounting"
      ],
      correctAnswer: 1,
      explanation: `**Ind AS 8 - Accounting Policies, Changes in Accounting Estimates and Errors**
  
  **Definition of Accounting Policy:**
  Accounting policies are the specific principles, bases, conventions, rules and practices applied by an entity in preparing and presenting financial statements.
  
  **Analysis:**
  
  | Aspect | Classification |
  |--------|----------------|
  | Inventory cost formula | Accounting Policy |
  | Examples: FIFO, Weighted Average | Methods/Policies |
  | Nature of change | **Change in Accounting Policy** |
  
  **Ind AS 2 Requirement:**
  Para 25 of Ind AS 2 requires that the cost of inventories shall be assigned by using First-In-First-Out (FIFO) or Weighted Average Cost formula.
  
  **Key Distinction:**
  - **Accounting Policy:** Choice of inventory cost formula (FIFO vs Weighted Average)
  - **Accounting Estimate:** Estimation of NRV, obsolescence provision
  
  **Conclusion:** Change in inventory cost formula is a change in accounting policy and requires retrospective application as per Ind AS 8.`,
      whereWentWrong: {
        0: "Accounting estimates involve judgments about uncertain items like provisions, depreciation life. Cost formula is a policy choice, not estimation.",
        2: "The change clearly falls into one of these categories. Changing the cost formula is definitively a policy change.",
        3: "While this sounds similar, 'method of accounting' is not a defined term under Ind AS. The correct term is 'accounting policy'."
      }
    },
    {
      id: 6,
      examSession: "May 2024",
      caseStudy: "Manju Agri Products Limited",
      topic: "FEMA & IBC",
      difficulty: "Medium",
      marks: 2,
      caseContext: `Joey, a foreign citizen, is Manju's friend and has been her MBA classmate in University of Stanford. Joey has visited Manju's village when he had come to India for a friend's wedding. Since Joey is meeting his friend Manju, after a decade, he has gifted her a smart watch having a value of ₹ 75,000. Manju wants to confirm whether she can take such gift for her personal purposes without violating the provisions of Foreign Contribution (Regulation) Act, 2010.`,
      question: "As per provisions of Foreign Contribution (Regulation) Act, 2010, when shall a gift in kind by a foreign citizen to a resident Indian be excluded from the definition of 'foreign contribution'?",
      options: [
        "If the market value is more than ₹ 1,00,000 but less than ₹ 5,00,000",
        "If the market value is more than ₹ 5,00,000 but less than ₹ 10,00,000",
        "Any donation in kind given by a foreign citizen to a resident Indian for personal use is always excluded",
        "If the market value, on the date of such gift, is not more than ₹ 1,00,000"
      ],
      correctAnswer: 3,
      explanation: `**Section 2(1)(h) of Foreign Contribution (Regulation) Act, 2010**
  
  **Exclusion under Section 2(1)(h)(vi):**
  A donation in kind made by a foreign citizen to a resident Indian for personal use shall be excluded from the definition of 'foreign contribution' if the market value, in India, of such article, on the date of such gift, is **not more than ₹ 1,00,000**.
  
  **Application to Case:**
  | Particulars | Details |
  |-------------|---------|
  | Gift | Smart Watch |
  | Value | ₹ 75,000 |
  | Threshold | ₹ 1,00,000 |
  | Status | **Below threshold - Excluded** |
  
  **Conclusion:**
  Since the gift value (₹ 75,000) is less than ₹ 1,00,000, Manju can accept this gift without violating FCRA provisions.`,
      whereWentWrong: {
        0: "The exclusion applies when value is NOT MORE than ₹ 1,00,000, not when it's between ₹ 1-5 lakhs.",
        1: "This range is incorrect. The threshold is ₹ 1,00,000, not ₹ 5,00,000.",
        2: "Not all gifts are excluded. There's a monetary threshold of ₹ 1,00,000 that must be satisfied."
      }
    },
    {
      id: 7,
      examSession: "May 2024",
      caseStudy: "Manju Agri Products Limited",
      topic: "GST & Customs",
      difficulty: "Medium",
      marks: 2,
      caseContext: `During the financial year 2023-24, MAPL sponsored a sports event for farmers by Jnaneshwar Shramik Club in Bellary. Jnaneshwar Shramik Club was established in the year 1995 for protecting and promoting the rights of farmers. The Company paid an amount of ₹ 25 lakhs for such sponsorship of the event.`,
      question: "Which of the following statement is correct, in connection with the payment made by MAPL for the sponsorship of the event?",
      options: [
        "GST shall be payable by MAPL, a body corporate, being the recipient of the sponsorship service, under the reverse charge mechanism",
        "GST shall be payable by the Club, being the supplier of sponsorship service",
        "GST is not leviable on the sponsorship service of the sports event",
        "GST liability is payable by the recipient only if the recipient is not a body corporate"
      ],
      correctAnswer: 0,
      explanation: `**Reverse Charge on Sponsorship Services - Notification No. 13/2017-CT(R)**
  
  **Applicable Provision:**
  As per Entry 4 of Notification No. 13/2017-Central Tax (Rate), services provided by way of sponsorship to any body corporate or partnership firm are liable to GST under reverse charge mechanism.
  
  **Analysis:**
  | Aspect | Details |
  |--------|---------|
  | Service Provider | Jnaneshwar Shramik Club |
  | Service | Sponsorship of sports event |
  | Service Recipient | MAPL (Body Corporate) |
  | RCM Applicable? | **Yes** |
  
  **GST Liability:**
  | Particulars | Responsibility |
  |-------------|----------------|
  | Person liable to pay GST | MAPL (Recipient) |
  | Mechanism | Reverse Charge Mechanism |
  | Reason | MAPL is a body corporate |
  
  **Key Principle:** Sponsorship services received by a body corporate or partnership firm are always under reverse charge.`,
      whereWentWrong: {
        1: "Under RCM for sponsorship services to body corporates, the recipient (MAPL) pays GST, not the supplier (Club).",
        2: "Sponsorship services are taxable under GST. They're not exempt.",
        3: "This is the opposite. RCM applies specifically WHEN the recipient IS a body corporate."
      }
    },
    {
      id: 8,
      examSession: "May 2024",
      caseStudy: "Manju Agri Products Limited",
      topic: "GST & Customs",
      difficulty: "Medium",
      marks: 2,
      caseContext: `MAPL wants to purchase millet processing machinery from KPL Limited. Government grant of ₹ 10 lakhs was received. List price of machinery (exclusive of taxes and discount): ₹ 50,00,000. Corrugated Boxes used for packing the equipment (not included in price above): ₹ 1,00,000. Discount offered on the list price of the machine (recorded in the invoice): @2%.`,
      question: "What should be the value of supply for KPL Limited for the machinery supplied to MAPL?",
      options: [
        "₹ 51,00,000",
        "₹ 40,00,000",
        "₹ 50,00,000",
        "₹ 49,00,000"
      ],
      correctAnswer: 2,
      explanation: `**Section 15 of CGST Act - Value of Taxable Supply**
  
  **Inclusions in Transaction Value:**
  - Any amount that the supplier is liable to pay but has been incurred by the recipient
  - Incidental expenses such as packing
  
  **Exclusions from Transaction Value:**
  - Discount given before or at the time of supply (if recorded in invoice)
  - Subsidies from government (not directly linked to price)
  
  **Analysis:**
  The value of supply = ₹ 50,00,000 (List price for GST purposes).
  
  Government subsidies not directly linked to price are not part of transaction value.`,
      whereWentWrong: {
        0: "You may have added packing charges. Since packing is done by MAPL (buyer), it's not part of KPL's supply value.",
        1: "This seems to be an arbitrary calculation. Review the components carefully.",
        3: "This deducts the 2% discount. For supply value purposes, we consider the list price."
      }
    },
    {
      id: 9,
      examSession: "May 2024",
      caseStudy: "Manju Agri Products Limited",
      topic: "Financial Reporting",
      difficulty: "Hard",
      marks: 2,
      caseContext: `MAPL has executed a 12 years lease of a machine with XYZ Ltd. (lessor). Lease commencement date is 1st February 2023. MAPL must pay the first monthly rental payment of ₹ 25,000 upon execution of the lease. XYZ Ltd. will pay MAPL ₹ 75,000 cash incentive to enter into the lease payable upon lease execution. MAPL incurred ₹ 2,000 of initial direct costs, payable on 1st February 2023. MAPL calculated the initial lease liability of ₹ 10,00,000 as the present value of the future lease payments.`,
      question: "The amount of initial measurement of right of use asset by MAPL will be:",
      options: [
        "₹ 9,52,000",
        "₹ 9,50,000",
        "₹ 10,27,000",
        "₹ 10,25,000"
      ],
      correctAnswer: 0,
      explanation: `**Ind AS 116 - Initial Measurement of Right-of-Use Asset**
  
  **Components of ROU Asset (Para 24):**
  1. Initial lease liability
  2. Lease payments made at or before commencement date
  3. Initial direct costs incurred by lessee
  4. Less: Lease incentives received
  
  **Calculation:**
  | Component | Amount (₹) |
  |-----------|------------|
  | Initial lease liability | 10,00,000 |
  | Add: Advance rent paid | 25,000 |
  | Add: Initial direct costs | 2,000 |
  | Less: Lease incentive received | (75,000) |
  | **Right-of-Use Asset** | **9,52,000** |`,
      whereWentWrong: {
        1: "Close, but you've missed the initial direct costs of ₹ 2,000.",
        2: "You may have added the incentive instead of deducting it. Lease incentives reduce the ROU asset cost.",
        3: "Check if you've correctly treated all components - incentive should be deducted, not added."
      }
    },
    {
      id: 10,
      examSession: "May 2024",
      caseStudy: "Manju Agri Products Limited",
      topic: "Financial Reporting",
      difficulty: "Hard",
      marks: 2,
      caseContext: `MAPL was evaluating the employee benefit related obligation funding for the current year:
  - Contribution by employer during the year: ₹ 95,000
  - Benefits paid during the year from the fund: ₹ 65,000
  - Fair value of Plan Assets at the beginning: ₹ 2,75,000
  - Return expected on Plan Assets: ₹ 35,000
  - Fair value of Plan Assets at the end: ₹ 4,00,000`,
      question: "What would be the amount required to be recognized in the 'Other Comprehensive Income' of the financial statements for the year ended on 31 March 2024, without considering the effect of deferred tax?",
      options: [
        "Actuarial gain - ₹ 60,000",
        "Actuarial loss - ₹ 5,000",
        "Actuarial gain - ₹ 95,000",
        "Nil, as all expenses/income relating to employee benefits are recognized in P&L"
      ],
      correctAnswer: 0,
      explanation: `**Ind AS 19 - Employee Benefits - Remeasurements in OCI**
  
  **Calculation of Expected vs Actual Plan Assets:**
  
  | Particulars | Amount (₹) |
  |-------------|------------|
  | Opening Fair Value of Plan Assets | 2,75,000 |
  | Add: Contribution by employer | 95,000 |
  | Add: Expected return on plan assets | 35,000 |
  | Less: Benefits paid | (65,000) |
  | **Expected Closing Fair Value** | **3,40,000** |
  
  | Particulars | Amount (₹) |
  |-------------|------------|
  | Actual Closing Fair Value | 4,00,000 |
  | Expected Closing Fair Value | 3,40,000 |
  | **Actuarial Gain** | **60,000** |
  
  **Key Principle:** The difference between actual return and expected return on plan assets is an actuarial gain/loss recognized in OCI.`,
      whereWentWrong: {
        1: "Recalculate: Actual (₹ 4,00,000) > Expected (₹ 3,40,000), so it's a gain, not a loss.",
        2: "₹ 95,000 is the employer's contribution, not the actuarial gain.",
        3: "Under Ind AS 19, actuarial gains/losses are specifically recognized in OCI, not P&L."
      }
    },
    {
      id: 11,
      examSession: "May 2024",
      caseStudy: "CA Practice Group Discussion",
      topic: "Financial Reporting",
      difficulty: "Easy",
      marks: 2,
      caseContext: `CA. Q pointed out that one of his clients has inventory of 200 finished cars on 31st March 2024 which are having a cost of ₹ 6,00,000 each. On 30th April 2024, as per new government rules, higher road tax and penalties are to be paid by the buyers for such cars and hence the selling price has come down to ₹ 4,50,000 each. The financial statements for year 2023-24 are not yet approved. The estimated costs necessary to make the sale is ₹ 25,000 per car.`,
      question: "At what amount should the client of CA. Q value its stock of cars based on the facts provided?",
      options: [
        "₹ 6,00,000",
        "₹ 4,50,000",
        "₹ 4,25,000",
        "₹ 5,75,000"
      ],
      correctAnswer: 2,
      explanation: `**Ind AS 2 - Inventories & Ind AS 10 - Events after Reporting Period**
  
  **Ind AS 2 - Para 9:**
  Inventories shall be measured at the **lower of cost and net realisable value (NRV)**.
  
  **Calculation of NRV:**
  | Particulars | Amount per car |
  |-------------|----------------|
  | Expected selling price | ₹ 4,50,000 |
  | Less: Costs to sell | (₹ 25,000) |
  | **Net Realisable Value** | **₹ 4,25,000** |
  
  **Valuation:**
  | Basis | Amount |
  |-------|--------|
  | Cost | ₹ 6,00,000 |
  | NRV | ₹ 4,25,000 |
  | **Lower of Cost & NRV** | **₹ 4,25,000** |`,
      whereWentWrong: {
        0: "Cost (₹ 6,00,000) exceeds NRV (₹ 4,25,000). Under Ind AS 2, inventory must be valued at lower of cost and NRV.",
        1: "This is the selling price, not NRV. You need to deduct selling costs of ₹ 25,000.",
        3: "This calculation (₹ 6L - ₹ 25K) is incorrect. We use NRV (selling price less selling costs), not cost less selling costs."
      }
    },
    {
      id: 12,
      examSession: "May 2024",
      caseStudy: "CA Practice Group Discussion",
      topic: "Auditing",
      difficulty: "Medium",
      marks: 2,
      caseContext: `CA. R is running a partnership firm 'CDR' in practice and develops a website "CDR.com". The colours chosen for the website were very bright and the website was to run on a "Push" technology where the names of the partners of the firm and the major clients were to be displayed on the website without any disclosure obligation from any regulator.`,
      question: "Is the website developed by CDR in compliance with guidelines issued by ICAI in this regard?",
      options: [
        "Yes, because there is no restriction for the development of website",
        "Yes, because it has complied all the conditions in this regard",
        "No, but CDR would not be liable for professional misconduct since it would not amount to soliciting work by advertisement",
        "No, CDR would be liable for professional misconduct since it would amount to soliciting work by advertisement"
      ],
      correctAnswer: 3,
      explanation: `**ICAI Guidelines on Websites for CA Firms**
  
  **Prohibited Content:**
  | Item | Status |
  |------|--------|
  | Display of client names | **Prohibited** |
  | Push technology | **Prohibited** |
  | Bright flashy colors | **Not recommended** |
  
  **Professional Misconduct:**
  As per Clause (6) of Part I of the First Schedule to the Chartered Accountants Act, 1949:
  "Soliciting clients or professional work either directly or indirectly by advertisement" constitutes professional misconduct.
  
  **Conclusion:**
  CDR is liable for professional misconduct as displaying client names and using push technology amounts to soliciting work through advertisement.`,
      whereWentWrong: {
        0: "There are clear restrictions on website content for CA firms as per ICAI guidelines.",
        1: "CDR has violated multiple guidelines - client names display and push technology are prohibited.",
        2: "Displaying client names and using push technology IS considered solicitation and amounts to professional misconduct."
      }
    },
    {
      id: 13,
      examSession: "May 2024",
      caseStudy: "CA Practice Group Discussion",
      topic: "GST & Customs",
      difficulty: "Hard",
      marks: 2,
      caseContext: `ABC is a registered supplier in Bhopal (MP) engaged in manufacture of taxable goods. Goods valued at ₹ 12,50,000 were supplied by ABC to FPL, a registered supplier at Indore (MP), without the cover of an invoice with a fraudulent intent. Since ABC evaded tax by not issuing invoice, a show cause notice was issued under section 74 requiring ABC to pay tax @ 12% (₹ 1,50,000) and applicable interest and penalty. ABC paid the tax, interest and penalty after the order was passed.`,
      question: "CA. S wishes to clarify whether FPL is entitled to ITC and if yes, what will be the amount thereof?",
      options: [
        "Yes, ₹ 1,50,000",
        "Yes, ₹ 1,50,000 and applicable interest",
        "Yes, ₹ 1,50,000 and applicable interest and penalty",
        "No, FPL cannot avail ITC of such tax"
      ],
      correctAnswer: 3,
      explanation: `**Section 16 of CGST Act - Conditions for ITC**
  
  **Section 16(2) requires ALL of the following conditions:**
  1. Possession of tax invoice/debit note
  2. Receipt of goods or services
  3. Tax actually paid to Government
  4. Filing of return under Section 39
  
  **Key Issue:**
  **No invoice was issued** for the supply. Without a valid tax invoice, FPL cannot claim ITC even though goods were received and tax was eventually paid by ABC.
  
  **Conclusion:**
  FPL cannot avail ITC as possession of tax invoice is not satisfied.`,
      whereWentWrong: {
        0: "ITC requires possession of tax invoice. Since no invoice was issued, ITC cannot be claimed.",
        1: "Same as above - no invoice means no ITC, regardless of interest payment.",
        2: "Penalty and interest paid by supplier don't entitle recipient to any additional ITC."
      }
    },
    {
      id: 14,
      examSession: "May 2024",
      caseStudy: "CA Practice Group Discussion",
      topic: "GST & Customs",
      difficulty: "Medium",
      marks: 2,
      caseContext: `In an order dated 20th December issued to SNPL, the Joint Commissioner, CGST has confirmed IGST demand of ₹ 20 crores. SNPL is disputing the entire demand. The Appellate Authority has confirmed the order of the Joint Commissioner and SNPL wants to file an appeal before the Appellate Tribunal against the order of the Appellate Authority.`,
      question: "What is the amount of additional pre-deposit to be made by SNPL for filing the second appeal?",
      options: [
        "₹ 32 crores",
        "₹ 64 crores",
        "₹ 96 crores",
        "₹ 100 crores"
      ],
      correctAnswer: 1,
      explanation: `**Section 112 of CGST Act - Appeal to Appellate Tribunal**
  
  **Pre-deposit Requirements:**
  
  **First Appeal (Section 107):**
  - 10% of disputed tax
  
  **Second Appeal (Section 112):**
  - Additional 20% of remaining disputed tax
  
  **Key Principle:** The pre-deposit for Tribunal appeal is an additional 20% of the disputed tax amount, subject to maximum caps.`,
      whereWentWrong: {
        0: "Check the calculation - pre-deposit percentage and disputed amount.",
        2: "This exceeds the maximum cap provisions.",
        3: "Review the percentage requirements for second appeal pre-deposit."
      }
    },
    {
      id: 15,
      examSession: "May 2024",
      caseStudy: "CA Practice Group Discussion",
      topic: "FEMA & IBC",
      difficulty: "Medium",
      marks: 2,
      caseContext: `CA. Q states that Rajan was appointed as Provisional Liquidator for ST Ltd. against which an application for winding up was filed before the Tribunal. It is noteworthy that Rajan was having a shareholding in the same company.`,
      question: "Which of the following is correct as per the Companies Act, 2013 for the issue regarding Rajan's appointment as liquidator?",
      options: [
        "Rajan cannot be appointed as he has shareholding in the company",
        "Rajan can be appointed irrespective of his interest due to prior shareholding",
        "Rajan can be appointed with prior intimation to the Tribunal",
        "Rajan can be appointed by disclosing his shareholding by filing declaration within 7 days from the date of appointment"
      ],
      correctAnswer: 3,
      explanation: `**Section 275 of Companies Act, 2013 - Qualification of Liquidator**
  
  **Section 275(3) provides:**
  A person having interest can be appointed if:
  1. He **discloses his interest** to the Tribunal
  2. Files a **declaration within 7 days** from the date of appointment
  
  **Conclusion:**
  Rajan can be appointed as liquidator provided he discloses his shareholding and files the required declaration within 7 days of appointment.`,
      whereWentWrong: {
        0: "Having shareholding doesn't automatically disqualify. The Act provides a remedy through disclosure.",
        1: "Prior shareholding still needs to be disclosed.",
        2: "It's not 'prior intimation' but disclosure through declaration within 7 days of appointment."
      }
    },
    // ============ NOVEMBER 2024 QUESTIONS ============
    {
      id: 16,
      examSession: "Nov 2024",
      caseStudy: "CVV & Co. - VCM Limited",
      topic: "Financial Reporting",
      difficulty: "Hard",
      marks: 2,
      caseContext: `A customer has instituted a lawsuit against VCM Limited with personal injury using the company's product. The company's lawyers estimate that as on 31.03.2024, the company has 35% chance of being ordered to pay compensation of ₹ 16,00,000 and a 65% chance of being ordered to pay compensation of ₹ 5,00,000. The ruling is expected by 31.03.2026. The risk-free rate on three years Government Bonds is 6%. Management estimates 7% as appropriate discount rate.`,
      question: "What is the amount of provision to be recognized in books of accounts as at 31st March, 2024 in respect of lawsuit filed against VCM Limited? (Take PV factor up to three decimals)",
      options: [
        "₹ 8,85,000",
        "₹ 8,27,475",
        "₹ 7,72,605",
        "₹ 7,87,650"
      ],
      correctAnswer: 2,
      explanation: `**Ind AS 37 - Provisions, Contingent Liabilities and Contingent Assets**
  
  **Step 1: Calculate Expected Value**
  | Outcome | Probability | Amount | Expected Value |
  |---------|-------------|--------|----------------|
  | High | 35% | ₹ 16,00,000 | ₹ 5,60,000 |
  | Low | 65% | ₹ 5,00,000 | ₹ 3,25,000 |
  | **Total** | | | **₹ 8,85,000** |
  
  **Step 2: Calculate Present Value**
  | Particulars | Calculation |
  |-------------|-------------|
  | Expected outflow | ₹ 8,85,000 |
  | Discount rate | 7% |
  | PV Factor @7% for 2 years | 0.873 |
  | **Present Value** | ₹ 8,85,000 × 0.873 = **₹ 7,72,605** |`,
      whereWentWrong: {
        0: "This is the expected value without discounting. Since payment is in 2 years, discounting is required.",
        1: "Check your PV factor. Using 7% for 2 years should give approximately 0.873.",
        3: "Verify your discount rate selection."
      }
    },
    {
      id: 17,
      examSession: "Nov 2024",
      caseStudy: "CVV & Co. - VCM Limited",
      topic: "Financial Reporting",
      difficulty: "Medium",
      marks: 2,
      caseContext: `To encourage entities to expand operations in a specified development zone, Local government has offered loan at concessional rate of 6%. On 1st April 2023, VCM Limited received a loan of ₹ 75,00,000 payable at the end of the 5th year. The prevailing market rate of interest is 10%. Interest is payable at the end of each year.`,
      question: "What is the amount of Government grant to be recognized in books of accounts as on 01.04.2023 in respect of concessional loan received from the local Government?",
      options: [
        "NIL as the facility is in the nature of Loan",
        "₹ 11,37,000",
        "₹ 28,42,500",
        "₹ 17,05,500"
      ],
      correctAnswer: 1,
      explanation: `**Ind AS 20 - Government Grants & Ind AS 109 - Financial Instruments**
  
  **Recognition of Below-Market Rate Loans:**
  The benefit of a government loan at below-market rate is treated as a government grant.
  
  **Calculation:**
  | Particulars | Amount |
  |-------------|--------|
  | Loan received | ₹ 75,00,000 |
  | Fair value of loan (PV @10%) | ₹ 63,63,000 |
  | **Government Grant** | **₹ 11,37,000** |
  
  **Key Principle:** Government grant = Loan amount - Fair value of loan (discounted at market rate)`,
      whereWentWrong: {
        0: "Even though it's a loan, the concessional interest element is recognized as government grant under Ind AS 20.",
        2: "This calculation may use incorrect discount rate or period.",
        3: "Check your present value calculations."
      }
    },
    {
      id: 18,
      examSession: "Nov 2024",
      caseStudy: "CVV & Co. - HCP Limited",
      topic: "GST & Customs",
      difficulty: "Medium",
      marks: 2,
      caseContext: `Company has supplied goods on delivery challan for ₹ 5,00,000 on approval for sale or return basis to DEF & Co. on 01.03.2024 with the option of returning within 60 days. DEF & Co. signifies his approval for the whole of the above-mentioned goods on 15.05.2024.`,
      question: "Which of the following options correctly states the date of issue of invoice in case of goods sent on sale or return basis to DEF Co.?",
      options: [
        "15.05.2024",
        "14.07.2024",
        "30.04.2024",
        "28.08.2024"
      ],
      correctAnswer: 2,
      explanation: `**Section 31 of CGST Act read with Rule 55 - Invoice for Sale or Return**
  
  **Rule 55 - Sale or Return Basis:**
  For goods sent on approval/sale or return basis, invoice must be issued:
  - On approval, OR
  - Within 6 months from the date of removal
  - **Whichever is earlier**
  
  Since no approval was received within the return period (60 days ended 30.04.2024), invoice should be issued on expiry of return period = **30.04.2024**`,
      whereWentWrong: {
        0: "This is when approval was received, but it's after the return period expired.",
        1: "This appears to be 60 days after approval date, which is incorrect.",
        3: "This is 6 months from some date, but the return period (60 days) ended earlier."
      }
    },
    {
      id: 19,
      examSession: "Nov 2024",
      caseStudy: "CVV & Co. - WECARE Trust",
      topic: "FEMA & IBC",
      difficulty: "Hard",
      marks: 2,
      caseContext: `WECARE Educational and Medical Trust (WCEMT) is registered under FCRA Act, 2010. A notice was received from Central Government regarding enquiry before cancellation of registration and suspension of certificate. Amount of ₹ 66,00,000 is lying in the bank account out of total foreign contribution received.`,
      question: "Which of the following statements are incorrect in relation to consequences of suspension of certificate of registration as per FCRA, 2010?",
      options: [
        "I and II",
        "I, II and III",
        "II and III",
        "III and IV"
      ],
      correctAnswer: 2,
      explanation: `**Section 13 & 14 of Foreign Contribution (Regulation) Act, 2010**
  
  **Statement Analysis:**
  
  **Statement I:** "WCEMT shall not receive any foreign contribution during suspension except on terms specified by Central Government" - **CORRECT**
  
  **Statement II:** "WCEMT can receive FC up to $25,000 during suspension with RBI permission" - **INCORRECT** - No such provision
  
  **Statement III:** "WCEMT can spend up to ₹16,50,000 WITHOUT prior approval" - **INCORRECT** - Prior approval required
  
  **Statement IV:** "WCEMT can spend up to ₹16,50,000 WITH prior approval" - **CORRECT**
  
  **Incorrect Statements: II and III**`,
      whereWentWrong: {
        0: "Statement I is correct.",
        1: "Statement I is correct.",
        3: "Statement IV is correct."
      }
    },
    {
      id: 20,
      examSession: "Nov 2024",
      caseStudy: "CVV & Co. - Mr. Karanveer",
      topic: "Direct Tax",
      difficulty: "Hard",
      marks: 2,
      caseContext: `Mr. Karanveer, a non-resident, arrived in India on 25.02.2024. He purchased a shop for ₹60,00,000 (Stamp duty value ₹65,00,000). He received a small plot of land by way of gift from his wife's cousin (Stamp duty value ₹2,48,000). He purchased 1,000 shares in Bright Limited from his friend at ₹125 (outside stock exchange). The lowest market quotation in BSE and NSE was ₹210 and ₹218 respectively. He received ₹1,25,000 as interest on NRE Account and ₹1,75,000 as interest on Debentures.`,
      question: "What is the income from other sources of Mr. Karanveer for the A.Y. 2024-25?",
      options: [
        "₹ 12,41,000",
        "₹ 5,08,000",
        "₹ 8,85,000",
        "₹ 3,85,000"
      ],
      correctAnswer: 1,
      explanation: `**Section 56(2) of Income-tax Act - Income from Other Sources**
  
  **Analysis:**
  | Item | Amount | Taxable? | Reason |
  |------|--------|----------|--------|
  | Shop purchase below SDV | ₹5L diff | No | Difference < 10% |
  | Gift of land from wife's cousin | ₹2,48,000 | Yes | Not a relative |
  | Shares below FMV | ₹85,000 | Yes | 1000 × (₹210-₹125) |
  | NRE interest | ₹1,25,000 | No | Exempt u/s 10(4)(ii) |
  | Debenture interest | ₹1,75,000 | Yes | Taxable |
  
  **Total:** ₹2,48,000 + ₹85,000 + ₹1,75,000 = **₹5,08,000**`,
      whereWentWrong: {
        0: "You may have included shop purchase difference. Check the 10% tolerance rule.",
        2: "Review which items are taxable. NRE interest is exempt for non-residents.",
        3: "You've missed some taxable items."
      }
    },
    {
      id: 21,
      examSession: "Nov 2024",
      caseStudy: "Green Energy Ltd.",
      topic: "Direct Tax",
      difficulty: "Medium",
      marks: 2,
      caseContext: `Vijay did transactions during FY 2023-24: Day trade in BSE: ₹85,00,000 (Profit ₹7,00,000); Day trade in NSE: ₹67,00,000 (Loss ₹6,00,000); Commodity derivatives: ₹52,00,000 (Profit ₹2,00,000).`,
      question: "How is income of Vijay from day trade in shares and commodity derivatives trade liable to tax?",
      options: [
        "Regular business income (non-speculation) ₹ 3,00,000",
        "Non-speculation ₹ 2,00,000 from commodities and speculation ₹ 1,00,000 from day trade",
        "₹ 3,00,000 being speculation income from both",
        "Non-speculation ₹ 1,00,000 from day trade and speculation ₹ 2,00,000 from commodities"
      ],
      correctAnswer: 1,
      explanation: `**Section 43(5) of Income-tax Act - Speculative Transaction**
  
  **Analysis:**
  | Transaction | Classification |
  |-------------|----------------|
  | Day trade in shares | **Speculation** |
  | Commodity derivatives on recognized exchange | **Non-speculation** |
  
  **Calculation:**
  | Category | Amount |
  |----------|--------|
  | Day trade (₹7L - ₹6L) | ₹1,00,000 (Speculation) |
  | Commodity derivatives | ₹2,00,000 (Non-speculation) |
  
  **Key:** Commodity derivatives on recognized exchange are excluded from speculation definition.`,
      whereWentWrong: {
        0: "Day trading in shares is speculation. Cannot club with commodity derivatives.",
        2: "Commodity derivatives on recognized exchange are NOT speculation.",
        3: "Classification is reversed."
      }
    },
    {
      id: 22,
      examSession: "Nov 2024",
      caseStudy: "Green Energy Ltd.",
      topic: "FEMA & IBC",
      difficulty: "Hard",
      marks: 2,
      caseContext: `GEL decided to raise funds through External Commercial Borrowing (INR denominated) by issuing NCDs with 7-year maturity. Proceeds (INR 4 Crores) will be used for: repayment of Loan of ABC Ltd. (INR 2.50 Crores) and working capital (INR 1.50 Crores). GEL did not hedge the ECB exposure.`,
      question: "Which statement is correct regarding ECBs raised by GEL?",
      options: [
        "Only Statement I (Loan repayment not permitted)",
        "Statement I and III (Loan repayment not permitted + Hedging mandatory)",
        "Only Statement II (Working capital not permitted)",
        "Statement I, II and IV"
      ],
      correctAnswer: 2,
      explanation: `**ECB Framework - RBI Master Direction**
  
  **End-Use Analysis:**
  | Use | Permitted? |
  |-----|------------|
  | Loan repayment/refinancing | Yes |
  | Working capital | **No** |
  | Hedging INR ECB | Not mandatory |
  
  **Only Statement II is correct** - ECB proceeds cannot be used for working capital.`,
      whereWentWrong: {
        0: "Loan repayment/refinancing IS permitted.",
        1: "INR ECBs don't need hedging as there's no forex risk.",
        3: "Multiple statements are incorrect."
      }
    },
    {
      id: 23,
      examSession: "Nov 2024",
      caseStudy: "Green Energy Ltd.",
      topic: "Financial Reporting",
      difficulty: "Medium",
      marks: 2,
      caseContext: `Robin observed issues in interim financial report: Issue I - Extraordinary item not shown; Issue II - Reversal of impairment loss on goodwill; Issue III - Only basic EPS disclosed; Issue IV - Insignificant changes in contingent liabilities not disclosed.`,
      question: "Whether the issues raised by Robin were valid and required changes?",
      options: [
        "Only Issue I and IV have been validly raised",
        "All four issues were valid",
        "Only Issue II and III have been validly raised",
        "Only Issue I has been validly raised"
      ],
      correctAnswer: 2,
      explanation: `**Ind AS 34 - Interim Financial Reporting**
  
  | Issue | Valid? | Reason |
  |-------|--------|--------|
  | I - Extraordinary items | No | No such concept under Ind AS |
  | II - Goodwill impairment reversal | **Yes** | Cannot reverse per Ind AS 36 |
  | III - Basic EPS only | **Yes** | Both basic AND diluted required |
  | IV - Contingent liabilities | No | Insignificant changes need not be disclosed |
  
  **Valid Issues: II and III only**`,
      whereWentWrong: {
        0: "Issue I is not valid - extraordinary items don't exist under Ind AS.",
        1: "Issues I and IV are not valid.",
        3: "Issue I is not valid."
      }
    },
    {
      id: 24,
      examSession: "Nov 2024",
      caseStudy: "Green Energy Ltd.",
      topic: "Strategic Financial Management",
      difficulty: "Medium",
      marks: 2,
      caseContext: `CA. Kiran manages portfolio of ₹2 Crores. Remuneration: 0.20% of portfolio + 1% incentive on returns above high-water mark of ₹2.20 Crores. Assume 20% returns.`,
      question: "If returns are 20%, how much fee is payable to CA. Kiran?",
      options: [
        "₹ 60,000",
        "₹ 2,04,000",
        "₹ 68,000",
        "₹ 86,000"
      ],
      correctAnswer: 0,
      explanation: `**Portfolio Management Fee Calculation**
  
  **Management Fee:**
  ₹ 2 Cr × 0.20% = **₹ 40,000**
  
  **Incentive Fee (High-Water Mark):**
  | Particulars | Amount |
  |-------------|--------|
  | Current Value (₹2Cr + 20%) | ₹ 2.40 Cr |
  | High-Water Mark | ₹ 2.20 Cr |
  | Excess over HWM | ₹ 20 L |
  | Incentive @1% | **₹ 20,000** |
  
  **Total Fee:** ₹ 40,000 + ₹ 20,000 = **₹ 60,000**`,
      whereWentWrong: {
        1: "Check percentage calculations.",
        2: "Review management fee and incentive calculations separately.",
        3: "Verify both components."
      }
    },
    {
      id: 25,
      examSession: "Nov 2024",
      caseStudy: "Maximo Ltd.",
      topic: "Strategic Financial Management",
      difficulty: "Hard",
      marks: 2,
      caseContext: `Maximo Ltd. proposes to issue GDRs for a project requiring AUD 20 million (net of expenses). Market price: ₹300/share (FV ₹100). 2 shares per GDR at 10% discount. Exchange rate: 1 AUD = ₹60. Flotation cost: 5%.`,
      question: "How many GDRs have to be issued?",
      options: [
        "27,21,000",
        "22,22,222",
        "23,39,181",
        "46,78,362"
      ],
      correctAnswer: 2,
      explanation: `**GDR Issue Calculation**
  
  **Gross Proceeds Required:**
  ₹ 120 Cr ÷ 95% = **₹ 126.32 Cr**
  
  **Price per GDR:**
  ₹ 300 × 90% × 2 = **₹ 540**
  
  **Number of GDRs:**
  ₹ 126.32 Cr ÷ ₹ 540 = **23,39,181**`,
      whereWentWrong: {
        0: "Check gross proceeds and GDR pricing calculations.",
        1: "Verify discount and shares per GDR.",
        3: "This is double the correct answer. One GDR = 2 shares."
      }
    },
    {
      id: 26,
      examSession: "Nov 2024",
      caseStudy: "Maximo Ltd.",
      topic: "Direct Tax",
      difficulty: "Medium",
      marks: 2,
      caseContext: `Maximo Ltd. issued GDRs as per Central Government scheme, acquired by non-residents in foreign currency.`,
      question: "What is the TDS rate on interest on GDRs under Income Tax Act? (Ignore surcharge)",
      options: [
        "5.20%",
        "10.40%",
        "4.16%",
        "20.80%"
      ],
      correctAnswer: 1,
      explanation: `**Section 115AC of Income-tax Act**
  
  | Component | Rate |
  |-----------|------|
  | Base rate on interest | 10% |
  | H&E Cess @4% | 0.40% |
  | **Total TDS Rate** | **10.40%** |`,
      whereWentWrong: {
        0: "5% applies to ECBs under Section 194LC, not GDRs.",
        2: "This is only 4% cess alone.",
        3: "20% is the general rate. GDRs get concessional 10%."
      }
    },
    {
      id: 27,
      examSession: "Nov 2024",
      caseStudy: "Maximo Ltd. - Shortspan",
      topic: "Direct Tax",
      difficulty: "Hard",
      marks: 2,
      caseContext: `Shortspan (P) Ltd. under CIRP. Brought forward as on 1.4.2023: Business Loss (FY 20-21): ₹11L; Unabsorbed dep (FY 20-21): ₹16L, (FY 21-22): ₹10L; Business Loss (FY 22-23): ₹4L; Unabsorbed dep (FY 22-23): ₹3L.`,
      question: "How much can be considered in computing book profit under section 115JB for A.Y. 2024-25?",
      options: [
        "₹ 14,00,000",
        "₹ 29,00,000",
        "₹ 15,00,000",
        "₹ 44,00,000"
      ],
      correctAnswer: 3,
      explanation: `**Section 115JB - MAT for Companies under CIRP**
  
  **Total Deduction Available:**
  | Component | Amount |
  |-----------|--------|
  | Business Loss (₹11L + ₹4L) | ₹ 15,00,000 |
  | Unabsorbed Dep (₹16L + ₹10L + ₹3L) | ₹ 29,00,000 |
  | **Total** | **₹ 44,00,000** |`,
      whereWentWrong: {
        0: "Include both business losses AND unabsorbed depreciation.",
        1: "This is only unabsorbed depreciation.",
        2: "This is only business losses."
      }
    },
    {
      id: 28,
      examSession: "Nov 2024",
      caseStudy: "Maximo Ltd.",
      topic: "GST & Customs",
      difficulty: "Medium",
      marks: 2,
      caseContext: `Maximo Ltd. collected GST at lower rate in Nov 2023. SCN issued under section 73(1) for tax ₹6,00,000 and interest ₹1,08,000. Company neither paid nor explained after 30 days.`,
      question: "What is the penalty leviable?",
      options: [
        "₹ 10,000",
        "₹ 50,000",
        "₹ 60,000",
        "₹ 70,800"
      ],
      correctAnswer: 2,
      explanation: `**Section 73(9) of CGST Act - Penalty**
  
  Penalty = 10% of tax OR ₹ 10,000, whichever is **HIGHER**
  
  | Particulars | Amount |
  |-------------|--------|
  | Tax demand | ₹ 6,00,000 |
  | Penalty @10% | **₹ 60,000** |`,
      whereWentWrong: {
        0: "₹ 10,000 is minimum. 10% of tax is higher.",
        1: "Check the percentage - 10% of ₹6L.",
        3: "Penalty is on tax amount only, not interest."
      }
    },
    {
      id: 29,
      examSession: "Nov 2024",
      caseStudy: "Welcome Melody Private Limited",
      topic: "Financial Reporting",
      difficulty: "Medium",
      marks: 2,
      caseContext: `Software for POS: Cost ₹15,00,000 (₹10L now, ₹5L in one year). Legal fees: ₹72,000. Consultancy: ₹1,50,000. Cost of capital: 10%.`,
      question: "At what amount should software be capitalised initially?",
      options: [
        "₹ 15,26,545",
        "₹ 16,04,545",
        "₹ 16,76,545",
        "₹ 17,22,000"
      ],
      correctAnswer: 2,
      explanation: `**Ind AS 38 - Intangible Assets**
  
  **Calculation:**
  | Component | Amount (₹) |
  |-----------|------------|
  | Immediate payment | 10,00,000 |
  | PV of deferred (₹5L × 0.909) | 4,54,545 |
  | Legal fees | 72,000 |
  | Consultancy | 1,50,000 |
  | **Total Cost** | **16,76,545** |`,
      whereWentWrong: {
        0: "You may have missed some costs.",
        1: "Check PV calculation of deferred payment.",
        3: "This uses nominal value without discounting."
      }
    },
    {
      id: 30,
      examSession: "Nov 2024",
      caseStudy: "Royal Enterprises Ltd.",
      topic: "GST & Customs",
      difficulty: "Hard",
      marks: 2,
      caseContext: `REL imported machinery for ₹150 lakhs in June 2023. Paid duty at 15% but correct rate was 12.5%. Refund claim filed March 2024 was rejected. Machinery used to produce rail coach components (sold). No price changes made.`,
      question: "Is the rejection of refund by customs authorities correct?",
      options: [
        "Rejection not justified - machinery not sold, unjust enrichment won't apply",
        "Rejection justified - duty goes into product cost, passed to buyers",
        "Rejection not justified - no price changes were made",
        "Rejection justified - period for refund claim expired"
      ],
      correctAnswer: 1,
      explanation: `**Section 27 of Customs Act - Unjust Enrichment**
  
  **Analysis:**
  | Factor | Position |
  |--------|----------|
  | Machinery used for | Manufacturing products |
  | Products | Sold to customers |
  | Duty impact | Included in product cost |
  | Duty passed on? | **Yes** - via product pricing |
  
  **Conclusion:** Duty on capital goods used in manufacturing gets embedded in product cost. Unjust enrichment applies. Rejection is **justified**.`,
      whereWentWrong: {
        0: "Unjust enrichment applies even when goods aren't sold directly.",
        2: "No price change doesn't mean duty wasn't passed on.",
        3: "Refund was filed within time. Rejection is on merits."
      }
    }
  ];
  
  export const longAnswerQuestions = [
    {
      id: 1,
      examSession: "Nov 2024",
      caseStudy: "CVV & Co. - Mr. Karanveer",
      topic: "Direct Tax",
      marks: 5,
      question: `Mr. Karanveer, a non-resident, arrived in India on 25.02.2024. Compute taxable income and tax liability for A.Y. 2024-25.
  
  **Share Transactions:**
  | Particulars | X Ltd. (Listed) | Y Ltd. (Listed) | GDRs of Z Ltd. | GDRs of A Ltd. |
  |-------------|-----------------|-----------------|----------------|----------------|
  | Date of purchase | 01.07.2020 | 01.08.2023 | 01.07.2020 | 01.07.2020 |
  | Cost | ₹ 90,00,000 | ₹ 50,00,000 | ₹ 20,00,000 | ₹ 12,00,000 |
  | Sale consideration | ₹ 1,30,00,000 | ₹ 65,00,000 | ₹ 26,00,000 | ₹ 15,00,000 |
  | Date of transfer | 28.02.2024 | 28.02.2024 | 15.03.2024 | 15.03.2024 |
  | Transfer expenses | ₹ 26,000 | ₹ 13,000 | ₹ 5,000 | ₹ 3,000 |
  
  Shares acquired by remitting US dollars on 15.06.2020. GDRs of Z Ltd. sold to non-resident outside India. STT paid on X Ltd. and Y Ltd.
  
  CII: FY 2020-21: 301; FY 2023-24: 348
  
  Assume not opted out of default tax regime u/s 115BAC.`,
      modelAnswer: `**COMPUTATION OF TOTAL INCOME AND TAX LIABILITY**
  
  **CAPITAL GAINS:**
  
  **1. LTCG on X Ltd. Shares (u/s 112A):**
  | Particulars | Amount (₹) |
  |-------------|------------|
  | Sale consideration | 1,30,00,000 |
  | Less: Transfer expenses | 26,000 |
  | Net consideration | 1,29,74,000 |
  | Less: Cost of acquisition | 90,00,000 |
  | **LTCG** | **39,74,000** |
  
  **2. STCG on Y Ltd. Shares (u/s 111A):**
  Computed in foreign currency per Section 48 proviso.
  **STCG:** ₹ 13,45,427
  
  **3. GDRs of Z Ltd.:**
  Transfer by NR to NR outside India = **Not a transfer u/s 47**
  **Capital Gain: NIL**
  
  **4. LTCG on GDRs of A Ltd. (u/s 115AC):**
  | Particulars | Amount (₹) |
  |-------------|------------|
  | Net consideration | 14,97,000 |
  | Less: Cost | 12,00,000 |
  | **LTCG** | **2,97,000** |
  
  **INCOME FROM OTHER SOURCES:** ₹ 5,08,000
  
  **TOTAL INCOME:** ₹ 61,24,430
  
  **TAX LIABILITY:**
  | Component | Rate | Tax (₹) |
  |-----------|------|---------|
  | LTCG on X Ltd. (@10% on ₹38.74L) | 10% | 3,87,400 |
  | STCG on Y Ltd. | 15% | 2,01,814 |
  | LTCG on GDRs | 10% | 29,700 |
  | Debenture interest | 20% | 35,000 |
  | Other income | Slab | 1,650 |
  | **Tax before surcharge** | | **6,55,564** |
  | Surcharge @10% | | 65,556 |
  | H&E Cess @4% | | 28,845 |
  | **Total Tax** | | **₹ 7,49,970** |`,
      rubric: [
        { criterion: "LTCG on X Ltd. under Section 112A", maxScore: 1, description: "Correct 10% rate with ₹1 lakh exemption" },
        { criterion: "STCG on Y Ltd. with foreign currency conversion", maxScore: 1, description: "Application of Section 48 proviso" },
        { criterion: "GDRs of Z Ltd. treatment", maxScore: 1, description: "Recognition that transfer to NR outside India is not a transfer" },
        { criterion: "Income from Other Sources", maxScore: 1, description: "Correct treatment of gifts, shares, interest" },
        { criterion: "Tax computation with surcharge and cess", maxScore: 1, description: "Accurate calculation under different sections" }
      ]
    },
    {
      id: 2,
      examSession: "Nov 2024",
      caseStudy: "Green Energy Ltd.",
      topic: "Cost Management",
      marks: 5,
      question: `GEL improved production efficiency for product "SAT". Technology change increased productivity by 25% - can produce 10 units in 10 hours. Revised standard: 0.75 hours per unit.
  
  | Particulars | Original Standard | Revised Standard | Actual |
  |-------------|-------------------|------------------|--------|
  | Units | 3,000 | 3,000 | 3,600 |
  | Labour rate/hr | ₹ 30 | ₹ 30 | ₹ 25 |
  
  Calculate variances by:
  (i) Traditional variance analysis
  (ii) Operational variances including planning variances`,
      modelAnswer: `**VARIANCE ANALYSIS FOR GEL - PRODUCT "SAT"**
  
  **WORKINGS:**
  - Original standard time = 1.33 hours/unit
  - Standard Hours: Original (3,600 × 1.33) = 4,800; Revised (3,600 × 0.75) = 2,700
  - Actual Hours: 3,600 × 1.00 = 3,600
  
  **PART (i): TRADITIONAL VARIANCE ANALYSIS**
  
  | Variance | Calculation | Amount |
  |----------|-------------|--------|
  | Labour Efficiency | (4,800 - 3,600) × ₹30 | **₹ 36,000 (F)** |
  | Labour Rate | (₹30 - ₹25) × 3,600 | **₹ 18,000 (F)** |
  | **Total** | | **₹ 54,000 (F)** |
  
  **PART (ii): OPERATIONAL & PLANNING VARIANCES**
  
  **A. OPERATIONAL VARIANCES:**
  | Variance | Calculation | Amount |
  |----------|-------------|--------|
  | Efficiency | (2,700 - 3,600) × ₹30 | **₹ 27,000 (A)** |
  | Rate | (₹30 - ₹25) × 3,600 | **₹ 18,000 (F)** |
  | **Total** | | **₹ 9,000 (A)** |
  
  **B. PLANNING VARIANCES:**
  | Variance | Calculation | Amount |
  |----------|-------------|--------|
  | Efficiency | (4,800 - 2,700) × ₹30 | **₹ 63,000 (F)** |
  | Rate | NIL | |
  | **Total** | | **₹ 63,000 (F)** |
  
  **RECONCILIATION:**
  ₹63,000 (F) - ₹27,000 (A) + ₹18,000 (F) = **₹54,000 (F)** ✓`,
      rubric: [
        { criterion: "Original standard time calculation", maxScore: 1, description: "Correct derivation of 1.33 hours per unit" },
        { criterion: "Traditional efficiency variance", maxScore: 1, description: "₹36,000 (F)" },
        { criterion: "Operational efficiency variance", maxScore: 1, description: "₹27,000 (A)" },
        { criterion: "Planning variance", maxScore: 1, description: "₹63,000 (F)" },
        { criterion: "Reconciliation", maxScore: 1, description: "Totals reconcile" }
      ]
    },
    {
      id: 3,
      examSession: "Nov 2024",
      caseStudy: "Maximo Ltd. - Minority Shareholders",
      topic: "Corporate Laws",
      marks: 5,
      question: `Maximo Limited: Paid-up capital ₹100 Crores (100 Lakh shares of ₹100 each), 1,000 shareholders. 90 shareholders holding 10 Lakh shares filed petition before NCLT regarding ground water extraction violations (Dec 2023). NCLT commenced proceedings (Feb 2024). 40 shareholders (4 Lakh shares) withdrew consent (March 2024).
  
  State whether petition u/s 241 is maintainable. Impact of withdrawal after commencement?`,
      modelAnswer: `**ANALYSIS OF PETITION UNDER SECTION 241**
  
  **ELIGIBILITY CRITERIA (Section 244):**
  For company with share capital - LOWEST of:
  - 100 members, OR
  - 1/10th of total members (100), OR
  - Not less than 1/10th of issued share capital
  
  **COMPANY PROFILE:**
  | Particulars | Details |
  |-------------|---------|
  | Share capital | ₹ 100 Crores |
  | Total shareholders | 1,000 |
  | Petitioners | 90 members holding 10 Lakh shares (10%) |
  
  **ELIGIBILITY TEST:**
  | Criterion | Threshold | Actual | Met? |
  |-----------|-----------|--------|------|
  | 100 members | 100 | 90 | ❌ |
  | 1/10th of members | 100 | 90 | ❌ |
  | 1/10th shareholding | 10 Lakh | 10 Lakh | ✓ |
  
  **VERDICT:** Petition is **MAINTAINABLE** (meets shareholding requirement).
  
  **IMPACT OF WITHDRAWAL:**
  
  Per **Rajamundhry Electric Corporation Vs. V. Nageswar Rao**:
  "Consent is reckoned at the beginning of proceedings. Withdrawal during proceedings does not affect maintainability."
  
  **CONCLUSION:**
  1. Initial petition was maintainable (10% shareholding met)
  2. Withdrawal in March 2024 (after Feb 2024 commencement) has **NO IMPACT**
  3. Petition **REMAINS MAINTAINABLE**`,
      rubric: [
        { criterion: "Section 244 criteria identification", maxScore: 1, description: "Three alternative thresholds" },
        { criterion: "Application of lowest threshold", maxScore: 1, description: "10% shareholding is met" },
        { criterion: "Eligibility calculation", maxScore: 1, description: "Accurate numerical verification" },
        { criterion: "Legal position on withdrawal", maxScore: 1, description: "Rajamundhry case citation" },
        { criterion: "Final conclusion", maxScore: 1, description: "Petition remains maintainable" }
      ]
    }
  ];
  
  export const topicsList = [
    { id: 1, name: "Financial Reporting", icon: "📊", description: "Ind AS, Financial Statements" },
    { id: 2, name: "Strategic Financial Management", icon: "💹", description: "NPV, GDRs, Portfolio Management" },
    { id: 3, name: "Auditing", icon: "🔍", description: "SA, Professional Ethics" },
    { id: 4, name: "Direct Tax", icon: "💰", description: "Income Tax, TDS, Capital Gains" },
    { id: 5, name: "GST & Customs", icon: "🏛️", description: "GST, Import Duty, ITC" },
    { id: 6, name: "Corporate Laws", icon: "⚖️", description: "Companies Act, NCLT" },
    { id: 7, name: "Cost Management", icon: "📈", description: "Variance Analysis, Costing" },
    { id: 8, name: "FEMA & IBC", icon: "🌐", description: "ECB, FCRA, IBC, Liquidation" }
  ];
