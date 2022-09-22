import axios from "axios";
import { useEffect, useState } from "react";
import Article from "../Article";
import "./index.scss";

export default function Articles() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const fetchNews = async () => {
        const fetchedNews = await axios.get("http://api.mediastack.com/v1/news?access_key=1171a2d68878d4852c2937ab582b1a69&languages=es&countries=es&offset=" + offset);
        setNews(fetchedNews.data.data);
        setLoading(false);
        console.log(fetchedNews.data);
        }

        fetchNews();
    }, [offset])

    const updateNews = () => {
        setOffset(offset + 25);
    }

    return (
        <>
            <button onClick={ updateNews }>Recargar con otras noticias</button>

            <div className="articles">
                {
                    loading && "Loading..."
                }
                <div className="articles">
                {
                    news.map((n, i) => {
                    return <Article article={ n } key={ i } />
                    })
                }
                </div>
            </div>
        </>
    )
}