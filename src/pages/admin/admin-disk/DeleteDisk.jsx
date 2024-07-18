import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ConfirmationModal from "../../../components/admin/ConfirmationModal";
import { useNavigate } from "react-router-dom";

const DeleteDisk = ({ item, url }) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const deleteRegister = async () => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      await response.json();
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setDeleteConfirmation(false);
      window.location.reload();
    }
  };
  return (
    <>
      <button
        className="bg-rose-500 hover:bg-rose-600 w-8 h-8"
        onClick={() => setDeleteConfirmation(!deleteConfirmation)}
      >
        <FontAwesomeIcon icon={faTrash} className="text-white" />
      </button>
      {deleteConfirmation ? (
        <ConfirmationModal
          item={item}
          cancel={setDeleteConfirmation}
          confirm={deleteRegister}
        />
      ) : null}
    </>
  );
};

export default DeleteDisk;
