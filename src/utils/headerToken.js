export const getHeaders = () => {
    const access = localStorage.getItem("access");
  
    return {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${access}`,
    };
  };