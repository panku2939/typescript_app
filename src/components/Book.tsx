import React, { useState } from 'react';
import ViewDetails from './ViewDetails';

interface FormValue {
  title: string;
  author: string;
  price: string; 
}

interface Book extends FormValue {
  id: number;
}

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [formValue, setFormValue] = useState<FormValue>({
    title: "",
    author: "",
    price: "" 
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, author, price } = formValue;
    setBooks([
      ...books,
      { id: Math.random(), title: title, author: author, price: price }
    ]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  return (
    <div>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <label>title</label>
          <input onChange={handleChange} value={formValue.title} type="text" name="title" />
          <label>Author</label>
          <input onChange={handleChange} value={formValue.author} type="text" name="author" />
          <label>price</label>
          <input onChange={handleChange} value={formValue.price} type="text" name="price" />

          <button type="submit">
            Add
          </button>
          {/* <button type="submit">
            Update
          </button> */}
        </form>
      </div>
      <ViewDetails books={books} />
    </div>
  );
};

export default Books;