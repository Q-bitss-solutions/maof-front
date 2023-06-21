export const getHeaders = () => {
    const access = localStorage.getItem("access");

    return {
      'Authorization': `Bearer ${access}`,
    };
  };