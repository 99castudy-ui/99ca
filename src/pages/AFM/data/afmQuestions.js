// AFM MCQ Questions Data
export const afmMcqQuestions = [
  // Case Scenario I - Security Valuation (May 2025)
  {
    id: 1,
    examSession: "May 2025",
    topic: "Security Valuation & CAPM",
    difficulty: "Medium",
    marks: 2,
    caseScenario: `Equity Researchers have estimated the rate of returns for Stock A, Stock B and Market Portfolio under each state of the economy:

| Economy | Probability | Stock A (%) | Stock B (%) | Market (%) |
|---------|-------------|-------------|-------------|------------|
| Boom | 0.3 | 16 | 19 | 18 |
| Normal | 0.4 | 14 | 16 | 15 |
| Recession | 0.3 | -9 | -7 | -8 |

Risk-free rate = 8%. Covariance(A, Market) = 122.70, Covariance(B, Market) = 125.40`,
    question: "What is the expected rate of return (percentage) for Stocks A and B?",
    options: [
      "7.70% and 9.00%",
      "10% and 9.00%",
      "7.70% and 10%",
      "13.1% and 14.20%"
    ],
    correctAnswer: 2,
    explanation: `**Expected Return Calculation:**

E(R) = Σ [Probability × Return]

**Stock A:**
E(RA) = (0.3 × 16) + (0.4 × 14) + (0.3 × -9)
E(RA) = 4.8 + 5.6 + (-2.7) = **7.70%**

**Stock B:**
E(RB) = (0.3 × 19) + (0.4 × 16) + (0.3 × -7)
E(RB) = 5.7 + 6.4 + (-2.1) = **10.00%**

**Answer: Stock A = 7.70%, Stock B = 10%**`,
    whereWentWrong: {
      0: "You may have made calculation errors. Stock B expected return is 10%, not 9%.",
      1: "Stock A return is 7.70%, not 10%. Re-check your probability weightings.",
      3: "These values are too high. Remember to account for negative returns in recession."
    }
  },
  {
    id: 2,
    examSession: "May 2025",
    topic: "Security Valuation & CAPM",
    difficulty: "Medium",
    marks: 2,
    caseScenario: `Same case scenario as Q1. Risk-free rate = 8%. Covariance(A, Market) = 122.70, Covariance(B, Market) = 125.40`,
    question: "What will be the variance of market portfolio?",
    options: [
      "38.4",
      "-4.8",
      "126.8",
      "125.4"
    ],
    correctAnswer: 3,
    explanation: `**Variance of Market Portfolio:**

First, calculate Expected Market Return:
E(RM) = (0.3 × 18) + (0.4 × 15) + (0.3 × -8)
E(RM) = 5.4 + 6.0 + (-2.4) = 9%

**Variance Formula:**
σ² = Σ [Probability × (Return - Expected Return)²]

| Economy | Prob | Return | Deviation | Dev² | Prob × Dev² |
|---------|------|--------|-----------|------|-------------|
| Boom | 0.3 | 18 | 9 | 81 | 24.3 |
| Normal | 0.4 | 15 | 6 | 36 | 14.4 |
| Recession | 0.3 | -8 | -17 | 289 | 86.7 |

**Variance = 24.3 + 14.4 + 86.7 = 125.4**`,
    whereWentWrong: {
      0: "This is not the correct variance. You may have forgotten to square the deviations.",
      1: "Variance cannot be negative. Re-check your calculations.",
      2: "Close, but verify each step of the variance calculation."
    }
  },
  {
    id: 3,
    examSession: "May 2025",
    topic: "Security Valuation & CAPM",
    difficulty: "Hard",
    marks: 2,
    caseScenario: `Same case scenario. Variance of Market = 125.4`,
    question: "What will be the beta of Stock A and Stock B respectively?",
    options: [
      "0.9542 and 1.00",
      "0.9862 and 1.24",
      "0.9785 and 1.00",
      "0.9785 and 1.24"
    ],
    correctAnswer: 2,
    explanation: `**Beta Formula:**
β = Covariance(Stock, Market) / Variance(Market)

**Beta of Stock A:**
βA = 122.70 / 125.4 = **0.9785**

**Beta of Stock B:**
βB = 125.40 / 125.4 = **1.00**

**Key Insight:** Stock B has a beta of exactly 1.00, meaning it moves exactly with the market.`,
    whereWentWrong: {
      0: "Beta A is 0.9785, not 0.9542. Check your division.",
      1: "Beta B is 1.00, not 1.24. Verify: 125.4/125.4 = 1.00",
      3: "Beta B should be 1.00, not 1.24."
    }
  },
  {
    id: 4,
    examSession: "May 2025",
    topic: "Security Valuation & CAPM",
    difficulty: "Medium",
    marks: 2,
    question: "Required rate of return of Stock A is _________ and Stock B is _________.",
    options: [
      "8.9785% and 9%",
      "9% and 8.978%",
      "8.9875% and 9%",
      "8.9785% and 10.4%"
    ],
    correctAnswer: 0,
    explanation: `**CAPM Formula:**
Required Return = Rf + β(Rm - Rf)

**Market Risk Premium:**
Rm - Rf = 9% - 8% = 1%

**Stock A:**
RA = 8% + 0.9785(1%) = 8% + 0.9785% = **8.9785%**

**Stock B:**
RB = 8% + 1.00(1%) = 8% + 1% = **9%**`,
    whereWentWrong: {
      1: "The values are swapped. Stock A has lower required return due to lower beta.",
      2: "Stock A is 8.9785%, not 8.9875%. Small calculation error.",
      3: "Stock B required return is 9%, not 10.4%."
    }
  },
  {
    id: 5,
    examSession: "May 2025",
    topic: "Security Valuation & CAPM",
    difficulty: "Hard",
    marks: 2,
    question: "Based on calculated Alpha of Stock A and Stock B, which statement is correct for purchase or sale?",
    options: [
      "Stock A has positive alpha, Stock B has negative alpha. Purchase Stock A, sell Stock B.",
      "Both stocks have positive alpha. Purchase both stocks.",
      "Stock A has negative alpha, Stock B has positive alpha. Sell Stock A, purchase Stock B.",
      "Both stocks have negative alpha. Sell both stocks."
    ],
    correctAnswer: 2,
    explanation: `**Alpha = Expected Return - Required Return**

**Stock A:**
Alpha A = 7.70% - 8.9785% = **-1.2785% (Negative)**
→ Stock is **Overpriced** → SELL

**Stock B:**
Alpha B = 10% - 9% = **+1% (Positive)**
→ Stock is **Underpriced** → BUY

**Investment Decision:**
- **Sell Stock A** (negative alpha = overvalued)
- **Buy Stock B** (positive alpha = undervalued)`,
    whereWentWrong: {
      0: "Reversed. Stock A has negative alpha, Stock B has positive alpha.",
      1: "Stock A has negative alpha (-1.2785%), not positive.",
      3: "Stock B has positive alpha (+1%), not negative."
    }
  },
  // Case Scenario II - Mutual Funds (May 2025)
  {
    id: 6,
    examSession: "May 2025",
    topic: "Mutual Funds",
    difficulty: "Easy",
    marks: 2,
    caseScenario: `Steady Mutual Fund's Scheme - Star Gold as on 31st March, 2025:

| Company | No. of Shares | Market Price (₹) |
|---------|---------------|------------------|
| A Ltd. | 20,000 | 25 |
| B Ltd. | 30,000 | 350 |
| C Ltd. | 38,000 | 290 |
| D Ltd. | 50,000 | 400 |

Total units outstanding: 20 lakhs
Accrued expenses: ₹2,00,000
Other liabilities: ₹2,50,000`,
    question: "Total gross value of the Scheme - Star Gold is:",
    options: [
      "₹325.00 lakhs",
      "₹420.20 lakhs",
      "₹480.40 lakhs",
      "₹520.30 lakhs"
    ],
    correctAnswer: 1,
    explanation: `**Gross Value Calculation:**

| Company | Shares | Price | Value (₹) |
|---------|--------|-------|-----------|
| A Ltd. | 20,000 | 25 | 5,00,000 |
| B Ltd. | 30,000 | 350 | 1,05,00,000 |
| C Ltd. | 38,000 | 290 | 1,10,20,000 |
| D Ltd. | 50,000 | 400 | 2,00,00,000 |
| **Total** | | | **4,20,20,000** |

**Gross Value = ₹420.20 lakhs**`,
    whereWentWrong: {
      0: "This is much lower. Check your multiplication for each stock.",
      2: "This is higher than the actual total. Verify each calculation.",
      3: "This is too high. Re-calculate the portfolio value."
    }
  },
  {
    id: 7,
    examSession: "May 2025",
    topic: "Mutual Funds",
    difficulty: "Easy",
    marks: 2,
    question: "Total net value of the Scheme - Star Gold is:",
    options: [
      "₹422.70 lakhs",
      "₹420.70 lakhs",
      "₹415.70 lakhs",
      "₹424.70 lakhs"
    ],
    correctAnswer: 2,
    explanation: `**Net Value = Gross Value - Liabilities**

| Particulars | Amount (₹ lakhs) |
|-------------|------------------|
| Gross Value | 420.20 |
| Less: Accrued Expenses | (2.00) |
| Less: Other Liabilities | (2.50) |
| **Net Value** | **415.70** |`,
    whereWentWrong: {
      0: "You added liabilities instead of subtracting them.",
      1: "You only subtracted one liability. Both must be deducted.",
      3: "This is higher than gross value, which is impossible."
    }
  },
  {
    id: 8,
    examSession: "May 2025",
    topic: "Mutual Funds",
    difficulty: "Easy",
    marks: 2,
    question: "NAV per unit of the Scheme - Star Gold is:",
    options: [
      "₹21.135",
      "₹21.035",
      "₹20.785",
      "₹21.235"
    ],
    correctAnswer: 2,
    explanation: `**NAV per Unit = Net Asset Value / Total Units**

NAV = ₹415.70 lakhs / 20 lakhs units
NAV = ₹4,15,70,000 / 20,00,000
NAV = **₹20.785 per unit**`,
    whereWentWrong: {
      0: "You may have used gross value instead of net value.",
      1: "Check your division. Net value is ₹415.70 lakhs.",
      3: "This is calculated incorrectly. Verify the net value used."
    }
  },
  // Case Scenario III - Futures Hedging (May 2025)
  {
    id: 9,
    examSession: "May 2025",
    topic: "Derivatives & Options",
    difficulty: "Medium",
    marks: 2,
    caseScenario: `Mr. X buys WBL Limited stocks worth ₹21,60,000. Market sentiment is weak for next 3 months.
- Beta of WBL stock: 1.3
- Current NIFTY: 2250
- 3-month NIFTY Future: 2310
- Current WBL price: ₹240
- Each Nifty future lot: 240 units`,
    question: "Number of future contracts to buy/sell to hedge WBL stock against expected fall:",
    options: [
      "Buy 6 future contracts",
      "Sell 5 future contracts",
      "Buy 5 future contracts",
      "Sell 6 future contracts"
    ],
    correctAnswer: 1,
    explanation: `**Hedge Ratio Formula:**
Number of Contracts = (Portfolio Value × Beta) / (Future Price × Lot Size)

**Calculation:**
= (₹21,60,000 × 1.3) / (2310 × 240)
= ₹28,08,000 / ₹5,54,400
= 5.066 ≈ **5 contracts**

**Action:** Since expecting market fall with long stock position, **SELL 5 futures** to hedge.

**Key Point:** Selling futures protects against downside risk in a falling market.`,
    whereWentWrong: {
      0: "We need to SELL futures to hedge a long stock position, not buy.",
      2: "Wrong direction. To hedge long stocks against fall, sell futures.",
      3: "Calculation gives approximately 5 contracts, not 6."
    }
  },
  {
    id: 10,
    examSession: "May 2025",
    topic: "Derivatives & Options",
    difficulty: "Hard",
    marks: 2,
    caseScenario: `Same scenario. NIFTY falls 10% from 2250 to 2025. WBL stock falls to ₹212.`,
    question: "What will be Net Gain/Loss if portfolio was hedged on NIFTY future?",
    options: [
      "Net Gain ₹3,42,000",
      "Net Gain ₹3,02,100",
      "Net Gain ₹50,100",
      "Net Gain ₹90,000"
    ],
    correctAnswer: 3,
    explanation: `**Loss on Stock Position:**
Loss = (₹240 - ₹212) × (21,60,000/240)
Loss = ₹28 × 9,000 shares = **₹2,52,000**

**Gain on Futures (5 contracts sold):**
Gain = (2310 - 2025) × 240 × 5
Gain = 285 × 240 × 5 = **₹3,42,000**

**Net Position:**
Net Gain = ₹3,42,000 - ₹2,52,000 = **₹90,000**

**Note:** Hedge worked! The futures gain offset most of the stock loss.`,
    whereWentWrong: {
      0: "This is only the futures gain. You must net off the stock loss.",
      1: "Check your stock loss calculation. Share quantity is 9,000.",
      2: "This appears to use wrong figures. Verify both components."
    }
  },
  {
    id: 11,
    examSession: "May 2025",
    topic: "Derivatives & Options",
    difficulty: "Medium",
    marks: 2,
    caseScenario: `Same scenario. NIFTY rises 6% from 2250 to 2385. WBL stock rises to ₹255.`,
    question: "What will be Net Gain/Loss when portfolio was hedged?",
    options: [
      "Net Loss ₹90,000",
      "Net Gain ₹45,000",
      "Net Gain ₹1,35,000",
      "Net Gain ₹90,000"
    ],
    correctAnswer: 1,
    explanation: `**Gain on Stock Position:**
Gain = (₹255 - ₹240) × 9,000 shares
Gain = ₹15 × 9,000 = **₹1,35,000**

**Loss on Futures (5 contracts sold, market rose):**
Loss = (2385 - 2310) × 240 × 5
Loss = 75 × 240 × 5 = **₹90,000**

**Net Position:**
Net Gain = ₹1,35,000 - ₹90,000 = **₹45,000**

**Note:** When market rises, hedge limits upside but still profitable.`,
    whereWentWrong: {
      0: "Overall position is still profitable despite futures loss.",
      2: "This is only the stock gain. Futures loss must be deducted.",
      3: "The futures loss is ₹90,000, not the net gain."
    }
  },
  // Case Scenario IV - Foreign Exchange (May 2025)
  {
    id: 12,
    examSession: "May 2025",
    topic: "Foreign Exchange",
    difficulty: "Hard",
    marks: 2,
    caseScenario: `ABC Ltd. (UK firm) has receivable $20 Million due in 6 months.
- Spot rate: 1$ = £0.7720/£0.7840
- 6-month forward: 1$ = £0.7910/£0.8040
- Put option: Strike £0.8100, Premium £0.02
- Call option: Strike £0.8100, Premium £0.01

Forecasted spot rates:
| Rate | Probability |
|------|-------------|
| £0.7800 | 30% |
| £0.8100 | 50% |
| £0.8300 | 20% |`,
    question: "What will be the total expected value of option hedge in pounds, if full $20 Million exposure is covered?",
    options: [
      "£16.125 million",
      "£16.50 million",
      "£15.88 million",
      "£15.70 million"
    ],
    correctAnswer: 2,
    explanation: `**Option Hedge Analysis (Buy Put @ £0.8100):**

Premium Cost = £0.02 × $20M = £0.40 million

**Scenario Analysis:**

| Spot Rate | Action | Receipt/$ | Total Receipt |
|-----------|--------|-----------|---------------|
| £0.7800 | Exercise Put | £0.8100 | £16.20M |
| £0.8100 | Indifferent | £0.8100 | £16.20M |
| £0.8300 | Lapse Put | £0.8300 | £16.60M |

**Expected Value:**
= (0.30 × 16.20) + (0.50 × 16.20) + (0.20 × 16.60)
= 4.86 + 8.10 + 3.32 = £16.28M

**Less Premium:** £16.28M - £0.40M = **£15.88 million**`,
    whereWentWrong: {
      0: "You may have forgotten to deduct the premium cost.",
      1: "Check your expected value calculation with correct probabilities.",
      3: "Verify the exercise decision at each spot rate."
    }
  },
  {
    id: 13,
    examSession: "May 2025",
    topic: "Foreign Exchange",
    difficulty: "Medium",
    marks: 2,
    question: "If ABC Ltd. uses forward hedge strategy, what will be total proceed in pounds?",
    options: [
      "£15.40 million",
      "£15.88 million",
      "£16.125 million",
      "£15.82 million"
    ],
    correctAnswer: 3,
    explanation: `**Forward Hedge:**

For receivables, use the **forward bid rate** (bank buys dollars from you):
Forward Bid = £0.7910/$

**Total Proceeds:**
= $20 million × £0.7910
= **£15.82 million**

**Note:** Forward contracts lock in a certain rate regardless of future spot movements.`,
    whereWentWrong: {
      0: "You may have used the spot rate instead of forward rate.",
      1: "This is the option hedge value, not forward.",
      2: "Check which forward rate applies (bid for selling $)."
    }
  },
  {
    id: 14,
    examSession: "May 2025",
    topic: "Foreign Exchange",
    difficulty: "Medium",
    marks: 2,
    question: "What will be expected spot rate at end of 6 months and expected proceeds if no hedge strategy is adopted?",
    options: [
      "£0.805/$, £16.10 million",
      "£0.85/$, £15.8 million",
      "£0.7720/$, £15.44 million",
      "£0.7910/$, £15.82 million"
    ],
    correctAnswer: 0,
    explanation: `**Expected Spot Rate:**
E(Spot) = Σ(Probability × Rate)
= (0.30 × 0.7800) + (0.50 × 0.8100) + (0.20 × 0.8300)
= 0.234 + 0.405 + 0.166
= **£0.805/$**

**Expected Proceeds (No Hedge):**
= $20 million × £0.805
= **£16.10 million**`,
    whereWentWrong: {
      1: "The expected rate is £0.805, not £0.85.",
      2: "This is the spot bid rate, not the expected future rate.",
      3: "This is the forward rate, not expected spot rate."
    }
  },
  {
    id: 15,
    examSession: "May 2025",
    topic: "Foreign Exchange",
    difficulty: "Easy",
    marks: 2,
    question: "Identify which option gives the highest proceed:",
    options: [
      "Option hedge",
      "Forward hedge",
      "Money market hedge",
      "No hedge"
    ],
    correctAnswer: 3,
    explanation: `**Comparison of Hedging Strategies:**

| Strategy | Proceeds (£ million) |
|----------|---------------------|
| Option Hedge | 15.88 |
| Forward Hedge | 15.82 |
| No Hedge (Expected) | **16.10** |

**Highest Proceeds: No Hedge = £16.10 million**

**Caution:** While no hedge gives highest expected value, it carries exchange rate risk. The actual outcome could be worse than hedged positions.`,
    whereWentWrong: {
      0: "Option hedge gives £15.88M, which is less than no hedge.",
      1: "Forward hedge gives £15.82M, which is less than no hedge.",
      2: "Money market hedge wasn't calculated but typically would be close to forward."
    }
  },
  // Additional Questions from Nov 2024
  {
    id: 16,
    examSession: "Nov 2024",
    topic: "Mergers & Acquisitions",
    difficulty: "Medium",
    marks: 2,
    caseScenario: `Company X Ltd. proposes to take over Y Ltd.
- X Ltd.: Net Profit ₹80 Lakh, P/E Ratio 10.50, Market Price ₹42
- Y Ltd.: Net Profit ₹15.75 Lakh, P/E Ratio 15.75, Market Price ₹85`,
    question: "If the company borrows funds @ 15% interest and buys out Target Company by paying cash, how much should it offer to maintain EPS (assuming 30% tax rate)?",
    options: [
      "₹210 Lakhs",
      "₹315 Lakhs",
      "₹150 Lakhs",
      "₹0 Lakhs"
    ],
    correctAnswer: 2,
    explanation: `**Maintaining EPS with Cash Acquisition:**

Current EPS of X Ltd. = ₹80 Lakh / (₹80 Lakh × 10.50 / ₹42)
= ₹80 Lakh / 20 Lakh shares = ₹4 per share

**For EPS to remain same after acquisition:**
Combined Earnings = ₹80L + ₹15.75L - Interest(1-tax)
Interest on borrowed amount = Amount × 15% × (1-0.30)

Setting up equation where new EPS = ₹4:
(₹95.75L - Amount × 10.5%) / 20L = ₹4
₹95.75L - Amount × 10.5% = ₹80L
Amount × 10.5% = ₹15.75L
**Amount = ₹150 Lakhs**`,
    whereWentWrong: {
      0: "This doesn't account for after-tax interest cost properly.",
      1: "This may be using pre-tax interest rate.",
      3: "Zero offer makes no sense in an acquisition context."
    }
  },
  {
    id: 17,
    examSession: "Nov 2024",
    topic: "Derivatives & Options",
    difficulty: "Medium",
    marks: 2,
    caseScenario: `Option scenarios:
| Situation | Action | Exercise Price | Premium | Spot Price |
|-----------|--------|----------------|---------|------------|
| I | Exercised | 140 | 20 | 160 |
| II | Exercised | 200 | 15 | 175 |
| III | Lapsed | 300 | 25 | 400 |`,
    question: "In Situation III, the investor's position and the amount of profit/loss is:",
    options: [
      "Put option, ₹(25)",
      "Call option, ₹75",
      "Short position, ₹100",
      "Long position, ₹(100)"
    ],
    correctAnswer: 0,
    explanation: `**Analysis of Situation III:**
- Exercise Price: 300
- Spot Price: 400
- Action: **Lapsed**

Since the option lapsed when Spot > Exercise:
- A **Call option** would be exercised (profit available)
- A **Put option** would lapse (no benefit to sell at 300 when market is 400)

**Therefore:** This is a **PUT option**

**Profit/Loss:**
Option lapsed → Loss = Premium paid = **₹(25)**`,
    whereWentWrong: {
      1: "If it was a call option, it would have been exercised, not lapsed.",
      2: "This is an option position, not a short futures position.",
      3: "Long position terminology doesn't apply to option exercise decisions."
    }
  },
  {
    id: 18,
    examSession: "Nov 2024",
    topic: "Derivatives & Options",
    difficulty: "Easy",
    marks: 2,
    question: "In Situation I, the investor's position and the amount of profit/loss is:",
    options: [
      "Put option and ₹20",
      "Call option and ₹0",
      "Put option and ₹0",
      "Call option and ₹20"
    ],
    correctAnswer: 1,
    explanation: `**Analysis of Situation I:**
- Exercise Price: 140
- Spot Price: 160
- Premium: 20
- Action: **Exercised**

Since exercised when Spot (160) > Exercise (140):
This is a **CALL option** (right to buy)

**Profit/Loss:**
Gross Gain = Spot - Exercise = 160 - 140 = ₹20
Less: Premium = ₹20
**Net Profit = ₹0 (Breakeven)**`,
    whereWentWrong: {
      0: "Put option would not be exercised when Spot > Exercise.",
      2: "This is a call option based on exercise logic.",
      3: "Net profit is zero after deducting premium, not ₹20."
    }
  },
  // May 2024 Questions
  {
    id: 19,
    examSession: "May 2024",
    topic: "Portfolio Management",
    difficulty: "Hard",
    marks: 2,
    caseScenario: `Investor holds 1,000 shares of X Ltd.
Current Year: Dividend ₹3, Market Price ₹35, Risk-free 11%, Market Premium 4%, Beta 1.5, Growth 8%
Next Year: Dividend ₹3.25, Risk-free 12%, Market Premium 5%, Beta 1.6, Growth 10%`,
    question: "Based on existing and revised factors, what should the investor do?",
    options: [
      "BUY - share is undervalued",
      "SELL - share is overvalued",
      "HOLD - share is fairly valued",
      "Cannot determine"
    ],
    correctAnswer: 2,
    explanation: `**Existing Rate of Return (CAPM):**
Ke = 11% + 1.5(4%) = 17%

**Price (Original) using Gordon Model:**
P₀ = D₀(1+g)/(Ke-g) = 3(1.08)/(0.17-0.08) = 3.24/0.09 = **₹36**

**Revised Rate of Return:**
Ke = 12% + 1.6(5%) = 20%

**Price (Revised):**
P₀ = 3.25(1.10)/(0.20-0.10) = 3.575/0.10 = **₹35.75**

**Decision:**
- Current Market Price: ₹35
- Original Equilibrium Price: ₹36
- Revised Equilibrium Price: ₹35.75

All three values are approximately equal → **HOLD**`,
    whereWentWrong: {
      0: "The share is not significantly undervalued to warrant buying.",
      1: "The share is not significantly overvalued to warrant selling.",
      3: "We have sufficient information to make a decision."
    }
  },
  {
    id: 20,
    examSession: "May 2024",
    topic: "Interest Rate Risk",
    difficulty: "Hard",
    marks: 2,
    caseScenario: `Manufacturer has ₹2 Crore floating rate loan at 9% p.a. (inception). Interest due every March 31st.
Central Bank projects: Mar 2024: 9.25%, Mar 2025: 9.50%, Mar 2026: 10%, Mar 2027: 9%, Mar 2028: 8.25%
Cap purchased at Strike Rate 9%, Premium 0.80% paid Oct 2023
Actual rates: Mar 2024: 9.50%, Mar 2025: 11%, Mar 2026: 9.25%, Mar 2027: 9%, Mar 2028: 8.50%`,
    question: "What is the compensation received on 31st March 2025 when actual rate is 11%?",
    options: [
      "₹1,00,000",
      "₹2,00,000",
      "₹4,00,000",
      "₹3,00,000"
    ],
    correctAnswer: 2,
    explanation: `**Interest Rate Cap Settlement:**

Cap Rate (Strike): 9%
Actual Rate: 11%
Notional Principal: ₹2,00,00,000

**Compensation Calculation:**
Since Actual Rate (11%) > Cap Rate (9%), the cap is exercised.

Compensation = Principal × (Actual Rate - Cap Rate)
= ₹2,00,00,000 × (11% - 9%)
= ₹2,00,00,000 × 2%
= **₹4,00,000**

This compensates the borrower for paying higher interest on the floating rate loan.`,
    whereWentWrong: {
      0: "This would be for only 0.5% differential, not 2%.",
      1: "This is only half the correct amount.",
      3: "This would be for 1.5% differential."
    }
  }
];

// AFM Long Answer Questions Data
export const afmLongAnswerQuestions = [
  {
    id: 1,
    examSession: "May 2024",
    topic: "Portfolio Management",
    marks: 8,
    question: `An investor has decided to invest ₹1,00,000 in the shares of X Ltd. and Y Ltd. The desired returns along with probabilities are:

| Probability | X Ltd (%) | Y Ltd (%) |
|-------------|-----------|-----------|
| 0.20 | -5 | 15 |
| 0.50 | 10 | 25 |
| 0.30 | 15 | -10 |

You are required to:

(i) Calculate the risk and return of investment in individual shares.

(ii) Compare the risk and return of these two shares with a portfolio of these shares in equal proportions.

(iii) Find out the proportion of each of the above shares to formulate a minimum risk portfolio.`,
    modelAnswer: `**SOLUTION: PORTFOLIO ANALYSIS**

---

**PART (i): Risk and Return of Individual Shares**

**Expected Return Calculation:**

**X Ltd.:**
E(Rx) = (0.20 × -5) + (0.50 × 10) + (0.30 × 15)
E(Rx) = -1 + 5 + 4.5 = **8.50%**

**Y Ltd.:**
E(Ry) = (0.20 × 15) + (0.50 × 25) + (0.30 × -10)
E(Ry) = 3 + 12.5 - 3 = **12.50%**

**Variance Calculation:**

| Prob | X | (X-X̄) | (X-X̄)² | P×(X-X̄)² | Y | (Y-Ȳ) | (Y-Ȳ)² | P×(Y-Ȳ)² |
|------|---|-------|---------|----------|---|-------|---------|----------|
| 0.20 | -5 | -13.50 | 182.25 | 36.45 | 15 | 2.50 | 6.25 | 1.25 |
| 0.50 | 10 | 1.50 | 2.25 | 1.125 | 25 | 12.50 | 156.25 | 78.125 |
| 0.30 | 15 | 6.50 | 42.25 | 12.675 | -10 | -22.50 | 506.25 | 151.875 |
| | | | **σ²x** | **50.25** | | | **σ²y** | **231.25** |

**Standard Deviation:**
- σx = √50.25 = **7.09%**
- σy = √231.25 = **15.21%**

---

**PART (ii): Portfolio Risk and Return (50:50)**

**Covariance Calculation:**

| Prob | (X-X̄) | (Y-Ȳ) | (X-X̄)(Y-Ȳ) | P × Product |
|------|-------|-------|------------|-------------|
| 0.20 | -13.50 | 2.50 | -33.75 | -6.75 |
| 0.50 | 1.50 | 12.50 | 18.75 | 9.375 |
| 0.30 | 6.50 | -22.50 | -146.25 | -43.875 |
| | | | **Cov(X,Y)** | **-41.25** |

**Portfolio Return:**
E(Rp) = (0.5 × 8.50) + (0.5 × 12.50) = **10.50%**

**Portfolio Variance:**
σ²p = (0.5)²(50.25) + (0.5)²(231.25) + 2(0.5)(0.5)(-41.25)
σ²p = 12.563 + 57.813 - 20.625 = **49.75**

**Portfolio Standard Deviation:**
σp = √49.75 = **7.05%**

**Comparison Table:**

| Measure | X Ltd. | Y Ltd. | Portfolio |
|---------|--------|--------|-----------|
| Return | 8.50% | 12.50% | 10.50% |
| Risk (σ) | 7.09% | 15.21% | **7.05%** |
| Return/Risk | 1.20 | 0.82 | **1.49** |

**Conclusion:** Portfolio has LOWER risk than both individual stocks due to negative covariance!

---

**PART (iii): Minimum Risk Portfolio**

**Formula:**
Wy = (σ²x - CovXY) / (σ²x + σ²y - 2×CovXY)

**Calculation:**
Wy = (50.25 - (-41.25)) / (50.25 + 231.25 - 2(-41.25))
Wy = 91.50 / 364 = **0.2514 or 25.14%**

**Optimal Weights:**
- **X Ltd. = 74.86% (≈75%)**
- **Y Ltd. = 25.14% (≈25%)**

**Minimum Portfolio Risk:**
σ²p(min) = (0.75)²(50.25) + (0.25)²(231.25) + 2(0.75)(0.25)(-41.25)
σ²p(min) = 28.27 + 14.45 - 15.47 = **27.25**
σp(min) = √27.25 = **5.22%**`,
    rubric: [
      { criterion: "Expected return calculations", maxScore: 2, description: "Correctly calculated expected returns for both stocks" },
      { criterion: "Variance and standard deviation", maxScore: 2, description: "Accurate variance and SD for individual stocks" },
      { criterion: "Covariance calculation", maxScore: 1, description: "Correct covariance between X and Y" },
      { criterion: "Portfolio risk and return", maxScore: 2, description: "Accurate portfolio calculations at 50:50 weights" },
      { criterion: "Minimum variance portfolio", maxScore: 1, description: "Correct weights for minimum risk portfolio" }
    ]
  },
  {
    id: 2,
    examSession: "Nov 2024",
    topic: "Capital Budgeting",
    marks: 8,
    question: `PQ Ltd. expects sales of ₹100 lakhs in Year 1. The same will increase by ₹20 lakhs per year over the next four years. At the end of 5 years the project would be wound up. 

Details:
- Depreciation: 20% p.a. on straight line method
- Expenses excluding depreciation: 40% of sales
- No salvage value of plant
- Corporate Tax rate: 30%

PQ Ltd. proposes to invest in the plant an amount where the Net Present Value will be Zero.

Calculate the investment which can be made in the plant.`,
    modelAnswer: `**SOLUTION: CAPITAL BUDGETING - ZERO NPV INVESTMENT**

---

**STEP 1: Calculate Expected Sales and Cash Flows**

| Year | Sales (₹ Lakhs) | Expenses @40% | Contribution |
|------|-----------------|---------------|--------------|
| 1 | 100 | 40 | 60 |
| 2 | 120 | 48 | 72 |
| 3 | 140 | 56 | 84 |
| 4 | 160 | 64 | 96 |
| 5 | 180 | 72 | 108 |

---

**STEP 2: Set Up Cash Flow Equation**

Let **P** = Cost of Plant (Investment)

Depreciation per year = P × 20% = **0.20P**

**Annual Profit Before Tax (PBT):**

| Year | Contribution | Less: Depreciation | PBT |
|------|--------------|-------------------|-----|
| 1 | 60 | 0.20P | 60 - 0.20P |
| 2 | 72 | 0.20P | 72 - 0.20P |
| 3 | 84 | 0.20P | 84 - 0.20P |
| 4 | 96 | 0.20P | 96 - 0.20P |
| 5 | 108 | 0.20P | 108 - 0.20P |

---

**STEP 3: Calculate After-Tax Cash Flows**

**Tax = 30% of PBT**
**PAT = PBT × (1 - 0.30) = 0.70 × PBT**
**Cash Flow = PAT + Depreciation**

| Year | PBT | Tax @30% | PAT | Add: Dep | Cash Flow |
|------|-----|----------|-----|----------|-----------|
| 1 | 60-0.20P | 18-0.06P | 42-0.14P | 0.20P | 42+0.06P |
| 2 | 72-0.20P | 21.6-0.06P | 50.4-0.14P | 0.20P | 50.4+0.06P |
| 3 | 84-0.20P | 25.2-0.06P | 58.8-0.14P | 0.20P | 58.8+0.06P |
| 4 | 96-0.20P | 28.8-0.06P | 67.2-0.14P | 0.20P | 67.2+0.06P |
| 5 | 108-0.20P | 32.4-0.06P | 75.6-0.14P | 0.20P | 75.6+0.06P |

**Total Cash Inflows = 294 + 0.30P**

---

**STEP 4: Apply Zero NPV Condition**

For NPV = 0 (without discounting):

Sum of Cash Inflows = Initial Investment

294 + 0.30P = P

294 = P - 0.30P

294 = 0.70P

**P = 294 / 0.70 = ₹420 Lakhs**

---

**VERIFICATION:**

| Year | Cash Flow |
|------|-----------|
| 1 | 42 + 0.06(420) = 42 + 25.2 = 67.2 |
| 2 | 50.4 + 25.2 = 75.6 |
| 3 | 58.8 + 25.2 = 84.0 |
| 4 | 67.2 + 25.2 = 92.4 |
| 5 | 75.6 + 25.2 = 100.8 |
| **Total** | **420.0** |

✓ Total Cash Inflows = Investment = ₹420 Lakhs

**ANSWER: Investment in Plant = ₹420 Lakhs**`,
    rubric: [
      { criterion: "Sales and expense calculation", maxScore: 1, description: "Correctly computed year-wise sales and expenses" },
      { criterion: "Depreciation treatment", maxScore: 2, description: "Proper handling of depreciation as variable" },
      { criterion: "Tax calculation", maxScore: 2, description: "Accurate tax computation at 30%" },
      { criterion: "Cash flow derivation", maxScore: 2, description: "Correct CFAT formula and computation" },
      { criterion: "Final investment value", maxScore: 1, description: "Accurate solution for P with verification" }
    ]
  },
  {
    id: 3,
    examSession: "Nov 2024",
    topic: "Interest Rate Risk",
    marks: 6,
    question: `XY Ltd. is interested in expanding operations and planning to install a unit in US requiring $15 million (net of issue expenses). Floatation cost is 3%. To finance, it proposes to issue GDRs.

Additional Information:
- Expected market price at issue: ₹350 (Face Value ₹100)
- 3 shares underlie each GDR, priced at 6% discount to market
- Expected Exchange Rate: ₹84/$
- Expected dividend: 10% with growth rate of 8%

Calculate:
(i) Number of GDRs to be issued
(ii) Cost of GDR to XY Ltd.`,
    modelAnswer: `**SOLUTION: GDR ISSUE AND COST CALCULATION**

---

**GIVEN DATA:**
- Net Funds Required: $15 million
- Floatation Cost: 3%
- Market Price per Share: ₹350
- Face Value: ₹100
- Shares per GDR: 3
- Discount on GDR: 6%
- Exchange Rate: ₹84/$
- Dividend Rate: 10% on Face Value
- Growth Rate: 8%

---

**PART (i): Number of GDRs to be Issued**

**Step 1: Calculate Gross Issue Size**
Gross Issue = Net Funds / (1 - Floatation Cost)
Gross Issue = $15 million / 0.97
**Gross Issue = $15.464 million**

**Step 2: Calculate Issue Price per GDR**
GDR Price = (Market Price × Shares per GDR) × (1 - Discount)
GDR Price = (₹350 × 3) × 0.94
GDR Price = ₹1,050 × 0.94
**GDR Price = ₹987**

**Step 3: Convert to USD**
GDR Price in $ = ₹987 / ₹84
**GDR Price = $11.75**

**Step 4: Calculate Number of GDRs**
Number of GDRs = Gross Issue / Price per GDR
Number of GDRs = $15.464 million / $11.75
**Number of GDRs = 1.316085 million ≈ 13,16,085 GDRs**

---

**PART (ii): Cost of GDR to XY Ltd.**

**Step 1: Calculate Dividend per GDR**
Dividend per Share = 10% of ₹100 = ₹10
Dividend per GDR = ₹10 × 3 shares = **₹30**

**Step 2: Calculate Net Proceeds per GDR**
Net Proceeds = GDR Price × (1 - Floatation Cost)
Net Proceeds = ₹987 × 0.97
**Net Proceeds = ₹957.39**

**Step 3: Apply Cost of Equity Formula (Gordon Model)**

Cost of GDR (Ke) = (D₁ / P₀) + g

Where:
- D₁ = Dividend per GDR = ₹30
- P₀ = Net Proceeds = ₹957.39
- g = Growth rate = 8%

**Ke = (30 / 957.39) + 0.08**
**Ke = 0.0313 + 0.08**
**Ke = 0.1113 or 11.13%**

---

**SUMMARY:**

| Particulars | Value |
|-------------|-------|
| Gross Issue Size | $15.464 million |
| Issue Price per GDR (₹) | ₹987 |
| Issue Price per GDR ($) | $11.75 |
| **Number of GDRs** | **1,316,085** |
| Dividend per GDR | ₹30 |
| Net Proceeds per GDR | ₹957.39 |
| **Cost of GDR** | **11.13%** |`,
    rubric: [
      { criterion: "Gross issue calculation", maxScore: 1, description: "Correctly adjusted for floatation cost" },
      { criterion: "GDR pricing", maxScore: 2, description: "Accurate GDR price with discount and currency conversion" },
      { criterion: "Number of GDRs", maxScore: 1, description: "Correct division to get number of GDRs" },
      { criterion: "Cost of GDR calculation", maxScore: 2, description: "Proper application of Gordon model for cost" }
    ]
  }
];




