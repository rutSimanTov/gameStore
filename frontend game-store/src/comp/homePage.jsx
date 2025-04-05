import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGame } from "../axios/gameAxios";
import { addToCart, loadCategory, loadGame } from "../redux/shopeAction";
import { getAllCategory } from "../axios/categoryAxios";

export const HomePage = () => {
    const listG = useSelector(x => x.GameReducer.listGame);
    const listc = useSelector(x => x.CategoryReducer.listCategory);
    const dispatch = useDispatch();
    const [expandedGameIds, setExpandedGameIds] = useState([]);
    const [sortListG, setSortListG] = useState(listG);

    useEffect(() => {
        if (listc.length === 0) {
            getAllCategory()
                .then((x) => dispatch(loadCategory(x.data)))
                .catch(console.log);
        }
    }, [listc, dispatch]);

    useEffect(() => {
        if (listG.length === 0) {
            getAllGame()
                .then(x => dispatch(loadGame(x.data)))
                .catch(console.log);
        } else {
            setSortListG(listG); 
        }
    }, [listG, dispatch]);

    return (
        <div className="container mt-5">
            <h2 className="text-center text-primary mb-4" >Kids Games</h2>
            <label htmlFor="sortOptions" className="form-label">Choose Category:</label>
            <select 
                id="sortOptions" 
                className="form-select mb-4" 
                onChange={(e) => {
                    const value = e.target.value;
                    if (value === "all") {
                        setSortListG(listG);
                    } else {
                        setSortListG(listG.filter(g => g.categoryCode === value));
                    }
                }}
            >
                <option value="all">All</option>
                {listc.map((c, i) => (
                    <option key={i} value={c._id}>{c.name}</option>
                ))}
            </select>
            <div className="row justify-content-center">
                {sortListG.map((g, i) => (
                    <div key={i} className="col-md-4 mb-4">
                        <div className="card shadow border border-warning" style={{ borderRadius: '15px' }}>
                            <div className="card-body text-center">
                                <h5 className="card-title text-turquoise">{g.name}</h5>
                                <p className="card-text text-info">Price: ₪{g.price}</p>
                                <div style={{ maxHeight: expandedGameIds.includes(g._id) ? '300px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                                    {expandedGameIds.includes(g._id) && (
                                        <div>
                                            <img style={{ width: "50%", borderRadius: '10px' }} src={`http://localhost:8080/${g.img}`} alt={g.name} />
                                            <p className="text-muted">Code: {g._id}</p>
                                            <p className="text-success">Remaining: {g.amount} in stock</p>
                                        </div>
                                    )}
                                </div>
                                <button className="btn btn-outline-warning me-2" onClick={() => {
                                    setExpandedGameIds(prev => prev.includes(g._id) ? prev.filter(id => id !== g._id) : [...prev, g._id]);
                                }}>
                                    {expandedGameIds.includes(g._id) ? "Hide Details" : "Show Details"}
                                </button>
                                <button className="btn btn-primary" onClick={() => dispatch(addToCart(g))}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}