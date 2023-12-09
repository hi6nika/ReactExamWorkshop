import { useEffect, useState } from "react";
import { getCars } from "../services/carServices";
import setSearchOptions from "../utils/setSearchOptions";
import useForm from "../hooks/useFormHook";
import useSelectForm from "../hooks/useSelectForm";

function SearchBox() {
  const [cars, setCars] = useState([]);

  const [options, setOptions] = useState([]);

  const [YearOptions, setYearOptions] = useState([]);

  const [MakeOptions, setMakeOptions] = useState([]);

  const [ModelOptions, setModelOptions] = useState([]);

  const [BodyOptions, setBodyOptions] = useState([]);

  const [ConditionOptions, setConditionOptions] = useState([]);

  const [PriceOptions, setPriceOptions] = useState([]);

  const [value, setValue] = useState({});

  function submitEventHandler(e) {
    e.preventDefault();

    console.log(value);
  }

  useEffect(() => {
    //

    const populate = async () => {
      setCars(await getCars());
    };

    populate().catch((e) => {
      console.log(e);
    });
  }, []);

  useEffect(() => {
    const addOptions = async () => {
      setOptions(setSearchOptions(cars));
    };

    addOptions().catch((e) => {
      console.log(e);
    });
  }, [cars]);

  useEffect(() => {
    const populateOptions = async () => {
      for (const [keys, values] of Object.entries(options)) {
        if (keys === "year") {
          setYearOptions(values);
        }

        if (keys === "make") {
          setMakeOptions(values);
        }

        if (keys === "model") {
          setModelOptions(values);
        }

        if (keys === "body") {
          setBodyOptions(values);
        }

        if (keys === "condition") {
          setConditionOptions(values);
        }

        if (keys === "price") {
          setPriceOptions(values);
        }
      }
    };

    populateOptions().catch((e) => {
      console.log(e);
    });
  }, [options]);

  return (
    <div className="model-search-content">
      <form onSubmit={submitEventHandler}>
        <div className="row">
          <div className="col-md-offset-1 col-md-2 col-sm-12">
            <div className="single-model-search">
              <h2>select year</h2>
              <div className="model-select-icon">
                <select
                  onChange={(event) =>
                    setValue((state) => [{ ...state }, event.target.value])
                  }
                  className="form-control"
                >
                  <option value="default">year</option>

                  {YearOptions.map((x) => {
                    return (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="single-model-search">
              <h2>body style</h2>
              <div className="model-select-icon">
                <select
                  onChange={(event) =>
                    setValue((state) => [state, event.target.value])
                  }
                  className="form-control"
                >
                  <option value="default">style</option>

                  {BodyOptions.map((x) => {
                    return (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-offset-1 col-md-2 col-sm-12">
            <div className="single-model-search">
              <h2>select make</h2>
              <div className="model-select-icon">
                <select
                  onChange={(event) =>
                    setValue((state) => [state, event.target.value])
                  }
                  className="form-control"
                >
                  <option value="default">make</option>

                  {MakeOptions.map((x) => {
                    return (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="single-model-search">
              <h2>car condition</h2>
              <div className="model-select-icon">
                <select
                  onChange={(event) =>
                    setValue((state) => [state, event.target.value])
                  }
                  className="form-control"
                >
                  <option value="default">condition</option>

                  {ConditionOptions.map((x) => {
                    return (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-offset-1 col-md-2 col-sm-12">
            <div className="single-model-search">
              <h2>select model</h2>
              <div className="model-select-icon">
                <select
                  onChange={(event) =>
                    setValue(
                      (state) => (   { ...state ,  model: event.target.value })
                    )
                  }
                  className="form-control"
                >
                  <option value="default">model</option>

                  {ModelOptions.map((x) => {
                    return (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="single-model-search">
              <h2>select price</h2>
              <div className="model-select-icon">
                <select
                  onChange={(event) =>
                    setValue(
                      (state) => (   { ...state ,  price: event.target.value })
                    )
                  }
                  className="form-control"
                >
                  <option value="default">price</option>

                  {PriceOptions.map((x) => {
                    return (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-12">
            <div className="single-model-search text-center">
              <button type="submit" className="welcome-btn model-search-btn">
                search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
