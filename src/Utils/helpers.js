export const getUniqueValues = (data, type) => {
    let uniqueValues = data.reduce((values, item) => {
      if (!values.includes(item[type])) {
        values.push(item[type]);
      }
      return values;
    }, []);
    if (type === "category") {
      uniqueValues = ["all", ...uniqueValues];
    }
    return uniqueValues;
  };

  export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number / 100)
  }

  export const value = (data, type) => {
    let unique = data.map((item) => item[type])
    if (type === 'colors') {
      unique = unique.flat()
    }
  
    return ['all', ...new Set(unique)]
  }
  