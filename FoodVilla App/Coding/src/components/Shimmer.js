const Shimmer = () => {
    return (
        <div class="resaturant-list">
            {
                Array(10).fill(null).map((e)=> {
                    return (
                        <div className="shimmer">
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