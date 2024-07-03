export default async function  EventsTitle(  props: any  ) {

 


    const result = await fetch(`https://jsonplaceholder.typicode.com/posts`  ,
        {
            //cache: 'no-store'   //SSR (server side rendering)
            //cache: 'force-cache' //SSG (Static Site Generation)
            next:{revalidate : 120} // number of the seconds will be cashed}     //ISR (incremental server rendering)


        }
    
    )
    const posts = await result.json();
    console.log(posts);

    const postsJSX = posts.map((post : any)=>{
        return (
           
            <div style={{marginTop:"50px", background: "gold",padding:"20px",borderRadius:"10px"}}>
                
                <h1> {post.title}</h1>
                <h3>
                {post.body}
                </h3>
            </div>
        )
    })



    console.log(props);
    return (
        <div>
            <h1>Title Page</h1>
            <div>
                {postsJSX}
            </div>
           



        </div>
    );
}
