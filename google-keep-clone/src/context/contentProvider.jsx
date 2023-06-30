import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    const storedArchiveNotes = localStorage.getItem("archiveNotes");
    const storedDeletedNotes = localStorage.getItem("deletedNotes");

    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }

    if (storedArchiveNotes) {
      setArchiveNotes(JSON.parse(storedArchiveNotes));
    }

    if (storedDeletedNotes) {
      setDeletedNotes(JSON.parse(storedDeletedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("archiveNotes", JSON.stringify(archiveNotes));
  }, [archiveNotes]);

  useEffect(() => {
    localStorage.setItem("deletedNotes", JSON.stringify(deletedNotes));
  }, [deletedNotes]);

  return (
    <DataContext.Provider
      value={{
        notes,
        setNotes,
        archiveNotes,
        setArchiveNotes,
        deletedNotes,
        setDeletedNotes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
