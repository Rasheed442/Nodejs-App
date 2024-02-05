import React, { useState, useEffect } from "react";

function CartPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch data only on the client
    const fetchData = async () => {
      const storedUserData = window.localStorage.getItem("UserData");
      if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <>
      {userData?.[0]?.map((cartproducts, index) => {
        return (
          <div key={index}>
            <p>{cartproducts?.description}</p>
          </div>
        );
      })}
    </>
  );
}

export default CartPage;
