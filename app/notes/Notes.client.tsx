"use client";
import { fetchNotes } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import NoteList from "@/components/NoteList/NoteList";
import css from "./Notes.module.css";

export default function NotesClient() {
  const { data } = useQuery({
    queryKey: ["notes"],
    queryFn: () => fetchNotes({}),
  });

  return (
    <div className={css.notes_page}>
      {data && data.notes.length > 0 && <NoteList notes={data.notes} />}
    </div>
  );
}
