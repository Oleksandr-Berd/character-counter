import { Field, Form, Formik } from "formik";
import * as SC from "./AnalyzeConsoleStyled";
import { timeGauge } from "../../utils/timeGauge";
import FormObserver from "../../utils/FormObserver";
const AnalyzeConsole = ({handleText}) => {
  return (
    <div>
      <h3>Analyze your text in real-time.</h3>
      <Formik
        initialValues={{
          text: "",
          limit: false,
          excludeSpaces: false,
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Submitted text:", values.text);
          setSubmitting(false);
        }}
      >
        {({values}) => (
          <Form>
            <FormObserver onChange={handleText}/>
            <label htmlFor="text">
              <Field
                as="textarea"
                id="text"
                name="text"
                rows="7"
                placeholder="Start typing here… (or paste your text)"
              />
            </label>
            <div>
              <div>
                <label htmlFor="excludeSpaces">
                  <Field type="checkbox" name="excludeSpaces" id="excludeSpaces"/>
                  Exclude Spaces
                </label>
                <label htmlFor="limit">
                  <Field type="checkbox" name="limit" id="limit"/>
                  Exclude Spaces
                </label>
              </div>
              <div>
                <p>Approx. reading time: {timeGauge(values.text)}</p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AnalyzeConsole;
