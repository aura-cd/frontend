export const fetchHome = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/home`);
    return response.json();
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
