const Shimmer = () => {
    return (
        <div className="resaturant-list">
            {
                Array(10).fill(null).map((e, index)=> {
                    return (
                        <div className="shimmer" key={index}>
                            <img></img>
                            <h2></h2>
                            <h3></h3>
                            <h3></h3>
                        </div>
                    )
                })
            }
        </div>    
    )
}

export default Shimmer;