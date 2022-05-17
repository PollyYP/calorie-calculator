import "./App.css";

function App() {
  return (
    <div>
      <h2>
        How many calories in a healthy rate should I eat per day to lose weight
        within 12 weeks?
      </h2>
      <form>
        <label htmlFor="gender">Gender</label>
        <input name="gender" type="radio" id="inputMale" value="male" />
        <label for="male">Male</label>
        <input name="gender" type="radio" id="inputFemale" value="female" />
        <label for="female">Female</label>
        <label htmlFor="age">Age</label>
        <input name="age" type="text" id="inputAge" placeholder="Age" />
        <label htmlFor="height">Height</label>
        <input name="feet" type="number" id="inputFeet" placeholder="feet" />
        <input
          name="inches"
          type="number"
          id="inputInches"
          placeholder="inches"
        />
        <label htmlFor="weight">Weight</label>
        <input
          name="weight"
          type="number"
          id="inputWeight"
          placeholder="pounds"
        />
        <label htmlFor="goalWeight">Goal Weight</label>
        <input
          name="goalWeight"
          type="number"
          id="inputGoalWeight"
          placeholder="pounds"
        />
      </form>
    </div>
  );
}

export default App;
