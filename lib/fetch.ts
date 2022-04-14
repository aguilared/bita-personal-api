export const fetcher = async (url: any, data = undefined) => {
  const res = await fetch(window.location.origin + url, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const errorinfo = await res.json();
    console.log("Error en fetch errorinfo", errorinfo);
    const error = new Error("An error occurred while fetching the data.");
    console.log("Error en fetch error", error);
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};
