// Navigation configuration for CA Final subjects
export const subjectNavigation = [
  {
    path: '/fr',
    title: 'Financial Reporting',
    subtitle: 'Paper 1',
    icon: '📊',
    color: '#8B0000', // Maroon
    description: 'Consolidation, Ind AS, Revenue & Leases',
    stats: {
      mcqs: 8,
      longAnswers: 2
    }
  },
  {
    path: '/afm',
    title: 'Advanced Financial Management',
    subtitle: 'Paper 2',
    icon: '⚡',
    color: '#f97316', // Orange
    description: 'Portfolio, Derivatives & Foreign Exchange',
    stats: {
      mcqs: 20,
      longAnswers: 3
    }
  },
  {
    path: '/auditing',
    title: 'Advanced Auditing',
    subtitle: 'Paper 3',
    icon: '📋',
    color: '#8B4513', // Brown
    description: 'Auditing, Assurance & Professional Ethics',
    stats: {
      mcqs: 15,
      longAnswers: 3
    }
  },
  {
    path: '/indirect-tax',
    title: 'Indirect Tax Laws',
    subtitle: 'Paper 5',
    icon: '🏛️',
    color: '#3b82f6', // Blue
    description: 'GST, Customs & Foreign Trade Policy',
    stats: {
      mcqs: 25,
      longAnswers: 5
    }
  },
  {
    path: '/ibs',
    title: 'Integrated Business Solutions',
    subtitle: 'Paper 6',
    icon: '🔗',
    color: '#9b87f5', // Lavender
    description: 'Financial Reporting, Tax, Audit & Corporate Laws',
    stats: {
      mcqs: 30,
      longAnswers: 3
    }
  }
];

// Helper function to get navigation item by path
export const getNavigationByPath = (path) => {
  return subjectNavigation.find(item => item.path === path);
};

// Helper function to get all navigation items
export const getAllNavigation = () => {
  return subjectNavigation;
};










