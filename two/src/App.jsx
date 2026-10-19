import './App.css'
import ProductCard from './components/ProductCard'
import { data } from './data/data'


function App() {

  return (
    <div className='container'>

      {
        data.map((item) => (
          <ProductCard
            key={item.id}
            image={item.thumbnail}
            title={item.title}
            price={item.price}
            rating={item.rating}
            category={item.category}
            stock={item.stock}
          />
        ))
      }

      

    </div>
  )
}

export default App