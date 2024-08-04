// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { nanoid } from "nanoid";
// import css from "./ContactForm.module.css";

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, "Must be at least 3 characters")
//     .max(50, "Must be less than 50 characters")
//     .required("This field is required"),
//   number: Yup.string()
//     .min(3, "Must be at least 3 characters")
//     .max(50, "Must be less than 50 characters")
//     .required("This field is required"),
// });

// function ContactForm({ onAdd }) {
//   const initialValues = {
//     name: "",
//     number: "",
//   };

//   const handleSubmit = (values, { resetForm }) => {
//     onAdd({ id: nanoid(), name: values.name, number: values.number });
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ isSubmitting }) => (
//         <Form className={css.form}>
//           <div className={css.group}>
//             <label className={css.label}>Name</label>
//             <Field type="text" name="name" className={css.input} />
//             <ErrorMessage name="name" component="div" className={css.error} />
//           </div>
//           <div className={css.group}>
//             <label className={css.label}>Number</label>
//             <Field type="text" name="number" className={css.input} />
//             <ErrorMessage name="number" component="div" className={css.error} />
//           </div>
//           <button type="submit" disabled={isSubmitting}>
//             Add Contact
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// }
// export default ContactForm;
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be less than 50 characters")
    .required("This field is required"),
  number: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be less than 50 characters")
    .required("This field is required"),
});

export default function ContactForm({ onAdd }) {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    onAdd({ id: nanoid(), name: values.name, number: values.number });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.group}>
            <label className={css.label}>Name</label>
            <Field type="text" name="name" className={css.input} />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div className={css.group}>
            <label className={css.label}>Number</label>
            <Field type="text" name="number" className={css.input} />
            <ErrorMessage name="number" component="div" className={css.error} />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
