const Form = ({ country, setCountry, data }) => {
  return (
    <div>
      <input
        value={country}
        placeholder="Country"
        onChange={(e) => setCountry(e.target.value)}
      />
    </div>
  );
};

export default Form;
