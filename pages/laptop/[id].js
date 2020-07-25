import Laptop from '../../components/Laptop';
import LaptopDescription from '../../components/LaptopDescription';
import Navbar from '../../components/Navbar';
import * as data from '../../api-sample.json';

const LaptopContainer = ({ laptop }) => {

  const {
    name,
    brand,
    cpu,
    gpu,
    os,
    resolution,
    ram,
    screen,
    ssd,
    storage,
    weight
  } = laptop;

  const desc = {
    name,
    brand,
    cpu,
    gpu,
    os,
    resolution,
    ram,
    screen,
    ssd,
    storage,
    weight
  }

  return (
    <div className="laptop-container w-full">
      <Navbar />
      <Laptop laptop={laptop} />
      <LaptopDescription items={desc} />
    </div>
  );
};

export async function getStaticPaths() {
  const res = data.default.laptops;
  const paths = res.map((laptop) => ({ params: { id: laptop.id } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  
  
  const res = data.default.laptops.filter(laptop => laptop.id === params.id)[0];
  const laptop = {
    id: res.id,
    name: res.name,
    brand: res.att_brand,
    cpu: res.att_cpu_details ? res.att_cpu_details : "no details",
    image: res.image,
    price: res.price,
    gpu: res.att_gpu,
    os: res.att_os,
    resolution: res.att_pixels_x + "x" + res.att_pixels_y,
    ram: res.att_ram + "GB",
    screen: res.att_screen_size + '"',
    ssd: 0 ? undefined : res.att_ssd + "GB",
    storage: res.att_storage + "GB",
    weight: res.att_weight + " kg",
  };

  console.log(laptop)

  return {
    props: { laptop },
  };
}

export default LaptopContainer;
