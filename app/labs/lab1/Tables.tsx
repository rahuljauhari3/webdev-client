export default function Tables() {
    return (
      <div id="wd-tables">
        <h4>Tables</h4>
  
        <h5>Quiz Grades</h5>
  
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Score</th>
            </tr>
          </thead>
  
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>85</td>
            </tr>
  
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>90</td>
            </tr>
  
            <tr>
              <td>Q3</td>
              <td>JavaScript</td>
              <td>95</td>
            </tr>
  
            <tr>
              <td>Q4</td>
              <td>React</td>
              <td>88</td>
            </tr>
  
            <tr>
              <td>Q5</td>
              <td>State</td>
              <td>92</td>
            </tr>
  
            <tr>
              <td>Q6</td>
              <td>REST</td>
              <td>87</td>
            </tr>
  
            <tr>
              <td>Q7</td>
              <td>Express</td>
              <td>91</td>
            </tr>
  
            <tr>
              <td>Q8</td>
              <td>MongoDB</td>
              <td>89</td>
            </tr>
  
            <tr>
              <td>Q9</td>
              <td>Mongoose</td>
              <td>93</td>
            </tr>
  
            <tr>
              <td>Q10</td>
              <td>Full Stack</td>
              <td>90</td>
            </tr>
          </tbody>
  
          <tfoot>
            <tr>
              <td colSpan={2}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
  
        <h5>My Table</h5>
  
        <table id="wd-your-table" border={1}>
          <thead>
            <tr>
              <th>Course</th>
              <th>Topic</th>
              <th>Interest Level</th>
            </tr>
          </thead>
  
          <tbody>
            <tr>
              <td>Web Development</td>
              <td>React</td>
              <td>High</td>
            </tr>
  
            <tr>
              <td>Information Retrieval</td>
              <td>Search Systems</td>
              <td>High</td>
            </tr>
  
            <tr>
              <td>Programming Design</td>
              <td>Design Patterns</td>
              <td>High</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }