export default function YourForm() {
    return (
      <form id="wd-your-form">
        <h4>Student Profile</h4>
  
        <label htmlFor="wd-your-name">Name:</label>
        <input
          id="wd-your-name"
          type="text"
          defaultValue="Rahul Jauhari"
        />
        <br />
  
        <label htmlFor="wd-your-password">Password:</label>
        <input
          id="wd-your-password"
          type="password"
          defaultValue="webdev123"
        />
        <br />
  
        <label htmlFor="wd-your-bio">Biography:</label>
        <br />
        <textarea
          id="wd-your-bio"
          rows={5}
          cols={40}
          defaultValue="I am a computer science student interested in systems, AI, and web development."
        />
        <br />
  
        <h5>Program</h5>
  
        <input
          id="wd-your-program-mscs"
          type="radio"
          name="your-program"
          defaultChecked
        />
        <label htmlFor="wd-your-program-mscs">
          MS Computer Science
        </label>
        <br />
  
        <input
          id="wd-your-program-msai"
          type="radio"
          name="your-program"
        />
        <label htmlFor="wd-your-program-msai">
          MS Artificial Intelligence
        </label>
        <br />
  
        <input
          id="wd-your-program-other"
          type="radio"
          name="your-program"
        />
        <label htmlFor="wd-your-program-other">
          Other
        </label>
  
        <h5>Preferred learning format</h5>
  
        <input
          id="wd-your-format-in-person"
          type="radio"
          name="your-format"
          defaultChecked
        />
        <label htmlFor="wd-your-format-in-person">
          In person
        </label>
        <br />
  
        <input
          id="wd-your-format-online"
          type="radio"
          name="your-format"
        />
        <label htmlFor="wd-your-format-online">
          Online
        </label>
        <br />
  
        <input
          id="wd-your-format-hybrid"
          type="radio"
          name="your-format"
        />
        <label htmlFor="wd-your-format-hybrid">
          Hybrid
        </label>
  
        <h5>Technical interests</h5>
  
        <input
          id="wd-your-interest-ai"
          type="checkbox"
          defaultChecked
        />
        <label htmlFor="wd-your-interest-ai">
          Artificial Intelligence
        </label>
        <br />
  
        <input
          id="wd-your-interest-systems"
          type="checkbox"
          defaultChecked
        />
        <label htmlFor="wd-your-interest-systems">
          Systems
        </label>
        <br />
  
        <input
          id="wd-your-interest-web"
          type="checkbox"
          defaultChecked
        />
        <label htmlFor="wd-your-interest-web">
          Web Development
        </label>
        <br />
  
        <input
          id="wd-your-interest-databases"
          type="checkbox"
        />
        <label htmlFor="wd-your-interest-databases">
          Databases
        </label>
  
        <h5>Favorite course area</h5>
  
        <label htmlFor="wd-your-course">
          Select one:
        </label>
        <br />
  
        <select
          id="wd-your-course"
          defaultValue="SYSTEMS"
        >
          <option value="WEB">Web Development</option>
          <option value="SYSTEMS">Systems</option>
          <option value="AI">Artificial Intelligence</option>
          <option value="IR">Information Retrieval</option>
        </select>
  
        <h5>Programming languages</h5>
  
        <label htmlFor="wd-your-languages">
          Select several:
        </label>
        <br />
  
        <select
          id="wd-your-languages"
          multiple
          defaultValue={["PYTHON", "CPP", "JAVA"]}
        >
          <option value="PYTHON">Python</option>
          <option value="CPP">C++</option>
          <option value="JAVA">Java</option>
          <option value="JAVASCRIPT">JavaScript</option>
          <option value="TYPESCRIPT">TypeScript</option>
        </select>
  
        <h5>Other information</h5>
  
        <label htmlFor="wd-your-email">Email:</label>
        <input
          id="wd-your-email"
          type="email"
          placeholder="name@northeastern.edu"
        />
        <br />
  
        <label htmlFor="wd-your-experience">
          Years of programming experience:
        </label>
        <input
          id="wd-your-experience"
          type="number"
          min={0}
          defaultValue={4}
        />
        <br />
  
        <label htmlFor="wd-your-dob">
          Date of birth:
        </label>
        <input
          id="wd-your-dob"
          type="date"
        />
        <br />
  
        <label htmlFor="wd-your-confidence">
          Web development confidence:
        </label>
        <input
          id="wd-your-confidence"
          type="range"
          min={1}
          max={10}
          defaultValue={5}
        />
  
        <br />
        <br />
  
        <button type="submit">
          Save
        </button>
  
        <button type="button">
          Cancel
        </button>
      </form>
    );
  }