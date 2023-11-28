function AddCar() {
  function submitEventHandler(e) {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    console.log(formDataObject);

    form.reset();
  }

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <form onSubmit={submitEventHandler}>
        <div className="container">
          <h1>Add a car</h1>

          <hr />

          <label htmlFor="imgUrl">
            <b>Image Url</b>
          </label>
          <input
            type="text"
            placeholder="Enter imgUrl"
            name="imgUrl"
            id="imgUrl"
          />

          <label htmlFor="make">
            <b>Make</b>
          </label>
          <input type="text" placeholder="Enter Make" name="make" id="make" />

          <label htmlFor="model">
            <b>Model</b>
          </label>
          <input
            type="text"
            placeholder="Enter Model"
            name="model"
            id="model"
          />

          <label htmlFor="condition">
            <b>Condition</b>
          </label>
          <input
            type="text"
            placeholder="Enter Condition"
            name="condition"
            id="condition"
          />

          <label htmlFor="year">
            <b>Year</b>
          </label>
          <input type="text" placeholder="Enter Year" name="year" id="year" />

          <label htmlFor="body">
            <b>Body</b>
          </label>
          <input
            type="text"
            placeholder="Enter Body Style"
            name="body"
            id="body"
          />

          <label htmlFor="price">
            <b>Price</b>
          </label>
          <input
            type="text"
            placeholder="Enter Price"
            name="price"
            id="price"
          />

          <button type="submit" className="registerbtn">
            AddCar
          </button>
          <hr />
        </div>
      </form>
    </>
  );
}

export default AddCar;
