
import Navbar from './components/navbar/navbar'
import PostCard from './components/navbar/card/card'
import FilterBar from './components/navbar/filter/filter'

export default function Home() {
  return (

    <div>
      <div>
        <Navbar />
      </div>

      <div>
      <FilterBar/>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <blank/>
    </div>


    </div>
    
  )
}
