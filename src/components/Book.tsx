import React,{useState} from "react";
import ViewDetails from "./ViewDetails";

interface FormValue{
  title:string;
  author:string;
  price:string
}

export interface Books {
  id:number;
  title: string,
  author: string;
  price: string
}

const Book=()=>{
  const [book, setBook] = useState<Books[]>([]);
  const [formData, setForm] = useState<FormValue>({
    title:"",
    author:"",
    price:""
  })

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    const {title,author,price} = formData
    // setBooks([

    // ])

  }

  const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setFormValue({
      ...formValue,
      [name]:value
    });

  }
    return (
        <div>
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <label htmlFor="">title</label>
                <input type="text" name="title" onChange={handleChange}/>
                <label htmlFor="">author</label>
                <input type="text" name="author" onChange={handleChange}/>
                <label htmlFor="">price</label>
                <input type="text" name="price" onChange={handleChange}/>
                <button type="submit">Add</button>
                {/* <button type="submit">Update</button> */}
                
              </form>
            </div>
            <ViewDetails />
        </div>
    )
}
export default Book;