import Footer from "../components/blank/blank";
import PostCard from "../components/card/card";
import FilterBar from "../components/filter/filter";
import Navbar from "../components/navbar/navbar";
import style from "./landing.module.css";

export default function Landing() {
  return (
    <div className={style.dflex}>
        <div className={style.threefourths}>
            <FilterBar></FilterBar>
            <PostCard 
            title="Looking for skilled Mobile Legends Players"
            author="AduG Organization"
            votes={80}
            message="Hi, we are now recruiting for tryouts in our Mobile Legends team. Requirements must be; lorem ipsum lorem lorem ipusm"/>
            <PostCard
            title="Loremwkrwekrwekascv;kmasfgkmrgr fasdfawe fw"
            author="asdfwearfawerawerwea"
            votes={50}
            message="faserawvaowseraowerkaf,asdf"
            />
            </div>
        <div className={style.onefourth}>
            <Footer/>
            <Footer/>
        </div>
    </div>
  );
}
