import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import schema from './validation/schema';
import useStore from '../store/useStore';
const validate = (values) => {
  try {
    schema.parse(values);
    return {};
  } catch (err) {
    return err.formErrors.fieldErrors;
  }
};

const ApplicationForm = () => {
    const { submittedData, isSubmitted, submitApplication, reset } = useStore();
  
    const handleSubmit = (values) => {
      submitApplication(values);
    };
  
    if (isSubmitted) {
      return (
        <div className='container'>
            <div className="confirmation-screen">
            <h1>Confirmation</h1>
            <p>Your application has been submitted successfully!</p>
            <h2>Submitted Details:</h2>
            <ul>
                <li><strong>Name:</strong> {submittedData.name}</li>
                <li><strong>Email:</strong> {submittedData.email}</li>
                <li><strong>Program of Study:</strong> {submittedData.programOfStudy}</li>
                <li><strong>Phone Number:</strong> {submittedData.phoneNumber}</li>
            </ul>
            <button onClick={() => { reset(); }} className="btn btn-secondary">
                Submit Another Application
            </button>
            </div>
        </div>
      );
    }
  
    return (
      <div className="application-form">
        <h1>Application Form</h1>
        <Formik
          initialValues={{
            name: '',
            email: '',
            programOfStudy: '',
            phoneNumber: '',
          }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <Field type="text" name="name" className="form-control" />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Field type="email" name="email" className="form-control" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div className="form-group">
                <label htmlFor="programOfStudy">Program of Study:</label>
                <Field type="text" name="programOfStudy" className="form-control" />
                <ErrorMessage name="programOfStudy" component="div" className="text-danger" />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <Field type="text" name="phoneNumber" className="form-control" />
                <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  };

export default ApplicationForm;
