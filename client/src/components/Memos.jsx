import { useState, useEffect } from "react";
import "./Memos.css";

const Memos = ({ state }) => {
    const [memos, setMemos] = useState([]);
    const { contract } = state;

    useEffect(() => {
        const memosMessage = async () => {
            const memos = await contract.getMemos();
            setMemos(memos);
        }
        contract && memosMessage();
    }, [contract]);

    return (
        <div className="memos-container">
            <h3>Messages</h3>           
            <table className="memos-table">
                <tbody>
                    {memos.map((memo, index) => (
                        <tr key={index}>
                            <td className="name-column">{memo.name}</td>
                            <td className="timestamp-column">
                                {new Date(memo.timestamp * 1000).toLocaleString()}
                            </td>
                            <td className="message-column">{memo.message}</td>
                            <td className="from-column">{memo.from}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Memos;