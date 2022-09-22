import "./index.scss";

export default function Article({ article }) {
    return (
        <a target="_blank" href={ article.url } className="article">
            <div>
              {
                article.image === null ?
                "Sin imagen" :
                <img src={ article.image } alt="" />
              }
              <h2>{ article.title }</h2>
              <p dangerouslySetInnerHTML={{__html: article.description }}></p>
              <p>{ new Intl.DateTimeFormat('es-ES').format(new Date(article.published_at)) }</p>
            </div>
        </a>
    )
}