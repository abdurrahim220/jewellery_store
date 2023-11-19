import Input from "../../component/Input/Input";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="grid">
        <h2 className="text-lg">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className=""></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="0-50"
          title="$0 - 50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="50-100"
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="100-150"
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="150-20000"
          title="Over $150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
