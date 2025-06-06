import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import * as SC from "./AnalyzeConsoleStyled";

import { timeGauge } from "../../utils/timeGauge";
import FormObserver from "../../utils/FormObserver";
import ErrorCon from "../ErrorCon/ErrorCon";

const validationSchema = Yup.object().shape({
  text: Yup.string().max(13, "Limit reached! Your text exceeds 300 characters."),
});
const AnalyzeConsole = ({ handleText, limit }) => {
  return (
    <div>
      <h3>Analyze your text in real-time.</h3>
      <Formik
        initialValues={{
          text: "",
          limit: false,
          excludeSpaces: false,
        }}
        validationSchema={limit ? validationSchema : null}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Submitted text:", values.text);
          setSubmitting(false);
        }}
      >
        {({ values, errors }) => (
          <Form>
            <FormObserver onChange={handleText} />
            <label htmlFor="text">
              <Field
                as="textarea"
                id="text"
                name="text"
                rows="7"
                placeholder="Start typing here… (or paste your text)"
                style={
                  errors.text 
                    ? { border: "1px solid #ff0000" }
                    : { border: "1px solid #ccc" }
                }
                disabled={errors.text ? true : false}
              />
              {errors.text ? <ErrorMessage name="text"/> : null}
            </label>
            <div>
              <div>
                <label htmlFor="excludeSpaces">
                  <Field
                    type="checkbox"
                    name="excludeSpaces"
                    id="excludeSpaces"
                  />
                  Exclude Spaces
                </label>
                <label htmlFor="limit">
                  <Field type="checkbox" name="limit" id="limit" />
                  Set Character Limit
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
