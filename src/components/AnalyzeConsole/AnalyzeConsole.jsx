import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import * as SC from "./AnalyzeConsoleStyled";

import infoIcon from "../../assets/images/icon-info.svg"

import { timeGauge } from "../../utils/timeGauge";
import FormObserver from "../../utils/FormObserver";

const validationSchema = Yup.object().shape({
  text: Yup.string().max(
    300,
    "Limit reached! Your text exceeds 300 characters."
  ),
});

const FormikErrorMessage = (props) => <ErrorText {...props} />;
const AnalyzeConsole = ({ handleText, limit }) => {
  return (
    <SC.AnalyzeConsoleStyled>
      <SC.ConsoleTitleStyled>
        Analyze your text in real-time.
      </SC.ConsoleTitleStyled>
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
            <label htmlFor="text" style={{position:"relative"}}>
              <SC.TextareaStyled
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
              <SC.ErrorStyled  >
                <img src={infoIcon} alt="info" style={!errors.text ? { display: "none" } : {}}/>
                <p>{errors.text}</p>
              </SC.ErrorStyled>
            </label>
            <SC.SettingsCon>
              <SC.SettingsStyled>
                <label htmlFor="excludeSpaces">
                  <SC.CheckStyled
                    type="checkbox"
                    name="excludeSpaces"
                    id="excludeSpaces"
                  />
                  Exclude Spaces
                </label>
                <label htmlFor="limit">
                  <SC.CheckStyled type="checkbox" name="limit" id="limit" />
                  Set Character Limit
                </label>
              </SC.SettingsStyled>
              <div>
                <p>Approx. reading time: {timeGauge(values.text)}</p>
              </div>
            </SC.SettingsCon>
          </Form>
        )}
      </Formik>
    </SC.AnalyzeConsoleStyled>
  );
};

export default AnalyzeConsole;
