import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';



export default function InfoBox({info}){
    let styles = {
        display: "flex",
        justifyContent: "center"
    };
    const INIT_URL = "https://images.unsplash.com/photo-1609931029597-245a6b667e24?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    const HOT_URL = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL ="https://images.unsplash.com/photo-1603726574752-a85dc808deab?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL = "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2265&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
    <>
        <div className="InfoBox">
            <br></br>
        
        <div className='card-container' style={styles}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image = {info.humidity >80 ? RAIN_URL : info.temp >15 ? HOT_URL : COLD_URL}
        title="green iguana"
        />
        <CardContent> 
        <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity >80 ? < ThunderstormIcon/> : info.temp >15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            <div>Temperature = {info.temp}&deg;C</div>
            <br></br>
            <div>Humidity = {info.humidity}</div>
            <br></br>
            <div>Min Temp = {info.tempMin}</div>
            <br></br>
            <div>Max Temp = {info.tempMax}</div>
            <br></br>
            <div>The Weather can be described as <i>{info.weather}</i> and feels like = {info.feels_Like}&deg;C</div>
        </Typography>
        </CardContent>
</Card>
</div>
</div>
</>
    );
}