


const BookForm = () => {
    const initialValues = {
      title: '',
      author: '',
      isbn: '',
    };
  
    const handleSubmit = async (values, { resetForm }) => {
      try {
        // Replace 'http://localhost:3001' with your API URL
        const response = await axios.post('https://www.abibliadigital.com.br/en', values);
        console.log('Book added:', response.data.book);
        resetForm(); // Reset the form after successful submission
      } catch (error) {
        console.error('Error adding book:', error);
      }
    };
  
    return (
      <div>
        <h2>Add Book</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label>Title</label>
                <Field type="text" name="title" />
                <ErrorMessage name="title" component="div" className="error" />
              </div>
              <div>
                <label>Author</label>
                <Field type="text" name="author" />
                <ErrorMessage name="author" component="div" className="error" />
              </div>
              <div>
                <label>ISBN</label>
                <Field type="text" name="isbn" />
                <ErrorMessage name="isbn" component="div" className="error" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  };


  export default BookForm