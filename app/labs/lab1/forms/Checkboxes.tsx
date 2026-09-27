export default function Checkboxes() {
    return (
      <>
        <h5 id="wd-checkboxes">Checkboxes</h5>
        <label>Favorite movie genre:</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-thriller" />
        <label htmlFor="wd-chkbox-thriller">Thriller</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-romance" />
        <label htmlFor="wd-chkbox-romance">Romance</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-action" />
        <label htmlFor="wd-chkbox-action">Action</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-adventure" />
        <label htmlFor="wd-chkbox-adventure">Adventure</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-none" />
        <label htmlFor="wd-chkbox-none">None</label>
        <br />  
      </>
    );
  }