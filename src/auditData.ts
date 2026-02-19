export interface Question {
  id: string;
  text: string;
}

export interface Section {
  id: string;
  title: string;
  subtitle: string;
  measures: string;
  questions: Question[];
}

export const auditData: Section[] = [
  {
    id: 'governance',
    title: 'Governance Layer Assessment',
    subtitle: 'Governance & Oversight',
    measures: 'Board visibility. Strategic alignment. Risk control.',
    questions: [
      { id: 'g1', text: 'We have clearly defined digital governance policies for property operations.' },
      { id: 'g2', text: 'Our board receives structured digital performance reporting.' },
      { id: 'g3', text: 'Digital KPIs are aligned with asset-level financial performance.' },
      { id: 'g4', text: 'There is a documented data ownership framework.' },
      { id: 'g5', text: 'Technology decisions follow a defined strategy (not vendor-driven).' },
    ],
  },
  {
    id: 'adoption',
    title: 'Adoption & Engagement Score',
    subtitle: 'Internal & Tenant Digital Adoption',
    measures: 'Execution strength. Behavioural adoption. Change management.',
    questions: [
      { id: 'a1', text: 'Property managers consistently use centralized systems.' },
      { id: 'a2', text: 'Tenant communications are digitally managed and tracked.' },
      { id: 'a3', text: 'Digital rent payment adoption exceeds 75%.' },
      { id: 'a4', text: 'Staff receive structured digital training.' },
      { id: 'a5', text: 'System usage is actively monitored and optimized.' },
    ],
  },
  {
    id: 'collection',
    title: 'Collection Cycle Efficiency Score',
    subtitle: 'Revenue & Cash Flow Digitization',
    measures: 'Cash flow velocity. Revenue leakage. Financial visibility.',
    questions: [
      { id: 'c1', text: 'Rent collection is automated.' },
      { id: 'c2', text: 'Late payment tracking is system-generated (not manual).' },
      { id: 'c3', text: 'Payment reconciliation is automated.' },
      { id: 'c4', text: 'Collection cycle time is measured monthly.' },
      { id: 'c5', text: 'Delinquency data is visible in real time.' },
    ],
  },
  {
    id: 'integration',
    title: 'Data Sync & Integration Health Check',
    subtitle: 'System Architecture & Data Integrity',
    measures: 'Operational efficiency. Architecture maturity. Scalability.',
    questions: [
      { id: 'i1', text: 'Accounting, CRM, leasing, and maintenance systems are integrated.' },
      { id: 'i2', text: 'Data is synced in real time (not batch/manual uploads).' },
      { id: 'i3', text: 'Reporting is generated from a unified source of truth.' },
      { id: 'i4', text: 'Duplicate data entry is minimal.' },
      { id: 'i5', text: 'API integrations are documented and maintained.' },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance & Risk Readiness Index',
    subtitle: 'Risk, Audit, and Regulatory Controls',
    measures: 'Institutional readiness. Audit defense. Portfolio resilience.',
    questions: [
      { id: 'r1', text: 'Compliance documentation is digitized and centralized.' },
      { id: 'r2', text: 'Audit trails are automatically recorded.' },
      { id: 'r3', text: 'Regulatory reporting can be generated within 24–48 hours.' },
      { id: 'r4', text: 'Data access is role-based and secure.' },
      { id: 'r5', text: 'Backup and disaster recovery systems are tested annually.' },
    ],
  },
];

export const classifications = [
  {
    min: 0,
    max: 40,
    label: 'FRAGMENTED',
    description: 'Siloed systems. Manual collections. High compliance risk. Limited board visibility.',
    riskLevel: 'Severe',
    leakage: 'High',
    leakageLabel: 'Hidden Revenue Leakage',
  },
  {
    min: 41,
    max: 65,
    label: 'OPERATIONAL',
    description: 'Basic systems in place. Partial automation. Limited integration.',
    riskLevel: 'Moderate',
    leakage: 'High',
    leakageLabel: 'Scalability Risk',
  },
  {
    min: 66,
    max: 85,
    label: 'STRUCTURED',
    description: 'Defined processes. Strong collection systems. Partial integration.',
    riskLevel: 'Managed',
    leakage: 'Improving',
    leakageLabel: 'Board Visibility',
  },
  {
    min: 86,
    max: 105,
    label: 'STANDARDISED',
    description: 'Integrated systems. Reliable governance. Real-time reporting.',
    riskLevel: 'Low',
    leakage: 'Scalable Infrastructure',
    leakageLabel: 'Infrastructure Status',
  },
  {
    min: 106,
    max: 125,
    label: 'INSTITUTIONAL-GRADE',
    description: 'Fully integrated architecture. Automated revenue systems. Real-time portfolio visibility. Board-ready governance. You are operating at private equity or REIT standard.',
    riskLevel: 'REIT Standard',
    leakage: 'Institutional Excellence',
    leakageLabel: 'Portfolio Status',
  },
];
