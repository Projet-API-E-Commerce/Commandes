const verifyToken = async (token) => {
    try {
      const authResponse = await fetch("A CHANGER", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
  
      if (!authResponse.ok) {
        throw new Error("Invalid token");
      }
  
      const userData = await authResponse.json();
  
      if (userData.role !== "admin") {
        throw new Error("Unauthorized");
      }
  
      return userData;
    } catch (error) {
      throw new Error("Invalid token or unauthorized");
    }
  };