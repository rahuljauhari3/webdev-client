export default function Dropdowns() {
    return (
      <>
        <h4 id="wd-dropdowns">Dropdowns</h4>
        <h5>Select one</h5>
        <label htmlFor="wd-select-one-genre">Favorite movie genre: </label>
        <br />
        <select id="wd-select-one-genre" defaultValue="NONE">
          <option value="THRILLER">Thriller</option>
          <option value="ROMANCE">Romance</option>
          <option value="ACTION">Action</option>
          <option value="ADVENTURE">Adventure</option>
          <option value="NONE">None</option>
        </select>
        <h5> Select many</h5>
        <label htmlFor="wd-select-many-genre">Favorite movie genre: </label>
        <br />
        <select id="wd-select-many-genre" defaultValue={["THRILLER", "ROMANCE"]} multiple>
          <option value="THRILLER">Thriller</option>
          <option value="ROMANCE">Romance</option>
          <option value="ACTION">Action</option>
          <option value="ADVENTURE">Adventure</option>
          <option value="NONE">None</option>
        </select>
      </>
    );
  }