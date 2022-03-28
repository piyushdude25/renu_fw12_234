export const LoginSignUp = () => {
  const [signupdata, setSignupdata] = useState({
    name: "",
    password: "",
    location: "",
    interest: "",
    technology: "",
    food: "",
  });
  const handlesignup = (e) => {
    const { className, value } = e.target;
    setSignupdata({ ...signupdata, [className]: value });
  };
  const signupfun = (e) => {
    e.preventDefault();
  };
  return (
    <div className="loginSignUp">
      <form
        className="signUp"
        onSubmit={(e) => {
          signupfun;
        }}
      >
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          value={signupdata.name}
          onChange={(event) => {
            handlesignup;
          }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          value={signupdata.password}
          onChange={(event) => {
            handlesignup;
          }}
          required
        />
        <br />
        <select
          value={signupdata.location}
          className="location"
          onChange={(event) => {
            handlesignup;
          }}
        >
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          onChange={(event) => {
            handlesignup;
          }}
        />
        <br />
        <label>food</label>
        <input
          type="checkbox"
          className="food"
          onChange={(event) => {
            handlesignup;
          }}
        />
        <br />
        <label>movies</label>
        <input
          type="checkbox"
          className="movies"
          onChange={(event) => {
            handlesignup;
          }}
        />
        <br />
        <label>culture</label>
        <input
          type="checkbox"
          className="culture"
          onChange={(event) => {
            handlesignup;
          }}
        />
        <br />
        <label>art</label>
        <input
          type="checkbox"
          className="art"
          onChange={(event) => {
            handlesignup;
          }}
        />
        <br />
        <label>drama</label>
        <input
          type="checkbox"
          className="drama"
          onChange={(event) => {
            handlesignup;
          }}
        />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={(event) => {
            handlesignup;
          }}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form className="login" onSubmit={(e) => {}}>
        <h1>Login</h1>
        <label>name</label>
        <input type="text" className="name" onChange={(event) => {}} required />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => {}}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
