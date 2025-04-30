export const getUser = async () => ({
    name: "Mahesh",
    email: "user@example.com",
  });
  
  export const getGroups = async () => [
    { id: 1, name: "Trip to Mountains" },
    { id: 2, name: "Weekend Project" },
  ];
  
  export const getSummary = async () => ({
    totalOwed: 120,
    totalOwe: 80,
    activeGroups: 2,
    recentExpensesCount: 4,
  });
  
  export const getRecentExpenses = async () => [
    { id: 1, title: "Hotel Booking", amount: 200 },
    { id: 2, title: "Snacks", amount: 40 },
  ];
  
  export const getUserGroups = async () => [
    { id: 1, name: "Trip to Mountains" },
    { id: 2, name: "Weekend Project" },
  ];
  