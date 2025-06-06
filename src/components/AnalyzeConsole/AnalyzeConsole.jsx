import { Field, Form, Formik } from "formik";
import * as SC from "./AnalyzeConsoleStyled";
const AnalyzeConsole = () => {
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
        {() => (
          <Form>
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
                <label htmlFor="settings">
                  <Field type="checkbox" name="excludeSpaces" />
                  Exclude Spaces
                </label>
                <label htmlFor="settings">
                  <Field type="checkbox" name="limit" />
                  Exclude Spaces
                </label>
              </div>
              <div>
                <p>Approx. reading time: </p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AnalyzeConsole;
