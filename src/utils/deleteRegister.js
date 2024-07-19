export async function deleteRegister(id, url) {
    try {
      const response = await fetch(
        `${url}/${id}`,
        {
          method: "DELETE",
        }
      );
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      await response.json();
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  }