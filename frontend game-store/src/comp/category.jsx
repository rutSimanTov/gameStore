import { useEffect, useState } from "react";
import { addCategory, getAllCategory, removeCategory, updateCategory } from "../axios/categoryAxios";
import { useDispatch, useSelector } from "react-redux";
import { loadCategory } from "../redux/shopeAction";
import { useNavigate } from "react-router-dom";

export const Category = () => {
    let listc = useSelector(x => x.CategoryReducer.listCategory);
    let myd = useDispatch();
    // let nav=useNavigate()
    const [cat, setCat] = useState(null);
    const [add, setAdd] = useState(false);

    useEffect(() => {
        if (listc != null && listc.length === 0) {
            getAllCategory()
                .then((x) => myd(loadCategory(x.data)))
                .catch((err) => console.log(err));
        }
    }, []);

    return (
        <div className="container mt-5" style={{ padding: "20px", backgroundColor: "#ffffff", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 123, 255, 0.5)" }}>
            <h2 className="text-center mb-4" style={{ color: '#ffab40', fontFamily: 'Arial, sans-serif' }}>🎮 Game Categories</h2>
            <table className="table table-hover table-bordered table-striped shadow-lg">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th colSpan="2" className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listc.map((c, i) => (
                        <tr key={i} className="table-light">
                            <td>{c._id}</td>
                            <td>{c.name}</td>
                            <td>
                                <button className="btn" style={{ backgroundColor: "#007bff", color: "white" }} onClick={() =>{ setCat(c)}}>Update</button>
                                {/* ;nav(`./AddUpdateCategories`,{state:{addc:false,category:c}}) */}
                            </td>
                            <td>
                                <button className="btn" style={{ backgroundColor: "#00BFFF", color: "white" }} onClick={() => removeCategory(c._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn" style={{ backgroundColor: "#007bff", color: "white", marginTop: "10px" }} onClick={() => { setAdd(true); setCat(null)}}>Add Category</button>
            {/* ; nav(`./AddUpdateCategories`, { state: { addc: true, category: null } })  */}

            {(cat || add) && <div className="mt-3">
                <input 
                    placeholder="Category name" 
                    value={cat ? cat.name : ''}
                    onChange={(e) => setCat({ ...cat, name: e.target.value })}
                    className="form-control mb-2" 
                />
                <button 
                    className="btn" 
                    style={{ backgroundColor: "#007bff", color: "white" }}
                    onClick={() => (add ? addCategory(cat).then(() => { setCat(null); setAdd(false); })
                        : updateCategory(cat._id, cat).then(() => setCat(null)))}
                >
                    {add ? "Add Category" : "Update Category"}
                </button>
            </div>}
        </div>
    );
}