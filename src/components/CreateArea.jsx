import React, { useState } from "react";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


function CreateArea(props) {
  const [expand, setE] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function exp() {
    setE(true);
  }

  return (
    <div>
      <form className="create-note">
        {expand && (
          <input
            autoComplete="off"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={exp}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
        />
        <Zoom in={expand}>
          <Fab onClick={submitNote}>
            <NoteAddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
