import '../App.css';
import Image from '../assets/image1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home(){
    return(
        <>
        <h1 className='heading'>Home Component</h1>
        <div className="card" >
  <img src={Image} className="card-img-top" alt="image not found"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </>
    )
}
export default Home;