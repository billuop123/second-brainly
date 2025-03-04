import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  interface Cardprops{
    type: "twitter" | "youtube";
    link :string;
    title :string;
    tags :string;
  }
  export function CustomCard({type,link,title,tags}:Cardprops){
    return <Card className="min-h-48">
  <CardHeader>
    <CardTitle>{title}</CardTitle>
    <CardDescription><a href={link} target="_blank">Click here</a></CardDescription>
  </CardHeader>
  
  
  <CardContent className="w-96">
    {type==="youtube"?<iframe  src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>:<blockquote className="twitter-tweet">
  <a href={link.replace("x.com","twitter.com")}></a> 
</blockquote>}

  </CardContent>
  <CardFooter>
    <p>{tags}</p>
  </CardFooter>
</Card>}
