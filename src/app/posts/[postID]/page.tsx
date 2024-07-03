
export default async function postdetailspage(props:any){

    const postID = props.params.postID

    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`  ,
        {
            //cache: 'no-store'   //SSR (server side rendering)
            //cache: 'force-cache' //SSG (Static Site Generation)
            next:{revalidate : 120} // number of the seconds will be cashed}     //ISR (incremental server rendering)

        
        });
        const post = await result.json();


    console.log("params:",props.params.postID);

        return(
            <div >
                <h1>post details</h1>
                <div style={{marginTop:"50px", background: "pink",padding:"20px",borderRadius:"10px", }}>

               
                <h2>userid : {post.userId}</h2>
                <h2>post id : {post.id}</h2>
                <h2>title : {post.title}</h2>
                <h2>body : {post.body}</h2>

                </div>

            </div>
        )



}