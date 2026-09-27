export default function RadioButtons() {
    return (
      <>
        <h5 id="wd-radio-buttons">Radio buttons</h5>
        <label>Favorite movie genre:</label>
        <br />
        <input type="radio" name="radio-genre" id="wd-radio-thriller" />
        <label htmlFor="wd-radio-thriller">Thriller</label>
        <br />
        <input type="radio" name="radio-genre" id="wd-radio-romance" />
        <label htmlFor="wd-radio-romance">Romance</label>
        <br />
        <input type="radio" name="radio-genre" id="wd-radio-action" />
        <label htmlFor="wd-radio-action">Action</label>
        <br />
        <input type="radio" name="radio-genre" id="wd-radio-adventure" />
        <label htmlFor="wd-radio-adventure">Adventure</label>
        <br />
        <input type="radio" name="radio-genre" id="wd-radio-none" />
        <label htmlFor="wd-radio-none">None</label>
        <br />  

        <label>How often do you watch movies?</label>
        <br />
        <input type="radio" name="radio-frequency" id="wd-radio-daily" />
        <label htmlFor="wd-radio-daily">Daily</label>
        <br />
        <input type="radio" name="radio-frequency" id="wd-radio-weekly" />
        <label htmlFor="wd-radio-weekly">Weekly</label>
        <br />
        <input type="radio" name="radio-frequency" id="wd-radio-rarely" />
        <label htmlFor="wd-radio-rarely">Rarely</label>
      </>
    );
  }