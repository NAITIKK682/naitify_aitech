// Helper functions for common operations

// Format response data
exports.formatResponse = (success, data = null, error = null) => {
  return {
    success,
    data,
    error,
    timestamp: new Date().toISOString()
  };
};

// Validate email format
exports.validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

// Generate random string
exports.generateRandomString = (length) => {
  return Math.random().toString(36).substring(2, length + 2);
};

// Parse query parameters for pagination
exports.getPagination = (query) => {
  const page = parseInt(query.page, 10) || 1;
  const limit = parseInt(query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return {
    page,
    limit,
    startIndex,
    endIndex
  };
};

// Calculate time difference
exports.getTimeDifference = (date1, date2) => {
  const diff = Math.abs(new Date(date1) - new Date(date2));
  return Math.floor(diff / 1000); // Return difference in seconds
};