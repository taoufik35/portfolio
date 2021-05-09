
function Article(props) {
    return(
        <div>
            <div className="card" style="width: 18rem;"key={props.index}>
                    <img>{props.index}</img>
                 <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        {props.index}
                </div>
                
            </div>
        </div>
    )
}

export default Article;