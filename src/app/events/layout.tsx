export default function ({ children }: Readonly<{
    children: React.ReactNode;
  }>){

    return(
        <div>
            <div style={{marginTop:"50px", background: "blue",padding:"20px",borderRadius:"10px"}}>
            {children}
            </div>


            <div>layouts</div>


        </div>
        
        
       
       
    );



}