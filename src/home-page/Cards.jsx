export default function Card({name,title,children}){
    return(
        <article className="card">
        
        <h2>{name}</h2>
     
        <i>{title}</i>

        {children}
        
   
        </article>
        
        )
    
    
}