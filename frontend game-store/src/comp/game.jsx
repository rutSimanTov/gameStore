import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGame, getAllGame, removeGame, updateGame } from "../axios/gameAxios";
import { loadCategory, loadGame } from "../redux/shopeAction";
import { getAllCategory } from "../axios/categoryAxios";

export const Game = () => {
    let listGm = useSelector(x => x.GameReducer.listGame);
    const listc = useSelector(x => x.CategoryReducer.listCategory);
    let myd = useDispatch();
    const [game, setGame] = useState(null);
    const [add, setAdd] = useState(false);

    useEffect(() => {
        if (listGm != null && listGm.length === 0) {
            getAllGame()
                .then((x) => myd(loadGame(x.data)))
                .catch((err) => console.log(err));
        }
    }, [listGm, myd]);

     useEffect(() => {
            if (listc != null && listc.length === 0) {
                getAllCategory()
                    .then((x) => myd(loadCategory(x.data)))
                    .catch((err) => console.log(err));
            }
        }, []);

        

    return (
        <div className="container mt-5" style={{ padding: "20px", backgroundColor: "#ffffff", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 123, 255, 0.5)" }}>
            <h2 className="text-center mb-4" style={{ color: '#ffab40', fontFamily: 'Arial, sans-serif' }}>Game List</h2>
            <table className="table table-striped table-hover shadow-lg">
                <thead>
                    <tr>
                        <th>Game Name</th>
                        <th>Product Code</th>
                        <th>Category Code</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {listGm.map((g, i) => (
                        <tr key={i}>
                            <td>{g.name}</td>
                            <td>{g._id}</td>
                            <td>{g.categoryCode}</td>
                            <td>₪{g.price}</td>
                            <td><img src={`http://localhost:8080/${g.img}`} alt={g.name} style={{ width: "50px" }} /></td>
                            <td>{g.amount}</td>
                            <td>
                                <button className="btn" style={{ backgroundColor: "#007bff", color: "white" }} onClick={() => setGame(g)}>Update</button>
                            </td>
                            <td>
                                <button className="btn" style={{ backgroundColor: "#00BFFF", color: "white" }} onClick={() => removeGame(g._id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-center">
                <button className="btn" style={{ backgroundColor: "#007bff", color: "white", marginTop: "10px" }} onClick={() => { setAdd(true); setGame(null) }}>Add Game</button>
            </div>
            {(add || game) && <div>
                <input 
                    placeholder="Name" 
                    value={game ? game.name : ''}
                    onChange={(e) => setGame({ ...game, name: e.target.value })}
                    className="form-control mb-2" 
                />
                <input 
                    placeholder="Image Name" 
                    value={game ? game.img : ''}
                    onChange={(e) => setGame({ ...game, img: e.target.value })}
                    className="form-control mb-2" 
                />
                <input 
                    placeholder="Price" 
                    value={game ? game.price : ''}
                    onChange={(e) => setGame({ ...game, price: e.target.value })}
                    className="form-control mb-2" 
                />
                 <input 
                    placeholder="Quantity" 
                    value={game ? game.amount : ''}
                    onChange={(e) => setGame({ ...game, amount: e.target.value })}
                    className="form-control mb-2" 
                />
                     
            <select 
                id="sortOptions" 
                className="form-select mb-4" 
                value={game ? game.categoryCode : ''}
                onChange={(e) => setGame({ ...game, categoryCode: e.target.value })}
            >
               
                {listc.map((c, i) => (
                    <option key={i} value={c._id}>{c.name}</option>
                ))}
            </select>
               
                <button 
                    className="btn" 
                    style={{ backgroundColor: "#007bff", color: "white" }}
                    onClick={() => (add ? addGame(game).then(() => { setGame(null); setAdd(false); })
                        : updateGame(game._id, game).then(() => setGame(null)))}
                >
                    {add ? "Add Game" : "Update Game"}
                </button>
                {/* ----------- */}
          
                {/* ----------- */}
            </div>}
        </div>
    );
}